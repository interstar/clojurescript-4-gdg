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
var G__35494__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__35491 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__35492 = cljs.core.seq.call(null,vec__35491);
var first__35493 = cljs.core.first.call(null,seq__35492);
var seq__35492__$1 = cljs.core.next.call(null,seq__35492);
var tag = first__35493;
var body = seq__35492__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__35494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35495__i = 0, G__35495__a = new Array(arguments.length -  0);
while (G__35495__i < G__35495__a.length) {G__35495__a[G__35495__i] = arguments[G__35495__i + 0]; ++G__35495__i;}
  args = new cljs.core.IndexedSeq(G__35495__a,0);
} 
return G__35494__delegate.call(this,args);};
G__35494.cljs$lang$maxFixedArity = 0;
G__35494.cljs$lang$applyTo = (function (arglist__35496){
var args = cljs.core.seq(arglist__35496);
return G__35494__delegate(args);
});
G__35494.cljs$core$IFn$_invoke$arity$variadic = G__35494__delegate;
return G__35494;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__27663__auto__ = (function sablono$core$update_arglists_$_iter__35501(s__35502){
return (new cljs.core.LazySeq(null,(function (){
var s__35502__$1 = s__35502;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35502__$1);
if(temp__5457__auto__){
var s__35502__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35502__$2)){
var c__27661__auto__ = cljs.core.chunk_first.call(null,s__35502__$2);
var size__27662__auto__ = cljs.core.count.call(null,c__27661__auto__);
var b__35504 = cljs.core.chunk_buffer.call(null,size__27662__auto__);
if((function (){var i__35503 = (0);
while(true){
if((i__35503 < size__27662__auto__)){
var args = cljs.core._nth.call(null,c__27661__auto__,i__35503);
cljs.core.chunk_append.call(null,b__35504,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__35505 = (i__35503 + (1));
i__35503 = G__35505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35504),sablono$core$update_arglists_$_iter__35501.call(null,cljs.core.chunk_rest.call(null,s__35502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35504),null);
}
} else {
var args = cljs.core.first.call(null,s__35502__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__35501.call(null,cljs.core.rest.call(null,s__35502__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27663__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__27999__auto__ = [];
var len__27992__auto___35511 = arguments.length;
var i__27993__auto___35512 = (0);
while(true){
if((i__27993__auto___35512 < len__27992__auto___35511)){
args__27999__auto__.push((arguments[i__27993__auto___35512]));

var G__35513 = (i__27993__auto___35512 + (1));
i__27993__auto___35512 = G__35513;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__27663__auto__ = (function sablono$core$iter__35507(s__35508){
return (new cljs.core.LazySeq(null,(function (){
var s__35508__$1 = s__35508;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35508__$1);
if(temp__5457__auto__){
var s__35508__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35508__$2)){
var c__27661__auto__ = cljs.core.chunk_first.call(null,s__35508__$2);
var size__27662__auto__ = cljs.core.count.call(null,c__27661__auto__);
var b__35510 = cljs.core.chunk_buffer.call(null,size__27662__auto__);
if((function (){var i__35509 = (0);
while(true){
if((i__35509 < size__27662__auto__)){
var style = cljs.core._nth.call(null,c__27661__auto__,i__35509);
cljs.core.chunk_append.call(null,b__35510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__35514 = (i__35509 + (1));
i__35509 = G__35514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35510),sablono$core$iter__35507.call(null,cljs.core.chunk_rest.call(null,s__35508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35510),null);
}
} else {
var style = cljs.core.first.call(null,s__35508__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__35507.call(null,cljs.core.rest.call(null,s__35508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27663__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq35506){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35506));
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
sablono.core.link_to35515 = (function sablono$core$link_to35515(var_args){
var args__27999__auto__ = [];
var len__27992__auto___35518 = arguments.length;
var i__27993__auto___35519 = (0);
while(true){
if((i__27993__auto___35519 < len__27992__auto___35518)){
args__27999__auto__.push((arguments[i__27993__auto___35519]));

var G__35520 = (i__27993__auto___35519 + (1));
i__27993__auto___35519 = G__35520;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((1) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to35515.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28000__auto__);
});

sablono.core.link_to35515.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to35515.cljs$lang$maxFixedArity = (1);

sablono.core.link_to35515.cljs$lang$applyTo = (function (seq35516){
var G__35517 = cljs.core.first.call(null,seq35516);
var seq35516__$1 = cljs.core.next.call(null,seq35516);
return sablono.core.link_to35515.cljs$core$IFn$_invoke$arity$variadic(G__35517,seq35516__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35515);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35521 = (function sablono$core$mail_to35521(var_args){
var args__27999__auto__ = [];
var len__27992__auto___35528 = arguments.length;
var i__27993__auto___35529 = (0);
while(true){
if((i__27993__auto___35529 < len__27992__auto___35528)){
args__27999__auto__.push((arguments[i__27993__auto___35529]));

var G__35530 = (i__27993__auto___35529 + (1));
i__27993__auto___35529 = G__35530;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((1) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to35521.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28000__auto__);
});

sablono.core.mail_to35521.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35524){
var vec__35525 = p__35524;
var content = cljs.core.nth.call(null,vec__35525,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__26808__auto__ = content;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to35521.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to35521.cljs$lang$applyTo = (function (seq35522){
var G__35523 = cljs.core.first.call(null,seq35522);
var seq35522__$1 = cljs.core.next.call(null,seq35522);
return sablono.core.mail_to35521.cljs$core$IFn$_invoke$arity$variadic(G__35523,seq35522__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35521);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35531 = (function sablono$core$unordered_list35531(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27663__auto__ = (function sablono$core$unordered_list35531_$_iter__35536(s__35537){
return (new cljs.core.LazySeq(null,(function (){
var s__35537__$1 = s__35537;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35537__$1);
if(temp__5457__auto__){
var s__35537__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35537__$2)){
var c__27661__auto__ = cljs.core.chunk_first.call(null,s__35537__$2);
var size__27662__auto__ = cljs.core.count.call(null,c__27661__auto__);
var b__35539 = cljs.core.chunk_buffer.call(null,size__27662__auto__);
if((function (){var i__35538 = (0);
while(true){
if((i__35538 < size__27662__auto__)){
var x = cljs.core._nth.call(null,c__27661__auto__,i__35538);
cljs.core.chunk_append.call(null,b__35539,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35540 = (i__35538 + (1));
i__35538 = G__35540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35539),sablono$core$unordered_list35531_$_iter__35536.call(null,cljs.core.chunk_rest.call(null,s__35537__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35539),null);
}
} else {
var x = cljs.core.first.call(null,s__35537__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list35531_$_iter__35536.call(null,cljs.core.rest.call(null,s__35537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27663__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35531);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35541 = (function sablono$core$ordered_list35541(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__27663__auto__ = (function sablono$core$ordered_list35541_$_iter__35546(s__35547){
return (new cljs.core.LazySeq(null,(function (){
var s__35547__$1 = s__35547;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35547__$1);
if(temp__5457__auto__){
var s__35547__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35547__$2)){
var c__27661__auto__ = cljs.core.chunk_first.call(null,s__35547__$2);
var size__27662__auto__ = cljs.core.count.call(null,c__27661__auto__);
var b__35549 = cljs.core.chunk_buffer.call(null,size__27662__auto__);
if((function (){var i__35548 = (0);
while(true){
if((i__35548 < size__27662__auto__)){
var x = cljs.core._nth.call(null,c__27661__auto__,i__35548);
cljs.core.chunk_append.call(null,b__35549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35550 = (i__35548 + (1));
i__35548 = G__35550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35549),sablono$core$ordered_list35541_$_iter__35546.call(null,cljs.core.chunk_rest.call(null,s__35547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35549),null);
}
} else {
var x = cljs.core.first.call(null,s__35547__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list35541_$_iter__35546.call(null,cljs.core.rest.call(null,s__35547__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27663__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35541);
/**
 * Create an image element.
 */
sablono.core.image35551 = (function sablono$core$image35551(var_args){
var args35552 = [];
var len__27992__auto___35555 = arguments.length;
var i__27993__auto___35556 = (0);
while(true){
if((i__27993__auto___35556 < len__27992__auto___35555)){
args35552.push((arguments[i__27993__auto___35556]));

var G__35557 = (i__27993__auto___35556 + (1));
i__27993__auto___35556 = G__35557;
continue;
} else {
}
break;
}

var G__35554 = args35552.length;
switch (G__35554) {
case 1:
return sablono.core.image35551.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image35551.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35552.length)].join('')));

}
});

sablono.core.image35551.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image35551.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image35551.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35551);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__35559_SHARP_,p2__35560_SHARP_){
return [cljs.core.str(p1__35559_SHARP_),cljs.core.str("["),cljs.core.str(p2__35560_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__35561_SHARP_,p2__35562_SHARP_){
return [cljs.core.str(p1__35561_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35562_SHARP_)].join('');
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
sablono.core.color_field35563 = (function sablono$core$color_field35563(var_args){
var args35564 = [];
var len__27992__auto___35631 = arguments.length;
var i__27993__auto___35632 = (0);
while(true){
if((i__27993__auto___35632 < len__27992__auto___35631)){
args35564.push((arguments[i__27993__auto___35632]));

var G__35633 = (i__27993__auto___35632 + (1));
i__27993__auto___35632 = G__35633;
continue;
} else {
}
break;
}

var G__35566 = args35564.length;
switch (G__35566) {
case 1:
return sablono.core.color_field35563.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field35563.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35564.length)].join('')));

}
});

sablono.core.color_field35563.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.color_field35563.call(null,name__35478__auto__,null);
});

sablono.core.color_field35563.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.color_field35563.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field35563);

/**
 * Creates a date input field.
 */
sablono.core.date_field35567 = (function sablono$core$date_field35567(var_args){
var args35568 = [];
var len__27992__auto___35635 = arguments.length;
var i__27993__auto___35636 = (0);
while(true){
if((i__27993__auto___35636 < len__27992__auto___35635)){
args35568.push((arguments[i__27993__auto___35636]));

var G__35637 = (i__27993__auto___35636 + (1));
i__27993__auto___35636 = G__35637;
continue;
} else {
}
break;
}

var G__35570 = args35568.length;
switch (G__35570) {
case 1:
return sablono.core.date_field35567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field35567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35568.length)].join('')));

}
});

sablono.core.date_field35567.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.date_field35567.call(null,name__35478__auto__,null);
});

sablono.core.date_field35567.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.date_field35567.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field35567);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field35571 = (function sablono$core$datetime_field35571(var_args){
var args35572 = [];
var len__27992__auto___35639 = arguments.length;
var i__27993__auto___35640 = (0);
while(true){
if((i__27993__auto___35640 < len__27992__auto___35639)){
args35572.push((arguments[i__27993__auto___35640]));

var G__35641 = (i__27993__auto___35640 + (1));
i__27993__auto___35640 = G__35641;
continue;
} else {
}
break;
}

var G__35574 = args35572.length;
switch (G__35574) {
case 1:
return sablono.core.datetime_field35571.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field35571.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35572.length)].join('')));

}
});

sablono.core.datetime_field35571.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.datetime_field35571.call(null,name__35478__auto__,null);
});

sablono.core.datetime_field35571.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.datetime_field35571.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field35571);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field35575 = (function sablono$core$datetime_local_field35575(var_args){
var args35576 = [];
var len__27992__auto___35643 = arguments.length;
var i__27993__auto___35644 = (0);
while(true){
if((i__27993__auto___35644 < len__27992__auto___35643)){
args35576.push((arguments[i__27993__auto___35644]));

var G__35645 = (i__27993__auto___35644 + (1));
i__27993__auto___35644 = G__35645;
continue;
} else {
}
break;
}

var G__35578 = args35576.length;
switch (G__35578) {
case 1:
return sablono.core.datetime_local_field35575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field35575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35576.length)].join('')));

}
});

sablono.core.datetime_local_field35575.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.datetime_local_field35575.call(null,name__35478__auto__,null);
});

sablono.core.datetime_local_field35575.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.datetime_local_field35575.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field35575);

/**
 * Creates a email input field.
 */
sablono.core.email_field35579 = (function sablono$core$email_field35579(var_args){
var args35580 = [];
var len__27992__auto___35647 = arguments.length;
var i__27993__auto___35648 = (0);
while(true){
if((i__27993__auto___35648 < len__27992__auto___35647)){
args35580.push((arguments[i__27993__auto___35648]));

var G__35649 = (i__27993__auto___35648 + (1));
i__27993__auto___35648 = G__35649;
continue;
} else {
}
break;
}

var G__35582 = args35580.length;
switch (G__35582) {
case 1:
return sablono.core.email_field35579.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field35579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35580.length)].join('')));

}
});

sablono.core.email_field35579.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.email_field35579.call(null,name__35478__auto__,null);
});

sablono.core.email_field35579.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.email_field35579.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35579);

/**
 * Creates a file input field.
 */
sablono.core.file_field35583 = (function sablono$core$file_field35583(var_args){
var args35584 = [];
var len__27992__auto___35651 = arguments.length;
var i__27993__auto___35652 = (0);
while(true){
if((i__27993__auto___35652 < len__27992__auto___35651)){
args35584.push((arguments[i__27993__auto___35652]));

var G__35653 = (i__27993__auto___35652 + (1));
i__27993__auto___35652 = G__35653;
continue;
} else {
}
break;
}

var G__35586 = args35584.length;
switch (G__35586) {
case 1:
return sablono.core.file_field35583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field35583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35584.length)].join('')));

}
});

sablono.core.file_field35583.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.file_field35583.call(null,name__35478__auto__,null);
});

sablono.core.file_field35583.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.file_field35583.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field35583);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field35587 = (function sablono$core$hidden_field35587(var_args){
var args35588 = [];
var len__27992__auto___35655 = arguments.length;
var i__27993__auto___35656 = (0);
while(true){
if((i__27993__auto___35656 < len__27992__auto___35655)){
args35588.push((arguments[i__27993__auto___35656]));

var G__35657 = (i__27993__auto___35656 + (1));
i__27993__auto___35656 = G__35657;
continue;
} else {
}
break;
}

var G__35590 = args35588.length;
switch (G__35590) {
case 1:
return sablono.core.hidden_field35587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field35587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35588.length)].join('')));

}
});

sablono.core.hidden_field35587.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.hidden_field35587.call(null,name__35478__auto__,null);
});

sablono.core.hidden_field35587.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.hidden_field35587.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35587);

/**
 * Creates a month input field.
 */
sablono.core.month_field35591 = (function sablono$core$month_field35591(var_args){
var args35592 = [];
var len__27992__auto___35659 = arguments.length;
var i__27993__auto___35660 = (0);
while(true){
if((i__27993__auto___35660 < len__27992__auto___35659)){
args35592.push((arguments[i__27993__auto___35660]));

var G__35661 = (i__27993__auto___35660 + (1));
i__27993__auto___35660 = G__35661;
continue;
} else {
}
break;
}

var G__35594 = args35592.length;
switch (G__35594) {
case 1:
return sablono.core.month_field35591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field35591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35592.length)].join('')));

}
});

sablono.core.month_field35591.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.month_field35591.call(null,name__35478__auto__,null);
});

sablono.core.month_field35591.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.month_field35591.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field35591);

/**
 * Creates a number input field.
 */
sablono.core.number_field35595 = (function sablono$core$number_field35595(var_args){
var args35596 = [];
var len__27992__auto___35663 = arguments.length;
var i__27993__auto___35664 = (0);
while(true){
if((i__27993__auto___35664 < len__27992__auto___35663)){
args35596.push((arguments[i__27993__auto___35664]));

var G__35665 = (i__27993__auto___35664 + (1));
i__27993__auto___35664 = G__35665;
continue;
} else {
}
break;
}

var G__35598 = args35596.length;
switch (G__35598) {
case 1:
return sablono.core.number_field35595.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field35595.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35596.length)].join('')));

}
});

sablono.core.number_field35595.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.number_field35595.call(null,name__35478__auto__,null);
});

sablono.core.number_field35595.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.number_field35595.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field35595);

/**
 * Creates a password input field.
 */
sablono.core.password_field35599 = (function sablono$core$password_field35599(var_args){
var args35600 = [];
var len__27992__auto___35667 = arguments.length;
var i__27993__auto___35668 = (0);
while(true){
if((i__27993__auto___35668 < len__27992__auto___35667)){
args35600.push((arguments[i__27993__auto___35668]));

var G__35669 = (i__27993__auto___35668 + (1));
i__27993__auto___35668 = G__35669;
continue;
} else {
}
break;
}

var G__35602 = args35600.length;
switch (G__35602) {
case 1:
return sablono.core.password_field35599.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field35599.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35600.length)].join('')));

}
});

sablono.core.password_field35599.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.password_field35599.call(null,name__35478__auto__,null);
});

sablono.core.password_field35599.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.password_field35599.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35599);

/**
 * Creates a range input field.
 */
sablono.core.range_field35603 = (function sablono$core$range_field35603(var_args){
var args35604 = [];
var len__27992__auto___35671 = arguments.length;
var i__27993__auto___35672 = (0);
while(true){
if((i__27993__auto___35672 < len__27992__auto___35671)){
args35604.push((arguments[i__27993__auto___35672]));

var G__35673 = (i__27993__auto___35672 + (1));
i__27993__auto___35672 = G__35673;
continue;
} else {
}
break;
}

var G__35606 = args35604.length;
switch (G__35606) {
case 1:
return sablono.core.range_field35603.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field35603.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35604.length)].join('')));

}
});

sablono.core.range_field35603.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.range_field35603.call(null,name__35478__auto__,null);
});

sablono.core.range_field35603.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.range_field35603.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field35603);

/**
 * Creates a search input field.
 */
sablono.core.search_field35607 = (function sablono$core$search_field35607(var_args){
var args35608 = [];
var len__27992__auto___35675 = arguments.length;
var i__27993__auto___35676 = (0);
while(true){
if((i__27993__auto___35676 < len__27992__auto___35675)){
args35608.push((arguments[i__27993__auto___35676]));

var G__35677 = (i__27993__auto___35676 + (1));
i__27993__auto___35676 = G__35677;
continue;
} else {
}
break;
}

var G__35610 = args35608.length;
switch (G__35610) {
case 1:
return sablono.core.search_field35607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field35607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35608.length)].join('')));

}
});

sablono.core.search_field35607.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.search_field35607.call(null,name__35478__auto__,null);
});

sablono.core.search_field35607.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.search_field35607.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field35607);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field35611 = (function sablono$core$tel_field35611(var_args){
var args35612 = [];
var len__27992__auto___35679 = arguments.length;
var i__27993__auto___35680 = (0);
while(true){
if((i__27993__auto___35680 < len__27992__auto___35679)){
args35612.push((arguments[i__27993__auto___35680]));

var G__35681 = (i__27993__auto___35680 + (1));
i__27993__auto___35680 = G__35681;
continue;
} else {
}
break;
}

var G__35614 = args35612.length;
switch (G__35614) {
case 1:
return sablono.core.tel_field35611.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field35611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35612.length)].join('')));

}
});

sablono.core.tel_field35611.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.tel_field35611.call(null,name__35478__auto__,null);
});

sablono.core.tel_field35611.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.tel_field35611.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field35611);

/**
 * Creates a text input field.
 */
sablono.core.text_field35615 = (function sablono$core$text_field35615(var_args){
var args35616 = [];
var len__27992__auto___35683 = arguments.length;
var i__27993__auto___35684 = (0);
while(true){
if((i__27993__auto___35684 < len__27992__auto___35683)){
args35616.push((arguments[i__27993__auto___35684]));

var G__35685 = (i__27993__auto___35684 + (1));
i__27993__auto___35684 = G__35685;
continue;
} else {
}
break;
}

var G__35618 = args35616.length;
switch (G__35618) {
case 1:
return sablono.core.text_field35615.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field35615.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35616.length)].join('')));

}
});

sablono.core.text_field35615.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.text_field35615.call(null,name__35478__auto__,null);
});

sablono.core.text_field35615.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.text_field35615.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35615);

/**
 * Creates a time input field.
 */
sablono.core.time_field35619 = (function sablono$core$time_field35619(var_args){
var args35620 = [];
var len__27992__auto___35687 = arguments.length;
var i__27993__auto___35688 = (0);
while(true){
if((i__27993__auto___35688 < len__27992__auto___35687)){
args35620.push((arguments[i__27993__auto___35688]));

var G__35689 = (i__27993__auto___35688 + (1));
i__27993__auto___35688 = G__35689;
continue;
} else {
}
break;
}

var G__35622 = args35620.length;
switch (G__35622) {
case 1:
return sablono.core.time_field35619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field35619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35620.length)].join('')));

}
});

sablono.core.time_field35619.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.time_field35619.call(null,name__35478__auto__,null);
});

sablono.core.time_field35619.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.time_field35619.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field35619);

/**
 * Creates a url input field.
 */
sablono.core.url_field35623 = (function sablono$core$url_field35623(var_args){
var args35624 = [];
var len__27992__auto___35691 = arguments.length;
var i__27993__auto___35692 = (0);
while(true){
if((i__27993__auto___35692 < len__27992__auto___35691)){
args35624.push((arguments[i__27993__auto___35692]));

var G__35693 = (i__27993__auto___35692 + (1));
i__27993__auto___35692 = G__35693;
continue;
} else {
}
break;
}

var G__35626 = args35624.length;
switch (G__35626) {
case 1:
return sablono.core.url_field35623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field35623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35624.length)].join('')));

}
});

sablono.core.url_field35623.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.url_field35623.call(null,name__35478__auto__,null);
});

sablono.core.url_field35623.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.url_field35623.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field35623);

/**
 * Creates a week input field.
 */
sablono.core.week_field35627 = (function sablono$core$week_field35627(var_args){
var args35628 = [];
var len__27992__auto___35695 = arguments.length;
var i__27993__auto___35696 = (0);
while(true){
if((i__27993__auto___35696 < len__27992__auto___35695)){
args35628.push((arguments[i__27993__auto___35696]));

var G__35697 = (i__27993__auto___35696 + (1));
i__27993__auto___35696 = G__35697;
continue;
} else {
}
break;
}

var G__35630 = args35628.length;
switch (G__35630) {
case 1:
return sablono.core.week_field35627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field35627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35628.length)].join('')));

}
});

sablono.core.week_field35627.cljs$core$IFn$_invoke$arity$1 = (function (name__35478__auto__){
return sablono.core.week_field35627.call(null,name__35478__auto__,null);
});

sablono.core.week_field35627.cljs$core$IFn$_invoke$arity$2 = (function (name__35478__auto__,value__35479__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__35478__auto__,value__35479__auto__);
});

sablono.core.week_field35627.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field35627);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box35699 = (function sablono$core$check_box35699(var_args){
var args35700 = [];
var len__27992__auto___35703 = arguments.length;
var i__27993__auto___35704 = (0);
while(true){
if((i__27993__auto___35704 < len__27992__auto___35703)){
args35700.push((arguments[i__27993__auto___35704]));

var G__35705 = (i__27993__auto___35704 + (1));
i__27993__auto___35704 = G__35705;
continue;
} else {
}
break;
}

var G__35702 = args35700.length;
switch (G__35702) {
case 1:
return sablono.core.check_box35699.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box35699.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box35699.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35700.length)].join('')));

}
});

sablono.core.check_box35699.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box35699.call(null,name,null);
});

sablono.core.check_box35699.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box35699.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box35699.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26808__auto__ = value;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box35699.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35699);
/**
 * Creates a radio button.
 */
sablono.core.radio_button35707 = (function sablono$core$radio_button35707(var_args){
var args35708 = [];
var len__27992__auto___35711 = arguments.length;
var i__27993__auto___35712 = (0);
while(true){
if((i__27993__auto___35712 < len__27992__auto___35711)){
args35708.push((arguments[i__27993__auto___35712]));

var G__35713 = (i__27993__auto___35712 + (1));
i__27993__auto___35712 = G__35713;
continue;
} else {
}
break;
}

var G__35710 = args35708.length;
switch (G__35710) {
case 1:
return sablono.core.radio_button35707.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button35707.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button35707.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35708.length)].join('')));

}
});

sablono.core.radio_button35707.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button35707.call(null,group,null);
});

sablono.core.radio_button35707.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button35707.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button35707.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26808__auto__ = value;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button35707.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35707);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options35715 = (function sablono$core$select_options35715(coll){
var iter__27663__auto__ = (function sablono$core$select_options35715_$_iter__35732(s__35733){
return (new cljs.core.LazySeq(null,(function (){
var s__35733__$1 = s__35733;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35733__$1);
if(temp__5457__auto__){
var s__35733__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35733__$2)){
var c__27661__auto__ = cljs.core.chunk_first.call(null,s__35733__$2);
var size__27662__auto__ = cljs.core.count.call(null,c__27661__auto__);
var b__35735 = cljs.core.chunk_buffer.call(null,size__27662__auto__);
if((function (){var i__35734 = (0);
while(true){
if((i__35734 < size__27662__auto__)){
var x = cljs.core._nth.call(null,c__27661__auto__,i__35734);
cljs.core.chunk_append.call(null,b__35735,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35742 = x;
var text = cljs.core.nth.call(null,vec__35742,(0),null);
var val = cljs.core.nth.call(null,vec__35742,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35742,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options35715.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__35748 = (i__35734 + (1));
i__35734 = G__35748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35735),sablono$core$select_options35715_$_iter__35732.call(null,cljs.core.chunk_rest.call(null,s__35733__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35735),null);
}
} else {
var x = cljs.core.first.call(null,s__35733__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35745 = x;
var text = cljs.core.nth.call(null,vec__35745,(0),null);
var val = cljs.core.nth.call(null,vec__35745,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35745,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options35715.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options35715_$_iter__35732.call(null,cljs.core.rest.call(null,s__35733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27663__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35715);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down35749 = (function sablono$core$drop_down35749(var_args){
var args35750 = [];
var len__27992__auto___35753 = arguments.length;
var i__27993__auto___35754 = (0);
while(true){
if((i__27993__auto___35754 < len__27992__auto___35753)){
args35750.push((arguments[i__27993__auto___35754]));

var G__35755 = (i__27993__auto___35754 + (1));
i__27993__auto___35754 = G__35755;
continue;
} else {
}
break;
}

var G__35752 = args35750.length;
switch (G__35752) {
case 2:
return sablono.core.drop_down35749.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down35749.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35750.length)].join('')));

}
});

sablono.core.drop_down35749.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down35749.call(null,name,options,null);
});

sablono.core.drop_down35749.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down35749.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35749);
/**
 * Creates a text area element.
 */
sablono.core.text_area35757 = (function sablono$core$text_area35757(var_args){
var args35758 = [];
var len__27992__auto___35761 = arguments.length;
var i__27993__auto___35762 = (0);
while(true){
if((i__27993__auto___35762 < len__27992__auto___35761)){
args35758.push((arguments[i__27993__auto___35762]));

var G__35763 = (i__27993__auto___35762 + (1));
i__27993__auto___35762 = G__35763;
continue;
} else {
}
break;
}

var G__35760 = args35758.length;
switch (G__35760) {
case 1:
return sablono.core.text_area35757.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area35757.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35758.length)].join('')));

}
});

sablono.core.text_area35757.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area35757.call(null,name,null);
});

sablono.core.text_area35757.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26808__auto__ = value;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area35757.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35757);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label35765 = (function sablono$core$label35765(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35765);
/**
 * Creates a submit button.
 */
sablono.core.submit_button35766 = (function sablono$core$submit_button35766(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35766);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button35767 = (function sablono$core$reset_button35767(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35767);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to35768 = (function sablono$core$form_to35768(var_args){
var args__27999__auto__ = [];
var len__27992__auto___35775 = arguments.length;
var i__27993__auto___35776 = (0);
while(true){
if((i__27993__auto___35776 < len__27992__auto___35775)){
args__27999__auto__.push((arguments[i__27993__auto___35776]));

var G__35777 = (i__27993__auto___35776 + (1));
i__27993__auto___35776 = G__35777;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((1) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to35768.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28000__auto__);
});

sablono.core.form_to35768.cljs$core$IFn$_invoke$arity$variadic = (function (p__35771,body){
var vec__35772 = p__35771;
var method = cljs.core.nth.call(null,vec__35772,(0),null);
var action = cljs.core.nth.call(null,vec__35772,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to35768.cljs$lang$maxFixedArity = (1);

sablono.core.form_to35768.cljs$lang$applyTo = (function (seq35769){
var G__35770 = cljs.core.first.call(null,seq35769);
var seq35769__$1 = cljs.core.next.call(null,seq35769);
return sablono.core.form_to35768.cljs$core$IFn$_invoke$arity$variadic(G__35770,seq35769__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35768);

//# sourceMappingURL=core.js.map?rel=1537985796205