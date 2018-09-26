// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__26808__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_41328 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_41328){
return (function (){
var _STAR_always_update_STAR_41329 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_41329;
}});})(_STAR_always_update_STAR_41328))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_41328;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args41330 = [];
var len__27992__auto___41333 = arguments.length;
var i__27993__auto___41334 = (0);
while(true){
if((i__27993__auto___41334 < len__27992__auto___41333)){
args41330.push((arguments[i__27993__auto___41334]));

var G__41335 = (i__27993__auto___41334 + (1));
i__27993__auto___41334 = G__41335;
continue;
} else {
}
break;
}

var G__41332 = args41330.length;
switch (G__41332) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41330.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__41341_41345 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__41342_41346 = null;
var count__41343_41347 = (0);
var i__41344_41348 = (0);
while(true){
if((i__41344_41348 < count__41343_41347)){
var v_41349 = cljs.core._nth.call(null,chunk__41342_41346,i__41344_41348);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_41349);

var G__41350 = seq__41341_41345;
var G__41351 = chunk__41342_41346;
var G__41352 = count__41343_41347;
var G__41353 = (i__41344_41348 + (1));
seq__41341_41345 = G__41350;
chunk__41342_41346 = G__41351;
count__41343_41347 = G__41352;
i__41344_41348 = G__41353;
continue;
} else {
var temp__5457__auto___41354 = cljs.core.seq.call(null,seq__41341_41345);
if(temp__5457__auto___41354){
var seq__41341_41355__$1 = temp__5457__auto___41354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41341_41355__$1)){
var c__27712__auto___41356 = cljs.core.chunk_first.call(null,seq__41341_41355__$1);
var G__41357 = cljs.core.chunk_rest.call(null,seq__41341_41355__$1);
var G__41358 = c__27712__auto___41356;
var G__41359 = cljs.core.count.call(null,c__27712__auto___41356);
var G__41360 = (0);
seq__41341_41345 = G__41357;
chunk__41342_41346 = G__41358;
count__41343_41347 = G__41359;
i__41344_41348 = G__41360;
continue;
} else {
var v_41361 = cljs.core.first.call(null,seq__41341_41355__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_41361);

var G__41362 = cljs.core.next.call(null,seq__41341_41355__$1);
var G__41363 = null;
var G__41364 = (0);
var G__41365 = (0);
seq__41341_41345 = G__41362;
chunk__41342_41346 = G__41363;
count__41343_41347 = G__41364;
i__41344_41348 = G__41365;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1537986101654