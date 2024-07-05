import React, { useState } from "react";
import Home from "../../screens/home";
import AddNote from "../../screens/addNote";
import EditNote from "../../screens/editNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  editNote,
  noteToEdit,
  setNoteToEdit,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setNoteToEdit={setNoteToEdit}
        />
      );
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          noteToEdit={noteToEdit}
          editNote={editNote}
        />
      );
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ]);
  const [noteToEdit, setNoteToEdit] = useState(null); // State untuk catatan yang akan diedit

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
    setCurrentPage("home"); // Kembali ke halaman utama setelah menambahkan catatan
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  const editNote = (id, newTitle, newDesc) => {
    setNoteList(
      noteList.map((note) =>
        note.id === id ? { ...note, title: newTitle, desc: newDesc } : note
      )
    );
    setCurrentPage("home"); // Kembali ke halaman utama setelah mengedit catatan
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      deleteNote={deleteNote}
      editNote={editNote}
      noteToEdit={noteToEdit}
      setNoteToEdit={setNoteToEdit}
    />
  );
};

export default App;
