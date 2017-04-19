/* compact [
	prive/javascript/jquery.js?1461916197
	prive/javascript/jquery.form.js?1461916197
	prive/javascript/jquery.autosave.js?1461916197
	prive/javascript/jquery.placeholder-label.js?1461916197
	prive/javascript/ajaxCallback.js?1461916197
	prive/javascript/jquery.cookie.js?1461916197
	plugins/scenes_animees/squelettes/javascript/rAF.js
	plugins/auto/image_responsive/javascript/jquery.smartresize.js
	plugins/auto/image_responsive/javascript/image_responsive.js
	plugins/auto/image_responsive/javascript/picturefill.js
	plugins/auto/html5_responsive/v1.8.0/javascript/liens-standalone.js
	plugins/auto/html5_responsive/v1.8.0/javascript/fastclick.js
	plugins/auto/html5_responsive/v1.8.0/javascript/fastclick-activ.js
	plugins/fonds/squelettes/avec_fonds.js
	plugins/portfolio_strip/portfolio_strip.js
	plugins/photoswipe/trunk/lib/photoswipe/photoswipe.min.js
	plugins/photoswipe/trunk/lib/photoswipe/photoswipe-ui-default.min.js
	plugins/photoswipe/trunk/photoswipe_insert.js?1478167024
	plugins/medias_responsive_mod/squelettes/javascript/portfolio_ligne.js
	plugins/medias_responsive_mod/squelettes/javascript/medias_responsive.js
	plugins/modele-audio-video/javascript/swfobject.js
	plugins/scenes_animees/squelettes/javascript/rAF.js
	plugins/vivus_svg/javascript/pathformer.js
	plugins/vivus_svg/javascript/vivus.js
	plugins/vivus_svg/javascript/vivus_svg.js
	plugins/scenes_animees/squelettes/javascript/scenes_animees.js
] 58.8% */

/* prive/javascript/jquery.js?1461916197 */

(function(global,factory){
if(typeof module==="object"&&typeof module.exports==="object"){
module.exports=global.document?
factory(global,true):
function(w){
if(!w.document){
throw new Error("jQuery requires a window with a document");
}
return factory(w);
};
}else{
factory(global);
}
}(typeof window!=="undefined"?window:this,function(window,noGlobal){
var deletedIds=[];
var document=window.document;
var slice=deletedIds.slice;
var concat=deletedIds.concat;
var push=deletedIds.push;
var indexOf=deletedIds.indexOf;
var class2type={};
var toString=class2type.toString;
var hasOwn=class2type.hasOwnProperty;
var support={};
var
version="1.12.1",
jQuery=function(selector,context){
return new jQuery.fn.init(selector,context);
},
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
rmsPrefix=/^-ms-/,
rdashAlpha=/-([\da-z])/gi,
fcamelCase=function(all,letter){
return letter.toUpperCase();
};
jQuery.fn=jQuery.prototype={
jquery:version,
constructor:jQuery,
selector:"",
length:0,
toArray:function(){
return slice.call(this);
},
get:function(num){
return num!=null?
(num<0?this[num+this.length]:this[num]):
slice.call(this);
},
pushStack:function(elems){
var ret=jQuery.merge(this.constructor(),elems);
ret.prevObject=this;
ret.context=this.context;
return ret;
},
each:function(callback){
return jQuery.each(this,callback);
},
map:function(callback){
return this.pushStack(jQuery.map(this,function(elem,i){
return callback.call(elem,i,elem);
}));
},
slice:function(){
return this.pushStack(slice.apply(this,arguments));
},
first:function(){
return this.eq(0);
},
last:function(){
return this.eq(-1);
},
eq:function(i){
var len=this.length,
j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[]);
},
end:function(){
return this.prevObject||this.constructor();
},
push:push,
sort:deletedIds.sort,
splice:deletedIds.splice
};
jQuery.extend=jQuery.fn.extend=function(){
var src,copyIsArray,copy,name,options,clone,
target=arguments[0]||{},
i=1,
length=arguments.length,
deep=false;
if(typeof target==="boolean"){
deep=target;
target=arguments[i]||{};
i++;
}
if(typeof target!=="object"&&!jQuery.isFunction(target)){
target={};
}
if(i===length){
target=this;
i--;
}
for(;i<length;i++){
if((options=arguments[i])!=null){
for(name in options){
src=target[name];
copy=options[name];
if(target===copy){
continue;
}
if(deep&&copy&&(jQuery.isPlainObject(copy)||
(copyIsArray=jQuery.isArray(copy)))){
if(copyIsArray){
copyIsArray=false;
clone=src&&jQuery.isArray(src)?src:[];
}else{
clone=src&&jQuery.isPlainObject(src)?src:{};
}
target[name]=jQuery.extend(deep,clone,copy);
}else if(copy!==undefined){
target[name]=copy;
}
}
}
}
return target;
};
jQuery.extend({
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),
isReady:true,
error:function(msg){
throw new Error(msg);
},
noop:function(){},
isFunction:function(obj){
return jQuery.type(obj)==="function";
},
isArray:Array.isArray||function(obj){
return jQuery.type(obj)==="array";
},
isWindow:function(obj){
return obj!=null&&obj==obj.window;
},
isNumeric:function(obj){
var realStringObj=obj&&obj.toString();
return!jQuery.isArray(obj)&&(realStringObj-parseFloat(realStringObj)+1)>=0;
},
isEmptyObject:function(obj){
var name;
for(name in obj){
return false;
}
return true;
},
isPlainObject:function(obj){
var key;
if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){
return false;
}
try{
if(obj.constructor&&
!hasOwn.call(obj,"constructor")&&
!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){
return false;
}
}catch(e){
return false;
}
if(!support.ownFirst){
for(key in obj){
return hasOwn.call(obj,key);
}
}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key);
},
type:function(obj){
if(obj==null){
return obj+"";
}
return typeof obj==="object"||typeof obj==="function"?
class2type[toString.call(obj)]||"object":
typeof obj;
},
globalEval:function(data){
if(data&&jQuery.trim(data)){
(window.execScript||function(data){
window["eval"].call(window,data);
})(data);
}
},
camelCase:function(string){
return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);
},
nodeName:function(elem,name){
return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();
},
each:function(obj,callback){
var length,i=0;
if(isArrayLike(obj)){
length=obj.length;
for(;i<length;i++){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}else{
for(i in obj){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}
return obj;
},
trim:function(text){
return text==null?
"":
(text+"").replace(rtrim,"");
},
makeArray:function(arr,results){
var ret=results||[];
if(arr!=null){
if(isArrayLike(Object(arr))){
jQuery.merge(ret,
typeof arr==="string"?
[arr]:arr
);
}else{
push.call(ret,arr);
}
}
return ret;
},
inArray:function(elem,arr,i){
var len;
if(arr){
if(indexOf){
return indexOf.call(arr,elem,i);
}
len=arr.length;
i=i?i<0?Math.max(0,len+i):i:0;
for(;i<len;i++){
if(i in arr&&arr[i]===elem){
return i;
}
}
}
return-1;
},
merge:function(first,second){
var len=+second.length,
j=0,
i=first.length;
while(j<len){
first[i++]=second[j++];
}
if(len!==len){
while(second[j]!==undefined){
first[i++]=second[j++];
}
}
first.length=i;
return first;
},
grep:function(elems,callback,invert){
var callbackInverse,
matches=[],
i=0,
length=elems.length,
callbackExpect=!invert;
for(;i<length;i++){
callbackInverse=!callback(elems[i],i);
if(callbackInverse!==callbackExpect){
matches.push(elems[i]);
}
}
return matches;
},
map:function(elems,callback,arg){
var length,value,
i=0,
ret=[];
if(isArrayLike(elems)){
length=elems.length;
for(;i<length;i++){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}else{
for(i in elems){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}
return concat.apply([],ret);
},
guid:1,
proxy:function(fn,context){
var args,proxy,tmp;
if(typeof context==="string"){
tmp=fn[context];
context=fn;
fn=tmp;
}
if(!jQuery.isFunction(fn)){
return undefined;
}
args=slice.call(arguments,2);
proxy=function(){
return fn.apply(context||this,args.concat(slice.call(arguments)));
};
proxy.guid=fn.guid=fn.guid||jQuery.guid++;
return proxy;
},
now:function(){
return+(new Date());
},
support:support
});
if(typeof Symbol==="function"){
jQuery.fn[Symbol.iterator]=deletedIds[Symbol.iterator];
}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
function(i,name){
class2type["[object "+name+"]"]=name.toLowerCase();
});
function isArrayLike(obj){
var length=!!obj&&"length"in obj&&obj.length,
type=jQuery.type(obj);
if(type==="function"||jQuery.isWindow(obj)){
return false;
}
return type==="array"||length===0||
typeof length==="number"&&length>0&&(length-1)in obj;
}
var Sizzle=
(function(window){
var i,
support,
Expr,
getText,
isXML,
tokenize,
compile,
select,
outermostContext,
sortInput,
hasDuplicate,
setDocument,
document,
docElem,
documentIsHTML,
rbuggyQSA,
rbuggyMatches,
matches,
contains,
expando="sizzle"+1*new Date(),
preferredDoc=window.document,
dirruns=0,
done=0,
classCache=createCache(),
tokenCache=createCache(),
compilerCache=createCache(),
sortOrder=function(a,b){
if(a===b){
hasDuplicate=true;
}
return 0;
},
MAX_NEGATIVE=1<<31,
hasOwn=({}).hasOwnProperty,
arr=[],
pop=arr.pop,
push_native=arr.push,
push=arr.push,
slice=arr.slice,
indexOf=function(list,elem){
var i=0,
len=list.length;
for(;i<len;i++){
if(list[i]===elem){
return i;
}
}
return-1;
},
booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
whitespace="[\\x20\\t\\r\\n\\f]",
identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+
"*([*^$|!~]?=)"+whitespace+
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+
"*\\]",
pseudos=":("+identifier+")(?:\\(("+
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+
".*"+
")\\)|)",
rwhitespace=new RegExp(whitespace+"+","g"),
rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),
rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),
rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),
rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),
rpseudo=new RegExp(pseudos),
ridentifier=new RegExp("^"+identifier+"$"),
matchExpr={
"ID":new RegExp("^#("+identifier+")"),
"CLASS":new RegExp("^\\.("+identifier+")"),
"TAG":new RegExp("^("+identifier+"|[*])"),
"ATTR":new RegExp("^"+attributes),
"PSEUDO":new RegExp("^"+pseudos),
"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+
"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+
"*(\\d+)|))"+whitespace+"*\\)|)","i"),
"bool":new RegExp("^(?:"+booleans+")$","i"),
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")
},
rinputs=/^(?:input|select|textarea|button)$/i,
rheader=/^h\d$/i,
rnative=/^[^{]+\{\s*\[native \w/,
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
rsibling=/[+~]/,
rescape=/'|\\/g,
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),
funescape=function(_,escaped,escapedWhitespace){
var high="0x"+escaped-0x10000;
return high!==high||escapedWhitespace?
escaped:
high<0?
String.fromCharCode(high+0x10000):
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);
},
unloadHandler=function(){
setDocument();
};
try{
push.apply(
(arr=slice.call(preferredDoc.childNodes)),
preferredDoc.childNodes
);
arr[preferredDoc.childNodes.length].nodeType;
}catch(e){
push={apply:arr.length?
function(target,els){
push_native.apply(target,slice.call(els));
}:
function(target,els){
var j=target.length,
i=0;
while((target[j++]=els[i++])){}
target.length=j-1;
}
};
}
function Sizzle(selector,context,results,seed){
var m,i,elem,nid,nidselect,match,groups,newSelector,
newContext=context&&context.ownerDocument,
nodeType=context?context.nodeType:9;
results=results||[];
if(typeof selector!=="string"||!selector||
nodeType!==1&&nodeType!==9&&nodeType!==11){
return results;
}
if(!seed){
if((context?context.ownerDocument||context:preferredDoc)!==document){
setDocument(context);
}
context=context||document;
if(documentIsHTML){
if(nodeType!==11&&(match=rquickExpr.exec(selector))){
if((m=match[1])){
if(nodeType===9){
if((elem=context.getElementById(m))){
if(elem.id===m){
results.push(elem);
return results;
}
}else{
return results;
}
}else{
if(newContext&&(elem=newContext.getElementById(m))&&
contains(context,elem)&&
elem.id===m){
results.push(elem);
return results;
}
}
}else if(match[2]){
push.apply(results,context.getElementsByTagName(selector));
return results;
}else if((m=match[3])&&support.getElementsByClassName&&
context.getElementsByClassName){
push.apply(results,context.getElementsByClassName(m));
return results;
}
}
if(support.qsa&&
!compilerCache[selector+" "]&&
(!rbuggyQSA||!rbuggyQSA.test(selector))){
if(nodeType!==1){
newContext=context;
newSelector=selector;
}else if(context.nodeName.toLowerCase()!=="object"){
if((nid=context.getAttribute("id"))){
nid=nid.replace(rescape,"\\$&");
}else{
context.setAttribute("id",(nid=expando));
}
groups=tokenize(selector);
i=groups.length;
nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";
while(i--){
groups[i]=nidselect+" "+toSelector(groups[i]);
}
newSelector=groups.join(",");
newContext=rsibling.test(selector)&&testContext(context.parentNode)||
context;
}
if(newSelector){
try{
push.apply(results,
newContext.querySelectorAll(newSelector)
);
return results;
}catch(qsaError){
}finally{
if(nid===expando){
context.removeAttribute("id");
}
}
}
}
}
}
return select(selector.replace(rtrim,"$1"),context,results,seed);
}
function createCache(){
var keys=[];
function cache(key,value){
if(keys.push(key+" ")>Expr.cacheLength){
delete cache[keys.shift()];
}
return(cache[key+" "]=value);
}
return cache;
}
function markFunction(fn){
fn[expando]=true;
return fn;
}
function assert(fn){
var div=document.createElement("div");
try{
return!!fn(div);
}catch(e){
return false;
}finally{
if(div.parentNode){
div.parentNode.removeChild(div);
}
div=null;
}
}
function addHandle(attrs,handler){
var arr=attrs.split("|"),
i=arr.length;
while(i--){
Expr.attrHandle[arr[i]]=handler;
}
}
function siblingCheck(a,b){
var cur=b&&a,
diff=cur&&a.nodeType===1&&b.nodeType===1&&
(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);
if(diff){
return diff;
}
if(cur){
while((cur=cur.nextSibling)){
if(cur===b){
return-1;
}
}
}
return a?1:-1;
}
function createInputPseudo(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type===type;
};
}
function createButtonPseudo(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return(name==="input"||name==="button")&&elem.type===type;
};
}
function createPositionalPseudo(fn){
return markFunction(function(argument){
argument=+argument;
return markFunction(function(seed,matches){
var j,
matchIndexes=fn([],seed.length,argument),
i=matchIndexes.length;
while(i--){
if(seed[(j=matchIndexes[i])]){
seed[j]=!(matches[j]=seed[j]);
}
}
});
});
}
function testContext(context){
return context&&typeof context.getElementsByTagName!=="undefined"&&context;
}
support=Sizzle.support={};
isXML=Sizzle.isXML=function(elem){
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false;
};
setDocument=Sizzle.setDocument=function(node){
var hasCompare,parent,
doc=node?node.ownerDocument||node:preferredDoc;
if(doc===document||doc.nodeType!==9||!doc.documentElement){
return document;
}
document=doc;
docElem=document.documentElement;
documentIsHTML=!isXML(document);
if((parent=document.defaultView)&&parent.top!==parent){
if(parent.addEventListener){
parent.addEventListener("unload",unloadHandler,false);
}else if(parent.attachEvent){
parent.attachEvent("onunload",unloadHandler);
}
}
support.attributes=assert(function(div){
div.className="i";
return!div.getAttribute("className");
});
support.getElementsByTagName=assert(function(div){
div.appendChild(document.createComment(""));
return!div.getElementsByTagName("*").length;
});
support.getElementsByClassName=rnative.test(document.getElementsByClassName);
support.getById=assert(function(div){
docElem.appendChild(div).id=expando;
return!document.getElementsByName||!document.getElementsByName(expando).length;
});
if(support.getById){
Expr.find["ID"]=function(id,context){
if(typeof context.getElementById!=="undefined"&&documentIsHTML){
var m=context.getElementById(id);
return m?[m]:[];
}
};
Expr.filter["ID"]=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
return elem.getAttribute("id")===attrId;
};
};
}else{
delete Expr.find["ID"];
Expr.filter["ID"]=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
var node=typeof elem.getAttributeNode!=="undefined"&&
elem.getAttributeNode("id");
return node&&node.value===attrId;
};
};
}
Expr.find["TAG"]=support.getElementsByTagName?
function(tag,context){
if(typeof context.getElementsByTagName!=="undefined"){
return context.getElementsByTagName(tag);
}else if(support.qsa){
return context.querySelectorAll(tag);
}
}:
function(tag,context){
var elem,
tmp=[],
i=0,
results=context.getElementsByTagName(tag);
if(tag==="*"){
while((elem=results[i++])){
if(elem.nodeType===1){
tmp.push(elem);
}
}
return tmp;
}
return results;
};
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){
if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){
return context.getElementsByClassName(className);
}
};
rbuggyMatches=[];
rbuggyQSA=[];
if((support.qsa=rnative.test(document.querySelectorAll))){
assert(function(div){
docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+
"<select id='"+expando+"-\r\\' msallowcapture=''>"+
"<option selected=''></option></select>";
if(div.querySelectorAll("[msallowcapture^='']").length){
rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");
}
if(!div.querySelectorAll("[selected]").length){
rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");
}
if(!div.querySelectorAll("[id~="+expando+"-]").length){
rbuggyQSA.push("~=");
}
if(!div.querySelectorAll(":checked").length){
rbuggyQSA.push(":checked");
}
if(!div.querySelectorAll("a#"+expando+"+*").length){
rbuggyQSA.push(".#.+[+~]");
}
});
assert(function(div){
var input=document.createElement("input");
input.setAttribute("type","hidden");
div.appendChild(input).setAttribute("name","D");
if(div.querySelectorAll("[name=d]").length){
rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");
}
if(!div.querySelectorAll(":enabled").length){
rbuggyQSA.push(":enabled",":disabled");
}
div.querySelectorAll("*,:x");
rbuggyQSA.push(",.*:");
});
}
if((support.matchesSelector=rnative.test((matches=docElem.matches||
docElem.webkitMatchesSelector||
docElem.mozMatchesSelector||
docElem.oMatchesSelector||
docElem.msMatchesSelector)))){
assert(function(div){
support.disconnectedMatch=matches.call(div,"div");
matches.call(div,"[s!='']:x");
rbuggyMatches.push("!=",pseudos);
});
}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));
rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));
hasCompare=rnative.test(docElem.compareDocumentPosition);
contains=hasCompare||rnative.test(docElem.contains)?
function(a,b){
var adown=a.nodeType===9?a.documentElement:a,
bup=b&&b.parentNode;
return a===bup||!!(bup&&bup.nodeType===1&&(
adown.contains?
adown.contains(bup):
a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16
));
}:
function(a,b){
if(b){
while((b=b.parentNode)){
if(b===a){
return true;
}
}
}
return false;
};
sortOrder=hasCompare?
function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(compare){
return compare;
}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?
a.compareDocumentPosition(b):
1;
if(compare&1||
(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){
return-1;
}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){
return 1;
}
return sortInput?
(indexOf(sortInput,a)-indexOf(sortInput,b)):
0;
}
return compare&4?-1:1;
}:
function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var cur,
i=0,
aup=a.parentNode,
bup=b.parentNode,
ap=[a],
bp=[b];
if(!aup||!bup){
return a===document?-1:
b===document?1:
aup?-1:
bup?1:
sortInput?
(indexOf(sortInput,a)-indexOf(sortInput,b)):
0;
}else if(aup===bup){
return siblingCheck(a,b);
}
cur=a;
while((cur=cur.parentNode)){
ap.unshift(cur);
}
cur=b;
while((cur=cur.parentNode)){
bp.unshift(cur);
}
while(ap[i]===bp[i]){
i++;
}
return i?
siblingCheck(ap[i],bp[i]):
ap[i]===preferredDoc?-1:
bp[i]===preferredDoc?1:
0;
};
return document;
};
Sizzle.matches=function(expr,elements){
return Sizzle(expr,null,null,elements);
};
Sizzle.matchesSelector=function(elem,expr){
if((elem.ownerDocument||elem)!==document){
setDocument(elem);
}
expr=expr.replace(rattributeQuotes,"='$1']");
if(support.matchesSelector&&documentIsHTML&&
!compilerCache[expr+" "]&&
(!rbuggyMatches||!rbuggyMatches.test(expr))&&
(!rbuggyQSA||!rbuggyQSA.test(expr))){
try{
var ret=matches.call(elem,expr);
if(ret||support.disconnectedMatch||
elem.document&&elem.document.nodeType!==11){
return ret;
}
}catch(e){}
}
return Sizzle(expr,document,null,[elem]).length>0;
};
Sizzle.contains=function(context,elem){
if((context.ownerDocument||context)!==document){
setDocument(context);
}
return contains(context,elem);
};
Sizzle.attr=function(elem,name){
if((elem.ownerDocument||elem)!==document){
setDocument(elem);
}
var fn=Expr.attrHandle[name.toLowerCase()],
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?
fn(elem,name,!documentIsHTML):
undefined;
return val!==undefined?
val:
support.attributes||!documentIsHTML?
elem.getAttribute(name):
(val=elem.getAttributeNode(name))&&val.specified?
val.value:
null;
};
Sizzle.error=function(msg){
throw new Error("Syntax error, unrecognized expression: "+msg);
};
Sizzle.uniqueSort=function(results){
var elem,
duplicates=[],
j=0,
i=0;
hasDuplicate=!support.detectDuplicates;
sortInput=!support.sortStable&&results.slice(0);
results.sort(sortOrder);
if(hasDuplicate){
while((elem=results[i++])){
if(elem===results[i]){
j=duplicates.push(i);
}
}
while(j--){
results.splice(duplicates[j],1);
}
}
sortInput=null;
return results;
};
getText=Sizzle.getText=function(elem){
var node,
ret="",
i=0,
nodeType=elem.nodeType;
if(!nodeType){
while((node=elem[i++])){
ret+=getText(node);
}
}else if(nodeType===1||nodeType===9||nodeType===11){
if(typeof elem.textContent==="string"){
return elem.textContent;
}else{
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
ret+=getText(elem);
}
}
}else if(nodeType===3||nodeType===4){
return elem.nodeValue;
}
return ret;
};
Expr=Sizzle.selectors={
cacheLength:50,
createPseudo:markFunction,
match:matchExpr,
attrHandle:{},
find:{},
relative:{
">":{dir:"parentNode",first:true},
" ":{dir:"parentNode"},
"+":{dir:"previousSibling",first:true},
"~":{dir:"previousSibling"}
},
preFilter:{
"ATTR":function(match){
match[1]=match[1].replace(runescape,funescape);
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);
if(match[2]==="~="){
match[3]=" "+match[3]+" ";
}
return match.slice(0,4);
},
"CHILD":function(match){
match[1]=match[1].toLowerCase();
if(match[1].slice(0,3)==="nth"){
if(!match[3]){
Sizzle.error(match[0]);
}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));
match[5]=+((match[7]+match[8])||match[3]==="odd");
}else if(match[3]){
Sizzle.error(match[0]);
}
return match;
},
"PSEUDO":function(match){
var excess,
unquoted=!match[6]&&match[2];
if(matchExpr["CHILD"].test(match[0])){
return null;
}
if(match[3]){
match[2]=match[4]||match[5]||"";
}else if(unquoted&&rpseudo.test(unquoted)&&
(excess=tokenize(unquoted,true))&&
(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){
match[0]=match[0].slice(0,excess);
match[2]=unquoted.slice(0,excess);
}
return match.slice(0,3);
}
},
filter:{
"TAG":function(nodeNameSelector){
var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();
return nodeNameSelector==="*"?
function(){return true;}:
function(elem){
return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;
};
},
"CLASS":function(className){
var pattern=classCache[className+" "];
return pattern||
(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&
classCache(className,function(elem){
return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");
});
},
"ATTR":function(name,operator,check){
return function(elem){
var result=Sizzle.attr(elem,name);
if(result==null){
return operator==="!=";
}
if(!operator){
return true;
}
result+="";
return operator==="="?result===check:
operator==="!="?result!==check:
operator==="^="?check&&result.indexOf(check)===0:
operator==="*="?check&&result.indexOf(check)>-1:
operator==="$="?check&&result.slice(-check.length)===check:
operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:
operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":
false;
};
},
"CHILD":function(type,what,argument,first,last){
var simple=type.slice(0,3)!=="nth",
forward=type.slice(-4)!=="last",
ofType=what==="of-type";
return first===1&&last===0?
function(elem){
return!!elem.parentNode;
}:
function(elem,context,xml){
var cache,uniqueCache,outerCache,node,nodeIndex,start,
dir=simple!==forward?"nextSibling":"previousSibling",
parent=elem.parentNode,
name=ofType&&elem.nodeName.toLowerCase(),
useCache=!xml&&!ofType,
diff=false;
if(parent){
if(simple){
while(dir){
node=elem;
while((node=node[dir])){
if(ofType?
node.nodeName.toLowerCase()===name:
node.nodeType===1){
return false;
}
}
start=dir=type==="only"&&!start&&"nextSibling";
}
return true;
}
start=[forward?parent.firstChild:parent.lastChild];
if(forward&&useCache){
node=parent;
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
cache=uniqueCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex&&cache[2];
node=nodeIndex&&parent.childNodes[nodeIndex];
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if(node.nodeType===1&&++diff&&node===elem){
uniqueCache[type]=[dirruns,nodeIndex,diff];
break;
}
}
}else{
if(useCache){
node=elem;
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
cache=uniqueCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex;
}
if(diff===false){
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if((ofType?
node.nodeName.toLowerCase()===name:
node.nodeType===1)&&
++diff){
if(useCache){
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
uniqueCache[type]=[dirruns,diff];
}
if(node===elem){
break;
}
}
}
}
}
diff-=last;
return diff===first||(diff%first===0&&diff/first>=0);
}
};
},
"PSEUDO":function(pseudo,argument){
var args,
fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||
Sizzle.error("unsupported pseudo: "+pseudo);
if(fn[expando]){
return fn(argument);
}
if(fn.length>1){
args=[pseudo,pseudo,"",argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?
markFunction(function(seed,matches){
var idx,
matched=fn(seed,argument),
i=matched.length;
while(i--){
idx=indexOf(seed,matched[i]);
seed[idx]=!(matches[idx]=matched[i]);
}
}):
function(elem){
return fn(elem,0,args);
};
}
return fn;
}
},
pseudos:{
"not":markFunction(function(selector){
var input=[],
results=[],
matcher=compile(selector.replace(rtrim,"$1"));
return matcher[expando]?
markFunction(function(seed,matches,context,xml){
var elem,
unmatched=matcher(seed,null,xml,[]),
i=seed.length;
while(i--){
if((elem=unmatched[i])){
seed[i]=!(matches[i]=elem);
}
}
}):
function(elem,context,xml){
input[0]=elem;
matcher(input,null,xml,results);
input[0]=null;
return!results.pop();
};
}),
"has":markFunction(function(selector){
return function(elem){
return Sizzle(selector,elem).length>0;
};
}),
"contains":markFunction(function(text){
text=text.replace(runescape,funescape);
return function(elem){
return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;
};
}),
"lang":markFunction(function(lang){
if(!ridentifier.test(lang||"")){
Sizzle.error("unsupported lang: "+lang);
}
lang=lang.replace(runescape,funescape).toLowerCase();
return function(elem){
var elemLang;
do{
if((elemLang=documentIsHTML?
elem.lang:
elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){
elemLang=elemLang.toLowerCase();
return elemLang===lang||elemLang.indexOf(lang+"-")===0;
}
}while((elem=elem.parentNode)&&elem.nodeType===1);
return false;
};
}),
"target":function(elem){
var hash=window.location&&window.location.hash;
return hash&&hash.slice(1)===elem.id;
},
"root":function(elem){
return elem===docElem;
},
"focus":function(elem){
return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);
},
"enabled":function(elem){
return elem.disabled===false;
},
"disabled":function(elem){
return elem.disabled===true;
},
"checked":function(elem){
var nodeName=elem.nodeName.toLowerCase();
return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);
},
"selected":function(elem){
if(elem.parentNode){
elem.parentNode.selectedIndex;
}
return elem.selected===true;
},
"empty":function(elem){
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
if(elem.nodeType<6){
return false;
}
}
return true;
},
"parent":function(elem){
return!Expr.pseudos["empty"](elem);
},
"header":function(elem){
return rheader.test(elem.nodeName);
},
"input":function(elem){
return rinputs.test(elem.nodeName);
},
"button":function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type==="button"||name==="button";
},
"text":function(elem){
var attr;
return elem.nodeName.toLowerCase()==="input"&&
elem.type==="text"&&
((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");
},
"first":createPositionalPseudo(function(){
return[0];
}),
"last":createPositionalPseudo(function(matchIndexes,length){
return[length-1];
}),
"eq":createPositionalPseudo(function(matchIndexes,length,argument){
return[argument<0?argument+length:argument];
}),
"even":createPositionalPseudo(function(matchIndexes,length){
var i=0;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
"odd":createPositionalPseudo(function(matchIndexes,length){
var i=1;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
"lt":createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;--i>=0;){
matchIndexes.push(i);
}
return matchIndexes;
}),
"gt":createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;++i<length;){
matchIndexes.push(i);
}
return matchIndexes;
})
}
};
Expr.pseudos["nth"]=Expr.pseudos["eq"];
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){
Expr.pseudos[i]=createInputPseudo(i);
}
for(i in{submit:true,reset:true}){
Expr.pseudos[i]=createButtonPseudo(i);
}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;
Expr.setFilters=new setFilters();
tokenize=Sizzle.tokenize=function(selector,parseOnly){
var matched,match,tokens,type,
soFar,groups,preFilters,
cached=tokenCache[selector+" "];
if(cached){
return parseOnly?0:cached.slice(0);
}
soFar=selector;
groups=[];
preFilters=Expr.preFilter;
while(soFar){
if(!matched||(match=rcomma.exec(soFar))){
if(match){
soFar=soFar.slice(match[0].length)||soFar;
}
groups.push((tokens=[]));
}
matched=false;
if((match=rcombinators.exec(soFar))){
matched=match.shift();
tokens.push({
value:matched,
type:match[0].replace(rtrim," ")
});
soFar=soFar.slice(matched.length);
}
for(type in Expr.filter){
if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||
(match=preFilters[type](match)))){
matched=match.shift();
tokens.push({
value:matched,
type:type,
matches:match
});
soFar=soFar.slice(matched.length);
}
}
if(!matched){
break;
}
}
return parseOnly?
soFar.length:
soFar?
Sizzle.error(selector):
tokenCache(selector,groups).slice(0);
};
function toSelector(tokens){
var i=0,
len=tokens.length,
selector="";
for(;i<len;i++){
selector+=tokens[i].value;
}
return selector;
}
function addCombinator(matcher,combinator,base){
var dir=combinator.dir,
checkNonElements=base&&dir==="parentNode",
doneName=done++;
return combinator.first?
function(elem,context,xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
return matcher(elem,context,xml);
}
}
}:
function(elem,context,xml){
var oldCache,uniqueCache,outerCache,
newCache=[dirruns,doneName];
if(xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
if(matcher(elem,context,xml)){
return true;
}
}
}
}else{
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
outerCache=elem[expando]||(elem[expando]={});
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});
if((oldCache=uniqueCache[dir])&&
oldCache[0]===dirruns&&oldCache[1]===doneName){
return(newCache[2]=oldCache[2]);
}else{
uniqueCache[dir]=newCache;
if((newCache[2]=matcher(elem,context,xml))){
return true;
}
}
}
}
}
};
}
function elementMatcher(matchers){
return matchers.length>1?
function(elem,context,xml){
var i=matchers.length;
while(i--){
if(!matchers[i](elem,context,xml)){
return false;
}
}
return true;
}:
matchers[0];
}
function multipleContexts(selector,contexts,results){
var i=0,
len=contexts.length;
for(;i<len;i++){
Sizzle(selector,contexts[i],results);
}
return results;
}
function condense(unmatched,map,filter,context,xml){
var elem,
newUnmatched=[],
i=0,
len=unmatched.length,
mapped=map!=null;
for(;i<len;i++){
if((elem=unmatched[i])){
if(!filter||filter(elem,context,xml)){
newUnmatched.push(elem);
if(mapped){
map.push(i);
}
}
}
}
return newUnmatched;
}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){
if(postFilter&&!postFilter[expando]){
postFilter=setMatcher(postFilter);
}
if(postFinder&&!postFinder[expando]){
postFinder=setMatcher(postFinder,postSelector);
}
return markFunction(function(seed,results,context,xml){
var temp,i,elem,
preMap=[],
postMap=[],
preexisting=results.length,
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),
matcherIn=preFilter&&(seed||!selector)?
condense(elems,preMap,preFilter,context,xml):
elems,
matcherOut=matcher?
postFinder||(seed?preFilter:preexisting||postFilter)?
[]:
results:
matcherIn;
if(matcher){
matcher(matcherIn,matcherOut,context,xml);
}
if(postFilter){
temp=condense(matcherOut,postMap);
postFilter(temp,[],context,xml);
i=temp.length;
while(i--){
if((elem=temp[i])){
matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);
}
}
}
if(seed){
if(postFinder||preFilter){
if(postFinder){
temp=[];
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])){
temp.push((matcherIn[i]=elem));
}
}
postFinder(null,(matcherOut=[]),temp,xml);
}
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])&&
(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){
seed[temp]=!(results[temp]=elem);
}
}
}
}else{
matcherOut=condense(
matcherOut===results?
matcherOut.splice(preexisting,matcherOut.length):
matcherOut
);
if(postFinder){
postFinder(null,results,matcherOut,xml);
}else{
push.apply(results,matcherOut);
}
}
});
}
function matcherFromTokens(tokens){
var checkContext,matcher,j,
len=tokens.length,
leadingRelative=Expr.relative[tokens[0].type],
implicitRelative=leadingRelative||Expr.relative[" "],
i=leadingRelative?1:0,
matchContext=addCombinator(function(elem){
return elem===checkContext;
},implicitRelative,true),
matchAnyContext=addCombinator(function(elem){
return indexOf(checkContext,elem)>-1;
},implicitRelative,true),
matchers=[function(elem,context,xml){
var ret=(!leadingRelative&&(xml||context!==outermostContext))||(
(checkContext=context).nodeType?
matchContext(elem,context,xml):
matchAnyContext(elem,context,xml));
checkContext=null;
return ret;
}];
for(;i<len;i++){
if((matcher=Expr.relative[tokens[i].type])){
matchers=[addCombinator(elementMatcher(matchers),matcher)];
}else{
matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);
if(matcher[expando]){
j=++i;
for(;j<len;j++){
if(Expr.relative[tokens[j].type]){
break;
}
}
return setMatcher(
i>1&&elementMatcher(matchers),
i>1&&toSelector(
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})
).replace(rtrim,"$1"),
matcher,
i<j&&matcherFromTokens(tokens.slice(i,j)),
j<len&&matcherFromTokens((tokens=tokens.slice(j))),
j<len&&toSelector(tokens)
);
}
matchers.push(matcher);
}
}
return elementMatcher(matchers);
}
function matcherFromGroupMatchers(elementMatchers,setMatchers){
var bySet=setMatchers.length>0,
byElement=elementMatchers.length>0,
superMatcher=function(seed,context,xml,results,outermost){
var elem,j,matcher,
matchedCount=0,
i="0",
unmatched=seed&&[],
setMatched=[],
contextBackup=outermostContext,
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),
dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),
len=elems.length;
if(outermost){
outermostContext=context===document||context||outermost;
}
for(;i!==len&&(elem=elems[i])!=null;i++){
if(byElement&&elem){
j=0;
if(!context&&elem.ownerDocument!==document){
setDocument(elem);
xml=!documentIsHTML;
}
while((matcher=elementMatchers[j++])){
if(matcher(elem,context||document,xml)){
results.push(elem);
break;
}
}
if(outermost){
dirruns=dirrunsUnique;
}
}
if(bySet){
if((elem=!matcher&&elem)){
matchedCount--;
}
if(seed){
unmatched.push(elem);
}
}
}
matchedCount+=i;
if(bySet&&i!==matchedCount){
j=0;
while((matcher=setMatchers[j++])){
matcher(unmatched,setMatched,context,xml);
}
if(seed){
if(matchedCount>0){
while(i--){
if(!(unmatched[i]||setMatched[i])){
setMatched[i]=pop.call(results);
}
}
}
setMatched=condense(setMatched);
}
push.apply(results,setMatched);
if(outermost&&!seed&&setMatched.length>0&&
(matchedCount+setMatchers.length)>1){
Sizzle.uniqueSort(results);
}
}
if(outermost){
dirruns=dirrunsUnique;
outermostContext=contextBackup;
}
return unmatched;
};
return bySet?
markFunction(superMatcher):
superMatcher;
}
compile=Sizzle.compile=function(selector,match){
var i,
setMatchers=[],
elementMatchers=[],
cached=compilerCache[selector+" "];
if(!cached){
if(!match){
match=tokenize(selector);
}
i=match.length;
while(i--){
cached=matcherFromTokens(match[i]);
if(cached[expando]){
setMatchers.push(cached);
}else{
elementMatchers.push(cached);
}
}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));
cached.selector=selector;
}
return cached;
};
select=Sizzle.select=function(selector,context,results,seed){
var i,tokens,token,type,find,
compiled=typeof selector==="function"&&selector,
match=!seed&&tokenize((selector=compiled.selector||selector));
results=results||[];
if(match.length===1){
tokens=match[0]=match[0].slice(0);
if(tokens.length>2&&(token=tokens[0]).type==="ID"&&
support.getById&&context.nodeType===9&&documentIsHTML&&
Expr.relative[tokens[1].type]){
context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];
if(!context){
return results;
}else if(compiled){
context=context.parentNode;
}
selector=selector.slice(tokens.shift().value.length);
}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;
while(i--){
token=tokens[i];
if(Expr.relative[(type=token.type)]){
break;
}
if((find=Expr.find[type])){
if((seed=find(
token.matches[0].replace(runescape,funescape),
rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context
))){
tokens.splice(i,1);
selector=seed.length&&toSelector(tokens);
if(!selector){
push.apply(results,seed);
return results;
}
break;
}
}
}
}
(compiled||compile(selector,match))(
seed,
context,
!documentIsHTML,
results,
!context||rsibling.test(selector)&&testContext(context.parentNode)||context
);
return results;
};
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;
support.detectDuplicates=!!hasDuplicate;
setDocument();
support.sortDetached=assert(function(div1){
return div1.compareDocumentPosition(document.createElement("div"))&1;
});
if(!assert(function(div){
div.innerHTML="<a href='#'></a>";
return div.firstChild.getAttribute("href")==="#";
})){
addHandle("type|href|height|width",function(elem,name,isXML){
if(!isXML){
return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);
}
});
}
if(!support.attributes||!assert(function(div){
div.innerHTML="<input/>";
div.firstChild.setAttribute("value","");
return div.firstChild.getAttribute("value")==="";
})){
addHandle("value",function(elem,name,isXML){
if(!isXML&&elem.nodeName.toLowerCase()==="input"){
return elem.defaultValue;
}
});
}
if(!assert(function(div){
return div.getAttribute("disabled")==null;
})){
addHandle(booleans,function(elem,name,isXML){
var val;
if(!isXML){
return elem[name]===true?name.toLowerCase():
(val=elem.getAttributeNode(name))&&val.specified?
val.value:
null;
}
});
}
return Sizzle;
})(window);
jQuery.find=Sizzle;
jQuery.expr=Sizzle.selectors;
jQuery.expr[":"]=jQuery.expr.pseudos;
jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;
jQuery.text=Sizzle.getText;
jQuery.isXMLDoc=Sizzle.isXML;
jQuery.contains=Sizzle.contains;
var dir=function(elem,dir,until){
var matched=[],
truncate=until!==undefined;
while((elem=elem[dir])&&elem.nodeType!==9){
if(elem.nodeType===1){
if(truncate&&jQuery(elem).is(until)){
break;
}
matched.push(elem);
}
}
return matched;
};
var siblings=function(n,elem){
var matched=[];
for(;n;n=n.nextSibling){
if(n.nodeType===1&&n!==elem){
matched.push(n);
}
}
return matched;
};
var rneedsContext=jQuery.expr.match.needsContext;
var rsingleTag=(/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
var risSimple=/^.[^:#\[\.,]*$/;
function winnow(elements,qualifier,not){
if(jQuery.isFunction(qualifier)){
return jQuery.grep(elements,function(elem,i){
return!!qualifier.call(elem,i,elem)!==not;
});
}
if(qualifier.nodeType){
return jQuery.grep(elements,function(elem){
return(elem===qualifier)!==not;
});
}
if(typeof qualifier==="string"){
if(risSimple.test(qualifier)){
return jQuery.filter(qualifier,elements,not);
}
qualifier=jQuery.filter(qualifier,elements);
}
return jQuery.grep(elements,function(elem){
return(jQuery.inArray(elem,qualifier)>-1)!==not;
});
}
jQuery.filter=function(expr,elems,not){
var elem=elems[0];
if(not){
expr=":not("+expr+")";
}
return elems.length===1&&elem.nodeType===1?
jQuery.find.matchesSelector(elem,expr)?[elem]:[]:
jQuery.find.matches(expr,jQuery.grep(elems,function(elem){
return elem.nodeType===1;
}));
};
jQuery.fn.extend({
find:function(selector){
var i,
ret=[],
self=this,
len=self.length;
if(typeof selector!=="string"){
return this.pushStack(jQuery(selector).filter(function(){
for(i=0;i<len;i++){
if(jQuery.contains(self[i],this)){
return true;
}
}
}));
}
for(i=0;i<len;i++){
jQuery.find(selector,self[i],ret);
}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);
ret.selector=this.selector?this.selector+" "+selector:selector;
return ret;
},
filter:function(selector){
return this.pushStack(winnow(this,selector||[],false));
},
not:function(selector){
return this.pushStack(winnow(this,selector||[],true));
},
is:function(selector){
return!!winnow(
this,
typeof selector==="string"&&rneedsContext.test(selector)?
jQuery(selector):
selector||[],
false
).length;
}
});
var rootjQuery,
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
init=jQuery.fn.init=function(selector,context,root){
var match,elem;
if(!selector){
return this;
}
root=root||rootjQuery;
if(typeof selector==="string"){
if(selector.charAt(0)==="<"&&
selector.charAt(selector.length-1)===">"&&
selector.length>=3){
match=[null,selector,null];
}else{
match=rquickExpr.exec(selector);
}
if(match&&(match[1]||!context)){
if(match[1]){
context=context instanceof jQuery?context[0]:context;
jQuery.merge(this,jQuery.parseHTML(
match[1],
context&&context.nodeType?context.ownerDocument||context:document,
true
));
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){
for(match in context){
if(jQuery.isFunction(this[match])){
this[match](context[match]);
}else{
this.attr(match,context[match]);
}
}
}
return this;
}else{
elem=document.getElementById(match[2]);
if(elem&&elem.parentNode){
if(elem.id!==match[2]){
return rootjQuery.find(selector);
}
this.length=1;
this[0]=elem;
}
this.context=document;
this.selector=selector;
return this;
}
}else if(!context||context.jquery){
return(context||root).find(selector);
}else{
return this.constructor(context).find(selector);
}
}else if(selector.nodeType){
this.context=this[0]=selector;
this.length=1;
return this;
}else if(jQuery.isFunction(selector)){
return typeof root.ready!=="undefined"?
root.ready(selector):
selector(jQuery);
}
if(selector.selector!==undefined){
this.selector=selector.selector;
this.context=selector.context;
}
return jQuery.makeArray(selector,this);
};
init.prototype=jQuery.fn;
rootjQuery=jQuery(document);
var rparentsprev=/^(?:parents|prev(?:Until|All))/,
guaranteedUnique={
children:true,
contents:true,
next:true,
prev:true
};
jQuery.fn.extend({
has:function(target){
var i,
targets=jQuery(target,this),
len=targets.length;
return this.filter(function(){
for(i=0;i<len;i++){
if(jQuery.contains(this,targets[i])){
return true;
}
}
});
},
closest:function(selectors,context){
var cur,
i=0,
l=this.length,
matched=[],
pos=rneedsContext.test(selectors)||typeof selectors!=="string"?
jQuery(selectors,context||this.context):
0;
for(;i<l;i++){
for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){
if(cur.nodeType<11&&(pos?
pos.index(cur)>-1:
cur.nodeType===1&&
jQuery.find.matchesSelector(cur,selectors))){
matched.push(cur);
break;
}
}
}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);
},
index:function(elem){
if(!elem){
return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;
}
if(typeof elem==="string"){
return jQuery.inArray(this[0],jQuery(elem));
}
return jQuery.inArray(
elem.jquery?elem[0]:elem,this);
},
add:function(selector,context){
return this.pushStack(
jQuery.uniqueSort(
jQuery.merge(this.get(),jQuery(selector,context))
)
);
},
addBack:function(selector){
return this.add(selector==null?
this.prevObject:this.prevObject.filter(selector)
);
}
});
function sibling(cur,dir){
do{
cur=cur[dir];
}while(cur&&cur.nodeType!==1);
return cur;
}
jQuery.each({
parent:function(elem){
var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null;
},
parents:function(elem){
return dir(elem,"parentNode");
},
parentsUntil:function(elem,i,until){
return dir(elem,"parentNode",until);
},
next:function(elem){
return sibling(elem,"nextSibling");
},
prev:function(elem){
return sibling(elem,"previousSibling");
},
nextAll:function(elem){
return dir(elem,"nextSibling");
},
prevAll:function(elem){
return dir(elem,"previousSibling");
},
nextUntil:function(elem,i,until){
return dir(elem,"nextSibling",until);
},
prevUntil:function(elem,i,until){
return dir(elem,"previousSibling",until);
},
siblings:function(elem){
return siblings((elem.parentNode||{}).firstChild,elem);
},
children:function(elem){
return siblings(elem.firstChild);
},
contents:function(elem){
return jQuery.nodeName(elem,"iframe")?
elem.contentDocument||elem.contentWindow.document:
jQuery.merge([],elem.childNodes);
}
},function(name,fn){
jQuery.fn[name]=function(until,selector){
var ret=jQuery.map(this,fn,until);
if(name.slice(-5)!=="Until"){
selector=until;
}
if(selector&&typeof selector==="string"){
ret=jQuery.filter(selector,ret);
}
if(this.length>1){
if(!guaranteedUnique[name]){
ret=jQuery.uniqueSort(ret);
}
if(rparentsprev.test(name)){
ret=ret.reverse();
}
}
return this.pushStack(ret);
};
});
var rnotwhite=(/\S+/g);
function createOptions(options){
var object={};
jQuery.each(options.match(rnotwhite)||[],function(_,flag){
object[flag]=true;
});
return object;
}
jQuery.Callbacks=function(options){
options=typeof options==="string"?
createOptions(options):
jQuery.extend({},options);
var
firing,
memory,
fired,
locked,
list=[],
queue=[],
firingIndex=-1,
fire=function(){
locked=options.once;
fired=firing=true;
for(;queue.length;firingIndex=-1){
memory=queue.shift();
while(++firingIndex<list.length){
if(list[firingIndex].apply(memory[0],memory[1])===false&&
options.stopOnFalse){
firingIndex=list.length;
memory=false;
}
}
}
if(!options.memory){
memory=false;
}
firing=false;
if(locked){
if(memory){
list=[];
}else{
list="";
}
}
},
self={
add:function(){
if(list){
if(memory&&!firing){
firingIndex=list.length-1;
queue.push(memory);
}
(function add(args){
jQuery.each(args,function(_,arg){
if(jQuery.isFunction(arg)){
if(!options.unique||!self.has(arg)){
list.push(arg);
}
}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){
add(arg);
}
});
})(arguments);
if(memory&&!firing){
fire();
}
}
return this;
},
remove:function(){
jQuery.each(arguments,function(_,arg){
var index;
while((index=jQuery.inArray(arg,list,index))>-1){
list.splice(index,1);
if(index<=firingIndex){
firingIndex--;
}
}
});
return this;
},
has:function(fn){
return fn?
jQuery.inArray(fn,list)>-1:
list.length>0;
},
empty:function(){
if(list){
list=[];
}
return this;
},
disable:function(){
locked=queue=[];
list=memory="";
return this;
},
disabled:function(){
return!list;
},
lock:function(){
locked=true;
if(!memory){
self.disable();
}
return this;
},
locked:function(){
return!!locked;
},
fireWith:function(context,args){
if(!locked){
args=args||[];
args=[context,args.slice?args.slice():args];
queue.push(args);
if(!firing){
fire();
}
}
return this;
},
fire:function(){
self.fireWith(this,arguments);
return this;
},
fired:function(){
return!!fired;
}
};
return self;
};
jQuery.extend({
Deferred:function(func){
var tuples=[
["resolve","done",jQuery.Callbacks("once memory"),"resolved"],
["reject","fail",jQuery.Callbacks("once memory"),"rejected"],
["notify","progress",jQuery.Callbacks("memory")]
],
state="pending",
promise={
state:function(){
return state;
},
always:function(){
deferred.done(arguments).fail(arguments);
return this;
},
then:function(){
var fns=arguments;
return jQuery.Deferred(function(newDefer){
jQuery.each(tuples,function(i,tuple){
var fn=jQuery.isFunction(fns[i])&&fns[i];
deferred[tuple[1]](function(){
var returned=fn&&fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){
returned.promise()
.progress(newDefer.notify)
.done(newDefer.resolve)
.fail(newDefer.reject);
}else{
newDefer[tuple[0]+"With"](
this===promise?newDefer.promise():this,
fn?[returned]:arguments
);
}
});
});
fns=null;
}).promise();
},
promise:function(obj){
return obj!=null?jQuery.extend(obj,promise):promise;
}
},
deferred={};
promise.pipe=promise.then;
jQuery.each(tuples,function(i,tuple){
var list=tuple[2],
stateString=tuple[3];
promise[tuple[1]]=list.add;
if(stateString){
list.add(function(){
state=stateString;
},tuples[i^1][2].disable,tuples[2][2].lock);
}
deferred[tuple[0]]=function(){
deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);
return this;
};
deferred[tuple[0]+"With"]=list.fireWith;
});
promise.promise(deferred);
if(func){
func.call(deferred,deferred);
}
return deferred;
},
when:function(subordinate){
var i=0,
resolveValues=slice.call(arguments),
length=resolveValues.length,
remaining=length!==1||
(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,
deferred=remaining===1?subordinate:jQuery.Deferred(),
updateFunc=function(i,contexts,values){
return function(value){
contexts[i]=this;
values[i]=arguments.length>1?slice.call(arguments):value;
if(values===progressValues){
deferred.notifyWith(contexts,values);
}else if(!(--remaining)){
deferred.resolveWith(contexts,values);
}
};
},
progressValues,progressContexts,resolveContexts;
if(length>1){
progressValues=new Array(length);
progressContexts=new Array(length);
resolveContexts=new Array(length);
for(;i<length;i++){
if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){
resolveValues[i].promise()
.progress(updateFunc(i,progressContexts,progressValues))
.done(updateFunc(i,resolveContexts,resolveValues))
.fail(deferred.reject);
}else{
--remaining;
}
}
}
if(!remaining){
deferred.resolveWith(resolveContexts,resolveValues);
}
return deferred.promise();
}
});
var readyList;
jQuery.fn.ready=function(fn){
jQuery.ready.promise().done(fn);
return this;
};
jQuery.extend({
isReady:false,
readyWait:1,
holdReady:function(hold){
if(hold){
jQuery.readyWait++;
}else{
jQuery.ready(true);
}
},
ready:function(wait){
if(wait===true?--jQuery.readyWait:jQuery.isReady){
return;
}
jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){
return;
}
readyList.resolveWith(document,[jQuery]);
if(jQuery.fn.triggerHandler){
jQuery(document).triggerHandler("ready");
jQuery(document).off("ready");
}
}
});
function detach(){
if(document.addEventListener){
document.removeEventListener("DOMContentLoaded",completed);
window.removeEventListener("load",completed);
}else{
document.detachEvent("onreadystatechange",completed);
window.detachEvent("onload",completed);
}
}
function completed(){
if(document.addEventListener||
window.event.type==="load"||
document.readyState==="complete"){
detach();
jQuery.ready();
}
}
jQuery.ready.promise=function(obj){
if(!readyList){
readyList=jQuery.Deferred();
if(document.readyState==="complete"||
(document.readyState!=="loading"&&!document.documentElement.doScroll)){
window.setTimeout(jQuery.ready);
}else if(document.addEventListener){
document.addEventListener("DOMContentLoaded",completed);
window.addEventListener("load",completed);
}else{
document.attachEvent("onreadystatechange",completed);
window.attachEvent("onload",completed);
var top=false;
try{
top=window.frameElement==null&&document.documentElement;
}catch(e){}
if(top&&top.doScroll){
(function doScrollCheck(){
if(!jQuery.isReady){
try{
top.doScroll("left");
}catch(e){
return window.setTimeout(doScrollCheck,50);
}
detach();
jQuery.ready();
}
})();
}
}
}
return readyList.promise(obj);
};
jQuery.ready.promise();
var i;
for(i in jQuery(support)){
break;
}
support.ownFirst=i==="0";
support.inlineBlockNeedsLayout=false;
jQuery(function(){
var val,div,body,container;
body=document.getElementsByTagName("body")[0];
if(!body||!body.style){
return;
}
div=document.createElement("div");
container=document.createElement("div");
container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
body.appendChild(container).appendChild(div);
if(typeof div.style.zoom!=="undefined"){
div.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
support.inlineBlockNeedsLayout=val=div.offsetWidth===3;
if(val){
body.style.zoom=1;
}
}
body.removeChild(container);
});
(function(){
var div=document.createElement("div");
support.deleteExpando=true;
try{
delete div.test;
}catch(e){
support.deleteExpando=false;
}
div=null;
})();
var acceptData=function(elem){
var noData=jQuery.noData[(elem.nodeName+" ").toLowerCase()],
nodeType=+elem.nodeType||1;
return nodeType!==1&&nodeType!==9?
false:
!noData||noData!==true&&elem.getAttribute("classid")===noData;
};
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
rmultiDash=/([A-Z])/g;
function dataAttr(elem,key,data){
if(data===undefined&&elem.nodeType===1){
var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){
try{
data=data==="true"?true:
data==="false"?false:
data==="null"?null:
+data+""===data?+data:
rbrace.test(data)?jQuery.parseJSON(data):
data;
}catch(e){}
jQuery.data(elem,key,data);
}else{
data=undefined;
}
}
return data;
}
function isEmptyDataObject(obj){
var name;
for(name in obj){
if(name==="data"&&jQuery.isEmptyObject(obj[name])){
continue;
}
if(name!=="toJSON"){
return false;
}
}
return true;
}
function internalData(elem,name,data,pvt){
if(!acceptData(elem)){
return;
}
var ret,thisCache,
internalKey=jQuery.expando,
isNode=elem.nodeType,
cache=isNode?jQuery.cache:elem,
id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;
if((!id||!cache[id]||(!pvt&&!cache[id].data))&&
data===undefined&&typeof name==="string"){
return;
}
if(!id){
if(isNode){
id=elem[internalKey]=deletedIds.pop()||jQuery.guid++;
}else{
id=internalKey;
}
}
if(!cache[id]){
cache[id]=isNode?{}:{toJSON:jQuery.noop};
}
if(typeof name==="object"||typeof name==="function"){
if(pvt){
cache[id]=jQuery.extend(cache[id],name);
}else{
cache[id].data=jQuery.extend(cache[id].data,name);
}
}
thisCache=cache[id];
if(!pvt){
if(!thisCache.data){
thisCache.data={};
}
thisCache=thisCache.data;
}
if(data!==undefined){
thisCache[jQuery.camelCase(name)]=data;
}
if(typeof name==="string"){
ret=thisCache[name];
if(ret==null){
ret=thisCache[jQuery.camelCase(name)];
}
}else{
ret=thisCache;
}
return ret;
}
function internalRemoveData(elem,name,pvt){
if(!acceptData(elem)){
return;
}
var thisCache,i,
isNode=elem.nodeType,
cache=isNode?jQuery.cache:elem,
id=isNode?elem[jQuery.expando]:jQuery.expando;
if(!cache[id]){
return;
}
if(name){
thisCache=pvt?cache[id]:cache[id].data;
if(thisCache){
if(!jQuery.isArray(name)){
if(name in thisCache){
name=[name];
}else{
name=jQuery.camelCase(name);
if(name in thisCache){
name=[name];
}else{
name=name.split(" ");
}
}
}else{
name=name.concat(jQuery.map(name,jQuery.camelCase));
}
i=name.length;
while(i--){
delete thisCache[name[i]];
}
if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){
return;
}
}
}
if(!pvt){
delete cache[id].data;
if(!isEmptyDataObject(cache[id])){
return;
}
}
if(isNode){
jQuery.cleanData([elem],true);
}else if(support.deleteExpando||cache!=cache.window){
delete cache[id];
}else{
cache[id]=undefined;
}
}
jQuery.extend({
cache:{},
noData:{
"applet ":true,
"embed ":true,
"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
},
hasData:function(elem){
elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];
return!!elem&&!isEmptyDataObject(elem);
},
data:function(elem,name,data){
return internalData(elem,name,data);
},
removeData:function(elem,name){
return internalRemoveData(elem,name);
},
_data:function(elem,name,data){
return internalData(elem,name,data,true);
},
_removeData:function(elem,name){
return internalRemoveData(elem,name,true);
}
});
jQuery.fn.extend({
data:function(key,value){
var i,name,data,
elem=this[0],
attrs=elem&&elem.attributes;
if(key===undefined){
if(this.length){
data=jQuery.data(elem);
if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){
i=attrs.length;
while(i--){
if(attrs[i]){
name=attrs[i].name;
if(name.indexOf("data-")===0){
name=jQuery.camelCase(name.slice(5));
dataAttr(elem,name,data[name]);
}
}
}
jQuery._data(elem,"parsedAttrs",true);
}
}
return data;
}
if(typeof key==="object"){
return this.each(function(){
jQuery.data(this,key);
});
}
return arguments.length>1?
this.each(function(){
jQuery.data(this,key,value);
}):
elem?dataAttr(elem,key,jQuery.data(elem,key)):undefined;
},
removeData:function(key){
return this.each(function(){
jQuery.removeData(this,key);
});
}
});
jQuery.extend({
queue:function(elem,type,data){
var queue;
if(elem){
type=(type||"fx")+"queue";
queue=jQuery._data(elem,type);
if(data){
if(!queue||jQuery.isArray(data)){
queue=jQuery._data(elem,type,jQuery.makeArray(data));
}else{
queue.push(data);
}
}
return queue||[];
}
},
dequeue:function(elem,type){
type=type||"fx";
var queue=jQuery.queue(elem,type),
startLength=queue.length,
fn=queue.shift(),
hooks=jQuery._queueHooks(elem,type),
next=function(){
jQuery.dequeue(elem,type);
};
if(fn==="inprogress"){
fn=queue.shift();
startLength--;
}
if(fn){
if(type==="fx"){
queue.unshift("inprogress");
}
delete hooks.stop;
fn.call(elem,next,hooks);
}
if(!startLength&&hooks){
hooks.empty.fire();
}
},
_queueHooks:function(elem,type){
var key=type+"queueHooks";
return jQuery._data(elem,key)||jQuery._data(elem,key,{
empty:jQuery.Callbacks("once memory").add(function(){
jQuery._removeData(elem,type+"queue");
jQuery._removeData(elem,key);
})
});
}
});
jQuery.fn.extend({
queue:function(type,data){
var setter=2;
if(typeof type!=="string"){
data=type;
type="fx";
setter--;
}
if(arguments.length<setter){
return jQuery.queue(this[0],type);
}
return data===undefined?
this:
this.each(function(){
var queue=jQuery.queue(this,type,data);
jQuery._queueHooks(this,type);
if(type==="fx"&&queue[0]!=="inprogress"){
jQuery.dequeue(this,type);
}
});
},
dequeue:function(type){
return this.each(function(){
jQuery.dequeue(this,type);
});
},
clearQueue:function(type){
return this.queue(type||"fx",[]);
},
promise:function(type,obj){
var tmp,
count=1,
defer=jQuery.Deferred(),
elements=this,
i=this.length,
resolve=function(){
if(!(--count)){
defer.resolveWith(elements,[elements]);
}
};
if(typeof type!=="string"){
obj=type;
type=undefined;
}
type=type||"fx";
while(i--){
tmp=jQuery._data(elements[i],type+"queueHooks");
if(tmp&&tmp.empty){
count++;
tmp.empty.add(resolve);
}
}
resolve();
return defer.promise(obj);
}
});
(function(){
var shrinkWrapBlocksVal;
support.shrinkWrapBlocks=function(){
if(shrinkWrapBlocksVal!=null){
return shrinkWrapBlocksVal;
}
shrinkWrapBlocksVal=false;
var div,body,container;
body=document.getElementsByTagName("body")[0];
if(!body||!body.style){
return;
}
div=document.createElement("div");
container=document.createElement("div");
container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
body.appendChild(container).appendChild(div);
if(typeof div.style.zoom!=="undefined"){
div.style.cssText=
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+
"box-sizing:content-box;display:block;margin:0;border:0;"+
"padding:1px;width:1px;zoom:1";
div.appendChild(document.createElement("div")).style.width="5px";
shrinkWrapBlocksVal=div.offsetWidth!==3;
}
body.removeChild(container);
return shrinkWrapBlocksVal;
};
})();
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");
var cssExpand=["Top","Right","Bottom","Left"];
var isHidden=function(elem,el){
elem=el||elem;
return jQuery.css(elem,"display")==="none"||
!jQuery.contains(elem.ownerDocument,elem);
};
function adjustCSS(elem,prop,valueParts,tween){
var adjusted,
scale=1,
maxIterations=20,
currentValue=tween?
function(){return tween.cur();}:
function(){return jQuery.css(elem,prop,"");},
initial=currentValue(),
unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),
initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&
rcssNum.exec(jQuery.css(elem,prop));
if(initialInUnit&&initialInUnit[3]!==unit){
unit=unit||initialInUnit[3];
valueParts=valueParts||[];
initialInUnit=+initial||1;
do{
scale=scale||".5";
initialInUnit=initialInUnit/scale;
jQuery.style(elem,prop,initialInUnit+unit);
}while(
scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations
);
}
if(valueParts){
initialInUnit=+initialInUnit||+initial||0;
adjusted=valueParts[1]?
initialInUnit+(valueParts[1]+1)*valueParts[2]:
+valueParts[2];
if(tween){
tween.unit=unit;
tween.start=initialInUnit;
tween.end=adjusted;
}
}
return adjusted;
}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){
var i=0,
length=elems.length,
bulk=key==null;
if(jQuery.type(key)==="object"){
chainable=true;
for(i in key){
access(elems,fn,i,key[i],true,emptyGet,raw);
}
}else if(value!==undefined){
chainable=true;
if(!jQuery.isFunction(value)){
raw=true;
}
if(bulk){
if(raw){
fn.call(elems,value);
fn=null;
}else{
bulk=fn;
fn=function(elem,key,value){
return bulk.call(jQuery(elem),value);
};
}
}
if(fn){
for(;i<length;i++){
fn(
elems[i],
key,
raw?value:value.call(elems[i],i,fn(elems[i],key))
);
}
}
}
return chainable?
elems:
bulk?
fn.call(elems):
length?fn(elems[0],key):emptyGet;
};
var rcheckableType=(/^(?:checkbox|radio)$/i);
var rtagName=(/<([\w:-]+)/);
var rscriptType=(/^$|\/(?:java|ecma)script/i);
var rleadingWhitespace=(/^\s+/);
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|"+
"details|dialog|figcaption|figure|footer|header|hgroup|main|"+
"mark|meter|nav|output|picture|progress|section|summary|template|time|video";
function createSafeFragment(document){
var list=nodeNames.split("|"),
safeFrag=document.createDocumentFragment();
if(safeFrag.createElement){
while(list.length){
safeFrag.createElement(
list.pop()
);
}
}
return safeFrag;
}
(function(){
var div=document.createElement("div"),
fragment=document.createDocumentFragment(),
input=document.createElement("input");
div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
support.leadingWhitespace=div.firstChild.nodeType===3;
support.tbody=!div.getElementsByTagName("tbody").length;
support.htmlSerialize=!!div.getElementsByTagName("link").length;
support.html5Clone=
document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
input.type="checkbox";
input.checked=true;
fragment.appendChild(input);
support.appendChecked=input.checked;
div.innerHTML="<textarea>x</textarea>";
support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;
fragment.appendChild(div);
input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("checked","checked");
input.setAttribute("name","t");
div.appendChild(input);
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
support.noCloneEvent=!!div.addEventListener;
div[jQuery.expando]=1;
support.attributes=!div.getAttribute(jQuery.expando);
})();
var wrapMap={
option:[1,"<select multiple='multiple'>","</select>"],
legend:[1,"<fieldset>","</fieldset>"],
area:[1,"<map>","</map>"],
param:[1,"<object>","</object>"],
thead:[1,"<table>","</table>"],
tr:[2,"<table><tbody>","</tbody></table>"],
col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
_default:support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]
};
wrapMap.optgroup=wrapMap.option;
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
function getAll(context,tag){
var elems,elem,
i=0,
found=typeof context.getElementsByTagName!=="undefined"?
context.getElementsByTagName(tag||"*"):
typeof context.querySelectorAll!=="undefined"?
context.querySelectorAll(tag||"*"):
undefined;
if(!found){
for(found=[],elems=context.childNodes||context;
(elem=elems[i])!=null;
i++
){
if(!tag||jQuery.nodeName(elem,tag)){
found.push(elem);
}else{
jQuery.merge(found,getAll(elem,tag));
}
}
}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?
jQuery.merge([context],found):
found;
}
function setGlobalEval(elems,refElements){
var elem,
i=0;
for(;(elem=elems[i])!=null;i++){
jQuery._data(
elem,
"globalEval",
!refElements||jQuery._data(refElements[i],"globalEval")
);
}
}
var rhtml=/<|&#?\w+;/,
rtbody=/<tbody/i;
function fixDefaultChecked(elem){
if(rcheckableType.test(elem.type)){
elem.defaultChecked=elem.checked;
}
}
function buildFragment(elems,context,scripts,selection,ignored){
var j,elem,contains,
tmp,tag,tbody,wrap,
l=elems.length,
safe=createSafeFragment(context),
nodes=[],
i=0;
for(;i<l;i++){
elem=elems[i];
if(elem||elem===0){
if(jQuery.type(elem)==="object"){
jQuery.merge(nodes,elem.nodeType?[elem]:elem);
}else if(!rhtml.test(elem)){
nodes.push(context.createTextNode(elem));
}else{
tmp=tmp||safe.appendChild(context.createElement("div"));
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();
wrap=wrapMap[tag]||wrapMap._default;
tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];
j=wrap[0];
while(j--){
tmp=tmp.lastChild;
}
if(!support.leadingWhitespace&&rleadingWhitespace.test(elem)){
nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
}
if(!support.tbody){
elem=tag==="table"&&!rtbody.test(elem)?
tmp.firstChild:
wrap[1]==="<table>"&&!rtbody.test(elem)?
tmp:
0;
j=elem&&elem.childNodes.length;
while(j--){
if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&
!tbody.childNodes.length){
elem.removeChild(tbody);
}
}
}
jQuery.merge(nodes,tmp.childNodes);
tmp.textContent="";
while(tmp.firstChild){
tmp.removeChild(tmp.firstChild);
}
tmp=safe.lastChild;
}
}
}
if(tmp){
safe.removeChild(tmp);
}
if(!support.appendChecked){
jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);
}
i=0;
while((elem=nodes[i++])){
if(selection&&jQuery.inArray(elem,selection)>-1){
if(ignored){
ignored.push(elem);
}
continue;
}
contains=jQuery.contains(elem.ownerDocument,elem);
tmp=getAll(safe.appendChild(elem),"script");
if(contains){
setGlobalEval(tmp);
}
if(scripts){
j=0;
while((elem=tmp[j++])){
if(rscriptType.test(elem.type||"")){
scripts.push(elem);
}
}
}
}
tmp=null;
return safe;
}
(function(){
var i,eventName,
div=document.createElement("div");
for(i in{submit:true,change:true,focusin:true}){
eventName="on"+i;
if(!(support[i]=eventName in window)){
div.setAttribute(eventName,"t");
support[i]=div.attributes[eventName].expando===false;
}
}
div=null;
})();
var rformElems=/^(?:input|select|textarea)$/i,
rkeyEvent=/^key/,
rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,
rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,
rtypenamespace=/^([^.]*)(?:\.(.+)|)/;
function returnTrue(){
return true;
}
function returnFalse(){
return false;
}
function safeActiveElement(){
try{
return document.activeElement;
}catch(err){}
}
function on(elem,types,selector,data,fn,one){
var origFn,type;
if(typeof types==="object"){
if(typeof selector!=="string"){
data=data||selector;
selector=undefined;
}
for(type in types){
on(elem,type,selector,data,types[type],one);
}
return elem;
}
if(data==null&&fn==null){
fn=selector;
data=selector=undefined;
}else if(fn==null){
if(typeof selector==="string"){
fn=data;
data=undefined;
}else{
fn=data;
data=selector;
selector=undefined;
}
}
if(fn===false){
fn=returnFalse;
}else if(!fn){
return elem;
}
if(one===1){
origFn=fn;
fn=function(event){
jQuery().off(event);
return origFn.apply(this,arguments);
};
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);
}
return elem.each(function(){
jQuery.event.add(this,types,fn,data,selector);
});
}
jQuery.event={
global:{},
add:function(elem,types,handler,data,selector){
var tmp,events,t,handleObjIn,
special,eventHandle,handleObj,
handlers,type,namespaces,origType,
elemData=jQuery._data(elem);
if(!elemData){
return;
}
if(handler.handler){
handleObjIn=handler;
handler=handleObjIn.handler;
selector=handleObjIn.selector;
}
if(!handler.guid){
handler.guid=jQuery.guid++;
}
if(!(events=elemData.events)){
events=elemData.events={};
}
if(!(eventHandle=elemData.handle)){
eventHandle=elemData.handle=function(e){
return typeof jQuery!=="undefined"&&
(!e||jQuery.event.triggered!==e.type)?
jQuery.event.dispatch.apply(eventHandle.elem,arguments):
undefined;
};
eventHandle.elem=elem;
}
types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
continue;
}
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=jQuery.event.special[type]||{};
handleObj=jQuery.extend({
type:type,
origType:origType,
data:data,
handler:handler,
guid:handler.guid,
selector:selector,
needsContext:selector&&jQuery.expr.match.needsContext.test(selector),
namespace:namespaces.join(".")
},handleObjIn);
if(!(handlers=events[type])){
handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||
special.setup.call(elem,data,namespaces,eventHandle)===false){
if(elem.addEventListener){
elem.addEventListener(type,eventHandle,false);
}else if(elem.attachEvent){
elem.attachEvent("on"+type,eventHandle);
}
}
}
if(special.add){
special.add.call(elem,handleObj);
if(!handleObj.handler.guid){
handleObj.handler.guid=handler.guid;
}
}
if(selector){
handlers.splice(handlers.delegateCount++,0,handleObj);
}else{
handlers.push(handleObj);
}
jQuery.event.global[type]=true;
}
elem=null;
},
remove:function(elem,types,handler,selector,mappedTypes){
var j,handleObj,tmp,
origCount,t,events,
special,handlers,type,
namespaces,origType,
elemData=jQuery.hasData(elem)&&jQuery._data(elem);
if(!elemData||!(events=elemData.events)){
return;
}
types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
for(type in events){
jQuery.event.remove(elem,type+types[t],handler,selector,true);
}
continue;
}
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
handlers=events[type]||[];
tmp=tmp[2]&&
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");
origCount=j=handlers.length;
while(j--){
handleObj=handlers[j];
if((mappedTypes||origType===handleObj.origType)&&
(!handler||handler.guid===handleObj.guid)&&
(!tmp||tmp.test(handleObj.namespace))&&
(!selector||selector===handleObj.selector||
selector==="**"&&handleObj.selector)){
handlers.splice(j,1);
if(handleObj.selector){
handlers.delegateCount--;
}
if(special.remove){
special.remove.call(elem,handleObj);
}
}
}
if(origCount&&!handlers.length){
if(!special.teardown||
special.teardown.call(elem,namespaces,elemData.handle)===false){
jQuery.removeEvent(elem,type,elemData.handle);
}
delete events[type];
}
}
if(jQuery.isEmptyObject(events)){
delete elemData.handle;
jQuery._removeData(elem,"events");
}
},
trigger:function(event,data,elem,onlyHandlers){
var handle,ontype,cur,
bubbleType,special,tmp,i,
eventPath=[elem||document],
type=hasOwn.call(event,"type")?event.type:event,
namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
cur=tmp=elem=elem||document;
if(elem.nodeType===3||elem.nodeType===8){
return;
}
if(rfocusMorph.test(type+jQuery.event.triggered)){
return;
}
if(type.indexOf(".")>-1){
namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort();
}
ontype=type.indexOf(":")<0&&"on"+type;
event=event[jQuery.expando]?
event:
new jQuery.Event(type,typeof event==="object"&&event);
event.isTrigger=onlyHandlers?2:3;
event.namespace=namespaces.join(".");
event.rnamespace=event.namespace?
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):
null;
event.result=undefined;
if(!event.target){
event.target=elem;
}
data=data==null?
[event]:
jQuery.makeArray(data,[event]);
special=jQuery.event.special[type]||{};
if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){
return;
}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){
bubbleType=special.delegateType||type;
if(!rfocusMorph.test(bubbleType+type)){
cur=cur.parentNode;
}
for(;cur;cur=cur.parentNode){
eventPath.push(cur);
tmp=cur;
}
if(tmp===(elem.ownerDocument||document)){
eventPath.push(tmp.defaultView||tmp.parentWindow||window);
}
}
i=0;
while((cur=eventPath[i++])&&!event.isPropagationStopped()){
event.type=i>1?
bubbleType:
special.bindType||type;
handle=(jQuery._data(cur,"events")||{})[event.type]&&
jQuery._data(cur,"handle");
if(handle){
handle.apply(cur,data);
}
handle=ontype&&cur[ontype];
if(handle&&handle.apply&&acceptData(cur)){
event.result=handle.apply(cur,data);
if(event.result===false){
event.preventDefault();
}
}
}
event.type=type;
if(!onlyHandlers&&!event.isDefaultPrevented()){
if(
(!special._default||
special._default.apply(eventPath.pop(),data)===false
)&&acceptData(elem)
){
if(ontype&&elem[type]&&!jQuery.isWindow(elem)){
tmp=elem[ontype];
if(tmp){
elem[ontype]=null;
}
jQuery.event.triggered=type;
try{
elem[type]();
}catch(e){
}
jQuery.event.triggered=undefined;
if(tmp){
elem[ontype]=tmp;
}
}
}
}
return event.result;
},
dispatch:function(event){
event=jQuery.event.fix(event);
var i,j,ret,matched,handleObj,
handlerQueue=[],
args=slice.call(arguments),
handlers=(jQuery._data(this,"events")||{})[event.type]||[],
special=jQuery.event.special[event.type]||{};
args[0]=event;
event.delegateTarget=this;
if(special.preDispatch&&special.preDispatch.call(this,event)===false){
return;
}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);
i=0;
while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){
event.currentTarget=matched.elem;
j=0;
while((handleObj=matched.handlers[j++])&&
!event.isImmediatePropagationStopped()){
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){
event.handleObj=handleObj;
event.data=handleObj.data;
ret=((jQuery.event.special[handleObj.origType]||{}).handle||
handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){
if((event.result=ret)===false){
event.preventDefault();
event.stopPropagation();
}
}
}
}
}
if(special.postDispatch){
special.postDispatch.call(this,event);
}
return event.result;
},
handlers:function(event,handlers){
var i,matches,sel,handleObj,
handlerQueue=[],
delegateCount=handlers.delegateCount,
cur=event.target;
if(delegateCount&&cur.nodeType&&
(event.type!=="click"||isNaN(event.button)||event.button<1)){
for(;cur!=this;cur=cur.parentNode||this){
if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){
matches=[];
for(i=0;i<delegateCount;i++){
handleObj=handlers[i];
sel=handleObj.selector+" ";
if(matches[sel]===undefined){
matches[sel]=handleObj.needsContext?
jQuery(sel,this).index(cur)>-1:
jQuery.find(sel,this,null,[cur]).length;
}
if(matches[sel]){
matches.push(handleObj);
}
}
if(matches.length){
handlerQueue.push({elem:cur,handlers:matches});
}
}
}
}
if(delegateCount<handlers.length){
handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});
}
return handlerQueue;
},
fix:function(event){
if(event[jQuery.expando]){
return event;
}
var i,prop,copy,
type=event.type,
originalEvent=event,
fixHook=this.fixHooks[type];
if(!fixHook){
this.fixHooks[type]=fixHook=
rmouseEvent.test(type)?this.mouseHooks:
rkeyEvent.test(type)?this.keyHooks:
{};
}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;
event=new jQuery.Event(originalEvent);
i=copy.length;
while(i--){
prop=copy[i];
event[prop]=originalEvent[prop];
}
if(!event.target){
event.target=originalEvent.srcElement||document;
}
if(event.target.nodeType===3){
event.target=event.target.parentNode;
}
event.metaKey=!!event.metaKey;
return fixHook.filter?fixHook.filter(event,originalEvent):event;
},
props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+
"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
fixHooks:{},
keyHooks:{
props:"char charCode key keyCode".split(" "),
filter:function(event,original){
if(event.which==null){
event.which=original.charCode!=null?original.charCode:original.keyCode;
}
return event;
}
},
mouseHooks:{
props:("button buttons clientX clientY fromElement offsetX offsetY "+
"pageX pageY screenX screenY toElement").split(" "),
filter:function(event,original){
var body,eventDoc,doc,
button=original.button,
fromElement=original.fromElement;
if(event.pageX==null&&original.clientX!=null){
eventDoc=event.target.ownerDocument||document;
doc=eventDoc.documentElement;
body=eventDoc.body;
event.pageX=original.clientX+
(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-
(doc&&doc.clientLeft||body&&body.clientLeft||0);
event.pageY=original.clientY+
(doc&&doc.scrollTop||body&&body.scrollTop||0)-
(doc&&doc.clientTop||body&&body.clientTop||0);
}
if(!event.relatedTarget&&fromElement){
event.relatedTarget=fromElement===event.target?
original.toElement:
fromElement;
}
if(!event.which&&button!==undefined){
event.which=(button&1?1:(button&2?3:(button&4?2:0)));
}
return event;
}
},
special:{
load:{
noBubble:true
},
focus:{
trigger:function(){
if(this!==safeActiveElement()&&this.focus){
try{
this.focus();
return false;
}catch(e){
}
}
},
delegateType:"focusin"
},
blur:{
trigger:function(){
if(this===safeActiveElement()&&this.blur){
this.blur();
return false;
}
},
delegateType:"focusout"
},
click:{
trigger:function(){
if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){
this.click();
return false;
}
},
_default:function(event){
return jQuery.nodeName(event.target,"a");
}
},
beforeunload:{
postDispatch:function(event){
if(event.result!==undefined&&event.originalEvent){
event.originalEvent.returnValue=event.result;
}
}
}
},
simulate:function(type,elem,event){
var e=jQuery.extend(
new jQuery.Event(),
event,
{
type:type,
isSimulated:true
}
);
jQuery.event.trigger(e,null,elem);
if(e.isDefaultPrevented()){
event.preventDefault();
}
}
};
jQuery.removeEvent=document.removeEventListener?
function(elem,type,handle){
if(elem.removeEventListener){
elem.removeEventListener(type,handle);
}
}:
function(elem,type,handle){
var name="on"+type;
if(elem.detachEvent){
if(typeof elem[name]==="undefined"){
elem[name]=null;
}
elem.detachEvent(name,handle);
}
};
jQuery.Event=function(src,props){
if(!(this instanceof jQuery.Event)){
return new jQuery.Event(src,props);
}
if(src&&src.type){
this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||
src.defaultPrevented===undefined&&
src.returnValue===false?
returnTrue:
returnFalse;
}else{
this.type=src;
}
if(props){
jQuery.extend(this,props);
}
this.timeStamp=src&&src.timeStamp||jQuery.now();
this[jQuery.expando]=true;
};
jQuery.Event.prototype={
constructor:jQuery.Event,
isDefaultPrevented:returnFalse,
isPropagationStopped:returnFalse,
isImmediatePropagationStopped:returnFalse,
preventDefault:function(){
var e=this.originalEvent;
this.isDefaultPrevented=returnTrue;
if(!e){
return;
}
if(e.preventDefault){
e.preventDefault();
}else{
e.returnValue=false;
}
},
stopPropagation:function(){
var e=this.originalEvent;
this.isPropagationStopped=returnTrue;
if(!e||this.isSimulated){
return;
}
if(e.stopPropagation){
e.stopPropagation();
}
e.cancelBubble=true;
},
stopImmediatePropagation:function(){
var e=this.originalEvent;
this.isImmediatePropagationStopped=returnTrue;
if(e&&e.stopImmediatePropagation){
e.stopImmediatePropagation();
}
this.stopPropagation();
}
};
jQuery.each({
mouseenter:"mouseover",
mouseleave:"mouseout",
pointerenter:"pointerover",
pointerleave:"pointerout"
},function(orig,fix){
jQuery.event.special[orig]={
delegateType:fix,
bindType:fix,
handle:function(event){
var ret,
target=this,
related=event.relatedTarget,
handleObj=event.handleObj;
if(!related||(related!==target&&!jQuery.contains(target,related))){
event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix;
}
return ret;
}
};
});
if(!support.submit){
jQuery.event.special.submit={
setup:function(){
if(jQuery.nodeName(this,"form")){
return false;
}
jQuery.event.add(this,"click._submit keypress._submit",function(e){
var elem=e.target,
form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?
jQuery.prop(elem,"form"):
undefined;
if(form&&!jQuery._data(form,"submit")){
jQuery.event.add(form,"submit._submit",function(event){
event._submitBubble=true;
});
jQuery._data(form,"submit",true);
}
});
},
postDispatch:function(event){
if(event._submitBubble){
delete event._submitBubble;
if(this.parentNode&&!event.isTrigger){
jQuery.event.simulate("submit",this.parentNode,event);
}
}
},
teardown:function(){
if(jQuery.nodeName(this,"form")){
return false;
}
jQuery.event.remove(this,"._submit");
}
};
}
if(!support.change){
jQuery.event.special.change={
setup:function(){
if(rformElems.test(this.nodeName)){
if(this.type==="checkbox"||this.type==="radio"){
jQuery.event.add(this,"propertychange._change",function(event){
if(event.originalEvent.propertyName==="checked"){
this._justChanged=true;
}
});
jQuery.event.add(this,"click._change",function(event){
if(this._justChanged&&!event.isTrigger){
this._justChanged=false;
}
jQuery.event.simulate("change",this,event);
});
}
return false;
}
jQuery.event.add(this,"beforeactivate._change",function(e){
var elem=e.target;
if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"change")){
jQuery.event.add(elem,"change._change",function(event){
if(this.parentNode&&!event.isSimulated&&!event.isTrigger){
jQuery.event.simulate("change",this.parentNode,event);
}
});
jQuery._data(elem,"change",true);
}
});
},
handle:function(event){
var elem=event.target;
if(this!==elem||event.isSimulated||event.isTrigger||
(elem.type!=="radio"&&elem.type!=="checkbox")){
return event.handleObj.handler.apply(this,arguments);
}
},
teardown:function(){
jQuery.event.remove(this,"._change");
return!rformElems.test(this.nodeName);
}
};
}
if(!support.focusin){
jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){
var handler=function(event){
jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));
};
jQuery.event.special[fix]={
setup:function(){
var doc=this.ownerDocument||this,
attaches=jQuery._data(doc,fix);
if(!attaches){
doc.addEventListener(orig,handler,true);
}
jQuery._data(doc,fix,(attaches||0)+1);
},
teardown:function(){
var doc=this.ownerDocument||this,
attaches=jQuery._data(doc,fix)-1;
if(!attaches){
doc.removeEventListener(orig,handler,true);
jQuery._removeData(doc,fix);
}else{
jQuery._data(doc,fix,attaches);
}
}
};
});
}
jQuery.fn.extend({
on:function(types,selector,data,fn){
return on(this,types,selector,data,fn);
},
one:function(types,selector,data,fn){
return on(this,types,selector,data,fn,1);
},
off:function(types,selector,fn){
var handleObj,type;
if(types&&types.preventDefault&&types.handleObj){
handleObj=types.handleObj;
jQuery(types.delegateTarget).off(
handleObj.namespace?
handleObj.origType+"."+handleObj.namespace:
handleObj.origType,
handleObj.selector,
handleObj.handler
);
return this;
}
if(typeof types==="object"){
for(type in types){
this.off(type,selector,types[type]);
}
return this;
}
if(selector===false||typeof selector==="function"){
fn=selector;
selector=undefined;
}
if(fn===false){
fn=returnFalse;
}
return this.each(function(){
jQuery.event.remove(this,types,fn,selector);
});
},
trigger:function(type,data){
return this.each(function(){
jQuery.event.trigger(type,data,this);
});
},
triggerHandler:function(type,data){
var elem=this[0];
if(elem){
return jQuery.event.trigger(type,data,elem,true);
}
}
});
var rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,
rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
rnoInnerhtml=/<script|<style|<link/i,
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,
rscriptTypeMasked=/^true\/(.*)/,
rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
safeFragment=createSafeFragment(document),
fragmentDiv=safeFragment.appendChild(document.createElement("div"));
function manipulationTarget(elem,content){
return jQuery.nodeName(elem,"table")&&
jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?
elem.getElementsByTagName("tbody")[0]||
elem.appendChild(elem.ownerDocument.createElement("tbody")):
elem;
}
function disableScript(elem){
elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;
return elem;
}
function restoreScript(elem){
var match=rscriptTypeMasked.exec(elem.type);
if(match){
elem.type=match[1];
}else{
elem.removeAttribute("type");
}
return elem;
}
function cloneCopyEvent(src,dest){
if(dest.nodeType!==1||!jQuery.hasData(src)){
return;
}
var type,i,l,
oldData=jQuery._data(src),
curData=jQuery._data(dest,oldData),
events=oldData.events;
if(events){
delete curData.handle;
curData.events={};
for(type in events){
for(i=0,l=events[type].length;i<l;i++){
jQuery.event.add(dest,type,events[type][i]);
}
}
}
if(curData.data){
curData.data=jQuery.extend({},curData.data);
}
}
function fixCloneNodeIssues(src,dest){
var nodeName,e,data;
if(dest.nodeType!==1){
return;
}
nodeName=dest.nodeName.toLowerCase();
if(!support.noCloneEvent&&dest[jQuery.expando]){
data=jQuery._data(dest);
for(e in data.events){
jQuery.removeEvent(dest,e,data.handle);
}
dest.removeAttribute(jQuery.expando);
}
if(nodeName==="script"&&dest.text!==src.text){
disableScript(dest).text=src.text;
restoreScript(dest);
}else if(nodeName==="object"){
if(dest.parentNode){
dest.outerHTML=src.outerHTML;
}
if(support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){
dest.innerHTML=src.innerHTML;
}
}else if(nodeName==="input"&&rcheckableType.test(src.type)){
dest.defaultChecked=dest.checked=src.checked;
if(dest.value!==src.value){
dest.value=src.value;
}
}else if(nodeName==="option"){
dest.defaultSelected=dest.selected=src.defaultSelected;
}else if(nodeName==="input"||nodeName==="textarea"){
dest.defaultValue=src.defaultValue;
}
}
function domManip(collection,args,callback,ignored){
args=concat.apply([],args);
var first,node,hasScripts,
scripts,doc,fragment,
i=0,
l=collection.length,
iNoClone=l-1,
value=args[0],
isFunction=jQuery.isFunction(value);
if(isFunction||
(l>1&&typeof value==="string"&&
!support.checkClone&&rchecked.test(value))){
return collection.each(function(index){
var self=collection.eq(index);
if(isFunction){
args[0]=value.call(this,index,self.html());
}
domManip(self,args,callback,ignored);
});
}
if(l){
fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);
first=fragment.firstChild;
if(fragment.childNodes.length===1){
fragment=first;
}
if(first||ignored){
scripts=jQuery.map(getAll(fragment,"script"),disableScript);
hasScripts=scripts.length;
for(;i<l;i++){
node=fragment;
if(i!==iNoClone){
node=jQuery.clone(node,true,true);
if(hasScripts){
jQuery.merge(scripts,getAll(node,"script"));
}
}
callback.call(collection[i],node,i);
}
if(hasScripts){
doc=scripts[scripts.length-1].ownerDocument;
jQuery.map(scripts,restoreScript);
for(i=0;i<hasScripts;i++){
node=scripts[i];
if(rscriptType.test(node.type||"")&&
!jQuery._data(node,"globalEval")&&
jQuery.contains(doc,node)){
if(node.src){
if(jQuery._evalUrl){
jQuery._evalUrl(node.src);
}
}else{
jQuery.globalEval(
(node.text||node.textContent||node.innerHTML||"")
.replace(rcleanScript,"")
);
}
}
}
}
fragment=first=null;
}
}
return collection;
}
function remove(elem,selector,keepData){
var node,
elems=selector?jQuery.filter(selector,elem):elem,
i=0;
for(;(node=elems[i])!=null;i++){
if(!keepData&&node.nodeType===1){
jQuery.cleanData(getAll(node));
}
if(node.parentNode){
if(keepData&&jQuery.contains(node.ownerDocument,node)){
setGlobalEval(getAll(node,"script"));
}
node.parentNode.removeChild(node);
}
}
return elem;
}
jQuery.extend({
htmlPrefilter:function(html){
return html.replace(rxhtmlTag,"<$1></$2>");
},
clone:function(elem,dataAndEvents,deepDataAndEvents){
var destElements,node,clone,i,srcElements,
inPage=jQuery.contains(elem.ownerDocument,elem);
if(support.html5Clone||jQuery.isXMLDoc(elem)||
!rnoshimcache.test("<"+elem.nodeName+">")){
clone=elem.cloneNode(true);
}else{
fragmentDiv.innerHTML=elem.outerHTML;
fragmentDiv.removeChild(clone=fragmentDiv.firstChild);
}
if((!support.noCloneEvent||!support.noCloneChecked)&&
(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){
destElements=getAll(clone);
srcElements=getAll(elem);
for(i=0;(node=srcElements[i])!=null;++i){
if(destElements[i]){
fixCloneNodeIssues(node,destElements[i]);
}
}
}
if(dataAndEvents){
if(deepDataAndEvents){
srcElements=srcElements||getAll(elem);
destElements=destElements||getAll(clone);
for(i=0;(node=srcElements[i])!=null;i++){
cloneCopyEvent(node,destElements[i]);
}
}else{
cloneCopyEvent(elem,clone);
}
}
destElements=getAll(clone,"script");
if(destElements.length>0){
setGlobalEval(destElements,!inPage&&getAll(elem,"script"));
}
destElements=srcElements=node=null;
return clone;
},
cleanData:function(elems,forceAcceptData){
var elem,type,id,data,
i=0,
internalKey=jQuery.expando,
cache=jQuery.cache,
attributes=support.attributes,
special=jQuery.event.special;
for(;(elem=elems[i])!=null;i++){
if(forceAcceptData||acceptData(elem)){
id=elem[internalKey];
data=id&&cache[id];
if(data){
if(data.events){
for(type in data.events){
if(special[type]){
jQuery.event.remove(elem,type);
}else{
jQuery.removeEvent(elem,type,data.handle);
}
}
}
if(cache[id]){
delete cache[id];
if(!attributes&&typeof elem.removeAttribute!=="undefined"){
elem.removeAttribute(internalKey);
}else{
elem[internalKey]=undefined;
}
deletedIds.push(id);
}
}
}
}
}
});
jQuery.fn.extend({
domManip:domManip,
detach:function(selector){
return remove(this,selector,true);
},
remove:function(selector){
return remove(this,selector);
},
text:function(value){
return access(this,function(value){
return value===undefined?
jQuery.text(this):
this.empty().append(
(this[0]&&this[0].ownerDocument||document).createTextNode(value)
);
},null,value,arguments.length);
},
append:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.appendChild(elem);
}
});
},
prepend:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.insertBefore(elem,target.firstChild);
}
});
},
before:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this);
}
});
},
after:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this.nextSibling);
}
});
},
empty:function(){
var elem,
i=0;
for(;(elem=this[i])!=null;i++){
if(elem.nodeType===1){
jQuery.cleanData(getAll(elem,false));
}
while(elem.firstChild){
elem.removeChild(elem.firstChild);
}
if(elem.options&&jQuery.nodeName(elem,"select")){
elem.options.length=0;
}
}
return this;
},
clone:function(dataAndEvents,deepDataAndEvents){
dataAndEvents=dataAndEvents==null?false:dataAndEvents;
deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;
return this.map(function(){
return jQuery.clone(this,dataAndEvents,deepDataAndEvents);
});
},
html:function(value){
return access(this,function(value){
var elem=this[0]||{},
i=0,
l=this.length;
if(value===undefined){
return elem.nodeType===1?
elem.innerHTML.replace(rinlinejQuery,""):
undefined;
}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&
(support.htmlSerialize||!rnoshimcache.test(value))&&
(support.leadingWhitespace||!rleadingWhitespace.test(value))&&
!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){
value=jQuery.htmlPrefilter(value);
try{
for(;i<l;i++){
elem=this[i]||{};
if(elem.nodeType===1){
jQuery.cleanData(getAll(elem,false));
elem.innerHTML=value;
}
}
elem=0;
}catch(e){}
}
if(elem){
this.empty().append(value);
}
},null,value,arguments.length);
},
replaceWith:function(){
var ignored=[];
return domManip(this,arguments,function(elem){
var parent=this.parentNode;
if(jQuery.inArray(this,ignored)<0){
jQuery.cleanData(getAll(this));
if(parent){
parent.replaceChild(elem,this);
}
}
},ignored);
}
});
jQuery.each({
appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"
},function(name,original){
jQuery.fn[name]=function(selector){
var elems,
i=0,
ret=[],
insert=jQuery(selector),
last=insert.length-1;
for(;i<=last;i++){
elems=i===last?this:this.clone(true);
jQuery(insert[i])[original](elems);
push.apply(ret,elems.get());
}
return this.pushStack(ret);
};
});
var iframe,
elemdisplay={
HTML:"block",
BODY:"block"
};
function actualDisplay(name,doc){
var elem=jQuery(doc.createElement(name)).appendTo(doc.body),
display=jQuery.css(elem[0],"display");
elem.detach();
return display;
}
function defaultDisplay(nodeName){
var doc=document,
display=elemdisplay[nodeName];
if(!display){
display=actualDisplay(nodeName,doc);
if(display==="none"||!display){
iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>"))
.appendTo(doc.documentElement);
doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;
doc.write();
doc.close();
display=actualDisplay(nodeName,doc);
iframe.detach();
}
elemdisplay[nodeName]=display;
}
return display;
}
var rmargin=(/^margin/);
var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");
var swap=function(elem,options,callback,args){
var ret,name,
old={};
for(name in options){
old[name]=elem.style[name];
elem.style[name]=options[name];
}
ret=callback.apply(elem,args||[]);
for(name in options){
elem.style[name]=old[name];
}
return ret;
};
var documentElement=document.documentElement;
(function(){
var pixelPositionVal,pixelMarginRightVal,boxSizingReliableVal,
reliableHiddenOffsetsVal,reliableMarginRightVal,reliableMarginLeftVal,
container=document.createElement("div"),
div=document.createElement("div");
if(!div.style){
return;
}
div.style.cssText="float:left;opacity:.5";
support.opacity=div.style.opacity==="0.5";
support.cssFloat=!!div.style.cssFloat;
div.style.backgroundClip="content-box";
div.cloneNode(true).style.backgroundClip="";
support.clearCloneStyle=div.style.backgroundClip==="content-box";
container=document.createElement("div");
container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+
"padding:0;margin-top:1px;position:absolute";
div.innerHTML="";
container.appendChild(div);
support.boxSizing=div.style.boxSizing===""||div.style.MozBoxSizing===""||
div.style.WebkitBoxSizing==="";
jQuery.extend(support,{
reliableHiddenOffsets:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return reliableHiddenOffsetsVal;
},
boxSizingReliable:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return boxSizingReliableVal;
},
pixelMarginRight:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return pixelMarginRightVal;
},
pixelPosition:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return pixelPositionVal;
},
reliableMarginRight:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return reliableMarginRightVal;
},
reliableMarginLeft:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return reliableMarginLeftVal;
}
});
function computeStyleTests(){
var contents,divStyle,
documentElement=document.documentElement;
documentElement.appendChild(container);
div.style.cssText=
"-webkit-box-sizing:border-box;box-sizing:border-box;"+
"position:relative;display:block;"+
"margin:auto;border:1px;padding:1px;"+
"top:1%;width:50%";
pixelPositionVal=boxSizingReliableVal=reliableMarginLeftVal=false;
pixelMarginRightVal=reliableMarginRightVal=true;
if(window.getComputedStyle){
divStyle=window.getComputedStyle(div);
pixelPositionVal=(divStyle||{}).top!=="1%";
reliableMarginLeftVal=(divStyle||{}).marginLeft==="2px";
boxSizingReliableVal=(divStyle||{width:"4px"}).width==="4px";
div.style.marginRight="50%";
pixelMarginRightVal=(divStyle||{marginRight:"4px"}).marginRight==="4px";
contents=div.appendChild(document.createElement("div"));
contents.style.cssText=div.style.cssText=
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+
"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
contents.style.marginRight=contents.style.width="0";
div.style.width="1px";
reliableMarginRightVal=
!parseFloat((window.getComputedStyle(contents)||{}).marginRight);
div.removeChild(contents);
}
div.style.display="none";
reliableHiddenOffsetsVal=div.getClientRects().length===0;
if(reliableHiddenOffsetsVal){
div.style.display="";
div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
contents=div.getElementsByTagName("td");
contents[0].style.cssText="margin:0;border:0;padding:0;display:none";
reliableHiddenOffsetsVal=contents[0].offsetHeight===0;
if(reliableHiddenOffsetsVal){
contents[0].style.display="";
contents[1].style.display="none";
reliableHiddenOffsetsVal=contents[0].offsetHeight===0;
}
}
documentElement.removeChild(container);
}
})();
var getStyles,curCSS,
rposition=/^(top|right|bottom|left)$/;
if(window.getComputedStyle){
getStyles=function(elem){
var view=elem.ownerDocument.defaultView;
if(!view||!view.opener){
view=window;
}
return view.getComputedStyle(elem);
};
curCSS=function(elem,name,computed){
var width,minWidth,maxWidth,ret,
style=elem.style;
computed=computed||getStyles(elem);
ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;
if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){
ret=jQuery.style(elem,name);
}
if(computed){
if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){
width=style.width;
minWidth=style.minWidth;
maxWidth=style.maxWidth;
style.minWidth=style.maxWidth=style.width=ret;
ret=computed.width;
style.width=width;
style.minWidth=minWidth;
style.maxWidth=maxWidth;
}
}
return ret===undefined?
ret:
ret+"";
};
}else if(documentElement.currentStyle){
getStyles=function(elem){
return elem.currentStyle;
};
curCSS=function(elem,name,computed){
var left,rs,rsLeft,ret,
style=elem.style;
computed=computed||getStyles(elem);
ret=computed?computed[name]:undefined;
if(ret==null&&style&&style[name]){
ret=style[name];
}
if(rnumnonpx.test(ret)&&!rposition.test(name)){
left=style.left;
rs=elem.runtimeStyle;
rsLeft=rs&&rs.left;
if(rsLeft){
rs.left=elem.currentStyle.left;
}
style.left=name==="fontSize"?"1em":ret;
ret=style.pixelLeft+"px";
style.left=left;
if(rsLeft){
rs.left=rsLeft;
}
}
return ret===undefined?
ret:
ret+""||"auto";
};
}
function addGetHookIf(conditionFn,hookFn){
return{
get:function(){
if(conditionFn()){
delete this.get;
return;
}
return(this.get=hookFn).apply(this,arguments);
}
};
}
var
ralpha=/alpha\([^)]*\)/i,
ropacity=/opacity\s*=\s*([^)]*)/i,
rdisplayswap=/^(none|table(?!-c[ea]).+)/,
rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),
cssShow={position:"absolute",visibility:"hidden",display:"block"},
cssNormalTransform={
letterSpacing:"0",
fontWeight:"400"
},
cssPrefixes=["Webkit","O","Moz","ms"],
emptyStyle=document.createElement("div").style;
function vendorPropName(name){
if(name in emptyStyle){
return name;
}
var capName=name.charAt(0).toUpperCase()+name.slice(1),
i=cssPrefixes.length;
while(i--){
name=cssPrefixes[i]+capName;
if(name in emptyStyle){
return name;
}
}
}
function showHide(elements,show){
var display,elem,hidden,
values=[],
index=0,
length=elements.length;
for(;index<length;index++){
elem=elements[index];
if(!elem.style){
continue;
}
values[index]=jQuery._data(elem,"olddisplay");
display=elem.style.display;
if(show){
if(!values[index]&&display==="none"){
elem.style.display="";
}
if(elem.style.display===""&&isHidden(elem)){
values[index]=
jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));
}
}else{
hidden=isHidden(elem);
if(display&&display!=="none"||!hidden){
jQuery._data(
elem,
"olddisplay",
hidden?display:jQuery.css(elem,"display")
);
}
}
}
for(index=0;index<length;index++){
elem=elements[index];
if(!elem.style){
continue;
}
if(!show||elem.style.display==="none"||elem.style.display===""){
elem.style.display=show?values[index]||"":"none";
}
}
return elements;
}
function setPositiveNumber(elem,value,subtract){
var matches=rnumsplit.exec(value);
return matches?
Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):
value;
}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){
var i=extra===(isBorderBox?"border":"content")?
4:
name==="width"?1:0,
val=0;
for(;i<4;i+=2){
if(extra==="margin"){
val+=jQuery.css(elem,extra+cssExpand[i],true,styles);
}
if(isBorderBox){
if(extra==="content"){
val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
}
if(extra!=="margin"){
val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}else{
val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
if(extra!=="padding"){
val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}
}
return val;
}
function getWidthOrHeight(elem,name,extra){
var valueIsBorderBox=true,
val=name==="width"?elem.offsetWidth:elem.offsetHeight,
styles=getStyles(elem),
isBorderBox=support.boxSizing&&
jQuery.css(elem,"boxSizing",false,styles)==="border-box";
if(document.msFullscreenElement&&window.top!==window){
if(elem.getClientRects().length){
val=Math.round(elem.getBoundingClientRect()[name]*100);
}
}
if(val<=0||val==null){
val=curCSS(elem,name,styles);
if(val<0||val==null){
val=elem.style[name];
}
if(rnumnonpx.test(val)){
return val;
}
valueIsBorderBox=isBorderBox&&
(support.boxSizingReliable()||val===elem.style[name]);
val=parseFloat(val)||0;
}
return(val+
augmentWidthOrHeight(
elem,
name,
extra||(isBorderBox?"border":"content"),
valueIsBorderBox,
styles
)
)+"px";
}
jQuery.extend({
cssHooks:{
opacity:{
get:function(elem,computed){
if(computed){
var ret=curCSS(elem,"opacity");
return ret===""?"1":ret;
}
}
}
},
cssNumber:{
"animationIterationCount":true,
"columnCount":true,
"fillOpacity":true,
"flexGrow":true,
"flexShrink":true,
"fontWeight":true,
"lineHeight":true,
"opacity":true,
"order":true,
"orphans":true,
"widows":true,
"zIndex":true,
"zoom":true
},
cssProps:{
"float":support.cssFloat?"cssFloat":"styleFloat"
},
style:function(elem,name,value,extra){
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){
return;
}
var ret,type,hooks,
origName=jQuery.camelCase(name),
style=elem.style;
name=jQuery.cssProps[origName]||
(jQuery.cssProps[origName]=vendorPropName(origName)||origName);
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(value!==undefined){
type=typeof value;
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){
value=adjustCSS(elem,name,ret);
type="number";
}
if(value==null||value!==value){
return;
}
if(type==="number"){
value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");
}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){
style[name]="inherit";
}
if(!hooks||!("set"in hooks)||
(value=hooks.set(elem,value,extra))!==undefined){
try{
style[name]=value;
}catch(e){}
}
}else{
if(hooks&&"get"in hooks&&
(ret=hooks.get(elem,false,extra))!==undefined){
return ret;
}
return style[name];
}
},
css:function(elem,name,extra,styles){
var num,val,hooks,
origName=jQuery.camelCase(name);
name=jQuery.cssProps[origName]||
(jQuery.cssProps[origName]=vendorPropName(origName)||origName);
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(hooks&&"get"in hooks){
val=hooks.get(elem,true,extra);
}
if(val===undefined){
val=curCSS(elem,name,styles);
}
if(val==="normal"&&name in cssNormalTransform){
val=cssNormalTransform[name];
}
if(extra===""||extra){
num=parseFloat(val);
return extra===true||isFinite(num)?num||0:val;
}
return val;
}
});
jQuery.each(["height","width"],function(i,name){
jQuery.cssHooks[name]={
get:function(elem,computed,extra){
if(computed){
return rdisplayswap.test(jQuery.css(elem,"display"))&&
elem.offsetWidth===0?
swap(elem,cssShow,function(){
return getWidthOrHeight(elem,name,extra);
}):
getWidthOrHeight(elem,name,extra);
}
},
set:function(elem,value,extra){
var styles=extra&&getStyles(elem);
return setPositiveNumber(elem,value,extra?
augmentWidthOrHeight(
elem,
name,
extra,
support.boxSizing&&
jQuery.css(elem,"boxSizing",false,styles)==="border-box",
styles
):0
);
}
};
});
if(!support.opacity){
jQuery.cssHooks.opacity={
get:function(elem,computed){
return ropacity.test((computed&&elem.currentStyle?
elem.currentStyle.filter:
elem.style.filter)||"")?
(0.01*parseFloat(RegExp.$1))+"":
computed?"1":"";
},
set:function(elem,value){
var style=elem.style,
currentStyle=elem.currentStyle,
opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",
filter=currentStyle&&currentStyle.filter||style.filter||"";
style.zoom=1;
if((value>=1||value==="")&&
jQuery.trim(filter.replace(ralpha,""))===""&&
style.removeAttribute){
style.removeAttribute("filter");
if(value===""||currentStyle&&!currentStyle.filter){
return;
}
}
style.filter=ralpha.test(filter)?
filter.replace(ralpha,opacity):
filter+" "+opacity;
}
};
}
jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,
function(elem,computed){
if(computed){
return swap(elem,{"display":"inline-block"},
curCSS,[elem,"marginRight"]);
}
}
);
jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,
function(elem,computed){
if(computed){
return(
parseFloat(curCSS(elem,"marginLeft"))||
(jQuery.contains(elem.ownerDocument,elem)?
elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){
return elem.getBoundingClientRect().left;
}):
0
)
)+"px";
}
}
);
jQuery.each({
margin:"",
padding:"",
border:"Width"
},function(prefix,suffix){
jQuery.cssHooks[prefix+suffix]={
expand:function(value){
var i=0,
expanded={},
parts=typeof value==="string"?value.split(" "):[value];
for(;i<4;i++){
expanded[prefix+cssExpand[i]+suffix]=
parts[i]||parts[i-2]||parts[0];
}
return expanded;
}
};
if(!rmargin.test(prefix)){
jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;
}
});
jQuery.fn.extend({
css:function(name,value){
return access(this,function(elem,name,value){
var styles,len,
map={},
i=0;
if(jQuery.isArray(name)){
styles=getStyles(elem);
len=name.length;
for(;i<len;i++){
map[name[i]]=jQuery.css(elem,name[i],false,styles);
}
return map;
}
return value!==undefined?
jQuery.style(elem,name,value):
jQuery.css(elem,name);
},name,value,arguments.length>1);
},
show:function(){
return showHide(this,true);
},
hide:function(){
return showHide(this);
},
toggle:function(state){
if(typeof state==="boolean"){
return state?this.show():this.hide();
}
return this.each(function(){
if(isHidden(this)){
jQuery(this).show();
}else{
jQuery(this).hide();
}
});
}
});
function Tween(elem,options,prop,end,easing){
return new Tween.prototype.init(elem,options,prop,end,easing);
}
jQuery.Tween=Tween;
Tween.prototype={
constructor:Tween,
init:function(elem,options,prop,end,easing,unit){
this.elem=elem;
this.prop=prop;
this.easing=easing||jQuery.easing._default;
this.options=options;
this.start=this.now=this.cur();
this.end=end;
this.unit=unit||(jQuery.cssNumber[prop]?"":"px");
},
cur:function(){
var hooks=Tween.propHooks[this.prop];
return hooks&&hooks.get?
hooks.get(this):
Tween.propHooks._default.get(this);
},
run:function(percent){
var eased,
hooks=Tween.propHooks[this.prop];
if(this.options.duration){
this.pos=eased=jQuery.easing[this.easing](
percent,this.options.duration*percent,0,1,this.options.duration
);
}else{
this.pos=eased=percent;
}
this.now=(this.end-this.start)*eased+this.start;
if(this.options.step){
this.options.step.call(this.elem,this.now,this);
}
if(hooks&&hooks.set){
hooks.set(this);
}else{
Tween.propHooks._default.set(this);
}
return this;
}
};
Tween.prototype.init.prototype=Tween.prototype;
Tween.propHooks={
_default:{
get:function(tween){
var result;
if(tween.elem.nodeType!==1||
tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){
return tween.elem[tween.prop];
}
result=jQuery.css(tween.elem,tween.prop,"");
return!result||result==="auto"?0:result;
},
set:function(tween){
if(jQuery.fx.step[tween.prop]){
jQuery.fx.step[tween.prop](tween);
}else if(tween.elem.nodeType===1&&
(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||
jQuery.cssHooks[tween.prop])){
jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);
}else{
tween.elem[tween.prop]=tween.now;
}
}
}
};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={
set:function(tween){
if(tween.elem.nodeType&&tween.elem.parentNode){
tween.elem[tween.prop]=tween.now;
}
}
};
jQuery.easing={
linear:function(p){
return p;
},
swing:function(p){
return 0.5-Math.cos(p*Math.PI)/2;
},
_default:"swing"
};
jQuery.fx=Tween.prototype.init;
jQuery.fx.step={};
var
fxNow,timerId,
rfxtypes=/^(?:toggle|show|hide)$/,
rrun=/queueHooks$/;
function createFxNow(){
window.setTimeout(function(){
fxNow=undefined;
});
return(fxNow=jQuery.now());
}
function genFx(type,includeWidth){
var which,
attrs={height:type},
i=0;
includeWidth=includeWidth?1:0;
for(;i<4;i+=2-includeWidth){
which=cssExpand[i];
attrs["margin"+which]=attrs["padding"+which]=type;
}
if(includeWidth){
attrs.opacity=attrs.width=type;
}
return attrs;
}
function createTween(value,prop,animation){
var tween,
collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),
index=0,
length=collection.length;
for(;index<length;index++){
if((tween=collection[index].call(animation,prop,value))){
return tween;
}
}
}
function defaultPrefilter(elem,props,opts){
var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,
anim=this,
orig={},
style=elem.style,
hidden=elem.nodeType&&isHidden(elem),
dataShow=jQuery._data(elem,"fxshow");
if(!opts.queue){
hooks=jQuery._queueHooks(elem,"fx");
if(hooks.unqueued==null){
hooks.unqueued=0;
oldfire=hooks.empty.fire;
hooks.empty.fire=function(){
if(!hooks.unqueued){
oldfire();
}
};
}
hooks.unqueued++;
anim.always(function(){
anim.always(function(){
hooks.unqueued--;
if(!jQuery.queue(elem,"fx").length){
hooks.empty.fire();
}
});
});
}
if(elem.nodeType===1&&("height"in props||"width"in props)){
opts.overflow=[style.overflow,style.overflowX,style.overflowY];
display=jQuery.css(elem,"display");
checkDisplay=display==="none"?
jQuery._data(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;
if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){
if(!support.inlineBlockNeedsLayout||defaultDisplay(elem.nodeName)==="inline"){
style.display="inline-block";
}else{
style.zoom=1;
}
}
}
if(opts.overflow){
style.overflow="hidden";
if(!support.shrinkWrapBlocks()){
anim.always(function(){
style.overflow=opts.overflow[0];
style.overflowX=opts.overflow[1];
style.overflowY=opts.overflow[2];
});
}
}
for(prop in props){
value=props[prop];
if(rfxtypes.exec(value)){
delete props[prop];
toggle=toggle||value==="toggle";
if(value===(hidden?"hide":"show")){
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){
hidden=true;
}else{
continue;
}
}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);
}else{
display=undefined;
}
}
if(!jQuery.isEmptyObject(orig)){
if(dataShow){
if("hidden"in dataShow){
hidden=dataShow.hidden;
}
}else{
dataShow=jQuery._data(elem,"fxshow",{});
}
if(toggle){
dataShow.hidden=!hidden;
}
if(hidden){
jQuery(elem).show();
}else{
anim.done(function(){
jQuery(elem).hide();
});
}
anim.done(function(){
var prop;
jQuery._removeData(elem,"fxshow");
for(prop in orig){
jQuery.style(elem,prop,orig[prop]);
}
});
for(prop in orig){
tween=createTween(hidden?dataShow[prop]:0,prop,anim);
if(!(prop in dataShow)){
dataShow[prop]=tween.start;
if(hidden){
tween.end=tween.start;
tween.start=prop==="width"||prop==="height"?1:0;
}
}
}
}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){
style.display=display;
}
}
function propFilter(props,specialEasing){
var index,name,easing,value,hooks;
for(index in props){
name=jQuery.camelCase(index);
easing=specialEasing[name];
value=props[index];
if(jQuery.isArray(value)){
easing=value[1];
value=props[index]=value[0];
}
if(index!==name){
props[name]=value;
delete props[index];
}
hooks=jQuery.cssHooks[name];
if(hooks&&"expand"in hooks){
value=hooks.expand(value);
delete props[name];
for(index in value){
if(!(index in props)){
props[index]=value[index];
specialEasing[index]=easing;
}
}
}else{
specialEasing[name]=easing;
}
}
}
function Animation(elem,properties,options){
var result,
stopped,
index=0,
length=Animation.prefilters.length,
deferred=jQuery.Deferred().always(function(){
delete tick.elem;
}),
tick=function(){
if(stopped){
return false;
}
var currentTime=fxNow||createFxNow(),
remaining=Math.max(0,animation.startTime+animation.duration-currentTime),
temp=remaining/animation.duration||0,
percent=1-temp,
index=0,
length=animation.tweens.length;
for(;index<length;index++){
animation.tweens[index].run(percent);
}
deferred.notifyWith(elem,[animation,percent,remaining]);
if(percent<1&&length){
return remaining;
}else{
deferred.resolveWith(elem,[animation]);
return false;
}
},
animation=deferred.promise({
elem:elem,
props:jQuery.extend({},properties),
opts:jQuery.extend(true,{
specialEasing:{},
easing:jQuery.easing._default
},options),
originalProperties:properties,
originalOptions:options,
startTime:fxNow||createFxNow(),
duration:options.duration,
tweens:[],
createTween:function(prop,end){
var tween=jQuery.Tween(elem,animation.opts,prop,end,
animation.opts.specialEasing[prop]||animation.opts.easing);
animation.tweens.push(tween);
return tween;
},
stop:function(gotoEnd){
var index=0,
length=gotoEnd?animation.tweens.length:0;
if(stopped){
return this;
}
stopped=true;
for(;index<length;index++){
animation.tweens[index].run(1);
}
if(gotoEnd){
deferred.notifyWith(elem,[animation,1,0]);
deferred.resolveWith(elem,[animation,gotoEnd]);
}else{
deferred.rejectWith(elem,[animation,gotoEnd]);
}
return this;
}
}),
props=animation.props;
propFilter(props,animation.opts.specialEasing);
for(;index<length;index++){
result=Animation.prefilters[index].call(animation,elem,props,animation.opts);
if(result){
if(jQuery.isFunction(result.stop)){
jQuery._queueHooks(animation.elem,animation.opts.queue).stop=
jQuery.proxy(result.stop,result);
}
return result;
}
}
jQuery.map(props,createTween,animation);
if(jQuery.isFunction(animation.opts.start)){
animation.opts.start.call(elem,animation);
}
jQuery.fx.timer(
jQuery.extend(tick,{
elem:elem,
anim:animation,
queue:animation.opts.queue
})
);
return animation.progress(animation.opts.progress)
.done(animation.opts.done,animation.opts.complete)
.fail(animation.opts.fail)
.always(animation.opts.always);
}
jQuery.Animation=jQuery.extend(Animation,{
tweeners:{
"*":[function(prop,value){
var tween=this.createTween(prop,value);
adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);
return tween;
}]
},
tweener:function(props,callback){
if(jQuery.isFunction(props)){
callback=props;
props=["*"];
}else{
props=props.match(rnotwhite);
}
var prop,
index=0,
length=props.length;
for(;index<length;index++){
prop=props[index];
Animation.tweeners[prop]=Animation.tweeners[prop]||[];
Animation.tweeners[prop].unshift(callback);
}
},
prefilters:[defaultPrefilter],
prefilter:function(callback,prepend){
if(prepend){
Animation.prefilters.unshift(callback);
}else{
Animation.prefilters.push(callback);
}
}
});
jQuery.speed=function(speed,easing,fn){
var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{
complete:fn||!fn&&easing||
jQuery.isFunction(speed)&&speed,
duration:speed,
easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing
};
opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:
opt.duration in jQuery.fx.speeds?
jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;
if(opt.queue==null||opt.queue===true){
opt.queue="fx";
}
opt.old=opt.complete;
opt.complete=function(){
if(jQuery.isFunction(opt.old)){
opt.old.call(this);
}
if(opt.queue){
jQuery.dequeue(this,opt.queue);
}
};
return opt;
};
jQuery.fn.extend({
fadeTo:function(speed,to,easing,callback){
return this.filter(isHidden).css("opacity",0).show()
.end().animate({opacity:to},speed,easing,callback);
},
animate:function(prop,speed,easing,callback){
var empty=jQuery.isEmptyObject(prop),
optall=jQuery.speed(speed,easing,callback),
doAnimation=function(){
var anim=Animation(this,jQuery.extend({},prop),optall);
if(empty||jQuery._data(this,"finish")){
anim.stop(true);
}
};
doAnimation.finish=doAnimation;
return empty||optall.queue===false?
this.each(doAnimation):
this.queue(optall.queue,doAnimation);
},
stop:function(type,clearQueue,gotoEnd){
var stopQueue=function(hooks){
var stop=hooks.stop;
delete hooks.stop;
stop(gotoEnd);
};
if(typeof type!=="string"){
gotoEnd=clearQueue;
clearQueue=type;
type=undefined;
}
if(clearQueue&&type!==false){
this.queue(type||"fx",[]);
}
return this.each(function(){
var dequeue=true,
index=type!=null&&type+"queueHooks",
timers=jQuery.timers,
data=jQuery._data(this);
if(index){
if(data[index]&&data[index].stop){
stopQueue(data[index]);
}
}else{
for(index in data){
if(data[index]&&data[index].stop&&rrun.test(index)){
stopQueue(data[index]);
}
}
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&
(type==null||timers[index].queue===type)){
timers[index].anim.stop(gotoEnd);
dequeue=false;
timers.splice(index,1);
}
}
if(dequeue||!gotoEnd){
jQuery.dequeue(this,type);
}
});
},
finish:function(type){
if(type!==false){
type=type||"fx";
}
return this.each(function(){
var index,
data=jQuery._data(this),
queue=data[type+"queue"],
hooks=data[type+"queueHooks"],
timers=jQuery.timers,
length=queue?queue.length:0;
data.finish=true;
jQuery.queue(this,type,[]);
if(hooks&&hooks.stop){
hooks.stop.call(this,true);
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&timers[index].queue===type){
timers[index].anim.stop(true);
timers.splice(index,1);
}
}
for(index=0;index<length;index++){
if(queue[index]&&queue[index].finish){
queue[index].finish.call(this);
}
}
delete data.finish;
});
}
});
jQuery.each(["toggle","show","hide"],function(i,name){
var cssFn=jQuery.fn[name];
jQuery.fn[name]=function(speed,easing,callback){
return speed==null||typeof speed==="boolean"?
cssFn.apply(this,arguments):
this.animate(genFx(name,true),speed,easing,callback);
};
});
jQuery.each({
slideDown:genFx("show"),
slideUp:genFx("hide"),
slideToggle:genFx("toggle"),
fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}
},function(name,props){
jQuery.fn[name]=function(speed,easing,callback){
return this.animate(props,speed,easing,callback);
};
});
jQuery.timers=[];
jQuery.fx.tick=function(){
var timer,
timers=jQuery.timers,
i=0;
fxNow=jQuery.now();
for(;i<timers.length;i++){
timer=timers[i];
if(!timer()&&timers[i]===timer){
timers.splice(i--,1);
}
}
if(!timers.length){
jQuery.fx.stop();
}
fxNow=undefined;
};
jQuery.fx.timer=function(timer){
jQuery.timers.push(timer);
if(timer()){
jQuery.fx.start();
}else{
jQuery.timers.pop();
}
};
jQuery.fx.interval=13;
jQuery.fx.start=function(){
if(!timerId){
timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);
}
};
jQuery.fx.stop=function(){
window.clearInterval(timerId);
timerId=null;
};
jQuery.fx.speeds={
slow:600,
fast:200,
_default:400
};
jQuery.fn.delay=function(time,type){
time=jQuery.fx?jQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,hooks){
var timeout=window.setTimeout(next,time);
hooks.stop=function(){
window.clearTimeout(timeout);
};
});
};
(function(){
var a,
input=document.createElement("input"),
div=document.createElement("div"),
select=document.createElement("select"),
opt=select.appendChild(document.createElement("option"));
div=document.createElement("div");
div.setAttribute("className","t");
div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
a=div.getElementsByTagName("a")[0];
input.setAttribute("type","checkbox");
div.appendChild(input);
a=div.getElementsByTagName("a")[0];
a.style.cssText="top:1px";
support.getSetAttribute=div.className!=="t";
support.style=/top/.test(a.getAttribute("style"));
support.hrefNormalized=a.getAttribute("href")==="/a";
support.checkOn=!!input.value;
support.optSelected=opt.selected;
support.enctype=!!document.createElement("form").enctype;
select.disabled=true;
support.optDisabled=!opt.disabled;
input=document.createElement("input");
input.setAttribute("value","");
support.input=input.getAttribute("value")==="";
input.value="t";
input.setAttribute("type","radio");
support.radioValue=input.value==="t";
})();
var rreturn=/\r/g;
jQuery.fn.extend({
val:function(value){
var hooks,ret,isFunction,
elem=this[0];
if(!arguments.length){
if(elem){
hooks=jQuery.valHooks[elem.type]||
jQuery.valHooks[elem.nodeName.toLowerCase()];
if(
hooks&&
"get"in hooks&&
(ret=hooks.get(elem,"value"))!==undefined
){
return ret;
}
ret=elem.value;
return typeof ret==="string"?
ret.replace(rreturn,""):
ret==null?"":ret;
}
return;
}
isFunction=jQuery.isFunction(value);
return this.each(function(i){
var val;
if(this.nodeType!==1){
return;
}
if(isFunction){
val=value.call(this,i,jQuery(this).val());
}else{
val=value;
}
if(val==null){
val="";
}else if(typeof val==="number"){
val+="";
}else if(jQuery.isArray(val)){
val=jQuery.map(val,function(value){
return value==null?"":value+"";
});
}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){
this.value=val;
}
});
}
});
jQuery.extend({
valHooks:{
option:{
get:function(elem){
var val=jQuery.find.attr(elem,"value");
return val!=null?
val:
jQuery.trim(jQuery.text(elem));
}
},
select:{
get:function(elem){
var value,option,
options=elem.options,
index=elem.selectedIndex,
one=elem.type==="select-one"||index<0,
values=one?null:[],
max=one?index+1:options.length,
i=index<0?
max:
one?index:0;
for(;i<max;i++){
option=options[i];
if((option.selected||i===index)&&
(support.optDisabled?
!option.disabled:
option.getAttribute("disabled")===null)&&
(!option.parentNode.disabled||
!jQuery.nodeName(option.parentNode,"optgroup"))){
value=jQuery(option).val();
if(one){
return value;
}
values.push(value);
}
}
return values;
},
set:function(elem,value){
var optionSet,option,
options=elem.options,
values=jQuery.makeArray(value),
i=options.length;
while(i--){
option=options[i];
if(jQuery.inArray(jQuery.valHooks.option.get(option),values)>=0){
try{
option.selected=optionSet=true;
}catch(_){
option.scrollHeight;
}
}else{
option.selected=false;
}
}
if(!optionSet){
elem.selectedIndex=-1;
}
return options;
}
}
}
});
jQuery.each(["radio","checkbox"],function(){
jQuery.valHooks[this]={
set:function(elem,value){
if(jQuery.isArray(value)){
return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);
}
}
};
if(!support.checkOn){
jQuery.valHooks[this].get=function(elem){
return elem.getAttribute("value")===null?"on":elem.value;
};
}
});
var nodeHook,boolHook,
attrHandle=jQuery.expr.attrHandle,
ruseDefault=/^(?:checked|selected)$/i,
getSetAttribute=support.getSetAttribute,
getSetInput=support.input;
jQuery.fn.extend({
attr:function(name,value){
return access(this,jQuery.attr,name,value,arguments.length>1);
},
removeAttr:function(name){
return this.each(function(){
jQuery.removeAttr(this,name);
});
}
});
jQuery.extend({
attr:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(typeof elem.getAttribute==="undefined"){
return jQuery.prop(elem,name,value);
}
if(nType!==1||!jQuery.isXMLDoc(elem)){
name=name.toLowerCase();
hooks=jQuery.attrHooks[name]||
(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);
}
if(value!==undefined){
if(value===null){
jQuery.removeAttr(elem,name);
return;
}
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
elem.setAttribute(name,value+"");
return value;
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
ret=jQuery.find.attr(elem,name);
return ret==null?undefined:ret;
},
attrHooks:{
type:{
set:function(elem,value){
if(!support.radioValue&&value==="radio"&&
jQuery.nodeName(elem,"input")){
var val=elem.value;
elem.setAttribute("type",value);
if(val){
elem.value=val;
}
return value;
}
}
}
},
removeAttr:function(elem,value){
var name,propName,
i=0,
attrNames=value&&value.match(rnotwhite);
if(attrNames&&elem.nodeType===1){
while((name=attrNames[i++])){
propName=jQuery.propFix[name]||name;
if(jQuery.expr.match.bool.test(name)){
if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){
elem[propName]=false;
}else{
elem[jQuery.camelCase("default-"+name)]=
elem[propName]=false;
}
}else{
jQuery.attr(elem,name,"");
}
elem.removeAttribute(getSetAttribute?name:propName);
}
}
}
});
boolHook={
set:function(elem,value,name){
if(value===false){
jQuery.removeAttr(elem,name);
}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){
elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name);
}else{
elem[jQuery.camelCase("default-"+name)]=elem[name]=true;
}
return name;
}
};
jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){
var getter=attrHandle[name]||jQuery.find.attr;
if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){
attrHandle[name]=function(elem,name,isXML){
var ret,handle;
if(!isXML){
handle=attrHandle[name];
attrHandle[name]=ret;
ret=getter(elem,name,isXML)!=null?
name.toLowerCase():
null;
attrHandle[name]=handle;
}
return ret;
};
}else{
attrHandle[name]=function(elem,name,isXML){
if(!isXML){
return elem[jQuery.camelCase("default-"+name)]?
name.toLowerCase():
null;
}
};
}
});
if(!getSetInput||!getSetAttribute){
jQuery.attrHooks.value={
set:function(elem,value,name){
if(jQuery.nodeName(elem,"input")){
elem.defaultValue=value;
}else{
return nodeHook&&nodeHook.set(elem,value,name);
}
}
};
}
if(!getSetAttribute){
nodeHook={
set:function(elem,value,name){
var ret=elem.getAttributeNode(name);
if(!ret){
elem.setAttributeNode(
(ret=elem.ownerDocument.createAttribute(name))
);
}
ret.value=value+="";
if(name==="value"||value===elem.getAttribute(name)){
return value;
}
}
};
attrHandle.id=attrHandle.name=attrHandle.coords=
function(elem,name,isXML){
var ret;
if(!isXML){
return(ret=elem.getAttributeNode(name))&&ret.value!==""?
ret.value:
null;
}
};
jQuery.valHooks.button={
get:function(elem,name){
var ret=elem.getAttributeNode(name);
if(ret&&ret.specified){
return ret.value;
}
},
set:nodeHook.set
};
jQuery.attrHooks.contenteditable={
set:function(elem,value,name){
nodeHook.set(elem,value===""?false:value,name);
}
};
jQuery.each(["width","height"],function(i,name){
jQuery.attrHooks[name]={
set:function(elem,value){
if(value===""){
elem.setAttribute(name,"auto");
return value;
}
}
};
});
}
if(!support.style){
jQuery.attrHooks.style={
get:function(elem){
return elem.style.cssText||undefined;
},
set:function(elem,value){
return(elem.style.cssText=value+"");
}
};
}
var rfocusable=/^(?:input|select|textarea|button|object)$/i,
rclickable=/^(?:a|area)$/i;
jQuery.fn.extend({
prop:function(name,value){
return access(this,jQuery.prop,name,value,arguments.length>1);
},
removeProp:function(name){
name=jQuery.propFix[name]||name;
return this.each(function(){
try{
this[name]=undefined;
delete this[name];
}catch(e){}
});
}
});
jQuery.extend({
prop:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(nType!==1||!jQuery.isXMLDoc(elem)){
name=jQuery.propFix[name]||name;
hooks=jQuery.propHooks[name];
}
if(value!==undefined){
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
return(elem[name]=value);
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
return elem[name];
},
propHooks:{
tabIndex:{
get:function(elem){
var tabindex=jQuery.find.attr(elem,"tabindex");
return tabindex?
parseInt(tabindex,10):
rfocusable.test(elem.nodeName)||
rclickable.test(elem.nodeName)&&elem.href?
0:
-1;
}
}
},
propFix:{
"for":"htmlFor",
"class":"className"
}
});
if(!support.hrefNormalized){
jQuery.each(["href","src"],function(i,name){
jQuery.propHooks[name]={
get:function(elem){
return elem.getAttribute(name,4);
}
};
});
}
if(!support.optSelected){
jQuery.propHooks.selected={
get:function(elem){
var parent=elem.parentNode;
if(parent){
parent.selectedIndex;
if(parent.parentNode){
parent.parentNode.selectedIndex;
}
}
return null;
}
};
}
jQuery.each([
"tabIndex",
"readOnly",
"maxLength",
"cellSpacing",
"cellPadding",
"rowSpan",
"colSpan",
"useMap",
"frameBorder",
"contentEditable"
],function(){
jQuery.propFix[this.toLowerCase()]=this;
});
if(!support.enctype){
jQuery.propFix.enctype="encoding";
}
var rclass=/[\t\r\n\f]/g;
function getClass(elem){
return jQuery.attr(elem,"class")||"";
}
jQuery.fn.extend({
addClass:function(value){
var classes,elem,cur,curValue,clazz,j,finalValue,
i=0;
if(jQuery.isFunction(value)){
return this.each(function(j){
jQuery(this).addClass(value.call(this,j,getClass(this)));
});
}
if(typeof value==="string"&&value){
classes=value.match(rnotwhite)||[];
while((elem=this[i++])){
curValue=getClass(elem);
cur=elem.nodeType===1&&
(" "+curValue+" ").replace(rclass," ");
if(cur){
j=0;
while((clazz=classes[j++])){
if(cur.indexOf(" "+clazz+" ")<0){
cur+=clazz+" ";
}
}
finalValue=jQuery.trim(cur);
if(curValue!==finalValue){
jQuery.attr(elem,"class",finalValue);
}
}
}
}
return this;
},
removeClass:function(value){
var classes,elem,cur,curValue,clazz,j,finalValue,
i=0;
if(jQuery.isFunction(value)){
return this.each(function(j){
jQuery(this).removeClass(value.call(this,j,getClass(this)));
});
}
if(!arguments.length){
return this.attr("class","");
}
if(typeof value==="string"&&value){
classes=value.match(rnotwhite)||[];
while((elem=this[i++])){
curValue=getClass(elem);
cur=elem.nodeType===1&&
(" "+curValue+" ").replace(rclass," ");
if(cur){
j=0;
while((clazz=classes[j++])){
while(cur.indexOf(" "+clazz+" ")>-1){
cur=cur.replace(" "+clazz+" "," ");
}
}
finalValue=jQuery.trim(cur);
if(curValue!==finalValue){
jQuery.attr(elem,"class",finalValue);
}
}
}
}
return this;
},
toggleClass:function(value,stateVal){
var type=typeof value;
if(typeof stateVal==="boolean"&&type==="string"){
return stateVal?this.addClass(value):this.removeClass(value);
}
if(jQuery.isFunction(value)){
return this.each(function(i){
jQuery(this).toggleClass(
value.call(this,i,getClass(this),stateVal),
stateVal
);
});
}
return this.each(function(){
var className,i,self,classNames;
if(type==="string"){
i=0;
self=jQuery(this);
classNames=value.match(rnotwhite)||[];
while((className=classNames[i++])){
if(self.hasClass(className)){
self.removeClass(className);
}else{
self.addClass(className);
}
}
}else if(value===undefined||type==="boolean"){
className=getClass(this);
if(className){
jQuery._data(this,"__className__",className);
}
jQuery.attr(this,"class",
className||value===false?
"":
jQuery._data(this,"__className__")||""
);
}
});
},
hasClass:function(selector){
var className,elem,
i=0;
className=" "+selector+" ";
while((elem=this[i++])){
if(elem.nodeType===1&&
(" "+getClass(elem)+" ").replace(rclass," ")
.indexOf(className)>-1
){
return true;
}
}
return false;
}
});
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup error contextmenu").split(" "),
function(i,name){
jQuery.fn[name]=function(data,fn){
return arguments.length>0?
this.on(name,null,data,fn):
this.trigger(name);
};
});
jQuery.fn.extend({
hover:function(fnOver,fnOut){
return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);
}
});
var location=window.location;
var nonce=jQuery.now();
var rquery=(/\?/);
var rvalidtokens=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
jQuery.parseJSON=function(data){
if(window.JSON&&window.JSON.parse){
return window.JSON.parse(data+"");
}
var requireNonComma,
depth=null,
str=jQuery.trim(data+"");
return str&&!jQuery.trim(str.replace(rvalidtokens,function(token,comma,open,close){
if(requireNonComma&&comma){
depth=0;
}
if(depth===0){
return token;
}
requireNonComma=open||comma;
depth+=!close-!open;
return"";
}))?
(Function("return "+str))():
jQuery.error("Invalid JSON: "+data);
};
jQuery.parseXML=function(data){
var xml,tmp;
if(!data||typeof data!=="string"){
return null;
}
try{
if(window.DOMParser){
tmp=new window.DOMParser();
xml=tmp.parseFromString(data,"text/xml");
}else{
xml=new window.ActiveXObject("Microsoft.XMLDOM");
xml.async="false";
xml.loadXML(data);
}
}catch(e){
xml=undefined;
}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){
jQuery.error("Invalid XML: "+data);
}
return xml;
};
var
rhash=/#.*$/,
rts=/([?&])_=[^&]*/,
rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
rnoContent=/^(?:GET|HEAD)$/,
rprotocol=/^\/\//,
rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
prefilters={},
transports={},
allTypes="*/".concat("*"),
ajaxLocation=location.href,
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];
function addToPrefiltersOrTransports(structure){
return function(dataTypeExpression,func){
if(typeof dataTypeExpression!=="string"){
func=dataTypeExpression;
dataTypeExpression="*";
}
var dataType,
i=0,
dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];
if(jQuery.isFunction(func)){
while((dataType=dataTypes[i++])){
if(dataType.charAt(0)==="+"){
dataType=dataType.slice(1)||"*";
(structure[dataType]=structure[dataType]||[]).unshift(func);
}else{
(structure[dataType]=structure[dataType]||[]).push(func);
}
}
}
};
}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){
var inspected={},
seekingTransport=(structure===transports);
function inspect(dataType){
var selected;
inspected[dataType]=true;
jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){
var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
if(typeof dataTypeOrTransport==="string"&&
!seekingTransport&&!inspected[dataTypeOrTransport]){
options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false;
}else if(seekingTransport){
return!(selected=dataTypeOrTransport);
}
});
return selected;
}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");
}
function ajaxExtend(target,src){
var deep,key,
flatOptions=jQuery.ajaxSettings.flatOptions||{};
for(key in src){
if(src[key]!==undefined){
(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];
}
}
if(deep){
jQuery.extend(true,target,deep);
}
return target;
}
function ajaxHandleResponses(s,jqXHR,responses){
var firstDataType,ct,finalDataType,type,
contents=s.contents,
dataTypes=s.dataTypes;
while(dataTypes[0]==="*"){
dataTypes.shift();
if(ct===undefined){
ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");
}
}
if(ct){
for(type in contents){
if(contents[type]&&contents[type].test(ct)){
dataTypes.unshift(type);
break;
}
}
}
if(dataTypes[0]in responses){
finalDataType=dataTypes[0];
}else{
for(type in responses){
if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){
finalDataType=type;
break;
}
if(!firstDataType){
firstDataType=type;
}
}
finalDataType=finalDataType||firstDataType;
}
if(finalDataType){
if(finalDataType!==dataTypes[0]){
dataTypes.unshift(finalDataType);
}
return responses[finalDataType];
}
}
function ajaxConvert(s,response,jqXHR,isSuccess){
var conv2,current,conv,tmp,prev,
converters={},
dataTypes=s.dataTypes.slice();
if(dataTypes[1]){
for(conv in s.converters){
converters[conv.toLowerCase()]=s.converters[conv];
}
}
current=dataTypes.shift();
while(current){
if(s.responseFields[current]){
jqXHR[s.responseFields[current]]=response;
}
if(!prev&&isSuccess&&s.dataFilter){
response=s.dataFilter(response,s.dataType);
}
prev=current;
current=dataTypes.shift();
if(current){
if(current==="*"){
current=prev;
}else if(prev!=="*"&&prev!==current){
conv=converters[prev+" "+current]||converters["* "+current];
if(!conv){
for(conv2 in converters){
tmp=conv2.split(" ");
if(tmp[1]===current){
conv=converters[prev+" "+tmp[0]]||
converters["* "+tmp[0]];
if(conv){
if(conv===true){
conv=converters[conv2];
}else if(converters[conv2]!==true){
current=tmp[0];
dataTypes.unshift(tmp[1]);
}
break;
}
}
}
}
if(conv!==true){
if(conv&&s["throws"]){
response=conv(response);
}else{
try{
response=conv(response);
}catch(e){
return{
state:"parsererror",
error:conv?e:"No conversion from "+prev+" to "+current
};
}
}
}
}
}
}
return{state:"success",data:response};
}
jQuery.extend({
active:0,
lastModified:{},
etag:{},
ajaxSettings:{
url:ajaxLocation,
type:"GET",
isLocal:rlocalProtocol.test(ajaxLocParts[1]),
global:true,
processData:true,
async:true,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{
"*":allTypes,
text:"text/plain",
html:"text/html",
xml:"application/xml, text/xml",
json:"application/json, text/javascript"
},
contents:{
xml:/\bxml\b/,
html:/\bhtml/,
json:/\bjson\b/
},
responseFields:{
xml:"responseXML",
text:"responseText",
json:"responseJSON"
},
converters:{
"* text":String,
"text html":true,
"text json":jQuery.parseJSON,
"text xml":jQuery.parseXML
},
flatOptions:{
url:true,
context:true
}
},
ajaxSetup:function(target,settings){
return settings?
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):
ajaxExtend(jQuery.ajaxSettings,target);
},
ajaxPrefilter:addToPrefiltersOrTransports(prefilters),
ajaxTransport:addToPrefiltersOrTransports(transports),
ajax:function(url,options){
if(typeof url==="object"){
options=url;
url=undefined;
}
options=options||{};
var
parts,
i,
cacheURL,
responseHeadersString,
timeoutTimer,
fireGlobals,
transport,
responseHeaders,
s=jQuery.ajaxSetup({},options),
callbackContext=s.context||s,
globalEventContext=s.context&&
(callbackContext.nodeType||callbackContext.jquery)?
jQuery(callbackContext):
jQuery.event,
deferred=jQuery.Deferred(),
completeDeferred=jQuery.Callbacks("once memory"),
statusCode=s.statusCode||{},
requestHeaders={},
requestHeadersNames={},
state=0,
strAbort="canceled",
jqXHR={
readyState:0,
getResponseHeader:function(key){
var match;
if(state===2){
if(!responseHeaders){
responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){
responseHeaders[match[1].toLowerCase()]=match[2];
}
}
match=responseHeaders[key.toLowerCase()];
}
return match==null?null:match;
},
getAllResponseHeaders:function(){
return state===2?responseHeadersString:null;
},
setRequestHeader:function(name,value){
var lname=name.toLowerCase();
if(!state){
name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;
requestHeaders[name]=value;
}
return this;
},
overrideMimeType:function(type){
if(!state){
s.mimeType=type;
}
return this;
},
statusCode:function(map){
var code;
if(map){
if(state<2){
for(code in map){
statusCode[code]=[statusCode[code],map[code]];
}
}else{
jqXHR.always(map[jqXHR.status]);
}
}
return this;
},
abort:function(statusText){
var finalText=statusText||strAbort;
if(transport){
transport.abort(finalText);
}
done(0,finalText);
return this;
}
};
deferred.promise(jqXHR).complete=completeDeferred.add;
jqXHR.success=jqXHR.done;
jqXHR.error=jqXHR.fail;
s.url=((url||s.url||ajaxLocation)+"")
.replace(rhash,"")
.replace(rprotocol,ajaxLocParts[1]+"//");
s.type=options.method||options.type||s.method||s.type;
s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];
if(s.crossDomain==null){
parts=rurl.exec(s.url.toLowerCase());
s.crossDomain=!!(parts&&
(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||
(parts[3]||(parts[1]==="http:"?"80":"443"))!==
(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443")))
);
}
if(s.data&&s.processData&&typeof s.data!=="string"){
s.data=jQuery.param(s.data,s.traditional);
}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(state===2){
return jqXHR;
}
fireGlobals=jQuery.event&&s.global;
if(fireGlobals&&jQuery.active++===0){
jQuery.event.trigger("ajaxStart");
}
s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
cacheURL=s.url;
if(!s.hasContent){
if(s.data){
cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);
delete s.data;
}
if(s.cache===false){
s.url=rts.test(cacheURL)?
cacheURL.replace(rts,"$1_="+nonce++):
cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;
}
}
if(s.ifModified){
if(jQuery.lastModified[cacheURL]){
jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);
}
if(jQuery.etag[cacheURL]){
jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);
}
}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){
jqXHR.setRequestHeader("Content-Type",s.contentType);
}
jqXHR.setRequestHeader(
"Accept",
s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?
s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):
s.accepts["*"]
);
for(i in s.headers){
jqXHR.setRequestHeader(i,s.headers[i]);
}
if(s.beforeSend&&
(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){
return jqXHR.abort();
}
strAbort="abort";
for(i in{success:1,error:1,complete:1}){
jqXHR[i](s[i]);
}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){
done(-1,"No Transport");
}else{
jqXHR.readyState=1;
if(fireGlobals){
globalEventContext.trigger("ajaxSend",[jqXHR,s]);
}
if(state===2){
return jqXHR;
}
if(s.async&&s.timeout>0){
timeoutTimer=window.setTimeout(function(){
jqXHR.abort("timeout");
},s.timeout);
}
try{
state=1;
transport.send(requestHeaders,done);
}catch(e){
if(state<2){
done(-1,e);
}else{
throw e;
}
}
}
function done(status,nativeStatusText,responses,headers){
var isSuccess,success,error,response,modified,
statusText=nativeStatusText;
if(state===2){
return;
}
state=2;
if(timeoutTimer){
window.clearTimeout(timeoutTimer);
}
transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
isSuccess=status>=200&&status<300||status===304;
if(responses){
response=ajaxHandleResponses(s,jqXHR,responses);
}
response=ajaxConvert(s,response,jqXHR,isSuccess);
if(isSuccess){
if(s.ifModified){
modified=jqXHR.getResponseHeader("Last-Modified");
if(modified){
jQuery.lastModified[cacheURL]=modified;
}
modified=jqXHR.getResponseHeader("etag");
if(modified){
jQuery.etag[cacheURL]=modified;
}
}
if(status===204||s.type==="HEAD"){
statusText="nocontent";
}else if(status===304){
statusText="notmodified";
}else{
statusText=response.state;
success=response.data;
error=response.error;
isSuccess=!error;
}
}else{
error=statusText;
if(status||!statusText){
statusText="error";
if(status<0){
status=0;
}
}
}
jqXHR.status=status;
jqXHR.statusText=(nativeStatusText||statusText)+"";
if(isSuccess){
deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);
}else{
deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);
}
jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){
globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",
[jqXHR,s,isSuccess?success:error]);
}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){
globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--jQuery.active)){
jQuery.event.trigger("ajaxStop");
}
}
}
return jqXHR;
},
getJSON:function(url,data,callback){
return jQuery.get(url,data,callback,"json");
},
getScript:function(url,callback){
return jQuery.get(url,undefined,callback,"script");
}
});
jQuery.each(["get","post"],function(i,method){
jQuery[method]=function(url,data,callback,type){
if(jQuery.isFunction(data)){
type=type||callback;
callback=data;
data=undefined;
}
return jQuery.ajax(jQuery.extend({
url:url,
type:method,
dataType:type,
data:data,
success:callback
},jQuery.isPlainObject(url)&&url));
};
});
jQuery._evalUrl=function(url){
return jQuery.ajax({
url:url,
type:"GET",
dataType:"script",
cache:true,
async:false,
global:false,
"throws":true
});
};
jQuery.fn.extend({
wrapAll:function(html){
if(jQuery.isFunction(html)){
return this.each(function(i){
jQuery(this).wrapAll(html.call(this,i));
});
}
if(this[0]){
var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){
wrap.insertBefore(this[0]);
}
wrap.map(function(){
var elem=this;
while(elem.firstChild&&elem.firstChild.nodeType===1){
elem=elem.firstChild;
}
return elem;
}).append(this);
}
return this;
},
wrapInner:function(html){
if(jQuery.isFunction(html)){
return this.each(function(i){
jQuery(this).wrapInner(html.call(this,i));
});
}
return this.each(function(){
var self=jQuery(this),
contents=self.contents();
if(contents.length){
contents.wrapAll(html);
}else{
self.append(html);
}
});
},
wrap:function(html){
var isFunction=jQuery.isFunction(html);
return this.each(function(i){
jQuery(this).wrapAll(isFunction?html.call(this,i):html);
});
},
unwrap:function(){
return this.parent().each(function(){
if(!jQuery.nodeName(this,"body")){
jQuery(this).replaceWith(this.childNodes);
}
}).end();
}
});
function getDisplay(elem){
return elem.style&&elem.style.display||jQuery.css(elem,"display");
}
function filterHidden(elem){
while(elem&&elem.nodeType===1){
if(getDisplay(elem)==="none"||elem.type==="hidden"){
return true;
}
elem=elem.parentNode;
}
return false;
}
jQuery.expr.filters.hidden=function(elem){
return support.reliableHiddenOffsets()?
(elem.offsetWidth<=0&&elem.offsetHeight<=0&&
!elem.getClientRects().length):
filterHidden(elem);
};
jQuery.expr.filters.visible=function(elem){
return!jQuery.expr.filters.hidden(elem);
};
var r20=/%20/g,
rbracket=/\[\]$/,
rCRLF=/\r?\n/g,
rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,
rsubmittable=/^(?:input|select|textarea|keygen)/i;
function buildParams(prefix,obj,traditional,add){
var name;
if(jQuery.isArray(obj)){
jQuery.each(obj,function(i,v){
if(traditional||rbracket.test(prefix)){
add(prefix,v);
}else{
buildParams(
prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",
v,
traditional,
add
);
}
});
}else if(!traditional&&jQuery.type(obj)==="object"){
for(name in obj){
buildParams(prefix+"["+name+"]",obj[name],traditional,add);
}
}else{
add(prefix,obj);
}
}
jQuery.param=function(a,traditional){
var prefix,
s=[],
add=function(key,value){
value=jQuery.isFunction(value)?value():(value==null?"":value);
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);
};
if(traditional===undefined){
traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;
}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){
jQuery.each(a,function(){
add(this.name,this.value);
});
}else{
for(prefix in a){
buildParams(prefix,a[prefix],traditional,add);
}
}
return s.join("&").replace(r20,"+");
};
jQuery.fn.extend({
serialize:function(){
return jQuery.param(this.serializeArray());
},
serializeArray:function(){
return this.map(function(){
var elements=jQuery.prop(this,"elements");
return elements?jQuery.makeArray(elements):this;
})
.filter(function(){
var type=this.type;
return this.name&&!jQuery(this).is(":disabled")&&
rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&
(this.checked||!rcheckableType.test(type));
})
.map(function(i,elem){
var val=jQuery(this).val();
return val==null?
null:
jQuery.isArray(val)?
jQuery.map(val,function(val){
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};
}):
{name:elem.name,value:val.replace(rCRLF,"\r\n")};
}).get();
}
});
jQuery.ajaxSettings.xhr=window.ActiveXObject!==undefined?
function(){
if(this.isLocal){
return createActiveXHR();
}
if(document.documentMode>8){
return createStandardXHR();
}
return/^(get|post|head|put|delete|options)$/i.test(this.type)&&
createStandardXHR()||createActiveXHR();
}:
createStandardXHR;
var xhrId=0,
xhrCallbacks={},
xhrSupported=jQuery.ajaxSettings.xhr();
if(window.attachEvent){
window.attachEvent("onunload",function(){
for(var key in xhrCallbacks){
xhrCallbacks[key](undefined,true);
}
});
}
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);
xhrSupported=support.ajax=!!xhrSupported;
if(xhrSupported){
jQuery.ajaxTransport(function(options){
if(!options.crossDomain||support.cors){
var callback;
return{
send:function(headers,complete){
var i,
xhr=options.xhr(),
id=++xhrId;
xhr.open(
options.type,
options.url,
options.async,
options.username,
options.password
);
if(options.xhrFields){
for(i in options.xhrFields){
xhr[i]=options.xhrFields[i];
}
}
if(options.mimeType&&xhr.overrideMimeType){
xhr.overrideMimeType(options.mimeType);
}
if(!options.crossDomain&&!headers["X-Requested-With"]){
headers["X-Requested-With"]="XMLHttpRequest";
}
for(i in headers){
if(headers[i]!==undefined){
xhr.setRequestHeader(i,headers[i]+"");
}
}
xhr.send((options.hasContent&&options.data)||null);
callback=function(_,isAbort){
var status,statusText,responses;
if(callback&&(isAbort||xhr.readyState===4)){
delete xhrCallbacks[id];
callback=undefined;
xhr.onreadystatechange=jQuery.noop;
if(isAbort){
if(xhr.readyState!==4){
xhr.abort();
}
}else{
responses={};
status=xhr.status;
if(typeof xhr.responseText==="string"){
responses.text=xhr.responseText;
}
try{
statusText=xhr.statusText;
}catch(e){
statusText="";
}
if(!status&&options.isLocal&&!options.crossDomain){
status=responses.text?200:404;
}else if(status===1223){
status=204;
}
}
}
if(responses){
complete(status,statusText,responses,xhr.getAllResponseHeaders());
}
};
if(!options.async){
callback();
}else if(xhr.readyState===4){
window.setTimeout(callback);
}else{
xhr.onreadystatechange=xhrCallbacks[id]=callback;
}
},
abort:function(){
if(callback){
callback(undefined,true);
}
}
};
}
});
}
function createStandardXHR(){
try{
return new window.XMLHttpRequest();
}catch(e){}
}
function createActiveXHR(){
try{
return new window.ActiveXObject("Microsoft.XMLHTTP");
}catch(e){}
}
jQuery.ajaxPrefilter(function(s){
if(s.crossDomain){
s.contents.script=false;
}
});
jQuery.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, "+
"application/ecmascript, application/x-ecmascript"
},
contents:{
script:/\b(?:java|ecma)script\b/
},
converters:{
"text script":function(text){
jQuery.globalEval(text);
return text;
}
}
});
jQuery.ajaxPrefilter("script",function(s){
if(s.cache===undefined){
s.cache=false;
}
if(s.crossDomain){
s.type="GET";
s.global=false;
}
});
jQuery.ajaxTransport("script",function(s){
if(s.crossDomain){
var script,
head=document.head||jQuery("head")[0]||document.documentElement;
return{
send:function(_,callback){
script=document.createElement("script");
script.async=true;
if(s.scriptCharset){
script.charset=s.scriptCharset;
}
script.src=s.url;
script.onload=script.onreadystatechange=function(_,isAbort){
if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){
script.onload=script.onreadystatechange=null;
if(script.parentNode){
script.parentNode.removeChild(script);
}
script=null;
if(!isAbort){
callback(200,"success");
}
}
};
head.insertBefore(script,head.firstChild);
},
abort:function(){
if(script){
script.onload(undefined,true);
}
}
};
}
});
var oldCallbacks=[],
rjsonp=/(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({
jsonp:"callback",
jsonpCallback:function(){
var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));
this[callback]=true;
return callback;
}
});
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){
var callbackName,overwritten,responseContainer,
jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?
"url":
typeof s.data==="string"&&
(s.contentType||"")
.indexOf("application/x-www-form-urlencoded")===0&&
rjsonp.test(s.data)&&"data"
);
if(jsonProp||s.dataTypes[0]==="jsonp"){
callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?
s.jsonpCallback():
s.jsonpCallback;
if(jsonProp){
s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);
}else if(s.jsonp!==false){
s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;
}
s.converters["script json"]=function(){
if(!responseContainer){
jQuery.error(callbackName+" was not called");
}
return responseContainer[0];
};
s.dataTypes[0]="json";
overwritten=window[callbackName];
window[callbackName]=function(){
responseContainer=arguments;
};
jqXHR.always(function(){
if(overwritten===undefined){
jQuery(window).removeProp(callbackName);
}else{
window[callbackName]=overwritten;
}
if(s[callbackName]){
s.jsonpCallback=originalSettings.jsonpCallback;
oldCallbacks.push(callbackName);
}
if(responseContainer&&jQuery.isFunction(overwritten)){
overwritten(responseContainer[0]);
}
responseContainer=overwritten=undefined;
});
return"script";
}
});
support.createHTMLDocument=(function(){
if(!document.implementation.createHTMLDocument){
return false;
}
var doc=document.implementation.createHTMLDocument("");
doc.body.innerHTML="<form></form><form></form>";
return doc.body.childNodes.length===2;
})();
jQuery.parseHTML=function(data,context,keepScripts){
if(!data||typeof data!=="string"){
return null;
}
if(typeof context==="boolean"){
keepScripts=context;
context=false;
}
context=context||(support.createHTMLDocument?
document.implementation.createHTMLDocument(""):
document);
var parsed=rsingleTag.exec(data),
scripts=!keepScripts&&[];
if(parsed){
return[context.createElement(parsed[1])];
}
parsed=buildFragment([data],context,scripts);
if(scripts&&scripts.length){
jQuery(scripts).remove();
}
return jQuery.merge([],parsed.childNodes);
};
var _load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){
if(typeof url!=="string"&&_load){
return _load.apply(this,arguments);
}
var selector,type,response,
self=this,
off=url.indexOf(" ");
if(off>-1){
selector=jQuery.trim(url.slice(off,url.length));
url=url.slice(0,off);
}
if(jQuery.isFunction(params)){
callback=params;
params=undefined;
}else if(params&&typeof params==="object"){
type="POST";
}
if(self.length>0){
jQuery.ajax({
url:url,
type:type||"GET",
dataType:"html",
data:params
}).done(function(responseText){
response=arguments;
self.html(selector?
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):
responseText);
}).always(callback&&function(jqXHR,status){
self.each(function(){
callback.apply(self,response||[jqXHR.responseText,status,jqXHR]);
});
});
}
return this;
};
jQuery.each([
"ajaxStart",
"ajaxStop",
"ajaxComplete",
"ajaxError",
"ajaxSuccess",
"ajaxSend"
],function(i,type){
jQuery.fn[type]=function(fn){
return this.on(type,fn);
};
});
jQuery.expr.filters.animated=function(elem){
return jQuery.grep(jQuery.timers,function(fn){
return elem===fn.elem;
}).length;
};
function getWindow(elem){
return jQuery.isWindow(elem)?
elem:
elem.nodeType===9?
elem.defaultView||elem.parentWindow:
false;
}
jQuery.offset={
setOffset:function(elem,options,i){
var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,
position=jQuery.css(elem,"position"),
curElem=jQuery(elem),
props={};
if(position==="static"){
elem.style.position="relative";
}
curOffset=curElem.offset();
curCSSTop=jQuery.css(elem,"top");
curCSSLeft=jQuery.css(elem,"left");
calculatePosition=(position==="absolute"||position==="fixed")&&
jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1;
if(calculatePosition){
curPosition=curElem.position();
curTop=curPosition.top;
curLeft=curPosition.left;
}else{
curTop=parseFloat(curCSSTop)||0;
curLeft=parseFloat(curCSSLeft)||0;
}
if(jQuery.isFunction(options)){
options=options.call(elem,i,jQuery.extend({},curOffset));
}
if(options.top!=null){
props.top=(options.top-curOffset.top)+curTop;
}
if(options.left!=null){
props.left=(options.left-curOffset.left)+curLeft;
}
if("using"in options){
options.using.call(elem,props);
}else{
curElem.css(props);
}
}
};
jQuery.fn.extend({
offset:function(options){
if(arguments.length){
return options===undefined?
this:
this.each(function(i){
jQuery.offset.setOffset(this,options,i);
});
}
var docElem,win,
box={top:0,left:0},
elem=this[0],
doc=elem&&elem.ownerDocument;
if(!doc){
return;
}
docElem=doc.documentElement;
if(!jQuery.contains(docElem,elem)){
return box;
}
if(typeof elem.getBoundingClientRect!=="undefined"){
box=elem.getBoundingClientRect();
}
win=getWindow(doc);
return{
top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),
left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)
};
},
position:function(){
if(!this[0]){
return;
}
var offsetParent,offset,
parentOffset={top:0,left:0},
elem=this[0];
if(jQuery.css(elem,"position")==="fixed"){
offset=elem.getBoundingClientRect();
}else{
offsetParent=this.offsetParent();
offset=this.offset();
if(!jQuery.nodeName(offsetParent[0],"html")){
parentOffset=offsetParent.offset();
}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);
parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);
}
return{
top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),
left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)
};
},
offsetParent:function(){
return this.map(function(){
var offsetParent=this.offsetParent;
while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&
jQuery.css(offsetParent,"position")==="static")){
offsetParent=offsetParent.offsetParent;
}
return offsetParent||documentElement;
});
}
});
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){
var top=/Y/.test(prop);
jQuery.fn[method]=function(val){
return access(this,function(elem,method,val){
var win=getWindow(elem);
if(val===undefined){
return win?(prop in win)?win[prop]:
win.document.documentElement[method]:
elem[method];
}
if(win){
win.scrollTo(
!top?val:jQuery(win).scrollLeft(),
top?val:jQuery(win).scrollTop()
);
}else{
elem[method]=val;
}
},method,val,arguments.length,null);
};
});
jQuery.each(["top","left"],function(i,prop){
jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,
function(elem,computed){
if(computed){
computed=curCSS(elem,prop);
return rnumnonpx.test(computed)?
jQuery(elem).position()[prop]+"px":
computed;
}
}
);
});
jQuery.each({Height:"height",Width:"width"},function(name,type){
jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},
function(defaultExtra,funcName){
jQuery.fn[funcName]=function(margin,value){
var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),
extra=defaultExtra||(margin===true||value===true?"margin":"border");
return access(this,function(elem,type,value){
var doc;
if(jQuery.isWindow(elem)){
return elem.document.documentElement["client"+name];
}
if(elem.nodeType===9){
doc=elem.documentElement;
return Math.max(
elem.body["scroll"+name],doc["scroll"+name],
elem.body["offset"+name],doc["offset"+name],
doc["client"+name]
);
}
return value===undefined?
jQuery.css(elem,type,extra):
jQuery.style(elem,type,value,extra);
},type,chainable?margin:undefined,chainable,null);
};
});
});
jQuery.fn.extend({
bind:function(types,data,fn){
return this.on(types,null,data,fn);
},
unbind:function(types,fn){
return this.off(types,null,fn);
},
delegate:function(selector,types,data,fn){
return this.on(types,selector,data,fn);
},
undelegate:function(selector,types,fn){
return arguments.length===1?
this.off(selector,"**"):
this.off(types,selector||"**",fn);
}
});
jQuery.fn.size=function(){
return this.length;
};
jQuery.fn.andSelf=jQuery.fn.addBack;
if(typeof define==="function"&&define.amd){
define("jquery",[],function(){
return jQuery;
});
}
var
_jQuery=window.jQuery,
_$=window.$;
jQuery.noConflict=function(deep){
if(window.$===jQuery){
window.$=_$;
}
if(deep&&window.jQuery===jQuery){
window.jQuery=_jQuery;
}
return jQuery;
};
if(!noGlobal){
window.jQuery=window.$=jQuery;
}
return jQuery;
}));


/* prive/javascript/jquery.form.js?1461916197 */

(function(factory){
"use strict";
if(typeof define==='function'&&define.amd){
define(['jquery'],factory);
}else{
factory((typeof(jQuery)!='undefined')?jQuery:window.Zepto);
}
}
(function($){
"use strict";
var feature={};
feature.fileapi=$("<input type='file'/>").get(0).files!==undefined;
feature.formdata=window.FormData!==undefined;
var hasProp=!!$.fn.prop;
$.fn.attr2=function(){
if(!hasProp){
return this.attr.apply(this,arguments);
}
var val=this.prop.apply(this,arguments);
if((val&&val.jquery)||typeof val==='string'){
return val;
}
return this.attr.apply(this,arguments);
};
$.fn.ajaxSubmit=function(options){
if(!this.length){
log('ajaxSubmit: skipping submit process - no element selected');
return this;
}
var method,action,url,$form=this;
if(typeof options=='function'){
options={success:options};
}
else if(options===undefined){
options={};
}
method=options.type||this.attr2('method');
action=options.url||this.attr2('action');
url=(typeof action==='string')?$.trim(action):'';
url=url||window.location.href||'';
if(url){
url=(url.match(/^([^#]+)/)||[])[1];
}
options=$.extend(true,{
url:url,
success:$.ajaxSettings.success,
type:method||$.ajaxSettings.type,
iframeSrc:/^https/i.test(window.location.href||'')?'javascript:false':'about:blank'
},options);
var veto={};
this.trigger('form-pre-serialize',[this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
return this;
}
if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){
log('ajaxSubmit: submit aborted via beforeSerialize callback');
return this;
}
var traditional=options.traditional;
if(traditional===undefined){
traditional=$.ajaxSettings.traditional;
}
var elements=[];
var qx,a=this.formToArray(options.semantic,elements);
if(options.data){
options.extraData=options.data;
qx=$.param(options.data,traditional);
}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){
log('ajaxSubmit: submit aborted via beforeSubmit callback');
return this;
}
this.trigger('form-submit-validate',[a,this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
return this;
}
var q=$.param(a,traditional);
if(qx){
q=(q?(q+'&'+qx):qx);
}
if(options.type.toUpperCase()=='GET'){
options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;
options.data=null;
}
else{
options.data=q;
}
var callbacks=[];
if(options.resetForm){
callbacks.push(function(){$form.resetForm();});
}
if(options.clearForm){
callbacks.push(function(){$form.clearForm(options.includeHidden);});
}
if(!options.dataType&&options.target){
var oldSuccess=options.success||function(){};
callbacks.push(function(data){
var fn=options.replaceTarget?'replaceWith':'html';
$(options.target)[fn](data).each(oldSuccess,arguments);
});
}
else if(options.success){
callbacks.push(options.success);
}
options.success=function(data,status,xhr){
var context=options.context||this;
for(var i=0,max=callbacks.length;i<max;i++){
callbacks[i].apply(context,[data,status,xhr||$form,$form]);
}
};
if(options.error){
var oldError=options.error;
options.error=function(xhr,status,error){
var context=options.context||this;
oldError.apply(context,[xhr,status,error,$form]);
};
}
if(options.complete){
var oldComplete=options.complete;
options.complete=function(xhr,status){
var context=options.context||this;
oldComplete.apply(context,[xhr,status,$form]);
};
}
var fileInputs=$('input[type=file]:enabled',this).filter(function(){return $(this).val()!=='';});
var hasFileInputs=fileInputs.length>0;
var mp='multipart/form-data';
var multipart=($form.attr('enctype')==mp||$form.attr('encoding')==mp);
var fileAPI=feature.fileapi&&feature.formdata;
log("fileAPI :"+fileAPI);
var shouldUseFrame=(hasFileInputs||multipart)&&!fileAPI;
var jqxhr;
if(options.iframe!==false&&(options.iframe||shouldUseFrame)){
if(options.closeKeepAlive){
$.get(options.closeKeepAlive,function(){
jqxhr=fileUploadIframe(a);
});
}
else{
jqxhr=fileUploadIframe(a);
}
}
else if((hasFileInputs||multipart)&&fileAPI){
jqxhr=fileUploadXhr(a);
}
else{
jqxhr=$.ajax(options);
}
$form.removeData('jqxhr').data('jqxhr',jqxhr);
for(var k=0;k<elements.length;k++){
elements[k]=null;
}
this.trigger('form-submit-notify',[this,options]);
return this;
function deepSerialize(extraData){
var serialized=$.param(extraData,options.traditional).split('&');
var len=serialized.length;
var result=[];
var i,part;
for(i=0;i<len;i++){
serialized[i]=serialized[i].replace(/\+/g,' ');
part=serialized[i].split('=');
result.push([decodeURIComponent(part[0]),decodeURIComponent(part[1])]);
}
return result;
}
function fileUploadXhr(a){
var formdata=new FormData();
for(var i=0;i<a.length;i++){
formdata.append(a[i].name,a[i].value);
}
if(options.extraData){
var serializedData=deepSerialize(options.extraData);
for(i=0;i<serializedData.length;i++){
if(serializedData[i]){
formdata.append(serializedData[i][0],serializedData[i][1]);
}
}
}
options.data=null;
var s=$.extend(true,{},$.ajaxSettings,options,{
contentType:false,
processData:false,
cache:false,
type:method||'POST'
});
if(options.uploadProgress){
s.xhr=function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener('progress',function(event){
var percent=0;
var position=event.loaded||event.position;
var total=event.total;
if(event.lengthComputable){
percent=Math.ceil(position/total*100);
}
options.uploadProgress(event,position,total,percent);
},false);
}
return xhr;
};
}
s.data=null;
var beforeSend=s.beforeSend;
s.beforeSend=function(xhr,o){
if(options.formData){
o.data=options.formData;
}
else{
o.data=formdata;
}
if(beforeSend){
beforeSend.call(this,xhr,o);
}
};
return $.ajax(s);
}
function fileUploadIframe(a){
var form=$form[0],el,i,s,g,id,$io,io,xhr,sub,n,timedOut,timeoutHandle;
var deferred=$.Deferred();
deferred.abort=function(status){
xhr.abort(status);
};
if(a){
for(i=0;i<elements.length;i++){
el=$(elements[i]);
if(hasProp){
el.prop('disabled',false);
}
else{
el.removeAttr('disabled');
}
}
}
s=$.extend(true,{},$.ajaxSettings,options);
s.context=s.context||s;
id='jqFormIO'+(new Date().getTime());
if(s.iframeTarget){
$io=$(s.iframeTarget);
n=$io.attr2('name');
if(!n){
$io.attr2('name',id);
}
else{
id=n;
}
}
else{
$io=$('<iframe name="'+id+'" src="'+s.iframeSrc+'" />');
$io.css({position:'absolute',top:'-1000px',left:'-1000px'});
}
io=$io[0];
xhr={
aborted:0,
responseText:null,
responseXML:null,
status:0,
statusText:'n/a',
getAllResponseHeaders:function(){},
getResponseHeader:function(){},
setRequestHeader:function(){},
abort:function(status){
var e=(status==='timeout'?'timeout':'aborted');
log('aborting upload... '+e);
this.aborted=1;
try{
if(io.contentWindow.document.execCommand){
io.contentWindow.document.execCommand('Stop');
}
}
catch(ignore){}
$io.attr('src',s.iframeSrc);
xhr.error=e;
if(s.error){
s.error.call(s.context,xhr,e,status);
}
if(g){
$.event.trigger("ajaxError",[xhr,s,e]);
}
if(s.complete){
s.complete.call(s.context,xhr,e);
}
}
};
g=s.global;
if(g&&0===$.active++){
$.event.trigger("ajaxStart");
}
if(g){
$.event.trigger("ajaxSend",[xhr,s]);
}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){
if(s.global){
$.active--;
}
deferred.reject();
return deferred;
}
if(xhr.aborted){
deferred.reject();
return deferred;
}
sub=form.clk;
if(sub){
n=sub.name;
if(n&&!sub.disabled){
s.extraData=s.extraData||{};
s.extraData[n]=sub.value;
if(sub.type=="image"){
s.extraData[n+'.x']=form.clk_x;
s.extraData[n+'.y']=form.clk_y;
}
}
}
var CLIENT_TIMEOUT_ABORT=1;
var SERVER_ABORT=2;
function getDoc(frame){
var doc=null;
try{
if(frame.contentWindow){
doc=frame.contentWindow.document;
}
}catch(err){
log('cannot get iframe.contentWindow document: '+err);
}
if(doc){
return doc;
}
try{
doc=frame.contentDocument?frame.contentDocument:frame.document;
}catch(err){
log('cannot get iframe.contentDocument: '+err);
doc=frame.document;
}
return doc;
}
var csrf_token=$('meta[name=csrf-token]').attr('content');
var csrf_param=$('meta[name=csrf-param]').attr('content');
if(csrf_param&&csrf_token){
s.extraData=s.extraData||{};
s.extraData[csrf_param]=csrf_token;
}
function doSubmit(){
var t=$form.attr2('target'),
a=$form.attr2('action'),
mp='multipart/form-data',
et=$form.attr('enctype')||$form.attr('encoding')||mp;
form.setAttribute('target',id);
if(!method||/post/i.test(method)){
form.setAttribute('method','POST');
}
if(a!=s.url){
form.setAttribute('action',s.url);
}
if(!s.skipEncodingOverride&&(!method||/post/i.test(method))){
$form.attr({
encoding:'multipart/form-data',
enctype:'multipart/form-data'
});
}
if(s.timeout){
timeoutHandle=setTimeout(function(){timedOut=true;cb(CLIENT_TIMEOUT_ABORT);},s.timeout);
}
function checkState(){
try{
var state=getDoc(io).readyState;
log('state = '+state);
if(state&&state.toLowerCase()=='uninitialized'){
setTimeout(checkState,50);
}
}
catch(e){
log('Server abort: ',e,' (',e.name,')');
cb(SERVER_ABORT);
if(timeoutHandle){
clearTimeout(timeoutHandle);
}
timeoutHandle=undefined;
}
}
var extraInputs=[];
try{
if(s.extraData){
for(var n in s.extraData){
if(s.extraData.hasOwnProperty(n)){
if($.isPlainObject(s.extraData[n])&&s.extraData[n].hasOwnProperty('name')&&s.extraData[n].hasOwnProperty('value')){
extraInputs.push(
$('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
.appendTo(form)[0]);
}else{
extraInputs.push(
$('<input type="hidden" name="'+n+'">').val(s.extraData[n])
.appendTo(form)[0]);
}
}
}
}
if(!s.iframeTarget){
$io.appendTo('body');
}
if(io.attachEvent){
io.attachEvent('onload',cb);
}
else{
io.addEventListener('load',cb,false);
}
setTimeout(checkState,15);
try{
form.submit();
}catch(err){
var submitFn=document.createElement('form').submit;
submitFn.apply(form);
}
}
finally{
form.setAttribute('action',a);
form.setAttribute('enctype',et);
if(t){
form.setAttribute('target',t);
}else{
$form.removeAttr('target');
}
$(extraInputs).remove();
}
}
if(s.forceSync){
doSubmit();
}
else{
setTimeout(doSubmit,10);
}
var data,doc,domCheckCount=50,callbackProcessed;
function cb(e){
if(xhr.aborted||callbackProcessed){
return;
}
doc=getDoc(io);
if(!doc){
log('cannot access response document');
e=SERVER_ABORT;
}
if(e===CLIENT_TIMEOUT_ABORT&&xhr){
xhr.abort('timeout');
deferred.reject(xhr,'timeout');
return;
}
else if(e==SERVER_ABORT&&xhr){
xhr.abort('server abort');
deferred.reject(xhr,'error','server abort');
return;
}
if(!doc||doc.location.href==s.iframeSrc){
if(!timedOut){
return;
}
}
if(io.detachEvent){
io.detachEvent('onload',cb);
}
else{
io.removeEventListener('load',cb,false);
}
var status='success',errMsg;
try{
if(timedOut){
throw'timeout';
}
var isXml=s.dataType=='xml'||doc.XMLDocument||$.isXMLDoc(doc);
log('isXml='+isXml);
if(!isXml&&window.opera&&(doc.body===null||!doc.body.innerHTML)){
if(--domCheckCount){
log('requeing onLoad callback, DOM not available');
setTimeout(cb,250);
return;
}
}
var docRoot=doc.body?doc.body:doc.documentElement;
xhr.responseText=docRoot?docRoot.innerHTML:null;
xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;
if(isXml){
s.dataType='xml';
}
xhr.getResponseHeader=function(header){
var headers={'content-type':s.dataType};
return headers[header.toLowerCase()];
};
if(docRoot){
xhr.status=Number(docRoot.getAttribute('status'))||xhr.status;
xhr.statusText=docRoot.getAttribute('statusText')||xhr.statusText;
}
var dt=(s.dataType||'').toLowerCase();
var scr=/(json|script|text)/.test(dt);
if(scr||s.textarea){
var ta=doc.getElementsByTagName('textarea')[0];
if(ta){
xhr.responseText=ta.value;
xhr.status=Number(ta.getAttribute('status'))||xhr.status;
xhr.statusText=ta.getAttribute('statusText')||xhr.statusText;
}
else if(scr){
var pre=doc.getElementsByTagName('pre')[0];
var b=doc.getElementsByTagName('body')[0];
if(pre){
xhr.responseText=pre.textContent?pre.textContent:pre.innerText;
}
else if(b){
xhr.responseText=b.textContent?b.textContent:b.innerText;
}
}
}
else if(dt=='xml'&&!xhr.responseXML&&xhr.responseText){
xhr.responseXML=toXml(xhr.responseText);
}
try{
data=httpData(xhr,dt,s);
}
catch(err){
status='parsererror';
xhr.error=errMsg=(err||status);
}
}
catch(err){
log('error caught: ',err);
status='error';
xhr.error=errMsg=(err||status);
}
if(xhr.aborted){
log('upload aborted');
status=null;
}
if(xhr.status){
status=(xhr.status>=200&&xhr.status<300||xhr.status===304)?'success':'error';
}
if(status==='success'){
if(s.success){
s.success.call(s.context,data,'success',xhr);
}
deferred.resolve(xhr.responseText,'success',xhr);
if(g){
$.event.trigger("ajaxSuccess",[xhr,s]);
}
}
else if(status){
if(errMsg===undefined){
errMsg=xhr.statusText;
}
if(s.error){
s.error.call(s.context,xhr,status,errMsg);
}
deferred.reject(xhr,'error',errMsg);
if(g){
$.event.trigger("ajaxError",[xhr,s,errMsg]);
}
}
if(g){
$.event.trigger("ajaxComplete",[xhr,s]);
}
if(g&&!--$.active){
$.event.trigger("ajaxStop");
}
if(s.complete){
s.complete.call(s.context,xhr,status);
}
callbackProcessed=true;
if(s.timeout){
clearTimeout(timeoutHandle);
}
setTimeout(function(){
if(!s.iframeTarget){
$io.remove();
}
else{
$io.attr('src',s.iframeSrc);
}
xhr.responseXML=null;
},100);
}
var toXml=$.parseXML||function(s,doc){
if(window.ActiveXObject){
doc=new ActiveXObject('Microsoft.XMLDOM');
doc.async='false';
doc.loadXML(s);
}
else{
doc=(new DOMParser()).parseFromString(s,'text/xml');
}
return(doc&&doc.documentElement&&doc.documentElement.nodeName!='parsererror')?doc:null;
};
var parseJSON=$.parseJSON||function(s){
return window['eval']('('+s+')');
};
var httpData=function(xhr,type,s){
var ct=xhr.getResponseHeader('content-type')||'',
xml=type==='xml'||!type&&ct.indexOf('xml')>=0,
data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.nodeName==='parsererror'){
if($.error){
$.error('parsererror');
}
}
if(s&&s.dataFilter){
data=s.dataFilter(data,type);
}
if(typeof data==='string'){
if(type==='json'||!type&&ct.indexOf('json')>=0){
data=parseJSON(data);
}else if(type==="script"||!type&&ct.indexOf("javascript")>=0){
$.globalEval(data);
}
}
return data;
};
return deferred;
}
};
$.fn.ajaxForm=function(options){
options=options||{};
options.delegation=options.delegation&&$.isFunction($.fn.on);
if(!options.delegation&&this.length===0){
var o={s:this.selector,c:this.context};
if(!$.isReady&&o.s){
log('DOM not ready, queuing ajaxForm');
$(function(){
$(o.s,o.c).ajaxForm(options);
});
return this;
}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));
return this;
}
if(options.delegation){
$(document)
.off('submit.form-plugin',this.selector,doAjaxSubmit)
.off('click.form-plugin',this.selector,captureSubmittingElement)
.on('submit.form-plugin',this.selector,options,doAjaxSubmit)
.on('click.form-plugin',this.selector,options,captureSubmittingElement);
return this;
}
return this.ajaxFormUnbind()
.bind('submit.form-plugin',options,doAjaxSubmit)
.bind('click.form-plugin',options,captureSubmittingElement);
};
function doAjaxSubmit(e){
var options=e.data;
if(!e.isDefaultPrevented()){
e.preventDefault();
$(e.target).ajaxSubmit(options);
}
}
function captureSubmittingElement(e){
var target=e.target;
var $el=$(target);
if(!($el.is("[type=submit],[type=image]"))){
var t=$el.closest('[type=submit]');
if(t.length===0){
return;
}
target=t[0];
}
var form=this;
form.clk=target;
if(target.type=='image'){
if(e.offsetX!==undefined){
form.clk_x=e.offsetX;
form.clk_y=e.offsetY;
}else if(typeof $.fn.offset=='function'){
var offset=$el.offset();
form.clk_x=e.pageX-offset.left;
form.clk_y=e.pageY-offset.top;
}else{
form.clk_x=e.pageX-target.offsetLeft;
form.clk_y=e.pageY-target.offsetTop;
}
}
setTimeout(function(){form.clk=form.clk_x=form.clk_y=null;},100);
}
$.fn.ajaxFormUnbind=function(){
return this.unbind('submit.form-plugin click.form-plugin');
};
$.fn.formToArray=function(semantic,elements){
var a=[];
if(this.length===0){
return a;
}
var form=this[0];
var formId=this.attr('id');
var els=semantic?form.getElementsByTagName('*'):form.elements;
var els2;
if(els&&!/MSIE [678]/.test(navigator.userAgent)){
els=$(els).get();
}
if(formId){
els2=$(':input[form="'+formId+'"]').get();
if(els2.length){
els=(els||[]).concat(els2);
}
}
if(!els||!els.length){
return a;
}
var i,j,n,v,el,max,jmax;
for(i=0,max=els.length;i<max;i++){
el=els[i];
n=el.name;
if(!n||el.disabled){
continue;
}
if(semantic&&form.clk&&el.type=="image"){
if(form.clk==el){
a.push({name:n,value:$(el).val(),type:el.type});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
continue;
}
v=$.fieldValue(el,true);
if(v&&v.constructor==Array){
if(elements){
elements.push(el);
}
for(j=0,jmax=v.length;j<jmax;j++){
a.push({name:n,value:v[j]});
}
}
else if(feature.fileapi&&el.type=='file'){
if(elements){
elements.push(el);
}
var files=el.files;
if(files.length){
for(j=0;j<files.length;j++){
a.push({name:n,value:files[j],type:el.type});
}
}
else{
a.push({name:n,value:'',type:el.type});
}
}
else if(v!==null&&typeof v!='undefined'){
if(elements){
elements.push(el);
}
a.push({name:n,value:v,type:el.type,required:el.required});
}
}
if(!semantic&&form.clk){
var $input=$(form.clk),input=$input[0];
n=input.name;
if(n&&!input.disabled&&input.type=='image'){
a.push({name:n,value:$input.val()});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
}
return a;
};
$.fn.formSerialize=function(semantic){
return $.param(this.formToArray(semantic));
};
$.fn.fieldSerialize=function(successful){
var a=[];
this.each(function(){
var n=this.name;
if(!n){
return;
}
var v=$.fieldValue(this,successful);
if(v&&v.constructor==Array){
for(var i=0,max=v.length;i<max;i++){
a.push({name:n,value:v[i]});
}
}
else if(v!==null&&typeof v!='undefined'){
a.push({name:this.name,value:v});
}
});
return $.param(a);
};
$.fn.fieldValue=function(successful){
for(var val=[],i=0,max=this.length;i<max;i++){
var el=this[i];
var v=$.fieldValue(el,successful);
if(v===null||typeof v=='undefined'||(v.constructor==Array&&!v.length)){
continue;
}
if(v.constructor==Array){
$.merge(val,v);
}
else{
val.push(v);
}
}
return val;
};
$.fieldValue=function(el,successful){
var n=el.name,t=el.type,tag=el.tagName.toLowerCase();
if(successful===undefined){
successful=true;
}
if(successful&&(!n||el.disabled||t=='reset'||t=='button'||
(t=='checkbox'||t=='radio')&&!el.checked||
(t=='submit'||t=='image')&&el.form&&el.form.clk!=el||
tag=='select'&&el.selectedIndex==-1)){
return null;
}
if(tag=='select'){
var index=el.selectedIndex;
if(index<0){
return null;
}
var a=[],ops=el.options;
var one=(t=='select-one');
var max=(one?index+1:ops.length);
for(var i=(one?index:0);i<max;i++){
var op=ops[i];
if(op.selected){
var v=op.value;
if(!v){
v=(op.attributes&&op.attributes.value&&!(op.attributes.value.specified))?op.text:op.value;
}
if(one){
return v;
}
a.push(v);
}
}
return a;
}
return $(el).val();
};
$.fn.clearForm=function(includeHidden){
return this.each(function(){
$('input,select,textarea',this).clearFields(includeHidden);
});
};
$.fn.clearFields=$.fn.clearInputs=function(includeHidden){
var re=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
return this.each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(re.test(t)||tag=='textarea'){
this.value='';
}
else if(t=='checkbox'||t=='radio'){
this.checked=false;
}
else if(tag=='select'){
this.selectedIndex=-1;
}
else if(t=="file"){
if(/MSIE/.test(navigator.userAgent)){
$(this).replaceWith($(this).clone(true));
}else{
$(this).val('');
}
}
else if(includeHidden){
if((includeHidden===true&&/hidden/.test(t))||
(typeof includeHidden=='string'&&$(this).is(includeHidden))){
this.value='';
}
}
});
};
$.fn.resetForm=function(){
return this.each(function(){
if(typeof this.reset=='function'||(typeof this.reset=='object'&&!this.reset.nodeType)){
this.reset();
}
});
};
$.fn.enable=function(b){
if(b===undefined){
b=true;
}
return this.each(function(){
this.disabled=!b;
});
};
$.fn.selected=function(select){
if(select===undefined){
select=true;
}
return this.each(function(){
var t=this.type;
if(t=='checkbox'||t=='radio'){
this.checked=select;
}
else if(this.tagName.toLowerCase()=='option'){
var $sel=$(this).parent('select');
if(select&&$sel[0]&&$sel[0].type=='select-one'){
$sel.find('option').selected(false);
}
this.selected=select;
}
});
};
$.fn.ajaxSubmit.debug=false;
function log(){
if(!$.fn.ajaxSubmit.debug){
return;
}
var msg='[jquery.form] '+Array.prototype.join.call(arguments,'');
if(window.console&&window.console.log){
window.console.log(msg);
}
else if(window.opera&&window.opera.postError){
window.opera.postError(msg);
}
}
}));


/* prive/javascript/jquery.autosave.js?1461916197 */

(function($){
$.fn.autosave=function(opt){
opt=$.extend({
url:window.location,
confirm:false,
confirmstring:'Sauvegarder ?'
},opt);
var save_changed=function(){
$('form.autosavechanged')
.each(function(){
if(!opt.confirm||confirm(opt.confirmstring)){
var contenu=$(this).serialize();
var d=new Date();
contenu=contenu+"&__timestamp="+Math.round(d.getTime()/1000);
$.post(opt.url,{
'action':'session',
'var':'autosave_'+$('input[name=autosave]',this).val(),
'val':contenu
});
}
}).removeClass('autosavechanged');
}
$(window)
.bind('unload',save_changed);
return this
.bind('keyup',function(){
$(this).addClass('autosavechanged');
})
.bind('change',function(){
$(this).addClass('autosavechanged');
save_changed();
})
.bind('submit',function(){
save_changed();
;
});
}
})(jQuery);


/* prive/javascript/jquery.placeholder-label.js?1461916197 */

(function($){
$.placeholderLabel={
placeholder_class:null,
add_placeholder:function(){
if($(this).val()==$(this).attr('placeholder')){
$(this).val('').removeClass($.placeholderLabel.placeholder_class);
}
},
remove_placeholder:function(){
if($(this).val()==''){
$(this).val($(this).attr('placeholder')).addClass($.placeholderLabel.placeholder_class);
}
},
disable_placeholder_fields:function(){
$(this).find("input[placeholder]").each(function(){
if($(this).val()==$(this).attr('placeholder')){
$(this).val('');
}
});
return true;
}
};
$.fn.placeholderLabel=function(options){
var dummy=document.createElement('input');
if(dummy.placeholder!=undefined){
return this;
}
var config={
placeholder_class:'placeholder'
};
if(options)$.extend(config,options);
$.placeholderLabel.placeholder_class=config.placeholder_class;
this.each(function(){
var input=$(this);
input.focus($.placeholderLabel.add_placeholder);
input.blur($.placeholderLabel.remove_placeholder);
input.triggerHandler('focus');
input.triggerHandler('blur');
$(this.form).submit($.placeholderLabel.disable_placeholder_fields);
});
return this;
}
})(jQuery);


/* prive/javascript/ajaxCallback.js?1461916197 */
jQuery.spip=jQuery.spip||{};
jQuery.spip.log=function(){
if(jQuery.spip.debug&&window.console&&window.console.log)
window.console.log.apply(this,arguments);
}
if(!jQuery.spip.load_handlers){
jQuery.spip.load_handlers=new Array();
function onAjaxLoad(f){
jQuery.spip.load_handlers.push(f);
};
jQuery.spip.triggerAjaxLoad=function(root){
jQuery.spip.log('triggerAjaxLoad');
jQuery.spip.log(root);
for(var i=0;i<jQuery.spip.load_handlers.length;i++)
jQuery.spip.load_handlers[i].apply(root);
};
jQuery.spip.intercepted={};
jQuery.spip.intercepted.load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){
callback=callback||function(){};
if(params){
if(params.constructor==Function){
callback=params;
params=null;
}
}
var callback2=function(){jQuery.spip.log('jQuery.load');jQuery.spip.triggerAjaxLoad(this);callback.apply(this,arguments);};
return jQuery.spip.intercepted.load.apply(this,[url,params,callback2]);
};
jQuery.spip.intercepted.ajaxSubmit=jQuery.fn.ajaxSubmit;
jQuery.fn.ajaxSubmit=function(options){
options=options||{};
if(typeof options.onAjaxLoad=="undefined"||options.onAjaxLoad!=false){
var me=jQuery(this).parents('div.ajax');
if(me.length)
me=me.parent();
else
me=document;
if(typeof options=='function')
options={success:options};
var callback=options.success||function(){};
options.success=function(){callback.apply(this,arguments);jQuery.spip.log('jQuery.ajaxSubmit');jQuery.spip.triggerAjaxLoad(me);}
}
return jQuery.spip.intercepted.ajaxSubmit.apply(this,[options]);
}
jQuery.spip.intercepted.ajax=jQuery.ajax;
jQuery.ajax=function(type){
var s=jQuery.extend(true,{},jQuery.ajaxSettings,type);
var callbackContext=s.context||s;
try{
if(jQuery.ajax.caller==jQuery.spip.intercepted.load||jQuery.ajax.caller==jQuery.spip.intercepted.ajaxSubmit)
return jQuery.spip.intercepted.ajax(type);
}
catch(err){}
var orig_complete=s.complete||function(){};
type.complete=function(res,status){
var dataType=type.dataType;
var ct=(res&&(typeof res.getResponseHeader=='function'))
?res.getResponseHeader("content-type"):'';
var xml=!dataType&&ct&&ct.indexOf("xml")>=0;
orig_complete.call(callbackContext,res,status);
if(!dataType&&!xml||dataType=="html"){
jQuery.spip.log('jQuery.ajax');
if(typeof s.onAjaxLoad=="undefined"||s.onAjaxLoad!=false)
jQuery.spip.triggerAjaxLoad(s.ajaxTarget?s.ajaxTarget:document);
}
};
return jQuery.spip.intercepted.ajax(type);
};
}
jQuery.uaMatch=function(ua){
ua=ua.toLowerCase();
var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||
ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||
[];
return{
browser:match[1]||"",
version:match[2]||"0"
};
};
if(!jQuery.browser){
matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){
browser[matched.browser]=true;
browser.version=matched.version;
}
if(browser.chrome){
browser.webkit=true;
}else if(browser.webkit){
browser.safari=true;
}
jQuery.browser=browser;
}
jQuery.getScript=function(url,callback){
return $.ajax({
url:url,
dataType:"script",
success:callback,
cache:true
});
}
jQuery.fn.positionner=function(force,setfocus){
var offset=jQuery(this).offset();
var hauteur=parseInt(jQuery(this).css('height'));
var scrolltop=self['pageYOffset']||
jQuery.boxModel&&document.documentElement['scrollTop']||
document.body['scrollTop'];
var h=jQuery(window).height();
var scroll=0;
if(force||(offset&&offset['top']-5<=scrolltop))
scroll=offset['top']-5;
else if(offset&&offset['top']+hauteur-h+5>scrolltop)
scroll=Math.min(offset['top']-5,offset['top']+hauteur-h+15);
if(scroll)
jQuery('html,body')
.animate({scrollTop:scroll},300);
if(setfocus!==false)
jQuery(jQuery('*',this).filter('input[type=text],textarea')[0]).focus();
return this;
}
jQuery.spip.virtualbuffer_id='spip_virtualbufferupdate';
jQuery.spip.initReaderBuffer=function(){
if(jQuery('#'+jQuery.spip.virtualbuffer_id).length)return;
jQuery('body').append('<p style="float:left;width:0;height:0;position:absolute;left:-5000px;top:-5000px;"><input type="hidden" name="'+jQuery.spip.virtualbuffer_id+'" id="'+jQuery.spip.virtualbuffer_id+'" value="0" /></p>');
}
jQuery.spip.updateReaderBuffer=function(){
var i=jQuery('#'+jQuery.spip.virtualbuffer_id);
if(!i.length)return;
i.val(parseInt(i.val())+1);
}
jQuery.fn.formulaire_setARIA=function(){
if(!this.closest('.ariaformprop').length){
this.find('script').remove();
this.wrap('<div class="ariaformprop" aria-live="polite" aria-atomic="true" aria-relevant="additions"></div>');
jQuery('form',this).not('[aria-live]').attr('aria-live','off');
}
return this;
}
jQuery.fn.formulaire_dyn_ajax=function(target){
if(this.length)
jQuery.spip.initReaderBuffer();
return this.each(function(){
var scrollwhensubmit=!jQuery(this).is('.noscroll');
var cible=target||this;
jQuery(cible).formulaire_setARIA();
jQuery('form:not(.noajax):not(.bouton_action_post)',this).each(function(){
var leform=this;
var leclk,leclk_x,leclk_y;
var onError=function(xhr,status,error,$form){
jQuery(leform).ajaxFormUnbind().find('input[name="var_ajax"]').remove();
var msg="Erreur";
if(typeof(error_on_ajaxform)!=="undefined")msg=error_on_ajaxform;
jQuery(leform).prepend("<p class='error ajax-error none'>"+msg+"</p>").find('.ajax-error').show('fast');
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
jQuery(this).prepend("<input type='hidden' name='var_ajax' value='form' />")
.ajaxForm({
beforeSubmit:function(){
leclk=leform.clk;
if(leclk){
var n=leclk.name;
if(n&&!leclk.disabled&&leclk.type=="image"){
leclk_x=leform.clk_x;
leclk_y=leform.clk_y;
}
}
jQuery(cible).wrap('<div />');
cible=jQuery(cible).parent();
jQuery(cible).closest('.ariaformprop').animateLoading();
if(scrollwhensubmit)
jQuery(cible).positionner(false,false);
},
error:onError,
success:function(c,status,xhr,$form){
if(c.match(/^\s*noajax\s*$/)){
jQuery("input[name=var_ajax]",leform).remove();
if(leclk){
var n=leclk.name;
if(n&&!leclk.disabled){
jQuery(leform).prepend("<input type='hidden' name='"+n+"' value='"+leclk.value+"' />");
if(leclk.type=="image"){
jQuery(leform).prepend("<input type='hidden' name='"+n+".x' value='"+leform.clk_x+"' />");
jQuery(leform).prepend("<input type='hidden' name='"+n+".y' value='"+leform.clk_y+"' />");
}
}
}
jQuery(leform).ajaxFormUnbind().submit();
}
else{
if(!c.length||c.indexOf("ajax-form-is-ok")==-1)
return onError.apply(this,[status,xhr,$form]);
var preloaded=jQuery.spip.preloaded_urls;
jQuery.spip.preloaded_urls={};
jQuery(cible).html(c);
var a=jQuery('a:first',cible).eq(0);
var d=jQuery('div.ajax',cible);
if(!d.length){
jQuery(cible).addClass('ajax');
if(!scrollwhensubmit)
jQuery(cible).addClass('noscroll');
}
else{
d.siblings('br.bugajaxie').remove();
cible=jQuery(":first",cible);
cible.unwrap();
}
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),cible).length){
a=a.attr('href');
if(jQuery(a,cible).length)
setTimeout(function(){
jQuery(a,cible).positionner(false);
},10);
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
else{
if(a.length&&a.is('a[name=ajax_redirect]')){
a=a.get(0).href;
setTimeout(function(){
var cur=window.location.href.split('#');
document.location.replace(a);
if(cur[0]==a.split('#')[0]){
window.location.reload();
}
},10);
jQuery(cible).closest('.ariaformprop').animateLoading();
}
else{
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
}
if(!jQuery('.reponse_formulaire_ok',cible).length)
jQuery.spip.preloaded_urls=preloaded;
jQuery.spip.updateReaderBuffer();
}
}
})
.addClass('noajax hasajax');
});
});
}
jQuery.fn.formulaire_verifier=function(callback,champ){
var erreurs={'message_erreur':'form non ajax'};
var me=this;
if(jQuery(me).closest('.ariaformprop').attr('aria-busy')!='true'){
if(jQuery(me).is('form.hasajax')){
jQuery(me).ajaxSubmit({
dataType:"json",
data:{formulaire_action_verifier_json:true},
success:function(errs){
var args=[errs,champ]
if(jQuery(me).closest('.ariaformprop').attr('aria-busy')!='true')
callback.apply(me,args);
}
});
}
else
callback.apply(me,[erreurs,champ]);
}
return this;
}
jQuery.fn.formulaire_activer_verif_auto=function(callback){
callback=callback||formulaire_actualiser_erreurs;
var me=jQuery(this).closest('.ariaformprop');
var check=function(){
var name=jQuery(this).attr('name');
setTimeout(function(){me.find('form').formulaire_verifier(callback,name);},50);
}
var activer=function(){
if(me.find('form').attr('data-verifjson')!='on'){
me
.find('form')
.attr('data-verifjson','on')
.find('input,select,textarea')
.bind('change',check);
}
}
jQuery(activer);
onAjaxLoad(function(){setTimeout(activer,150);});
}
function formulaire_actualiser_erreurs(erreurs){
var parent=jQuery(this).closest('.formulaire_spip');
if(!parent.length)return;
parent.find('.reponse_formulaire,.erreur_message').fadeOut().remove();
parent.find('.erreur').removeClass('erreur');
if(erreurs['message_ok'])
parent.find('form').before('<p class="reponse_formulaire reponse_formulaire_ok">'+erreurs['message_ok']+'</p>');
if(erreurs['message_erreur'])
parent.find('form').before('<p class="reponse_formulaire reponse_formulaire_erreur">'+erreurs['message_erreur']+'</p>');
for(var k in erreurs){
var saisie=parent.find('.editer_'+k);
if(saisie.length){
saisie.addClass('erreur');
saisie.find('label').after('<span class="erreur_message">'+erreurs[k]+'</span>');
}
}
}
var ajax_confirm=true;
var ajax_confirm_date=0;
var spip_confirm=window.confirm;
function _confirm(message){
ajax_confirm=spip_confirm(message);
if(!ajax_confirm){
var d=new Date();
ajax_confirm_date=d.getTime();
}
return ajax_confirm;
}
window.confirm=_confirm;
var ajaxbloc_selecteur;
jQuery.spip.preloaded_urls={};
jQuery.spip.on_ajax_loaded=function(blocfrag,c,href,history){
history=history||(history==null);
if(typeof href==undefined||href==null)
history=false;
if(history)
jQuery.spip.setHistoryState(blocfrag);
if(jQuery(blocfrag).attr('data-loaded-callback')){
var callback=eval(jQuery(blocfrag).attr('data-loaded-callback'));
callback.call(blocfrag,c,href,history);
}
else{
jQuery(blocfrag)
.html(c)
.endLoading();
}
if(typeof href!=undefined)
jQuery(blocfrag).attr('data-url',href);
if(history){
jQuery.spip.pushHistoryState(href);
jQuery.spip.setHistoryState(blocfrag);
}
var a=jQuery('a:first',jQuery(blocfrag)).eq(0);
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),blocfrag).length){
a=a.attr('href');
jQuery(a,blocfrag).positionner(false);
}
jQuery.spip.log('on_ajax_loaded');
jQuery.spip.triggerAjaxLoad(blocfrag);
a=jQuery(blocfrag).parents('form.hasajax')
if(a.length)
a.eq(0).removeClass('noajax').parents('div.ajax').formulaire_dyn_ajax();
jQuery.spip.updateReaderBuffer();
}
jQuery.spip.stateId=0;
jQuery.spip.setHistoryState=function(blocfrag){
if(!window.history.replaceState)return;
if(!blocfrag.attr('id')){
while(jQuery('#ghsid'+jQuery.spip.stateId).length)
jQuery.spip.stateId++;
blocfrag.attr('id','ghsid'+jQuery.spip.stateId);
}
var href=blocfrag.attr('data-url')||blocfrag.attr('data-origin');
href=jQuery("<"+"a href='"+href+"'></a>").get(0).href;
var state={
id:blocfrag.attr('id'),
href:href
};
var ajaxid=blocfrag.attr('class').match(/\bajax-id-[\w-]+\b/);
if(ajaxid&&ajaxid.length)
state["ajaxid"]=ajaxid[0];
window.history.replaceState(state,window.document.title,window.document.location);
}
jQuery.spip.pushHistoryState=function(href,title){
if(!window.history.pushState)
return false;
window.history.pushState({},title,href);
}
window.onpopstate=function(popState){
if(popState.state&&popState.state.href){
var blocfrag=false;
if(popState.state.id){
blocfrag=jQuery('#'+popState.state.id);
}
if((!blocfrag||!blocfrag.length)&&popState.state.ajaxid){
blocfrag=jQuery('.ajaxbloc.'+popState.state.ajaxid);
}
if(blocfrag&&blocfrag.length==1){
jQuery.spip.ajaxClick(blocfrag,popState.state.href,{history:false});
return true;
}
else{
window.location.href=popState.state.href;
}
}
}
jQuery.spip.loadAjax=function(blocfrag,url,href,options){
var force=options.force||false;
if(jQuery(blocfrag).attr('data-loading-callback')){
var callback=eval(jQuery(blocfrag).attr('data-loading-callback'));
callback.call(blocfrag,url,href,options);
}
else{
jQuery(blocfrag).animateLoading();
}
if(jQuery.spip.preloaded_urls[url]&&!force){
if(jQuery.spip.preloaded_urls[url]=="<!--loading-->"){
setTimeout(function(){jQuery.spip.loadAjax(blocfrag,url,href,options);},100);
return;
}
jQuery.spip.on_ajax_loaded(blocfrag,jQuery.spip.preloaded_urls[url],href,options.history);
}else{
var d=new Date();
jQuery.spip.preloaded_urls[url]="<!--loading-->";
jQuery.ajax({
url:parametre_url(url,'var_t',d.getTime()),
onAjaxLoad:false,
success:function(c){
jQuery.spip.on_ajax_loaded(blocfrag,c,href,options.history);
jQuery.spip.preloaded_urls[url]=c;
if(options.callback&&typeof options.callback=="function")
options.callback.apply(blocfrag);
},
error:function(){
jQuery.spip.preloaded_urls[url]='';
}
});
}
}
jQuery.spip.makeAjaxUrl=function(href,ajax_env,origin){
var url=href.split('#');
url[0]=parametre_url(url[0],'var_ajax',1);
url[0]=parametre_url(url[0],'var_ajax_env',ajax_env);
if(origin){
var p=origin.indexOf('?');
if(p!==-1){
var args=origin.substring(p+1).split('&');
var val;
var arg;
for(var n=0;n<args.length;n++){
arg=args[n].split('=');
arg=arg[0];
p=arg.indexOf('[');
if(p!==-1)
arg=arg.substring(0,p);
val=parametre_url(href,arg);
console.log(val);
console.log(typeof val);
if(typeof val=="undefined"||val==null)
url[0]=url[0]+'&'+arg+'=';
}
}
}
if(url[1])
url[0]=parametre_url(url[0],'var_ajax_ancre',url[1]);
return url[0];
}
jQuery.spip.ajaxReload=function(blocfrag,options){
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
var href=options.href||blocfrag.attr('data-url')||blocfrag.attr('data-origin');
if(href&&typeof href!=undefined){
options=options||{};
var callback=options.callback||null;
var history=options.history||false;
var args=options.args||{};
for(var key in args)
href=parametre_url(href,key,args[key]==undefined?'':args[key],'&',args[key]==undefined?false:true);
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
jQuery.spip.loadAjax(blocfrag,url,href,{force:true,callback:callback,history:history});
return true;
}
}
jQuery.spip.ajaxClick=function(blocfrag,href,options){
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
if(!ajax_confirm){
ajax_confirm=true;
var d=new Date();
if((d.getTime()-ajax_confirm_date)<=2)
return false;
}
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
jQuery.spip.loadAjax(blocfrag,url,href,options);
return false;
}
jQuery.fn.ajaxbloc=function(){
if(this.length)
jQuery.spip.initReaderBuffer();
if(ajaxbloc_selecteur==undefined)
ajaxbloc_selecteur='.pagination a,a.ajax';
return this.each(function(){
jQuery('div.ajaxbloc',this).ajaxbloc();
var blocfrag=jQuery(this);
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
blocfrag.not('.bind-ajaxReload').bind('ajaxReload',function(event,options){
if(jQuery.spip.ajaxReload(blocfrag,options))
event.stopPropagation();
}).addClass('bind-ajaxReload')
.attr('aria-live','polite').attr('aria-atomic','true');
jQuery('form',this).not('[aria-live]').attr('aria-live','off');
jQuery(ajaxbloc_selecteur,this).not('.noajax,.bind-ajax')
.click(function(){return jQuery.spip.ajaxClick(blocfrag,this.href,{force:jQuery(this).is('.nocache'),history:!(jQuery(this).is('.nohistory')||jQuery(this).closest('.box_modalbox').length)});})
.addClass('bind-ajax')
.filter('.preload').each(function(){
var href=this.href;
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
if(!jQuery.spip.preloaded_urls[url]){
jQuery.spip.preloaded_urls[url]='<!--loading-->';
jQuery.ajax({url:url,onAjaxLoad:false,success:function(r){jQuery.spip.preloaded_urls[url]=r;},error:function(){jQuery.spip.preloaded_urls[url]='';}});
}
});
jQuery('form.bouton_action_post.ajax',this).not('.noajax,.bind-ajax').each(function(){
var leform=this;
var url=jQuery(this).attr('action').split('#');
jQuery(this)
.prepend("<input type='hidden' name='var_ajax' value='1' /><input type='hidden' name='var_ajax_env' value='"+(ajax_env)+"' />"+(url[1]?"<input type='hidden' name='var_ajax_ancre' value='"+url[1]+"' />":""))
.ajaxForm({
beforeSubmit:function(){
jQuery(blocfrag).animateLoading().positionner(false);
},
onAjaxLoad:false,
success:function(c){
jQuery.spip.on_ajax_loaded(blocfrag,c);
jQuery.spip.preloaded_urls={};
}
})
.addClass('bind-ajax');
});
});
};
jQuery.fn.followLink=function(){
$(this).click();
if(!$(this).is('.bind-ajax'))
window.location.href=$(this).get(0).href;
return this;
}
function ajaxReload(ajaxid,options){
jQuery('div.ajaxbloc.ajax-id-'+ajaxid).ajaxReload(options);
}
jQuery.fn.ajaxReload=function(options){
options=options||{};
jQuery(this).trigger('ajaxReload',[options]);
return this;
}
jQuery.fn.animateLoading=function(){
this.attr('aria-busy','true').addClass('loading').children().css('opacity',0.5);
if(typeof ajax_image_searching!='undefined'){
var i=(this).find('.image_loading');
if(i.length)i.eq(0).html(ajax_image_searching);
else this.prepend('<span class="image_loading">'+ajax_image_searching+'</span>');
}
return this;
}
jQuery.fn.animeajax=jQuery.fn.animateLoading;
jQuery.fn.endLoading=function(hard){
hard=hard||false;
this.attr('aria-busy','false').removeClass('loading');
if(hard){
this.children().css('opacity','');
this.find('.image_loading').html('');
}
return this;
}
jQuery.fn.animateRemove=function(callback){
if(this.length){
var me=this;
var color=$("<div class='remove'></div>").css('background-color');
var sel=$(this);
if(sel.is('tr'))
sel=sel.add('>td',sel);
sel.addClass('remove').css({backgroundColor:color}).animate({opacity:"0.0"},'fast',function(){
sel.removeClass('remove').css({backgroundColor:''});
if(callback)
callback.apply(me);
});
}
return this;
}
jQuery.fn.animateAppend=function(callback){
if(this.length){
var me=this;
var color=$("<div class='append'></div>").css('background-color');
var origin=$(this).css('background-color')||'#ffffff';
if(origin=='transparent')origin='#ffffff';
var sel=$(this);
if(sel.is('tr'))
sel=sel.add('>td',sel);
sel.css('opacity','0.0').addClass('append').css({backgroundColor:color}).animate({opacity:"1.0"},1000,function(){
sel.animate({backgroundColor:origin},3000,function(){
sel.removeClass('append').css({backgroundColor:''});
if(callback)
callback.apply(me);
});
});
}
return this;
}
function parametre_url(url,c,v,sep,force_vide){
if(typeof(url)=='undefined'){
url='';
}
var p;
var ancre='';
var a='./';
var args=[];
p=url.indexOf('#');
if(p!=-1){
ancre=url.substring(p);
url=url.substring(0,p);
}
p=url.indexOf('?');
if(p!==-1){
if(p>0)a=url.substring(0,p);
args=url.substring(p+1).split('&');
}
else
a=url;
var regexp=new RegExp('^('+c.replace('[]','\\[\\]')+'\\[?\\]?)(=.*)?$');
var ajouts=[];
var u=(typeof(v)!=='object')?encodeURIComponent(v):v;
var na=[];
var v_read=null;
for(var n=0;n<args.length;n++){
var val=args[n];
try{
val=decodeURIComponent(val);
}catch(e){}
var r=val.match(regexp);
if(r&&r.length){
if(v==null){
if(r[1].substr(-2)=='[]'){
if(!v_read)v_read=[];
v_read.push((r.length>2&&typeof r[2]!=='undefined')?r[2].substring(1):'');
}
else{
return(r.length>2&&typeof r[2]!=='undefined')?r[2].substring(1):'';
}
}
else if(!v.length){
}
else if(r[1].substr(-2)!='[]'){
na.push(r[1]+'='+u);
ajouts.push(r[1]);
}
}
else
na.push(args[n]);
}
if(v==null)return v_read;
if(v||v.length||force_vide){
ajouts="="+ajouts.join("=")+"=";
var all=c.split('|');
for(n=0;n<all.length;n++){
if(ajouts.search("="+all[n]+"=")==-1){
if(typeof(v)!=='object'){
na.push(all[n]+'='+u);
}
else{
var id=((all[n].substring(-2)=='[]')?all[n]:all[n]+"[]");
for(p=0;p<v.length;p++)
na.push(id+'='+encodeURIComponent(v[p]));
}
}
}
}
if(na.length){
if(!sep)sep='&';
a=a+"?"+na.join(sep);
}
return a+ancre;
}
if(!window.var_zajax_content)
window.var_zajax_content='contenu';
jQuery(function(){
jQuery('form:not(.bouton_action_post)').parents('div.ajax')
.formulaire_dyn_ajax();
jQuery('div.ajaxbloc').ajaxbloc();
jQuery("input[placeholder]:text").placeholderLabel();
jQuery('a.popin').click(function(){if(jQuery.modalbox)jQuery.modalbox(parametre_url(this.href,"var_zajax",jQuery(this).attr('data-var_zajax')?jQuery(this).attr('data-var_zajax'):var_zajax_content));return false;});
});
onAjaxLoad(function(){
if(jQuery){
jQuery('form:not(.bouton_action_post)',this).parents('div.ajax')
.formulaire_dyn_ajax();
if(jQuery(this).is('div.ajaxbloc'))
jQuery(this).ajaxbloc();
else if(jQuery(this).closest('div.ajaxbloc').length)
jQuery(this).closest('div.ajaxbloc').ajaxbloc();
else
jQuery('div.ajaxbloc',this).ajaxbloc();
jQuery("input[placeholder]:text",this).placeholderLabel();
jQuery('a.popin',this).click(function(){if(jQuery.modalbox)jQuery.modalbox(parametre_url(this.href,"var_zajax",jQuery(this).attr('data-var_zajax')?jQuery(this).attr('data-var_zajax'):var_zajax_content));return false;});
}
});


/* prive/javascript/jquery.cookie.js?1461916197 */

(function(factory){
if(typeof define==='function'&&define.amd){
define(['jquery'],factory);
}else if(typeof exports==='object'){
factory(require('jquery'));
}else{
factory(jQuery);
}
}(function($){
var pluses=/\+/g;
function encode(s){
return config.raw?s:encodeURIComponent(s);
}
function decode(s){
return config.raw?s:decodeURIComponent(s);
}
function stringifyCookieValue(value){
return encode(config.json?JSON.stringify(value):String(value));
}
function parseCookieValue(s){
if(s.indexOf('"')===0){
s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');
}
try{
s=decodeURIComponent(s.replace(pluses,' '));
return config.json?JSON.parse(s):s;
}catch(e){}
}
function read(s,converter){
var value=config.raw?s:parseCookieValue(s);
return $.isFunction(converter)?converter(value):value;
}
var config=$.cookie=function(key,value,options){
if(value!==undefined&&!$.isFunction(value)){
options=$.extend({},config.defaults,options);
if(typeof options.expires==='number'){
var days=options.expires,t=options.expires=new Date();
t.setTime(+t+days*864e+5);
}
return(document.cookie=[
encode(key),'=',stringifyCookieValue(value),
options.expires?'; expires='+options.expires.toUTCString():'',
options.path?'; path='+options.path:'',
options.domain?'; domain='+options.domain:'',
options.secure?'; secure':''
].join(''));
}
var result=key?undefined:{};
var cookies=document.cookie?document.cookie.split('; '):[];
for(var i=0,l=cookies.length;i<l;i++){
var parts=cookies[i].split('=');
var name=decode(parts.shift());
var cookie=parts.join('=');
if(key&&key===name){
result=read(cookie,value);
break;
}
if(!key&&(cookie=read(cookie))!==undefined){
result[name]=cookie;
}
}
return result;
};
config.defaults={};
$.removeCookie=function(key,options){
if($.cookie(key)===undefined){
return false;
}
$.cookie(key,'',$.extend({},options,{expires:-1}));
return!$.cookie(key);
};
}));


/* plugins/scenes_animees/squelettes/javascript/rAF.js */

(function(){
var lastTime=0;
var vendors=['ms','moz','webkit','o'];
for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){
window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];
window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']
||window[vendors[x]+'CancelRequestAnimationFrame'];
}
if(!window.requestAnimationFrame)
window.requestAnimationFrame=function(callback,element){
var currTime=new Date().getTime();
var timeToCall=Math.max(0,16-(currTime-lastTime));
var id=window.setTimeout(function(){callback(currTime+timeToCall);},
timeToCall);
lastTime=currTime+timeToCall;
return id;
};
if(!window.cancelAnimationFrame)
window.cancelAnimationFrame=function(id){
clearTimeout(id);
};
}());


/* plugins/auto/image_responsive/javascript/jquery.smartresize.js */
(function($,sr){
var debounce=function(func,threshold,execAsap){
var timeout;
return function debounced(){
var obj=this,args=arguments;
function delayed(){
if(!execAsap)
func.apply(obj,args);
timeout=null;
};
if(timeout)
clearTimeout(timeout);
else if(execAsap)
func.apply(obj,args);
timeout=setTimeout(delayed,threshold||100);
};
}
jQuery.fn[sr]=function(fn){return fn?this.on('resize',debounce(fn)):this.trigger(sr);};
})(jQuery,'smartresize');


/* plugins/auto/image_responsive/javascript/image_responsive.js */
function charger_url_image_responsive(this_img){
var dPR=window.devicePixelRatio;
var src=this_img.attr("data-src");
var l=this_img.attr("data-l");
var h=this_img.attr("data-h");
if(this_img.hasClass("image_responsive_v")){
var vertical=true;
var dim=parseInt(this_img.parent().height());
}else{
var vertical=false;
var dim=parseInt(this_img.parent().width());
}
var forcer_zoom=this_img.parents("[data-zoom-responsive]").attr("data-zoom-responsive");
if(forcer_zoom)dim=dim*forcer_zoom;
var tailles=this_img.attr("data-tailles");
if(tailles){
var w_max=0;
var t=$.parseJSON(tailles.replace(/\\"/g,'"'));
var changer_w=1;
$.each(t,function(index,value){
value=parseInt(value);
if(changer_w==1)w_max=value;
if(value>=dim)changer_w=0;
});
if(w_max>0)dim=w_max;
}
var autorisees=this_img.attr("data-autorisees");
if(autorisees){
autorisees=$.parseJSON(autorisees.replace(/\\"/g,'"'));
}
if(vertical&&parseInt(dim)>parseInt(h)){
dim=h;
dpr=false;
}else if(parseInt(dim)>parseInt(l)){
dim=l;
dpr=false;
}
if(dim==0){
}else{
if(dPR&&dPR>1){
if(vertical&&h<1.5*dim)dPR=false;
else if(l<1.5*dim)dPR=false;
else dPR=2;
}else{
dPR=false;
}
if(autorisees&&autorisees[dim]){
if(dPR<1.5)url_img=autorisees[dim][1];
else url_img=autorisees[dim][2];
}
else{
if(htactif){
racine=src.substr(0,src.length-4);
terminaison=src.substr(src.length-3,3);
var url_img=racine+"-resp"+dim;
if(vertical)url_img=url_img+"v";
if(dPR)url_img=url_img+"-"+dPR;
url_img=url_img+"."+terminaison;
}else{
var url_img="index.php?action=image_responsive&img="+src+"&taille="+dim;
if(vertical)url_img=url_img+"v";
if(dPR)url_img=url_img+"&dpr="+dPR;
}
}
this_img.attr("src",url_img).height("").width("").removeAttr("data-top");
}
}
function charger_url_background_responsive(this_img){
var dPR=window.devicePixelRatio;
vertical=false;
var dim_l=parseInt(this_img.width());
var dim_h=parseInt(this_img.height());
if(dim_l>dim_h){
var mode="i";
var src=this_img.attr("data-italien-src");
var l=this_img.attr("data-italien-l");
var h=this_img.attr("data-italien-h");
}else{
var mode="p";
var src=this_img.attr("data-portrait-src");
var l=this_img.attr("data-portrait-l");
var h=this_img.attr("data-portrait-h");
}
var mtime=this_img.attr("data-mtime");
if((dim_l/dim_h)>(l/h)){
dim=dim_l;
}else{
dim=dim_h*l/h;
var pourcent="auto 100%";
}
var tailles=this_img.attr("data-tailles");
if(tailles){
var w_max=0;
var t=$.parseJSON(tailles.replace(/\\"/g,'"'));
var changer_w=1;
$.each(t,function(index,value){
value=parseInt(value);
if(changer_w==1)w_max=value;
if(value>=dim)changer_w=0;
});
if(w_max>0)dim=w_max;
}
if(vertical&&parseInt(dim)>parseInt(h)){
dim=h;
dpr=false;
}else if(parseInt(dim)>parseInt(l)){
dim=l;
dpr=false;
}
if(dim==0){
}else{
if(dPR&&dPR>1){
if(vertical&&h<1.5*dim)dPR=false;
else if(l<1.5*dim)dPR=false;
else dPR=2;
}else{
dPR=false;
}
var autorisees=this_img.attr("data-autorisees");
if(autorisees){
autorisees=$.parseJSON(autorisees.replace(/\\"/g,'"'));
}
if(autorisees&&autorisees[dim][mode]){
if(dPR<1.5)url_img=autorisees[dim][mode][1];
else url_img=autorisees[dim][mode][2];
}else{
if(htactif){
racine=src.substr(0,src.length-4);
terminaison=src.substr(src.length-3,3);
var url_img=racine+"-resp"+dim;
if(vertical)url_img=url_img+"v";
if(dPR)url_img=url_img+"-"+dPR;
url_img=url_img+"."+terminaison;
if(mtime)url_img=url_img+"?"+mtime;
}else{
var url_img="index.php?action=image_responsive&img="+src+"&taille="+dim;
if(vertical)url_img=url_img+"v";
if(dPR)url_img=url_img+"&dpr="+dPR;
if(mtime)url_img=url_img+"&mtime="+mtime;
}
}
if(this_img.attr("data-background-actif")!=url_img){
this_img.attr("data-background-actif",url_img);
this_img.css("background-image","url("+url_img+")");
}
}
}
function charger_url_image_responsive_svg(this_img){
var dPR=window.devicePixelRatio;
var src=this_img.attr("data-src");
var l=this_img.attr("data-l");
var h=this_img.attr("data-h");
var cl=this_img.attr("class");
if(cl.indexOf("image_responsive_svg_v")>0){
var vertical=true;
var dim=parseInt(this_img.parent().height());
}else{
var vertical=false;
var dim=parseInt(this_img.parent().width());
}
var forcer_zoom=this_img.parents("[data-zoom-responsive]").attr("data-zoom-responsive");
if(forcer_zoom)dim=dim*forcer_zoom;
var tailles=this_img.attr("data-tailles");
if(tailles){
var w_max=0;
var t=$.parseJSON(tailles.replace(/\\"/g,'"'));
var changer_w=1;
$.each(t,function(index,value){
value=parseInt(value);
if(changer_w==1)w_max=value;
if(value>=dim)changer_w=0;
});
if(w_max>0)dim=w_max;
}
var autorisees=this_img.attr("data-autorisees");
if(autorisees){
autorisees=$.parseJSON(autorisees.replace(/\\"/g,'"'));
}
if(vertical&&parseInt(dim)>parseInt(h)){
dim=h;
dpr=false;
}else if(parseInt(dim)>parseInt(l)){
dim=l;
dpr=false;
}
if(dim==0){
}else{
if(dPR&&dPR>1){
if(vertical&&h<1.5*dim)dPR=false;
else if(l<1.5*dim)dPR=false;
else dPR=2;
}else{
dPR=false;
}
if(autorisees&&autorisees[dim]){
if(dPR<1.5)url_img=autorisees[dim][1];
else url_img=autorisees[dim][2];
}
else{
if(htactif){
racine=src.substr(0,src.length-4);
terminaison=src.substr(src.length-3,3);
var url_img=racine+"-resp"+dim;
if(vertical)url_img=url_img+"v";
if(dPR)url_img=url_img+"-"+dPR;
url_img=url_img+"."+terminaison;
}else{
var url_img="index.php?action=image_responsive&img="+src+"&taille="+dim;
if(vertical)url_img=url_img+"v";
if(dPR)url_img=url_img+"&dpr="+dPR;
}
}
this_img.attr("xlink:href",url_img).height("").width("").removeAttr("data-top");
}
}
function calculer_top_image_responsive(){
$(".lazy, [data-lazy]").each(function(){
_calculer_top_image_responsive($(this));
});
charger_image_responsive();
}
function _calculer_top_image_responsive(this_img){
var offset=this_img.offset().top;
this_img.attr("data-top",offset).addClass("lazy");
}
var scrollT=false;
function charger_image_lazy(){
if(scrollT)var sTop=scrollT;
else var sTop=$(window).scrollTop();
var hauteur=$(window).height();
var limite_haut=sTop-1.5*hauteur;
var limite_bas=sTop+1.5*hauteur;
$(".image_responsive.lazy[data-top]").each(function(){
this_img=$(this);
var h=this_img.attr("data-top");
if(h<=limite_bas&&h>=limite_haut){
charger_url_image_responsive(this_img);
}else{
this_img.attr("src",this_img.attr("data-src-lazy"));
}
});
$(".image_responsive_svg.lazy[data-top]").each(function(){
this_img=$(this);
var h=this_img.attr("data-top");
if(h<=limite_bas&&h>=limite_haut){
charger_url_image_responsive_svg(this_img);
}else{
this_img.attr("src",this_img.attr("data-src-lazy"));
}
});
$("[data-responsive=background].lazy[data-top]").each(function(){
this_img=$(this);
var h=this_img.attr("data-top");
if(h<=limite_bas&&h>=limite_haut)charger_url_background_responsive(this_img);
});
}
function _charger_image_responsive(){
$(".image_responsive:not('.lazy'):not('.avec_picturefill')").each(function(){
charger_url_image_responsive($(this));
});
$(".image_responsive_svg:not('.lazy')").each(function(){
charger_url_image_responsive_svg($(this));
});
charger_image_lazy();
$("[data-responsive=background]:not('.lazy')").each(function(){
charger_url_background_responsive($(this));
});
}
$(document).ready(calculer_top_image_responsive);
$(window).smartresize(calculer_top_image_responsive);
$(window).on("load",calculer_top_image_responsive);
$(document).on("ajaxComplete",calculer_top_image_responsive);
$(window).on("scroll",charger_image_responsive);
var didScroll_image_responsive=false
function charger_image_responsive(){
didScroll_image_responsive=true;
}
function render_image_responsive(){
if(didScroll_image_responsive){
didScroll_image_responsive=false;
_charger_image_responsive()
}
}
(function animloop_image_responsive(){
requestAnimationFrame(animloop_image_responsive);
render_image_responsive();
})();


/* plugins/auto/image_responsive/javascript/picturefill.js */

window.matchMedia||(window.matchMedia=function(){
"use strict";
var styleMedia=(window.styleMedia||window.media);
if(!styleMedia){
var style=document.createElement('style'),
script=document.getElementsByTagName('script')[0],
info=null;
style.type='text/css';
style.id='matchmediajs-test';
script.parentNode.insertBefore(style,script);
info=('getComputedStyle'in window)&&window.getComputedStyle(style,null)||style.currentStyle;
styleMedia={
matchMedium:function(media){
var text='@media '+media+'{ #matchmediajs-test { width: 1px; } }';
if(style.styleSheet){
style.styleSheet.cssText=text;
}else{
style.textContent=text;
}
return info.width==='1px';
}
};
}
return function(media){
return{
matches:styleMedia.matchMedium(media||'all'),
media:media||'all'
};
};
}());
(function(w,doc,image){
"use strict";
function expose(picturefill){
if(typeof module==="object"&&typeof module.exports==="object"){
module.exports=picturefill;
}else if(typeof define==="function"&&define.amd){
define("picturefill",function(){return picturefill;});
}
if(typeof w==="object"){
w.picturefill=picturefill;
}
}
if(w.HTMLPictureElement){
expose(function(){});
return;
}
doc.createElement("picture");
var pf=w.picturefill||{};
var regWDesc=/\s+\+?\d+(e\d+)?w/;
pf.ns="picturefill";
(function(){
pf.srcsetSupported="srcset"in image;
pf.sizesSupported="sizes"in image;
pf.curSrcSupported="currentSrc"in image;
})();
pf.trim=function(str){
return str.trim?str.trim():str.replace(/^\s+|\s+$/g,"");
};
pf.makeUrl=(function(){
var anchor=doc.createElement("a");
return function(src){
anchor.href=src;
return anchor.href;
};
})();
pf.restrictsMixedContent=function(){
return w.location.protocol==="https:";
};
pf.matchesMedia=function(media){
return w.matchMedia&&w.matchMedia(media).matches;
};
pf.getDpr=function(){
return(w.devicePixelRatio||1);
};
pf.getWidthFromLength=function(length){
var cssValue;
if(!(length&&length.indexOf("%")>-1===false&&(parseFloat(length)>0||length.indexOf("calc(")>-1))){
return false;
}
length=length.replace("vw","%");
if(!pf.lengthEl){
pf.lengthEl=doc.createElement("div");
pf.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden";
pf.lengthEl.className="helper-from-picturefill-js";
}
pf.lengthEl.style.width="0px";
try{
pf.lengthEl.style.width=length;
}catch(e){}
doc.body.appendChild(pf.lengthEl);
cssValue=pf.lengthEl.offsetWidth;
if(cssValue<=0){
cssValue=false;
}
doc.body.removeChild(pf.lengthEl);
return cssValue;
};
pf.detectTypeSupport=function(type,typeUri){
var image=new w.Image();
image.onerror=function(){
pf.types[type]=false;
picturefill();
};
image.onload=function(){
pf.types[type]=image.width===1;
picturefill();
};
image.src=typeUri;
return"pending";
};
pf.types=pf.types||{};
pf.initTypeDetects=function(){
pf.types["image/jpeg"]=true;
pf.types["image/gif"]=true;
pf.types["image/png"]=true;
pf.types["image/svg+xml"]=doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1");
pf.types["image/webp"]=pf.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=");
};
pf.verifyTypeSupport=function(source){
var type=source.getAttribute("type");
if(type===null||type===""){
return true;
}else{
var pfType=pf.types[type];
if(typeof pfType==="string"&&pfType!=="pending"){
pf.types[type]=pf.detectTypeSupport(type,pfType);
return"pending";
}else if(typeof pfType==="function"){
pfType();
return"pending";
}else{
return pfType;
}
}
};
pf.parseSize=function(sourceSizeStr){
var match=/(\([^)]+\))?\s*(.+)/g.exec(sourceSizeStr);
return{
media:match&&match[1],
length:match&&match[2]
};
};
pf.findWidthFromSourceSize=function(sourceSizeListStr){
var sourceSizeList=pf.trim(sourceSizeListStr).split(/\s*,\s*/),
winningLength;
for(var i=0,len=sourceSizeList.length;i<len;i++){
var sourceSize=sourceSizeList[i],
parsedSize=pf.parseSize(sourceSize),
length=parsedSize.length,
media=parsedSize.media;
if(!length){
continue;
}
if((!media||pf.matchesMedia(media))&&
(winningLength=pf.getWidthFromLength(length))){
break;
}
}
return winningLength||Math.max(w.innerWidth||0,doc.documentElement.clientWidth);
};
pf.parseSrcset=function(srcset){
var candidates=[];
while(srcset!==""){
srcset=srcset.replace(/^\s+/g,"");
var pos=srcset.search(/\s/g),
url,descriptor=null;
if(pos!==-1){
url=srcset.slice(0,pos);
var last=url.slice(-1);
if(last===","||url===""){
url=url.replace(/,+$/,"");
descriptor="";
}
srcset=srcset.slice(pos+1);
if(descriptor===null){
var descpos=srcset.indexOf(",");
if(descpos!==-1){
descriptor=srcset.slice(0,descpos);
srcset=srcset.slice(descpos+1);
}else{
descriptor=srcset;
srcset="";
}
}
}else{
url=srcset;
srcset="";
}
if(url||descriptor){
candidates.push({
url:url,
descriptor:descriptor
});
}
}
return candidates;
};
pf.parseDescriptor=function(descriptor,sizesattr){
var sizes=sizesattr||"100vw",
sizeDescriptor=descriptor&&descriptor.replace(/(^\s+|\s+$)/g,""),
widthInCssPixels=pf.findWidthFromSourceSize(sizes),
resCandidate;
if(sizeDescriptor){
var splitDescriptor=sizeDescriptor.split(" ");
for(var i=splitDescriptor.length-1;i>=0;i--){
var curr=splitDescriptor[i],
lastchar=curr&&curr.slice(curr.length-1);
if((lastchar==="h"||lastchar==="w")&&!pf.sizesSupported){
resCandidate=parseFloat((parseInt(curr,10)/widthInCssPixels));
}else if(lastchar==="x"){
var res=curr&&parseFloat(curr,10);
resCandidate=res&&!isNaN(res)?res:1;
}
}
}
return resCandidate||1;
};
pf.getCandidatesFromSourceSet=function(srcset,sizes){
var candidates=pf.parseSrcset(srcset),
formattedCandidates=[];
for(var i=0,len=candidates.length;i<len;i++){
var candidate=candidates[i];
formattedCandidates.push({
url:candidate.url,
resolution:pf.parseDescriptor(candidate.descriptor,sizes)
});
}
return formattedCandidates;
};
pf.dodgeSrcset=function(img){
if(img.srcset){
img[pf.ns].srcset=img.srcset;
img.srcset="";
img.setAttribute("data-pfsrcset",img[pf.ns].srcset);
}
};
pf.processSourceSet=function(el){
var srcset=el.getAttribute("srcset"),
sizes=el.getAttribute("sizes"),
candidates=[];
if(el.nodeName.toUpperCase()==="IMG"&&el[pf.ns]&&el[pf.ns].srcset){
srcset=el[pf.ns].srcset;
}
if(srcset){
candidates=pf.getCandidatesFromSourceSet(srcset,sizes);
}
return candidates;
};
pf.backfaceVisibilityFix=function(picImg){
var style=picImg.style||{},
WebkitBackfaceVisibility="webkitBackfaceVisibility"in style,
currentZoom=style.zoom;
if(WebkitBackfaceVisibility){
style.zoom=".999";
WebkitBackfaceVisibility=picImg.offsetWidth;
style.zoom=currentZoom;
}
};
pf.setIntrinsicSize=(function(){
var urlCache={};
var setSize=function(picImg,width,res){
if(width){
picImg.setAttribute("width",parseInt(width/res,10));
}
};
return function(picImg,bestCandidate){
var img;
if(!picImg[pf.ns]||w.pfStopIntrinsicSize){
return;
}
if(picImg[pf.ns].dims===undefined){
picImg[pf.ns].dims=picImg.getAttribute("width")||picImg.getAttribute("height");
}
if(picImg[pf.ns].dims){return;}
if(bestCandidate.url in urlCache){
setSize(picImg,urlCache[bestCandidate.url],bestCandidate.resolution);
}else{
img=doc.createElement("img");
img.onload=function(){
urlCache[bestCandidate.url]=img.width;
if(!urlCache[bestCandidate.url]){
try{
doc.body.appendChild(img);
urlCache[bestCandidate.url]=img.width||img.offsetWidth;
doc.body.removeChild(img);
}catch(e){}
}
if(picImg.src===bestCandidate.url){
setSize(picImg,urlCache[bestCandidate.url],bestCandidate.resolution);
}
picImg=null;
img.onload=null;
img=null;
};
img.src=bestCandidate.url;
}
};
})();
pf.applyBestCandidate=function(candidates,picImg){
var candidate,
length,
bestCandidate;
candidates.sort(pf.ascendingSort);
length=candidates.length;
bestCandidate=candidates[length-1];
for(var i=0;i<length;i++){
candidate=candidates[i];
if(candidate.resolution>=pf.getDpr()){
bestCandidate=candidate;
break;
}
}
if(bestCandidate){
bestCandidate.url=pf.makeUrl(bestCandidate.url);
if(picImg.src!==bestCandidate.url){
if(pf.restrictsMixedContent()&&bestCandidate.url.substr(0,"http:".length).toLowerCase()==="http:"){
if(window.console!==undefined){
console.warn("Blocked mixed content image "+bestCandidate.url);
}
}else{
picImg.src=bestCandidate.url;
if(!pf.curSrcSupported){
picImg.currentSrc=picImg.src;
}
pf.backfaceVisibilityFix(picImg);
}
}
pf.setIntrinsicSize(picImg,bestCandidate);
}
};
pf.ascendingSort=function(a,b){
return a.resolution-b.resolution;
};
pf.removeVideoShim=function(picture){
var videos=picture.getElementsByTagName("video");
if(videos.length){
var video=videos[0],
vsources=video.getElementsByTagName("source");
while(vsources.length){
picture.insertBefore(vsources[0],video);
}
video.parentNode.removeChild(video);
}
};
pf.getAllElements=function(){
var elems=[],
imgs=doc.getElementsByTagName("img");
for(var h=0,len=imgs.length;h<len;h++){
var currImg=imgs[h];
if(currImg.parentNode.nodeName.toUpperCase()==="PICTURE"||
(currImg.getAttribute("srcset")!==null)||currImg[pf.ns]&&currImg[pf.ns].srcset!==null){
elems.push(currImg);
}
}
return elems;
};
pf.getMatch=function(img,picture){
var sources=picture.childNodes,
match;
for(var j=0,slen=sources.length;j<slen;j++){
var source=sources[j];
if(source.nodeType!==1){
continue;
}
if(source===img){
return match;
}
if(source.nodeName.toUpperCase()!=="SOURCE"){
continue;
}
if(source.getAttribute("src")!==null&&typeof console!==undefined){
console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
}
var media=source.getAttribute("media");
if(!source.getAttribute("srcset")){
continue;
}
if((!media||pf.matchesMedia(media))){
var typeSupported=pf.verifyTypeSupport(source);
if(typeSupported===true){
match=source;
break;
}else if(typeSupported==="pending"){
return false;
}
}
}
return match;
};
function picturefill(opt){
var elements,
element,
parent,
firstMatch,
candidates,
options=opt||{};
elements=options.elements||pf.getAllElements();
for(var i=0,plen=elements.length;i<plen;i++){
element=elements[i];
parent=element.parentNode;
firstMatch=undefined;
candidates=undefined;
if(element.nodeName.toUpperCase()!=="IMG"){
continue;
}
if(!element[pf.ns]){
element[pf.ns]={};
}
if(!options.reevaluate&&element[pf.ns].evaluated){
continue;
}
if(parent&&parent.nodeName.toUpperCase()==="PICTURE"){
pf.removeVideoShim(parent);
firstMatch=pf.getMatch(element,parent);
if(firstMatch===false){
continue;
}
}else{
firstMatch=undefined;
}
if((parent&&parent.nodeName.toUpperCase()==="PICTURE")||
(!pf.sizesSupported&&(element.srcset&&regWDesc.test(element.srcset)))){
pf.dodgeSrcset(element);
}
if(firstMatch){
candidates=pf.processSourceSet(firstMatch);
pf.applyBestCandidate(candidates,element);
}else{
candidates=pf.processSourceSet(element);
if(element.srcset===undefined||element[pf.ns].srcset){
pf.applyBestCandidate(candidates,element);
}
}
element[pf.ns].evaluated=true;
}
}
function runPicturefill(){
pf.initTypeDetects();
picturefill();
var intervalId=setInterval(function(){
picturefill();
if(/^loaded|^i|^c/.test(doc.readyState)){
clearInterval(intervalId);
return;
}
},250);
var resizeTimer;
var handleResize=function(){
picturefill({reevaluate:true});
};
function checkResize(){
clearTimeout(resizeTimer);
resizeTimer=setTimeout(handleResize,60);
}
if(w.addEventListener){
w.addEventListener("resize",checkResize,false);
}else if(w.attachEvent){
w.attachEvent("onresize",checkResize);
}
}
runPicturefill();
picturefill._=pf;
expose(picturefill);
})(window,window.document,new window.Image());


/* plugins/auto/html5_responsive/v1.8.0/javascript/liens-standalone.js */
if(window.navigator.standalone){
$(document).on("click","a:not([onclick])",function(){
var lien=$(this).attr("href");
if(lien!="#"){
document.location=lien;
return false;
}
});
}


/* plugins/auto/html5_responsive/v1.8.0/javascript/fastclick.js */
;(function(){
'use strict';
function FastClick(layer,options){
var oldOnClick;
options=options||{};
this.trackingClick=false;
this.trackingClickStart=0;
this.targetElement=null;
this.touchStartX=0;
this.touchStartY=0;
this.lastTouchIdentifier=0;
this.touchBoundary=options.touchBoundary||10;
this.layer=layer;
this.tapDelay=options.tapDelay||200;
this.tapTimeout=options.tapTimeout||700;
if(FastClick.notNeeded(layer)){
return;
}
function bind(method,context){
return function(){return method.apply(context,arguments);};
}
var methods=['onMouse','onClick','onTouchStart','onTouchMove','onTouchEnd','onTouchCancel'];
var context=this;
for(var i=0,l=methods.length;i<l;i++){
context[methods[i]]=bind(context[methods[i]],context);
}
if(deviceIsAndroid){
layer.addEventListener('mouseover',this.onMouse,true);
layer.addEventListener('mousedown',this.onMouse,true);
layer.addEventListener('mouseup',this.onMouse,true);
}
layer.addEventListener('click',this.onClick,true);
layer.addEventListener('touchstart',this.onTouchStart,false);
layer.addEventListener('touchmove',this.onTouchMove,false);
layer.addEventListener('touchend',this.onTouchEnd,false);
layer.addEventListener('touchcancel',this.onTouchCancel,false);
if(!Event.prototype.stopImmediatePropagation){
layer.removeEventListener=function(type,callback,capture){
var rmv=Node.prototype.removeEventListener;
if(type==='click'){
rmv.call(layer,type,callback.hijacked||callback,capture);
}else{
rmv.call(layer,type,callback,capture);
}
};
layer.addEventListener=function(type,callback,capture){
var adv=Node.prototype.addEventListener;
if(type==='click'){
adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){
if(!event.propagationStopped){
callback(event);
}
}),capture);
}else{
adv.call(layer,type,callback,capture);
}
};
}
if(typeof layer.onclick==='function'){
oldOnClick=layer.onclick;
layer.addEventListener('click',function(event){
oldOnClick(event);
},false);
layer.onclick=null;
}
}
var deviceIsWindowsPhone=navigator.userAgent.indexOf("Windows Phone")>=0;
var deviceIsAndroid=navigator.userAgent.indexOf('Android')>0&&!deviceIsWindowsPhone;
var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent)&&!deviceIsWindowsPhone;
var deviceIsIOS4=deviceIsIOS&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);
var deviceIsIOSWithBadTarget=deviceIsIOS&&(/OS [6-7]_\d/).test(navigator.userAgent);
var deviceIsBlackBerry10=navigator.userAgent.indexOf('BB10')>0;
FastClick.prototype.needsClick=function(target){
switch(target.nodeName.toLowerCase()){
case'button':
case'select':
case'textarea':
if(target.disabled){
return true;
}
break;
case'input':
if((deviceIsIOS&&target.type==='file')||target.disabled){
return true;
}
break;
case'label':
case'iframe':
case'video':
return true;
}
return(/\bneedsclick\b/).test(target.className);
};
FastClick.prototype.needsFocus=function(target){
switch(target.nodeName.toLowerCase()){
case'textarea':
return true;
case'select':
return!deviceIsAndroid;
case'input':
switch(target.type){
case'button':
case'checkbox':
case'file':
case'image':
case'radio':
case'submit':
return false;
}
return!target.disabled&&!target.readOnly;
default:
return(/\bneedsfocus\b/).test(target.className);
}
};
FastClick.prototype.sendClick=function(targetElement,event){
var clickEvent,touch;
if(document.activeElement&&document.activeElement!==targetElement){
document.activeElement.blur();
}
touch=event.changedTouches[0];
clickEvent=document.createEvent('MouseEvents');
clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);
clickEvent.forwardedTouchEvent=true;
targetElement.dispatchEvent(clickEvent);
};
FastClick.prototype.determineEventType=function(targetElement){
if(deviceIsAndroid&&targetElement.tagName.toLowerCase()==='select'){
return'mousedown';
}
return'click';
};
FastClick.prototype.focus=function(targetElement){
var length;
if(deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf('date')!==0&&targetElement.type!=='time'&&targetElement.type!=='month'){
length=targetElement.value.length;
targetElement.setSelectionRange(length,length);
}else{
targetElement.focus();
}
};
FastClick.prototype.updateScrollParent=function(targetElement){
var scrollParent,parentElement;
scrollParent=targetElement.fastClickScrollParent;
if(!scrollParent||!scrollParent.contains(targetElement)){
parentElement=targetElement;
do{
if(parentElement.scrollHeight>parentElement.offsetHeight){
scrollParent=parentElement;
targetElement.fastClickScrollParent=parentElement;
break;
}
parentElement=parentElement.parentElement;
}while(parentElement);
}
if(scrollParent){
scrollParent.fastClickLastScrollTop=scrollParent.scrollTop;
}
};
FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){
if(eventTarget.nodeType===Node.TEXT_NODE){
return eventTarget.parentNode;
}
return eventTarget;
};
FastClick.prototype.onTouchStart=function(event){
var targetElement,touch,selection;
if(event.targetTouches.length>1){
return true;
}
targetElement=this.getTargetElementFromEventTarget(event.target);
touch=event.targetTouches[0];
if(deviceIsIOS){
selection=window.getSelection();
if(selection.rangeCount&&!selection.isCollapsed){
return true;
}
if(!deviceIsIOS4){
if(touch.identifier&&touch.identifier===this.lastTouchIdentifier){
event.preventDefault();
return false;
}
this.lastTouchIdentifier=touch.identifier;
this.updateScrollParent(targetElement);
}
}
this.trackingClick=true;
this.trackingClickStart=event.timeStamp;
this.targetElement=targetElement;
this.touchStartX=touch.pageX;
this.touchStartY=touch.pageY;
if((event.timeStamp-this.lastClickTime)<this.tapDelay){
event.preventDefault();
}
return true;
};
FastClick.prototype.touchHasMoved=function(event){
var touch=event.changedTouches[0],boundary=this.touchBoundary;
if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){
return true;
}
return false;
};
FastClick.prototype.onTouchMove=function(event){
if(!this.trackingClick){
return true;
}
if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){
this.trackingClick=false;
this.targetElement=null;
}
return true;
};
FastClick.prototype.findControl=function(labelElement){
if(labelElement.control!==undefined){
return labelElement.control;
}
if(labelElement.htmlFor){
return document.getElementById(labelElement.htmlFor);
}
return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};
FastClick.prototype.onTouchEnd=function(event){
var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;
if(!this.trackingClick){
return true;
}
if((event.timeStamp-this.lastClickTime)<this.tapDelay){
this.cancelNextClick=true;
return true;
}
if((event.timeStamp-this.trackingClickStart)>this.tapTimeout){
return true;
}
this.cancelNextClick=false;
this.lastClickTime=event.timeStamp;
trackingClickStart=this.trackingClickStart;
this.trackingClick=false;
this.trackingClickStart=0;
if(deviceIsIOSWithBadTarget){
touch=event.changedTouches[0];
targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;
targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent;
}
targetTagName=targetElement.tagName.toLowerCase();
if(targetTagName==='label'){
forElement=this.findControl(targetElement);
if(forElement){
this.focus(targetElement);
if(deviceIsAndroid){
return false;
}
targetElement=forElement;
}
}else if(this.needsFocus(targetElement)){
if((event.timeStamp-trackingClickStart)>100||(deviceIsIOS&&window.top!==window&&targetTagName==='input')){
this.targetElement=null;
return false;
}
this.focus(targetElement);
this.sendClick(targetElement,event);
if(!deviceIsIOS||targetTagName!=='select'){
this.targetElement=null;
event.preventDefault();
}
return false;
}
if(deviceIsIOS&&!deviceIsIOS4){
scrollParent=targetElement.fastClickScrollParent;
if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){
return true;
}
}
if(!this.needsClick(targetElement)){
event.preventDefault();
this.sendClick(targetElement,event);
}
return false;
};
FastClick.prototype.onTouchCancel=function(){
this.trackingClick=false;
this.targetElement=null;
};
FastClick.prototype.onMouse=function(event){
if(!this.targetElement){
return true;
}
if(event.forwardedTouchEvent){
return true;
}
if(!event.cancelable){
return true;
}
if(!this.needsClick(this.targetElement)||this.cancelNextClick){
if(event.stopImmediatePropagation){
event.stopImmediatePropagation();
}else{
event.propagationStopped=true;
}
event.stopPropagation();
event.preventDefault();
return false;
}
return true;
};
FastClick.prototype.onClick=function(event){
var permitted;
if(this.trackingClick){
this.targetElement=null;
this.trackingClick=false;
return true;
}
if(event.target.type==='submit'&&event.detail===0){
return true;
}
permitted=this.onMouse(event);
if(!permitted){
this.targetElement=null;
}
return permitted;
};
FastClick.prototype.destroy=function(){
var layer=this.layer;
if(deviceIsAndroid){
layer.removeEventListener('mouseover',this.onMouse,true);
layer.removeEventListener('mousedown',this.onMouse,true);
layer.removeEventListener('mouseup',this.onMouse,true);
}
layer.removeEventListener('click',this.onClick,true);
layer.removeEventListener('touchstart',this.onTouchStart,false);
layer.removeEventListener('touchmove',this.onTouchMove,false);
layer.removeEventListener('touchend',this.onTouchEnd,false);
layer.removeEventListener('touchcancel',this.onTouchCancel,false);
};
FastClick.notNeeded=function(layer){
var metaViewport;
var chromeVersion;
var blackberryVersion;
var firefoxVersion;
if(typeof window.ontouchstart==='undefined'){
return true;
}
chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];
if(chromeVersion){
if(deviceIsAndroid){
metaViewport=document.querySelector('meta[name=viewport]');
if(metaViewport){
if(metaViewport.content.indexOf('user-scalable=no')!==-1){
return true;
}
if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth){
return true;
}
}
}else{
return true;
}
}
if(deviceIsBlackBerry10){
blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
if(blackberryVersion[1]>=10&&blackberryVersion[2]>=3){
metaViewport=document.querySelector('meta[name=viewport]');
if(metaViewport){
if(metaViewport.content.indexOf('user-scalable=no')!==-1){
return true;
}
if(document.documentElement.scrollWidth<=window.outerWidth){
return true;
}
}
}
}
if(layer.style.msTouchAction==='none'||layer.style.touchAction==='manipulation'){
return true;
}
firefoxVersion=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];
if(firefoxVersion>=27){
metaViewport=document.querySelector('meta[name=viewport]');
if(metaViewport&&(metaViewport.content.indexOf('user-scalable=no')!==-1||document.documentElement.scrollWidth<=window.outerWidth)){
return true;
}
}
if(layer.style.touchAction==='none'||layer.style.touchAction==='manipulation'){
return true;
}
return false;
};
FastClick.attach=function(layer,options){
return new FastClick(layer,options);
};
if(typeof define==='function'&&typeof define.amd==='object'&&define.amd){
define(function(){
return FastClick;
});
}else if(typeof module!=='undefined'&&module.exports){
module.exports=FastClick.attach;
module.exports.FastClick=FastClick;
}else{
window.FastClick=FastClick;
}
}());


/* plugins/auto/html5_responsive/v1.8.0/javascript/fastclick-activ.js */
if('addEventListener'in document){
document.addEventListener('DOMContentLoaded',function(){
FastClick.attach(document.body);
},false);
}


/* plugins/fonds/squelettes/avec_fonds.js */

function calculer_hauteur_img_fond() {
$("#skrollr-body").css("height","auto");
$(".remplir_vertical").css("height","auto").find(".interieur").each(function(){
var hauteur_ecran=$(window).height();
$(this).css("min-height",hauteur_ecran);
var contenu=$(this).find(".fonds_contenu");
if(contenu.innerHeight()<hauteur_ecran){
var decal_contenu=(hauteur_ecran-contenu.innerHeight())/2;
contenu.css("padding-top",decal_contenu).css("padding-bottom",decal_contenu-1);
}else{
contenu.css("padding-top",0).css("padding-bottom",0);
}
});
$(".fonds_svg").each(function() {
if($(this).attr("data-largeur")>0){
var rapport_fichier=$(this).attr("data-hauteur")/$(this).attr("data-largeur");
var rapport_box=$(this).height()/$(this).width();
if(rapport_box>rapport_fichier){
$(this).find(".spip_vivus_svg").width($(this).height()/rapport_fichier)
.css("margin-left",($(this).width()-$(this).find(".spip_vivus_svg").width())/2);
}else{
$(this).find(".spip_vivus_svg").height($(this).width()*rapport_fichier)
.css("margin-top",($(this).height()-$(this).find(".spip_vivus_svg").height())/2);
}
}
});
}
$(document).ready(calculer_hauteur_img_fond);
$(window).smartresize(calculer_hauteur_img_fond);


/* plugins/portfolio_strip/portfolio_strip.js */

if(typeof portfolio_strip_marge==='undefined')var portfolio_strip_marge=1;
if(typeof portfolio_strip_taille==='undefined')var portfolio_strip_taille=300;
function calculer_portfolio_strip(){
$(".portfolio_strip").each(function(){
$(this).css("padding",0)
.find("ul").css("margin-right","-"+portfolio_strip_marge+"px").css("margin-bottom","-"+portfolio_strip_marge+"px")
.find("li").css("margin-right",portfolio_strip_marge+"px")
.css("margin-bottom",portfolio_strip_marge+"px");
var l_max=$(this).find("ul").width();
var taille_max=portfolio_strip_taille;
if(l_max>1400)taille_max*=1.2;
else if(l_max<=1024&&l_max>768)taille_max*=0.8;
else if(l_max<=768&&l_max>520)taille_max*=0.6;
else if(l_max<=520)taille_max*=0.5;
var num_deb=1;
var num=0;
var l_total=0;
var l_temp=200;
var l_cont=200;
var h_cont=200;
var rapport=1;
var r_cont=new Array();
$(this).find("li").each(function(){
num++
l_cont=$(this).attr("data-width");
h_cont=$(this).attr("data-height");
r_cont[num]=l_cont/h_cont;
l_temp=r_cont[num]*taille_max;
if(l_total+l_temp>l_max-((num)-num_deb)*portfolio_strip_marge){
rapport=(l_max-((num)-num_deb)*portfolio_strip_marge)/(l_total);
hauteur=taille_max*rapport;
hauteur_boite=Math.round(hauteur);
var total_ligne=0;
for(i=num_deb;i<num;i++){
var t=$(this).parent("ul").find(":nth-child("+i+")");
var h=Math.round(hauteur*r_cont[i]);
if(i==num-1){
h=(l_max-(num-num_deb)*portfolio_strip_marge)-total_ligne;
total_ligne=0;
}else{
total_ligne+=h;
}
t.height(hauteur_boite).width(h);
t.find("a").width("100%").height("100%");
}
l_total=0;
num_deb=num;
}
l_total+=l_temp;
if($(this).is(":last-child")){
var rapport=false;
if(l_total+(num-num_deb)*portfolio_strip_marge>0.55*l_max){
rapport=(l_max-(1+num-num_deb)*portfolio_strip_marge)/l_total;
hauteur=taille_max*rapport;
hauteur_boite=Math.round(hauteur);
}
var total_ligne=0;
for(i=num_deb;i<=num;i++){
var t=$(this).parent("ul").find("li:nth-child("+i+")");
if(rapport){
hauteur=taille_max*rapport;
}else{
var hauteur=taille_max;
}
hauteur_boite=Math.round(hauteur);
var h=Math.round(hauteur*r_cont[i]);
if(i==num_deb&&!rapport){
t.css("margin-left",((l_max-(1+num-num_deb)*portfolio_strip_marge)-l_total)/2);
}else{
t.css("margin-left","");
}
if(i==num&&rapport){
h=(l_max-(1+num-num_deb)*portfolio_strip_marge)-total_ligne;
total_ligne=0;
}else{
total_ligne+=h;
}
t.height(hauteur_boite).width(h);
t.find("a").width("100%").height("100%");
}
}
});
});
if(typeof sk!=='undefined')initier_skrollr();
}
$(document).ready(calculer_portfolio_strip);
$(window).on("resize",calculer_portfolio_strip);


/* plugins/photoswipe/trunk/lib/photoswipe/photoswipe.min.js */

!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipe=b()}(this,function(){"use strict";var a=function(a,b,c,d){var e={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var a=window.pageYOffset;return void 0!==a?a:document.documentElement.scrollTop},unbind:function(a,b,c){e.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){e.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(e.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(e.features)return e.features;var a=e.createEl(),b=a.style,c="",d={};if(d.oldIE=document.all&&!document.addEventListener,d.touch="ontouchstart"in window,window.requestAnimationFrame&&(d.raf=window.requestAnimationFrame,d.caf=window.cancelAnimationFrame),d.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!d.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&8>g&&(d.isOldIOSPhone=!0))}var h=f.match(/Android\s([0-9\.]*)/),i=h?h[1]:0;i=parseFloat(i),i>=1&&(4.4>i&&(d.isOldAndroid=!0),d.androidVersion=i),d.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var j,k,l=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],n=0;4>n;n++){c=m[n];for(var o=0;3>o;o++)j=l[o],k=c+(c?j.charAt(0).toUpperCase()+j.slice(1):j),!d[j]&&k in b&&(d[j]=k);c&&!d.raf&&(c=c.toLowerCase(),d.raf=window[c+"RequestAnimationFrame"],d.raf&&(d.caf=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]))}if(!d.raf){var p=0;d.raf=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-p)),d=window.setTimeout(function(){a(b+c)},c);return p=b+c,d},d.caf=function(a){clearTimeout(a)}}return d.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.features=d,d}};e.detectFeatures(),e.features.oldIE&&(e.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var f=this,g=25,h=3,i={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};e.extend(i,d);var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la=function(){return{x:0,y:0}},ma=la(),na=la(),oa=la(),pa={},qa=0,ra={},sa=la(),ta=0,ua=!0,va=[],wa={},xa=!1,ya=function(a,b){e.extend(f,b.publicMethods),va.push(a)},za=function(a){var b=_b();return a>b-1?a-b:0>a?b+a:a},Aa={},Ba=function(a,b){return Aa[a]||(Aa[a]=[]),Aa[a].push(b)},Ca=function(a){var b=Aa[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(f,c)}},Da=function(){return(new Date).getTime()},Ea=function(a){ia=a,f.bg.style.opacity=a*i.bgOpacity},Fa=function(a,b,c,d,e){(!xa||e&&e!==f.currItem)&&(d/=e?e.fitRatio:f.currItem.fitRatio),a[E]=u+b+"px, "+c+"px"+v+" scale("+d+")"},Ga=function(a){da&&(a&&(s>f.currItem.fitRatio?xa||(lc(f.currItem,!1,!0),xa=!0):xa&&(lc(f.currItem),xa=!1)),Fa(da,oa.x,oa.y,s))},Ha=function(a){a.container&&Fa(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},Ia=function(a,b){b[E]=u+a+"px, 0px"+v},Ja=function(a,b){if(!i.loop&&b){var c=m+(sa.x*qa-a)/sa.x,d=Math.round(a-sb.x);(0>c&&d>0||c>=_b()-1&&0>d)&&(a=sb.x+d*i.mainScrollEndFriction)}sb.x=a,Ia(a,n)},Ka=function(a,b){var c=tb[a]-ra[a];return na[a]+ma[a]+c-c*(b/t)},La=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Ma=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Na=null,Oa=function(){Na&&(e.unbind(document,"mousemove",Oa),e.addClass(a,"pswp--has_mouse"),i.mouseUsed=!0,Ca("mouseUsed")),Na=setTimeout(function(){Na=null},100)},Pa=function(){e.bind(document,"keydown",f),N.transform&&e.bind(f.scrollWrap,"click",f),i.mouseUsed||e.bind(document,"mousemove",Oa),e.bind(window,"resize scroll",f),Ca("bindEvents")},Qa=function(){e.unbind(window,"resize",f),e.unbind(window,"scroll",r.scroll),e.unbind(document,"keydown",f),e.unbind(document,"mousemove",Oa),N.transform&&e.unbind(f.scrollWrap,"click",f),U&&e.unbind(window,p,f),Ca("unbindEvents")},Ra=function(a,b){var c=hc(f.currItem,pa,a);return b&&(ca=c),c},Sa=function(a){return a||(a=f.currItem),a.initialZoomLevel},Ta=function(a){return a||(a=f.currItem),a.w>0?i.maxSpreadZoom:1},Ua=function(a,b,c,d){return d===f.currItem.initialZoomLevel?(c[a]=f.currItem.initialPosition[a],!0):(c[a]=Ka(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]?(c[a]=b.max[a],!0):!1)},Va=function(){if(E){var b=N.perspective&&!G;return u="translate"+(b?"3d(":"("),void(v=N.perspective?", 0px)":")")}E="left",e.addClass(a,"pswp--ie"),Ia=function(a,b){b.left=a+"px"},Ha=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Ga=function(){if(da){var a=da,b=f.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=oa.x+"px",a.top=oa.y+"px"}}},Wa=function(a){var b="";i.escKey&&27===a.keyCode?b="close":i.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,f[b]()))},Xa=function(a){a&&(X||W||ea||S)&&(a.preventDefault(),a.stopPropagation())},Ya=function(){f.setScrollOffset(0,e.getScrollY())},Za={},$a=0,_a=function(a){Za[a]&&(Za[a].raf&&I(Za[a].raf),$a--,delete Za[a])},ab=function(a){Za[a]&&_a(a),Za[a]||($a++,Za[a]={})},bb=function(){for(var a in Za)Za.hasOwnProperty(a)&&_a(a)},cb=function(a,b,c,d,e,f,g){var h,i=Da();ab(a);var j=function(){if(Za[a]){if(h=Da()-i,h>=d)return _a(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),Za[a].raf=H(j)}};j()},db={shout:Ca,listen:Ba,viewportSize:pa,options:i,isMainScrollAnimating:function(){return ea},getZoomLevel:function(){return s},getCurrentIndex:function(){return m},isDragging:function(){return U},isZooming:function(){return _},setScrollOffset:function(a,b){ra.x=a,M=ra.y=b,Ca("updateScrollOffset",ra)},applyZoomPan:function(a,b,c,d){oa.x=b,oa.y=c,s=a,Ga(d)},init:function(){if(!j&&!k){var c;f.framework=e,f.template=a,f.bg=e.getChildByClass(a,"pswp__bg"),J=a.className,j=!0,N=e.detectFeatures(),H=N.raf,I=N.caf,E=N.transform,L=N.oldIE,f.scrollWrap=e.getChildByClass(a,"pswp__scroll-wrap"),f.container=e.getChildByClass(f.scrollWrap,"pswp__container"),n=f.container.style,f.itemHolders=y=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],y[0].el.style.display=y[2].el.style.display="none",Va(),r={resize:f.updateSize,scroll:Ya,keydown:Wa,click:Xa};var d=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!d||(i.showAnimationDuration=i.hideAnimationDuration=0),c=0;c<va.length;c++)f["init"+va[c]]();if(b){var g=f.ui=new b(f,e);g.init()}Ca("firstUpdate"),m=m||i.index||0,(isNaN(m)||0>m||m>=_b())&&(m=0),f.currItem=$b(m),(N.isOldIOSPhone||N.isOldAndroid)&&(ua=!1),a.setAttribute("aria-hidden","false"),i.modal&&(ua?a.style.position="fixed":(a.style.position="absolute",a.style.top=e.getScrollY()+"px")),void 0===M&&(Ca("initialLayout"),M=K=e.getScrollY());var l="pswp--open ";for(i.mainClass&&(l+=i.mainClass+" "),i.showHideOpacity&&(l+="pswp--animate_opacity "),l+=G?"pswp--touch":"pswp--notouch",l+=N.animationName?" pswp--css_animation":"",l+=N.svg?" pswp--svg":"",e.addClass(a,l),f.updateSize(),o=-1,ta=null,c=0;h>c;c++)Ia((c+o)*sa.x,y[c].el.style);L||e.bind(f.scrollWrap,q,f),Ba("initialZoomInEnd",function(){f.setContent(y[0],m-1),f.setContent(y[2],m+1),y[0].el.style.display=y[2].el.style.display="block",i.focus&&a.focus(),Pa()}),f.setContent(y[1],m),f.updateCurrItem(),Ca("afterInit"),ua||(w=setInterval(function(){$a||U||_||s!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),e.addClass(a,"pswp--visible")}},close:function(){j&&(j=!1,k=!0,Ca("close"),Qa(),bc(f.currItem,null,!0,f.destroy))},destroy:function(){Ca("destroy"),Wb&&clearTimeout(Wb),a.setAttribute("aria-hidden","true"),a.className=J,w&&clearInterval(w),e.unbind(f.scrollWrap,q,f),e.unbind(window,"scroll",f),yb(),bb(),Aa=null},panTo:function(a,b,c){c||(a>ca.min.x?a=ca.min.x:a<ca.max.x&&(a=ca.max.x),b>ca.min.y?b=ca.min.y:b<ca.max.y&&(b=ca.max.y)),oa.x=a,oa.y=b,Ga()},handleEvent:function(a){a=a||window.event,r[a.type]&&r[a.type](a)},goTo:function(a){a=za(a);var b=a-m;ta=b,m=a,f.currItem=$b(m),qa-=b,Ja(sa.x*qa),bb(),ea=!1,f.updateCurrItem()},next:function(){f.goTo(m+1)},prev:function(){f.goTo(m-1)},updateCurrZoomItem:function(a){if(a&&Ca("beforeChange",0),y[1].el.children.length){var b=y[1].el.children[0];da=e.hasClass(b,"pswp__zoom-wrap")?b.style:null}else da=null;ca=f.currItem.bounds,t=s=f.currItem.initialZoomLevel,oa.x=ca.center.x,oa.y=ca.center.y,a&&Ca("afterChange")},invalidateCurrItems:function(){x=!0;for(var a=0;h>a;a++)y[a].item&&(y[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==ta){var b,c=Math.abs(ta);if(!(a&&2>c)){f.currItem=$b(m),xa=!1,Ca("beforeChange",ta),c>=h&&(o+=ta+(ta>0?-h:h),c=h);for(var d=0;c>d;d++)ta>0?(b=y.shift(),y[h-1]=b,o++,Ia((o+2)*sa.x,b.el.style),f.setContent(b,m-c+d+1+1)):(b=y.pop(),y.unshift(b),o--,Ia(o*sa.x,b.el.style),f.setContent(b,m+c-d-1-1));if(da&&1===Math.abs(ta)){var e=$b(z);e.initialZoomLevel!==s&&(hc(e,pa),lc(e),Ha(e))}ta=0,f.updateCurrZoomItem(),z=m,Ca("afterChange")}}},updateSize:function(b){if(!ua&&i.modal){var c=e.getScrollY();if(M!==c&&(a.style.top=c+"px",M=c),!b&&wa.x===window.innerWidth&&wa.y===window.innerHeight)return;wa.x=window.innerWidth,wa.y=window.innerHeight,a.style.height=wa.y+"px"}if(pa.x=f.scrollWrap.clientWidth,pa.y=f.scrollWrap.clientHeight,Ya(),sa.x=pa.x+Math.round(pa.x*i.spacing),sa.y=pa.y,Ja(sa.x*qa),Ca("beforeResize"),void 0!==o){for(var d,g,j,k=0;h>k;k++)d=y[k],Ia((k+o)*sa.x,d.el.style),j=m+k-1,i.loop&&_b()>2&&(j=za(j)),g=$b(j),g&&(x||g.needsUpdate||!g.bounds)?(f.cleanSlide(g),f.setContent(d,j),1===k&&(f.currItem=g,f.updateCurrZoomItem(!0)),g.needsUpdate=!1):-1===d.index&&j>=0&&f.setContent(d,j),g&&g.container&&(hc(g,pa),lc(g),Ha(g));x=!1}t=s=f.currItem.initialZoomLevel,ca=f.currItem.bounds,ca&&(oa.x=ca.center.x,oa.y=ca.center.y,Ga(!0)),Ca("resize")},zoomTo:function(a,b,c,d,f){b&&(t=s,tb.x=Math.abs(b.x)-oa.x,tb.y=Math.abs(b.y)-oa.y,La(na,oa));var g=Ra(a,!1),h={};Ua("x",g,h,a),Ua("y",g,h,a);var i=s,j={x:oa.x,y:oa.y};Ma(h);var k=function(b){1===b?(s=a,oa.x=h.x,oa.y=h.y):(s=(a-i)*b+i,oa.x=(h.x-j.x)*b+j.x,oa.y=(h.y-j.y)*b+j.y),f&&f(b),Ga(1===b)};c?cb("customZoomTo",0,1,c,d||e.easing.sine.inOut,k):k(1)}},eb=30,fb=10,gb={},hb={},ib={},jb={},kb={},lb=[],mb={},nb=[],ob={},pb=0,qb=la(),rb=0,sb=la(),tb=la(),ub=la(),vb=function(a,b){return a.x===b.x&&a.y===b.y},wb=function(a,b){return Math.abs(a.x-b.x)<g&&Math.abs(a.y-b.y)<g},xb=function(a,b){return ob.x=Math.abs(a.x-b.x),ob.y=Math.abs(a.y-b.y),Math.sqrt(ob.x*ob.x+ob.y*ob.y)},yb=function(){Y&&(I(Y),Y=null)},zb=function(){U&&(Y=H(zb),Pb())},Ab=function(){return!("fit"===i.scaleMode&&s===f.currItem.initialZoomLevel)},Bb=function(a,b){return a&&a!==document?a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:b(a)?a:Bb(a.parentNode,b):!1},Cb={},Db=function(a,b){return Cb.prevent=!Bb(a.target,i.isClickableElement),Ca("preventDragEvent",a,b,Cb),Cb.prevent},Eb=function(a,b){return b.x=a.pageX,b.y=a.pageY,b.id=a.identifier,b},Fb=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Gb=function(a,b,c){if(a-P>50){var d=nb.length>2?nb.shift():{};d.x=b,d.y=c,nb.push(d),P=a}},Hb=function(){var a=oa.y-f.currItem.initialPosition.y;return 1-Math.abs(a/(pa.y/2))},Ib={},Jb={},Kb=[],Lb=function(a){for(;Kb.length>0;)Kb.pop();return F?(ka=0,lb.forEach(function(a){0===ka?Kb[0]=a:1===ka&&(Kb[1]=a),ka++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Kb[0]=Eb(a.touches[0],Ib),a.touches.length>1&&(Kb[1]=Eb(a.touches[1],Jb))):(Ib.x=a.pageX,Ib.y=a.pageY,Ib.id="",Kb[0]=Ib),Kb},Mb=function(a,b){var c,d,e,g,h=0,j=oa[a]+b[a],k=b[a]>0,l=sb.x+b.x,m=sb.x-mb.x;return c=j>ca.min[a]||j<ca.max[a]?i.panEndFriction:1,j=oa[a]+b[a]*c,!i.allowPanToNext&&s!==f.currItem.initialZoomLevel||(da?"h"!==fa||"x"!==a||W||(k?(j>ca.min[a]&&(c=i.panEndFriction,h=ca.min[a]-j,d=ca.min[a]-na[a]),(0>=d||0>m)&&_b()>1?(g=l,0>m&&l>mb.x&&(g=mb.x)):ca.min.x!==ca.max.x&&(e=j)):(j<ca.max[a]&&(c=i.panEndFriction,h=j-ca.max[a],d=na[a]-ca.max[a]),(0>=d||m>0)&&_b()>1?(g=l,m>0&&l<mb.x&&(g=mb.x)):ca.min.x!==ca.max.x&&(e=j))):g=l,"x"!==a)?void(ea||Z||s>f.currItem.fitRatio&&(oa[a]+=b[a]*c)):(void 0!==g&&(Ja(g,!0),Z=g===mb.x?!1:!0),ca.min.x!==ca.max.x&&(void 0!==e?oa.x=e:Z||(oa.x+=b.x*c)),void 0!==g)},Nb=function(a){if(!("mousedown"===a.type&&a.button>0)){if(Zb)return void a.preventDefault();if(!T||"mousedown"!==a.type){if(Db(a,!0)&&a.preventDefault(),Ca("pointerDown"),F){var b=e.arraySearch(lb,a.pointerId,"id");0>b&&(b=lb.length),lb[b]={x:a.pageX,y:a.pageY,id:a.pointerId}}var c=Lb(a),d=c.length;$=null,bb(),U&&1!==d||(U=ga=!0,e.bind(window,p,f),R=ja=ha=S=Z=X=V=W=!1,fa=null,Ca("firstTouchStart",c),La(na,oa),ma.x=ma.y=0,La(jb,c[0]),La(kb,jb),mb.x=sa.x*qa,nb=[{x:jb.x,y:jb.y}],P=O=Da(),Ra(s,!0),yb(),zb()),!_&&d>1&&!ea&&!Z&&(t=s,W=!1,_=V=!0,ma.y=ma.x=0,La(na,oa),La(gb,c[0]),La(hb,c[1]),Fb(gb,hb,ub),tb.x=Math.abs(ub.x)-oa.x,tb.y=Math.abs(ub.y)-oa.y,aa=ba=xb(gb,hb))}}},Ob=function(a){if(a.preventDefault(),F){var b=e.arraySearch(lb,a.pointerId,"id");if(b>-1){var c=lb[b];c.x=a.pageX,c.y=a.pageY}}if(U){var d=Lb(a);if(fa||X||_)$=d;else if(sb.x!==sa.x*qa)fa="h";else{var f=Math.abs(d[0].x-jb.x)-Math.abs(d[0].y-jb.y);Math.abs(f)>=fb&&(fa=f>0?"h":"v",$=d)}}},Pb=function(){if($){var a=$.length;if(0!==a)if(La(gb,$[0]),ib.x=gb.x-jb.x,ib.y=gb.y-jb.y,_&&a>1){if(jb.x=gb.x,jb.y=gb.y,!ib.x&&!ib.y&&vb($[1],hb))return;La(hb,$[1]),W||(W=!0,Ca("zoomGestureStarted"));var b=xb(gb,hb),c=Ub(b);c>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(ja=!0);var d=1,e=Sa(),g=Ta();if(e>c)if(i.pinchToClose&&!ja&&t<=f.currItem.initialZoomLevel){var h=e-c,j=1-h/(e/1.2);Ea(j),Ca("onPinchClose",j),ha=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>g&&(d=(c-g)/(6*e),d>1&&(d=1),c=g+d*e);0>d&&(d=0),aa=b,Fb(gb,hb,qb),ma.x+=qb.x-ub.x,ma.y+=qb.y-ub.y,La(ub,qb),oa.x=Ka("x",c),oa.y=Ka("y",c),R=c>s,s=c,Ga()}else{if(!fa)return;if(ga&&(ga=!1,Math.abs(ib.x)>=fb&&(ib.x-=$[0].x-kb.x),Math.abs(ib.y)>=fb&&(ib.y-=$[0].y-kb.y)),jb.x=gb.x,jb.y=gb.y,0===ib.x&&0===ib.y)return;if("v"===fa&&i.closeOnVerticalDrag&&!Ab()){ma.y+=ib.y,oa.y+=ib.y;var k=Hb();return S=!0,Ca("onVerticalDrag",k),Ea(k),void Ga()}Gb(Da(),gb.x,gb.y),X=!0,ca=f.currItem.bounds;var l=Mb("x",ib);l||(Mb("y",ib),Ma(oa),Ga())}}},Qb=function(a){if(N.isOldAndroid){if(T&&"mouseup"===a.type)return;a.type.indexOf("touch")>-1&&(clearTimeout(T),T=setTimeout(function(){T=0},600))}Ca("pointerUp"),Db(a,!1)&&a.preventDefault();var b;if(F){var c=e.arraySearch(lb,a.pointerId,"id");if(c>-1)if(b=lb.splice(c,1)[0],navigator.pointerEnabled)b.type=a.pointerType||"mouse";else{var d={4:"mouse",2:"touch",3:"pen"};b.type=d[a.pointerType],b.type||(b.type=a.pointerType||"mouse")}}var g,h=Lb(a),j=h.length;if("mouseup"===a.type&&(j=0),2===j)return $=null,!0;1===j&&La(kb,h[0]),0!==j||fa||ea||(b||("mouseup"===a.type?b={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(b={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),Ca("touchRelease",a,b));var k=-1;if(0===j&&(U=!1,e.unbind(window,p,f),yb(),_?k=0:-1!==rb&&(k=Da()-rb)),rb=1===j?Da():-1,g=-1!==k&&150>k?"zoom":"swipe",_&&2>j&&(_=!1,1===j&&(g="zoomPointerUp"),Ca("zoomGestureEnded")),$=null,X||W||ea||S)if(bb(),Q||(Q=Rb()),Q.calculateSwipeSpeed("x"),S){var l=Hb();if(l<i.verticalDragRange)f.close();else{var m=oa.y,n=ia;cb("verticalDrag",0,1,300,e.easing.cubic.out,function(a){oa.y=(f.currItem.initialPosition.y-m)*a+m,Ea((1-n)*a+n),Ga()}),Ca("onVerticalDrag",1)}}else{if((Z||ea)&&0===j){var o=Tb(g,Q);if(o)return;g="zoomPointerUp"}if(!ea)return"swipe"!==g?void Vb():void(!Z&&s>f.currItem.fitRatio&&Sb(Q))}},Rb=function(){var a,b,c={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(d){nb.length>1?(a=Da()-P+50,b=nb[nb.length-2][d]):(a=Da()-O,b=kb[d]),c.lastFlickOffset[d]=jb[d]-b,c.lastFlickDist[d]=Math.abs(c.lastFlickOffset[d]),c.lastFlickDist[d]>20?c.lastFlickSpeed[d]=c.lastFlickOffset[d]/a:c.lastFlickSpeed[d]=0,Math.abs(c.lastFlickSpeed[d])<.1&&(c.lastFlickSpeed[d]=0),c.slowDownRatio[d]=.95,c.slowDownRatioReverse[d]=1-c.slowDownRatio[d],c.speedDecelerationRatio[d]=1},calculateOverBoundsAnimOffset:function(a,b){c.backAnimStarted[a]||(oa[a]>ca.min[a]?c.backAnimDestination[a]=ca.min[a]:oa[a]<ca.max[a]&&(c.backAnimDestination[a]=ca.max[a]),void 0!==c.backAnimDestination[a]&&(c.slowDownRatio[a]=.7,c.slowDownRatioReverse[a]=1-c.slowDownRatio[a],c.speedDecelerationRatioAbs[a]<.05&&(c.lastFlickSpeed[a]=0,c.backAnimStarted[a]=!0,cb("bounceZoomPan"+a,oa[a],c.backAnimDestination[a],b||300,e.easing.sine.out,function(b){oa[a]=b,Ga()}))))},calculateAnimOffset:function(a){c.backAnimStarted[a]||(c.speedDecelerationRatio[a]=c.speedDecelerationRatio[a]*(c.slowDownRatio[a]+c.slowDownRatioReverse[a]-c.slowDownRatioReverse[a]*c.timeDiff/10),c.speedDecelerationRatioAbs[a]=Math.abs(c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]),c.distanceOffset[a]=c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]*c.timeDiff,oa[a]+=c.distanceOffset[a])},panAnimLoop:function(){return Za.zoomPan&&(Za.zoomPan.raf=H(c.panAnimLoop),c.now=Da(),c.timeDiff=c.now-c.lastNow,c.lastNow=c.now,c.calculateAnimOffset("x"),c.calculateAnimOffset("y"),Ga(),c.calculateOverBoundsAnimOffset("x"),c.calculateOverBoundsAnimOffset("y"),c.speedDecelerationRatioAbs.x<.05&&c.speedDecelerationRatioAbs.y<.05)?(oa.x=Math.round(oa.x),oa.y=Math.round(oa.y),Ga(),void _a("zoomPan")):void 0}};return c},Sb=function(a){return a.calculateSwipeSpeed("y"),ca=f.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(ab("zoomPan"),a.lastNow=Da(),void a.panAnimLoop())},Tb=function(a,b){var c;ea||(pb=m);var d;if("swipe"===a){var g=jb.x-kb.x,h=b.lastFlickDist.x<10;g>eb&&(h||b.lastFlickOffset.x>20)?d=-1:-eb>g&&(h||b.lastFlickOffset.x<-20)&&(d=1)}var j;d&&(m+=d,0>m?(m=i.loop?_b()-1:0,j=!0):m>=_b()&&(m=i.loop?0:_b()-1,j=!0),(!j||i.loop)&&(ta+=d,qa-=d,c=!0));var k,l=sa.x*qa,n=Math.abs(l-sb.x);return c||l>sb.x==b.lastFlickSpeed.x>0?(k=Math.abs(b.lastFlickSpeed.x)>0?n/Math.abs(b.lastFlickSpeed.x):333,k=Math.min(k,400),k=Math.max(k,250)):k=333,pb===m&&(c=!1),ea=!0,Ca("mainScrollAnimStart"),cb("mainScroll",sb.x,l,k,e.easing.cubic.out,Ja,function(){bb(),ea=!1,pb=-1,(c||pb!==m)&&f.updateCurrItem(),Ca("mainScrollAnimComplete")}),c&&f.updateCurrItem(!0),c},Ub=function(a){return 1/ba*a*t},Vb=function(){var a=s,b=Sa(),c=Ta();b>s?a=b:s>c&&(a=c);var d,g=1,h=ia;return ha&&!R&&!ja&&b>s?(f.close(),!0):(ha&&(d=function(a){Ea((g-h)*a+h)}),f.zoomTo(a,0,200,e.easing.cubic.out,d),!0)};ya("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){A=a+b,B=a+c,C=a+d,D=e?a+e:""};F=N.pointerEvent,F&&N.touch&&(N.touch=!1),F?navigator.pointerEnabled?a("pointer","down","move","up","cancel"):a("MSPointer","Down","Move","Up","Cancel"):N.touch?(a("touch","start","move","end","cancel"),G=!0):a("mouse","down","move","up"),p=B+" "+C+" "+D,q=A,F&&!G&&(G=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),f.likelyTouchDevice=G,r[A]=Nb,r[B]=Ob,r[C]=Qb,D&&(r[D]=r[C]),N.touch&&(q+=" mousedown",p+=" mousemove mouseup",r.mousedown=r[A],r.mousemove=r[B],r.mouseup=r[C]),G||(i.allowPanToNext=!1)}}});var Wb,Xb,Yb,Zb,$b,_b,ac,bc=function(b,c,d,g){Wb&&clearTimeout(Wb),Zb=!0,Yb=!0;var h;b.initialLayout?(h=b.initialLayout,b.initialLayout=null):h=i.getThumbBoundsFn&&i.getThumbBoundsFn(m);var j=d?i.hideAnimationDuration:i.showAnimationDuration,k=function(){_a("initialZoom"),d?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Ea(1),c&&(c.style.display="block"),e.addClass(a,"pswp--animated-in"),Ca("initialZoom"+(d?"OutEnd":"InEnd"))),g&&g(),Zb=!1};if(!j||!h||void 0===h.x)return Ca("initialZoom"+(d?"Out":"In")),s=b.initialZoomLevel,La(oa,b.initialPosition),Ga(),a.style.opacity=d?0:1,Ea(1),void(j?setTimeout(function(){k()},j):k());var n=function(){var c=l,g=!f.currItem.src||f.currItem.loadError||i.showHideOpacity;b.miniImg&&(b.miniImg.style.webkitBackfaceVisibility="hidden"),d||(s=h.w/b.w,oa.x=h.x,oa.y=h.y-K,f[g?"template":"bg"].style.opacity=.001,Ga()),ab("initialZoom"),d&&!c&&e.removeClass(a,"pswp--animated-in"),g&&(d?e[(c?"remove":"add")+"Class"](a,"pswp--animate_opacity"):setTimeout(function(){e.addClass(a,"pswp--animate_opacity")},30)),Wb=setTimeout(function(){if(Ca("initialZoom"+(d?"Out":"In")),d){var f=h.w/b.w,i={x:oa.x,y:oa.y},l=s,m=ia,n=function(b){1===b?(s=f,oa.x=h.x,oa.y=h.y-M):(s=(f-l)*b+l,oa.x=(h.x-i.x)*b+i.x,oa.y=(h.y-M-i.y)*b+i.y),Ga(),g?a.style.opacity=1-b:Ea(m-b*m)};c?cb("initialZoom",0,1,j,e.easing.cubic.out,n,k):(n(1),Wb=setTimeout(k,j+20))}else s=b.initialZoomLevel,La(oa,b.initialPosition),Ga(),Ea(1),g?a.style.opacity=1:Ea(1),Wb=setTimeout(k,j+20)},d?25:90)};n()},cc={},dc=[],ec={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Xb.length}},fc=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},gc=function(a,b,c){var d=a.bounds;d.center.x=Math.round((cc.x-b)/2),d.center.y=Math.round((cc.y-c)/2)+a.vGap.top,d.max.x=b>cc.x?Math.round(cc.x-b):d.center.x,d.max.y=c>cc.y?Math.round(cc.y-c)+a.vGap.top:d.center.y,d.min.x=b>cc.x?0:d.center.x,d.min.y=c>cc.y?a.vGap.top:d.center.y},hc=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),Ca("parseVerticalMargin",a)),cc.x=b.x,cc.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=cc.x/a.w,f=cc.y/a.h;a.fitRatio=f>e?e:f;var g=i.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=fc())}if(!c)return;return gc(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=fc(),a.initialPosition=a.bounds.center,a.bounds},ic=function(a,b,c,d,e,g){b.loadError||d&&(b.imageAppended=!0,lc(b,d,b===f.currItem&&xa),c.appendChild(d),g&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500))},jc=function(a){a.loading=!0,a.loaded=!1;var b=a.img=e.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},kc=function(a,b){return a.src&&a.loadError&&a.container?(b&&(a.container.innerHTML=""),a.container.innerHTML=i.errorMsg.replace("%url%",a.src),!0):void 0},lc=function(a,b,c){if(a.src){b||(b=a.container.lastChild);var d=c?a.w:Math.round(a.w*a.fitRatio),e=c?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=d+"px",a.placeholder.style.height=e+"px"),b.style.width=d+"px",b.style.height=e+"px"}},mc=function(){if(dc.length){for(var a,b=0;b<dc.length;b++)a=dc[b],a.holder.index===a.index&&ic(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);dc=[]}};ya("Controller",{publicMethods:{lazyLoadItem:function(a){a=za(a);var b=$b(a);b&&(!b.loaded&&!b.loading||x)&&(Ca("gettingData",a,b),b.src&&jc(b))},initController:function(){e.extend(i,ec,!0),f.items=Xb=c,$b=f.getItemAt,_b=i.getNumItemsFn,ac=i.loop,_b()<3&&(i.loop=!1),Ba("beforeChange",function(a){var b,c=i.preload,d=null===a?!0:a>=0,e=Math.min(c[0],_b()),g=Math.min(c[1],_b());for(b=1;(d?g:e)>=b;b++)f.lazyLoadItem(m+b);for(b=1;(d?e:g)>=b;b++)f.lazyLoadItem(m-b)}),Ba("initialLayout",function(){f.currItem.initialLayout=i.getThumbBoundsFn&&i.getThumbBoundsFn(m)}),Ba("mainScrollAnimComplete",mc),Ba("initialZoomInEnd",mc),Ba("destroy",function(){for(var a,b=0;b<Xb.length;b++)a=Xb[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);dc=null})},getItemAt:function(a){return a>=0&&void 0!==Xb[a]?Xb[a]:!1},allowProgressiveImg:function(){return i.forceProgressiveLoading||!G||i.mouseUsed||screen.width>1200},setContent:function(a,b){i.loop&&(b=za(b));var c=f.getItemAt(a.index);c&&(c.container=null);var d,g=f.getItemAt(b);if(!g)return void(a.el.innerHTML="");Ca("gettingData",b,g),a.index=b,a.item=g;var h=g.container=e.createEl("pswp__zoom-wrap");if(!g.src&&g.html&&(g.html.tagName?h.appendChild(g.html):h.innerHTML=g.html),kc(g),hc(g,pa),!g.src||g.loadError||g.loaded)g.src&&!g.loadError&&(d=e.createEl("pswp__img","img"),d.style.opacity=1,d.src=g.src,lc(g,d),ic(b,g,h,d,!0));else{if(g.loadComplete=function(c){if(j){if(a&&a.index===b){if(kc(c,!0))return c.loadComplete=c.img=null,hc(c,pa),Ha(c),void(a.index===m&&f.updateCurrZoomItem());c.imageAppended?!Zb&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):N.transform&&(ea||Zb)?dc.push({item:c,baseDiv:h,img:c.img,index:b,holder:a,clearPlaceholder:!0}):ic(b,c,h,c.img,ea||Zb,!0)}c.loadComplete=null,c.img=null,Ca("imageLoadComplete",b,c)}},e.features.transform){var k="pswp__img pswp__img--placeholder";k+=g.msrc?"":" pswp__img--placeholder--blank";var l=e.createEl(k,g.msrc?"img":"");g.msrc&&(l.src=g.msrc),lc(g,l),h.appendChild(l),g.placeholder=l}g.loading||jc(g),f.allowProgressiveImg()&&(!Yb&&N.transform?dc.push({item:g,baseDiv:h,img:g.img,index:b,holder:a}):ic(b,g,h,g.img,!0,!0))}Yb||b!==m?Ha(g):(da=h.style,bc(g,d||g.img)),a.el.innerHTML="",a.el.appendChild(h)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var nc,oc={},pc=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};ya("Tap",{publicMethods:{initTap:function(){Ba("firstTouchStart",f.onTapStart),Ba("touchRelease",f.onTapRelease),Ba("destroy",function(){oc={},nc=null})},onTapStart:function(a){a.length>1&&(clearTimeout(nc),nc=null)},onTapRelease:function(a,b){if(b&&!X&&!V&&!$a){var c=b;if(nc&&(clearTimeout(nc),nc=null,wb(c,oc)))return void Ca("doubleTap",c);if("mouse"===b.type)return void pc(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||e.hasClass(a.target,"pswp__single-tap"))return void pc(a,b);La(oc,c),nc=setTimeout(function(){pc(a,b),nc=null},300)}}}});var qc;ya("DesktopZoom",{publicMethods:{initDesktopZoom:function(){L||(G?Ba("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(b){qc={};var c="wheel mousewheel DOMMouseScroll";Ba("bindEvents",function(){e.bind(a,c,f.handleMouseWheel)}),Ba("unbindEvents",function(){qc&&e.unbind(a,c,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var d,g=function(){f.mouseZoomedIn&&(e.removeClass(a,"pswp--zoomed-in"),f.mouseZoomedIn=!1),1>s?e.addClass(a,"pswp--zoom-allowed"):e.removeClass(a,"pswp--zoom-allowed"),h()},h=function(){d&&(e.removeClass(a,"pswp--dragging"),d=!1)};Ba("resize",g),Ba("afterChange",g),Ba("pointerDown",function(){f.mouseZoomedIn&&(d=!0,e.addClass(a,"pswp--dragging"))}),Ba("pointerUp",h),b||g()},handleMouseWheel:function(a){if(s<=f.currItem.fitRatio)return i.modal&&(!i.closeOnScroll||$a||U?a.preventDefault():E&&Math.abs(a.deltaY)>2&&(l=!0,f.close())),!0;if(a.stopPropagation(),qc.x=0,"deltaX"in a)1===a.deltaMode?(qc.x=18*a.deltaX,qc.y=18*a.deltaY):(qc.x=a.deltaX,qc.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(qc.x=-.16*a.wheelDeltaX),a.wheelDeltaY?qc.y=-.16*a.wheelDeltaY:qc.y=-.16*a.wheelDelta;else{if(!("detail"in a))return;qc.y=a.detail}Ra(s,!0);var b=oa.x-qc.x,c=oa.y-qc.y;(i.modal||b<=ca.min.x&&b>=ca.max.x&&c<=ca.min.y&&c>=ca.max.y)&&a.preventDefault(),f.panTo(b,c)},toggleDesktopZoom:function(b){b=b||{x:pa.x/2+ra.x,y:pa.y/2+ra.y};var c=i.getDoubleTapZoom(!0,f.currItem),d=s===c;f.mouseZoomedIn=!d,f.zoomTo(d?f.currItem.initialZoomLevel:c,b,333),e[(d?"remove":"add")+"Class"](a,"pswp--zoomed-in")}}});var rc,sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc={history:!0,galleryUID:1},Ec=function(){return Bc.hash.substring(1)},Fc=function(){rc&&clearTimeout(rc),tc&&clearTimeout(tc)},Gc=function(){var a=Ec(),b={};if(a.length<5)return b;var c,d=a.split("&");for(c=0;c<d.length;c++)if(d[c]){var e=d[c].split("=");e.length<2||(b[e[0]]=e[1])}if(i.galleryPIDs){var f=b.pid;for(b.pid=0,c=0;c<Xb.length;c++)if(Xb[c].pid===f){b.pid=c;break}}else b.pid=parseInt(b.pid,10)-1;return b.pid<0&&(b.pid=0),b},Hc=function(){if(tc&&clearTimeout(tc),$a||U)return void(tc=setTimeout(Hc,500));uc?clearTimeout(sc):uc=!0;var a=m+1,b=$b(m);b.hasOwnProperty("pid")&&(a=b.pid);var c=xc+"&gid="+i.galleryUID+"&pid="+a;yc||-1===Bc.hash.indexOf(c)&&(Ac=!0);var d=Bc.href.split("#")[0]+"#"+c;Cc?"#"+c!==window.location.hash&&history[yc?"replaceState":"pushState"]("",document.title,d):yc?Bc.replace(d):Bc.hash=c,yc=!0,sc=setTimeout(function(){uc=!1},60)};ya("History",{publicMethods:{initHistory:function(){if(e.extend(i,Dc,!0),i.history){Bc=window.location,Ac=!1,zc=!1,yc=!1,xc=Ec(),Cc="pushState"in history,xc.indexOf("gid=")>-1&&(xc=xc.split("&gid=")[0],xc=xc.split("?gid=")[0]),Ba("afterChange",f.updateURL),Ba("unbindEvents",function(){e.unbind(window,"hashchange",f.onHashChange)});var a=function(){wc=!0,zc||(Ac?history.back():xc?Bc.hash=xc:Cc?history.pushState("",document.title,Bc.pathname+Bc.search):Bc.hash=""),Fc()};Ba("unbindEvents",function(){l&&a()}),Ba("destroy",function(){wc||a()}),Ba("firstUpdate",function(){m=Gc().pid});var b=xc.indexOf("pid=");b>-1&&(xc=xc.substring(0,b),"&"===xc.slice(-1)&&(xc=xc.slice(0,-1))),setTimeout(function(){j&&e.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){return Ec()===xc?(zc=!0,void f.close()):void(uc||(vc=!0,f.goTo(Gc().pid),vc=!1))},updateURL:function(){Fc(),vc||(yc?rc=setTimeout(Hc,800):Hc())}}}),e.extend(f,db)};return a});


/* plugins/photoswipe/trunk/lib/photoswipe/photoswipe-ui-default.min.js */

!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),c.href?c.hasAttribute("download")?!0:(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1):!1},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&.95>a?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&.9>b?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;f>g;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});


/* plugins/photoswipe/trunk/photoswipe_insert.js?1478167024 */
function photoshow_hover(){
var me=this;
var a=photoshow_identify(me);
if(a){
$(me).addClass('photoshow');
$(me).removeClass('cboxElement');
}
}
function photoshow(){
var imgs=[],
g=[];
var a=photoshow_identify(this),
index=0;
if(!a)return;
var idx=0;
if(photoswipe.gallery){
$(photoswipe.selector)
.each(function(i,e){
var b=photoshow_identify(e);
if(b){
if(!a.rel||b.rel==a.rel){
imgs.push(b);
if(b.src==a.src)index=idx;
idx++;
}
}
});
}else{
imgs.push(a);
}
if(photoswipe.debug){
console.log(JSON.stringify(imgs));
}
photoshow_gallery(imgs,index);
return false;
}
function photoshow_identify(me){
var me=$(me),a={};
if(me.is('a')){
if(!me.attr('type').match(/image\/(jpeg|gif|png)/)){
return null;
}
a.src=me.attr('href');
a.w=me.attr('data-photo-w');
a.h=me.attr('data-photo-h');
if(!(a.src&&a.w&&a.h)){
return;
}
a.thumbnail=me.find('img');
a.rel=me.attr('rel')||a.thumbnail.attr('rel');
}else if(me.is('img')){
var photosrc=me.attr('data-photo');
a.thumbnail=me;
if(photosrc){
a.src=photosrc.replace(/__\.__/g,'.');
a.w=parseInt(me.attr('data-photo-w'));
a.h=parseInt(me.attr('data-photo-h'));
}else{
a.src=me.attr('src');
a.w=parseInt(me.attr('naturalWidth'));
a.h=parseInt(me.attr('naturalHeight'));
}
a.rel=me.attr('rel');
}else{
return;
}
a.title="";
var p=me.parents('figure').find('figcaption');
if(p.length){
a.title=p.html();
}
if(!a.title){
me
.parents('dt')
.parents('dl')
.find('dt.spip_doc_titre, dd.spip_doc_descriptif')
.each(function(i,e){
a.title+=e.outerHTML;
});
}
if(!a.title){
a.title=me.attr('title');
}
if(me.is('a')||a.w>me.width()||a.w>$(window).width()||a.h>$(window).height()){
return a;
}
}
function photoshow_gallery(items,index){
var pswpElement=document.querySelectorAll('.pswp')[0];
var options={
index:index,
shareEl:false,
fullscreenEl:false,
loop:false,
addCaptionHTMLFn:function(item,captionEl,isFake){
if(!item.title){
captionEl.children[0].innerHTML='';
return false;
}
captionEl.children[0].innerHTML=item.title;
return true;
},
getThumbBoundsFn:function(index){
var thumbnail=items[index].thumbnail[0];
if(!thumbnail)return;
var pageYScroll=window.pageYOffset||document.documentElement.scrollTop;
var rect=thumbnail.getBoundingClientRect();
return{
x:rect.left,
y:rect.top+pageYScroll,
w:rect.width
};
}
};
gallery=new PhotoSwipe(pswpElement,PhotoSwipeUI_Default,items,options);
gallery.init();
}
function photoswipe_init(){
$.ajaxSetup({cache:true});
$('<div>')
.html('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"> <div class="pswp__bg"></div> <div class="pswp__scroll-wrap"> <div class="pswp__container"> <div class="pswp__item"></div> <div class="pswp__item"></div> <div class="pswp__item"></div> </div> <div class="pswp__ui pswp__ui--hidden"> <div class="pswp__top-bar"> <div class="pswp__counter"></div> <button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> <div class="pswp__preloader"> <div class="pswp__preloader__icn"> <div class="pswp__preloader__cut"> <div class="pswp__preloader__donut"></div> </div> </div> </div> </div> <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"> <div class="pswp__share-tooltip"></div> </div> <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"> </button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"> </button> <div class="pswp__caption"> <div class="pswp__caption__center"></div> </div> </div> </div></div>')
.appendTo('body');
}
$(function(){
photoswipe_init();
if(!!$.fn.on){
$(document).on("mouseover",photoswipe.selector,photoshow_hover);
$(document).on("click",photoswipe.selector,photoshow);
}else if(!!$.fn.live){
$(photoswipe.selector).live("mouseover",photoshow_hover);
$(photoswipe.selector).live("click",photoshow);
}
});


/* plugins/medias_responsive_mod/squelettes/javascript/portfolio_ligne.js */

if(typeof portfolio_ligne_marge==='undefined')var portfolio_ligne_marge=10;
if(typeof portfolio_ligne_taille==='undefined')var portfolio_ligne_taille=300;
function calculer_portfolio_ligne(){
$("ul.portfolio_ligne + ul.portfolio_ligne").each(function(){
var t=$(this);
var contenu=t.html();
t.prev("ul.portfolio_ligne").append(contenu);
t.remove();
});
$(".portfolio_ligne").each(function(){
var m_right="margin-right";
var m_left="margin-left";
if($(this).css("direction")=="rtl"){
m_right="margin-left";
m_left="margin-right";
}
$(this).css("padding",0).css("padding-bottom",-1*portfolio_ligne_marge+"px")
.find("li").css(m_right,portfolio_ligne_marge+"px")
.css("margin-bottom",portfolio_ligne_marge+"px")
.css("clear","");
var l_max=$(this).width();
var taille_max=portfolio_ligne_taille;
if(l_max>1400)taille_max*=1.2;
else if(l_max<=1024&&l_max>768)taille_max*=0.9;
else if(l_max<=768&&l_max>520)taille_max*=0.8;
else if(l_max<=520&&l_max>420)taille_max*=0.7;
else if(l_max<=420)taille_max*=0.6;
var num_deb=1;
var num=0;
var l_total=0;
var l_temp=200;
var l_cont=200;
var h_cont=200;
var rapport=1;
var r_cont=new Array();
$(this).find("li").each(function(){
num++
l_cont=$(this).attr("data-width");
h_cont=$(this).attr("data-height");
r_cont[num]=l_cont/h_cont;
l_temp=r_cont[num]*taille_max;
if(l_total+l_temp>l_max-((num-1)-num_deb)*portfolio_ligne_marge){
rapport=(l_max-((num-1)-num_deb)*portfolio_ligne_marge)/(l_total);
hauteur=taille_max*rapport;
hauteur_boite=Math.round(hauteur);
var total_ligne=0;
for(i=num_deb;i<num;i++){
var t=$(this).parent("ul").find("li:nth-child("+i+")");
if(total_ligne==0)t.css("clear","both");
var h=Math.round(hauteur*r_cont[i]);
if(i==num-1){
h=l_max-total_ligne;
t.css(m_right,"0");
total_ligne=0;
}else{
total_ligne+=h+portfolio_ligne_marge;
}
t.width(h);
t.find(".fond").height(hauteur_boite);
}
l_total=0;
num_deb=num;
}
l_total+=l_temp;
if($(this).is(":last-child")){
$(this).css(m_right,0);
var rapport=false;
if(l_total+((num-1)-num_deb)*portfolio_ligne_marge>0.3*l_max){
rapport=(l_max-((num-1)-num_deb)*portfolio_ligne_marge)/l_total;
hauteur=taille_max*rapport;
hauteur_boite=Math.round(hauteur);
}
var total_ligne=0;
for(i=num_deb;i<=num;i++){
var t=$(this).parent("ul").find("li:nth-child("+i+")");
if(!hauteur_boite){
if(rapport){
hauteur_boite=taille_max*rapport*1.3;
}else{
var hauteur_boite=taille_max*1.3;
}
}
var h=Math.round(hauteur_boite*r_cont[i]);
if(i==num&&rapport){
h=l_max-total_ligne;
total_ligne=0;
}else{
total_ligne+=h+portfolio_ligne_marge;
}
if(i==num_deb&&!rapport){
t.css(m_left,(l_max-total_ligne)/2);
t.css("clear","both");
}else{
t.css(m_left,"");
}
t.width(h);
t.find(".fond").height(hauteur_boite);
}
}
});
});
}
$(document).ready(calculer_portfolio_ligne);
$(window).on("resize",calculer_portfolio_ligne);


/* plugins/medias_responsive_mod/squelettes/javascript/medias_responsive.js */

function calculer_spip_documents() {
$(".spip_documents").each(function(){
var t=$(this);
var width=t.attr("data-w");
var parent=t.parent().width()-parseInt(t.css("margin-left"))-parseInt(t.css("margin-right"));
if(width>parent)t.width("auto");
else t.width(width);
if(t.hasClass("spip_documents_right")||t.hasClass("spip_documents_left")){
if(width>0.6*parent)t.addClass("spip_documents_center_forcer").css("width","auto");
else t.removeClass("spip_documents_center_forcer").css("width",width+"px");
}
if(t.hasClass("kenburns")){
calculer_top_documents_actifs(t,"kenburns");
}
if(t.hasClass("spip_documents_flip")){
calculer_top_documents_actifs(t,"flip");
}
});
}
function calculer_top_documents_actifs(this_img,type){
var offset=this_img.offset().top;
this_img.attr("data-top-"+type,offset);
}
function _declencher_documents_actifs(){
if(scrollT)var sTop=scrollT;
else var sTop=$(window).scrollTop();
var hauteur=$(window).height();
var limite_haut=sTop-0.2*hauteur;
if(limite_haut<0)limite_haut=0;
var limite_bas=sTop+0.8*hauteur;
$(".kenburns:not(.kenburns_actif)").each(function(){
this_img=$(this);
var h=this_img.attr("data-top-kenburns");
if(h<=limite_bas&&h>=limite_haut)this_img.addClass("kenburns_actif");
});
$(".spip_documents_flip:not(.spip_documents_flip_actif)").each(function(){
this_img=$(this);
var h=this_img.attr("data-top-flip");
if(h<=limite_bas&&h>=limite_haut)this_img.addClass("spip_documents_flip_actif");
});
}
$(document).ready(calculer_spip_documents);
$(window).smartresize(calculer_spip_documents);
$(window).on("load scroll touchmove",declencher_documents_actifs);
$(document).on("ajaxComplete",declencher_documents_actifs);
var didScroll_documents_actifs=false
function declencher_documents_actifs() {
didScroll_documents_actifs=true;
}
function render_documents_actifs(){
if(didScroll_documents_actifs){
didScroll_documents_actifs=false;
_declencher_documents_actifs()
}
}
(function animloop_documents_actifs(){
requestAnimationFrame(animloop_documents_actifs);
render_documents_actifs();
})();


/* plugins/modele-audio-video/javascript/swfobject.js */

var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return}f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return}if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return}}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return}var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return}var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return}AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();


/* plugins/scenes_animees/squelettes/javascript/rAF.js */

(function(){
var lastTime=0;
var vendors=['ms','moz','webkit','o'];
for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){
window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];
window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']
||window[vendors[x]+'CancelRequestAnimationFrame'];
}
if(!window.requestAnimationFrame)
window.requestAnimationFrame=function(callback,element){
var currTime=new Date().getTime();
var timeToCall=Math.max(0,16-(currTime-lastTime));
var id=window.setTimeout(function(){callback(currTime+timeToCall);},
timeToCall);
lastTime=currTime+timeToCall;
return id;
};
if(!window.cancelAnimationFrame)
window.cancelAnimationFrame=function(id){
clearTimeout(id);
};
}());


/* plugins/vivus_svg/javascript/pathformer.js */
'use strict';
function Pathformer(element){
if(typeof element==='undefined'){
throw new Error('Pathformer [constructor]: "element" parameter is required');
}
if(element.constructor===String){
element=document.getElementById(element);
if(!element){
throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
}
}
if(element.constructor instanceof window.SVGElement||/^svg$/i.test(element.nodeName)){
this.el=element;
}else{
throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
}
this.scan(element);
}
Pathformer.prototype.TYPES=['line','ellipse','circle','polygon','polyline','rect'];
Pathformer.prototype.ATTR_WATCH=['cx','cy','points','r','rx','ry','x','x1','x2','y','y1','y2'];
Pathformer.prototype.scan=function(svg){
var fn,element,pathData,pathDom,
elements=svg.querySelectorAll(this.TYPES.join(','));
for(var i=0;i<elements.length;i++){
element=elements[i];
fn=this[element.tagName.toLowerCase()+'ToPath'];
pathData=fn(this.parseAttr(element.attributes));
pathDom=this.pathMaker(element,pathData);
element.parentNode.replaceChild(pathDom,element);
}
};
Pathformer.prototype.lineToPath=function(element){
var newElement={};
newElement.d='M'+element.x1+','+element.y1+'L'+element.x2+','+element.y2;
return newElement;
};
Pathformer.prototype.rectToPath=function(element){
var newElement={},
x=parseFloat(element.x)||0,
y=parseFloat(element.y)||0,
width=parseFloat(element.width)||0,
height=parseFloat(element.height)||0;
newElement.d='M'+x+' '+y+' ';
newElement.d+='L'+(x+width)+' '+y+' ';
newElement.d+='L'+(x+width)+' '+(y+height)+' ';
newElement.d+='L'+x+' '+(y+height)+' Z';
return newElement;
};
Pathformer.prototype.polylineToPath=function(element){
var i,path;
var newElement={};
var points=element.points.trim().split(' ');
if(element.points.indexOf(',')===-1){
var formattedPoints=[];
for(i=0;i<points.length;i+=2){
formattedPoints.push(points[i]+','+points[i+1]);
}
points=formattedPoints;
}
path='M'+points[0];
for(i=1;i<points.length;i++){
if(points[i].indexOf(',')!==-1){
path+='L'+points[i];
}
}
newElement.d=path;
return newElement;
};
Pathformer.prototype.polygonToPath=function(element){
var newElement=Pathformer.prototype.polylineToPath(element);
newElement.d+='Z';
return newElement;
};
Pathformer.prototype.ellipseToPath=function(element){
var startX=element.cx-element.rx,
startY=element.cy;
var endX=parseFloat(element.cx)+parseFloat(element.rx),
endY=element.cy;
var newElement={};
newElement.d='M'+startX+','+startY+
'A'+element.rx+','+element.ry+' 0,1,1 '+endX+','+endY+
'A'+element.rx+','+element.ry+' 0,1,1 '+startX+','+endY;
return newElement;
};
Pathformer.prototype.circleToPath=function(element){
var newElement={};
var startX=element.cx-element.r,
startY=element.cy;
var endX=parseFloat(element.cx)+parseFloat(element.r),
endY=element.cy;
newElement.d='M'+startX+','+startY+
'A'+element.r+','+element.r+' 0,1,1 '+endX+','+endY+
'A'+element.r+','+element.r+' 0,1,1 '+startX+','+endY;
return newElement;
};
Pathformer.prototype.pathMaker=function(element,pathData){
var i,attr,pathTag=document.createElementNS('http://www.w3.org/2000/svg','path');
for(i=0;i<element.attributes.length;i++){
attr=element.attributes[i];
if(this.ATTR_WATCH.indexOf(attr.name)===-1){
pathTag.setAttribute(attr.name,attr.value);
}
}
for(i in pathData){
pathTag.setAttribute(i,pathData[i]);
}
return pathTag;
};
Pathformer.prototype.parseAttr=function(element){
var attr,output={};
for(var i=0;i<element.length;i++){
attr=element[i];
if(this.ATTR_WATCH.indexOf(attr.name)!==-1&&attr.value.indexOf('%')!==-1){
throw new Error('Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into \'path\' tags. Please use \'viewBox\'.');
}
output[attr.name]=attr.value;
}
return output;
};


/* plugins/vivus_svg/javascript/vivus.js */
'use strict';
var requestAnimFrame,cancelAnimFrame,parsePositiveInt;
function Vivus(element,options,callback){
this.isReady=false;
this.setElement(element,options);
this.setOptions(options);
this.setCallback(callback);
if(this.isReady){
this.init();
}
}
Vivus.LINEAR=function(x){return x;};
Vivus.EASE=function(x){return-Math.cos(x*Math.PI)/2+0.5;};
Vivus.EASE_OUT=function(x){return 1-Math.pow(1-x,3);};
Vivus.EASE_IN=function(x){return Math.pow(x,3);};
Vivus.EASE_OUT_BOUNCE=function(x){
var base=-Math.cos(x*(0.5*Math.PI))+1,
rate=Math.pow(base,1.5),
rateR=Math.pow(1-x,2),
progress=-Math.abs(Math.cos(rate*(2.5*Math.PI)))+1;
return(1-rateR)+(progress*rateR);
};
Vivus.prototype.setElement=function(element,options){
if(typeof element==='undefined'){
throw new Error('Vivus [constructor]: "element" parameter is required');
}
if(element.constructor===String){
element=document.getElementById(element);
if(!element){
throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
}
}
this.parentEl=element;
if(options&&options.file){
var objElm=document.createElement('object');
objElm.setAttribute('type','image/svg+xml');
objElm.setAttribute('data',options.file);
objElm.setAttribute('built-by-vivus','true');
element.appendChild(objElm);
element=objElm;
}
switch(element.constructor){
case window.SVGSVGElement:
case window.SVGElement:
this.el=element;
this.isReady=true;
break;
case window.HTMLObjectElement:
var onLoad,self;
self=this;
onLoad=function(e){
if(self.isReady){
return;
}
self.el=element.contentDocument&&element.contentDocument.querySelector('svg');
if(!self.el&&e){
throw new Error('Vivus [constructor]: object loaded does not contain any SVG');
}
else if(self.el){
if(element.getAttribute('built-by-vivus')){
self.parentEl.insertBefore(self.el,element);
self.parentEl.removeChild(element);
self.el.setAttribute('width','100%');
self.el.setAttribute('height','100%');
}
self.isReady=true;
self.init();
return true;
}
};
if(!onLoad()){
element.addEventListener('load',onLoad);
}
break;
default:
throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
}
};
Vivus.prototype.setOptions=function(options){
var allowedTypes=['delayed','async','oneByOne','scenario','scenario-sync'];
var allowedStarts=['inViewport','manual','autostart'];
if(options!==undefined&&options.constructor!==Object){
throw new Error('Vivus [constructor]: "options" parameter must be an object');
}
else{
options=options||{};
}
if(options.type&&allowedTypes.indexOf(options.type)===-1){
throw new Error('Vivus [constructor]: '+options.type+' is not an existing animation `type`');
}
else{
this.type=options.type||allowedTypes[0];
}
if(options.start&&allowedStarts.indexOf(options.start)===-1){
throw new Error('Vivus [constructor]: '+options.start+' is not an existing `start` option');
}
else{
this.start=options.start||allowedStarts[0];
}
this.isIE=(window.navigator.userAgent.indexOf('MSIE')!==-1||window.navigator.userAgent.indexOf('Trident/')!==-1||window.navigator.userAgent.indexOf('Edge/')!==-1);
this.duration=parsePositiveInt(options.duration,120);
this.delay=parsePositiveInt(options.delay,null);
this.dashGap=parsePositiveInt(options.dashGap,1);
this.forceRender=options.hasOwnProperty('forceRender')?!!options.forceRender:this.isIE;
this.selfDestroy=!!options.selfDestroy;
this.onReady=options.onReady;
this.frameLength=this.currentFrame=this.map=this.delayUnit=this.speed=this.handle=null;
this.ignoreInvisible=options.hasOwnProperty('ignoreInvisible')?!!options.ignoreInvisible:false;
this.animTimingFunction=options.animTimingFunction||Vivus.LINEAR;
this.pathTimingFunction=options.pathTimingFunction||Vivus.LINEAR;
if(this.delay>=this.duration){
throw new Error('Vivus [constructor]: delay must be shorter than duration');
}
};
Vivus.prototype.setCallback=function(callback){
if(!!callback&&callback.constructor!==Function){
throw new Error('Vivus [constructor]: "callback" parameter must be a function');
}
this.callback=callback||function(){};
};
Vivus.prototype.mapping=function(){
var i,paths,path,pAttrs,pathObj,totalLength,lengthMeter,timePoint;
timePoint=totalLength=lengthMeter=0;
paths=this.el.querySelectorAll('path');
for(i=0;i<paths.length;i++){
path=paths[i];
if(this.isInvisible(path)){
continue;
}
pathObj={
el:path,
length:Math.ceil(path.getTotalLength())
};
if(isNaN(pathObj.length)){
if(window.console&&console.warn){
console.warn('Vivus [mapping]: cannot retrieve a path element length',path);
}
continue;
}
this.map.push(pathObj);
path.style.strokeDasharray=pathObj.length+' '+(pathObj.length+this.dashGap*2);
path.style.strokeDashoffset=pathObj.length+this.dashGap;
pathObj.length+=this.dashGap;
totalLength+=pathObj.length;
this.renderPath(i);
}
totalLength=totalLength===0?1:totalLength;
this.delay=this.delay===null?this.duration/3:this.delay;
this.delayUnit=this.delay/(paths.length>1?paths.length-1:1);
for(i=0;i<this.map.length;i++){
pathObj=this.map[i];
switch(this.type){
case'delayed':
pathObj.startAt=this.delayUnit*i;
pathObj.duration=this.duration-this.delay;
break;
case'oneByOne':
pathObj.startAt=lengthMeter/totalLength*this.duration;
pathObj.duration=pathObj.length/totalLength*this.duration;
break;
case'async':
pathObj.startAt=0;
pathObj.duration=this.duration;
break;
case'scenario-sync':
path=pathObj.el;
pAttrs=this.parseAttr(path);
pathObj.startAt=timePoint+(parsePositiveInt(pAttrs['data-delay'],this.delayUnit)||0);
pathObj.duration=parsePositiveInt(pAttrs['data-duration'],this.duration);
timePoint=pAttrs['data-async']!==undefined?pathObj.startAt:pathObj.startAt+pathObj.duration;
this.frameLength=Math.max(this.frameLength,(pathObj.startAt+pathObj.duration));
break;
case'scenario':
path=pathObj.el;
pAttrs=this.parseAttr(path);
pathObj.startAt=parsePositiveInt(pAttrs['data-start'],this.delayUnit)||0;
pathObj.duration=parsePositiveInt(pAttrs['data-duration'],this.duration);
this.frameLength=Math.max(this.frameLength,(pathObj.startAt+pathObj.duration));
break;
}
lengthMeter+=pathObj.length;
this.frameLength=this.frameLength||this.duration;
}
};
Vivus.prototype.drawer=function(){
var self=this;
this.currentFrame+=this.speed;
if(this.currentFrame<=0){
this.stop();
this.reset();
this.callback(this);
}else if(this.currentFrame>=this.frameLength){
this.stop();
this.currentFrame=this.frameLength;
this.trace();
if(this.selfDestroy){
this.destroy();
}
this.callback(this);
}else{
this.trace();
this.handle=requestAnimFrame(function(){
self.drawer();
});
}
};
Vivus.prototype.trace=function(){
var i,progress,path,currentFrame;
currentFrame=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength;
for(i=0;i<this.map.length;i++){
path=this.map[i];
progress=(currentFrame-path.startAt)/path.duration;
progress=this.pathTimingFunction(Math.max(0,Math.min(1,progress)));
if(path.progress!==progress){
path.progress=progress;
path.el.style.strokeDashoffset=Math.floor(path.length*(1-progress));
this.renderPath(i);
}
}
};
Vivus.prototype.renderPath=function(index){
if(this.forceRender&&this.map&&this.map[index]){
var pathObj=this.map[index],
newPath=pathObj.el.cloneNode(true);
pathObj.el.parentNode.replaceChild(newPath,pathObj.el);
pathObj.el=newPath;
}
};
Vivus.prototype.init=function(){
this.frameLength=0;
this.currentFrame=0;
this.map=[];
new Pathformer(this.el);
this.mapping();
this.starter();
if(this.onReady){
this.onReady(this);
}
};
Vivus.prototype.starter=function(){
switch(this.start){
case'manual':
return;
case'autostart':
this.play();
break;
case'inViewport':
var self=this,
listener=function(){
if(self.isInViewport(self.parentEl,1)){
self.play();
window.removeEventListener('scroll',listener);
}
};
window.addEventListener('scroll',listener);
listener();
break;
}
};
Vivus.prototype.getStatus=function(){
return this.currentFrame===0?'start':this.currentFrame===this.frameLength?'end':'progress';
};
Vivus.prototype.reset=function(){
return this.setFrameProgress(0);
};
Vivus.prototype.finish=function(){
return this.setFrameProgress(1);
};
Vivus.prototype.setFrameProgress=function(progress){
progress=Math.min(1,Math.max(0,progress));
this.currentFrame=Math.round(this.frameLength*progress);
this.trace();
return this;
};
Vivus.prototype.play=function(speed){
if(speed&&typeof speed!=='number'){
throw new Error('Vivus [play]: invalid speed');
}
this.speed=speed||1;
if(!this.handle){
this.drawer();
}
return this;
};
Vivus.prototype.stop=function(){
if(this.handle){
cancelAnimFrame(this.handle);
this.handle=null;
}
return this;
};
Vivus.prototype.destroy=function(){
this.stop();
var i,path;
for(i=0;i<this.map.length;i++){
path=this.map[i];
path.el.style.strokeDashoffset=null;
path.el.style.strokeDasharray=null;
this.renderPath(i);
}
};
Vivus.prototype.isInvisible=function(el){
var rect,
ignoreAttr=el.getAttribute('data-ignore');
if(ignoreAttr!==null){
return ignoreAttr!=='false';
}
if(this.ignoreInvisible){
rect=el.getBoundingClientRect();
return!rect.width&&!rect.height;
}
else{
return false;
}
};
Vivus.prototype.parseAttr=function(element){
var attr,output={};
if(element&&element.attributes){
for(var i=0;i<element.attributes.length;i++){
attr=element.attributes[i];
output[attr.name]=attr.value;
}
}
return output;
};
Vivus.prototype.isInViewport=function(el,h){
var scrolled=this.scrollY(),
viewed=scrolled+this.getViewportH(),
elBCR=el.getBoundingClientRect(),
elHeight=elBCR.height,
elTop=scrolled+elBCR.top,
elBottom=elTop+elHeight;
h=h||0;
return(elTop+elHeight*h)<=viewed&&(elBottom)>=scrolled;
};
Vivus.prototype.docElem=window.document.documentElement;
Vivus.prototype.getViewportH=function(){
var client=this.docElem.clientHeight,
inner=window.innerHeight;
if(client<inner){
return inner;
}
else{
return client;
}
};
Vivus.prototype.scrollY=function(){
return window.pageYOffset||this.docElem.scrollTop;
};
requestAnimFrame=(function(){
return(
window.requestAnimationFrame||
window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||
window.oRequestAnimationFrame||
window.msRequestAnimationFrame||
function(callback){
return window.setTimeout(callback,1000/60);
}
);
})();
cancelAnimFrame=(function(){
return(
window.cancelAnimationFrame||
window.webkitCancelAnimationFrame||
window.mozCancelAnimationFrame||
window.oCancelAnimationFrame||
window.msCancelAnimationFrame||
function(id){
return window.clearTimeout(id);
}
);
})();
parsePositiveInt=function(value,defaultValue){
var output=parseInt(value,10);
return(output>=0)?output:defaultValue;
};


/* plugins/vivus_svg/javascript/vivus_svg.js */

var vivus_anim=new Array();
var vivus_num=0;
function charger_vivus(){
$(".spip_vivus_svg").each(function(){
vivus_num++;
el=$(this);
var id=el.attr("id");
var file=el.attr("data-fichier");
$("#"+id).attr("data-visus-num",vivus_num).load(file+" svg",function() {
var num=$(this).attr("data-visus-num");
$(this).find("svg").attr("id",id+"anim").attr("data-vivus_num",num)
.attr("width",$(this).width()).attr("height",$(this).height())
.attr("preserveAspectRatio","xMidYMid slice");
$(this).find("[fill]").each(function() {
$(this).attr("data-fill",$(this).attr("fill")).removeAttr("fill");
});
$(this).find(":not([data-fill])").each(function() {
if(fill=$(this)[0].style.fill){
$(this).attr("data-css-fill",fill).css("fill","none");
}
else{
if(fill=$(this).parent("[data-fill]").attr("data-fill")){
$(this).attr("data-css-fill",fill);
}
else $(this).attr("data-css-fill","black").css("fill","none");
}
});
if(color=$(this).attr("data-color")){
$(this).find("*").css("stroke","#"+color);
}
if(epaisseur=$(this).attr("data-stroke")){
$(this).find("*").css("stroke-width",epaisseur);
}
var duration=$(this).attr("data-duration");
if(!duration)duration=100;
vivus_anim[num]=new Vivus(id+"anim",{type:'oneByOne',duration:duration,start:"manual"},function(t){vivusCallback(t)});
});
});
}
function vivus_next_fill(el,timing){
el.find("[data-fill], [data-css-fill]").first().each(function(){
if(datafill=$(this).attr("data-fill")){
$(this).attr("fill",datafill).removeAttr("data-fill").css("fill","");
}
if($(this).attr("data-css-fill"))$(this).css("fill",$(this).attr("data-css-fill")).removeAttr("data-css-fill");
setTimeout(function() {vivus_next_fill(el,timing);},timing);
});
}
function vivusCallback(t){
el=$("#"+t.el.id);
vivus_next_fill(el,5);
}
function calculer_top_vivus(){
$(".spip_vivus").each(function() {
_calculer_top_vivus($(this));
});
declencher_vivus();
}
function _calculer_top_vivus(this_img){
var offset=this_img.offset().top;
this_img.attr("data-top-vivus",offset);
}
function _declencher_vivus(sTop){
if(scrollT)var sTop=scrollT;
else var sTop=$(window).scrollTop();
var hauteur=$(window).height();
var limite_haut=sTop-0.2*hauteur;
if(limite_haut<0)limite_haut=0;
var limite_bas=sTop+0.8*hauteur;
$(".spip_vivus:not(.vivus_active)").each(function(){
this_img=$(this);
var h=this_img.attr("data-top-vivus");
if(h<=limite_bas&&h>=limite_haut){
var num=this_img.find("svg").attr("data-vivus_num");
if(num>0){
vivus_anim[num].play();
this_img.addClass("vivus_active");
}
}
});
}
$(document).ready(charger_vivus);
$(window).smartresize(calculer_top_vivus);
$(window).on("load scroll touchmove",declencher_vivus);
$(document).on("ajaxComplete",calculer_top_vivus);
var didScroll_vivus=false
function declencher_vivus() {
didScroll_vivus=true;
}
function render_vivus(){
if(didScroll_vivus){
didScroll_vivus=false;
_declencher_vivus()
}
}
(function animloop_vivus(){
requestAnimationFrame(animloop_vivus);
render_vivus();
})();


/* plugins/scenes_animees/squelettes/javascript/scenes_animees.js */

var scrollT=false;
function calculer_top_scenes(){
$(".spip_scene").each(function() {
_calculer_top_scenes($(this));
});
declencher_scene();
}
function _calculer_top_scenes(this_img){
var offset=this_img.offset().top;
this_img.attr("data-top-scene",offset);
}
function _declencher_scene(sTop){
if(scrollT)var sTop=scrollT;
else var sTop=$(window).scrollTop();
var hauteur=$(window).height();
var limite_haut=sTop-0.2*hauteur;
if(limite_haut<0)limite_haut=0;
var limite_bas=sTop+0.8*hauteur;
$(".spip_scene:not(.scene_active)").each(function(){
this_img=$(this);
var h=this_img.attr("data-top-scene");
if(h<=limite_bas&&h>=limite_haut)this_img.addClass("scene_active");
});
}
$(document).ready(calculer_top_scenes);
$(window).smartresize(calculer_top_scenes);
$(window).on("load scroll touchmove",declencher_scene);
$(document).on("ajaxComplete",declencher_scene);
var didScroll_scene=false
function declencher_scene() {
didScroll_scene=true;
}
function render_scene(){
if(didScroll_scene){
didScroll_scene=false;
_declencher_scene()
}
}
(function animloop_scene(){
requestAnimationFrame(animloop_scene);
render_scene();
})();


