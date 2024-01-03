import React from 'react';
import { View } from 'react-native';
import Svg, { Line } from 'react-native-svg';


const SvgLine = () => {
    return (
      
        <Svg height="100%" width="100%" viewBox="0 0 200 200">
          {/* Diagonal Line */}
          <Line
            x1="0"
            y1="0"
            x2="200"
            y2="200"
            stroke="red" // Change the color of the diagonal line
            strokeWidth="2" // Adjust the width of the line
          />
        </Svg>
      
    );
  };
  

export default SvgLine

// const styles = StyleSheet.create({})