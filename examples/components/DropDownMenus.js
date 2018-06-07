import { DropDownMenu } from '../../components/DropDownMenu';
import { Image } from '../../components/Image';
import React, { Component } from "react";
import { View } from '../../components/View';
import { Stage } from './Stage';
import {TouchableOpacity,ScrollView} from "react-native";
import Modal from "react-native-modal";
import styles from "./app.style";
import {
  Caption,
  FormGroup,Text,Button
} from '../../index';

                  const options = [  {
                      name: 'Lifestyle', id: '7', },
                      { name: 'Food',    id: '8',  },
                      { name: 'Nature',  id: '9',  },];
                  const emptyOption = { id: '', name: 'Select'};
                  const optionsWithEmptyOption = [emptyOption, ...options];

                  export class DropDownMenus extends Component {

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
                      super();
                      this.state = {
                        selectedOption: options[0],
                        selectedOptionForFormGroupDropdown: emptyOption,
                      };
                    }
                    render() {
                      const { selectedOption, selectedOptionForFormGroupDropdown } = this.state;
                      return (
                        <View styleName="vertical collapsed">
                          <Stage title="Dropdown">
                            <DropDownMenu
                              options={options}
                              selectedOption={selectedOption}
                              onOptionSelected={option => this.setState({ selectedOption: option })}
                              titleProperty={"name"}
                              valueProperty={"id"}
                            />
                        </Stage>


                          <Stage title="Dropdown (horizontal)">
                            <DropDownMenu
                              styleName="horizontal"
                              options={options}
                              selectedOption={selectedOption}
                              onOptionSelected={option => this.setState({ selectedOption: option })}
                              titleProperty={"name"}
                              valueProperty={"id"}
                            />
                          </Stage>
        <Stage title="Dropdown (large)">
          <DropDownMenu
            styleName="large"
            options={options}
            selectedOption={selectedOption}
            onOptionSelected={option => this.setState({ selectedOption: option })}
            titleProperty={"name"}
            valueProperty={"id"}
          />
        </Stage>
        <Stage title="Dropdown (inside a form group)">
          <FormGroup styleName="stretch">
            <Caption>CATEGORY</Caption>
            <DropDownMenu
              styleName={selectedOptionForFormGroupDropdown.id ? '' : 'empty'}
              options={optionsWithEmptyOption}
              selectedOption={selectedOptionForFormGroupDropdown}
              onOptionSelected={option =>
                this.setState({ selectedOptionForFormGroupDropdown: option })}
              titleProperty={"name"}
              valueProperty={"id"}
            />
          </FormGroup>
        </Stage>

        <Stage>

             {this._renderButton("CODE VİEW ABOUT DROPDOWNMENUS? ", () =>
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
                     <Image source={require('./DropDownMenus.jpg')} />
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
