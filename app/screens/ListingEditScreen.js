import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import useLocation from "../hooks/useLocation";

import listingsApi from '../api/listings'; 

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image" )
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: 'green', icon: 'apps'},
  { label: "Cars", value: 2, backgroundColor: 'green', icon: 'car'},
  { label: "Cameras", value: 3, backgroundColor: 'blue', icon: 'camera' },
  { label: "Games", value: 4, backgroundColor: 'orange', icon: 'gamepad'},
  { label: "Clothing", value: 5, backgroundColor: 'blue', icon: 'tshirt-crew'},
  { label: "Sports", value: 6, backgroundColor: 'red', icon: 'run' },
  { label: "Music & Movies", value: 7, backgroundColor: 'red', icon: 'bookmark-music'},
  { label: "Books", value: 8, backgroundColor: 'green', icon: 'book'},
  { label: "Other", value: 9, backgroundColor: 'grey', icon: 'lock-question' },
];

function ListingEditScreen() {
  const location = useLocation(); 

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({...listing, location }); //location prop doesn't come from formik form, comes from hook, spread + add 
    if(!result.ok) return alert('Could not save the listing. '); 
    alert ('Success'); 
  }

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images"/>
        <FormField 
        maxLength={255} 
        name="title" 
        placeholder="Title" 
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker 
        items={categories} 
        name="category" 
        numberOfColumns={3}
        PickerItemComponent={CategoryPickerItem}
        placeholder="Category" 
        width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;

