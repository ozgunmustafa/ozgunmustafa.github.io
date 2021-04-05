const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");



eventListeners();

function eventListeners(){
    form.addEventListener("submit",addMovie);
    document.addEventListener("DOMContentLoaded",function(){
        let movies = Storage.getMoviesFromStorage();
        UI.loadAllMovies(movies);
    });

    secondCardBody.addEventListener("click", deleteMovie);
    clear.addEventListener("click",clearMovies);
}

function addMovie(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === "" ){
        UI.displayMessages("danger","Tüm alanları doldurun");
    }
    else{
        const newMovie = new Movie(title,director,url);
        UI.addMovieToUI(newMovie); // arayüze film ekleme
        Storage.addMovieToStorage(newMovie);       
        UI.displayMessages("success","Başarıyla Eklendi");

    }

    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}
function deleteMovie(e){
    if(e.target.id === "delete-film"){
        UI.deleteMovieFromUI(e.target);
        Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("success","Silindi.");
    }
}

function clearMovies(){
    if(confirm("Tüm Filmleri Silmek Üzeresin")){
        UI.clearAllMoviesFromUI();
        Storage.clearAllMoviesFromStorage();
    }
}