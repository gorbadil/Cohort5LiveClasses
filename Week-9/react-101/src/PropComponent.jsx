function PropComponent(data) {
  // JS area
  const string = data.str;
  const newStr = string + "!";

  // HTML ve JS Area
  return (
    <div>
      <h3>{newStr}</h3>
      <p>Ben sabitim</p>
    </div>
  );
}

export default PropComponent;
