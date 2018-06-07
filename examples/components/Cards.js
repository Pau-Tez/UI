
import { Stage } from './Stage';
import {
  Card,
  Image,
  Subtitle,
  Caption,
  Icon,
  Button,
  Text,
} from '../../index';

import React, { Component } from 'react';
import { View } from '../../components/View';
import { TouchableOpacity,ScrollView} from "react-native";
import Modal from "react-native-modal";

import styles from "./app.style";



                export class Cards extends Component {
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
                      <Stage title="Card">
                        <Card>
                          <Image
                            styleName="medium-wide"
                            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                          />
                          <View styleName="content">
                            <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
                            <Caption>21 hours ago</Caption>
                          </View>
                        </Card>
                      </Stage>
                      <Stage title="Card + Icon">
                        <Card>
                          <Image
                            styleName="medium-wide"
                            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-12.png' }}
                          />



                          <View styleName="content">
                            <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
                            <View styleName="horizontal v-center space-between">
                              <Caption>Dec 21, 13:45</Caption>
                              <Button styleName="tight clear"><Icon name="add-event" /></Button>
                            </View>
                          </View>
                        </Card>
                      </Stage>

      <Stage title="Card + Icon (Shop)">
        <Card>
          <Image
            styleName="medium-wide"
            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png' }}
          />
          <View styleName="content">
            <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
            <View styleName="horizontal v-center space-between">
              <View styleName="horizontal">
                <Subtitle styleName="md-gutter-right">$99.99</Subtitle>
                <Caption styleName="line-through">$120.00</Caption>
              </View>
              {
                // TODO (zeljko): Should we add an IconButton?
                // <IconButton icon="cart" onPress={...} />
              }
              <Button styleName="tight clear"><Icon name="cart" /></Button>
            </View>
          </View>
        </Card>
      </Stage>


      <Stage>

           {this._renderButton("CODE VİEW ABOUT CARDS? ", () =>
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
                   <Image source={require('./Cards.jpg')} />
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
