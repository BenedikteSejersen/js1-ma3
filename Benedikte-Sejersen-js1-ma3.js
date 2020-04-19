// question 1
(a,b) => {
    return a-b;
}


// question 2
fetch("https://api.rawg.io/api/games?genres=sports")
    .then(function(response) {
        return response.json;
    })
    .then(function(json) {
        console.log(json);
    })
    .catch(function(error) {
        document.location.href = "error.html";
        console.dir(error);
    });



// question 3
const giraffes = "giraffes";
const catsToGiraffes = giraffes.replace("cats","giraffes");


// question 4
const x = document.location.search;
const params = new URLSearchParams(x);
console.dir(params);

let userId = 7;

const baseUrl = "https://my.site.com";
const userUrl = `${baseUrl}?userId=`;

const page = userUrl + userId;

if (params.has("userId") > 10) {
    document.location.href ="second.html";
} else if (params.has("userId") < 10)  {
    document.location.href = "first.html";
} else (params.has("userID") === "undefined") {
    document.location.href = "third.html");
}



// question 5
const container = document.querySelector(".container");
const removeButton = document.querySelector(".btn");
container.removeChild(removeButton);



// question 6
const container = document.querySelector(".animals");
const liElephants = document.querySelector(".elephants");

const liTag = document.createElement("li");
liTag.className = "parrots";

const liTagContent = document.createTextNode("Parrots");
container.appendChild(liTag);

liTag.innerText = liTagContent.textContent;

liTag.after(liElephants);



// question 7 ???
const ratingUrl = "http://api.rawg.io/api/games/3801";

fetch(ratingUrl)
.then(function(response) {
    return response.json;
})
.then(function(jsson) {
    createRatingProperty(json);
    console.dir(json);
})
.catch(function(error) {
    console.dir(error);
});

function createRatingProperty(ratingValue) {
    const ratingText = document.querySelector(".rating");
    ratingText.innerText = ratingValue.rating;
}