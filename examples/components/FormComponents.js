import React, {
  Component,
} from 'react';

import { Stage } from './Stage';
import {
  Caption,
  FormGroup,
  Switch,
  View,
  TextInput,Button
} from '../../index';
import PopupDialog from 'react-native-popup-dialog';
import { Image } from '../../components/Image';

export class FormComponents extends Component {
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

        <Stage title="Learn Much More">
            <Button  onPress={()=>{this.popupDialog.show();}} styleName="secondary">
              <Text>*****CODE VİEW ABOUT DROPDOWNMENU******</Text>
            </Button>
          </Stage>
        <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
         <View>
           <Image source={require('./FormComponents.jpg')} />
          </View>
         </PopupDialog>

      </View>
    );
  }
}
