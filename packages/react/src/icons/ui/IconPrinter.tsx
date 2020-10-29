import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconPrinter = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <polygon points="0 0 24 0 24 12 24 24 0 24" />
      <path
        fill="currentColor"
        d="M18,3 L18,8 L18.5,8 C20.5,8 22,9.50001713 22,11.5000171 L22,19.0000171 L18,19 L18,22 L6,22 L6,19 L2,19.0000171 L2,11.5000171 C2,9.50001713 3.5,8 5.5,8 L6,8 L6,3 L18,3 Z M16,16 L8,16 L8,20 L16,20 L16,16 Z M18.5,10.0000171 L5.5,10.0000171 C4.5,10.0000171 4,10.5000171 4,11.5000171 L4,17 L6,17 L6,14 L18,14 L18,17 L20,17 L20,11.5000171 C20,10.5000171 19.5,10.0000171 18.5,10.0000171 Z M6,11 C6.55228475,11 7,11.4477153 7,12 C7,12.5522847 6.55228475,13 6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 Z M16,5 L8,5 L8,8 L16,8 L16,5 Z"
      />
    </g>
  </svg>
);
