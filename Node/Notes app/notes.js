const getNotes= function()
{
	return "your notes"
}
const fs= require("fs")

const addNote = function(title,price)
{
	const notes=loadNotes()
	console.log(notes)
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
		return "file not available"
	}
}


// module.exports =getNotes
module.exports=
{
	"getNotes":getNotes,
	"addNote":addNote
}



// node app.js add --title="t" --price="b"//cmd