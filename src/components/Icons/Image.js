import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgImage = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.468 17.532C5.623 19.715 7.928 20.5 12 20.5c5.625 0 7.88-1.498 8.385-6.115M4.468 17.532C3.78 16.229 3.5 14.429 3.5 12c0-6.5 2-8.5 8.5-8.5s8.5 2 8.5 8.5q.002 1.31-.115 2.385M4.468 17.532l3.118-3.118a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 0 2.828 0l2.172-2.172a2 2 0 0 1 2.828 0l1.971 1.971m-9.694-5.539a1.847 1.847 0 1 1-3.693-.001 1.847 1.847 0 0 1 3.693.001"
    />
  </Svg>
);
export default SvgImage;
