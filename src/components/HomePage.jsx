import React from "react";
import { useNavigate } from "react-router";

const HomePage = ({ list, setlist }) => {
  const navigate = useNavigate();

  const handleAddToContact = () => {
    navigate("/addContact");
  };

  const handleEdit = (id) => {
    navigate(`/editContact/${id}`);
  };

  const handleDelete = (id) => {
    const index = list.findIndex((contact) => {
      return contact.id === id;
    });
    console.log(index);

    if (window.confirm("Press a button!")) {
      setlist((pre) => {
        const arr = [...pre];
        arr.splice(index, 1);
        return arr;
      });
    }
  };

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  return (
    <div>
      Home
      {list.sort(compare).length ? (
        <div>
          {list.map((contact) => {
            return (
              <div key={contact.id}>
                {contact.name}
                <img src={contact.profilePicture} alt="photoj" />
                <button
                  onClick={() => {
                    handleEdit(contact.id);
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(contact.id);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
          <button onClick={handleAddToContact}>add to contact</button>
        </div>
      ) : (
        <div>
          no contact found
          <button onClick={handleAddToContact}>add to contact</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
