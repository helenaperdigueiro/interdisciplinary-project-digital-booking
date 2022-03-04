import './style.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const sleep = ms => new Promise(r => setTimeout(r, ms))

const Login = ({ onSubmit }) => {

  const navigate = useNavigate();

  const handleSubmit = async values => {

    if (values.email === userTest.email && values.password === userTest.password) {

      localStorage.setItem('signed', JSON.stringify([values.email]));
      navigate("/");

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ops!',
        text: 'Por favor, tente novamente, suas credenciais são inválidas',
        confirmButtonColor: 'rgb(87, 169, 194)',
        imageWidth: 100,
        width: 350,
      })
      values.email = ''
      values.password = ''
    }
    await sleep(500)
    onSubmit(values)
  }

  let userTest = { email: "ca_haka@gmail.com", password: "cahakas" }

  return (
    <div id="login">
      <h2 className='formTitle'>Iniciar sessão</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Email inválido').required('Obrigatório'),
          password: Yup.string()
            .required('Obrigatório'),
        })}
        onSubmit={handleSubmit}
      >
        <Form className="acessForm">
          <label htmlFor="email">Email</label>
          <Field id="email" className="field" name="email" type="email" placeholder="email" />
          <div className="errorMessage">
            <ErrorMessage name="email">{msg => msg ? msg : ""}</ErrorMessage>
          </div>

          <label htmlFor="password">password</label>
          <Field id="password" className="field" name="password" type="password" placeholder="password" />
          <div className="errorMessage">
            <ErrorMessage name="password">{msg => msg ? msg : ""}</ErrorMessage>
          </div>

          <button className="buttonForm" type="submit">submit</button>
          <div className="textNotes"><p className='text'>Ainda não tem uma conta?</p>
            <Link to="/registro"><p className='textLink'>Registre-se</p></Link></div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;