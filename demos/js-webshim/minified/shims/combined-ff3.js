(function(){if(!Array.isArray)Array.isArray=function(d){return Object.prototype.toString.call(d)=="[object Array]"};if(!Array.prototype.forEach)Array.prototype.forEach=function(d,f){for(var g=this.length>>>0,c=0;c<g;c++)c in this&&d.call(f,this[c],c,this)};if(!Array.prototype.map)Array.prototype.map=function(d,f){var g=this.length>>>0;if(typeof d!="function")throw new TypeError;for(var c=Array(g),h=0;h<g;h++)if(h in this)c[h]=d.call(f,this[h],h,this);return c};if(!Array.prototype.filter)Array.prototype.filter=
function(d,f){for(var g=[],c=0;c<this.length;c++)d.call(f,this[c])&&g.push(this[c]);return g};if(!Array.prototype.every)Array.prototype.every=function(d,f){for(var g=0;g<this.length;g++)if(!d.call(f,this[g]))return false;return true};if(!Array.prototype.some)Array.prototype.some=function(d,f){for(var g=0;g<this.length;g++)if(d.call(f,this[g]))return true;return false};if(!Array.prototype.reduce)Array.prototype.reduce=function(d){var f=this.length>>>0;if(typeof d!="function")throw new TypeError;if(f==
0&&arguments.length==1)throw new TypeError;var g=0;if(arguments.length>=2)var c=arguments[1];else{do{if(g in this){c=this[g++];break}if(++g>=f)throw new TypeError;}while(1)}for(;g<f;g++)if(g in this)c=d.call(null,c,this[g],g,this);return c};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(d){var f=this.length>>>0;if(typeof d!="function")throw new TypeError;if(f==0&&arguments.length==1)throw new TypeError;f=f-1;if(arguments.length>=2)var g=arguments[1];else{do{if(f in this){g=this[f--];
break}if(--f<0)throw new TypeError;}while(1)}for(;f>=0;f--)if(f in this)g=d.call(null,g,this[f],f,this);return g};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(d,f){var g=this.length;if(!g)return-1;var c=f||0;if(c>=g)return-1;if(c<0)c+=g;for(;c<g;c++)if(Object.prototype.hasOwnProperty.call(this,c))if(d===this[c])return c;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(d,f){var g=this.length;if(!g)return-1;var c=f||g;if(c<0)c+=g;for(c=Math.min(c,g-1);c>=
0;c--)if(Object.prototype.hasOwnProperty.call(this,c))if(d===this[c])return c;return-1};if(!Object.getPrototypeOf)Object.getPrototypeOf=function(d){return d.__proto__};if(!Object.getOwnPropertyDescriptor)Object.getOwnPropertyDescriptor=function(){return{}};if(!Object.getOwnPropertyNames)Object.getOwnPropertyNames=function(d){return Object.keys(d)};if(!Object.create)Object.create=function(d,f){var g;if(d===null)g={__proto__:null};else{if(typeof d!="object")throw new TypeError("typeof prototype["+typeof d+
"] != 'object'");g=function(){};g.prototype=d;g=new g}typeof f!=="undefined"&&Object.defineProperties(g,f);return g};if(!Object.defineProperty)Object.defineProperty=function(d,f,g){var c=Object.prototype.hasOwnProperty;if(typeof g=="object"&&d.__defineGetter__){if(c.call(g,"value")){if(!d.__lookupGetter__(f)&&!d.__lookupSetter__(f))d[f]=g.value;if(c.call(g,"get")||c.call(g,"set"))throw new TypeError("Object doesn't support this action");}else typeof g.get=="function"&&d.__defineGetter__(f,g.get);
typeof g.set=="function"&&d.__defineSetter__(f,g.set)}return d};if(!Object.defineProperties)Object.defineProperties=function(d,f){for(var g in f)Object.prototype.hasOwnProperty.call(f,g)&&Object.defineProperty(d,g,f[g]);return d};if(!Object.seal)Object.seal=function(d){return d};if(!Object.freeze)Object.freeze=function(d){return d};try{Object.freeze(function(){})}catch(a){Object.freeze=function(d){return function(f){return typeof f=="function"?f:d(f)}}(Object.freeze)}if(!Object.preventExtensions)Object.preventExtensions=
function(d){return d};if(!Object.isSealed)Object.isSealed=function(){return false};if(!Object.isFrozen)Object.isFrozen=function(){return false};if(!Object.isExtensible)Object.isExtensible=function(){return true};if(!Object.keys)Object.keys=function(d){var f=[];for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&f.push(g);return f};if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){return this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+"T"+this.getHours()+":"+
this.getMinutes()+":"+this.getSeconds()+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if(typeof this.toISOString!="function")throw new TypeError;return this.toISOString()};if(isNaN(Date.parse("T00:00")))Date=function(d){var f=function(h,e,k,b,i,j,o){var l=arguments.length;if(this instanceof d){l=l===1&&String(h)===h?new d(f.parse(h)):l>=7?new d(h,e,k,b,i,j,o):l>=6?new d(h,e,k,b,i,j):l>=5?new d(h,e,k,b,i):l>=4?new d(h,e,
k,b):l>=3?new d(h,e,k):l>=2?new d(h,e):l>=1?new d(h):new d;l.constructor=f;return l}return d.apply(this,arguments)},g=RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");for(var c in d)f[c]=d[c];f.now=d.now;f.UTC=d.UTC;f.prototype=d.prototype;f.prototype.constructor=f;f.parse=function(h){var e=g.exec(h);if(e){e.shift();for(var k=e[0]===undefined,b=0;b<10;b++)if(b!==7){e[b]=+(e[b]||(b<3?1:0));
b===1&&e[b]--}if(k)return((e[3]*60+e[4])*60+e[5])*1E3+e[6];k=(e[8]*60+e[9])*60*1E3;if(e[6]==="-")k=-k;return d.UTC.apply(this,e.slice(0,7))+k}return d.parse.apply(this,arguments)};return f}(Date);var r=Array.prototype.slice;if(!Function.prototype.bind)Function.prototype.bind=function(d){var f=this;if(typeof f.apply!="function"||typeof f.call!="function")return new TypeError;var g=r.call(arguments),c=function(){if(this instanceof c){var h=Object.create(f.prototype);f.apply(h,g.concat(r.call(arguments)));
return h}else return f.call.apply(f,g.concat(r.call(arguments)))};c.bound=f;c.boundTo=d;c.boundArgs=g;c.length=typeof f=="function"?Math.max(f.length-g.length,0):0;return c};if(!String.prototype.trim){var n=/^\s\s*/,p=/\s\s*$/;String.prototype.trim=function(){return String(this).replace(n,"").replace(p,"")}}})();
(function(a){a.extend(a.expr.filters,{valid:function(n){return(a.attr(n,"validity")||{valid:true}).valid},invalid:function(n){return!a.expr.filters.valid(n)},willValidate:function(n){return a.attr(n,"willValidate")}});a.webshims.validityAlert=function(){var n={hideDelay:5E3,showFor:function(e,k){e=a(e);var b=(e.data("inputUIReplace")||{visual:e}).visual;c();h();this.getMessage(e);this.position(b);this.show();if(this.hideDelay)d=setTimeout(f,this.hideDelay);if(!k){e.focus();a(document).bind("focusout.validityalert",
f)}},getMessage:function(e){a("> div",p).html(e.attr("validationMessage"))},position:function(e){var k=e.offset();k.top+=e.outerHeight();p.css(k)},show:function(){p.css("display")==="none"?p.fadeIn():p.fadeTo(1)},hide:function(){h();p.fadeOut()}},p=a('<div class="validity-alert" role="alert"><div class="va-box" /></div>').css({position:"absolute",display:"none"}),d=false,f=a.proxy(n,"hide"),g=false,c=function(){if(!g){g=true;a(function(){p.appendTo("body")})}},h=function(){clearTimeout(d);a(document).unbind("focusout.validityalert");
p.stop()};return n}();a.webshims.validityMessages.en=a.webshims.validityMessages.en||a.webshims.validityMessages["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",
stepMismatch:"The value {%value} is not allowed for this form. Only certain values are allowed for this field. {%title}",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};a.webshims.validityMessages["en-US"]=a.webshims.validityMessages["en-US"]||a.webshims.validityMessages.en;a.webshims.validityMessages[""]=a.webshims.validityMessages[""]||
a.webshims.validityMessages.en;a.webshims.validityMessages.de=a.webshims.validityMessages.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",
rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var r=a.webshims.validityMessages[""];
a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.webshims.validityMessages,"validation-base",function(n){r=n})});a.webshims.createValidationMessage=function(n,p){var d=r[p];if(d&&typeof d!=="string")d=d[(n.getAttribute("type")||"").toLowerCase()]||d.defaultMessage;d&&a.each(["value","min","max","title","maxlength","label"],function(f,g){if(d.indexOf("{%"+g)!==-1){var c=(g=="label"?a.trim(a("label[for="+n.id+"]",n.form).text()).replace(/\*$|:$/,""):a.attr(n,g))||"";d=d.replace("{%"+
g+"}",c);if("value"==g)d=d.replace("{%valueLen}",c.length)}});return d||""};a.each(a.support.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(n,p){a.webshims.attr(p,{elementNames:["input","select","textarea"],getter:function(d){var f="";if(!a.attr(d,"willValidate"))return f;var g=a.attr(d,"validity")||{valid:1};if(g.valid)return f;if(g.customError||p==="validationMessage")if(f="validationMessage"in d?d.validationMessage:a.data(d,"customvalidationMessage"))return f;
a.each(g,function(c,h){if(!(c=="valid"||!h))if(f=a.webshims.createValidationMessage(d,c))return false});return f||""}})});(function(){var n,p=[],d,f,g;a.support.validity===true&&document.addEventListener&&!window.noHTMLExtFixes&&document.addEventListener("submit",function(c){c.target.checkValidity&&a.attr(c.target,"novalidate")===undefined&&c.target.checkValidity()},true);a(document).bind("invalid",function(c){if(!n){f=c.target.form;if(a.support.validity===true&&f&&!window.noHTMLExtFixes){var h=a(f).bind("submit.preventInvalidSubmit",
function(e){if(a.attr(f,"novalidate")===undefined){e.stopImmediatePropagation();return false}}).data("events").submit;h&&h.length>1&&h.unshift(h.pop())}n=a.Event("firstinvalid");a(c.target).trigger(n)}n&&n.isDefaultPrevented()&&c.preventDefault();if(a.support.validity!==true||a.inArray(c.target,p)==-1)p.push(c.target);else if(!window.noHTMLExtFixes){g=true;c.stopImmediatePropagation()}c.extraData="fix";clearTimeout(d);d=setTimeout(function(){var e={type:"lastinvalid",cancelable:false,invalidlist:a(p)};
a.browser.webkit&&!g&&n.target!==document.activeElement&&!a.data(n.target,"maybePreventedinvalid")&&a.webshims.validityAlert.showFor(n.target);n=g=false;p=[];a(f).unbind("submit.preventInvalidSubmit");a(c.target).trigger(e,e)},0)})})();a.support.validationMessage=a.support.validationMessage||"shim"})(jQuery);
(function(a){if(!(a.support.validity!==true||a.support.fieldsetValidation||window.noHTMLExtFixes)){a.support.fieldsetValidation="shim";a.webshims.addMethod("checkValidity",function(){if(a.nodeName(this,"fieldset")){var r=true;a(this.elements||"input, textarea, select",this).each(function(){if(this.checkValidity)this.checkValidity()||(r=false)});return r}else if(this.checkValidity)return this.checkValidity()})}})(jQuery);
(function(a){if(!a.support.validity){a.webshims.inputTypes=a.webshims.inputTypes||{};var r=a.webshims.inputTypes,n={radio:1,checkbox:1};a.webshims.addInputType=function(c,h){r[c]=h};var p={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},d={valueMissing:function(c,h){if(!c.attr("required"))return false;return n[c[0].type]?!a(c[0].form&&c[0].name?c[0].form[c[0].name]:[]).filter(":checked")[0]:
!h},tooLong:function(c,h){if(h==="")return false;var e=c.attr("maxlength"),k=false,b=h.length;if(b&&e>=0&&h.replace&&(typeof e=="number"||e&&e==e*1))k=b>e;return k},typeMismatch:function(c,h,e){if(h==="")return false;var k=false;if(!("type"in e))e.type=(c[0].getAttribute("type")||"").toLowerCase();if(r[e.type]&&r[e.type].mismatch)k=r[e.type].mismatch(h,c);return k},patternMismatch:function(c,h){if(h==="")return false;var e=c.attr("pattern");if(!e)return false;return!RegExp("^(?:"+e+")$").test(h)}};
a.webshims.addValidityRule=function(c,h){d[c]=h};a.webshims.addMethod("checkValidity",function(){var c,h=function(e){var k,b=a.attr(e,"validity");if(b)a.data(e,"cachedValidity",b);else b={valid:true};if(!b.valid){k=a.Event("invalid");var i=a(e).trigger(k);if(!k.isDefaultPrevented()){c||a.webshims.validityAlert.showFor(i);c=true}}a.data(e,"cachedValidity",false);return b.valid};return function(){c=false;if(a.nodeName(this,"form")||a.nodeName(this,"fieldset")){for(var e=true,k=this.elements||a("input, textarea, select",
this),b=0,i=k.length;b<i;b++)h(k[b])||(e=false);return e}else return this.form?h(this):true}}());a.event.special.invalid={add:function(){a.data(this,"invalidEventShim")||a.event.special.invalid.setup.call(this)},setup:function(){a(this).bind("submit",a.event.special.invalid.handler).data("invalidEventShim",true);var c=a(this).data("events").submit;c&&c.length>1&&c.unshift(c.pop())},teardown:function(){a(this).unbind("submit",a.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(c){if(!(c.type!=
"submit"||!a.nodeName(c.target,"form")||a.attr(c.target,"novalidate")!==undefined||a.data(c.target,"novalidate")))if(!a(c.target).checkValidity()){!c.originalEvent&&!window.debugValidityShim&&window.console&&console.log&&console.log("submit");c.stopImmediatePropagation();return false}}};a.webshims.attr("validity",{elementNames:["input","select","textarea"],getter:function(c){var h=a.data(c,"cachedValidity");if(h)return h;h=a.extend({},p);if(!a.attr(c,"willValidate"))return h;var e=a(c),k=e.val(),
b={};h.customError=!!a.data(c,"customvalidationMessage");if(h.customError)h.valid=false;if((c.nodeName||"").toLowerCase()=="select")return h;a.each(d,function(i,j){if(j(e,k,b)){h[i]=true;h.valid=false}});return h}});a.webshims.addMethod("setCustomValidity",function(c){a.data(this,"customvalidationMessage",""+c)});a.webshims.attr("validationMessage",{elementNames:["input","select","textarea"],getter:function(c,h){var e=h()||a.data(c,"customvalidationMessage");return!e||!a.attr(c,"willValidate")?"":
e}});a.webshims.createBooleanAttrs("required",["input","textarea"]);a.webshims.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var c={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(h){return!!(h.name&&h.form&&!h.disabled&&!h.readonly&&!c[h.type]&&a.attr(h.form,"novalidate")===undefined)}}()});a.webshims.addInputType("email",{mismatch:function(){var c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(h){return!c.test(h)}}()});a.webshims.addInputType("url",{mismatch:function(){var c=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(h){return!c.test(h)}}()});var f=function(){var c=this;if(c.form){a.data(c.form,"novalidate",true);setTimeout(function(){a.data(c.form,"novalidate",false)},1)}},g={submit:1,button:1};a(document).bind("click",function(c){c.target&&c.target.form&&g[c.target.type]&&a.attr(c.target,"formnovalidate")!==undefined&&f.call(c.target)});a.webshims.addReady(function(c){a("form",c).bind("invalid",a.noop).find("button[formnovalidate]").bind("click",f)})}})(jQuery);
(function(a){if(a.support.validity!==true){a.support.validity="shim";var r={input:1,textarea:1},n={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1,range:1},p=function(d){var f;d[0].getAttribute("type");var g=d.val(),c=function(e){if(d){var k=d.val();if(k!==g){g=k;if(!e||e.type!="input")d.trigger("input")}}},h=function(){d.unbind("focusout",h).unbind("input",c);clearInterval(f);c();d=null};clearInterval(f);f=setInterval(c,150);setTimeout(c,9);d.bind("focusout",h).bind("input",c)};a(document).bind("focusin",
function(d){if(d.target&&d.target.type&&!d.target.readonly&&!d.target.readOnly&&!d.target.disabled&&r[(d.target.nodeName||"").toLowerCase()]&&!n[d.target.type])p(a(d.target))})}})(jQuery);
(function(a){var r,n=function(){if(!r){r=true;var p=parseInt("NaN",10),d=a.webshims.inputTypes,f=function(b){return typeof b=="number"||a.trim(b)&&b==b*1},g=function(b){return a('<input type="'+b+'" />').attr("type")===b},c=function(b){return(b.getAttribute("type")||"").toLowerCase()},h=function(b,i){var j=a.attr(b,"step");if(j==="any")return j;i=i||c(b);if(!d[i]||!d[i].step)return j;j=d.number.asNumber(j);return(!isNaN(j)&&j>0?j:d[i].step)*d[i].stepScaleFactor},e=function(b,i,j){if(!(b+"AsNumber"in
j)){j[b+"AsNumber"]=d[j.type].asNumber(i.attr(b));if(isNaN(j[b+"AsNumber"])&&b+"Default"in d[j.type])j[b+"AsNumber"]=d[j.type][b+"Default"]}},k=function(b,i){b=""+b;i-=b.length;for(var j=0;j<i;j++)b="0"+b;return b};a.webshims.addValidityRule("stepMismatch",function(b,i,j){if(i==="")return false;if(!("type"in j))j.type=c(b[0]);if(j.type=="date")return false;var o=false;if(d[j.type]&&d[j.type].step){if(!("step"in j))j.step=h(b[0],j.type);if(j.step=="any")return false;if(!("valueAsNumber"in j))j.valueAsNumber=
d[j.type].asNumber(i);if(isNaN(j.valueAsNumber))return false;e("min",b,j);b=j.minAsNumber;if(isNaN(b))b=d[j.type].stepBase||0;o=Math.abs((j.valueAsNumber-b)%j.step);o=!(o<=1.0E-7||Math.abs(o-j.step)<=1.0E-7)}return o});a.each([{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}],function(b,i){a.webshims.addValidityRule(i.name,function(j,o,l){var q=false;if(o==="")return q;if(!("type"in l))l.type=c(j[0]);if(d[l.type]&&d[l.type].asNumber){if(!("valueAsNumber"in l))l.valueAsNumber=
d[l.type].asNumber(o);if(isNaN(l.valueAsNumber))return false;e(i.attr,j,l);if(isNaN(l[i.attr+"AsNumber"]))return q;q=l[i.attr+"AsNumber"]*i.factor<=l.valueAsNumber*i.factor-1.0E-7}return q})});a.webshims.attr("valueAsNumber",{elementNames:["input"],getter:function(b){var i=c(b);return d[i]&&d[i].asNumber?d[i].asNumber(a.attr(b,"value")):p},setter:function(b,i,j){var o=c(b);if(d[o]&&d[o].numberToString)if(isNaN(i))a.attr(b,"value","");else{i=d[o].numberToString(i);if(i!==false)a.attr(b,"value",i);
else throw"INVALID_STATE_ERR: DOM Exception 11";}else j()}});a.webshims.attr("valueAsDate",{elementNames:["input"],getter:function(b){var i=c(b);return d[i]&&d[i].asDate&&!d[i].noAsDate?d[i].asDate(a.attr(b,"value")):null},setter:function(b,i,j){var o=c(b);if(d[o]&&d[o].dateToString){if(!window.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(i===null)a.attr(b,"value","");else{i=d[o].dateToString(i);if(i!==false)a.attr(b,"value",i);else throw"INVALID_STATE_ERR: DOM Exception 11";
}}else j()}});g("number")||a.webshims.addInputType("number",{mismatch:function(b){return!f(b)},step:1,stepScaleFactor:1,asNumber:function(b){return f(b)?b*1:p},numberToString:function(b){return f(b)?b:false}});!g("number")&&d.number&&a.webshims.addInputType("range",a.extend({},d.number,{minDefault:0,maxDefault:100}));!g("date")&&d.number&&a.webshims.addInputType("date",{mismatch:function(b){if(!b||!b.split||!/\d$/.test(b))return true;var i=b.split(/\u002D/);if(i.length!==3)return true;var j=false;
a.each(i,function(o,l){if(!(f(l)||l&&l=="0"+l*1)){j=true;return false}});if(j)return j;if(i[0].length!==4||i[1].length!=2||i[1]>12||i[2].length!=2||i[2]>33)j=true;return b!==this.dateToString(this.asDate(b,true))},step:1,stepScaleFactor:864E5,asDate:function(b,i){if(!i&&this.mismatch(b))return null;return new Date(this.asNumber(b,true))},asNumber:function(b,i){var j=p;if(i||!this.mismatch(b)){b=b.split(/\u002D/);j=Date.UTC(b[0],b[1]-1,b[2])}return j},numberToString:function(b){return f(b)?this.dateToString(new Date(b*
1)):false},dateToString:function(b){return b&&b.getFullYear?b.getUTCFullYear()+"-"+k(b.getUTCMonth()+1,2)+"-"+k(b.getUTCDate(),2):false}});!g("time")&&d.number&&d.date&&a.webshims.addInputType("time",a.extend({},d.date,{mismatch:function(b,i){if(!b||!b.split||!/\d$/.test(b))return true;b=b.split(/\u003A/);if(b.length<2||b.length>3)return true;var j=false,o;if(b[2]){b[2]=b[2].split(/\u002E/);o=parseInt(b[2][1],10);b[2]=b[2][0]}a.each(b,function(l,q){if(!(f(q)||q&&q=="0"+q*1)||q.length!==2){j=true;
return false}});if(j)return true;if(b[0]>23||b[0]<0||b[1]>59||b[1]<0)return true;if(b[2]&&(b[2]>59||b[2]<0))return true;if(o&&isNaN(o))return true;if(o)if(o<100)o*=100;else if(o<10)o*=10;return i===true?[b,o]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(b){b=new Date(this.asNumber(b));return isNaN(b)?null:b},asNumber:function(b){var i=p;b=this.mismatch(b,true);if(b!==true){i=Date.UTC("1970",0,1,b[0][0],b[0][1],b[0][2]||0);if(b[1])i+=b[1]}return i},dateToString:function(b){if(b&&b.getUTCHours){var i=
k(b.getUTCHours(),2)+":"+k(b.getUTCMinutes(),2),j=b.getSeconds();if(j!="0")i+=":"+k(j,2);j=b.getUTCMilliseconds();if(j!="0")i+="."+k(j,3);return i}else return false}}));!g("datetime-local")&&d.number&&d.time&&a.webshims.addInputType("datetime-local",a.extend({},d.time,{mismatch:function(b,i){if(!b||!b.split||(b+"special").split(/\u0054/).length!==2)return true;b=b.split(/\u0054/);return d.date.mismatch(b[0])||d.time.mismatch(b[1],i)},noAsDate:true,asDate:function(b){b=new Date(this.asNumber(b));return isNaN(b)?
null:b},asNumber:function(b){var i=p,j=this.mismatch(b,true);if(j!==true){b=b.split(/\u0054/)[0].split(/\u002D/);i=Date.UTC(b[0],b[1]-1,b[2],j[0][0],j[0][1],j[0][2]||0);if(j[1])i+=j[1]}return i},dateToString:function(b,i){return d.date.dateToString(b)+"T"+d.time.dateToString(b,i)}}));(function(){var b=a.webshims.loader.modules["number-date-type"].options,i=function(l,q,m){m=m||{};if(!("type"in m))m.type=c(l);if(!("step"in m))m.step=h(l,m.type);if(!("valueAsNumber"in m))m.valueAsNumber=d[m.type].asNumber(a.attr(l,
"value"));var s=m.step=="any"?d[m.type].step*d[m.type].stepScaleFactor:m.step;e("min",a(l),m);e("max",a(l),m);if(isNaN(m.valueAsNumber))m.valueAsNumber=d[m.type].stepBase||0;if(m.step!=="any")m.valueAsNumber=Math.round((m.valueAsNumber-(m.valueAsNumber-(m.minAsnumber||0))%m.step)*1E7)/1E7;l=m.valueAsNumber+s*q;if(!isNaN(m.minAsNumber)&&l<m.minAsNumber)l=m.valueAsNumber*q<m.minAsNumber?m.minAsNumber:isNaN(m.maxAsNumber)?Number.MAX_VALUE:m.maxAsNumber;else if(!isNaN(m.maxAsNumber)&&l>m.maxAsNumber)l=
m.valueAsNumber*q>m.maxAsNumber?m.maxAsNumber:isNaN(m.minAsNumber)?Number.MIN_VALUE:m.minAsNumber;return l},j=function(l,q,m){if(!(l.disabled||l.readOnly||a(m).hasClass("step-controls"))){a.attr(l,"value",d[q].numberToString(i(l,a(m).hasClass("step-up")?1:-1,{type:q})));a(l).unbind("blur.stepeventshim").trigger("input");if(document.activeElement){if(document.activeElement!==l)try{l.focus()}catch(s){}setTimeout(function(){if(document.activeElement!==l)try{l.focus()}catch(t){}a(l).one("blur.stepeventshim",
function(){a(l).trigger("change")})},0)}}};if(b.stepArrows){var o={elementNames:["input"],setter:function(l,q,m){m();if(q=a.data(l,"step-controls"))q[l.disabled||l.readonly?"addClass":"removeClass"]("disabled-step-control")}};a.webshims.attr("disabled",o);a.webshims.attr("readonly",o)}a.webshims.addReady(function(l){b.stepArrows&&a("input",l).each(function(){var q=c(this);if(!(!d[q]||!d[q].asNumber||!b.stepArrows||b.stepArrows!==true&&!b.stepArrows[q])){var m=this,s=a(this).css("direction")=="rtl"?
{action:"insertBefore",side:"Left",otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"left"},t=a('<span class="step-controls"><span class="step-up" /><span class="step-down" tabindex="-1" /></span>')[s.action](this).bind("mousedown mousepress",function(v){j(m,q,v.target);return false});a(this).addClass("has-step-controls").data("step-controls",t).attr({readonly:this.readOnly,disabled:this.disabled});if(b.recalcWidth){var u=t.outerWidth(true)+(parseInt(a(this).css("padding"+s.side),10)||
0),w=parseInt(a(this).css("border"+s.side+"width"),10)||0;t.css(s.otherSide,(w+u)*-1);u++;a(this).css("width",a(this).width()-u).css("padding"+s.side,u)}}})})})();a.webshims.attr("type",{elementNames:["input"],getter:function(b){var i=c(b);return a.webshims.inputTypes[i]?i:b.type||b.getAttribute("type")},setter:true})}};if(a.webshims.addValidityRule)n();else a.support.validity===true?a.webshims.readyModules("implement-types",n,true,true):a.webshims.readyModules("validity",n,true,true)})(jQuery);
(function(a){if(!a.support.placeholder){a.support.placeholder="shim";var r=function(c,h,e,k,b){if(!k){k=a.data(c,"placeHolder");if(!k)return}if(b=="focus")k.box.removeClass("placeholder-visible");else{if(h===false)h=a.attr(c,"value");if(h)k.box.removeClass("placeholder-visible");else{if(e===false)e=a.attr(c,"placeholder");k.box[e&&!h?"addClass":"removeClass"]("placeholder-visible")}}},n=0,p=function(c){c=a(c);var h=c.attr("id"),e=!!(c.attr("title")||c.attr("aria-labeledby"));if(!e&&h)e=!!a("label[for="+
h+"]",c[0].form)[0];else if(!h){n++;h="input-placeholder-id-"+n;c.attr("id",h)}return a(e?'<span class="placeholder-text"></span>':'<label for="'+h+'" class="placeholder-text"></label>')},d=function(){var c=/\n|\r|\f|\t/g,h={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(e){var k=a.data(e,"placeHolder");if(k)return k;k=a.data(e,"placeHolder",{text:p(e)});k.box=a(e).wrap('<span class="placeholder-box placeholder-box-'+(e.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(o){r(this,false,false,k,o.type)}).parent();k.text.insertAfter(e).bind("mousedown.placeholder",function(){r(this,false,false,k,"focus");e.focus();return false});a.each(["Left","Top"],function(o,l){var q=(parseInt(a.curCSS(e,"padding"+l),10)||0)+Math.max(parseInt(a.curCSS(e,"margin"+l),10)||0,0)+(parseInt(a.curCSS(e,"border"+l+"Width"),10)||0);k.text.css("padding"+l,q)});var b=a.curCSS(e,"lineHeight"),i={width:a(e).width()||parseInt(a.curCSS(e,"width"),10),height:a(e).height()||parseInt(a.curCSS(e,
"height"),10)},j=a.curCSS(e,"float");k.text.css("lineHeight")!==b&&k.text.css("lineHeight",b);i.width&&i.height&&k.text.css(i);j!=="none"&&k.box.addClass("placeholder-box-"+j);return k},update:function(e,k){if(h[a.attr(e,"type")]||a.nodeName(e,"textarea")){if(a.nodeName(e,"input"))k=k.replace(c,"");var b=d.create(e);e.setAttribute("placeholder",k);b.text.text(k);r(e,false,k,b)}}}}();a.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(c,h){d.update(c,h)},getter:function(c){return c.getAttribute("placeholder")||
""}});var f={elementNames:["input","textarea"],setter:function(c,h,e){var k=c.getAttribute("placeholder");k&&"value"in c&&r(c,h,k);e()},getter:true};a.webshims.attr("value",f);var g=a.fn.val;a.fn.val=function(c){c!==undefined&&this.each(function(){this.nodeType===1&&f.setter(this,c,a.noop)});return g.apply(this,arguments)};a.webshims.addReady(function(c){a("input[placeholder], textarea[placeholder]",c).attr("placeholder",function(h,e){return e})})}})(jQuery);