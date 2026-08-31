console.log("start");
process.nextTick(() => {
    console.log("nextTick");

});
setTimeout(() => {
    console.log("setTimeout");
}, 1000);

setImmediate(() => {
    console.log("setImmediate");
});

console.log("end");