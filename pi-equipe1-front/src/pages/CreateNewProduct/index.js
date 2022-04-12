import useAxios from '../../hooks/useAxios';
import { FieldArray, ErrorMessage, Form, Field, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { createBrowserHistory } from "history";

const CreateNewProduct = () => {

    const categories = useAxios('/category');
    const characteristics = useAxios('/characteristic');
    // console.log(characteristics);

    const handleSubmit = async values => {
        let characteristicsObject = [];
        values.addedCharacteristics.map(id => characteristicsObject.push({ "id": parseInt(id) }));
        console.log(characteristicsObject);
    }

    const handleChange = () => {

    }

    const history = createBrowserHistory();

    return (
        <>
            <div id="productTitle">

                <button onClick={() => history.goBack()} id="previousButton">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <div id="informationsTitle">
                    <h3>Administração de produtos</h3>
                </div>
            </div>

            <div id="createNewProductContainer">
                <h4>Criar propriedade</h4>

                <Formik
                    initialValues={{
                        name: '',
                        address: '',
                        category: '',
                        city: '',
                        description: '',
                        addedCharacteristics: [],
                        houseRulesDescription: '',
                        healthSecurityDescription: '',
                        cancellationDescription: '',
                        images: [
                            {
                                original: '',
                                thumbnail: '',
                            },
                        ]
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Obrigatório'),
                        address: Yup.string().required('Obrigatório'),
                        category: Yup.string().required('Obrigatório'),
                        city: Yup.string().required('Obrigatório'),
                        description: Yup.string().required('Obrigatório'),
                        houseRulesDescription: Yup.string().required('Obrigatório'),
                        healthSecurityDescription: Yup.string().required('Obrigatório'),
                        cancellationDescription: Yup.string().required('Obrigatório'),
                    })}
                    onSubmit={handleSubmit}
                >
                    {({ values }) => (
                        <Form id="formCreateNewProduct" className="data" onChange={handleChange}>
                            <div id="newProductInfoWrapper">

                                <div className='dataLeftCol'>
                                    <label htmlFor="name">Nome da propriedade</label>
                                    <Field id="name" className="field" name="name" type="text" />
                                    <div className="errorMessage">
                                        <ErrorMessage name="name">{msg => msg ? msg : ""}</ErrorMessage>
                                    </div>

                                    <label htmlFor="address">Endereço</label>
                                    <Field id="address" className="field" name="address" type="text" />
                                    <div className="errorMessage">
                                        <ErrorMessage name="address">{msg => msg ? msg : ""}</ErrorMessage>
                                    </div>
                                </div>

                                <div className='dataRightCol'>
                                    <label htmlFor="category">Categoria</label>
                                    <Field id="category" className="field" name="category" as="select" >
                                        <option value="" label="Selecione" />

                                        {categories.map(category => {
                                            return (
                                                <option value={category.title} key={category.title} >{category.title}</option>
                                            )
                                        })}
                                    </Field>
                                    <div className="errorMessage">
                                        <ErrorMessage name="category">{msg => msg ? msg : ""}</ErrorMessage>
                                    </div>

                                    <label htmlFor="city">Cidade</label>
                                    <Field id="city" className="field" name="city" type="text" />
                                    <div className="errorMessage">
                                        <ErrorMessage name="city">{msg => msg ? msg : ''}</ErrorMessage>
                                    </div>

                                </div>
                            </div>

                            <div id="newProductDescriptionWrapper">
                                <label htmlFor="description">Descrição</label>
                                <Field id="description" className="textarea" name="description" component="textarea" rows={4} />
                                <div className="errorMessage">
                                    <ErrorMessage name="description">{msg => msg ? msg : ''}</ErrorMessage>
                                </div>
                            </div>

                            <div id="newProductCharacteristicWrapper">
                                <h5>Adicionar atributos</h5>
                                <div className="addCharacteristic">

                                    {
                                        characteristics.map(({ id, name }) => {
                                            // console.log(id);
                                            return (
                                                <div className="addCharacteristicInfo" key={id}>
                                                    <Field id={name} name="addedCharacteristics" type="checkbox" value={`${id}`} />
                                                    <label htmlFor="addedCharacteristics">{name}</label>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>

                            <div id="newProductPoliciesWrapper">
                                <h5>Políticas do produto</h5>

                                <div id="newProductPolicies">

                                    <div id="newProductHouseRules">
                                        <h6>Regras da casa</h6>
                                        <label htmlFor="houseRulesDescription">Descrição</label>
                                        <Field id="houseRulesDescription" className="textarea" name="houseRulesDescription" component="textarea" rows={4} />
                                        <div className="errorMessage">
                                            <ErrorMessage name="houseRulesDescription">{msg => msg ? msg : ''}</ErrorMessage>
                                        </div>
                                    </div>

                                    <div id="newProductHealthSecurity">
                                        <h6>Saúde e segurança</h6>
                                        <label htmlFor="healthSecurityDescription">Descrição</label>
                                        <Field id="healthSecurityDescription" className="textarea" name="healthSecurityDescription" component="textarea" rows={4} />
                                        <div className="errorMessage">
                                            <ErrorMessage name="healthSecurityDescription">{msg => msg ? msg : ''}</ErrorMessage>
                                        </div>
                                    </div>

                                    <div id="newProductCancellation">
                                        <h6>Política de cancelamento</h6>
                                        <label htmlFor="cancellationDescription">Descrição</label>
                                        <Field id="cancellationDescription" className="textarea" name="cancellationDescription" component="textarea" rows={4} />
                                        <div className="errorMessage">
                                            <ErrorMessage name="cancellationDescription">{msg => msg ? msg : ''}</ErrorMessage>
                                        </div>
                                    </div>

                                </div>

                                <div id="newProductImagesWrapper">

                                    <h5>Carregar imagens</h5>

                                    <div className="addImage">

                                        {/* <label htmlFor="imageUrl">Endereço da imagem</label>
                                    <Field id="imageUrl" className="field" name="imageUrl" type="text" />
                                    <div className="errorMessage">
                                        <ErrorMessage name="imageUrl">{msg => msg ? msg : ""}</ErrorMessage>
                                    </div>

                                    <FontAwesomeIcon icon={faCheck} size="lg" /> */}
                                    </div>

                                </div>

                                <FieldArray name="images">
                                    {({ insert, remove, push }) => (
                                        <div>
                                            {values.images.length > 0 &&
                                                values.images.map((image, index) => (
                                                    <div className="row" key={index}>
                                                        <div className="col">
                                                            <label htmlFor={`images.${index}.original`}>Name</label>
                                                            <Field
                                                                name={`images.${index}.original`}
                                                                type="text"
                                                            />
                                                            <ErrorMessage
                                                                name={`images.${index}.original`}
                                                                component="div"
                                                                className="field-error"
                                                            />
                                                        </div>

                                                        <div className="col">
                                                            <button
                                                                type="button"
                                                                className="secondary"
                                                                onClick={() => remove(index)}
                                                            >
                                                                X
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            <button
                                                type="button"
                                                className="secondary"
                                                onClick={() => {
                                                    push({ original: '', thumbnail: '' })
                                                    console.log(values.images);
                                                }}
                                            >
                                                Add Friend
                                            </button>
                                        </div>
                                    )}
                                </FieldArray>

                                <button type='submit'>
                                    Enviar
                                </button>
                            </div>
                        </Form >
                    )}
                </Formik>

            </div>
        </>
    )
}

export default CreateNewProduct;