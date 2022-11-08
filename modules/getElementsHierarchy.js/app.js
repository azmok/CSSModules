import { _, $$, appendTo, toArray, type, create, setAttr } from 
'../../js/autil-1.0.4.mod.js'



const addTabs = num => {
   let str = ''
   
   for(;num > 0; num--){
      //_( num )
      str += '\t'
   }
   
   return str
},
getElementsHierarchy  = (root, depth=0) => {
   const tagName = root.tagName,
   res = Array.from(root.children)
      .map(elm=> {
         const tagName = elm.tagName
         
         if( elm.children.length >= 1 ){
            _( `[${depth}]${tagName}.hasChildren` )
            _( `depth: ${depth}+1: ${depth+1}` )
            return `\n${ getElementsHierarchy(elm, depth+1) }`
         } else {
            return `\n${addTabs(depth+1)}${depth+1}: ${elm.tagName}`
         }
      })
      
   return `${addTabs(depth)}${depth}: ${tagName}${res.join('')}`
}

_( getElementsHierarchy( document.body ) )