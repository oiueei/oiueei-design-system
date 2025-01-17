import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconKey = ({
  'aria-label': ariaLabel = 'key',
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
      d="M17.1508 1C19.6361 1 21.6508 3.01472 21.6508 5.5C21.6508 7.98528 19.6361 10 17.1508 10C16.2736 10 15.4551 9.74902 14.763 9.31495L7.09 16.987L9.4046 19.2393L8.00962 20.6724L5.675 18.401L4.831 19.245L7.65685 22.0714L6.24264 23.4856L3.417 20.66L2 19.2487L3.41421 17.8287L5.482 15.766L5.6546 15.5892L13.3454 7.90287C12.9055 7.20765 12.6508 6.38356 12.6508 5.5C12.6508 3.01472 14.6655 1 17.1508 1ZM17.1508 3C15.7701 3 14.6508 4.11929 14.6508 5.5C14.6508 6.88071 15.7701 8 17.1508 8C18.5315 8 19.6508 6.88071 19.6508 5.5C19.6508 4.11929 18.5315 3 17.1508 3Z"
      fill="currentColor"
    />
  </svg>
);
