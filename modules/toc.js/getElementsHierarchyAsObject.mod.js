import { _, $$, appendTo, toArray, type, create, setAttr } from 
   '../../js/autil-1.0.4.mod.js'
import flatten from './flatten.js'



export default function getElementsHierarchyAsObject(root, depth=0){
   const tagName = root.tagName,
   res = Array.from(root.children)
      .map(elm=> {
         const tagName = elm.tagName
         
         if( elm.children.length >= 1 ){
            return getElementsHierarchyAsObject(elm, depth+1)
         } else {
            return ({
               depth: depth+1,
               tagName,
               element: elm,
            })
         }
      })
      
   return flatten([
      {
         element: root,
         tagName,
         depth,
      },
      ...res
   ])
}

/*
const res = getElementsHierarchyAsObject( document.body )
_( res )



/**/