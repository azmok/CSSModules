import { _, $$, appendTo, toArray, type, create, setAttr } from 
'../../js/autil-1.0.4.mod.js'




const body = document.body,
addTabs = num => {
   let str = ''
   for(;num > 0; num--){
      //_( num )
      str += '\t'
   }
   
   return str
}
//_( addTabs(3) )
const getNodesHierarchy  = (root, depth=0) => {
   const nodeName = root.nodeName
   const res = Array.from(root.childNodes)
      .map(node => {
         if( node.hasChildNodes() ){
            return `\n${ getNodesHierarchy(node, depth+1) }`
         } else {
            return `\n${addTabs(depth+1)}${depth+1}: ${node.nodeName}`
         }
      })
   return `${addTabs(depth)}${depth}: ${nodeName}${res.join('')}`
}




_( getNodesHierarchy( body ) )


