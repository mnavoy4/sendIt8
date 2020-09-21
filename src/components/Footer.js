import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import footerStyles from '../styles/FooterStyles';

export default function FooterComponent() {
  return (
        <Footer style={footerStyles.footerContainer}>
          <FooterTab>
            <Button active>
              <Text style={footerStyles.text}>Find Ride</Text>
              <FontAwesome size={16} name='car' style={footerStyles.icon}/>
            </Button>
            <Button>
              <Text>Post Ride</Text>
            </Button>
            <Button>
              <Text>My Profile</Text>
            </Button>
            <Button>
              <Text>Log Out</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
}