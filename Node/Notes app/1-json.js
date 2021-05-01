const fs=require("fs")

const book = 
{
	title:"The white bengal tiger",
	author:"Arbind agarwal"
}


// const bookJSON=JSON.stringify(book)
// fs.writeFileSync("1-json.json",bookJSON)

// console.log(bookJSON.title)
// console.log(bookJSON)


// const parsedData= JSON.parse(bookJSON)
// console.log(parsedData.author)


const dataBuffer =fs.readFileSync("1-json.json")
// console.log(dataBuffer)
const dataJSON=dataBuffer.toString()
// console.log(dataJSON.title)
const data = JSON.parse(dataJSON)
console.log(data.title)
