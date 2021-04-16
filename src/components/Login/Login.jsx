import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";



const LoginForm = (props) => {
    const dispatch = useDispatch()
    return <Formik
        initialValues={{email: '', password: '', rememberMe: false}}
        validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
            if (!values.password) {
                errors.password = 'Required';
            } else if (
                values.login.length < 5
            ) {
                errors.email = 'Invalid password';
            }
            return errors;
        }}
        onSubmit={(values) => {
            dispatch(loginThunk(values.email,values.password,values.rememberMe))
                /*alert(JSON.stringify(values, null, 2));*/
        }}

    >
        {({isSubmitting}) => (
            <Form>
                <div>
                    Email
                    <Field type="email" name="email"/>
                    <ErrorMessage name="email" component="div"/>
                </div>
                <div>
                    Password
                    <Field type="password" name="password"/>
                    <ErrorMessage name="password" component="div"/>
                </div>
                <div>
                    <Field type="checkbox" name="rememberMe"/>
                    Remember Me
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </Form>
        )}
    </Formik>
}


const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )

}


export default Login
