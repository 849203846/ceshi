// chenrio是一个在node里面使用的 类似玉jquert的工具

let html=`<li class="conLi conLiji">
					<em style="width:100px;text-align:left;padding-left:5px;">芹菜</em>
					<em style="width:80px;">0.60</em>
					<em style="width:80px;">0.80</em>
					<em style="width:80px;">1.00</em>
					<em style="width:80px;">普通</em>
					<em style="width:80px;">斤</em>
					<em style="width:106px;">2017-08-19</em>
		</li>
`;
let cheerio=require('cheerio');
let $=cheerio.load(html);
// 把html字符串转换成jquery对象
$('li.conLiji em').each(function (index, item) {
   let $this=$(item);
   //  // 把原声的对象转化成jquery对象
    console.log($this.text());
});