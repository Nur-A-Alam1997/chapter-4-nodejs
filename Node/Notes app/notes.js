const getNotes= function()
{
	return "your notes"
}

const fs= require("fs")
const chalk = require ("chalk")


const addNote = function(title,price)
{
	const notes=loadNotes()
	const duplicateNotes=notes.filter(function(note)
	{
		return note.title === title
	})

	if (duplicateNotes.length===0)
	{
		notes.push(
		{
			"title":title,
			"price":price
		})

		saveNotes(notes)
		// console.log("new note added!")
		console.log(chalk.green.inverse("new note added!"))
	}

	else
	{
		// console.log("note title taken!")
		console.log(chalk.red.inverse("note title taken!"))

	}

	saveNotes(notes)

	// console.log(notes)
}


const removeNote = function(title)
{
	const notes=loadNotes()
	const notesToKeep=notes.filter(function(note)
	{
		return note.title !== title
	})

	if (notes.length>notesToKeep.length)
	{

		console.log(chalk.green.inverse("Note removed!"))
		saveNotes(notesToKeep)
	}
	else
	{
		console.log(chalk.red.inverse("No Note found!"))
	}
}


const listNote = function()
{	
	const notes = loadNotes()
	console.log(chalk.inverse("Your notes!!!"))
	notes.forEach(function(note)
	{
		console.log(note.title)
	})
	
}

const readNote = function(title)
{
	const notes = loadNotes()
	// const note = notes.find((note) => note.title === title)
	const note=notes.find(function(note)
	{
		return	note.title===title
	})

	if (note)
	{
		console.log(chalk.inverse(note.title))
		console.log(note.price)
	}
	else
	{
		console.log(chalk.red.inverse("note not found!!!"))
	}
 
}


// const readNote = (title) => {
//     const notes = loadNotes()
//     const note = notes.find((note) => note.title === title)

//     if (note) {
//         console.log(chalk.inverse(note.title))
//         console.log(note.price)
//     } else {
//         console.log(chalk.red.inverse('Note not found!'))
//     }
// }




const saveNotes = function(notes)
{
	dataJSON=JSON.stringify(notes)
	fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes =function()
{	
	try
	{
		const dataBuffer= fs.readFileSync("notes.json")
		const dataJSON=dataBuffer.toString()
		return JSON.parse(dataJSON)		
	}
	catch(e)
	{
		// return "file not available"
		return []
	}
}


// module.exports =getNotes
module.exports=
{
	"getNotes":getNotes,
	"addNote":addNote,
	"removeNote":removeNote,
	"listNote":listNote,
	"readNote":readNote
} 



// node app.js add --title="t" --price="b"//cmd