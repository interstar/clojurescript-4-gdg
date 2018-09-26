// Compiled by ClojureScript 1.9.229 {}
goog.provide('patterning.strings');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
patterning.strings.gen_format = (function patterning$strings$gen_format(var_args){
var args__27999__auto__ = [];
var len__27992__auto___34814 = arguments.length;
var i__27993__auto___34815 = (0);
while(true){
if((i__27993__auto___34815 < len__27992__auto___34814)){
args__27999__auto__.push((arguments[i__27993__auto___34815]));

var G__34816 = (i__27993__auto___34815 + (1));
i__27993__auto___34815 = G__34816;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return patterning.strings.gen_format.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});

patterning.strings.gen_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

patterning.strings.gen_format.cljs$lang$maxFixedArity = (0);

patterning.strings.gen_format.cljs$lang$applyTo = (function (seq34813){
return patterning.strings.gen_format.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34813));
});


//# sourceMappingURL=strings.js.map?rel=1537985795280