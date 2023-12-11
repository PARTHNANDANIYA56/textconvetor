import React from "react";

function Alert(props) {
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {props.alert.type} : {props.alert.msg}
          <button
            className="btn-close"
            type="button"
            data-bs-dismiss="alert"
            aria-label="close"
          ></button>
        </div>
      )}
    </>
  );
}

export default Alert;
