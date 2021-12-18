import { useState } from 'react';

export default function useForm(
  onSubmit: (formValues: any) => void,
  validate?: (formValues: any) => any
) {
  const [values, setValues] = useState<any>({});
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { type, name, value } = e.target;
    if (type === 'checkbox') {
      if (!values[name]) {
        values[name] = [];
      }
      if (e.target.checked) {
        values[name].push(value);
      }
      else {
        values[name].pop(value);
      }
      setValues({ ...values });
    }
    else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate) {
      const err = validate(values);
      setErrors(err);
      if (Object.keys(err).length) return;
    }
    onSubmit(values);
  };

  return { handleSubmit, handleChange, errors };
};
