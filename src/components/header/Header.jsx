function Header({setPage}) {

  function handleSetPage(page){
    setPage(page)
  }

  return (
    <header className="flex items-center justify-between bg-slate-200 py-2 px-4 rounded-b-md">
      <h1 onClick={() => handleSetPage("HOME")} className="text-3xl cursor-pointer">FormEasy</h1>
      <button onClick={() => handleSetPage("ENTRYFORM")} className="py-2 px-4 bg-[#227a90] text-xl text-white rounded-md font-medium">
      Create New Form
      </button>
    </header>
  )
}

export default Header
