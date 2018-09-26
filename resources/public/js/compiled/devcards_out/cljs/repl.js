// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39580){
var map__39605 = p__39580;
var map__39605__$1 = ((((!((map__39605 == null)))?((((map__39605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39605):map__39605);
var m = map__39605__$1;
var n = cljs.core.get.call(null,map__39605__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39607_39629 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39608_39630 = null;
var count__39609_39631 = (0);
var i__39610_39632 = (0);
while(true){
if((i__39610_39632 < count__39609_39631)){
var f_39633 = cljs.core._nth.call(null,chunk__39608_39630,i__39610_39632);
cljs.core.println.call(null,"  ",f_39633);

var G__39634 = seq__39607_39629;
var G__39635 = chunk__39608_39630;
var G__39636 = count__39609_39631;
var G__39637 = (i__39610_39632 + (1));
seq__39607_39629 = G__39634;
chunk__39608_39630 = G__39635;
count__39609_39631 = G__39636;
i__39610_39632 = G__39637;
continue;
} else {
var temp__5457__auto___39638 = cljs.core.seq.call(null,seq__39607_39629);
if(temp__5457__auto___39638){
var seq__39607_39639__$1 = temp__5457__auto___39638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39607_39639__$1)){
var c__27712__auto___39640 = cljs.core.chunk_first.call(null,seq__39607_39639__$1);
var G__39641 = cljs.core.chunk_rest.call(null,seq__39607_39639__$1);
var G__39642 = c__27712__auto___39640;
var G__39643 = cljs.core.count.call(null,c__27712__auto___39640);
var G__39644 = (0);
seq__39607_39629 = G__39641;
chunk__39608_39630 = G__39642;
count__39609_39631 = G__39643;
i__39610_39632 = G__39644;
continue;
} else {
var f_39645 = cljs.core.first.call(null,seq__39607_39639__$1);
cljs.core.println.call(null,"  ",f_39645);

var G__39646 = cljs.core.next.call(null,seq__39607_39639__$1);
var G__39647 = null;
var G__39648 = (0);
var G__39649 = (0);
seq__39607_39629 = G__39646;
chunk__39608_39630 = G__39647;
count__39609_39631 = G__39648;
i__39610_39632 = G__39649;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39650 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26808__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39650);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39650)))?cljs.core.second.call(null,arglists_39650):arglists_39650));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39611_39651 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39612_39652 = null;
var count__39613_39653 = (0);
var i__39614_39654 = (0);
while(true){
if((i__39614_39654 < count__39613_39653)){
var vec__39615_39655 = cljs.core._nth.call(null,chunk__39612_39652,i__39614_39654);
var name_39656 = cljs.core.nth.call(null,vec__39615_39655,(0),null);
var map__39618_39657 = cljs.core.nth.call(null,vec__39615_39655,(1),null);
var map__39618_39658__$1 = ((((!((map__39618_39657 == null)))?((((map__39618_39657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39618_39657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39618_39657):map__39618_39657);
var doc_39659 = cljs.core.get.call(null,map__39618_39658__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39660 = cljs.core.get.call(null,map__39618_39658__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39656);

cljs.core.println.call(null," ",arglists_39660);

if(cljs.core.truth_(doc_39659)){
cljs.core.println.call(null," ",doc_39659);
} else {
}

var G__39661 = seq__39611_39651;
var G__39662 = chunk__39612_39652;
var G__39663 = count__39613_39653;
var G__39664 = (i__39614_39654 + (1));
seq__39611_39651 = G__39661;
chunk__39612_39652 = G__39662;
count__39613_39653 = G__39663;
i__39614_39654 = G__39664;
continue;
} else {
var temp__5457__auto___39665 = cljs.core.seq.call(null,seq__39611_39651);
if(temp__5457__auto___39665){
var seq__39611_39666__$1 = temp__5457__auto___39665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39611_39666__$1)){
var c__27712__auto___39667 = cljs.core.chunk_first.call(null,seq__39611_39666__$1);
var G__39668 = cljs.core.chunk_rest.call(null,seq__39611_39666__$1);
var G__39669 = c__27712__auto___39667;
var G__39670 = cljs.core.count.call(null,c__27712__auto___39667);
var G__39671 = (0);
seq__39611_39651 = G__39668;
chunk__39612_39652 = G__39669;
count__39613_39653 = G__39670;
i__39614_39654 = G__39671;
continue;
} else {
var vec__39620_39672 = cljs.core.first.call(null,seq__39611_39666__$1);
var name_39673 = cljs.core.nth.call(null,vec__39620_39672,(0),null);
var map__39623_39674 = cljs.core.nth.call(null,vec__39620_39672,(1),null);
var map__39623_39675__$1 = ((((!((map__39623_39674 == null)))?((((map__39623_39674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39623_39674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39623_39674):map__39623_39674);
var doc_39676 = cljs.core.get.call(null,map__39623_39675__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39677 = cljs.core.get.call(null,map__39623_39675__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39673);

cljs.core.println.call(null," ",arglists_39677);

if(cljs.core.truth_(doc_39676)){
cljs.core.println.call(null," ",doc_39676);
} else {
}

var G__39678 = cljs.core.next.call(null,seq__39611_39666__$1);
var G__39679 = null;
var G__39680 = (0);
var G__39681 = (0);
seq__39611_39651 = G__39678;
chunk__39612_39652 = G__39679;
count__39613_39653 = G__39680;
i__39614_39654 = G__39681;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__39625 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39626 = null;
var count__39627 = (0);
var i__39628 = (0);
while(true){
if((i__39628 < count__39627)){
var role = cljs.core._nth.call(null,chunk__39626,i__39628);
var temp__5457__auto___39682__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39682__$1)){
var spec_39683 = temp__5457__auto___39682__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39683));
} else {
}

var G__39684 = seq__39625;
var G__39685 = chunk__39626;
var G__39686 = count__39627;
var G__39687 = (i__39628 + (1));
seq__39625 = G__39684;
chunk__39626 = G__39685;
count__39627 = G__39686;
i__39628 = G__39687;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__39625);
if(temp__5457__auto____$1){
var seq__39625__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39625__$1)){
var c__27712__auto__ = cljs.core.chunk_first.call(null,seq__39625__$1);
var G__39688 = cljs.core.chunk_rest.call(null,seq__39625__$1);
var G__39689 = c__27712__auto__;
var G__39690 = cljs.core.count.call(null,c__27712__auto__);
var G__39691 = (0);
seq__39625 = G__39688;
chunk__39626 = G__39689;
count__39627 = G__39690;
i__39628 = G__39691;
continue;
} else {
var role = cljs.core.first.call(null,seq__39625__$1);
var temp__5457__auto___39692__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39692__$2)){
var spec_39693 = temp__5457__auto___39692__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39693));
} else {
}

var G__39694 = cljs.core.next.call(null,seq__39625__$1);
var G__39695 = null;
var G__39696 = (0);
var G__39697 = (0);
seq__39625 = G__39694;
chunk__39626 = G__39695;
count__39627 = G__39696;
i__39628 = G__39697;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1537985800989