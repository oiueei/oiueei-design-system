import { debounce } from 'lodash';

import {
  FilterFunction,
  Option,
  SearchFunction,
  SearchResult,
  SelectData,
  SelectDataHandlers,
  SelectMetaData,
} from './types';
import { ChangeEvent, ChangeHandler, DataHandlers } from '../dataProvider/DataContext';
import {
  updateOptionInGroup,
  clearAllSelectedOptions,
  propsToGroups,
  getSelectedOptions,
  updateGroupLabelAndOptions,
  filterOptions,
  mergeSearchResultsToCurrent,
  addOrUpdateScreenReaderNotificationByType,
  createScreenReaderNotification,
  createMetaDataAfterSelectionChange,
} from './utils';
import {
  EventId,
  eventIds,
  EventType,
  eventTypes,
  isClearOptionsClickEvent,
  isCloseEvent,
  isCloseOnFocusMoveEvent,
  isFilterChangeEvent,
  isGenericBlurEvent,
  isGroupClickEvent,
  isOpenOrCloseEvent,
  isOptionClickEvent,
  isOutsideClickEvent,
  isSearchChangeEvent,
  isSearchSuccessEvent,
  isSearchErrorEvent,
  isShowAllClickEvent,
  isRemoveTagEventId,
} from './events';
import { appendTexts, getNumberedVariationsTextKey, getTextKey } from './texts';

const MIN_USER_INTERACTION_TIME_IN_MS = 200;

const dataUpdater = (
  event: ChangeEvent,
  dataHandlers: SelectDataHandlers,
): { didSearchChange: boolean; didSelectionsChange: boolean; didDataChange: boolean } => {
  const { id, type, payload } = event as ChangeEvent<EventId, EventType>;
  const current = dataHandlers.getData();
  const returnValue = {
    didSearchChange: false,
    didSelectionsChange: false,
    didDataChange: false,
  };
  if (current.disabled) {
    return returnValue;
  }
  const openOrClose = (open: boolean) => {
    if (current.open === open) {
      return false;
    }
    const now = Date.now();
    if (now - dataHandlers.getMetaData().lastToggleCommand < MIN_USER_INTERACTION_TIME_IN_MS) {
      return false;
    }
    dataHandlers.updateData({ open });
    dataHandlers.updateMetaData({ lastToggleCommand: now });
    if (!open) {
      dataHandlers.updateMetaData({ activeDescendant: undefined });
    }
    return true;
  };

  const setFocusTarget = (focusTarget: SelectMetaData['focusTarget']) => {
    dataHandlers.updateMetaData({
      focusTarget,
    });
  };

  const updateGroups = (groups: SelectData['groups'], clickedOption?: Option) => {
    dataHandlers.updateData({ groups });
    dataHandlers.updateMetaData(
      createMetaDataAfterSelectionChange(groups, dataHandlers.getMetaData().selectedOptions, clickedOption),
    );
  };

  if (isOpenOrCloseEvent(id, type)) {
    const willOpen = !current.open;
    const didUpdate = openOrClose(willOpen);
    if (didUpdate && willOpen) {
      setFocusTarget(dataHandlers.getMetaData().listInputType ? 'searchOrFilterInput' : 'list');
    }
    return {
      ...returnValue,
      didDataChange: didUpdate,
    };
  }

  if (isOptionClickEvent(id, type)) {
    const clickedOption = payload && (payload.value as Option);
    if (!clickedOption) {
      return returnValue;
    }
    const newGroups = updateOptionInGroup(
      current.groups,
      {
        ...clickedOption,
        selected: !clickedOption.selected,
      },
      current.multiSelect,
    );
    updateGroups(newGroups, clickedOption);
    openOrClose(id !== eventIds.tag && current.multiSelect);
    if (id === eventIds.listItem && !current.multiSelect) {
      setFocusTarget('button');
    } else if (isRemoveTagEventId(id)) {
      const currentMetaData = dataHandlers.getMetaData();
      const remainingOptions = currentMetaData.selectedOptions.length;
      const hasSelectedItems = !!remainingOptions;
      setFocusTarget(hasSelectedItems ? 'tag' : 'button');
      const removalText = getTextKey('tagRemoved', currentMetaData, {
        value: clickedOption.label,
      });
      const currentCountText = getNumberedVariationsTextKey('tagsRemaining', currentMetaData, 'selectionCount');
      const notification = createScreenReaderNotification(eventIds.tag, `${removalText} ${currentCountText}`);

      addOrUpdateScreenReaderNotificationByType(notification, dataHandlers);
    }
    return {
      ...returnValue,
      didSelectionsChange: true,
      didDataChange: true,
    };
  }

  // Note: single select group labels do not emit events
  // so multiSelect is not checked.
  if (isGroupClickEvent(id, type)) {
    const clickedOption = payload && (payload.value as Option);
    if (!clickedOption) {
      return returnValue;
    }
    // add to docs that the clicked option is updated before onChange
    const updatedOption = {
      ...clickedOption,
      selected: !clickedOption.selected,
    };
    const newGroups = updateGroupLabelAndOptions(current.groups, updatedOption);
    updateGroups(newGroups, clickedOption);
    return {
      ...returnValue,
      didSelectionsChange: true,
      didDataChange: true,
    };
  }

  if (isClearOptionsClickEvent(id, type)) {
    const newGroups = clearAllSelectedOptions(current.groups);
    updateGroups(newGroups);
    setFocusTarget('button');
    return {
      ...returnValue,
      didSelectionsChange: true,
      didDataChange: true,
    };
  }

  if (isFilterChangeEvent(id, type)) {
    const filterValue = (payload && (payload.value as string)) || '';
    dataHandlers.updateMetaData({ filter: filterValue });
    dataHandlers.updateData({
      groups: filterOptions(current.groups, filterValue, current.filterFunction as FilterFunction),
    });
    return {
      ...returnValue,
      didDataChange: true,
    };
  }

  if (isShowAllClickEvent(id, type)) {
    const { showAllTags } = dataHandlers.getMetaData();
    dataHandlers.updateMetaData({ showAllTags: !showAllTags });
    if (!showAllTags) {
      // when "Show all" was clicked, move focus to #1 tag
      setFocusTarget('tag');
    } else {
      // when "Show less" was clicked, tell screen reader some tag are hidden
      const notification = createScreenReaderNotification(
        eventIds.tag,
        getTextKey('tagsPartiallyHidden', dataHandlers.getMetaData()) as string,
      );

      addOrUpdateScreenReaderNotificationByType(notification, dataHandlers);
    }
    return {
      ...returnValue,
      didDataChange: true,
    };
  }

  if (isOutsideClickEvent(id, type) || isCloseEvent(id, type)) {
    if (openOrClose(false)) {
      setFocusTarget('button');
      return {
        ...returnValue,
        didDataChange: true,
      };
    }
  }

  if (isCloseOnFocusMoveEvent(id, type) && current.open) {
    return {
      ...returnValue,
      didDataChange: openOrClose(false),
    };
  }

  if (isSearchSuccessEvent(id, type)) {
    dataHandlers.updateMetaData({ isSearching: false, hasSearchError: false });
    dataHandlers.updateData({
      groups: mergeSearchResultsToCurrent(payload?.value as SearchResult, current.groups),
    });

    return {
      ...returnValue,
      didDataChange: true,
    };
  }

  if (isSearchChangeEvent(id, type)) {
    const searchValue = (payload && (payload.value as string)) || '';
    dataHandlers.updateMetaData({ search: searchValue, hasSearchError: false });
    if (!searchValue) {
      dataHandlers.updateData({ groups: mergeSearchResultsToCurrent({}, current.groups) });
    }
    return {
      ...returnValue,
      didSearchChange: true,
      didDataChange: true,
    };
  }

  if (isSearchErrorEvent(id, type)) {
    dataHandlers.updateMetaData({ isSearching: false, hasSearchError: true });
    dataHandlers.updateData({ groups: mergeSearchResultsToCurrent({}, current.groups) });
    return {
      ...returnValue,
      didDataChange: true,
    };
  }
  if (isGenericBlurEvent(id, type) && current.open) {
    return {
      ...returnValue,
      didDataChange: openOrClose(false),
    };
  }
  return returnValue;
};

// payload in resolve() will be triggered to the dataUpdater as an event
// also errors are resolved, so there is no extra need for catching.
const executeSearch = (
  searchFunc: SearchFunction,
  search: string,
  selectedOptions: SelectMetaData['selectedOptions'],
  data: SelectData,
): [() => void, Promise<ChangeEvent>] => {
  let isCancelled = false;
  const request = new Promise<ChangeEvent>((resolve) => {
    searchFunc(search as string, selectedOptions, data)
      .then((res) => {
        if (isCancelled) {
          resolve({ id: eventIds.searchResult, type: eventTypes.cancelled });
        } else {
          resolve({ id: eventIds.searchResult, type: eventTypes.success, payload: { value: res } });
        }
      })
      .catch(() => {
        resolve({ id: eventIds.searchResult, type: eventTypes.error });
      });
  });
  const cancel = () => {
    isCancelled = true;
  };
  return [cancel, request];
};

const debouncedSearch = debounce(
  (dataHandlers: DataHandlers<SelectData, SelectMetaData>, searchFunc?: SearchFunction) => {
    if (!searchFunc) {
      return;
    }
    const { cancelCurrentSearch, search, selectedOptions } = dataHandlers.getMetaData();
    if (cancelCurrentSearch) {
      cancelCurrentSearch();
    }
    if (!search) {
      return;
    }
    const [cancel, request] = executeSearch(searchFunc, search, selectedOptions, dataHandlers.getData());
    dataHandlers.updateMetaData({ cancelCurrentSearch: cancel });
    // dataHandler will listen to the promise and trigger an event when promise fulfills:
    dataHandlers.asyncRequestWithTrigger(request);
  },
  300,
);

export const changeHandler: ChangeHandler<SelectData, SelectMetaData> = (event, dataHandlers): boolean => {
  const { updateData, updateMetaData, getData, getMetaData } = dataHandlers;
  const { onSearch, onChange } = getData();
  const { didSearchChange, didSelectionsChange, didDataChange } = dataUpdater(event, dataHandlers);

  if (didSearchChange && onSearch) {
    dataHandlers.updateMetaData({ isSearching: !!getMetaData().search });
    debouncedSearch(dataHandlers, onSearch);
  }
  if (didSelectionsChange) {
    const current = getData();
    const { lastClickedOption } = getMetaData();
    const newProps = onChange(getSelectedOptions(current.groups), lastClickedOption as Option, current);
    let newPropsHasChanges = false;
    if (newProps) {
      const { groups, options, invalid, texts } = newProps;
      if (groups || options) {
        const newGroups = propsToGroups(newProps) || [];
        updateData({ groups: newGroups });
        updateMetaData(
          createMetaDataAfterSelectionChange(newGroups, dataHandlers.getMetaData().selectedOptions, lastClickedOption),
        );
        newPropsHasChanges = true;
      }
      if (invalid !== undefined && invalid !== current.invalid) {
        updateData({ invalid });
        newPropsHasChanges = true;
      }
      if (texts) {
        appendTexts(texts, getMetaData());
        newPropsHasChanges = true;
      }
    }
    if (newPropsHasChanges) {
      return true;
    }
  }

  return didDataChange;
};
