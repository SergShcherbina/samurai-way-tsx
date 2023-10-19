import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../../../common/form-controls/Textarea";
import {requiredField} from "../../../../../utils/validators/validators";
import styled from "styled-components";
import photo from '../../../../../assets/img/avatarUser.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faVideo, faImage, faMusic} from "@fortawesome/free-solid-svg-icons";

//создаем уточняющую типизацию возвращаемого объекта form по именам input/Field
type FormDataType = {
    addPostProfile: string;
};

//импортируем InjectedFormProps из redux-form в <джинериках> уточняющий type
const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <StyleForm onSubmit={props.handleSubmit}>
            <WrapperImg><img src={photo} alt={'my photo'}/></WrapperImg>
            <Field component={Textarea} name="addPostProfile" validate={[requiredField]}
                   placeholder="write something"/>
            <IconsWrapper>
                <a href="#"><FontAwesomeIcon  icon={faMusic} size="1x"/></a>
                <a href="#"><FontAwesomeIcon  icon={faImage} size="1x"/></a>
                <a href="#"><FontAwesomeIcon  icon={faVideo} size="1x"/></a>
                <a href="#"><FontAwesomeIcon  icon={faCamera} size="1x"/></a>
            </IconsWrapper>
            <Button onBlur={props.reset}>Send</Button>
        </StyleForm>
    );
};
//типизация возвращаемого значения формы
export const AddPostReduxForm = reduxForm<FormDataType>({form: "addPostProfile"})(AddPostForm);

const StyleForm = styled.form`
  display: flex;
  gap: 10px;
  background-color: var(--color-bloks);
  border-radius: 10px;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;

  &:first-child > div ^ textarea {
    background: red;
  }

  & div > textarea {
    width: 350px;
    height: 19px;
    border: none;
    resize: none;
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
    color: white;
    padding: 10px;
    min-width: 70px;
    border-radius: 10px;
`
const IconsWrapper = styled.div`
  display: flex;
  gap: 12px;
`
