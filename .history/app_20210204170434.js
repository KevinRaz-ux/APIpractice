/* //Replace  ./data.json with your JSon feed
fetch('./data.json') <== Just insert the URL here and then the information will come out 


    .then((response)=>{ <== With the response make it into a JSON object 
        return response.json() 
    })
    .then((data)=>{  <=== AND THEN with that data put it sent it to the console so it can log that data 


        Work with Json Data here
        console.log(data)
    })


    .catch((err)=>{   <=== If there's an issue or we received an error catch the error and then 
        Do something for an error here 
    }) */





var gibFLim = 'https://ghibliapi.herokuapp.com/films'       /* We created a variable named gibFLim will contain the http  */
//Replace  ./data.json with your JSon feed
    fetch(gibFLim)
    
if (resp.status >= 200 && request.status < 400) {
    data.then((resp)=>{
        return resp.json() 
    
    })  



    .then((data)=>{
        //Work with Json Data here
        data.forEach((movie=>{
            console.log(movie.title)
        }))
    })
}

else{

    data.catch((err)=>{
        //Do something for an error here 
        console.log(err)
    })
}