// Compiled by ClojureScript 1.9.229 {}
goog.provide('patterning.groups');
goog.require('cljs.core');
goog.require('patterning.maths');
goog.require('patterning.sshapes');
goog.require('clojure.set');
/**
 * a vector of sshapes
 */
patterning.groups.group = (function patterning$groups$group(var_args){
var args__27998__auto__ = [];
var len__27991__auto___34912 = arguments.length;
var i__27992__auto___34913 = (0);
while(true){
if((i__27992__auto___34913 < len__27991__auto___34912)){
args__27998__auto__.push((arguments[i__27992__auto___34913]));

var G__34914 = (i__27992__auto___34913 + (1));
i__27992__auto___34913 = G__34914;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return patterning.groups.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

patterning.groups.group.cljs$core$IFn$_invoke$arity$variadic = (function (sshapes){
return (new cljs.core.LazySeq(null,(function (){
return sshapes;
}),null,null));
});

patterning.groups.group.cljs$lang$maxFixedArity = (0);

patterning.groups.group.cljs$lang$applyTo = (function (seq34911){
return patterning.groups.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34911));
});

patterning.groups.empty_group = (function patterning$groups$empty_group(){
return cljs.core.PersistentVector.EMPTY;
});
patterning.groups.scale = (function patterning$groups$scale(val,group){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.map.call(null,cljs.core.partial.call(null,patterning.sshapes.scale,val),group);
}),null,null));
});
patterning.groups.translate = (function patterning$groups$translate(dx,dy,group){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.map.call(null,cljs.core.partial.call(null,patterning.sshapes.translate,dx,dy),group);
}),null,null));
});
patterning.groups.translate_to = (function patterning$groups$translate_to(x,y,group){
return patterning.groups.translate.call(null,(- x),(- y),group);
});
patterning.groups.h_reflect = (function patterning$groups$h_reflect(group){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.map.call(null,patterning.sshapes.h_reflect,group);
}),null,null));
});
patterning.groups.v_reflect = (function patterning$groups$v_reflect(group){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.map.call(null,patterning.sshapes.v_reflect,group);
}),null,null));
});
patterning.groups.stretch = (function patterning$groups$stretch(sx,sy,group){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.map.call(null,cljs.core.partial.call(null,patterning.sshapes.stretch,sx,sy),group);
}),null,null));
});
patterning.groups.rotate = (function patterning$groups$rotate(da,group){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.map.call(null,cljs.core.partial.call(null,patterning.sshapes.rotate,da),group);
}),null,null));
});
patterning.groups.wobble = (function patterning$groups$wobble(noise,group){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.map.call(null,cljs.core.partial.call(null,patterning.sshapes.wobble,noise),group);
}),null,null));
});
/**
 * Changes the style of a group
 */
patterning.groups.over_style = (function patterning$groups$over_style(style,group){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.map.call(null,cljs.core.partial.call(null,patterning.sshapes.add_style,style),group);
}),null,null));
});
patterning.groups.extract_points = (function patterning$groups$extract_points(p__34915){
var map__34918 = p__34915;
var map__34918__$1 = ((((!((map__34918 == null)))?((((map__34918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34918):map__34918);
var style = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return points;
});
patterning.groups.style_attribute_set = (function patterning$groups$style_attribute_set(group,attribute){
return cljs.core.reduce.call(null,(function (atts,sshape){
var style = cljs.core.get.call(null,sshape,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.contains_QMARK_.call(null,style,attribute)){
return cljs.core.conj.call(null,atts,cljs.core.get.call(null,style,new cljs.core.Keyword(null,"stroke","stroke",1741823555)));
} else {
return atts;
}
}),cljs.core.set.call(null,cljs.core.PersistentVector.EMPTY),group);
});
patterning.groups.color_set = (function patterning$groups$color_set(group){
return clojure.set.union.call(null,patterning.groups.style_attribute_set.call(null,group,new cljs.core.Keyword(null,"stroke","stroke",1741823555)),patterning.groups.style_attribute_set.call(null,group,new cljs.core.Keyword(null,"fill","fill",883462889)));
});
/**
 * Flatten all sshapes into a single sshape
 */
patterning.groups.flatten_group = (function patterning$groups$flatten_group(var_args){
var args34920 = [];
var len__27991__auto___34923 = arguments.length;
var i__27992__auto___34924 = (0);
while(true){
if((i__27992__auto___34924 < len__27991__auto___34923)){
args34920.push((arguments[i__27992__auto___34924]));

var G__34925 = (i__27992__auto___34924 + (1));
i__27992__auto___34924 = G__34925;
continue;
} else {
}
break;
}

var G__34922 = args34920.length;
switch (G__34922) {
case 1:
return patterning.groups.flatten_group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return patterning.groups.flatten_group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34920.length)].join('')));

}
});

patterning.groups.flatten_group.cljs$core$IFn$_invoke$arity$1 = (function (group){
return patterning.groups.flatten_group.call(null,cljs.core.PersistentArrayMap.EMPTY,group);
});

patterning.groups.flatten_group.cljs$core$IFn$_invoke$arity$2 = (function (style,group){
var all_points = cljs.core.mapcat.call(null,patterning.groups.extract_points,group);
return patterning.sshapes.__GT_SShape.call(null,style,all_points);
});

patterning.groups.flatten_group.cljs$lang$maxFixedArity = 2;

/**
 * Takes a sshape and returns a scaler to reduce it to usual viewport coords [-1 -1][1 1] 
 */
patterning.groups.reframe_scaler = (function patterning$groups$reframe_scaler(sshape){
return (2.0 / (function (){var x__27141__auto__ = patterning.sshapes.width.call(null,sshape);
var y__27142__auto__ = patterning.sshapes.height.call(null,sshape);
return ((x__27141__auto__ > y__27142__auto__) ? x__27141__auto__ : y__27142__auto__);
})());
});
patterning.groups.leftmost = (function patterning$groups$leftmost(group){
return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,patterning.sshapes.leftmost,group));
});
patterning.groups.rightmost = (function patterning$groups$rightmost(group){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,patterning.sshapes.rightmost,group));
});
patterning.groups.width = (function patterning$groups$width(group){
return (patterning.groups.rightmost.call(null,group) - patterning.groups.leftmost.call(null,group));
});
patterning.groups.top = (function patterning$groups$top(group){
return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,patterning.sshapes.top,group));
});
patterning.groups.bottom = (function patterning$groups$bottom(group){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,patterning.sshapes.bottom,group));
});
patterning.groups.height = (function patterning$groups$height(group){
return (patterning.groups.bottom.call(null,group) - patterning.groups.top.call(null,group));
});
/**
 * Assumes group is taller than wide so move it to horizontal centre
 */
patterning.groups.h_centre = (function patterning$groups$h_centre(group){
var lb = patterning.groups.leftmost.call(null,group);
var rb = patterning.groups.rightmost.call(null,group);
var width = (rb - lb);
var target_left = ((- width) / (2));
var shift = (target_left - lb);
return patterning.groups.translate.call(null,shift,(0),group);
});
patterning.groups.reframe = (function patterning$groups$reframe(group){
var sshape = patterning.groups.flatten_group.call(null,cljs.core.PersistentArrayMap.EMPTY,group);
var scaled = patterning.groups.scale.call(null,patterning.groups.reframe_scaler.call(null,sshape),group);
var f_scaled = patterning.groups.flatten_group.call(null,cljs.core.PersistentArrayMap.EMPTY,scaled);
var dx = ((- (1)) - patterning.sshapes.leftmost.call(null,f_scaled));
var dy = ((- (1)) - patterning.sshapes.top.call(null,f_scaled));
return patterning.groups.translate.call(null,dx,dy,scaled);
});
patterning.groups.filter_group = (function patterning$groups$filter_group(p_QMARK_,group){
return cljs.core.map.call(null,cljs.core.partial.call(null,patterning.sshapes.ss_filter,p_QMARK_),group);
});
/**
 * this removes entire sshapes from the group that have points that don't match the criteria
 */
patterning.groups.filter_sshapes_in_group = (function patterning$groups$filter_sshapes_in_group(p_QMARK_,group){
var all_ok_QMARK_ = (function (p__34930){
var map__34931 = p__34930;
var map__34931__$1 = ((((!((map__34931 == null)))?((((map__34931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34931):map__34931);
var style = cljs.core.get.call(null,map__34931__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34931__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.every_QMARK_.call(null,p_QMARK_,points);
});
return cljs.core.filter.call(null,all_ok_QMARK_,group);
});
/**
 * takes a predicate and a sshape, splits the sshape at any point which doesn't meet the predicate, return group
 */
patterning.groups.clip_sshape = (function patterning$groups$clip_sshape(p_QMARK_,p__34933){
var map__34936 = p__34933;
var map__34936__$1 = ((((!((map__34936 == null)))?((((map__34936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34936):map__34936);
var style = cljs.core.get.call(null,map__34936__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34936__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if(cljs.core.empty_QMARK_.call(null,points)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"points","points",-1486596883),points], null);
} else {
var p = cljs.core.first.call(null,points);
var ps = cljs.core.rest.call(null,points);
var acc_sshape_ps = cljs.core.PersistentVector.EMPTY;
var acc_group = cljs.core.PersistentVector.EMPTY;
while(true){
if((cljs.core.empty_QMARK_.call(null,ps)) && (cljs.core.not.call(null,p_QMARK_.call(null,p)))){
return cljs.core.conj.call(null,acc_group,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"points","points",-1486596883),acc_sshape_ps], null));
} else {
if(cljs.core.empty_QMARK_.call(null,ps)){
return cljs.core.conj.call(null,acc_group,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.conj.call(null,acc_sshape_ps,p)], null));
} else {
if(cljs.core.truth_(p_QMARK_.call(null,p))){
var G__34938 = cljs.core.first.call(null,ps);
var G__34939 = cljs.core.rest.call(null,ps);
var G__34940 = cljs.core.conj.call(null,acc_sshape_ps,p);
var G__34941 = acc_group;
p = G__34938;
ps = G__34939;
acc_sshape_ps = G__34940;
acc_group = G__34941;
continue;
} else {
var G__34942 = cljs.core.first.call(null,ps);
var G__34943 = cljs.core.rest.call(null,ps);
var G__34944 = cljs.core.PersistentVector.EMPTY;
var G__34945 = cljs.core.conj.call(null,acc_group,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"points","points",-1486596883),acc_sshape_ps], null));
p = G__34942;
ps = G__34943;
acc_sshape_ps = G__34944;
acc_group = G__34945;
continue;

}
}
}
break;
}
}
});
/**
 * clips all sshapes in a group
 */
patterning.groups.clip = (function patterning$groups$clip(p_QMARK_,group){
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,patterning.groups.clip_sshape,p_QMARK_),group);
});
/**
 * more or less equal groups
 */
patterning.groups.mol_EQ_ = (function patterning$groups$mol_EQ_(group1,group2){
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,group1),cljs.core.count.call(null,group2))){
return false;
} else {
var ssmol_EQ_ = (function (p__34950){
var vec__34951 = p__34950;
var ss1 = cljs.core.nth.call(null,vec__34951,(0),null);
var ss2 = cljs.core.nth.call(null,vec__34951,(1),null);
return patterning.sshapes.mol_EQ_.call(null,ss1,ss2);
});
return cljs.core.every_QMARK_.call(null,ssmol_EQ_,cljs.core.map.call(null,cljs.core.vector,group1,group2));
}
});

//# sourceMappingURL=groups.js.map?rel=1538029292404