// 1)// const button = document.querySelector('button')
// button.addEventListener('mouseover', ()=>{
//     console.log('san mani bosding')
// })
//  dblclick,click 

// const items = document.querySelectorAll('#button')
// items.forEach((item) =>{
//     item.addEventListener('click', ()=>{

//     console.log ('item clicked')
// })
// })

// const items = document.querySelectorAll('li')
// items.forEach((item) =>{
//     item.addEventListener('click', (e)=>{

//     console.log ('e.target')
// })
// })


//  const items = document.querySelectorAll('li')
//  items.forEach((item) =>{
//      item.addEventListener('click', (e)=>{
//         e.target.style.backgroundColor = 'green';
//         e.target.style.color = 'white';
     
//  })
//  })

const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');

decreaseButton.addEventListener('click', () => {
  let currentValue = parseInt(document.getElementById('nul').textContent);
  document.getElementById('nul').textContent = currentValue - 1;
});

increaseButton.addEventListener('click', () => {
  let currentValue = parseInt(document.getElementById('nul').textContent);
  document.getElementById('nul').textContent = currentValue + 1;
});

  

 


