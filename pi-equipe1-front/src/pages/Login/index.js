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
      <h2>Iniciar sessão</h2>
      <Formik
        initialValues={{ email: 'ca_haka@gmail.com', password: 'cahakas' }}
        validationSchema={Yup.object({
          email: Yup.string().email('email inválido').required('obrigatório'),
          password: Yup.string()
            .min(7, 'Sua senha precisa ter no mínimo 6 caracteres')
            .required('obrigatório'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {

            if (values.email === userTest.email) {

              localStorage.setItem('signed', JSON.stringify([values.email]));
              setUser([values.email])

              navigate("/");

            } else {
              alert("Por favor, tente novamente, suas credenciais são inválidas");
            }
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field className="field" name="email" type="email" />
          <ErrorMessage name="email">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

          <label htmlFor="password">Senha</label>
          <Field className="field" name="password" type="password" />
          <ErrorMessage name="password">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

          <button className="buttonForm" type="submit">Inicar sessão</button>
          <div className="textNotes"><p className='text'>Ainda não tem uma conta?</p>
            <Link to="/registro"><p className='textLink'>Registre-se</p></Link></div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;