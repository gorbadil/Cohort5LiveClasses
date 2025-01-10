function FormInput({ formData, handleFormDataChange, name, placeholder }) {
  return (
    <>
      <input
        value={formData[name]}
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={handleFormDataChange}
      />
      <br />
    </>
  );
}

export default FormInput;
