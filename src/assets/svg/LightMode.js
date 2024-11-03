import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const LightMode = () => {
  const {colors} = useTheme();
  return (
    <Svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.732 19.5L3.809 20.423C3.56687 20.6666 3.43097 20.9961 3.43097 21.3395C3.43097 21.6829 3.56687 22.0124 3.809 22.256C4.05257 22.4981 4.38206 22.634 4.7255 22.634C5.06894 22.634 5.39843 22.4981 5.642 22.256L6.565 21.333C6.77797 21.0843 6.88926 20.7644 6.87662 20.4372C6.86399 20.1101 6.72836 19.7997 6.49683 19.5682C6.26531 19.3366 5.95495 19.201 5.62777 19.1884C5.30059 19.1757 4.98069 19.287 4.732 19.5ZM3.9 13C3.9 12.6552 3.76304 12.3246 3.51924 12.0808C3.27544 11.837 2.94478 11.7 2.6 11.7H1.3C0.955219 11.7 0.624558 11.837 0.380761 12.0808C0.136964 12.3246 0 12.6552 0 13C0 13.3448 0.136964 13.6754 0.380761 13.9192C0.624558 14.163 0.955219 14.3 1.3 14.3H2.6C2.94478 14.3 3.27544 14.163 3.51924 13.9192C3.76304 13.6754 3.9 13.3448 3.9 13ZM13 3.9C13.3448 3.9 13.6754 3.76304 13.9192 3.51924C14.163 3.27544 14.3 2.94478 14.3 2.6V1.3C14.3 0.955219 14.163 0.624558 13.9192 0.380761C13.6754 0.136964 13.3448 0 13 0C12.6552 0 12.3246 0.136964 12.0808 0.380761C11.837 0.624558 11.7 0.955219 11.7 1.3V2.6C11.7 2.94478 11.837 3.27544 12.0808 3.51924C12.3246 3.76304 12.6552 3.9 13 3.9ZM4.732 6.565C4.97414 6.80517 5.30096 6.94056 5.642 6.942C5.81309 6.94299 5.98269 6.9102 6.14108 6.8455C6.29947 6.78081 6.44353 6.68549 6.565 6.565C6.80713 6.32143 6.94303 5.99194 6.94303 5.6485C6.94303 5.30506 6.80713 4.97557 6.565 4.732L5.642 3.809C5.39331 3.59603 5.07341 3.48474 4.74623 3.49737C4.41905 3.51001 4.10869 3.64564 3.87717 3.87717C3.64564 4.10869 3.51001 4.41905 3.49737 4.74623C3.48474 5.07341 3.59603 5.39331 3.809 5.642L4.732 6.565ZM20.332 6.942C20.673 6.94056 20.9999 6.80517 21.242 6.565L22.165 5.642C22.3011 5.52546 22.4116 5.38205 22.4896 5.22076C22.5677 5.05948 22.6115 4.8838 22.6184 4.70477C22.6254 4.52573 22.5952 4.3472 22.5298 4.18038C22.4645 4.01356 22.3653 3.86205 22.2386 3.73535C22.112 3.60866 21.9604 3.50953 21.7936 3.44417C21.6268 3.37881 21.4483 3.34865 21.2692 3.35556C21.0902 3.36248 20.9145 3.40633 20.7532 3.48436C20.592 3.56239 20.4485 3.67291 20.332 3.809L19.5 4.732C19.2579 4.97557 19.122 5.30506 19.122 5.6485C19.122 5.99194 19.2579 6.32143 19.5 6.565C19.7292 6.79297 20.0351 6.92738 20.358 6.942H20.332ZM24.7 11.7H23.4C23.0552 11.7 22.7246 11.837 22.4808 12.0808C22.237 12.3246 22.1 12.6552 22.1 13C22.1 13.3448 22.237 13.6754 22.4808 13.9192C22.7246 14.163 23.0552 14.3 23.4 14.3H24.7C25.0448 14.3 25.3754 14.163 25.6192 13.9192C25.863 13.6754 26 13.3448 26 13C26 12.6552 25.863 12.3246 25.6192 12.0808C25.3754 11.837 25.0448 11.7 24.7 11.7ZM13 22.1C12.6552 22.1 12.3246 22.237 12.0808 22.4808C11.837 22.7246 11.7 23.0552 11.7 23.4V24.7C11.7 25.0448 11.837 25.3754 12.0808 25.6192C12.3246 25.863 12.6552 26 13 26C13.3448 26 13.6754 25.863 13.9192 25.6192C14.163 25.3754 14.3 25.0448 14.3 24.7V23.4C14.3 23.0552 14.163 22.7246 13.9192 22.4808C13.6754 22.237 13.3448 22.1 13 22.1ZM21.268 19.5C21.021 19.3626 20.736 19.3095 20.4561 19.3486C20.1762 19.3877 19.9167 19.517 19.7168 19.7168C19.517 19.9167 19.3877 20.1762 19.3486 20.4561C19.3095 20.736 19.3626 21.021 19.5 21.268L20.423 22.191C20.6666 22.4331 20.9961 22.569 21.3395 22.569C21.6829 22.569 22.0124 22.4331 22.256 22.191C22.4981 21.9474 22.634 21.6179 22.634 21.2745C22.634 20.9311 22.4981 20.6016 22.256 20.358L21.268 19.5ZM13 5.85C11.5859 5.85 10.2035 6.26934 9.02767 7.05499C7.85186 7.84064 6.93543 8.95732 6.39426 10.2638C5.85309 11.5703 5.7115 13.0079 5.98739 14.3949C6.26327 15.7819 6.94424 17.0559 7.94419 18.0558C8.94413 19.0558 10.2181 19.7367 11.6051 20.0126C12.9921 20.2885 14.4297 20.1469 15.7362 19.6057C17.0427 19.0646 18.1594 18.1481 18.945 16.9723C19.7307 15.7965 20.15 14.4141 20.15 13C20.1466 11.1048 19.3922 9.28812 18.052 7.94798C16.7119 6.60784 14.8952 5.85344 13 5.85ZM13 17.55C12.1001 17.55 11.2204 17.2831 10.4722 16.7832C9.72391 16.2832 9.14073 15.5726 8.79635 14.7412C8.45197 13.9098 8.36186 12.995 8.53743 12.1123C8.71299 11.2297 9.14634 10.419 9.78266 9.78266C10.419 9.14634 11.2297 8.71299 12.1123 8.53743C12.995 8.36186 13.9098 8.45197 14.7412 8.79635C15.5726 9.14073 16.2832 9.72391 16.7832 10.4722C17.2831 11.2204 17.55 12.1001 17.55 13C17.55 14.2067 17.0706 15.364 16.2173 16.2173C15.364 17.0706 14.2067 17.55 13 17.55Z"
        fill={colors.blacknWhite}
      />
    </Svg>
  );
};

export default LightMode;
