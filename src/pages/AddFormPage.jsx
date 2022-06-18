import React from "react";
import { useEffect, useState } from "react";
import Input from "../components/form/Input";
import styles from "./addFormPage.module.css";
import { useLocation } from "react-router-dom";

import FormJson from "./../utils/formElements.json";

function AddFormPage() {
  let location = useLocation();
  const [elements, setElements] = useState(null);
  const [formState, setFormState] = useState(null);

  useEffect(() => {
    setElements(
      FormJson.find((forms) => forms.path === location.pathname.slice(1)) ||
        null
    );
    setFormState(null);
  }, [location]);

  function submitFormHandler(event) {
    event.preventDefault();
    console.log(formState);
  }

  function changeInputHandler(name, value) {
    setFormState((perv) => {
      return { ...perv, [name]: value };
    });
  }
  return (
    <div>
      <form className={styles.form} onSubmit={submitFormHandler}>
        <h1>{elements?.titleform}</h1>
        {elements?.field?.map((formItems) => {
          if (formItems.type === "radio") {
            return (
              <div className={styles.radioContainer}>
                <label>{formItems.title}</label>
                <Input
                  label="مرد"
                  id="مرد"
                  name={formItems.name}
                  type={formItems.type}
                  onClick={function (event) {
                    changeInputHandler(formItems.name, "مرد");
                  }}
                />
                <Input
                  label="زن"
                  id="زن"
                  name={formItems.name}
                  type={formItems.type}
                  onClick={function (event) {
                    changeInputHandler(formItems.name, "زن");
                  }}
                />
              </div>
            );
          } else {
            return (
              <Input
                label={formItems.title}
                name={formItems.name}
                value={formState ? formState[formItems.name] : ""}
                type={formItems.type === "pass" ? "password" : "text"}
                onChange={function (event) {
                  changeInputHandler(formItems.name, event.target.value);
                }}
              />
            );
          }
        })}

        <button className={styles.button}>ثبت</button>
      </form>
    </div>
  );
}

export default AddFormPage;
