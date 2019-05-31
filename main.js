const blogName= document.querySelector(".article__header").textContent="Welcome to the Alex blog.";
const allList= document.querySelectorAll(".article__header");
allList[0].classList.add("important");
allList[1].classList.add("important");
    console.log(allList);
const border= document.querySelector(".dashed").style.border="none";
const footer= document.querySelector(".article__footer").classList.add("goldenrod");