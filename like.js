let likecount=0;
const likes = document.querySelectorAll(".blike")
const like = document.querySelector("#likecountx");
const logo = document.querySelector("#logos");
blike.addEventListener("click", () => {
    console.log("Art was Liked");
    likecount++;
    console.log(likecount);
    likecountx.innerText= likecount;
    logos.innerHTML= "<span>&#9829; Like</span>";

});
let likecount2=0;
blike2.addEventListener("click", () => {
    console.log("Art was Liked");
    likecount2++;
    console.log(likecount2);
    likecountx2.innerText= likecount2;
    logos2.innerHTML= "<span>&#9829; Like</span>";
    
});