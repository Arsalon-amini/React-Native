import React from "react";
import { View } from 'react-native';

import Card from './app/components/Card'

export default function App() {
  return(
      <View style={{
        backgroundColor: '#f8f4f4', //grey background 
        padding: 20,
        paddingTop: 100
      }}>
        <Card 
        title="Red jacket for Sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
        />
      </View>
  )
}

