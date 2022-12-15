import React from "react";

export const ContactCard = ({ handleDelete, handleEdit, contact }) => {
  let { name, phone, type, profilePicture, isWhatsApp, id } = contact;

  return (
    <div className="card-container" >
      <div className="img-container"><img src={profilePicture} alt="photoj" /></div>
      
      <div>{name}</div>
      <div>Contact-Number:{phone}</div>
      <div> Contact-type: {type} </div>
      <div> whatsapp: {isWhatsApp ? "active" : "Not active"} </div>
      <button
        onClick={() => {
          handleEdit(id);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
