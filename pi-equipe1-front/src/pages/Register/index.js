import './style.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div id="register">
            <h2 className='formTitle'>Cadastro</h2>
            <Formik
                initialValues={{ name: '', surname: '', email: '',emailConfirmation: '', password: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Deve conter no máximo 15 letras')
                        .required('Obrigatório'),
                    surname: Yup.string()
                        .max(20, 'Deve conter no máximo 20 letras')
                        .required('Obrigatório'),
                    email: Yup.string().email('Email inválido').required('Obrigatório'),
                    emailConfirmation: Yup.string().oneOf([Yup.ref('email'), null], 'Email não coincide')
                    .required('Obrigatório'),
                    password: Yup.string()
                        .min(7, 'A senha deve ter no mínimo 7 caracteres')
                        .required('Obrigatório'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className="acessForm">
                    <label htmlFor="name">Nome</label>
                    <Field className="field" name="name" type="text" />
                    <div className="errorMessage">
                    <ErrorMessage name="name">{msg => msg ? msg : ""}</ErrorMessage>
                    </div>

                    <label htmlFor="surname">Sobrenome</label>
                    <Field className="field" name="surname" type="text" />
                    <div className="errorMessage">
                    <ErrorMessage name="surname">{msg => msg ? msg : ""}</ErrorMessage>
                    </div>

                    <label htmlFor="email">Email</label>
                    <Field className="field" name="email" type="email" />
                    <div className="errorMessage">
                    <ErrorMessage name="email">{msg => msg ? msg : ""}</ErrorMessage>
                    </div>

                    <label htmlFor="emailConfirmation">Confirmar email</label>
                    <Field className="field" name="emailConfirmation" type="email" />
                    <div className="errorMessage">
                    <ErrorMessage name="emailConfirmation">{msg => msg ? msg : ""}</ErrorMessage>
                    </div>

                    <label htmlFor="password">Senha</label>
                    <Field className="field" name="password" type="password" />
                    <div className="errorMessage">
                    <ErrorMessage name="password">{msg => msg ? msg : ""}</ErrorMessage>
                    </div>

                    <button className="buttonForm" type="submit">Registrar</button>
                    <div className="textNotes"><p className='text'>Já tem uma conta? Faça</p>
                        <Link to="/login"><p className='textLink'>login</p></Link></div>
                </Form>
            </Formik>
        </div>
    );
};

export default Register;