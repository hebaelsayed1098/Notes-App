const fs =require('fs')
const chalk =require('chalk')
const addNote=(title,body)=>{
  const notes = loadNote()
  const duplicateNote =notes.find((note)=>{
     return note.title===title
  })
  if(!duplicateNote){
    notes.push({
      title:title ,
      body:body
  })
saveNote(notes)
  console.log(chalk.green.inverse('New note added!'))
  }
  else{
    console.log(chalk.red.inverse('Note title taken !'))
  }
 
}
const readNote=(title)=>{
 const notes =loadNote()
 const findNote =notes.find((note)=>{
  return note.title === title
 })
 if(findNote){
  console.log('Note title : '+ findNote.title)
 console.log('Note body : '+ findNote.body)
}
else{
  console.log(chalk.red.inverse('Note not found !'))
}
}
const removeNote=(title)=>{
const notes=loadNote()
const noteToKeep =notes.filter((note)=>{
 return note.title !== title
})

if(notes.length === noteToKeep.length){
  console.log(chalk.bgRed('No note found'))
}
else{
saveNote(noteToKeep)
console.log(chalk.bgGreen('Note removed!'))
}
}
const listNotes=()=>{
  console.log(chalk.inverse('Your note : '))
  const notes =loadNote()
  notes.forEach((note) => {
    console.log('Title : '+note.title)
  });
  
}
const loadNote=()=>{
    try{
 const dataBuffer =fs.readFileSync('notes.json')
 const dataJson =dataBuffer.toString()
 return JSON.parse(dataJson)
}
catch(e){
 return []
}
}
const saveNote =(note)=>{
const dataJson =JSON.stringify(note)
 fs.writeFileSync('notes.json' ,dataJson)

}
module.exports ={
    addNote :addNote ,
    removeNote:removeNote ,
    listNotes:listNotes ,
    readNote :readNote
}