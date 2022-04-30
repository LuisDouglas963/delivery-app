import { useState, useEffect } from "react";

const useForm = (initialValues = {}, onSubmit) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    //   console.log(e.target.value);
    e.preventDefault();
    if (e?.target?.name) {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();
   
    if (onSubmit) {
      onSubmit({ values });
    }
  };


  // Equivalente à enableReinitialize no formik
  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  return {
    handleSubmit,
    handleChange,
    values,
  };
};

export default useForm;
