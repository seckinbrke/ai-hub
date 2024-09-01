import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSend = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#FFF"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 14 2.273 5.303c.313.73 1.286.807 1.676.116A54 54 0 0 0 17 13c2-5 3-9 3-9M10 14l-5.303-2.273c-.73-.313-.807-1.286-.116-1.676A54 54 0 0 1 11 7c5-2 9-3 9-3M10 14 20 4"
    />
  </Svg>
);
export default SvgSend;
