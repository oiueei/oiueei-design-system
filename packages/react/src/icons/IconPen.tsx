import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconPen = ({
  'aria-label': ariaLabel = 'pen',
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
      d="M16.75 3L4.5 15.25L4.5143 19.9857L9.25 20L21.5 7.75L16.75 3ZM6.5 16L16.75 5.75L18.75 7.75L8.5 18L6.50696 17.994L6.5 16Z"
      fill="currentColor"
    />
  </svg>
);
