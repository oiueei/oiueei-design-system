import React from 'react';

import styles from './Icon.module.css';
import { IconProps } from './Icon.interface';

export const IconCalendarRecurring = ({
  ariaLabel = 'calendar-recurring',
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
      d="M16.5 24L16.2788 23.9956C13.3438 23.8795 11 21.4635 11 18.5C11 15.5365 13.3438 13.1205 16.2788 13.0044L16.5 13L16.7733 13.0067C18.0431 13.0694 19.2336 13.5684 20.1999 14.4417L20.422 14.653L20.4211 13H22V18H17V16.4211L19.299 16.421L19.0724 16.1266L18.9157 15.9672C18.2708 15.3515 17.4146 15 16.5 15C14.567 15 13 16.567 13 18.5C13 20.433 14.567 22 16.5 22L16.6059 21.9984L16.75 21.9912L16.95 21.9713L17.1184 21.9456L17.2213 21.9256L17.3973 21.8839L17.585 21.8286L17.696 21.7906L17.8733 21.7206L18.069 21.6299L18.165 21.5794L18.3374 21.4795L18.2261 21.5459C18.367 21.4658 18.5024 21.3759 18.6315 21.2765L18.8061 21.1329C19.229 20.7622 19.5618 20.2912 19.7675 19.7571L21.6348 20.475C21.3908 21.1089 21.0327 21.6863 20.5858 22.1819L20.3891 22.3891L20.1633 22.6026L19.9501 22.7836L19.7949 22.9043L19.6185 23.0312L19.4441 23.1465L19.2063 23.2892L18.9788 23.4111L18.7398 23.5248L18.4975 23.626L18.3538 23.6795L18.1096 23.7607L17.8372 23.836L17.5226 23.9049L17.3736 23.931L17.0542 23.9723L16.8757 23.9874L16.7212 23.9956L16.5 24ZM17 2C17.5523 2 18 2.44772 18 3V4H22V11H4V19H10C10 19.5 10.2046 20.3784 10.5 21H2V4H6V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2ZM20 6H4V9H20V6Z"
      fill="currentColor"
    />
  </svg>
);
