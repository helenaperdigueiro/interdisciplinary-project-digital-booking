import './style.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div id="register">
            <h2>Cadastro</h2>
            <Formik
                initialValues={{ name: '', surname: '', email: '',emailConfirmation: '', password: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Deve conter no máximo 15 letras')
                        .required('obrigatório'),
                    surname: Yup.string()
                        .max(20, 'Deve conter no máximo 20 letras')
                        .required('obrigatório'),
                    email: Yup.string().email('email inválido').required('obrigatório'),
                    emailConfirmation: Yup.string().oneOf([Yup.ref('email'), null], 'emails tem coincidir'),
                    password: Yup.string()
                        .min(7, 'Sua senha precisa ter no mínimo 6 caracteres')
                        .required('obrigatório'),
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
                    <ErrorMessage name="name">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

                    <label htmlFor="surname">Sobrenome</label>
                    <Field className="field" name="surname" type="text" />
                    <ErrorMessage name="surname">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

                    <label htmlFor="email">Email</label>
                    <Field className="field" name="email" type="email" />
                    <ErrorMessage name="email">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

                    <label htmlFor="emailConfirmation">Repetir email</label>
                    <Field className="field" name="emailConfirmation" type="email" />
                    <ErrorMessage name="emailConfirmation">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

                    <label htmlFor="password">Senha</label>
                    <Field className="field" name="password" type="password" />
                    <ErrorMessage name="password">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

                    <button className="buttonForm" type="submit">Registrar</button>
                    <div className="textNotes"><p className='text'>Já tem uma conta? Faça</p>
                        <Link to="/login"><p className='textLink'>login</p></Link></div>
                </Form>
            </Formik>
        </div>
    );
};

export default Register;