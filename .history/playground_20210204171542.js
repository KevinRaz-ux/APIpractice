//Begin accessing Json data here 

var data = Json.parse(this.response)  

/* 
1. Created a data object containing Json.parse()

*/

data.forEach((movie)=>{
    //Log each movie title 

    console.log(movie.title)
})



/* ========================= */


.then((data)=>{
    //Work with Json Data here
    data.forEach((movie=>{
        console.log(movie.title)
    }))
})



const container = document.createElement('div')

/* We're declaring the container to be a property that everytime it's called it will make a div  */
container.setAttribute('class', 'container')


/* The property container which now has an element called div will also have an attribute that's the class of a container  */