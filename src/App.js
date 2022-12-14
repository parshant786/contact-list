import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
// import HomePage  from "./components/HomePage";
import { AddContactPage } from "./components/AddContactPage";
import { EditContactPage } from "./components/EditContactPage";
import { useState ,useEffect} from "react";
const LazyHome= React.lazy(()=>import ("./components/HomePage"));
const getListFromLocalstorage = () => {
  let list = JSON.parse(localStorage.getItem("LIST"));
  let result = list ? list : [];
  return result;
};
function App() {
  let [list, setList] = useState(getListFromLocalstorage());
  useEffect(() => {
    localStorage.setItem("LIST", JSON.stringify(list));
  }, [list]);
  // const contacttype = { PERSONAL: "personal", OFFICE: "office" };
  // const contactList = [
  //   {
  //     id: 1,
  //     name: "parshant",
  //     phone: "9896545880",
  //     type: contacttype.PERSONAL,
  //     profilePicture: "url",
  //     isWhatsApp: true,
  //   },
  //   {
  //     id: 2,
  //     name: "ram",
  //     phone: "9896545880",
  //     type: contacttype.PERSONAL,
  //     profilePicture: "url",
  //     isWhatsApp: true,
  //   },
  //   {
  //     id: 3,
  //     name: "new",
  //     phone: "9896545880",
  //     type: contacttype.OFFICE,
  //     profilePicture: "url",
  //     isWhatsApp: true,
  //   },
  // ];

  return (
    <>
      <Routes>
        <Route path="/" element={<React.Suspense fallback="LOADING"><LazyHome list={list} setlist={setList} /></React.Suspense>} />
        <Route path="addContact" element={<AddContactPage setList={setList} list={list} />} />
        <Route path="editContact/:editContact" element={<EditContactPage setList={setList} list={list} />} />
      </Routes>
    </>
  );
}

export default App;
