import {
  AnimatedProp,
  Canvas,
  LinearGradient,
  Rect,
  SkPoint,
} from '@shopify/react-native-skia';
import React from 'react';
import {Dimensions, StyleProp, ViewStyle} from 'react-native';
const {width, height} = Dimensions.get('window');

export const SIZES = {
  HOME: {
    HEADER: 60,
  },
  WINDOW: {
    HEIGHT: height,
    WIDTH: width,
  },
};

type Props = {
  enabled?: boolean;
  height: number;
  colors: string[];
  style: StyleProp<ViewStyle>;
  start: AnimatedProp<SkPoint>;
  end: AnimatedProp<SkPoint>;
};

const BlurEdge: React.FC<Props> = ({
  enabled,
  height,
  style,
  ...props
}: Props) => {
  if (!enabled) {
    return null;
  }
  return (
    <Canvas style={[style, {height, backgroundColor:'black'}]}>
      <Rect x={0} y={0} width={SIZES.WINDOW.WIDTH} height={height}>
        <LinearGradient {...props} />
      </Rect>
    </Canvas>
  );
};

BlurEdge.defaultProps = {
  enabled: true,
};

export default BlurEdge;
