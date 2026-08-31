import {EventEmitter} from "node:events" ;
function createDOMElement() {
    const emitter = new EventEmitter() ;

    return {
         addEventListener(eventName , callback) {
            emitter.on(eventName , callback) ;
        },
        removeEventListener(eventName , callback) {
            emitter.off(eventName , callback) ;
        } ,

        dispatchEvent(event) {
            emitter.emit(event.type,event) ;
        },
    };
}

const button = createDOMElement();
button.addEventListener('click',()=>{
    console.log("button clicked")
});
button.dispatchEvent({
    type: "click",
});
button.addEventListener('save',handleclick);

function handleclick(event) {
    console.log(`button clicked`);
    console.log(`Event type: ${event.type}`);
    console.log(`message: ${event.detail}`);
}
button.addEventListener('save', handleclick);
button.dispatchEvent({
    type: 'save',
    detail: 'Data saved successfully!',
});