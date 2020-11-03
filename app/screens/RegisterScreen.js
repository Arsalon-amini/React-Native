import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup'; 

import Screen from '../components/Screen'; 
import { AppForm, AppFormField, SubmitButton } from '../components/forms'; 

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={value => console.log(value)}
                validationSchema={validationSchema}
                > 
                <AppFormField 
                autocapitalize={true}
                autocorrect={false}
                icon="person"
                name="Name"
                placeholder="Name"
               

                />
                <AppFormField 
                autocapitalize={false}
                autocorrect={false}
                icon="email"
                name="Email"
                placeholder="Email"
                textContentType="Email"

                />
                <AppFormField 
                autocapitalize={false}
                autocorrect={false}
                icon="lock"
                name="Password"
                placeholder="Password"
                textContentType="Password"

                />

                <SubmitButton 
                title="Register"
                />
            </AppForm>

        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default RegisterScreen;

//     return (
//         <Screen style={styles.container}>
//           
//             <AppForm
//             initialValues={{ email: '', password: '' }}
//             onSubmit={values => console.log (values)} 
//             validationSchema={validationSchema}
//             >
//             <AppFormField
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 icon="email"
//                 keyboardType='email-address'
//                 name='email'
//                 placeholder="Email"
//                 textContentType="emailAddress" 
//             />
//             <AppFormField
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 icon="lock"
//                 name="password"
//                 placeholder="Password"
//                 secureTextEntry
//                 textContentType="password"
//                 />
//             <SubmitButton title="login"/>
//             </AppForm>  
//         </Screen>
//     );
// }
