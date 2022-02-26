import './style.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';

const Login = () => {

  const { setUser } = useUserContext();

  const navigate = useNavigate();

  let userTest = {
    email: "ca_haka@gmail.com",
    password: "cahakas"
  }

  return (
    <div id="contact">
      <h2 className='formTitle'>Iniciar sessão</h2>
      <Formik
        initialValues={{ email: 'ca_haka@gmail.com', password: 'cahakas' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Email inválido').required('Obrigatório'),
          password: Yup.string()
            .required('Obrigatório'),
        })}
        onSubmit={(values) => {
          setTimeout(() => {

            if (values.email === userTest.email) {

              localStorage.setItem('signed', JSON.stringify([values.email]));
              setUser([values.email])

              navigate("/");

            } else {
              alert("Por favor, tente novamente, suas credenciais são inválidas");
            }
          }, 400);
        }}
      >
        <Form className="acessForm">
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