let url = "https://dog.ceo/api/breeds/image/random";
let dogImg = document.querySelector(".image");
let btn = document.querySelector("button");
let img=document.querySelector("img");
let btnNames=["new dog","Get buetiful dog","Get more dogs","Get dogs","I love this dog","Ohh this is my dog"];
async function getDog() {
  try {
    let res = await axios.get(url);
    let imgLink = res.data.message;
    dogImg.innerHTML=`<img src="${imgLink}">`
  } catch (err) {
    console.log("Error", err);
  }
}

btn.addEventListener("click",()=>{
  getDog();
  getRandomBtn();
})

function getRandomBtn(){
  let randInx=Math.floor(Math.random()*btnNames.length);
  let randvalue=btnNames[randInx];
  btn.innerText=randvalue;
}

function oneAfterOne(){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
      getDog();
      resolve();
    }, 1500);
   }).then((res)=>{
    console.log(res);
   })
}

async function showDog(){
  for(let i=0;i<=2;i++){
    await oneAfterOne();
    console.log(`image ${i}`);
  }
  setTimeout(() => {
    btn.innerText="Get more images";
  }, 1000);
}
showDog();


