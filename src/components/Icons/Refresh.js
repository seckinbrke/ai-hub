import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgRefresh = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#FFF"
    viewBox="0 0 32 32"
    {...props}>
    <Path
      fill="#FFF"
      fillRule="evenodd"
      d="M23.74 2H31c.552 0 1-.45 1-1s-.448-1-1-1H21c-.121 0-1 0-1 1v10c0 .55.448 1 1 1s1-.45 1-1V3.36c4.728 2.25 8 7.06 8 12.64 0 7.73-6.268 14-14 14S2 23.73 2 16C2 8.95 7.218 3.13 14 2.16V.14C6.109 1.13 0 7.84 0 16c0 8.84 7.164 16 16 16s16-7.16 16-16c0-6.03-3.336-11.27-8.26-14"
    />
  </Svg>
);
export default SvgRefresh;
