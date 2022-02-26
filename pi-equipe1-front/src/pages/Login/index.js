import './style.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';

const Login = () => {
  const context = useContext(UserContext);
  console.log(context);
  const navigate = useNavigate();

  let signed = { logged: false };

  let userTest = {
    email: "ca_haka@gmail.com",
    password: "cahakas"
  }

  return (
    <div id="contact">
      <h2 className='formTitle'>Iniciar sessão</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Email inválido').required('Obrigatório'),
          password: Yup.string()
            .required('Obrigatório'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (values.email === userTest.email) {
              signed.logged = true;
              localStorage.setItem('signed', JSON.stringify(signed));
              navigate("/");
            } else {
              alert("Por favor, tente novamente, suas credenciais são inválidas");
            }
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >

        <Form>
          <label htmlFor="email">Email</label>
          <Field className="field" name="email" type="email" />
          <div className="errorMessage">
            <ErrorMessage name="email">{msg => msg ? msg : ""}</ErrorMessage>
          </div>

          <label htmlFor="password">Senha</label>
          <Field className="field" name="password" type="password" />
          <div className="errorMessage">
            <ErrorMessage name="password">{msg => msg ? msg : ""}</ErrorMessage>
          </div>

          <button className="buttonForm" type="submit">Iniciar sessão</button>
          <div className="textNotes"><p className='text'>Ainda não tem uma conta?</p>
            <Link to="/registro"><p className='textLink'>Registre-se</p></Link></div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;