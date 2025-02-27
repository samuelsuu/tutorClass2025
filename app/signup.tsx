import { ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { images, icons } from '@/content/assets';
import { router, Href } from 'expo-router';

const signUp = () => {
    return (
        <View style={styles.wrapper}>
            {/* Background image */}
            <ImageBackground source={images.signupPic} resizeMode="cover" style={styles.bg}>
                <View style={styles.overlay}>
                    <View style={styles.contain}>
                        <Text style={styles.title}>Sign Up</Text>

                        <View style={styles.social}>
                            <TouchableOpacity style={styles.socialBtn}>
                                <Image source={icons.google} style={styles.socialIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialBtn}>
                                <Image source={icons.fb} style={styles.socialIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialBtn}>
                                <Image source={icons.ios} style={styles.socialIcon} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.orText}>Or, register with email</Text>

                        <Text style={styles.inputText}>Full Name</Text>
                        <TextInput
                            placeholder="Type your name"
                            placeholderTextColor="#888"
                            style={styles.input}
                        />

                        <Text style={styles.inputText}>Email address</Text>
                        <TextInput
                            placeholder="Type your email"
                            placeholderTextColor="#888"
                            style={styles.input}
                        />

                        <Text style={styles.inputText}>Password</Text>
                        <TextInput
                            placeholder="Type your password"
                            placeholderTextColor="#888"
                            style={styles.input}
                            secureTextEntry
                        />

                        <TouchableOpacity style={styles.button} onPress={() => router.push('/login' as Href)}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => router.push('/login' as Href)}>
                            <Text style={styles.registerText}>Already have an account? Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default signUp;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    contain: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    title: {
        fontSize: 35,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    inputText: {
        fontSize: 15,
        marginVertical: 10,
        color: '#333',
    },
    input: {
        backgroundColor: '#F5F5F5',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#9AD983',
        paddingVertical: 18,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#9AD983',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginVertical: 20,
        color: '#888',
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    socialBtn: {
        backgroundColor: '#F5F5F5',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIcon: {
        width: 24,
        height: 24,
    },
    registerText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
        textDecorationLine: 'underline',
    },
});