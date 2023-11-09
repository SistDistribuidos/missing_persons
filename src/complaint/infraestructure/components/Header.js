import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';

const Header = ({title}) => {
  return (
    <View style={{}}>
      <HeaderRNE 
        style={styles.headerContainer}
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        rightComponent={
            <View style={styles.headerRight}>
              <TouchableOpacity >
                <Icon name="description" color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                // onPress={playgroundNavigate}
              >
                <Icon type="antdesign" name="rocket1" color="white" />
              </TouchableOpacity>
            </View>
        }
        centerComponent={{ text: title, style: styles.heading }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
  
export default Header