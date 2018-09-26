// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38312 = arguments.length;
var i__27993__auto___38313 = (0);
while(true){
if((i__27993__auto___38313 < len__27992__auto___38312)){
args__27999__auto__.push((arguments[i__27993__auto___38313]));

var G__38314 = (i__27993__auto___38313 + (1));
i__27993__auto___38313 = G__38314;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq38311){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38311));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38316 = arguments.length;
var i__27993__auto___38317 = (0);
while(true){
if((i__27993__auto___38317 < len__27992__auto___38316)){
args__27999__auto__.push((arguments[i__27993__auto___38317]));

var G__38318 = (i__27993__auto___38317 + (1));
i__27993__auto___38317 = G__38318;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq38315){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38315));
});

var g_QMARK__38319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_38320 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__38319){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__38319))
,null));
var mkg_38321 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__38319,g_38320){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__38319,g_38320))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__38319,g_38320,mkg_38321){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__38319).call(null,x);
});})(g_QMARK__38319,g_38320,mkg_38321))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__38319,g_38320,mkg_38321){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_38321).call(null,gfn);
});})(g_QMARK__38319,g_38320,mkg_38321))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__38319,g_38320,mkg_38321){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_38320).call(null,generator);
});})(g_QMARK__38319,g_38320,mkg_38321))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__38283__auto___38340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__38283__auto___38340){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38341 = arguments.length;
var i__27993__auto___38342 = (0);
while(true){
if((i__27993__auto___38342 < len__27992__auto___38341)){
args__27999__auto__.push((arguments[i__27993__auto___38342]));

var G__38343 = (i__27993__auto___38342 + (1));
i__27993__auto___38342 = G__38343;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38340))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38340){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38340),args);
});})(g__38283__auto___38340))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__38283__auto___38340){
return (function (seq38322){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38322));
});})(g__38283__auto___38340))
;


var g__38283__auto___38344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__38283__auto___38344){
return (function cljs$spec$impl$gen$list(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38345 = arguments.length;
var i__27993__auto___38346 = (0);
while(true){
if((i__27993__auto___38346 < len__27992__auto___38345)){
args__27999__auto__.push((arguments[i__27993__auto___38346]));

var G__38347 = (i__27993__auto___38346 + (1));
i__27993__auto___38346 = G__38347;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38344))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38344){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38344),args);
});})(g__38283__auto___38344))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__38283__auto___38344){
return (function (seq38323){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38323));
});})(g__38283__auto___38344))
;


var g__38283__auto___38348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__38283__auto___38348){
return (function cljs$spec$impl$gen$map(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38349 = arguments.length;
var i__27993__auto___38350 = (0);
while(true){
if((i__27993__auto___38350 < len__27992__auto___38349)){
args__27999__auto__.push((arguments[i__27993__auto___38350]));

var G__38351 = (i__27993__auto___38350 + (1));
i__27993__auto___38350 = G__38351;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38348))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38348){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38348),args);
});})(g__38283__auto___38348))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__38283__auto___38348){
return (function (seq38324){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38324));
});})(g__38283__auto___38348))
;


var g__38283__auto___38352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__38283__auto___38352){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38353 = arguments.length;
var i__27993__auto___38354 = (0);
while(true){
if((i__27993__auto___38354 < len__27992__auto___38353)){
args__27999__auto__.push((arguments[i__27993__auto___38354]));

var G__38355 = (i__27993__auto___38354 + (1));
i__27993__auto___38354 = G__38355;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38352))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38352){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38352),args);
});})(g__38283__auto___38352))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__38283__auto___38352){
return (function (seq38325){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38325));
});})(g__38283__auto___38352))
;


var g__38283__auto___38356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__38283__auto___38356){
return (function cljs$spec$impl$gen$set(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38357 = arguments.length;
var i__27993__auto___38358 = (0);
while(true){
if((i__27993__auto___38358 < len__27992__auto___38357)){
args__27999__auto__.push((arguments[i__27993__auto___38358]));

var G__38359 = (i__27993__auto___38358 + (1));
i__27993__auto___38358 = G__38359;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38356))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38356){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38356),args);
});})(g__38283__auto___38356))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__38283__auto___38356){
return (function (seq38326){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38326));
});})(g__38283__auto___38356))
;


var g__38283__auto___38360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__38283__auto___38360){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38361 = arguments.length;
var i__27993__auto___38362 = (0);
while(true){
if((i__27993__auto___38362 < len__27992__auto___38361)){
args__27999__auto__.push((arguments[i__27993__auto___38362]));

var G__38363 = (i__27993__auto___38362 + (1));
i__27993__auto___38362 = G__38363;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38360))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38360){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38360),args);
});})(g__38283__auto___38360))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__38283__auto___38360){
return (function (seq38327){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38327));
});})(g__38283__auto___38360))
;


var g__38283__auto___38364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__38283__auto___38364){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38365 = arguments.length;
var i__27993__auto___38366 = (0);
while(true){
if((i__27993__auto___38366 < len__27992__auto___38365)){
args__27999__auto__.push((arguments[i__27993__auto___38366]));

var G__38367 = (i__27993__auto___38366 + (1));
i__27993__auto___38366 = G__38367;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38364))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38364){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38364),args);
});})(g__38283__auto___38364))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__38283__auto___38364){
return (function (seq38328){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38328));
});})(g__38283__auto___38364))
;


var g__38283__auto___38368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__38283__auto___38368){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38369 = arguments.length;
var i__27993__auto___38370 = (0);
while(true){
if((i__27993__auto___38370 < len__27992__auto___38369)){
args__27999__auto__.push((arguments[i__27993__auto___38370]));

var G__38371 = (i__27993__auto___38370 + (1));
i__27993__auto___38370 = G__38371;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38368))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38368){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38368),args);
});})(g__38283__auto___38368))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__38283__auto___38368){
return (function (seq38329){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38329));
});})(g__38283__auto___38368))
;


var g__38283__auto___38372 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__38283__auto___38372){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38373 = arguments.length;
var i__27993__auto___38374 = (0);
while(true){
if((i__27993__auto___38374 < len__27992__auto___38373)){
args__27999__auto__.push((arguments[i__27993__auto___38374]));

var G__38375 = (i__27993__auto___38374 + (1));
i__27993__auto___38374 = G__38375;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38372))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38372){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38372),args);
});})(g__38283__auto___38372))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__38283__auto___38372){
return (function (seq38330){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38330));
});})(g__38283__auto___38372))
;


var g__38283__auto___38376 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__38283__auto___38376){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38377 = arguments.length;
var i__27993__auto___38378 = (0);
while(true){
if((i__27993__auto___38378 < len__27992__auto___38377)){
args__27999__auto__.push((arguments[i__27993__auto___38378]));

var G__38379 = (i__27993__auto___38378 + (1));
i__27993__auto___38378 = G__38379;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38376))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38376){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38376),args);
});})(g__38283__auto___38376))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__38283__auto___38376){
return (function (seq38331){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38331));
});})(g__38283__auto___38376))
;


var g__38283__auto___38380 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__38283__auto___38380){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38381 = arguments.length;
var i__27993__auto___38382 = (0);
while(true){
if((i__27993__auto___38382 < len__27992__auto___38381)){
args__27999__auto__.push((arguments[i__27993__auto___38382]));

var G__38383 = (i__27993__auto___38382 + (1));
i__27993__auto___38382 = G__38383;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38380))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38380){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38380),args);
});})(g__38283__auto___38380))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__38283__auto___38380){
return (function (seq38332){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38332));
});})(g__38283__auto___38380))
;


var g__38283__auto___38384 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__38283__auto___38384){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38385 = arguments.length;
var i__27993__auto___38386 = (0);
while(true){
if((i__27993__auto___38386 < len__27992__auto___38385)){
args__27999__auto__.push((arguments[i__27993__auto___38386]));

var G__38387 = (i__27993__auto___38386 + (1));
i__27993__auto___38386 = G__38387;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38384))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38384){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38384),args);
});})(g__38283__auto___38384))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__38283__auto___38384){
return (function (seq38333){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38333));
});})(g__38283__auto___38384))
;


var g__38283__auto___38388 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__38283__auto___38388){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38389 = arguments.length;
var i__27993__auto___38390 = (0);
while(true){
if((i__27993__auto___38390 < len__27992__auto___38389)){
args__27999__auto__.push((arguments[i__27993__auto___38390]));

var G__38391 = (i__27993__auto___38390 + (1));
i__27993__auto___38390 = G__38391;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38388))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38388){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38388),args);
});})(g__38283__auto___38388))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__38283__auto___38388){
return (function (seq38334){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38334));
});})(g__38283__auto___38388))
;


var g__38283__auto___38392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__38283__auto___38392){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38393 = arguments.length;
var i__27993__auto___38394 = (0);
while(true){
if((i__27993__auto___38394 < len__27992__auto___38393)){
args__27999__auto__.push((arguments[i__27993__auto___38394]));

var G__38395 = (i__27993__auto___38394 + (1));
i__27993__auto___38394 = G__38395;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38392))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38392){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38392),args);
});})(g__38283__auto___38392))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__38283__auto___38392){
return (function (seq38335){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38335));
});})(g__38283__auto___38392))
;


var g__38283__auto___38396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__38283__auto___38396){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38397 = arguments.length;
var i__27993__auto___38398 = (0);
while(true){
if((i__27993__auto___38398 < len__27992__auto___38397)){
args__27999__auto__.push((arguments[i__27993__auto___38398]));

var G__38399 = (i__27993__auto___38398 + (1));
i__27993__auto___38398 = G__38399;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38396))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38396){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38396),args);
});})(g__38283__auto___38396))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__38283__auto___38396){
return (function (seq38336){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38336));
});})(g__38283__auto___38396))
;


var g__38283__auto___38400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__38283__auto___38400){
return (function cljs$spec$impl$gen$return(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38401 = arguments.length;
var i__27993__auto___38402 = (0);
while(true){
if((i__27993__auto___38402 < len__27992__auto___38401)){
args__27999__auto__.push((arguments[i__27993__auto___38402]));

var G__38403 = (i__27993__auto___38402 + (1));
i__27993__auto___38402 = G__38403;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38400))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38400){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38400),args);
});})(g__38283__auto___38400))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__38283__auto___38400){
return (function (seq38337){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38337));
});})(g__38283__auto___38400))
;


var g__38283__auto___38404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__38283__auto___38404){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38405 = arguments.length;
var i__27993__auto___38406 = (0);
while(true){
if((i__27993__auto___38406 < len__27992__auto___38405)){
args__27999__auto__.push((arguments[i__27993__auto___38406]));

var G__38407 = (i__27993__auto___38406 + (1));
i__27993__auto___38406 = G__38407;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38404))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38404){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38404),args);
});})(g__38283__auto___38404))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__38283__auto___38404){
return (function (seq38338){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38338));
});})(g__38283__auto___38404))
;


var g__38283__auto___38408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__38283__auto___38408){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38409 = arguments.length;
var i__27993__auto___38410 = (0);
while(true){
if((i__27993__auto___38410 < len__27992__auto___38409)){
args__27999__auto__.push((arguments[i__27993__auto___38410]));

var G__38411 = (i__27993__auto___38410 + (1));
i__27993__auto___38410 = G__38411;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38283__auto___38408))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38283__auto___38408){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38283__auto___38408),args);
});})(g__38283__auto___38408))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__38283__auto___38408){
return (function (seq38339){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38339));
});})(g__38283__auto___38408))
;

var g__38296__auto___38433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__38296__auto___38433){
return (function cljs$spec$impl$gen$any(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38434 = arguments.length;
var i__27993__auto___38435 = (0);
while(true){
if((i__27993__auto___38435 < len__27992__auto___38434)){
args__27999__auto__.push((arguments[i__27993__auto___38435]));

var G__38436 = (i__27993__auto___38435 + (1));
i__27993__auto___38435 = G__38436;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38433))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38433){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38433);
});})(g__38296__auto___38433))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__38296__auto___38433){
return (function (seq38412){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38412));
});})(g__38296__auto___38433))
;


var g__38296__auto___38437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__38296__auto___38437){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38438 = arguments.length;
var i__27993__auto___38439 = (0);
while(true){
if((i__27993__auto___38439 < len__27992__auto___38438)){
args__27999__auto__.push((arguments[i__27993__auto___38439]));

var G__38440 = (i__27993__auto___38439 + (1));
i__27993__auto___38439 = G__38440;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38437))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38437){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38437);
});})(g__38296__auto___38437))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__38296__auto___38437){
return (function (seq38413){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38413));
});})(g__38296__auto___38437))
;


var g__38296__auto___38441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__38296__auto___38441){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38442 = arguments.length;
var i__27993__auto___38443 = (0);
while(true){
if((i__27993__auto___38443 < len__27992__auto___38442)){
args__27999__auto__.push((arguments[i__27993__auto___38443]));

var G__38444 = (i__27993__auto___38443 + (1));
i__27993__auto___38443 = G__38444;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38441))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38441){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38441);
});})(g__38296__auto___38441))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__38296__auto___38441){
return (function (seq38414){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38414));
});})(g__38296__auto___38441))
;


var g__38296__auto___38445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__38296__auto___38445){
return (function cljs$spec$impl$gen$char(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38446 = arguments.length;
var i__27993__auto___38447 = (0);
while(true){
if((i__27993__auto___38447 < len__27992__auto___38446)){
args__27999__auto__.push((arguments[i__27993__auto___38447]));

var G__38448 = (i__27993__auto___38447 + (1));
i__27993__auto___38447 = G__38448;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38445))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38445){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38445);
});})(g__38296__auto___38445))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__38296__auto___38445){
return (function (seq38415){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38415));
});})(g__38296__auto___38445))
;


var g__38296__auto___38449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__38296__auto___38449){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38450 = arguments.length;
var i__27993__auto___38451 = (0);
while(true){
if((i__27993__auto___38451 < len__27992__auto___38450)){
args__27999__auto__.push((arguments[i__27993__auto___38451]));

var G__38452 = (i__27993__auto___38451 + (1));
i__27993__auto___38451 = G__38452;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38449))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38449){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38449);
});})(g__38296__auto___38449))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__38296__auto___38449){
return (function (seq38416){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38416));
});})(g__38296__auto___38449))
;


var g__38296__auto___38453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__38296__auto___38453){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38454 = arguments.length;
var i__27993__auto___38455 = (0);
while(true){
if((i__27993__auto___38455 < len__27992__auto___38454)){
args__27999__auto__.push((arguments[i__27993__auto___38455]));

var G__38456 = (i__27993__auto___38455 + (1));
i__27993__auto___38455 = G__38456;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38453))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38453){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38453);
});})(g__38296__auto___38453))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__38296__auto___38453){
return (function (seq38417){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38417));
});})(g__38296__auto___38453))
;


var g__38296__auto___38457 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__38296__auto___38457){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38458 = arguments.length;
var i__27993__auto___38459 = (0);
while(true){
if((i__27993__auto___38459 < len__27992__auto___38458)){
args__27999__auto__.push((arguments[i__27993__auto___38459]));

var G__38460 = (i__27993__auto___38459 + (1));
i__27993__auto___38459 = G__38460;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38457))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38457){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38457);
});})(g__38296__auto___38457))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__38296__auto___38457){
return (function (seq38418){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38418));
});})(g__38296__auto___38457))
;


var g__38296__auto___38461 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__38296__auto___38461){
return (function cljs$spec$impl$gen$double(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38462 = arguments.length;
var i__27993__auto___38463 = (0);
while(true){
if((i__27993__auto___38463 < len__27992__auto___38462)){
args__27999__auto__.push((arguments[i__27993__auto___38463]));

var G__38464 = (i__27993__auto___38463 + (1));
i__27993__auto___38463 = G__38464;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38461))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38461){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38461);
});})(g__38296__auto___38461))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__38296__auto___38461){
return (function (seq38419){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38419));
});})(g__38296__auto___38461))
;


var g__38296__auto___38465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__38296__auto___38465){
return (function cljs$spec$impl$gen$int(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38466 = arguments.length;
var i__27993__auto___38467 = (0);
while(true){
if((i__27993__auto___38467 < len__27992__auto___38466)){
args__27999__auto__.push((arguments[i__27993__auto___38467]));

var G__38468 = (i__27993__auto___38467 + (1));
i__27993__auto___38467 = G__38468;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38465))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38465){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38465);
});})(g__38296__auto___38465))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__38296__auto___38465){
return (function (seq38420){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38420));
});})(g__38296__auto___38465))
;


var g__38296__auto___38469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__38296__auto___38469){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38470 = arguments.length;
var i__27993__auto___38471 = (0);
while(true){
if((i__27993__auto___38471 < len__27992__auto___38470)){
args__27999__auto__.push((arguments[i__27993__auto___38471]));

var G__38472 = (i__27993__auto___38471 + (1));
i__27993__auto___38471 = G__38472;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38469))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38469){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38469);
});})(g__38296__auto___38469))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__38296__auto___38469){
return (function (seq38421){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38421));
});})(g__38296__auto___38469))
;


var g__38296__auto___38473 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__38296__auto___38473){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38474 = arguments.length;
var i__27993__auto___38475 = (0);
while(true){
if((i__27993__auto___38475 < len__27992__auto___38474)){
args__27999__auto__.push((arguments[i__27993__auto___38475]));

var G__38476 = (i__27993__auto___38475 + (1));
i__27993__auto___38475 = G__38476;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38473))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38473){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38473);
});})(g__38296__auto___38473))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__38296__auto___38473){
return (function (seq38422){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38422));
});})(g__38296__auto___38473))
;


var g__38296__auto___38477 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__38296__auto___38477){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38478 = arguments.length;
var i__27993__auto___38479 = (0);
while(true){
if((i__27993__auto___38479 < len__27992__auto___38478)){
args__27999__auto__.push((arguments[i__27993__auto___38479]));

var G__38480 = (i__27993__auto___38479 + (1));
i__27993__auto___38479 = G__38480;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38477))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38477){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38477);
});})(g__38296__auto___38477))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__38296__auto___38477){
return (function (seq38423){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38423));
});})(g__38296__auto___38477))
;


var g__38296__auto___38481 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__38296__auto___38481){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38482 = arguments.length;
var i__27993__auto___38483 = (0);
while(true){
if((i__27993__auto___38483 < len__27992__auto___38482)){
args__27999__auto__.push((arguments[i__27993__auto___38483]));

var G__38484 = (i__27993__auto___38483 + (1));
i__27993__auto___38483 = G__38484;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38481))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38481){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38481);
});})(g__38296__auto___38481))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__38296__auto___38481){
return (function (seq38424){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38424));
});})(g__38296__auto___38481))
;


var g__38296__auto___38485 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__38296__auto___38485){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38486 = arguments.length;
var i__27993__auto___38487 = (0);
while(true){
if((i__27993__auto___38487 < len__27992__auto___38486)){
args__27999__auto__.push((arguments[i__27993__auto___38487]));

var G__38488 = (i__27993__auto___38487 + (1));
i__27993__auto___38487 = G__38488;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38485))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38485){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38485);
});})(g__38296__auto___38485))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__38296__auto___38485){
return (function (seq38425){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38425));
});})(g__38296__auto___38485))
;


var g__38296__auto___38489 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__38296__auto___38489){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38490 = arguments.length;
var i__27993__auto___38491 = (0);
while(true){
if((i__27993__auto___38491 < len__27992__auto___38490)){
args__27999__auto__.push((arguments[i__27993__auto___38491]));

var G__38492 = (i__27993__auto___38491 + (1));
i__27993__auto___38491 = G__38492;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38489))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38489){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38489);
});})(g__38296__auto___38489))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__38296__auto___38489){
return (function (seq38426){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38426));
});})(g__38296__auto___38489))
;


var g__38296__auto___38493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__38296__auto___38493){
return (function cljs$spec$impl$gen$string(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38494 = arguments.length;
var i__27993__auto___38495 = (0);
while(true){
if((i__27993__auto___38495 < len__27992__auto___38494)){
args__27999__auto__.push((arguments[i__27993__auto___38495]));

var G__38496 = (i__27993__auto___38495 + (1));
i__27993__auto___38495 = G__38496;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38493))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38493){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38493);
});})(g__38296__auto___38493))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__38296__auto___38493){
return (function (seq38427){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38427));
});})(g__38296__auto___38493))
;


var g__38296__auto___38497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__38296__auto___38497){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38498 = arguments.length;
var i__27993__auto___38499 = (0);
while(true){
if((i__27993__auto___38499 < len__27992__auto___38498)){
args__27999__auto__.push((arguments[i__27993__auto___38499]));

var G__38500 = (i__27993__auto___38499 + (1));
i__27993__auto___38499 = G__38500;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38497))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38497){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38497);
});})(g__38296__auto___38497))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__38296__auto___38497){
return (function (seq38428){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38428));
});})(g__38296__auto___38497))
;


var g__38296__auto___38501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__38296__auto___38501){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38502 = arguments.length;
var i__27993__auto___38503 = (0);
while(true){
if((i__27993__auto___38503 < len__27992__auto___38502)){
args__27999__auto__.push((arguments[i__27993__auto___38503]));

var G__38504 = (i__27993__auto___38503 + (1));
i__27993__auto___38503 = G__38504;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38501))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38501){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38501);
});})(g__38296__auto___38501))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__38296__auto___38501){
return (function (seq38429){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38429));
});})(g__38296__auto___38501))
;


var g__38296__auto___38505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__38296__auto___38505){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38506 = arguments.length;
var i__27993__auto___38507 = (0);
while(true){
if((i__27993__auto___38507 < len__27992__auto___38506)){
args__27999__auto__.push((arguments[i__27993__auto___38507]));

var G__38508 = (i__27993__auto___38507 + (1));
i__27993__auto___38507 = G__38508;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38505))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38505){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38505);
});})(g__38296__auto___38505))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__38296__auto___38505){
return (function (seq38430){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38430));
});})(g__38296__auto___38505))
;


var g__38296__auto___38509 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__38296__auto___38509){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38510 = arguments.length;
var i__27993__auto___38511 = (0);
while(true){
if((i__27993__auto___38511 < len__27992__auto___38510)){
args__27999__auto__.push((arguments[i__27993__auto___38511]));

var G__38512 = (i__27993__auto___38511 + (1));
i__27993__auto___38511 = G__38512;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38509))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38509){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38509);
});})(g__38296__auto___38509))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__38296__auto___38509){
return (function (seq38431){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38431));
});})(g__38296__auto___38509))
;


var g__38296__auto___38513 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__38296__auto___38513){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38514 = arguments.length;
var i__27993__auto___38515 = (0);
while(true){
if((i__27993__auto___38515 < len__27992__auto___38514)){
args__27999__auto__.push((arguments[i__27993__auto___38515]));

var G__38516 = (i__27993__auto___38515 + (1));
i__27993__auto___38515 = G__38516;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});})(g__38296__auto___38513))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38296__auto___38513){
return (function (args){
return cljs.core.deref.call(null,g__38296__auto___38513);
});})(g__38296__auto___38513))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__38296__auto___38513){
return (function (seq38432){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38432));
});})(g__38296__auto___38513))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27999__auto__ = [];
var len__27992__auto___38519 = arguments.length;
var i__27993__auto___38520 = (0);
while(true){
if((i__27993__auto___38520 < len__27992__auto___38519)){
args__27999__auto__.push((arguments[i__27993__auto___38520]));

var G__38521 = (i__27993__auto___38520 + (1));
i__27993__auto___38520 = G__38521;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__38517_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38517_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq38518){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38518));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__38522_SHARP_){
return (new Date(p1__38522_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1537985799336