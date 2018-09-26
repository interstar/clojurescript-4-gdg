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
var args39700 = [];
var len__27992__auto___39703 = arguments.length;
var i__27993__auto___39704 = (0);
while(true){
if((i__27993__auto___39704 < len__27992__auto___39703)){
args39700.push((arguments[i__27993__auto___39704]));

var G__39705 = (i__27993__auto___39704 + (1));
i__27993__auto___39704 = G__39705;
continue;
} else {
}
break;
}

var G__39702 = args39700.length;
switch (G__39702) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39700.length)].join('')));

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
var args__27999__auto__ = [];
var len__27992__auto___39708 = arguments.length;
var i__27993__auto___39709 = (0);
while(true){
if((i__27993__auto___39709 < len__27992__auto___39708)){
args__27999__auto__.push((arguments[i__27993__auto___39709]));

var G__39710 = (i__27993__auto___39709 + (1));
i__27993__auto___39709 = G__39710;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39707){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39707));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27999__auto__ = [];
var len__27992__auto___39712 = arguments.length;
var i__27993__auto___39713 = (0);
while(true){
if((i__27993__auto___39713 < len__27992__auto___39712)){
args__27999__auto__.push((arguments[i__27993__auto___39713]));

var G__39714 = (i__27993__auto___39713 + (1));
i__27993__auto___39713 = G__39714;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39711){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39711));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39715){
var map__39718 = p__39715;
var map__39718__$1 = ((((!((map__39718 == null)))?((((map__39718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39718):map__39718);
var message = cljs.core.get.call(null,map__39718__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39718__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29457__auto___39880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___39880,ch){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___39880,ch){
return (function (state_39849){
var state_val_39850 = (state_39849[(1)]);
if((state_val_39850 === (7))){
var inst_39845 = (state_39849[(2)]);
var state_39849__$1 = state_39849;
var statearr_39851_39881 = state_39849__$1;
(statearr_39851_39881[(2)] = inst_39845);

(statearr_39851_39881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (1))){
var state_39849__$1 = state_39849;
var statearr_39852_39882 = state_39849__$1;
(statearr_39852_39882[(2)] = null);

(statearr_39852_39882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (4))){
var inst_39802 = (state_39849[(7)]);
var inst_39802__$1 = (state_39849[(2)]);
var state_39849__$1 = (function (){var statearr_39853 = state_39849;
(statearr_39853[(7)] = inst_39802__$1);

return statearr_39853;
})();
if(cljs.core.truth_(inst_39802__$1)){
var statearr_39854_39883 = state_39849__$1;
(statearr_39854_39883[(1)] = (5));

} else {
var statearr_39855_39884 = state_39849__$1;
(statearr_39855_39884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (15))){
var inst_39809 = (state_39849[(8)]);
var inst_39824 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39809);
var inst_39825 = cljs.core.first.call(null,inst_39824);
var inst_39826 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39825);
var inst_39827 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39826)].join('');
var inst_39828 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39827);
var state_39849__$1 = state_39849;
var statearr_39856_39885 = state_39849__$1;
(statearr_39856_39885[(2)] = inst_39828);

(statearr_39856_39885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (13))){
var inst_39833 = (state_39849[(2)]);
var state_39849__$1 = state_39849;
var statearr_39857_39886 = state_39849__$1;
(statearr_39857_39886[(2)] = inst_39833);

(statearr_39857_39886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (6))){
var state_39849__$1 = state_39849;
var statearr_39858_39887 = state_39849__$1;
(statearr_39858_39887[(2)] = null);

(statearr_39858_39887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (17))){
var inst_39831 = (state_39849[(2)]);
var state_39849__$1 = state_39849;
var statearr_39859_39888 = state_39849__$1;
(statearr_39859_39888[(2)] = inst_39831);

(statearr_39859_39888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (3))){
var inst_39847 = (state_39849[(2)]);
var state_39849__$1 = state_39849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39849__$1,inst_39847);
} else {
if((state_val_39850 === (12))){
var inst_39808 = (state_39849[(9)]);
var inst_39822 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39808,opts);
var state_39849__$1 = state_39849;
if(cljs.core.truth_(inst_39822)){
var statearr_39860_39889 = state_39849__$1;
(statearr_39860_39889[(1)] = (15));

} else {
var statearr_39861_39890 = state_39849__$1;
(statearr_39861_39890[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (2))){
var state_39849__$1 = state_39849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39849__$1,(4),ch);
} else {
if((state_val_39850 === (11))){
var inst_39809 = (state_39849[(8)]);
var inst_39814 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39815 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39809);
var inst_39816 = cljs.core.async.timeout.call(null,(1000));
var inst_39817 = [inst_39815,inst_39816];
var inst_39818 = (new cljs.core.PersistentVector(null,2,(5),inst_39814,inst_39817,null));
var state_39849__$1 = state_39849;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39849__$1,(14),inst_39818);
} else {
if((state_val_39850 === (9))){
var inst_39809 = (state_39849[(8)]);
var inst_39835 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39836 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39809);
var inst_39837 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39836);
var inst_39838 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39837)].join('');
var inst_39839 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39838);
var state_39849__$1 = (function (){var statearr_39862 = state_39849;
(statearr_39862[(10)] = inst_39835);

return statearr_39862;
})();
var statearr_39863_39891 = state_39849__$1;
(statearr_39863_39891[(2)] = inst_39839);

(statearr_39863_39891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (5))){
var inst_39802 = (state_39849[(7)]);
var inst_39804 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39805 = (new cljs.core.PersistentArrayMap(null,2,inst_39804,null));
var inst_39806 = (new cljs.core.PersistentHashSet(null,inst_39805,null));
var inst_39807 = figwheel.client.focus_msgs.call(null,inst_39806,inst_39802);
var inst_39808 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39807);
var inst_39809 = cljs.core.first.call(null,inst_39807);
var inst_39810 = figwheel.client.autoload_QMARK_.call(null);
var state_39849__$1 = (function (){var statearr_39864 = state_39849;
(statearr_39864[(8)] = inst_39809);

(statearr_39864[(9)] = inst_39808);

return statearr_39864;
})();
if(cljs.core.truth_(inst_39810)){
var statearr_39865_39892 = state_39849__$1;
(statearr_39865_39892[(1)] = (8));

} else {
var statearr_39866_39893 = state_39849__$1;
(statearr_39866_39893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (14))){
var inst_39820 = (state_39849[(2)]);
var state_39849__$1 = state_39849;
var statearr_39867_39894 = state_39849__$1;
(statearr_39867_39894[(2)] = inst_39820);

(statearr_39867_39894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (16))){
var state_39849__$1 = state_39849;
var statearr_39868_39895 = state_39849__$1;
(statearr_39868_39895[(2)] = null);

(statearr_39868_39895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (10))){
var inst_39841 = (state_39849[(2)]);
var state_39849__$1 = (function (){var statearr_39869 = state_39849;
(statearr_39869[(11)] = inst_39841);

return statearr_39869;
})();
var statearr_39870_39896 = state_39849__$1;
(statearr_39870_39896[(2)] = null);

(statearr_39870_39896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39850 === (8))){
var inst_39808 = (state_39849[(9)]);
var inst_39812 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39808,opts);
var state_39849__$1 = state_39849;
if(cljs.core.truth_(inst_39812)){
var statearr_39871_39897 = state_39849__$1;
(statearr_39871_39897[(1)] = (11));

} else {
var statearr_39872_39898 = state_39849__$1;
(statearr_39872_39898[(1)] = (12));

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
});})(c__29457__auto___39880,ch))
;
return ((function (switch__29343__auto__,c__29457__auto___39880,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29344__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29344__auto____0 = (function (){
var statearr_39876 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39876[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29344__auto__);

(statearr_39876[(1)] = (1));

return statearr_39876;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29344__auto____1 = (function (state_39849){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_39849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e39877){if((e39877 instanceof Object)){
var ex__29347__auto__ = e39877;
var statearr_39878_39899 = state_39849;
(statearr_39878_39899[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39900 = state_39849;
state_39849 = G__39900;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29344__auto__ = function(state_39849){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29344__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29344__auto____1.call(this,state_39849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29344__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29344__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___39880,ch))
})();
var state__29459__auto__ = (function (){var statearr_39879 = f__29458__auto__.call(null);
(statearr_39879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___39880);

return statearr_39879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___39880,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39901_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39901_SHARP_));
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
var base_path_39904 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39904){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39903){if((e39903 instanceof Error)){
var e = e39903;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39904], null));
} else {
var e = e39903;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39904))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39905){
var map__39914 = p__39905;
var map__39914__$1 = ((((!((map__39914 == null)))?((((map__39914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39914):map__39914);
var opts = map__39914__$1;
var build_id = cljs.core.get.call(null,map__39914__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39914,map__39914__$1,opts,build_id){
return (function (p__39916){
var vec__39917 = p__39916;
var seq__39918 = cljs.core.seq.call(null,vec__39917);
var first__39919 = cljs.core.first.call(null,seq__39918);
var seq__39918__$1 = cljs.core.next.call(null,seq__39918);
var map__39920 = first__39919;
var map__39920__$1 = ((((!((map__39920 == null)))?((((map__39920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39920):map__39920);
var msg = map__39920__$1;
var msg_name = cljs.core.get.call(null,map__39920__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39918__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39917,seq__39918,first__39919,seq__39918__$1,map__39920,map__39920__$1,msg,msg_name,_,map__39914,map__39914__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39917,seq__39918,first__39919,seq__39918__$1,map__39920,map__39920__$1,msg,msg_name,_,map__39914,map__39914__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39914,map__39914__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39928){
var vec__39929 = p__39928;
var seq__39930 = cljs.core.seq.call(null,vec__39929);
var first__39931 = cljs.core.first.call(null,seq__39930);
var seq__39930__$1 = cljs.core.next.call(null,seq__39930);
var map__39932 = first__39931;
var map__39932__$1 = ((((!((map__39932 == null)))?((((map__39932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39932):map__39932);
var msg = map__39932__$1;
var msg_name = cljs.core.get.call(null,map__39932__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39930__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39934){
var map__39946 = p__39934;
var map__39946__$1 = ((((!((map__39946 == null)))?((((map__39946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39946):map__39946);
var on_compile_warning = cljs.core.get.call(null,map__39946__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39946__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39946,map__39946__$1,on_compile_warning,on_compile_fail){
return (function (p__39948){
var vec__39949 = p__39948;
var seq__39950 = cljs.core.seq.call(null,vec__39949);
var first__39951 = cljs.core.first.call(null,seq__39950);
var seq__39950__$1 = cljs.core.next.call(null,seq__39950);
var map__39952 = first__39951;
var map__39952__$1 = ((((!((map__39952 == null)))?((((map__39952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39952):map__39952);
var msg = map__39952__$1;
var msg_name = cljs.core.get.call(null,map__39952__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39950__$1;
var pred__39954 = cljs.core._EQ_;
var expr__39955 = msg_name;
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39955))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39955))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39946,map__39946__$1,on_compile_warning,on_compile_fail))
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
var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__,msg_hist,msg_names,msg){
return (function (state_40183){
var state_val_40184 = (state_40183[(1)]);
if((state_val_40184 === (7))){
var inst_40103 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40103)){
var statearr_40185_40235 = state_40183__$1;
(statearr_40185_40235[(1)] = (8));

} else {
var statearr_40186_40236 = state_40183__$1;
(statearr_40186_40236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (20))){
var inst_40177 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40187_40237 = state_40183__$1;
(statearr_40187_40237[(2)] = inst_40177);

(statearr_40187_40237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (27))){
var inst_40173 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40188_40238 = state_40183__$1;
(statearr_40188_40238[(2)] = inst_40173);

(statearr_40188_40238[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (1))){
var inst_40096 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40096)){
var statearr_40189_40239 = state_40183__$1;
(statearr_40189_40239[(1)] = (2));

} else {
var statearr_40190_40240 = state_40183__$1;
(statearr_40190_40240[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (24))){
var inst_40175 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40191_40241 = state_40183__$1;
(statearr_40191_40241[(2)] = inst_40175);

(statearr_40191_40241[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (4))){
var inst_40181 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40183__$1,inst_40181);
} else {
if((state_val_40184 === (15))){
var inst_40179 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40192_40242 = state_40183__$1;
(statearr_40192_40242[(2)] = inst_40179);

(statearr_40192_40242[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (21))){
var inst_40132 = (state_40183[(2)]);
var inst_40133 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40134 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40133);
var state_40183__$1 = (function (){var statearr_40193 = state_40183;
(statearr_40193[(7)] = inst_40132);

return statearr_40193;
})();
var statearr_40194_40243 = state_40183__$1;
(statearr_40194_40243[(2)] = inst_40134);

(statearr_40194_40243[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (31))){
var inst_40162 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40162)){
var statearr_40195_40244 = state_40183__$1;
(statearr_40195_40244[(1)] = (34));

} else {
var statearr_40196_40245 = state_40183__$1;
(statearr_40196_40245[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (32))){
var inst_40171 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40197_40246 = state_40183__$1;
(statearr_40197_40246[(2)] = inst_40171);

(statearr_40197_40246[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (33))){
var inst_40158 = (state_40183[(2)]);
var inst_40159 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40160 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40159);
var state_40183__$1 = (function (){var statearr_40198 = state_40183;
(statearr_40198[(8)] = inst_40158);

return statearr_40198;
})();
var statearr_40199_40247 = state_40183__$1;
(statearr_40199_40247[(2)] = inst_40160);

(statearr_40199_40247[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (13))){
var inst_40117 = figwheel.client.heads_up.clear.call(null);
var state_40183__$1 = state_40183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40183__$1,(16),inst_40117);
} else {
if((state_val_40184 === (22))){
var inst_40138 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40139 = figwheel.client.heads_up.append_warning_message.call(null,inst_40138);
var state_40183__$1 = state_40183;
var statearr_40200_40248 = state_40183__$1;
(statearr_40200_40248[(2)] = inst_40139);

(statearr_40200_40248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (36))){
var inst_40169 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40201_40249 = state_40183__$1;
(statearr_40201_40249[(2)] = inst_40169);

(statearr_40201_40249[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (29))){
var inst_40149 = (state_40183[(2)]);
var inst_40150 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40151 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40150);
var state_40183__$1 = (function (){var statearr_40202 = state_40183;
(statearr_40202[(9)] = inst_40149);

return statearr_40202;
})();
var statearr_40203_40250 = state_40183__$1;
(statearr_40203_40250[(2)] = inst_40151);

(statearr_40203_40250[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (6))){
var inst_40098 = (state_40183[(10)]);
var state_40183__$1 = state_40183;
var statearr_40204_40251 = state_40183__$1;
(statearr_40204_40251[(2)] = inst_40098);

(statearr_40204_40251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (28))){
var inst_40145 = (state_40183[(2)]);
var inst_40146 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40147 = figwheel.client.heads_up.display_warning.call(null,inst_40146);
var state_40183__$1 = (function (){var statearr_40205 = state_40183;
(statearr_40205[(11)] = inst_40145);

return statearr_40205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40183__$1,(29),inst_40147);
} else {
if((state_val_40184 === (25))){
var inst_40143 = figwheel.client.heads_up.clear.call(null);
var state_40183__$1 = state_40183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40183__$1,(28),inst_40143);
} else {
if((state_val_40184 === (34))){
var inst_40164 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40183__$1 = state_40183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40183__$1,(37),inst_40164);
} else {
if((state_val_40184 === (17))){
var inst_40123 = (state_40183[(2)]);
var inst_40124 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40125 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40124);
var state_40183__$1 = (function (){var statearr_40206 = state_40183;
(statearr_40206[(12)] = inst_40123);

return statearr_40206;
})();
var statearr_40207_40252 = state_40183__$1;
(statearr_40207_40252[(2)] = inst_40125);

(statearr_40207_40252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (3))){
var inst_40115 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40115)){
var statearr_40208_40253 = state_40183__$1;
(statearr_40208_40253[(1)] = (13));

} else {
var statearr_40209_40254 = state_40183__$1;
(statearr_40209_40254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (12))){
var inst_40111 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40210_40255 = state_40183__$1;
(statearr_40210_40255[(2)] = inst_40111);

(statearr_40210_40255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (2))){
var inst_40098 = (state_40183[(10)]);
var inst_40098__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40183__$1 = (function (){var statearr_40211 = state_40183;
(statearr_40211[(10)] = inst_40098__$1);

return statearr_40211;
})();
if(cljs.core.truth_(inst_40098__$1)){
var statearr_40212_40256 = state_40183__$1;
(statearr_40212_40256[(1)] = (5));

} else {
var statearr_40213_40257 = state_40183__$1;
(statearr_40213_40257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (23))){
var inst_40141 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40141)){
var statearr_40214_40258 = state_40183__$1;
(statearr_40214_40258[(1)] = (25));

} else {
var statearr_40215_40259 = state_40183__$1;
(statearr_40215_40259[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (35))){
var state_40183__$1 = state_40183;
var statearr_40216_40260 = state_40183__$1;
(statearr_40216_40260[(2)] = null);

(statearr_40216_40260[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (19))){
var inst_40136 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40136)){
var statearr_40217_40261 = state_40183__$1;
(statearr_40217_40261[(1)] = (22));

} else {
var statearr_40218_40262 = state_40183__$1;
(statearr_40218_40262[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (11))){
var inst_40107 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40219_40263 = state_40183__$1;
(statearr_40219_40263[(2)] = inst_40107);

(statearr_40219_40263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (9))){
var inst_40109 = figwheel.client.heads_up.clear.call(null);
var state_40183__$1 = state_40183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40183__$1,(12),inst_40109);
} else {
if((state_val_40184 === (5))){
var inst_40100 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40183__$1 = state_40183;
var statearr_40220_40264 = state_40183__$1;
(statearr_40220_40264[(2)] = inst_40100);

(statearr_40220_40264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (14))){
var inst_40127 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40127)){
var statearr_40221_40265 = state_40183__$1;
(statearr_40221_40265[(1)] = (18));

} else {
var statearr_40222_40266 = state_40183__$1;
(statearr_40222_40266[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (26))){
var inst_40153 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40183__$1 = state_40183;
if(cljs.core.truth_(inst_40153)){
var statearr_40223_40267 = state_40183__$1;
(statearr_40223_40267[(1)] = (30));

} else {
var statearr_40224_40268 = state_40183__$1;
(statearr_40224_40268[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (16))){
var inst_40119 = (state_40183[(2)]);
var inst_40120 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40121 = figwheel.client.heads_up.display_exception.call(null,inst_40120);
var state_40183__$1 = (function (){var statearr_40225 = state_40183;
(statearr_40225[(13)] = inst_40119);

return statearr_40225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40183__$1,(17),inst_40121);
} else {
if((state_val_40184 === (30))){
var inst_40155 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40156 = figwheel.client.heads_up.display_warning.call(null,inst_40155);
var state_40183__$1 = state_40183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40183__$1,(33),inst_40156);
} else {
if((state_val_40184 === (10))){
var inst_40113 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40226_40269 = state_40183__$1;
(statearr_40226_40269[(2)] = inst_40113);

(statearr_40226_40269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (18))){
var inst_40129 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40130 = figwheel.client.heads_up.display_exception.call(null,inst_40129);
var state_40183__$1 = state_40183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40183__$1,(21),inst_40130);
} else {
if((state_val_40184 === (37))){
var inst_40166 = (state_40183[(2)]);
var state_40183__$1 = state_40183;
var statearr_40227_40270 = state_40183__$1;
(statearr_40227_40270[(2)] = inst_40166);

(statearr_40227_40270[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40184 === (8))){
var inst_40105 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40183__$1 = state_40183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40183__$1,(11),inst_40105);
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
});})(c__29457__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29343__auto__,c__29457__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto____0 = (function (){
var statearr_40231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40231[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto__);

(statearr_40231[(1)] = (1));

return statearr_40231;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto____1 = (function (state_40183){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_40183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e40232){if((e40232 instanceof Object)){
var ex__29347__auto__ = e40232;
var statearr_40233_40271 = state_40183;
(statearr_40233_40271[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40272 = state_40183;
state_40183 = G__40272;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto__ = function(state_40183){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto____1.call(this,state_40183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__,msg_hist,msg_names,msg))
})();
var state__29459__auto__ = (function (){var statearr_40234 = f__29458__auto__.call(null);
(statearr_40234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_40234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__,msg_hist,msg_names,msg))
);

return c__29457__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29457__auto___40335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___40335,ch){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___40335,ch){
return (function (state_40318){
var state_val_40319 = (state_40318[(1)]);
if((state_val_40319 === (1))){
var state_40318__$1 = state_40318;
var statearr_40320_40336 = state_40318__$1;
(statearr_40320_40336[(2)] = null);

(statearr_40320_40336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40319 === (2))){
var state_40318__$1 = state_40318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40318__$1,(4),ch);
} else {
if((state_val_40319 === (3))){
var inst_40316 = (state_40318[(2)]);
var state_40318__$1 = state_40318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40318__$1,inst_40316);
} else {
if((state_val_40319 === (4))){
var inst_40306 = (state_40318[(7)]);
var inst_40306__$1 = (state_40318[(2)]);
var state_40318__$1 = (function (){var statearr_40321 = state_40318;
(statearr_40321[(7)] = inst_40306__$1);

return statearr_40321;
})();
if(cljs.core.truth_(inst_40306__$1)){
var statearr_40322_40337 = state_40318__$1;
(statearr_40322_40337[(1)] = (5));

} else {
var statearr_40323_40338 = state_40318__$1;
(statearr_40323_40338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40319 === (5))){
var inst_40306 = (state_40318[(7)]);
var inst_40308 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40306);
var state_40318__$1 = state_40318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40318__$1,(8),inst_40308);
} else {
if((state_val_40319 === (6))){
var state_40318__$1 = state_40318;
var statearr_40324_40339 = state_40318__$1;
(statearr_40324_40339[(2)] = null);

(statearr_40324_40339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40319 === (7))){
var inst_40314 = (state_40318[(2)]);
var state_40318__$1 = state_40318;
var statearr_40325_40340 = state_40318__$1;
(statearr_40325_40340[(2)] = inst_40314);

(statearr_40325_40340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40319 === (8))){
var inst_40310 = (state_40318[(2)]);
var state_40318__$1 = (function (){var statearr_40326 = state_40318;
(statearr_40326[(8)] = inst_40310);

return statearr_40326;
})();
var statearr_40327_40341 = state_40318__$1;
(statearr_40327_40341[(2)] = null);

(statearr_40327_40341[(1)] = (2));


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
});})(c__29457__auto___40335,ch))
;
return ((function (switch__29343__auto__,c__29457__auto___40335,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29344__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29344__auto____0 = (function (){
var statearr_40331 = [null,null,null,null,null,null,null,null,null];
(statearr_40331[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29344__auto__);

(statearr_40331[(1)] = (1));

return statearr_40331;
});
var figwheel$client$heads_up_plugin_$_state_machine__29344__auto____1 = (function (state_40318){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_40318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e40332){if((e40332 instanceof Object)){
var ex__29347__auto__ = e40332;
var statearr_40333_40342 = state_40318;
(statearr_40333_40342[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40343 = state_40318;
state_40318 = G__40343;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29344__auto__ = function(state_40318){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29344__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29344__auto____1.call(this,state_40318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29344__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29344__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___40335,ch))
})();
var state__29459__auto__ = (function (){var statearr_40334 = f__29458__auto__.call(null);
(statearr_40334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___40335);

return statearr_40334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___40335,ch))
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
var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__){
return (function (state_40364){
var state_val_40365 = (state_40364[(1)]);
if((state_val_40365 === (1))){
var inst_40359 = cljs.core.async.timeout.call(null,(3000));
var state_40364__$1 = state_40364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40364__$1,(2),inst_40359);
} else {
if((state_val_40365 === (2))){
var inst_40361 = (state_40364[(2)]);
var inst_40362 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40364__$1 = (function (){var statearr_40366 = state_40364;
(statearr_40366[(7)] = inst_40361);

return statearr_40366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40364__$1,inst_40362);
} else {
return null;
}
}
});})(c__29457__auto__))
;
return ((function (switch__29343__auto__,c__29457__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29344__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29344__auto____0 = (function (){
var statearr_40370 = [null,null,null,null,null,null,null,null];
(statearr_40370[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29344__auto__);

(statearr_40370[(1)] = (1));

return statearr_40370;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29344__auto____1 = (function (state_40364){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_40364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e40371){if((e40371 instanceof Object)){
var ex__29347__auto__ = e40371;
var statearr_40372_40374 = state_40364;
(statearr_40372_40374[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40375 = state_40364;
state_40364 = G__40375;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29344__auto__ = function(state_40364){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29344__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29344__auto____1.call(this,state_40364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29344__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29344__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__))
})();
var state__29459__auto__ = (function (){var statearr_40373 = f__29458__auto__.call(null);
(statearr_40373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_40373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__))
);

return c__29457__auto__;
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
var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__,figwheel_version,temp__5457__auto__){
return (function (state_40398){
var state_val_40399 = (state_40398[(1)]);
if((state_val_40399 === (1))){
var inst_40392 = cljs.core.async.timeout.call(null,(2000));
var state_40398__$1 = state_40398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40398__$1,(2),inst_40392);
} else {
if((state_val_40399 === (2))){
var inst_40394 = (state_40398[(2)]);
var inst_40395 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_40396 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40395);
var state_40398__$1 = (function (){var statearr_40400 = state_40398;
(statearr_40400[(7)] = inst_40394);

return statearr_40400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40398__$1,inst_40396);
} else {
return null;
}
}
});})(c__29457__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__29343__auto__,c__29457__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto____0 = (function (){
var statearr_40404 = [null,null,null,null,null,null,null,null];
(statearr_40404[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto__);

(statearr_40404[(1)] = (1));

return statearr_40404;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto____1 = (function (state_40398){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_40398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e40405){if((e40405 instanceof Object)){
var ex__29347__auto__ = e40405;
var statearr_40406_40408 = state_40398;
(statearr_40406_40408[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40409 = state_40398;
state_40398 = G__40409;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto__ = function(state_40398){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto____1.call(this,state_40398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__,figwheel_version,temp__5457__auto__))
})();
var state__29459__auto__ = (function (){var statearr_40407 = f__29458__auto__.call(null);
(statearr_40407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_40407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__,figwheel_version,temp__5457__auto__))
);

return c__29457__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40410){
var map__40414 = p__40410;
var map__40414__$1 = ((((!((map__40414 == null)))?((((map__40414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40414):map__40414);
var file = cljs.core.get.call(null,map__40414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40414__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40414__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40416 = "";
var G__40416__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__40416),cljs.core.str("file "),cljs.core.str(file)].join(''):G__40416);
var G__40416__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__40416__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__40416__$1);
if(cljs.core.truth_((function (){var and__26796__auto__ = line;
if(cljs.core.truth_(and__26796__auto__)){
return column;
} else {
return and__26796__auto__;
}
})())){
return [cljs.core.str(G__40416__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__40416__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40417){
var map__40424 = p__40417;
var map__40424__$1 = ((((!((map__40424 == null)))?((((map__40424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40424):map__40424);
var ed = map__40424__$1;
var formatted_exception = cljs.core.get.call(null,map__40424__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40424__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40424__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40426_40430 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40427_40431 = null;
var count__40428_40432 = (0);
var i__40429_40433 = (0);
while(true){
if((i__40429_40433 < count__40428_40432)){
var msg_40434 = cljs.core._nth.call(null,chunk__40427_40431,i__40429_40433);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40434);

var G__40435 = seq__40426_40430;
var G__40436 = chunk__40427_40431;
var G__40437 = count__40428_40432;
var G__40438 = (i__40429_40433 + (1));
seq__40426_40430 = G__40435;
chunk__40427_40431 = G__40436;
count__40428_40432 = G__40437;
i__40429_40433 = G__40438;
continue;
} else {
var temp__5457__auto___40439 = cljs.core.seq.call(null,seq__40426_40430);
if(temp__5457__auto___40439){
var seq__40426_40440__$1 = temp__5457__auto___40439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40426_40440__$1)){
var c__27712__auto___40441 = cljs.core.chunk_first.call(null,seq__40426_40440__$1);
var G__40442 = cljs.core.chunk_rest.call(null,seq__40426_40440__$1);
var G__40443 = c__27712__auto___40441;
var G__40444 = cljs.core.count.call(null,c__27712__auto___40441);
var G__40445 = (0);
seq__40426_40430 = G__40442;
chunk__40427_40431 = G__40443;
count__40428_40432 = G__40444;
i__40429_40433 = G__40445;
continue;
} else {
var msg_40446 = cljs.core.first.call(null,seq__40426_40440__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40446);

var G__40447 = cljs.core.next.call(null,seq__40426_40440__$1);
var G__40448 = null;
var G__40449 = (0);
var G__40450 = (0);
seq__40426_40430 = G__40447;
chunk__40427_40431 = G__40448;
count__40428_40432 = G__40449;
i__40429_40433 = G__40450;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40451){
var map__40454 = p__40451;
var map__40454__$1 = ((((!((map__40454 == null)))?((((map__40454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40454):map__40454);
var w = map__40454__$1;
var message = cljs.core.get.call(null,map__40454__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__40466 = cljs.core.seq.call(null,plugins);
var chunk__40467 = null;
var count__40468 = (0);
var i__40469 = (0);
while(true){
if((i__40469 < count__40468)){
var vec__40470 = cljs.core._nth.call(null,chunk__40467,i__40469);
var k = cljs.core.nth.call(null,vec__40470,(0),null);
var plugin = cljs.core.nth.call(null,vec__40470,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40476 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40466,chunk__40467,count__40468,i__40469,pl_40476,vec__40470,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40476.call(null,msg_hist);
});})(seq__40466,chunk__40467,count__40468,i__40469,pl_40476,vec__40470,k,plugin))
);
} else {
}

var G__40477 = seq__40466;
var G__40478 = chunk__40467;
var G__40479 = count__40468;
var G__40480 = (i__40469 + (1));
seq__40466 = G__40477;
chunk__40467 = G__40478;
count__40468 = G__40479;
i__40469 = G__40480;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40466);
if(temp__5457__auto__){
var seq__40466__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40466__$1)){
var c__27712__auto__ = cljs.core.chunk_first.call(null,seq__40466__$1);
var G__40481 = cljs.core.chunk_rest.call(null,seq__40466__$1);
var G__40482 = c__27712__auto__;
var G__40483 = cljs.core.count.call(null,c__27712__auto__);
var G__40484 = (0);
seq__40466 = G__40481;
chunk__40467 = G__40482;
count__40468 = G__40483;
i__40469 = G__40484;
continue;
} else {
var vec__40473 = cljs.core.first.call(null,seq__40466__$1);
var k = cljs.core.nth.call(null,vec__40473,(0),null);
var plugin = cljs.core.nth.call(null,vec__40473,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40485 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40466,chunk__40467,count__40468,i__40469,pl_40485,vec__40473,k,plugin,seq__40466__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40485.call(null,msg_hist);
});})(seq__40466,chunk__40467,count__40468,i__40469,pl_40485,vec__40473,k,plugin,seq__40466__$1,temp__5457__auto__))
);
} else {
}

var G__40486 = cljs.core.next.call(null,seq__40466__$1);
var G__40487 = null;
var G__40488 = (0);
var G__40489 = (0);
seq__40466 = G__40486;
chunk__40467 = G__40487;
count__40468 = G__40488;
i__40469 = G__40489;
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
var args40490 = [];
var len__27992__auto___40497 = arguments.length;
var i__27993__auto___40498 = (0);
while(true){
if((i__27993__auto___40498 < len__27992__auto___40497)){
args40490.push((arguments[i__27993__auto___40498]));

var G__40499 = (i__27993__auto___40498 + (1));
i__27993__auto___40498 = G__40499;
continue;
} else {
}
break;
}

var G__40492 = args40490.length;
switch (G__40492) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40490.length)].join('')));

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

var seq__40493_40501 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40494_40502 = null;
var count__40495_40503 = (0);
var i__40496_40504 = (0);
while(true){
if((i__40496_40504 < count__40495_40503)){
var msg_40505 = cljs.core._nth.call(null,chunk__40494_40502,i__40496_40504);
figwheel.client.socket.handle_incoming_message.call(null,msg_40505);

var G__40506 = seq__40493_40501;
var G__40507 = chunk__40494_40502;
var G__40508 = count__40495_40503;
var G__40509 = (i__40496_40504 + (1));
seq__40493_40501 = G__40506;
chunk__40494_40502 = G__40507;
count__40495_40503 = G__40508;
i__40496_40504 = G__40509;
continue;
} else {
var temp__5457__auto___40510 = cljs.core.seq.call(null,seq__40493_40501);
if(temp__5457__auto___40510){
var seq__40493_40511__$1 = temp__5457__auto___40510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40493_40511__$1)){
var c__27712__auto___40512 = cljs.core.chunk_first.call(null,seq__40493_40511__$1);
var G__40513 = cljs.core.chunk_rest.call(null,seq__40493_40511__$1);
var G__40514 = c__27712__auto___40512;
var G__40515 = cljs.core.count.call(null,c__27712__auto___40512);
var G__40516 = (0);
seq__40493_40501 = G__40513;
chunk__40494_40502 = G__40514;
count__40495_40503 = G__40515;
i__40496_40504 = G__40516;
continue;
} else {
var msg_40517 = cljs.core.first.call(null,seq__40493_40511__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40517);

var G__40518 = cljs.core.next.call(null,seq__40493_40511__$1);
var G__40519 = null;
var G__40520 = (0);
var G__40521 = (0);
seq__40493_40501 = G__40518;
chunk__40494_40502 = G__40519;
count__40495_40503 = G__40520;
i__40496_40504 = G__40521;
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
var args__27999__auto__ = [];
var len__27992__auto___40526 = arguments.length;
var i__27993__auto___40527 = (0);
while(true){
if((i__27993__auto___40527 < len__27992__auto___40526)){
args__27999__auto__.push((arguments[i__27993__auto___40527]));

var G__40528 = (i__27993__auto___40527 + (1));
i__27993__auto___40527 = G__40528;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40523){
var map__40524 = p__40523;
var map__40524__$1 = ((((!((map__40524 == null)))?((((map__40524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40524):map__40524);
var opts = map__40524__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40522){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40522));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40530){if((e40530 instanceof Error)){
var e = e40530;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40530;

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
return (function (p__40534){
var map__40535 = p__40534;
var map__40535__$1 = ((((!((map__40535 == null)))?((((map__40535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40535):map__40535);
var msg_name = cljs.core.get.call(null,map__40535__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1537985801422