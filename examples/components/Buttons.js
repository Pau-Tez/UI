import React, { Component } from 'react';

import { View } from '../../components/View';
import { Stage } from './Stage';

import { Image } from '../../components/Image';

import { Text,TouchableOpacity} from "react-native";
import Modal from "react-native-modal";

import {
  Caption,
  FormGroup,Button,Icon,
} from '../../index';


export class Buttons extends Component {
  state = {
      isModalVisible: false
    };

    _toggleModal = () =>
      this.setState({ isModalVisible: !this.state.isModalVisible });
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
      <Button onPress={this._toggleModal} styleName="full-width">
        <Text>CODE VİEW ABOUT BUTTONS</Text>
      </Button>
   </Stage>

  <Modal isVisible={this.state.isModalVisible}>
  <View style={{ flex: 1 }}>

    <TouchableOpacity onPress={this._toggleModal}>
    <Image
          styleName="large-wide"
     source={require('./Buttons1.jpg')} />
    </TouchableOpacity>
  </View>
</Modal>

   </View>
   );
 }
}
