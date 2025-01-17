import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconLockOpen = ({
  'aria-label': ariaLabel = 'lock-open',
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
      d="M17 2C19.7146 2 21.924 4.16334 21.9981 6.86005L22 7V9H20V7C20 5.34315 18.6569 4 17 4C15.3808 4 14.0612 5.28279 14.0021 6.88753L14 7V9H16V22H2V9H12V7C12 4.23858 14.2386 2 17 2ZM14 11H4V20H14V11ZM10 13V18H8V13H10Z"
      fill="currentColor"
    />
  </svg>
);
