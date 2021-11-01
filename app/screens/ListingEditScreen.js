import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';


import {
    AppForm,
    AppFormField,
    SubmitButton

} from "../components/forms"
import AppFormPicker from '../components/forms/AppFormPicker';
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1,"Please select at least one image.")
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "sandybrown", icon: "sofa" },
    { label: "Cars", value: 2, backgroundColor: "orange", icon: "car" },
    { label: "Camers", value: 3, backgroundColor: "gold", icon: "camera" },
    { label: "Games", value: 4, backgroundColor: "skyblue", icon: "gamepad-variant" },
    { label: "Clothing", value: 5, backgroundColor: "cadetblue", icon: "shoe-heel" },
    { label: "Sports", value: 6, backgroundColor: "cornflowerblue", icon: "basketball" },
    { label: "Movies & Music", value: 7, backgroundColor: "lightcoral", icon: "music" },
    { label: "Books", value: 8, backgroundColor: "crimson", icon: "book" },
    { label: "Others", value: 9, backgroundColor: "firebrick", icon: "more" },
]


function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: "",
                    images:[],
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width="50%"
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                 <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default ListingEditScreen;