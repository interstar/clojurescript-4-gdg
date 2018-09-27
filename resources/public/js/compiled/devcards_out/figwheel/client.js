// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args40628 = [];
var len__27991__auto___40631 = arguments.length;
var i__27992__auto___40632 = (0);
while(true){
if((i__27992__auto___40632 < len__27991__auto___40631)){
args40628.push((arguments[i__27992__auto___40632]));

var G__40633 = (i__27992__auto___40632 + (1));
i__27992__auto___40632 = G__40633;
continue;
} else {
}
break;
}

var G__40630 = args40628.length;
switch (G__40630) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40628.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27998__auto__ = [];
var len__27991__auto___40636 = arguments.length;
var i__27992__auto___40637 = (0);
while(true){
if((i__27992__auto___40637 < len__27991__auto___40636)){
args__27998__auto__.push((arguments[i__27992__auto___40637]));

var G__40638 = (i__27992__auto___40637 + (1));
i__27992__auto___40637 = G__40638;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq40635){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40635));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27998__auto__ = [];
var len__27991__auto___40640 = arguments.length;
var i__27992__auto___40641 = (0);
while(true){
if((i__27992__auto___40641 < len__27991__auto___40640)){
args__27998__auto__.push((arguments[i__27992__auto___40641]));

var G__40642 = (i__27992__auto___40641 + (1));
i__27992__auto___40641 = G__40642;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq40639){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40639));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40643){
var map__40646 = p__40643;
var map__40646__$1 = ((((!((map__40646 == null)))?((((map__40646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40646):map__40646);
var message = cljs.core.get.call(null,map__40646__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40646__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26808__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26796__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26796__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26796__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29456__auto___40808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___40808,ch){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___40808,ch){
return (function (state_40777){
var state_val_40778 = (state_40777[(1)]);
if((state_val_40778 === (7))){
var inst_40773 = (state_40777[(2)]);
var state_40777__$1 = state_40777;
var statearr_40779_40809 = state_40777__$1;
(statearr_40779_40809[(2)] = inst_40773);

(statearr_40779_40809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (1))){
var state_40777__$1 = state_40777;
var statearr_40780_40810 = state_40777__$1;
(statearr_40780_40810[(2)] = null);

(statearr_40780_40810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (4))){
var inst_40730 = (state_40777[(7)]);
var inst_40730__$1 = (state_40777[(2)]);
var state_40777__$1 = (function (){var statearr_40781 = state_40777;
(statearr_40781[(7)] = inst_40730__$1);

return statearr_40781;
})();
if(cljs.core.truth_(inst_40730__$1)){
var statearr_40782_40811 = state_40777__$1;
(statearr_40782_40811[(1)] = (5));

} else {
var statearr_40783_40812 = state_40777__$1;
(statearr_40783_40812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (15))){
var inst_40737 = (state_40777[(8)]);
var inst_40752 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40737);
var inst_40753 = cljs.core.first.call(null,inst_40752);
var inst_40754 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40753);
var inst_40755 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40754)].join('');
var inst_40756 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40755);
var state_40777__$1 = state_40777;
var statearr_40784_40813 = state_40777__$1;
(statearr_40784_40813[(2)] = inst_40756);

(statearr_40784_40813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (13))){
var inst_40761 = (state_40777[(2)]);
var state_40777__$1 = state_40777;
var statearr_40785_40814 = state_40777__$1;
(statearr_40785_40814[(2)] = inst_40761);

(statearr_40785_40814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (6))){
var state_40777__$1 = state_40777;
var statearr_40786_40815 = state_40777__$1;
(statearr_40786_40815[(2)] = null);

(statearr_40786_40815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (17))){
var inst_40759 = (state_40777[(2)]);
var state_40777__$1 = state_40777;
var statearr_40787_40816 = state_40777__$1;
(statearr_40787_40816[(2)] = inst_40759);

(statearr_40787_40816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (3))){
var inst_40775 = (state_40777[(2)]);
var state_40777__$1 = state_40777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40777__$1,inst_40775);
} else {
if((state_val_40778 === (12))){
var inst_40736 = (state_40777[(9)]);
var inst_40750 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40736,opts);
var state_40777__$1 = state_40777;
if(cljs.core.truth_(inst_40750)){
var statearr_40788_40817 = state_40777__$1;
(statearr_40788_40817[(1)] = (15));

} else {
var statearr_40789_40818 = state_40777__$1;
(statearr_40789_40818[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (2))){
var state_40777__$1 = state_40777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40777__$1,(4),ch);
} else {
if((state_val_40778 === (11))){
var inst_40737 = (state_40777[(8)]);
var inst_40742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40743 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40737);
var inst_40744 = cljs.core.async.timeout.call(null,(1000));
var inst_40745 = [inst_40743,inst_40744];
var inst_40746 = (new cljs.core.PersistentVector(null,2,(5),inst_40742,inst_40745,null));
var state_40777__$1 = state_40777;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40777__$1,(14),inst_40746);
} else {
if((state_val_40778 === (9))){
var inst_40737 = (state_40777[(8)]);
var inst_40763 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40764 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40737);
var inst_40765 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40764);
var inst_40766 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40765)].join('');
var inst_40767 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40766);
var state_40777__$1 = (function (){var statearr_40790 = state_40777;
(statearr_40790[(10)] = inst_40763);

return statearr_40790;
})();
var statearr_40791_40819 = state_40777__$1;
(statearr_40791_40819[(2)] = inst_40767);

(statearr_40791_40819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (5))){
var inst_40730 = (state_40777[(7)]);
var inst_40732 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40733 = (new cljs.core.PersistentArrayMap(null,2,inst_40732,null));
var inst_40734 = (new cljs.core.PersistentHashSet(null,inst_40733,null));
var inst_40735 = figwheel.client.focus_msgs.call(null,inst_40734,inst_40730);
var inst_40736 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40735);
var inst_40737 = cljs.core.first.call(null,inst_40735);
var inst_40738 = figwheel.client.autoload_QMARK_.call(null);
var state_40777__$1 = (function (){var statearr_40792 = state_40777;
(statearr_40792[(9)] = inst_40736);

(statearr_40792[(8)] = inst_40737);

return statearr_40792;
})();
if(cljs.core.truth_(inst_40738)){
var statearr_40793_40820 = state_40777__$1;
(statearr_40793_40820[(1)] = (8));

} else {
var statearr_40794_40821 = state_40777__$1;
(statearr_40794_40821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (14))){
var inst_40748 = (state_40777[(2)]);
var state_40777__$1 = state_40777;
var statearr_40795_40822 = state_40777__$1;
(statearr_40795_40822[(2)] = inst_40748);

(statearr_40795_40822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (16))){
var state_40777__$1 = state_40777;
var statearr_40796_40823 = state_40777__$1;
(statearr_40796_40823[(2)] = null);

(statearr_40796_40823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (10))){
var inst_40769 = (state_40777[(2)]);
var state_40777__$1 = (function (){var statearr_40797 = state_40777;
(statearr_40797[(11)] = inst_40769);

return statearr_40797;
})();
var statearr_40798_40824 = state_40777__$1;
(statearr_40798_40824[(2)] = null);

(statearr_40798_40824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40778 === (8))){
var inst_40736 = (state_40777[(9)]);
var inst_40740 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40736,opts);
var state_40777__$1 = state_40777;
if(cljs.core.truth_(inst_40740)){
var statearr_40799_40825 = state_40777__$1;
(statearr_40799_40825[(1)] = (11));

} else {
var statearr_40800_40826 = state_40777__$1;
(statearr_40800_40826[(1)] = (12));

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
});})(c__29456__auto___40808,ch))
;
return ((function (switch__29342__auto__,c__29456__auto___40808,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29343__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29343__auto____0 = (function (){
var statearr_40804 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40804[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29343__auto__);

(statearr_40804[(1)] = (1));

return statearr_40804;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29343__auto____1 = (function (state_40777){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_40777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e40805){if((e40805 instanceof Object)){
var ex__29346__auto__ = e40805;
var statearr_40806_40827 = state_40777;
(statearr_40806_40827[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40828 = state_40777;
state_40777 = G__40828;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29343__auto__ = function(state_40777){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29343__auto____1.call(this,state_40777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29343__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29343__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___40808,ch))
})();
var state__29458__auto__ = (function (){var statearr_40807 = f__29457__auto__.call(null);
(statearr_40807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___40808);

return statearr_40807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___40808,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40829_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40829_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40832 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40832){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e40831){if((e40831 instanceof Error)){
var e = e40831;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40832], null));
} else {
var e = e40831;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_40832))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40833){
var map__40842 = p__40833;
var map__40842__$1 = ((((!((map__40842 == null)))?((((map__40842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40842):map__40842);
var opts = map__40842__$1;
var build_id = cljs.core.get.call(null,map__40842__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40842,map__40842__$1,opts,build_id){
return (function (p__40844){
var vec__40845 = p__40844;
var seq__40846 = cljs.core.seq.call(null,vec__40845);
var first__40847 = cljs.core.first.call(null,seq__40846);
var seq__40846__$1 = cljs.core.next.call(null,seq__40846);
var map__40848 = first__40847;
var map__40848__$1 = ((((!((map__40848 == null)))?((((map__40848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40848):map__40848);
var msg = map__40848__$1;
var msg_name = cljs.core.get.call(null,map__40848__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40846__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40845,seq__40846,first__40847,seq__40846__$1,map__40848,map__40848__$1,msg,msg_name,_,map__40842,map__40842__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40845,seq__40846,first__40847,seq__40846__$1,map__40848,map__40848__$1,msg,msg_name,_,map__40842,map__40842__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40842,map__40842__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40856){
var vec__40857 = p__40856;
var seq__40858 = cljs.core.seq.call(null,vec__40857);
var first__40859 = cljs.core.first.call(null,seq__40858);
var seq__40858__$1 = cljs.core.next.call(null,seq__40858);
var map__40860 = first__40859;
var map__40860__$1 = ((((!((map__40860 == null)))?((((map__40860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40860):map__40860);
var msg = map__40860__$1;
var msg_name = cljs.core.get.call(null,map__40860__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40858__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40862){
var map__40874 = p__40862;
var map__40874__$1 = ((((!((map__40874 == null)))?((((map__40874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40874):map__40874);
var on_compile_warning = cljs.core.get.call(null,map__40874__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40874__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40874,map__40874__$1,on_compile_warning,on_compile_fail){
return (function (p__40876){
var vec__40877 = p__40876;
var seq__40878 = cljs.core.seq.call(null,vec__40877);
var first__40879 = cljs.core.first.call(null,seq__40878);
var seq__40878__$1 = cljs.core.next.call(null,seq__40878);
var map__40880 = first__40879;
var map__40880__$1 = ((((!((map__40880 == null)))?((((map__40880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40880):map__40880);
var msg = map__40880__$1;
var msg_name = cljs.core.get.call(null,map__40880__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40878__$1;
var pred__40882 = cljs.core._EQ_;
var expr__40883 = msg_name;
if(cljs.core.truth_(pred__40882.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40883))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40882.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40883))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40874,map__40874__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__,msg_hist,msg_names,msg){
return (function (state_41111){
var state_val_41112 = (state_41111[(1)]);
if((state_val_41112 === (7))){
var inst_41031 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
if(cljs.core.truth_(inst_41031)){
var statearr_41113_41163 = state_41111__$1;
(statearr_41113_41163[(1)] = (8));

} else {
var statearr_41114_41164 = state_41111__$1;
(statearr_41114_41164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (20))){
var inst_41105 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
var statearr_41115_41165 = state_41111__$1;
(statearr_41115_41165[(2)] = inst_41105);

(statearr_41115_41165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (27))){
var inst_41101 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
var statearr_41116_41166 = state_41111__$1;
(statearr_41116_41166[(2)] = inst_41101);

(statearr_41116_41166[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (1))){
var inst_41024 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41111__$1 = state_41111;
if(cljs.core.truth_(inst_41024)){
var statearr_41117_41167 = state_41111__$1;
(statearr_41117_41167[(1)] = (2));

} else {
var statearr_41118_41168 = state_41111__$1;
(statearr_41118_41168[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (24))){
var inst_41103 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
var statearr_41119_41169 = state_41111__$1;
(statearr_41119_41169[(2)] = inst_41103);

(statearr_41119_41169[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (4))){
var inst_41109 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41111__$1,inst_41109);
} else {
if((state_val_41112 === (15))){
var inst_41107 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
var statearr_41120_41170 = state_41111__$1;
(statearr_41120_41170[(2)] = inst_41107);

(statearr_41120_41170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (21))){
var inst_41060 = (state_41111[(2)]);
var inst_41061 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41062 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41061);
var state_41111__$1 = (function (){var statearr_41121 = state_41111;
(statearr_41121[(7)] = inst_41060);

return statearr_41121;
})();
var statearr_41122_41171 = state_41111__$1;
(statearr_41122_41171[(2)] = inst_41062);

(statearr_41122_41171[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (31))){
var inst_41090 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41111__$1 = state_41111;
if(cljs.core.truth_(inst_41090)){
var statearr_41123_41172 = state_41111__$1;
(statearr_41123_41172[(1)] = (34));

} else {
var statearr_41124_41173 = state_41111__$1;
(statearr_41124_41173[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (32))){
var inst_41099 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
var statearr_41125_41174 = state_41111__$1;
(statearr_41125_41174[(2)] = inst_41099);

(statearr_41125_41174[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (33))){
var inst_41086 = (state_41111[(2)]);
var inst_41087 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41088 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41087);
var state_41111__$1 = (function (){var statearr_41126 = state_41111;
(statearr_41126[(8)] = inst_41086);

return statearr_41126;
})();
var statearr_41127_41175 = state_41111__$1;
(statearr_41127_41175[(2)] = inst_41088);

(statearr_41127_41175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (13))){
var inst_41045 = figwheel.client.heads_up.clear.call(null);
var state_41111__$1 = state_41111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41111__$1,(16),inst_41045);
} else {
if((state_val_41112 === (22))){
var inst_41066 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41067 = figwheel.client.heads_up.append_warning_message.call(null,inst_41066);
var state_41111__$1 = state_41111;
var statearr_41128_41176 = state_41111__$1;
(statearr_41128_41176[(2)] = inst_41067);

(statearr_41128_41176[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (36))){
var inst_41097 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
var statearr_41129_41177 = state_41111__$1;
(statearr_41129_41177[(2)] = inst_41097);

(statearr_41129_41177[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (29))){
var inst_41077 = (state_41111[(2)]);
var inst_41078 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41079 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41078);
var state_41111__$1 = (function (){var statearr_41130 = state_41111;
(statearr_41130[(9)] = inst_41077);

return statearr_41130;
})();
var statearr_41131_41178 = state_41111__$1;
(statearr_41131_41178[(2)] = inst_41079);

(statearr_41131_41178[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (6))){
var inst_41026 = (state_41111[(10)]);
var state_41111__$1 = state_41111;
var statearr_41132_41179 = state_41111__$1;
(statearr_41132_41179[(2)] = inst_41026);

(statearr_41132_41179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (28))){
var inst_41073 = (state_41111[(2)]);
var inst_41074 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41075 = figwheel.client.heads_up.display_warning.call(null,inst_41074);
var state_41111__$1 = (function (){var statearr_41133 = state_41111;
(statearr_41133[(11)] = inst_41073);

return statearr_41133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41111__$1,(29),inst_41075);
} else {
if((state_val_41112 === (25))){
var inst_41071 = figwheel.client.heads_up.clear.call(null);
var state_41111__$1 = state_41111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41111__$1,(28),inst_41071);
} else {
if((state_val_41112 === (34))){
var inst_41092 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41111__$1 = state_41111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41111__$1,(37),inst_41092);
} else {
if((state_val_41112 === (17))){
var inst_41051 = (state_41111[(2)]);
var inst_41052 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41053 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41052);
var state_41111__$1 = (function (){var statearr_41134 = state_41111;
(statearr_41134[(12)] = inst_41051);

return statearr_41134;
})();
var statearr_41135_41180 = state_41111__$1;
(statearr_41135_41180[(2)] = inst_41053);

(statearr_41135_41180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (3))){
var inst_41043 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41111__$1 = state_41111;
if(cljs.core.truth_(inst_41043)){
var statearr_41136_41181 = state_41111__$1;
(statearr_41136_41181[(1)] = (13));

} else {
var statearr_41137_41182 = state_41111__$1;
(statearr_41137_41182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (12))){
var inst_41039 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
var statearr_41138_41183 = state_41111__$1;
(statearr_41138_41183[(2)] = inst_41039);

(statearr_41138_41183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (2))){
var inst_41026 = (state_41111[(10)]);
var inst_41026__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41111__$1 = (function (){var statearr_41139 = state_41111;
(statearr_41139[(10)] = inst_41026__$1);

return statearr_41139;
})();
if(cljs.core.truth_(inst_41026__$1)){
var statearr_41140_41184 = state_41111__$1;
(statearr_41140_41184[(1)] = (5));

} else {
var statearr_41141_41185 = state_41111__$1;
(statearr_41141_41185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (23))){
var inst_41069 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41111__$1 = state_41111;
if(cljs.core.truth_(inst_41069)){
var statearr_41142_41186 = state_41111__$1;
(statearr_41142_41186[(1)] = (25));

} else {
var statearr_41143_41187 = state_41111__$1;
(statearr_41143_41187[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (35))){
var state_41111__$1 = state_41111;
var statearr_41144_41188 = state_41111__$1;
(statearr_41144_41188[(2)] = null);

(statearr_41144_41188[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (19))){
var inst_41064 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41111__$1 = state_41111;
if(cljs.core.truth_(inst_41064)){
var statearr_41145_41189 = state_41111__$1;
(statearr_41145_41189[(1)] = (22));

} else {
var statearr_41146_41190 = state_41111__$1;
(statearr_41146_41190[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (11))){
var inst_41035 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
var statearr_41147_41191 = state_41111__$1;
(statearr_41147_41191[(2)] = inst_41035);

(statearr_41147_41191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (9))){
var inst_41037 = figwheel.client.heads_up.clear.call(null);
var state_41111__$1 = state_41111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41111__$1,(12),inst_41037);
} else {
if((state_val_41112 === (5))){
var inst_41028 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41111__$1 = state_41111;
var statearr_41148_41192 = state_41111__$1;
(statearr_41148_41192[(2)] = inst_41028);

(statearr_41148_41192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (14))){
var inst_41055 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41111__$1 = state_41111;
if(cljs.core.truth_(inst_41055)){
var statearr_41149_41193 = state_41111__$1;
(statearr_41149_41193[(1)] = (18));

} else {
var statearr_41150_41194 = state_41111__$1;
(statearr_41150_41194[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (26))){
var inst_41081 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41111__$1 = state_41111;
if(cljs.core.truth_(inst_41081)){
var statearr_41151_41195 = state_41111__$1;
(statearr_41151_41195[(1)] = (30));

} else {
var statearr_41152_41196 = state_41111__$1;
(statearr_41152_41196[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (16))){
var inst_41047 = (state_41111[(2)]);
var inst_41048 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41049 = figwheel.client.heads_up.display_exception.call(null,inst_41048);
var state_41111__$1 = (function (){var statearr_41153 = state_41111;
(statearr_41153[(13)] = inst_41047);

return statearr_41153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41111__$1,(17),inst_41049);
} else {
if((state_val_41112 === (30))){
var inst_41083 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41084 = figwheel.client.heads_up.display_warning.call(null,inst_41083);
var state_41111__$1 = state_41111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41111__$1,(33),inst_41084);
} else {
if((state_val_41112 === (10))){
var inst_41041 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
var statearr_41154_41197 = state_41111__$1;
(statearr_41154_41197[(2)] = inst_41041);

(statearr_41154_41197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (18))){
var inst_41057 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41058 = figwheel.client.heads_up.display_exception.call(null,inst_41057);
var state_41111__$1 = state_41111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41111__$1,(21),inst_41058);
} else {
if((state_val_41112 === (37))){
var inst_41094 = (state_41111[(2)]);
var state_41111__$1 = state_41111;
var statearr_41155_41198 = state_41111__$1;
(statearr_41155_41198[(2)] = inst_41094);

(statearr_41155_41198[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41112 === (8))){
var inst_41033 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41111__$1 = state_41111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41111__$1,(11),inst_41033);
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
});})(c__29456__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29342__auto__,c__29456__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto____0 = (function (){
var statearr_41159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41159[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto__);

(statearr_41159[(1)] = (1));

return statearr_41159;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto____1 = (function (state_41111){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_41111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e41160){if((e41160 instanceof Object)){
var ex__29346__auto__ = e41160;
var statearr_41161_41199 = state_41111;
(statearr_41161_41199[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41200 = state_41111;
state_41111 = G__41200;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto__ = function(state_41111){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto____1.call(this,state_41111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__,msg_hist,msg_names,msg))
})();
var state__29458__auto__ = (function (){var statearr_41162 = f__29457__auto__.call(null);
(statearr_41162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_41162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__,msg_hist,msg_names,msg))
);

return c__29456__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29456__auto___41263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___41263,ch){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___41263,ch){
return (function (state_41246){
var state_val_41247 = (state_41246[(1)]);
if((state_val_41247 === (1))){
var state_41246__$1 = state_41246;
var statearr_41248_41264 = state_41246__$1;
(statearr_41248_41264[(2)] = null);

(statearr_41248_41264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (2))){
var state_41246__$1 = state_41246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41246__$1,(4),ch);
} else {
if((state_val_41247 === (3))){
var inst_41244 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41246__$1,inst_41244);
} else {
if((state_val_41247 === (4))){
var inst_41234 = (state_41246[(7)]);
var inst_41234__$1 = (state_41246[(2)]);
var state_41246__$1 = (function (){var statearr_41249 = state_41246;
(statearr_41249[(7)] = inst_41234__$1);

return statearr_41249;
})();
if(cljs.core.truth_(inst_41234__$1)){
var statearr_41250_41265 = state_41246__$1;
(statearr_41250_41265[(1)] = (5));

} else {
var statearr_41251_41266 = state_41246__$1;
(statearr_41251_41266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (5))){
var inst_41234 = (state_41246[(7)]);
var inst_41236 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41234);
var state_41246__$1 = state_41246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41246__$1,(8),inst_41236);
} else {
if((state_val_41247 === (6))){
var state_41246__$1 = state_41246;
var statearr_41252_41267 = state_41246__$1;
(statearr_41252_41267[(2)] = null);

(statearr_41252_41267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (7))){
var inst_41242 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41253_41268 = state_41246__$1;
(statearr_41253_41268[(2)] = inst_41242);

(statearr_41253_41268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (8))){
var inst_41238 = (state_41246[(2)]);
var state_41246__$1 = (function (){var statearr_41254 = state_41246;
(statearr_41254[(8)] = inst_41238);

return statearr_41254;
})();
var statearr_41255_41269 = state_41246__$1;
(statearr_41255_41269[(2)] = null);

(statearr_41255_41269[(1)] = (2));


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
});})(c__29456__auto___41263,ch))
;
return ((function (switch__29342__auto__,c__29456__auto___41263,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29343__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29343__auto____0 = (function (){
var statearr_41259 = [null,null,null,null,null,null,null,null,null];
(statearr_41259[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29343__auto__);

(statearr_41259[(1)] = (1));

return statearr_41259;
});
var figwheel$client$heads_up_plugin_$_state_machine__29343__auto____1 = (function (state_41246){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_41246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e41260){if((e41260 instanceof Object)){
var ex__29346__auto__ = e41260;
var statearr_41261_41270 = state_41246;
(statearr_41261_41270[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41271 = state_41246;
state_41246 = G__41271;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29343__auto__ = function(state_41246){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29343__auto____1.call(this,state_41246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29343__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29343__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___41263,ch))
})();
var state__29458__auto__ = (function (){var statearr_41262 = f__29457__auto__.call(null);
(statearr_41262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___41263);

return statearr_41262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___41263,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__){
return (function (state_41292){
var state_val_41293 = (state_41292[(1)]);
if((state_val_41293 === (1))){
var inst_41287 = cljs.core.async.timeout.call(null,(3000));
var state_41292__$1 = state_41292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41292__$1,(2),inst_41287);
} else {
if((state_val_41293 === (2))){
var inst_41289 = (state_41292[(2)]);
var inst_41290 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41292__$1 = (function (){var statearr_41294 = state_41292;
(statearr_41294[(7)] = inst_41289);

return statearr_41294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41292__$1,inst_41290);
} else {
return null;
}
}
});})(c__29456__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29343__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29343__auto____0 = (function (){
var statearr_41298 = [null,null,null,null,null,null,null,null];
(statearr_41298[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29343__auto__);

(statearr_41298[(1)] = (1));

return statearr_41298;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29343__auto____1 = (function (state_41292){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_41292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e41299){if((e41299 instanceof Object)){
var ex__29346__auto__ = e41299;
var statearr_41300_41302 = state_41292;
(statearr_41300_41302[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41303 = state_41292;
state_41292 = G__41303;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29343__auto__ = function(state_41292){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29343__auto____1.call(this,state_41292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29343__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29343__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__))
})();
var state__29458__auto__ = (function (){var statearr_41301 = f__29457__auto__.call(null);
(statearr_41301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_41301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__))
);

return c__29456__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__,figwheel_version,temp__5457__auto__){
return (function (state_41326){
var state_val_41327 = (state_41326[(1)]);
if((state_val_41327 === (1))){
var inst_41320 = cljs.core.async.timeout.call(null,(2000));
var state_41326__$1 = state_41326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41326__$1,(2),inst_41320);
} else {
if((state_val_41327 === (2))){
var inst_41322 = (state_41326[(2)]);
var inst_41323 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_41324 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41323);
var state_41326__$1 = (function (){var statearr_41328 = state_41326;
(statearr_41328[(7)] = inst_41322);

return statearr_41328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41326__$1,inst_41324);
} else {
return null;
}
}
});})(c__29456__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto____0 = (function (){
var statearr_41332 = [null,null,null,null,null,null,null,null];
(statearr_41332[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto__);

(statearr_41332[(1)] = (1));

return statearr_41332;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto____1 = (function (state_41326){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_41326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e41333){if((e41333 instanceof Object)){
var ex__29346__auto__ = e41333;
var statearr_41334_41336 = state_41326;
(statearr_41334_41336[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41337 = state_41326;
state_41326 = G__41337;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto__ = function(state_41326){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto____1.call(this,state_41326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__,figwheel_version,temp__5457__auto__))
})();
var state__29458__auto__ = (function (){var statearr_41335 = f__29457__auto__.call(null);
(statearr_41335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_41335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__,figwheel_version,temp__5457__auto__))
);

return c__29456__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41338){
var map__41342 = p__41338;
var map__41342__$1 = ((((!((map__41342 == null)))?((((map__41342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41342):map__41342);
var file = cljs.core.get.call(null,map__41342__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41342__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41342__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41344 = "";
var G__41344__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__41344),cljs.core.str("file "),cljs.core.str(file)].join(''):G__41344);
var G__41344__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__41344__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__41344__$1);
if(cljs.core.truth_((function (){var and__26796__auto__ = line;
if(cljs.core.truth_(and__26796__auto__)){
return column;
} else {
return and__26796__auto__;
}
})())){
return [cljs.core.str(G__41344__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__41344__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41345){
var map__41352 = p__41345;
var map__41352__$1 = ((((!((map__41352 == null)))?((((map__41352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41352):map__41352);
var ed = map__41352__$1;
var formatted_exception = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41354_41358 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41355_41359 = null;
var count__41356_41360 = (0);
var i__41357_41361 = (0);
while(true){
if((i__41357_41361 < count__41356_41360)){
var msg_41362 = cljs.core._nth.call(null,chunk__41355_41359,i__41357_41361);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41362);

var G__41363 = seq__41354_41358;
var G__41364 = chunk__41355_41359;
var G__41365 = count__41356_41360;
var G__41366 = (i__41357_41361 + (1));
seq__41354_41358 = G__41363;
chunk__41355_41359 = G__41364;
count__41356_41360 = G__41365;
i__41357_41361 = G__41366;
continue;
} else {
var temp__5457__auto___41367 = cljs.core.seq.call(null,seq__41354_41358);
if(temp__5457__auto___41367){
var seq__41354_41368__$1 = temp__5457__auto___41367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41354_41368__$1)){
var c__27711__auto___41369 = cljs.core.chunk_first.call(null,seq__41354_41368__$1);
var G__41370 = cljs.core.chunk_rest.call(null,seq__41354_41368__$1);
var G__41371 = c__27711__auto___41369;
var G__41372 = cljs.core.count.call(null,c__27711__auto___41369);
var G__41373 = (0);
seq__41354_41358 = G__41370;
chunk__41355_41359 = G__41371;
count__41356_41360 = G__41372;
i__41357_41361 = G__41373;
continue;
} else {
var msg_41374 = cljs.core.first.call(null,seq__41354_41368__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41374);

var G__41375 = cljs.core.next.call(null,seq__41354_41368__$1);
var G__41376 = null;
var G__41377 = (0);
var G__41378 = (0);
seq__41354_41358 = G__41375;
chunk__41355_41359 = G__41376;
count__41356_41360 = G__41377;
i__41357_41361 = G__41378;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41379){
var map__41382 = p__41379;
var map__41382__$1 = ((((!((map__41382 == null)))?((((map__41382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41382):map__41382);
var w = map__41382__$1;
var message = cljs.core.get.call(null,map__41382__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26796__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26796__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26796__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41394 = cljs.core.seq.call(null,plugins);
var chunk__41395 = null;
var count__41396 = (0);
var i__41397 = (0);
while(true){
if((i__41397 < count__41396)){
var vec__41398 = cljs.core._nth.call(null,chunk__41395,i__41397);
var k = cljs.core.nth.call(null,vec__41398,(0),null);
var plugin = cljs.core.nth.call(null,vec__41398,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41404 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41394,chunk__41395,count__41396,i__41397,pl_41404,vec__41398,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41404.call(null,msg_hist);
});})(seq__41394,chunk__41395,count__41396,i__41397,pl_41404,vec__41398,k,plugin))
);
} else {
}

var G__41405 = seq__41394;
var G__41406 = chunk__41395;
var G__41407 = count__41396;
var G__41408 = (i__41397 + (1));
seq__41394 = G__41405;
chunk__41395 = G__41406;
count__41396 = G__41407;
i__41397 = G__41408;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41394);
if(temp__5457__auto__){
var seq__41394__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41394__$1)){
var c__27711__auto__ = cljs.core.chunk_first.call(null,seq__41394__$1);
var G__41409 = cljs.core.chunk_rest.call(null,seq__41394__$1);
var G__41410 = c__27711__auto__;
var G__41411 = cljs.core.count.call(null,c__27711__auto__);
var G__41412 = (0);
seq__41394 = G__41409;
chunk__41395 = G__41410;
count__41396 = G__41411;
i__41397 = G__41412;
continue;
} else {
var vec__41401 = cljs.core.first.call(null,seq__41394__$1);
var k = cljs.core.nth.call(null,vec__41401,(0),null);
var plugin = cljs.core.nth.call(null,vec__41401,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41413 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41394,chunk__41395,count__41396,i__41397,pl_41413,vec__41401,k,plugin,seq__41394__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41413.call(null,msg_hist);
});})(seq__41394,chunk__41395,count__41396,i__41397,pl_41413,vec__41401,k,plugin,seq__41394__$1,temp__5457__auto__))
);
} else {
}

var G__41414 = cljs.core.next.call(null,seq__41394__$1);
var G__41415 = null;
var G__41416 = (0);
var G__41417 = (0);
seq__41394 = G__41414;
chunk__41395 = G__41415;
count__41396 = G__41416;
i__41397 = G__41417;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args41418 = [];
var len__27991__auto___41425 = arguments.length;
var i__27992__auto___41426 = (0);
while(true){
if((i__27992__auto___41426 < len__27991__auto___41425)){
args41418.push((arguments[i__27992__auto___41426]));

var G__41427 = (i__27992__auto___41426 + (1));
i__27992__auto___41426 = G__41427;
continue;
} else {
}
break;
}

var G__41420 = args41418.length;
switch (G__41420) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41418.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__41421_41429 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__41422_41430 = null;
var count__41423_41431 = (0);
var i__41424_41432 = (0);
while(true){
if((i__41424_41432 < count__41423_41431)){
var msg_41433 = cljs.core._nth.call(null,chunk__41422_41430,i__41424_41432);
figwheel.client.socket.handle_incoming_message.call(null,msg_41433);

var G__41434 = seq__41421_41429;
var G__41435 = chunk__41422_41430;
var G__41436 = count__41423_41431;
var G__41437 = (i__41424_41432 + (1));
seq__41421_41429 = G__41434;
chunk__41422_41430 = G__41435;
count__41423_41431 = G__41436;
i__41424_41432 = G__41437;
continue;
} else {
var temp__5457__auto___41438 = cljs.core.seq.call(null,seq__41421_41429);
if(temp__5457__auto___41438){
var seq__41421_41439__$1 = temp__5457__auto___41438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41421_41439__$1)){
var c__27711__auto___41440 = cljs.core.chunk_first.call(null,seq__41421_41439__$1);
var G__41441 = cljs.core.chunk_rest.call(null,seq__41421_41439__$1);
var G__41442 = c__27711__auto___41440;
var G__41443 = cljs.core.count.call(null,c__27711__auto___41440);
var G__41444 = (0);
seq__41421_41429 = G__41441;
chunk__41422_41430 = G__41442;
count__41423_41431 = G__41443;
i__41424_41432 = G__41444;
continue;
} else {
var msg_41445 = cljs.core.first.call(null,seq__41421_41439__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_41445);

var G__41446 = cljs.core.next.call(null,seq__41421_41439__$1);
var G__41447 = null;
var G__41448 = (0);
var G__41449 = (0);
seq__41421_41429 = G__41446;
chunk__41422_41430 = G__41447;
count__41423_41431 = G__41448;
i__41424_41432 = G__41449;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27998__auto__ = [];
var len__27991__auto___41454 = arguments.length;
var i__27992__auto___41455 = (0);
while(true){
if((i__27992__auto___41455 < len__27991__auto___41454)){
args__27998__auto__.push((arguments[i__27992__auto___41455]));

var G__41456 = (i__27992__auto___41455 + (1));
i__27992__auto___41455 = G__41456;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41451){
var map__41452 = p__41451;
var map__41452__$1 = ((((!((map__41452 == null)))?((((map__41452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41452):map__41452);
var opts = map__41452__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41450){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41450));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41458){if((e41458 instanceof Error)){
var e = e41458;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41458;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__41462){
var map__41463 = p__41462;
var map__41463__$1 = ((((!((map__41463 == null)))?((((map__41463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41463):map__41463);
var msg_name = cljs.core.get.call(null,map__41463__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1538029300820