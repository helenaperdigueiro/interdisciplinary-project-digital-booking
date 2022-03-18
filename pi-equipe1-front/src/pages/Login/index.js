import './style.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useUserContext } from '../../contexts/UserContext';
import { Helmet } from 'react-helmet-async';

const sleep = ms => new Promise(r => setTimeout(r, ms))

const Login = ({ onSubmit }) => {

  const { setUser } = useUserContext();

  const navigate = useNavigate();

  const handleSubmit = async values => {

    if (values.email === userTest.email && values.password === userTest.password) {

      localStorage.setItem('signed', JSON.stringify([values.email]));
      setUser([values.email])
      navigate("/");

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ops!',
        text: 'Por favor, tente novamente, suas credenciais são inválidas',
        confirmButtonColor: 'var(--primary-color)',
        imageWidth: 100,
        width: 350,
      })
    }
    await sleep(500)
    onSubmit(values)
  }

  let userTest = { email: "ca_haka@gmail.com", password: "cahakas" }

  return (
    <>
      <Helmet>
        <title>db | Login</title>
      </Helmet>
      <div id="login">
        <h2 className='formTitle'>Iniciar sessão</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('Email inválido').required('Obrigatório'),
            password: Yup.string()
              .min(7, 'A senha deve ter no mínimo 7 caracteres')
              .required('Obrigatório'),
          })}
          onSubmit={handleSubmit}
        >
          <Form className="acessForm">
            <label htmlFor="email">Email</label>
            <Field id="email" className="field" name="email" type="email" />
            <div className="errorMessage">
              <ErrorMessage name="email">{msg => msg ? msg : ""}</ErrorMessage>
            </div>

            <label htmlFor="password">Senha</label>
            <Field id="password" className="field" name="password" type="password" />
            <div className="errorMessage">
              <ErrorMessage name="password">{msg => msg ? msg : ""}</ErrorMessage>
            </div>

            <button className="buttonForm" type="submit">Entrar</button>
            <div className="textNotes"><p className='text'>Ainda não tem uma conta?</p>
              <Link to="/cadastro"><p className='textLink'>Cadastre-se</p></Link></div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;