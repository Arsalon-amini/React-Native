import React from 'react';

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from './app/components/Screen'; 

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 }
]

export default function App() {
  return (
    <Screen> 
      <AppPicker 
      icon="apps" placeholder="Catagory" 
      items={categories}
      />
      <AppTextInput  
      icon="email" placeholder="Email"
      />
    </Screen>
  )
}

