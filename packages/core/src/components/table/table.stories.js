import './table.css';
import * as workTrial from './story-example-work-trial.json';

export default {
  title: 'Components/Table',
  decorators: [(storyFn) => `<div style="max-width: 1200px;">${storyFn()}</div>`],
};

const tableRow = (firstName, surname, age, profession) =>
  `<tr>
    <td>${firstName}</td>
    <td>${surname}</td>
    <td class="hds-table--text-align-right">${age}</td>
    <td>${profession}</td>
  </tr>`

export const Dark = () => `
  <div class="hds-table-container" style="max-width: 785px;" tabindex="0">
    <table class="hds-table hds-table--dark" aria-label="People">
      <tr class="hds-table__header-row">
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Age</th>
        <th scope="col">Profession</th>
      </tr>
      <tbody class="hds-table__content">
        ${tableRow('Lauri', 'Kekkonen', '39', 'Engineer')}
        ${tableRow('Maria', 'Sarasoja', '62', 'Designer')}
        ${tableRow('Anneli', 'Routa', '50', 'Meteorologist')}
        ${tableRow('Osku', 'Rausku', '18', 'Mail carrier')}
      </tbody>
    </table>
   </div>
`;

export const Light = () => `
  <div class="hds-table-container" style="max-width: 785px;" tabindex="0">
    <table class="hds-table hds-table--light" aria-label="People">
      <tr class="hds-table__header-row">
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Age</th>
        <th scope="col">Profession</th>
      </tr>
      <tbody class="hds-table__content">
        ${tableRow('Lauri', 'Kekkonen', '39', 'Engineer')}
        ${tableRow('Maria', 'Sarasoja', '62', 'Designer')}
        ${tableRow('Anneli', 'Routa', '50', 'Meteorologist')}
        ${tableRow('Osku', 'Rausku', '18', 'Mail carrier')}
      </tbody>
    </table>
  </div>
`;

export const Dense = () => `
  <div class="hds-table-container" style="max-width: 785px;" tabindex="0">
    <table class="hds-table hds-table--dark hds-table--dense" aria-label="People">
      <tr class="hds-table__header-row">
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Age</th>
        <th scope="col">Profession</th>
      </tr>
      <tbody class="hds-table__content">
        ${tableRow('Lauri', 'Kekkonen', '39', 'Engineer')}
        ${tableRow('Maria', 'Sarasoja', '62', 'Designer')}
        ${tableRow('Anneli', 'Routa', '50', 'Meteorologist')}
        ${tableRow('Osku', 'Rausku', '18', 'Mail carrier')}
      </tbody>
    </table>
   </div>
`;

export const Zebra = () => `
  <div class="hds-table-container" style="max-width: 785px;" tabindex="0">
    <table class="hds-table hds-table--dark hds-table--zebra" aria-label="People">
      <tr class="hds-table__header-row">
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Age</th>
        <th scope="col">Profession</th>
      </tr>
      <tbody class="hds-table__content">
        ${tableRow('Lauri', 'Kekkonen', '39', 'Engineer')}
        ${tableRow('Maria', 'Sarasoja', '62', 'Designer')}
        ${tableRow('Anneli', 'Routa', '50', 'Meteorologist')}
        ${tableRow('Osku', 'Rausku', '18', 'Mail carrier')}
      </tbody>
    </table>
  </div>
`;

export const VerticalLines = () => `
  <div class="hds-table-container" style="max-width: 785px;" tabindex="0">
    <table class="hds-table hds-table--dark hds-table--with-vertical-lines" aria-label="People">
      <tr class="hds-table__header-row">
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Age</th>
        <th scope="col">Profession</th>
      </tr>
      <tbody class="hds-table__content">
        ${tableRow('Lauri', 'Kekkonen', '39', 'Engineer')}
        ${tableRow('Maria', 'Sarasoja', '62', 'Designer')}
        ${tableRow('Anneli', 'Routa', '50', 'Meteorologist')}
        ${tableRow('Osku', 'Rausku', '18', 'Mail carrier')}
      </tbody>
    </table>
  </div>
`;

export const VerticalLinesZebra = () => `
  <div class="hds-table-container" style="max-width: 785px;" tabindex="0">
    <table class="hds-table hds-table--dark hds-table--zebra hds-table--with-vertical-lines" aria-label="People">
      <tr class="hds-table__header-row">
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Age</th>
        <th scope="col">Profession</th>
      </tr>
      <tbody class="hds-table__content">
        ${tableRow('Lauri', 'Kekkonen', '39', 'Engineer')}
        ${tableRow('Maria', 'Sarasoja', '62', 'Designer')}
        ${tableRow('Anneli', 'Routa', '50', 'Meteorologist')}
        ${tableRow('Osku', 'Rausku', '18', 'Mail carrier')}
      </tbody>
    </table>
  </div>
`;

const unitsContent = () =>
        `<tr>
          <th scope="row">Monday</th>
          <td>324</td>
          <td>562</td>
          <td>280</td>
          <td>94</td>
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          <td>341</td>
          <td>688</td>
          <td>425</td>
          <td>113</td>
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          <td>294</td>
          <td>492</td>
          <td>280</td>
          <td>67</td>
        </tr>
        <tr>
          <th scope="row">Thursday</th>
          <td>312</td>
          <td>501</td>
          <td>455</td>
          <td>112</td>
        </tr>
        <tr>
          <th scope="row">Friday</th>
          <td>150</td>
          <td>142</td>
          <td>362</td>
          <td>455</td>
        </tr>`

export const VerticalHeader = () => `
  <div class="hds-table-container" style="max-width: 486px" tabindex="0">
    <table
      class="hds-table hds-table--dark hds-table--with-vertical-header"
      aria-label="Units sold by weekday"
    >
      <colgroup>
        <col span="1" class="hds-table__vertical-header-column">
      </colgroup>
      <tr class="hds-table__header-row">
        <th></th>
        <th scope="col">8-12</th>
        <th scope="col">12-14</th>
        <th scope="col">14-16</th>
        <th scope="col">16-18</th>
      </tr>
      <tbody class="hds-table__content hds-table__content--text-align-td-right">
        ${unitsContent()}
      </tbody>
    </table>
  </div>
`;

export const VerticalHeaderLight = () => `
  <div class="hds-table-container" style="max-width: 486px" tabindex="0">
    <table
      class="hds-table hds-table--light hds-table--with-vertical-header"
      aria-label="Units sold by weekday"
    >
      <colgroup>
        <col span="1" class="hds-table__vertical-header-column">
      </colgroup>
      <tr class="hds-table__header-row">
        <th></th>
        <th scope="col">8-12</th>
        <th scope="col">12-14</th>
        <th scope="col">14-16</th>
        <th scope="col">16-18</th>
      </tr>
      <tbody class="hds-table__content hds-table__content--text-align-td-right">
        ${unitsContent()}
      </tbody>
    </table>
  </div>
`;

export const VerticalHeaderZebra = () => `
  <div class="hds-table-container" style="max-width: 486px" tabindex="0">
    <table
      class="hds-table hds-table--dark hds-table--zebra hds-table--with-vertical-header"
      aria-label="Units sold by weekday"
    >
      <colgroup>
        <col span="1" class="hds-table__vertical-header-column">
      </colgroup>
      <tr class="hds-table__header-row">
        <th></th>
        <th scope="col">8-12</th>
        <th scope="col">12-14</th>
        <th scope="col">14-16</th>
        <th scope="col">16-18</th>
      </tr>
      <tbody class="hds-table__content hds-table__content--text-align-td-right">
        ${unitsContent()}
      </tbody>
    </table>
  </div>
`;

export const VerticalHeaderAndLines = () => `
  <div class="hds-table-container" style="max-width: 486px" tabindex="0">
    <table
      class="hds-table hds-table--dark hds-table--with-vertical-header hds-table--with-vertical-lines"
      aria-label="Units sold by weekday"
    >
      <colgroup>
        <col span="1" class="hds-table__vertical-header-column">
      </colgroup>
      <tr class="hds-table__header-row">
        <th></th>
        <th scope="col">8-12</th>
        <th scope="col">12-14</th>
        <th scope="col">14-16</th>
        <th scope="col">16-18</th>
      </tr>
      <tbody class="hds-table__content hds-table__content--text-align-td-right">
        ${unitsContent()}
      </tbody>
    </table>
  </div>
`;

export const VerticalHeaderAndLinesZebra = () => `
  <div class="hds-table-container" style="max-width: 486px" tabindex="0">
    <table
      class="hds-table hds-table--dark hds-table--zebra hds-table--with-vertical-lines hds-table--with-vertical-header"
      aria-label="Units sold by weekday"
    >
      <colgroup>
        <col span="1" class="hds-table__vertical-header-column">
      </colgroup>
      <tr class="hds-table__header-row">
        <th></th>
        <th scope="col">8-12</th>
        <th scope="col">12-14</th>
        <th scope="col">14-16</th>
        <th scope="col">16-18</th>
      </tr>
      <tbody class="hds-table__content hds-table__content--text-align-td-right">
        ${unitsContent()}
      </tbody>
    </table>
  </div>
`;

export const CustomHeaderBackgroundColorForDarkVariant = () => `
  <style type="text/css">
    .custom-background-color-1 {
      --background-color: var(--color-tram);
    }
  </style>
  <div class="hds-table-container" tabindex="0">
    <table class="hds-table hds-table--dark custom-background-color-1" aria-label="People">
      <tr class="hds-table__header-row">
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Age</th>
        <th scope="col">Profession</th>
      </tr>
      <tbody class="hds-table__content">
        ${tableRow('Lauri', 'Kekkonen', '39', 'Engineer')}
        ${tableRow('Maria', 'Sarasoja', '62', 'Designer')}
        ${tableRow('Anneli', 'Routa', '50', 'Meteorologist')}
        ${tableRow('Osku', 'Rausku', '18', 'Mail carrier')}
      </tbody>
    </table>
   </div>
`;

export const CustomHeaderBackgroundColorForLightVariant = () => `
  <style type="text/css">
    .custom-background-color-2 {
      --background-color: var(--color-suomenlinna);
    }
  </style>
  <div class="hds-table-container" tabindex="0">
    <table class="hds-table hds-table--light custom-background-color-2" aria-label="People">
      <tr class="hds-table__header-row">
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Age</th>
        <th scope="col">Profession</th>
      </tr>
      <tbody class="hds-table__content">
        ${tableRow('Lauri', 'Kekkonen', '39', 'Engineer')}
        ${tableRow('Maria', 'Sarasoja', '62', 'Designer')}
        ${tableRow('Anneli', 'Routa', '50', 'Meteorologist')}
        ${tableRow('Osku', 'Rausku', '18', 'Mail carrier')}
      </tbody>
    </table>
   </div>
`;

const wideTableContent = () => {
  let content = "";

  workTrial.default.forEach(work => {
    content = content + `
        <tr>
          <td class="hds-table--text-align-right">${work['Paikka-ID']}</td>
          <td>${work['Paikan tyyppi']}</td>
          <td>${work['Tehtävänimike']}</td>
          <td>${work['Ilmoitus vanhenee']}</td>
          <td>${work['Toimiala/liikelaitos']}</td>
          <td>${work['Työpaikka']}</td>
          <td class="hds-table--text-align-right">${work['Postinumero']}</td>
          <td class="hds-table--text-align-right">${work['Paikkoja']}</td>
          <td class="hds-table--text-align-right">${work['Haastatteluun halutaan']}</td>
        </tr>`
  })
  return content;
}

export const WideAndLongExample = () => `
  <div class="hds-table-container" style="height: 600px;" tabindex="0">
    <table class="hds-table hds-table--dark hds-table--zebra" aria-label="Job trials">
      <tr class="hds-table__header-row">
        <th scope="col">Job id</th>
        <th scope="col">Type</th>
        <th scope="col">Title</th>
        <th scope="col">Expires</th>
        <th scope="col">Department</th>
        <th scope="col">Job name</th>
        <th scope="col">Postal code</th>
        <th scope="col">Available places</th>
        <th scope="col">To be interviewed</th>
      </tr>
      <tbody class="hds-table__content">
        ${wideTableContent()}
      </tbody>
    </table>
   </div>
`;
