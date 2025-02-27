import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, Button, Pressable } from 'react-native';
import React from 'react';
import { images } from '@/content/assets';
import { Href, router } from 'expo-router';

// Get the screen width and height dynamically
const { width, height } = Dimensions.get('window'); 


const Onboarding = () => {
  return (
    <View style={styles.wrapper}>
      
      {/* Background Image */}
      <Image source={images.bg} style={styles.bgImage} />

      {/* Overlay Section - Contains Text & Button */}
      <View style={styles.overlay}>
        {/* Heading */}
        <Text style={styles.topText}>
          The Fastest In Delivery <Text style={styles.foodText}>Food</Text>
        </Text>

        {/* Subtitle */}
        <Text style={styles.subText}>
          Our job is to fill your tummy with delicious food and fast delivery.
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={() => router.push('/login' as Href)}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Makes the view take up the full screen
    backgroundColor: '#FFFFFF', // Fallback background color in case image fails to load
  },
  bgImage: {
    width: width,
    height: height,
    position: 'absolute',
    resizeMode: 'cover', // Covers the screen without blank spaces
    top: 0, // Ensures it starts from the top
  },
  overlay: {
    position: 'absolute', // Ensures it stays on top of the image
    bottom: 0, // Positions it at the bottom of the screen
    width: "100%", // Makes it take up full width
    backgroundColor: 'white', // Gives it a card-like look
    borderTopLeftRadius: "30%", // Smooth rounded corners on top
    borderTopRightRadius: "30%",
    paddingVertical: 40, // Space inside the overlay for better spacing
    paddingHorizontal: 25,
    alignItems: 'center', // Centers text & button inside the overlay
    shadowColor: '#000', // Adds a subtle shadow effect
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // For Android shadow effect
  },
  topText: {
    fontSize: 42, // Large text size for the heading
    fontWeight: 'bold', // Makes text bold
    textAlign: 'center', // Centers the text
    color: '#333', // Dark gray color for good readability
  },
  foodText: {
    color: '#9AD983', // Highlights "Food" in green
  },
  subText: {
    textAlign: 'center', // Centers the text
    fontSize: 18, // Slightly smaller than the heading
    color: '#7D7D7D', // Lighter gray for contrast
    marginTop: 10, // Adds spacing below the heading
    paddingHorizontal: 20, // Adds padding so text doesn’t touch screen edges
  },
  button: {
    backgroundColor: '#9AD983', // Green button color
    paddingVertical: 18, // Good height for easy tap interaction
    width: '100%', // Makes the button 80% of the screen width (longer)
    borderRadius: 30, // Smooth rounded corners
    marginTop: 25, // Adds spacing above the button
    alignItems: 'center', // Ensures text inside button is centered
    shadowColor: '#9AD983', // Adds a soft green shadow effect
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8, // For Android
  },
  buttonText: {
    color: 'white', // White text for contrast
    fontSize: 18, // Easy-to-read size
    fontWeight: 'bold', // Makes the text stand out
  },
});
