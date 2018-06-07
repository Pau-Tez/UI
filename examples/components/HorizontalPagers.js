import React from 'react';
import { Dimensions } from 'react-native';

import { Stage } from './Stage';
import {
  View,
  HorizontalPager,
  Tile,
  ImageBackground,
  Subtitle,
  Caption,Button,Text,
} from '../../index';
import PopupDialog from 'react-native-popup-dialog';
import { Image } from '../../components/Image';

const window = Dimensions.get('window');

export function HorizontalPagers() {
  return (
    <View styleName="vertical collapsible">
      <Stage title="Horizontal Pager (with tiles as content)">
        <View style={{ height: 250, width: window.width }}>
          <HorizontalPager
            data={[
              { description: 'description', title: 'When The Morning Dawns - DJ Silver Sample Album', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png' }},
              { description: 'description', title: 'When The Morning Dawns', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-2.png' }},
              { description: 'description', title: 'DJ Silver Sample Album', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }},
              { description: 'description', title: 'When The Morning Dawns - DJ Silver Sample Album', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png' }},
            ]}
            renderPage={(page) => {
              return (
                <ImageBackground
                  styleName="large-wide"
                  source={{ uri: page.source.uri }}
                >
                  <Tile>
                    <Subtitle numberOfLines={2}>{page.title}</Subtitle>
                    <Caption>{page.description}</Caption>
                  </Tile>
                </ImageBackground>
              );
            }}
            pageMargin={20}
          />
        </View>
      </Stage>
      <Stage title="Learn Much More">
          <Button  onPress={()=>{this.popupDialog.show();}} styleName="secondary">
            <Text>*****CODE VİEW ABOUT HORİZONTALPAGERS******</Text>
          </Button>
        </Stage>
      <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
       <View>
         <Image source={require('./Buttons1.jpg')} />
        </View>
       </PopupDialog>
    </View>
  );
}
