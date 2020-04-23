/**
 * @provides metrics
 */
import {Dimensions} from 'react-native';

const window = Dimensions.get('window');
const {width, height} = window;

// Used via Metrics.baseMargin
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export default metrics;
