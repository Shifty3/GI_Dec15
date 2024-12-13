const fs = require("fs");

const getNote = () => {
  return "Your notes";
};

const addNote = (title, body) => {
  const newNote = loadNotes();

  const dubNotes = newNote.filter((note) => {
    return note.title === title;
  });

  if (dubNotes.length === 0) {
    //cretaing object to store values
    newNote.push({
      title: title,
      body: body,
    });

    savedNotes(newNote);
  } else {
    console.log("note title taken");
  }
};

const savedNotes = (notes) => {
  //changing the json file to whatever the input was
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  //try to run a block of code or catches a error
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
//you can mak ea export object to export multiple things
module.exports = {
  getNote: getNote,
  addNote: addNote,
};
