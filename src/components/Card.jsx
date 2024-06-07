import { useContext } from "react";

import Check from "./card/Check";
import CardMain from "./card/CardMain";
import CardTopRightOpts from "./card/CardTopRightOpts";
import CardBottomRightOpts from "./card/CardBottomRightOpts";

import FormsContext from "../context/FormsContext";

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
              className="my-4 rounded position-relative"
              style={{width: '100%', height: '200px', border: '1px solid #e8e8e8'}}
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
