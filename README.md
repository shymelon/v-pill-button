# v-pill-button
Simple pill divided into 2 buttons.
### Usage
```html
<template>
  <v-pill-button
  @onRightButtonClick="onRightButtonClick"
  @onLeftButtonClick="onLeftButtonClick">
    <template slot="left">
    left button
    </template>
    <template slot="right">
    right button
    </template>
  </v-pill-button>
</template>
```

```js
import VPillButton from "v-pill-button";

export default {
    components: { VPillButton },
    methods: {
        onLeftButtonCLick(){
        //handle event
        },
        onRightButtonCLick(){
        //handle event
        },
    },
};
```


## Props

| Prop                 | Type    | Required | Default | Description                               |
| -------------------- | ------- | -------- | ------- | ----------------------------------------- |
| color                | string  | false    | #ddd    | Button primary color                      |
| small/medium/large   | boolean | false    |         | Button size (medium by default)           |
| disabled             | boolean | false    | false   | Disables right button making it text only |


### Slots
|Slot       | Description           |
| --------- | --------------------- |
| right     | text for right button |
| left      | text for left button  |

### Events
|Event               | Description                     |
| ------------------ | --------------------------------|
| onLeftButtonClick  | Emits when left button pressed  |
| onRightButtonClick | Emits when right button pressed |
