import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../../component/form-controls/Textarea";
import {requiredField} from "../../../../utils/validators/validators";
import styled from "styled-components";
import Ava from '../../../../assets/img/min-avatar.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faVideo, faImage, faMusic} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../../../../component/button/button";
import {Input} from "../../../../component/form-controls/Input";

//создаем уточняющую типизацию возвращаемого объекта form по именам input/Field
export type FormDataType = {
    addPost: string;
} & AddImageInPostType;

type AddImageInPostType = {
    addImageInPost: (path: string)=> void
    avatar: string
}

//импортируем InjectedFormProps из redux-form в <джинериках> уточняющий type
const AddPostForm: React.FC<AddImageInPostType & InjectedFormProps<FormDataType, AddImageInPostType>> = (props) => {

    const addImageInPost = (fileList: FileList | null) => {
        if(fileList){
            const path = URL.createObjectURL(fileList[0])
            props.addImageInPost(path)
        }
    }

    const ava = props.avatar ? props.avatar : Ava

    return (
        <StyleForm onSubmit={props.handleSubmit}>
            <WrapperImg><img src={ava} alt={'my photo'}/></WrapperImg>

            <Field component={Textarea}
                   name="addPost"
                   // validate={[requiredField]}
                   placeholder="write something"
            />

            <IconsWrapper>
                <label>
                    <input
                        type={'file'}
                        accept={".png, .jpeg, .gif"}
                        onChange={e => addImageInPost(e.target.files)}/>
                    <FontAwesomeIcon icon={faImage} size="xl"/>
                </label>
            </IconsWrapper>

            <Button disabled={!props.anyTouched || !props.valid} >publish</Button>
        </StyleForm>
    );
};

//типизация возвращаемого значения формы
export const AddPostReduxForm =
    reduxForm<FormDataType, AddImageInPostType>({form: "addPost"})(AddPostForm);


const StyleForm = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 20px;

  background-color: var(--block-color);
  border-radius: 10px;
  padding: 10px 20px;
  align-items: center;

  & div > textarea {
    width: 100%;
    height: 30px;
    border: none;
    resize: vertical;
    padding: 7px;
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
// const Button = styled.button`
//   border: none;
//   background-color: var(--main-color);
//   color: #fff;
//   font-size: 1rem;
//   padding: 10px;
//   min-width: 80px;
//   border-radius: 8px;
//   box-shadow: 1px 1px 5px var(--second-text-color);
//   transition: all 0.3s;
//
//   &:not([disabled]):hover {
//     background-color: var(--hover-btn-color);
//     box-shadow: 1px 1px 2px var(--second-text-color);
//   }
//
//   &:not([disabled]):active {
//     background-color: var(--hover-btn-color);
//     transform: translateY(1px);
//     box-shadow: none;
//   }
//
//   &:disabled {
//     opacity: 0.5;
//   }
// `
const IconsWrapper = styled.div`
  display: flex;
  
  & label {
    transition: all 0.3s;
    
    & input {
      visibility: hidden;
      width: 0;
      height: 0;
      opacity: 0;
    }
  }

  & label:hover {
    transform: translateY(-2px);
  }
`
