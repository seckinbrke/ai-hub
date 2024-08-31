import {Dimensions} from 'react-native';
import {theme} from '../constants/theme';

export const COMMON_ANIMATION_DURATION = 400;
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const IS_IPHONE_MINI = () => HEIGHT < 700;

export const MAIN_HORIZONTAL_WIDTH = theme.spacing(3);
