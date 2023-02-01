const fs = require('fs')
const chalk = require('chalk')

// This function adds notes to already existing file
const addNotes = (title, body) => 
{
    const notes = loadNotes()
    // Add a filter to the array
    const duplicateNote = notes.filter(note => note.title === title)

    if (duplicateNote.length === 0)
    {
         // Push to the array
        notes.push({
        title: title,
        body: body})
        // Write a function that will save the file
        saveNotes(notes)
        console.log("A new note added")
    }
    else
    {
        console.log("Title is taken, please choose a different title")
    }
   
}

// This function update the JSON file
const saveNotes = (notes) => 
{
    const convertToJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', convertToJson)
}

// Load the existing notes into the array
const loadNotes = () => 
{
    try 
    {
    const dataBuffer = fs.readFileSync('notes.json')
    const convertToJson = dataBuffer.toString()
    return JSON.parse(convertToJson)
    }
    catch (e)
    {
        return []
    }
}

// Remove a note function
const removeNotes = (title) => 
{
    const notes = loadNotes()

    duplicateNote = notes.filter((note) => note.title === title)

        if (duplicateNote.length === 1)
        {
            notes.pop({
                title: title
            })
            console.log(chalk.green("Deleted successfully!"))
            saveNotes(notes)
        }
        else
        {
            console.log(chalk.red("The title does not exist"))
        }

}

// Write a function that list the title of all our notes
const listNotes = () =>
{
    const notes = loadNotes()

    if (notes.length !== 0)
    {
        console.log(chalk.green.inverse("Items in the notes are:"))
        return notes.forEach(note => console.log(note.title))
    }
    else
    {
        console.log(chalk.red.inverse("The note is empty!"))

    }
}

const readNotes = (title) =>
{
    const notes = loadNotes()

    const note = notes.find(note => note.title === title)

    if (note.length !== 0)
    {
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    }
    else
    {
        console.log(chalk.red.inverse("The items you want to read do not exists!"))
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}