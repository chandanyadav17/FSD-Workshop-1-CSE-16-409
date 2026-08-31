import {EventEmitter } from "node:events";
const task = new EventEmitter();

//Register Listeners
task.on("greet",(name)=> {
    console.log(`Hello.${name}! Welcome to the session`);
});

task.on("exit",(reason)=> {
    console.log(`session ending. reason: ${reason}`);
});

// emitter trigger events 
task.emit("greet","students");
task.emit("exit","class completed");