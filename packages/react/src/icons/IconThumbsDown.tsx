import React from 'react';

import styles from './Icon.module.css';
import { IconProps } from './Icon.interface';

export const IconThumbsDown = ({
  ariaLabel = 'thumbs-down',
  ariaLabelledby,
  ariaHidden = true,
  className = '',
  color,
  size = 's',
  style = {},
}: React.SVGProps<SVGSVGElement> & IconProps) => (
  <svg
    className={[styles.icon, styles[size], className].filter((e) => e).join(' ')}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
    aria-hidden={ariaHidden}
    color={color}
    style={style}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.9998 15H16.9998C16.4475 15 15.9998 14.5523 15.9998 14V7C15.9998 6.44772 16.4475 6 16.9998 6H20.9998V15ZM3.00001 13.0361C3.00001 14.3537 4.02441 15.4262 5.28302 15.4262H8.68726C8.36238 16.3184 8.18171 17.0899 8.18171 17.5435C8.18171 18.7507 9.07487 20 10.5701 20C12.159 20 12.5937 18.8414 12.9431 17.9106C14.0224 15.0355 14.9997 15.5394 14.9997 14.5723C14.9997 14.1137 14.6466 13.7154 14.1809 13.7154C14.0017 13.7154 13.8212 13.7769 13.6706 13.9033C11.0538 16.0952 11.6944 18.2856 10.5701 18.2856C10.0219 18.2856 9.81803 17.8303 9.81803 17.5431C9.81803 17.2787 10.0769 16.1305 10.689 14.9862C10.7588 14.856 10.7936 14.7117 10.7936 14.5676C10.7936 14.0704 10.4039 13.7426 9.97539 13.7426H5.28459C4.9261 13.7111 4.63633 13.4076 4.63633 13.0361C4.63633 12.6858 4.90108 12.3922 5.23871 12.3679C5.67029 12.3372 6.00096 11.9607 6.00096 11.5128C6.00096 10.9603 5.61267 10.9432 5.61267 10.4803C5.61267 9.57418 6.80685 10.0396 6.80685 8.97487C6.80685 8.57413 6.58895 8.50949 6.58895 8.18019C6.58895 7.37086 7.60381 7.68874 7.60381 6.72869C7.60381 6.56744 7.56597 6.51579 7.56597 6.39096C7.56597 6.01773 7.85628 5.71415 8.21266 5.71415H10.0034C10.8768 5.71415 11.7427 6.01652 12.4409 6.56454L13.6906 7.54709C13.8377 7.66299 14.01 7.71892 14.1808 7.71892C14.653 7.71892 15 7.31247 15 6.86031C15 6.60005 14.8871 6.34528 14.6729 6.17706L13.4228 5.19416C12.443 4.42502 11.2294 4 10.0021 4H8.21136C7.00696 4 6.01733 4.98183 5.93414 6.22153C5.32836 6.65833 4.95133 7.38265 4.95133 8.17983C4.95133 8.28862 4.95878 8.39795 4.97316 8.50563C4.365 8.93958 3.97501 9.66926 3.97501 10.48C3.97501 10.6697 3.99684 10.8565 4.03893 11.0386C3.4125 11.4968 3.00001 12.2075 3.00001 13.0361Z"
      fill="currentColor"
    />
  </svg>
);