function UI(){
    this.outputImage = document.getElementById("imgLanguage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outpuWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("translate-to");

}

UI.prototype.changeUI = function(){

    this.outputImage.src = `images/${this.languageList.value}.png`;
    this.outputLanguage.textContent =  this.languageList.options[this.languageList.selectedIndex].textContent;

}

UI.prototype.displayTranslate = function(word){
    this.outpuWord.textContent = word;
}