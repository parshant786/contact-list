import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import { AddContactPage } from "./components/AddContactPage";
import { EditContactPage } from "./components/EditContactPage";
import { useState, useEffect } from "react";
import { getListFromLocalstorage } from "./utils";

const LazyHome = React.lazy(() => import("./components/HomePage"));

const conactList = getListFromLocalstorage();

function App() {
  let [list, setList] = useState(conactList);

  useEffect(() => {
    localStorage.setItem("LIST", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="LOADING">
              <LazyHome list={list} setlist={setList} />
            </React.Suspense>
          }
        />
        <Route path="addContact" element={<AddContactPage setList={setList}  />} />
        <Route path="editContact/:editContact" element={<EditContactPage setList={setList} list={list} />} />
      </Routes>
    </>
  );
}

export default App;
