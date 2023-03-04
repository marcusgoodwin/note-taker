const fs = require("fs").promises;
const path = require("path");

async function updateDb(id, notesArray) {
  const deletedNote = id;
  for (let i = 0; i < notesArray.length; i++) {
    if (deletedNote === notesArray[i].id) {
      notesArray.splice(i, 1);
      try {
        await fs.writeFile(
          path.join(__dirname, "../db/db.json"),
          JSON.stringify({ notes: notesArray }, null, 2)
        );
      } catch (error) {
        console.error(error);
      }
      break;
    }
  }
}

function createNewNote(body, notesArray) {
  const newNote = body;
  notesArray.push(newNote);
  try {
    fs.writeFile(
      path.join(__dirname, "../develop/db/db.json"),
      JSON.stringify(notesArray, null, 2)
    );
  } catch (error) {
    console.error(error);
  }
  return newNote;
}

module.exports = {
  updateDb,
  createNewNote,
};
