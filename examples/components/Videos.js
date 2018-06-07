import React, { Component } from 'react';

import { View } from '../../components/View';
import { Stage } from './Stage';

import { Image } from '../../components/Image';

import { Text,TouchableOpacity,ScrollView,WebView} from "react-native";

import {
  Caption,
  FormGroup,Button,Icon,
} from '../../index';
import styles from "./app.style";
import Modal from "react-native-modal";
import { Video } from '../../components/Video'
import PopupDialog from 'react-native-popup-dialog';


export class Videos extends Component {


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
      <Stage title={"YouTube video"}>
        <Video
          source={{uri: "https://www.youtube.com/embed/2zuisMXzyaI"}}
          width={320}
          height={180}
        />
      </Stage>
      <Stage title={"Vimeo video"}>
        <Video
          width={320}
          height={180}
          source={{uri: "https://vimeo.com/182267614"}}
        />
      </Stage>
      <Stage title={"Stream video"}>
        <Video
          source={{uri: "https://archive.org/download/Sintel/sintel-2048-stereo_512kb.mp4"}}
          width={320}
          height={180}
        />
      </Stage>


      <Stage title="Learn Much More">
      {this._renderButton("VIEW CODE ABOUT VIDEOS? ", () =>
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
              <Image source={require('./Videos.jpg')} />
             </View>
            </View>
          </ScrollView>
        </View>
      </Modal>


    </View>
  );
}
}