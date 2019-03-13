import React from 'react';
import { Field, reduxForm } from 'redux-form';

function CheckOutForm(props) {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]">Your Name</label>
          <Field name="order[name]" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="order[email]">Email</label>
          <Field name="order[email]" component="input" type="email" />
        </div>
        <div>
          <button type="submit"> Submit Order</button>
        </div>
      </form>
    </div>
  );
}

CheckOutForm = reduxForm({
  form: 'checkout'
})(CheckOutForm);

export default CheckOutForm;
