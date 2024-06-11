import { useContext } from "react";

import Check from "./Check";
import CardMain from "./CardMain";
import CardTopRightOpts from "./CardTopRightOpts";
import CardBottomRightOpts from "./CardBottomRightOpts";

import FormsContext from "../../context/FormsContext";

import "./styles/card.style.css";

function Card() {
  const { forms } = useContext(FormsContext);

  return (
    <>
      {forms &&
        forms.map((form) => {
          return (
            <div
              key={form.id}
              className="card my-4 rounded position-relative"
            >
              {/* Form Check Uncheck Component */}
              <Check check={form?.check} formId={form.id} />

              <CardMain
                formId={form.id}
                formName={form.formName}
                primaryObj={form.primaryObj}
                formStatus={form.formStatus}
                lastModified={form.lastModified}
              />
              <CardTopRightOpts formId={form.id} draft={form.draft} />
              <CardBottomRightOpts />
            </div>
          );
        })}
    </>
  );
}

export default Card;
