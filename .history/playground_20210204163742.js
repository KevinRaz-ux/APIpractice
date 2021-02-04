//Begin accessing Json data here 

var data = Json.parse(this.response)

data.forEach((movie)=>{
    //Log each movie title 

    console.log(movie.title)
})