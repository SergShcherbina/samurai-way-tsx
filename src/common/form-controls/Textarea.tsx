import React from "react";
import styles from "./errorField.module.css";

export type FieldType = {
  input: TextareaInputType;
  meta: TextareaMetaType;
  placeholder: string;
};
type TextareaInputType = {
  name: string;
  onBlur: () => void;
  onChange: () => void;
  onDragStart: () => void;
  onDrop: () => void;
  onFocus: () => void;
  value: string;
};
type TextareaMetaType = {
  active: boolean;
  asyncValidating: boolean;
  autofilled: boolean;
  dirty: boolean;
  dispatch: any;
  error: string;
  form: string;
  initial: undefined;
  invalid: boolean;
  pristine: boolean;
  submitFailed: boolean;
  submitting: boolean;
  touched: boolean;
  valid: boolean;
  visited: boolean;
  warning: any;
};

//наш кастомный input для redux-form
//в пропсах приходят все данные о input, в том числе validate
export const Textarea: React.FC<FieldType> = ({ input, meta, ...props }) => {
  return (
    <div>
      <textarea {...input} {...props} className={meta.touched && meta.error ? styles.errorBorder : ""} />
      {meta.touched && meta.error ? <span className={styles.errorMessage}> {meta.error} </span> : null}
    </div>
  );
};
