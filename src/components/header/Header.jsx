function Header({setPage}) {

  function handleSetPage(page){
    setPage(page)
  }

  return (
    <header className="flex items-center justify-between bg-[#9797ff] py-2 px-4 rounded-b-md">
      <h1 onClick={() => handleSetPage("HOME")} className="text-3xl cursor-pointer text-white">FormEasy</h1>
      <button onClick={() => handleSetPage("ENTRYFORM")} className="py-2 px-4 bg-white text-xl text-[#9797ff] rounded-md font-medium">
      Create New Form
      </button>
    </header>
  )
}

export default Header
