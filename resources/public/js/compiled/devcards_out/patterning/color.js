// Compiled by ClojureScript 1.9.229 {}
goog.provide('patterning.color');
goog.require('cljs.core');
goog.require('patterning.strings');
goog.require('patterning.maths');
patterning.color.p_color = (function patterning$color$p_color(var_args){
var args34962 = [];
var len__27991__auto___34965 = arguments.length;
var i__27992__auto___34966 = (0);
while(true){
if((i__27992__auto___34966 < len__27991__auto___34965)){
args34962.push((arguments[i__27992__auto___34966]));

var G__34967 = (i__27992__auto___34966 + (1));
i__27992__auto___34966 = G__34967;
continue;
} else {
}
break;
}

var G__34964 = args34962.length;
switch (G__34964) {
case 4:
return patterning.color.p_color.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return patterning.color.p_color.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return patterning.color.p_color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34962.length)].join('')));

}
});

patterning.color.p_color.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null);
});

patterning.color.p_color.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return patterning.color.p_color.call(null,r,g,b,(255));
});

patterning.color.p_color.cljs$core$IFn$_invoke$arity$1 = (function (x){
return patterning.color.p_color.call(null,x,x,x,(255));
});

patterning.color.p_color.cljs$lang$maxFixedArity = 4;

/**
 * handy for creating sequences of color changes
 */
patterning.color.color_seq = (function patterning$color$color_seq(colors){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),c], null);
}),colors));
});
patterning.color.lightened_color = (function patterning$color$lightened_color(c){
var light = (function (c__$1){
return (1.2 * c__$1);
});
return patterning.color.p_color.call(null,light.call(null,cljs.core.get.call(null,c,(0))),light.call(null,cljs.core.get.call(null,c,(1))),light.call(null,cljs.core.get.call(null,c,(2))),cljs.core.get.call(null,c,(3)));
});
patterning.color.color_to_fill = (function patterning$color$color_to_fill(style){
return cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"stroke","stroke",1741823555))], null),style);
});
patterning.color.lighten = (function patterning$color$lighten(style){
return cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),patterning.color.lightened_color.call(null,cljs.core.get.call(null,style,new cljs.core.Keyword(null,"stroke","stroke",1741823555)))], null),style);
});
patterning.color.mod_styles = (function patterning$color$mod_styles(f,styles){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,styles));
});
patterning.color.edge_col = (function patterning$color$edge_col(c){
return cljs.core.comp.call(null,(function (p1__34969_SHARP_){
return cljs.core.conj.call(null,p1__34969_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),c], null));
}),patterning.color.color_to_fill);
});
patterning.color.setup_colors = (function patterning$color$setup_colors(colors,c){
return cljs.core.map.call(null,patterning.color.edge_col.call(null,c),patterning.color.color_seq.call(null,colors));
});
patterning.color.remove_transparency = (function patterning$color$remove_transparency(c){
return cljs.core.conj.call(null,cljs.core.take.call(null,(3),c),(255));
});
patterning.color.rand_col = (function patterning$color$rand_col(){
return patterning.color.p_color.call(null,cljs.core.rand_int.call(null,(255)),cljs.core.rand_int.call(null,(255)),cljs.core.rand_int.call(null,(255)));
});
patterning.color.darker_color = (function patterning$color$darker_color(c){
return cljs.core.apply.call(null,patterning.color.p_color,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.7),c));
});
patterning.color.transparent_gen = (function patterning$color$transparent_gen(name,p__34970){
var vec__34974 = p__34970;
var r = cljs.core.nth.call(null,vec__34974,(0),null);
var g = cljs.core.nth.call(null,vec__34974,(1),null);
var b = cljs.core.nth.call(null,vec__34974,(2),null);
var a = cljs.core.nth.call(null,vec__34974,(3),null);
var tx = ((function (vec__34974,r,g,b,a){
return (function (x){
return patterning.maths.tx.call(null,(0),(255),(0),(1),x);
});})(vec__34974,r,g,b,a))
;
if(cljs.core._EQ_.call(null,a,(255))){
return patterning.strings.gen_format.call(null,"%s='rgb(%s,%s,%s)'",name,(r | (0)),(g | (0)),(b | (0)));
} else {
return patterning.strings.gen_format.call(null,"%s='rgb(%s,%s,%s)' %s-opacity='%.2f' ",name,(r | (0)),(g | (0)),(b | (0)),name,tx.call(null,a));
}
});
patterning.color.stroke_gen = (function patterning$color$stroke_gen(c){
return patterning.color.transparent_gen.call(null,"stroke",c);
});
patterning.color.fill_gen = (function patterning$color$fill_gen(c){
return patterning.color.transparent_gen.call(null,"fill",c);
});

//# sourceMappingURL=color.js.map?rel=1538029292500