/**
 * @author VeroniKa Sanchez
 * @modifiedBy
 */
 import React, { useEffect, useRef, useState } from "react";
 /**
  * Input component type text
  * @see TODO
  */
 export const TextInput = ({
     id,
     label,
     name,
     required,
     maxLength,
     minLength,
     pattern,
     value,
     placeholder,
     disabled,
     readonly,
     defaultValue,
     messageWhenValueIsMissing,
     messageWhenValueIsToLong,
     messageWhenValueIsToShort,
     messageWhenWrongPattern,
     onChange,
     onBlur,
 }) => {
     //Hooks
     const inputRef = useRef();
     const [_value, setValue] = useState("");
     const [_required, setRequired] = useState(false);
     const [_invalid, setInvalid] = useState(false);
     const [_errors, setErrors] = useState(false);
 
     //A la carga del componente
     useEffect(() => {
         setValue(value || "");
         setRequired(required);
         validate(inputRef.current, false);
     }, []);
 
     /**
      * Método para procesar el evento onChange
      *  establece el valor en el estado del componente valida el input
      * @param {*} event el evento que se lanza en el onChange
      */
     const onChangeInput = (event) => {
         setValue(event.target.value);
         validate(event.target, true);
 
         if (onChange) {
             onChange(event);
         }
     };
 
     /**
      * Método para procesar el evento onBlur
      * valida el input
      * @param {*} event el evento que se lanza en el onChange
      */
     const onBlurInput = (event) => {
         validate(event.target, true);
 
         if (onBlur) {
             onBlur(event);
         }
     };
 
     /**
      * Método para validar errores de requerimiento, longitud y patron
      * @param {*} input
      * @param {boolean} showErrors
      */
     const validate = (input, showErrors) => {
         const errors = {
             required: false,
             maxLength: false,
             minLength: false,
             pattern: false,
         };
 
         if (_required && !input.value) {
             errors.required = true;
         } else if (pattern) {
             const regex = new RegExp(pattern);
             if (!regex.test(input.value)) {
                 errors.pattern = true;
             }
         } else if (
             maxLength &&
             maxLength > 0 &&
             input.value &&
             input.value.length > maxLength
         ) {
             errors.maxLength = true;
         } else if (
             minLength &&
             minLength > 0 &&
             (!input.value || input.value.length < minLength)
         ) {
             errors.minLength = true;
         }
 
         let invalid = false;
         for (const errorkey in errors) {
             errors.required;
             errors["required"];
             if (errors[errorkey]) {
                 invalid = true;
                 break;
             }
         }
         input.invalid = invalid;
         input.valid = !invalid;
 
         if (showErrors) {
             if (input.invalid && !invalid.classList.contains("invalid")) {
                 input.classList.add("invalid");
             } else if (input.valid && input.classList.contains("invalid")) {
                 input.classList.remove("invalid");
             }
             setErrors(errors);
             setInvalid(input.invalid);
         }
     }; //fin función validate
 
     return (
         <>
             {label && <label className="form-label" htmlFor={id} />}
             <input
                 id={id}
                 ref={inputRef}
                 className="form-control"
                 type="text"
                 name={name}
                 value={_value}
                 disabled={disabled}
                 readOnly={readonly}
                 defaultValue={defaultValue}
                 placeholder={placeholder}
                 onChange={(e) => onChangeInput(e)}
                 onBlur={(e) => onBlurInput(e)}
             />
             {_invalid && (
                 <div className="text-danger">
                     {_errors && _errors.required && (
                         <span>{messageWhenValueIsMissing}</span>
                     )}
                     {_errors && _errors.maxLength && (
                         <span>{messageWhenValueIsToLong}</span>
                     )}
                     {_errors && _errors.minLength && (
                         <span>{messageWhenValueIsToShort}</span>
                     )}
                     {_errors && _errors.pattern && (
                         <span>{messageWhenWrongPattern}</span>
                     )}
                 </div>
             )}
         </>
     );
 };
 