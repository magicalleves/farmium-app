import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
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
                    <Text style={styles.welcomeText}>Log in</Text>
                    <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#FFFFFF80" />
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#FFFFFF80" />
                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={{ color: 'white', fontSize: 18}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setShowLogin(false); setShowSignup(true); }}>
                        <Text style={{ color: '#222' }}>Don't have an account? Signup here.</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Signup Page */}
            {showSignup && (
                <View style={styles.viewContent}>
                    <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#FFFFFF80" />
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#FFFFFF80" />
                    {/* <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#FFFFFF80" /> */}
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#FFFFFF80" />
                        <Ionicons name="user" size={24} color="#FFFFFF80" />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Create an account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setShowSignup(false); setShowLogin(true); }}>
                        <Text style={{ color: '#222' }}>Already have an account? Login here.</Text>
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
        borderWidth: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        // alignItems: 'center'
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
        marginTop: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 25,
    },
    // input: {
    //     display: 'flex',
    //     height: 50,
    //     padding: 13,
    //     paddingLeft: 16,
    //     paddingRight: 16,
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     alignSelf: 'stretch',
    //     borderRadius: 20,
    //     backgroundColor: '#1C1C1E',
    //     marginTop: 10,
    //     width: 320,
    //     fontSize: 17
    // },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#1C1C1E',
        marginTop: 10,
        width: 320,
      },
      
      input: {
        flex: 1,  // This ensures the TextInput takes up the available space
        height: 50,
        padding: 13,
        paddingLeft: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'transparent', // Make background transparent so the container's background is visible
        color: 'white', // Set the text color
      },
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
    }

};

export default WelcomeScreen;