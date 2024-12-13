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
  describe: "remove note",
  handler: () => {
    console.log("remove this note");
  },
});

yargs.command({
  command: "list",
  describe: "list notes",
  handler: () => {
    console.log("list all notes");
  },
});

yargs.command({
  command: "read",
  describe: "read note",
  handler: () => {
    console.log("read this note");
  },
});

console.log(yargs.argv);
