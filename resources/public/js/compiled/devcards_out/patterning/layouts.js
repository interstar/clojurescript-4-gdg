// Compiled by ClojureScript 1.9.229 {}
goog.provide('patterning.layouts');
goog.require('cljs.core');
goog.require('patterning.maths');
goog.require('patterning.groups');
/**
 * simplest layout, two groups located on top of each other 
 */
patterning.layouts.superimpose_layout = (function patterning$layouts$superimpose_layout(group1,group2){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.concat.call(null,group1,group2);
}),null,null));
});
/**
 * superimpose a number of groups
 */
patterning.layouts.stack = (function patterning$layouts$stack(var_args){
var args__27998__auto__ = [];
var len__27991__auto___35045 = arguments.length;
var i__27992__auto___35046 = (0);
while(true){
if((i__27992__auto___35046 < len__27991__auto___35045)){
args__27998__auto__.push((arguments[i__27992__auto___35046]));

var G__35047 = (i__27992__auto___35046 + (1));
i__27992__auto___35046 = G__35047;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return patterning.layouts.stack.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

patterning.layouts.stack.cljs$core$IFn$_invoke$arity$variadic = (function (groups){
return cljs.core.reduce.call(null,patterning.layouts.superimpose_layout,groups);
});

patterning.layouts.stack.cljs$lang$maxFixedArity = (0);

patterning.layouts.stack.cljs$lang$applyTo = (function (seq35044){
return patterning.layouts.stack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35044));
});

/**
 * superimpose smaller copies of a shape
 */
patterning.layouts.nested_stack = (function patterning$layouts$nested_stack(styles,group,reducer){
var gen_next = (function (p__35052){
var vec__35053 = p__35052;
var style = cljs.core.nth.call(null,vec__35053,(0),null);
var x = cljs.core.nth.call(null,vec__35053,(1),null);
return patterning.groups.over_style.call(null,style,patterning.groups.scale.call(null,x,group));
});
return (new cljs.core.LazySeq(null,((function (gen_next){
return (function (){
return patterning.layouts.stack.call(null,cljs.core.mapcat.call(null,gen_next,cljs.core.map.call(null,cljs.core.vector,styles,cljs.core.iterate.call(null,reducer,(1)))));
});})(gen_next))
,null,null));
});
/**
 * Cartesian Product of two collections
 */
patterning.layouts.cart = (function patterning$layouts$cart(colls){
if(cljs.core.empty_QMARK_.call(null,colls)){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
var iter__27662__auto__ = (function patterning$layouts$cart_$_iter__35062(s__35063){
return (new cljs.core.LazySeq(null,(function (){
var s__35063__$1 = s__35063;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35063__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__27658__auto__ = ((function (s__35063__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function patterning$layouts$cart_$_iter__35062_$_iter__35064(s__35065){
return (new cljs.core.LazySeq(null,((function (s__35063__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__35065__$1 = s__35065;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__35065__$1);
if(temp__5457__auto____$1){
var s__35065__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35065__$2)){
var c__27660__auto__ = cljs.core.chunk_first.call(null,s__35065__$2);
var size__27661__auto__ = cljs.core.count.call(null,c__27660__auto__);
var b__35067 = cljs.core.chunk_buffer.call(null,size__27661__auto__);
if((function (){var i__35066 = (0);
while(true){
if((i__35066 < size__27661__auto__)){
var more = cljs.core._nth.call(null,c__27660__auto__,i__35066);
cljs.core.chunk_append.call(null,b__35067,cljs.core.cons.call(null,x,more));

var G__35068 = (i__35066 + (1));
i__35066 = G__35068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35067),patterning$layouts$cart_$_iter__35062_$_iter__35064.call(null,cljs.core.chunk_rest.call(null,s__35065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35067),null);
}
} else {
var more = cljs.core.first.call(null,s__35065__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,x,more),patterning$layouts$cart_$_iter__35062_$_iter__35064.call(null,cljs.core.rest.call(null,s__35065__$2)));
}
} else {
return null;
}
break;
}
});})(s__35063__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__35063__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__27659__auto__ = cljs.core.seq.call(null,iterys__27658__auto__.call(null,patterning$layouts$cart.call(null,cljs.core.rest.call(null,colls))));
if(fs__27659__auto__){
return cljs.core.concat.call(null,fs__27659__auto__,patterning$layouts$cart_$_iter__35062.call(null,cljs.core.rest.call(null,s__35063__$1)));
} else {
var G__35069 = cljs.core.rest.call(null,s__35063__$1);
s__35063__$1 = G__35069;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27662__auto__.call(null,cljs.core.first.call(null,colls));
}
});
/**
 * calculates the positions for a grid layout
 */
patterning.layouts.grid_layout_positions = (function patterning$layouts$grid_layout_positions(number){
var offset = ((2) / number);
var inc = ((function (offset){
return (function (x){
return (offset + x);
});})(offset))
;
var ino = (offset / (2));
var init = (ino - (1));
var h_iterator = cljs.core.take.call(null,number,cljs.core.iterate.call(null,inc,init));
var v_iterator = cljs.core.take.call(null,number,cljs.core.iterate.call(null,inc,init));
return patterning.layouts.cart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_iterator,v_iterator], null));
});
/**
 * Like a grid but with a half-drop every other column
 */
patterning.layouts.half_drop_grid_layout_positions = (function patterning$layouts$half_drop_grid_layout_positions(number){
var offset = ((2) / number);
var n2 = ((number / (2)) | (0));
var inc_x = ((function (offset,n2){
return (function (x){
return (((2) * offset) + x);
});})(offset,n2))
;
var inc_y = ((function (offset,n2,inc_x){
return (function (y){
return (offset + y);
});})(offset,n2,inc_x))
;
var in_x = (offset / (2));
var in_y = (offset / (2));
var init_x1 = (in_x - (1));
var init_x2 = (in_x - ((1) - offset));
var init_y1 = (in_y - (1));
var init_y2 = (in_y - ((1) + (offset / (2))));
var h1_iterator = cljs.core.take.call(null,((cljs.core.even_QMARK_.call(null,n2))?n2:((1) + n2)),cljs.core.iterate.call(null,inc_x,init_x1));
var v1_iterator = cljs.core.take.call(null,number,cljs.core.iterate.call(null,inc_y,init_y1));
var h2_iterator = cljs.core.take.call(null,n2,cljs.core.iterate.call(null,inc_x,init_x2));
var v2_iterator = cljs.core.take.call(null,((1) + number),cljs.core.iterate.call(null,inc_y,init_y2));
var h_iterator = cljs.core.interleave.call(null,h1_iterator,h2_iterator);
var v_iterator = cljs.core.interleave.call(null,v1_iterator,v2_iterator);
return cljs.core.concat.call(null,patterning.layouts.cart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h1_iterator,v1_iterator], null)),patterning.layouts.cart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h2_iterator,v2_iterator], null)));
});
/**
 * Diamond grid, actually created like a half-drop
 */
patterning.layouts.diamond_layout_positions = (function patterning$layouts$diamond_layout_positions(number){
var offset = ((2) / number);
var n2 = ((number / (1)) | (0));
var inc_x = ((function (offset,n2){
return (function (x){
return (((1) * offset) + x);
});})(offset,n2))
;
var inc_y = ((function (offset,n2,inc_x){
return (function (y){
return (offset + y);
});})(offset,n2,inc_x))
;
var in_x = (offset / (2));
var in_y = (offset / (2));
var init_x1 = (in_x - ((1) + (offset / (2))));
var init_x2 = (init_x1 + (offset / (2)));
var init_y1 = (in_y - (1));
var init_y2 = (in_y - ((1) + (offset / (2))));
var h1_iterator = cljs.core.take.call(null,((0) + ((cljs.core.even_QMARK_.call(null,n2))?n2:((1) + n2))),cljs.core.iterate.call(null,inc_x,init_x1));
var v1_iterator = cljs.core.take.call(null,number,cljs.core.iterate.call(null,inc_y,init_y1));
var h2_iterator = cljs.core.take.call(null,n2,cljs.core.iterate.call(null,inc_x,init_x2));
var v2_iterator = cljs.core.take.call(null,((1) + number),cljs.core.iterate.call(null,inc_y,init_y2));
var h_iterator = cljs.core.interleave.call(null,h1_iterator,h2_iterator);
var v_iterator = cljs.core.interleave.call(null,v1_iterator,v2_iterator);
return cljs.core.concat.call(null,patterning.layouts.cart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h1_iterator,v1_iterator], null)),patterning.layouts.cart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h2_iterator,v2_iterator], null)));
});
/**
 * Takes a list of groups and a list of positions and puts one of the groups at each position
 */
patterning.layouts.place_groups_at_positions = (function patterning$layouts$place_groups_at_positions(groups,positions){
return cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p__35077){
var vec__35078 = p__35077;
var vec__35081 = cljs.core.nth.call(null,vec__35078,(0),null);
var x = cljs.core.nth.call(null,vec__35081,(0),null);
var y = cljs.core.nth.call(null,vec__35081,(1),null);
var group = cljs.core.nth.call(null,vec__35078,(1),null);
return patterning.groups.translate.call(null,x,y,group);
}),cljs.core.map.call(null,cljs.core.vector,positions,groups)));
});
patterning.layouts.scale_group_stream = (function patterning$layouts$scale_group_stream(n,groups){
return cljs.core.map.call(null,cljs.core.partial.call(null,patterning.groups.scale,((1) / n)),groups);
});
/**
 * Takes an n and a group-stream and returns items from the group-stream in an n X n grid 
 */
patterning.layouts.grid_layout = (function patterning$layouts$grid_layout(n,groups){
return patterning.layouts.place_groups_at_positions.call(null,patterning.layouts.scale_group_stream.call(null,n,groups),patterning.layouts.grid_layout_positions.call(null,n));
});
/**
 * Like grid but with half-drop
 */
patterning.layouts.half_drop_grid_layout = (function patterning$layouts$half_drop_grid_layout(n,groups){
return patterning.layouts.place_groups_at_positions.call(null,patterning.layouts.scale_group_stream.call(null,n,groups),patterning.layouts.half_drop_grid_layout_positions.call(null,n));
});
/**
 * Like half-drop
 */
patterning.layouts.diamond_layout = (function patterning$layouts$diamond_layout(n,groups){
return patterning.layouts.place_groups_at_positions.call(null,patterning.layouts.scale_group_stream.call(null,n,groups),patterning.layouts.diamond_layout_positions.call(null,n));
});
patterning.layouts.q1_rot_group = (function patterning$layouts$q1_rot_group(group){
return patterning.groups.rotate.call(null,(patterning.maths.PI / (2)),group);
});
patterning.layouts.q2_rot_group = (function patterning$layouts$q2_rot_group(group){
return patterning.groups.rotate.call(null,patterning.maths.PI,group);
});
patterning.layouts.q3_rot_group = (function patterning$layouts$q3_rot_group(group){
return patterning.groups.rotate.call(null,(- (patterning.maths.PI / (2))),group);
});
patterning.layouts.random_turn_groups = (function patterning$layouts$random_turn_groups(groups){
var random_turn = (function (group){
var G__35085 = cljs.core.rand_int.call(null,(4));
switch (G__35085) {
case (0):
return group;

break;
case (1):
return patterning.layouts.q1_rot_group.call(null,group);

break;
case (2):
return patterning.layouts.q2_rot_group.call(null,group);

break;
case (3):
return patterning.layouts.q3_rot_group.call(null,group);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.rand_int.call(null,(4)))].join('')));

}
});
return cljs.core.map.call(null,random_turn,groups);
});
/**
 * Takes a group and returns a grid with random quarter rotations
 */
patterning.layouts.random_grid_layout = (function patterning$layouts$random_grid_layout(n,groups){
return patterning.layouts.grid_layout.call(null,n,patterning.layouts.random_turn_groups.call(null,groups));
});
patterning.layouts.drop_every = (function patterning$layouts$drop_every(n,xs){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq.call(null,xs)){
return cljs.core.concat.call(null,cljs.core.take.call(null,(n - (1)),xs),patterning$layouts$drop_every.call(null,n,cljs.core.drop.call(null,n,xs)));
} else {
return null;
}
}),null,null));
});
/**
 * returns the appropriate lazy seq of groups for constructing a checked-layout
 */
patterning.layouts.check_seq = (function patterning$layouts$check_seq(n,groups1,groups2){
var together = cljs.core.interleave.call(null,groups1,groups2);
if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,n,(2)))){
return patterning.layouts.drop_every.call(null,((1) + n),together);
} else {
return together;
}
});
/**
 * does checks using grid layout
 */
patterning.layouts.checked_layout = (function patterning$layouts$checked_layout(number,groups1,groups2){
return patterning.layouts.grid_layout.call(null,number,patterning.layouts.check_seq.call(null,number,groups1,groups2));
});
/**
 * Takes a total number of rows, an index i and two group-streams.
 * Makes an n X n square where row or col i is from group-stream2 and everything else is group-stream1
 */
patterning.layouts.one_x_layout = (function patterning$layouts$one_x_layout(n,i,f,groups1,groups2){
var the_seq = cljs.core.concat.call(null,cljs.core.take.call(null,(n * i),groups1),cljs.core.take.call(null,n,groups2),cljs.core.take.call(null,(n * (n - i)),groups1));
var layout_positions = cljs.core.map.call(null,cljs.core.vector,patterning.layouts.scale_group_stream.call(null,n,the_seq),patterning.layouts.grid_layout_positions.call(null,n));
return cljs.core.concat.call(null,cljs.core.mapcat.call(null,f,layout_positions));
});
/**
 * uses one-x-layout with rows
 */
patterning.layouts.one_row_layout = (function patterning$layouts$one_row_layout(n,i,groups1,groups2){
return patterning.layouts.one_x_layout.call(null,n,i,(function (p__35094){
var vec__35095 = p__35094;
var group = cljs.core.nth.call(null,vec__35095,(0),null);
var vec__35098 = cljs.core.nth.call(null,vec__35095,(1),null);
var x = cljs.core.nth.call(null,vec__35098,(0),null);
var y = cljs.core.nth.call(null,vec__35098,(1),null);
return patterning.groups.translate.call(null,y,x,group);
}),groups1,groups2);
});
/**
 * uses one-x-layout with rows
 */
patterning.layouts.one_col_layout = (function patterning$layouts$one_col_layout(n,i,groups1,groups2){
return patterning.layouts.one_x_layout.call(null,n,i,(function (p__35108){
var vec__35109 = p__35108;
var group = cljs.core.nth.call(null,vec__35109,(0),null);
var vec__35112 = cljs.core.nth.call(null,vec__35109,(1),null);
var x = cljs.core.nth.call(null,vec__35112,(0),null);
var y = cljs.core.nth.call(null,vec__35112,(1),null);
return patterning.groups.translate.call(null,x,y,group);
}),groups1,groups2);
});
/**
 * Fills a group-stream with cols from alternative group-streams
 */
patterning.layouts.alt_cols = (function patterning$layouts$alt_cols(n,groups1,groups2){
return cljs.core.cycle.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,n,groups1),cljs.core.take.call(null,n,groups2)));
});
/**
 * Fills a group-stream with rows from alternative group-streams
 */
patterning.layouts.alt_rows = (function patterning$layouts$alt_rows(n,groups1,groups2){
return cljs.core.interleave.call(null,groups1,groups2);
});
/**
 * Every other column from two streams
 */
patterning.layouts.alt_cols_grid_layout = (function patterning$layouts$alt_cols_grid_layout(n,groups1,groups2){
return patterning.layouts.grid_layout.call(null,n,patterning.layouts.alt_cols.call(null,n,groups1,groups2));
});
/**
 * Every other row from two streams
 */
patterning.layouts.alt_rows_grid_layout = (function patterning$layouts$alt_rows_grid_layout(n,groups1,groups2){
return patterning.layouts.grid_layout.call(null,n,patterning.layouts.alt_rows.call(null,n,groups1,groups2));
});
/**
 * Four-way mirroring. Returns the group repeated four times reflected vertically and horizontall
 */
patterning.layouts.four_mirror = (function patterning$layouts$four_mirror(group){
var nw = patterning.groups.translate.call(null,(- 0.5),(- 0.5),patterning.groups.scale.call(null,((1) / (2)),group));
var ne = patterning.groups.h_reflect.call(null,nw);
var sw = patterning.groups.v_reflect.call(null,nw);
var se = patterning.groups.h_reflect.call(null,sw);
return cljs.core.concat.call(null,nw,ne,sw,se);
});
/**
 * Reflect horizontally and stretch
 */
patterning.layouts.h_mirror = (function patterning$layouts$h_mirror(group){
var left = patterning.groups.translate.call(null,-0.5,(0),patterning.groups.stretch.call(null,0.5,(1),group));
var right = patterning.groups.h_reflect.call(null,left);
return patterning.layouts.stack.call(null,left,right);
});
/**
 * Reflect vertically and stretch
 */
patterning.layouts.v_mirror = (function patterning$layouts$v_mirror(group){
var top = patterning.groups.translate.call(null,(0),-0.5,patterning.groups.stretch.call(null,(1),0.5,group));
var bottom = patterning.groups.v_reflect.call(null,top);
return patterning.layouts.stack.call(null,top,bottom);
});
/**
 * Circular layout. Returns n copies in a rotation
 */
patterning.layouts.clock_rotate = (function patterning$layouts$clock_rotate(n,group){
var angs = patterning.maths.clock_angles.call(null,n);
return cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (angs){
return (function (a){
return patterning.groups.rotate.call(null,a,group);
});})(angs))
,angs));
});
/**
 * Better clock-rotate
 */
patterning.layouts.ring = (function patterning$layouts$ring(n,offset,groups){
var shift_f = (function (g){
return patterning.groups.translate.call(null,(offset * (2)),(0),patterning.groups.scale.call(null,(((1) - offset) / (2)),patterning.groups.rotate.call(null,patterning.maths.PI,patterning.groups.h_centre.call(null,patterning.groups.reframe.call(null,g)))));
});
return patterning.groups.reframe.call(null,patterning.groups.rotate.call(null,(- (patterning.maths.PI / (2))),cljs.core.mapcat.call(null,((function (shift_f){
return (function (a,g){
return patterning.groups.rotate.call(null,a,shift_f.call(null,g));
});})(shift_f))
,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,((2) * (patterning.maths.PI / n))),(0)),cljs.core.take.call(null,n,cljs.core.cycle.call(null,groups)))));
});
/**
 * Four squares rotated
 */
patterning.layouts.four_round = (function patterning$layouts$four_round(group){
var scaled = patterning.groups.scale.call(null,((1) / (2)),group);
var p2 = (patterning.maths.PI / (2));
var nw = patterning.groups.translate.call(null,(- 0.5),(- 0.5),scaled);
var ne = patterning.groups.translate.call(null,0.5,(- 0.5),patterning.layouts.q1_rot_group.call(null,scaled));
var se = patterning.groups.translate.call(null,(- 0.5),0.5,patterning.layouts.q3_rot_group.call(null,scaled));
var sw = patterning.groups.translate.call(null,0.5,0.5,patterning.layouts.q2_rot_group.call(null,scaled));
return cljs.core.concat.call(null,nw,ne,se,sw);
});
/**
 * Frames consist of corners and edges. 
 */
patterning.layouts.frame = (function patterning$layouts$frame(grid_size,corners,edges){
var gs2 = (grid_size - (2));
var vec__35118 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,(4),corners));
var nw = cljs.core.nth.call(null,vec__35118,(0),null);
var b = cljs.core.nth.call(null,vec__35118,(1),null);
var c = cljs.core.nth.call(null,vec__35118,(2),null);
var d = cljs.core.nth.call(null,vec__35118,(3),null);
var ne = patterning.groups.h_reflect.call(null,b);
var se = patterning.groups.h_reflect.call(null,patterning.groups.v_reflect.call(null,c));
var sw = patterning.groups.v_reflect.call(null,d);
var edge = cljs.core.first.call(null,edges);
var col = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patterning.layouts.q1_rot_group.call(null,edge)], null),cljs.core.repeat.call(null,gs2,patterning.groups.empty_group.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patterning.layouts.q3_rot_group.call(null,edge)], null));
return patterning.layouts.grid_layout.call(null,grid_size,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw], null),cljs.core.repeat.call(null,gs2,edge),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sw], null),cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.repeat.call(null,gs2,col)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ne], null),cljs.core.repeat.call(null,gs2,patterning.layouts.q2_rot_group.call(null,edge)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [se], null)));
});
/**
 * Puts a frame around the other group
 */
patterning.layouts.framed = (function patterning$layouts$framed(grid_size,corners,edges,inner){
var gs2 = (grid_size - (2));
var shrink = (gs2 / grid_size);
return patterning.layouts.stack.call(null,patterning.groups.scale.call(null,shrink,inner),patterning.layouts.frame.call(null,grid_size,corners,edges));
});
patterning.layouts.flower_of_life_positions = (function patterning$layouts$flower_of_life_positions(r,depth,p__35121){
var vec__35125 = p__35121;
var cx = cljs.core.nth.call(null,vec__35125,(0),null);
var cy = cljs.core.nth.call(null,vec__35125,(1),null);
if(cljs.core._EQ_.call(null,depth,(0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)], null);
} else {
var round_points = cljs.core.map.call(null,((function (vec__35125,cx,cy){
return (function (a){
return patterning.maths.rotate_point.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (0)),(cy + r)], null));
});})(vec__35125,cx,cy))
,patterning.maths.clock_angles.call(null,(6)));
var rec_points = cljs.core.mapcat.call(null,cljs.core.partial.call(null,patterning$layouts$flower_of_life_positions,r,(depth - (1))),round_points);
return cljs.core.set.call(null,cljs.core.conj.call(null,rec_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)));
}
});
patterning.layouts.sshape_to_positions = (function patterning$layouts$sshape_to_positions(p__35128){
var map__35131 = p__35128;
var map__35131__$1 = ((((!((map__35131 == null)))?((((map__35131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35131):map__35131);
var sshape = map__35131__$1;
var style = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return points;
});
patterning.layouts.sshape_as_layout = (function patterning$layouts$sshape_as_layout(sshape,group_stream,scalar){
return patterning.layouts.place_groups_at_positions.call(null,cljs.core.map.call(null,(function (p1__35133_SHARP_){
return patterning.groups.scale.call(null,scalar,p1__35133_SHARP_);
}),group_stream),patterning.layouts.sshape_to_positions.call(null,sshape));
});

//# sourceMappingURL=layouts.js.map?rel=1538029292953