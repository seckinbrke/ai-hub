import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBack = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 1024 1024"
    {...props}>
    <Path
      fill="currentColor"
      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"
    />
    <Path
      fill="currentColor"
      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
    />
  </Svg>
);
export default SvgBack;
