// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__34883__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34884__i = 0, G__34884__a = new Array(arguments.length -  0);
while (G__34884__i < G__34884__a.length) {G__34884__a[G__34884__i] = arguments[G__34884__i + 0]; ++G__34884__i;}
  args = new cljs.core.IndexedSeq(G__34884__a,0);
} 
return G__34883__delegate.call(this,args);};
G__34883.cljs$lang$maxFixedArity = 0;
G__34883.cljs$lang$applyTo = (function (arglist__34885){
var args = cljs.core.seq(arglist__34885);
return G__34883__delegate(args);
});
G__34883.cljs$core$IFn$_invoke$arity$variadic = G__34883__delegate;
return G__34883;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__34886__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34887__i = 0, G__34887__a = new Array(arguments.length -  0);
while (G__34887__i < G__34887__a.length) {G__34887__a[G__34887__i] = arguments[G__34887__i + 0]; ++G__34887__i;}
  args = new cljs.core.IndexedSeq(G__34887__a,0);
} 
return G__34886__delegate.call(this,args);};
G__34886.cljs$lang$maxFixedArity = 0;
G__34886.cljs$lang$applyTo = (function (arglist__34888){
var args = cljs.core.seq(arglist__34888);
return G__34886__delegate(args);
});
G__34886.cljs$core$IFn$_invoke$arity$variadic = G__34886__delegate;
return G__34886;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1538029292126