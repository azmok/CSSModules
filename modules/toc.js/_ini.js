/* toc.js */


import { _, create, setAttr, appendTo } from 
'/iCloud/azmtuts.blog/pkg/CSSModules/pkg/autil/autil-1.0.4.mod.js'


/* relative to .html file below tags attached */
//const url_toc_js =
   //'/iCloud/azmtuts.blog/pkg/CSSModules/modules/toc.js/toc-1.0.5.mod.js',
const url_toc_css =
   '/iCloud/azmtuts.blog/pkg/CSSModules/modules/toc.js/toc.css'

/*
// js
create('script')
   .setAttr({
      type: 'module',
      src: url_toc_js,
   })
   .appendTo( document.body )
/**/
// css
create('link')
   .setAttr({
      rel: "stylesheet",
      href: url_toc_css,
   })
   .appendTo( document.head )