// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//Here is your key: 6470e409

//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=6470e409





let movie_div=document.getElementById("mov")
let id;
async function searchmovies(){
    try{
        const search=document.getElementById("search").value;
        const res=await fetch(`http://www.omdbapi.com/?apikey=6470e409=${search}`)
        const data=await res.json()
        // console.log(res);
        const movies=data.Search;
        return movies;
        }
        catch(err){
            console.log("err",err);
        }
    }
  
    //append movies
    function appendMovies(data){
        if(data==undefined){
            return false;
        }
        movie_div.innerHTML=null;
        data.forEach(function(e1){
            let p=document.createElement("p");
            p.innerText=e1.Title;
            var clickmovies=p.innerText;
            p.addEventListener("click",function(){
                movieinformation(clickmovies,data)
            })
            movie_div.append(p);
        })
    }
    async function main(){
        let data=await searchmovies();
        if(data==undefined){
            return false;
        }
        appendMovies(data);
    }
    // debouncing
    function debounce(func,delay){
        if(id){
            clearTimeout(id)
        }
        id=setTimeout(function(){
            func()
        },delay);
    }

    const finaldata=document.getElementById("movies");
   
    let fdata=JSON.parse(localStorage.getItem("movie"))||[]
    function movieinformation(clickmovies,data){
        console.log(data);
        for(let i=0;i<data.length;i++){
            if(data[i].Title==clickmovies){
                finaldata.innerHTML=null;
                box=document.createElement("div");
                 var image=document.createElement("img")
                 image.src=data[i].Poster;
                 var name=document.createElement("p");
                 name.innerText=data[i].Title;
                 var button=document.createElement("button");
                 button.innerText="Book_now";
                //  button.addEventListener.window.location.href="checkout.html"
                 button.onclick=()=>{
                       showcheckout(data);
                 }
                 box.append(image,name,button);
                 finaldata.append(box);
                 console.log(finaldata)
                 fdata.push(data[i]);
                 localStorage.setItem("movie",JSON.stringify(fdata));
            }
        }
    
    }
    function showcheckout(x){
        window.location.href="checkout.html";
    }


