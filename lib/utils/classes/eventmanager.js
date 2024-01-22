
export default class EventManager{


    emit(name, data){
        const event = new CustomEvent(name, data);
        window.dispatchEvent(event);
    }

    listen(name, callback){
        window.addEventListener(name, e=>{
            callback(e.detail);
        });
    }
}