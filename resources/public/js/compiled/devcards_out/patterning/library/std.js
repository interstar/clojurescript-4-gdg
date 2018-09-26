// Compiled by ClojureScript 1.9.229 {}
goog.provide('patterning.library.std');
goog.require('cljs.core');
goog.require('patterning.maths');
goog.require('patterning.sshapes');
goog.require('patterning.groups');
goog.require('patterning.layouts');
goog.require('patterning.macros');
patterning.library.std.rect = (function() {
var patterning$library$std$rect = null;
var patterning$library$std$rect__4 = (function (x,y,w,h){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var x2 = (x + w);
var y2 = (y + h);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
})()));
});
var patterning$library$std$rect__5 = (function (x,y,w,h,style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,(function (){var x2 = (x + w);
var y2 = (y + h);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
})()));
});
patterning$library$std$rect = function(x,y,w,h,style){
switch(arguments.length){
case 4:
return patterning$library$std$rect__4.call(this,x,y,w,h);
case 5:
return patterning$library$std$rect__5.call(this,x,y,w,h,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$rect.cljs$core$IFn$_invoke$arity$4 = patterning$library$std$rect__4;
patterning$library$std$rect.cljs$core$IFn$_invoke$arity$5 = patterning$library$std$rect__5;
return patterning$library$std$rect;
})()
;
patterning.library.std.square = (function() {
var patterning$library$std$square = null;
var patterning$library$std$square__0 = (function (){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null)], null)));
});
var patterning$library$std$square__1 = (function (style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null)], null)));
});
patterning$library$std$square = function(style){
switch(arguments.length){
case 0:
return patterning$library$std$square__0.call(this);
case 1:
return patterning$library$std$square__1.call(this,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$square.cljs$core$IFn$_invoke$arity$0 = patterning$library$std$square__0;
patterning$library$std$square.cljs$core$IFn$_invoke$arity$1 = patterning$library$std$square__1;
return patterning$library$std$square;
})()
;
patterning.library.std.poly = (function() {
var patterning$library$std$poly = null;
var patterning$library$std$poly__4 = (function (cx,cy,radius,no_sides){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var make_point = (function (a){
return patterning.maths.add_points.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),patterning.maths.pol_to_rec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [radius,a], null)));
});
return patterning.sshapes.close_shape.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,make_point,patterning.maths.clock_angles.call(null,no_sides))));
})()));
});
var patterning$library$std$poly__5 = (function (cx,cy,radius,no_sides,style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,(function (){var make_point = (function (a){
return patterning.maths.add_points.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),patterning.maths.pol_to_rec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [radius,a], null)));
});
return patterning.sshapes.close_shape.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,make_point,patterning.maths.clock_angles.call(null,no_sides))));
})()));
});
patterning$library$std$poly = function(cx,cy,radius,no_sides,style){
switch(arguments.length){
case 4:
return patterning$library$std$poly__4.call(this,cx,cy,radius,no_sides);
case 5:
return patterning$library$std$poly__5.call(this,cx,cy,radius,no_sides,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$poly.cljs$core$IFn$_invoke$arity$4 = patterning$library$std$poly__4;
patterning$library$std$poly.cljs$core$IFn$_invoke$arity$5 = patterning$library$std$poly__5;
return patterning$library$std$poly;
})()
;
patterning.library.std.star = (function() {
var patterning$library$std$star = null;
var patterning$library$std$star__4 = (function (cx,cy,rads,n){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,patterning.sshapes.close_shape.call(null,patterning.sshapes.translate_shape.call(null,cx,cy,cljs.core.map.call(null,patterning.maths.pol_to_rec,cljs.core.map.call(null,cljs.core.vector,cljs.core.cycle.call(null,rads),patterning.maths.clock_angles.call(null,n)))))));
});
var patterning$library$std$star__5 = (function (cx,cy,rads,n,style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,patterning.sshapes.close_shape.call(null,patterning.sshapes.translate_shape.call(null,cx,cy,cljs.core.map.call(null,patterning.maths.pol_to_rec,cljs.core.map.call(null,cljs.core.vector,cljs.core.cycle.call(null,rads),patterning.maths.clock_angles.call(null,n)))))));
});
patterning$library$std$star = function(cx,cy,rads,n,style){
switch(arguments.length){
case 4:
return patterning$library$std$star__4.call(this,cx,cy,rads,n);
case 5:
return patterning$library$std$star__5.call(this,cx,cy,rads,n,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$star.cljs$core$IFn$_invoke$arity$4 = patterning$library$std$star__4;
patterning$library$std$star.cljs$core$IFn$_invoke$arity$5 = patterning$library$std$star__5;
return patterning$library$std$star;
})()
;
patterning.library.std.nangle = (function() {
var patterning$library$std$nangle = null;
var patterning$library$std$nangle__4 = (function (cx,cy,rad,n){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var dropped = patterning.maths.take_every.call(null,((n / (2)) | (0)),cljs.core.cycle.call(null,patterning.maths.clock_points.call(null,n,rad)));
var finite = patterning.maths.map_until_repeat.call(null,((function (dropped){
return (function (x){
return x;
});})(dropped))
,patterning.maths.molp_EQ_,dropped);
return patterning.sshapes.close_shape.call(null,patterning.sshapes.translate_shape.call(null,cx,cy,finite));
})()));
});
var patterning$library$std$nangle__5 = (function (cx,cy,rad,n,style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,(function (){var dropped = patterning.maths.take_every.call(null,((n / (2)) | (0)),cljs.core.cycle.call(null,patterning.maths.clock_points.call(null,n,rad)));
var finite = patterning.maths.map_until_repeat.call(null,((function (dropped){
return (function (x){
return x;
});})(dropped))
,patterning.maths.molp_EQ_,dropped);
return patterning.sshapes.close_shape.call(null,patterning.sshapes.translate_shape.call(null,cx,cy,finite));
})()));
});
patterning$library$std$nangle = function(cx,cy,rad,n,style){
switch(arguments.length){
case 4:
return patterning$library$std$nangle__4.call(this,cx,cy,rad,n);
case 5:
return patterning$library$std$nangle__5.call(this,cx,cy,rad,n,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$nangle.cljs$core$IFn$_invoke$arity$4 = patterning$library$std$nangle__4;
patterning$library$std$nangle.cljs$core$IFn$_invoke$arity$5 = patterning$library$std$nangle__5;
return patterning$library$std$nangle;
})()
;
patterning.library.std.random_rect = (function patterning$library$std$random_rect(style){
var rr = (function (l){
return cljs.core.rand.call(null,l);
});
var m1 = ((function (rr){
return (function (x){
return (x - (1));
});})(rr))
;
return patterning.library.std.rect.call(null,m1.call(null,rr.call(null,(1))),m1.call(null,rr.call(null,(1))),rr.call(null,(1)),rr.call(null,(1)),style);
});
patterning.library.std.horizontal_line = (function() {
var patterning$library$std$horizontal_line = null;
var patterning$library$std$horizontal_line__1 = (function (y){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),y], null)], null)));
});
var patterning$library$std$horizontal_line__2 = (function (y,style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),y], null)], null)));
});
patterning$library$std$horizontal_line = function(y,style){
switch(arguments.length){
case 1:
return patterning$library$std$horizontal_line__1.call(this,y);
case 2:
return patterning$library$std$horizontal_line__2.call(this,y,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$horizontal_line.cljs$core$IFn$_invoke$arity$1 = patterning$library$std$horizontal_line__1;
patterning$library$std$horizontal_line.cljs$core$IFn$_invoke$arity$2 = patterning$library$std$horizontal_line__2;
return patterning$library$std$horizontal_line;
})()
;
patterning.library.std.vertical_line = (function() {
var patterning$library$std$vertical_line = null;
var patterning$library$std$vertical_line__1 = (function (x){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(1)], null)], null)));
});
var patterning$library$std$vertical_line__2 = (function (x,style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(1)], null)], null)));
});
patterning$library$std$vertical_line = function(x,style){
switch(arguments.length){
case 1:
return patterning$library$std$vertical_line__1.call(this,x);
case 2:
return patterning$library$std$vertical_line__2.call(this,x,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$vertical_line.cljs$core$IFn$_invoke$arity$1 = patterning$library$std$vertical_line__1;
patterning$library$std$vertical_line.cljs$core$IFn$_invoke$arity$2 = patterning$library$std$vertical_line__2;
return patterning$library$std$vertical_line;
})()
;
patterning.library.std.rand_angle = (function patterning$library$std$rand_angle(seed){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,seed,patterning$library$std$rand_angle.call(null,((seed + (- cljs.core.rand.call(null,(patterning.maths.PI / (2))))) + (patterning.maths.PI / (4)))));
}),null,null));
});
patterning.library.std.drunk_line = (function() {
var patterning$library$std$drunk_line = null;
var patterning$library$std$drunk_line__2 = (function (steps,stepsize){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var offs = cljs.core.map.call(null,(function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepsize,a], null);
}),cljs.core.take.call(null,steps,patterning.library.std.rand_angle.call(null,(0))));
var pps = offs;
var current = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,pps)){
return acc;
} else {
var p = patterning.maths.add_points.call(null,current,patterning.maths.pol_to_rec.call(null,cljs.core.first.call(null,pps)));
var G__40633 = cljs.core.rest.call(null,pps);
var G__40634 = p;
var G__40635 = cljs.core.conj.call(null,acc,p);
pps = G__40633;
current = G__40634;
acc = G__40635;
continue;
}
break;
}
})()));
});
var patterning$library$std$drunk_line__3 = (function (steps,stepsize,style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,(function (){var offs = cljs.core.map.call(null,(function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepsize,a], null);
}),cljs.core.take.call(null,steps,patterning.library.std.rand_angle.call(null,(0))));
var pps = offs;
var current = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,pps)){
return acc;
} else {
var p = patterning.maths.add_points.call(null,current,patterning.maths.pol_to_rec.call(null,cljs.core.first.call(null,pps)));
var G__40636 = cljs.core.rest.call(null,pps);
var G__40637 = p;
var G__40638 = cljs.core.conj.call(null,acc,p);
pps = G__40636;
current = G__40637;
acc = G__40638;
continue;
}
break;
}
})()));
});
patterning$library$std$drunk_line = function(steps,stepsize,style){
switch(arguments.length){
case 2:
return patterning$library$std$drunk_line__2.call(this,steps,stepsize);
case 3:
return patterning$library$std$drunk_line__3.call(this,steps,stepsize,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$drunk_line.cljs$core$IFn$_invoke$arity$2 = patterning$library$std$drunk_line__2;
patterning$library$std$drunk_line.cljs$core$IFn$_invoke$arity$3 = patterning$library$std$drunk_line__3;
return patterning$library$std$drunk_line;
})()
;
patterning.library.std.h_sin = (function() {
var patterning$library$std$h_sin = null;
var patterning$library$std$h_sin__0 = (function (){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,patterning.maths.sin.call(null,(patterning.maths.PI * a))], null);
}),cljs.core.range.call(null,(- (1)),(1),0.05)))));
});
var patterning$library$std$h_sin__1 = (function (style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,patterning.maths.sin.call(null,(patterning.maths.PI * a))], null);
}),cljs.core.range.call(null,(- (1)),(1),0.05)))));
});
patterning$library$std$h_sin = function(style){
switch(arguments.length){
case 0:
return patterning$library$std$h_sin__0.call(this);
case 1:
return patterning$library$std$h_sin__1.call(this,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$h_sin.cljs$core$IFn$_invoke$arity$0 = patterning$library$std$h_sin__0;
patterning$library$std$h_sin.cljs$core$IFn$_invoke$arity$1 = patterning$library$std$h_sin__1;
return patterning$library$std$h_sin;
})()
;
patterning.library.std.diamond = (function() {
var patterning$library$std$diamond = null;
var patterning$library$std$diamond__0 = (function (){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,patterning.sshapes.close_shape.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null))));
});
var patterning$library$std$diamond__1 = (function (style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,patterning.sshapes.close_shape.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null))));
});
patterning$library$std$diamond = function(style){
switch(arguments.length){
case 0:
return patterning$library$std$diamond__0.call(this);
case 1:
return patterning$library$std$diamond__1.call(this,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$diamond.cljs$core$IFn$_invoke$arity$0 = patterning$library$std$diamond__0;
patterning$library$std$diamond.cljs$core$IFn$_invoke$arity$1 = patterning$library$std$diamond__1;
return patterning$library$std$diamond;
})()
;
patterning.library.std.quarter_ogee = (function() {
var patterning$library$std$quarter_ogee = null;
var patterning$library$std$quarter_ogee__2 = (function (resolution,stretch){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var ogee = (function (x){
return (x / patterning.maths.sqrt.call(null,((1) + (x * x))));
});
var points = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (ogee){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,ogee.call(null,(stretch * x))], null);
});})(ogee))
,cljs.core.range.call(null,(- (1)),1.0001,resolution)));
return patterning.sshapes.rotate_shape.call(null,(patterning.maths.PI / (2)),points);
})()));
});
var patterning$library$std$quarter_ogee__3 = (function (resolution,stretch,style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,(function (){var ogee = (function (x){
return (x / patterning.maths.sqrt.call(null,((1) + (x * x))));
});
var points = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (ogee){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,ogee.call(null,(stretch * x))], null);
});})(ogee))
,cljs.core.range.call(null,(- (1)),1.0001,resolution)));
return patterning.sshapes.rotate_shape.call(null,(patterning.maths.PI / (2)),points);
})()));
});
patterning$library$std$quarter_ogee = function(resolution,stretch,style){
switch(arguments.length){
case 2:
return patterning$library$std$quarter_ogee__2.call(this,resolution,stretch);
case 3:
return patterning$library$std$quarter_ogee__3.call(this,resolution,stretch,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$quarter_ogee.cljs$core$IFn$_invoke$arity$2 = patterning$library$std$quarter_ogee__2;
patterning$library$std$quarter_ogee.cljs$core$IFn$_invoke$arity$3 = patterning$library$std$quarter_ogee__3;
return patterning$library$std$quarter_ogee;
})()
;
patterning.library.std.spiral_points = (function patterning$library$std$spiral_points(a,da,r,dr){
return cljs.core.map.call(null,patterning.maths.pol_to_rec,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,da),a),cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,dr),r)));
});
patterning.library.std.spiral = (function() {
var patterning$library$std$spiral = null;
var patterning$library$std$spiral__5 = (function (n,a,da,r,dr){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.call(null,n,patterning.library.std.spiral_points.call(null,a,da,r,dr))));
});
var patterning$library$std$spiral__6 = (function (n,a,da,r,dr,style){
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,cljs.core.take.call(null,n,patterning.library.std.spiral_points.call(null,a,da,r,dr))));
});
patterning$library$std$spiral = function(n,a,da,r,dr,style){
switch(arguments.length){
case 5:
return patterning$library$std$spiral__5.call(this,n,a,da,r,dr);
case 6:
return patterning$library$std$spiral__6.call(this,n,a,da,r,dr,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patterning$library$std$spiral.cljs$core$IFn$_invoke$arity$5 = patterning$library$std$spiral__5;
patterning$library$std$spiral.cljs$core$IFn$_invoke$arity$6 = patterning$library$std$spiral__6;
return patterning$library$std$spiral;
})()
;
/**
 * A cross, can only be made as a group (because sshapes are continuous lines) which is why we only define it now
 */
patterning.library.std.cross = (function patterning$library$std$cross(color,x,y){
return patterning.layouts.stack.call(null,patterning.library.std.horizontal_line.call(null,y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color], null)),patterning.library.std.vertical_line.call(null,x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color], null)));
});
/**
 * An ogee shape
 */
patterning.library.std.ogee = (function patterning$library$std$ogee(resolution,stretch,style){
var o_group = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,patterning.layouts.four_mirror.call(null,patterning.library.std.quarter_ogee.call(null,resolution,stretch,style)));
var o0 = cljs.core.get.call(null,cljs.core.get.call(null,o_group,(0)),new cljs.core.Keyword(null,"points","points",-1486596883));
var o1 = cljs.core.get.call(null,cljs.core.get.call(null,o_group,(1)),new cljs.core.Keyword(null,"points","points",-1486596883));
var o2 = cljs.core.get.call(null,cljs.core.get.call(null,o_group,(2)),new cljs.core.Keyword(null,"points","points",-1486596883));
var o3 = cljs.core.get.call(null,cljs.core.get.call(null,o_group,(3)),new cljs.core.Keyword(null,"points","points",-1486596883));
var top = patterning.sshapes.tie_together.call(null,o0,o1);
var bottom = patterning.sshapes.tie_together.call(null,o2,o3);
return patterning.groups.group.call(null,patterning.sshapes.__GT_SShape.call(null,style,patterning.sshapes.tie_together.call(null,top,bottom)));
});
patterning.library.std.bez_curve = (function patterning$library$std$bez_curve(var_args){
var args40639 = [];
var len__27992__auto___40642 = arguments.length;
var i__27993__auto___40643 = (0);
while(true){
if((i__27993__auto___40643 < len__27992__auto___40642)){
args40639.push((arguments[i__27993__auto___40643]));

var G__40644 = (i__27993__auto___40643 + (1));
i__27993__auto___40643 = G__40644;
continue;
} else {
}
break;
}

var G__40641 = args40639.length;
switch (G__40641) {
case 2:
return patterning.library.std.bez_curve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return patterning.library.std.bez_curve.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40639.length)].join('')));

}
});

patterning.library.std.bez_curve.cljs$core$IFn$_invoke$arity$2 = (function (points,style){
return patterning.groups.group.call(null,patterning.sshapes.bez_curve.call(null,style,points));
});

patterning.library.std.bez_curve.cljs$core$IFn$_invoke$arity$1 = (function (points){
return patterning.library.std.bez_curve.call(null,points,cljs.core.PersistentArrayMap.EMPTY);
});

patterning.library.std.bez_curve.cljs$lang$maxFixedArity = 2;

patterning.library.std.background = (function patterning$library$std$background(color,pattern){
return patterning.layouts.stack.call(null,patterning.library.std.square.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),color], null)),pattern);
});

//# sourceMappingURL=std.js.map?rel=1537985801896