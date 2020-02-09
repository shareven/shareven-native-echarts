declare module 'shareven-native-echarts' 
{
    import * as React from 'react';
    import * as ReactNative from 'react-native';
  
    export interface EchartsProps extends ReactNative.ViewProps {
      option: {
        title: {
          text: string;
        };
        tooltip: {};
        legend: {
          data: string[];
        };
        xAxis: {
          data: string[];
        };
        yAxis: {};
        series: {
          name: string;
          type: string;
          data: number[];
        }[];
      },
      height?:number
    }

    export class Echarts extends React.Component<EchartsProps> {}
  
    export default Echarts;
  }
