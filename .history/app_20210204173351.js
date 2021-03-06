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



const app = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement('div')

logo.src='logo.png';


container.setAttribute('class', 'container');



app.appendChild(logo)
app.appendChild(container)


var gibFLim = 'https://ghibliapi.herokuapp.com/films'       /* We created a variable named gibFLim will contain the http  */
//Replace  ./data.json with your JSon feed
    fetch(gibFLim)
    

    .then((resp)=>{
        return resp.json() 
    })  

    
    .then((data)=>{
        //Work with Json Data here
        data.forEach((movie=>{
            const card =  document.createElement('div')
            card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent=movie.title

        const p = document.createElement('p')
        movie.description=movie.description.substring(0,300)

        p.textContent = `${movie.description}...`


    
            container.appendChild(card)

            card.appendChild(h1)
            card.appendChild(p)
        }))
    })



    .catch((err)=>{
        //Do something for an error here 
        console.error('There has been a problem with your fetch operation:', err)
    })