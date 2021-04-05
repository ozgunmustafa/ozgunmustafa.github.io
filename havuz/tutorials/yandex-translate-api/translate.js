function Translate(word, language) {
    this.apikey = "trnsl.1.1.20200517T102740Z.584aef7549679e34.ff90e94c8937128374c5761ff03d115564c78c5a";
    this.word = word;
    this.language = language;
    this.xhr = new XMLHttpRequest();

};

Translate.prototype.translateWord = function (callback) {
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const jsonResponse=JSON.parse(this.xhr.responseText);
            const jsonText= jsonResponse.text[0];
            callback(null,jsonText);
        }
        else {
           callback(console.error("hata"),null);
        }

    };

    this.xhr.send();
};


Translate.prototype.changeParameters = function(changedSentence,changedLang){
   

    this.word = changedSentence;
    this.language = changedLang;
};