webshims.register("track",function(e,t,i,n){"use strict";var a=t.mediaelement;(new Date).getTime(),e.fn.addBack?"addBack":"andSelf";var r={subtitles:1,captions:1,descriptions:1},o=e("<track />"),s=Modernizr.ES5&&Modernizr.objectAccessor,l=function(e){var i={};return e.addEventListener=function(e,n){i[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+n),i[e]=n},e.removeEventListener=function(e,n){i[e]&&i[e]!=n&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+n),i[e]&&delete i[e]},e},u={getCueById:function(e){for(var t=null,i=0,n=this.length;n>i;i++)if(this[i].id===e){t=this[i];break}return t}},c={0:"disabled",1:"hidden",2:"showing"},d={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var i=this.cues[this.cues.length-1];i&&i.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=a.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var i=this.cues||[],n=0,a=i.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;a>n;n++)if(i[n]===e){i.splice(n,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined}},p=["kind","label","srclang"],m={srclang:"language"},f=Function.prototype.call.bind(Object.prototype.hasOwnProperty),h=function(i,n){var a,r,o=[],s=[],l=[];if(i||(i=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),n||(i.blockTrackListUpdate=!0,n=e.prop(this,"textTracks"),i.blockTrackListUpdate=!1),clearTimeout(i.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");l.push(t),-1==n.indexOf(t)&&s.push(t)}),i.scriptedTextTracks)for(a=0,r=i.scriptedTextTracks.length;r>a;a++)l.push(i.scriptedTextTracks[a]),-1==n.indexOf(i.scriptedTextTracks[a])&&s.push(i.scriptedTextTracks[a]);for(a=0,r=n.length;r>a;a++)-1==l.indexOf(n[a])&&o.push(n[a]);if(o.length||s.length){for(n.splice(0),a=0,r=l.length;r>a;a++)n.push(l[a]);for(a=0,r=o.length;r>a;a++)e([n]).triggerHandler(e.Event({type:"removetrack",track:o[a]}));for(a=0,r=s.length;r>a;a++)e([n]).triggerHandler(e.Event({type:"addtrack",track:s[a]}));(i.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},v=function(i,n){n||(n=t.data(i,"trackData")),n&&!n.isTriggering&&(n.isTriggering=!0,setTimeout(function(){e(i).closest("audio, video").triggerHandler("updatetrackdisplay"),n.isTriggering=!1},1))},g=function(){var i={subtitles:{subtitles:1,captions:1},descriptions:{descriptions:1},chapters:{chapters:1}};return i.captions=i.subtitles,function(n){var a,r,o=e.prop(n,"default");return o&&"metadata"!=(a=e.prop(n,"kind"))&&(r=e(n).parent().find("track[default]").filter(function(){return!!i[a][e.prop(this,"kind")]})[0],r!=n&&(o=!1,t.error("more than one default track of a specific kind detected. Fall back to default = false"))),o}}(),y=e("<div />")[0];i.TextTrackCue=function(e,i,n){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=i,this.text=n,l(this)},i.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",i="",r=n.createDocumentFragment();return f(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,n;if(t!=this.text)for(t=this.text,i=a.parseCueTextToHTML(t),y.innerHTML=i,e=0,n=y.childNodes.length;n>e;e++)r.appendChild(y.childNodes[e].cloneNode(!0));return r.cloneNode(!0)}),e?e.apply(this,arguments):r.cloneNode(!0)},track:null,id:""},a.createCueList=function(){return e.extend([],u)},a.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,i=/\<\s*\//,n=function(e,t,n,a){var r;return i.test(a)?r="</"+e+">":(n.splice(0,1),r="<"+e+" "+t+'="'+n.join(" ").replace(/\"/g,"&#34;")+'">'),r},a=function(e){var i=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return i[0]&&(i[0]=i[0].toLowerCase(),t.test(i[0])?"c"==i[0]?e=n("span","class",i,e):"v"==i[0]&&(e=n("q","title",i,e)):e=""),e};return function(t){return t.replace(e,a)}}(),a.loadTextTrack=function(i,n,o,s){var l="play playing timeupdate updatetrackdisplay",u=o.track,c=function(){var r,s,d=e.prop(n,"src");if("disabled"!=u.mode&&d&&e.attr(n,"src")&&(e(i).unbind(l,c),!o.readyState)){r=function(){o.readyState=3,u.cues=null,u.activeCues=u.shimActiveCues=u._shimActiveCues=null,e(n).triggerHandler("error")},o.readyState=1;try{u.cues=a.createCueList(),u.activeCues=u.shimActiveCues=u._shimActiveCues=a.createCueList(),s=e.ajax({dataType:"text",url:d,success:function(l){"text/vtt"!=s.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),a.parseCaptions(l,u,function(t){t&&"length"in t?(o.readyState=2,e(n).triggerHandler("load"),e(i).triggerHandler("updatetrackdisplay")):r()})},error:r})}catch(p){r(),t.warn(p)}}};o.readyState=0,u.shimActiveCues=null,u._shimActiveCues=null,u.activeCues=null,u.cues=null,e(i).unbind(l,c),e(i).on(l,c),s&&(u.mode=r[u.kind]?"showing":"hidden",c())},a.createTextTrack=function(i,n){var r,o;return n.nodeName&&(o=t.data(n,"trackData"),o&&(v(n,o),r=o.track)),r||(r=l(t.objectCreate(d)),s||p.forEach(function(t){var i=e.prop(n,t);i&&(r[m[t]||t]=i)}),n.nodeName?(s&&p.forEach(function(i){t.defineProperty(r,m[i]||i,{get:function(){return e.prop(n,i)}})}),r.id=e(n).prop("id"),o=t.data(n,"trackData",{track:r}),a.loadTextTrack(i,n,o,g(n))):(s&&p.forEach(function(e){t.defineProperty(r,m[e]||e,{value:n[e],writeable:!1})}),r.cues=a.createCueList(),r.activeCues=r._shimActiveCues=r.shimActiveCues=a.createCueList(),r.mode="hidden",r.readyState=2),r.__wsmode=r.mode),r},a.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,i=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,n=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,a=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(r){var o,s,l,u,c,d,p,m,f,h;if(m=i.exec(r))return null;if(m=n.exec(r))return null;if(m=a.exec(r))return null;for(o=r.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(p=o.shift().replace(/\s*/gi,"")+""),d=0;o.length>d;d++){var v=o[d];(f=e.exec(v))&&(c=f.slice(1),s=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),l=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),o=o.slice(0,d).concat(o.slice(d+1));break}return s||l?(u=o.join("\n"),h=new TextTrackCue(s,l,u),p&&(h.id=p),h):(t.warn("couldn't extract time information: "+[s,l,o.join("\n"),p].join(" ; ")),null)}}(),a.parseCaptions=function(e,i,n){a.createCueList();var r,o,s,l,u;e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(c,d){for(;d>c;c++){if(r=e[c],s.test(r))u=!0;else if(r.replace(/\s*/gi,"").length){if(!u){t.error("please use WebVTT format. This is the standard"),n(null);break}r=a.parseCaptionChunk(r,c),r&&i.addCue(r)}if((new Date).getTime()-30>l){c++,setTimeout(function(){l=(new Date).getTime(),o(c,d)},90);break}}c>=d&&(u||t.error("please use WebVTT format. This is the standard"),n(i.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){l=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},a.createTrackList=function(i,n){return n=n||t.data(i,"mediaelementBase")||t.data(i,"mediaelementBase",{}),n.textTracks||(n.textTracks=[],t.defineProperties(n.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:function(t){return e("track#"+t,i)[0]||null}}),l(n.textTracks),e(i).on("updatetrackdisplay",function(){for(var t,i=0;n.textTracks.length>i;i++)t=n.textTracks[i],t.__wsmode!=t.mode&&(t.__wsmode=t.mode,e([n.textTracks]).triggerHandler("change"))})),n.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var i=t.data(this,"trackData");this.setAttribute("data-kind",e),i&&(i.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(p,function(i,n){var a=m[n]||n;t.onNodeNamesPropertyModify("track",n,function(){var i=t.data(this,"trackData");i&&("kind"==n&&v(this,i),s||(i.track[a]=e.prop(this,n)))})}),t.onNodeNamesPropertyModify("track","src",function(i){if(i){var n,r=t.data(this,"trackData");r&&(n=e(this).closest("video, audio"),n[0]&&a.loadTextTrack(n,this,r))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(t.data(this,"trackData")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return a.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),n=a.createTrackList(e,i);return i.blockTrackListUpdate||h.call(e,i,n),n},writeable:!1},addTextTrack:{value:function(e,i,n){var r=a.createTextTrack(this,{kind:o.prop("kind",e||"").prop("kind"),label:i||"",srclang:n||""}),s=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return s.scriptedTextTracks||(s.scriptedTextTracks=[]),s.scriptedTextTracks.push(r),h.call(this),r}}},"prop"),e(n).on("emptied ended updatetracklist",function(i){if(e(i.target).is("audio, video")){var n=t.data(i.target,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){h.call(i.target,n)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},T=function(){if(t.implement(this,"track")){var i,n,a=e.prop(this,"track"),r=this.track;r&&(i=e.prop(this,"kind"),n=b(this,r),(r.mode||n)&&(a.mode=c[r.mode]||r.mode),"descriptions"!=i&&(r.mode="string"==typeof r.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:i}))),e(this).on("load error",w)}};t.addReady(function(i,n){var a=n.filter("video, audio, track").closest("audio, video");e("video, audio",i).add(a).each(function(){h.call(this)}).each(function(){if(Modernizr.track){var i=e.prop(this,"textTracks"),n=this.textTracks;i.length!=n.length&&t.error("textTracks couldn't be copied"),e("track",this).each(T)}}),a.each(function(){var e=this,i=t.data(e,"mediaelementBase");i&&(clearTimeout(i.updateTrackListTimer),i.updateTrackListTimer=setTimeout(function(){h.call(e,i)},9))})}),Modernizr.texttrackapi&&e("video, audio").trigger("trackapichange")});