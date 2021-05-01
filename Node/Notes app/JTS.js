// ####changing a json file 

const fs = require("fs")
const dataBuffer=fs.readFileSync("data.json")

const dataJSON= dataBuffer.toString()

const data=JSON.parse(dataJSON)

data.name= "Nur"
data.planet= "Arpohridx"
data.age="1-Millenium"

const userJSON = JSON.stringify(data)

// fs.writeFileSync("userJSON.txt", userJSON)
fs.writeFileSync("userJSON.json", userJSON)
// fs.writeFileSync("data.json", userJSON)
 
console.log(userJSON)