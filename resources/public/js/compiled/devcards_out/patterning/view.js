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
patterning.view.make_txpt = (function patterning$view$make_txpt(p__34979,p__34980){
var vec__34991 = p__34979;
var vx1 = cljs.core.nth.call(null,vec__34991,(0),null);
var vy1 = cljs.core.nth.call(null,vec__34991,(1),null);
var vx2 = cljs.core.nth.call(null,vec__34991,(2),null);
var vy2 = cljs.core.nth.call(null,vec__34991,(3),null);
var vec__34994 = p__34980;
var wx1 = cljs.core.nth.call(null,vec__34994,(0),null);
var wy1 = cljs.core.nth.call(null,vec__34994,(1),null);
var wx2 = cljs.core.nth.call(null,vec__34994,(2),null);
var wy2 = cljs.core.nth.call(null,vec__34994,(3),null);
return ((function (vec__34991,vx1,vy1,vx2,vy2,vec__34994,wx1,wy1,wx2,wy2){
return (function (p__34997){
var vec__34998 = p__34997;
var x = cljs.core.nth.call(null,vec__34998,(0),null);
var y = cljs.core.nth.call(null,vec__34998,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patterning.maths.tx.call(null,vx1,vx2,wx1,wx2,x),patterning.maths.tx.call(null,vy1,vy2,wy1,wy2,y)], null);
});
;})(vec__34991,vx1,vy1,vx2,vy2,vec__34994,wx1,wy1,wx2,wy2))
});
patterning.view.project_points = (function patterning$view$project_points(var_args){
var args35001 = [];
var len__27991__auto___35004 = arguments.length;
var i__27992__auto___35005 = (0);
while(true){
if((i__27992__auto___35005 < len__27991__auto___35004)){
args35001.push((arguments[i__27992__auto___35005]));

var G__35006 = (i__27992__auto___35005 + (1));
i__27992__auto___35005 = G__35006;
continue;
} else {
}
break;
}

var G__35003 = args35001.length;
switch (G__35003) {
case 2:
return patterning.view.project_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return patterning.view.project_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35001.length)].join('')));

}
});

patterning.view.project_points.cljs$core$IFn$_invoke$arity$2 = (function (txpt,points){
return cljs.core.map.call(null,txpt,points);
});

patterning.view.project_points.cljs$core$IFn$_invoke$arity$3 = (function (viewport,window,points){
return cljs.core.map.call(null,patterning.view.make_txpt.call(null,viewport,window),points);
});

patterning.view.project_points.cljs$lang$maxFixedArity = 3;

patterning.view.transformed_sshape = (function patterning$view$transformed_sshape(txpt,p__35008){
var map__35011 = p__35008;
var map__35011__$1 = ((((!((map__35011 == null)))?((((map__35011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35011):map__35011);
var style = cljs.core.get.call(null,map__35011__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__35011__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"points","points",-1486596883),patterning.view.project_points.call(null,txpt,points)], null);
});
patterning.view.sshape_to_SVG_path = (function patterning$view$sshape_to_SVG_path(txpt,sshape){
var linify = (function (p__35024){
var vec__35025 = p__35024;
var x = cljs.core.nth.call(null,vec__35025,(0),null);
var y = cljs.core.nth.call(null,vec__35025,(1),null);
return [cljs.core.str(" L "),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y)].join('');
});
var bezify = ((function (linify){
return (function (p__35028){
var vec__35029 = p__35028;
var x = cljs.core.nth.call(null,vec__35029,(0),null);
var y = cljs.core.nth.call(null,vec__35029,(1),null);
return [cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str(" ")].join('');
});})(linify))
;
var map__35023 = patterning.view.transformed_sshape.call(null,txpt,sshape);
var map__35023__$1 = ((((!((map__35023 == null)))?((((map__35023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35023):map__35023);
var tss = map__35023__$1;
var style = cljs.core.get.call(null,map__35023__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var points = cljs.core.get.call(null,map__35023__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
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
var args35033 = [];
var len__27991__auto___35036 = arguments.length;
var i__27992__auto___35037 = (0);
while(true){
if((i__27992__auto___35037 < len__27991__auto___35036)){
args35033.push((arguments[i__27992__auto___35037]));

var G__35038 = (i__27992__auto___35037 + (1));
i__27992__auto___35037 = G__35038;
continue;
} else {
}
break;
}

var G__35035 = args35033.length;
switch (G__35035) {
case 5:
return patterning.view.make_svg.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 3:
return patterning.view.make_svg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35033.length)].join('')));

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


//# sourceMappingURL=view.js.map?rel=1538029292652