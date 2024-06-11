// import EntryForm from "./components/entry_form/EntryForm"
import { useEffect, useState } from "react";

import Home from "./components/home/Home";

import EntryForm from "./components/entry_form/EntryFormDev";
import Formbuilder from "./components/form_builder/Formbuilder";

import FormsContext from "./context/FormsContext";
import PageContext from "./context/PageContext";

import { formsData } from "./components/card/data";

import "./App.css";

export default function App() {
  const [page, setPage] = useState("FORMBUILDER");
  const [forms, setForms] = useState(formsData);

  useEffect(() => {
    const data = forms.map((form) => {
      return { check: false, ...form };
    });
    setForms(data);
  }, []);

  // Generic function to handle change in forms data
  function handleChange(formId, key, val) {
    const data = forms.map((form) => {
      if (form.id === formId) {
        form[[key]] = val;
      }
      return form;
    });
    setForms(data);
  }

  return (
    <>
      <FormsContext.Provider value={{ forms, setForms, handleChange }}>
        <PageContext.Provider value={{page, setPage}}>
          <div className="container">
            {/* <Header setPage={setPage} page={page} /> */}
            {page === "HOME" && <Home />}
            {page === "ENTRYFORM" && <EntryForm setPage={setPage} />}
            {page === "FORMBUILDER" && <Formbuilder />}
          </div>
        </PageContext.Provider>
      </FormsContext.Provider>
    </>
  );
}
// FORMBUILDER
