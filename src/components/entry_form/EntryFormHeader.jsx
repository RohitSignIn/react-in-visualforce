// import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function EntryFormHeader({handleSubmit}) {
  return (
    <header className="flex items-center justify-between bg-slate-200 py-2 px-4 rounded-b-md">
      <a to={"/"}>
        <h1 className="text-2xl">Home</h1>
      </a>
      <button className="py-2 px-4 bg-blue-400 text-2xl text-white rounded-md font-medium"
      onClick={handleSubmit}
      >Create</button>
    </header>
  );
}

export default EntryFormHeader;
