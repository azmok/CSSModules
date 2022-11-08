/* annotation.js */



import { _, create, setAttr, appendTo } from 
'/iCloud/azmtuts.blog/pkg/CSSModules@azmok/pkg/autil@azmok/autil-1.0.4.mod.js'


/* relative to .html file below tags attached */
const url_annotation_js =
   '/iCloud/azmtuts.blog/pkg/CSSModules@azmok/modules/annotation.js/annotation.js',
url_annotation_css =
   '/iCloud/azmtuts.blog/pkg/CSSModules@azmok/modules/annotation.js/annotation.css'
// js
create('script')
   .setAttr({
      type: 'module',
      src: url_annotation_js,
   })
   .appendTo( document.body )

// css
create('link')
   .setAttr({
      rel: "stylesheet",
      href: url_annotation_css,
   })
   .appendTo( document.head )