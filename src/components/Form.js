import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaArrowRight } from "react-icons/fa";
import '../styles/Form.scss'

function Form() {
  const [state, handleSubmit] = useForm("xoqbdjwa");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="form">
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='ingresar email'
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        <FaArrowRight />
      </button>
    </form>
  );
}
export default Form;
