import React, { Component } from 'react';

import { View } from '../../components/View';
import { Stage } from './Stage';

import { Image } from '../../components/Image';

import { Dimensions, Text,TouchableOpacity,ScrollView} from "react-native";

import {
  InlineGallery,
  Caption,
  FormGroup,Button,Icon,
} from '../../index';
import styles from "./app.style";
import Modal from "react-native-modal";
import PopupDialog from 'react-native-popup-dialog';

const window = Dimensions.get('window');

export class InlineGalleries extends Component {


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
      <Stage title="Inline Gallery (regular size)">
        <View style={{ flex: 1, width: window.width }}>
          <InlineGallery
            data={[
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png' } },
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-2.png' } },
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' } },
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png' } },
            ]}
            pageMargin={20}
          />
        </View>
      </Stage>

      <Stage title="Inline Gallery (large-wide size)">
        <View style={{ flex: 1, width: window.width }}>
          <InlineGallery
            data={[
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png' } },
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-2.png' } },
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' } },
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png' } },
            ]}
            pageMargin={20}
            styleName="large-wide"
          />
        </View>
      </Stage>

      <Stage title="Inline Gallery (large-ultra-wide size)">
        <View style={{ flex: 1, width: window.width }}>
          <InlineGallery
            data={[
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png' } },
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-2.png' } },
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' } },
              { source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png' } },
            ]}
            pageMargin={20}
            styleName="large-ultra-wide"
          />
        </View>
      </Stage>


      <Stage title="Learn Much More">
      {this._renderButton("VIEW CODE ABOUT IMAGES? ", () =>
        this.setState({ visibleModal: 1 })
      )}
      </Stage>

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
              <Image source={require('./Images.jpg')} />
             </View>
            </View>
          </ScrollView>
        </View>
      </Modal>


    </View>
  );
}
}