import { _, $$, create, setAttr, appendTo } from 
'/iCloud/azmtuts.blog/pkg/CSSModules@azmok/pkg/autil@azmok/autil-1.0.4.mod.js'



const annos = $$('.annotation')
const isXOverFlow = (elm) => {
   // edge case: page right
   // overflowX
   if( elm.getRect().right + elm.desc.getRect().width > document.body.getRect().width ){
      return true
   } else {
      return false
   }
},
isYOverFlow = (elm) => {
   // edge case: page top
   // overflow -Y
   if( elm.getRect().top < elm.desc.getRect().height ){
      return true
   } else {
      return false
   }  
},
appendDogEarTo = (elm) => {
   create('span')
      .setAttr({
         class: 'dogEar',
      })
      .appendTo(elm)
}
//_( annos.length )
Array.from(annos).map(anno => {
   //_( anno.outerHTML )
   const desc = anno.$$('.desc')[0]
   
   // create & append DogEar
   appendDogEarTo(anno)
   // assign 'desc' to 'anno' prop
   anno.desc = desc
   
   //_( isXOverFlow(anno) )
   //_( isYOverFlow(anno) )
   
   
   anno.addEventListener('click', (e)=>{
      e.preventDefault()
      _(1)
      const className = desc.className
      // in visible
      if( className.includes('visible') ){
         /* > elm.classList.toggle() <
            
            this doesn't work in 'display: block/hidden'
            initial css state: 'display: none'
            (1)block -> hidden is ok
            but, 
            (2)hidden -> visible not work if remove '.visible' class that set 'display: block'
            
          */
         desc.classList.remove('visible')
         desc.classList.add('hidden')
         //_( 'visible -> hidden')
      // in hidden
      } else {
         desc.classList.remove('hidden')
         desc.classList.add('visible')
         //_( 'hidden -> visible')
      }
   })
})



/**** get document width/height by js **
   width:
      x window.innerWidth 
      o document.body.getRect().width
      x document.body.clientWidth
      
   height:
      
/***/