// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26808__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26808__auto__){
return or__26808__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26808__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37239_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37239_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37244 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37245 = null;
var count__37246 = (0);
var i__37247 = (0);
while(true){
if((i__37247 < count__37246)){
var n = cljs.core._nth.call(null,chunk__37245,i__37247);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37248 = seq__37244;
var G__37249 = chunk__37245;
var G__37250 = count__37246;
var G__37251 = (i__37247 + (1));
seq__37244 = G__37248;
chunk__37245 = G__37249;
count__37246 = G__37250;
i__37247 = G__37251;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37244);
if(temp__5457__auto__){
var seq__37244__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37244__$1)){
var c__27712__auto__ = cljs.core.chunk_first.call(null,seq__37244__$1);
var G__37252 = cljs.core.chunk_rest.call(null,seq__37244__$1);
var G__37253 = c__27712__auto__;
var G__37254 = cljs.core.count.call(null,c__27712__auto__);
var G__37255 = (0);
seq__37244 = G__37252;
chunk__37245 = G__37253;
count__37246 = G__37254;
i__37247 = G__37255;
continue;
} else {
var n = cljs.core.first.call(null,seq__37244__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37256 = cljs.core.next.call(null,seq__37244__$1);
var G__37257 = null;
var G__37258 = (0);
var G__37259 = (0);
seq__37244 = G__37256;
chunk__37245 = G__37257;
count__37246 = G__37258;
i__37247 = G__37259;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37310_37321 = cljs.core.seq.call(null,deps);
var chunk__37311_37322 = null;
var count__37312_37323 = (0);
var i__37313_37324 = (0);
while(true){
if((i__37313_37324 < count__37312_37323)){
var dep_37325 = cljs.core._nth.call(null,chunk__37311_37322,i__37313_37324);
topo_sort_helper_STAR_.call(null,dep_37325,(depth + (1)),state);

var G__37326 = seq__37310_37321;
var G__37327 = chunk__37311_37322;
var G__37328 = count__37312_37323;
var G__37329 = (i__37313_37324 + (1));
seq__37310_37321 = G__37326;
chunk__37311_37322 = G__37327;
count__37312_37323 = G__37328;
i__37313_37324 = G__37329;
continue;
} else {
var temp__5457__auto___37330 = cljs.core.seq.call(null,seq__37310_37321);
if(temp__5457__auto___37330){
var seq__37310_37331__$1 = temp__5457__auto___37330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37310_37331__$1)){
var c__27712__auto___37332 = cljs.core.chunk_first.call(null,seq__37310_37331__$1);
var G__37333 = cljs.core.chunk_rest.call(null,seq__37310_37331__$1);
var G__37334 = c__27712__auto___37332;
var G__37335 = cljs.core.count.call(null,c__27712__auto___37332);
var G__37336 = (0);
seq__37310_37321 = G__37333;
chunk__37311_37322 = G__37334;
count__37312_37323 = G__37335;
i__37313_37324 = G__37336;
continue;
} else {
var dep_37337 = cljs.core.first.call(null,seq__37310_37331__$1);
topo_sort_helper_STAR_.call(null,dep_37337,(depth + (1)),state);

var G__37338 = cljs.core.next.call(null,seq__37310_37331__$1);
var G__37339 = null;
var G__37340 = (0);
var G__37341 = (0);
seq__37310_37321 = G__37338;
chunk__37311_37322 = G__37339;
count__37312_37323 = G__37340;
i__37313_37324 = G__37341;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37314){
var vec__37318 = p__37314;
var seq__37319 = cljs.core.seq.call(null,vec__37318);
var first__37320 = cljs.core.first.call(null,seq__37319);
var seq__37319__$1 = cljs.core.next.call(null,seq__37319);
var x = first__37320;
var xs = seq__37319__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37318,seq__37319,first__37320,seq__37319__$1,x,xs,get_deps__$1){
return (function (p1__37260_SHARP_){
return clojure.set.difference.call(null,p1__37260_SHARP_,x);
});})(vec__37318,seq__37319,first__37320,seq__37319__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37354 = cljs.core.seq.call(null,provides);
var chunk__37355 = null;
var count__37356 = (0);
var i__37357 = (0);
while(true){
if((i__37357 < count__37356)){
var prov = cljs.core._nth.call(null,chunk__37355,i__37357);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37358_37366 = cljs.core.seq.call(null,requires);
var chunk__37359_37367 = null;
var count__37360_37368 = (0);
var i__37361_37369 = (0);
while(true){
if((i__37361_37369 < count__37360_37368)){
var req_37370 = cljs.core._nth.call(null,chunk__37359_37367,i__37361_37369);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37370,prov);

var G__37371 = seq__37358_37366;
var G__37372 = chunk__37359_37367;
var G__37373 = count__37360_37368;
var G__37374 = (i__37361_37369 + (1));
seq__37358_37366 = G__37371;
chunk__37359_37367 = G__37372;
count__37360_37368 = G__37373;
i__37361_37369 = G__37374;
continue;
} else {
var temp__5457__auto___37375 = cljs.core.seq.call(null,seq__37358_37366);
if(temp__5457__auto___37375){
var seq__37358_37376__$1 = temp__5457__auto___37375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37358_37376__$1)){
var c__27712__auto___37377 = cljs.core.chunk_first.call(null,seq__37358_37376__$1);
var G__37378 = cljs.core.chunk_rest.call(null,seq__37358_37376__$1);
var G__37379 = c__27712__auto___37377;
var G__37380 = cljs.core.count.call(null,c__27712__auto___37377);
var G__37381 = (0);
seq__37358_37366 = G__37378;
chunk__37359_37367 = G__37379;
count__37360_37368 = G__37380;
i__37361_37369 = G__37381;
continue;
} else {
var req_37382 = cljs.core.first.call(null,seq__37358_37376__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37382,prov);

var G__37383 = cljs.core.next.call(null,seq__37358_37376__$1);
var G__37384 = null;
var G__37385 = (0);
var G__37386 = (0);
seq__37358_37366 = G__37383;
chunk__37359_37367 = G__37384;
count__37360_37368 = G__37385;
i__37361_37369 = G__37386;
continue;
}
} else {
}
}
break;
}

var G__37387 = seq__37354;
var G__37388 = chunk__37355;
var G__37389 = count__37356;
var G__37390 = (i__37357 + (1));
seq__37354 = G__37387;
chunk__37355 = G__37388;
count__37356 = G__37389;
i__37357 = G__37390;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37354);
if(temp__5457__auto__){
var seq__37354__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37354__$1)){
var c__27712__auto__ = cljs.core.chunk_first.call(null,seq__37354__$1);
var G__37391 = cljs.core.chunk_rest.call(null,seq__37354__$1);
var G__37392 = c__27712__auto__;
var G__37393 = cljs.core.count.call(null,c__27712__auto__);
var G__37394 = (0);
seq__37354 = G__37391;
chunk__37355 = G__37392;
count__37356 = G__37393;
i__37357 = G__37394;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37354__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37362_37395 = cljs.core.seq.call(null,requires);
var chunk__37363_37396 = null;
var count__37364_37397 = (0);
var i__37365_37398 = (0);
while(true){
if((i__37365_37398 < count__37364_37397)){
var req_37399 = cljs.core._nth.call(null,chunk__37363_37396,i__37365_37398);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37399,prov);

var G__37400 = seq__37362_37395;
var G__37401 = chunk__37363_37396;
var G__37402 = count__37364_37397;
var G__37403 = (i__37365_37398 + (1));
seq__37362_37395 = G__37400;
chunk__37363_37396 = G__37401;
count__37364_37397 = G__37402;
i__37365_37398 = G__37403;
continue;
} else {
var temp__5457__auto___37404__$1 = cljs.core.seq.call(null,seq__37362_37395);
if(temp__5457__auto___37404__$1){
var seq__37362_37405__$1 = temp__5457__auto___37404__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37362_37405__$1)){
var c__27712__auto___37406 = cljs.core.chunk_first.call(null,seq__37362_37405__$1);
var G__37407 = cljs.core.chunk_rest.call(null,seq__37362_37405__$1);
var G__37408 = c__27712__auto___37406;
var G__37409 = cljs.core.count.call(null,c__27712__auto___37406);
var G__37410 = (0);
seq__37362_37395 = G__37407;
chunk__37363_37396 = G__37408;
count__37364_37397 = G__37409;
i__37365_37398 = G__37410;
continue;
} else {
var req_37411 = cljs.core.first.call(null,seq__37362_37405__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37411,prov);

var G__37412 = cljs.core.next.call(null,seq__37362_37405__$1);
var G__37413 = null;
var G__37414 = (0);
var G__37415 = (0);
seq__37362_37395 = G__37412;
chunk__37363_37396 = G__37413;
count__37364_37397 = G__37414;
i__37365_37398 = G__37415;
continue;
}
} else {
}
}
break;
}

var G__37416 = cljs.core.next.call(null,seq__37354__$1);
var G__37417 = null;
var G__37418 = (0);
var G__37419 = (0);
seq__37354 = G__37416;
chunk__37355 = G__37417;
count__37356 = G__37418;
i__37357 = G__37419;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37424_37428 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37425_37429 = null;
var count__37426_37430 = (0);
var i__37427_37431 = (0);
while(true){
if((i__37427_37431 < count__37426_37430)){
var ns_37432 = cljs.core._nth.call(null,chunk__37425_37429,i__37427_37431);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37432);

var G__37433 = seq__37424_37428;
var G__37434 = chunk__37425_37429;
var G__37435 = count__37426_37430;
var G__37436 = (i__37427_37431 + (1));
seq__37424_37428 = G__37433;
chunk__37425_37429 = G__37434;
count__37426_37430 = G__37435;
i__37427_37431 = G__37436;
continue;
} else {
var temp__5457__auto___37437 = cljs.core.seq.call(null,seq__37424_37428);
if(temp__5457__auto___37437){
var seq__37424_37438__$1 = temp__5457__auto___37437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37424_37438__$1)){
var c__27712__auto___37439 = cljs.core.chunk_first.call(null,seq__37424_37438__$1);
var G__37440 = cljs.core.chunk_rest.call(null,seq__37424_37438__$1);
var G__37441 = c__27712__auto___37439;
var G__37442 = cljs.core.count.call(null,c__27712__auto___37439);
var G__37443 = (0);
seq__37424_37428 = G__37440;
chunk__37425_37429 = G__37441;
count__37426_37430 = G__37442;
i__37427_37431 = G__37443;
continue;
} else {
var ns_37444 = cljs.core.first.call(null,seq__37424_37438__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37444);

var G__37445 = cljs.core.next.call(null,seq__37424_37438__$1);
var G__37446 = null;
var G__37447 = (0);
var G__37448 = (0);
seq__37424_37428 = G__37445;
chunk__37425_37429 = G__37446;
count__37426_37430 = G__37447;
i__37427_37431 = G__37448;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26808__auto__ = goog.require__;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37449__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37450__i = 0, G__37450__a = new Array(arguments.length -  0);
while (G__37450__i < G__37450__a.length) {G__37450__a[G__37450__i] = arguments[G__37450__i + 0]; ++G__37450__i;}
  args = new cljs.core.IndexedSeq(G__37450__a,0);
} 
return G__37449__delegate.call(this,args);};
G__37449.cljs$lang$maxFixedArity = 0;
G__37449.cljs$lang$applyTo = (function (arglist__37451){
var args = cljs.core.seq(arglist__37451);
return G__37449__delegate(args);
});
G__37449.cljs$core$IFn$_invoke$arity$variadic = G__37449__delegate;
return G__37449;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37452 = cljs.core._EQ_;
var expr__37453 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37452.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37453))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37452,expr__37453){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37452,expr__37453))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37452,expr__37453){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37455){if((e37455 instanceof Error)){
var e = e37455;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37455;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37452,expr__37453))
} else {
if(cljs.core.truth_(pred__37452.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37453))){
return ((function (pred__37452,expr__37453){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__37452,expr__37453){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__37452,expr__37453))
);

return deferred.addErrback(((function (deferred,pred__37452,expr__37453){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__37452,expr__37453))
);
});
;})(pred__37452,expr__37453))
} else {
if(cljs.core.truth_(pred__37452.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37453))){
return ((function (pred__37452,expr__37453){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37456){if((e37456 instanceof Error)){
var e = e37456;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37456;

}
}})());
});
;})(pred__37452,expr__37453))
} else {
return ((function (pred__37452,expr__37453){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37452,expr__37453))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37457,callback){
var map__37460 = p__37457;
var map__37460__$1 = ((((!((map__37460 == null)))?((((map__37460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37460):map__37460);
var file_msg = map__37460__$1;
var request_url = cljs.core.get.call(null,map__37460__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37460,map__37460__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37460,map__37460__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__){
return (function (state_37484){
var state_val_37485 = (state_37484[(1)]);
if((state_val_37485 === (7))){
var inst_37480 = (state_37484[(2)]);
var state_37484__$1 = state_37484;
var statearr_37486_37506 = state_37484__$1;
(statearr_37486_37506[(2)] = inst_37480);

(statearr_37486_37506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (1))){
var state_37484__$1 = state_37484;
var statearr_37487_37507 = state_37484__$1;
(statearr_37487_37507[(2)] = null);

(statearr_37487_37507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (4))){
var inst_37464 = (state_37484[(7)]);
var inst_37464__$1 = (state_37484[(2)]);
var state_37484__$1 = (function (){var statearr_37488 = state_37484;
(statearr_37488[(7)] = inst_37464__$1);

return statearr_37488;
})();
if(cljs.core.truth_(inst_37464__$1)){
var statearr_37489_37508 = state_37484__$1;
(statearr_37489_37508[(1)] = (5));

} else {
var statearr_37490_37509 = state_37484__$1;
(statearr_37490_37509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (6))){
var state_37484__$1 = state_37484;
var statearr_37491_37510 = state_37484__$1;
(statearr_37491_37510[(2)] = null);

(statearr_37491_37510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (3))){
var inst_37482 = (state_37484[(2)]);
var state_37484__$1 = state_37484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37484__$1,inst_37482);
} else {
if((state_val_37485 === (2))){
var state_37484__$1 = state_37484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37484__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37485 === (11))){
var inst_37476 = (state_37484[(2)]);
var state_37484__$1 = (function (){var statearr_37492 = state_37484;
(statearr_37492[(8)] = inst_37476);

return statearr_37492;
})();
var statearr_37493_37511 = state_37484__$1;
(statearr_37493_37511[(2)] = null);

(statearr_37493_37511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (9))){
var inst_37470 = (state_37484[(9)]);
var inst_37468 = (state_37484[(10)]);
var inst_37472 = inst_37470.call(null,inst_37468);
var state_37484__$1 = state_37484;
var statearr_37494_37512 = state_37484__$1;
(statearr_37494_37512[(2)] = inst_37472);

(statearr_37494_37512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (5))){
var inst_37464 = (state_37484[(7)]);
var inst_37466 = figwheel.client.file_reloading.blocking_load.call(null,inst_37464);
var state_37484__$1 = state_37484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37484__$1,(8),inst_37466);
} else {
if((state_val_37485 === (10))){
var inst_37468 = (state_37484[(10)]);
var inst_37474 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37468);
var state_37484__$1 = state_37484;
var statearr_37495_37513 = state_37484__$1;
(statearr_37495_37513[(2)] = inst_37474);

(statearr_37495_37513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37485 === (8))){
var inst_37470 = (state_37484[(9)]);
var inst_37464 = (state_37484[(7)]);
var inst_37468 = (state_37484[(2)]);
var inst_37469 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37470__$1 = cljs.core.get.call(null,inst_37469,inst_37464);
var state_37484__$1 = (function (){var statearr_37496 = state_37484;
(statearr_37496[(9)] = inst_37470__$1);

(statearr_37496[(10)] = inst_37468);

return statearr_37496;
})();
if(cljs.core.truth_(inst_37470__$1)){
var statearr_37497_37514 = state_37484__$1;
(statearr_37497_37514[(1)] = (9));

} else {
var statearr_37498_37515 = state_37484__$1;
(statearr_37498_37515[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29457__auto__))
;
return ((function (switch__29343__auto__,c__29457__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29344__auto__ = null;
var figwheel$client$file_reloading$state_machine__29344__auto____0 = (function (){
var statearr_37502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37502[(0)] = figwheel$client$file_reloading$state_machine__29344__auto__);

(statearr_37502[(1)] = (1));

return statearr_37502;
});
var figwheel$client$file_reloading$state_machine__29344__auto____1 = (function (state_37484){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_37484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e37503){if((e37503 instanceof Object)){
var ex__29347__auto__ = e37503;
var statearr_37504_37516 = state_37484;
(statearr_37504_37516[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37517 = state_37484;
state_37484 = G__37517;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29344__auto__ = function(state_37484){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29344__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29344__auto____1.call(this,state_37484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29344__auto____0;
figwheel$client$file_reloading$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29344__auto____1;
return figwheel$client$file_reloading$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__))
})();
var state__29459__auto__ = (function (){var statearr_37505 = f__29458__auto__.call(null);
(statearr_37505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_37505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__))
);

return c__29457__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37518,callback){
var map__37521 = p__37518;
var map__37521__$1 = ((((!((map__37521 == null)))?((((map__37521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37521):map__37521);
var file_msg = map__37521__$1;
var namespace = cljs.core.get.call(null,map__37521__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37521,map__37521__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37521,map__37521__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37523){
var map__37526 = p__37523;
var map__37526__$1 = ((((!((map__37526 == null)))?((((map__37526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37526):map__37526);
var file_msg = map__37526__$1;
var namespace = cljs.core.get.call(null,map__37526__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37528){
var map__37531 = p__37528;
var map__37531__$1 = ((((!((map__37531 == null)))?((((map__37531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37531):map__37531);
var file_msg = map__37531__$1;
var namespace = cljs.core.get.call(null,map__37531__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26796__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26796__auto__){
var or__26808__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
var or__26808__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26808__auto____$1)){
return or__26808__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26796__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37533,callback){
var map__37536 = p__37533;
var map__37536__$1 = ((((!((map__37536 == null)))?((((map__37536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37536):map__37536);
var file_msg = map__37536__$1;
var request_url = cljs.core.get.call(null,map__37536__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37536__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29457__auto___37640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___37640,out){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___37640,out){
return (function (state_37622){
var state_val_37623 = (state_37622[(1)]);
if((state_val_37623 === (1))){
var inst_37596 = cljs.core.seq.call(null,files);
var inst_37597 = cljs.core.first.call(null,inst_37596);
var inst_37598 = cljs.core.next.call(null,inst_37596);
var inst_37599 = files;
var state_37622__$1 = (function (){var statearr_37624 = state_37622;
(statearr_37624[(7)] = inst_37597);

(statearr_37624[(8)] = inst_37599);

(statearr_37624[(9)] = inst_37598);

return statearr_37624;
})();
var statearr_37625_37641 = state_37622__$1;
(statearr_37625_37641[(2)] = null);

(statearr_37625_37641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (2))){
var inst_37605 = (state_37622[(10)]);
var inst_37599 = (state_37622[(8)]);
var inst_37604 = cljs.core.seq.call(null,inst_37599);
var inst_37605__$1 = cljs.core.first.call(null,inst_37604);
var inst_37606 = cljs.core.next.call(null,inst_37604);
var inst_37607 = (inst_37605__$1 == null);
var inst_37608 = cljs.core.not.call(null,inst_37607);
var state_37622__$1 = (function (){var statearr_37626 = state_37622;
(statearr_37626[(10)] = inst_37605__$1);

(statearr_37626[(11)] = inst_37606);

return statearr_37626;
})();
if(inst_37608){
var statearr_37627_37642 = state_37622__$1;
(statearr_37627_37642[(1)] = (4));

} else {
var statearr_37628_37643 = state_37622__$1;
(statearr_37628_37643[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (3))){
var inst_37620 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37622__$1,inst_37620);
} else {
if((state_val_37623 === (4))){
var inst_37605 = (state_37622[(10)]);
var inst_37610 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37605);
var state_37622__$1 = state_37622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37622__$1,(7),inst_37610);
} else {
if((state_val_37623 === (5))){
var inst_37616 = cljs.core.async.close_BANG_.call(null,out);
var state_37622__$1 = state_37622;
var statearr_37629_37644 = state_37622__$1;
(statearr_37629_37644[(2)] = inst_37616);

(statearr_37629_37644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (6))){
var inst_37618 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
var statearr_37630_37645 = state_37622__$1;
(statearr_37630_37645[(2)] = inst_37618);

(statearr_37630_37645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (7))){
var inst_37606 = (state_37622[(11)]);
var inst_37612 = (state_37622[(2)]);
var inst_37613 = cljs.core.async.put_BANG_.call(null,out,inst_37612);
var inst_37599 = inst_37606;
var state_37622__$1 = (function (){var statearr_37631 = state_37622;
(statearr_37631[(12)] = inst_37613);

(statearr_37631[(8)] = inst_37599);

return statearr_37631;
})();
var statearr_37632_37646 = state_37622__$1;
(statearr_37632_37646[(2)] = null);

(statearr_37632_37646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29457__auto___37640,out))
;
return ((function (switch__29343__auto__,c__29457__auto___37640,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto____0 = (function (){
var statearr_37636 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37636[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto__);

(statearr_37636[(1)] = (1));

return statearr_37636;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto____1 = (function (state_37622){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_37622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e37637){if((e37637 instanceof Object)){
var ex__29347__auto__ = e37637;
var statearr_37638_37647 = state_37622;
(statearr_37638_37647[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37648 = state_37622;
state_37622 = G__37648;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto__ = function(state_37622){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto____1.call(this,state_37622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___37640,out))
})();
var state__29459__auto__ = (function (){var statearr_37639 = f__29458__auto__.call(null);
(statearr_37639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___37640);

return statearr_37639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___37640,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37649,opts){
var map__37653 = p__37649;
var map__37653__$1 = ((((!((map__37653 == null)))?((((map__37653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37653):map__37653);
var eval_body__$1 = cljs.core.get.call(null,map__37653__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26796__auto__ = eval_body__$1;
if(cljs.core.truth_(and__26796__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__26796__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37655){var e = e37655;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37656_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37656_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37665){
var vec__37666 = p__37665;
var k = cljs.core.nth.call(null,vec__37666,(0),null);
var v = cljs.core.nth.call(null,vec__37666,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37669){
var vec__37670 = p__37669;
var k = cljs.core.nth.call(null,vec__37670,(0),null);
var v = cljs.core.nth.call(null,vec__37670,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37676,p__37677){
var map__37924 = p__37676;
var map__37924__$1 = ((((!((map__37924 == null)))?((((map__37924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37924):map__37924);
var opts = map__37924__$1;
var before_jsload = cljs.core.get.call(null,map__37924__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37924__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37924__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37925 = p__37677;
var map__37925__$1 = ((((!((map__37925 == null)))?((((map__37925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37925):map__37925);
var msg = map__37925__$1;
var files = cljs.core.get.call(null,map__37925__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37925__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37925__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38078){
var state_val_38079 = (state_38078[(1)]);
if((state_val_38079 === (7))){
var inst_37942 = (state_38078[(7)]);
var inst_37940 = (state_38078[(8)]);
var inst_37939 = (state_38078[(9)]);
var inst_37941 = (state_38078[(10)]);
var inst_37947 = cljs.core._nth.call(null,inst_37940,inst_37942);
var inst_37948 = figwheel.client.file_reloading.eval_body.call(null,inst_37947,opts);
var inst_37949 = (inst_37942 + (1));
var tmp38080 = inst_37940;
var tmp38081 = inst_37939;
var tmp38082 = inst_37941;
var inst_37939__$1 = tmp38081;
var inst_37940__$1 = tmp38080;
var inst_37941__$1 = tmp38082;
var inst_37942__$1 = inst_37949;
var state_38078__$1 = (function (){var statearr_38083 = state_38078;
(statearr_38083[(7)] = inst_37942__$1);

(statearr_38083[(8)] = inst_37940__$1);

(statearr_38083[(11)] = inst_37948);

(statearr_38083[(9)] = inst_37939__$1);

(statearr_38083[(10)] = inst_37941__$1);

return statearr_38083;
})();
var statearr_38084_38170 = state_38078__$1;
(statearr_38084_38170[(2)] = null);

(statearr_38084_38170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (20))){
var inst_37982 = (state_38078[(12)]);
var inst_37990 = figwheel.client.file_reloading.sort_files.call(null,inst_37982);
var state_38078__$1 = state_38078;
var statearr_38085_38171 = state_38078__$1;
(statearr_38085_38171[(2)] = inst_37990);

(statearr_38085_38171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (27))){
var state_38078__$1 = state_38078;
var statearr_38086_38172 = state_38078__$1;
(statearr_38086_38172[(2)] = null);

(statearr_38086_38172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (1))){
var inst_37931 = (state_38078[(13)]);
var inst_37928 = before_jsload.call(null,files);
var inst_37929 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37930 = (function (){return ((function (inst_37931,inst_37928,inst_37929,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37673_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37673_SHARP_);
});
;})(inst_37931,inst_37928,inst_37929,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37931__$1 = cljs.core.filter.call(null,inst_37930,files);
var inst_37932 = cljs.core.not_empty.call(null,inst_37931__$1);
var state_38078__$1 = (function (){var statearr_38087 = state_38078;
(statearr_38087[(13)] = inst_37931__$1);

(statearr_38087[(14)] = inst_37929);

(statearr_38087[(15)] = inst_37928);

return statearr_38087;
})();
if(cljs.core.truth_(inst_37932)){
var statearr_38088_38173 = state_38078__$1;
(statearr_38088_38173[(1)] = (2));

} else {
var statearr_38089_38174 = state_38078__$1;
(statearr_38089_38174[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (24))){
var state_38078__$1 = state_38078;
var statearr_38090_38175 = state_38078__$1;
(statearr_38090_38175[(2)] = null);

(statearr_38090_38175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (39))){
var inst_38032 = (state_38078[(16)]);
var state_38078__$1 = state_38078;
var statearr_38091_38176 = state_38078__$1;
(statearr_38091_38176[(2)] = inst_38032);

(statearr_38091_38176[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (46))){
var inst_38073 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38092_38177 = state_38078__$1;
(statearr_38092_38177[(2)] = inst_38073);

(statearr_38092_38177[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (4))){
var inst_37976 = (state_38078[(2)]);
var inst_37977 = cljs.core.List.EMPTY;
var inst_37978 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37977);
var inst_37979 = (function (){return ((function (inst_37976,inst_37977,inst_37978,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37674_SHARP_){
var and__26796__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37674_SHARP_);
if(cljs.core.truth_(and__26796__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37674_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37674_SHARP_)));
} else {
return and__26796__auto__;
}
});
;})(inst_37976,inst_37977,inst_37978,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37980 = cljs.core.filter.call(null,inst_37979,files);
var inst_37981 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37982 = cljs.core.concat.call(null,inst_37980,inst_37981);
var state_38078__$1 = (function (){var statearr_38093 = state_38078;
(statearr_38093[(17)] = inst_37978);

(statearr_38093[(18)] = inst_37976);

(statearr_38093[(12)] = inst_37982);

return statearr_38093;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38094_38178 = state_38078__$1;
(statearr_38094_38178[(1)] = (16));

} else {
var statearr_38095_38179 = state_38078__$1;
(statearr_38095_38179[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (15))){
var inst_37966 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38096_38180 = state_38078__$1;
(statearr_38096_38180[(2)] = inst_37966);

(statearr_38096_38180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (21))){
var inst_37992 = (state_38078[(19)]);
var inst_37992__$1 = (state_38078[(2)]);
var inst_37993 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37992__$1);
var state_38078__$1 = (function (){var statearr_38097 = state_38078;
(statearr_38097[(19)] = inst_37992__$1);

return statearr_38097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38078__$1,(22),inst_37993);
} else {
if((state_val_38079 === (31))){
var inst_38076 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38078__$1,inst_38076);
} else {
if((state_val_38079 === (32))){
var inst_38032 = (state_38078[(16)]);
var inst_38037 = inst_38032.cljs$lang$protocol_mask$partition0$;
var inst_38038 = (inst_38037 & (64));
var inst_38039 = inst_38032.cljs$core$ISeq$;
var inst_38040 = (inst_38038) || (inst_38039);
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_38040)){
var statearr_38098_38181 = state_38078__$1;
(statearr_38098_38181[(1)] = (35));

} else {
var statearr_38099_38182 = state_38078__$1;
(statearr_38099_38182[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (40))){
var inst_38053 = (state_38078[(20)]);
var inst_38052 = (state_38078[(2)]);
var inst_38053__$1 = cljs.core.get.call(null,inst_38052,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38054 = cljs.core.get.call(null,inst_38052,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38055 = cljs.core.not_empty.call(null,inst_38053__$1);
var state_38078__$1 = (function (){var statearr_38100 = state_38078;
(statearr_38100[(20)] = inst_38053__$1);

(statearr_38100[(21)] = inst_38054);

return statearr_38100;
})();
if(cljs.core.truth_(inst_38055)){
var statearr_38101_38183 = state_38078__$1;
(statearr_38101_38183[(1)] = (41));

} else {
var statearr_38102_38184 = state_38078__$1;
(statearr_38102_38184[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (33))){
var state_38078__$1 = state_38078;
var statearr_38103_38185 = state_38078__$1;
(statearr_38103_38185[(2)] = false);

(statearr_38103_38185[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (13))){
var inst_37952 = (state_38078[(22)]);
var inst_37956 = cljs.core.chunk_first.call(null,inst_37952);
var inst_37957 = cljs.core.chunk_rest.call(null,inst_37952);
var inst_37958 = cljs.core.count.call(null,inst_37956);
var inst_37939 = inst_37957;
var inst_37940 = inst_37956;
var inst_37941 = inst_37958;
var inst_37942 = (0);
var state_38078__$1 = (function (){var statearr_38104 = state_38078;
(statearr_38104[(7)] = inst_37942);

(statearr_38104[(8)] = inst_37940);

(statearr_38104[(9)] = inst_37939);

(statearr_38104[(10)] = inst_37941);

return statearr_38104;
})();
var statearr_38105_38186 = state_38078__$1;
(statearr_38105_38186[(2)] = null);

(statearr_38105_38186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (22))){
var inst_37995 = (state_38078[(23)]);
var inst_38000 = (state_38078[(24)]);
var inst_37996 = (state_38078[(25)]);
var inst_37992 = (state_38078[(19)]);
var inst_37995__$1 = (state_38078[(2)]);
var inst_37996__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37995__$1);
var inst_37997 = (function (){var all_files = inst_37992;
var res_SINGLEQUOTE_ = inst_37995__$1;
var res = inst_37996__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37995,inst_38000,inst_37996,inst_37992,inst_37995__$1,inst_37996__$1,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37675_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37675_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37995,inst_38000,inst_37996,inst_37992,inst_37995__$1,inst_37996__$1,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37998 = cljs.core.filter.call(null,inst_37997,inst_37995__$1);
var inst_37999 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38000__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37999);
var inst_38001 = cljs.core.not_empty.call(null,inst_38000__$1);
var state_38078__$1 = (function (){var statearr_38106 = state_38078;
(statearr_38106[(26)] = inst_37998);

(statearr_38106[(23)] = inst_37995__$1);

(statearr_38106[(24)] = inst_38000__$1);

(statearr_38106[(25)] = inst_37996__$1);

return statearr_38106;
})();
if(cljs.core.truth_(inst_38001)){
var statearr_38107_38187 = state_38078__$1;
(statearr_38107_38187[(1)] = (23));

} else {
var statearr_38108_38188 = state_38078__$1;
(statearr_38108_38188[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (36))){
var state_38078__$1 = state_38078;
var statearr_38109_38189 = state_38078__$1;
(statearr_38109_38189[(2)] = false);

(statearr_38109_38189[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (41))){
var inst_38053 = (state_38078[(20)]);
var inst_38057 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38058 = cljs.core.map.call(null,inst_38057,inst_38053);
var inst_38059 = cljs.core.pr_str.call(null,inst_38058);
var inst_38060 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_38059)].join('');
var inst_38061 = figwheel.client.utils.log.call(null,inst_38060);
var state_38078__$1 = state_38078;
var statearr_38110_38190 = state_38078__$1;
(statearr_38110_38190[(2)] = inst_38061);

(statearr_38110_38190[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (43))){
var inst_38054 = (state_38078[(21)]);
var inst_38064 = (state_38078[(2)]);
var inst_38065 = cljs.core.not_empty.call(null,inst_38054);
var state_38078__$1 = (function (){var statearr_38111 = state_38078;
(statearr_38111[(27)] = inst_38064);

return statearr_38111;
})();
if(cljs.core.truth_(inst_38065)){
var statearr_38112_38191 = state_38078__$1;
(statearr_38112_38191[(1)] = (44));

} else {
var statearr_38113_38192 = state_38078__$1;
(statearr_38113_38192[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (29))){
var inst_37998 = (state_38078[(26)]);
var inst_37995 = (state_38078[(23)]);
var inst_38032 = (state_38078[(16)]);
var inst_38000 = (state_38078[(24)]);
var inst_37996 = (state_38078[(25)]);
var inst_37992 = (state_38078[(19)]);
var inst_38028 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38031 = (function (){var all_files = inst_37992;
var res_SINGLEQUOTE_ = inst_37995;
var res = inst_37996;
var files_not_loaded = inst_37998;
var dependencies_that_loaded = inst_38000;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37998,inst_37995,inst_38032,inst_38000,inst_37996,inst_37992,inst_38028,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38030){
var map__38114 = p__38030;
var map__38114__$1 = ((((!((map__38114 == null)))?((((map__38114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38114):map__38114);
var namespace = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37998,inst_37995,inst_38032,inst_38000,inst_37996,inst_37992,inst_38028,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38032__$1 = cljs.core.group_by.call(null,inst_38031,inst_37998);
var inst_38034 = (inst_38032__$1 == null);
var inst_38035 = cljs.core.not.call(null,inst_38034);
var state_38078__$1 = (function (){var statearr_38116 = state_38078;
(statearr_38116[(16)] = inst_38032__$1);

(statearr_38116[(28)] = inst_38028);

return statearr_38116;
})();
if(inst_38035){
var statearr_38117_38193 = state_38078__$1;
(statearr_38117_38193[(1)] = (32));

} else {
var statearr_38118_38194 = state_38078__$1;
(statearr_38118_38194[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (44))){
var inst_38054 = (state_38078[(21)]);
var inst_38067 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38054);
var inst_38068 = cljs.core.pr_str.call(null,inst_38067);
var inst_38069 = [cljs.core.str("not required: "),cljs.core.str(inst_38068)].join('');
var inst_38070 = figwheel.client.utils.log.call(null,inst_38069);
var state_38078__$1 = state_38078;
var statearr_38119_38195 = state_38078__$1;
(statearr_38119_38195[(2)] = inst_38070);

(statearr_38119_38195[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (6))){
var inst_37973 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38120_38196 = state_38078__$1;
(statearr_38120_38196[(2)] = inst_37973);

(statearr_38120_38196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (28))){
var inst_37998 = (state_38078[(26)]);
var inst_38025 = (state_38078[(2)]);
var inst_38026 = cljs.core.not_empty.call(null,inst_37998);
var state_38078__$1 = (function (){var statearr_38121 = state_38078;
(statearr_38121[(29)] = inst_38025);

return statearr_38121;
})();
if(cljs.core.truth_(inst_38026)){
var statearr_38122_38197 = state_38078__$1;
(statearr_38122_38197[(1)] = (29));

} else {
var statearr_38123_38198 = state_38078__$1;
(statearr_38123_38198[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (25))){
var inst_37996 = (state_38078[(25)]);
var inst_38012 = (state_38078[(2)]);
var inst_38013 = cljs.core.not_empty.call(null,inst_37996);
var state_38078__$1 = (function (){var statearr_38124 = state_38078;
(statearr_38124[(30)] = inst_38012);

return statearr_38124;
})();
if(cljs.core.truth_(inst_38013)){
var statearr_38125_38199 = state_38078__$1;
(statearr_38125_38199[(1)] = (26));

} else {
var statearr_38126_38200 = state_38078__$1;
(statearr_38126_38200[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (34))){
var inst_38047 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_38047)){
var statearr_38127_38201 = state_38078__$1;
(statearr_38127_38201[(1)] = (38));

} else {
var statearr_38128_38202 = state_38078__$1;
(statearr_38128_38202[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (17))){
var state_38078__$1 = state_38078;
var statearr_38129_38203 = state_38078__$1;
(statearr_38129_38203[(2)] = recompile_dependents);

(statearr_38129_38203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (3))){
var state_38078__$1 = state_38078;
var statearr_38130_38204 = state_38078__$1;
(statearr_38130_38204[(2)] = null);

(statearr_38130_38204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (12))){
var inst_37969 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38131_38205 = state_38078__$1;
(statearr_38131_38205[(2)] = inst_37969);

(statearr_38131_38205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (2))){
var inst_37931 = (state_38078[(13)]);
var inst_37938 = cljs.core.seq.call(null,inst_37931);
var inst_37939 = inst_37938;
var inst_37940 = null;
var inst_37941 = (0);
var inst_37942 = (0);
var state_38078__$1 = (function (){var statearr_38132 = state_38078;
(statearr_38132[(7)] = inst_37942);

(statearr_38132[(8)] = inst_37940);

(statearr_38132[(9)] = inst_37939);

(statearr_38132[(10)] = inst_37941);

return statearr_38132;
})();
var statearr_38133_38206 = state_38078__$1;
(statearr_38133_38206[(2)] = null);

(statearr_38133_38206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (23))){
var inst_37998 = (state_38078[(26)]);
var inst_37995 = (state_38078[(23)]);
var inst_38000 = (state_38078[(24)]);
var inst_37996 = (state_38078[(25)]);
var inst_37992 = (state_38078[(19)]);
var inst_38003 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38005 = (function (){var all_files = inst_37992;
var res_SINGLEQUOTE_ = inst_37995;
var res = inst_37996;
var files_not_loaded = inst_37998;
var dependencies_that_loaded = inst_38000;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37998,inst_37995,inst_38000,inst_37996,inst_37992,inst_38003,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38004){
var map__38134 = p__38004;
var map__38134__$1 = ((((!((map__38134 == null)))?((((map__38134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38134):map__38134);
var request_url = cljs.core.get.call(null,map__38134__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37998,inst_37995,inst_38000,inst_37996,inst_37992,inst_38003,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38006 = cljs.core.reverse.call(null,inst_38000);
var inst_38007 = cljs.core.map.call(null,inst_38005,inst_38006);
var inst_38008 = cljs.core.pr_str.call(null,inst_38007);
var inst_38009 = figwheel.client.utils.log.call(null,inst_38008);
var state_38078__$1 = (function (){var statearr_38136 = state_38078;
(statearr_38136[(31)] = inst_38003);

return statearr_38136;
})();
var statearr_38137_38207 = state_38078__$1;
(statearr_38137_38207[(2)] = inst_38009);

(statearr_38137_38207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (35))){
var state_38078__$1 = state_38078;
var statearr_38138_38208 = state_38078__$1;
(statearr_38138_38208[(2)] = true);

(statearr_38138_38208[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (19))){
var inst_37982 = (state_38078[(12)]);
var inst_37988 = figwheel.client.file_reloading.expand_files.call(null,inst_37982);
var state_38078__$1 = state_38078;
var statearr_38139_38209 = state_38078__$1;
(statearr_38139_38209[(2)] = inst_37988);

(statearr_38139_38209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (11))){
var state_38078__$1 = state_38078;
var statearr_38140_38210 = state_38078__$1;
(statearr_38140_38210[(2)] = null);

(statearr_38140_38210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (9))){
var inst_37971 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38141_38211 = state_38078__$1;
(statearr_38141_38211[(2)] = inst_37971);

(statearr_38141_38211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (5))){
var inst_37942 = (state_38078[(7)]);
var inst_37941 = (state_38078[(10)]);
var inst_37944 = (inst_37942 < inst_37941);
var inst_37945 = inst_37944;
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_37945)){
var statearr_38142_38212 = state_38078__$1;
(statearr_38142_38212[(1)] = (7));

} else {
var statearr_38143_38213 = state_38078__$1;
(statearr_38143_38213[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (14))){
var inst_37952 = (state_38078[(22)]);
var inst_37961 = cljs.core.first.call(null,inst_37952);
var inst_37962 = figwheel.client.file_reloading.eval_body.call(null,inst_37961,opts);
var inst_37963 = cljs.core.next.call(null,inst_37952);
var inst_37939 = inst_37963;
var inst_37940 = null;
var inst_37941 = (0);
var inst_37942 = (0);
var state_38078__$1 = (function (){var statearr_38144 = state_38078;
(statearr_38144[(7)] = inst_37942);

(statearr_38144[(32)] = inst_37962);

(statearr_38144[(8)] = inst_37940);

(statearr_38144[(9)] = inst_37939);

(statearr_38144[(10)] = inst_37941);

return statearr_38144;
})();
var statearr_38145_38214 = state_38078__$1;
(statearr_38145_38214[(2)] = null);

(statearr_38145_38214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (45))){
var state_38078__$1 = state_38078;
var statearr_38146_38215 = state_38078__$1;
(statearr_38146_38215[(2)] = null);

(statearr_38146_38215[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (26))){
var inst_37998 = (state_38078[(26)]);
var inst_37995 = (state_38078[(23)]);
var inst_38000 = (state_38078[(24)]);
var inst_37996 = (state_38078[(25)]);
var inst_37992 = (state_38078[(19)]);
var inst_38015 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38017 = (function (){var all_files = inst_37992;
var res_SINGLEQUOTE_ = inst_37995;
var res = inst_37996;
var files_not_loaded = inst_37998;
var dependencies_that_loaded = inst_38000;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37998,inst_37995,inst_38000,inst_37996,inst_37992,inst_38015,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38016){
var map__38147 = p__38016;
var map__38147__$1 = ((((!((map__38147 == null)))?((((map__38147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38147):map__38147);
var namespace = cljs.core.get.call(null,map__38147__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38147__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37998,inst_37995,inst_38000,inst_37996,inst_37992,inst_38015,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38018 = cljs.core.map.call(null,inst_38017,inst_37996);
var inst_38019 = cljs.core.pr_str.call(null,inst_38018);
var inst_38020 = figwheel.client.utils.log.call(null,inst_38019);
var inst_38021 = (function (){var all_files = inst_37992;
var res_SINGLEQUOTE_ = inst_37995;
var res = inst_37996;
var files_not_loaded = inst_37998;
var dependencies_that_loaded = inst_38000;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37998,inst_37995,inst_38000,inst_37996,inst_37992,inst_38015,inst_38017,inst_38018,inst_38019,inst_38020,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37998,inst_37995,inst_38000,inst_37996,inst_37992,inst_38015,inst_38017,inst_38018,inst_38019,inst_38020,state_val_38079,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38022 = setTimeout(inst_38021,(10));
var state_38078__$1 = (function (){var statearr_38149 = state_38078;
(statearr_38149[(33)] = inst_38015);

(statearr_38149[(34)] = inst_38020);

return statearr_38149;
})();
var statearr_38150_38216 = state_38078__$1;
(statearr_38150_38216[(2)] = inst_38022);

(statearr_38150_38216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (16))){
var state_38078__$1 = state_38078;
var statearr_38151_38217 = state_38078__$1;
(statearr_38151_38217[(2)] = reload_dependents);

(statearr_38151_38217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (38))){
var inst_38032 = (state_38078[(16)]);
var inst_38049 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38032);
var state_38078__$1 = state_38078;
var statearr_38152_38218 = state_38078__$1;
(statearr_38152_38218[(2)] = inst_38049);

(statearr_38152_38218[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (30))){
var state_38078__$1 = state_38078;
var statearr_38153_38219 = state_38078__$1;
(statearr_38153_38219[(2)] = null);

(statearr_38153_38219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (10))){
var inst_37952 = (state_38078[(22)]);
var inst_37954 = cljs.core.chunked_seq_QMARK_.call(null,inst_37952);
var state_38078__$1 = state_38078;
if(inst_37954){
var statearr_38154_38220 = state_38078__$1;
(statearr_38154_38220[(1)] = (13));

} else {
var statearr_38155_38221 = state_38078__$1;
(statearr_38155_38221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (18))){
var inst_37986 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
if(cljs.core.truth_(inst_37986)){
var statearr_38156_38222 = state_38078__$1;
(statearr_38156_38222[(1)] = (19));

} else {
var statearr_38157_38223 = state_38078__$1;
(statearr_38157_38223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (42))){
var state_38078__$1 = state_38078;
var statearr_38158_38224 = state_38078__$1;
(statearr_38158_38224[(2)] = null);

(statearr_38158_38224[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (37))){
var inst_38044 = (state_38078[(2)]);
var state_38078__$1 = state_38078;
var statearr_38159_38225 = state_38078__$1;
(statearr_38159_38225[(2)] = inst_38044);

(statearr_38159_38225[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38079 === (8))){
var inst_37952 = (state_38078[(22)]);
var inst_37939 = (state_38078[(9)]);
var inst_37952__$1 = cljs.core.seq.call(null,inst_37939);
var state_38078__$1 = (function (){var statearr_38160 = state_38078;
(statearr_38160[(22)] = inst_37952__$1);

return statearr_38160;
})();
if(inst_37952__$1){
var statearr_38161_38226 = state_38078__$1;
(statearr_38161_38226[(1)] = (10));

} else {
var statearr_38162_38227 = state_38078__$1;
(statearr_38162_38227[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29343__auto__,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto____0 = (function (){
var statearr_38166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38166[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto__);

(statearr_38166[(1)] = (1));

return statearr_38166;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto____1 = (function (state_38078){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_38078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e38167){if((e38167 instanceof Object)){
var ex__29347__auto__ = e38167;
var statearr_38168_38228 = state_38078;
(statearr_38168_38228[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38229 = state_38078;
state_38078 = G__38229;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto__ = function(state_38078){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto____1.call(this,state_38078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29459__auto__ = (function (){var statearr_38169 = f__29458__auto__.call(null);
(statearr_38169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_38169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__,map__37924,map__37924__$1,opts,before_jsload,on_jsload,reload_dependents,map__37925,map__37925__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29457__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38232,link){
var map__38235 = p__38232;
var map__38235__$1 = ((((!((map__38235 == null)))?((((map__38235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38235):map__38235);
var file = cljs.core.get.call(null,map__38235__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__38235,map__38235__$1,file){
return (function (p1__38230_SHARP_,p2__38231_SHARP_){
if(cljs.core._EQ_.call(null,p1__38230_SHARP_,p2__38231_SHARP_)){
return p1__38230_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__38235,map__38235__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38241){
var map__38242 = p__38241;
var map__38242__$1 = ((((!((map__38242 == null)))?((((map__38242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38242):map__38242);
var match_length = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38237_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38237_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38244_SHARP_,p2__38245_SHARP_){
return cljs.core.assoc.call(null,p1__38244_SHARP_,cljs.core.get.call(null,p2__38245_SHARP_,key),p2__38245_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38246 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38246);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38246);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38247,p__38248){
var map__38253 = p__38247;
var map__38253__$1 = ((((!((map__38253 == null)))?((((map__38253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38253):map__38253);
var on_cssload = cljs.core.get.call(null,map__38253__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38254 = p__38248;
var map__38254__$1 = ((((!((map__38254 == null)))?((((map__38254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38254):map__38254);
var files_msg = map__38254__$1;
var files = cljs.core.get.call(null,map__38254__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1537985798769