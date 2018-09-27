// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40508){
var map__40533 = p__40508;
var map__40533__$1 = ((((!((map__40533 == null)))?((((map__40533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40533):map__40533);
var m = map__40533__$1;
var n = cljs.core.get.call(null,map__40533__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40533__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__40535_40557 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40536_40558 = null;
var count__40537_40559 = (0);
var i__40538_40560 = (0);
while(true){
if((i__40538_40560 < count__40537_40559)){
var f_40561 = cljs.core._nth.call(null,chunk__40536_40558,i__40538_40560);
cljs.core.println.call(null,"  ",f_40561);

var G__40562 = seq__40535_40557;
var G__40563 = chunk__40536_40558;
var G__40564 = count__40537_40559;
var G__40565 = (i__40538_40560 + (1));
seq__40535_40557 = G__40562;
chunk__40536_40558 = G__40563;
count__40537_40559 = G__40564;
i__40538_40560 = G__40565;
continue;
} else {
var temp__5457__auto___40566 = cljs.core.seq.call(null,seq__40535_40557);
if(temp__5457__auto___40566){
var seq__40535_40567__$1 = temp__5457__auto___40566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40535_40567__$1)){
var c__27711__auto___40568 = cljs.core.chunk_first.call(null,seq__40535_40567__$1);
var G__40569 = cljs.core.chunk_rest.call(null,seq__40535_40567__$1);
var G__40570 = c__27711__auto___40568;
var G__40571 = cljs.core.count.call(null,c__27711__auto___40568);
var G__40572 = (0);
seq__40535_40557 = G__40569;
chunk__40536_40558 = G__40570;
count__40537_40559 = G__40571;
i__40538_40560 = G__40572;
continue;
} else {
var f_40573 = cljs.core.first.call(null,seq__40535_40567__$1);
cljs.core.println.call(null,"  ",f_40573);

var G__40574 = cljs.core.next.call(null,seq__40535_40567__$1);
var G__40575 = null;
var G__40576 = (0);
var G__40577 = (0);
seq__40535_40557 = G__40574;
chunk__40536_40558 = G__40575;
count__40537_40559 = G__40576;
i__40538_40560 = G__40577;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40578 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26808__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40578);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40578)))?cljs.core.second.call(null,arglists_40578):arglists_40578));
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
var seq__40539_40579 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40540_40580 = null;
var count__40541_40581 = (0);
var i__40542_40582 = (0);
while(true){
if((i__40542_40582 < count__40541_40581)){
var vec__40543_40583 = cljs.core._nth.call(null,chunk__40540_40580,i__40542_40582);
var name_40584 = cljs.core.nth.call(null,vec__40543_40583,(0),null);
var map__40546_40585 = cljs.core.nth.call(null,vec__40543_40583,(1),null);
var map__40546_40586__$1 = ((((!((map__40546_40585 == null)))?((((map__40546_40585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40546_40585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40546_40585):map__40546_40585);
var doc_40587 = cljs.core.get.call(null,map__40546_40586__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40588 = cljs.core.get.call(null,map__40546_40586__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40584);

cljs.core.println.call(null," ",arglists_40588);

if(cljs.core.truth_(doc_40587)){
cljs.core.println.call(null," ",doc_40587);
} else {
}

var G__40589 = seq__40539_40579;
var G__40590 = chunk__40540_40580;
var G__40591 = count__40541_40581;
var G__40592 = (i__40542_40582 + (1));
seq__40539_40579 = G__40589;
chunk__40540_40580 = G__40590;
count__40541_40581 = G__40591;
i__40542_40582 = G__40592;
continue;
} else {
var temp__5457__auto___40593 = cljs.core.seq.call(null,seq__40539_40579);
if(temp__5457__auto___40593){
var seq__40539_40594__$1 = temp__5457__auto___40593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40539_40594__$1)){
var c__27711__auto___40595 = cljs.core.chunk_first.call(null,seq__40539_40594__$1);
var G__40596 = cljs.core.chunk_rest.call(null,seq__40539_40594__$1);
var G__40597 = c__27711__auto___40595;
var G__40598 = cljs.core.count.call(null,c__27711__auto___40595);
var G__40599 = (0);
seq__40539_40579 = G__40596;
chunk__40540_40580 = G__40597;
count__40541_40581 = G__40598;
i__40542_40582 = G__40599;
continue;
} else {
var vec__40548_40600 = cljs.core.first.call(null,seq__40539_40594__$1);
var name_40601 = cljs.core.nth.call(null,vec__40548_40600,(0),null);
var map__40551_40602 = cljs.core.nth.call(null,vec__40548_40600,(1),null);
var map__40551_40603__$1 = ((((!((map__40551_40602 == null)))?((((map__40551_40602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40551_40602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40551_40602):map__40551_40602);
var doc_40604 = cljs.core.get.call(null,map__40551_40603__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40605 = cljs.core.get.call(null,map__40551_40603__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40601);

cljs.core.println.call(null," ",arglists_40605);

if(cljs.core.truth_(doc_40604)){
cljs.core.println.call(null," ",doc_40604);
} else {
}

var G__40606 = cljs.core.next.call(null,seq__40539_40594__$1);
var G__40607 = null;
var G__40608 = (0);
var G__40609 = (0);
seq__40539_40579 = G__40606;
chunk__40540_40580 = G__40607;
count__40541_40581 = G__40608;
i__40542_40582 = G__40609;
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

var seq__40553 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40554 = null;
var count__40555 = (0);
var i__40556 = (0);
while(true){
if((i__40556 < count__40555)){
var role = cljs.core._nth.call(null,chunk__40554,i__40556);
var temp__5457__auto___40610__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40610__$1)){
var spec_40611 = temp__5457__auto___40610__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40611));
} else {
}

var G__40612 = seq__40553;
var G__40613 = chunk__40554;
var G__40614 = count__40555;
var G__40615 = (i__40556 + (1));
seq__40553 = G__40612;
chunk__40554 = G__40613;
count__40555 = G__40614;
i__40556 = G__40615;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__40553);
if(temp__5457__auto____$1){
var seq__40553__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40553__$1)){
var c__27711__auto__ = cljs.core.chunk_first.call(null,seq__40553__$1);
var G__40616 = cljs.core.chunk_rest.call(null,seq__40553__$1);
var G__40617 = c__27711__auto__;
var G__40618 = cljs.core.count.call(null,c__27711__auto__);
var G__40619 = (0);
seq__40553 = G__40616;
chunk__40554 = G__40617;
count__40555 = G__40618;
i__40556 = G__40619;
continue;
} else {
var role = cljs.core.first.call(null,seq__40553__$1);
var temp__5457__auto___40620__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40620__$2)){
var spec_40621 = temp__5457__auto___40620__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40621));
} else {
}

var G__40622 = cljs.core.next.call(null,seq__40553__$1);
var G__40623 = null;
var G__40624 = (0);
var G__40625 = (0);
seq__40553 = G__40622;
chunk__40554 = G__40623;
count__40555 = G__40624;
i__40556 = G__40625;
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

//# sourceMappingURL=repl.js.map?rel=1538029300319