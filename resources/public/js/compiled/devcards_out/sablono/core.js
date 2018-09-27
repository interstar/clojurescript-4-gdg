// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__36158__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36155 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__36156 = cljs.core.seq.call(null,vec__36155);
var first__36157 = cljs.core.first.call(null,seq__36156);
var seq__36156__$1 = cljs.core.next.call(null,seq__36156);
var tag = first__36157;
var body = seq__36156__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36159__i = 0, G__36159__a = new Array(arguments.length -  0);
while (G__36159__i < G__36159__a.length) {G__36159__a[G__36159__i] = arguments[G__36159__i + 0]; ++G__36159__i;}
  args = new cljs.core.IndexedSeq(G__36159__a,0);
} 
return G__36158__delegate.call(this,args);};
G__36158.cljs$lang$maxFixedArity = 0;
G__36158.cljs$lang$applyTo = (function (arglist__36160){
var args = cljs.core.seq(arglist__36160);
return G__36158__delegate(args);
});
G__36158.cljs$core$IFn$_invoke$arity$variadic = G__36158__delegate;
return G__36158;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__27662__auto__ = (function sablono$core$update_arglists_$_iter__36165(s__36166){
return (new cljs.core.LazySeq(null,(function (){
var s__36166__$1 = s__36166;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36166__$1);
if(temp__5457__auto__){
var s__36166__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36166__$2)){
var c__27660__auto__ = cljs.core.chunk_first.call(null,s__36166__$2);
var size__27661__auto__ = cljs.core.count.call(null,c__27660__auto__);
var b__36168 = cljs.core.chunk_buffer.call(null,size__27661__auto__);
if((function (){var i__36167 = (0);
while(true){
if((i__36167 < size__27661__auto__)){
var args = cljs.core._nth.call(null,c__27660__auto__,i__36167);
cljs.core.chunk_append.call(null,b__36168,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36169 = (i__36167 + (1));
i__36167 = G__36169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36168),sablono$core$update_arglists_$_iter__36165.call(null,cljs.core.chunk_rest.call(null,s__36166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36168),null);
}
} else {
var args = cljs.core.first.call(null,s__36166__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36165.call(null,cljs.core.rest.call(null,s__36166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27662__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__27998__auto__ = [];
var len__27991__auto___36175 = arguments.length;
var i__27992__auto___36176 = (0);
while(true){
if((i__27992__auto___36176 < len__27991__auto___36175)){
args__27998__auto__.push((arguments[i__27992__auto___36176]));

var G__36177 = (i__27992__auto___36176 + (1));
i__27992__auto___36176 = G__36177;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__27662__auto__ = (function sablono$core$iter__36171(s__36172){
return (new cljs.core.LazySeq(null,(function (){
var s__36172__$1 = s__36172;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36172__$1);
if(temp__5457__auto__){
var s__36172__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36172__$2)){
var c__27660__auto__ = cljs.core.chunk_first.call(null,s__36172__$2);
var size__27661__auto__ = cljs.core.count.call(null,c__27660__auto__);
var b__36174 = cljs.core.chunk_buffer.call(null,size__27661__auto__);
if((function (){var i__36173 = (0);
while(true){
if((i__36173 < size__27661__auto__)){
var style = cljs.core._nth.call(null,c__27660__auto__,i__36173);
cljs.core.chunk_append.call(null,b__36174,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36178 = (i__36173 + (1));
i__36173 = G__36178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36174),sablono$core$iter__36171.call(null,cljs.core.chunk_rest.call(null,s__36172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36174),null);
}
} else {
var style = cljs.core.first.call(null,s__36172__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36171.call(null,cljs.core.rest.call(null,s__36172__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27662__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq36170){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36170));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to36179 = (function sablono$core$link_to36179(var_args){
var args__27998__auto__ = [];
var len__27991__auto___36182 = arguments.length;
var i__27992__auto___36183 = (0);
while(true){
if((i__27992__auto___36183 < len__27991__auto___36182)){
args__27998__auto__.push((arguments[i__27992__auto___36183]));

var G__36184 = (i__27992__auto___36183 + (1));
i__27992__auto___36183 = G__36184;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((1) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to36179.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27999__auto__);
});

sablono.core.link_to36179.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36179.cljs$lang$maxFixedArity = (1);

sablono.core.link_to36179.cljs$lang$applyTo = (function (seq36180){
var G__36181 = cljs.core.first.call(null,seq36180);
var seq36180__$1 = cljs.core.next.call(null,seq36180);
return sablono.core.link_to36179.cljs$core$IFn$_invoke$arity$variadic(G__36181,seq36180__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36179);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36185 = (function sablono$core$mail_to36185(var_args){
var args__27998__auto__ = [];
var len__27991__auto___36192 = arguments.length;
var i__27992__auto___36193 = (0);
while(true){
if((i__27992__auto___36193 < len__27991__auto___36192)){
args__27998__auto__.push((arguments[i__27992__auto___36193]));

var G__36194 = (i__27992__auto___36193 + (1));
i__27992__auto___36193 = G__36194;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((1) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to36185.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27999__auto__);
});

sablono.core.mail_to36185.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36188){
var vec__36189 = p__36188;
var content = cljs.core.nth.call(null,vec__36189,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__26808__auto__ = content;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36185.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to36185.cljs$lang$applyTo = (function (seq36186){
var G__36187 = cljs.core.first.call(null,seq36186);
var seq36186__$1 = cljs.core.next.call(null,seq36186);
return sablono.core.mail_to36185.cljs$core$IFn$_invoke$arity$variadic(G__36187,seq36186__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36185);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36195 = (function sablono$core$unordered_list36195(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27662__auto__ = (function sablono$core$unordered_list36195_$_iter__36200(s__36201){
return (new cljs.core.LazySeq(null,(function (){
var s__36201__$1 = s__36201;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36201__$1);
if(temp__5457__auto__){
var s__36201__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36201__$2)){
var c__27660__auto__ = cljs.core.chunk_first.call(null,s__36201__$2);
var size__27661__auto__ = cljs.core.count.call(null,c__27660__auto__);
var b__36203 = cljs.core.chunk_buffer.call(null,size__27661__auto__);
if((function (){var i__36202 = (0);
while(true){
if((i__36202 < size__27661__auto__)){
var x = cljs.core._nth.call(null,c__27660__auto__,i__36202);
cljs.core.chunk_append.call(null,b__36203,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36204 = (i__36202 + (1));
i__36202 = G__36204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36203),sablono$core$unordered_list36195_$_iter__36200.call(null,cljs.core.chunk_rest.call(null,s__36201__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36203),null);
}
} else {
var x = cljs.core.first.call(null,s__36201__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36195_$_iter__36200.call(null,cljs.core.rest.call(null,s__36201__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27662__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36195);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36205 = (function sablono$core$ordered_list36205(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__27662__auto__ = (function sablono$core$ordered_list36205_$_iter__36210(s__36211){
return (new cljs.core.LazySeq(null,(function (){
var s__36211__$1 = s__36211;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36211__$1);
if(temp__5457__auto__){
var s__36211__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36211__$2)){
var c__27660__auto__ = cljs.core.chunk_first.call(null,s__36211__$2);
var size__27661__auto__ = cljs.core.count.call(null,c__27660__auto__);
var b__36213 = cljs.core.chunk_buffer.call(null,size__27661__auto__);
if((function (){var i__36212 = (0);
while(true){
if((i__36212 < size__27661__auto__)){
var x = cljs.core._nth.call(null,c__27660__auto__,i__36212);
cljs.core.chunk_append.call(null,b__36213,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36214 = (i__36212 + (1));
i__36212 = G__36214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36213),sablono$core$ordered_list36205_$_iter__36210.call(null,cljs.core.chunk_rest.call(null,s__36211__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36213),null);
}
} else {
var x = cljs.core.first.call(null,s__36211__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36205_$_iter__36210.call(null,cljs.core.rest.call(null,s__36211__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27662__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36205);
/**
 * Create an image element.
 */
sablono.core.image36215 = (function sablono$core$image36215(var_args){
var args36216 = [];
var len__27991__auto___36219 = arguments.length;
var i__27992__auto___36220 = (0);
while(true){
if((i__27992__auto___36220 < len__27991__auto___36219)){
args36216.push((arguments[i__27992__auto___36220]));

var G__36221 = (i__27992__auto___36220 + (1));
i__27992__auto___36220 = G__36221;
continue;
} else {
}
break;
}

var G__36218 = args36216.length;
switch (G__36218) {
case 1:
return sablono.core.image36215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36216.length)].join('')));

}
});

sablono.core.image36215.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36215.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36215.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36215);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36223_SHARP_,p2__36224_SHARP_){
return [cljs.core.str(p1__36223_SHARP_),cljs.core.str("["),cljs.core.str(p2__36224_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36225_SHARP_,p2__36226_SHARP_){
return [cljs.core.str(p1__36225_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36226_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26808__auto__ = value;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field36227 = (function sablono$core$color_field36227(var_args){
var args36228 = [];
var len__27991__auto___36295 = arguments.length;
var i__27992__auto___36296 = (0);
while(true){
if((i__27992__auto___36296 < len__27991__auto___36295)){
args36228.push((arguments[i__27992__auto___36296]));

var G__36297 = (i__27992__auto___36296 + (1));
i__27992__auto___36296 = G__36297;
continue;
} else {
}
break;
}

var G__36230 = args36228.length;
switch (G__36230) {
case 1:
return sablono.core.color_field36227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36228.length)].join('')));

}
});

sablono.core.color_field36227.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.color_field36227.call(null,name__36142__auto__,null);
});

sablono.core.color_field36227.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.color_field36227.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36227);

/**
 * Creates a date input field.
 */
sablono.core.date_field36231 = (function sablono$core$date_field36231(var_args){
var args36232 = [];
var len__27991__auto___36299 = arguments.length;
var i__27992__auto___36300 = (0);
while(true){
if((i__27992__auto___36300 < len__27991__auto___36299)){
args36232.push((arguments[i__27992__auto___36300]));

var G__36301 = (i__27992__auto___36300 + (1));
i__27992__auto___36300 = G__36301;
continue;
} else {
}
break;
}

var G__36234 = args36232.length;
switch (G__36234) {
case 1:
return sablono.core.date_field36231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36232.length)].join('')));

}
});

sablono.core.date_field36231.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.date_field36231.call(null,name__36142__auto__,null);
});

sablono.core.date_field36231.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.date_field36231.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36231);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36235 = (function sablono$core$datetime_field36235(var_args){
var args36236 = [];
var len__27991__auto___36303 = arguments.length;
var i__27992__auto___36304 = (0);
while(true){
if((i__27992__auto___36304 < len__27991__auto___36303)){
args36236.push((arguments[i__27992__auto___36304]));

var G__36305 = (i__27992__auto___36304 + (1));
i__27992__auto___36304 = G__36305;
continue;
} else {
}
break;
}

var G__36238 = args36236.length;
switch (G__36238) {
case 1:
return sablono.core.datetime_field36235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36236.length)].join('')));

}
});

sablono.core.datetime_field36235.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.datetime_field36235.call(null,name__36142__auto__,null);
});

sablono.core.datetime_field36235.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.datetime_field36235.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36235);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36239 = (function sablono$core$datetime_local_field36239(var_args){
var args36240 = [];
var len__27991__auto___36307 = arguments.length;
var i__27992__auto___36308 = (0);
while(true){
if((i__27992__auto___36308 < len__27991__auto___36307)){
args36240.push((arguments[i__27992__auto___36308]));

var G__36309 = (i__27992__auto___36308 + (1));
i__27992__auto___36308 = G__36309;
continue;
} else {
}
break;
}

var G__36242 = args36240.length;
switch (G__36242) {
case 1:
return sablono.core.datetime_local_field36239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36240.length)].join('')));

}
});

sablono.core.datetime_local_field36239.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.datetime_local_field36239.call(null,name__36142__auto__,null);
});

sablono.core.datetime_local_field36239.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.datetime_local_field36239.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36239);

/**
 * Creates a email input field.
 */
sablono.core.email_field36243 = (function sablono$core$email_field36243(var_args){
var args36244 = [];
var len__27991__auto___36311 = arguments.length;
var i__27992__auto___36312 = (0);
while(true){
if((i__27992__auto___36312 < len__27991__auto___36311)){
args36244.push((arguments[i__27992__auto___36312]));

var G__36313 = (i__27992__auto___36312 + (1));
i__27992__auto___36312 = G__36313;
continue;
} else {
}
break;
}

var G__36246 = args36244.length;
switch (G__36246) {
case 1:
return sablono.core.email_field36243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36244.length)].join('')));

}
});

sablono.core.email_field36243.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.email_field36243.call(null,name__36142__auto__,null);
});

sablono.core.email_field36243.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.email_field36243.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36243);

/**
 * Creates a file input field.
 */
sablono.core.file_field36247 = (function sablono$core$file_field36247(var_args){
var args36248 = [];
var len__27991__auto___36315 = arguments.length;
var i__27992__auto___36316 = (0);
while(true){
if((i__27992__auto___36316 < len__27991__auto___36315)){
args36248.push((arguments[i__27992__auto___36316]));

var G__36317 = (i__27992__auto___36316 + (1));
i__27992__auto___36316 = G__36317;
continue;
} else {
}
break;
}

var G__36250 = args36248.length;
switch (G__36250) {
case 1:
return sablono.core.file_field36247.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36247.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36248.length)].join('')));

}
});

sablono.core.file_field36247.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.file_field36247.call(null,name__36142__auto__,null);
});

sablono.core.file_field36247.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.file_field36247.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36247);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36251 = (function sablono$core$hidden_field36251(var_args){
var args36252 = [];
var len__27991__auto___36319 = arguments.length;
var i__27992__auto___36320 = (0);
while(true){
if((i__27992__auto___36320 < len__27991__auto___36319)){
args36252.push((arguments[i__27992__auto___36320]));

var G__36321 = (i__27992__auto___36320 + (1));
i__27992__auto___36320 = G__36321;
continue;
} else {
}
break;
}

var G__36254 = args36252.length;
switch (G__36254) {
case 1:
return sablono.core.hidden_field36251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36252.length)].join('')));

}
});

sablono.core.hidden_field36251.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.hidden_field36251.call(null,name__36142__auto__,null);
});

sablono.core.hidden_field36251.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.hidden_field36251.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36251);

/**
 * Creates a month input field.
 */
sablono.core.month_field36255 = (function sablono$core$month_field36255(var_args){
var args36256 = [];
var len__27991__auto___36323 = arguments.length;
var i__27992__auto___36324 = (0);
while(true){
if((i__27992__auto___36324 < len__27991__auto___36323)){
args36256.push((arguments[i__27992__auto___36324]));

var G__36325 = (i__27992__auto___36324 + (1));
i__27992__auto___36324 = G__36325;
continue;
} else {
}
break;
}

var G__36258 = args36256.length;
switch (G__36258) {
case 1:
return sablono.core.month_field36255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36256.length)].join('')));

}
});

sablono.core.month_field36255.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.month_field36255.call(null,name__36142__auto__,null);
});

sablono.core.month_field36255.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.month_field36255.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36255);

/**
 * Creates a number input field.
 */
sablono.core.number_field36259 = (function sablono$core$number_field36259(var_args){
var args36260 = [];
var len__27991__auto___36327 = arguments.length;
var i__27992__auto___36328 = (0);
while(true){
if((i__27992__auto___36328 < len__27991__auto___36327)){
args36260.push((arguments[i__27992__auto___36328]));

var G__36329 = (i__27992__auto___36328 + (1));
i__27992__auto___36328 = G__36329;
continue;
} else {
}
break;
}

var G__36262 = args36260.length;
switch (G__36262) {
case 1:
return sablono.core.number_field36259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36260.length)].join('')));

}
});

sablono.core.number_field36259.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.number_field36259.call(null,name__36142__auto__,null);
});

sablono.core.number_field36259.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.number_field36259.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36259);

/**
 * Creates a password input field.
 */
sablono.core.password_field36263 = (function sablono$core$password_field36263(var_args){
var args36264 = [];
var len__27991__auto___36331 = arguments.length;
var i__27992__auto___36332 = (0);
while(true){
if((i__27992__auto___36332 < len__27991__auto___36331)){
args36264.push((arguments[i__27992__auto___36332]));

var G__36333 = (i__27992__auto___36332 + (1));
i__27992__auto___36332 = G__36333;
continue;
} else {
}
break;
}

var G__36266 = args36264.length;
switch (G__36266) {
case 1:
return sablono.core.password_field36263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36264.length)].join('')));

}
});

sablono.core.password_field36263.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.password_field36263.call(null,name__36142__auto__,null);
});

sablono.core.password_field36263.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.password_field36263.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36263);

/**
 * Creates a range input field.
 */
sablono.core.range_field36267 = (function sablono$core$range_field36267(var_args){
var args36268 = [];
var len__27991__auto___36335 = arguments.length;
var i__27992__auto___36336 = (0);
while(true){
if((i__27992__auto___36336 < len__27991__auto___36335)){
args36268.push((arguments[i__27992__auto___36336]));

var G__36337 = (i__27992__auto___36336 + (1));
i__27992__auto___36336 = G__36337;
continue;
} else {
}
break;
}

var G__36270 = args36268.length;
switch (G__36270) {
case 1:
return sablono.core.range_field36267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36268.length)].join('')));

}
});

sablono.core.range_field36267.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.range_field36267.call(null,name__36142__auto__,null);
});

sablono.core.range_field36267.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.range_field36267.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36267);

/**
 * Creates a search input field.
 */
sablono.core.search_field36271 = (function sablono$core$search_field36271(var_args){
var args36272 = [];
var len__27991__auto___36339 = arguments.length;
var i__27992__auto___36340 = (0);
while(true){
if((i__27992__auto___36340 < len__27991__auto___36339)){
args36272.push((arguments[i__27992__auto___36340]));

var G__36341 = (i__27992__auto___36340 + (1));
i__27992__auto___36340 = G__36341;
continue;
} else {
}
break;
}

var G__36274 = args36272.length;
switch (G__36274) {
case 1:
return sablono.core.search_field36271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36272.length)].join('')));

}
});

sablono.core.search_field36271.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.search_field36271.call(null,name__36142__auto__,null);
});

sablono.core.search_field36271.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.search_field36271.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36271);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36275 = (function sablono$core$tel_field36275(var_args){
var args36276 = [];
var len__27991__auto___36343 = arguments.length;
var i__27992__auto___36344 = (0);
while(true){
if((i__27992__auto___36344 < len__27991__auto___36343)){
args36276.push((arguments[i__27992__auto___36344]));

var G__36345 = (i__27992__auto___36344 + (1));
i__27992__auto___36344 = G__36345;
continue;
} else {
}
break;
}

var G__36278 = args36276.length;
switch (G__36278) {
case 1:
return sablono.core.tel_field36275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36276.length)].join('')));

}
});

sablono.core.tel_field36275.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.tel_field36275.call(null,name__36142__auto__,null);
});

sablono.core.tel_field36275.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.tel_field36275.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36275);

/**
 * Creates a text input field.
 */
sablono.core.text_field36279 = (function sablono$core$text_field36279(var_args){
var args36280 = [];
var len__27991__auto___36347 = arguments.length;
var i__27992__auto___36348 = (0);
while(true){
if((i__27992__auto___36348 < len__27991__auto___36347)){
args36280.push((arguments[i__27992__auto___36348]));

var G__36349 = (i__27992__auto___36348 + (1));
i__27992__auto___36348 = G__36349;
continue;
} else {
}
break;
}

var G__36282 = args36280.length;
switch (G__36282) {
case 1:
return sablono.core.text_field36279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36280.length)].join('')));

}
});

sablono.core.text_field36279.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.text_field36279.call(null,name__36142__auto__,null);
});

sablono.core.text_field36279.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.text_field36279.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36279);

/**
 * Creates a time input field.
 */
sablono.core.time_field36283 = (function sablono$core$time_field36283(var_args){
var args36284 = [];
var len__27991__auto___36351 = arguments.length;
var i__27992__auto___36352 = (0);
while(true){
if((i__27992__auto___36352 < len__27991__auto___36351)){
args36284.push((arguments[i__27992__auto___36352]));

var G__36353 = (i__27992__auto___36352 + (1));
i__27992__auto___36352 = G__36353;
continue;
} else {
}
break;
}

var G__36286 = args36284.length;
switch (G__36286) {
case 1:
return sablono.core.time_field36283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36284.length)].join('')));

}
});

sablono.core.time_field36283.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.time_field36283.call(null,name__36142__auto__,null);
});

sablono.core.time_field36283.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.time_field36283.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36283);

/**
 * Creates a url input field.
 */
sablono.core.url_field36287 = (function sablono$core$url_field36287(var_args){
var args36288 = [];
var len__27991__auto___36355 = arguments.length;
var i__27992__auto___36356 = (0);
while(true){
if((i__27992__auto___36356 < len__27991__auto___36355)){
args36288.push((arguments[i__27992__auto___36356]));

var G__36357 = (i__27992__auto___36356 + (1));
i__27992__auto___36356 = G__36357;
continue;
} else {
}
break;
}

var G__36290 = args36288.length;
switch (G__36290) {
case 1:
return sablono.core.url_field36287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36288.length)].join('')));

}
});

sablono.core.url_field36287.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.url_field36287.call(null,name__36142__auto__,null);
});

sablono.core.url_field36287.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.url_field36287.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36287);

/**
 * Creates a week input field.
 */
sablono.core.week_field36291 = (function sablono$core$week_field36291(var_args){
var args36292 = [];
var len__27991__auto___36359 = arguments.length;
var i__27992__auto___36360 = (0);
while(true){
if((i__27992__auto___36360 < len__27991__auto___36359)){
args36292.push((arguments[i__27992__auto___36360]));

var G__36361 = (i__27992__auto___36360 + (1));
i__27992__auto___36360 = G__36361;
continue;
} else {
}
break;
}

var G__36294 = args36292.length;
switch (G__36294) {
case 1:
return sablono.core.week_field36291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36292.length)].join('')));

}
});

sablono.core.week_field36291.cljs$core$IFn$_invoke$arity$1 = (function (name__36142__auto__){
return sablono.core.week_field36291.call(null,name__36142__auto__,null);
});

sablono.core.week_field36291.cljs$core$IFn$_invoke$arity$2 = (function (name__36142__auto__,value__36143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__36142__auto__,value__36143__auto__);
});

sablono.core.week_field36291.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36291);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36363 = (function sablono$core$check_box36363(var_args){
var args36364 = [];
var len__27991__auto___36367 = arguments.length;
var i__27992__auto___36368 = (0);
while(true){
if((i__27992__auto___36368 < len__27991__auto___36367)){
args36364.push((arguments[i__27992__auto___36368]));

var G__36369 = (i__27992__auto___36368 + (1));
i__27992__auto___36368 = G__36369;
continue;
} else {
}
break;
}

var G__36366 = args36364.length;
switch (G__36366) {
case 1:
return sablono.core.check_box36363.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36363.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36363.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36364.length)].join('')));

}
});

sablono.core.check_box36363.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box36363.call(null,name,null);
});

sablono.core.check_box36363.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box36363.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box36363.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26808__auto__ = value;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36363.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36363);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36371 = (function sablono$core$radio_button36371(var_args){
var args36372 = [];
var len__27991__auto___36375 = arguments.length;
var i__27992__auto___36376 = (0);
while(true){
if((i__27992__auto___36376 < len__27991__auto___36375)){
args36372.push((arguments[i__27992__auto___36376]));

var G__36377 = (i__27992__auto___36376 + (1));
i__27992__auto___36376 = G__36377;
continue;
} else {
}
break;
}

var G__36374 = args36372.length;
switch (G__36374) {
case 1:
return sablono.core.radio_button36371.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36371.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36371.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36372.length)].join('')));

}
});

sablono.core.radio_button36371.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button36371.call(null,group,null);
});

sablono.core.radio_button36371.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button36371.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button36371.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26808__auto__ = value;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36371.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36371);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36379 = (function sablono$core$select_options36379(coll){
var iter__27662__auto__ = (function sablono$core$select_options36379_$_iter__36396(s__36397){
return (new cljs.core.LazySeq(null,(function (){
var s__36397__$1 = s__36397;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36397__$1);
if(temp__5457__auto__){
var s__36397__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36397__$2)){
var c__27660__auto__ = cljs.core.chunk_first.call(null,s__36397__$2);
var size__27661__auto__ = cljs.core.count.call(null,c__27660__auto__);
var b__36399 = cljs.core.chunk_buffer.call(null,size__27661__auto__);
if((function (){var i__36398 = (0);
while(true){
if((i__36398 < size__27661__auto__)){
var x = cljs.core._nth.call(null,c__27660__auto__,i__36398);
cljs.core.chunk_append.call(null,b__36399,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36406 = x;
var text = cljs.core.nth.call(null,vec__36406,(0),null);
var val = cljs.core.nth.call(null,vec__36406,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36406,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options36379.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__36412 = (i__36398 + (1));
i__36398 = G__36412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36399),sablono$core$select_options36379_$_iter__36396.call(null,cljs.core.chunk_rest.call(null,s__36397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36399),null);
}
} else {
var x = cljs.core.first.call(null,s__36397__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36409 = x;
var text = cljs.core.nth.call(null,vec__36409,(0),null);
var val = cljs.core.nth.call(null,vec__36409,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36409,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options36379.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options36379_$_iter__36396.call(null,cljs.core.rest.call(null,s__36397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27662__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36379);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down36413 = (function sablono$core$drop_down36413(var_args){
var args36414 = [];
var len__27991__auto___36417 = arguments.length;
var i__27992__auto___36418 = (0);
while(true){
if((i__27992__auto___36418 < len__27991__auto___36417)){
args36414.push((arguments[i__27992__auto___36418]));

var G__36419 = (i__27992__auto___36418 + (1));
i__27992__auto___36418 = G__36419;
continue;
} else {
}
break;
}

var G__36416 = args36414.length;
switch (G__36416) {
case 2:
return sablono.core.drop_down36413.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down36413.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36414.length)].join('')));

}
});

sablono.core.drop_down36413.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down36413.call(null,name,options,null);
});

sablono.core.drop_down36413.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down36413.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36413);
/**
 * Creates a text area element.
 */
sablono.core.text_area36421 = (function sablono$core$text_area36421(var_args){
var args36422 = [];
var len__27991__auto___36425 = arguments.length;
var i__27992__auto___36426 = (0);
while(true){
if((i__27992__auto___36426 < len__27991__auto___36425)){
args36422.push((arguments[i__27992__auto___36426]));

var G__36427 = (i__27992__auto___36426 + (1));
i__27992__auto___36426 = G__36427;
continue;
} else {
}
break;
}

var G__36424 = args36422.length;
switch (G__36424) {
case 1:
return sablono.core.text_area36421.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area36421.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36422.length)].join('')));

}
});

sablono.core.text_area36421.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area36421.call(null,name,null);
});

sablono.core.text_area36421.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26808__auto__ = value;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area36421.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36421);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label36429 = (function sablono$core$label36429(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36429);
/**
 * Creates a submit button.
 */
sablono.core.submit_button36430 = (function sablono$core$submit_button36430(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36430);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button36431 = (function sablono$core$reset_button36431(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36431);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to36432 = (function sablono$core$form_to36432(var_args){
var args__27998__auto__ = [];
var len__27991__auto___36439 = arguments.length;
var i__27992__auto___36440 = (0);
while(true){
if((i__27992__auto___36440 < len__27991__auto___36439)){
args__27998__auto__.push((arguments[i__27992__auto___36440]));

var G__36441 = (i__27992__auto___36440 + (1));
i__27992__auto___36440 = G__36441;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((1) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to36432.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27999__auto__);
});

sablono.core.form_to36432.cljs$core$IFn$_invoke$arity$variadic = (function (p__36435,body){
var vec__36436 = p__36435;
var method = cljs.core.nth.call(null,vec__36436,(0),null);
var action = cljs.core.nth.call(null,vec__36436,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to36432.cljs$lang$maxFixedArity = (1);

sablono.core.form_to36432.cljs$lang$applyTo = (function (seq36433){
var G__36434 = cljs.core.first.call(null,seq36433);
var seq36433__$1 = cljs.core.next.call(null,seq36433);
return sablono.core.form_to36432.cljs$core$IFn$_invoke$arity$variadic(G__36434,seq36433__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36432);

//# sourceMappingURL=core.js.map?rel=1538029295353