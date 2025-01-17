import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconSearch = ({
  'aria-label': ariaLabel = 'search',
  'aria-hidden': ariaHidden = true,
  className = '',
  color,
  size = IconSize.Small,
  style = {},
  ...rest
}: IconProps) => (
  <svg
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
    className={[styles.icon, styles[size], className].filter((e) => e).join(' ')}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    color={color}
    style={style}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 1C19.4183 1 23 4.58172 23 9C23 13.4183 19.4183 17 15 17C13.2001 17 11.539 16.4056 10.2023 15.4023L3.80101 21.8021L2.21002 20.2111L8.60822 13.8117C7.59861 12.4726 7.00002 10.8062 7.00002 9C7.00002 4.58172 10.5817 1 15 1ZM15 3C11.6863 3 9.00002 5.68629 9.00002 9C9.00002 12.3137 11.6863 15 15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3Z"
      fill="currentColor"
    />
  </svg>
);
