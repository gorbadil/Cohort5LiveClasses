function ComponentC(props) {
  console.log(props);
  return (
    <div>
      ComponentC
      <br />
      <button onClick={props.handleArttir}>Arttır</button>
    </div>
  );
}

export default ComponentC;
