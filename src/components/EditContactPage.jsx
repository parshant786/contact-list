import React, { useRef } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export const EditContactPage = ({ list, setList }) => {
  const params = useParams();
  const navigate = useNavigate();
  const editContactId = params.editContact;
  const nameInput = useRef();
  const phoneNumberInput = useRef();
  const typeInput = useRef();
  const imageURLInput = useRef();
  const whatsAppInput = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = imageURLInput.current.files[0];
    if (image !== null) {
      try {
        const imageRef = ref(storage, `images/${image.name + v4()}`);
        const snapshot = await uploadBytes(imageRef, image);
        const path = await getDownloadURL(snapshot.ref);
        const newData = {
          id: editContactId,
          name: nameInput.current.value,
          phone: phoneNumberInput.current.value,
          type: typeInput.current.value,
          profilePicture: path || null,
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
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <div className="editPage-header">Edit Contact Page</div>
      <div className="from-container">
        <form onSubmit={handleSubmit}>
          <div className="form-line">
            <label>name :</label> <input type="text" ref={nameInput} placeholder="full-name" />
          </div>
          <div  className="form-line">
            <label>number:</label>
            <input type="text" ref={phoneNumberInput} placeholder="phone-number" />
          </div>
          <div  className="form-line">
            <label>Type:</label>
            <select ref={typeInput}>
              <option value="office">office</option>
              <option value="personal">personal</option>
            </select>
          </div>
          <div  className="form-line">
            <label>image url:</label> <input type="file" ref={imageURLInput} />
          </div>
          <div  className="form-line">
            <label>whatsapp:</label>
            <select ref={whatsAppInput}>
              <option value={true}>Active</option>
              <option value={false}>Not Active</option>
            </select>
          </div>
          <input type="submit" value="Submit" className="btn-submit" />
        </form>
      </div>
    </div>
  );
};
