eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    document.getElementById("translate-to").onchange = function () {
        ui.changeUI();
    }
}
const translate = new Translate(document.getElementById("word").value,document.getElementById("translate-to").value);
const ui = new UI();

function translateWord(e) {
  

    translate.changeParameters(document.getElementById("word").value,document.getElementById("translate-to").value);
    translate.translateWord(function(err,response){
        if(err){
            console.log(err);
        }
        else{
            document.getElementById("result").style.display="flex";
            ui.displayTranslate(response);
        }

    });
    e.preventDefault();
}
