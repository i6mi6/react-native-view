# react-native-view
A lightweight View component that can be styled quickly.

Installation
---
```javascript
$ npm install react-native-view --save
```
then
```javascript
import View from 'react-native-view';
/*...*/
<View vcenter hcenter>
/*...*/
</View>
```
# Usage

## Align content


#### Example

- ##### center children horizontally

```javascript
<View hcenter>
/*...*/
</View>
```
![alt text](https://github.com/i6mi6/react-native-view/blob/master/docs/hcenter.png?raw=true "hcenter")


- ##### align children to the left

```javascript
<View hstart>
/*...*/
</View>
```
![alt text](https://github.com/i6mi6/react-native-view/blob/master/docs/hstart.png?raw=true "hstart")


- ##### center children horizontally and vertically

```javascript
<View vcenter hcenter>
/*...*/
</View>
```
![alt text](https://github.com/i6mi6/react-native-view/blob/master/docs/hcenter%20vcenter.png?raw=true "vcenter hcenter")

## Available props:

| prop | description |
| ------ | ------ |
| hstart | Align children to the left |
| hcenter | Center children horizontally |
| hend | Align children to the right |
| vstart | Align children to the top |
| vcenter | Center children vertically |
| vend | Align children to the bottom |
| flex | Apply **flex: 1** |
| row | Becomes a row **(column by default)** |
| stretch | Stretch the view to fill parent |
| spread | Spread children evenly along the orientation **with padding** |
| push | Spread children evenly along the orientation **without padding** |

## More examples:


- ##### spread

```javascript
<View spread hcenter>
/*...*/
</View>
```
![alt text](https://github.com/i6mi6/react-native-view/blob/master/docs/spread.png?raw=true "push")


- ##### push

```javascript
<View push hcenter>
/*...*/
</View>
```
![alt text](https://github.com/i6mi6/react-native-view/blob/master/docs/push.png?raw=true "spread")


## Padding


By default paddings can be set using breakpoints:

| name | value in px |
| ------ | ------ |
| sm | 5 |
| md | 15 |
| lg | 30 |
| xl | 45 |

Also, you can specify where paddings are applied using directional suffixes: **l - left | r - right | t - top | b - bottom**:

#### Example



- #### 15px padding top and left

```javascript
<View mdpt mdpl>
</View>
```
![alt text](https://github.com/i6mi6/react-native-view/blob/master/docs/mdpt_mdpl.png?raw=true "mdpt mdpl")


- #### 5px padding on all sides

```javascript
<View smp>
</View>
```
![alt text](https://github.com/i6mi6/react-native-view/blob/master/docs/smp.png?raw=true "smp")



License
----

MIT
