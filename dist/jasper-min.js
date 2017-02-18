var Jasper=function(){var jA,emptyArray=[],slice=emptyArray.slice,filter=emptyArray.filter,queue=[],jasper={},isArray=Array.isArray||function(obj){return obj instanceof Array},isObject=function(obj){return obj instanceof Object},isEmptyOrWhiteSpace=function(str){return str===null||str.match(/^\s*$/)!==null},dropzoneNumber=0;function compact(array){return filter.call(array,function(item){return item!=null})}jasper.init=function(selector,context){var dom;if(typeof selector=="string"){if(selector[0]==
"<")return jasper.fragment(selector);selector=selector.trim();if(typeof context!="undefined")return jA(selector).find(context);dom=jasper.select(document,selector)}else if(jasper.isJasper(selector))return selector;else if(isArray(selector))dom=compact(selector);else if(isObject(selector))dom=[selector],selector=null;return jasper.Jasper(dom,selector)};jasper.fragment=function(selector){var noContent=/^<([^\/].*?)>$/,regEx=/(?:<)(.*?)( .*?)?(?:>)/,match=regEx.exec(selector),mainAll=match[0],mainElement=
match[1],mainAttrs=match[2],hasAttr=typeof mainAttrs!=="undefined",hasContent=!mainAll.match(noContent);if(hasContent)var contentRegEx=new RegExp(mainAll+"(.*?)(?:</"+mainElement+">)$"),contentMatch=contentRegEx.exec(selector),content=contentMatch[1];if(hasAttr){var attrs=mainAttrs.split(/(?:\s)?(.*?)=(?:"|')(.*?)(?:"|')/).filter(Boolean),attrObj={};for(var i=0;i<attrs.length;i++)if((i+2)%2==0)attrObj[attrs[i]]=attrs[i+1]}var $element=jA(document.createElement(mainElement));if(hasAttr)$element.attr(attrObj);
if(hasContent)$element.html(content);return $element};jasper.isJasper=function(obj){return obj instanceof jasper.Jasper};jasper.select=function(element,selector){try{return slice.call(element.querySelectorAll(selector))}catch(e){console.log("TOCAS ERROR: Something wrong while selecting "+selector+" element.")}};jasper.Jasper=function(dom,selector){dom=dom||[];dom.__proto__=jA.fn;dom.selector=selector||"";return dom};jA=function(selector,context){if(typeof selector=="function")document.addEventListener("DOMContentLoaded",
selector);else return jasper.init(selector,context)};jA.fn={each:function(callback){emptyArray.every.call(this,function(index,element){return callback.call(index,element,index)!==false});return this},slice:function(){return jA(slice.apply(this,arguments))},eq:function(index){return this.slice(index,index+1)}};if(!window.jA)window.jA=jA}(Jasper);function $_(Selector){var Obj=document.querySelectorAll(Selector);return Obj.length==0?false:Obj.length==1?Obj[0]:Obj}
jA.deferred=function(){this._always=[];this._done=[];this._fail=[]};
jA.deferred.prototype={execute:function(list,args){var i=list.length;args=Array.prototype.slice.call(args);while(i--)list[i].apply(null,args)},anyway:function(){this.execute(this._always,arguments);return this},resolve:function(){this.execute(this._done,arguments);return this},reject:function(){this.execute(this._fail,arguments);return this},then:function(){return this},done:function(callback){this._done.push(callback);return this},fail:function(callback){this._fail.push(callback);return this},always:function(callback){this._always.push(callback);
return this}};jA.isJSON=function(string){string=typeof string!=="string"?JSON.stringify(string):string;try{string=JSON.parse(string)}catch(e){return false}if(typeof string==="object"&&string!==null)return true;return false};jA.inArray=function(item,targetArray){return targetArray.indexOf(item)};jA.isNumeric=function(number){return!isNaN(parseFloat(Number))&&isFinite(Number)};
jA.escapeHTML=function(string){if(typeof string==="string")return string.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");else return null};jA.unescapeHTML=function(string){if(typeof string==="string")return string.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#039;/g,"'");else return null};jA.nl2br=function(string){if(typeof string==="string")return string.replace(/\n/g,"<br>");else return null};
jA.br2nl=function(string){if(typeof string==="string")return string.replace(/<br>/g,"\r");else return null};jA.map=function(array,callback){if(Object.prototype.toString.call(array)==="[object Array]")return array.map(callback);return[]};jA.rand=function(min,max){return Math.floor(Math.random()*(max-min+1)+min)};var jAsperGuids=[];
jA.guid=function(){var guid;function s4(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}do guid=s4()+s4()+"-"+s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+s4();while(jAsperGuids.indexOf(guid)!=-1);jAsperGuids.push(guid);return guid};jA.digits=function(number){return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"jA1,")};jA.isset=function(){var a=arguments,l=a.length,i=0,undef;if(l===0)throw new Error("Empty isset");while(i!==l){if(a[i]===undef||a[i]===null)return false;i++}return true};
jA.setTimeout=function(timer){var d=new jA.deferred;var that=this;setTimeout(function(r){d.resolve(r)},timer);return d};jA.fn.attr=function(attr,value){value=value===null?null:value;if(typeof attr==="object"&&!value)return this.each(function(){for(var i in attr)this.setAttribute(i,attr[i])});else if(attr!=null&&value!=null)return this.each(function(){this.setAttribute(attr,value)});else if(attr!=null&&!value)return 0 in this?this[0].getAttribute(attr):null};jA.fn.removeAttr=function(attr){return this.each(function(){this.removeAttribute(attr)})};
jA.fn.val=function(value){if(value==null)if(0 in this)if(this[0].nodeName=="SELECT")return this[0].options[this[0].selectedIndex].value;else return this[0].value;else return null;else return this.each(function(){this.value=value})};jA.fn.empty=function(){return this.each(function(){if(this.innerHTML!="undefined")this.innerHTML="";if(this.value!="undefined")this.value=""})};
jA.fn.text=function(text){if(text===undefined)return 0 in this?this[0].innerText:null;else return this.each(function(){this.textContent=text})};jA.fn.html=function(html){html=html||null;if(!html)return 0 in this?this[0].innerHTML:null;else return this.each(function(){this.innerHTML=html})};jA.fn.fdPush=function(obj){for(var i in obj)this[0].append(i,obj[i]);return this[0]};
jA.fn.map=function(callback){var array=[];this.each(function(){var result=callback.call(this);if(result)array.push(result)});return array};
jA.cookie=function(name,value,options){if(value!=null){var expire=options instanceof Object&&typeof options.expires!="undefined"?options.expires:365,domain=options instanceof Object&&typeof options.domain!="undefined"?" domain="+options.domain+";":"",path=" path="+(options instanceof Object&&typeof options.path!="undefined"?options.path:"/")+";";var d=new Date;if(!options instanceof Object&&options===-1)d.setTime(d.getTime()-24*60*60*1E3);else d.setTime(d.getTime()+expire*24*60*60*1E3);var expires=
"expires="+d.toUTCString()+";";document.cookie=name+"="+(value||"")+"; "+expires+domain+path}else{var cookieName=name+"=",list=document.cookie.split(";");for(var i in list){var cookie=list[i];while(cookie.charAt(0)==" ")cookie=cookie.substring(1);if(cookie.indexOf(cookieName)!=-1)return cookie.substring(cookieName.length,cookie.length)}}return"undefined"};
jA.fn.cssAnimate=function(animate,callback,time){if(typeof callback=="number"&&typeof time!="function")time=callback;if(typeof callback=="number"&&typeof time=="function"){var trueCallback=time,trueTime=callback;callback=trueCallback,time=trueTime}var timer=parseInt((time/1E3).toString().replace(".",""),10);timer=time<1E3?"0"+timer:timer;time=isNaN(time)?"":" animated"+timer+"s";return this.each(function(){var that=this;jA(this).addClass(animate+" animated"+time).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
function(){jA(that).removeClass(animate+" animated"+time);if(typeof callback!=="undefined"&&callback!=null&&typeof callback!=="number")callback.call(that)})})};
jA.fn.css=function(property,value){var css="";if(property!=null&&value!=null)css=property+":"+value+";";else if(typeof property==="object"&&!Array.isArray(property)&&value==null)for(var i in property){if(property.hasOwnProperty(i))css+=i+":"+property[i]+";"}else if(Array.isArray(property)&&value==null){var cssObject={};this.each(function(){for(var i in property)cssObject[property[i]]=jA(this).getCss(property[i])});return cssObject}else if(property!=null&&value==null)return jA(this).getCss(property);
return this.each(function(){if(typeof this.style=="undefined")return;this.style.cssText=this.style.cssText+css})};jA.fn.hasClass=function(classes){if(0 in this)if(this[0].classList)return this[0].classList.contains(classes);else return(new RegExp("(^| )"+classes+"( |$)","gi")).test(this[0].className)};
jA.fn.classList=function(){var classes=[];if(0 in this)if(this[0].classList)for(var i=0;i<this[0].classList.length;i++)classes.push(this[0].classList[i]);else for(var i in this[0].className.split(" "))classes.push(this[0].className.split(" ")[i]);return classes};jA.fn.addClass=function(classes){if(classes===null)return;return this.each(function(){var list=classes.split(" ");for(var i in list){if(list[i]==="")continue;if(this.classList)this.classList.add(list[i]);else this.className+=" "+list[i]}})};
jA.fn.removeClass=function(classes){return this.each(function(){if(!classes)this.className="";else{var list=classes.split(" ");for(var i in list){if(list[i]=="")continue;if(this.classList)this.classList.remove(list[i]);else if(typeof this.className!=="undefined")this.className=this.className.replace(new RegExp("(^|\\b)"+classes.split(" ").join("|")+"(\\b|$)","gi")," ")}}})};
jA.fn.toggleClass=function(classes){return this.each(function(){var list,index,objClassList;list=classes.split(" ");for(var i in list)if(this.classList)this.classList.toggle(list[i]);else{objClassList=this.className.split(" ");index=list.indexOf(list[i]);if(index>=0)objClassList.splice(index,1);else objClassList.push(list[i]);this.className=list[i].join(" ")}})};jA.fn.getCss=function(property){try{return 0 in this?document.defaultView.getComputedStyle(this[0],null).getPropertyValue(property):null}catch(err){return null}};
jA.fn.validate=function(){var jAthis=jA(this),minlength=jAthis.attr("minlength"),maxlength=jAthis.attr("maxlength"),min=jAthis.attr("min"),max=jAthis.attr("max"),required=jAthis.attr("required")!=null,pattern=jAthis.attr("pattern"),type=jAthis.attr("type"),value=jAthis.val();if(required&&value=="")return"required";if(minlength!==null&&value.length<minlength)return"minlegnth";if(maxlength!==null&&value.length>maxlength)return"maxlegnth";if(min!==null&&parseInt(value)<min)return"min";if(max!==null&&
parseInt(value)>max)return"max";if(pattern!==null){var regEx=new RegExp(pattern.replace(/\//g,""));if(!regEx.test(value))return"pattern"}if(type!==null&&type=="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))return"email";return true};jA.fn.wrap=function(element){return this.each(function(){this.parentNode.insertBefore(element,this);element.appendChild(this)})};
jA.fn.append=function(html){if(html!=null&&typeof html=="object")return this.each(function(){this.appendChild(html)});else if(html!=null)return this.each(function(){this.innerHTML+=html})};jA.fn.after=function(html){if(html!=null)return this.each(function(){this.insertAdjacentHTML("afterend",html)})};jA.fn.before=function(html){if(html!=null)return this.each(function(){this.insertAdjacentHTML("beforeBegin",html)})};
jA.fn.prepend=function(html){if(html!=null)return this.each(function(){var template=document.createElement("template");template.innerHTML=html;if(typeof this.nodeType!=="undefined")if(this.firstChild)return this.insertBefore(template.content,this.firstChild);else return this.appendChild(template.content)})};jA.fn.appendTo=function(selector){return this.each(function(){var that=this;jA(selector).each(function(){this.appendChild(that,this.nextSibling)})})};
jA.fn.prependTo=function(selector){return this.each(function(){var that=this;jA(selector).each(function(){if(this.firstChild)return this.insertBefore(that,this.firstChild);else return this.appendChild(that)})})};jA.fn.insertAfter=function(selector){return this.each(function(){var that=this;jA(selector).each(function(){this.parentNode.insertBefore(that,this.nextSibling)})})};
jA.fn.insertBefore=function(selector){return this.each(function(){var that=this;jA(selector).each(function(){this.insertAdjacentHTML("beforeBegin",that)})})};jA.fn.template=function(){return jA(this.clone()[0].content).children()};jA.fn.clone=function(deep){deep=typeof deep=="undefined"?true:deep;var cloneList=[];this.each(function(){cloneList.push(this.cloneNode(deep))});return jA(cloneList)};jA.fn.remove=function(){return this.each(function(){this.parentNode.removeChild(this)})};
jA.fn.children=function(){var list=[];this.each(function(i,el){list.push.apply(list,el.children)});return jA(list)};jA.fn.find=function(selector){if(typeof selector!=="string")return null;var list=[];this.each(function(i,el){list.push.apply(list,el.querySelectorAll(selector))});return list.length?jA(list):null};jA.fn.parent=function(){return 0 in this?jA(this[0].parentNode):null};
jA.fn.parents=function(selector){var that=this,selector=selector||null,parents=[];if(selector!==null)var selector=jA(selector);while(that){that=jA(that).parent()[0];if(!that)break;if(selector==null||selector!==null&&Array.prototype.indexOf.call(selector,that)!==-1)parents.push(that)}return jA(parents)};jA.fn.closest=function(selector){var that=this,selector=jA(selector);while(true){that=jA(that).parent()[0];if(!that)return null;if(Array.prototype.indexOf.call(selector,that)!==-1)return jA(that)}};
jA.fn.contains=function(wants){var selector=jA(wants),isTrue=false;this.each(function(i,el){var children=el.childNodes;for(var si=0;si<selector.length;si++)if(Array.prototype.indexOf.call(children,selector[si])!=-1)isTrue=true});return isTrue};jA.fn.next=function(){if(0 in this){var next=this[0].nextElementSibling;if(next)return jA(next);else return null}else return null};jA.fn.prev=function(){if(0 in this){var prev=this[0].previousElementSibling;if(prev)return jA(prev);else return null}else return null};
jA.fn.hide=function(){return this.each(function(){jA(this).addClass("hidden")})};jA.fn.show=function(){return this.each(function(){jA(this).removeClass("hidden")})};jA.fn.isHidden=function(){return jA(this).hasClass("hidden")};jA.fn.toggle=function(){return this.each(function(){if(jA(this).hasClass("hidden"))jA(this).show();else jA(this).hide()})};
jA.fn.serialize=function(){var array=[];this.each(function(){var z,a;for(var z=0;z<this.elements.length;z++){var elements=this.elements[z],name=elements.name,value=elements.value;if(!name||elements.disabled||!value)continue;switch(elements.nodeName){case "INPUT":switch(elements.type){case "text":case "hidden":case "password":case "button":case "reset":case "submit":case "number":case "email":array.push(name+"="+encodeURIComponent(value));break;case "checkbox":case "radio":if(!elements.checked)continue;
array.push(name+"="+encodeURIComponent(value));break}break;case "TEXTAREA":array.push(name+"="+encodeURIComponent(value));break;case "SELECT":switch(elements.type){case "select-one":array.push(name+"="+encodeURIComponent(value));break;case "select-multiple":for(var a=0;a<elements.options.length;a++){var optionValue=elements.options[a].value;if(elements.options[a].selected)array.push(name+"="+encodeURIComponent(optionValue))}}break;case "BUTTON":switch(elements.type){case "reset":case "submit":case "button":array.push(name+
"="+encodeURIComponent(value))}}}});return array.join("&").toString()};jA.fn.formExplode=function(extraData){var formData={};var extraData=extraData||null;this.find("[name]").each(function(){if(this.type!=="file")formData[this.name]=this.value==""?undefined:this.value});if(extraData!==null)for(var name in extraData)formData[name]=extraData[name];return formData};
jA.fn.formValidate=function(rules,stopAtFirst){var pass=true,isFirst=true;rules=rules||null,stopAtFirst=stopAtFirst||false;jA(this).find("[name]").each(function(){var jAthis=jA(this),name=this.getAttribute("name"),validation=jAthis.validate();if(!pass&&!isFirst&&stopAtFirst)return false;if(validation===true){if(rules!==null&&rules[name]!==undefined&&rules[name].valid!==undefined)rules[name].valid.call(this);return true}pass=false;if(rules!==null)if(rules[name]!==undefined){if(rules[name][validation]!==
undefined)rules[name][validation].call(this);if(rules[name].invalid!==undefined)rules[name].invalid.call(this,name);isFirst=false}});return pass};
jA.binder=function(binds,rebind){rebind=rebind||false;for(var i in binds){var bindThis=function(target,events,bind){var event=events.split(" ");switch(target){case " window":case " Window":target=window;break;case " document":case " Document":target=document;break}for(var i in event){var e=event[i];if(e=="scrollBottom"){if(rebind)jA(target).off("scroll");jA(target).scrollBottom(bind)}else if(e=="ready"){if(rebind)jA(target).off("DOMContentLoaded");jA(target).ready(bind)}else if(e!=""){if(rebind)jA(target).off(e);
jA(target).on(e,bind)}}};var splits=i.split("|"),events=splits[0],targets=splits[1].split("&");for(var t in targets)if(typeof binds[i]!=="undefined"&&binds[i].isArray)for(var f in binds[i])bindThis(targets[t],events,binds[i][f]);else bindThis(targets[t],events,binds[i])}};jA.fn.mousedown=function(callback){return jA(this).on("mousedown",callback)};jA.fn.mouseup=function(callback){return jA(this).on("mouseup",callback)};jA.fn.keyup=function(callback){return jA(this).on("keyup",callback)};
jA.fn.mousemove=function(callback){return jA(this).on("mousemove",callback)};jA.fn.click=function(callback){return jA(this).on("click",callback)};jA.fn.dragstart=function(callback){return jA(this).on("dragstart",callback)};
jA.fn.longPress=function(callback,clickCallback,timer){if(!isNaN(clickCallback))timer=clickCallback;timer=timer||500;return this.each(function(){jA(this).mousedown(function(event){var that=this;that.ts_longPressed=false;this.ts_longPressTimer=setTimeout(function(){callback.call(that);that.ts_longPressed=true},timer);return false}).mouseup(function(event){if(!this.ts_longPressed)if(typeof clickCallback!=="undefined")clickCallback.call(this);clearTimeout(this.ts_longPressTimer);return false}).mousemove(function(event){clearTimeout(this.ts_longPressTimer);
return false})})};jA.fn.trigger=function(Event){return this.each(function(){this[Event]()})};jA.fn.scrollBottom=function(scroll,reachBottom){jA(this).on("scroll",function(){var distance=this.scrollHeight-this.scrollTop-this.clientHeight;if(typeof scroll!=="undefined"||scroll!=null)scroll.call(this,distance);if(distance==0&&typeof reachBottom!=="undefined")reachBottom.call(this,distance)})};jA.fn.ready=function(callback){if(0 in this)this[0].addEventListener("DOMContentLoaded",callback)};
jA.fn.focus=function(){return this.each(function(){this.focus()})};jA.fn.isBottom=function(){if(0 in this)if(this[0].scrollHeight-this[0].scrollTop-this[0].clientHeight==0)return true;else return false};jA.fn.delayKeyup=function(callback,ms){return this.each(function(){var timer=0,el=jA(this),that=this;jA(this).keyup(function(event){var event=event;clearTimeout(timer);timer=setTimeout(function(){callback.call(that,event)},ms)})})};
jA.fn.on=function(eventName,selector,handler,once){once=once||false;var hasSelector=true;if(typeof selector!=="string"){hasSelector=false;handler=selector}if(typeof handler!=="function")once=handler;return this.each(function(){if(typeof this.addEventListener=="undefined"){console.log("TOCAS ERROR: Event listener is not worked with this element.");return false}if(typeof this.ts_eventHandler=="undefined")this.ts_eventHandler={};var events=eventName.split(" ");for(var i in events){var event=events[i];
if(typeof this.ts_eventHandler[event]=="undefined")this.ts_eventHandler[event]={registered:false,list:[]};if(this.ts_eventHandler[event].registered===false){this.addEventListener(event,function(evt){if(typeof this.ts_eventHandler[event]!="undefined")for(var e in this.ts_eventHandler[event].list){if(typeof this.ts_eventHandler[event].list[e].selector!=="undefined"){var inSelector=false;jA(this.ts_eventHandler[event].list[e].selector).each(function(i,el){if(evt.target===el)inSelector=true});if(!inSelector)return}this.ts_eventHandler[event].list[e].func.call(this,
evt);if(this.ts_eventHandler[event].list[e].once)delete this.ts_eventHandler[event].list[e]}});this.ts_eventHandler[event].registered=true}var eventHandler=this.ts_eventHandler[event].list,data={func:handler,once:once};if(hasSelector)data.selector=selector;eventHandler.push(data);this.ts_eventHandler[event].list=eventHandler}})};jA.fn.one=function(eventName,selector,handler){return this.each(function(){jA(this).on(eventName,selector,handler,true)})};
jA.fn.off=function(eventName,handler){return this.each(function(){if(typeof this.ts_eventHandler=="undefined")return;if(typeof this.ts_eventHandler[eventName]=="undefined")return;if(handler==null){this.ts_eventHandler[eventName].list=[];return}for(var e in this.ts_eventHandler[eventName].list)if(handler===this.ts_eventHandler[eventName].list[e].func)delete this.ts_eventHandler[eventName].list[e]})};
jA.fn.avgColor=function(type){type=type||null;if(0 in this){var img=this[0];var canvas=document.createElement("canvas");canvas.width=img.width;canvas.height=img.height;var context=canvas.getContext("2d");context.drawImage(img,0,0,img.width,img.height);if(img.width<=0||img.height<=0)return false;var data=context.getImageData(0,0,img.width,img.height).data,r=0,g=0,b=0;for(var row=0;row<img.height;row++)for(var col=0;col<img.width;col++){r+=data[(img.width*row+col)*4];g+=data[(img.width*row+col)*4+1];
b+=data[(img.width*row+col)*4+2]}r/=img.width*img.height;g/=img.width*img.height;b/=img.width*img.height;r=Math.round(r);g=Math.round(g);b=Math.round(b);if(type!==null)switch(type.toUpperCase()){case "R":return r;break;case "G":return g;break;case "B":return b;break;case "RGB":return[r,g,b];break}return"#"+(r<<16|g<<8|b).toString(16)}else return null};
jA.fn.colorWheel=function(Sat,Hue){return this.each(function(){var el=this,context=el.getContext("2d"),width=parseInt(jA(this).css("width")),height=parseInt(jA(this).css("height")),cx=width/2,cy=height/2,radius=width/1,imageData,pixels,hue,sat,value,i=0,x,y,rx,ry,d,f,g,p,u,v,w,rgb;imageData=context.createImageData(width,height);pixels=imageData.data;for(y=0;y<height;y=y+1)for(x=0;x<width;x=x+1,i=i+4){rx=x-cx;ry=y-cy;d=rx*rx+ry*ry;if(d<radius*radius){hue=6*(Math.atan2(ry,rx)+Math.PI)/(2*Math.PI);sat=
Math.sqrt(d)/(width/2.3);g=Math.floor(hue);f=hue-g;u=255*(1-sat);v=255*(1-sat*f);w=255*(1-sat*(1-f));pixels[i]=[255,v,u,u,w,255,255][g];pixels[i+1]=[w,255,255,v,u,u,w][g];pixels[i+2]=[u,u,w,255,255,v,u][g];pixels[i+3]=255}}context.putImageData(imageData,0,0)})};
jA.fn.picker=function(Callback){if(typeof Callback!=="undefined")return this.each(function(){mouseDown=false;jA(this).mousedown(function(){mouseDown=true});jA(this).mouseup(function(){mouseDown=false});jA(this).mousemove(function(e){if(mouseDown){var c2d=this.getContext("2d"),rect=this.getBoundingClientRect(),x=e.clientX-rect.left,y=e.clientY-rect.top,color=c2d.getImageData(x,y,1,1).data;Callback(color)}})})};
jA.fn.grayColor=function(){return this.each(function(){var c2d=this.getContext("2d"),w=parseInt(jA(this).css("width")),h=parseInt(jA(this).css("height")),grd=c2d.createLinearGradient(w,0,0,0);grd.addColorStop(0,"black");grd.addColorStop(1,"white");c2d.fillStyle=grd;c2d.fillRect(0,0,w,h)})};
jA.fn.drawable=function(){return this.each(function(){var canvas=document.createElement("canvas");canvas.id=this.id+"-temp";canvas.width=this.width;canvas.height=this.height;canvas.className+=" "+"hidden";this.parentNode.appendChild(canvas);this.drawTemp=canvas.id;this.drawUsing="pencil";this.drawWidth=1;this.drawProcess=function(e){if(e.layerX||ev.layerX==0){e._x=e.layerX;e._y=e.layerY}else if(e.offsetX||e.offsetX==0){e._x=e.offsetX;e._y=e.offsetY}var tool=new this.drawTools[this.drawUsing];tool[e.type](e)};
jA(this).on("mousedown mouseup mousemove",this.drawProcess)})};
jA.fn.tool=function(tools){return this.each(function(){this.drawTools={};var canvas=this,c2d=this.getContext("2d"),list=tools.split(" ");for(var i in list)switch(list[i]){case "pencil":this.drawTools.pencil=function(){this.mousedown=function(e){canvas.drawSwitch=true;c2d.beginPath();c2d.moveTo(e._x,e._y)};this.mousemove=function(e){if(!canvas.drawSwitch)return;c2d.lineTo(e._x,e._y);c2d.lineCap="round";c2d.lineWidth=canvas.drawWidth;c2d.strokeStyle=canvas.drawColor;c2d.stroke()};this.mouseup=function(e){canvas.drawSwitch=
false}};break;case "rect":this.drawTools.rect=function(){this.mousedown=function(e){canvas.drawSwitch=true;canvas.x0=e._x;canvas.y0=e._y};this.mousemove=function(e){if(!canvas.drawSwitch)return;var x=Math.min(e._x,canvas.x0),y=Math.min(e._y,canvas.y0),w=Math.abs(e._x-canvas.x0),h=Math.abs(e._y-canvas.y0);c2d.clearRect(0,0,canvas.width,canvas.height);if(!w||!h)return;c2d.strokeStyle=canvas.drawColor;c2d.strokeRect(x,y,w,h)};this.mouseup=function(e){canvas.drawSwitch=false}};break}})};
jA.fn.changeColor=function(HEX){return this.each(function(){this.drawColor=typeof HEX!=="string"?ToHEX(HEX):HEX})};jA.fn.changeTool=function(tool){return this.each(function(){this.drawUsing=tool})};jA.fn.c2d=function(){return 0 in this?this[0].getContext("2d"):null};
jA.fn.linePreview=function(width,lineCap){width=width||1;lineCap=lineCap||"round";return this.each(function(){var c2d=this.getContext("2d");c2d.clearRect(0,0,this.width,this.height);c2d.beginPath();c2d.moveTo(20,20);c2d.bezierCurveTo(50,50,120,0,150,20);c2d.lineWidth=width;c2d.lineCap=lineCap;c2d.stroke()})};jA.fn.setLineWidth=function(width){width=width||1;return this.each(function(){this.drawWidth=width})};function ToHEX(rgb){return"#"+(rgb[0]<<16|rgb[1]<<8|rgb[2]).toString(16)}
jA.fn.tempCanvas=function(){return this.each(function(){var canvas=document.createElement("canvas");canvas.id=this.id+"-temp";canvas.width=this.width;canvas.height=this.height;canvas.className+=" "+"hidden";this.parentNode.appendChild(canvas);this.drawTemp=canvas.id})};jA.fn.updateCanvas=function(){return this.each(function(){var canvas=jA("#"+this.drawTemp)[0],c2do=this.getContext("2d"),c2d=canvas.getContext("2d");c2do.drawImage(canvas,0,0);c2d.clearRect(0,0,canvas.width,canvas.height)})};
jA.fn.genDate=function(type,direction){type=type||"day";direction=direction||"past";var now=new Date;return this.each(function(index,el){var year=now.getFullYear(),month=1,day=1;switch(type){case "year":for(var i=0;i<110;i++){var option=document.createElement("option");option.text=direction=="past"?year--:year++;el.add(option)}break;case "month":for(var i=0;i<12;i++){var option=document.createElement("option");option.text=month<10?"0"+month:month;month++;el.add(option)}break;case "day":for(var i=
0;i<31;i++){var option=document.createElement("option");option.text=day<10?"0"+day:day;day++;el.add(option)}break}})};
jA.geo=function(option){if(typeof option=="undefined")return false;var notSupported=typeof option.notSupported=="function",error=typeof option.error=="function",deny=typeof option.deny=="function",highAccurary=typeof option.highAccurary!="undefined"?option.highAccurary:false,timeout=typeof option.timeout=="number"?option.timeout:8E3,maxAge=typeof option.maxAge=="number",isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,opt={enableHighAccuracy:highAccurary,timeout:timeout};if(maxAge)opt.maximumAge=
maxAge;if(isFirefox)if(error)var firefoxTimer=setTimeout(function(){option.error(3)},timeout);else if(deny)var firefoxTimer=setTimeout(option.deny,timeout);if(navigator.geolocation)navigator.geolocation.getCurrentPosition(function(position){if(isFirefox)clearTimeout(firefoxTimer);option.success(position)},function(errorCode){var denied=errorCode.code==errorCode.PERMISSION_DENIED;if(isFirefox)clearTimeout(firefoxTimer);if(error)option.error(errorCode);else if(deny&&denied)option.deny()},opt);else if(notSupported)option.notSupported()};
jA.urlParam=function(paramName){var getAll=typeof paramName==="undefined",params=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),paramList={};if(params.length==0)return null;for(var i in params){var param=params[i].split("="),name=param[0],value=typeof param[1]!=="undefined"&&param[1]!=""?param[1]:"";if(name==paramName)return value;if(!getAll&&name!=paramName)continue;paramList[name]=value}return Object.keys(paramList).length?paramList:undefined};
jA.fn.serialize=function(){var array=[];this.each(function(){var z,a;for(var z=0;z<this.elements.length;z++){var elements=this.elements[z],name=elements.name,value=elements.value;if(!name||elements.disabled||!value)continue;switch(elements.nodeName){case "INPUT":switch(elements.type){case "text":case "hidden":case "password":case "button":case "reset":case "submit":case "number":case "email":array.push(name+"="+encodeURIComponent(value));break;case "checkbox":case "radio":if(!elements.checked)continue;
array.push(name+"="+encodeURIComponent(value));break}break;case "TEXTAREA":array.push(name+"="+encodeURIComponent(value));break;case "SELECT":switch(elements.type){case "select-one":array.push(name+"="+encodeURIComponent(value));break;case "select-multiple":for(var a=0;a<elements.options.length;a++){var optionValue=elements.options[a].value;if(elements.options[a].selected)array.push(name+"="+encodeURIComponent(optionValue))}}break;case "BUTTON":switch(elements.type){case "reset":case "submit":case "button":array.push(name+
"="+encodeURIComponent(value))}}}});return array.join("&").toString()};
jA.ajax=function(obj,type){if(obj==null)return false;var errorCallback=typeof obj.error!=="undefined",successCallback=typeof obj.success!=="undefined",isObjectData=typeof obj.data==="object"&&obj.data.constructor!=FormData;var d=new jA.deferred;if(typeof obj.async==="undefined")obj.async=true;if(typeof obj.contentType==="undefined"||obj.contentType==null)obj.contentType="application/x-www-form-urlencoded; charset=UTF-8";var XHR=new XMLHttpRequest;XHR.timeout=obj.timeout||1E4;XHR.onload=function(){if(typeof obj.statusCode!=
"undefined"&&typeof obj.statusCode[XHR.status]!="undefined")obj.statusCode[XHR.status](XHR,XHR.responseText);if(XHR.status>=200&&XHR.status<400)switch(obj.dataType){case "json":if(jA.isJSON(XHR.responseText)){if(successCallback)obj.success(JSON.parse(XHR.responseText),XHR);d.resolve(JSON.parse(XHR.responseText),XHR)}else{if(errorCallback)obj.error(XHR,"parsererror");d.reject(XHR,"parsererror")}break;case "html":case "text":case "string":default:if(typeof obj.success=="function"){obj.success(XHR.responseText,
XHR);d.resolve(XHR.responseText,XHR)}if(typeof XHR.close=="function")XHR.close()}else{if(errorCallback)obj.error(XHR,"success");d.reject(XHR,"success")}};XHR.ontimeout=function(){if(errorCallback)obj.error(XHR,"timeout");d.reject(XHR,"timeout")};XHR.onerror=function(){if(errorCallback)obj.error(XHR,"error");d.reject(XHR,"error")};if(typeof obj.uploading!="undefined")XHR.addEventListener("progress",function(e){if(e.lengthComputable){var percent=Math.round(e.loaded/e.total*100);obj.uploading(percent,
e)}},false);XHR.open(obj.type,obj.url,obj.async);if(obj.contentType!=false)XHR.setRequestHeader("Content-Type",obj.contentType);if(typeof obj.headers!="undefined")for(var i in obj.headers)XHR.setRequestHeader(i,obj.headers[i]);if(isObjectData){var params="";for(var i in obj.data)if(obj.data[i]!==undefined)params+=i+"="+obj.data[i]+"&";params=params.slice(0,-1)}XHR.send(isObjectData?params:obj.data);return d};jA.getJSON=function(url,callback){return jA.ajax({url:url,type:"GET",dataType:"json",success:callback})};
jA.xhrResponse=function(XHR,type){type=type||"json";if(type==="json")return JSON.parse(XHR.responseText)};
jA.pjax=function(option){if(typeof history.pushState!=="function")return false;var fakeLink=document.createElement("a");fakeLink.href=option.url;if(fakeLink.hostname!==window.location.hostname)return false;var pjaxFullURL=fakeLink.protocol+"//"+fakeLink.hostname+fakeLink.pathname,fullURL=window.location.protocol+"//"+window.location.hostname+window.location.pathname;if(pjaxFullURL===fullURL)return false;function pjax(obj){jA(obj.Container).html(obj.Content);window.history.pushState(obj.State,obj.Title,
obj.URL);document.title=obj.Title;if(typeof option.success!="undefined")option.success(obj)}var title=option.title||"",dataType=option.dataType||"html",url=option.url,expire=option.expire||3600,cache=option.cache||false,cachedName="cached_"+url;var state={url:url,title:title};if(typeof option.state!=="undefined")for(var i in option.state)state[i]=option.state[i];if(cachedName in localStorage&&cache){var obj=JSON.parse(localStorage.getItem(cachedName));if(JSON.stringify(obj.State)===JSON.stringify(state)||
title===""){var time=Math.floor(Date.now()/1E3)-obj.time;if(expire&&!(time>expire)){pjax(obj);return}}}jA.ajax({url:url,type:"GET",dataType:dataType,headers:{"HTTP_X_PJAX":"true"},success:function(result,xhr){var title=option.dataType=="json"?result[option.titleNode]:option.title,content=option.dataType=="json"?result[option.contentNode]:result,scriptTag=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;if(option.dataType=="json"&&typeof result[option.titleNode]=="undefined")if(typeof option.title!=
"undefined")title=option.title;else title="";if(option.dataType=="json"&&typeof result[option.contentNode]=="undefined")content=result;content=content.replace(scriptTag," ");state["title"]=title;var data={container:Option.container,content:content,url:url,title:title,state:state,time:Math.floor(Date.now()/1E3)};localStorage.setItem(cachedName,JSON.stringify(data));pjax(data)}})};
jA.fn.load=function(url,data,callback){if(!this.length)return this;return this.each(function(){var that=this,options={type:"POST",url:url,dataType:"html",data:data},split=url.split(/\s/),selector;if(split.length>1)options.url=split[0];selector=split[1];options.success=function(result){var scriptTag=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;jA(that).html(selector?jA(document.createElement("div")).html(result.replace(scriptTag," ")).find(selector).html():result)};jA.ajax(options)})};
jA.sse=function(obj){var sse=new EventSource(obj.url);if(typeof obj.message=="object")for(var i in obj.message)sse.addEventListener(i,obj.message[i],false);else if(typeof obj.message!=="undefined")sse.onmessage=obj.message;if(typeof obj.error!=="undefined")sse.onerror=obj.error;if(typeof obj.open!=="undefined")sse.addEventListener("open",obj.open,false)};
jA.post=function(url,data,dataType){dataType=dataType||"json";var d=new jA.deferred;var config={url:url,type:"POST",dataType:dataType,data:data,error:function(r){d.reject(r)},success:function(r){d.resolve(r)}};if(jA.isJSON(data))config.contentType="application/json; charset=UTF-8";jA.ajax(config);return d};
jA.patch=function(url,data,dataType){dataType=dataType||"json";var d=new jA.deferred;var config={url:url,type:"PATCH",dataType:dataType,data:data,error:function(r){d.reject(r)},success:function(r){d.resolve(r)}};if(jA.isJSON(data))config.contentType="application/json; charset=UTF-8";jA.ajax(config);return d};
jA["delete"]=function(url,data,dataType){dataType=dataType||"json";var d=new jA.deferred;var config={url:url,type:"DELETE",dataType:dataType,data:data,error:function(r){d.reject(r)},success:function(r){d.resolve(r)}};if(jA.isJSON(data))config.contentType="application/json; charset=UTF-8";jA.ajax(config);return d};
jA.put=function(url,data,dataType){dataType=dataType||"json";var d=new jA.deferred;var config={url:url,type:"PUT",dataType:dataType,data:data,error:function(r){d.reject(r)},success:function(r){d.resolve(r)}};if(jA.isJSON(data))config.contentType="application/json; charset=UTF-8";jA.ajax(config);return d};
jA.get=function(url,data,dataType){data=data||null;dataType=dataType||"json";var params="";var d=new jA.deferred;if(data!==null){var params="";for(var i in data)params+=i+"="+data[i]+"&";params="?"+params.slice(0,-1)}var config={url:url+params,type:"GET",dataType:"json",error:function(r){d.reject(r)},success:function(r){d.resolve(r)}};jA.ajax(config);return d};