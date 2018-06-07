import React, { Component } from 'react';

import { View } from '../../components/View';
import { Stage } from './Stage';

import { Image } from '../../components/Image';

import { Text,TouchableOpacity,ScrollView} from "react-native";

import {
  Caption,
  FormGroup,Button,Icon,
} from '../../index';
import styles from "./app.style";
import Modal from "react-native-modal";

export class Images extends Component {


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
    <View styleName="vertical collapsed">
      <Stage title={"List image thumbnail (65x65)\n(small)"}>
        <Image
          styleName="small"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"List video thumbnail (145x92)\n(medium)"}>
        <Image
          styleName="medium"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"Card image thumbnail (180x85)\n(medium-wide)"}>
        <Image
          styleName="medium-wide"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"Avatar thumbnail (25x25)\n(small-avatar)"}>
        <Image
          styleName="small-avatar"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"Avatar image (145x145)\n(medium-avatar)"}>
        <Image
          styleName="medium-avatar"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"List medium image (145x145)\n(medium-square)"}>
        <Image
          styleName="medium-square"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"Up next article image (375x130)\n(large-ultra-wide)"}>
        <Image
          styleName="large-ultra-wide"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"List large thumbnail (375x200)\n(large-banner)"}>
        <Image
          styleName="large-banner"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"Featured image (365x345)\n(featured)"}>
        <Image
          styleName="featured"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"Detail large photo (375x518)\n(large-portrait)"}>
        <Image
          styleName="large-portrait"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"Detail medium photo (375x280)\n(large)"}>
        <Image
          styleName="large"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"Detail wide photo (375x238)\n(large-wide)"}>
        <Image
          styleName="large-wide"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
      </Stage>

      <Stage title={"Detail square photo (375x375)\n(large-square)"}>
        <Image
          styleName="large-square"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
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