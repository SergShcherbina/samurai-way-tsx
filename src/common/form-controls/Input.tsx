import React from "react";
import styles from "./errorField.module.css";
import { FieldType } from "./Textarea";

//наш кастомный input для redux-form
//в пропсах приходят все данные о input, в том числе validate
export const Input = ({ input, meta, ...props }: FieldType) => {
  return (
    <div>
      <input {...input} {...props} className={meta.touched && meta.error ? styles.errorBorder : ""} />
      {meta.touched && meta.error ? <span className={styles.errorMessage}> {meta.error} </span> : null}
    </div>
  );
};
