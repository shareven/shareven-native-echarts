# shareven-native-echarts

Echarts for react-native
  
## install

$ npm install shareven-native-echarts --save

or

$ yarn add shareven-native-echarts

## Usage

The Usage is complete consistent with Echarts

component props:

* *option* (object): The option for echarts: [Documentation](http://echarts.baidu.com/option.html#title)。 
* *width* (number): The width of the chart. The default value is the outer container width. 
* *height* (number): The height of the chart. The default value is 400. 


```js
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Echarts from 'shareven-native-echarts';

export default function App() {
  const option = {
    title: {
        text: 'ECharts demo'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
  };
  
  return (
    <Echarts option={option} height={300} />
  );
  
}

```



### IOS

Open the xcode project in the ios directory and click run

screenshots：

![image](https://github.com/shareven/shareven-native-echarts/blob/master/example/demoIOS.png)

### Android

Open the Android project in the android directory with Android Studio and click run.

screenshots：

![image](https://github.com/shareven/shareven-native-echarts/blob/master/example/demoAndroid.png)

## License

shareven-native-echarts is released under the MIT license.
