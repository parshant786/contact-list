import React from "react";
import { useNavigate } from "react-router";
import { ContactCard } from "./ContactCard";

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
    <div className="home-container">
      <div className="home-header">
        <div className="home-text">Home</div> <button onClick={handleAddToContact}>add to contact</button>
      </div>
      {list.sort(compare).length ? (
        <div className="list-container">
          {list.map((contact) => {
            return <ContactCard contact={contact} handleDelete={handleDelete} handleEdit={handleEdit} />;
          })}
        </div>
      ) : (
        <div className="default-not-found">no contact found</div>
      )}
    </div>
  );
};

export default HomePage;
