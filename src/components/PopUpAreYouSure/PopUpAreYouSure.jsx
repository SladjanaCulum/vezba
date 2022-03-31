import React from "react";
import "./PopUpAreYouSure.css";
import { useState } from "react";

export const PopUpAreYouSure = ({
  id,
  deleteUser,
  handleCloseBubble,
  handleShowBubble,
  show,
}) => {
  let popUpComponent = (
    <div>
      <div
        style={{ display: show ? "block" : "none" }}
      >
        <p>Are you sure?</p>
        <div>
          <button
            className="btn btn-light btnNo"
            type="button"
            onClick={handleCloseBubble}
          >
            No
          </button>
          <button
            onClick={() => deleteUser(id)}
            className="btn btn-light"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <td className="btn" onClick={handleShowBubble}>
        <i className="material-icons">delete</i>
      </td>
      {popUpComponent}
    </>
  );
};
