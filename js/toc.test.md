<meta name="viewport" content="width=device-width, nitial-scale=1.0" />
<link rel="stylesheet" href="../css/_ini.css" />
<script type="module" src="_ini.js" defer></script>
<script type="module" src="toc-1.0.4.mod.js" defer></script>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>





<div class="card main text">
   
# [css][解説] :has() セレクター、いよいよ実装間近か!?
[toc]

<h2>デモ</h2>

<h3 class="en">Basic</h3>
<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="rNdEMBJ" data-editable="true" data-user="AzumaO" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/AzumaO/pen/rNdEMBJ">
  [css] :has() selector demo.basic</a> by Azmo7 (<a href="https://codepen.io/AzumaO">@AzumaO</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>




<h3 class="en">Advance</h3> 

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="ZExdpmm" data-editable="true" data-user="AzumaO" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/AzumaO/pen/ZExdpmm">
  [css] :has() selector demo.advance</a> by Azmo7 (<a href="https://codepen.io/AzumaO">@AzumaO</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## 定義(<span class="en">Definition</span>)

```language-css
selector1:has(selector2)
```
<p>'セレクター2'に該当する要素を<b>持ちわせている</b>要素で、且つその要素が'セレクター1'にマッチする場合、スタイリングが適用される。</p>

<p class="en italic">Styling is applied to elements that match 'selector1' if those elements <strong>have</strong> elements that match 'selector2'.</p>

## メモ

1. 言語化して定義すると、抽象的過ぎて多分分かりにくいw
2. <b>JS</b>でも<b>CSS</b>でも<b>仕様書</b>とか<b>使用書</b>等、<b>抽象的な言語で定義され記述されているもの</b>は、
<b>デモ(具体例)見るのが1番理解が早い</b>w↑↑↑

## ソース(情報源)(<span class="en">Sources</span>)

<span class="en">[:has() - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:has#description)</span>

## 対応ブラウザ(<span class="en">Browser support</span>)

<span class="en">["has" | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/?search=has)</span>



## おまけ

翻訳って難しい、、笑

どちらも同じ意味だけど、直訳すると日本語の文構造上、意味が取りにくい。翻訳作業において、意訳ってマジ大事。
<figure>
   <blockquote>
      <p class="en">Styling is applied to elements that match 'selector1' if those elements <b>have</b> elements that match 'selector2'.
      </p>
      <p>
         意訳:<br />
         'セレクター2'に該当する要素を<b>持ちわせている要素</b>で、且つその要素が'セレクター1'にマッチする場合、スタイリングが適用される。
      </p>
      <p>直訳:<br />
      'セレクター1'にマッチする要素で、もしその要素が'セレクター2'に該当する要素を<b>持ちわせている</b>場合、('セレクター1'にマッチする要素に)スタイリングが適用される。
      </p>
   </blockquote>
</figure>


個人的には、英語の方が「名詞←形容詞」と後から形容詞が付く言語構造的のため、「(主語)は(述語)だ」と文章の骨格が先に分かるので、この様な抽象的な定義文の場合は、英語の方が理解しやすい気がする、、（´-`）.｡oO

</div>
