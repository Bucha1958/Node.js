const chalk = require('chalk');
const yargs = require('yargs')
const validator = require('validator')
const notes = require("./note.js")

// Create a command add, remove, list and read
// Command add
yargs.command({
    command: 'add',
    description: 'add a new note',
    builder: {
        title: {
            description: 'My title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'My body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }

})

// Command remove
yargs.command({
    command: 'remove',
    description: 'remove a note',
    builder: {
        title: {
            description: 'My title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.removeNotes(argv.title)
    }
})

// Command list
yargs.command({
    command: 'list',
    description: 'list the items',
    handler() {
        notes.listNotes()
    }
})

// Command read
yargs.command({
    command: 'read',
    description: 'read the note',
    builder: {
        title: {
            description: 'My read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()
