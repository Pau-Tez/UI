
import { Dimensions } from 'react-native';
import { Stage } from './Stage';
import {
  View,
  HorizontalPager,
  Tile,
  ImageBackground,
  Subtitle,
  Caption,Button,
} from '../../index';
import PopupDialog from 'react-native-popup-dialog';
import { Image } from '../../components/Image';

const window = Dimensions.get('window');

import React, { Component } from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";

import styles from "./app.style";

export class HorizontalPagers extends Component {
         state = {
            isModalVisible: false
          };
            _renderButton = (text, onPress) => (
              <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                  <Text>{text}</Text>
                </View>
            </TouchableOpacity>
          );
     render(){
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

      <Stage>
           {this._renderButton("CODE VİEW ABOUT HORİZONTALPAGERS ", () =>
             this.setState({ visibleModal: 1 })

           )}
           <Modal
             isVisible={this.state.visibleModal === 1}
             onSwipe={() => this.setState({ visibleModal: null })}
             swipeDirection="down"
             scrollTo={this._handleScrollTo}
             scrollOffset={this.state.scrollOffset}
             scrollOffsetMax={400 - 300} // content height - ScrollView height
             style={styles.bottomModal}
           >
             <View style={styles.scrollableModal}>
               <ScrollView
                 ref={ref => (this.scrollViewRef = ref)}
                 onScroll={this._handleOnScroll}
                 scrollEventThrottle={16}
               >
                 <View style={styles.scrollableModalContent1}>
                 <View>
                   <Image source={require('./HorizontalPagers.jpg')} />
                  </View>
                 </View>
               </ScrollView>
             </View>
           </Modal>
       </Stage>

    </View>
  );
}
}
