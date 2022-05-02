// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
import sidebar from "../components/sidebar.js"

document.getElementById("navbar").innerHTML = navbar()
document.getElementById("sidebar").innerHTML = sidebar()

//  api  = https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}

 let india  = document.querySelector("#in").addEventListener("click",showdata)
 let usa = document.querySelector("#us").addEventListener("click",showdata)
 let china = document.querySelector("#ch").addEventListener("click",showdata)
 let uk = document.querySelector("#uk").addEventListener("click",showdata)
 let nezland = document.querySelector("#nz").addEventListener("click",showdata)

   async function showdata(){
   
    try{
        let id = this.id;
        let res  = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`) 

        let data = await res.json()

        console.log(data)

        append(data.articles)

    }
    catch(err){
        console.log(err)
    }

  }
   async function inddata(){
   
    try{
        // let id = this.id;
        let res  = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`) 

        let data = await res.json()

        console.log(data)

        append(data.articles)

    }
    catch(err){
        console.log(err)
    }

  }
  inddata()
let container  = document.getElementById("results")

  function append(data){
   container.innerHTML = null
     data.forEach((el)=>{
        let box = document.createElement("div");

        let title = document.createElement("h3");
       title.innerHTML = el.content;

        box.append(title)
        container.append(box)
     })
}
let id1



 async function main1(){
    let query = document.getElementById("search_input").value
    try{
        
       let res =  await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)

       let data = await res.json();
      return data.articles
    }
    catch(err){
        console.log(err)
    }
}


 function append1(data){
     container.innerHTML =null
   data.forEach((el)=>{
   let box = document.createElement("div");

   let img  = document.createElement("img");
   img.src = el.urlToImage

   let des = document.createElement("p");
   des.innerHTML = el.description;

   let title = document.createElement("h1");
   title.innerHTML = el.title;

   box.append(img,des,title)

   container.append(box)


   })
 }


async function main(){
     let data = await main1()
    
    if(data==undefined){
        return false;
    }
    append1(data)
 }

 function debounce(func,delay){
   if(id1){
       clearTimeout(id)
   }
   id1 = setTimeout(()=>{
       func()
   },delay)
 }

 document.getElementById("search_input").addEventListener("input",debounce(main,3000))