/* ===========================================================================
   BPM Combined Asset File
   MANIFEST: jqmob ()
   This file is generated automatically by the bpm (http://www.bpmjs.org)    
   =========================================================================*/
(function(a,b){function y(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]),a(b).remove()}function x(b,c){var d=this._wrap;return a.map(a(a.isArray(d)?d.join(""):d).filter(b||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function w(b,c){var d=b.options||{};d.wrapped=c;return a.tmpl(a.template(b.tmpl),b.data,d,b.item)}function v(b,c,d){return a.tmpl(a.template(b),c,d,this)}function u(a,b,c,d){if(!a)return l.pop();l.push({_:a,tmpl:b,item:this,data:c,options:d})}function t(b){function p(b){function p(a){a=a+c,n=i[a]=i[a]||m(n,f[n.parent.key+c]||n.parent,null,!0)}var e,h=b,l,n,o;if(o=b.getAttribute(d)){while((h=h.parentNode).nodeType===1&&!(e=h.getAttribute(d)));e!==o&&(h=h.nodeType===11?0:h.getAttribute(d)||0,(n=f[o])||(n=g[o],n=m(n,f[h]||g[h],null,!0),n.key=++j,f[j]=n),k&&p(o)),b.removeAttribute(d)}else k&&(n=a.data(b,"tmplItem"))&&(p(n.key),f[n.key]=n,h=a.data(b.parentNode,"tmplItem"),h=h?h.key:0);if(n){l=n;while(l&&l.key!=h)l.nodes.push(b),l=l.parent;delete n._ctnt,delete n._wrap,a.data(b,"tmplItem",n)}}var c="_"+k,e,h,i={},l,n,o;for(l=0,n=b.length;l<n;l++){if((e=b[l]).nodeType!==1)continue;h=e.getElementsByTagName("*");for(o=h.length-1;o>=0;o--)p(h[o]);p(e)}}function s(a){var b=document.createElement("div");b.appendChild(a.cloneNode(!0));return b.innerHTML}function r(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function q(b,c){b._wrap=n(b,!0,a.isArray(c)?c:[e.test(c)?c:a(c).html()]).join("")}function p(b){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:.(?!\}\}))*?)?\))?(?:\s+(.*?)?)?(\((.*?)\))?\s*\}\}/g,function(b,c,d,e,f,g,h){var i=a.tmpl.tag[d],j,k,l;if(!i)throw"Template command not found: "+d;j=i._default||[],g&&!/\w$/.test(f)&&(f+=g,g=""),f?(f=r(f),h=h?","+r(h)+")":g?")":"",k=g?f.indexOf(".")>-1?f+g:"("+f+").call($item"+h:f,l=g?k:"(typeof("+f+")==='function'?("+f+").call($item):("+f+"))"):l=k=j.$1||"null",e=r(e);return"');"+i[c?"close":"open"].split("$notnull_1").join(f?"typeof("+f+")!=='undefined' && ("+f+")!=null":"true").split("$1a").join(l).split("$1").join(k).split("$2").join(e?e.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(a,b,c,d){d=d?","+d+")":c?")":"";return d?"("+b+").call($item"+d:a}):j.$2||"")+"_.push('"})+"');}return _;")}function o(b){var c=document.createElement("div");c.innerHTML=b;return a.makeArray(c.childNodes)}function n(b,c,e){var f,g=e?a.map(e,function(a){return typeof a=="string"?b.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+b.key+'" $2'):a:n(a,b,a._ctnt)}):b;if(c)return g;g=g.join(""),g.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(b,c,d,e){f=a(d).get(),t(f),c&&(f=o(c).concat(f)),e&&(f=f.concat(o(e)))});return f?f:o(g)}function m(b,c,d,e){var h={data:e||(c?c.data:{}),_wrap:c?c._wrap:null,tmpl:null,parent:c||null,nodes:[],calls:u,nest:v,wrap:w,html:x,update:y};b&&a.extend(h,b,{nodes:[],parent:c}),d&&(h.tmpl=d,h._ctnt=h._ctnt||h.tmpl(a,h),h.key=++j,(l.length?g:f)[j]=h);return h}var c=a.fn.domManip,d="_tmplitem",e=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,f={},g={},h,i={key:0,data:{}},j=0,k=0,l=[];a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(b,c){a.fn[b]=function(d){var e=[],g=a(d),i,j,l,m,n=this.length===1&&this[0].parentNode;h=f||{};if(n&&n.nodeType===11&&n.childNodes.length===1&&g.length===1)g[c](this[0]),e=this;else{for(j=0,l=g.length;j<l;j++)k=j,i=(j>0?this.clone(!0):this).get(),a.fn[c].apply(a(g[j]),i),e=e.concat(i);k=0,e=this.pushStack(e,b,g.selector)}m=h,h=null,a.tmpl.complete(m);return e}}),a.fn.extend({tmpl:function(b,c,d){return a.tmpl(this[0],b,c,d)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(b,d,e,g){if(b[0]&&b[0].nodeType){var i=a.makeArray(arguments),j=b.length,l=0,m;while(l<j&&!(m=a.data(b[l++],"tmplItem")));j>1&&(i[0]=[a.makeArray(b)]),m&&k&&(i[2]=function(b){a.tmpl.afterManip(this,b,e)}),c.apply(this,i)}else c.apply(this,arguments);k=0,h||a.tmpl.complete(f);return this}}),a.extend({tmpl:function(b,c,d,e){var h,j=!e;if(j)e=i,b=a.template[b]||a.template(null,b),g={};else if(!b){b=e.tmpl,f[e.key]=e,e.nodes=[],e.wrapped&&q(e,e.wrapped);return a(n(e,null,e.tmpl(a,e)))}if(!b)return[];typeof c=="function"&&(c=c.call(e||{})),d&&d.wrapped&&q(d,d.wrapped),h=a.isArray(c)?a.map(c,function(a){return a?m(d,e,b,a):null}):[m(d,e,b,c)];return j?a(n(e,null,h)):h},tmplItem:function(b){var c;b instanceof a&&(b=b[0]);while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||i},template:function(b,c){if(c){typeof c=="string"?c=p(c):c instanceof a&&(c=c[0]||{}),c.nodeType&&(c=a.data(c,"tmpl")||a.data(c,"tmpl",p(c.innerHTML)));return typeof b=="string"?a.template[b]=c:c}return b?typeof b!="string"?a.template(null,b):a.template[b]||a.template(null,e.test(b)?b:a(b)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(a){f={}},afterManip:function(b,c,d){var e=c.nodeType===11?a.makeArray(c.childNodes):c.nodeType===1?[c]:[];d.call(b,c),t(e),k++}})})(jQuery),function(){function c(a){localStorage.setItem("conversions",JSON.stringify(a))}function b(){return JSON.parse(localStorage.getItem("conversions"))}var a=[{type:"currency",from:"USD",to:"EUR"},{type:"currency",from:"GBP",to:"EUR"}],d=b("conversions");d||(d=a.slice(),c(d)),window.conversions={store:function(){c(d)},all:function(){return d},clear:function(){d.length=0,this.store()},restore:function(){d.length=0,$.extend(d,a),this.store()},remove:function(a){$.each(d,function(b,c){if(c.from+c.to===a){d.splice(b,1);return!1}}),this.store()}}}(),$(function(){function b(){var b=$("#conversions").empty(),d=$("#edit-conversions").empty();$.each(c,function(c,e){if(e.type==="currency"&&!e.rate||e.updated&&e.updated+6e4<+(new Date)){var f=e,g="http://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D"+e.from+e.to+"%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json&diagnostics=true&callback=?";$.getJSON(g,function(a){f.rate=parseFloat(a.query.results.row.rate),$("#term").keyup(),f.updated=+(new Date),conversions.store()})}$("#conversion-field").tmpl(e,{symbols:a}).appendTo(b),$("#conversion-edit-field").tmpl(e,{symbols:a}).appendTo(d)}),$("#term").keyup()}var a={USD:"$",EUR:"&euro;",GBP:"&pound;",Miles:"m",Kilometer:"km",inch:'"',centimeter:"cm"},c=conversions.all();$("#term").keyup(function(){var a=this.value;$.each(c,function(b,c){$("#"+c.from+c.to).text(c.rate?Math.ceil(a*c.rate*100)/100:"Rate not available, yet.")})}).focus(),b(),$("form").submit(function(){$("#term").blur();return!1}),$("#add").click(function(){c.push({type:"currency",from:$("#currency-options-from").val(),to:$("#currency-options-to").val()}),conversions.store(),b()}),$("#clear").click(function(){conversions.clear(),b();return!1}),$("#restore").click(function(){conversions.restore(),b();return!1}),$("#edit-conversions").click(function(a){var c=$(a.target).closest(".deletebutton");c.length&&(conversions.remove(c.prev("label").attr("for")),b());return!1})})