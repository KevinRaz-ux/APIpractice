/* //Replace  ./data.json with your JSon feed
fetch('./data.json') <== Just insert the URL here and then the information will come out 


    .then((response)=>{
        return response.json() 
    })
    .then((data)=>{
        Work with Json Data here
        console.log(data)
    })
    .catch((err)=>{
        Do something for an error here 
    }) */

alert('working')
//Replace  ./data.json with your JSon feed
    fetch('https://ghibliapi.herokuapp.com/films')
    
    
    .then((resp)=>{
        return resp.json() 
    })
    .then((data)=>{
        //Work with Json Data here
        console.log(data)
    })
    .catch((err)=>{
        //Do something for an error here 
    })