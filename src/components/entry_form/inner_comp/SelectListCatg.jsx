function SelectListCatg({groupName}) {
  return (
    <li className="uppercase h6 rounded-top py-2 px-2"
    style={{background: 'var(--mainColor)', color: '#ffffff', listStyle: 'none'}}
    >
      <a>{groupName}</a>
    </li>
  )
}

export default SelectListCatg
