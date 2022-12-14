import React, { useRef } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export const EditContactPage = ({ list, setList }) => {
  const params = useParams();
  const navigate = useNavigate();
  const editContactId = params.editContact;
  const nameInput = useRef();
  const phoneNumberInput = useRef();
  const typeInput = useRef();
  const imageURLInput = useRef();
  const whatsAppInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: editContactId,
      name: nameInput.current.value,
      phone: phoneNumberInput.current.value,
      type: typeInput.current.value,
      profilePicture: imageURLInput.current.value,
      isWhatsApp: whatsAppInput.current.value,
    };
    const index = list.findIndex((contact) => {
      return contact.id.toString() === editContactId;
    });
   
    setList((pre) => {
      const arr = [...pre];
      arr[index] = newData;
      return arr;
    });
    nameInput.current.value = "";
    phoneNumberInput.current.value = "";
    imageURLInput.current.value = "";
    navigate("/");
  };

  return (
    <div>
      EditContactPage
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
    </div>
  );
};
