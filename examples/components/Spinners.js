import React from 'react';

import { Stage } from './Stage';
import {
  View,
  Spinner,
} from '../../index';
import PopupDialog from 'react-native-popup-dialog';
import { Image } from '../../components/Image';

export function Spinners() {
  return (
    <View styleName="vertical collapsed">
      <Stage title="Spinner">
        <Spinner />
      </Stage>

      <Stage title="Learn Much More">
          <Button  onPress={()=>{this.popupDialog.show();}} styleName="secondary">
            <Text>*****CODE VİEW ABOUT SPINNERS******</Text>
          </Button>
        </Stage>
      <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
       <View>
         <Image source={require('./Spinners.jpg')} />
        </View>
       </PopupDialog>
    </View>
  );
}
