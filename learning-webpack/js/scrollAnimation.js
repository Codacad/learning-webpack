document.addEventListener('DOMContentLoaded', () => {
    const contentBox = document.querySelectorAll('div.service div.content');
    window.addEventListener('scroll', (e) => {  
        // Service One
        const serviceOne =  document.querySelector('div.services div.service-one');
        const serviceOneContentsBox = serviceOne.querySelectorAll('div.content');

        // Selected by querySelectorAll which nodeLish and each of service class div contains two div elements
        // Rest of services selected by querySelector individually which is a nodelist but just an single item.
        serviceOneContentsBox.forEach(box => {           
            const boxCordinates = box.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if((boxCordinates.top+boxCordinates.height/2) < windowHeight){                
                box.classList.add('fade-in')
            }else{
                box.classList.remove('fade-in')
            }          

            if(boxCordinates.bottom < 0){
                box.classList.remove('fade-in')
            }
        })        

        // Service Two
        // Selected by querySelector individually which is a nodelist but just an single item.
        const serviceTwo =  document.querySelector('div.services div.service-two');
        const serviceTwoContentsBoxOne = serviceTwo.querySelector('div.content-one');
        const serviceTwoContentsBoxTwo = serviceTwo.querySelector('div.content-two');
        const serviceTwoTop = serviceTwoContentsBoxTwo.getBoundingClientRect();        
        const windowHeight = window.innerHeight;
        if(serviceTwoTop.top < windowHeight){            
            serviceTwoContentsBoxOne.classList.add('get-from-left')
            serviceTwoContentsBoxTwo.classList.add('get-from-right')
        }else{
            serviceTwoContentsBoxOne.classList.remove('get-from-left')
            serviceTwoContentsBoxTwo.classList.remove('get-from-right')
        }            
        if(serviceTwoTop.bottom < 0){
            serviceTwoContentsBoxOne.classList.remove('get-from-left')
            serviceTwoContentsBoxTwo.classList.remove('get-from-right')
        }
    
        // Service Three
        // Selected by querySelector individually which is a nodelist but just an single item.
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
        
        if(serviceThreeTop.bottom < 0){
            serviceThreeContentsBoxOne.classList.remove('wh-1')
            serviceThreeContentsBoxTwo.classList.remove('wh-2')
        }
       
          // Service Four
          // Selected by querySelector individually which is a nodelist but just an single item.
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
           
        if(serviceFourTop.bottom < 0){
            serviceFourContentsBoxOne.classList.remove('get-from-top')
            serviceFourContentsBoxTwo.classList.remove('get-from-bottom')
        }

          // Service Five
          //   it's the last element animated in one direction just as it is the last element and can't be scrolled up anymore
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
