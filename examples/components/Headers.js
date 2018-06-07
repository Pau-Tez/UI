

import {
  Heading,
  Tile,
  Title,
  Subtitle,
  Caption,
  Icon,
  Overlay,
  Button,
} from '../../index';

import { Stage } from './Stage';
import { Image } from '../../components/Image';

import React, { Component } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Modal from "react-native-modal";

import styles from "./app.style";

export class Headers extends Component {
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
      <Stage title="Header / Article">
        <Tile styleName="text-centric">
          <Title styleName="sm-gutter-bottom">MIKE PATTON TEAMING WITH JOHN KAADA FOR COLLAB ALBUM BACTERIA CULT</Title>
          <Caption>Sophia Jackson        21 hours ago</Caption>
        </Tile>
      </Stage>

      <Stage title="Header / Shop item">
        <Tile styleName="text-centric">
          <Overlay styleName="image-overlay"><Heading>-20%</Heading></Overlay>
          <Title styleName="md-gutter-top">COOL BLACK AND WHITE STYLISH WATCHES</Title>
          <Subtitle styleName="line-through sm-gutter-top">$280.00</Subtitle>
          <Heading>$250.00</Heading>
          <Button styleName="secondary md-gutter-top"><Icon name="cart" /><Text>ADD TO BASKET</Text></Button>
        </Tile>
      </Stage>

      <Stage title="Header / Deals item">
        <Tile styleName="text-centric">
          <Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
          <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
          <Heading>99.99</Heading>
          <Button styleName="secondary md-gutter-top"><Text>CLAIM COUPON</Text></Button>
        </Tile>
      </Stage>

      <Stage title="Header / Products item">
        <Tile styleName="text-centric">
          <Title styleName="md-gutter-bottom">SMOKED SALMON, CLASSIC CONDIMENTS, BRIOCHE</Title>
          <Overlay styleName="image-overlay">
            <Subtitle styleName="sm-gutter-horizontal">$18.30</Subtitle>
          </Overlay>
        </Tile>
      </Stage>

      <Stage>
           {this._renderButton("CODE VİEW ABOUT HEADERS? ", () =>
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
                   <Image source={require('./Header.jpg')} />
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
