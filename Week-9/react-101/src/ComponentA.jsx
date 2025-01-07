import ComponentB from "./ComponentB";

function ComponentA(props) {
  const appData = props.data;
  const count = props.count;
  const handleArttir = props.handleArttir;
  return (
    <div>
      ComponentA
      <br />
      {count}
      <br />
      <hr />
      <ComponentB data={appData} handleArttir={handleArttir} />
    </div>
  );
}

export default ComponentA;
