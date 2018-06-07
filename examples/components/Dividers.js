import React, { Component } from "react";
import { View } from '../../components/View';
import { Stage } from './Stage';
import {
  Caption,
  Divider,Button,Text,
} from '../../index';
import { Image } from '../../components/Image';
import {TouchableOpacity,ScrollView} from "react-native";
import Modal from "react-native-modal";
import styles from "./app.style";

                    export class Dividers extends Component {
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
                            <Stage title="Divider">
                              <Divider />
                            </Stage>

                            <Stage title="Line divider">
                              <Divider styleName="line" />
                            </Stage>

                            <Stage title="Section divider">
                              <Divider styleName="section-header" />
                            </Stage>

                            <Stage title="Section divider + label">
                              <Divider styleName="section-header">
                                <Caption>INFORMATION</Caption>
                              </Divider>
                            </Stage>

                            <Stage title="Section divider + label + caption">
                              <Divider styleName="section-header">
                                <Caption>PRODUCT NAME</Caption>
                                <Caption>PRICE</Caption>
                              </Divider>
                            </Stage>

      <Stage>
           {this._renderButton("CODE VİEW ABOUT BUTTONS? ", () =>
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
                   <Image source={require('./Dividers1.jpg')} />
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
