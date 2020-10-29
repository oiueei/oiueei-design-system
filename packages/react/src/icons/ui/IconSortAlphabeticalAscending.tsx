import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconSortAlphabeticalAscending = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <rect width="24" height="24" />
      <path
        fill="currentColor"
        d="M8,4 L8,16.5 L10,14.5 L11.5,16 L7,20.5 L2.5,16 L4,14.5 L6,16.5 L6,4 L8,4 Z M16.995,12.96 C18.835,12.96 20.275,14.28 20.275,16.52 C20.275,18.76 18.835,20.12 16.995,20.12 C15.165,20.12 13.725,18.76 13.725,16.52 C13.725,14.28 15.165,12.96 16.995,12.96 Z M16.995,14.59 C16.015,14.59 15.625,15.46 15.625,16.52 C15.625,17.58 16.015,18.49 16.995,18.49 C17.975,18.49 18.375,17.58 18.375,16.52 C18.375,15.46 17.975,14.59 16.995,14.59 Z M15.935,11 C16.435,11 16.805,11.36 16.805,11.86 C16.805,12.36 16.435,12.72 15.935,12.72 C15.435,12.72 15.065,12.36 15.065,11.86 C15.065,11.36 15.435,11 15.935,11 Z M18.065,11 C18.565,11 18.935,11.36 18.935,11.86 C18.935,12.36 18.565,12.72 18.065,12.72 C17.565,12.72 17.195,12.36 17.195,11.86 C17.195,11.36 17.565,11 18.065,11 Z M18.135,3.08 L20.465,10 L18.545,10 L18.125,8.68 L15.785,8.68 L15.375,10 L13.535,10 L15.865,3.08 L18.135,3.08 Z M16.985,4.86 L16.945,4.86 L16.86508,5.21208 L16.86508,5.21208 L16.80676,5.43216 L16.80676,5.43216 L16.735,5.67 L16.265,7.16 L17.655,7.16 L17.14781,5.55012 L17.14781,5.55012 L17.08447,5.31864 L17.08447,5.31864 L17.01796,5.02992 L17.01796,5.02992 L16.985,4.86 Z"
      />
    </g>
  </svg>
);
