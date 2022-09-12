// block-level-elements
//    - li, 
//    + img, 


const arr = ['address', 'article', 'aside', 'blockquote', 'details', 'dialog', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul', 'img'],
arr2 = [...arr]

let res = arr.map(curr => {
   return arr2.map(curr2 => {
      return `${curr} + ${curr2}`
   })
})

const txt = document.body.textContent = res.toString()

document.addEventListener('click', ()=>{
   const cboard = window.navigator.clipboard
   if( cboard ){
      cboard.writeText( txt )
      _( "copied to clipboard!")
   }
})