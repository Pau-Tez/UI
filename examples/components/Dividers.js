import React from 'react';

import { View } from '../../components/View';
import { Stage } from './Stage';
import {
  Caption,
  Divider,Button
} from '../../index';

export function Dividers() {
  return (
    <View styleName="vertical collapsed">
      <Stage title="Divider">
        <Divider />
      </Stage>

      <Stage title="Line divider">
        <Divider styleName="line" />
      </Stage>

      <Stage title="Section divider">
        <Divider styleName="section-header" />
      </Stage>

      <Stage title="Section divider + label">
        <Divider styleName="section-header">
          <Caption>INFORMATION</Caption>
        </Divider>
      </Stage>

      <Stage title="Section divider + label + caption">
        <Divider styleName="section-header">
          <Caption>PRODUCT NAME</Caption>
          <Caption>PRICE</Caption>
        </Divider>
      </Stage>

      <Stage title="Learn Much More">
          <Button  onPress={()=>{this.popupDialog.show();}} styleName="secondary">
            <Text>*****CODE VİEW ABOUT BUTTONS******</Text>
          </Button>
        </Stage>
      <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
       <View>
         <Image source={require('./Buttons.jpg')} />
        </View>
       </PopupDialog>

    </View>
  );
}
