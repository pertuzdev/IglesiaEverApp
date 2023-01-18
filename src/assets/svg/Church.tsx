import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgProps } from './types';

export const Church: React.FC<SvgProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox='0 0 640 512'>
    <Path
      fill={color}
      d='M344 48h32c13.3 0 24 10.75 24 24s-10.7 24-24 24h-32v46.4L456.7 210c14.5 8.7 23.3 24.3 23.3 41.2V512h-96v-96c0-35.3-28.7-64-64-64s-64 28.7-64 64v96h-96V251.2c0-16.9 8.8-32.5 23.3-41.2L296 142.4V96h-32c-13.3 0-24-10.75-24-24s10.7-24 24-24h32V24c0-13.25 10.7-24 24-24s24 10.75 24 24v24zM24.87 330.3 128 273.6V512H48c-26.51 0-48-21.5-48-48v-91.6c0-17.5 9.53-33.6 24.87-42.1zM592 512h-80V273.6l103.1 56.7c15.4 8.5 24.9 24.6 24.9 42.1V464c0 26.5-21.5 48-48 48z'
    />
  </Svg>
);
