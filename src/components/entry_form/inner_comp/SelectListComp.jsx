function SelectListComp({obj, handleFieldSelect}) {
  return (
    <li
    className="list-h py-2 px-2 rounded"
    style={{listStyle: 'none'}}
    onClick={() => handleFieldSelect(obj)}
    >
      <a>{obj.objectName}</a>
    </li>
  )
}

export default SelectListComp

