// Compiled by ClojureScript 1.9.229 {}
goog.provide('patterning.strings');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
patterning.strings.gen_format = (function patterning$strings$gen_format(var_args){
var args__27998__auto__ = [];
var len__27991__auto___34957 = arguments.length;
var i__27992__auto___34958 = (0);
while(true){
if((i__27992__auto___34958 < len__27991__auto___34957)){
args__27998__auto__.push((arguments[i__27992__auto___34958]));

var G__34959 = (i__27992__auto___34958 + (1));
i__27992__auto___34958 = G__34959;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return patterning.strings.gen_format.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

patterning.strings.gen_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

patterning.strings.gen_format.cljs$lang$maxFixedArity = (0);

patterning.strings.gen_format.cljs$lang$applyTo = (function (seq34956){
return patterning.strings.gen_format.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34956));
});


//# sourceMappingURL=strings.js.map?rel=1538029292438