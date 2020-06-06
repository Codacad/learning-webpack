require('./css/main.css');
const myFriends = require('./js/friends')
const result = require('./js/score')

const $ = require('jquery');

document.addEventListener('DOMContentLoaded', () => {
    const contentBox = document.querySelectorAll('div.service div.content');
    window.addEventListener('scroll', (e) => {  
        // Service One
        const serviceOne =  document.querySelector('div.services div.service-one');
        const serviceOneContentsBox = serviceOne.querySelectorAll('div.content');
        serviceOneContentsBox.forEach(box => {           
            const boxTop = box.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if(boxTop.top < windowHeight){
                top.innerHTML = `Top: ${boxTop.top}`;
                top.innerHTML += `Window InnerHeight: ${window.innerHeight}`                
                box.classList.add('fade-in')
            }else{
                top.innerHTML = `Height: ${boxTop.height}`
                box.classList.remove('fade-in')
            }
        })
        // Service Two
        const serviceTwo =  document.querySelector('div.services div.service-two');
        const serviceTwoContentsBoxOne = serviceTwo.querySelector('div.content-one');
        const serviceTwoContentsBoxTwo = serviceTwo.querySelector('div.content-two');
        const serviceOneTop = serviceTwoContentsBoxOne.getBoundingClientRect();        
        const windowHeight = window.innerHeight;
        if((serviceOneTop.top+(serviceOneTop.height/3)) < windowHeight){            
            serviceTwoContentsBoxOne.classList.add('get-from-left')
            serviceTwoContentsBoxTwo.classList.add('get-from-right')
        }else{
            serviceTwoContentsBoxOne.classList.remove('get-from-left')
            serviceTwoContentsBoxTwo.classList.remove('get-from-right')
        }

        // Service Three
        const serviceThree =  document.querySelector('div.services div.service-three');
        const serviceThreeContentsBoxOne = serviceThree.querySelector('div.content-one');
        const serviceThreeContentsBoxTwo = serviceThree.querySelector('div.content-two');
        const serviceThreeTop = serviceThreeContentsBoxOne.getBoundingClientRect();                
        if((serviceThreeTop.top+(serviceThreeTop.height/3)) < windowHeight){            
            serviceThreeContentsBoxOne.classList.add('wh-1')
            serviceThreeContentsBoxTwo.classList.add('wh-2')
        }else{
            serviceThreeContentsBoxOne.classList.remove('wh-1')
            serviceThreeContentsBoxTwo.classList.remove('wh-2')
        }
          // Service Four
          const serviceFour =  document.querySelector('div.services div.service-four');
          const serviceFourContentsBoxOne = serviceFour.querySelector('div.content-one');
          const serviceFourContentsBoxTwo = serviceFour.querySelector('div.content-two');
          const serviceFourTop = serviceFourContentsBoxOne.getBoundingClientRect();                
          if(serviceFourTop.top < windowHeight){            
              serviceFourContentsBoxOne.classList.add('get-from-top')
              serviceFourContentsBoxTwo.classList.add('get-from-bottom')
          }else{
              serviceFourContentsBoxOne.classList.remove('get-from-top')
              serviceFourContentsBoxTwo.classList.remove('get-from-bottom')
          }
         
          // Service Five
          const serviceFive =  document.querySelector('div.services div.service-five');
          const serviceFiveContentsBoxOne = serviceFive.querySelector('div.content-one');
          const serviceFiveContentsBoxTwo = serviceFive.querySelector('div.content-two');
          const serviceFiveTop = serviceFiveContentsBoxOne.getBoundingClientRect();                
          if(serviceFiveTop.top < windowHeight){            
              serviceFiveContentsBoxOne.classList.add('get-from-left-bottom')
              serviceFiveContentsBoxTwo.classList.add('get-from-right-bottom')
          }else{
              serviceFiveContentsBoxOne.classList.remove('get-from-left-bottom')
              serviceFiveContentsBoxTwo.classList.remove('get-from-right-bottom')
          }
    })
})
