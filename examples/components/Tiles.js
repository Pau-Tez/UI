import React, { Component } from 'react';

import { View } from '../../components/View';
import { Stage } from './Stage';

import { Image } from '../../components/Image';

import { Text,TouchableOpacity,ScrollView} from "react-native";

import {
  Heading,
  Tile,
  ImageBackground,
  Title,
  Subtitle,
  Caption,
  Icon,
  Overlay,
  Button,  
} from '../../index';
import styles from "./app.style";
import Modal from "react-native-modal";
import PopupDialog from 'react-native-popup-dialog';

export class Tiles extends Component {


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
      <Stage title="Tile">
        <Tile styleName="small clear">
          <Image
            styleName="medium-square"
            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-12.png' }}
          />
          <View styleName="content">
            <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
            <Caption>20 hours ago</Caption>
          </View>
        </Tile>
      </Stage>
      <Stage title="Tile + Icon">
        <Tile styleName="small clear">
          <ImageBackground
            styleName="medium-square"
            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-2.png' }}  >
            <Overlay styleName="rounded-small">
              <Icon name="play" />
            </Overlay>
          </ImageBackground>
          <View styleName="content">
            <Subtitle numberOfLines={2}>When The Morning Dawns - DJ Silver Sample Album</Subtitle>
            <Caption>20 hours ago</Caption>
          </View>
        </Tile>
      </Stage>

      <Stage title="Large (featured) tile">
        <ImageBackground
          styleName="featured"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png' }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">MIKE PATTON TEAMING WITH JOHN KAADA FOR COLLAB ALBUM BACTERIA CULT</Title>
            <Caption>Sophia Jackson        21 hours ago</Caption>
          </Tile>
        </ImageBackground>
      </Stage>

      <Stage title="Large (featured) tile + Button + Sale tag">
        <ImageBackground
          styleName="featured"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png' }}
        >
          <Tile>
            <Overlay styleName="image-overlay"><Heading>-20%</Heading></Overlay>
            <Title styleName="md-gutter-top">COOL BLACK AND WHITE STYLISH WATCHES</Title>
            <Subtitle styleName="line-through sm-gutter-top">$280.00</Subtitle>
            <Heading>$250.00</Heading>
            <Button styleName="md-gutter-top"><Icon name="cart" /><Text>ADD TO BASKET</Text></Button>
          </Tile>
        </ImageBackground>
      </Stage>

      <Stage title="Large (featured) tile + Button">
        <ImageBackground
          styleName="featured"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
        >
          <Tile>
            <Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
            <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
            <Heading>99.99</Heading>
            <Button styleName="md-gutter-top"><Text>CLAIM COUPON</Text></Button>
          </Tile>
        </ImageBackground>
      </Stage>

      <Stage title="Large list item">
        <Tile>
          <Image
            styleName="large-banner"
            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-5.png' }}
          />
          <View styleName="content">
            <Title>MAUI BY AIR THE BEST WAY AROUND THE ISLAND</Title>
            <View styleName="horizontal space-between">
              <Caption>1 hour ago</Caption>
              <Caption>15:34</Caption>
            </View>
          </View>
        </Tile>
      </Stage>

      <Stage title="Large list item + Icon + Timestamp">
        <Tile>
          <ImageBackground
            styleName="large-banner"
            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-7.png' }}
          >
            <Overlay styleName="rounded-small">
              <Icon name="play" />
            </Overlay>
          </ImageBackground>
          <View styleName="content">
            <Title>MAUI BY AIR THE BEST WAY AROUND THE ISLAND</Title>
            <View styleName="horizontal space-between">
              <Caption>1 hour ago</Caption>
              <Caption>15:34</Caption>
            </View>
          </View>
        </Tile>
      </Stage>

      <Stage title="Large list item + Price tag">
        <ImageBackground
          styleName="large-banner"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">SMOKED SALMON, CLASSIC CONDIMENTS, BRIOCHE</Title>
            <Overlay>
              <Subtitle styleName="sm-gutter-horizontal">$18.30</Subtitle>
            </Overlay>
          </Tile>
        </ImageBackground>
      </Stage>

      <Stage title="Large list item + Action icon">
        <ImageBackground
          styleName="large-banner"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        >
          <Tile>
            <View virtual styleName="actions">
              <Button styleName="tight clear"><Icon name="add-to-favorites-off" /></Button>
            </View>
            <Title>HOW TO MAINTAIN YOUR MENTAL HEALTH IN 2016</Title>
            <Caption>6557 Americo Hills Apt. 118</Caption>
          </Tile>
        </ImageBackground>
      </Stage>

      <Stage title="Detail square + Price tag">
        <ImageBackground
          styleName="large-square"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">SMOKED SALMON, CLASSIC CONDIMENTS, BRIOCHE</Title>
            <Overlay>
              <Subtitle styleName="sm-gutter-horizontal">$18.30</Subtitle>
            </Overlay>
          </Tile>
        </ImageBackground>
      </Stage>

      <Stage title="Detail square + Button">
        <ImageBackground
          styleName="large-square"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
        >
          <Tile>
            <Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
            <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
            <Heading>99.99</Heading>
            <Button styleName="md-gutter-top"><Text>CLAIM COUPON</Text></Button>
          </Tile>
        </ImageBackground>
      </Stage>

      <Stage title="Detail square + Button + Sale tag">
        <ImageBackground
          styleName="large-square"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png' }}
        >
          <Tile>
            <Overlay styleName="image-overlay"><Heading>-20%</Heading></Overlay>
            <Title styleName="md-gutter-top">COOL BLACK AND WHITE STYLISH WATCHES</Title>
            <Subtitle styleName="line-through sm-gutter-top">$280.00</Subtitle>
            <Heading>$250.00</Heading>
            <Button styleName="md-gutter-top"><Icon name="cart" /><Text>ADD TO BASKET</Text></Button>
          </Tile>
        </ImageBackground>
      </Stage>

      <Stage title="Detail large + Price tag">
        <ImageBackground
          styleName="large-portrait"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">SMOKED SALMON, CLASSIC CONDIMENTS, BRIOCHE</Title>
            <Overlay>
              <Subtitle styleName="sm-gutter-horizontal">$18.30</Subtitle>
            </Overlay>
          </Tile>
        </ImageBackground>
      </Stage>

      <Stage title="Detail large + Button">
        <ImageBackground
          styleName="large-portrait"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
        >
          <Tile>
            <Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
            <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
            <Heading>99.99</Heading>
            <Button styleName="md-gutter-top"><Text>CLAIM COUPON</Text></Button>
          </Tile>
        </ImageBackground>
      </Stage>

      <Stage title="Detail large + Button + Sale tag">
        <ImageBackground
          styleName="large-portrait"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png' }}
        >
          <Tile>
            <Overlay styleName="image-overlay"><Heading>-20%</Heading></Overlay>
            <Title styleName="md-gutter-top">COOL BLACK AND WHITE STYLISH WATCHES</Title>
            <Subtitle styleName="line-through sm-gutter-top">$280.00</Subtitle>
            <Heading>$250.00</Heading>
            <Button styleName="md-gutter-top"><Icon name="cart" /><Text>ADD TO BASKET</Text></Button>
          </Tile>
        </ImageBackground>
      </Stage>


      <Stage title="Learn Much More">
      {this._renderButton("VIEW CODE ABOUT TILES? ", () =>
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
              <Image source={require('./Tiles.jpg')} />
             </View>
            </View>
          </ScrollView>
        </View>
      </Modal>


    </View>
  );
}
}