import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconCompany = ({
  'aria-label': ariaLabel = 'company',
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
      d="M24 21.7972V23.7972H0V21.7972H1V0L12.5 3.02631V6.79721L23 6.7972V21.7972L24 21.7972ZM20 9.7972V15.7972H8V9.7972H20ZM18 11.7972H10V13.7972H18V11.7972ZM21 8.7972H7V21.7972H12V17.7972H16V21.7972H21V8.7972ZM10.5 4.56809L3 2.59441V21.7972H5V6.7972L10.5 6.79721V4.56809Z"
      fill="currentColor"
    />
  </svg>
);
