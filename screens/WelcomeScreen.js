import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

// screen dimensions
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const fetchFonts = () => {
    return Font.loadAsync({
      'SFProDisplay-Regular': require('.././assets/fonts/SF-Pro-Display-Regular.otf'),
    });
  };

function WelcomeScreen() {

    // states for inputs
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    return (
        <ImageBackground source={require('../assets/bg.jpg')} style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: '23%'}}>

            {/* Welcome Page */}
            {!showLogin && !showSignup && (
                <View style={styles.viewContent}>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.subWelcomeText}>Lets get you started.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setShowLogin(true)}>
                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'SF-Pro-Display-Regular', }}>Lets Go</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Login Page */}
            {showLogin && (
                <View style={styles.viewContent}>
                    <Text style={{...styles.welcomeText, marginBottom: 10}}>Log in</Text>
                    <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#FFFFFF80" />
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#FFFFFF80" />
                    <TouchableOpacity onPress={() => { setShowLogin(false); setShowSignup(true); }} 
                    style={{marginRight: 'auto', marginLeft: 'auto', marginTop: 10}}>
                        <Text style={{ color: '#222' }}>Don't have an account? Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 600}}>Login</Text>
                    </TouchableOpacity>
                    
                </View>
            )}

            {/* Signup Page */}
            {showSignup && (
                <View style={styles.viewContent}>
                    <Text style={{fontSize: 30, fontWeight: 600, marginBottom: 7 }}>Create an account</Text>
                    {/* <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#FFFFFF80" />
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#FFFFFF80" />
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#FFFFFF80" /> */}

                    <Input
                        placeholder='Username'
                        rightIcon={{ type: 'ionicon', name: 'person-outline', color: 'white' }}
                        // inputStyle={styles.inputStyle}
                        inputStyle={{ color: '#FFFFFF80' }}
                        // containerStyle={styles.inputContainer}
                        inputContainerStyle={{...styles.input, margin: 0, padding: 0, borderBottomColor: 'transparent', marginLeft: -10 }}
                    />

                    <Input
                    style={{borderWidth: 3, borderColor: 'red'}}
                    containerStyle={{borderWidth: 3, borderColor: 'red', paddingBottom: 0, }}
                    inputStyle={{borderWidth: 3, borderColor: 'red'}}
                    // inputContainerStyle={{borderWidth: 10, borderColor: 'green'}}

                        placeholder='Username'
                        // rightIcon={{ type: 'ionicon', name: 'person-outline', color: 'white' }}
                        // inputStyle={{ color: '#FFFFFF80' }}
                        inputContainerStyle={{...styles.input, padding: 0, borderBottomColor: 'transparent', marginLeft: -10 }}
                    />
            

                    <Input
                        placeholder='Username'
                        rightIcon={{ type: 'ionicon', name: 'person-outline', color: 'white' }}
                        inputStyle={{ color: '#FFFFFF80' }}
                        inputContainerStyle={{...styles.input, margin: 0, padding: 0, borderBottomColor: 'transparent', marginLeft: -10 }}
                    />

                    <TouchableOpacity onPress={() => { setShowSignup(false); setShowLogin(true); }}
                    style={{ marginTop: 11, marginRight: 'auto', marginLeft: 'auto'}}>
                        <Text style={{ color: '#222' }}>Have an account? Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 600 }}>Create</Text>
                    </TouchableOpacity>
                    
                </View>
            )}
            </View>
        </ImageBackground>
    );
}

const styles = {
    viewContent: {
        width: width * 0.85,
        borderWidth: 0.5,
        marginRight: 'auto',
        marginLeft: 'auto',
        // alignItems: 'center'
        // display: 'flex',
        // justifyContent: 'center',   
        // alignItems: 'center',
        // flexDirection: 'column',
    },
    
    button: {
        display: 'flex',
        width: width * 0.85,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        border: '1px solid rgba(255, 255, 255, 0.50)',
        backgroundColor: '#1C1C1E',
        boxShadow: '0px 5px 25px 0px rgba(0, 0, 0, 0.25)',
        marginTop: 15,
        marginRight: 'auto',
        marginLeft: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 25,
    },
    input: {
        // display: 'flex',
        height: 50,
        // padding: 13,
        // paddingLeft: 16,
        // paddingRight: 16,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // alignSelf: 'stretch',
        borderRadius: 20,
        backgroundColor: '#1C1C1E',
        // marginTop: 10,
        // width: 320,
        width: width * 0.85,
        padding: 0,
        fontSize: 17
    },
    // inputContainer: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     borderRadius: 20,
    //     backgroundColor: '#1C1C1E',
    //     marginTop: 10,
    //     width: 320,
    //   },
      
    //   input: {
    //     flex: 1,  // This ensures the TextInput takes up the available space
    //     height: 50,
    //     padding: 13,
    //     paddingLeft: 16,
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     alignSelf: 'stretch',
    //     backgroundColor: 'transparent', // Make background transparent so the container's background is visible
    //     color: 'white', // Set the text color
    //   },
    welcomeText: {
        color: '#222',
        fontFamily: 'SF-Pro-Display',
        fontSize: 30,
        fontWeight: '600',
    },
    subWelcomeText: {
        color: '#222',
        fontFamily: 'SF-Pro-Display',
        fontSize: 25,
        fontWeight: '500',
        marginBottom: 20,
    },

    inputStyle: {
        color: 'white',
      },
      
      inputContainer: {
        borderRadius: 20,
        backgroundColor: '#1C1C1',
        // marginTop: 10,
        width: 320,
      }

};

export default WelcomeScreen;