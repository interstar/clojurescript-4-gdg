// Compiled by ClojureScript 1.9.229 {}
goog.provide('patterning.view');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('patterning.maths');
goog.require('patterning.strings');
goog.require('patterning.sshapes');
goog.require('patterning.groups');
goog.require('patterning.color');
/**
 * first argument is viewport (left, top, right, bottom), second is window (left, top, right, bottom)
 * returns a mapping function from viewport to window
 */
patterning.view.make_txpt = (function patterning$view$make_txpt(p__34836,p__34837){
var vec__34848 = p__34836;
var vx1 = cljs.core.nth.call(null,vec__34848,(0),null);
var vy1 = cljs.core.nth.call(null,vec__34848,(1),null);
var vx2 = cljs.core.nth.call(null,vec__34848,(2),null);
var vy2 = cljs.core.nth.call(null,vec__34848,(3),null);
var vec__34851 = p__34837;
var wx1 = cljs.core.nth.call(null,vec__34851,(0),null);
var wy1 = cljs.core.nth.call(null,vec__34851,(1),null);
var wx2 = cljs.core.nth.call(null,vec__34851,(2),null);
var wy2 = cljs.core.nth.call(null,vec__34851,(3),null);
return ((function (vec__34848,vx1,vy1,vx2,vy2,vec__34851,wx1,wy1,wx2,wy2){
return (function (p__34854){
var vec__34855 = p__34854;
var x = cljs.core.nth.call(null,vec__34855,(0),null);
var y = cljs.core.nth.call(null,vec__34855,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patterning.maths.tx.call(null,vx1,vx2,wx1,wx2,x),patterning.maths.tx.call(null,vy1,vy2,wy1,wy2,y)], null);
});
;})(vec__34848,vx1,vy1,vx2,vy2,vec__34851,wx1,wy1,wx2,wy2))
});
patterning.view.project_points = (function patterning$view$project_points(var_args){
var args34858 = [];
var len__27992__auto___34861 = arguments.length;
var i__27993__auto___34862 = (0);
while(true){
if((i__27993__auto___34862 < len__27992__auto___34861)){
args34858.push((arguments[i__27993__auto___34862]));

var G__34863 = (i__27993__auto___34862 + (1));
i__27993__auto___34862 = G__34863;
continue;
} else {
}
break;
}

var G__34860 = args34858.length;
switch (G__34860) {
case 2:
return patterning.view.project_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return patterning.view.project_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34858.length)].join('')));

}
});

patterning.view.project_points.cljs$core$IFn$_invoke$arity$2 = (function (txpt,points){
return cljs.core.map.call(null,txpt,points);
});

patterning.view.project_points.cljs$core$IFn$_invoke$arity$3 = (function (viewport,window,points){
return cljs.core.map.call(null,patterning.view.make_txpt.call(null,viewport,window),points);
});

patterning.view.project_points.cljs$lang$maxFixedArity = 3;

patterning.view.transformed_sshape = (function patterning$view$transformed_sshape(txpt,p__34865){
var map__34868 = p__34865;
var map__34868__$1 = ((((!((map__34868 == null)))?((((map__34868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34868):map__34868);
var style = cljs.core.get.call(null,map__34868__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34868__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"points","points",-1486596883),patterning.view.project_points.call(null,txpt,points)], null);
});
patterning.view.sshape_to_SVG_path = (function patterning$view$sshape_to_SVG_path(txpt,sshape){
var linify = (function (p__34881){
var vec__34882 = p__34881;
var x = cljs.core.nth.call(null,vec__34882,(0),null);
var y = cljs.core.nth.call(null,vec__34882,(1),null);
return [cljs.core.str(" L "),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y)].join('');
});
var bezify = ((function (linify){
return (function (p__34885){
var vec__34886 = p__34885;
var x = cljs.core.nth.call(null,vec__34886,(0),null);
var y = cljs.core.nth.call(null,vec__34886,(1),null);
return [cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str(" ")].join('');
});})(linify))
;
var map__34880 = patterning.view.transformed_sshape.call(null,txpt,sshape);
var map__34880__$1 = ((((!((map__34880 == null)))?((((map__34880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34880):map__34880);
var tss = map__34880__$1;
var style = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.first.call(null,points);
var s1 = [cljs.core.str("M "),cljs.core.str(cljs.core.first.call(null,p)),cljs.core.str(" "),cljs.core.str(cljs.core.last.call(null,p))].join('');
var strung = ((cljs.core.contains_QMARK_.call(null,style,new cljs.core.Keyword(null,"bezier","bezier",-539235327)))?cljs.core.cons.call(null,s1,cljs.core.cons.call(null,"C",cljs.core.mapcat.call(null,bezify,cljs.core.rest.call(null,points)))):cljs.core.cons.call(null,s1,cljs.core.mapcat.call(null,linify,cljs.core.rest.call(null,points))));
var stroke = ((cljs.core.contains_QMARK_.call(null,style,new cljs.core.Keyword(null,"stroke","stroke",1741823555)))?patterning.color.stroke_gen.call(null,cljs.core.get.call(null,style,new cljs.core.Keyword(null,"stroke","stroke",1741823555))):patterning.color.stroke_gen.call(null,patterning.color.p_color.call(null,(0))));
var stroke_width = ((cljs.core.contains_QMARK_.call(null,style,new cljs.core.Keyword(null,"stroke-weight","stroke-weight",-2128041534)))?patterning.strings.gen_format.call(null,"stroke-width='%spx'",new cljs.core.Keyword(null,"stroke-weight","stroke-weight",-2128041534).cljs$core$IFn$_invoke$arity$1(style)):"");
var fill = [cljs.core.str(((cljs.core.contains_QMARK_.call(null,style,new cljs.core.Keyword(null,"fill","fill",883462889)))?patterning.color.fill_gen.call(null,cljs.core.get.call(null,style,new cljs.core.Keyword(null,"fill","fill",883462889))):"fill='none' "))].join('');
return [cljs.core.str(patterning.strings.gen_format.call(null,"\n<path style='-webkit-tap-highlight-color: rgba(0, 0, 0, 0);' %s %s %s ",stroke_width,stroke,fill)),cljs.core.str(" d='"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,strung)),cljs.core.str("'></path>")].join('');
});
patterning.view.inner_xml_tpl = (function patterning$view$inner_xml_tpl(txpt,width,height,group){
return clojure.string.join.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,cljs.core.partial.call(null,patterning.view.sshape_to_SVG_path,txpt),group)));
});
/**
 * svg 'template' which also flips the coordinate system via http://www.braveclojure.com/organization/
 */
patterning.view.xml_tpl = (function patterning$view$xml_tpl(txpt,width,height,group){
return [cljs.core.str("<svg height=\""),cljs.core.str(height),cljs.core.str("\" width=\""),cljs.core.str(width),cljs.core.str("\">"),cljs.core.str(patterning.view.inner_xml_tpl.call(null,txpt,width,height,group)),cljs.core.str("</svg>")].join('');
});
patterning.view.make_svg = (function patterning$view$make_svg(var_args){
var args34890 = [];
var len__27992__auto___34893 = arguments.length;
var i__27993__auto___34894 = (0);
while(true){
if((i__27993__auto___34894 < len__27992__auto___34893)){
args34890.push((arguments[i__27993__auto___34894]));

var G__34895 = (i__27993__auto___34894 + (1));
i__27993__auto___34894 = G__34895;
continue;
} else {
}
break;
}

var G__34892 = args34890.length;
switch (G__34892) {
case 5:
return patterning.view.make_svg.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 3:
return patterning.view.make_svg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34890.length)].join('')));

}
});

patterning.view.make_svg.cljs$core$IFn$_invoke$arity$5 = (function (viewport,window,width,height,group){
var txpt = patterning.view.make_txpt.call(null,viewport,window);
return patterning.view.xml_tpl.call(null,txpt,width,height,group);
});

patterning.view.make_svg.cljs$core$IFn$_invoke$arity$3 = (function (width,height,group){
return patterning.view.make_svg.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(1),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null),width,height,group);
});

patterning.view.make_svg.cljs$lang$maxFixedArity = 5;


//# sourceMappingURL=view.js.map?rel=1537985795412