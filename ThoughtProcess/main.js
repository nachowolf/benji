let button = document.querySelector('#submit');
let user_input = document.querySelector('#user_input');
let output = document.querySelector('#response');

let input = user_input.value;
async function setup() {
    let bot = new RiveScript();
    bot.loadFile("ThoughtProcess/identity.rive", identityReady, identityError);
    bot.loadFile("ThoughtProcess/substitutions.rive", substitutionsReady, substitutionsError);
    bot.loadFile("ThoughtProcess/brain.rive", brainReady, brainError);

  
function identityReady(){
  console.log("Chatbot identity loaded!")
}

function identityError(){
  console.log("Chatbot identity error!")
}

function substitutionsReady(){
  console.log("Chatbot rephraser loaded!")
}

function substitutionsError(){
  console.log("Chatbot rephraser error!")
}

    function brainReady() {
      console.log('Chatbot ready!');
      bot.sortReplies();
    }
  
    function brainError() {
      console.log('Chatbot error!')
    }

    user_input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        chat()
      }
    });


    button.addEventListener("click", chat)

    async function chat() {
      input = user_input.value;
        let reply = await bot.reply("local-user", input);
        // console.log(reply)
        user_input.value = ""
        output.innerHTML = reply;
        // console.log(reply)
        emotion(reply)
      }
 
    }

    setup()