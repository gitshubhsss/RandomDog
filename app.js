let url = "https://dog.ceo/api/breeds/image/random";
let dogImg = document.querySelector(".image");
let btn = document.querySelector("button");
let img=document.querySelector("img");

async function getDog() {
  try {
    let res = await axios.get(url);
    let imgLink = res.data.message;
    dogImg.innerHTML=`<img src="${imgLink}">`
    console.log(imgLink);
    
  } catch (err) {
    console.log("Error", err);
  }
}
btn.addEventListener("click", () => {
  getDog();
});
