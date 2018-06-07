import React from 'react';
import { Dimensions } from 'react-native';

import { Stage } from './Stage';
import {
  View,
  ImageGallery,Button
} from '../../index';
import { Image } from '../../components/Image';
const window = Dimensions.get('window');
import React, { Component } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Modal from "react-native-modal";

import styles from "./app.style";

export class ImageGalleries extends Component {
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
      <Stage title="Image Gallery">
        <View style={{ height: 500, width: window.width }}>
          <ImageGallery
            data={[
              { description: 'description', title: 'title', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png' }},
              { description: 'description', title: 'title', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-2.png' }},
              { description: 'description', title: 'title', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }},
              { description: 'description', title: 'title', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png' }},
            ]}
            pageMargin={20}
          />
        </View>
      </Stage>
      <Stage>
           {this._renderButton("CODE VİEW ABOUT IMAGEGALERIES? ", () =>
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
                   <Image source={require('./ImageGalleries.jpg')} />
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
