/** toc-1.0.5.mod.js



   MIT License
   
   Copyright (c) 2021 Azuma Okumura
   
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
   
   The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
   
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.

   
   
 *  - document.bodyをdomとして扱うより、.innerHTML等のstringとして処理する方が楽で簡単に実装
 *       できる感じがしている。。
 *  - 思っていたより目次の階層処理に手間取った
 */

import { _, $$, appendTo, toArray, type, create, setAttr } from '../../js/autil-1.0.4.mod.js'
import flatten from './flatten.js'
import getElementsHierarchyAsObject from './getElementsHierarchyAsObject.mod.js'



const repeatMethod = (elm, propName, count) => {
   let elm_temp = elm
   //_( elm_temp.outerHTML )
   //_( elm.tagName, propName, count )
   for(let i = 0; i < count; i++){
      //_( i )
      // _( elm.tagName )
      elm_temp = elm_temp[propName]
   }
   return elm_temp
},
getHeaders = () => {
   /**  Get and Store [h1-h6] elements in Array from top to bottom
    * { 
    *    tagName,
    *    html,
    *    elm: DOM Element Object,
    *    tagNum: tagNumber(1,2,...),
	 * 	text: only textContent whether or not header tag contain children tags
    * }
    */
   const elms = getElementsHierarchyAsObject( document.body ),
   headersArr = []
   
   elms.map(elm => {
      const tagName = elm.tagName.toLowerCase()
      //_( tagName )
      
      if( tagName.match(/h\d/) ){
         const html = elm.element.innerHTML,
         tagNum = elm.tagName.match(/\d/),
         text = elm.element.textContent
         //_( html )
         headersArr.push({
            tagName,
            tagNum,
            text,
            html,
            element: elm.element,
         })
      }
   })
   //_( headersArr )
   return headersArr
},
organizeToc = (ul, headersArr) => {
   let prevHNum = null,
   currParent = ul
   
   headersArr.map((hx, i) => {
      let li = create('li'),
      a =  create('a'),
      jumpUrl = '#' + hx.text,
      className = hx.tagName.toLowerCase()
      
      let currHNum = parseInt( hx.tagName.match(/\d/).at(0) )

      /**  <a> 
       */
      a.href = jumpUrl
      a.textContent = hx.text
      
      /**  <li>
       */
      li.setAttribute('class', 'toc_' + className )
      li.setAttribute('tagNumber', currHNum)
      li.appendChild(a)
      //_( `prevHNum: h${prevHNum}` )
      
      /**  Check whether first <li> or not
       */
      if( prevHNum ){
         let diff =  currHNum - prevHNum
         //_( `diff: ${diff}`)
         /**  prevHNum - currHNum === 0 ? currParent.appendChild(li)
         */
			if( diff === 0 ){
         	currParent.appendChild(li)
            
         /**  currHNum - prevHNum === 1 ? currParent.lastChild.appendChild(ul>li)
          *    n2           h1
          */
         } else if ( diff === 1 ){
         	let newUl = create('ul'),
         	prevLi = currParent.lastElementChild
            
            newUl.appendChild(li)
            prevLi.appendChild(newUl)
         
         /**   currHNum - prevHNum >= 2 ? 
          *  (e.g)   
          *      h3  -       h1  (= 2) >= 2
          */
		} else if ( diff >= 2 ){
            //_( 'diff >= 2')
            //_(diff )
            
            const prevLi = currParent.lastElementChild
            let prevUl, headLi
            
   /*    h3
         | (diff: 2)
         h1 
    
    ul > li > ul > li > ul > li
       |                   |
      
    **/
            for(let i = 0; i < diff; i++){
               //_(i)
            	const li = create('li')
               const ul = create('ul')
                  .appendTo(li)
            
               if( prevUl ){
                  li.appendTo( prevUl )
               }
               
               prevUl = ul
               
               if( i === 0){
                  headLi = li
               }
            }
            
            
            li.appendTo(prevUl)
            headLi.appendTo(currParent)
            
            
            
         /**  currHNum - prevHNum <= -1?
          * e.g.  h2 - h3 (-1) <= -1
          *       h3 - h1 (-2) <= -1
          * repeat( currParent, 'parentElement', prevHNum - currHNum ).appendChild(li)
          * 
          */
         } else if ( diff <= -1 ){
            //_( `  diff <= -1` )
            
            // _(`currentParent: ${currParent}`)
            //_( "repeatMethod() invoked!" )
            let gxParent = repeatMethod( currParent, 'parentElement', -diff*2)
            
            gxParent.appendChild(li)
         }
      
      /** first <li>
       */
		} else {
         let prevUl,
         headLi
         
         for(let i = 1; i < currHNum; i++){
            const li = create('li')
            const ul = create('ul')
               .appendTo(li)
            
            if( prevUl ){
               li.appendTo( prevUl )
            }
            prevUl = ul
            if( i === 1){
               headLi = li
            }
         }
         
         if( prevUl ){
            li.appendTo(prevUl)
            headLi.appendTo(currParent)
         } else {
      	   li.appendTo(currParent)
         }
         
		}
      prevHNum = currHNum
      currParent = li.parentElement
	})
   
   return ul
},
/**
(currentParent)  headLi   prevUl            prevUl
ul            >   li    >   ul   >   li   >   ul   >   li
              |                                    |

   
/**/
createToc = () => {
   let headers = getHeaders(),
   toc = document.querySelector('#toc')
   //_( document.body.innerHTML )
   organizeToc(toc, headers)
},
setIdAnchor = () => {
   /**  Side effect to DOM
    *   Set id with headers for jump-by-link
    */
   let headers = getHeaders()
   
   headers.map(hx => {
      hx.element.setAttribute('id', hx.text )
   })
},
insertToc = (str1, str2) => {
   let toc = create("ul")
      .setAttr({
		   id: 'toc'
      }),
   str = str1 + toc.outerHTML + str2
	//_( str )
   $$('body')[0].innerHTML = str
   
   createToc()

   setIdAnchor();
},
detectToc = () => {
   let html_str = $$('body')[0].innerHTML,
   regex_toc_before = /[\w\W]*?(?=\[toc\])/g,
   regex_toc_after = /(\[toc\])([\w\W]*)/gm,
   res1 = regex_toc_before.exec(html_str),
   res2 = regex_toc_after.exec(html_str)

   if( res1 && res1.length ){
      insertToc(res1, res2[2])
   }
},
renderToc = () => {
   detectToc()
}
renderToc()

export { renderToc }




