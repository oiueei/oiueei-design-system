import React from 'react';

import styles from './Icon.module.css';
import { IconProps, IconSize } from './Icon.interface';

export const IconQuestionCircleFill = ({
  'aria-label': ariaLabel = 'question-circle-fill',
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
      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM13 16V18H11V16H13ZM12.0437 5.75C14.0343 5.75 15.7173 7.29464 15.7173 9.42361C15.7173 10.7806 15.2461 11.489 14.161 12.306L13.9187 12.4844C13.1753 13.0295 12.9556 13.3359 12.9386 14.142L12.9375 14.25H10.9375C10.9375 12.6746 11.4591 11.8378 12.6143 10.9622L12.8618 10.7796C13.5685 10.2628 13.7173 10.0539 13.7173 9.42361C13.7173 8.43934 12.9662 7.75 12.0437 7.75C11.1907 7.75 10.4785 8.34077 10.3816 9.20835L10.3734 9.30587L8.37663 9.19182C8.49191 7.17347 10.1344 5.75 12.0437 5.75Z"
      fill="currentColor"
    />
  </svg>
);
