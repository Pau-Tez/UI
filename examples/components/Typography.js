import React, { Component } from 'react';

import { View } from '../../components/View';
import { Stage } from './Stage';

import { Image } from '../../components/Image';

import { TouchableOpacity,ScrollView} from "react-native";
import {
  Text,
  Heading,
  Title,
  Subtitle,
  Description,
  Caption,
} from '../../components/Text';

import {
  FormGroup,Button,Icon,
} from '../../index';
import styles from "./app.style";
import Modal from "react-native-modal";
import PopupDialog from 'react-native-popup-dialog';


export class Typography extends Component {


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
      {this._renderButton("VIEW CODE ABOUT TYPOGRAPHY? ", () =>
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
              <Image source={require('./Typography1.jpg')} />
             </View>
            </View>
          </ScrollView>
        </View>
      </Modal>



            </View>

  );
}
}