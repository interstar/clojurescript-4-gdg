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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__27998__auto__ = [];
var len__27991__auto___39258 = arguments.length;
var i__27992__auto___39259 = (0);
while(true){
if((i__27992__auto___39259 < len__27991__auto___39258)){
args__27998__auto__.push((arguments[i__27992__auto___39259]));

var G__39260 = (i__27992__auto___39259 + (1));
i__27992__auto___39259 = G__39260;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq39257){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39257));
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
var args__27998__auto__ = [];
var len__27991__auto___39262 = arguments.length;
var i__27992__auto___39263 = (0);
while(true){
if((i__27992__auto___39263 < len__27991__auto___39262)){
args__27998__auto__.push((arguments[i__27992__auto___39263]));

var G__39264 = (i__27992__auto___39263 + (1));
i__27992__auto___39263 = G__39264;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq39261){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39261));
});

var g_QMARK__39265 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_39266 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__39265){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__39265))
,null));
var mkg_39267 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__39265,g_39266){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__39265,g_39266))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__39265,g_39266,mkg_39267){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__39265).call(null,x);
});})(g_QMARK__39265,g_39266,mkg_39267))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__39265,g_39266,mkg_39267){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_39267).call(null,gfn);
});})(g_QMARK__39265,g_39266,mkg_39267))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__39265,g_39266,mkg_39267){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_39266).call(null,generator);
});})(g_QMARK__39265,g_39266,mkg_39267))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__39229__auto___39286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__39229__auto___39286){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39287 = arguments.length;
var i__27992__auto___39288 = (0);
while(true){
if((i__27992__auto___39288 < len__27991__auto___39287)){
args__27998__auto__.push((arguments[i__27992__auto___39288]));

var G__39289 = (i__27992__auto___39288 + (1));
i__27992__auto___39288 = G__39289;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39286))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39286){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39286),args);
});})(g__39229__auto___39286))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__39229__auto___39286){
return (function (seq39268){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39268));
});})(g__39229__auto___39286))
;


var g__39229__auto___39290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__39229__auto___39290){
return (function cljs$spec$impl$gen$list(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39291 = arguments.length;
var i__27992__auto___39292 = (0);
while(true){
if((i__27992__auto___39292 < len__27991__auto___39291)){
args__27998__auto__.push((arguments[i__27992__auto___39292]));

var G__39293 = (i__27992__auto___39292 + (1));
i__27992__auto___39292 = G__39293;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39290))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39290){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39290),args);
});})(g__39229__auto___39290))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__39229__auto___39290){
return (function (seq39269){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39269));
});})(g__39229__auto___39290))
;


var g__39229__auto___39294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__39229__auto___39294){
return (function cljs$spec$impl$gen$map(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39295 = arguments.length;
var i__27992__auto___39296 = (0);
while(true){
if((i__27992__auto___39296 < len__27991__auto___39295)){
args__27998__auto__.push((arguments[i__27992__auto___39296]));

var G__39297 = (i__27992__auto___39296 + (1));
i__27992__auto___39296 = G__39297;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39294))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39294){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39294),args);
});})(g__39229__auto___39294))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__39229__auto___39294){
return (function (seq39270){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39270));
});})(g__39229__auto___39294))
;


var g__39229__auto___39298 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__39229__auto___39298){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39299 = arguments.length;
var i__27992__auto___39300 = (0);
while(true){
if((i__27992__auto___39300 < len__27991__auto___39299)){
args__27998__auto__.push((arguments[i__27992__auto___39300]));

var G__39301 = (i__27992__auto___39300 + (1));
i__27992__auto___39300 = G__39301;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39298))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39298){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39298),args);
});})(g__39229__auto___39298))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__39229__auto___39298){
return (function (seq39271){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39271));
});})(g__39229__auto___39298))
;


var g__39229__auto___39302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__39229__auto___39302){
return (function cljs$spec$impl$gen$set(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39303 = arguments.length;
var i__27992__auto___39304 = (0);
while(true){
if((i__27992__auto___39304 < len__27991__auto___39303)){
args__27998__auto__.push((arguments[i__27992__auto___39304]));

var G__39305 = (i__27992__auto___39304 + (1));
i__27992__auto___39304 = G__39305;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39302))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39302){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39302),args);
});})(g__39229__auto___39302))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__39229__auto___39302){
return (function (seq39272){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39272));
});})(g__39229__auto___39302))
;


var g__39229__auto___39306 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__39229__auto___39306){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39307 = arguments.length;
var i__27992__auto___39308 = (0);
while(true){
if((i__27992__auto___39308 < len__27991__auto___39307)){
args__27998__auto__.push((arguments[i__27992__auto___39308]));

var G__39309 = (i__27992__auto___39308 + (1));
i__27992__auto___39308 = G__39309;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39306))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39306){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39306),args);
});})(g__39229__auto___39306))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__39229__auto___39306){
return (function (seq39273){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39273));
});})(g__39229__auto___39306))
;


var g__39229__auto___39310 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__39229__auto___39310){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39311 = arguments.length;
var i__27992__auto___39312 = (0);
while(true){
if((i__27992__auto___39312 < len__27991__auto___39311)){
args__27998__auto__.push((arguments[i__27992__auto___39312]));

var G__39313 = (i__27992__auto___39312 + (1));
i__27992__auto___39312 = G__39313;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39310))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39310){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39310),args);
});})(g__39229__auto___39310))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__39229__auto___39310){
return (function (seq39274){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39274));
});})(g__39229__auto___39310))
;


var g__39229__auto___39314 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__39229__auto___39314){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39315 = arguments.length;
var i__27992__auto___39316 = (0);
while(true){
if((i__27992__auto___39316 < len__27991__auto___39315)){
args__27998__auto__.push((arguments[i__27992__auto___39316]));

var G__39317 = (i__27992__auto___39316 + (1));
i__27992__auto___39316 = G__39317;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39314))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39314){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39314),args);
});})(g__39229__auto___39314))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__39229__auto___39314){
return (function (seq39275){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39275));
});})(g__39229__auto___39314))
;


var g__39229__auto___39318 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__39229__auto___39318){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39319 = arguments.length;
var i__27992__auto___39320 = (0);
while(true){
if((i__27992__auto___39320 < len__27991__auto___39319)){
args__27998__auto__.push((arguments[i__27992__auto___39320]));

var G__39321 = (i__27992__auto___39320 + (1));
i__27992__auto___39320 = G__39321;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39318))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39318){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39318),args);
});})(g__39229__auto___39318))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__39229__auto___39318){
return (function (seq39276){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39276));
});})(g__39229__auto___39318))
;


var g__39229__auto___39322 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__39229__auto___39322){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39323 = arguments.length;
var i__27992__auto___39324 = (0);
while(true){
if((i__27992__auto___39324 < len__27991__auto___39323)){
args__27998__auto__.push((arguments[i__27992__auto___39324]));

var G__39325 = (i__27992__auto___39324 + (1));
i__27992__auto___39324 = G__39325;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39322))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39322){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39322),args);
});})(g__39229__auto___39322))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__39229__auto___39322){
return (function (seq39277){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39277));
});})(g__39229__auto___39322))
;


var g__39229__auto___39326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__39229__auto___39326){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39327 = arguments.length;
var i__27992__auto___39328 = (0);
while(true){
if((i__27992__auto___39328 < len__27991__auto___39327)){
args__27998__auto__.push((arguments[i__27992__auto___39328]));

var G__39329 = (i__27992__auto___39328 + (1));
i__27992__auto___39328 = G__39329;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39326))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39326){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39326),args);
});})(g__39229__auto___39326))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__39229__auto___39326){
return (function (seq39278){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39278));
});})(g__39229__auto___39326))
;


var g__39229__auto___39330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__39229__auto___39330){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39331 = arguments.length;
var i__27992__auto___39332 = (0);
while(true){
if((i__27992__auto___39332 < len__27991__auto___39331)){
args__27998__auto__.push((arguments[i__27992__auto___39332]));

var G__39333 = (i__27992__auto___39332 + (1));
i__27992__auto___39332 = G__39333;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39330))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39330){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39330),args);
});})(g__39229__auto___39330))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__39229__auto___39330){
return (function (seq39279){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39279));
});})(g__39229__auto___39330))
;


var g__39229__auto___39334 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__39229__auto___39334){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39335 = arguments.length;
var i__27992__auto___39336 = (0);
while(true){
if((i__27992__auto___39336 < len__27991__auto___39335)){
args__27998__auto__.push((arguments[i__27992__auto___39336]));

var G__39337 = (i__27992__auto___39336 + (1));
i__27992__auto___39336 = G__39337;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39334))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39334){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39334),args);
});})(g__39229__auto___39334))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__39229__auto___39334){
return (function (seq39280){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39280));
});})(g__39229__auto___39334))
;


var g__39229__auto___39338 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__39229__auto___39338){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39339 = arguments.length;
var i__27992__auto___39340 = (0);
while(true){
if((i__27992__auto___39340 < len__27991__auto___39339)){
args__27998__auto__.push((arguments[i__27992__auto___39340]));

var G__39341 = (i__27992__auto___39340 + (1));
i__27992__auto___39340 = G__39341;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39338))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39338){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39338),args);
});})(g__39229__auto___39338))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__39229__auto___39338){
return (function (seq39281){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39281));
});})(g__39229__auto___39338))
;


var g__39229__auto___39342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__39229__auto___39342){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39343 = arguments.length;
var i__27992__auto___39344 = (0);
while(true){
if((i__27992__auto___39344 < len__27991__auto___39343)){
args__27998__auto__.push((arguments[i__27992__auto___39344]));

var G__39345 = (i__27992__auto___39344 + (1));
i__27992__auto___39344 = G__39345;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39342))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39342){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39342),args);
});})(g__39229__auto___39342))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__39229__auto___39342){
return (function (seq39282){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39282));
});})(g__39229__auto___39342))
;


var g__39229__auto___39346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__39229__auto___39346){
return (function cljs$spec$impl$gen$return(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39347 = arguments.length;
var i__27992__auto___39348 = (0);
while(true){
if((i__27992__auto___39348 < len__27991__auto___39347)){
args__27998__auto__.push((arguments[i__27992__auto___39348]));

var G__39349 = (i__27992__auto___39348 + (1));
i__27992__auto___39348 = G__39349;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39346))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39346){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39346),args);
});})(g__39229__auto___39346))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__39229__auto___39346){
return (function (seq39283){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39283));
});})(g__39229__auto___39346))
;


var g__39229__auto___39350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__39229__auto___39350){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39351 = arguments.length;
var i__27992__auto___39352 = (0);
while(true){
if((i__27992__auto___39352 < len__27991__auto___39351)){
args__27998__auto__.push((arguments[i__27992__auto___39352]));

var G__39353 = (i__27992__auto___39352 + (1));
i__27992__auto___39352 = G__39353;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39350))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39350){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39350),args);
});})(g__39229__auto___39350))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__39229__auto___39350){
return (function (seq39284){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39284));
});})(g__39229__auto___39350))
;


var g__39229__auto___39354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__39229__auto___39354){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39355 = arguments.length;
var i__27992__auto___39356 = (0);
while(true){
if((i__27992__auto___39356 < len__27991__auto___39355)){
args__27998__auto__.push((arguments[i__27992__auto___39356]));

var G__39357 = (i__27992__auto___39356 + (1));
i__27992__auto___39356 = G__39357;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39229__auto___39354))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39229__auto___39354){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39229__auto___39354),args);
});})(g__39229__auto___39354))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__39229__auto___39354){
return (function (seq39285){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39285));
});})(g__39229__auto___39354))
;

var g__39242__auto___39379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__39242__auto___39379){
return (function cljs$spec$impl$gen$any(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39380 = arguments.length;
var i__27992__auto___39381 = (0);
while(true){
if((i__27992__auto___39381 < len__27991__auto___39380)){
args__27998__auto__.push((arguments[i__27992__auto___39381]));

var G__39382 = (i__27992__auto___39381 + (1));
i__27992__auto___39381 = G__39382;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39379))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39379){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39379);
});})(g__39242__auto___39379))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__39242__auto___39379){
return (function (seq39358){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39358));
});})(g__39242__auto___39379))
;


var g__39242__auto___39383 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__39242__auto___39383){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39384 = arguments.length;
var i__27992__auto___39385 = (0);
while(true){
if((i__27992__auto___39385 < len__27991__auto___39384)){
args__27998__auto__.push((arguments[i__27992__auto___39385]));

var G__39386 = (i__27992__auto___39385 + (1));
i__27992__auto___39385 = G__39386;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39383))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39383){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39383);
});})(g__39242__auto___39383))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__39242__auto___39383){
return (function (seq39359){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39359));
});})(g__39242__auto___39383))
;


var g__39242__auto___39387 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__39242__auto___39387){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39388 = arguments.length;
var i__27992__auto___39389 = (0);
while(true){
if((i__27992__auto___39389 < len__27991__auto___39388)){
args__27998__auto__.push((arguments[i__27992__auto___39389]));

var G__39390 = (i__27992__auto___39389 + (1));
i__27992__auto___39389 = G__39390;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39387))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39387){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39387);
});})(g__39242__auto___39387))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__39242__auto___39387){
return (function (seq39360){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39360));
});})(g__39242__auto___39387))
;


var g__39242__auto___39391 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__39242__auto___39391){
return (function cljs$spec$impl$gen$char(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39392 = arguments.length;
var i__27992__auto___39393 = (0);
while(true){
if((i__27992__auto___39393 < len__27991__auto___39392)){
args__27998__auto__.push((arguments[i__27992__auto___39393]));

var G__39394 = (i__27992__auto___39393 + (1));
i__27992__auto___39393 = G__39394;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39391))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39391){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39391);
});})(g__39242__auto___39391))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__39242__auto___39391){
return (function (seq39361){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39361));
});})(g__39242__auto___39391))
;


var g__39242__auto___39395 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__39242__auto___39395){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39396 = arguments.length;
var i__27992__auto___39397 = (0);
while(true){
if((i__27992__auto___39397 < len__27991__auto___39396)){
args__27998__auto__.push((arguments[i__27992__auto___39397]));

var G__39398 = (i__27992__auto___39397 + (1));
i__27992__auto___39397 = G__39398;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39395))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39395){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39395);
});})(g__39242__auto___39395))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__39242__auto___39395){
return (function (seq39362){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39362));
});})(g__39242__auto___39395))
;


var g__39242__auto___39399 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__39242__auto___39399){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39400 = arguments.length;
var i__27992__auto___39401 = (0);
while(true){
if((i__27992__auto___39401 < len__27991__auto___39400)){
args__27998__auto__.push((arguments[i__27992__auto___39401]));

var G__39402 = (i__27992__auto___39401 + (1));
i__27992__auto___39401 = G__39402;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39399))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39399){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39399);
});})(g__39242__auto___39399))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__39242__auto___39399){
return (function (seq39363){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39363));
});})(g__39242__auto___39399))
;


var g__39242__auto___39403 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__39242__auto___39403){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39404 = arguments.length;
var i__27992__auto___39405 = (0);
while(true){
if((i__27992__auto___39405 < len__27991__auto___39404)){
args__27998__auto__.push((arguments[i__27992__auto___39405]));

var G__39406 = (i__27992__auto___39405 + (1));
i__27992__auto___39405 = G__39406;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39403))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39403){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39403);
});})(g__39242__auto___39403))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__39242__auto___39403){
return (function (seq39364){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39364));
});})(g__39242__auto___39403))
;


var g__39242__auto___39407 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__39242__auto___39407){
return (function cljs$spec$impl$gen$double(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39408 = arguments.length;
var i__27992__auto___39409 = (0);
while(true){
if((i__27992__auto___39409 < len__27991__auto___39408)){
args__27998__auto__.push((arguments[i__27992__auto___39409]));

var G__39410 = (i__27992__auto___39409 + (1));
i__27992__auto___39409 = G__39410;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39407))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39407){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39407);
});})(g__39242__auto___39407))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__39242__auto___39407){
return (function (seq39365){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39365));
});})(g__39242__auto___39407))
;


var g__39242__auto___39411 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__39242__auto___39411){
return (function cljs$spec$impl$gen$int(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39412 = arguments.length;
var i__27992__auto___39413 = (0);
while(true){
if((i__27992__auto___39413 < len__27991__auto___39412)){
args__27998__auto__.push((arguments[i__27992__auto___39413]));

var G__39414 = (i__27992__auto___39413 + (1));
i__27992__auto___39413 = G__39414;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39411))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39411){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39411);
});})(g__39242__auto___39411))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__39242__auto___39411){
return (function (seq39366){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39366));
});})(g__39242__auto___39411))
;


var g__39242__auto___39415 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__39242__auto___39415){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39416 = arguments.length;
var i__27992__auto___39417 = (0);
while(true){
if((i__27992__auto___39417 < len__27991__auto___39416)){
args__27998__auto__.push((arguments[i__27992__auto___39417]));

var G__39418 = (i__27992__auto___39417 + (1));
i__27992__auto___39417 = G__39418;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39415))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39415){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39415);
});})(g__39242__auto___39415))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__39242__auto___39415){
return (function (seq39367){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39367));
});})(g__39242__auto___39415))
;


var g__39242__auto___39419 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__39242__auto___39419){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39420 = arguments.length;
var i__27992__auto___39421 = (0);
while(true){
if((i__27992__auto___39421 < len__27991__auto___39420)){
args__27998__auto__.push((arguments[i__27992__auto___39421]));

var G__39422 = (i__27992__auto___39421 + (1));
i__27992__auto___39421 = G__39422;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39419))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39419){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39419);
});})(g__39242__auto___39419))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__39242__auto___39419){
return (function (seq39368){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39368));
});})(g__39242__auto___39419))
;


var g__39242__auto___39423 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__39242__auto___39423){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39424 = arguments.length;
var i__27992__auto___39425 = (0);
while(true){
if((i__27992__auto___39425 < len__27991__auto___39424)){
args__27998__auto__.push((arguments[i__27992__auto___39425]));

var G__39426 = (i__27992__auto___39425 + (1));
i__27992__auto___39425 = G__39426;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39423))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39423){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39423);
});})(g__39242__auto___39423))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__39242__auto___39423){
return (function (seq39369){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39369));
});})(g__39242__auto___39423))
;


var g__39242__auto___39427 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__39242__auto___39427){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39428 = arguments.length;
var i__27992__auto___39429 = (0);
while(true){
if((i__27992__auto___39429 < len__27991__auto___39428)){
args__27998__auto__.push((arguments[i__27992__auto___39429]));

var G__39430 = (i__27992__auto___39429 + (1));
i__27992__auto___39429 = G__39430;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39427))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39427){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39427);
});})(g__39242__auto___39427))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__39242__auto___39427){
return (function (seq39370){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39370));
});})(g__39242__auto___39427))
;


var g__39242__auto___39431 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__39242__auto___39431){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39432 = arguments.length;
var i__27992__auto___39433 = (0);
while(true){
if((i__27992__auto___39433 < len__27991__auto___39432)){
args__27998__auto__.push((arguments[i__27992__auto___39433]));

var G__39434 = (i__27992__auto___39433 + (1));
i__27992__auto___39433 = G__39434;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39431))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39431){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39431);
});})(g__39242__auto___39431))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__39242__auto___39431){
return (function (seq39371){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39371));
});})(g__39242__auto___39431))
;


var g__39242__auto___39435 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__39242__auto___39435){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39436 = arguments.length;
var i__27992__auto___39437 = (0);
while(true){
if((i__27992__auto___39437 < len__27991__auto___39436)){
args__27998__auto__.push((arguments[i__27992__auto___39437]));

var G__39438 = (i__27992__auto___39437 + (1));
i__27992__auto___39437 = G__39438;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39435))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39435){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39435);
});})(g__39242__auto___39435))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__39242__auto___39435){
return (function (seq39372){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39372));
});})(g__39242__auto___39435))
;


var g__39242__auto___39439 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__39242__auto___39439){
return (function cljs$spec$impl$gen$string(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39440 = arguments.length;
var i__27992__auto___39441 = (0);
while(true){
if((i__27992__auto___39441 < len__27991__auto___39440)){
args__27998__auto__.push((arguments[i__27992__auto___39441]));

var G__39442 = (i__27992__auto___39441 + (1));
i__27992__auto___39441 = G__39442;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39439))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39439){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39439);
});})(g__39242__auto___39439))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__39242__auto___39439){
return (function (seq39373){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39373));
});})(g__39242__auto___39439))
;


var g__39242__auto___39443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__39242__auto___39443){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39444 = arguments.length;
var i__27992__auto___39445 = (0);
while(true){
if((i__27992__auto___39445 < len__27991__auto___39444)){
args__27998__auto__.push((arguments[i__27992__auto___39445]));

var G__39446 = (i__27992__auto___39445 + (1));
i__27992__auto___39445 = G__39446;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39443))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39443){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39443);
});})(g__39242__auto___39443))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__39242__auto___39443){
return (function (seq39374){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39374));
});})(g__39242__auto___39443))
;


var g__39242__auto___39447 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__39242__auto___39447){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39448 = arguments.length;
var i__27992__auto___39449 = (0);
while(true){
if((i__27992__auto___39449 < len__27991__auto___39448)){
args__27998__auto__.push((arguments[i__27992__auto___39449]));

var G__39450 = (i__27992__auto___39449 + (1));
i__27992__auto___39449 = G__39450;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39447))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39447){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39447);
});})(g__39242__auto___39447))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__39242__auto___39447){
return (function (seq39375){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39375));
});})(g__39242__auto___39447))
;


var g__39242__auto___39451 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__39242__auto___39451){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39452 = arguments.length;
var i__27992__auto___39453 = (0);
while(true){
if((i__27992__auto___39453 < len__27991__auto___39452)){
args__27998__auto__.push((arguments[i__27992__auto___39453]));

var G__39454 = (i__27992__auto___39453 + (1));
i__27992__auto___39453 = G__39454;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39451))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39451){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39451);
});})(g__39242__auto___39451))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__39242__auto___39451){
return (function (seq39376){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39376));
});})(g__39242__auto___39451))
;


var g__39242__auto___39455 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__39242__auto___39455){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39456 = arguments.length;
var i__27992__auto___39457 = (0);
while(true){
if((i__27992__auto___39457 < len__27991__auto___39456)){
args__27998__auto__.push((arguments[i__27992__auto___39457]));

var G__39458 = (i__27992__auto___39457 + (1));
i__27992__auto___39457 = G__39458;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39455))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39455){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39455);
});})(g__39242__auto___39455))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__39242__auto___39455){
return (function (seq39377){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39377));
});})(g__39242__auto___39455))
;


var g__39242__auto___39459 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__39242__auto___39459){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39460 = arguments.length;
var i__27992__auto___39461 = (0);
while(true){
if((i__27992__auto___39461 < len__27991__auto___39460)){
args__27998__auto__.push((arguments[i__27992__auto___39461]));

var G__39462 = (i__27992__auto___39461 + (1));
i__27992__auto___39461 = G__39462;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});})(g__39242__auto___39459))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39242__auto___39459){
return (function (args){
return cljs.core.deref.call(null,g__39242__auto___39459);
});})(g__39242__auto___39459))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__39242__auto___39459){
return (function (seq39378){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39378));
});})(g__39242__auto___39459))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27998__auto__ = [];
var len__27991__auto___39465 = arguments.length;
var i__27992__auto___39466 = (0);
while(true){
if((i__27992__auto___39466 < len__27991__auto___39465)){
args__27998__auto__.push((arguments[i__27992__auto___39466]));

var G__39467 = (i__27992__auto___39466 + (1));
i__27992__auto___39466 = G__39467;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__39463_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__39463_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq39464){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39464));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__39468_SHARP_){
return (new Date(p1__39468_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1538029298822