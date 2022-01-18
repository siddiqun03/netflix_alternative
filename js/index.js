let elFilmList = document.querySelector(".films_list");
let elFilmsContainer = document.querySelector(".films_container");

const newMovies = function (append, arr, num) {
  for (let i = 0; i < num; i++) {
    //create elements #e50914
    let moviesItem = document.createElement("li");
    let moviesItemcover = document.createElement("a");
    let moviesImg = document.createElement("img");
    let moviesHeading = document.createElement("h2");
    let moviesDesc = document.createElement("p");
    let moviesImDb = document.createElement("p");
    let moviesRate = document.createElement("p");

    //append Childs #e507
    append.appendChild(moviesItem);
    moviesItem.appendChild(moviesImg);
    moviesItem.appendChild(moviesHeading);
    moviesItem.appendChild(moviesDesc);
    moviesItem.appendChild(moviesImDb);
    moviesItem.appendChild(moviesRate);
    moviesItem.appendChild(moviesItemcover);

    //set class
    moviesItem.setAttribute("class", "film_item");
    moviesItemcover.setAttribute(
      "href",
      `https://m.imdb.com/title/${arr[i].id}/fullcredits/cast`
    );
    moviesItemcover.setAttribute("class", "film_cover");
    moviesItemcover.setAttribute("target", "blank");
    moviesImg.setAttribute("class", "films_img");
    moviesImg.setAttribute("src", `${arr[i].image}`);
    moviesHeading.setAttribute("class", "film_header");
    moviesDesc.setAttribute("class", "film_crew");
    moviesImDb.setAttribute("class", "imDb_Rating");
    moviesRate.setAttribute("class", "rankUp_Down");

    //Text content #7777aa
    moviesHeading.textContent = arr[i].fullTitle;
    moviesDesc.textContent = arr[i].crew;
    moviesImDb.textContent = `ImDb: ${arr[i].imDbRating}`;
    moviesRate.textContent = `Rate Up: ${arr[i].rankUpDown}`;
    // moviesItemcover.textContent = "More Info";
  }
};

newMovies(elFilmList, movies, 10);

let seeBtn = document.createElement("button");
elFilmsContainer.appendChild(seeBtn);
seeBtn.setAttribute("class", "see_all");
seeBtn.textContent = "See More";

let num = 0;
seeBtn.addEventListener("click", (evt) => {
  elFilmList.innerHTML = null;
  num += 20;
  newMovies(elFilmList, movies, num);
  if (num === movies.length) {
    elFilmsContainer.removeChild(seeBtn);
  }
});
