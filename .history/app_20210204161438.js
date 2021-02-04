/* //Replace  ./data.json with your JSon feed
fetch('./data.json')
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
    fetch('./data.json')
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