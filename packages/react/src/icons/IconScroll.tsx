import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconScroll = ({
  'aria-label': ariaLabel = 'scroll',
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
      d="M2 17C2 19.2091 3.79086 21 6 21H22V5H10C10 2.79086 8.20914 1 6 1C3.79086 1 2 2.79086 2 5V17ZM20 7H10V13L7.41421 15.5858C7.05228 15.2239 6.55228 15 6 15C4.89543 15 4 15.8954 4 17C4 18.1046 4.89543 19 6 19H20V7ZM6 3C7.10457 3 8 3.89543 8 5V13.5351C7.41165 13.1948 6.72857 13 6 13C5.27143 13 4.58835 13.1948 4 13.5351V5C4 3.89543 4.89543 3 6 3Z"
      fill="currentColor"
    />
  </svg>
);
