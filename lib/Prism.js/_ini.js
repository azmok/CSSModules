import { _, create, setAttr, appendTo } from './../../js/autil-1.0.4.mod.js'



export const doPrismjs = () => {
   /* relative to '.html' file <script> attached */
   const url_prismjs = "../lib/Prism.js/prism.min.js",
   url_prism_plugin_lineNumbers = "../lib/Prism.js/plugins/line-numbers/line-numbers.min.js",
   url_prism_plugin_highlight = "../lib/Prism.js/plugins/line-highlight/line-highlight.min.js",
   body = document.body
   
   // prismjs
   create('script')
      .setAttr({
         src: url_prismjs,
      })
      .appendTo(body)
   
   // prismjs.plugin.line-numbers
   create('script')
      .setAttr({
         src: url_prism_plugin_lineNumbers,
      })
      .appendTo(body)
   
   // prismjs.plugin.line-highlight
   create('script')
      .setAttr({
         src: url_prism_plugin_highlight,
      })
      .appendTo(body)
}
   
doPrismjs()