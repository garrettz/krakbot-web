const FormErrorMessage = (props) => {
  const { className, ...rest } = props;

  return (
    <div {...rest} className={`block mt-1 mb-3 ml-1 text-xs font-medium leading-5 text-primary-500 ${className}`} />
  );
};

export default FormErrorMessage;
