import classes from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import { DialogsDataType, MessageDataType } from "../../App";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { fieldMaxLengthCreator, requiredField } from "../../utils/validators/validators";
import { Input } from "../FormControls/Input";
type DialogReduxFormType = {
  dialogMessage: string;
};
export type DialogsType = {
  dialogsData: DialogsDataType[];
  messageData: MessageDataType[];
  onChangeHandler: (value: string) => void;
  onClickHandler: (data: string) => void;
  messageText: string;
  auth: boolean;
};

export const Dialogs = (props: DialogsType) => {
  const messageElement = props.messageData.map((el, i) => <Message message={el.messageD} key={i} />);

  const dialogElement = props.dialogsData.map((el, i) => <DialogItem key={i + el.id} name={el.name} id={el.id} />);

  const onSubmit = (formData: DialogReduxFormType) => {
    props.onClickHandler(formData.dialogMessage);
  };

  return (
    <div className={classes.dialogs}>
      <div>{dialogElement}</div>
      <div>
        {messageElement}
        <DialogReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

//creator для валидации длинны выносим за пределы формы и сохр-й результат передаем в validate !!!!!
const maxLength = fieldMaxLengthCreator(10);

const DialogsForm: React.FC<InjectedFormProps<DialogReduxFormType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input} //импортируем сюда свою компоненту вместо "input"
        name={"dialogMessage"}
        placeholder={"message"}
        validate={[requiredField, maxLength]} //ф-и в validate вызывается самим redux-form
      />
      <button>+</button>
    </form>
  );
};

const DialogReduxForm = reduxForm<DialogReduxFormType>({ form: "dialogsForm" })(DialogsForm);
