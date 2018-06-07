import React from 'react';

import { View } from '../../components/View';
import { Stage } from './Stage';
import {
  Text,
  Heading,
  Title,
  Subtitle,
  Description,
  Caption,
} from '../../components/Text';
import {  Button  } from '../../index';
import PopupDialog from 'react-native-popup-dialog';
import { Image } from '../../components/Image';

export function Typography() {
       return (
            <View styleName="vertical collapsed">
                <Stage title="Heading">
                  <Heading>Mobile App Creator</Heading>
                </Stage>

               <Stage title="Title">
                <Title>MOBILE APP CREATOR</Title>
               </Stage>

              <Stage title="Subtitle">
                <Subtitle>Mobile App Creator</Subtitle>
              </Stage>

              <Stage title="Text">
                <Text>Mobile App Creator</Text>
              </Stage>

              <Stage title="Caption">
                <Caption>Mobile App Creator</Caption>
              </Stage>

              <Stage title="Learn Much More">
                  <Button  onPress={()=>{this.popupDialog.show();}} styleName="secondary">
                    <Text>*****CODE VİEW ABOUT TYPOGRAPHY******</Text>
                  </Button>
              </Stage>
                  <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
                   <View>
                       <Image
                      styleName="featured"
                       source={require('./Typography1.jpg')} />
                  </View>
                </PopupDialog>
            </View>

  );
}
