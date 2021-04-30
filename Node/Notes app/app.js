
// writing files
// const fs = require("fs")
// fs.writeFileSync("note.txt","Dill se re. Dill to akher dill hain na! Mithi se mushkil hain na.")
// fs.appendFileSync("note.text", "bedonar du chokh jure klanti, khone khone ta e mone hoy");


// importing modules
// const sum  = require("./utils.js")
// const s = sum(4,3)
// console.log(s)


// using npm package
// const validator = require ("validator")
// const getNotes = require("./notes.js")
// const msg = getNotes()
// console.log(msg)

// console.log(validator.isEmail("nuraalam@hotmail.com"))
// console.log(validator.isEmail("nuraalam.com"))
// console.log(validator.isEmail("nuraalam.edu.bd.com"))
// console.log(validator.isEmail("nuraalam@edu.bd.com"))

// console.log(validator.isURL("nuraalam"))
// console.log(validator.isURL("https://www.facebook.com/"))


// using chalk library 
const chalk = require("chalk")
console.log(chalk.green("success!!!"))
// console.log(chalk.blue("success!!!"))
// console.log(chalk.red("success!!!"))
// console.log(chalk.grey("success!!!"))
// console.log(chalk.grey.inverse.bold('Bold yellow!'))
// // console.log(chalk.white.inverse.bold('Bold yellow!'))

// getting input
// console.log(process.argv[2])
const command = process.argv[2]

if (command === "add")
{
	console.log("adding note!")
}
else if (command === "remove")
{
	console.log(" removing note!")
}

const yargs = require("yargs")
// yargs versions
yargs.version("1.1.0")

// adding command
yargs.command(
{
	command:"add",
	describe:"add a new note",
	handler:function()
	{
		console.log("adding new note!")
	}
})

yargs.command(
{
	command:"remove",
	describe:"remove a new note",
	handler:function()
	{
		console.log("removing new note!")
	}
})
yargs.command(
{
	command:"list",
	describe:"list a new note",
	handler:function()
	{
		console.log("listing new note!")
	}
})

yargs.command(
{
	command:"read",
	describe:"read a new note",
	handler:function()
	{
		console.log("read new note!")
	}
})

console.log(yargs.argv)