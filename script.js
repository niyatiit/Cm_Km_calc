const from = document.querySelector('form')
const final_ans = document.querySelector('.ans')

from.addEventListener("submit" , function(e){
    e.preventDefault()
    
    const cen = parseInt(document.querySelector('#cm').value)
    const kel = parseInt(document.querySelector('#kg').value)
    
        final_ans.innerHTML = (cen*kel)/2;
    
})