var loader = document.querySelector('.container .loader')
var iconPart= document.querySelector('.container .icon')
var twoPart = document.querySelector('.container .two-part')
var single = document.querySelector('.container .single')
var actionButton = document.querySelector('button')
var joke = document .querySelector('#joke')
var setup = document.querySelector('#setup')
var delivery = document.querySelector('#delivery')



actionButton.addEventListener('click',()=>{
   if(iconPart.style.display==='none'){
        twoPart.style.display = 'none'
        single.style.display = 'none'
    }
    
    iconPart.style.display='none'
    loader.style.display='flex'

    setTimeout(async() => {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any')
        const data = await res.json()

        if(data){
            loader.style.display='none'
            let jokeType = data.type

            if(jokeType==='single'){
                single.style.display='flex'
                joke.innerText = data.joke
            }
            else if(jokeType==='twopart'){
                twoPart.style.display='flex'
                setup.innerText = data.setup
                delivery.innerText = data.delivery

            }
        }
       
        
    }, 2000);

})

