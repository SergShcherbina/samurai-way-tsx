import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../../../../common/form-controls/Textarea";
import {requiredField} from "../../../../../../utils/validators/validators";
import styled from "styled-components";
import photo from '../../../../../../assets/img/avatarUser.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faVideo, faImage, faMusic} from "@fortawesome/free-solid-svg-icons";

//создаем уточняющую типизацию возвращаемого объекта form по именам input/Field
type FormDataType = {
    addPost: string;
};

//импортируем InjectedFormProps из redux-form в <джинериках> уточняющий type
const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <StyleForm onSubmit={props.handleSubmit}>
            <WrapperImg><img src={photo} alt={'my photo'}/></WrapperImg>

            <Field component={Textarea}
                   name="addPost"
                   validate={[requiredField]}
                   placeholder="write something"
            />

            <IconsWrapper>
                <a href="#"><FontAwesomeIcon icon={faMusic} size="1x"/></a>
                <a href="#"><FontAwesomeIcon icon={faImage} size="1x"/></a>
                <a href="#"><FontAwesomeIcon icon={faVideo} size="1x"/></a>
                <a href="#"><FontAwesomeIcon icon={faCamera} size="1x"/></a>
            </IconsWrapper>

            <Button disabled={!props.valid} >publish</Button>
        </StyleForm>
    );
};

//типизация возвращаемого значения формы
export const AddPostReduxForm = reduxForm<FormDataType>({form: "addPost"})(AddPostForm);


const StyleForm = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 20px;

  background-color: var(--color-bloks);
  border-radius: 10px;
  padding: 10px 20px;
  align-items: center; 

  & div > textarea {
    width: 100%;
    height: 30px;
    border: none;
    resize: vertical;
    padding: 5px;
    border-bottom: 1px solid var(--border-color);
  }
`
const WrapperImg = styled.div`
  width: 50px;
  height: 50px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`
const Button = styled.button`
  border: none;
  background-color: var(--main-color);
  color: #fff;
  font-size: 1rem;
  padding: 10px;
  min-width: 80px;
  border-radius: 8px;
  transition: all 0.3s;
  
  &:not([disabled]):hover {
    background-color: var(--active-color);
  }
  
  &:disabled {
    opacity: 0.5;
  }
`
const IconsWrapper = styled.div`
  display: flex;
  gap: 12px;
  
  & a {
    transition: all 0.3s;
  }

  & a:hover {
    transform: translateY(-2px);
  }
`