import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconShoppingCart = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M16.6,13 C17.3,13 18,12.6 18.3,12 L21.9,5.5 C22.2,4.8 21.8,4 21,4 L6.2,4 L5.3,2 L2,2 L2,4 L4,4 L7.6,11.6 L6.2,14 C5.5,15.3 6.4,17 8,17 L20,17 L20,15 L8,15 L9.1,13 L16.6,13 Z M7.2,6 L19.3,6 L16.5,11 L9.5,11 L7.2,6 Z M8,18 C6.9,18 6,18.9 6,20 C6,21.1 6.9,22 8,22 C9.1,22 10,21.1 10,20 C10,18.9 9.1,18 8,18 Z M18,18 C16.9,18 16,18.9 16,20 C16,21.1 16.9,22 18,22 C19.1,22 20,21.1 20,20 C20,18.9 19.1,18 18,18 Z"
        fill="currentColor"
      />
    </g>
  </svg>
);