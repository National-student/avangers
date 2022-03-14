var elDisplay = document.querySelector('.d-flex');
var elCard = document.querySelector('.card');
var elImg = document.querySelector('.card-img-top');
var elCardBody = document.querySelector('.film-year');
var elTitle = document.querySelector('.card-title');
var elFilmYearDiv = document.querySelector('.film-year-div');
var elFilmYear = document.querySelector('.film-year');
var elFilmRatingDiv = document.querySelector('.film-rating-div');
var elFilmRating = document.querySelector('.film-rating');

for (var result of films) {
    
    // CREATE ELEMENT

    var elDiv = document.createElement('div');
    var elImg = document.createElement('img');

    
    // CLASSLIST ADD

    elDiv.classList.add('card');
    elImg.classList.add('card-top-img');



    
    //TEXTCONTENT
    elImg.textContent = result.poster;
 
 
    // APPENDCHILD

    elDisplay.appendChild(elDiv)
    elDiv.appendChild(elImg);


}
