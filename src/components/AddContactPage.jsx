import React, { useRef } from "react";
import { useNavigate } from "react-router";

export const AddContactPage = ({ setList,list }) => {
  const nameInput = useRef();
  const phoneNumberInput = useRef();
  const typeInput = useRef();
  const imageURLInput = useRef();
  const whatsAppInput = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      name: nameInput.current.value,
      phone: phoneNumberInput.current.value,
      type: typeInput.current.value,
      profilePicture: imageURLInput.current.value,
      isWhatsApp: whatsAppInput.current.value,
    };
    setList((pre) => {
      return [...pre, newContact];
    });
    nameInput.current.value = "";
    phoneNumberInput.current.value = "";
    imageURLInput.current.value = "";
  
  };
  const handleHome=()=>{
     navigate("/");
  }

  return (
    <div>
      AddContactPage
      <form onSubmit={handleSubmit}>
        {" "}
        name :<input type="text" ref={nameInput} />
        <br />
        phone number:
        <input type="text" ref={phoneNumberInput} />
        <br /> type
        <select ref={typeInput}>
          <option value="office">office</option>
          <option value="personal">personal</option>
        </select>
        <br />
        image url :<input type="text" ref={imageURLInput} />
        <br />
        whatsapp active:
        <select ref={whatsAppInput}>
          <option value={true}>Active</option>
          <option value={false}>Not Active</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={handleHome}>home</button>
    </div>
  );
};
