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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38185_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38185_SHARP_));
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
var seq__38190 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38191 = null;
var count__38192 = (0);
var i__38193 = (0);
while(true){
if((i__38193 < count__38192)){
var n = cljs.core._nth.call(null,chunk__38191,i__38193);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38194 = seq__38190;
var G__38195 = chunk__38191;
var G__38196 = count__38192;
var G__38197 = (i__38193 + (1));
seq__38190 = G__38194;
chunk__38191 = G__38195;
count__38192 = G__38196;
i__38193 = G__38197;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38190);
if(temp__5457__auto__){
var seq__38190__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38190__$1)){
var c__27711__auto__ = cljs.core.chunk_first.call(null,seq__38190__$1);
var G__38198 = cljs.core.chunk_rest.call(null,seq__38190__$1);
var G__38199 = c__27711__auto__;
var G__38200 = cljs.core.count.call(null,c__27711__auto__);
var G__38201 = (0);
seq__38190 = G__38198;
chunk__38191 = G__38199;
count__38192 = G__38200;
i__38193 = G__38201;
continue;
} else {
var n = cljs.core.first.call(null,seq__38190__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38202 = cljs.core.next.call(null,seq__38190__$1);
var G__38203 = null;
var G__38204 = (0);
var G__38205 = (0);
seq__38190 = G__38202;
chunk__38191 = G__38203;
count__38192 = G__38204;
i__38193 = G__38205;
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

var seq__38256_38267 = cljs.core.seq.call(null,deps);
var chunk__38257_38268 = null;
var count__38258_38269 = (0);
var i__38259_38270 = (0);
while(true){
if((i__38259_38270 < count__38258_38269)){
var dep_38271 = cljs.core._nth.call(null,chunk__38257_38268,i__38259_38270);
topo_sort_helper_STAR_.call(null,dep_38271,(depth + (1)),state);

var G__38272 = seq__38256_38267;
var G__38273 = chunk__38257_38268;
var G__38274 = count__38258_38269;
var G__38275 = (i__38259_38270 + (1));
seq__38256_38267 = G__38272;
chunk__38257_38268 = G__38273;
count__38258_38269 = G__38274;
i__38259_38270 = G__38275;
continue;
} else {
var temp__5457__auto___38276 = cljs.core.seq.call(null,seq__38256_38267);
if(temp__5457__auto___38276){
var seq__38256_38277__$1 = temp__5457__auto___38276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38256_38277__$1)){
var c__27711__auto___38278 = cljs.core.chunk_first.call(null,seq__38256_38277__$1);
var G__38279 = cljs.core.chunk_rest.call(null,seq__38256_38277__$1);
var G__38280 = c__27711__auto___38278;
var G__38281 = cljs.core.count.call(null,c__27711__auto___38278);
var G__38282 = (0);
seq__38256_38267 = G__38279;
chunk__38257_38268 = G__38280;
count__38258_38269 = G__38281;
i__38259_38270 = G__38282;
continue;
} else {
var dep_38283 = cljs.core.first.call(null,seq__38256_38277__$1);
topo_sort_helper_STAR_.call(null,dep_38283,(depth + (1)),state);

var G__38284 = cljs.core.next.call(null,seq__38256_38277__$1);
var G__38285 = null;
var G__38286 = (0);
var G__38287 = (0);
seq__38256_38267 = G__38284;
chunk__38257_38268 = G__38285;
count__38258_38269 = G__38286;
i__38259_38270 = G__38287;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38260){
var vec__38264 = p__38260;
var seq__38265 = cljs.core.seq.call(null,vec__38264);
var first__38266 = cljs.core.first.call(null,seq__38265);
var seq__38265__$1 = cljs.core.next.call(null,seq__38265);
var x = first__38266;
var xs = seq__38265__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38264,seq__38265,first__38266,seq__38265__$1,x,xs,get_deps__$1){
return (function (p1__38206_SHARP_){
return clojure.set.difference.call(null,p1__38206_SHARP_,x);
});})(vec__38264,seq__38265,first__38266,seq__38265__$1,x,xs,get_deps__$1))
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
var seq__38300 = cljs.core.seq.call(null,provides);
var chunk__38301 = null;
var count__38302 = (0);
var i__38303 = (0);
while(true){
if((i__38303 < count__38302)){
var prov = cljs.core._nth.call(null,chunk__38301,i__38303);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38304_38312 = cljs.core.seq.call(null,requires);
var chunk__38305_38313 = null;
var count__38306_38314 = (0);
var i__38307_38315 = (0);
while(true){
if((i__38307_38315 < count__38306_38314)){
var req_38316 = cljs.core._nth.call(null,chunk__38305_38313,i__38307_38315);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38316,prov);

var G__38317 = seq__38304_38312;
var G__38318 = chunk__38305_38313;
var G__38319 = count__38306_38314;
var G__38320 = (i__38307_38315 + (1));
seq__38304_38312 = G__38317;
chunk__38305_38313 = G__38318;
count__38306_38314 = G__38319;
i__38307_38315 = G__38320;
continue;
} else {
var temp__5457__auto___38321 = cljs.core.seq.call(null,seq__38304_38312);
if(temp__5457__auto___38321){
var seq__38304_38322__$1 = temp__5457__auto___38321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38304_38322__$1)){
var c__27711__auto___38323 = cljs.core.chunk_first.call(null,seq__38304_38322__$1);
var G__38324 = cljs.core.chunk_rest.call(null,seq__38304_38322__$1);
var G__38325 = c__27711__auto___38323;
var G__38326 = cljs.core.count.call(null,c__27711__auto___38323);
var G__38327 = (0);
seq__38304_38312 = G__38324;
chunk__38305_38313 = G__38325;
count__38306_38314 = G__38326;
i__38307_38315 = G__38327;
continue;
} else {
var req_38328 = cljs.core.first.call(null,seq__38304_38322__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38328,prov);

var G__38329 = cljs.core.next.call(null,seq__38304_38322__$1);
var G__38330 = null;
var G__38331 = (0);
var G__38332 = (0);
seq__38304_38312 = G__38329;
chunk__38305_38313 = G__38330;
count__38306_38314 = G__38331;
i__38307_38315 = G__38332;
continue;
}
} else {
}
}
break;
}

var G__38333 = seq__38300;
var G__38334 = chunk__38301;
var G__38335 = count__38302;
var G__38336 = (i__38303 + (1));
seq__38300 = G__38333;
chunk__38301 = G__38334;
count__38302 = G__38335;
i__38303 = G__38336;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38300);
if(temp__5457__auto__){
var seq__38300__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38300__$1)){
var c__27711__auto__ = cljs.core.chunk_first.call(null,seq__38300__$1);
var G__38337 = cljs.core.chunk_rest.call(null,seq__38300__$1);
var G__38338 = c__27711__auto__;
var G__38339 = cljs.core.count.call(null,c__27711__auto__);
var G__38340 = (0);
seq__38300 = G__38337;
chunk__38301 = G__38338;
count__38302 = G__38339;
i__38303 = G__38340;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38300__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38308_38341 = cljs.core.seq.call(null,requires);
var chunk__38309_38342 = null;
var count__38310_38343 = (0);
var i__38311_38344 = (0);
while(true){
if((i__38311_38344 < count__38310_38343)){
var req_38345 = cljs.core._nth.call(null,chunk__38309_38342,i__38311_38344);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38345,prov);

var G__38346 = seq__38308_38341;
var G__38347 = chunk__38309_38342;
var G__38348 = count__38310_38343;
var G__38349 = (i__38311_38344 + (1));
seq__38308_38341 = G__38346;
chunk__38309_38342 = G__38347;
count__38310_38343 = G__38348;
i__38311_38344 = G__38349;
continue;
} else {
var temp__5457__auto___38350__$1 = cljs.core.seq.call(null,seq__38308_38341);
if(temp__5457__auto___38350__$1){
var seq__38308_38351__$1 = temp__5457__auto___38350__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38308_38351__$1)){
var c__27711__auto___38352 = cljs.core.chunk_first.call(null,seq__38308_38351__$1);
var G__38353 = cljs.core.chunk_rest.call(null,seq__38308_38351__$1);
var G__38354 = c__27711__auto___38352;
var G__38355 = cljs.core.count.call(null,c__27711__auto___38352);
var G__38356 = (0);
seq__38308_38341 = G__38353;
chunk__38309_38342 = G__38354;
count__38310_38343 = G__38355;
i__38311_38344 = G__38356;
continue;
} else {
var req_38357 = cljs.core.first.call(null,seq__38308_38351__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38357,prov);

var G__38358 = cljs.core.next.call(null,seq__38308_38351__$1);
var G__38359 = null;
var G__38360 = (0);
var G__38361 = (0);
seq__38308_38341 = G__38358;
chunk__38309_38342 = G__38359;
count__38310_38343 = G__38360;
i__38311_38344 = G__38361;
continue;
}
} else {
}
}
break;
}

var G__38362 = cljs.core.next.call(null,seq__38300__$1);
var G__38363 = null;
var G__38364 = (0);
var G__38365 = (0);
seq__38300 = G__38362;
chunk__38301 = G__38363;
count__38302 = G__38364;
i__38303 = G__38365;
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
var seq__38370_38374 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38371_38375 = null;
var count__38372_38376 = (0);
var i__38373_38377 = (0);
while(true){
if((i__38373_38377 < count__38372_38376)){
var ns_38378 = cljs.core._nth.call(null,chunk__38371_38375,i__38373_38377);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38378);

var G__38379 = seq__38370_38374;
var G__38380 = chunk__38371_38375;
var G__38381 = count__38372_38376;
var G__38382 = (i__38373_38377 + (1));
seq__38370_38374 = G__38379;
chunk__38371_38375 = G__38380;
count__38372_38376 = G__38381;
i__38373_38377 = G__38382;
continue;
} else {
var temp__5457__auto___38383 = cljs.core.seq.call(null,seq__38370_38374);
if(temp__5457__auto___38383){
var seq__38370_38384__$1 = temp__5457__auto___38383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38370_38384__$1)){
var c__27711__auto___38385 = cljs.core.chunk_first.call(null,seq__38370_38384__$1);
var G__38386 = cljs.core.chunk_rest.call(null,seq__38370_38384__$1);
var G__38387 = c__27711__auto___38385;
var G__38388 = cljs.core.count.call(null,c__27711__auto___38385);
var G__38389 = (0);
seq__38370_38374 = G__38386;
chunk__38371_38375 = G__38387;
count__38372_38376 = G__38388;
i__38373_38377 = G__38389;
continue;
} else {
var ns_38390 = cljs.core.first.call(null,seq__38370_38384__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38390);

var G__38391 = cljs.core.next.call(null,seq__38370_38384__$1);
var G__38392 = null;
var G__38393 = (0);
var G__38394 = (0);
seq__38370_38374 = G__38391;
chunk__38371_38375 = G__38392;
count__38372_38376 = G__38393;
i__38373_38377 = G__38394;
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
var G__38395__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38396__i = 0, G__38396__a = new Array(arguments.length -  0);
while (G__38396__i < G__38396__a.length) {G__38396__a[G__38396__i] = arguments[G__38396__i + 0]; ++G__38396__i;}
  args = new cljs.core.IndexedSeq(G__38396__a,0);
} 
return G__38395__delegate.call(this,args);};
G__38395.cljs$lang$maxFixedArity = 0;
G__38395.cljs$lang$applyTo = (function (arglist__38397){
var args = cljs.core.seq(arglist__38397);
return G__38395__delegate(args);
});
G__38395.cljs$core$IFn$_invoke$arity$variadic = G__38395__delegate;
return G__38395;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38398 = cljs.core._EQ_;
var expr__38399 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38398.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38399))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__38398,expr__38399){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__38398,expr__38399))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__38398,expr__38399){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38401){if((e38401 instanceof Error)){
var e = e38401;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38401;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__38398,expr__38399))
} else {
if(cljs.core.truth_(pred__38398.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38399))){
return ((function (pred__38398,expr__38399){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__38398,expr__38399){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38398,expr__38399))
);

return deferred.addErrback(((function (deferred,pred__38398,expr__38399){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38398,expr__38399))
);
});
;})(pred__38398,expr__38399))
} else {
if(cljs.core.truth_(pred__38398.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__38399))){
return ((function (pred__38398,expr__38399){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e38402){if((e38402 instanceof Error)){
var e = e38402;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38402;

}
}})());
});
;})(pred__38398,expr__38399))
} else {
return ((function (pred__38398,expr__38399){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38398,expr__38399))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38403,callback){
var map__38406 = p__38403;
var map__38406__$1 = ((((!((map__38406 == null)))?((((map__38406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38406):map__38406);
var file_msg = map__38406__$1;
var request_url = cljs.core.get.call(null,map__38406__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38406,map__38406__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38406,map__38406__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__){
return (function (state_38430){
var state_val_38431 = (state_38430[(1)]);
if((state_val_38431 === (7))){
var inst_38426 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38432_38452 = state_38430__$1;
(statearr_38432_38452[(2)] = inst_38426);

(statearr_38432_38452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (1))){
var state_38430__$1 = state_38430;
var statearr_38433_38453 = state_38430__$1;
(statearr_38433_38453[(2)] = null);

(statearr_38433_38453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (4))){
var inst_38410 = (state_38430[(7)]);
var inst_38410__$1 = (state_38430[(2)]);
var state_38430__$1 = (function (){var statearr_38434 = state_38430;
(statearr_38434[(7)] = inst_38410__$1);

return statearr_38434;
})();
if(cljs.core.truth_(inst_38410__$1)){
var statearr_38435_38454 = state_38430__$1;
(statearr_38435_38454[(1)] = (5));

} else {
var statearr_38436_38455 = state_38430__$1;
(statearr_38436_38455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (6))){
var state_38430__$1 = state_38430;
var statearr_38437_38456 = state_38430__$1;
(statearr_38437_38456[(2)] = null);

(statearr_38437_38456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (3))){
var inst_38428 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38430__$1,inst_38428);
} else {
if((state_val_38431 === (2))){
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38430__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38431 === (11))){
var inst_38422 = (state_38430[(2)]);
var state_38430__$1 = (function (){var statearr_38438 = state_38430;
(statearr_38438[(8)] = inst_38422);

return statearr_38438;
})();
var statearr_38439_38457 = state_38430__$1;
(statearr_38439_38457[(2)] = null);

(statearr_38439_38457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (9))){
var inst_38414 = (state_38430[(9)]);
var inst_38416 = (state_38430[(10)]);
var inst_38418 = inst_38416.call(null,inst_38414);
var state_38430__$1 = state_38430;
var statearr_38440_38458 = state_38430__$1;
(statearr_38440_38458[(2)] = inst_38418);

(statearr_38440_38458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (5))){
var inst_38410 = (state_38430[(7)]);
var inst_38412 = figwheel.client.file_reloading.blocking_load.call(null,inst_38410);
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38430__$1,(8),inst_38412);
} else {
if((state_val_38431 === (10))){
var inst_38414 = (state_38430[(9)]);
var inst_38420 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38414);
var state_38430__$1 = state_38430;
var statearr_38441_38459 = state_38430__$1;
(statearr_38441_38459[(2)] = inst_38420);

(statearr_38441_38459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (8))){
var inst_38410 = (state_38430[(7)]);
var inst_38416 = (state_38430[(10)]);
var inst_38414 = (state_38430[(2)]);
var inst_38415 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38416__$1 = cljs.core.get.call(null,inst_38415,inst_38410);
var state_38430__$1 = (function (){var statearr_38442 = state_38430;
(statearr_38442[(9)] = inst_38414);

(statearr_38442[(10)] = inst_38416__$1);

return statearr_38442;
})();
if(cljs.core.truth_(inst_38416__$1)){
var statearr_38443_38460 = state_38430__$1;
(statearr_38443_38460[(1)] = (9));

} else {
var statearr_38444_38461 = state_38430__$1;
(statearr_38444_38461[(1)] = (10));

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
});})(c__29456__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29343__auto__ = null;
var figwheel$client$file_reloading$state_machine__29343__auto____0 = (function (){
var statearr_38448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38448[(0)] = figwheel$client$file_reloading$state_machine__29343__auto__);

(statearr_38448[(1)] = (1));

return statearr_38448;
});
var figwheel$client$file_reloading$state_machine__29343__auto____1 = (function (state_38430){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_38430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e38449){if((e38449 instanceof Object)){
var ex__29346__auto__ = e38449;
var statearr_38450_38462 = state_38430;
(statearr_38450_38462[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38463 = state_38430;
state_38430 = G__38463;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29343__auto__ = function(state_38430){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29343__auto____1.call(this,state_38430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29343__auto____0;
figwheel$client$file_reloading$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29343__auto____1;
return figwheel$client$file_reloading$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__))
})();
var state__29458__auto__ = (function (){var statearr_38451 = f__29457__auto__.call(null);
(statearr_38451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_38451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__))
);

return c__29456__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38464,callback){
var map__38467 = p__38464;
var map__38467__$1 = ((((!((map__38467 == null)))?((((map__38467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38467):map__38467);
var file_msg = map__38467__$1;
var namespace = cljs.core.get.call(null,map__38467__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38467,map__38467__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38467,map__38467__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38469){
var map__38472 = p__38469;
var map__38472__$1 = ((((!((map__38472 == null)))?((((map__38472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38472):map__38472);
var file_msg = map__38472__$1;
var namespace = cljs.core.get.call(null,map__38472__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38474){
var map__38477 = p__38474;
var map__38477__$1 = ((((!((map__38477 == null)))?((((map__38477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38477):map__38477);
var file_msg = map__38477__$1;
var namespace = cljs.core.get.call(null,map__38477__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38479,callback){
var map__38482 = p__38479;
var map__38482__$1 = ((((!((map__38482 == null)))?((((map__38482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38482):map__38482);
var file_msg = map__38482__$1;
var request_url = cljs.core.get.call(null,map__38482__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38482__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29456__auto___38586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___38586,out){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___38586,out){
return (function (state_38568){
var state_val_38569 = (state_38568[(1)]);
if((state_val_38569 === (1))){
var inst_38542 = cljs.core.seq.call(null,files);
var inst_38543 = cljs.core.first.call(null,inst_38542);
var inst_38544 = cljs.core.next.call(null,inst_38542);
var inst_38545 = files;
var state_38568__$1 = (function (){var statearr_38570 = state_38568;
(statearr_38570[(7)] = inst_38545);

(statearr_38570[(8)] = inst_38543);

(statearr_38570[(9)] = inst_38544);

return statearr_38570;
})();
var statearr_38571_38587 = state_38568__$1;
(statearr_38571_38587[(2)] = null);

(statearr_38571_38587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38569 === (2))){
var inst_38545 = (state_38568[(7)]);
var inst_38551 = (state_38568[(10)]);
var inst_38550 = cljs.core.seq.call(null,inst_38545);
var inst_38551__$1 = cljs.core.first.call(null,inst_38550);
var inst_38552 = cljs.core.next.call(null,inst_38550);
var inst_38553 = (inst_38551__$1 == null);
var inst_38554 = cljs.core.not.call(null,inst_38553);
var state_38568__$1 = (function (){var statearr_38572 = state_38568;
(statearr_38572[(11)] = inst_38552);

(statearr_38572[(10)] = inst_38551__$1);

return statearr_38572;
})();
if(inst_38554){
var statearr_38573_38588 = state_38568__$1;
(statearr_38573_38588[(1)] = (4));

} else {
var statearr_38574_38589 = state_38568__$1;
(statearr_38574_38589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38569 === (3))){
var inst_38566 = (state_38568[(2)]);
var state_38568__$1 = state_38568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38568__$1,inst_38566);
} else {
if((state_val_38569 === (4))){
var inst_38551 = (state_38568[(10)]);
var inst_38556 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38551);
var state_38568__$1 = state_38568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38568__$1,(7),inst_38556);
} else {
if((state_val_38569 === (5))){
var inst_38562 = cljs.core.async.close_BANG_.call(null,out);
var state_38568__$1 = state_38568;
var statearr_38575_38590 = state_38568__$1;
(statearr_38575_38590[(2)] = inst_38562);

(statearr_38575_38590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38569 === (6))){
var inst_38564 = (state_38568[(2)]);
var state_38568__$1 = state_38568;
var statearr_38576_38591 = state_38568__$1;
(statearr_38576_38591[(2)] = inst_38564);

(statearr_38576_38591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38569 === (7))){
var inst_38552 = (state_38568[(11)]);
var inst_38558 = (state_38568[(2)]);
var inst_38559 = cljs.core.async.put_BANG_.call(null,out,inst_38558);
var inst_38545 = inst_38552;
var state_38568__$1 = (function (){var statearr_38577 = state_38568;
(statearr_38577[(7)] = inst_38545);

(statearr_38577[(12)] = inst_38559);

return statearr_38577;
})();
var statearr_38578_38592 = state_38568__$1;
(statearr_38578_38592[(2)] = null);

(statearr_38578_38592[(1)] = (2));


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
});})(c__29456__auto___38586,out))
;
return ((function (switch__29342__auto__,c__29456__auto___38586,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto____0 = (function (){
var statearr_38582 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38582[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto__);

(statearr_38582[(1)] = (1));

return statearr_38582;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto____1 = (function (state_38568){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_38568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e38583){if((e38583 instanceof Object)){
var ex__29346__auto__ = e38583;
var statearr_38584_38593 = state_38568;
(statearr_38584_38593[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38594 = state_38568;
state_38568 = G__38594;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto__ = function(state_38568){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto____1.call(this,state_38568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___38586,out))
})();
var state__29458__auto__ = (function (){var statearr_38585 = f__29457__auto__.call(null);
(statearr_38585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___38586);

return statearr_38585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___38586,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38595,opts){
var map__38599 = p__38595;
var map__38599__$1 = ((((!((map__38599 == null)))?((((map__38599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38599):map__38599);
var eval_body__$1 = cljs.core.get.call(null,map__38599__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e38601){var e = e38601;
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
return (function (p1__38602_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38602_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38611){
var vec__38612 = p__38611;
var k = cljs.core.nth.call(null,vec__38612,(0),null);
var v = cljs.core.nth.call(null,vec__38612,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38615){
var vec__38616 = p__38615;
var k = cljs.core.nth.call(null,vec__38616,(0),null);
var v = cljs.core.nth.call(null,vec__38616,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38622,p__38623){
var map__38870 = p__38622;
var map__38870__$1 = ((((!((map__38870 == null)))?((((map__38870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38870):map__38870);
var opts = map__38870__$1;
var before_jsload = cljs.core.get.call(null,map__38870__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38870__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38870__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38871 = p__38623;
var map__38871__$1 = ((((!((map__38871 == null)))?((((map__38871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38871):map__38871);
var msg = map__38871__$1;
var files = cljs.core.get.call(null,map__38871__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38871__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38871__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39024){
var state_val_39025 = (state_39024[(1)]);
if((state_val_39025 === (7))){
var inst_38888 = (state_39024[(7)]);
var inst_38886 = (state_39024[(8)]);
var inst_38885 = (state_39024[(9)]);
var inst_38887 = (state_39024[(10)]);
var inst_38893 = cljs.core._nth.call(null,inst_38886,inst_38888);
var inst_38894 = figwheel.client.file_reloading.eval_body.call(null,inst_38893,opts);
var inst_38895 = (inst_38888 + (1));
var tmp39026 = inst_38886;
var tmp39027 = inst_38885;
var tmp39028 = inst_38887;
var inst_38885__$1 = tmp39027;
var inst_38886__$1 = tmp39026;
var inst_38887__$1 = tmp39028;
var inst_38888__$1 = inst_38895;
var state_39024__$1 = (function (){var statearr_39029 = state_39024;
(statearr_39029[(7)] = inst_38888__$1);

(statearr_39029[(8)] = inst_38886__$1);

(statearr_39029[(9)] = inst_38885__$1);

(statearr_39029[(11)] = inst_38894);

(statearr_39029[(10)] = inst_38887__$1);

return statearr_39029;
})();
var statearr_39030_39116 = state_39024__$1;
(statearr_39030_39116[(2)] = null);

(statearr_39030_39116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (20))){
var inst_38928 = (state_39024[(12)]);
var inst_38936 = figwheel.client.file_reloading.sort_files.call(null,inst_38928);
var state_39024__$1 = state_39024;
var statearr_39031_39117 = state_39024__$1;
(statearr_39031_39117[(2)] = inst_38936);

(statearr_39031_39117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (27))){
var state_39024__$1 = state_39024;
var statearr_39032_39118 = state_39024__$1;
(statearr_39032_39118[(2)] = null);

(statearr_39032_39118[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (1))){
var inst_38877 = (state_39024[(13)]);
var inst_38874 = before_jsload.call(null,files);
var inst_38875 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38876 = (function (){return ((function (inst_38877,inst_38874,inst_38875,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38619_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38619_SHARP_);
});
;})(inst_38877,inst_38874,inst_38875,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38877__$1 = cljs.core.filter.call(null,inst_38876,files);
var inst_38878 = cljs.core.not_empty.call(null,inst_38877__$1);
var state_39024__$1 = (function (){var statearr_39033 = state_39024;
(statearr_39033[(14)] = inst_38875);

(statearr_39033[(15)] = inst_38874);

(statearr_39033[(13)] = inst_38877__$1);

return statearr_39033;
})();
if(cljs.core.truth_(inst_38878)){
var statearr_39034_39119 = state_39024__$1;
(statearr_39034_39119[(1)] = (2));

} else {
var statearr_39035_39120 = state_39024__$1;
(statearr_39035_39120[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (24))){
var state_39024__$1 = state_39024;
var statearr_39036_39121 = state_39024__$1;
(statearr_39036_39121[(2)] = null);

(statearr_39036_39121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (39))){
var inst_38978 = (state_39024[(16)]);
var state_39024__$1 = state_39024;
var statearr_39037_39122 = state_39024__$1;
(statearr_39037_39122[(2)] = inst_38978);

(statearr_39037_39122[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (46))){
var inst_39019 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39038_39123 = state_39024__$1;
(statearr_39038_39123[(2)] = inst_39019);

(statearr_39038_39123[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (4))){
var inst_38922 = (state_39024[(2)]);
var inst_38923 = cljs.core.List.EMPTY;
var inst_38924 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38923);
var inst_38925 = (function (){return ((function (inst_38922,inst_38923,inst_38924,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38620_SHARP_){
var and__26796__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38620_SHARP_);
if(cljs.core.truth_(and__26796__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38620_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38620_SHARP_)));
} else {
return and__26796__auto__;
}
});
;})(inst_38922,inst_38923,inst_38924,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38926 = cljs.core.filter.call(null,inst_38925,files);
var inst_38927 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38928 = cljs.core.concat.call(null,inst_38926,inst_38927);
var state_39024__$1 = (function (){var statearr_39039 = state_39024;
(statearr_39039[(12)] = inst_38928);

(statearr_39039[(17)] = inst_38922);

(statearr_39039[(18)] = inst_38924);

return statearr_39039;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39040_39124 = state_39024__$1;
(statearr_39040_39124[(1)] = (16));

} else {
var statearr_39041_39125 = state_39024__$1;
(statearr_39041_39125[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (15))){
var inst_38912 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39042_39126 = state_39024__$1;
(statearr_39042_39126[(2)] = inst_38912);

(statearr_39042_39126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (21))){
var inst_38938 = (state_39024[(19)]);
var inst_38938__$1 = (state_39024[(2)]);
var inst_38939 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38938__$1);
var state_39024__$1 = (function (){var statearr_39043 = state_39024;
(statearr_39043[(19)] = inst_38938__$1);

return statearr_39043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39024__$1,(22),inst_38939);
} else {
if((state_val_39025 === (31))){
var inst_39022 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39024__$1,inst_39022);
} else {
if((state_val_39025 === (32))){
var inst_38978 = (state_39024[(16)]);
var inst_38983 = inst_38978.cljs$lang$protocol_mask$partition0$;
var inst_38984 = (inst_38983 & (64));
var inst_38985 = inst_38978.cljs$core$ISeq$;
var inst_38986 = (inst_38984) || (inst_38985);
var state_39024__$1 = state_39024;
if(cljs.core.truth_(inst_38986)){
var statearr_39044_39127 = state_39024__$1;
(statearr_39044_39127[(1)] = (35));

} else {
var statearr_39045_39128 = state_39024__$1;
(statearr_39045_39128[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (40))){
var inst_38999 = (state_39024[(20)]);
var inst_38998 = (state_39024[(2)]);
var inst_38999__$1 = cljs.core.get.call(null,inst_38998,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39000 = cljs.core.get.call(null,inst_38998,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39001 = cljs.core.not_empty.call(null,inst_38999__$1);
var state_39024__$1 = (function (){var statearr_39046 = state_39024;
(statearr_39046[(20)] = inst_38999__$1);

(statearr_39046[(21)] = inst_39000);

return statearr_39046;
})();
if(cljs.core.truth_(inst_39001)){
var statearr_39047_39129 = state_39024__$1;
(statearr_39047_39129[(1)] = (41));

} else {
var statearr_39048_39130 = state_39024__$1;
(statearr_39048_39130[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (33))){
var state_39024__$1 = state_39024;
var statearr_39049_39131 = state_39024__$1;
(statearr_39049_39131[(2)] = false);

(statearr_39049_39131[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (13))){
var inst_38898 = (state_39024[(22)]);
var inst_38902 = cljs.core.chunk_first.call(null,inst_38898);
var inst_38903 = cljs.core.chunk_rest.call(null,inst_38898);
var inst_38904 = cljs.core.count.call(null,inst_38902);
var inst_38885 = inst_38903;
var inst_38886 = inst_38902;
var inst_38887 = inst_38904;
var inst_38888 = (0);
var state_39024__$1 = (function (){var statearr_39050 = state_39024;
(statearr_39050[(7)] = inst_38888);

(statearr_39050[(8)] = inst_38886);

(statearr_39050[(9)] = inst_38885);

(statearr_39050[(10)] = inst_38887);

return statearr_39050;
})();
var statearr_39051_39132 = state_39024__$1;
(statearr_39051_39132[(2)] = null);

(statearr_39051_39132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (22))){
var inst_38941 = (state_39024[(23)]);
var inst_38938 = (state_39024[(19)]);
var inst_38946 = (state_39024[(24)]);
var inst_38942 = (state_39024[(25)]);
var inst_38941__$1 = (state_39024[(2)]);
var inst_38942__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38941__$1);
var inst_38943 = (function (){var all_files = inst_38938;
var res_SINGLEQUOTE_ = inst_38941__$1;
var res = inst_38942__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38941,inst_38938,inst_38946,inst_38942,inst_38941__$1,inst_38942__$1,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38621_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38621_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38941,inst_38938,inst_38946,inst_38942,inst_38941__$1,inst_38942__$1,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38944 = cljs.core.filter.call(null,inst_38943,inst_38941__$1);
var inst_38945 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38946__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38945);
var inst_38947 = cljs.core.not_empty.call(null,inst_38946__$1);
var state_39024__$1 = (function (){var statearr_39052 = state_39024;
(statearr_39052[(23)] = inst_38941__$1);

(statearr_39052[(24)] = inst_38946__$1);

(statearr_39052[(26)] = inst_38944);

(statearr_39052[(25)] = inst_38942__$1);

return statearr_39052;
})();
if(cljs.core.truth_(inst_38947)){
var statearr_39053_39133 = state_39024__$1;
(statearr_39053_39133[(1)] = (23));

} else {
var statearr_39054_39134 = state_39024__$1;
(statearr_39054_39134[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (36))){
var state_39024__$1 = state_39024;
var statearr_39055_39135 = state_39024__$1;
(statearr_39055_39135[(2)] = false);

(statearr_39055_39135[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (41))){
var inst_38999 = (state_39024[(20)]);
var inst_39003 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39004 = cljs.core.map.call(null,inst_39003,inst_38999);
var inst_39005 = cljs.core.pr_str.call(null,inst_39004);
var inst_39006 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39005)].join('');
var inst_39007 = figwheel.client.utils.log.call(null,inst_39006);
var state_39024__$1 = state_39024;
var statearr_39056_39136 = state_39024__$1;
(statearr_39056_39136[(2)] = inst_39007);

(statearr_39056_39136[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (43))){
var inst_39000 = (state_39024[(21)]);
var inst_39010 = (state_39024[(2)]);
var inst_39011 = cljs.core.not_empty.call(null,inst_39000);
var state_39024__$1 = (function (){var statearr_39057 = state_39024;
(statearr_39057[(27)] = inst_39010);

return statearr_39057;
})();
if(cljs.core.truth_(inst_39011)){
var statearr_39058_39137 = state_39024__$1;
(statearr_39058_39137[(1)] = (44));

} else {
var statearr_39059_39138 = state_39024__$1;
(statearr_39059_39138[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (29))){
var inst_38941 = (state_39024[(23)]);
var inst_38938 = (state_39024[(19)]);
var inst_38978 = (state_39024[(16)]);
var inst_38946 = (state_39024[(24)]);
var inst_38944 = (state_39024[(26)]);
var inst_38942 = (state_39024[(25)]);
var inst_38974 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38977 = (function (){var all_files = inst_38938;
var res_SINGLEQUOTE_ = inst_38941;
var res = inst_38942;
var files_not_loaded = inst_38944;
var dependencies_that_loaded = inst_38946;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38941,inst_38938,inst_38978,inst_38946,inst_38944,inst_38942,inst_38974,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38976){
var map__39060 = p__38976;
var map__39060__$1 = ((((!((map__39060 == null)))?((((map__39060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39060):map__39060);
var namespace = cljs.core.get.call(null,map__39060__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38941,inst_38938,inst_38978,inst_38946,inst_38944,inst_38942,inst_38974,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38978__$1 = cljs.core.group_by.call(null,inst_38977,inst_38944);
var inst_38980 = (inst_38978__$1 == null);
var inst_38981 = cljs.core.not.call(null,inst_38980);
var state_39024__$1 = (function (){var statearr_39062 = state_39024;
(statearr_39062[(28)] = inst_38974);

(statearr_39062[(16)] = inst_38978__$1);

return statearr_39062;
})();
if(inst_38981){
var statearr_39063_39139 = state_39024__$1;
(statearr_39063_39139[(1)] = (32));

} else {
var statearr_39064_39140 = state_39024__$1;
(statearr_39064_39140[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (44))){
var inst_39000 = (state_39024[(21)]);
var inst_39013 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39000);
var inst_39014 = cljs.core.pr_str.call(null,inst_39013);
var inst_39015 = [cljs.core.str("not required: "),cljs.core.str(inst_39014)].join('');
var inst_39016 = figwheel.client.utils.log.call(null,inst_39015);
var state_39024__$1 = state_39024;
var statearr_39065_39141 = state_39024__$1;
(statearr_39065_39141[(2)] = inst_39016);

(statearr_39065_39141[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (6))){
var inst_38919 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39066_39142 = state_39024__$1;
(statearr_39066_39142[(2)] = inst_38919);

(statearr_39066_39142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (28))){
var inst_38944 = (state_39024[(26)]);
var inst_38971 = (state_39024[(2)]);
var inst_38972 = cljs.core.not_empty.call(null,inst_38944);
var state_39024__$1 = (function (){var statearr_39067 = state_39024;
(statearr_39067[(29)] = inst_38971);

return statearr_39067;
})();
if(cljs.core.truth_(inst_38972)){
var statearr_39068_39143 = state_39024__$1;
(statearr_39068_39143[(1)] = (29));

} else {
var statearr_39069_39144 = state_39024__$1;
(statearr_39069_39144[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (25))){
var inst_38942 = (state_39024[(25)]);
var inst_38958 = (state_39024[(2)]);
var inst_38959 = cljs.core.not_empty.call(null,inst_38942);
var state_39024__$1 = (function (){var statearr_39070 = state_39024;
(statearr_39070[(30)] = inst_38958);

return statearr_39070;
})();
if(cljs.core.truth_(inst_38959)){
var statearr_39071_39145 = state_39024__$1;
(statearr_39071_39145[(1)] = (26));

} else {
var statearr_39072_39146 = state_39024__$1;
(statearr_39072_39146[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (34))){
var inst_38993 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
if(cljs.core.truth_(inst_38993)){
var statearr_39073_39147 = state_39024__$1;
(statearr_39073_39147[(1)] = (38));

} else {
var statearr_39074_39148 = state_39024__$1;
(statearr_39074_39148[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (17))){
var state_39024__$1 = state_39024;
var statearr_39075_39149 = state_39024__$1;
(statearr_39075_39149[(2)] = recompile_dependents);

(statearr_39075_39149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (3))){
var state_39024__$1 = state_39024;
var statearr_39076_39150 = state_39024__$1;
(statearr_39076_39150[(2)] = null);

(statearr_39076_39150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (12))){
var inst_38915 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39077_39151 = state_39024__$1;
(statearr_39077_39151[(2)] = inst_38915);

(statearr_39077_39151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (2))){
var inst_38877 = (state_39024[(13)]);
var inst_38884 = cljs.core.seq.call(null,inst_38877);
var inst_38885 = inst_38884;
var inst_38886 = null;
var inst_38887 = (0);
var inst_38888 = (0);
var state_39024__$1 = (function (){var statearr_39078 = state_39024;
(statearr_39078[(7)] = inst_38888);

(statearr_39078[(8)] = inst_38886);

(statearr_39078[(9)] = inst_38885);

(statearr_39078[(10)] = inst_38887);

return statearr_39078;
})();
var statearr_39079_39152 = state_39024__$1;
(statearr_39079_39152[(2)] = null);

(statearr_39079_39152[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (23))){
var inst_38941 = (state_39024[(23)]);
var inst_38938 = (state_39024[(19)]);
var inst_38946 = (state_39024[(24)]);
var inst_38944 = (state_39024[(26)]);
var inst_38942 = (state_39024[(25)]);
var inst_38949 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38951 = (function (){var all_files = inst_38938;
var res_SINGLEQUOTE_ = inst_38941;
var res = inst_38942;
var files_not_loaded = inst_38944;
var dependencies_that_loaded = inst_38946;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38941,inst_38938,inst_38946,inst_38944,inst_38942,inst_38949,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38950){
var map__39080 = p__38950;
var map__39080__$1 = ((((!((map__39080 == null)))?((((map__39080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39080):map__39080);
var request_url = cljs.core.get.call(null,map__39080__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38941,inst_38938,inst_38946,inst_38944,inst_38942,inst_38949,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38952 = cljs.core.reverse.call(null,inst_38946);
var inst_38953 = cljs.core.map.call(null,inst_38951,inst_38952);
var inst_38954 = cljs.core.pr_str.call(null,inst_38953);
var inst_38955 = figwheel.client.utils.log.call(null,inst_38954);
var state_39024__$1 = (function (){var statearr_39082 = state_39024;
(statearr_39082[(31)] = inst_38949);

return statearr_39082;
})();
var statearr_39083_39153 = state_39024__$1;
(statearr_39083_39153[(2)] = inst_38955);

(statearr_39083_39153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (35))){
var state_39024__$1 = state_39024;
var statearr_39084_39154 = state_39024__$1;
(statearr_39084_39154[(2)] = true);

(statearr_39084_39154[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (19))){
var inst_38928 = (state_39024[(12)]);
var inst_38934 = figwheel.client.file_reloading.expand_files.call(null,inst_38928);
var state_39024__$1 = state_39024;
var statearr_39085_39155 = state_39024__$1;
(statearr_39085_39155[(2)] = inst_38934);

(statearr_39085_39155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (11))){
var state_39024__$1 = state_39024;
var statearr_39086_39156 = state_39024__$1;
(statearr_39086_39156[(2)] = null);

(statearr_39086_39156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (9))){
var inst_38917 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39087_39157 = state_39024__$1;
(statearr_39087_39157[(2)] = inst_38917);

(statearr_39087_39157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (5))){
var inst_38888 = (state_39024[(7)]);
var inst_38887 = (state_39024[(10)]);
var inst_38890 = (inst_38888 < inst_38887);
var inst_38891 = inst_38890;
var state_39024__$1 = state_39024;
if(cljs.core.truth_(inst_38891)){
var statearr_39088_39158 = state_39024__$1;
(statearr_39088_39158[(1)] = (7));

} else {
var statearr_39089_39159 = state_39024__$1;
(statearr_39089_39159[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (14))){
var inst_38898 = (state_39024[(22)]);
var inst_38907 = cljs.core.first.call(null,inst_38898);
var inst_38908 = figwheel.client.file_reloading.eval_body.call(null,inst_38907,opts);
var inst_38909 = cljs.core.next.call(null,inst_38898);
var inst_38885 = inst_38909;
var inst_38886 = null;
var inst_38887 = (0);
var inst_38888 = (0);
var state_39024__$1 = (function (){var statearr_39090 = state_39024;
(statearr_39090[(7)] = inst_38888);

(statearr_39090[(8)] = inst_38886);

(statearr_39090[(32)] = inst_38908);

(statearr_39090[(9)] = inst_38885);

(statearr_39090[(10)] = inst_38887);

return statearr_39090;
})();
var statearr_39091_39160 = state_39024__$1;
(statearr_39091_39160[(2)] = null);

(statearr_39091_39160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (45))){
var state_39024__$1 = state_39024;
var statearr_39092_39161 = state_39024__$1;
(statearr_39092_39161[(2)] = null);

(statearr_39092_39161[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (26))){
var inst_38941 = (state_39024[(23)]);
var inst_38938 = (state_39024[(19)]);
var inst_38946 = (state_39024[(24)]);
var inst_38944 = (state_39024[(26)]);
var inst_38942 = (state_39024[(25)]);
var inst_38961 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38963 = (function (){var all_files = inst_38938;
var res_SINGLEQUOTE_ = inst_38941;
var res = inst_38942;
var files_not_loaded = inst_38944;
var dependencies_that_loaded = inst_38946;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38941,inst_38938,inst_38946,inst_38944,inst_38942,inst_38961,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38962){
var map__39093 = p__38962;
var map__39093__$1 = ((((!((map__39093 == null)))?((((map__39093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39093):map__39093);
var namespace = cljs.core.get.call(null,map__39093__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39093__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38941,inst_38938,inst_38946,inst_38944,inst_38942,inst_38961,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38964 = cljs.core.map.call(null,inst_38963,inst_38942);
var inst_38965 = cljs.core.pr_str.call(null,inst_38964);
var inst_38966 = figwheel.client.utils.log.call(null,inst_38965);
var inst_38967 = (function (){var all_files = inst_38938;
var res_SINGLEQUOTE_ = inst_38941;
var res = inst_38942;
var files_not_loaded = inst_38944;
var dependencies_that_loaded = inst_38946;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38941,inst_38938,inst_38946,inst_38944,inst_38942,inst_38961,inst_38963,inst_38964,inst_38965,inst_38966,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38941,inst_38938,inst_38946,inst_38944,inst_38942,inst_38961,inst_38963,inst_38964,inst_38965,inst_38966,state_val_39025,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38968 = setTimeout(inst_38967,(10));
var state_39024__$1 = (function (){var statearr_39095 = state_39024;
(statearr_39095[(33)] = inst_38966);

(statearr_39095[(34)] = inst_38961);

return statearr_39095;
})();
var statearr_39096_39162 = state_39024__$1;
(statearr_39096_39162[(2)] = inst_38968);

(statearr_39096_39162[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (16))){
var state_39024__$1 = state_39024;
var statearr_39097_39163 = state_39024__$1;
(statearr_39097_39163[(2)] = reload_dependents);

(statearr_39097_39163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (38))){
var inst_38978 = (state_39024[(16)]);
var inst_38995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38978);
var state_39024__$1 = state_39024;
var statearr_39098_39164 = state_39024__$1;
(statearr_39098_39164[(2)] = inst_38995);

(statearr_39098_39164[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (30))){
var state_39024__$1 = state_39024;
var statearr_39099_39165 = state_39024__$1;
(statearr_39099_39165[(2)] = null);

(statearr_39099_39165[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (10))){
var inst_38898 = (state_39024[(22)]);
var inst_38900 = cljs.core.chunked_seq_QMARK_.call(null,inst_38898);
var state_39024__$1 = state_39024;
if(inst_38900){
var statearr_39100_39166 = state_39024__$1;
(statearr_39100_39166[(1)] = (13));

} else {
var statearr_39101_39167 = state_39024__$1;
(statearr_39101_39167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (18))){
var inst_38932 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
if(cljs.core.truth_(inst_38932)){
var statearr_39102_39168 = state_39024__$1;
(statearr_39102_39168[(1)] = (19));

} else {
var statearr_39103_39169 = state_39024__$1;
(statearr_39103_39169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (42))){
var state_39024__$1 = state_39024;
var statearr_39104_39170 = state_39024__$1;
(statearr_39104_39170[(2)] = null);

(statearr_39104_39170[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (37))){
var inst_38990 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39105_39171 = state_39024__$1;
(statearr_39105_39171[(2)] = inst_38990);

(statearr_39105_39171[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (8))){
var inst_38898 = (state_39024[(22)]);
var inst_38885 = (state_39024[(9)]);
var inst_38898__$1 = cljs.core.seq.call(null,inst_38885);
var state_39024__$1 = (function (){var statearr_39106 = state_39024;
(statearr_39106[(22)] = inst_38898__$1);

return statearr_39106;
})();
if(inst_38898__$1){
var statearr_39107_39172 = state_39024__$1;
(statearr_39107_39172[(1)] = (10));

} else {
var statearr_39108_39173 = state_39024__$1;
(statearr_39108_39173[(1)] = (11));

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
});})(c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29342__auto__,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto____0 = (function (){
var statearr_39112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39112[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto__);

(statearr_39112[(1)] = (1));

return statearr_39112;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto____1 = (function (state_39024){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_39024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e39113){if((e39113 instanceof Object)){
var ex__29346__auto__ = e39113;
var statearr_39114_39174 = state_39024;
(statearr_39114_39174[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39175 = state_39024;
state_39024 = G__39175;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto__ = function(state_39024){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto____1.call(this,state_39024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29458__auto__ = (function (){var statearr_39115 = f__29457__auto__.call(null);
(statearr_39115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_39115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__,map__38870,map__38870__$1,opts,before_jsload,on_jsload,reload_dependents,map__38871,map__38871__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29456__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39178,link){
var map__39181 = p__39178;
var map__39181__$1 = ((((!((map__39181 == null)))?((((map__39181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39181):map__39181);
var file = cljs.core.get.call(null,map__39181__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__39181,map__39181__$1,file){
return (function (p1__39176_SHARP_,p2__39177_SHARP_){
if(cljs.core._EQ_.call(null,p1__39176_SHARP_,p2__39177_SHARP_)){
return p1__39176_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__39181,map__39181__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39187){
var map__39188 = p__39187;
var map__39188__$1 = ((((!((map__39188 == null)))?((((map__39188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39188):map__39188);
var match_length = cljs.core.get.call(null,map__39188__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39188__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39183_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39183_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39190_SHARP_,p2__39191_SHARP_){
return cljs.core.assoc.call(null,p1__39190_SHARP_,cljs.core.get.call(null,p2__39191_SHARP_,key),p2__39191_SHARP_);
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
var loaded_f_datas_39192 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_39192);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_39192);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39193,p__39194){
var map__39199 = p__39193;
var map__39199__$1 = ((((!((map__39199 == null)))?((((map__39199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39199):map__39199);
var on_cssload = cljs.core.get.call(null,map__39199__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__39200 = p__39194;
var map__39200__$1 = ((((!((map__39200 == null)))?((((map__39200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39200):map__39200);
var files_msg = map__39200__$1;
var files = cljs.core.get.call(null,map__39200__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1538029298308