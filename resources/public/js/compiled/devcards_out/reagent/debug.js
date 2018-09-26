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
var G__41014__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__41014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41015__i = 0, G__41015__a = new Array(arguments.length -  0);
while (G__41015__i < G__41015__a.length) {G__41015__a[G__41015__i] = arguments[G__41015__i + 0]; ++G__41015__i;}
  args = new cljs.core.IndexedSeq(G__41015__a,0);
} 
return G__41014__delegate.call(this,args);};
G__41014.cljs$lang$maxFixedArity = 0;
G__41014.cljs$lang$applyTo = (function (arglist__41016){
var args = cljs.core.seq(arglist__41016);
return G__41014__delegate(args);
});
G__41014.cljs$core$IFn$_invoke$arity$variadic = G__41014__delegate;
return G__41014;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__41017__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__41017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41018__i = 0, G__41018__a = new Array(arguments.length -  0);
while (G__41018__i < G__41018__a.length) {G__41018__a[G__41018__i] = arguments[G__41018__i + 0]; ++G__41018__i;}
  args = new cljs.core.IndexedSeq(G__41018__a,0);
} 
return G__41017__delegate.call(this,args);};
G__41017.cljs$lang$maxFixedArity = 0;
G__41017.cljs$lang$applyTo = (function (arglist__41019){
var args = cljs.core.seq(arglist__41019);
return G__41017__delegate(args);
});
G__41017.cljs$core$IFn$_invoke$arity$variadic = G__41017__delegate;
return G__41017;
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

//# sourceMappingURL=debug.js.map?rel=1537986100027