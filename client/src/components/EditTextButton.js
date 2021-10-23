import React, { createElement } from "react";
import { useAuthState } from "../context/auth";
import classNames from "classnames";

export default function EditTextButton() {
  const { user } = useAuthState();
  let editButton;

  const editText = (e) => {
    if(user){
      var parentNode = e.target.parentNode.parentNode.parentNode
      var textArea = createElement("textarea")
      var button = createElement()
      parentNode.innerHTML = textArea

      console.log(parentNode);
      console.log(textArea);
      console.log(button);
    }
  }
  
  if(user){
    editButton = (
      <span id="edit">
        <button
          type="button"
          className={classNames("btn", {
          invisible: !user,
          })}
          disabled={!user}
        >
          <i className="fas fa-edit" onClick={editText}></i>
        </button>
      </span>
    );
    return editButton;
  }else{
    return <span className="hidden"></span>;
  }
}
