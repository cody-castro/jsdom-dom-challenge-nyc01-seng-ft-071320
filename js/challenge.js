window.addEventListener('DOMContentLoaded', (event) => {

    const counter = document.querySelector('#counter');
  
    
    function timer() {
        counter.innerText = (parseInt(counter.innerText) + 1)
    }
    
    let intervalID = window.setInterval(timer, 1000)
    
    const minusBtn = document.querySelector('#minus')
    const plusBtn = document.querySelector('#plus')
    const pauseBtn = document.querySelector('#pause')

    pauseBtn.addEventListener('click', function(){
       let pauseFunction = clearInterval(intervalID)
        
        //When Pause Btn is clicked it will stop & change Pause to Resume
        //When Resume is clicked it will start counter again
        
    })
    
    pauseBtn.addEventListener('click', function(){
        if (pauseBtn.id == 'pause') {
            pauseBtn.innerText = "Resume";
        }
    });


    
   minusBtn.addEventListener('click', function(){
      counter.innerText = (parseInt(counter.innerText) - 1)
   })

   plusBtn.addEventListener('click', function(){
    counter.innerText = (parseInt(counter.innerText) + 1)
   })
   
   const heartBtn = document.querySelector('#heart')

   heartBtn.addEventListener('click', function(){
       const likeClass = document.querySelector('.likes')
        let likeList = document.createElement('li')
        // let likeSetter = 1
        // let likeCounter = likeSetter + 1 
        
        let count = 0

        // while (count == 0){
        //     return count++
        // }

        function incrementCount() {
            let count = 0;
            return count++
        }
        likeList.innerText = `${incrementCount()} + like` 

        likeClass.append(likeList)
        console.log(likeList)
   }
   )






            
            const comment = document.getElementById('comment-input');
            // let userComment = comment.addEventListener('submit', function(event) {
                //     event.preventDefault()
                //    console.log(event.target[0].value);})
                
                
                // event.preventDefault()
            
            
            
            
            
            
            
 });