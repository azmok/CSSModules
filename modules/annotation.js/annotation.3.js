import { _, $$, create, setAttr, appendTo, setCss } from 
'/iCloud/azmtuts.youtube/pkg/CSSModules/pkg/autil/autil-1.0.4.mod.js'



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
},
appendShadowBoxTo = (elm) => {
   const desc = elm.children[0]
   //_( desc.className )
   const descRect = desc.getRect(),
   width_desc = descRect.width,
   height_desc = descRect.height
   
   create('span')
      .setAttr({
         class: 'shadowBox',
      })
      .setCss({
         width: `${width_desc}px`,
         height: `${height_desc}px`,
      })
      .appendTo(elm)
}

//###  get '.annotation' elements and map over
Array.from(annos).map(anno => {
   //_( anno.outerHTML )
   const desc = anno.$$('.desc')[0]
   
   //###  create & append DogEar  
   appendDogEarTo(anno)
   
   //###  assign 'desc' to 'anno' prop
   anno.desc = desc
   
   anno.addEventListener('click', (e)=>{
      
      const target = e.target,
      className = desc.className,
      shadowBox = target.children[2]
      //_( shadowBox )
      //###  don't hide annotation if clicked elm is <a>  ########
      //###     and, must remove 'e.preventDefault()' becuase it prevent <a> from opening  linked page
      if( target.tagName === "A" ) return
      
      //###  'visible -> hidden'  ######
      if( className.includes('visible') ){
         desc.classList.remove('visible')
         desc.classList.add('hidden')
         
      //###  'hidden -> visible' #######
      } else {
         desc.classList.remove('hidden')
         desc.classList.add('visible')
         
         //####  no shadow box exist
         if( !shadowBox ){
            //_( '!shadowBox' )
         // create & append shadowBox
            appendShadowBoxTo(anno)
         }
      }
   })
})