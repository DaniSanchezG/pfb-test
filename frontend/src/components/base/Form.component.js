/**
 * @author VeroniKa Sanchez 
 * @modifiedBy
 */
 import React, { useEffect, useRef } from "react";


 /**
  * Componente de formulario
  * @see TODO
  */
 export const Form = ({ onSubmit, onChange, children }) => {
 
     const formRef = useRef();
 
     /**
      * Método para procesar el evento onSubmit
      * valida el formulario y recoge los datos
      * @param {*} event el evento que se lanza en el onSubmit
      */
     const onSubmitForm = (event) => {
         event.preventDefault();
         validateForm();
         const formValues = getFormValues();
         if (onSubmit) {
             onSubmit(formValues);
         }
     };
 
     /**
      * Método para procesar el evento onChange
      * valida el formulario y recoge los datos
      * @param {*} event el evento que se lanza en el onChange
      */
     const onChangeForm = (event) => {
         event.preventDefault();
         validateForm();
         const formValues = getFormValues();
         if (onChange) {
             onChange(formValues);
         }
     };
 
     /**
      * Método para validar el formulario
      */
     const validateForm = () => {
         let invalid = false;
         for (const element of formRef.current.elements) {
             if (element.invalid) {
                 invalid = true;
                 break;
             }
         }
         formRef.current.invalid = invalid;
         formRef.current.valid = !invalid;
     };
 
     /**
      * Método para recoger los datos del formulario
      * @returns los datos del formulario y el estado de validez (válido /inválido)
      */
     const getFormValues = () => {
         const formValues = {
             field: {},
             valid: false,
             invalid: false,
         };
         for (const element of formRef.current.elements) {
             if (!element.name) {
                 continue;
             }
             if (
                 element.type !== "radio" ||
                 (element.type === "radio" && element.checked)
             ) {
                 formValues.field[element.name] = {
                     value: processValue(element),
                     invalid: element.invalid,
                     valid: element.valid,
                 };
             }
         }
         formValues.invalid = formRef.current.invalid;
         formValues.valid = formRef.current.valid;
         return formValues;
     };
 
     /**
      * Método para preprocesar los valores del input en función del tipo o cualquier otra condición que se le pase
      * @param {*} input
      * @returns El tipo de dato más apropiado según las condiciones
      */
     const processValue = (input) => {
         let value = input.value;
         if (input.type === "checkbox") {
             value = input.checked;
         } else if (input.type === "date") {
             value = new Date(input.value);
         } else if (input.type === "numbers") {
             value = Numbers(input.value);
         }
         return value;
     };
 
     //A la carga del formulario lo validamos y llamamos al evento onChange para informar de los cambios en el momento
     useEffect(() => {
         validateForm();
         const formValues = getFormValues();
         if (onChange) {
             onChange(formValues);
         }
     }, []);
 
     return (
         <>
             <form
                 ref={formRef}
                 onChange={(e) => onChangeForm(e)}
                 onSubmit={(e) => onSubmitForm(e)}
             >
                 {children}
             </form>
         </>
     );
 };
 