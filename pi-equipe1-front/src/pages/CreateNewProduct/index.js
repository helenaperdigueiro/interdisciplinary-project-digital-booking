import useAxios from '../../hooks/useAxios';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CreateNewProduct = () => {

    const categories = useAxios('/category');

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <div id="createNewProductContainer">
            <h4>Criar novo produto</h4>

            <Formik
                initialValues={{ newProductName: '', newProductCategory: '', newProductAddress: '', newProductCity: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Email inválido').required('Obrigatório'),
                    password: Yup.string()
                        .min(7, 'A senha deve ter no mínimo 7 caracteres')
                        .required('Obrigatório'),
                })}
                onSubmit={handleSubmit}
            >
                <Form id="formCreateNewProduct" onChange={handleChange}>
                    <div id="newProductInfoWrapper">

                        <div className='dataLeftCol'>
                            <label htmlFor="newProductName">Nome do produto</label>
                            <Field id="newProductName" className="field" name="newProductName" type="text" />
                            <div className="errorMessage">
                                <ErrorMessage name="newProductName">{msg => msg ? msg : ""}</ErrorMessage>
                            </div>

                            <label htmlFor="newProductAddress">Endereço</label>
                            <Field id="newProductAddress" className="field" name="newProductAddress" type="text" />
                            <div className="errorMessage">
                                <ErrorMessage name="newProductAddress">{msg => msg ? msg : ""}</ErrorMessage>
                            </div>
                        </div>

                        <div className='dataRightCol'>
                            <label htmlFor="newProductCategory">Categoria</label>
                            <Field id="newProductCategory" className="field" name="newProductCategory" as="select" >
                                <option value="" label="Categoria" />

                                {categories.map(category => {
                                    return (
                                        <option value={category.title} key={category.title}>{category.title}</option>
                                    )
                                })}
                            </Field>
                            <div className="errorMessage">
                                <ErrorMessage name="newProductAddress">{msg => msg ? msg : ""}</ErrorMessage>
                            </div>

                            <label htmlFor="newProductCity">Cidade</label>
                            <Field id="newProductCity" className="field" name="newProductCity" type="text" placeholder="Cidade" />
                            <div className="errorMessage">
                                <ErrorMessage name="newProductCity">{msg => msg ? msg : ''}</ErrorMessage>
                            </div>

                        </div>
                    </div>

                    <div id="newProductDescriptionWrapper">
                        <label htmlFor="newProductDescription">Descrição</label>
                        <Field id="newProductDescription" className="textarea" name="newProductDescription" component="textarea" rows={4} placeholder="Descrição" />
                        <div className="errorMessage">
                            <ErrorMessage name="newProductDescription">{msg => msg ? msg : ''}</ErrorMessage>
                        </div>
                    </div>

                    <div id="newProductCharacteristic">
                        <h5>Características</h5>
                        <div className="addCharacteristic">
                            <div className="addCharacteristicInfo">

                                <label htmlFor="characteristicName">Nome</label>
                                <Field id="characteristicName" className="field" name="characteristicName" type="text" />
                                <div className="errorMessage">
                                    <ErrorMessage name="characteristicName">{msg => msg ? msg : ""}</ErrorMessage>
                                </div>

                                <label htmlFor="characteristicIcon">Ícone</label>
                                <Field id="characteristicIcon" className="field" name="characteristicIcon" type="text" />
                                <div className="errorMessage">
                                    <ErrorMessage name="characteristicIcon">{msg => msg ? msg : ""}</ErrorMessage>
                                </div>

                                <FontAwesomeIcon icon={faCheck} size="lg" />

                            </div>

                        </div>
                    </div>

                    <div id="newProductPolicies">
                        <h5>Políticas do produto</h5>

                        <div>

                            <div id="newProductHouseRules">
                                <h6>Regras da casa</h6>
                                <label htmlFor="houseRulesDescription">Descrição</label>
                                <Field id="houseRulesDescription" className="textarea" name="houseRulesDescription" component="textarea" rows={4} placeholder="Descrição" />
                                <div className="errorMessage">
                                    <ErrorMessage name="houseRulesDescription">{msg => msg ? msg : ''}</ErrorMessage>
                                </div>
                            </div>

                            <div id="newProductHealthSecurity">
                                <h6>Saúde e segurança</h6>
                                <label htmlFor="healthSecurityDescription">Descrição</label>
                                <Field id="healthSecurityDescription" className="textarea" name="healthSecurityDescription" component="textarea" rows={4} placeholder="Descrição" />
                                <div className="errorMessage">
                                    <ErrorMessage name="healthSecurityDescription">{msg => msg ? msg : ''}</ErrorMessage>
                                </div>
                            </div>

                            <div id="newProductCancellation">
                                <h6>Política de cancelamento</h6>
                                <label htmlFor="cancellationDescription">Descrição</label>
                                <Field id="cancellationDescription" className="textarea" name="cancellationDescription" component="textarea" rows={4} placeholder="Descrição" />
                                <div className="errorMessage">
                                    <ErrorMessage name="cancellationDescription">{msg => msg ? msg : ''}</ErrorMessage>
                                </div>
                            </div>

                        </div>

                        <div id="newProductImages">

                            <h5>Carregar imagens</h5>

                            <div className="addImage">

                                <label htmlFor="imageUrl">Nome</label>
                                <Field id="imageUrl" className="field" name="imageUrl" type="text" />
                                <div className="errorMessage">
                                    <ErrorMessage name="imageUrl">{msg => msg ? msg : ""}</ErrorMessage>
                                </div>

                                <FontAwesomeIcon icon={faCheck} size="lg" />
                            </div>

                        </div>

                    </div>
                </Form>
            </Formik>

        </div>
    )
}

export default CreateNewProduct;