import { _, $$, create, setAttr, appendTo, setCss } from 
'/iCloud/azmtuts.blog/pkg/CSSModules/pkg/autil/autil-1.0.4.mod.js'



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
   /*
   posX_desc = descRect.left,
   posY_desc = descRect.top
   /**/
   //_( posX_desc, posY_desc )
   //_( width_desc, height_desc )
   
   create('span')
      .setAttr({
         class: 'shadowBox',
      })
      .setCss({
         width: `${width_desc}px`,
         height: `${height_desc}px`,
      })
      .appendTo(elm)
}/**/

//###  get '.annotation' elements and map over
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
      
      const target = e.target,
      className = desc.className,
      shadowBox = target.children[2]
      //_( shadowBox )
      //###  don't hide annotation if clicked elm is <a>  ########
      if( target.tagName === "A" ) return
         // and, must remove 'e.preventDefault()' becuase it prevent <a> from opening  linked page
      
      //###  'visible -> hidden'  ######
      if( className.includes('visible') ){
         desc.classList.remove('visible')
         desc.classList.add('hidden')
         //_( 'visible -> hidden')
         
      //###  'hidden -> visible' #######
      } else {
         desc.classList.remove('hidden')
         desc.classList.add('visible')
         //_( 'hidden -> visible' )
         
         //#### no shadow box  exist
         if( !shadowBox ){
            _( '!shadowBox' )
         // create & append shadowBox
            appendShadowBoxTo(anno)
         }
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