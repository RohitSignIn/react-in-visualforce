function Header({setPage}) {

  function handleSetPage(page){
    setPage(page)
  }

  return (
    <header className="d-flex align-items-center justify-content-between py-2 px-4 rounded-b"
    style={{background: 'var(--mainColor)'}}
    >
      <h1 onClick={() => handleSetPage("HOME")} className="h3" style={{cursor: 'pointer', color: 'white'}}>FormEasy</h1>
      <button onClick={() => handleSetPage("ENTRYFORM")} className="py-2 px-4 bg-white text-xl rounded h5" style={{color: 'var(--mainColor)', border: 'none'}}>
      Create New Form
      </button>
    </header>
  )
}

export default Header
