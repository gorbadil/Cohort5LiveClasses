import FormInput from "./FormInput";

function FormData({ formData, handleFormDataChange, handleHarca, alert }) {
  const inputs = [
    {
      name: "harcama",
      placeholder: "Ne İçin Harcadın",
    },
    {
      name: "fiyat",
      placeholder: "Ne Kadar Harcadın",
    },
  ];
  return (
    <>
      {/* <FormInput
        name="harcama"
        placeholder="Ne İçin Harcadın"
        formData={formData}
        handleFormDataChange={handleFormDataChange}
      />
      <FormInput
        name="fiyat"
        placeholder="Ne Kadar Harcadın"
        formData={formData}
        handleFormDataChange={handleFormDataChange}
      /> */}
      {inputs.map((input, index) => (
        <FormInput
          key={`${index}input`}
          name={input.name}
          placeholder={input.placeholder}
          formData={formData}
          handleFormDataChange={handleFormDataChange}
        />
      ))}
      <button className={alert && "btn-ekle"} onClick={handleHarca}>
        Harca
      </button>
    </>
  );
}

export default FormData;
