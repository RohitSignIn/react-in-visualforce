// import EntryForm from "./components/entry_form/EntryForm"
import { useEffect, useState } from "react";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import EntryForm from "./components/entry_form/EntryForm";
import Formbuilder from "./components/Formbuilder";

import FormsContext from "./context/FormsContext";

import { formsData } from "./components/data";


import "./App.css";

export default function App() {
  const [page, setPage] = useState("HOME");
  const [forms, setForms] = useState(formsData)

  useEffect(() => {
    const data = forms.map((form) => {
      return {"check":false, ...form}
    })
    setForms(data)
  }, [])

  // Generic function to handle change in forms data
  function handleChange(formId, key, val) {
      const data = forms.map((form) => {
        if(form.id === formId){
          form[[key]] = val;
        }
        return form;
      })
      setForms(data)
    }


  return (
    <>
      <FormsContext.Provider value={{forms, setForms, handleChange}}>
        <div className="container mx-auto px-4">
          <Header setPage={setPage} />
          {page === "HOME" && <Home />}
          {page === "ENTRYFORM" && <EntryForm setPage={setPage} />}
          {page === "FORMBUILDER" && <Formbuilder />}
        </div>
      </FormsContext.Provider>
    </>
  );
}
