import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconDocumentGroup = ({
  'aria-label': ariaLabel = 'document-group',
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
    <path d="M11 6H16V8H11V6Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 1L22 4.00001L22 18H8V1H18ZM17 3L20 6L20 16H10V3H17Z"
      fill="currentColor"
    />
    <path d="M17 3V6H20L17 3Z" fill="currentColor" />
    <path d="M11 9V11H19V9H11Z" fill="currentColor" />
    <path d="M11 12V14H19V12H11Z" fill="currentColor" />
    <path d="M19 21H5V4H7V19H19V21Z" fill="currentColor" />
    <path d="M16 24H2V7H4V22H16V24Z" fill="currentColor" />
  </svg>
);
