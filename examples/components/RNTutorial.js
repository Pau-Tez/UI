

import { Stage } from './Stage';

import { Image } from '../../components/Image';

import React, { Component } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Modal from "react-native-modal";

import styles from "./app.style";


import {
  Caption,
  FormGroup,Button,Icon,
} from '../../index';


export class RNTutorial extends Component {

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

      _renderModalContent = () => (
        <View style={styles.modalContent}>
          <Text>Hello!</Text>
          {this._renderButton("Close", () => this.setState({ visibleModal: null }))}
        </View>
      );

      _handleOnScroll = event => {
        this.setState({
          scrollOffset: event.nativeEvent.contentOffset.y
        });
      };

      _handleScrollTo = p => {
        if (this.scrollViewRef) {
          this.scrollViewRef.scrollTo(p);
        }
      };

      render() {
        return (
          <View style={styles.container}>

            {this._renderButton("WHAT IS REACT NATIVE? ", () =>
              this.setState({ visibleModal: 1 })
            )}


              {this._renderButton("COMPONENTS", () =>
                  this.setState({ visibleModal: 2 })
              )}


              {this._renderButton("PROPERTIES", () =>
                    this.setState({ visibleModal: 3 })
            )}


            {this._renderButton("STATE", () =>
                this.setState({ visibleModal: 4 })
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
                    <Text>Scroll me upSLDGKDLŞGKSDŞLGKSŞDKGLŞSD</Text>
                  </View>
                  <View style={styles.scrollableModalContent1}>
                    <Text>Scroll me up</Text>
                  </View>
                </ScrollView>
              </View>
            </Modal>
            <Modal
              isVisible={this.state.visibleModal === 2}
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
                    <Text>HAKKATENN HAAAA</Text>
                  </View>
                  <View style={styles.scrollableModalContent1}>
                    <Text>Scroll me up</Text>
                  </View>
                </ScrollView>
              </View>
            </Modal>

            <Modal
              isVisible={this.state.visibleModal === 3}
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
                    <Text>Scroll me up</Text>
                  </View>
                  <View style={styles.scrollableModalContent1}>
                    <Text>Scroll me up</Text>
                  </View>
                </ScrollView>
              </View>
            </Modal>

            <Modal
           isVisible={this.state.visibleModal === 4}
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
                                <Text>Scroll me up</Text>
                              </View>
                              <View style={styles.scrollableModalContent1}>
                                <Text>Scroll me up</Text>
                              </View>
                            </ScrollView>
                          </View>
                        </Modal>

          </View>
        );
      }
    }
