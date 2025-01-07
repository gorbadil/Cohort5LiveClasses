import ComponentC from "./ComponentC";

function ComponentB(props) {
  const appData = props.data;
  const handleArttir = props.handleArttir;
  return (
    <div>
      ComponentB
      <br />
      {appData}
      <hr />
      <ComponentC handleArttir={handleArttir} />
    </div>
  );
}

export default ComponentB;
