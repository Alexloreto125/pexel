document
  .querySelector("section .btn-primary")
  .addEventListener("click", function () {
    console.log("click1");
    pexelsFetch("kitten");
  });
document
  .querySelector("section .btn-secondary")
  .addEventListener("click", function () {
    console.log("click2");
    pexelsFetch("puppies");
  });

const pexelsFetch = function (query) {
  fetch("https://api.pexels.com/v1/search?query=" + query, {
    headers: {
      authorization: "4imd9B3440kiTz16dlcbFO55xVauMoowcoDMog3j4DWDh7JT7TKy3qvC",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Problema fetch");
      }
    })
    .then((object) => {
      console.log(object);
      let allExistImages = document.querySelectorAll(".bd-placeholder-img");
      console.log(allExistImages);

      const All9min = document.querySelectorAll(".card .text-muted");

      All9min.forEach((label, i) => {
        label.innerText = object.photos[i].id;
      });

      //   document.getElementById('custom-search-button').addEventListener('click', ()=> {
      //     const inputField= document.getElementById('search')
      //   })
      const butttonHide = document.querySelectorAll(
        ".btn-group .btn-sm:nth-of-type(2)"
      );
      butttonHide.forEach((btn) => {
        btn.innerText = "HIDE";
        btn.addEventListener("click", function (e) {
          console.log(e.target);
          e.target.closest(".col-md-4").remove();
        });
      });
      console.log(butttonHide);
      for (let i = 0; i < allExistImages.length; i++) {
        allExistImages[i].src = object.photos[i].src.medium;
      }
    })

    .catch((err) => {
      console.log(err);
    });
};
