// FormularioComponent.js
import React from "react";
import FormFieldsAddress from "./FormFieldsAddress";
import './Form.css'
import {
  Container
} from "@material-ui/core";

function Form() {
  return (
    <>
     <Container maxWidth="sm" component="article" className="form">
        <h1>Formulário </h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          // Lógica de envío de formulario
          console.log(event)
        }}>

          <FormFieldsAddress />          
        </form>
      </Container>
    </>
  );
}

export default Form;
