import { useContext } from "react";

import Check from "./card/Check";
import CardMain from "./card/CardMain";
import CardTopRightOpts from "./card/CardTopRightOpts";
import CardBottomRightOpts from "./card/CardBottomRightOpts";

import FormsContext from "../context/FormsContext";

function Card() {
  const { forms } = useContext(FormsContext);

  return (
    <>
      {forms &&
        forms.map((form) => {
          return (
            <div
              key={form.id}
              className="my-4 w-[100] h-[200px] border-[1px] border-[#e6ecef] rounded-md relative group cursor-pointer"
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
