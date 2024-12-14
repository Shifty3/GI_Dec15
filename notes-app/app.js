const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

//create add command
yargs.command({
  //used to make command name
  command: "add",
  describe: "add new note",
  //builder specifies the arguments the command should support
  builder: {
    title: {
      describe: "Note title",
      //checking if flag is required
      demandOption: true,
      //this defines what data type the flag has to be
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  //handler is the funciton that contains the code to execute the command
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  builder: {
    title: {
      describe: "Title",
      demandOption: true,
      type: "string",
    },
  },
  describe: "remove note",
  handler: (argv) => {
    console.log(notes.removeNote(argv.title));
  },
});

yargs.command({
  command: "list",
  // builder: {
  //   title: {
  //     describe: "List notes",
  //     demandOption: true,
  //     type: "string",
  //   },
  // },
  describe: "list notes",
  handler: (argv) => {
    notes.listNotes(argv.title);
  },
});

yargs.command({
  command: "read",
  builder: {
    title: {
      describe: "Title",
      demandOption: true,
      type: "string",
    },
  },
  describe: "read note",
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

console.log(yargs.argv);
