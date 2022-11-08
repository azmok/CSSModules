import { type } from 
'../../js/autil-1.0.4.mod.js'


export default function flatten(...args){
   const arr = []
   
   //### args is Array
   if( args.length === 1){
      for( let elm of args){
         if( type(elm) === "Array" ){
            //_(1)
            arr.push( ...flatten(...elm) )
         } else {
            arr.push( elm )
         }
      }
      return arr
   
   //### args is list
   } else {
      args.map( curr => {
         if( type(curr) === "Array" ){
            arr.push( ...flatten(...curr) )
         } else {
            arr.push( curr )
         }
      })
      
      return arr
   }
}
/*
const arr1= [
   "a0", 
   [
      "b1"
   ],
   "c0",
   [
      [
         "d2",
         [
            "e3",
            [
               "f5"
            ]
         ]
      ]
   ]
]

//_( flatten(arr1) )
/**/