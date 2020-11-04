import React from 'react';
import { StyleSheet} from 'react-native';
import * as Yup from 'yup'; 

import Screen from '../components/Screen'; 
import { Form, FormField, SubmitButton } from '../components/forms'; 

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={value => console.log(value)}
                validationSchema={validationSchema}
                > 
                <FormField 
                autocapitalize={true}
                autocorrect={false}
                icon="account-box"
                name="Name"
                placeholder="Name"
                />
                <FormField 
                autocapitalize={false}
                autocorrect={false}
                icon="email"
                name="Email"
                placeholder="Email"
                textContentType="Email"

                />
                <FormField 
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
            </Form>

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
