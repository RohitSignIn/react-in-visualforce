import { useContext } from "react";
import PageContext from "../../context/PageContext";

function Header({ ...args }) {
  const { page, setPage } = useContext(PageContext);

  function handleSetPage(page) {
    setPage(page);
  }

  return (
    <>
      <header
        className="d-flex align-items-center justify-content-between py-2 px-4"
        style={{
          position: "fixed",
          top: 0,
          background: "var(--mainColor)",
          borderBottomLeftRadius: "0.6rem",
          borderBottomRightRadius: "0.6rem",
          width: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "1000",
        }}
      >
        <h1
          onClick={() => handleSetPage("HOME")}
          className="h3"
          style={{ cursor: "pointer", color: "white" }}
        >
          FormEasy
        </h1>

        {page == "HOME" && (
          <button
            onClick={() => handleSetPage("ENTRYFORM")}
            className="py-2 px-4 bg-white text-xl rounded btn btn-sm"
            style={{
              color: "var(--mainColor)",
              border: "none",
              fontWeight: 600,
            }}
          >
            Create New Form
          </button>
        )}

        {page == "ENTRYFORM" && (
          <button
            onClick={() => args.handleSubmit()}
            className="py-2 px-4 bg-white text-xl rounded btn btn-sm"
            style={{
              color: "var(--mainColor)",
              border: "none",
              fontWeight: 600,
            }}
          >
            Create
          </button>
        )}

        {page == "FORMBUILDER" && (
          <div>

          <button
            className="create-temp-btn btn btn-sm"
            onClick={args.handleBtnClick}
          >
            Create Template
          </button>
          <button
            className="preview-btn btn btn-sm rounded"
            onClick={args.handleFormRender}
          >
            Preview
          </button>
          </div>
        )}
      </header>
      {/* Handle div fixed space */}
      <div style={{ height: "64px" }}></div>
    </>
  );
}

export default Header;
