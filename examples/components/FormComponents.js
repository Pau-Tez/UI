import React, {
  Component,
} from 'react';

import { Stage } from './Stage';
import {
  Caption,
  FormGroup,
  Switch,
  View,Text,
  TextInput,Button,
} from '../../index';
import PopupDialog from 'react-native-popup-dialog';
import { Image } from '../../components/Image';
import { TouchableOpacity,ScrollView} from "react-native";
import Modal from "react-native-modal";
import styles from "./app.style";
                  export class FormComponents extends Component {
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
                    constructor() {
                      super();  this.state = {
                        switchOn: false,
                      };
                      }
                   render() {
                     const { switchOn } = this.state;
                      return (
                        <View styleName="vertical collapsed">
                                <Stage title="TextInput / Full width">
                                  <TextInput
                                    styleName="stretch"
                                    placeholder="Username or Email"
                                  />
                                </Stage>
                                <Stage title="TextInput  /  Full width secure entry">
                                  <TextInput
                                    styleName="stretch"
                                    placeholder="Password"
                                    secureTextEntry
                                  />
                                </Stage>
                                <Stage title="Input with label">
                                  <FormGroup styleName="stretch">
                                    <Caption>NAME</Caption>
                                    <TextInput
                                placeholder="Username or Email"
                              />
                           </FormGroup>
        </Stage>
        <Stage title="Switch">
          <Switch
            onValueChange={value => this.setState({ switchOn: value})}
            value={switchOn}
          />
        </Stage>

        <Stage>

             {this._renderButton("CODE VİEW ABOUT FORMCOMPONENTS? ", () =>
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
                     <Image source={require('./FormComponents.jpg')} />
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
