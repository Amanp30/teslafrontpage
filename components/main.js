import React from "react";

function main({ urlimage, primary, secondary, modelname, ptext }) {
  return (
    <>
      <div className="mainpage component">
        <div className="topup">
          <h2 className="h2text">{modelname}</h2>
          <p className="ptext">{ptext}</p>
        </div>
        <div className="selectbutton">
          <button type="button" className="buttonprimary">
            {primary}
          </button>
          {secondary ? (
            <button type="button" className="btnsecondary">
              {secondary}
            </button>
          ) : null}
        </div>
      </div>

      <style jsx>{`
        .mainpage {
          background-image: url(${urlimage});
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </>
  );
}

export default main;
