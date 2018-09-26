// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29516 = [];
var len__27992__auto___29522 = arguments.length;
var i__27993__auto___29523 = (0);
while(true){
if((i__27993__auto___29523 < len__27992__auto___29522)){
args29516.push((arguments[i__27993__auto___29523]));

var G__29524 = (i__27993__auto___29523 + (1));
i__27993__auto___29523 = G__29524;
continue;
} else {
}
break;
}

var G__29518 = args29516.length;
switch (G__29518) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29516.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29519 = (function (f,blockable,meta29520){
this.f = f;
this.blockable = blockable;
this.meta29520 = meta29520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29521,meta29520__$1){
var self__ = this;
var _29521__$1 = this;
return (new cljs.core.async.t_cljs$core$async29519(self__.f,self__.blockable,meta29520__$1));
});

cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29521){
var self__ = this;
var _29521__$1 = this;
return self__.meta29520;
});

cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29520","meta29520",1628191647,null)], null);
});

cljs.core.async.t_cljs$core$async29519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29519";

cljs.core.async.t_cljs$core$async29519.cljs$lang$ctorPrWriter = (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.core.async/t_cljs$core$async29519");
});

cljs.core.async.__GT_t_cljs$core$async29519 = (function cljs$core$async$__GT_t_cljs$core$async29519(f__$1,blockable__$1,meta29520){
return (new cljs.core.async.t_cljs$core$async29519(f__$1,blockable__$1,meta29520));
});

}

return (new cljs.core.async.t_cljs$core$async29519(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29528 = [];
var len__27992__auto___29531 = arguments.length;
var i__27993__auto___29532 = (0);
while(true){
if((i__27993__auto___29532 < len__27992__auto___29531)){
args29528.push((arguments[i__27993__auto___29532]));

var G__29533 = (i__27993__auto___29532 + (1));
i__27993__auto___29532 = G__29533;
continue;
} else {
}
break;
}

var G__29530 = args29528.length;
switch (G__29530) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29528.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29535 = [];
var len__27992__auto___29538 = arguments.length;
var i__27993__auto___29539 = (0);
while(true){
if((i__27993__auto___29539 < len__27992__auto___29538)){
args29535.push((arguments[i__27993__auto___29539]));

var G__29540 = (i__27993__auto___29539 + (1));
i__27993__auto___29539 = G__29540;
continue;
} else {
}
break;
}

var G__29537 = args29535.length;
switch (G__29537) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29535.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29542 = [];
var len__27992__auto___29545 = arguments.length;
var i__27993__auto___29546 = (0);
while(true){
if((i__27993__auto___29546 < len__27992__auto___29545)){
args29542.push((arguments[i__27993__auto___29546]));

var G__29547 = (i__27993__auto___29546 + (1));
i__27993__auto___29546 = G__29547;
continue;
} else {
}
break;
}

var G__29544 = args29542.length;
switch (G__29544) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29542.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29549 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29549);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29549,ret){
return (function (){
return fn1.call(null,val_29549);
});})(val_29549,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29550 = [];
var len__27992__auto___29553 = arguments.length;
var i__27993__auto___29554 = (0);
while(true){
if((i__27993__auto___29554 < len__27992__auto___29553)){
args29550.push((arguments[i__27993__auto___29554]));

var G__29555 = (i__27993__auto___29554 + (1));
i__27993__auto___29554 = G__29555;
continue;
} else {
}
break;
}

var G__29552 = args29550.length;
switch (G__29552) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29550.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27822__auto___29557 = n;
var x_29558 = (0);
while(true){
if((x_29558 < n__27822__auto___29557)){
(a[x_29558] = (0));

var G__29559 = (x_29558 + (1));
x_29558 = G__29559;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29560 = (i + (1));
i = G__29560;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29564 = (function (alt_flag,flag,meta29565){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29565 = meta29565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29566,meta29565__$1){
var self__ = this;
var _29566__$1 = this;
return (new cljs.core.async.t_cljs$core$async29564(self__.alt_flag,self__.flag,meta29565__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29566){
var self__ = this;
var _29566__$1 = this;
return self__.meta29565;
});})(flag))
;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29564.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29565","meta29565",1568450706,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29564";

cljs.core.async.t_cljs$core$async29564.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.core.async/t_cljs$core$async29564");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29564 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29564(alt_flag__$1,flag__$1,meta29565){
return (new cljs.core.async.t_cljs$core$async29564(alt_flag__$1,flag__$1,meta29565));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29564(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29570 = (function (alt_handler,flag,cb,meta29571){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29571 = meta29571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29572,meta29571__$1){
var self__ = this;
var _29572__$1 = this;
return (new cljs.core.async.t_cljs$core$async29570(self__.alt_handler,self__.flag,self__.cb,meta29571__$1));
});

cljs.core.async.t_cljs$core$async29570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29572){
var self__ = this;
var _29572__$1 = this;
return self__.meta29571;
});

cljs.core.async.t_cljs$core$async29570.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29570.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29571","meta29571",271380331,null)], null);
});

cljs.core.async.t_cljs$core$async29570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29570";

cljs.core.async.t_cljs$core$async29570.cljs$lang$ctorPrWriter = (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.core.async/t_cljs$core$async29570");
});

cljs.core.async.__GT_t_cljs$core$async29570 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29570(alt_handler__$1,flag__$1,cb__$1,meta29571){
return (new cljs.core.async.t_cljs$core$async29570(alt_handler__$1,flag__$1,cb__$1,meta29571));
});

}

return (new cljs.core.async.t_cljs$core$async29570(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29573_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29573_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29574_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29574_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26808__auto__ = wport;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29575 = (i + (1));
i = G__29575;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26808__auto__ = ret;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__26796__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26796__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26796__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27999__auto__ = [];
var len__27992__auto___29581 = arguments.length;
var i__27993__auto___29582 = (0);
while(true){
if((i__27993__auto___29582 < len__27992__auto___29581)){
args__27999__auto__.push((arguments[i__27993__auto___29582]));

var G__29583 = (i__27993__auto___29582 + (1));
i__27993__auto___29582 = G__29583;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((1) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28000__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29578){
var map__29579 = p__29578;
var map__29579__$1 = ((((!((map__29579 == null)))?((((map__29579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29579):map__29579);
var opts = map__29579__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29576){
var G__29577 = cljs.core.first.call(null,seq29576);
var seq29576__$1 = cljs.core.next.call(null,seq29576);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29577,seq29576__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29584 = [];
var len__27992__auto___29634 = arguments.length;
var i__27993__auto___29635 = (0);
while(true){
if((i__27993__auto___29635 < len__27992__auto___29634)){
args29584.push((arguments[i__27993__auto___29635]));

var G__29636 = (i__27993__auto___29635 + (1));
i__27993__auto___29635 = G__29636;
continue;
} else {
}
break;
}

var G__29586 = args29584.length;
switch (G__29586) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29584.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29457__auto___29638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___29638){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___29638){
return (function (state_29610){
var state_val_29611 = (state_29610[(1)]);
if((state_val_29611 === (7))){
var inst_29606 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29612_29639 = state_29610__$1;
(statearr_29612_29639[(2)] = inst_29606);

(statearr_29612_29639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (1))){
var state_29610__$1 = state_29610;
var statearr_29613_29640 = state_29610__$1;
(statearr_29613_29640[(2)] = null);

(statearr_29613_29640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (4))){
var inst_29589 = (state_29610[(7)]);
var inst_29589__$1 = (state_29610[(2)]);
var inst_29590 = (inst_29589__$1 == null);
var state_29610__$1 = (function (){var statearr_29614 = state_29610;
(statearr_29614[(7)] = inst_29589__$1);

return statearr_29614;
})();
if(cljs.core.truth_(inst_29590)){
var statearr_29615_29641 = state_29610__$1;
(statearr_29615_29641[(1)] = (5));

} else {
var statearr_29616_29642 = state_29610__$1;
(statearr_29616_29642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (13))){
var state_29610__$1 = state_29610;
var statearr_29617_29643 = state_29610__$1;
(statearr_29617_29643[(2)] = null);

(statearr_29617_29643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (6))){
var inst_29589 = (state_29610[(7)]);
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29610__$1,(11),to,inst_29589);
} else {
if((state_val_29611 === (3))){
var inst_29608 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29610__$1,inst_29608);
} else {
if((state_val_29611 === (12))){
var state_29610__$1 = state_29610;
var statearr_29618_29644 = state_29610__$1;
(statearr_29618_29644[(2)] = null);

(statearr_29618_29644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (2))){
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29610__$1,(4),from);
} else {
if((state_val_29611 === (11))){
var inst_29599 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
if(cljs.core.truth_(inst_29599)){
var statearr_29619_29645 = state_29610__$1;
(statearr_29619_29645[(1)] = (12));

} else {
var statearr_29620_29646 = state_29610__$1;
(statearr_29620_29646[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (9))){
var state_29610__$1 = state_29610;
var statearr_29621_29647 = state_29610__$1;
(statearr_29621_29647[(2)] = null);

(statearr_29621_29647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (5))){
var state_29610__$1 = state_29610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29622_29648 = state_29610__$1;
(statearr_29622_29648[(1)] = (8));

} else {
var statearr_29623_29649 = state_29610__$1;
(statearr_29623_29649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (14))){
var inst_29604 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29624_29650 = state_29610__$1;
(statearr_29624_29650[(2)] = inst_29604);

(statearr_29624_29650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (10))){
var inst_29596 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29625_29651 = state_29610__$1;
(statearr_29625_29651[(2)] = inst_29596);

(statearr_29625_29651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (8))){
var inst_29593 = cljs.core.async.close_BANG_.call(null,to);
var state_29610__$1 = state_29610;
var statearr_29626_29652 = state_29610__$1;
(statearr_29626_29652[(2)] = inst_29593);

(statearr_29626_29652[(1)] = (10));


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
});})(c__29457__auto___29638))
;
return ((function (switch__29343__auto__,c__29457__auto___29638){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_29630 = [null,null,null,null,null,null,null,null];
(statearr_29630[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_29630[(1)] = (1));

return statearr_29630;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_29610){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_29610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e29631){if((e29631 instanceof Object)){
var ex__29347__auto__ = e29631;
var statearr_29632_29653 = state_29610;
(statearr_29632_29653[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29654 = state_29610;
state_29610 = G__29654;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_29610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_29610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___29638))
})();
var state__29459__auto__ = (function (){var statearr_29633 = f__29458__auto__.call(null);
(statearr_29633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___29638);

return statearr_29633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___29638))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29842){
var vec__29843 = p__29842;
var v = cljs.core.nth.call(null,vec__29843,(0),null);
var p = cljs.core.nth.call(null,vec__29843,(1),null);
var job = vec__29843;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29457__auto___30029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___30029,res,vec__29843,v,p,job,jobs,results){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___30029,res,vec__29843,v,p,job,jobs,results){
return (function (state_29850){
var state_val_29851 = (state_29850[(1)]);
if((state_val_29851 === (1))){
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29850__$1,(2),res,v);
} else {
if((state_val_29851 === (2))){
var inst_29847 = (state_29850[(2)]);
var inst_29848 = cljs.core.async.close_BANG_.call(null,res);
var state_29850__$1 = (function (){var statearr_29852 = state_29850;
(statearr_29852[(7)] = inst_29847);

return statearr_29852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29850__$1,inst_29848);
} else {
return null;
}
}
});})(c__29457__auto___30029,res,vec__29843,v,p,job,jobs,results))
;
return ((function (switch__29343__auto__,c__29457__auto___30029,res,vec__29843,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0 = (function (){
var statearr_29856 = [null,null,null,null,null,null,null,null];
(statearr_29856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__);

(statearr_29856[(1)] = (1));

return statearr_29856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1 = (function (state_29850){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_29850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e29857){if((e29857 instanceof Object)){
var ex__29347__auto__ = e29857;
var statearr_29858_30030 = state_29850;
(statearr_29858_30030[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30031 = state_29850;
state_29850 = G__30031;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__ = function(state_29850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1.call(this,state_29850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___30029,res,vec__29843,v,p,job,jobs,results))
})();
var state__29459__auto__ = (function (){var statearr_29859 = f__29458__auto__.call(null);
(statearr_29859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___30029);

return statearr_29859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___30029,res,vec__29843,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29860){
var vec__29861 = p__29860;
var v = cljs.core.nth.call(null,vec__29861,(0),null);
var p = cljs.core.nth.call(null,vec__29861,(1),null);
var job = vec__29861;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27822__auto___30032 = n;
var __30033 = (0);
while(true){
if((__30033 < n__27822__auto___30032)){
var G__29864_30034 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29864_30034) {
case "compute":
var c__29457__auto___30036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30033,c__29457__auto___30036,G__29864_30034,n__27822__auto___30032,jobs,results,process,async){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (__30033,c__29457__auto___30036,G__29864_30034,n__27822__auto___30032,jobs,results,process,async){
return (function (state_29877){
var state_val_29878 = (state_29877[(1)]);
if((state_val_29878 === (1))){
var state_29877__$1 = state_29877;
var statearr_29879_30037 = state_29877__$1;
(statearr_29879_30037[(2)] = null);

(statearr_29879_30037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (2))){
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29877__$1,(4),jobs);
} else {
if((state_val_29878 === (3))){
var inst_29875 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29877__$1,inst_29875);
} else {
if((state_val_29878 === (4))){
var inst_29867 = (state_29877[(2)]);
var inst_29868 = process.call(null,inst_29867);
var state_29877__$1 = state_29877;
if(cljs.core.truth_(inst_29868)){
var statearr_29880_30038 = state_29877__$1;
(statearr_29880_30038[(1)] = (5));

} else {
var statearr_29881_30039 = state_29877__$1;
(statearr_29881_30039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (5))){
var state_29877__$1 = state_29877;
var statearr_29882_30040 = state_29877__$1;
(statearr_29882_30040[(2)] = null);

(statearr_29882_30040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (6))){
var state_29877__$1 = state_29877;
var statearr_29883_30041 = state_29877__$1;
(statearr_29883_30041[(2)] = null);

(statearr_29883_30041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (7))){
var inst_29873 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29884_30042 = state_29877__$1;
(statearr_29884_30042[(2)] = inst_29873);

(statearr_29884_30042[(1)] = (3));


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
});})(__30033,c__29457__auto___30036,G__29864_30034,n__27822__auto___30032,jobs,results,process,async))
;
return ((function (__30033,switch__29343__auto__,c__29457__auto___30036,G__29864_30034,n__27822__auto___30032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0 = (function (){
var statearr_29888 = [null,null,null,null,null,null,null];
(statearr_29888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__);

(statearr_29888[(1)] = (1));

return statearr_29888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1 = (function (state_29877){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_29877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e29889){if((e29889 instanceof Object)){
var ex__29347__auto__ = e29889;
var statearr_29890_30043 = state_29877;
(statearr_29890_30043[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30044 = state_29877;
state_29877 = G__30044;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__ = function(state_29877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1.call(this,state_29877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__;
})()
;})(__30033,switch__29343__auto__,c__29457__auto___30036,G__29864_30034,n__27822__auto___30032,jobs,results,process,async))
})();
var state__29459__auto__ = (function (){var statearr_29891 = f__29458__auto__.call(null);
(statearr_29891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___30036);

return statearr_29891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(__30033,c__29457__auto___30036,G__29864_30034,n__27822__auto___30032,jobs,results,process,async))
);


break;
case "async":
var c__29457__auto___30045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30033,c__29457__auto___30045,G__29864_30034,n__27822__auto___30032,jobs,results,process,async){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (__30033,c__29457__auto___30045,G__29864_30034,n__27822__auto___30032,jobs,results,process,async){
return (function (state_29904){
var state_val_29905 = (state_29904[(1)]);
if((state_val_29905 === (1))){
var state_29904__$1 = state_29904;
var statearr_29906_30046 = state_29904__$1;
(statearr_29906_30046[(2)] = null);

(statearr_29906_30046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (2))){
var state_29904__$1 = state_29904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29904__$1,(4),jobs);
} else {
if((state_val_29905 === (3))){
var inst_29902 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29904__$1,inst_29902);
} else {
if((state_val_29905 === (4))){
var inst_29894 = (state_29904[(2)]);
var inst_29895 = async.call(null,inst_29894);
var state_29904__$1 = state_29904;
if(cljs.core.truth_(inst_29895)){
var statearr_29907_30047 = state_29904__$1;
(statearr_29907_30047[(1)] = (5));

} else {
var statearr_29908_30048 = state_29904__$1;
(statearr_29908_30048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (5))){
var state_29904__$1 = state_29904;
var statearr_29909_30049 = state_29904__$1;
(statearr_29909_30049[(2)] = null);

(statearr_29909_30049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (6))){
var state_29904__$1 = state_29904;
var statearr_29910_30050 = state_29904__$1;
(statearr_29910_30050[(2)] = null);

(statearr_29910_30050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29905 === (7))){
var inst_29900 = (state_29904[(2)]);
var state_29904__$1 = state_29904;
var statearr_29911_30051 = state_29904__$1;
(statearr_29911_30051[(2)] = inst_29900);

(statearr_29911_30051[(1)] = (3));


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
});})(__30033,c__29457__auto___30045,G__29864_30034,n__27822__auto___30032,jobs,results,process,async))
;
return ((function (__30033,switch__29343__auto__,c__29457__auto___30045,G__29864_30034,n__27822__auto___30032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0 = (function (){
var statearr_29915 = [null,null,null,null,null,null,null];
(statearr_29915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__);

(statearr_29915[(1)] = (1));

return statearr_29915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1 = (function (state_29904){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_29904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e29916){if((e29916 instanceof Object)){
var ex__29347__auto__ = e29916;
var statearr_29917_30052 = state_29904;
(statearr_29917_30052[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30053 = state_29904;
state_29904 = G__30053;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__ = function(state_29904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1.call(this,state_29904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__;
})()
;})(__30033,switch__29343__auto__,c__29457__auto___30045,G__29864_30034,n__27822__auto___30032,jobs,results,process,async))
})();
var state__29459__auto__ = (function (){var statearr_29918 = f__29458__auto__.call(null);
(statearr_29918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___30045);

return statearr_29918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(__30033,c__29457__auto___30045,G__29864_30034,n__27822__auto___30032,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30054 = (__30033 + (1));
__30033 = G__30054;
continue;
} else {
}
break;
}

var c__29457__auto___30055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___30055,jobs,results,process,async){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___30055,jobs,results,process,async){
return (function (state_29940){
var state_val_29941 = (state_29940[(1)]);
if((state_val_29941 === (1))){
var state_29940__$1 = state_29940;
var statearr_29942_30056 = state_29940__$1;
(statearr_29942_30056[(2)] = null);

(statearr_29942_30056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (2))){
var state_29940__$1 = state_29940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29940__$1,(4),from);
} else {
if((state_val_29941 === (3))){
var inst_29938 = (state_29940[(2)]);
var state_29940__$1 = state_29940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29940__$1,inst_29938);
} else {
if((state_val_29941 === (4))){
var inst_29921 = (state_29940[(7)]);
var inst_29921__$1 = (state_29940[(2)]);
var inst_29922 = (inst_29921__$1 == null);
var state_29940__$1 = (function (){var statearr_29943 = state_29940;
(statearr_29943[(7)] = inst_29921__$1);

return statearr_29943;
})();
if(cljs.core.truth_(inst_29922)){
var statearr_29944_30057 = state_29940__$1;
(statearr_29944_30057[(1)] = (5));

} else {
var statearr_29945_30058 = state_29940__$1;
(statearr_29945_30058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (5))){
var inst_29924 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29940__$1 = state_29940;
var statearr_29946_30059 = state_29940__$1;
(statearr_29946_30059[(2)] = inst_29924);

(statearr_29946_30059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (6))){
var inst_29926 = (state_29940[(8)]);
var inst_29921 = (state_29940[(7)]);
var inst_29926__$1 = cljs.core.async.chan.call(null,(1));
var inst_29927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29928 = [inst_29921,inst_29926__$1];
var inst_29929 = (new cljs.core.PersistentVector(null,2,(5),inst_29927,inst_29928,null));
var state_29940__$1 = (function (){var statearr_29947 = state_29940;
(statearr_29947[(8)] = inst_29926__$1);

return statearr_29947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29940__$1,(8),jobs,inst_29929);
} else {
if((state_val_29941 === (7))){
var inst_29936 = (state_29940[(2)]);
var state_29940__$1 = state_29940;
var statearr_29948_30060 = state_29940__$1;
(statearr_29948_30060[(2)] = inst_29936);

(statearr_29948_30060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (8))){
var inst_29926 = (state_29940[(8)]);
var inst_29931 = (state_29940[(2)]);
var state_29940__$1 = (function (){var statearr_29949 = state_29940;
(statearr_29949[(9)] = inst_29931);

return statearr_29949;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29940__$1,(9),results,inst_29926);
} else {
if((state_val_29941 === (9))){
var inst_29933 = (state_29940[(2)]);
var state_29940__$1 = (function (){var statearr_29950 = state_29940;
(statearr_29950[(10)] = inst_29933);

return statearr_29950;
})();
var statearr_29951_30061 = state_29940__$1;
(statearr_29951_30061[(2)] = null);

(statearr_29951_30061[(1)] = (2));


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
});})(c__29457__auto___30055,jobs,results,process,async))
;
return ((function (switch__29343__auto__,c__29457__auto___30055,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0 = (function (){
var statearr_29955 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__);

(statearr_29955[(1)] = (1));

return statearr_29955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1 = (function (state_29940){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_29940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e29956){if((e29956 instanceof Object)){
var ex__29347__auto__ = e29956;
var statearr_29957_30062 = state_29940;
(statearr_29957_30062[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30063 = state_29940;
state_29940 = G__30063;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__ = function(state_29940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1.call(this,state_29940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___30055,jobs,results,process,async))
})();
var state__29459__auto__ = (function (){var statearr_29958 = f__29458__auto__.call(null);
(statearr_29958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___30055);

return statearr_29958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___30055,jobs,results,process,async))
);


var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__,jobs,results,process,async){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__,jobs,results,process,async){
return (function (state_29996){
var state_val_29997 = (state_29996[(1)]);
if((state_val_29997 === (7))){
var inst_29992 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_29998_30064 = state_29996__$1;
(statearr_29998_30064[(2)] = inst_29992);

(statearr_29998_30064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (20))){
var state_29996__$1 = state_29996;
var statearr_29999_30065 = state_29996__$1;
(statearr_29999_30065[(2)] = null);

(statearr_29999_30065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (1))){
var state_29996__$1 = state_29996;
var statearr_30000_30066 = state_29996__$1;
(statearr_30000_30066[(2)] = null);

(statearr_30000_30066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (4))){
var inst_29961 = (state_29996[(7)]);
var inst_29961__$1 = (state_29996[(2)]);
var inst_29962 = (inst_29961__$1 == null);
var state_29996__$1 = (function (){var statearr_30001 = state_29996;
(statearr_30001[(7)] = inst_29961__$1);

return statearr_30001;
})();
if(cljs.core.truth_(inst_29962)){
var statearr_30002_30067 = state_29996__$1;
(statearr_30002_30067[(1)] = (5));

} else {
var statearr_30003_30068 = state_29996__$1;
(statearr_30003_30068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (15))){
var inst_29974 = (state_29996[(8)]);
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29996__$1,(18),to,inst_29974);
} else {
if((state_val_29997 === (21))){
var inst_29987 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_30004_30069 = state_29996__$1;
(statearr_30004_30069[(2)] = inst_29987);

(statearr_30004_30069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (13))){
var inst_29989 = (state_29996[(2)]);
var state_29996__$1 = (function (){var statearr_30005 = state_29996;
(statearr_30005[(9)] = inst_29989);

return statearr_30005;
})();
var statearr_30006_30070 = state_29996__$1;
(statearr_30006_30070[(2)] = null);

(statearr_30006_30070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (6))){
var inst_29961 = (state_29996[(7)]);
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29996__$1,(11),inst_29961);
} else {
if((state_val_29997 === (17))){
var inst_29982 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
if(cljs.core.truth_(inst_29982)){
var statearr_30007_30071 = state_29996__$1;
(statearr_30007_30071[(1)] = (19));

} else {
var statearr_30008_30072 = state_29996__$1;
(statearr_30008_30072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (3))){
var inst_29994 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29996__$1,inst_29994);
} else {
if((state_val_29997 === (12))){
var inst_29971 = (state_29996[(10)]);
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29996__$1,(14),inst_29971);
} else {
if((state_val_29997 === (2))){
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29996__$1,(4),results);
} else {
if((state_val_29997 === (19))){
var state_29996__$1 = state_29996;
var statearr_30009_30073 = state_29996__$1;
(statearr_30009_30073[(2)] = null);

(statearr_30009_30073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (11))){
var inst_29971 = (state_29996[(2)]);
var state_29996__$1 = (function (){var statearr_30010 = state_29996;
(statearr_30010[(10)] = inst_29971);

return statearr_30010;
})();
var statearr_30011_30074 = state_29996__$1;
(statearr_30011_30074[(2)] = null);

(statearr_30011_30074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (9))){
var state_29996__$1 = state_29996;
var statearr_30012_30075 = state_29996__$1;
(statearr_30012_30075[(2)] = null);

(statearr_30012_30075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (5))){
var state_29996__$1 = state_29996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30013_30076 = state_29996__$1;
(statearr_30013_30076[(1)] = (8));

} else {
var statearr_30014_30077 = state_29996__$1;
(statearr_30014_30077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (14))){
var inst_29976 = (state_29996[(11)]);
var inst_29974 = (state_29996[(8)]);
var inst_29974__$1 = (state_29996[(2)]);
var inst_29975 = (inst_29974__$1 == null);
var inst_29976__$1 = cljs.core.not.call(null,inst_29975);
var state_29996__$1 = (function (){var statearr_30015 = state_29996;
(statearr_30015[(11)] = inst_29976__$1);

(statearr_30015[(8)] = inst_29974__$1);

return statearr_30015;
})();
if(inst_29976__$1){
var statearr_30016_30078 = state_29996__$1;
(statearr_30016_30078[(1)] = (15));

} else {
var statearr_30017_30079 = state_29996__$1;
(statearr_30017_30079[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (16))){
var inst_29976 = (state_29996[(11)]);
var state_29996__$1 = state_29996;
var statearr_30018_30080 = state_29996__$1;
(statearr_30018_30080[(2)] = inst_29976);

(statearr_30018_30080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (10))){
var inst_29968 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_30019_30081 = state_29996__$1;
(statearr_30019_30081[(2)] = inst_29968);

(statearr_30019_30081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (18))){
var inst_29979 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_30020_30082 = state_29996__$1;
(statearr_30020_30082[(2)] = inst_29979);

(statearr_30020_30082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (8))){
var inst_29965 = cljs.core.async.close_BANG_.call(null,to);
var state_29996__$1 = state_29996;
var statearr_30021_30083 = state_29996__$1;
(statearr_30021_30083[(2)] = inst_29965);

(statearr_30021_30083[(1)] = (10));


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
}
}
}
}
});})(c__29457__auto__,jobs,results,process,async))
;
return ((function (switch__29343__auto__,c__29457__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0 = (function (){
var statearr_30025 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__);

(statearr_30025[(1)] = (1));

return statearr_30025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1 = (function (state_29996){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_29996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e30026){if((e30026 instanceof Object)){
var ex__29347__auto__ = e30026;
var statearr_30027_30084 = state_29996;
(statearr_30027_30084[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30085 = state_29996;
state_29996 = G__30085;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__ = function(state_29996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1.call(this,state_29996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__,jobs,results,process,async))
})();
var state__29459__auto__ = (function (){var statearr_30028 = f__29458__auto__.call(null);
(statearr_30028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_30028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__,jobs,results,process,async))
);

return c__29457__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30086 = [];
var len__27992__auto___30089 = arguments.length;
var i__27993__auto___30090 = (0);
while(true){
if((i__27993__auto___30090 < len__27992__auto___30089)){
args30086.push((arguments[i__27993__auto___30090]));

var G__30091 = (i__27993__auto___30090 + (1));
i__27993__auto___30090 = G__30091;
continue;
} else {
}
break;
}

var G__30088 = args30086.length;
switch (G__30088) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30086.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30093 = [];
var len__27992__auto___30096 = arguments.length;
var i__27993__auto___30097 = (0);
while(true){
if((i__27993__auto___30097 < len__27992__auto___30096)){
args30093.push((arguments[i__27993__auto___30097]));

var G__30098 = (i__27993__auto___30097 + (1));
i__27993__auto___30097 = G__30098;
continue;
} else {
}
break;
}

var G__30095 = args30093.length;
switch (G__30095) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30093.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30100 = [];
var len__27992__auto___30153 = arguments.length;
var i__27993__auto___30154 = (0);
while(true){
if((i__27993__auto___30154 < len__27992__auto___30153)){
args30100.push((arguments[i__27993__auto___30154]));

var G__30155 = (i__27993__auto___30154 + (1));
i__27993__auto___30154 = G__30155;
continue;
} else {
}
break;
}

var G__30102 = args30100.length;
switch (G__30102) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30100.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29457__auto___30157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___30157,tc,fc){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___30157,tc,fc){
return (function (state_30128){
var state_val_30129 = (state_30128[(1)]);
if((state_val_30129 === (7))){
var inst_30124 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
var statearr_30130_30158 = state_30128__$1;
(statearr_30130_30158[(2)] = inst_30124);

(statearr_30130_30158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (1))){
var state_30128__$1 = state_30128;
var statearr_30131_30159 = state_30128__$1;
(statearr_30131_30159[(2)] = null);

(statearr_30131_30159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (4))){
var inst_30105 = (state_30128[(7)]);
var inst_30105__$1 = (state_30128[(2)]);
var inst_30106 = (inst_30105__$1 == null);
var state_30128__$1 = (function (){var statearr_30132 = state_30128;
(statearr_30132[(7)] = inst_30105__$1);

return statearr_30132;
})();
if(cljs.core.truth_(inst_30106)){
var statearr_30133_30160 = state_30128__$1;
(statearr_30133_30160[(1)] = (5));

} else {
var statearr_30134_30161 = state_30128__$1;
(statearr_30134_30161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (13))){
var state_30128__$1 = state_30128;
var statearr_30135_30162 = state_30128__$1;
(statearr_30135_30162[(2)] = null);

(statearr_30135_30162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (6))){
var inst_30105 = (state_30128[(7)]);
var inst_30111 = p.call(null,inst_30105);
var state_30128__$1 = state_30128;
if(cljs.core.truth_(inst_30111)){
var statearr_30136_30163 = state_30128__$1;
(statearr_30136_30163[(1)] = (9));

} else {
var statearr_30137_30164 = state_30128__$1;
(statearr_30137_30164[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (3))){
var inst_30126 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30128__$1,inst_30126);
} else {
if((state_val_30129 === (12))){
var state_30128__$1 = state_30128;
var statearr_30138_30165 = state_30128__$1;
(statearr_30138_30165[(2)] = null);

(statearr_30138_30165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (2))){
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30128__$1,(4),ch);
} else {
if((state_val_30129 === (11))){
var inst_30105 = (state_30128[(7)]);
var inst_30115 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30128__$1,(8),inst_30115,inst_30105);
} else {
if((state_val_30129 === (9))){
var state_30128__$1 = state_30128;
var statearr_30139_30166 = state_30128__$1;
(statearr_30139_30166[(2)] = tc);

(statearr_30139_30166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (5))){
var inst_30108 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30109 = cljs.core.async.close_BANG_.call(null,fc);
var state_30128__$1 = (function (){var statearr_30140 = state_30128;
(statearr_30140[(8)] = inst_30108);

return statearr_30140;
})();
var statearr_30141_30167 = state_30128__$1;
(statearr_30141_30167[(2)] = inst_30109);

(statearr_30141_30167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (14))){
var inst_30122 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
var statearr_30142_30168 = state_30128__$1;
(statearr_30142_30168[(2)] = inst_30122);

(statearr_30142_30168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (10))){
var state_30128__$1 = state_30128;
var statearr_30143_30169 = state_30128__$1;
(statearr_30143_30169[(2)] = fc);

(statearr_30143_30169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (8))){
var inst_30117 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
if(cljs.core.truth_(inst_30117)){
var statearr_30144_30170 = state_30128__$1;
(statearr_30144_30170[(1)] = (12));

} else {
var statearr_30145_30171 = state_30128__$1;
(statearr_30145_30171[(1)] = (13));

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
});})(c__29457__auto___30157,tc,fc))
;
return ((function (switch__29343__auto__,c__29457__auto___30157,tc,fc){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_30149 = [null,null,null,null,null,null,null,null,null];
(statearr_30149[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_30149[(1)] = (1));

return statearr_30149;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_30128){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_30128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e30150){if((e30150 instanceof Object)){
var ex__29347__auto__ = e30150;
var statearr_30151_30172 = state_30128;
(statearr_30151_30172[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30173 = state_30128;
state_30128 = G__30173;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_30128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_30128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___30157,tc,fc))
})();
var state__29459__auto__ = (function (){var statearr_30152 = f__29458__auto__.call(null);
(statearr_30152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___30157);

return statearr_30152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___30157,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__){
return (function (state_30237){
var state_val_30238 = (state_30237[(1)]);
if((state_val_30238 === (7))){
var inst_30233 = (state_30237[(2)]);
var state_30237__$1 = state_30237;
var statearr_30239_30260 = state_30237__$1;
(statearr_30239_30260[(2)] = inst_30233);

(statearr_30239_30260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (1))){
var inst_30217 = init;
var state_30237__$1 = (function (){var statearr_30240 = state_30237;
(statearr_30240[(7)] = inst_30217);

return statearr_30240;
})();
var statearr_30241_30261 = state_30237__$1;
(statearr_30241_30261[(2)] = null);

(statearr_30241_30261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (4))){
var inst_30220 = (state_30237[(8)]);
var inst_30220__$1 = (state_30237[(2)]);
var inst_30221 = (inst_30220__$1 == null);
var state_30237__$1 = (function (){var statearr_30242 = state_30237;
(statearr_30242[(8)] = inst_30220__$1);

return statearr_30242;
})();
if(cljs.core.truth_(inst_30221)){
var statearr_30243_30262 = state_30237__$1;
(statearr_30243_30262[(1)] = (5));

} else {
var statearr_30244_30263 = state_30237__$1;
(statearr_30244_30263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (6))){
var inst_30217 = (state_30237[(7)]);
var inst_30224 = (state_30237[(9)]);
var inst_30220 = (state_30237[(8)]);
var inst_30224__$1 = f.call(null,inst_30217,inst_30220);
var inst_30225 = cljs.core.reduced_QMARK_.call(null,inst_30224__$1);
var state_30237__$1 = (function (){var statearr_30245 = state_30237;
(statearr_30245[(9)] = inst_30224__$1);

return statearr_30245;
})();
if(inst_30225){
var statearr_30246_30264 = state_30237__$1;
(statearr_30246_30264[(1)] = (8));

} else {
var statearr_30247_30265 = state_30237__$1;
(statearr_30247_30265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (3))){
var inst_30235 = (state_30237[(2)]);
var state_30237__$1 = state_30237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30237__$1,inst_30235);
} else {
if((state_val_30238 === (2))){
var state_30237__$1 = state_30237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30237__$1,(4),ch);
} else {
if((state_val_30238 === (9))){
var inst_30224 = (state_30237[(9)]);
var inst_30217 = inst_30224;
var state_30237__$1 = (function (){var statearr_30248 = state_30237;
(statearr_30248[(7)] = inst_30217);

return statearr_30248;
})();
var statearr_30249_30266 = state_30237__$1;
(statearr_30249_30266[(2)] = null);

(statearr_30249_30266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (5))){
var inst_30217 = (state_30237[(7)]);
var state_30237__$1 = state_30237;
var statearr_30250_30267 = state_30237__$1;
(statearr_30250_30267[(2)] = inst_30217);

(statearr_30250_30267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (10))){
var inst_30231 = (state_30237[(2)]);
var state_30237__$1 = state_30237;
var statearr_30251_30268 = state_30237__$1;
(statearr_30251_30268[(2)] = inst_30231);

(statearr_30251_30268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (8))){
var inst_30224 = (state_30237[(9)]);
var inst_30227 = cljs.core.deref.call(null,inst_30224);
var state_30237__$1 = state_30237;
var statearr_30252_30269 = state_30237__$1;
(statearr_30252_30269[(2)] = inst_30227);

(statearr_30252_30269[(1)] = (10));


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
});})(c__29457__auto__))
;
return ((function (switch__29343__auto__,c__29457__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29344__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29344__auto____0 = (function (){
var statearr_30256 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30256[(0)] = cljs$core$async$reduce_$_state_machine__29344__auto__);

(statearr_30256[(1)] = (1));

return statearr_30256;
});
var cljs$core$async$reduce_$_state_machine__29344__auto____1 = (function (state_30237){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_30237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e30257){if((e30257 instanceof Object)){
var ex__29347__auto__ = e30257;
var statearr_30258_30270 = state_30237;
(statearr_30258_30270[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30271 = state_30237;
state_30237 = G__30271;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29344__auto__ = function(state_30237){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29344__auto____1.call(this,state_30237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29344__auto____0;
cljs$core$async$reduce_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29344__auto____1;
return cljs$core$async$reduce_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__))
})();
var state__29459__auto__ = (function (){var statearr_30259 = f__29458__auto__.call(null);
(statearr_30259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_30259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__))
);

return c__29457__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30272 = [];
var len__27992__auto___30324 = arguments.length;
var i__27993__auto___30325 = (0);
while(true){
if((i__27993__auto___30325 < len__27992__auto___30324)){
args30272.push((arguments[i__27993__auto___30325]));

var G__30326 = (i__27993__auto___30325 + (1));
i__27993__auto___30325 = G__30326;
continue;
} else {
}
break;
}

var G__30274 = args30272.length;
switch (G__30274) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30272.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__){
return (function (state_30299){
var state_val_30300 = (state_30299[(1)]);
if((state_val_30300 === (7))){
var inst_30281 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30301_30328 = state_30299__$1;
(statearr_30301_30328[(2)] = inst_30281);

(statearr_30301_30328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (1))){
var inst_30275 = cljs.core.seq.call(null,coll);
var inst_30276 = inst_30275;
var state_30299__$1 = (function (){var statearr_30302 = state_30299;
(statearr_30302[(7)] = inst_30276);

return statearr_30302;
})();
var statearr_30303_30329 = state_30299__$1;
(statearr_30303_30329[(2)] = null);

(statearr_30303_30329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (4))){
var inst_30276 = (state_30299[(7)]);
var inst_30279 = cljs.core.first.call(null,inst_30276);
var state_30299__$1 = state_30299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30299__$1,(7),ch,inst_30279);
} else {
if((state_val_30300 === (13))){
var inst_30293 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30304_30330 = state_30299__$1;
(statearr_30304_30330[(2)] = inst_30293);

(statearr_30304_30330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (6))){
var inst_30284 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
if(cljs.core.truth_(inst_30284)){
var statearr_30305_30331 = state_30299__$1;
(statearr_30305_30331[(1)] = (8));

} else {
var statearr_30306_30332 = state_30299__$1;
(statearr_30306_30332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (3))){
var inst_30297 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30299__$1,inst_30297);
} else {
if((state_val_30300 === (12))){
var state_30299__$1 = state_30299;
var statearr_30307_30333 = state_30299__$1;
(statearr_30307_30333[(2)] = null);

(statearr_30307_30333[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (2))){
var inst_30276 = (state_30299[(7)]);
var state_30299__$1 = state_30299;
if(cljs.core.truth_(inst_30276)){
var statearr_30308_30334 = state_30299__$1;
(statearr_30308_30334[(1)] = (4));

} else {
var statearr_30309_30335 = state_30299__$1;
(statearr_30309_30335[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (11))){
var inst_30290 = cljs.core.async.close_BANG_.call(null,ch);
var state_30299__$1 = state_30299;
var statearr_30310_30336 = state_30299__$1;
(statearr_30310_30336[(2)] = inst_30290);

(statearr_30310_30336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (9))){
var state_30299__$1 = state_30299;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30311_30337 = state_30299__$1;
(statearr_30311_30337[(1)] = (11));

} else {
var statearr_30312_30338 = state_30299__$1;
(statearr_30312_30338[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (5))){
var inst_30276 = (state_30299[(7)]);
var state_30299__$1 = state_30299;
var statearr_30313_30339 = state_30299__$1;
(statearr_30313_30339[(2)] = inst_30276);

(statearr_30313_30339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (10))){
var inst_30295 = (state_30299[(2)]);
var state_30299__$1 = state_30299;
var statearr_30314_30340 = state_30299__$1;
(statearr_30314_30340[(2)] = inst_30295);

(statearr_30314_30340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30300 === (8))){
var inst_30276 = (state_30299[(7)]);
var inst_30286 = cljs.core.next.call(null,inst_30276);
var inst_30276__$1 = inst_30286;
var state_30299__$1 = (function (){var statearr_30315 = state_30299;
(statearr_30315[(7)] = inst_30276__$1);

return statearr_30315;
})();
var statearr_30316_30341 = state_30299__$1;
(statearr_30316_30341[(2)] = null);

(statearr_30316_30341[(1)] = (2));


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
});})(c__29457__auto__))
;
return ((function (switch__29343__auto__,c__29457__auto__){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_30320 = [null,null,null,null,null,null,null,null];
(statearr_30320[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_30320[(1)] = (1));

return statearr_30320;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_30299){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_30299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e30321){if((e30321 instanceof Object)){
var ex__29347__auto__ = e30321;
var statearr_30322_30342 = state_30299;
(statearr_30322_30342[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30343 = state_30299;
state_30299 = G__30343;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_30299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_30299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__))
})();
var state__29459__auto__ = (function (){var statearr_30323 = f__29458__auto__.call(null);
(statearr_30323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_30323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__))
);

return c__29457__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27522__auto__ = (((_ == null))?null:_);
var m__27523__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,_);
} else {
var m__27523__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27522__auto__ = (((m == null))?null:m);
var m__27523__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27523__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27522__auto__ = (((m == null))?null:m);
var m__27523__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,m,ch);
} else {
var m__27523__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27522__auto__ = (((m == null))?null:m);
var m__27523__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,m);
} else {
var m__27523__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30569 = (function (mult,ch,cs,meta30570){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30570 = meta30570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30571,meta30570__$1){
var self__ = this;
var _30571__$1 = this;
return (new cljs.core.async.t_cljs$core$async30569(self__.mult,self__.ch,self__.cs,meta30570__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30571){
var self__ = this;
var _30571__$1 = this;
return self__.meta30570;
});})(cs))
;

cljs.core.async.t_cljs$core$async30569.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30569.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30569.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30569.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30569.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30569.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30570","meta30570",382815136,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30569";

cljs.core.async.t_cljs$core$async30569.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.core.async/t_cljs$core$async30569");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30569 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30569(mult__$1,ch__$1,cs__$1,meta30570){
return (new cljs.core.async.t_cljs$core$async30569(mult__$1,ch__$1,cs__$1,meta30570));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30569(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29457__auto___30794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___30794,cs,m,dchan,dctr,done){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___30794,cs,m,dchan,dctr,done){
return (function (state_30706){
var state_val_30707 = (state_30706[(1)]);
if((state_val_30707 === (7))){
var inst_30702 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30708_30795 = state_30706__$1;
(statearr_30708_30795[(2)] = inst_30702);

(statearr_30708_30795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (20))){
var inst_30605 = (state_30706[(7)]);
var inst_30617 = cljs.core.first.call(null,inst_30605);
var inst_30618 = cljs.core.nth.call(null,inst_30617,(0),null);
var inst_30619 = cljs.core.nth.call(null,inst_30617,(1),null);
var state_30706__$1 = (function (){var statearr_30709 = state_30706;
(statearr_30709[(8)] = inst_30618);

return statearr_30709;
})();
if(cljs.core.truth_(inst_30619)){
var statearr_30710_30796 = state_30706__$1;
(statearr_30710_30796[(1)] = (22));

} else {
var statearr_30711_30797 = state_30706__$1;
(statearr_30711_30797[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (27))){
var inst_30647 = (state_30706[(9)]);
var inst_30574 = (state_30706[(10)]);
var inst_30654 = (state_30706[(11)]);
var inst_30649 = (state_30706[(12)]);
var inst_30654__$1 = cljs.core._nth.call(null,inst_30647,inst_30649);
var inst_30655 = cljs.core.async.put_BANG_.call(null,inst_30654__$1,inst_30574,done);
var state_30706__$1 = (function (){var statearr_30712 = state_30706;
(statearr_30712[(11)] = inst_30654__$1);

return statearr_30712;
})();
if(cljs.core.truth_(inst_30655)){
var statearr_30713_30798 = state_30706__$1;
(statearr_30713_30798[(1)] = (30));

} else {
var statearr_30714_30799 = state_30706__$1;
(statearr_30714_30799[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (1))){
var state_30706__$1 = state_30706;
var statearr_30715_30800 = state_30706__$1;
(statearr_30715_30800[(2)] = null);

(statearr_30715_30800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (24))){
var inst_30605 = (state_30706[(7)]);
var inst_30624 = (state_30706[(2)]);
var inst_30625 = cljs.core.next.call(null,inst_30605);
var inst_30583 = inst_30625;
var inst_30584 = null;
var inst_30585 = (0);
var inst_30586 = (0);
var state_30706__$1 = (function (){var statearr_30716 = state_30706;
(statearr_30716[(13)] = inst_30583);

(statearr_30716[(14)] = inst_30584);

(statearr_30716[(15)] = inst_30586);

(statearr_30716[(16)] = inst_30585);

(statearr_30716[(17)] = inst_30624);

return statearr_30716;
})();
var statearr_30717_30801 = state_30706__$1;
(statearr_30717_30801[(2)] = null);

(statearr_30717_30801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (39))){
var state_30706__$1 = state_30706;
var statearr_30721_30802 = state_30706__$1;
(statearr_30721_30802[(2)] = null);

(statearr_30721_30802[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (4))){
var inst_30574 = (state_30706[(10)]);
var inst_30574__$1 = (state_30706[(2)]);
var inst_30575 = (inst_30574__$1 == null);
var state_30706__$1 = (function (){var statearr_30722 = state_30706;
(statearr_30722[(10)] = inst_30574__$1);

return statearr_30722;
})();
if(cljs.core.truth_(inst_30575)){
var statearr_30723_30803 = state_30706__$1;
(statearr_30723_30803[(1)] = (5));

} else {
var statearr_30724_30804 = state_30706__$1;
(statearr_30724_30804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (15))){
var inst_30583 = (state_30706[(13)]);
var inst_30584 = (state_30706[(14)]);
var inst_30586 = (state_30706[(15)]);
var inst_30585 = (state_30706[(16)]);
var inst_30601 = (state_30706[(2)]);
var inst_30602 = (inst_30586 + (1));
var tmp30718 = inst_30583;
var tmp30719 = inst_30584;
var tmp30720 = inst_30585;
var inst_30583__$1 = tmp30718;
var inst_30584__$1 = tmp30719;
var inst_30585__$1 = tmp30720;
var inst_30586__$1 = inst_30602;
var state_30706__$1 = (function (){var statearr_30725 = state_30706;
(statearr_30725[(13)] = inst_30583__$1);

(statearr_30725[(18)] = inst_30601);

(statearr_30725[(14)] = inst_30584__$1);

(statearr_30725[(15)] = inst_30586__$1);

(statearr_30725[(16)] = inst_30585__$1);

return statearr_30725;
})();
var statearr_30726_30805 = state_30706__$1;
(statearr_30726_30805[(2)] = null);

(statearr_30726_30805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (21))){
var inst_30628 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30730_30806 = state_30706__$1;
(statearr_30730_30806[(2)] = inst_30628);

(statearr_30730_30806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (31))){
var inst_30654 = (state_30706[(11)]);
var inst_30658 = done.call(null,null);
var inst_30659 = cljs.core.async.untap_STAR_.call(null,m,inst_30654);
var state_30706__$1 = (function (){var statearr_30731 = state_30706;
(statearr_30731[(19)] = inst_30658);

return statearr_30731;
})();
var statearr_30732_30807 = state_30706__$1;
(statearr_30732_30807[(2)] = inst_30659);

(statearr_30732_30807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (32))){
var inst_30647 = (state_30706[(9)]);
var inst_30646 = (state_30706[(20)]);
var inst_30649 = (state_30706[(12)]);
var inst_30648 = (state_30706[(21)]);
var inst_30661 = (state_30706[(2)]);
var inst_30662 = (inst_30649 + (1));
var tmp30727 = inst_30647;
var tmp30728 = inst_30646;
var tmp30729 = inst_30648;
var inst_30646__$1 = tmp30728;
var inst_30647__$1 = tmp30727;
var inst_30648__$1 = tmp30729;
var inst_30649__$1 = inst_30662;
var state_30706__$1 = (function (){var statearr_30733 = state_30706;
(statearr_30733[(9)] = inst_30647__$1);

(statearr_30733[(22)] = inst_30661);

(statearr_30733[(20)] = inst_30646__$1);

(statearr_30733[(12)] = inst_30649__$1);

(statearr_30733[(21)] = inst_30648__$1);

return statearr_30733;
})();
var statearr_30734_30808 = state_30706__$1;
(statearr_30734_30808[(2)] = null);

(statearr_30734_30808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (40))){
var inst_30674 = (state_30706[(23)]);
var inst_30678 = done.call(null,null);
var inst_30679 = cljs.core.async.untap_STAR_.call(null,m,inst_30674);
var state_30706__$1 = (function (){var statearr_30735 = state_30706;
(statearr_30735[(24)] = inst_30678);

return statearr_30735;
})();
var statearr_30736_30809 = state_30706__$1;
(statearr_30736_30809[(2)] = inst_30679);

(statearr_30736_30809[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (33))){
var inst_30665 = (state_30706[(25)]);
var inst_30667 = cljs.core.chunked_seq_QMARK_.call(null,inst_30665);
var state_30706__$1 = state_30706;
if(inst_30667){
var statearr_30737_30810 = state_30706__$1;
(statearr_30737_30810[(1)] = (36));

} else {
var statearr_30738_30811 = state_30706__$1;
(statearr_30738_30811[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (13))){
var inst_30595 = (state_30706[(26)]);
var inst_30598 = cljs.core.async.close_BANG_.call(null,inst_30595);
var state_30706__$1 = state_30706;
var statearr_30739_30812 = state_30706__$1;
(statearr_30739_30812[(2)] = inst_30598);

(statearr_30739_30812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (22))){
var inst_30618 = (state_30706[(8)]);
var inst_30621 = cljs.core.async.close_BANG_.call(null,inst_30618);
var state_30706__$1 = state_30706;
var statearr_30740_30813 = state_30706__$1;
(statearr_30740_30813[(2)] = inst_30621);

(statearr_30740_30813[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (36))){
var inst_30665 = (state_30706[(25)]);
var inst_30669 = cljs.core.chunk_first.call(null,inst_30665);
var inst_30670 = cljs.core.chunk_rest.call(null,inst_30665);
var inst_30671 = cljs.core.count.call(null,inst_30669);
var inst_30646 = inst_30670;
var inst_30647 = inst_30669;
var inst_30648 = inst_30671;
var inst_30649 = (0);
var state_30706__$1 = (function (){var statearr_30741 = state_30706;
(statearr_30741[(9)] = inst_30647);

(statearr_30741[(20)] = inst_30646);

(statearr_30741[(12)] = inst_30649);

(statearr_30741[(21)] = inst_30648);

return statearr_30741;
})();
var statearr_30742_30814 = state_30706__$1;
(statearr_30742_30814[(2)] = null);

(statearr_30742_30814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (41))){
var inst_30665 = (state_30706[(25)]);
var inst_30681 = (state_30706[(2)]);
var inst_30682 = cljs.core.next.call(null,inst_30665);
var inst_30646 = inst_30682;
var inst_30647 = null;
var inst_30648 = (0);
var inst_30649 = (0);
var state_30706__$1 = (function (){var statearr_30743 = state_30706;
(statearr_30743[(9)] = inst_30647);

(statearr_30743[(20)] = inst_30646);

(statearr_30743[(27)] = inst_30681);

(statearr_30743[(12)] = inst_30649);

(statearr_30743[(21)] = inst_30648);

return statearr_30743;
})();
var statearr_30744_30815 = state_30706__$1;
(statearr_30744_30815[(2)] = null);

(statearr_30744_30815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (43))){
var state_30706__$1 = state_30706;
var statearr_30745_30816 = state_30706__$1;
(statearr_30745_30816[(2)] = null);

(statearr_30745_30816[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (29))){
var inst_30690 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30746_30817 = state_30706__$1;
(statearr_30746_30817[(2)] = inst_30690);

(statearr_30746_30817[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (44))){
var inst_30699 = (state_30706[(2)]);
var state_30706__$1 = (function (){var statearr_30747 = state_30706;
(statearr_30747[(28)] = inst_30699);

return statearr_30747;
})();
var statearr_30748_30818 = state_30706__$1;
(statearr_30748_30818[(2)] = null);

(statearr_30748_30818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (6))){
var inst_30638 = (state_30706[(29)]);
var inst_30637 = cljs.core.deref.call(null,cs);
var inst_30638__$1 = cljs.core.keys.call(null,inst_30637);
var inst_30639 = cljs.core.count.call(null,inst_30638__$1);
var inst_30640 = cljs.core.reset_BANG_.call(null,dctr,inst_30639);
var inst_30645 = cljs.core.seq.call(null,inst_30638__$1);
var inst_30646 = inst_30645;
var inst_30647 = null;
var inst_30648 = (0);
var inst_30649 = (0);
var state_30706__$1 = (function (){var statearr_30749 = state_30706;
(statearr_30749[(9)] = inst_30647);

(statearr_30749[(30)] = inst_30640);

(statearr_30749[(20)] = inst_30646);

(statearr_30749[(12)] = inst_30649);

(statearr_30749[(21)] = inst_30648);

(statearr_30749[(29)] = inst_30638__$1);

return statearr_30749;
})();
var statearr_30750_30819 = state_30706__$1;
(statearr_30750_30819[(2)] = null);

(statearr_30750_30819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (28))){
var inst_30646 = (state_30706[(20)]);
var inst_30665 = (state_30706[(25)]);
var inst_30665__$1 = cljs.core.seq.call(null,inst_30646);
var state_30706__$1 = (function (){var statearr_30751 = state_30706;
(statearr_30751[(25)] = inst_30665__$1);

return statearr_30751;
})();
if(inst_30665__$1){
var statearr_30752_30820 = state_30706__$1;
(statearr_30752_30820[(1)] = (33));

} else {
var statearr_30753_30821 = state_30706__$1;
(statearr_30753_30821[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (25))){
var inst_30649 = (state_30706[(12)]);
var inst_30648 = (state_30706[(21)]);
var inst_30651 = (inst_30649 < inst_30648);
var inst_30652 = inst_30651;
var state_30706__$1 = state_30706;
if(cljs.core.truth_(inst_30652)){
var statearr_30754_30822 = state_30706__$1;
(statearr_30754_30822[(1)] = (27));

} else {
var statearr_30755_30823 = state_30706__$1;
(statearr_30755_30823[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (34))){
var state_30706__$1 = state_30706;
var statearr_30756_30824 = state_30706__$1;
(statearr_30756_30824[(2)] = null);

(statearr_30756_30824[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (17))){
var state_30706__$1 = state_30706;
var statearr_30757_30825 = state_30706__$1;
(statearr_30757_30825[(2)] = null);

(statearr_30757_30825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (3))){
var inst_30704 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30706__$1,inst_30704);
} else {
if((state_val_30707 === (12))){
var inst_30633 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30758_30826 = state_30706__$1;
(statearr_30758_30826[(2)] = inst_30633);

(statearr_30758_30826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (2))){
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30706__$1,(4),ch);
} else {
if((state_val_30707 === (23))){
var state_30706__$1 = state_30706;
var statearr_30759_30827 = state_30706__$1;
(statearr_30759_30827[(2)] = null);

(statearr_30759_30827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (35))){
var inst_30688 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30760_30828 = state_30706__$1;
(statearr_30760_30828[(2)] = inst_30688);

(statearr_30760_30828[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (19))){
var inst_30605 = (state_30706[(7)]);
var inst_30609 = cljs.core.chunk_first.call(null,inst_30605);
var inst_30610 = cljs.core.chunk_rest.call(null,inst_30605);
var inst_30611 = cljs.core.count.call(null,inst_30609);
var inst_30583 = inst_30610;
var inst_30584 = inst_30609;
var inst_30585 = inst_30611;
var inst_30586 = (0);
var state_30706__$1 = (function (){var statearr_30761 = state_30706;
(statearr_30761[(13)] = inst_30583);

(statearr_30761[(14)] = inst_30584);

(statearr_30761[(15)] = inst_30586);

(statearr_30761[(16)] = inst_30585);

return statearr_30761;
})();
var statearr_30762_30829 = state_30706__$1;
(statearr_30762_30829[(2)] = null);

(statearr_30762_30829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (11))){
var inst_30605 = (state_30706[(7)]);
var inst_30583 = (state_30706[(13)]);
var inst_30605__$1 = cljs.core.seq.call(null,inst_30583);
var state_30706__$1 = (function (){var statearr_30763 = state_30706;
(statearr_30763[(7)] = inst_30605__$1);

return statearr_30763;
})();
if(inst_30605__$1){
var statearr_30764_30830 = state_30706__$1;
(statearr_30764_30830[(1)] = (16));

} else {
var statearr_30765_30831 = state_30706__$1;
(statearr_30765_30831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (9))){
var inst_30635 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30766_30832 = state_30706__$1;
(statearr_30766_30832[(2)] = inst_30635);

(statearr_30766_30832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (5))){
var inst_30581 = cljs.core.deref.call(null,cs);
var inst_30582 = cljs.core.seq.call(null,inst_30581);
var inst_30583 = inst_30582;
var inst_30584 = null;
var inst_30585 = (0);
var inst_30586 = (0);
var state_30706__$1 = (function (){var statearr_30767 = state_30706;
(statearr_30767[(13)] = inst_30583);

(statearr_30767[(14)] = inst_30584);

(statearr_30767[(15)] = inst_30586);

(statearr_30767[(16)] = inst_30585);

return statearr_30767;
})();
var statearr_30768_30833 = state_30706__$1;
(statearr_30768_30833[(2)] = null);

(statearr_30768_30833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (14))){
var state_30706__$1 = state_30706;
var statearr_30769_30834 = state_30706__$1;
(statearr_30769_30834[(2)] = null);

(statearr_30769_30834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (45))){
var inst_30696 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30770_30835 = state_30706__$1;
(statearr_30770_30835[(2)] = inst_30696);

(statearr_30770_30835[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (26))){
var inst_30638 = (state_30706[(29)]);
var inst_30692 = (state_30706[(2)]);
var inst_30693 = cljs.core.seq.call(null,inst_30638);
var state_30706__$1 = (function (){var statearr_30771 = state_30706;
(statearr_30771[(31)] = inst_30692);

return statearr_30771;
})();
if(inst_30693){
var statearr_30772_30836 = state_30706__$1;
(statearr_30772_30836[(1)] = (42));

} else {
var statearr_30773_30837 = state_30706__$1;
(statearr_30773_30837[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (16))){
var inst_30605 = (state_30706[(7)]);
var inst_30607 = cljs.core.chunked_seq_QMARK_.call(null,inst_30605);
var state_30706__$1 = state_30706;
if(inst_30607){
var statearr_30774_30838 = state_30706__$1;
(statearr_30774_30838[(1)] = (19));

} else {
var statearr_30775_30839 = state_30706__$1;
(statearr_30775_30839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (38))){
var inst_30685 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30776_30840 = state_30706__$1;
(statearr_30776_30840[(2)] = inst_30685);

(statearr_30776_30840[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (30))){
var state_30706__$1 = state_30706;
var statearr_30777_30841 = state_30706__$1;
(statearr_30777_30841[(2)] = null);

(statearr_30777_30841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (10))){
var inst_30584 = (state_30706[(14)]);
var inst_30586 = (state_30706[(15)]);
var inst_30594 = cljs.core._nth.call(null,inst_30584,inst_30586);
var inst_30595 = cljs.core.nth.call(null,inst_30594,(0),null);
var inst_30596 = cljs.core.nth.call(null,inst_30594,(1),null);
var state_30706__$1 = (function (){var statearr_30778 = state_30706;
(statearr_30778[(26)] = inst_30595);

return statearr_30778;
})();
if(cljs.core.truth_(inst_30596)){
var statearr_30779_30842 = state_30706__$1;
(statearr_30779_30842[(1)] = (13));

} else {
var statearr_30780_30843 = state_30706__$1;
(statearr_30780_30843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (18))){
var inst_30631 = (state_30706[(2)]);
var state_30706__$1 = state_30706;
var statearr_30781_30844 = state_30706__$1;
(statearr_30781_30844[(2)] = inst_30631);

(statearr_30781_30844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (42))){
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30706__$1,(45),dchan);
} else {
if((state_val_30707 === (37))){
var inst_30574 = (state_30706[(10)]);
var inst_30665 = (state_30706[(25)]);
var inst_30674 = (state_30706[(23)]);
var inst_30674__$1 = cljs.core.first.call(null,inst_30665);
var inst_30675 = cljs.core.async.put_BANG_.call(null,inst_30674__$1,inst_30574,done);
var state_30706__$1 = (function (){var statearr_30782 = state_30706;
(statearr_30782[(23)] = inst_30674__$1);

return statearr_30782;
})();
if(cljs.core.truth_(inst_30675)){
var statearr_30783_30845 = state_30706__$1;
(statearr_30783_30845[(1)] = (39));

} else {
var statearr_30784_30846 = state_30706__$1;
(statearr_30784_30846[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30707 === (8))){
var inst_30586 = (state_30706[(15)]);
var inst_30585 = (state_30706[(16)]);
var inst_30588 = (inst_30586 < inst_30585);
var inst_30589 = inst_30588;
var state_30706__$1 = state_30706;
if(cljs.core.truth_(inst_30589)){
var statearr_30785_30847 = state_30706__$1;
(statearr_30785_30847[(1)] = (10));

} else {
var statearr_30786_30848 = state_30706__$1;
(statearr_30786_30848[(1)] = (11));

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
});})(c__29457__auto___30794,cs,m,dchan,dctr,done))
;
return ((function (switch__29343__auto__,c__29457__auto___30794,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29344__auto__ = null;
var cljs$core$async$mult_$_state_machine__29344__auto____0 = (function (){
var statearr_30790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30790[(0)] = cljs$core$async$mult_$_state_machine__29344__auto__);

(statearr_30790[(1)] = (1));

return statearr_30790;
});
var cljs$core$async$mult_$_state_machine__29344__auto____1 = (function (state_30706){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_30706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e30791){if((e30791 instanceof Object)){
var ex__29347__auto__ = e30791;
var statearr_30792_30849 = state_30706;
(statearr_30792_30849[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30850 = state_30706;
state_30706 = G__30850;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29344__auto__ = function(state_30706){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29344__auto____1.call(this,state_30706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29344__auto____0;
cljs$core$async$mult_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29344__auto____1;
return cljs$core$async$mult_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___30794,cs,m,dchan,dctr,done))
})();
var state__29459__auto__ = (function (){var statearr_30793 = f__29458__auto__.call(null);
(statearr_30793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___30794);

return statearr_30793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___30794,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30851 = [];
var len__27992__auto___30854 = arguments.length;
var i__27993__auto___30855 = (0);
while(true){
if((i__27993__auto___30855 < len__27992__auto___30854)){
args30851.push((arguments[i__27993__auto___30855]));

var G__30856 = (i__27993__auto___30855 + (1));
i__27993__auto___30855 = G__30856;
continue;
} else {
}
break;
}

var G__30853 = args30851.length;
switch (G__30853) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30851.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27522__auto__ = (((m == null))?null:m);
var m__27523__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,m,ch);
} else {
var m__27523__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27522__auto__ = (((m == null))?null:m);
var m__27523__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,m,ch);
} else {
var m__27523__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27522__auto__ = (((m == null))?null:m);
var m__27523__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,m);
} else {
var m__27523__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27522__auto__ = (((m == null))?null:m);
var m__27523__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,m,state_map);
} else {
var m__27523__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27522__auto__ = (((m == null))?null:m);
var m__27523__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,m,mode);
} else {
var m__27523__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27999__auto__ = [];
var len__27992__auto___30868 = arguments.length;
var i__27993__auto___30869 = (0);
while(true){
if((i__27993__auto___30869 < len__27992__auto___30868)){
args__27999__auto__.push((arguments[i__27993__auto___30869]));

var G__30870 = (i__27993__auto___30869 + (1));
i__27993__auto___30869 = G__30870;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((3) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28000__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30862){
var map__30863 = p__30862;
var map__30863__$1 = ((((!((map__30863 == null)))?((((map__30863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30863):map__30863);
var opts = map__30863__$1;
var statearr_30865_30871 = state;
(statearr_30865_30871[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__30863,map__30863__$1,opts){
return (function (val){
var statearr_30866_30872 = state;
(statearr_30866_30872[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30863,map__30863__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_30867_30873 = state;
(statearr_30867_30873[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30858){
var G__30859 = cljs.core.first.call(null,seq30858);
var seq30858__$1 = cljs.core.next.call(null,seq30858);
var G__30860 = cljs.core.first.call(null,seq30858__$1);
var seq30858__$2 = cljs.core.next.call(null,seq30858__$1);
var G__30861 = cljs.core.first.call(null,seq30858__$2);
var seq30858__$3 = cljs.core.next.call(null,seq30858__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30859,G__30860,G__30861,seq30858__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31039 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31040){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31040 = meta31040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31041,meta31040__$1){
var self__ = this;
var _31041__$1 = this;
return (new cljs.core.async.t_cljs$core$async31039(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31040__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31041){
var self__ = this;
var _31041__$1 = this;
return self__.meta31040;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31039.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31040","meta31040",-1735126441,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31039";

cljs.core.async.t_cljs$core$async31039.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.core.async/t_cljs$core$async31039");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31039 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31039(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31040){
return (new cljs.core.async.t_cljs$core$async31039(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31040));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31039(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29457__auto___31204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___31204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___31204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31141){
var state_val_31142 = (state_31141[(1)]);
if((state_val_31142 === (7))){
var inst_31057 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31143_31205 = state_31141__$1;
(statearr_31143_31205[(2)] = inst_31057);

(statearr_31143_31205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (20))){
var inst_31069 = (state_31141[(7)]);
var state_31141__$1 = state_31141;
var statearr_31144_31206 = state_31141__$1;
(statearr_31144_31206[(2)] = inst_31069);

(statearr_31144_31206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (27))){
var state_31141__$1 = state_31141;
var statearr_31145_31207 = state_31141__$1;
(statearr_31145_31207[(2)] = null);

(statearr_31145_31207[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (1))){
var inst_31045 = (state_31141[(8)]);
var inst_31045__$1 = calc_state.call(null);
var inst_31047 = (inst_31045__$1 == null);
var inst_31048 = cljs.core.not.call(null,inst_31047);
var state_31141__$1 = (function (){var statearr_31146 = state_31141;
(statearr_31146[(8)] = inst_31045__$1);

return statearr_31146;
})();
if(inst_31048){
var statearr_31147_31208 = state_31141__$1;
(statearr_31147_31208[(1)] = (2));

} else {
var statearr_31148_31209 = state_31141__$1;
(statearr_31148_31209[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (24))){
var inst_31115 = (state_31141[(9)]);
var inst_31092 = (state_31141[(10)]);
var inst_31101 = (state_31141[(11)]);
var inst_31115__$1 = inst_31092.call(null,inst_31101);
var state_31141__$1 = (function (){var statearr_31149 = state_31141;
(statearr_31149[(9)] = inst_31115__$1);

return statearr_31149;
})();
if(cljs.core.truth_(inst_31115__$1)){
var statearr_31150_31210 = state_31141__$1;
(statearr_31150_31210[(1)] = (29));

} else {
var statearr_31151_31211 = state_31141__$1;
(statearr_31151_31211[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (4))){
var inst_31060 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31060)){
var statearr_31152_31212 = state_31141__$1;
(statearr_31152_31212[(1)] = (8));

} else {
var statearr_31153_31213 = state_31141__$1;
(statearr_31153_31213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (15))){
var inst_31086 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31086)){
var statearr_31154_31214 = state_31141__$1;
(statearr_31154_31214[(1)] = (19));

} else {
var statearr_31155_31215 = state_31141__$1;
(statearr_31155_31215[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (21))){
var inst_31091 = (state_31141[(12)]);
var inst_31091__$1 = (state_31141[(2)]);
var inst_31092 = cljs.core.get.call(null,inst_31091__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31093 = cljs.core.get.call(null,inst_31091__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31094 = cljs.core.get.call(null,inst_31091__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31141__$1 = (function (){var statearr_31156 = state_31141;
(statearr_31156[(12)] = inst_31091__$1);

(statearr_31156[(10)] = inst_31092);

(statearr_31156[(13)] = inst_31093);

return statearr_31156;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31141__$1,(22),inst_31094);
} else {
if((state_val_31142 === (31))){
var inst_31123 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31123)){
var statearr_31157_31216 = state_31141__$1;
(statearr_31157_31216[(1)] = (32));

} else {
var statearr_31158_31217 = state_31141__$1;
(statearr_31158_31217[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (32))){
var inst_31100 = (state_31141[(14)]);
var state_31141__$1 = state_31141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31141__$1,(35),out,inst_31100);
} else {
if((state_val_31142 === (33))){
var inst_31091 = (state_31141[(12)]);
var inst_31069 = inst_31091;
var state_31141__$1 = (function (){var statearr_31159 = state_31141;
(statearr_31159[(7)] = inst_31069);

return statearr_31159;
})();
var statearr_31160_31218 = state_31141__$1;
(statearr_31160_31218[(2)] = null);

(statearr_31160_31218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (13))){
var inst_31069 = (state_31141[(7)]);
var inst_31076 = inst_31069.cljs$lang$protocol_mask$partition0$;
var inst_31077 = (inst_31076 & (64));
var inst_31078 = inst_31069.cljs$core$ISeq$;
var inst_31079 = (inst_31077) || (inst_31078);
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31079)){
var statearr_31161_31219 = state_31141__$1;
(statearr_31161_31219[(1)] = (16));

} else {
var statearr_31162_31220 = state_31141__$1;
(statearr_31162_31220[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (22))){
var inst_31101 = (state_31141[(11)]);
var inst_31100 = (state_31141[(14)]);
var inst_31099 = (state_31141[(2)]);
var inst_31100__$1 = cljs.core.nth.call(null,inst_31099,(0),null);
var inst_31101__$1 = cljs.core.nth.call(null,inst_31099,(1),null);
var inst_31102 = (inst_31100__$1 == null);
var inst_31103 = cljs.core._EQ_.call(null,inst_31101__$1,change);
var inst_31104 = (inst_31102) || (inst_31103);
var state_31141__$1 = (function (){var statearr_31163 = state_31141;
(statearr_31163[(11)] = inst_31101__$1);

(statearr_31163[(14)] = inst_31100__$1);

return statearr_31163;
})();
if(cljs.core.truth_(inst_31104)){
var statearr_31164_31221 = state_31141__$1;
(statearr_31164_31221[(1)] = (23));

} else {
var statearr_31165_31222 = state_31141__$1;
(statearr_31165_31222[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (36))){
var inst_31091 = (state_31141[(12)]);
var inst_31069 = inst_31091;
var state_31141__$1 = (function (){var statearr_31166 = state_31141;
(statearr_31166[(7)] = inst_31069);

return statearr_31166;
})();
var statearr_31167_31223 = state_31141__$1;
(statearr_31167_31223[(2)] = null);

(statearr_31167_31223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (29))){
var inst_31115 = (state_31141[(9)]);
var state_31141__$1 = state_31141;
var statearr_31168_31224 = state_31141__$1;
(statearr_31168_31224[(2)] = inst_31115);

(statearr_31168_31224[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (6))){
var state_31141__$1 = state_31141;
var statearr_31169_31225 = state_31141__$1;
(statearr_31169_31225[(2)] = false);

(statearr_31169_31225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (28))){
var inst_31111 = (state_31141[(2)]);
var inst_31112 = calc_state.call(null);
var inst_31069 = inst_31112;
var state_31141__$1 = (function (){var statearr_31170 = state_31141;
(statearr_31170[(7)] = inst_31069);

(statearr_31170[(15)] = inst_31111);

return statearr_31170;
})();
var statearr_31171_31226 = state_31141__$1;
(statearr_31171_31226[(2)] = null);

(statearr_31171_31226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (25))){
var inst_31137 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31172_31227 = state_31141__$1;
(statearr_31172_31227[(2)] = inst_31137);

(statearr_31172_31227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (34))){
var inst_31135 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31173_31228 = state_31141__$1;
(statearr_31173_31228[(2)] = inst_31135);

(statearr_31173_31228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (17))){
var state_31141__$1 = state_31141;
var statearr_31174_31229 = state_31141__$1;
(statearr_31174_31229[(2)] = false);

(statearr_31174_31229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (3))){
var state_31141__$1 = state_31141;
var statearr_31175_31230 = state_31141__$1;
(statearr_31175_31230[(2)] = false);

(statearr_31175_31230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (12))){
var inst_31139 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31141__$1,inst_31139);
} else {
if((state_val_31142 === (2))){
var inst_31045 = (state_31141[(8)]);
var inst_31050 = inst_31045.cljs$lang$protocol_mask$partition0$;
var inst_31051 = (inst_31050 & (64));
var inst_31052 = inst_31045.cljs$core$ISeq$;
var inst_31053 = (inst_31051) || (inst_31052);
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31053)){
var statearr_31176_31231 = state_31141__$1;
(statearr_31176_31231[(1)] = (5));

} else {
var statearr_31177_31232 = state_31141__$1;
(statearr_31177_31232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (23))){
var inst_31100 = (state_31141[(14)]);
var inst_31106 = (inst_31100 == null);
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31106)){
var statearr_31178_31233 = state_31141__$1;
(statearr_31178_31233[(1)] = (26));

} else {
var statearr_31179_31234 = state_31141__$1;
(statearr_31179_31234[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (35))){
var inst_31126 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31126)){
var statearr_31180_31235 = state_31141__$1;
(statearr_31180_31235[(1)] = (36));

} else {
var statearr_31181_31236 = state_31141__$1;
(statearr_31181_31236[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (19))){
var inst_31069 = (state_31141[(7)]);
var inst_31088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31069);
var state_31141__$1 = state_31141;
var statearr_31182_31237 = state_31141__$1;
(statearr_31182_31237[(2)] = inst_31088);

(statearr_31182_31237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (11))){
var inst_31069 = (state_31141[(7)]);
var inst_31073 = (inst_31069 == null);
var inst_31074 = cljs.core.not.call(null,inst_31073);
var state_31141__$1 = state_31141;
if(inst_31074){
var statearr_31183_31238 = state_31141__$1;
(statearr_31183_31238[(1)] = (13));

} else {
var statearr_31184_31239 = state_31141__$1;
(statearr_31184_31239[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (9))){
var inst_31045 = (state_31141[(8)]);
var state_31141__$1 = state_31141;
var statearr_31185_31240 = state_31141__$1;
(statearr_31185_31240[(2)] = inst_31045);

(statearr_31185_31240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (5))){
var state_31141__$1 = state_31141;
var statearr_31186_31241 = state_31141__$1;
(statearr_31186_31241[(2)] = true);

(statearr_31186_31241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (14))){
var state_31141__$1 = state_31141;
var statearr_31187_31242 = state_31141__$1;
(statearr_31187_31242[(2)] = false);

(statearr_31187_31242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (26))){
var inst_31101 = (state_31141[(11)]);
var inst_31108 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31101);
var state_31141__$1 = state_31141;
var statearr_31188_31243 = state_31141__$1;
(statearr_31188_31243[(2)] = inst_31108);

(statearr_31188_31243[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (16))){
var state_31141__$1 = state_31141;
var statearr_31189_31244 = state_31141__$1;
(statearr_31189_31244[(2)] = true);

(statearr_31189_31244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (38))){
var inst_31131 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31190_31245 = state_31141__$1;
(statearr_31190_31245[(2)] = inst_31131);

(statearr_31190_31245[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (30))){
var inst_31092 = (state_31141[(10)]);
var inst_31101 = (state_31141[(11)]);
var inst_31093 = (state_31141[(13)]);
var inst_31118 = cljs.core.empty_QMARK_.call(null,inst_31092);
var inst_31119 = inst_31093.call(null,inst_31101);
var inst_31120 = cljs.core.not.call(null,inst_31119);
var inst_31121 = (inst_31118) && (inst_31120);
var state_31141__$1 = state_31141;
var statearr_31191_31246 = state_31141__$1;
(statearr_31191_31246[(2)] = inst_31121);

(statearr_31191_31246[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (10))){
var inst_31045 = (state_31141[(8)]);
var inst_31065 = (state_31141[(2)]);
var inst_31066 = cljs.core.get.call(null,inst_31065,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31067 = cljs.core.get.call(null,inst_31065,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31068 = cljs.core.get.call(null,inst_31065,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31069 = inst_31045;
var state_31141__$1 = (function (){var statearr_31192 = state_31141;
(statearr_31192[(16)] = inst_31066);

(statearr_31192[(17)] = inst_31068);

(statearr_31192[(7)] = inst_31069);

(statearr_31192[(18)] = inst_31067);

return statearr_31192;
})();
var statearr_31193_31247 = state_31141__$1;
(statearr_31193_31247[(2)] = null);

(statearr_31193_31247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (18))){
var inst_31083 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31194_31248 = state_31141__$1;
(statearr_31194_31248[(2)] = inst_31083);

(statearr_31194_31248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (37))){
var state_31141__$1 = state_31141;
var statearr_31195_31249 = state_31141__$1;
(statearr_31195_31249[(2)] = null);

(statearr_31195_31249[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (8))){
var inst_31045 = (state_31141[(8)]);
var inst_31062 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31045);
var state_31141__$1 = state_31141;
var statearr_31196_31250 = state_31141__$1;
(statearr_31196_31250[(2)] = inst_31062);

(statearr_31196_31250[(1)] = (10));


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
});})(c__29457__auto___31204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29343__auto__,c__29457__auto___31204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29344__auto__ = null;
var cljs$core$async$mix_$_state_machine__29344__auto____0 = (function (){
var statearr_31200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31200[(0)] = cljs$core$async$mix_$_state_machine__29344__auto__);

(statearr_31200[(1)] = (1));

return statearr_31200;
});
var cljs$core$async$mix_$_state_machine__29344__auto____1 = (function (state_31141){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_31141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e31201){if((e31201 instanceof Object)){
var ex__29347__auto__ = e31201;
var statearr_31202_31251 = state_31141;
(statearr_31202_31251[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31252 = state_31141;
state_31141 = G__31252;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29344__auto__ = function(state_31141){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29344__auto____1.call(this,state_31141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29344__auto____0;
cljs$core$async$mix_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29344__auto____1;
return cljs$core$async$mix_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___31204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29459__auto__ = (function (){var statearr_31203 = f__29458__auto__.call(null);
(statearr_31203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___31204);

return statearr_31203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___31204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27522__auto__ = (((p == null))?null:p);
var m__27523__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27523__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27522__auto__ = (((p == null))?null:p);
var m__27523__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,p,v,ch);
} else {
var m__27523__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31253 = [];
var len__27992__auto___31256 = arguments.length;
var i__27993__auto___31257 = (0);
while(true){
if((i__27993__auto___31257 < len__27992__auto___31256)){
args31253.push((arguments[i__27993__auto___31257]));

var G__31258 = (i__27993__auto___31257 + (1));
i__27993__auto___31257 = G__31258;
continue;
} else {
}
break;
}

var G__31255 = args31253.length;
switch (G__31255) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31253.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27522__auto__ = (((p == null))?null:p);
var m__27523__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,p);
} else {
var m__27523__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27522__auto__ = (((p == null))?null:p);
var m__27523__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,p,v);
} else {
var m__27523__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31261 = [];
var len__27992__auto___31386 = arguments.length;
var i__27993__auto___31387 = (0);
while(true){
if((i__27993__auto___31387 < len__27992__auto___31386)){
args31261.push((arguments[i__27993__auto___31387]));

var G__31388 = (i__27993__auto___31387 + (1));
i__27993__auto___31387 = G__31388;
continue;
} else {
}
break;
}

var G__31263 = args31261.length;
switch (G__31263) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31261.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26808__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26808__auto__,mults){
return (function (p1__31260_SHARP_){
if(cljs.core.truth_(p1__31260_SHARP_.call(null,topic))){
return p1__31260_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31260_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26808__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31264 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31265){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31265 = meta31265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31266,meta31265__$1){
var self__ = this;
var _31266__$1 = this;
return (new cljs.core.async.t_cljs$core$async31264(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31265__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31266){
var self__ = this;
var _31266__$1 = this;
return self__.meta31265;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31264.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31265","meta31265",1763840661,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31264";

cljs.core.async.t_cljs$core$async31264.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.core.async/t_cljs$core$async31264");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31264 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31264(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31265){
return (new cljs.core.async.t_cljs$core$async31264(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31265));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31264(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29457__auto___31390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___31390,mults,ensure_mult,p){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___31390,mults,ensure_mult,p){
return (function (state_31338){
var state_val_31339 = (state_31338[(1)]);
if((state_val_31339 === (7))){
var inst_31334 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31340_31391 = state_31338__$1;
(statearr_31340_31391[(2)] = inst_31334);

(statearr_31340_31391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (20))){
var state_31338__$1 = state_31338;
var statearr_31341_31392 = state_31338__$1;
(statearr_31341_31392[(2)] = null);

(statearr_31341_31392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (1))){
var state_31338__$1 = state_31338;
var statearr_31342_31393 = state_31338__$1;
(statearr_31342_31393[(2)] = null);

(statearr_31342_31393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (24))){
var inst_31317 = (state_31338[(7)]);
var inst_31326 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31317);
var state_31338__$1 = state_31338;
var statearr_31343_31394 = state_31338__$1;
(statearr_31343_31394[(2)] = inst_31326);

(statearr_31343_31394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (4))){
var inst_31269 = (state_31338[(8)]);
var inst_31269__$1 = (state_31338[(2)]);
var inst_31270 = (inst_31269__$1 == null);
var state_31338__$1 = (function (){var statearr_31344 = state_31338;
(statearr_31344[(8)] = inst_31269__$1);

return statearr_31344;
})();
if(cljs.core.truth_(inst_31270)){
var statearr_31345_31395 = state_31338__$1;
(statearr_31345_31395[(1)] = (5));

} else {
var statearr_31346_31396 = state_31338__$1;
(statearr_31346_31396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (15))){
var inst_31311 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31347_31397 = state_31338__$1;
(statearr_31347_31397[(2)] = inst_31311);

(statearr_31347_31397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (21))){
var inst_31331 = (state_31338[(2)]);
var state_31338__$1 = (function (){var statearr_31348 = state_31338;
(statearr_31348[(9)] = inst_31331);

return statearr_31348;
})();
var statearr_31349_31398 = state_31338__$1;
(statearr_31349_31398[(2)] = null);

(statearr_31349_31398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (13))){
var inst_31293 = (state_31338[(10)]);
var inst_31295 = cljs.core.chunked_seq_QMARK_.call(null,inst_31293);
var state_31338__$1 = state_31338;
if(inst_31295){
var statearr_31350_31399 = state_31338__$1;
(statearr_31350_31399[(1)] = (16));

} else {
var statearr_31351_31400 = state_31338__$1;
(statearr_31351_31400[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (22))){
var inst_31323 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
if(cljs.core.truth_(inst_31323)){
var statearr_31352_31401 = state_31338__$1;
(statearr_31352_31401[(1)] = (23));

} else {
var statearr_31353_31402 = state_31338__$1;
(statearr_31353_31402[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (6))){
var inst_31319 = (state_31338[(11)]);
var inst_31269 = (state_31338[(8)]);
var inst_31317 = (state_31338[(7)]);
var inst_31317__$1 = topic_fn.call(null,inst_31269);
var inst_31318 = cljs.core.deref.call(null,mults);
var inst_31319__$1 = cljs.core.get.call(null,inst_31318,inst_31317__$1);
var state_31338__$1 = (function (){var statearr_31354 = state_31338;
(statearr_31354[(11)] = inst_31319__$1);

(statearr_31354[(7)] = inst_31317__$1);

return statearr_31354;
})();
if(cljs.core.truth_(inst_31319__$1)){
var statearr_31355_31403 = state_31338__$1;
(statearr_31355_31403[(1)] = (19));

} else {
var statearr_31356_31404 = state_31338__$1;
(statearr_31356_31404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (25))){
var inst_31328 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31357_31405 = state_31338__$1;
(statearr_31357_31405[(2)] = inst_31328);

(statearr_31357_31405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (17))){
var inst_31293 = (state_31338[(10)]);
var inst_31302 = cljs.core.first.call(null,inst_31293);
var inst_31303 = cljs.core.async.muxch_STAR_.call(null,inst_31302);
var inst_31304 = cljs.core.async.close_BANG_.call(null,inst_31303);
var inst_31305 = cljs.core.next.call(null,inst_31293);
var inst_31279 = inst_31305;
var inst_31280 = null;
var inst_31281 = (0);
var inst_31282 = (0);
var state_31338__$1 = (function (){var statearr_31358 = state_31338;
(statearr_31358[(12)] = inst_31279);

(statearr_31358[(13)] = inst_31281);

(statearr_31358[(14)] = inst_31280);

(statearr_31358[(15)] = inst_31282);

(statearr_31358[(16)] = inst_31304);

return statearr_31358;
})();
var statearr_31359_31406 = state_31338__$1;
(statearr_31359_31406[(2)] = null);

(statearr_31359_31406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (3))){
var inst_31336 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31338__$1,inst_31336);
} else {
if((state_val_31339 === (12))){
var inst_31313 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31360_31407 = state_31338__$1;
(statearr_31360_31407[(2)] = inst_31313);

(statearr_31360_31407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (2))){
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31338__$1,(4),ch);
} else {
if((state_val_31339 === (23))){
var state_31338__$1 = state_31338;
var statearr_31361_31408 = state_31338__$1;
(statearr_31361_31408[(2)] = null);

(statearr_31361_31408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (19))){
var inst_31319 = (state_31338[(11)]);
var inst_31269 = (state_31338[(8)]);
var inst_31321 = cljs.core.async.muxch_STAR_.call(null,inst_31319);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31338__$1,(22),inst_31321,inst_31269);
} else {
if((state_val_31339 === (11))){
var inst_31279 = (state_31338[(12)]);
var inst_31293 = (state_31338[(10)]);
var inst_31293__$1 = cljs.core.seq.call(null,inst_31279);
var state_31338__$1 = (function (){var statearr_31362 = state_31338;
(statearr_31362[(10)] = inst_31293__$1);

return statearr_31362;
})();
if(inst_31293__$1){
var statearr_31363_31409 = state_31338__$1;
(statearr_31363_31409[(1)] = (13));

} else {
var statearr_31364_31410 = state_31338__$1;
(statearr_31364_31410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (9))){
var inst_31315 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31365_31411 = state_31338__$1;
(statearr_31365_31411[(2)] = inst_31315);

(statearr_31365_31411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (5))){
var inst_31276 = cljs.core.deref.call(null,mults);
var inst_31277 = cljs.core.vals.call(null,inst_31276);
var inst_31278 = cljs.core.seq.call(null,inst_31277);
var inst_31279 = inst_31278;
var inst_31280 = null;
var inst_31281 = (0);
var inst_31282 = (0);
var state_31338__$1 = (function (){var statearr_31366 = state_31338;
(statearr_31366[(12)] = inst_31279);

(statearr_31366[(13)] = inst_31281);

(statearr_31366[(14)] = inst_31280);

(statearr_31366[(15)] = inst_31282);

return statearr_31366;
})();
var statearr_31367_31412 = state_31338__$1;
(statearr_31367_31412[(2)] = null);

(statearr_31367_31412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (14))){
var state_31338__$1 = state_31338;
var statearr_31371_31413 = state_31338__$1;
(statearr_31371_31413[(2)] = null);

(statearr_31371_31413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (16))){
var inst_31293 = (state_31338[(10)]);
var inst_31297 = cljs.core.chunk_first.call(null,inst_31293);
var inst_31298 = cljs.core.chunk_rest.call(null,inst_31293);
var inst_31299 = cljs.core.count.call(null,inst_31297);
var inst_31279 = inst_31298;
var inst_31280 = inst_31297;
var inst_31281 = inst_31299;
var inst_31282 = (0);
var state_31338__$1 = (function (){var statearr_31372 = state_31338;
(statearr_31372[(12)] = inst_31279);

(statearr_31372[(13)] = inst_31281);

(statearr_31372[(14)] = inst_31280);

(statearr_31372[(15)] = inst_31282);

return statearr_31372;
})();
var statearr_31373_31414 = state_31338__$1;
(statearr_31373_31414[(2)] = null);

(statearr_31373_31414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (10))){
var inst_31279 = (state_31338[(12)]);
var inst_31281 = (state_31338[(13)]);
var inst_31280 = (state_31338[(14)]);
var inst_31282 = (state_31338[(15)]);
var inst_31287 = cljs.core._nth.call(null,inst_31280,inst_31282);
var inst_31288 = cljs.core.async.muxch_STAR_.call(null,inst_31287);
var inst_31289 = cljs.core.async.close_BANG_.call(null,inst_31288);
var inst_31290 = (inst_31282 + (1));
var tmp31368 = inst_31279;
var tmp31369 = inst_31281;
var tmp31370 = inst_31280;
var inst_31279__$1 = tmp31368;
var inst_31280__$1 = tmp31370;
var inst_31281__$1 = tmp31369;
var inst_31282__$1 = inst_31290;
var state_31338__$1 = (function (){var statearr_31374 = state_31338;
(statearr_31374[(12)] = inst_31279__$1);

(statearr_31374[(13)] = inst_31281__$1);

(statearr_31374[(14)] = inst_31280__$1);

(statearr_31374[(17)] = inst_31289);

(statearr_31374[(15)] = inst_31282__$1);

return statearr_31374;
})();
var statearr_31375_31415 = state_31338__$1;
(statearr_31375_31415[(2)] = null);

(statearr_31375_31415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (18))){
var inst_31308 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31376_31416 = state_31338__$1;
(statearr_31376_31416[(2)] = inst_31308);

(statearr_31376_31416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (8))){
var inst_31281 = (state_31338[(13)]);
var inst_31282 = (state_31338[(15)]);
var inst_31284 = (inst_31282 < inst_31281);
var inst_31285 = inst_31284;
var state_31338__$1 = state_31338;
if(cljs.core.truth_(inst_31285)){
var statearr_31377_31417 = state_31338__$1;
(statearr_31377_31417[(1)] = (10));

} else {
var statearr_31378_31418 = state_31338__$1;
(statearr_31378_31418[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__29457__auto___31390,mults,ensure_mult,p))
;
return ((function (switch__29343__auto__,c__29457__auto___31390,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_31382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31382[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_31382[(1)] = (1));

return statearr_31382;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_31338){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_31338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e31383){if((e31383 instanceof Object)){
var ex__29347__auto__ = e31383;
var statearr_31384_31419 = state_31338;
(statearr_31384_31419[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31420 = state_31338;
state_31338 = G__31420;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_31338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_31338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___31390,mults,ensure_mult,p))
})();
var state__29459__auto__ = (function (){var statearr_31385 = f__29458__auto__.call(null);
(statearr_31385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___31390);

return statearr_31385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___31390,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31421 = [];
var len__27992__auto___31424 = arguments.length;
var i__27993__auto___31425 = (0);
while(true){
if((i__27993__auto___31425 < len__27992__auto___31424)){
args31421.push((arguments[i__27993__auto___31425]));

var G__31426 = (i__27993__auto___31425 + (1));
i__27993__auto___31425 = G__31426;
continue;
} else {
}
break;
}

var G__31423 = args31421.length;
switch (G__31423) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31421.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31428 = [];
var len__27992__auto___31431 = arguments.length;
var i__27993__auto___31432 = (0);
while(true){
if((i__27993__auto___31432 < len__27992__auto___31431)){
args31428.push((arguments[i__27993__auto___31432]));

var G__31433 = (i__27993__auto___31432 + (1));
i__27993__auto___31432 = G__31433;
continue;
} else {
}
break;
}

var G__31430 = args31428.length;
switch (G__31430) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31428.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31435 = [];
var len__27992__auto___31506 = arguments.length;
var i__27993__auto___31507 = (0);
while(true){
if((i__27993__auto___31507 < len__27992__auto___31506)){
args31435.push((arguments[i__27993__auto___31507]));

var G__31508 = (i__27993__auto___31507 + (1));
i__27993__auto___31507 = G__31508;
continue;
} else {
}
break;
}

var G__31437 = args31435.length;
switch (G__31437) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31435.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29457__auto___31510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___31510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___31510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31476){
var state_val_31477 = (state_31476[(1)]);
if((state_val_31477 === (7))){
var state_31476__$1 = state_31476;
var statearr_31478_31511 = state_31476__$1;
(statearr_31478_31511[(2)] = null);

(statearr_31478_31511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (1))){
var state_31476__$1 = state_31476;
var statearr_31479_31512 = state_31476__$1;
(statearr_31479_31512[(2)] = null);

(statearr_31479_31512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (4))){
var inst_31440 = (state_31476[(7)]);
var inst_31442 = (inst_31440 < cnt);
var state_31476__$1 = state_31476;
if(cljs.core.truth_(inst_31442)){
var statearr_31480_31513 = state_31476__$1;
(statearr_31480_31513[(1)] = (6));

} else {
var statearr_31481_31514 = state_31476__$1;
(statearr_31481_31514[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (15))){
var inst_31472 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31482_31515 = state_31476__$1;
(statearr_31482_31515[(2)] = inst_31472);

(statearr_31482_31515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (13))){
var inst_31465 = cljs.core.async.close_BANG_.call(null,out);
var state_31476__$1 = state_31476;
var statearr_31483_31516 = state_31476__$1;
(statearr_31483_31516[(2)] = inst_31465);

(statearr_31483_31516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (6))){
var state_31476__$1 = state_31476;
var statearr_31484_31517 = state_31476__$1;
(statearr_31484_31517[(2)] = null);

(statearr_31484_31517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (3))){
var inst_31474 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31476__$1,inst_31474);
} else {
if((state_val_31477 === (12))){
var inst_31462 = (state_31476[(8)]);
var inst_31462__$1 = (state_31476[(2)]);
var inst_31463 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31462__$1);
var state_31476__$1 = (function (){var statearr_31485 = state_31476;
(statearr_31485[(8)] = inst_31462__$1);

return statearr_31485;
})();
if(cljs.core.truth_(inst_31463)){
var statearr_31486_31518 = state_31476__$1;
(statearr_31486_31518[(1)] = (13));

} else {
var statearr_31487_31519 = state_31476__$1;
(statearr_31487_31519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (2))){
var inst_31439 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31440 = (0);
var state_31476__$1 = (function (){var statearr_31488 = state_31476;
(statearr_31488[(9)] = inst_31439);

(statearr_31488[(7)] = inst_31440);

return statearr_31488;
})();
var statearr_31489_31520 = state_31476__$1;
(statearr_31489_31520[(2)] = null);

(statearr_31489_31520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (11))){
var inst_31440 = (state_31476[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31476,(10),Object,null,(9));
var inst_31449 = chs__$1.call(null,inst_31440);
var inst_31450 = done.call(null,inst_31440);
var inst_31451 = cljs.core.async.take_BANG_.call(null,inst_31449,inst_31450);
var state_31476__$1 = state_31476;
var statearr_31490_31521 = state_31476__$1;
(statearr_31490_31521[(2)] = inst_31451);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31476__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (9))){
var inst_31440 = (state_31476[(7)]);
var inst_31453 = (state_31476[(2)]);
var inst_31454 = (inst_31440 + (1));
var inst_31440__$1 = inst_31454;
var state_31476__$1 = (function (){var statearr_31491 = state_31476;
(statearr_31491[(10)] = inst_31453);

(statearr_31491[(7)] = inst_31440__$1);

return statearr_31491;
})();
var statearr_31492_31522 = state_31476__$1;
(statearr_31492_31522[(2)] = null);

(statearr_31492_31522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (5))){
var inst_31460 = (state_31476[(2)]);
var state_31476__$1 = (function (){var statearr_31493 = state_31476;
(statearr_31493[(11)] = inst_31460);

return statearr_31493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31476__$1,(12),dchan);
} else {
if((state_val_31477 === (14))){
var inst_31462 = (state_31476[(8)]);
var inst_31467 = cljs.core.apply.call(null,f,inst_31462);
var state_31476__$1 = state_31476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31476__$1,(16),out,inst_31467);
} else {
if((state_val_31477 === (16))){
var inst_31469 = (state_31476[(2)]);
var state_31476__$1 = (function (){var statearr_31494 = state_31476;
(statearr_31494[(12)] = inst_31469);

return statearr_31494;
})();
var statearr_31495_31523 = state_31476__$1;
(statearr_31495_31523[(2)] = null);

(statearr_31495_31523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (10))){
var inst_31444 = (state_31476[(2)]);
var inst_31445 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31476__$1 = (function (){var statearr_31496 = state_31476;
(statearr_31496[(13)] = inst_31444);

return statearr_31496;
})();
var statearr_31497_31524 = state_31476__$1;
(statearr_31497_31524[(2)] = inst_31445);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31476__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (8))){
var inst_31458 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31498_31525 = state_31476__$1;
(statearr_31498_31525[(2)] = inst_31458);

(statearr_31498_31525[(1)] = (5));


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
});})(c__29457__auto___31510,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29343__auto__,c__29457__auto___31510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_31502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31502[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_31502[(1)] = (1));

return statearr_31502;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_31476){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_31476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e31503){if((e31503 instanceof Object)){
var ex__29347__auto__ = e31503;
var statearr_31504_31526 = state_31476;
(statearr_31504_31526[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31527 = state_31476;
state_31476 = G__31527;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_31476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_31476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___31510,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29459__auto__ = (function (){var statearr_31505 = f__29458__auto__.call(null);
(statearr_31505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___31510);

return statearr_31505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___31510,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31529 = [];
var len__27992__auto___31587 = arguments.length;
var i__27993__auto___31588 = (0);
while(true){
if((i__27993__auto___31588 < len__27992__auto___31587)){
args31529.push((arguments[i__27993__auto___31588]));

var G__31589 = (i__27993__auto___31588 + (1));
i__27993__auto___31588 = G__31589;
continue;
} else {
}
break;
}

var G__31531 = args31529.length;
switch (G__31531) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31529.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29457__auto___31591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___31591,out){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___31591,out){
return (function (state_31563){
var state_val_31564 = (state_31563[(1)]);
if((state_val_31564 === (7))){
var inst_31543 = (state_31563[(7)]);
var inst_31542 = (state_31563[(8)]);
var inst_31542__$1 = (state_31563[(2)]);
var inst_31543__$1 = cljs.core.nth.call(null,inst_31542__$1,(0),null);
var inst_31544 = cljs.core.nth.call(null,inst_31542__$1,(1),null);
var inst_31545 = (inst_31543__$1 == null);
var state_31563__$1 = (function (){var statearr_31565 = state_31563;
(statearr_31565[(7)] = inst_31543__$1);

(statearr_31565[(8)] = inst_31542__$1);

(statearr_31565[(9)] = inst_31544);

return statearr_31565;
})();
if(cljs.core.truth_(inst_31545)){
var statearr_31566_31592 = state_31563__$1;
(statearr_31566_31592[(1)] = (8));

} else {
var statearr_31567_31593 = state_31563__$1;
(statearr_31567_31593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (1))){
var inst_31532 = cljs.core.vec.call(null,chs);
var inst_31533 = inst_31532;
var state_31563__$1 = (function (){var statearr_31568 = state_31563;
(statearr_31568[(10)] = inst_31533);

return statearr_31568;
})();
var statearr_31569_31594 = state_31563__$1;
(statearr_31569_31594[(2)] = null);

(statearr_31569_31594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (4))){
var inst_31533 = (state_31563[(10)]);
var state_31563__$1 = state_31563;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31563__$1,(7),inst_31533);
} else {
if((state_val_31564 === (6))){
var inst_31559 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31570_31595 = state_31563__$1;
(statearr_31570_31595[(2)] = inst_31559);

(statearr_31570_31595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (3))){
var inst_31561 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31563__$1,inst_31561);
} else {
if((state_val_31564 === (2))){
var inst_31533 = (state_31563[(10)]);
var inst_31535 = cljs.core.count.call(null,inst_31533);
var inst_31536 = (inst_31535 > (0));
var state_31563__$1 = state_31563;
if(cljs.core.truth_(inst_31536)){
var statearr_31572_31596 = state_31563__$1;
(statearr_31572_31596[(1)] = (4));

} else {
var statearr_31573_31597 = state_31563__$1;
(statearr_31573_31597[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (11))){
var inst_31533 = (state_31563[(10)]);
var inst_31552 = (state_31563[(2)]);
var tmp31571 = inst_31533;
var inst_31533__$1 = tmp31571;
var state_31563__$1 = (function (){var statearr_31574 = state_31563;
(statearr_31574[(11)] = inst_31552);

(statearr_31574[(10)] = inst_31533__$1);

return statearr_31574;
})();
var statearr_31575_31598 = state_31563__$1;
(statearr_31575_31598[(2)] = null);

(statearr_31575_31598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (9))){
var inst_31543 = (state_31563[(7)]);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31563__$1,(11),out,inst_31543);
} else {
if((state_val_31564 === (5))){
var inst_31557 = cljs.core.async.close_BANG_.call(null,out);
var state_31563__$1 = state_31563;
var statearr_31576_31599 = state_31563__$1;
(statearr_31576_31599[(2)] = inst_31557);

(statearr_31576_31599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (10))){
var inst_31555 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31577_31600 = state_31563__$1;
(statearr_31577_31600[(2)] = inst_31555);

(statearr_31577_31600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (8))){
var inst_31533 = (state_31563[(10)]);
var inst_31543 = (state_31563[(7)]);
var inst_31542 = (state_31563[(8)]);
var inst_31544 = (state_31563[(9)]);
var inst_31547 = (function (){var cs = inst_31533;
var vec__31538 = inst_31542;
var v = inst_31543;
var c = inst_31544;
return ((function (cs,vec__31538,v,c,inst_31533,inst_31543,inst_31542,inst_31544,state_val_31564,c__29457__auto___31591,out){
return (function (p1__31528_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31528_SHARP_);
});
;})(cs,vec__31538,v,c,inst_31533,inst_31543,inst_31542,inst_31544,state_val_31564,c__29457__auto___31591,out))
})();
var inst_31548 = cljs.core.filterv.call(null,inst_31547,inst_31533);
var inst_31533__$1 = inst_31548;
var state_31563__$1 = (function (){var statearr_31578 = state_31563;
(statearr_31578[(10)] = inst_31533__$1);

return statearr_31578;
})();
var statearr_31579_31601 = state_31563__$1;
(statearr_31579_31601[(2)] = null);

(statearr_31579_31601[(1)] = (2));


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
});})(c__29457__auto___31591,out))
;
return ((function (switch__29343__auto__,c__29457__auto___31591,out){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_31583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31583[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_31583[(1)] = (1));

return statearr_31583;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_31563){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_31563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e31584){if((e31584 instanceof Object)){
var ex__29347__auto__ = e31584;
var statearr_31585_31602 = state_31563;
(statearr_31585_31602[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31603 = state_31563;
state_31563 = G__31603;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_31563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_31563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___31591,out))
})();
var state__29459__auto__ = (function (){var statearr_31586 = f__29458__auto__.call(null);
(statearr_31586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___31591);

return statearr_31586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___31591,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31604 = [];
var len__27992__auto___31653 = arguments.length;
var i__27993__auto___31654 = (0);
while(true){
if((i__27993__auto___31654 < len__27992__auto___31653)){
args31604.push((arguments[i__27993__auto___31654]));

var G__31655 = (i__27993__auto___31654 + (1));
i__27993__auto___31654 = G__31655;
continue;
} else {
}
break;
}

var G__31606 = args31604.length;
switch (G__31606) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31604.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29457__auto___31657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___31657,out){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___31657,out){
return (function (state_31630){
var state_val_31631 = (state_31630[(1)]);
if((state_val_31631 === (7))){
var inst_31612 = (state_31630[(7)]);
var inst_31612__$1 = (state_31630[(2)]);
var inst_31613 = (inst_31612__$1 == null);
var inst_31614 = cljs.core.not.call(null,inst_31613);
var state_31630__$1 = (function (){var statearr_31632 = state_31630;
(statearr_31632[(7)] = inst_31612__$1);

return statearr_31632;
})();
if(inst_31614){
var statearr_31633_31658 = state_31630__$1;
(statearr_31633_31658[(1)] = (8));

} else {
var statearr_31634_31659 = state_31630__$1;
(statearr_31634_31659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (1))){
var inst_31607 = (0);
var state_31630__$1 = (function (){var statearr_31635 = state_31630;
(statearr_31635[(8)] = inst_31607);

return statearr_31635;
})();
var statearr_31636_31660 = state_31630__$1;
(statearr_31636_31660[(2)] = null);

(statearr_31636_31660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (4))){
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(7),ch);
} else {
if((state_val_31631 === (6))){
var inst_31625 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31637_31661 = state_31630__$1;
(statearr_31637_31661[(2)] = inst_31625);

(statearr_31637_31661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (3))){
var inst_31627 = (state_31630[(2)]);
var inst_31628 = cljs.core.async.close_BANG_.call(null,out);
var state_31630__$1 = (function (){var statearr_31638 = state_31630;
(statearr_31638[(9)] = inst_31627);

return statearr_31638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31630__$1,inst_31628);
} else {
if((state_val_31631 === (2))){
var inst_31607 = (state_31630[(8)]);
var inst_31609 = (inst_31607 < n);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31609)){
var statearr_31639_31662 = state_31630__$1;
(statearr_31639_31662[(1)] = (4));

} else {
var statearr_31640_31663 = state_31630__$1;
(statearr_31640_31663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (11))){
var inst_31607 = (state_31630[(8)]);
var inst_31617 = (state_31630[(2)]);
var inst_31618 = (inst_31607 + (1));
var inst_31607__$1 = inst_31618;
var state_31630__$1 = (function (){var statearr_31641 = state_31630;
(statearr_31641[(8)] = inst_31607__$1);

(statearr_31641[(10)] = inst_31617);

return statearr_31641;
})();
var statearr_31642_31664 = state_31630__$1;
(statearr_31642_31664[(2)] = null);

(statearr_31642_31664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (9))){
var state_31630__$1 = state_31630;
var statearr_31643_31665 = state_31630__$1;
(statearr_31643_31665[(2)] = null);

(statearr_31643_31665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (5))){
var state_31630__$1 = state_31630;
var statearr_31644_31666 = state_31630__$1;
(statearr_31644_31666[(2)] = null);

(statearr_31644_31666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (10))){
var inst_31622 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31645_31667 = state_31630__$1;
(statearr_31645_31667[(2)] = inst_31622);

(statearr_31645_31667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (8))){
var inst_31612 = (state_31630[(7)]);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31630__$1,(11),out,inst_31612);
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
});})(c__29457__auto___31657,out))
;
return ((function (switch__29343__auto__,c__29457__auto___31657,out){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_31649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31649[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_31649[(1)] = (1));

return statearr_31649;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_31630){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_31630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e31650){if((e31650 instanceof Object)){
var ex__29347__auto__ = e31650;
var statearr_31651_31668 = state_31630;
(statearr_31651_31668[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31669 = state_31630;
state_31630 = G__31669;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_31630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_31630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___31657,out))
})();
var state__29459__auto__ = (function (){var statearr_31652 = f__29458__auto__.call(null);
(statearr_31652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___31657);

return statearr_31652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___31657,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31677 = (function (map_LT_,f,ch,meta31678){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31678 = meta31678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31679,meta31678__$1){
var self__ = this;
var _31679__$1 = this;
return (new cljs.core.async.t_cljs$core$async31677(self__.map_LT_,self__.f,self__.ch,meta31678__$1));
});

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31679){
var self__ = this;
var _31679__$1 = this;
return self__.meta31678;
});

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31680 = (function (map_LT_,f,ch,meta31678,_,fn1,meta31681){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31678 = meta31678;
this._ = _;
this.fn1 = fn1;
this.meta31681 = meta31681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31682,meta31681__$1){
var self__ = this;
var _31682__$1 = this;
return (new cljs.core.async.t_cljs$core$async31680(self__.map_LT_,self__.f,self__.ch,self__.meta31678,self__._,self__.fn1,meta31681__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31682){
var self__ = this;
var _31682__$1 = this;
return self__.meta31681;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31680.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31670_SHARP_){
return f1.call(null,(((p1__31670_SHARP_ == null))?null:self__.f.call(null,p1__31670_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31680.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31678","meta31678",-1855026730,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31677","cljs.core.async/t_cljs$core$async31677",617228944,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31681","meta31681",113024229,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31680";

cljs.core.async.t_cljs$core$async31680.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.core.async/t_cljs$core$async31680");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31680 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31680(map_LT___$1,f__$1,ch__$1,meta31678__$1,___$2,fn1__$1,meta31681){
return (new cljs.core.async.t_cljs$core$async31680(map_LT___$1,f__$1,ch__$1,meta31678__$1,___$2,fn1__$1,meta31681));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31680(self__.map_LT_,self__.f,self__.ch,self__.meta31678,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26796__auto__ = ret;
if(cljs.core.truth_(and__26796__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26796__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31678","meta31678",-1855026730,null)], null);
});

cljs.core.async.t_cljs$core$async31677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31677";

cljs.core.async.t_cljs$core$async31677.cljs$lang$ctorPrWriter = (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.core.async/t_cljs$core$async31677");
});

cljs.core.async.__GT_t_cljs$core$async31677 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31677(map_LT___$1,f__$1,ch__$1,meta31678){
return (new cljs.core.async.t_cljs$core$async31677(map_LT___$1,f__$1,ch__$1,meta31678));
});

}

return (new cljs.core.async.t_cljs$core$async31677(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31686 = (function (map_GT_,f,ch,meta31687){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31687 = meta31687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31688,meta31687__$1){
var self__ = this;
var _31688__$1 = this;
return (new cljs.core.async.t_cljs$core$async31686(self__.map_GT_,self__.f,self__.ch,meta31687__$1));
});

cljs.core.async.t_cljs$core$async31686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31688){
var self__ = this;
var _31688__$1 = this;
return self__.meta31687;
});

cljs.core.async.t_cljs$core$async31686.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31686.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31686.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31687","meta31687",1697816268,null)], null);
});

cljs.core.async.t_cljs$core$async31686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31686";

cljs.core.async.t_cljs$core$async31686.cljs$lang$ctorPrWriter = (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.core.async/t_cljs$core$async31686");
});

cljs.core.async.__GT_t_cljs$core$async31686 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31686(map_GT___$1,f__$1,ch__$1,meta31687){
return (new cljs.core.async.t_cljs$core$async31686(map_GT___$1,f__$1,ch__$1,meta31687));
});

}

return (new cljs.core.async.t_cljs$core$async31686(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31692 = (function (filter_GT_,p,ch,meta31693){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31693 = meta31693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31694,meta31693__$1){
var self__ = this;
var _31694__$1 = this;
return (new cljs.core.async.t_cljs$core$async31692(self__.filter_GT_,self__.p,self__.ch,meta31693__$1));
});

cljs.core.async.t_cljs$core$async31692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31694){
var self__ = this;
var _31694__$1 = this;
return self__.meta31693;
});

cljs.core.async.t_cljs$core$async31692.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31692.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31692.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31692.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31693","meta31693",1863927703,null)], null);
});

cljs.core.async.t_cljs$core$async31692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31692";

cljs.core.async.t_cljs$core$async31692.cljs$lang$ctorPrWriter = (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"cljs.core.async/t_cljs$core$async31692");
});

cljs.core.async.__GT_t_cljs$core$async31692 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31692(filter_GT___$1,p__$1,ch__$1,meta31693){
return (new cljs.core.async.t_cljs$core$async31692(filter_GT___$1,p__$1,ch__$1,meta31693));
});

}

return (new cljs.core.async.t_cljs$core$async31692(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31695 = [];
var len__27992__auto___31739 = arguments.length;
var i__27993__auto___31740 = (0);
while(true){
if((i__27993__auto___31740 < len__27992__auto___31739)){
args31695.push((arguments[i__27993__auto___31740]));

var G__31741 = (i__27993__auto___31740 + (1));
i__27993__auto___31740 = G__31741;
continue;
} else {
}
break;
}

var G__31697 = args31695.length;
switch (G__31697) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31695.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29457__auto___31743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___31743,out){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___31743,out){
return (function (state_31718){
var state_val_31719 = (state_31718[(1)]);
if((state_val_31719 === (7))){
var inst_31714 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31720_31744 = state_31718__$1;
(statearr_31720_31744[(2)] = inst_31714);

(statearr_31720_31744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (1))){
var state_31718__$1 = state_31718;
var statearr_31721_31745 = state_31718__$1;
(statearr_31721_31745[(2)] = null);

(statearr_31721_31745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (4))){
var inst_31700 = (state_31718[(7)]);
var inst_31700__$1 = (state_31718[(2)]);
var inst_31701 = (inst_31700__$1 == null);
var state_31718__$1 = (function (){var statearr_31722 = state_31718;
(statearr_31722[(7)] = inst_31700__$1);

return statearr_31722;
})();
if(cljs.core.truth_(inst_31701)){
var statearr_31723_31746 = state_31718__$1;
(statearr_31723_31746[(1)] = (5));

} else {
var statearr_31724_31747 = state_31718__$1;
(statearr_31724_31747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (6))){
var inst_31700 = (state_31718[(7)]);
var inst_31705 = p.call(null,inst_31700);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31705)){
var statearr_31725_31748 = state_31718__$1;
(statearr_31725_31748[(1)] = (8));

} else {
var statearr_31726_31749 = state_31718__$1;
(statearr_31726_31749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (3))){
var inst_31716 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31718__$1,inst_31716);
} else {
if((state_val_31719 === (2))){
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31718__$1,(4),ch);
} else {
if((state_val_31719 === (11))){
var inst_31708 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31727_31750 = state_31718__$1;
(statearr_31727_31750[(2)] = inst_31708);

(statearr_31727_31750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (9))){
var state_31718__$1 = state_31718;
var statearr_31728_31751 = state_31718__$1;
(statearr_31728_31751[(2)] = null);

(statearr_31728_31751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (5))){
var inst_31703 = cljs.core.async.close_BANG_.call(null,out);
var state_31718__$1 = state_31718;
var statearr_31729_31752 = state_31718__$1;
(statearr_31729_31752[(2)] = inst_31703);

(statearr_31729_31752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (10))){
var inst_31711 = (state_31718[(2)]);
var state_31718__$1 = (function (){var statearr_31730 = state_31718;
(statearr_31730[(8)] = inst_31711);

return statearr_31730;
})();
var statearr_31731_31753 = state_31718__$1;
(statearr_31731_31753[(2)] = null);

(statearr_31731_31753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (8))){
var inst_31700 = (state_31718[(7)]);
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31718__$1,(11),out,inst_31700);
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
});})(c__29457__auto___31743,out))
;
return ((function (switch__29343__auto__,c__29457__auto___31743,out){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_31735 = [null,null,null,null,null,null,null,null,null];
(statearr_31735[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_31735[(1)] = (1));

return statearr_31735;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_31718){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_31718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e31736){if((e31736 instanceof Object)){
var ex__29347__auto__ = e31736;
var statearr_31737_31754 = state_31718;
(statearr_31737_31754[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31755 = state_31718;
state_31718 = G__31755;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_31718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_31718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___31743,out))
})();
var state__29459__auto__ = (function (){var statearr_31738 = f__29458__auto__.call(null);
(statearr_31738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___31743);

return statearr_31738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___31743,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31756 = [];
var len__27992__auto___31759 = arguments.length;
var i__27993__auto___31760 = (0);
while(true){
if((i__27993__auto___31760 < len__27992__auto___31759)){
args31756.push((arguments[i__27993__auto___31760]));

var G__31761 = (i__27993__auto___31760 + (1));
i__27993__auto___31760 = G__31761;
continue;
} else {
}
break;
}

var G__31758 = args31756.length;
switch (G__31758) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31756.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__){
return (function (state_31928){
var state_val_31929 = (state_31928[(1)]);
if((state_val_31929 === (7))){
var inst_31924 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31930_31971 = state_31928__$1;
(statearr_31930_31971[(2)] = inst_31924);

(statearr_31930_31971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (20))){
var inst_31894 = (state_31928[(7)]);
var inst_31905 = (state_31928[(2)]);
var inst_31906 = cljs.core.next.call(null,inst_31894);
var inst_31880 = inst_31906;
var inst_31881 = null;
var inst_31882 = (0);
var inst_31883 = (0);
var state_31928__$1 = (function (){var statearr_31931 = state_31928;
(statearr_31931[(8)] = inst_31883);

(statearr_31931[(9)] = inst_31880);

(statearr_31931[(10)] = inst_31881);

(statearr_31931[(11)] = inst_31905);

(statearr_31931[(12)] = inst_31882);

return statearr_31931;
})();
var statearr_31932_31972 = state_31928__$1;
(statearr_31932_31972[(2)] = null);

(statearr_31932_31972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (1))){
var state_31928__$1 = state_31928;
var statearr_31933_31973 = state_31928__$1;
(statearr_31933_31973[(2)] = null);

(statearr_31933_31973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (4))){
var inst_31869 = (state_31928[(13)]);
var inst_31869__$1 = (state_31928[(2)]);
var inst_31870 = (inst_31869__$1 == null);
var state_31928__$1 = (function (){var statearr_31934 = state_31928;
(statearr_31934[(13)] = inst_31869__$1);

return statearr_31934;
})();
if(cljs.core.truth_(inst_31870)){
var statearr_31935_31974 = state_31928__$1;
(statearr_31935_31974[(1)] = (5));

} else {
var statearr_31936_31975 = state_31928__$1;
(statearr_31936_31975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (15))){
var state_31928__$1 = state_31928;
var statearr_31940_31976 = state_31928__$1;
(statearr_31940_31976[(2)] = null);

(statearr_31940_31976[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (21))){
var state_31928__$1 = state_31928;
var statearr_31941_31977 = state_31928__$1;
(statearr_31941_31977[(2)] = null);

(statearr_31941_31977[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (13))){
var inst_31883 = (state_31928[(8)]);
var inst_31880 = (state_31928[(9)]);
var inst_31881 = (state_31928[(10)]);
var inst_31882 = (state_31928[(12)]);
var inst_31890 = (state_31928[(2)]);
var inst_31891 = (inst_31883 + (1));
var tmp31937 = inst_31880;
var tmp31938 = inst_31881;
var tmp31939 = inst_31882;
var inst_31880__$1 = tmp31937;
var inst_31881__$1 = tmp31938;
var inst_31882__$1 = tmp31939;
var inst_31883__$1 = inst_31891;
var state_31928__$1 = (function (){var statearr_31942 = state_31928;
(statearr_31942[(8)] = inst_31883__$1);

(statearr_31942[(9)] = inst_31880__$1);

(statearr_31942[(10)] = inst_31881__$1);

(statearr_31942[(12)] = inst_31882__$1);

(statearr_31942[(14)] = inst_31890);

return statearr_31942;
})();
var statearr_31943_31978 = state_31928__$1;
(statearr_31943_31978[(2)] = null);

(statearr_31943_31978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (22))){
var state_31928__$1 = state_31928;
var statearr_31944_31979 = state_31928__$1;
(statearr_31944_31979[(2)] = null);

(statearr_31944_31979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (6))){
var inst_31869 = (state_31928[(13)]);
var inst_31878 = f.call(null,inst_31869);
var inst_31879 = cljs.core.seq.call(null,inst_31878);
var inst_31880 = inst_31879;
var inst_31881 = null;
var inst_31882 = (0);
var inst_31883 = (0);
var state_31928__$1 = (function (){var statearr_31945 = state_31928;
(statearr_31945[(8)] = inst_31883);

(statearr_31945[(9)] = inst_31880);

(statearr_31945[(10)] = inst_31881);

(statearr_31945[(12)] = inst_31882);

return statearr_31945;
})();
var statearr_31946_31980 = state_31928__$1;
(statearr_31946_31980[(2)] = null);

(statearr_31946_31980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (17))){
var inst_31894 = (state_31928[(7)]);
var inst_31898 = cljs.core.chunk_first.call(null,inst_31894);
var inst_31899 = cljs.core.chunk_rest.call(null,inst_31894);
var inst_31900 = cljs.core.count.call(null,inst_31898);
var inst_31880 = inst_31899;
var inst_31881 = inst_31898;
var inst_31882 = inst_31900;
var inst_31883 = (0);
var state_31928__$1 = (function (){var statearr_31947 = state_31928;
(statearr_31947[(8)] = inst_31883);

(statearr_31947[(9)] = inst_31880);

(statearr_31947[(10)] = inst_31881);

(statearr_31947[(12)] = inst_31882);

return statearr_31947;
})();
var statearr_31948_31981 = state_31928__$1;
(statearr_31948_31981[(2)] = null);

(statearr_31948_31981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (3))){
var inst_31926 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31928__$1,inst_31926);
} else {
if((state_val_31929 === (12))){
var inst_31914 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31949_31982 = state_31928__$1;
(statearr_31949_31982[(2)] = inst_31914);

(statearr_31949_31982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (2))){
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31928__$1,(4),in$);
} else {
if((state_val_31929 === (23))){
var inst_31922 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31950_31983 = state_31928__$1;
(statearr_31950_31983[(2)] = inst_31922);

(statearr_31950_31983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (19))){
var inst_31909 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31951_31984 = state_31928__$1;
(statearr_31951_31984[(2)] = inst_31909);

(statearr_31951_31984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (11))){
var inst_31880 = (state_31928[(9)]);
var inst_31894 = (state_31928[(7)]);
var inst_31894__$1 = cljs.core.seq.call(null,inst_31880);
var state_31928__$1 = (function (){var statearr_31952 = state_31928;
(statearr_31952[(7)] = inst_31894__$1);

return statearr_31952;
})();
if(inst_31894__$1){
var statearr_31953_31985 = state_31928__$1;
(statearr_31953_31985[(1)] = (14));

} else {
var statearr_31954_31986 = state_31928__$1;
(statearr_31954_31986[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (9))){
var inst_31916 = (state_31928[(2)]);
var inst_31917 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31928__$1 = (function (){var statearr_31955 = state_31928;
(statearr_31955[(15)] = inst_31916);

return statearr_31955;
})();
if(cljs.core.truth_(inst_31917)){
var statearr_31956_31987 = state_31928__$1;
(statearr_31956_31987[(1)] = (21));

} else {
var statearr_31957_31988 = state_31928__$1;
(statearr_31957_31988[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (5))){
var inst_31872 = cljs.core.async.close_BANG_.call(null,out);
var state_31928__$1 = state_31928;
var statearr_31958_31989 = state_31928__$1;
(statearr_31958_31989[(2)] = inst_31872);

(statearr_31958_31989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (14))){
var inst_31894 = (state_31928[(7)]);
var inst_31896 = cljs.core.chunked_seq_QMARK_.call(null,inst_31894);
var state_31928__$1 = state_31928;
if(inst_31896){
var statearr_31959_31990 = state_31928__$1;
(statearr_31959_31990[(1)] = (17));

} else {
var statearr_31960_31991 = state_31928__$1;
(statearr_31960_31991[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (16))){
var inst_31912 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31961_31992 = state_31928__$1;
(statearr_31961_31992[(2)] = inst_31912);

(statearr_31961_31992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (10))){
var inst_31883 = (state_31928[(8)]);
var inst_31881 = (state_31928[(10)]);
var inst_31888 = cljs.core._nth.call(null,inst_31881,inst_31883);
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31928__$1,(13),out,inst_31888);
} else {
if((state_val_31929 === (18))){
var inst_31894 = (state_31928[(7)]);
var inst_31903 = cljs.core.first.call(null,inst_31894);
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31928__$1,(20),out,inst_31903);
} else {
if((state_val_31929 === (8))){
var inst_31883 = (state_31928[(8)]);
var inst_31882 = (state_31928[(12)]);
var inst_31885 = (inst_31883 < inst_31882);
var inst_31886 = inst_31885;
var state_31928__$1 = state_31928;
if(cljs.core.truth_(inst_31886)){
var statearr_31962_31993 = state_31928__$1;
(statearr_31962_31993[(1)] = (10));

} else {
var statearr_31963_31994 = state_31928__$1;
(statearr_31963_31994[(1)] = (11));

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
}
}
}
}
}
}
});})(c__29457__auto__))
;
return ((function (switch__29343__auto__,c__29457__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29344__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29344__auto____0 = (function (){
var statearr_31967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31967[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29344__auto__);

(statearr_31967[(1)] = (1));

return statearr_31967;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29344__auto____1 = (function (state_31928){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_31928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e31968){if((e31968 instanceof Object)){
var ex__29347__auto__ = e31968;
var statearr_31969_31995 = state_31928;
(statearr_31969_31995[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31996 = state_31928;
state_31928 = G__31996;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29344__auto__ = function(state_31928){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29344__auto____1.call(this,state_31928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29344__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29344__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__))
})();
var state__29459__auto__ = (function (){var statearr_31970 = f__29458__auto__.call(null);
(statearr_31970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_31970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__))
);

return c__29457__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31997 = [];
var len__27992__auto___32000 = arguments.length;
var i__27993__auto___32001 = (0);
while(true){
if((i__27993__auto___32001 < len__27992__auto___32000)){
args31997.push((arguments[i__27993__auto___32001]));

var G__32002 = (i__27993__auto___32001 + (1));
i__27993__auto___32001 = G__32002;
continue;
} else {
}
break;
}

var G__31999 = args31997.length;
switch (G__31999) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31997.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32004 = [];
var len__27992__auto___32007 = arguments.length;
var i__27993__auto___32008 = (0);
while(true){
if((i__27993__auto___32008 < len__27992__auto___32007)){
args32004.push((arguments[i__27993__auto___32008]));

var G__32009 = (i__27993__auto___32008 + (1));
i__27993__auto___32008 = G__32009;
continue;
} else {
}
break;
}

var G__32006 = args32004.length;
switch (G__32006) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32004.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32011 = [];
var len__27992__auto___32062 = arguments.length;
var i__27993__auto___32063 = (0);
while(true){
if((i__27993__auto___32063 < len__27992__auto___32062)){
args32011.push((arguments[i__27993__auto___32063]));

var G__32064 = (i__27993__auto___32063 + (1));
i__27993__auto___32063 = G__32064;
continue;
} else {
}
break;
}

var G__32013 = args32011.length;
switch (G__32013) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32011.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29457__auto___32066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___32066,out){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___32066,out){
return (function (state_32037){
var state_val_32038 = (state_32037[(1)]);
if((state_val_32038 === (7))){
var inst_32032 = (state_32037[(2)]);
var state_32037__$1 = state_32037;
var statearr_32039_32067 = state_32037__$1;
(statearr_32039_32067[(2)] = inst_32032);

(statearr_32039_32067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (1))){
var inst_32014 = null;
var state_32037__$1 = (function (){var statearr_32040 = state_32037;
(statearr_32040[(7)] = inst_32014);

return statearr_32040;
})();
var statearr_32041_32068 = state_32037__$1;
(statearr_32041_32068[(2)] = null);

(statearr_32041_32068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (4))){
var inst_32017 = (state_32037[(8)]);
var inst_32017__$1 = (state_32037[(2)]);
var inst_32018 = (inst_32017__$1 == null);
var inst_32019 = cljs.core.not.call(null,inst_32018);
var state_32037__$1 = (function (){var statearr_32042 = state_32037;
(statearr_32042[(8)] = inst_32017__$1);

return statearr_32042;
})();
if(inst_32019){
var statearr_32043_32069 = state_32037__$1;
(statearr_32043_32069[(1)] = (5));

} else {
var statearr_32044_32070 = state_32037__$1;
(statearr_32044_32070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (6))){
var state_32037__$1 = state_32037;
var statearr_32045_32071 = state_32037__$1;
(statearr_32045_32071[(2)] = null);

(statearr_32045_32071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (3))){
var inst_32034 = (state_32037[(2)]);
var inst_32035 = cljs.core.async.close_BANG_.call(null,out);
var state_32037__$1 = (function (){var statearr_32046 = state_32037;
(statearr_32046[(9)] = inst_32034);

return statearr_32046;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32037__$1,inst_32035);
} else {
if((state_val_32038 === (2))){
var state_32037__$1 = state_32037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32037__$1,(4),ch);
} else {
if((state_val_32038 === (11))){
var inst_32017 = (state_32037[(8)]);
var inst_32026 = (state_32037[(2)]);
var inst_32014 = inst_32017;
var state_32037__$1 = (function (){var statearr_32047 = state_32037;
(statearr_32047[(7)] = inst_32014);

(statearr_32047[(10)] = inst_32026);

return statearr_32047;
})();
var statearr_32048_32072 = state_32037__$1;
(statearr_32048_32072[(2)] = null);

(statearr_32048_32072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (9))){
var inst_32017 = (state_32037[(8)]);
var state_32037__$1 = state_32037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32037__$1,(11),out,inst_32017);
} else {
if((state_val_32038 === (5))){
var inst_32014 = (state_32037[(7)]);
var inst_32017 = (state_32037[(8)]);
var inst_32021 = cljs.core._EQ_.call(null,inst_32017,inst_32014);
var state_32037__$1 = state_32037;
if(inst_32021){
var statearr_32050_32073 = state_32037__$1;
(statearr_32050_32073[(1)] = (8));

} else {
var statearr_32051_32074 = state_32037__$1;
(statearr_32051_32074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (10))){
var inst_32029 = (state_32037[(2)]);
var state_32037__$1 = state_32037;
var statearr_32052_32075 = state_32037__$1;
(statearr_32052_32075[(2)] = inst_32029);

(statearr_32052_32075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32038 === (8))){
var inst_32014 = (state_32037[(7)]);
var tmp32049 = inst_32014;
var inst_32014__$1 = tmp32049;
var state_32037__$1 = (function (){var statearr_32053 = state_32037;
(statearr_32053[(7)] = inst_32014__$1);

return statearr_32053;
})();
var statearr_32054_32076 = state_32037__$1;
(statearr_32054_32076[(2)] = null);

(statearr_32054_32076[(1)] = (2));


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
});})(c__29457__auto___32066,out))
;
return ((function (switch__29343__auto__,c__29457__auto___32066,out){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_32058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32058[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_32058[(1)] = (1));

return statearr_32058;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_32037){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_32037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e32059){if((e32059 instanceof Object)){
var ex__29347__auto__ = e32059;
var statearr_32060_32077 = state_32037;
(statearr_32060_32077[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32078 = state_32037;
state_32037 = G__32078;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_32037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_32037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___32066,out))
})();
var state__29459__auto__ = (function (){var statearr_32061 = f__29458__auto__.call(null);
(statearr_32061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___32066);

return statearr_32061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___32066,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32079 = [];
var len__27992__auto___32149 = arguments.length;
var i__27993__auto___32150 = (0);
while(true){
if((i__27993__auto___32150 < len__27992__auto___32149)){
args32079.push((arguments[i__27993__auto___32150]));

var G__32151 = (i__27993__auto___32150 + (1));
i__27993__auto___32150 = G__32151;
continue;
} else {
}
break;
}

var G__32081 = args32079.length;
switch (G__32081) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32079.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29457__auto___32153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___32153,out){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___32153,out){
return (function (state_32119){
var state_val_32120 = (state_32119[(1)]);
if((state_val_32120 === (7))){
var inst_32115 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
var statearr_32121_32154 = state_32119__$1;
(statearr_32121_32154[(2)] = inst_32115);

(statearr_32121_32154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (1))){
var inst_32082 = (new Array(n));
var inst_32083 = inst_32082;
var inst_32084 = (0);
var state_32119__$1 = (function (){var statearr_32122 = state_32119;
(statearr_32122[(7)] = inst_32084);

(statearr_32122[(8)] = inst_32083);

return statearr_32122;
})();
var statearr_32123_32155 = state_32119__$1;
(statearr_32123_32155[(2)] = null);

(statearr_32123_32155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (4))){
var inst_32087 = (state_32119[(9)]);
var inst_32087__$1 = (state_32119[(2)]);
var inst_32088 = (inst_32087__$1 == null);
var inst_32089 = cljs.core.not.call(null,inst_32088);
var state_32119__$1 = (function (){var statearr_32124 = state_32119;
(statearr_32124[(9)] = inst_32087__$1);

return statearr_32124;
})();
if(inst_32089){
var statearr_32125_32156 = state_32119__$1;
(statearr_32125_32156[(1)] = (5));

} else {
var statearr_32126_32157 = state_32119__$1;
(statearr_32126_32157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (15))){
var inst_32109 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
var statearr_32127_32158 = state_32119__$1;
(statearr_32127_32158[(2)] = inst_32109);

(statearr_32127_32158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (13))){
var state_32119__$1 = state_32119;
var statearr_32128_32159 = state_32119__$1;
(statearr_32128_32159[(2)] = null);

(statearr_32128_32159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (6))){
var inst_32084 = (state_32119[(7)]);
var inst_32105 = (inst_32084 > (0));
var state_32119__$1 = state_32119;
if(cljs.core.truth_(inst_32105)){
var statearr_32129_32160 = state_32119__$1;
(statearr_32129_32160[(1)] = (12));

} else {
var statearr_32130_32161 = state_32119__$1;
(statearr_32130_32161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (3))){
var inst_32117 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32119__$1,inst_32117);
} else {
if((state_val_32120 === (12))){
var inst_32083 = (state_32119[(8)]);
var inst_32107 = cljs.core.vec.call(null,inst_32083);
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32119__$1,(15),out,inst_32107);
} else {
if((state_val_32120 === (2))){
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32119__$1,(4),ch);
} else {
if((state_val_32120 === (11))){
var inst_32099 = (state_32119[(2)]);
var inst_32100 = (new Array(n));
var inst_32083 = inst_32100;
var inst_32084 = (0);
var state_32119__$1 = (function (){var statearr_32131 = state_32119;
(statearr_32131[(7)] = inst_32084);

(statearr_32131[(10)] = inst_32099);

(statearr_32131[(8)] = inst_32083);

return statearr_32131;
})();
var statearr_32132_32162 = state_32119__$1;
(statearr_32132_32162[(2)] = null);

(statearr_32132_32162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (9))){
var inst_32083 = (state_32119[(8)]);
var inst_32097 = cljs.core.vec.call(null,inst_32083);
var state_32119__$1 = state_32119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32119__$1,(11),out,inst_32097);
} else {
if((state_val_32120 === (5))){
var inst_32084 = (state_32119[(7)]);
var inst_32087 = (state_32119[(9)]);
var inst_32083 = (state_32119[(8)]);
var inst_32092 = (state_32119[(11)]);
var inst_32091 = (inst_32083[inst_32084] = inst_32087);
var inst_32092__$1 = (inst_32084 + (1));
var inst_32093 = (inst_32092__$1 < n);
var state_32119__$1 = (function (){var statearr_32133 = state_32119;
(statearr_32133[(12)] = inst_32091);

(statearr_32133[(11)] = inst_32092__$1);

return statearr_32133;
})();
if(cljs.core.truth_(inst_32093)){
var statearr_32134_32163 = state_32119__$1;
(statearr_32134_32163[(1)] = (8));

} else {
var statearr_32135_32164 = state_32119__$1;
(statearr_32135_32164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (14))){
var inst_32112 = (state_32119[(2)]);
var inst_32113 = cljs.core.async.close_BANG_.call(null,out);
var state_32119__$1 = (function (){var statearr_32137 = state_32119;
(statearr_32137[(13)] = inst_32112);

return statearr_32137;
})();
var statearr_32138_32165 = state_32119__$1;
(statearr_32138_32165[(2)] = inst_32113);

(statearr_32138_32165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (10))){
var inst_32103 = (state_32119[(2)]);
var state_32119__$1 = state_32119;
var statearr_32139_32166 = state_32119__$1;
(statearr_32139_32166[(2)] = inst_32103);

(statearr_32139_32166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32120 === (8))){
var inst_32083 = (state_32119[(8)]);
var inst_32092 = (state_32119[(11)]);
var tmp32136 = inst_32083;
var inst_32083__$1 = tmp32136;
var inst_32084 = inst_32092;
var state_32119__$1 = (function (){var statearr_32140 = state_32119;
(statearr_32140[(7)] = inst_32084);

(statearr_32140[(8)] = inst_32083__$1);

return statearr_32140;
})();
var statearr_32141_32167 = state_32119__$1;
(statearr_32141_32167[(2)] = null);

(statearr_32141_32167[(1)] = (2));


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
});})(c__29457__auto___32153,out))
;
return ((function (switch__29343__auto__,c__29457__auto___32153,out){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_32145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32145[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_32145[(1)] = (1));

return statearr_32145;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_32119){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_32119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e32146){if((e32146 instanceof Object)){
var ex__29347__auto__ = e32146;
var statearr_32147_32168 = state_32119;
(statearr_32147_32168[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32169 = state_32119;
state_32119 = G__32169;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_32119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_32119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___32153,out))
})();
var state__29459__auto__ = (function (){var statearr_32148 = f__29458__auto__.call(null);
(statearr_32148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___32153);

return statearr_32148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___32153,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32170 = [];
var len__27992__auto___32244 = arguments.length;
var i__27993__auto___32245 = (0);
while(true){
if((i__27993__auto___32245 < len__27992__auto___32244)){
args32170.push((arguments[i__27993__auto___32245]));

var G__32246 = (i__27993__auto___32245 + (1));
i__27993__auto___32245 = G__32246;
continue;
} else {
}
break;
}

var G__32172 = args32170.length;
switch (G__32172) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32170.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29457__auto___32248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto___32248,out){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto___32248,out){
return (function (state_32214){
var state_val_32215 = (state_32214[(1)]);
if((state_val_32215 === (7))){
var inst_32210 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
var statearr_32216_32249 = state_32214__$1;
(statearr_32216_32249[(2)] = inst_32210);

(statearr_32216_32249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (1))){
var inst_32173 = [];
var inst_32174 = inst_32173;
var inst_32175 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32214__$1 = (function (){var statearr_32217 = state_32214;
(statearr_32217[(7)] = inst_32175);

(statearr_32217[(8)] = inst_32174);

return statearr_32217;
})();
var statearr_32218_32250 = state_32214__$1;
(statearr_32218_32250[(2)] = null);

(statearr_32218_32250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (4))){
var inst_32178 = (state_32214[(9)]);
var inst_32178__$1 = (state_32214[(2)]);
var inst_32179 = (inst_32178__$1 == null);
var inst_32180 = cljs.core.not.call(null,inst_32179);
var state_32214__$1 = (function (){var statearr_32219 = state_32214;
(statearr_32219[(9)] = inst_32178__$1);

return statearr_32219;
})();
if(inst_32180){
var statearr_32220_32251 = state_32214__$1;
(statearr_32220_32251[(1)] = (5));

} else {
var statearr_32221_32252 = state_32214__$1;
(statearr_32221_32252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (15))){
var inst_32204 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
var statearr_32222_32253 = state_32214__$1;
(statearr_32222_32253[(2)] = inst_32204);

(statearr_32222_32253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (13))){
var state_32214__$1 = state_32214;
var statearr_32223_32254 = state_32214__$1;
(statearr_32223_32254[(2)] = null);

(statearr_32223_32254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (6))){
var inst_32174 = (state_32214[(8)]);
var inst_32199 = inst_32174.length;
var inst_32200 = (inst_32199 > (0));
var state_32214__$1 = state_32214;
if(cljs.core.truth_(inst_32200)){
var statearr_32224_32255 = state_32214__$1;
(statearr_32224_32255[(1)] = (12));

} else {
var statearr_32225_32256 = state_32214__$1;
(statearr_32225_32256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (3))){
var inst_32212 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32214__$1,inst_32212);
} else {
if((state_val_32215 === (12))){
var inst_32174 = (state_32214[(8)]);
var inst_32202 = cljs.core.vec.call(null,inst_32174);
var state_32214__$1 = state_32214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32214__$1,(15),out,inst_32202);
} else {
if((state_val_32215 === (2))){
var state_32214__$1 = state_32214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32214__$1,(4),ch);
} else {
if((state_val_32215 === (11))){
var inst_32182 = (state_32214[(10)]);
var inst_32178 = (state_32214[(9)]);
var inst_32192 = (state_32214[(2)]);
var inst_32193 = [];
var inst_32194 = inst_32193.push(inst_32178);
var inst_32174 = inst_32193;
var inst_32175 = inst_32182;
var state_32214__$1 = (function (){var statearr_32226 = state_32214;
(statearr_32226[(7)] = inst_32175);

(statearr_32226[(11)] = inst_32192);

(statearr_32226[(12)] = inst_32194);

(statearr_32226[(8)] = inst_32174);

return statearr_32226;
})();
var statearr_32227_32257 = state_32214__$1;
(statearr_32227_32257[(2)] = null);

(statearr_32227_32257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (9))){
var inst_32174 = (state_32214[(8)]);
var inst_32190 = cljs.core.vec.call(null,inst_32174);
var state_32214__$1 = state_32214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32214__$1,(11),out,inst_32190);
} else {
if((state_val_32215 === (5))){
var inst_32175 = (state_32214[(7)]);
var inst_32182 = (state_32214[(10)]);
var inst_32178 = (state_32214[(9)]);
var inst_32182__$1 = f.call(null,inst_32178);
var inst_32183 = cljs.core._EQ_.call(null,inst_32182__$1,inst_32175);
var inst_32184 = cljs.core.keyword_identical_QMARK_.call(null,inst_32175,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32185 = (inst_32183) || (inst_32184);
var state_32214__$1 = (function (){var statearr_32228 = state_32214;
(statearr_32228[(10)] = inst_32182__$1);

return statearr_32228;
})();
if(cljs.core.truth_(inst_32185)){
var statearr_32229_32258 = state_32214__$1;
(statearr_32229_32258[(1)] = (8));

} else {
var statearr_32230_32259 = state_32214__$1;
(statearr_32230_32259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (14))){
var inst_32207 = (state_32214[(2)]);
var inst_32208 = cljs.core.async.close_BANG_.call(null,out);
var state_32214__$1 = (function (){var statearr_32232 = state_32214;
(statearr_32232[(13)] = inst_32207);

return statearr_32232;
})();
var statearr_32233_32260 = state_32214__$1;
(statearr_32233_32260[(2)] = inst_32208);

(statearr_32233_32260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (10))){
var inst_32197 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
var statearr_32234_32261 = state_32214__$1;
(statearr_32234_32261[(2)] = inst_32197);

(statearr_32234_32261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (8))){
var inst_32182 = (state_32214[(10)]);
var inst_32178 = (state_32214[(9)]);
var inst_32174 = (state_32214[(8)]);
var inst_32187 = inst_32174.push(inst_32178);
var tmp32231 = inst_32174;
var inst_32174__$1 = tmp32231;
var inst_32175 = inst_32182;
var state_32214__$1 = (function (){var statearr_32235 = state_32214;
(statearr_32235[(7)] = inst_32175);

(statearr_32235[(14)] = inst_32187);

(statearr_32235[(8)] = inst_32174__$1);

return statearr_32235;
})();
var statearr_32236_32262 = state_32214__$1;
(statearr_32236_32262[(2)] = null);

(statearr_32236_32262[(1)] = (2));


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
});})(c__29457__auto___32248,out))
;
return ((function (switch__29343__auto__,c__29457__auto___32248,out){
return (function() {
var cljs$core$async$state_machine__29344__auto__ = null;
var cljs$core$async$state_machine__29344__auto____0 = (function (){
var statearr_32240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32240[(0)] = cljs$core$async$state_machine__29344__auto__);

(statearr_32240[(1)] = (1));

return statearr_32240;
});
var cljs$core$async$state_machine__29344__auto____1 = (function (state_32214){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_32214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e32241){if((e32241 instanceof Object)){
var ex__29347__auto__ = e32241;
var statearr_32242_32263 = state_32214;
(statearr_32242_32263[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32264 = state_32214;
state_32214 = G__32264;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
cljs$core$async$state_machine__29344__auto__ = function(state_32214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29344__auto____1.call(this,state_32214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29344__auto____0;
cljs$core$async$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29344__auto____1;
return cljs$core$async$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto___32248,out))
})();
var state__29459__auto__ = (function (){var statearr_32243 = f__29458__auto__.call(null);
(statearr_32243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto___32248);

return statearr_32243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto___32248,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1537985790627