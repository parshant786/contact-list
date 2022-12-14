import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export const AddContactPage = ({ setList }) => {
  const nameInput = useRef();
  const phoneNumberInput = useRef();
  const typeInput = useRef();
  const imageURLInput = useRef();
  const whatsAppInput = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = imageURLInput.current.files[0];
    if (image !== null) {
      try {
        const imageRef = ref(storage, `images/${image.name + v4()}`);
        const snapshot = await uploadBytes(imageRef, image);
        const path = await getDownloadURL(snapshot.ref);
        const newContact = {
          id: Date.now(),
          name: nameInput.current.value,
          phone: phoneNumberInput.current.value,
          type: typeInput.current.value,
          profilePicture: path || null,
          isWhatsApp: whatsAppInput.current.value,
        };
        setList((pre) => {
          return [...pre, newContact];
        });
        nameInput.current.value = "";
        phoneNumberInput.current.value = "";
        imageURLInput.current.value = "";
      } catch (e) {
        console.log(e);
      }
    }
  };
  const handleHome = () => {
    navigate("/");
  };

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
        image url :<input type="file" ref={imageURLInput} />
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
