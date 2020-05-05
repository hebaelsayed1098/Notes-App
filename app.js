const validator =require('validator')
const chalk =require('chalk')
const yargs = require('yargs')
const notes=require('./notes.js')
//Create add command
console.log("fgfgfg")
yargs.command({
    command:'add' ,
    description :'Add a new note' ,
    builder:{
      title:{
          description:'Note title ' ,
          demandOption:true,
          type:'string'
      } ,
      body:{
          description: 'Note body' ,
          demandOption:true ,
          type:'string'
      }
    },
    handler (argv){
     notes.addNote(argv.title ,argv.body)
    }
})
// Create remove command 
yargs.command({
    command:'remove' ,
    builder:{
        title:{
            description: 'Note title' ,
            demandOption :true,
            type:'string'
        }
    },
    description:'Remove a new note' ,
    handler(argv){
       notes.removeNote(argv.title)
    }
})
//Create list command
yargs.command({
    command:'list' ,
    description:'List a new note' ,
    handler (){
        notes.listNotes()
    }
})
//Create read command 
yargs.command({
    command:'read' ,
    description :'Read a note' ,
    builder:{
        title:{
            description: 'Note title',
           demandOption:true ,
           type:'string '
        }
    },
    handler (argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()