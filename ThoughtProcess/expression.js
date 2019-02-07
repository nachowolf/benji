let face = document.querySelector("#face")
let neutralFace = null;
window.onload(defaultEmo())


function wait(state) {
    if (state === true) {
        neutralFace = setInterval(blink, 1500);
    }
    else if (state === false){
        clearInterval(neutralFace)

    }
}
// let user_input = document.querySelector('#user_input');

// face.innerHTML = '&#x1F603'



function defaultEmo() {
wait(true)
}

function blink() {
    face.innerHTML = '&#x1F604'
    setTimeout(openEyes, 200)
    function openEyes() {
        face.innerHTML = '&#x1F603'
    }
}


// if(input === ''){
//     wait = setInterval(blink, 3000);
// }

function userTyping() {
    if (this.value !== "") {
        wait(false)
        face.innerHTML = '&#x1F914'
        setTimeout(wait(true), 1)
    }
}


function emotion(reply) {
    wait(false)
    // console.log(reply)
    for (let greet of greets) {
        if (greet == reply) {
            face.innerHTML = '😁'
        }
    };

    for (let defaultRes of defaultResponses){
        if(defaultRes == reply){
            if(reply == 'English MotherF#%$!Do you speak it?'){
                face.innerHTML = '🤬'
            }
            else{
            face.innerHTML ='😅'
            }
        }
    };



    if (reply == "I am Benji.") {
        face.innerHTML = '&#x1F600'
    }


    setTimeout(wait(true), 4000)

}




