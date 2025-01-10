// function ListItem(prop) {
function ListItem({ harca, handleDelete }) {
  //   const harca = prop.harca;
  //   const {harca} = prop;
  return (
    <li onClick={() => handleDelete(harca.harcama)} className="list-item">
      {harca.harcama} - {harca.fiyat}
    </li>
  );
}

export default ListItem;
