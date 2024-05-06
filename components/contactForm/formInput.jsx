//typescript
import { IFormItems } from '../../typescript';

const extractInputProps = (
  { formik, options, ...otherProps },
  option
) => {
  const props = {
    value: formik.values[otherProps.name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    ...otherProps,
  };

  if (props.type === 'checkbox') {
    props.value = option.value;
    props.checked = formik.values[props.name].includes(option.value);
    const onChange = (e) => {
      const val = formik.values[props.name];
      e.target.checked
        ? val.push(e.target.value)
        : val.slice(val.indexOf(e.target.value));
      formik.setFieldValue(val);
    };
    const checked = formik.values[props.name].includes(option.value);

    return { ...props, value: props.value, checked, onChange };
  } else if (props.type === 'radio') {
    const checked = option.value === formik.values[props.name];
    return { ...props, value: option.values, checked };
  }

  return props;
};

const SelectInput = (props) => 
    <>
    {props.options.map((option) => (
      <label key={option.value}>
        <input {...extractInputProps(props, option)} />
        {option.label || option.value}
      </label>
    ))}
  </>
  


const CheckInput = (props) => (
  <>
    {props.options.map((option) => (
      <label key={option.value}>
        <input {...extractInputProps(props, option)} />
        {option.label || option.value}
      </label>
    ))}
  </>
);

const TextInput = (props) => (
  <>
    <input
      {...extractInputProps(props)}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-fontColor leading-tight focus:outline-none focus:shadow-outline mb-4 `}
    />
  </>
);

const TextAreaInput = (props) => (
  <textarea
    {...extractInputProps(props)}
    rows={5}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-fontColor  leading-tight focus:outline-none focus:shadow-outline mb-4"
  />
);

export const FormInput = (props) => {
  switch (props.type) {
    case 'radio':
    case 'checkbox':
      return CheckInput(props);
    case 'select':
      return SelectInput(props);
    case 'textarea':
      return TextAreaInput(props);
    default:
      return TextInput(props);
  }
};
