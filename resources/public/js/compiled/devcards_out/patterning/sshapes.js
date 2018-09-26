// Compiled by ClojureScript 1.9.229 {}
goog.provide('patterning.sshapes');
goog.require('cljs.core');
goog.require('patterning.maths');
goog.require('clojure.data');
patterning.sshapes.scale_shape = (function patterning$sshapes$scale_shape(val,shape){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__34630){
var vec__34631 = p__34630;
var x = cljs.core.nth.call(null,vec__34631,(0),null);
var y = cljs.core.nth.call(null,vec__34631,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(val * x),(val * y)], null);
}),shape));
});
patterning.sshapes.translate_shape = (function patterning$sshapes$translate_shape(dx,dy,shape){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__34638){
var vec__34639 = p__34638;
var x = cljs.core.nth.call(null,vec__34639,(0),null);
var y = cljs.core.nth.call(null,vec__34639,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null);
}),shape));
});
patterning.sshapes.stretch_shape = (function patterning$sshapes$stretch_shape(sx,sy,shape){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__34646){
var vec__34647 = p__34646;
var x = cljs.core.nth.call(null,vec__34647,(0),null);
var y = cljs.core.nth.call(null,vec__34647,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx * x),(sy * y)], null);
}),shape));
});
patterning.sshapes.h_reflect_shape = (function patterning$sshapes$h_reflect_shape(shape){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__34654){
var vec__34655 = p__34654;
var x = cljs.core.nth.call(null,vec__34655,(0),null);
var y = cljs.core.nth.call(null,vec__34655,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),y], null);
}),shape));
});
patterning.sshapes.v_reflect_shape = (function patterning$sshapes$v_reflect_shape(shape){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__34662){
var vec__34663 = p__34662;
var x = cljs.core.nth.call(null,vec__34663,(0),null);
var y = cljs.core.nth.call(null,vec__34663,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(- y)], null);
}),shape));
});
/**
 * Closes an open shape
 */
patterning.sshapes.close_shape = (function patterning$sshapes$close_shape(points){
return cljs.core.conj.call(null,points,cljs.core.first.call(null,points));
});
patterning.sshapes.points_to_polars = (function patterning$sshapes$points_to_polars(points){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,patterning.maths.rec_to_pol,points));
});
patterning.sshapes.polars_to_points = (function patterning$sshapes$polars_to_points(polars){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,patterning.maths.pol_to_rec,polars));
});
patterning.sshapes.rotate_shape = (function patterning$sshapes$rotate_shape(da,shape){
return cljs.core.map.call(null,cljs.core.partial.call(null,patterning.maths.rotate_point,da),shape);
});
patterning.sshapes.wobble_shape = (function patterning$sshapes$wobble_shape(noise,shape){
return cljs.core.map.call(null,cljs.core.partial.call(null,patterning.maths.wobble_point,noise),shape);
});
/**
 * the start and end point of a shape
 */
patterning.sshapes.ends = (function patterning$sshapes$ends(shape){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,shape),cljs.core.last.call(null,shape)], null);
});
/**
 * Merge two open shapes together, by choosing the ends that are closest
 */
patterning.sshapes.tie_together = (function patterning$sshapes$tie_together(shape1,shape2){
var vec__34672 = patterning.sshapes.ends.call(null,shape1);
var e1 = cljs.core.nth.call(null,vec__34672,(0),null);
var e2 = cljs.core.nth.call(null,vec__34672,(1),null);
var vec__34675 = patterning.sshapes.ends.call(null,shape2);
var e3 = cljs.core.nth.call(null,vec__34675,(0),null);
var e4 = cljs.core.nth.call(null,vec__34675,(1),null);
var o1 = patterning.maths.distance.call(null,e1,e3);
var o2 = patterning.maths.distance.call(null,e1,e4);
var o3 = patterning.maths.distance.call(null,e2,e3);
var o4 = patterning.maths.distance.call(null,e2,e4);
var dists = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [o1,o2,o3,o4], null);
var m = cljs.core.apply.call(null,cljs.core.min,dists);
if(cljs.core._EQ_.call(null,m,o1)){
return cljs.core.concat.call(null,cljs.core.reverse.call(null,shape1),shape2);
} else {
if(cljs.core._EQ_.call(null,m,o2)){
return cljs.core.concat.call(null,cljs.core.reverse.call(null,shape1),cljs.core.reverse.call(null,shape2));
} else {
if(cljs.core._EQ_.call(null,m,o3)){
return cljs.core.concat.call(null,shape1,shape2);
} else {
if(cljs.core._EQ_.call(null,m,o4)){
return cljs.core.concat.call(null,shape1,cljs.core.reverse.call(null,shape2));
} else {
return null;
}
}
}
}
});
/**
 * repeats a shape horizontally
 */
patterning.sshapes.h_glue_shape = (function patterning$sshapes$h_glue_shape(shape1,shape2){
var e1 = cljs.core.last.call(null,shape1);
var add = ((function (e1){
return (function (p__34682){
var vec__34683 = p__34682;
var x = cljs.core.nth.call(null,vec__34683,(0),null);
var y = cljs.core.nth.call(null,vec__34683,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((1) + cljs.core.first.call(null,e1)) + x),y], null);
});})(e1))
;
return cljs.core.concat.call(null,shape1,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,add,shape2)));
});
patterning.sshapes.filter_shape = (function patterning$sshapes$filter_shape(f_QMARK_,ps){
return cljs.core.filter.call(null,f_QMARK_,ps);
});
/**
 * more or less equal shapes
 */
patterning.sshapes.mol_EQ_shapes = (function patterning$sshapes$mol_EQ_shapes(shape1,shape2){
if((cljs.core.empty_QMARK_.call(null,shape1)) && (cljs.core.empty_QMARK_.call(null,shape2))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,shape1),cljs.core.count.call(null,shape2))){
return false;
} else {
var and__26796__auto__ = patterning.maths.molp_EQ_.call(null,cljs.core.first.call(null,shape1),cljs.core.first.call(null,shape2));
if(cljs.core.truth_(and__26796__auto__)){
return patterning$sshapes$mol_EQ_shapes.call(null,cljs.core.rest.call(null,shape1),cljs.core.rest.call(null,shape2));
} else {
return and__26796__auto__;
}

}
}
});
patterning.sshapes.add_property = (function patterning$sshapes$add_property(style,prop,val){
return cljs.core.conj.call(null,style,cljs.core.PersistentArrayMap.fromArray([prop,val], true, false));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
patterning.sshapes.SShape = (function (style,points,__meta,__extmap,__hash){
this.style = style;
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
patterning.sshapes.SShape.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27479__auto__,k__27480__auto__){
var self__ = this;
var this__27479__auto____$1 = this;
return cljs.core._lookup.call(null,this__27479__auto____$1,k__27480__auto__,null);
});

patterning.sshapes.SShape.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27481__auto__,k34687,else__27482__auto__){
var self__ = this;
var this__27481__auto____$1 = this;
var G__34689 = (((k34687 instanceof cljs.core.Keyword))?k34687.fqn:null);
switch (G__34689) {
case "style":
return self__.style;

break;
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34687,else__27482__auto__);

}
});

patterning.sshapes.SShape.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27493__auto__,writer__27494__auto__,opts__27495__auto__){
var self__ = this;
var this__27493__auto____$1 = this;
var pr_pair__27496__auto__ = ((function (this__27493__auto____$1){
return (function (keyval__27497__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27494__auto__,cljs.core.pr_writer,""," ","",opts__27495__auto__,keyval__27497__auto__);
});})(this__27493__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27494__auto__,pr_pair__27496__auto__,"#patterning.sshapes.SShape{",", ","}",opts__27495__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

patterning.sshapes.SShape.prototype.cljs$core$IIterable$ = true;

patterning.sshapes.SShape.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34686){
var self__ = this;
var G__34686__$1 = this;
return (new cljs.core.RecordIter((0),G__34686__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

patterning.sshapes.SShape.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27477__auto__){
var self__ = this;
var this__27477__auto____$1 = this;
return self__.__meta;
});

patterning.sshapes.SShape.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27473__auto__){
var self__ = this;
var this__27473__auto____$1 = this;
return (new patterning.sshapes.SShape(self__.style,self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

patterning.sshapes.SShape.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27483__auto__){
var self__ = this;
var this__27483__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

patterning.sshapes.SShape.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27474__auto__){
var self__ = this;
var this__27474__auto____$1 = this;
var h__27246__auto__ = self__.__hash;
if(!((h__27246__auto__ == null))){
return h__27246__auto__;
} else {
var h__27246__auto____$1 = cljs.core.hash_imap.call(null,this__27474__auto____$1);
self__.__hash = h__27246__auto____$1;

return h__27246__auto____$1;
}
});

patterning.sshapes.SShape.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27475__auto__,other__27476__auto__){
var self__ = this;
var this__27475__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26796__auto__ = other__27476__auto__;
if(cljs.core.truth_(and__26796__auto__)){
var and__26796__auto____$1 = (this__27475__auto____$1.constructor === other__27476__auto__.constructor);
if(and__26796__auto____$1){
return cljs.core.equiv_map.call(null,this__27475__auto____$1,other__27476__auto__);
} else {
return and__26796__auto____$1;
}
} else {
return and__26796__auto__;
}
})())){
return true;
} else {
return false;
}
});

patterning.sshapes.SShape.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27488__auto__,k__27489__auto__){
var self__ = this;
var this__27488__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null), null),k__27489__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27488__auto____$1),self__.__meta),k__27489__auto__);
} else {
return (new patterning.sshapes.SShape(self__.style,self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27489__auto__)),null));
}
});

patterning.sshapes.SShape.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27486__auto__,k__27487__auto__,G__34686){
var self__ = this;
var this__27486__auto____$1 = this;
var pred__34690 = cljs.core.keyword_identical_QMARK_;
var expr__34691 = k__27487__auto__;
if(cljs.core.truth_(pred__34690.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__34691))){
return (new patterning.sshapes.SShape(G__34686,self__.points,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34690.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__34691))){
return (new patterning.sshapes.SShape(self__.style,G__34686,self__.__meta,self__.__extmap,null));
} else {
return (new patterning.sshapes.SShape(self__.style,self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27487__auto__,G__34686),null));
}
}
});

patterning.sshapes.SShape.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27491__auto__){
var self__ = this;
var this__27491__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

patterning.sshapes.SShape.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27478__auto__,G__34686){
var self__ = this;
var this__27478__auto____$1 = this;
return (new patterning.sshapes.SShape(self__.style,self__.points,G__34686,self__.__extmap,self__.__hash));
});

patterning.sshapes.SShape.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27484__auto__,entry__27485__auto__){
var self__ = this;
var this__27484__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27485__auto__)){
return cljs.core._assoc.call(null,this__27484__auto____$1,cljs.core._nth.call(null,entry__27485__auto__,(0)),cljs.core._nth.call(null,entry__27485__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27484__auto____$1,entry__27485__auto__);
}
});

patterning.sshapes.SShape.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

patterning.sshapes.SShape.cljs$lang$type = true;

patterning.sshapes.SShape.cljs$lang$ctorPrSeq = (function (this__27515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"patterning.sshapes/SShape");
});

patterning.sshapes.SShape.cljs$lang$ctorPrWriter = (function (this__27515__auto__,writer__27516__auto__){
return cljs.core._write.call(null,writer__27516__auto__,"patterning.sshapes/SShape");
});

patterning.sshapes.__GT_SShape = (function patterning$sshapes$__GT_SShape(style,points){
return (new patterning.sshapes.SShape(style,points,null,null,null));
});

patterning.sshapes.map__GT_SShape = (function patterning$sshapes$map__GT_SShape(G__34688){
return (new patterning.sshapes.SShape(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__34688),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__34688),null,cljs.core.dissoc.call(null,G__34688,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});

patterning.sshapes.empty_sshape = (function patterning$sshapes$empty_sshape(){
return patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});
patterning.sshapes.add_style = (function patterning$sshapes$add_style(new_style,p__34694){
var map__34697 = p__34694;
var map__34697__$1 = ((((!((map__34697 == null)))?((((map__34697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34697):map__34697);
var style = cljs.core.get.call(null,map__34697__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34697__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),points,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.conj.call(null,style,new_style)], null);
});
/**
 * Give new color to a sshape 
 */
patterning.sshapes.set_color = (function patterning$sshapes$set_color(c,sshape){
return patterning.sshapes.add_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),c], null),sshape);
});
/**
 * Give new strokeWeight to a sshape
 */
patterning.sshapes.set_weight = (function patterning$sshapes$set_weight(weight,sshape){
return patterning.sshapes.add_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-weight","stroke-weight",-2128041534),weight], null),sshape);
});
/**
 * Give a fill-color to a sshape
 */
patterning.sshapes.set_fill = (function patterning$sshapes$set_fill(fill,sshape){
return patterning.sshapes.add_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),fill], null),sshape);
});
/**
 * Keep this sshape in the pattern but disable it from rendering
 */
patterning.sshapes.hide = (function patterning$sshapes$hide(sshape){
return patterning.sshapes.add_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),true], null),sshape);
});
/**
 * Remove the hidden label from a sshape, so it's shown
 */
patterning.sshapes.unhide = (function patterning$sshapes$unhide(sshape){
return cljs.core.dissoc.call(null,sshape,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
});
/**
 * Test if a sshape is hidden
 */
patterning.sshapes.hidden_QMARK_ = (function patterning$sshapes$hidden_QMARK_(p__34699){
var map__34702 = p__34699;
var map__34702__$1 = ((((!((map__34702 == null)))?((((map__34702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34702):map__34702);
var style = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.contains_QMARK_.call(null,style,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
});
patterning.sshapes.bez_curve = (function patterning$sshapes$bez_curve(style,points){
return patterning.sshapes.add_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bezier","bezier",-539235327),true], null),patterning.sshapes.__GT_SShape.call(null,style,points));
});
patterning.sshapes.scale = (function patterning$sshapes$scale(val,sshape){
return patterning.sshapes.__GT_SShape.call(null,cljs.core.get.call(null,sshape,new cljs.core.Keyword(null,"style","style",-496642736)),patterning.sshapes.scale_shape.call(null,val,cljs.core.get.call(null,sshape,new cljs.core.Keyword(null,"points","points",-1486596883))));
});
patterning.sshapes.translate = (function patterning$sshapes$translate(dx,dy,p__34704){
var map__34707 = p__34704;
var map__34707__$1 = ((((!((map__34707 == null)))?((((map__34707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34707):map__34707);
var style = cljs.core.get.call(null,map__34707__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34707__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return patterning.sshapes.__GT_SShape.call(null,style,patterning.sshapes.translate_shape.call(null,dx,dy,points));
});
patterning.sshapes.h_reflect = (function patterning$sshapes$h_reflect(p__34709){
var map__34712 = p__34709;
var map__34712__$1 = ((((!((map__34712 == null)))?((((map__34712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34712):map__34712);
var style = cljs.core.get.call(null,map__34712__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34712__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return patterning.sshapes.__GT_SShape.call(null,style,patterning.sshapes.h_reflect_shape.call(null,points));
});
patterning.sshapes.v_reflect = (function patterning$sshapes$v_reflect(p__34714){
var map__34717 = p__34714;
var map__34717__$1 = ((((!((map__34717 == null)))?((((map__34717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34717):map__34717);
var style = cljs.core.get.call(null,map__34717__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34717__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return patterning.sshapes.__GT_SShape.call(null,style,patterning.sshapes.v_reflect_shape.call(null,points));
});
patterning.sshapes.stretch = (function patterning$sshapes$stretch(sx,sy,sshape){
return patterning.sshapes.__GT_SShape.call(null,cljs.core.get.call(null,sshape,new cljs.core.Keyword(null,"style","style",-496642736)),patterning.sshapes.stretch_shape.call(null,sx,sy,cljs.core.get.call(null,sshape,new cljs.core.Keyword(null,"points","points",-1486596883))));
});
patterning.sshapes.rotate = (function patterning$sshapes$rotate(da,sshape){
return patterning.sshapes.__GT_SShape.call(null,cljs.core.get.call(null,sshape,new cljs.core.Keyword(null,"style","style",-496642736)),patterning.sshapes.rotate_shape.call(null,da,cljs.core.get.call(null,sshape,new cljs.core.Keyword(null,"points","points",-1486596883))));
});
patterning.sshapes.wobble = (function patterning$sshapes$wobble(noise,p__34719){
var map__34722 = p__34719;
var map__34722__$1 = ((((!((map__34722 == null)))?((((map__34722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34722):map__34722);
var style = cljs.core.get.call(null,map__34722__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34722__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return patterning.sshapes.__GT_SShape.call(null,style,patterning.sshapes.wobble_shape.call(null,noise,points));
});
patterning.sshapes.reverse_order = (function patterning$sshapes$reverse_order(p__34724){
var map__34727 = p__34724;
var map__34727__$1 = ((((!((map__34727 == null)))?((((map__34727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34727):map__34727);
var style = cljs.core.get.call(null,map__34727__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34727__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return patterning.sshapes.__GT_SShape.call(null,style,cljs.core.reverse.call(null,points));
});
patterning.sshapes.flat_point_list = (function patterning$sshapes$flat_point_list(p__34729){
var map__34732 = p__34729;
var map__34732__$1 = ((((!((map__34732 == null)))?((((map__34732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34732):map__34732);
var sshape = map__34732__$1;
var style = cljs.core.get.call(null,map__34732__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34732__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.flatten.call(null,points);
});
patterning.sshapes.xs = (function patterning$sshapes$xs(p__34734){
var map__34737 = p__34734;
var map__34737__$1 = ((((!((map__34737 == null)))?((((map__34737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34737):map__34737);
var style = cljs.core.get.call(null,map__34737__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34737__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.map.call(null,cljs.core.first,points);
});
patterning.sshapes.ys = (function patterning$sshapes$ys(p__34739){
var map__34742 = p__34739;
var map__34742__$1 = ((((!((map__34742 == null)))?((((map__34742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34742):map__34742);
var style = cljs.core.get.call(null,map__34742__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34742__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.map.call(null,cljs.core.second,points);
});
patterning.sshapes.top = (function patterning$sshapes$top(sshape){
return cljs.core.apply.call(null,cljs.core.min,patterning.sshapes.ys.call(null,sshape));
});
patterning.sshapes.bottom = (function patterning$sshapes$bottom(sshape){
return cljs.core.apply.call(null,cljs.core.max,patterning.sshapes.ys.call(null,sshape));
});
patterning.sshapes.leftmost = (function patterning$sshapes$leftmost(sshape){
return cljs.core.apply.call(null,cljs.core.min,patterning.sshapes.xs.call(null,sshape));
});
patterning.sshapes.rightmost = (function patterning$sshapes$rightmost(sshape){
return cljs.core.apply.call(null,cljs.core.max,patterning.sshapes.xs.call(null,sshape));
});
patterning.sshapes.width = (function patterning$sshapes$width(sshape){
return (patterning.sshapes.rightmost.call(null,sshape) - patterning.sshapes.leftmost.call(null,sshape));
});
patterning.sshapes.height = (function patterning$sshapes$height(sshape){
return (patterning.sshapes.bottom.call(null,sshape) - patterning.sshapes.top.call(null,sshape));
});
patterning.sshapes.ss_filter = (function patterning$sshapes$ss_filter(p_QMARK_,p__34744){
var map__34747 = p__34744;
var map__34747__$1 = ((((!((map__34747 == null)))?((((map__34747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34747):map__34747);
var style = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return patterning.sshapes.__GT_SShape.call(null,style,patterning.sshapes.filter_shape.call(null,p_QMARK_,points));
});
/**
 * more or less equal sshapes
 */
patterning.sshapes.mol_EQ_ = (function patterning$sshapes$mol_EQ_(sshape1,sshape2){
var and__26796__auto__ = cljs.core._EQ_.call(null,cljs.core.get.call(null,sshape1,new cljs.core.Keyword(null,"style","style",-496642736)),cljs.core.get.call(null,sshape2,new cljs.core.Keyword(null,"style","style",-496642736)));
if(and__26796__auto__){
return patterning.sshapes.mol_EQ_shapes.call(null,cljs.core.get.call(null,sshape1,new cljs.core.Keyword(null,"points","points",-1486596883)),cljs.core.get.call(null,sshape2,new cljs.core.Keyword(null,"points","points",-1486596883)));
} else {
return and__26796__auto__;
}
});
patterning.sshapes.triple_list = (function patterning$sshapes$triple_list(points){
return cljs.core.partition.call(null,(3),(1),cljs.core.cycle.call(null,points));
});
patterning.sshapes.triangles_list = (function patterning$sshapes$triangles_list(points){
return cljs.core.map.call(null,(function (pts3){
return cljs.core.apply.call(null,patterning.maths.triangle,cljs.core.flatten.call(null,pts3));
}),patterning.sshapes.triple_list.call(null,points));
});
patterning.sshapes.triangles_in_sshape = (function patterning$sshapes$triangles_in_sshape(p__34749){
var map__34752 = p__34749;
var map__34752__$1 = ((((!((map__34752 == null)))?((((map__34752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34752):map__34752);
var style = cljs.core.get.call(null,map__34752__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34752__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return patterning.sshapes.triangles_list.call(null,points);
});
patterning.sshapes.is_ear = (function patterning$sshapes$is_ear(p__34754,t){
var map__34757 = p__34754;
var map__34757__$1 = ((((!((map__34757 == null)))?((((map__34757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34757):map__34757);
var style = cljs.core.get.call(null,map__34757__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34757__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpts = patterning.maths.triangle_points.call(null,t);
var not_in_tri_QMARK_ = ((function (tpts,map__34757,map__34757__$1,style,points){
return (function (p){
return cljs.core.not.call(null,patterning.maths.point_in_list.call(null,p,tpts));
});})(tpts,map__34757,map__34757__$1,style,points))
;
var other = cljs.core.filter.call(null,not_in_tri_QMARK_,points);
return cljs.core.not_any_QMARK_.call(null,cljs.core.partial.call(null,patterning.maths.contains_point,t),other);
});
patterning.sshapes.to_triangles = (function patterning$sshapes$to_triangles(p__34759){
var map__34762 = p__34759;
var map__34762__$1 = ((((!((map__34762 == null)))?((((map__34762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34762):map__34762);
var original_shape = map__34762__$1;
var style = cljs.core.get.call(null,map__34762__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34762__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var shape = original_shape;
var saved_ears = cljs.core.PersistentVector.EMPTY;
while(true){
var pts = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape);
var count_pts = cljs.core.count.call(null,pts);
var tl = cljs.core.take.call(null,count_pts,patterning.sshapes.triangles_list.call(null,pts));
var ears = cljs.core.filter.call(null,cljs.core.partial.call(null,patterning.sshapes.is_ear,shape),tl);
var no_ears = cljs.core.count.call(null,ears);
if((no_ears < (1))){
return saved_ears;
} else {
var ear = cljs.core.first.call(null,ears);
var new_list = cljs.core.remove.call(null,((function (shape,saved_ears,ear,pts,count_pts,tl,ears,no_ears,map__34762,map__34762__$1,original_shape,style,points){
return (function (p){
return patterning.maths.molp_EQ_.call(null,p,new cljs.core.Keyword(null,"B","B",-1422503380).cljs$core$IFn$_invoke$arity$1(ear));
});})(shape,saved_ears,ear,pts,count_pts,tl,ears,no_ears,map__34762,map__34762__$1,original_shape,style,points))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape));
if((cljs.core.count.call(null,new_list) < (3))){
return saved_ears;
} else {
var G__34764 = patterning.sshapes.__GT_SShape.call(null,style,new_list);
var G__34765 = cljs.core.conj.call(null,saved_ears,ear);
shape = G__34764;
saved_ears = G__34765;
continue;
}
}
break;
}
});

//# sourceMappingURL=sshapes.js.map?rel=1537985795101