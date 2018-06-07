import React, { Component } from 'react';

import { View } from '../../components/View';
import { Stage } from './Stage';

import { Image } from '../../components/Image';

import { Text,TouchableOpacity,ScrollView} from "react-native";
import Modal from "react-native-modal";

import {
  Caption,
  FormGroup,Button,Icon,
} from '../../index';
import styles from "./app.style";

        export class Buttons extends Component {
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
                    <Stage title="Button / Full width">
                      <Button styleName="full-width">
                        <Text>SEE ALL COMMENTS</Text>
                      </Button>
                    </Stage>

                    <Stage title="Button / Navbar">
                      <Button styleName="textual">
                        <Icon name="add-to-favorites-on" />
                      </Button>
                    </Stage>

                    <Stage title="Button / Vertical / Icon + Text">
                      <Button styleName="stacked textual">
                        <Icon name="tweet" />
                        <Text>Text description</Text>
                      </Button>
                    </Stage>

                    <Stage title="Button / Full width - Normal">
                      <View styleName="horizontal flexible">
                        <Button styleName="full-width muted">
                          <Icon name="add-to-favorites-on" />
                          <Text>LIKE</Text>
                    </Button>
                    <Button styleName="full-width muted">
                      <Icon name="comment" />
                      <Text>COMMENT</Text>
                    </Button>
                  </View>
                </Stage>

      <Stage title="Button / Full width - Active (Feed)">
        <View styleName="horizontal flexible">
          <Button styleName="full-width">
            <Icon name="add-to-favorites-on" />
            <Text>LIKE</Text>
          </Button>
          <Button styleName="full-width">
            <Icon name="comment" />
            <Text>COMMENT</Text>
          </Button>
        </View>
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
                <Image source={require('./Buttons.jpg')} />
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
