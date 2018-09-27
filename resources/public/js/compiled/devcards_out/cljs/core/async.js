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
var args29515 = [];
var len__27991__auto___29521 = arguments.length;
var i__27992__auto___29522 = (0);
while(true){
if((i__27992__auto___29522 < len__27991__auto___29521)){
args29515.push((arguments[i__27992__auto___29522]));

var G__29523 = (i__27992__auto___29522 + (1));
i__27992__auto___29522 = G__29523;
continue;
} else {
}
break;
}

var G__29517 = args29515.length;
switch (G__29517) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29515.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29518 = (function (f,blockable,meta29519){
this.f = f;
this.blockable = blockable;
this.meta29519 = meta29519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29520,meta29519__$1){
var self__ = this;
var _29520__$1 = this;
return (new cljs.core.async.t_cljs$core$async29518(self__.f,self__.blockable,meta29519__$1));
});

cljs.core.async.t_cljs$core$async29518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29520){
var self__ = this;
var _29520__$1 = this;
return self__.meta29519;
});

cljs.core.async.t_cljs$core$async29518.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29519","meta29519",1696732647,null)], null);
});

cljs.core.async.t_cljs$core$async29518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29518";

cljs.core.async.t_cljs$core$async29518.cljs$lang$ctorPrWriter = (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.core.async/t_cljs$core$async29518");
});

cljs.core.async.__GT_t_cljs$core$async29518 = (function cljs$core$async$__GT_t_cljs$core$async29518(f__$1,blockable__$1,meta29519){
return (new cljs.core.async.t_cljs$core$async29518(f__$1,blockable__$1,meta29519));
});

}

return (new cljs.core.async.t_cljs$core$async29518(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29527 = [];
var len__27991__auto___29530 = arguments.length;
var i__27992__auto___29531 = (0);
while(true){
if((i__27992__auto___29531 < len__27991__auto___29530)){
args29527.push((arguments[i__27992__auto___29531]));

var G__29532 = (i__27992__auto___29531 + (1));
i__27992__auto___29531 = G__29532;
continue;
} else {
}
break;
}

var G__29529 = args29527.length;
switch (G__29529) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29527.length)].join('')));

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
var args29534 = [];
var len__27991__auto___29537 = arguments.length;
var i__27992__auto___29538 = (0);
while(true){
if((i__27992__auto___29538 < len__27991__auto___29537)){
args29534.push((arguments[i__27992__auto___29538]));

var G__29539 = (i__27992__auto___29538 + (1));
i__27992__auto___29538 = G__29539;
continue;
} else {
}
break;
}

var G__29536 = args29534.length;
switch (G__29536) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29534.length)].join('')));

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
var args29541 = [];
var len__27991__auto___29544 = arguments.length;
var i__27992__auto___29545 = (0);
while(true){
if((i__27992__auto___29545 < len__27991__auto___29544)){
args29541.push((arguments[i__27992__auto___29545]));

var G__29546 = (i__27992__auto___29545 + (1));
i__27992__auto___29545 = G__29546;
continue;
} else {
}
break;
}

var G__29543 = args29541.length;
switch (G__29543) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29541.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29548 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29548);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29548,ret){
return (function (){
return fn1.call(null,val_29548);
});})(val_29548,ret))
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
var args29549 = [];
var len__27991__auto___29552 = arguments.length;
var i__27992__auto___29553 = (0);
while(true){
if((i__27992__auto___29553 < len__27991__auto___29552)){
args29549.push((arguments[i__27992__auto___29553]));

var G__29554 = (i__27992__auto___29553 + (1));
i__27992__auto___29553 = G__29554;
continue;
} else {
}
break;
}

var G__29551 = args29549.length;
switch (G__29551) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29549.length)].join('')));

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
var n__27821__auto___29556 = n;
var x_29557 = (0);
while(true){
if((x_29557 < n__27821__auto___29556)){
(a[x_29557] = (0));

var G__29558 = (x_29557 + (1));
x_29557 = G__29558;
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

var G__29559 = (i + (1));
i = G__29559;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29563 = (function (alt_flag,flag,meta29564){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29564 = meta29564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29565,meta29564__$1){
var self__ = this;
var _29565__$1 = this;
return (new cljs.core.async.t_cljs$core$async29563(self__.alt_flag,self__.flag,meta29564__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29565){
var self__ = this;
var _29565__$1 = this;
return self__.meta29564;
});})(flag))
;

cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29563.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29564","meta29564",-1299795025,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29563";

cljs.core.async.t_cljs$core$async29563.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.core.async/t_cljs$core$async29563");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29563 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29563(alt_flag__$1,flag__$1,meta29564){
return (new cljs.core.async.t_cljs$core$async29563(alt_flag__$1,flag__$1,meta29564));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29563(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29569 = (function (alt_handler,flag,cb,meta29570){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29570 = meta29570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29571,meta29570__$1){
var self__ = this;
var _29571__$1 = this;
return (new cljs.core.async.t_cljs$core$async29569(self__.alt_handler,self__.flag,self__.cb,meta29570__$1));
});

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29571){
var self__ = this;
var _29571__$1 = this;
return self__.meta29570;
});

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29570","meta29570",-411959432,null)], null);
});

cljs.core.async.t_cljs$core$async29569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29569";

cljs.core.async.t_cljs$core$async29569.cljs$lang$ctorPrWriter = (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.core.async/t_cljs$core$async29569");
});

cljs.core.async.__GT_t_cljs$core$async29569 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29569(alt_handler__$1,flag__$1,cb__$1,meta29570){
return (new cljs.core.async.t_cljs$core$async29569(alt_handler__$1,flag__$1,cb__$1,meta29570));
});

}

return (new cljs.core.async.t_cljs$core$async29569(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29572_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29572_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29573_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29573_SHARP_,port], null));
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
var G__29574 = (i + (1));
i = G__29574;
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
var args__27998__auto__ = [];
var len__27991__auto___29580 = arguments.length;
var i__27992__auto___29581 = (0);
while(true){
if((i__27992__auto___29581 < len__27991__auto___29580)){
args__27998__auto__.push((arguments[i__27992__auto___29581]));

var G__29582 = (i__27992__auto___29581 + (1));
i__27992__auto___29581 = G__29582;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((1) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27999__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29577){
var map__29578 = p__29577;
var map__29578__$1 = ((((!((map__29578 == null)))?((((map__29578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29578):map__29578);
var opts = map__29578__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29575){
var G__29576 = cljs.core.first.call(null,seq29575);
var seq29575__$1 = cljs.core.next.call(null,seq29575);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29576,seq29575__$1);
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
var args29583 = [];
var len__27991__auto___29633 = arguments.length;
var i__27992__auto___29634 = (0);
while(true){
if((i__27992__auto___29634 < len__27991__auto___29633)){
args29583.push((arguments[i__27992__auto___29634]));

var G__29635 = (i__27992__auto___29634 + (1));
i__27992__auto___29634 = G__29635;
continue;
} else {
}
break;
}

var G__29585 = args29583.length;
switch (G__29585) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29583.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29456__auto___29637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___29637){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___29637){
return (function (state_29609){
var state_val_29610 = (state_29609[(1)]);
if((state_val_29610 === (7))){
var inst_29605 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29611_29638 = state_29609__$1;
(statearr_29611_29638[(2)] = inst_29605);

(statearr_29611_29638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (1))){
var state_29609__$1 = state_29609;
var statearr_29612_29639 = state_29609__$1;
(statearr_29612_29639[(2)] = null);

(statearr_29612_29639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (4))){
var inst_29588 = (state_29609[(7)]);
var inst_29588__$1 = (state_29609[(2)]);
var inst_29589 = (inst_29588__$1 == null);
var state_29609__$1 = (function (){var statearr_29613 = state_29609;
(statearr_29613[(7)] = inst_29588__$1);

return statearr_29613;
})();
if(cljs.core.truth_(inst_29589)){
var statearr_29614_29640 = state_29609__$1;
(statearr_29614_29640[(1)] = (5));

} else {
var statearr_29615_29641 = state_29609__$1;
(statearr_29615_29641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (13))){
var state_29609__$1 = state_29609;
var statearr_29616_29642 = state_29609__$1;
(statearr_29616_29642[(2)] = null);

(statearr_29616_29642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (6))){
var inst_29588 = (state_29609[(7)]);
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29609__$1,(11),to,inst_29588);
} else {
if((state_val_29610 === (3))){
var inst_29607 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29609__$1,inst_29607);
} else {
if((state_val_29610 === (12))){
var state_29609__$1 = state_29609;
var statearr_29617_29643 = state_29609__$1;
(statearr_29617_29643[(2)] = null);

(statearr_29617_29643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (2))){
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29609__$1,(4),from);
} else {
if((state_val_29610 === (11))){
var inst_29598 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
if(cljs.core.truth_(inst_29598)){
var statearr_29618_29644 = state_29609__$1;
(statearr_29618_29644[(1)] = (12));

} else {
var statearr_29619_29645 = state_29609__$1;
(statearr_29619_29645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (9))){
var state_29609__$1 = state_29609;
var statearr_29620_29646 = state_29609__$1;
(statearr_29620_29646[(2)] = null);

(statearr_29620_29646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (5))){
var state_29609__$1 = state_29609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29621_29647 = state_29609__$1;
(statearr_29621_29647[(1)] = (8));

} else {
var statearr_29622_29648 = state_29609__$1;
(statearr_29622_29648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (14))){
var inst_29603 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29623_29649 = state_29609__$1;
(statearr_29623_29649[(2)] = inst_29603);

(statearr_29623_29649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (10))){
var inst_29595 = (state_29609[(2)]);
var state_29609__$1 = state_29609;
var statearr_29624_29650 = state_29609__$1;
(statearr_29624_29650[(2)] = inst_29595);

(statearr_29624_29650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29610 === (8))){
var inst_29592 = cljs.core.async.close_BANG_.call(null,to);
var state_29609__$1 = state_29609;
var statearr_29625_29651 = state_29609__$1;
(statearr_29625_29651[(2)] = inst_29592);

(statearr_29625_29651[(1)] = (10));


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
});})(c__29456__auto___29637))
;
return ((function (switch__29342__auto__,c__29456__auto___29637){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_29629 = [null,null,null,null,null,null,null,null];
(statearr_29629[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_29629[(1)] = (1));

return statearr_29629;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_29609){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_29609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e29630){if((e29630 instanceof Object)){
var ex__29346__auto__ = e29630;
var statearr_29631_29652 = state_29609;
(statearr_29631_29652[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29653 = state_29609;
state_29609 = G__29653;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_29609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_29609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___29637))
})();
var state__29458__auto__ = (function (){var statearr_29632 = f__29457__auto__.call(null);
(statearr_29632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___29637);

return statearr_29632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___29637))
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
return (function (p__29841){
var vec__29842 = p__29841;
var v = cljs.core.nth.call(null,vec__29842,(0),null);
var p = cljs.core.nth.call(null,vec__29842,(1),null);
var job = vec__29842;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29456__auto___30028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___30028,res,vec__29842,v,p,job,jobs,results){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___30028,res,vec__29842,v,p,job,jobs,results){
return (function (state_29849){
var state_val_29850 = (state_29849[(1)]);
if((state_val_29850 === (1))){
var state_29849__$1 = state_29849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29849__$1,(2),res,v);
} else {
if((state_val_29850 === (2))){
var inst_29846 = (state_29849[(2)]);
var inst_29847 = cljs.core.async.close_BANG_.call(null,res);
var state_29849__$1 = (function (){var statearr_29851 = state_29849;
(statearr_29851[(7)] = inst_29846);

return statearr_29851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29849__$1,inst_29847);
} else {
return null;
}
}
});})(c__29456__auto___30028,res,vec__29842,v,p,job,jobs,results))
;
return ((function (switch__29342__auto__,c__29456__auto___30028,res,vec__29842,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0 = (function (){
var statearr_29855 = [null,null,null,null,null,null,null,null];
(statearr_29855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__);

(statearr_29855[(1)] = (1));

return statearr_29855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1 = (function (state_29849){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_29849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e29856){if((e29856 instanceof Object)){
var ex__29346__auto__ = e29856;
var statearr_29857_30029 = state_29849;
(statearr_29857_30029[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30030 = state_29849;
state_29849 = G__30030;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__ = function(state_29849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1.call(this,state_29849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___30028,res,vec__29842,v,p,job,jobs,results))
})();
var state__29458__auto__ = (function (){var statearr_29858 = f__29457__auto__.call(null);
(statearr_29858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___30028);

return statearr_29858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___30028,res,vec__29842,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29859){
var vec__29860 = p__29859;
var v = cljs.core.nth.call(null,vec__29860,(0),null);
var p = cljs.core.nth.call(null,vec__29860,(1),null);
var job = vec__29860;
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
var n__27821__auto___30031 = n;
var __30032 = (0);
while(true){
if((__30032 < n__27821__auto___30031)){
var G__29863_30033 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29863_30033) {
case "compute":
var c__29456__auto___30035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30032,c__29456__auto___30035,G__29863_30033,n__27821__auto___30031,jobs,results,process,async){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (__30032,c__29456__auto___30035,G__29863_30033,n__27821__auto___30031,jobs,results,process,async){
return (function (state_29876){
var state_val_29877 = (state_29876[(1)]);
if((state_val_29877 === (1))){
var state_29876__$1 = state_29876;
var statearr_29878_30036 = state_29876__$1;
(statearr_29878_30036[(2)] = null);

(statearr_29878_30036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (2))){
var state_29876__$1 = state_29876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29876__$1,(4),jobs);
} else {
if((state_val_29877 === (3))){
var inst_29874 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29876__$1,inst_29874);
} else {
if((state_val_29877 === (4))){
var inst_29866 = (state_29876[(2)]);
var inst_29867 = process.call(null,inst_29866);
var state_29876__$1 = state_29876;
if(cljs.core.truth_(inst_29867)){
var statearr_29879_30037 = state_29876__$1;
(statearr_29879_30037[(1)] = (5));

} else {
var statearr_29880_30038 = state_29876__$1;
(statearr_29880_30038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (5))){
var state_29876__$1 = state_29876;
var statearr_29881_30039 = state_29876__$1;
(statearr_29881_30039[(2)] = null);

(statearr_29881_30039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (6))){
var state_29876__$1 = state_29876;
var statearr_29882_30040 = state_29876__$1;
(statearr_29882_30040[(2)] = null);

(statearr_29882_30040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29877 === (7))){
var inst_29872 = (state_29876[(2)]);
var state_29876__$1 = state_29876;
var statearr_29883_30041 = state_29876__$1;
(statearr_29883_30041[(2)] = inst_29872);

(statearr_29883_30041[(1)] = (3));


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
});})(__30032,c__29456__auto___30035,G__29863_30033,n__27821__auto___30031,jobs,results,process,async))
;
return ((function (__30032,switch__29342__auto__,c__29456__auto___30035,G__29863_30033,n__27821__auto___30031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0 = (function (){
var statearr_29887 = [null,null,null,null,null,null,null];
(statearr_29887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__);

(statearr_29887[(1)] = (1));

return statearr_29887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1 = (function (state_29876){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_29876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e29888){if((e29888 instanceof Object)){
var ex__29346__auto__ = e29888;
var statearr_29889_30042 = state_29876;
(statearr_29889_30042[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30043 = state_29876;
state_29876 = G__30043;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__ = function(state_29876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1.call(this,state_29876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__;
})()
;})(__30032,switch__29342__auto__,c__29456__auto___30035,G__29863_30033,n__27821__auto___30031,jobs,results,process,async))
})();
var state__29458__auto__ = (function (){var statearr_29890 = f__29457__auto__.call(null);
(statearr_29890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___30035);

return statearr_29890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(__30032,c__29456__auto___30035,G__29863_30033,n__27821__auto___30031,jobs,results,process,async))
);


break;
case "async":
var c__29456__auto___30044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30032,c__29456__auto___30044,G__29863_30033,n__27821__auto___30031,jobs,results,process,async){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (__30032,c__29456__auto___30044,G__29863_30033,n__27821__auto___30031,jobs,results,process,async){
return (function (state_29903){
var state_val_29904 = (state_29903[(1)]);
if((state_val_29904 === (1))){
var state_29903__$1 = state_29903;
var statearr_29905_30045 = state_29903__$1;
(statearr_29905_30045[(2)] = null);

(statearr_29905_30045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (2))){
var state_29903__$1 = state_29903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29903__$1,(4),jobs);
} else {
if((state_val_29904 === (3))){
var inst_29901 = (state_29903[(2)]);
var state_29903__$1 = state_29903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29903__$1,inst_29901);
} else {
if((state_val_29904 === (4))){
var inst_29893 = (state_29903[(2)]);
var inst_29894 = async.call(null,inst_29893);
var state_29903__$1 = state_29903;
if(cljs.core.truth_(inst_29894)){
var statearr_29906_30046 = state_29903__$1;
(statearr_29906_30046[(1)] = (5));

} else {
var statearr_29907_30047 = state_29903__$1;
(statearr_29907_30047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (5))){
var state_29903__$1 = state_29903;
var statearr_29908_30048 = state_29903__$1;
(statearr_29908_30048[(2)] = null);

(statearr_29908_30048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (6))){
var state_29903__$1 = state_29903;
var statearr_29909_30049 = state_29903__$1;
(statearr_29909_30049[(2)] = null);

(statearr_29909_30049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29904 === (7))){
var inst_29899 = (state_29903[(2)]);
var state_29903__$1 = state_29903;
var statearr_29910_30050 = state_29903__$1;
(statearr_29910_30050[(2)] = inst_29899);

(statearr_29910_30050[(1)] = (3));


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
});})(__30032,c__29456__auto___30044,G__29863_30033,n__27821__auto___30031,jobs,results,process,async))
;
return ((function (__30032,switch__29342__auto__,c__29456__auto___30044,G__29863_30033,n__27821__auto___30031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0 = (function (){
var statearr_29914 = [null,null,null,null,null,null,null];
(statearr_29914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__);

(statearr_29914[(1)] = (1));

return statearr_29914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1 = (function (state_29903){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_29903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e29915){if((e29915 instanceof Object)){
var ex__29346__auto__ = e29915;
var statearr_29916_30051 = state_29903;
(statearr_29916_30051[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30052 = state_29903;
state_29903 = G__30052;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__ = function(state_29903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1.call(this,state_29903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__;
})()
;})(__30032,switch__29342__auto__,c__29456__auto___30044,G__29863_30033,n__27821__auto___30031,jobs,results,process,async))
})();
var state__29458__auto__ = (function (){var statearr_29917 = f__29457__auto__.call(null);
(statearr_29917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___30044);

return statearr_29917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(__30032,c__29456__auto___30044,G__29863_30033,n__27821__auto___30031,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30053 = (__30032 + (1));
__30032 = G__30053;
continue;
} else {
}
break;
}

var c__29456__auto___30054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___30054,jobs,results,process,async){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___30054,jobs,results,process,async){
return (function (state_29939){
var state_val_29940 = (state_29939[(1)]);
if((state_val_29940 === (1))){
var state_29939__$1 = state_29939;
var statearr_29941_30055 = state_29939__$1;
(statearr_29941_30055[(2)] = null);

(statearr_29941_30055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (2))){
var state_29939__$1 = state_29939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29939__$1,(4),from);
} else {
if((state_val_29940 === (3))){
var inst_29937 = (state_29939[(2)]);
var state_29939__$1 = state_29939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29939__$1,inst_29937);
} else {
if((state_val_29940 === (4))){
var inst_29920 = (state_29939[(7)]);
var inst_29920__$1 = (state_29939[(2)]);
var inst_29921 = (inst_29920__$1 == null);
var state_29939__$1 = (function (){var statearr_29942 = state_29939;
(statearr_29942[(7)] = inst_29920__$1);

return statearr_29942;
})();
if(cljs.core.truth_(inst_29921)){
var statearr_29943_30056 = state_29939__$1;
(statearr_29943_30056[(1)] = (5));

} else {
var statearr_29944_30057 = state_29939__$1;
(statearr_29944_30057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (5))){
var inst_29923 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29939__$1 = state_29939;
var statearr_29945_30058 = state_29939__$1;
(statearr_29945_30058[(2)] = inst_29923);

(statearr_29945_30058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (6))){
var inst_29920 = (state_29939[(7)]);
var inst_29925 = (state_29939[(8)]);
var inst_29925__$1 = cljs.core.async.chan.call(null,(1));
var inst_29926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29927 = [inst_29920,inst_29925__$1];
var inst_29928 = (new cljs.core.PersistentVector(null,2,(5),inst_29926,inst_29927,null));
var state_29939__$1 = (function (){var statearr_29946 = state_29939;
(statearr_29946[(8)] = inst_29925__$1);

return statearr_29946;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29939__$1,(8),jobs,inst_29928);
} else {
if((state_val_29940 === (7))){
var inst_29935 = (state_29939[(2)]);
var state_29939__$1 = state_29939;
var statearr_29947_30059 = state_29939__$1;
(statearr_29947_30059[(2)] = inst_29935);

(statearr_29947_30059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (8))){
var inst_29925 = (state_29939[(8)]);
var inst_29930 = (state_29939[(2)]);
var state_29939__$1 = (function (){var statearr_29948 = state_29939;
(statearr_29948[(9)] = inst_29930);

return statearr_29948;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29939__$1,(9),results,inst_29925);
} else {
if((state_val_29940 === (9))){
var inst_29932 = (state_29939[(2)]);
var state_29939__$1 = (function (){var statearr_29949 = state_29939;
(statearr_29949[(10)] = inst_29932);

return statearr_29949;
})();
var statearr_29950_30060 = state_29939__$1;
(statearr_29950_30060[(2)] = null);

(statearr_29950_30060[(1)] = (2));


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
});})(c__29456__auto___30054,jobs,results,process,async))
;
return ((function (switch__29342__auto__,c__29456__auto___30054,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0 = (function (){
var statearr_29954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29954[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__);

(statearr_29954[(1)] = (1));

return statearr_29954;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1 = (function (state_29939){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_29939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e29955){if((e29955 instanceof Object)){
var ex__29346__auto__ = e29955;
var statearr_29956_30061 = state_29939;
(statearr_29956_30061[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30062 = state_29939;
state_29939 = G__30062;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__ = function(state_29939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1.call(this,state_29939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___30054,jobs,results,process,async))
})();
var state__29458__auto__ = (function (){var statearr_29957 = f__29457__auto__.call(null);
(statearr_29957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___30054);

return statearr_29957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___30054,jobs,results,process,async))
);


var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__,jobs,results,process,async){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__,jobs,results,process,async){
return (function (state_29995){
var state_val_29996 = (state_29995[(1)]);
if((state_val_29996 === (7))){
var inst_29991 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
var statearr_29997_30063 = state_29995__$1;
(statearr_29997_30063[(2)] = inst_29991);

(statearr_29997_30063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (20))){
var state_29995__$1 = state_29995;
var statearr_29998_30064 = state_29995__$1;
(statearr_29998_30064[(2)] = null);

(statearr_29998_30064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (1))){
var state_29995__$1 = state_29995;
var statearr_29999_30065 = state_29995__$1;
(statearr_29999_30065[(2)] = null);

(statearr_29999_30065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (4))){
var inst_29960 = (state_29995[(7)]);
var inst_29960__$1 = (state_29995[(2)]);
var inst_29961 = (inst_29960__$1 == null);
var state_29995__$1 = (function (){var statearr_30000 = state_29995;
(statearr_30000[(7)] = inst_29960__$1);

return statearr_30000;
})();
if(cljs.core.truth_(inst_29961)){
var statearr_30001_30066 = state_29995__$1;
(statearr_30001_30066[(1)] = (5));

} else {
var statearr_30002_30067 = state_29995__$1;
(statearr_30002_30067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (15))){
var inst_29973 = (state_29995[(8)]);
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29995__$1,(18),to,inst_29973);
} else {
if((state_val_29996 === (21))){
var inst_29986 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
var statearr_30003_30068 = state_29995__$1;
(statearr_30003_30068[(2)] = inst_29986);

(statearr_30003_30068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (13))){
var inst_29988 = (state_29995[(2)]);
var state_29995__$1 = (function (){var statearr_30004 = state_29995;
(statearr_30004[(9)] = inst_29988);

return statearr_30004;
})();
var statearr_30005_30069 = state_29995__$1;
(statearr_30005_30069[(2)] = null);

(statearr_30005_30069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (6))){
var inst_29960 = (state_29995[(7)]);
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29995__$1,(11),inst_29960);
} else {
if((state_val_29996 === (17))){
var inst_29981 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
if(cljs.core.truth_(inst_29981)){
var statearr_30006_30070 = state_29995__$1;
(statearr_30006_30070[(1)] = (19));

} else {
var statearr_30007_30071 = state_29995__$1;
(statearr_30007_30071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (3))){
var inst_29993 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29995__$1,inst_29993);
} else {
if((state_val_29996 === (12))){
var inst_29970 = (state_29995[(10)]);
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29995__$1,(14),inst_29970);
} else {
if((state_val_29996 === (2))){
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29995__$1,(4),results);
} else {
if((state_val_29996 === (19))){
var state_29995__$1 = state_29995;
var statearr_30008_30072 = state_29995__$1;
(statearr_30008_30072[(2)] = null);

(statearr_30008_30072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (11))){
var inst_29970 = (state_29995[(2)]);
var state_29995__$1 = (function (){var statearr_30009 = state_29995;
(statearr_30009[(10)] = inst_29970);

return statearr_30009;
})();
var statearr_30010_30073 = state_29995__$1;
(statearr_30010_30073[(2)] = null);

(statearr_30010_30073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (9))){
var state_29995__$1 = state_29995;
var statearr_30011_30074 = state_29995__$1;
(statearr_30011_30074[(2)] = null);

(statearr_30011_30074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (5))){
var state_29995__$1 = state_29995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30012_30075 = state_29995__$1;
(statearr_30012_30075[(1)] = (8));

} else {
var statearr_30013_30076 = state_29995__$1;
(statearr_30013_30076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (14))){
var inst_29975 = (state_29995[(11)]);
var inst_29973 = (state_29995[(8)]);
var inst_29973__$1 = (state_29995[(2)]);
var inst_29974 = (inst_29973__$1 == null);
var inst_29975__$1 = cljs.core.not.call(null,inst_29974);
var state_29995__$1 = (function (){var statearr_30014 = state_29995;
(statearr_30014[(11)] = inst_29975__$1);

(statearr_30014[(8)] = inst_29973__$1);

return statearr_30014;
})();
if(inst_29975__$1){
var statearr_30015_30077 = state_29995__$1;
(statearr_30015_30077[(1)] = (15));

} else {
var statearr_30016_30078 = state_29995__$1;
(statearr_30016_30078[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (16))){
var inst_29975 = (state_29995[(11)]);
var state_29995__$1 = state_29995;
var statearr_30017_30079 = state_29995__$1;
(statearr_30017_30079[(2)] = inst_29975);

(statearr_30017_30079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (10))){
var inst_29967 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
var statearr_30018_30080 = state_29995__$1;
(statearr_30018_30080[(2)] = inst_29967);

(statearr_30018_30080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (18))){
var inst_29978 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
var statearr_30019_30081 = state_29995__$1;
(statearr_30019_30081[(2)] = inst_29978);

(statearr_30019_30081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (8))){
var inst_29964 = cljs.core.async.close_BANG_.call(null,to);
var state_29995__$1 = state_29995;
var statearr_30020_30082 = state_29995__$1;
(statearr_30020_30082[(2)] = inst_29964);

(statearr_30020_30082[(1)] = (10));


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
});})(c__29456__auto__,jobs,results,process,async))
;
return ((function (switch__29342__auto__,c__29456__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0 = (function (){
var statearr_30024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__);

(statearr_30024[(1)] = (1));

return statearr_30024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1 = (function (state_29995){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_29995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e30025){if((e30025 instanceof Object)){
var ex__29346__auto__ = e30025;
var statearr_30026_30083 = state_29995;
(statearr_30026_30083[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30084 = state_29995;
state_29995 = G__30084;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__ = function(state_29995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1.call(this,state_29995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__,jobs,results,process,async))
})();
var state__29458__auto__ = (function (){var statearr_30027 = f__29457__auto__.call(null);
(statearr_30027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_30027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__,jobs,results,process,async))
);

return c__29456__auto__;
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
var args30085 = [];
var len__27991__auto___30088 = arguments.length;
var i__27992__auto___30089 = (0);
while(true){
if((i__27992__auto___30089 < len__27991__auto___30088)){
args30085.push((arguments[i__27992__auto___30089]));

var G__30090 = (i__27992__auto___30089 + (1));
i__27992__auto___30089 = G__30090;
continue;
} else {
}
break;
}

var G__30087 = args30085.length;
switch (G__30087) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30085.length)].join('')));

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
var args30092 = [];
var len__27991__auto___30095 = arguments.length;
var i__27992__auto___30096 = (0);
while(true){
if((i__27992__auto___30096 < len__27991__auto___30095)){
args30092.push((arguments[i__27992__auto___30096]));

var G__30097 = (i__27992__auto___30096 + (1));
i__27992__auto___30096 = G__30097;
continue;
} else {
}
break;
}

var G__30094 = args30092.length;
switch (G__30094) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30092.length)].join('')));

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
var args30099 = [];
var len__27991__auto___30152 = arguments.length;
var i__27992__auto___30153 = (0);
while(true){
if((i__27992__auto___30153 < len__27991__auto___30152)){
args30099.push((arguments[i__27992__auto___30153]));

var G__30154 = (i__27992__auto___30153 + (1));
i__27992__auto___30153 = G__30154;
continue;
} else {
}
break;
}

var G__30101 = args30099.length;
switch (G__30101) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30099.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29456__auto___30156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___30156,tc,fc){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___30156,tc,fc){
return (function (state_30127){
var state_val_30128 = (state_30127[(1)]);
if((state_val_30128 === (7))){
var inst_30123 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
var statearr_30129_30157 = state_30127__$1;
(statearr_30129_30157[(2)] = inst_30123);

(statearr_30129_30157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (1))){
var state_30127__$1 = state_30127;
var statearr_30130_30158 = state_30127__$1;
(statearr_30130_30158[(2)] = null);

(statearr_30130_30158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (4))){
var inst_30104 = (state_30127[(7)]);
var inst_30104__$1 = (state_30127[(2)]);
var inst_30105 = (inst_30104__$1 == null);
var state_30127__$1 = (function (){var statearr_30131 = state_30127;
(statearr_30131[(7)] = inst_30104__$1);

return statearr_30131;
})();
if(cljs.core.truth_(inst_30105)){
var statearr_30132_30159 = state_30127__$1;
(statearr_30132_30159[(1)] = (5));

} else {
var statearr_30133_30160 = state_30127__$1;
(statearr_30133_30160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (13))){
var state_30127__$1 = state_30127;
var statearr_30134_30161 = state_30127__$1;
(statearr_30134_30161[(2)] = null);

(statearr_30134_30161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (6))){
var inst_30104 = (state_30127[(7)]);
var inst_30110 = p.call(null,inst_30104);
var state_30127__$1 = state_30127;
if(cljs.core.truth_(inst_30110)){
var statearr_30135_30162 = state_30127__$1;
(statearr_30135_30162[(1)] = (9));

} else {
var statearr_30136_30163 = state_30127__$1;
(statearr_30136_30163[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (3))){
var inst_30125 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30127__$1,inst_30125);
} else {
if((state_val_30128 === (12))){
var state_30127__$1 = state_30127;
var statearr_30137_30164 = state_30127__$1;
(statearr_30137_30164[(2)] = null);

(statearr_30137_30164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (2))){
var state_30127__$1 = state_30127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30127__$1,(4),ch);
} else {
if((state_val_30128 === (11))){
var inst_30104 = (state_30127[(7)]);
var inst_30114 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30127__$1,(8),inst_30114,inst_30104);
} else {
if((state_val_30128 === (9))){
var state_30127__$1 = state_30127;
var statearr_30138_30165 = state_30127__$1;
(statearr_30138_30165[(2)] = tc);

(statearr_30138_30165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (5))){
var inst_30107 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30108 = cljs.core.async.close_BANG_.call(null,fc);
var state_30127__$1 = (function (){var statearr_30139 = state_30127;
(statearr_30139[(8)] = inst_30107);

return statearr_30139;
})();
var statearr_30140_30166 = state_30127__$1;
(statearr_30140_30166[(2)] = inst_30108);

(statearr_30140_30166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (14))){
var inst_30121 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
var statearr_30141_30167 = state_30127__$1;
(statearr_30141_30167[(2)] = inst_30121);

(statearr_30141_30167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (10))){
var state_30127__$1 = state_30127;
var statearr_30142_30168 = state_30127__$1;
(statearr_30142_30168[(2)] = fc);

(statearr_30142_30168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (8))){
var inst_30116 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
if(cljs.core.truth_(inst_30116)){
var statearr_30143_30169 = state_30127__$1;
(statearr_30143_30169[(1)] = (12));

} else {
var statearr_30144_30170 = state_30127__$1;
(statearr_30144_30170[(1)] = (13));

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
});})(c__29456__auto___30156,tc,fc))
;
return ((function (switch__29342__auto__,c__29456__auto___30156,tc,fc){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_30148 = [null,null,null,null,null,null,null,null,null];
(statearr_30148[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_30148[(1)] = (1));

return statearr_30148;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_30127){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_30127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e30149){if((e30149 instanceof Object)){
var ex__29346__auto__ = e30149;
var statearr_30150_30171 = state_30127;
(statearr_30150_30171[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30172 = state_30127;
state_30127 = G__30172;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_30127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_30127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___30156,tc,fc))
})();
var state__29458__auto__ = (function (){var statearr_30151 = f__29457__auto__.call(null);
(statearr_30151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___30156);

return statearr_30151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___30156,tc,fc))
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
var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__){
return (function (state_30236){
var state_val_30237 = (state_30236[(1)]);
if((state_val_30237 === (7))){
var inst_30232 = (state_30236[(2)]);
var state_30236__$1 = state_30236;
var statearr_30238_30259 = state_30236__$1;
(statearr_30238_30259[(2)] = inst_30232);

(statearr_30238_30259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (1))){
var inst_30216 = init;
var state_30236__$1 = (function (){var statearr_30239 = state_30236;
(statearr_30239[(7)] = inst_30216);

return statearr_30239;
})();
var statearr_30240_30260 = state_30236__$1;
(statearr_30240_30260[(2)] = null);

(statearr_30240_30260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (4))){
var inst_30219 = (state_30236[(8)]);
var inst_30219__$1 = (state_30236[(2)]);
var inst_30220 = (inst_30219__$1 == null);
var state_30236__$1 = (function (){var statearr_30241 = state_30236;
(statearr_30241[(8)] = inst_30219__$1);

return statearr_30241;
})();
if(cljs.core.truth_(inst_30220)){
var statearr_30242_30261 = state_30236__$1;
(statearr_30242_30261[(1)] = (5));

} else {
var statearr_30243_30262 = state_30236__$1;
(statearr_30243_30262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (6))){
var inst_30219 = (state_30236[(8)]);
var inst_30223 = (state_30236[(9)]);
var inst_30216 = (state_30236[(7)]);
var inst_30223__$1 = f.call(null,inst_30216,inst_30219);
var inst_30224 = cljs.core.reduced_QMARK_.call(null,inst_30223__$1);
var state_30236__$1 = (function (){var statearr_30244 = state_30236;
(statearr_30244[(9)] = inst_30223__$1);

return statearr_30244;
})();
if(inst_30224){
var statearr_30245_30263 = state_30236__$1;
(statearr_30245_30263[(1)] = (8));

} else {
var statearr_30246_30264 = state_30236__$1;
(statearr_30246_30264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (3))){
var inst_30234 = (state_30236[(2)]);
var state_30236__$1 = state_30236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30236__$1,inst_30234);
} else {
if((state_val_30237 === (2))){
var state_30236__$1 = state_30236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30236__$1,(4),ch);
} else {
if((state_val_30237 === (9))){
var inst_30223 = (state_30236[(9)]);
var inst_30216 = inst_30223;
var state_30236__$1 = (function (){var statearr_30247 = state_30236;
(statearr_30247[(7)] = inst_30216);

return statearr_30247;
})();
var statearr_30248_30265 = state_30236__$1;
(statearr_30248_30265[(2)] = null);

(statearr_30248_30265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (5))){
var inst_30216 = (state_30236[(7)]);
var state_30236__$1 = state_30236;
var statearr_30249_30266 = state_30236__$1;
(statearr_30249_30266[(2)] = inst_30216);

(statearr_30249_30266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (10))){
var inst_30230 = (state_30236[(2)]);
var state_30236__$1 = state_30236;
var statearr_30250_30267 = state_30236__$1;
(statearr_30250_30267[(2)] = inst_30230);

(statearr_30250_30267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (8))){
var inst_30223 = (state_30236[(9)]);
var inst_30226 = cljs.core.deref.call(null,inst_30223);
var state_30236__$1 = state_30236;
var statearr_30251_30268 = state_30236__$1;
(statearr_30251_30268[(2)] = inst_30226);

(statearr_30251_30268[(1)] = (10));


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
});})(c__29456__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29343__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29343__auto____0 = (function (){
var statearr_30255 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30255[(0)] = cljs$core$async$reduce_$_state_machine__29343__auto__);

(statearr_30255[(1)] = (1));

return statearr_30255;
});
var cljs$core$async$reduce_$_state_machine__29343__auto____1 = (function (state_30236){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_30236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e30256){if((e30256 instanceof Object)){
var ex__29346__auto__ = e30256;
var statearr_30257_30269 = state_30236;
(statearr_30257_30269[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30270 = state_30236;
state_30236 = G__30270;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29343__auto__ = function(state_30236){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29343__auto____1.call(this,state_30236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29343__auto____0;
cljs$core$async$reduce_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29343__auto____1;
return cljs$core$async$reduce_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__))
})();
var state__29458__auto__ = (function (){var statearr_30258 = f__29457__auto__.call(null);
(statearr_30258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_30258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__))
);

return c__29456__auto__;
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
var args30271 = [];
var len__27991__auto___30323 = arguments.length;
var i__27992__auto___30324 = (0);
while(true){
if((i__27992__auto___30324 < len__27991__auto___30323)){
args30271.push((arguments[i__27992__auto___30324]));

var G__30325 = (i__27992__auto___30324 + (1));
i__27992__auto___30324 = G__30325;
continue;
} else {
}
break;
}

var G__30273 = args30271.length;
switch (G__30273) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30271.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__){
return (function (state_30298){
var state_val_30299 = (state_30298[(1)]);
if((state_val_30299 === (7))){
var inst_30280 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30300_30327 = state_30298__$1;
(statearr_30300_30327[(2)] = inst_30280);

(statearr_30300_30327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (1))){
var inst_30274 = cljs.core.seq.call(null,coll);
var inst_30275 = inst_30274;
var state_30298__$1 = (function (){var statearr_30301 = state_30298;
(statearr_30301[(7)] = inst_30275);

return statearr_30301;
})();
var statearr_30302_30328 = state_30298__$1;
(statearr_30302_30328[(2)] = null);

(statearr_30302_30328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (4))){
var inst_30275 = (state_30298[(7)]);
var inst_30278 = cljs.core.first.call(null,inst_30275);
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30298__$1,(7),ch,inst_30278);
} else {
if((state_val_30299 === (13))){
var inst_30292 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30303_30329 = state_30298__$1;
(statearr_30303_30329[(2)] = inst_30292);

(statearr_30303_30329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (6))){
var inst_30283 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
if(cljs.core.truth_(inst_30283)){
var statearr_30304_30330 = state_30298__$1;
(statearr_30304_30330[(1)] = (8));

} else {
var statearr_30305_30331 = state_30298__$1;
(statearr_30305_30331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (3))){
var inst_30296 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30298__$1,inst_30296);
} else {
if((state_val_30299 === (12))){
var state_30298__$1 = state_30298;
var statearr_30306_30332 = state_30298__$1;
(statearr_30306_30332[(2)] = null);

(statearr_30306_30332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (2))){
var inst_30275 = (state_30298[(7)]);
var state_30298__$1 = state_30298;
if(cljs.core.truth_(inst_30275)){
var statearr_30307_30333 = state_30298__$1;
(statearr_30307_30333[(1)] = (4));

} else {
var statearr_30308_30334 = state_30298__$1;
(statearr_30308_30334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (11))){
var inst_30289 = cljs.core.async.close_BANG_.call(null,ch);
var state_30298__$1 = state_30298;
var statearr_30309_30335 = state_30298__$1;
(statearr_30309_30335[(2)] = inst_30289);

(statearr_30309_30335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (9))){
var state_30298__$1 = state_30298;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30310_30336 = state_30298__$1;
(statearr_30310_30336[(1)] = (11));

} else {
var statearr_30311_30337 = state_30298__$1;
(statearr_30311_30337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (5))){
var inst_30275 = (state_30298[(7)]);
var state_30298__$1 = state_30298;
var statearr_30312_30338 = state_30298__$1;
(statearr_30312_30338[(2)] = inst_30275);

(statearr_30312_30338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (10))){
var inst_30294 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30313_30339 = state_30298__$1;
(statearr_30313_30339[(2)] = inst_30294);

(statearr_30313_30339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (8))){
var inst_30275 = (state_30298[(7)]);
var inst_30285 = cljs.core.next.call(null,inst_30275);
var inst_30275__$1 = inst_30285;
var state_30298__$1 = (function (){var statearr_30314 = state_30298;
(statearr_30314[(7)] = inst_30275__$1);

return statearr_30314;
})();
var statearr_30315_30340 = state_30298__$1;
(statearr_30315_30340[(2)] = null);

(statearr_30315_30340[(1)] = (2));


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
});})(c__29456__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_30319 = [null,null,null,null,null,null,null,null];
(statearr_30319[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_30319[(1)] = (1));

return statearr_30319;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_30298){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_30298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e30320){if((e30320 instanceof Object)){
var ex__29346__auto__ = e30320;
var statearr_30321_30341 = state_30298;
(statearr_30321_30341[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30342 = state_30298;
state_30298 = G__30342;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_30298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_30298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__))
})();
var state__29458__auto__ = (function (){var statearr_30322 = f__29457__auto__.call(null);
(statearr_30322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_30322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__))
);

return c__29456__auto__;
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
var x__27521__auto__ = (((_ == null))?null:_);
var m__27522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,_);
} else {
var m__27522__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,_);
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
var x__27521__auto__ = (((m == null))?null:m);
var m__27522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27522__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__27521__auto__ = (((m == null))?null:m);
var m__27522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,m,ch);
} else {
var m__27522__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,m,ch);
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
var x__27521__auto__ = (((m == null))?null:m);
var m__27522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,m);
} else {
var m__27522__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async30568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30568 = (function (mult,ch,cs,meta30569){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30569 = meta30569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30570,meta30569__$1){
var self__ = this;
var _30570__$1 = this;
return (new cljs.core.async.t_cljs$core$async30568(self__.mult,self__.ch,self__.cs,meta30569__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30570){
var self__ = this;
var _30570__$1 = this;
return self__.meta30569;
});})(cs))
;

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30568.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30569","meta30569",738706835,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30568";

cljs.core.async.t_cljs$core$async30568.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.core.async/t_cljs$core$async30568");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30568 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30568(mult__$1,ch__$1,cs__$1,meta30569){
return (new cljs.core.async.t_cljs$core$async30568(mult__$1,ch__$1,cs__$1,meta30569));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30568(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29456__auto___30793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___30793,cs,m,dchan,dctr,done){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___30793,cs,m,dchan,dctr,done){
return (function (state_30705){
var state_val_30706 = (state_30705[(1)]);
if((state_val_30706 === (7))){
var inst_30701 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30707_30794 = state_30705__$1;
(statearr_30707_30794[(2)] = inst_30701);

(statearr_30707_30794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (20))){
var inst_30604 = (state_30705[(7)]);
var inst_30616 = cljs.core.first.call(null,inst_30604);
var inst_30617 = cljs.core.nth.call(null,inst_30616,(0),null);
var inst_30618 = cljs.core.nth.call(null,inst_30616,(1),null);
var state_30705__$1 = (function (){var statearr_30708 = state_30705;
(statearr_30708[(8)] = inst_30617);

return statearr_30708;
})();
if(cljs.core.truth_(inst_30618)){
var statearr_30709_30795 = state_30705__$1;
(statearr_30709_30795[(1)] = (22));

} else {
var statearr_30710_30796 = state_30705__$1;
(statearr_30710_30796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (27))){
var inst_30653 = (state_30705[(9)]);
var inst_30646 = (state_30705[(10)]);
var inst_30573 = (state_30705[(11)]);
var inst_30648 = (state_30705[(12)]);
var inst_30653__$1 = cljs.core._nth.call(null,inst_30646,inst_30648);
var inst_30654 = cljs.core.async.put_BANG_.call(null,inst_30653__$1,inst_30573,done);
var state_30705__$1 = (function (){var statearr_30711 = state_30705;
(statearr_30711[(9)] = inst_30653__$1);

return statearr_30711;
})();
if(cljs.core.truth_(inst_30654)){
var statearr_30712_30797 = state_30705__$1;
(statearr_30712_30797[(1)] = (30));

} else {
var statearr_30713_30798 = state_30705__$1;
(statearr_30713_30798[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (1))){
var state_30705__$1 = state_30705;
var statearr_30714_30799 = state_30705__$1;
(statearr_30714_30799[(2)] = null);

(statearr_30714_30799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (24))){
var inst_30604 = (state_30705[(7)]);
var inst_30623 = (state_30705[(2)]);
var inst_30624 = cljs.core.next.call(null,inst_30604);
var inst_30582 = inst_30624;
var inst_30583 = null;
var inst_30584 = (0);
var inst_30585 = (0);
var state_30705__$1 = (function (){var statearr_30715 = state_30705;
(statearr_30715[(13)] = inst_30623);

(statearr_30715[(14)] = inst_30583);

(statearr_30715[(15)] = inst_30584);

(statearr_30715[(16)] = inst_30582);

(statearr_30715[(17)] = inst_30585);

return statearr_30715;
})();
var statearr_30716_30800 = state_30705__$1;
(statearr_30716_30800[(2)] = null);

(statearr_30716_30800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (39))){
var state_30705__$1 = state_30705;
var statearr_30720_30801 = state_30705__$1;
(statearr_30720_30801[(2)] = null);

(statearr_30720_30801[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (4))){
var inst_30573 = (state_30705[(11)]);
var inst_30573__$1 = (state_30705[(2)]);
var inst_30574 = (inst_30573__$1 == null);
var state_30705__$1 = (function (){var statearr_30721 = state_30705;
(statearr_30721[(11)] = inst_30573__$1);

return statearr_30721;
})();
if(cljs.core.truth_(inst_30574)){
var statearr_30722_30802 = state_30705__$1;
(statearr_30722_30802[(1)] = (5));

} else {
var statearr_30723_30803 = state_30705__$1;
(statearr_30723_30803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (15))){
var inst_30583 = (state_30705[(14)]);
var inst_30584 = (state_30705[(15)]);
var inst_30582 = (state_30705[(16)]);
var inst_30585 = (state_30705[(17)]);
var inst_30600 = (state_30705[(2)]);
var inst_30601 = (inst_30585 + (1));
var tmp30717 = inst_30583;
var tmp30718 = inst_30584;
var tmp30719 = inst_30582;
var inst_30582__$1 = tmp30719;
var inst_30583__$1 = tmp30717;
var inst_30584__$1 = tmp30718;
var inst_30585__$1 = inst_30601;
var state_30705__$1 = (function (){var statearr_30724 = state_30705;
(statearr_30724[(14)] = inst_30583__$1);

(statearr_30724[(15)] = inst_30584__$1);

(statearr_30724[(16)] = inst_30582__$1);

(statearr_30724[(17)] = inst_30585__$1);

(statearr_30724[(18)] = inst_30600);

return statearr_30724;
})();
var statearr_30725_30804 = state_30705__$1;
(statearr_30725_30804[(2)] = null);

(statearr_30725_30804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (21))){
var inst_30627 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30729_30805 = state_30705__$1;
(statearr_30729_30805[(2)] = inst_30627);

(statearr_30729_30805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (31))){
var inst_30653 = (state_30705[(9)]);
var inst_30657 = done.call(null,null);
var inst_30658 = cljs.core.async.untap_STAR_.call(null,m,inst_30653);
var state_30705__$1 = (function (){var statearr_30730 = state_30705;
(statearr_30730[(19)] = inst_30657);

return statearr_30730;
})();
var statearr_30731_30806 = state_30705__$1;
(statearr_30731_30806[(2)] = inst_30658);

(statearr_30731_30806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (32))){
var inst_30647 = (state_30705[(20)]);
var inst_30646 = (state_30705[(10)]);
var inst_30648 = (state_30705[(12)]);
var inst_30645 = (state_30705[(21)]);
var inst_30660 = (state_30705[(2)]);
var inst_30661 = (inst_30648 + (1));
var tmp30726 = inst_30647;
var tmp30727 = inst_30646;
var tmp30728 = inst_30645;
var inst_30645__$1 = tmp30728;
var inst_30646__$1 = tmp30727;
var inst_30647__$1 = tmp30726;
var inst_30648__$1 = inst_30661;
var state_30705__$1 = (function (){var statearr_30732 = state_30705;
(statearr_30732[(20)] = inst_30647__$1);

(statearr_30732[(10)] = inst_30646__$1);

(statearr_30732[(22)] = inst_30660);

(statearr_30732[(12)] = inst_30648__$1);

(statearr_30732[(21)] = inst_30645__$1);

return statearr_30732;
})();
var statearr_30733_30807 = state_30705__$1;
(statearr_30733_30807[(2)] = null);

(statearr_30733_30807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (40))){
var inst_30673 = (state_30705[(23)]);
var inst_30677 = done.call(null,null);
var inst_30678 = cljs.core.async.untap_STAR_.call(null,m,inst_30673);
var state_30705__$1 = (function (){var statearr_30734 = state_30705;
(statearr_30734[(24)] = inst_30677);

return statearr_30734;
})();
var statearr_30735_30808 = state_30705__$1;
(statearr_30735_30808[(2)] = inst_30678);

(statearr_30735_30808[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (33))){
var inst_30664 = (state_30705[(25)]);
var inst_30666 = cljs.core.chunked_seq_QMARK_.call(null,inst_30664);
var state_30705__$1 = state_30705;
if(inst_30666){
var statearr_30736_30809 = state_30705__$1;
(statearr_30736_30809[(1)] = (36));

} else {
var statearr_30737_30810 = state_30705__$1;
(statearr_30737_30810[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (13))){
var inst_30594 = (state_30705[(26)]);
var inst_30597 = cljs.core.async.close_BANG_.call(null,inst_30594);
var state_30705__$1 = state_30705;
var statearr_30738_30811 = state_30705__$1;
(statearr_30738_30811[(2)] = inst_30597);

(statearr_30738_30811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (22))){
var inst_30617 = (state_30705[(8)]);
var inst_30620 = cljs.core.async.close_BANG_.call(null,inst_30617);
var state_30705__$1 = state_30705;
var statearr_30739_30812 = state_30705__$1;
(statearr_30739_30812[(2)] = inst_30620);

(statearr_30739_30812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (36))){
var inst_30664 = (state_30705[(25)]);
var inst_30668 = cljs.core.chunk_first.call(null,inst_30664);
var inst_30669 = cljs.core.chunk_rest.call(null,inst_30664);
var inst_30670 = cljs.core.count.call(null,inst_30668);
var inst_30645 = inst_30669;
var inst_30646 = inst_30668;
var inst_30647 = inst_30670;
var inst_30648 = (0);
var state_30705__$1 = (function (){var statearr_30740 = state_30705;
(statearr_30740[(20)] = inst_30647);

(statearr_30740[(10)] = inst_30646);

(statearr_30740[(12)] = inst_30648);

(statearr_30740[(21)] = inst_30645);

return statearr_30740;
})();
var statearr_30741_30813 = state_30705__$1;
(statearr_30741_30813[(2)] = null);

(statearr_30741_30813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (41))){
var inst_30664 = (state_30705[(25)]);
var inst_30680 = (state_30705[(2)]);
var inst_30681 = cljs.core.next.call(null,inst_30664);
var inst_30645 = inst_30681;
var inst_30646 = null;
var inst_30647 = (0);
var inst_30648 = (0);
var state_30705__$1 = (function (){var statearr_30742 = state_30705;
(statearr_30742[(20)] = inst_30647);

(statearr_30742[(10)] = inst_30646);

(statearr_30742[(27)] = inst_30680);

(statearr_30742[(12)] = inst_30648);

(statearr_30742[(21)] = inst_30645);

return statearr_30742;
})();
var statearr_30743_30814 = state_30705__$1;
(statearr_30743_30814[(2)] = null);

(statearr_30743_30814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (43))){
var state_30705__$1 = state_30705;
var statearr_30744_30815 = state_30705__$1;
(statearr_30744_30815[(2)] = null);

(statearr_30744_30815[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (29))){
var inst_30689 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30745_30816 = state_30705__$1;
(statearr_30745_30816[(2)] = inst_30689);

(statearr_30745_30816[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (44))){
var inst_30698 = (state_30705[(2)]);
var state_30705__$1 = (function (){var statearr_30746 = state_30705;
(statearr_30746[(28)] = inst_30698);

return statearr_30746;
})();
var statearr_30747_30817 = state_30705__$1;
(statearr_30747_30817[(2)] = null);

(statearr_30747_30817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (6))){
var inst_30637 = (state_30705[(29)]);
var inst_30636 = cljs.core.deref.call(null,cs);
var inst_30637__$1 = cljs.core.keys.call(null,inst_30636);
var inst_30638 = cljs.core.count.call(null,inst_30637__$1);
var inst_30639 = cljs.core.reset_BANG_.call(null,dctr,inst_30638);
var inst_30644 = cljs.core.seq.call(null,inst_30637__$1);
var inst_30645 = inst_30644;
var inst_30646 = null;
var inst_30647 = (0);
var inst_30648 = (0);
var state_30705__$1 = (function (){var statearr_30748 = state_30705;
(statearr_30748[(29)] = inst_30637__$1);

(statearr_30748[(20)] = inst_30647);

(statearr_30748[(30)] = inst_30639);

(statearr_30748[(10)] = inst_30646);

(statearr_30748[(12)] = inst_30648);

(statearr_30748[(21)] = inst_30645);

return statearr_30748;
})();
var statearr_30749_30818 = state_30705__$1;
(statearr_30749_30818[(2)] = null);

(statearr_30749_30818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (28))){
var inst_30664 = (state_30705[(25)]);
var inst_30645 = (state_30705[(21)]);
var inst_30664__$1 = cljs.core.seq.call(null,inst_30645);
var state_30705__$1 = (function (){var statearr_30750 = state_30705;
(statearr_30750[(25)] = inst_30664__$1);

return statearr_30750;
})();
if(inst_30664__$1){
var statearr_30751_30819 = state_30705__$1;
(statearr_30751_30819[(1)] = (33));

} else {
var statearr_30752_30820 = state_30705__$1;
(statearr_30752_30820[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (25))){
var inst_30647 = (state_30705[(20)]);
var inst_30648 = (state_30705[(12)]);
var inst_30650 = (inst_30648 < inst_30647);
var inst_30651 = inst_30650;
var state_30705__$1 = state_30705;
if(cljs.core.truth_(inst_30651)){
var statearr_30753_30821 = state_30705__$1;
(statearr_30753_30821[(1)] = (27));

} else {
var statearr_30754_30822 = state_30705__$1;
(statearr_30754_30822[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (34))){
var state_30705__$1 = state_30705;
var statearr_30755_30823 = state_30705__$1;
(statearr_30755_30823[(2)] = null);

(statearr_30755_30823[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (17))){
var state_30705__$1 = state_30705;
var statearr_30756_30824 = state_30705__$1;
(statearr_30756_30824[(2)] = null);

(statearr_30756_30824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (3))){
var inst_30703 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30705__$1,inst_30703);
} else {
if((state_val_30706 === (12))){
var inst_30632 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30757_30825 = state_30705__$1;
(statearr_30757_30825[(2)] = inst_30632);

(statearr_30757_30825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (2))){
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30705__$1,(4),ch);
} else {
if((state_val_30706 === (23))){
var state_30705__$1 = state_30705;
var statearr_30758_30826 = state_30705__$1;
(statearr_30758_30826[(2)] = null);

(statearr_30758_30826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (35))){
var inst_30687 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30759_30827 = state_30705__$1;
(statearr_30759_30827[(2)] = inst_30687);

(statearr_30759_30827[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (19))){
var inst_30604 = (state_30705[(7)]);
var inst_30608 = cljs.core.chunk_first.call(null,inst_30604);
var inst_30609 = cljs.core.chunk_rest.call(null,inst_30604);
var inst_30610 = cljs.core.count.call(null,inst_30608);
var inst_30582 = inst_30609;
var inst_30583 = inst_30608;
var inst_30584 = inst_30610;
var inst_30585 = (0);
var state_30705__$1 = (function (){var statearr_30760 = state_30705;
(statearr_30760[(14)] = inst_30583);

(statearr_30760[(15)] = inst_30584);

(statearr_30760[(16)] = inst_30582);

(statearr_30760[(17)] = inst_30585);

return statearr_30760;
})();
var statearr_30761_30828 = state_30705__$1;
(statearr_30761_30828[(2)] = null);

(statearr_30761_30828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (11))){
var inst_30582 = (state_30705[(16)]);
var inst_30604 = (state_30705[(7)]);
var inst_30604__$1 = cljs.core.seq.call(null,inst_30582);
var state_30705__$1 = (function (){var statearr_30762 = state_30705;
(statearr_30762[(7)] = inst_30604__$1);

return statearr_30762;
})();
if(inst_30604__$1){
var statearr_30763_30829 = state_30705__$1;
(statearr_30763_30829[(1)] = (16));

} else {
var statearr_30764_30830 = state_30705__$1;
(statearr_30764_30830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (9))){
var inst_30634 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30765_30831 = state_30705__$1;
(statearr_30765_30831[(2)] = inst_30634);

(statearr_30765_30831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (5))){
var inst_30580 = cljs.core.deref.call(null,cs);
var inst_30581 = cljs.core.seq.call(null,inst_30580);
var inst_30582 = inst_30581;
var inst_30583 = null;
var inst_30584 = (0);
var inst_30585 = (0);
var state_30705__$1 = (function (){var statearr_30766 = state_30705;
(statearr_30766[(14)] = inst_30583);

(statearr_30766[(15)] = inst_30584);

(statearr_30766[(16)] = inst_30582);

(statearr_30766[(17)] = inst_30585);

return statearr_30766;
})();
var statearr_30767_30832 = state_30705__$1;
(statearr_30767_30832[(2)] = null);

(statearr_30767_30832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (14))){
var state_30705__$1 = state_30705;
var statearr_30768_30833 = state_30705__$1;
(statearr_30768_30833[(2)] = null);

(statearr_30768_30833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (45))){
var inst_30695 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30769_30834 = state_30705__$1;
(statearr_30769_30834[(2)] = inst_30695);

(statearr_30769_30834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (26))){
var inst_30637 = (state_30705[(29)]);
var inst_30691 = (state_30705[(2)]);
var inst_30692 = cljs.core.seq.call(null,inst_30637);
var state_30705__$1 = (function (){var statearr_30770 = state_30705;
(statearr_30770[(31)] = inst_30691);

return statearr_30770;
})();
if(inst_30692){
var statearr_30771_30835 = state_30705__$1;
(statearr_30771_30835[(1)] = (42));

} else {
var statearr_30772_30836 = state_30705__$1;
(statearr_30772_30836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (16))){
var inst_30604 = (state_30705[(7)]);
var inst_30606 = cljs.core.chunked_seq_QMARK_.call(null,inst_30604);
var state_30705__$1 = state_30705;
if(inst_30606){
var statearr_30773_30837 = state_30705__$1;
(statearr_30773_30837[(1)] = (19));

} else {
var statearr_30774_30838 = state_30705__$1;
(statearr_30774_30838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (38))){
var inst_30684 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30775_30839 = state_30705__$1;
(statearr_30775_30839[(2)] = inst_30684);

(statearr_30775_30839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (30))){
var state_30705__$1 = state_30705;
var statearr_30776_30840 = state_30705__$1;
(statearr_30776_30840[(2)] = null);

(statearr_30776_30840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (10))){
var inst_30583 = (state_30705[(14)]);
var inst_30585 = (state_30705[(17)]);
var inst_30593 = cljs.core._nth.call(null,inst_30583,inst_30585);
var inst_30594 = cljs.core.nth.call(null,inst_30593,(0),null);
var inst_30595 = cljs.core.nth.call(null,inst_30593,(1),null);
var state_30705__$1 = (function (){var statearr_30777 = state_30705;
(statearr_30777[(26)] = inst_30594);

return statearr_30777;
})();
if(cljs.core.truth_(inst_30595)){
var statearr_30778_30841 = state_30705__$1;
(statearr_30778_30841[(1)] = (13));

} else {
var statearr_30779_30842 = state_30705__$1;
(statearr_30779_30842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (18))){
var inst_30630 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30780_30843 = state_30705__$1;
(statearr_30780_30843[(2)] = inst_30630);

(statearr_30780_30843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (42))){
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30705__$1,(45),dchan);
} else {
if((state_val_30706 === (37))){
var inst_30664 = (state_30705[(25)]);
var inst_30573 = (state_30705[(11)]);
var inst_30673 = (state_30705[(23)]);
var inst_30673__$1 = cljs.core.first.call(null,inst_30664);
var inst_30674 = cljs.core.async.put_BANG_.call(null,inst_30673__$1,inst_30573,done);
var state_30705__$1 = (function (){var statearr_30781 = state_30705;
(statearr_30781[(23)] = inst_30673__$1);

return statearr_30781;
})();
if(cljs.core.truth_(inst_30674)){
var statearr_30782_30844 = state_30705__$1;
(statearr_30782_30844[(1)] = (39));

} else {
var statearr_30783_30845 = state_30705__$1;
(statearr_30783_30845[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (8))){
var inst_30584 = (state_30705[(15)]);
var inst_30585 = (state_30705[(17)]);
var inst_30587 = (inst_30585 < inst_30584);
var inst_30588 = inst_30587;
var state_30705__$1 = state_30705;
if(cljs.core.truth_(inst_30588)){
var statearr_30784_30846 = state_30705__$1;
(statearr_30784_30846[(1)] = (10));

} else {
var statearr_30785_30847 = state_30705__$1;
(statearr_30785_30847[(1)] = (11));

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
});})(c__29456__auto___30793,cs,m,dchan,dctr,done))
;
return ((function (switch__29342__auto__,c__29456__auto___30793,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29343__auto__ = null;
var cljs$core$async$mult_$_state_machine__29343__auto____0 = (function (){
var statearr_30789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30789[(0)] = cljs$core$async$mult_$_state_machine__29343__auto__);

(statearr_30789[(1)] = (1));

return statearr_30789;
});
var cljs$core$async$mult_$_state_machine__29343__auto____1 = (function (state_30705){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_30705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e30790){if((e30790 instanceof Object)){
var ex__29346__auto__ = e30790;
var statearr_30791_30848 = state_30705;
(statearr_30791_30848[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30849 = state_30705;
state_30705 = G__30849;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29343__auto__ = function(state_30705){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29343__auto____1.call(this,state_30705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29343__auto____0;
cljs$core$async$mult_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29343__auto____1;
return cljs$core$async$mult_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___30793,cs,m,dchan,dctr,done))
})();
var state__29458__auto__ = (function (){var statearr_30792 = f__29457__auto__.call(null);
(statearr_30792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___30793);

return statearr_30792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___30793,cs,m,dchan,dctr,done))
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
var args30850 = [];
var len__27991__auto___30853 = arguments.length;
var i__27992__auto___30854 = (0);
while(true){
if((i__27992__auto___30854 < len__27991__auto___30853)){
args30850.push((arguments[i__27992__auto___30854]));

var G__30855 = (i__27992__auto___30854 + (1));
i__27992__auto___30854 = G__30855;
continue;
} else {
}
break;
}

var G__30852 = args30850.length;
switch (G__30852) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30850.length)].join('')));

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
var x__27521__auto__ = (((m == null))?null:m);
var m__27522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,m,ch);
} else {
var m__27522__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,m,ch);
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
var x__27521__auto__ = (((m == null))?null:m);
var m__27522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,m,ch);
} else {
var m__27522__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,m,ch);
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
var x__27521__auto__ = (((m == null))?null:m);
var m__27522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,m);
} else {
var m__27522__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,m);
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
var x__27521__auto__ = (((m == null))?null:m);
var m__27522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,m,state_map);
} else {
var m__27522__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,m,state_map);
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
var x__27521__auto__ = (((m == null))?null:m);
var m__27522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,m,mode);
} else {
var m__27522__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27998__auto__ = [];
var len__27991__auto___30867 = arguments.length;
var i__27992__auto___30868 = (0);
while(true){
if((i__27992__auto___30868 < len__27991__auto___30867)){
args__27998__auto__.push((arguments[i__27992__auto___30868]));

var G__30869 = (i__27992__auto___30868 + (1));
i__27992__auto___30868 = G__30869;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((3) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27999__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30861){
var map__30862 = p__30861;
var map__30862__$1 = ((((!((map__30862 == null)))?((((map__30862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30862):map__30862);
var opts = map__30862__$1;
var statearr_30864_30870 = state;
(statearr_30864_30870[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__30862,map__30862__$1,opts){
return (function (val){
var statearr_30865_30871 = state;
(statearr_30865_30871[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30862,map__30862__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_30866_30872 = state;
(statearr_30866_30872[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30857){
var G__30858 = cljs.core.first.call(null,seq30857);
var seq30857__$1 = cljs.core.next.call(null,seq30857);
var G__30859 = cljs.core.first.call(null,seq30857__$1);
var seq30857__$2 = cljs.core.next.call(null,seq30857__$1);
var G__30860 = cljs.core.first.call(null,seq30857__$2);
var seq30857__$3 = cljs.core.next.call(null,seq30857__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30858,G__30859,G__30860,seq30857__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31038 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31039){
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
this.meta31039 = meta31039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31040,meta31039__$1){
var self__ = this;
var _31040__$1 = this;
return (new cljs.core.async.t_cljs$core$async31038(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31039__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31040){
var self__ = this;
var _31040__$1 = this;
return self__.meta31039;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31038.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31039","meta31039",-402019299,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31038";

cljs.core.async.t_cljs$core$async31038.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.core.async/t_cljs$core$async31038");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31038 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31038(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31039){
return (new cljs.core.async.t_cljs$core$async31038(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31039));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31038(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29456__auto___31203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___31203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___31203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31140){
var state_val_31141 = (state_31140[(1)]);
if((state_val_31141 === (7))){
var inst_31056 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31142_31204 = state_31140__$1;
(statearr_31142_31204[(2)] = inst_31056);

(statearr_31142_31204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (20))){
var inst_31068 = (state_31140[(7)]);
var state_31140__$1 = state_31140;
var statearr_31143_31205 = state_31140__$1;
(statearr_31143_31205[(2)] = inst_31068);

(statearr_31143_31205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (27))){
var state_31140__$1 = state_31140;
var statearr_31144_31206 = state_31140__$1;
(statearr_31144_31206[(2)] = null);

(statearr_31144_31206[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (1))){
var inst_31044 = (state_31140[(8)]);
var inst_31044__$1 = calc_state.call(null);
var inst_31046 = (inst_31044__$1 == null);
var inst_31047 = cljs.core.not.call(null,inst_31046);
var state_31140__$1 = (function (){var statearr_31145 = state_31140;
(statearr_31145[(8)] = inst_31044__$1);

return statearr_31145;
})();
if(inst_31047){
var statearr_31146_31207 = state_31140__$1;
(statearr_31146_31207[(1)] = (2));

} else {
var statearr_31147_31208 = state_31140__$1;
(statearr_31147_31208[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (24))){
var inst_31091 = (state_31140[(9)]);
var inst_31114 = (state_31140[(10)]);
var inst_31100 = (state_31140[(11)]);
var inst_31114__$1 = inst_31091.call(null,inst_31100);
var state_31140__$1 = (function (){var statearr_31148 = state_31140;
(statearr_31148[(10)] = inst_31114__$1);

return statearr_31148;
})();
if(cljs.core.truth_(inst_31114__$1)){
var statearr_31149_31209 = state_31140__$1;
(statearr_31149_31209[(1)] = (29));

} else {
var statearr_31150_31210 = state_31140__$1;
(statearr_31150_31210[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (4))){
var inst_31059 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31059)){
var statearr_31151_31211 = state_31140__$1;
(statearr_31151_31211[(1)] = (8));

} else {
var statearr_31152_31212 = state_31140__$1;
(statearr_31152_31212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (15))){
var inst_31085 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31085)){
var statearr_31153_31213 = state_31140__$1;
(statearr_31153_31213[(1)] = (19));

} else {
var statearr_31154_31214 = state_31140__$1;
(statearr_31154_31214[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (21))){
var inst_31090 = (state_31140[(12)]);
var inst_31090__$1 = (state_31140[(2)]);
var inst_31091 = cljs.core.get.call(null,inst_31090__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31092 = cljs.core.get.call(null,inst_31090__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31093 = cljs.core.get.call(null,inst_31090__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31140__$1 = (function (){var statearr_31155 = state_31140;
(statearr_31155[(9)] = inst_31091);

(statearr_31155[(13)] = inst_31092);

(statearr_31155[(12)] = inst_31090__$1);

return statearr_31155;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31140__$1,(22),inst_31093);
} else {
if((state_val_31141 === (31))){
var inst_31122 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31122)){
var statearr_31156_31215 = state_31140__$1;
(statearr_31156_31215[(1)] = (32));

} else {
var statearr_31157_31216 = state_31140__$1;
(statearr_31157_31216[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (32))){
var inst_31099 = (state_31140[(14)]);
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31140__$1,(35),out,inst_31099);
} else {
if((state_val_31141 === (33))){
var inst_31090 = (state_31140[(12)]);
var inst_31068 = inst_31090;
var state_31140__$1 = (function (){var statearr_31158 = state_31140;
(statearr_31158[(7)] = inst_31068);

return statearr_31158;
})();
var statearr_31159_31217 = state_31140__$1;
(statearr_31159_31217[(2)] = null);

(statearr_31159_31217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (13))){
var inst_31068 = (state_31140[(7)]);
var inst_31075 = inst_31068.cljs$lang$protocol_mask$partition0$;
var inst_31076 = (inst_31075 & (64));
var inst_31077 = inst_31068.cljs$core$ISeq$;
var inst_31078 = (inst_31076) || (inst_31077);
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31078)){
var statearr_31160_31218 = state_31140__$1;
(statearr_31160_31218[(1)] = (16));

} else {
var statearr_31161_31219 = state_31140__$1;
(statearr_31161_31219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (22))){
var inst_31099 = (state_31140[(14)]);
var inst_31100 = (state_31140[(11)]);
var inst_31098 = (state_31140[(2)]);
var inst_31099__$1 = cljs.core.nth.call(null,inst_31098,(0),null);
var inst_31100__$1 = cljs.core.nth.call(null,inst_31098,(1),null);
var inst_31101 = (inst_31099__$1 == null);
var inst_31102 = cljs.core._EQ_.call(null,inst_31100__$1,change);
var inst_31103 = (inst_31101) || (inst_31102);
var state_31140__$1 = (function (){var statearr_31162 = state_31140;
(statearr_31162[(14)] = inst_31099__$1);

(statearr_31162[(11)] = inst_31100__$1);

return statearr_31162;
})();
if(cljs.core.truth_(inst_31103)){
var statearr_31163_31220 = state_31140__$1;
(statearr_31163_31220[(1)] = (23));

} else {
var statearr_31164_31221 = state_31140__$1;
(statearr_31164_31221[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (36))){
var inst_31090 = (state_31140[(12)]);
var inst_31068 = inst_31090;
var state_31140__$1 = (function (){var statearr_31165 = state_31140;
(statearr_31165[(7)] = inst_31068);

return statearr_31165;
})();
var statearr_31166_31222 = state_31140__$1;
(statearr_31166_31222[(2)] = null);

(statearr_31166_31222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (29))){
var inst_31114 = (state_31140[(10)]);
var state_31140__$1 = state_31140;
var statearr_31167_31223 = state_31140__$1;
(statearr_31167_31223[(2)] = inst_31114);

(statearr_31167_31223[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (6))){
var state_31140__$1 = state_31140;
var statearr_31168_31224 = state_31140__$1;
(statearr_31168_31224[(2)] = false);

(statearr_31168_31224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (28))){
var inst_31110 = (state_31140[(2)]);
var inst_31111 = calc_state.call(null);
var inst_31068 = inst_31111;
var state_31140__$1 = (function (){var statearr_31169 = state_31140;
(statearr_31169[(7)] = inst_31068);

(statearr_31169[(15)] = inst_31110);

return statearr_31169;
})();
var statearr_31170_31225 = state_31140__$1;
(statearr_31170_31225[(2)] = null);

(statearr_31170_31225[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (25))){
var inst_31136 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31171_31226 = state_31140__$1;
(statearr_31171_31226[(2)] = inst_31136);

(statearr_31171_31226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (34))){
var inst_31134 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31172_31227 = state_31140__$1;
(statearr_31172_31227[(2)] = inst_31134);

(statearr_31172_31227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (17))){
var state_31140__$1 = state_31140;
var statearr_31173_31228 = state_31140__$1;
(statearr_31173_31228[(2)] = false);

(statearr_31173_31228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (3))){
var state_31140__$1 = state_31140;
var statearr_31174_31229 = state_31140__$1;
(statearr_31174_31229[(2)] = false);

(statearr_31174_31229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (12))){
var inst_31138 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31140__$1,inst_31138);
} else {
if((state_val_31141 === (2))){
var inst_31044 = (state_31140[(8)]);
var inst_31049 = inst_31044.cljs$lang$protocol_mask$partition0$;
var inst_31050 = (inst_31049 & (64));
var inst_31051 = inst_31044.cljs$core$ISeq$;
var inst_31052 = (inst_31050) || (inst_31051);
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31052)){
var statearr_31175_31230 = state_31140__$1;
(statearr_31175_31230[(1)] = (5));

} else {
var statearr_31176_31231 = state_31140__$1;
(statearr_31176_31231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (23))){
var inst_31099 = (state_31140[(14)]);
var inst_31105 = (inst_31099 == null);
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31105)){
var statearr_31177_31232 = state_31140__$1;
(statearr_31177_31232[(1)] = (26));

} else {
var statearr_31178_31233 = state_31140__$1;
(statearr_31178_31233[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (35))){
var inst_31125 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31125)){
var statearr_31179_31234 = state_31140__$1;
(statearr_31179_31234[(1)] = (36));

} else {
var statearr_31180_31235 = state_31140__$1;
(statearr_31180_31235[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (19))){
var inst_31068 = (state_31140[(7)]);
var inst_31087 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31068);
var state_31140__$1 = state_31140;
var statearr_31181_31236 = state_31140__$1;
(statearr_31181_31236[(2)] = inst_31087);

(statearr_31181_31236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (11))){
var inst_31068 = (state_31140[(7)]);
var inst_31072 = (inst_31068 == null);
var inst_31073 = cljs.core.not.call(null,inst_31072);
var state_31140__$1 = state_31140;
if(inst_31073){
var statearr_31182_31237 = state_31140__$1;
(statearr_31182_31237[(1)] = (13));

} else {
var statearr_31183_31238 = state_31140__$1;
(statearr_31183_31238[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (9))){
var inst_31044 = (state_31140[(8)]);
var state_31140__$1 = state_31140;
var statearr_31184_31239 = state_31140__$1;
(statearr_31184_31239[(2)] = inst_31044);

(statearr_31184_31239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (5))){
var state_31140__$1 = state_31140;
var statearr_31185_31240 = state_31140__$1;
(statearr_31185_31240[(2)] = true);

(statearr_31185_31240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (14))){
var state_31140__$1 = state_31140;
var statearr_31186_31241 = state_31140__$1;
(statearr_31186_31241[(2)] = false);

(statearr_31186_31241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (26))){
var inst_31100 = (state_31140[(11)]);
var inst_31107 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31100);
var state_31140__$1 = state_31140;
var statearr_31187_31242 = state_31140__$1;
(statearr_31187_31242[(2)] = inst_31107);

(statearr_31187_31242[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (16))){
var state_31140__$1 = state_31140;
var statearr_31188_31243 = state_31140__$1;
(statearr_31188_31243[(2)] = true);

(statearr_31188_31243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (38))){
var inst_31130 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31189_31244 = state_31140__$1;
(statearr_31189_31244[(2)] = inst_31130);

(statearr_31189_31244[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (30))){
var inst_31091 = (state_31140[(9)]);
var inst_31092 = (state_31140[(13)]);
var inst_31100 = (state_31140[(11)]);
var inst_31117 = cljs.core.empty_QMARK_.call(null,inst_31091);
var inst_31118 = inst_31092.call(null,inst_31100);
var inst_31119 = cljs.core.not.call(null,inst_31118);
var inst_31120 = (inst_31117) && (inst_31119);
var state_31140__$1 = state_31140;
var statearr_31190_31245 = state_31140__$1;
(statearr_31190_31245[(2)] = inst_31120);

(statearr_31190_31245[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (10))){
var inst_31044 = (state_31140[(8)]);
var inst_31064 = (state_31140[(2)]);
var inst_31065 = cljs.core.get.call(null,inst_31064,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31066 = cljs.core.get.call(null,inst_31064,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31067 = cljs.core.get.call(null,inst_31064,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31068 = inst_31044;
var state_31140__$1 = (function (){var statearr_31191 = state_31140;
(statearr_31191[(16)] = inst_31066);

(statearr_31191[(7)] = inst_31068);

(statearr_31191[(17)] = inst_31067);

(statearr_31191[(18)] = inst_31065);

return statearr_31191;
})();
var statearr_31192_31246 = state_31140__$1;
(statearr_31192_31246[(2)] = null);

(statearr_31192_31246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (18))){
var inst_31082 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31193_31247 = state_31140__$1;
(statearr_31193_31247[(2)] = inst_31082);

(statearr_31193_31247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (37))){
var state_31140__$1 = state_31140;
var statearr_31194_31248 = state_31140__$1;
(statearr_31194_31248[(2)] = null);

(statearr_31194_31248[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (8))){
var inst_31044 = (state_31140[(8)]);
var inst_31061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31044);
var state_31140__$1 = state_31140;
var statearr_31195_31249 = state_31140__$1;
(statearr_31195_31249[(2)] = inst_31061);

(statearr_31195_31249[(1)] = (10));


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
});})(c__29456__auto___31203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29342__auto__,c__29456__auto___31203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29343__auto__ = null;
var cljs$core$async$mix_$_state_machine__29343__auto____0 = (function (){
var statearr_31199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31199[(0)] = cljs$core$async$mix_$_state_machine__29343__auto__);

(statearr_31199[(1)] = (1));

return statearr_31199;
});
var cljs$core$async$mix_$_state_machine__29343__auto____1 = (function (state_31140){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_31140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e31200){if((e31200 instanceof Object)){
var ex__29346__auto__ = e31200;
var statearr_31201_31250 = state_31140;
(statearr_31201_31250[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31251 = state_31140;
state_31140 = G__31251;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29343__auto__ = function(state_31140){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29343__auto____1.call(this,state_31140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29343__auto____0;
cljs$core$async$mix_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29343__auto____1;
return cljs$core$async$mix_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___31203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29458__auto__ = (function (){var statearr_31202 = f__29457__auto__.call(null);
(statearr_31202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___31203);

return statearr_31202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___31203,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__27521__auto__ = (((p == null))?null:p);
var m__27522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27522__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__27521__auto__ = (((p == null))?null:p);
var m__27522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,p,v,ch);
} else {
var m__27522__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31252 = [];
var len__27991__auto___31255 = arguments.length;
var i__27992__auto___31256 = (0);
while(true){
if((i__27992__auto___31256 < len__27991__auto___31255)){
args31252.push((arguments[i__27992__auto___31256]));

var G__31257 = (i__27992__auto___31256 + (1));
i__27992__auto___31256 = G__31257;
continue;
} else {
}
break;
}

var G__31254 = args31252.length;
switch (G__31254) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31252.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27521__auto__ = (((p == null))?null:p);
var m__27522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,p);
} else {
var m__27522__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,p);
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
var x__27521__auto__ = (((p == null))?null:p);
var m__27522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,p,v);
} else {
var m__27522__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,p,v);
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
var args31260 = [];
var len__27991__auto___31385 = arguments.length;
var i__27992__auto___31386 = (0);
while(true){
if((i__27992__auto___31386 < len__27991__auto___31385)){
args31260.push((arguments[i__27992__auto___31386]));

var G__31387 = (i__27992__auto___31386 + (1));
i__27992__auto___31386 = G__31387;
continue;
} else {
}
break;
}

var G__31262 = args31260.length;
switch (G__31262) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31260.length)].join('')));

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
return (function (p1__31259_SHARP_){
if(cljs.core.truth_(p1__31259_SHARP_.call(null,topic))){
return p1__31259_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31259_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26808__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31263 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31264){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31264 = meta31264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31265,meta31264__$1){
var self__ = this;
var _31265__$1 = this;
return (new cljs.core.async.t_cljs$core$async31263(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31264__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31265){
var self__ = this;
var _31265__$1 = this;
return self__.meta31264;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31263.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31264","meta31264",2008732217,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31263";

cljs.core.async.t_cljs$core$async31263.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.core.async/t_cljs$core$async31263");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31263 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31263(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31264){
return (new cljs.core.async.t_cljs$core$async31263(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31264));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31263(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29456__auto___31389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___31389,mults,ensure_mult,p){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___31389,mults,ensure_mult,p){
return (function (state_31337){
var state_val_31338 = (state_31337[(1)]);
if((state_val_31338 === (7))){
var inst_31333 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31339_31390 = state_31337__$1;
(statearr_31339_31390[(2)] = inst_31333);

(statearr_31339_31390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (20))){
var state_31337__$1 = state_31337;
var statearr_31340_31391 = state_31337__$1;
(statearr_31340_31391[(2)] = null);

(statearr_31340_31391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (1))){
var state_31337__$1 = state_31337;
var statearr_31341_31392 = state_31337__$1;
(statearr_31341_31392[(2)] = null);

(statearr_31341_31392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (24))){
var inst_31316 = (state_31337[(7)]);
var inst_31325 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31316);
var state_31337__$1 = state_31337;
var statearr_31342_31393 = state_31337__$1;
(statearr_31342_31393[(2)] = inst_31325);

(statearr_31342_31393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (4))){
var inst_31268 = (state_31337[(8)]);
var inst_31268__$1 = (state_31337[(2)]);
var inst_31269 = (inst_31268__$1 == null);
var state_31337__$1 = (function (){var statearr_31343 = state_31337;
(statearr_31343[(8)] = inst_31268__$1);

return statearr_31343;
})();
if(cljs.core.truth_(inst_31269)){
var statearr_31344_31394 = state_31337__$1;
(statearr_31344_31394[(1)] = (5));

} else {
var statearr_31345_31395 = state_31337__$1;
(statearr_31345_31395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (15))){
var inst_31310 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31346_31396 = state_31337__$1;
(statearr_31346_31396[(2)] = inst_31310);

(statearr_31346_31396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (21))){
var inst_31330 = (state_31337[(2)]);
var state_31337__$1 = (function (){var statearr_31347 = state_31337;
(statearr_31347[(9)] = inst_31330);

return statearr_31347;
})();
var statearr_31348_31397 = state_31337__$1;
(statearr_31348_31397[(2)] = null);

(statearr_31348_31397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (13))){
var inst_31292 = (state_31337[(10)]);
var inst_31294 = cljs.core.chunked_seq_QMARK_.call(null,inst_31292);
var state_31337__$1 = state_31337;
if(inst_31294){
var statearr_31349_31398 = state_31337__$1;
(statearr_31349_31398[(1)] = (16));

} else {
var statearr_31350_31399 = state_31337__$1;
(statearr_31350_31399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (22))){
var inst_31322 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
if(cljs.core.truth_(inst_31322)){
var statearr_31351_31400 = state_31337__$1;
(statearr_31351_31400[(1)] = (23));

} else {
var statearr_31352_31401 = state_31337__$1;
(statearr_31352_31401[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (6))){
var inst_31316 = (state_31337[(7)]);
var inst_31318 = (state_31337[(11)]);
var inst_31268 = (state_31337[(8)]);
var inst_31316__$1 = topic_fn.call(null,inst_31268);
var inst_31317 = cljs.core.deref.call(null,mults);
var inst_31318__$1 = cljs.core.get.call(null,inst_31317,inst_31316__$1);
var state_31337__$1 = (function (){var statearr_31353 = state_31337;
(statearr_31353[(7)] = inst_31316__$1);

(statearr_31353[(11)] = inst_31318__$1);

return statearr_31353;
})();
if(cljs.core.truth_(inst_31318__$1)){
var statearr_31354_31402 = state_31337__$1;
(statearr_31354_31402[(1)] = (19));

} else {
var statearr_31355_31403 = state_31337__$1;
(statearr_31355_31403[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (25))){
var inst_31327 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31356_31404 = state_31337__$1;
(statearr_31356_31404[(2)] = inst_31327);

(statearr_31356_31404[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (17))){
var inst_31292 = (state_31337[(10)]);
var inst_31301 = cljs.core.first.call(null,inst_31292);
var inst_31302 = cljs.core.async.muxch_STAR_.call(null,inst_31301);
var inst_31303 = cljs.core.async.close_BANG_.call(null,inst_31302);
var inst_31304 = cljs.core.next.call(null,inst_31292);
var inst_31278 = inst_31304;
var inst_31279 = null;
var inst_31280 = (0);
var inst_31281 = (0);
var state_31337__$1 = (function (){var statearr_31357 = state_31337;
(statearr_31357[(12)] = inst_31279);

(statearr_31357[(13)] = inst_31281);

(statearr_31357[(14)] = inst_31278);

(statearr_31357[(15)] = inst_31303);

(statearr_31357[(16)] = inst_31280);

return statearr_31357;
})();
var statearr_31358_31405 = state_31337__$1;
(statearr_31358_31405[(2)] = null);

(statearr_31358_31405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (3))){
var inst_31335 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31337__$1,inst_31335);
} else {
if((state_val_31338 === (12))){
var inst_31312 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31359_31406 = state_31337__$1;
(statearr_31359_31406[(2)] = inst_31312);

(statearr_31359_31406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (2))){
var state_31337__$1 = state_31337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31337__$1,(4),ch);
} else {
if((state_val_31338 === (23))){
var state_31337__$1 = state_31337;
var statearr_31360_31407 = state_31337__$1;
(statearr_31360_31407[(2)] = null);

(statearr_31360_31407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (19))){
var inst_31318 = (state_31337[(11)]);
var inst_31268 = (state_31337[(8)]);
var inst_31320 = cljs.core.async.muxch_STAR_.call(null,inst_31318);
var state_31337__$1 = state_31337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31337__$1,(22),inst_31320,inst_31268);
} else {
if((state_val_31338 === (11))){
var inst_31292 = (state_31337[(10)]);
var inst_31278 = (state_31337[(14)]);
var inst_31292__$1 = cljs.core.seq.call(null,inst_31278);
var state_31337__$1 = (function (){var statearr_31361 = state_31337;
(statearr_31361[(10)] = inst_31292__$1);

return statearr_31361;
})();
if(inst_31292__$1){
var statearr_31362_31408 = state_31337__$1;
(statearr_31362_31408[(1)] = (13));

} else {
var statearr_31363_31409 = state_31337__$1;
(statearr_31363_31409[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (9))){
var inst_31314 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31364_31410 = state_31337__$1;
(statearr_31364_31410[(2)] = inst_31314);

(statearr_31364_31410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (5))){
var inst_31275 = cljs.core.deref.call(null,mults);
var inst_31276 = cljs.core.vals.call(null,inst_31275);
var inst_31277 = cljs.core.seq.call(null,inst_31276);
var inst_31278 = inst_31277;
var inst_31279 = null;
var inst_31280 = (0);
var inst_31281 = (0);
var state_31337__$1 = (function (){var statearr_31365 = state_31337;
(statearr_31365[(12)] = inst_31279);

(statearr_31365[(13)] = inst_31281);

(statearr_31365[(14)] = inst_31278);

(statearr_31365[(16)] = inst_31280);

return statearr_31365;
})();
var statearr_31366_31411 = state_31337__$1;
(statearr_31366_31411[(2)] = null);

(statearr_31366_31411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (14))){
var state_31337__$1 = state_31337;
var statearr_31370_31412 = state_31337__$1;
(statearr_31370_31412[(2)] = null);

(statearr_31370_31412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (16))){
var inst_31292 = (state_31337[(10)]);
var inst_31296 = cljs.core.chunk_first.call(null,inst_31292);
var inst_31297 = cljs.core.chunk_rest.call(null,inst_31292);
var inst_31298 = cljs.core.count.call(null,inst_31296);
var inst_31278 = inst_31297;
var inst_31279 = inst_31296;
var inst_31280 = inst_31298;
var inst_31281 = (0);
var state_31337__$1 = (function (){var statearr_31371 = state_31337;
(statearr_31371[(12)] = inst_31279);

(statearr_31371[(13)] = inst_31281);

(statearr_31371[(14)] = inst_31278);

(statearr_31371[(16)] = inst_31280);

return statearr_31371;
})();
var statearr_31372_31413 = state_31337__$1;
(statearr_31372_31413[(2)] = null);

(statearr_31372_31413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (10))){
var inst_31279 = (state_31337[(12)]);
var inst_31281 = (state_31337[(13)]);
var inst_31278 = (state_31337[(14)]);
var inst_31280 = (state_31337[(16)]);
var inst_31286 = cljs.core._nth.call(null,inst_31279,inst_31281);
var inst_31287 = cljs.core.async.muxch_STAR_.call(null,inst_31286);
var inst_31288 = cljs.core.async.close_BANG_.call(null,inst_31287);
var inst_31289 = (inst_31281 + (1));
var tmp31367 = inst_31279;
var tmp31368 = inst_31278;
var tmp31369 = inst_31280;
var inst_31278__$1 = tmp31368;
var inst_31279__$1 = tmp31367;
var inst_31280__$1 = tmp31369;
var inst_31281__$1 = inst_31289;
var state_31337__$1 = (function (){var statearr_31373 = state_31337;
(statearr_31373[(12)] = inst_31279__$1);

(statearr_31373[(13)] = inst_31281__$1);

(statearr_31373[(14)] = inst_31278__$1);

(statearr_31373[(17)] = inst_31288);

(statearr_31373[(16)] = inst_31280__$1);

return statearr_31373;
})();
var statearr_31374_31414 = state_31337__$1;
(statearr_31374_31414[(2)] = null);

(statearr_31374_31414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (18))){
var inst_31307 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31375_31415 = state_31337__$1;
(statearr_31375_31415[(2)] = inst_31307);

(statearr_31375_31415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (8))){
var inst_31281 = (state_31337[(13)]);
var inst_31280 = (state_31337[(16)]);
var inst_31283 = (inst_31281 < inst_31280);
var inst_31284 = inst_31283;
var state_31337__$1 = state_31337;
if(cljs.core.truth_(inst_31284)){
var statearr_31376_31416 = state_31337__$1;
(statearr_31376_31416[(1)] = (10));

} else {
var statearr_31377_31417 = state_31337__$1;
(statearr_31377_31417[(1)] = (11));

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
});})(c__29456__auto___31389,mults,ensure_mult,p))
;
return ((function (switch__29342__auto__,c__29456__auto___31389,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_31381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31381[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_31381[(1)] = (1));

return statearr_31381;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_31337){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_31337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e31382){if((e31382 instanceof Object)){
var ex__29346__auto__ = e31382;
var statearr_31383_31418 = state_31337;
(statearr_31383_31418[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31419 = state_31337;
state_31337 = G__31419;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_31337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_31337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___31389,mults,ensure_mult,p))
})();
var state__29458__auto__ = (function (){var statearr_31384 = f__29457__auto__.call(null);
(statearr_31384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___31389);

return statearr_31384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___31389,mults,ensure_mult,p))
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
var args31420 = [];
var len__27991__auto___31423 = arguments.length;
var i__27992__auto___31424 = (0);
while(true){
if((i__27992__auto___31424 < len__27991__auto___31423)){
args31420.push((arguments[i__27992__auto___31424]));

var G__31425 = (i__27992__auto___31424 + (1));
i__27992__auto___31424 = G__31425;
continue;
} else {
}
break;
}

var G__31422 = args31420.length;
switch (G__31422) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31420.length)].join('')));

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
var args31427 = [];
var len__27991__auto___31430 = arguments.length;
var i__27992__auto___31431 = (0);
while(true){
if((i__27992__auto___31431 < len__27991__auto___31430)){
args31427.push((arguments[i__27992__auto___31431]));

var G__31432 = (i__27992__auto___31431 + (1));
i__27992__auto___31431 = G__31432;
continue;
} else {
}
break;
}

var G__31429 = args31427.length;
switch (G__31429) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31427.length)].join('')));

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
var args31434 = [];
var len__27991__auto___31505 = arguments.length;
var i__27992__auto___31506 = (0);
while(true){
if((i__27992__auto___31506 < len__27991__auto___31505)){
args31434.push((arguments[i__27992__auto___31506]));

var G__31507 = (i__27992__auto___31506 + (1));
i__27992__auto___31506 = G__31507;
continue;
} else {
}
break;
}

var G__31436 = args31434.length;
switch (G__31436) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31434.length)].join('')));

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
var c__29456__auto___31509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___31509,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___31509,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31475){
var state_val_31476 = (state_31475[(1)]);
if((state_val_31476 === (7))){
var state_31475__$1 = state_31475;
var statearr_31477_31510 = state_31475__$1;
(statearr_31477_31510[(2)] = null);

(statearr_31477_31510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (1))){
var state_31475__$1 = state_31475;
var statearr_31478_31511 = state_31475__$1;
(statearr_31478_31511[(2)] = null);

(statearr_31478_31511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (4))){
var inst_31439 = (state_31475[(7)]);
var inst_31441 = (inst_31439 < cnt);
var state_31475__$1 = state_31475;
if(cljs.core.truth_(inst_31441)){
var statearr_31479_31512 = state_31475__$1;
(statearr_31479_31512[(1)] = (6));

} else {
var statearr_31480_31513 = state_31475__$1;
(statearr_31480_31513[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (15))){
var inst_31471 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31481_31514 = state_31475__$1;
(statearr_31481_31514[(2)] = inst_31471);

(statearr_31481_31514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (13))){
var inst_31464 = cljs.core.async.close_BANG_.call(null,out);
var state_31475__$1 = state_31475;
var statearr_31482_31515 = state_31475__$1;
(statearr_31482_31515[(2)] = inst_31464);

(statearr_31482_31515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (6))){
var state_31475__$1 = state_31475;
var statearr_31483_31516 = state_31475__$1;
(statearr_31483_31516[(2)] = null);

(statearr_31483_31516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (3))){
var inst_31473 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31475__$1,inst_31473);
} else {
if((state_val_31476 === (12))){
var inst_31461 = (state_31475[(8)]);
var inst_31461__$1 = (state_31475[(2)]);
var inst_31462 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31461__$1);
var state_31475__$1 = (function (){var statearr_31484 = state_31475;
(statearr_31484[(8)] = inst_31461__$1);

return statearr_31484;
})();
if(cljs.core.truth_(inst_31462)){
var statearr_31485_31517 = state_31475__$1;
(statearr_31485_31517[(1)] = (13));

} else {
var statearr_31486_31518 = state_31475__$1;
(statearr_31486_31518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (2))){
var inst_31438 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31439 = (0);
var state_31475__$1 = (function (){var statearr_31487 = state_31475;
(statearr_31487[(7)] = inst_31439);

(statearr_31487[(9)] = inst_31438);

return statearr_31487;
})();
var statearr_31488_31519 = state_31475__$1;
(statearr_31488_31519[(2)] = null);

(statearr_31488_31519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (11))){
var inst_31439 = (state_31475[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31475,(10),Object,null,(9));
var inst_31448 = chs__$1.call(null,inst_31439);
var inst_31449 = done.call(null,inst_31439);
var inst_31450 = cljs.core.async.take_BANG_.call(null,inst_31448,inst_31449);
var state_31475__$1 = state_31475;
var statearr_31489_31520 = state_31475__$1;
(statearr_31489_31520[(2)] = inst_31450);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (9))){
var inst_31439 = (state_31475[(7)]);
var inst_31452 = (state_31475[(2)]);
var inst_31453 = (inst_31439 + (1));
var inst_31439__$1 = inst_31453;
var state_31475__$1 = (function (){var statearr_31490 = state_31475;
(statearr_31490[(7)] = inst_31439__$1);

(statearr_31490[(10)] = inst_31452);

return statearr_31490;
})();
var statearr_31491_31521 = state_31475__$1;
(statearr_31491_31521[(2)] = null);

(statearr_31491_31521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (5))){
var inst_31459 = (state_31475[(2)]);
var state_31475__$1 = (function (){var statearr_31492 = state_31475;
(statearr_31492[(11)] = inst_31459);

return statearr_31492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(12),dchan);
} else {
if((state_val_31476 === (14))){
var inst_31461 = (state_31475[(8)]);
var inst_31466 = cljs.core.apply.call(null,f,inst_31461);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31475__$1,(16),out,inst_31466);
} else {
if((state_val_31476 === (16))){
var inst_31468 = (state_31475[(2)]);
var state_31475__$1 = (function (){var statearr_31493 = state_31475;
(statearr_31493[(12)] = inst_31468);

return statearr_31493;
})();
var statearr_31494_31522 = state_31475__$1;
(statearr_31494_31522[(2)] = null);

(statearr_31494_31522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (10))){
var inst_31443 = (state_31475[(2)]);
var inst_31444 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31475__$1 = (function (){var statearr_31495 = state_31475;
(statearr_31495[(13)] = inst_31443);

return statearr_31495;
})();
var statearr_31496_31523 = state_31475__$1;
(statearr_31496_31523[(2)] = inst_31444);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (8))){
var inst_31457 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31497_31524 = state_31475__$1;
(statearr_31497_31524[(2)] = inst_31457);

(statearr_31497_31524[(1)] = (5));


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
});})(c__29456__auto___31509,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29342__auto__,c__29456__auto___31509,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_31501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31501[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_31501[(1)] = (1));

return statearr_31501;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_31475){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_31475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e31502){if((e31502 instanceof Object)){
var ex__29346__auto__ = e31502;
var statearr_31503_31525 = state_31475;
(statearr_31503_31525[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31526 = state_31475;
state_31475 = G__31526;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_31475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_31475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___31509,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29458__auto__ = (function (){var statearr_31504 = f__29457__auto__.call(null);
(statearr_31504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___31509);

return statearr_31504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___31509,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31528 = [];
var len__27991__auto___31586 = arguments.length;
var i__27992__auto___31587 = (0);
while(true){
if((i__27992__auto___31587 < len__27991__auto___31586)){
args31528.push((arguments[i__27992__auto___31587]));

var G__31588 = (i__27992__auto___31587 + (1));
i__27992__auto___31587 = G__31588;
continue;
} else {
}
break;
}

var G__31530 = args31528.length;
switch (G__31530) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31528.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29456__auto___31590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___31590,out){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___31590,out){
return (function (state_31562){
var state_val_31563 = (state_31562[(1)]);
if((state_val_31563 === (7))){
var inst_31541 = (state_31562[(7)]);
var inst_31542 = (state_31562[(8)]);
var inst_31541__$1 = (state_31562[(2)]);
var inst_31542__$1 = cljs.core.nth.call(null,inst_31541__$1,(0),null);
var inst_31543 = cljs.core.nth.call(null,inst_31541__$1,(1),null);
var inst_31544 = (inst_31542__$1 == null);
var state_31562__$1 = (function (){var statearr_31564 = state_31562;
(statearr_31564[(9)] = inst_31543);

(statearr_31564[(7)] = inst_31541__$1);

(statearr_31564[(8)] = inst_31542__$1);

return statearr_31564;
})();
if(cljs.core.truth_(inst_31544)){
var statearr_31565_31591 = state_31562__$1;
(statearr_31565_31591[(1)] = (8));

} else {
var statearr_31566_31592 = state_31562__$1;
(statearr_31566_31592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (1))){
var inst_31531 = cljs.core.vec.call(null,chs);
var inst_31532 = inst_31531;
var state_31562__$1 = (function (){var statearr_31567 = state_31562;
(statearr_31567[(10)] = inst_31532);

return statearr_31567;
})();
var statearr_31568_31593 = state_31562__$1;
(statearr_31568_31593[(2)] = null);

(statearr_31568_31593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (4))){
var inst_31532 = (state_31562[(10)]);
var state_31562__$1 = state_31562;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31562__$1,(7),inst_31532);
} else {
if((state_val_31563 === (6))){
var inst_31558 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
var statearr_31569_31594 = state_31562__$1;
(statearr_31569_31594[(2)] = inst_31558);

(statearr_31569_31594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (3))){
var inst_31560 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31562__$1,inst_31560);
} else {
if((state_val_31563 === (2))){
var inst_31532 = (state_31562[(10)]);
var inst_31534 = cljs.core.count.call(null,inst_31532);
var inst_31535 = (inst_31534 > (0));
var state_31562__$1 = state_31562;
if(cljs.core.truth_(inst_31535)){
var statearr_31571_31595 = state_31562__$1;
(statearr_31571_31595[(1)] = (4));

} else {
var statearr_31572_31596 = state_31562__$1;
(statearr_31572_31596[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (11))){
var inst_31532 = (state_31562[(10)]);
var inst_31551 = (state_31562[(2)]);
var tmp31570 = inst_31532;
var inst_31532__$1 = tmp31570;
var state_31562__$1 = (function (){var statearr_31573 = state_31562;
(statearr_31573[(11)] = inst_31551);

(statearr_31573[(10)] = inst_31532__$1);

return statearr_31573;
})();
var statearr_31574_31597 = state_31562__$1;
(statearr_31574_31597[(2)] = null);

(statearr_31574_31597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (9))){
var inst_31542 = (state_31562[(8)]);
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31562__$1,(11),out,inst_31542);
} else {
if((state_val_31563 === (5))){
var inst_31556 = cljs.core.async.close_BANG_.call(null,out);
var state_31562__$1 = state_31562;
var statearr_31575_31598 = state_31562__$1;
(statearr_31575_31598[(2)] = inst_31556);

(statearr_31575_31598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (10))){
var inst_31554 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
var statearr_31576_31599 = state_31562__$1;
(statearr_31576_31599[(2)] = inst_31554);

(statearr_31576_31599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (8))){
var inst_31543 = (state_31562[(9)]);
var inst_31541 = (state_31562[(7)]);
var inst_31532 = (state_31562[(10)]);
var inst_31542 = (state_31562[(8)]);
var inst_31546 = (function (){var cs = inst_31532;
var vec__31537 = inst_31541;
var v = inst_31542;
var c = inst_31543;
return ((function (cs,vec__31537,v,c,inst_31543,inst_31541,inst_31532,inst_31542,state_val_31563,c__29456__auto___31590,out){
return (function (p1__31527_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31527_SHARP_);
});
;})(cs,vec__31537,v,c,inst_31543,inst_31541,inst_31532,inst_31542,state_val_31563,c__29456__auto___31590,out))
})();
var inst_31547 = cljs.core.filterv.call(null,inst_31546,inst_31532);
var inst_31532__$1 = inst_31547;
var state_31562__$1 = (function (){var statearr_31577 = state_31562;
(statearr_31577[(10)] = inst_31532__$1);

return statearr_31577;
})();
var statearr_31578_31600 = state_31562__$1;
(statearr_31578_31600[(2)] = null);

(statearr_31578_31600[(1)] = (2));


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
});})(c__29456__auto___31590,out))
;
return ((function (switch__29342__auto__,c__29456__auto___31590,out){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_31582 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31582[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_31582[(1)] = (1));

return statearr_31582;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_31562){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_31562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e31583){if((e31583 instanceof Object)){
var ex__29346__auto__ = e31583;
var statearr_31584_31601 = state_31562;
(statearr_31584_31601[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31602 = state_31562;
state_31562 = G__31602;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_31562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_31562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___31590,out))
})();
var state__29458__auto__ = (function (){var statearr_31585 = f__29457__auto__.call(null);
(statearr_31585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___31590);

return statearr_31585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___31590,out))
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
var args31603 = [];
var len__27991__auto___31652 = arguments.length;
var i__27992__auto___31653 = (0);
while(true){
if((i__27992__auto___31653 < len__27991__auto___31652)){
args31603.push((arguments[i__27992__auto___31653]));

var G__31654 = (i__27992__auto___31653 + (1));
i__27992__auto___31653 = G__31654;
continue;
} else {
}
break;
}

var G__31605 = args31603.length;
switch (G__31605) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31603.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29456__auto___31656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___31656,out){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___31656,out){
return (function (state_31629){
var state_val_31630 = (state_31629[(1)]);
if((state_val_31630 === (7))){
var inst_31611 = (state_31629[(7)]);
var inst_31611__$1 = (state_31629[(2)]);
var inst_31612 = (inst_31611__$1 == null);
var inst_31613 = cljs.core.not.call(null,inst_31612);
var state_31629__$1 = (function (){var statearr_31631 = state_31629;
(statearr_31631[(7)] = inst_31611__$1);

return statearr_31631;
})();
if(inst_31613){
var statearr_31632_31657 = state_31629__$1;
(statearr_31632_31657[(1)] = (8));

} else {
var statearr_31633_31658 = state_31629__$1;
(statearr_31633_31658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (1))){
var inst_31606 = (0);
var state_31629__$1 = (function (){var statearr_31634 = state_31629;
(statearr_31634[(8)] = inst_31606);

return statearr_31634;
})();
var statearr_31635_31659 = state_31629__$1;
(statearr_31635_31659[(2)] = null);

(statearr_31635_31659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (4))){
var state_31629__$1 = state_31629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31629__$1,(7),ch);
} else {
if((state_val_31630 === (6))){
var inst_31624 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31636_31660 = state_31629__$1;
(statearr_31636_31660[(2)] = inst_31624);

(statearr_31636_31660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (3))){
var inst_31626 = (state_31629[(2)]);
var inst_31627 = cljs.core.async.close_BANG_.call(null,out);
var state_31629__$1 = (function (){var statearr_31637 = state_31629;
(statearr_31637[(9)] = inst_31626);

return statearr_31637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31629__$1,inst_31627);
} else {
if((state_val_31630 === (2))){
var inst_31606 = (state_31629[(8)]);
var inst_31608 = (inst_31606 < n);
var state_31629__$1 = state_31629;
if(cljs.core.truth_(inst_31608)){
var statearr_31638_31661 = state_31629__$1;
(statearr_31638_31661[(1)] = (4));

} else {
var statearr_31639_31662 = state_31629__$1;
(statearr_31639_31662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (11))){
var inst_31606 = (state_31629[(8)]);
var inst_31616 = (state_31629[(2)]);
var inst_31617 = (inst_31606 + (1));
var inst_31606__$1 = inst_31617;
var state_31629__$1 = (function (){var statearr_31640 = state_31629;
(statearr_31640[(8)] = inst_31606__$1);

(statearr_31640[(10)] = inst_31616);

return statearr_31640;
})();
var statearr_31641_31663 = state_31629__$1;
(statearr_31641_31663[(2)] = null);

(statearr_31641_31663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (9))){
var state_31629__$1 = state_31629;
var statearr_31642_31664 = state_31629__$1;
(statearr_31642_31664[(2)] = null);

(statearr_31642_31664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (5))){
var state_31629__$1 = state_31629;
var statearr_31643_31665 = state_31629__$1;
(statearr_31643_31665[(2)] = null);

(statearr_31643_31665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (10))){
var inst_31621 = (state_31629[(2)]);
var state_31629__$1 = state_31629;
var statearr_31644_31666 = state_31629__$1;
(statearr_31644_31666[(2)] = inst_31621);

(statearr_31644_31666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31630 === (8))){
var inst_31611 = (state_31629[(7)]);
var state_31629__$1 = state_31629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31629__$1,(11),out,inst_31611);
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
});})(c__29456__auto___31656,out))
;
return ((function (switch__29342__auto__,c__29456__auto___31656,out){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_31648 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31648[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_31648[(1)] = (1));

return statearr_31648;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_31629){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_31629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e31649){if((e31649 instanceof Object)){
var ex__29346__auto__ = e31649;
var statearr_31650_31667 = state_31629;
(statearr_31650_31667[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31668 = state_31629;
state_31629 = G__31668;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_31629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_31629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___31656,out))
})();
var state__29458__auto__ = (function (){var statearr_31651 = f__29457__auto__.call(null);
(statearr_31651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___31656);

return statearr_31651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___31656,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31676 = (function (map_LT_,f,ch,meta31677){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31677 = meta31677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31678,meta31677__$1){
var self__ = this;
var _31678__$1 = this;
return (new cljs.core.async.t_cljs$core$async31676(self__.map_LT_,self__.f,self__.ch,meta31677__$1));
});

cljs.core.async.t_cljs$core$async31676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31678){
var self__ = this;
var _31678__$1 = this;
return self__.meta31677;
});

cljs.core.async.t_cljs$core$async31676.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31676.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31676.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31679 = (function (map_LT_,f,ch,meta31677,_,fn1,meta31680){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31677 = meta31677;
this._ = _;
this.fn1 = fn1;
this.meta31680 = meta31680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31681,meta31680__$1){
var self__ = this;
var _31681__$1 = this;
return (new cljs.core.async.t_cljs$core$async31679(self__.map_LT_,self__.f,self__.ch,self__.meta31677,self__._,self__.fn1,meta31680__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31681){
var self__ = this;
var _31681__$1 = this;
return self__.meta31680;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31669_SHARP_){
return f1.call(null,(((p1__31669_SHARP_ == null))?null:self__.f.call(null,p1__31669_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31679.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31677","meta31677",-176314256,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31676","cljs.core.async/t_cljs$core$async31676",-1078242149,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31680","meta31680",817375552,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31679";

cljs.core.async.t_cljs$core$async31679.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.core.async/t_cljs$core$async31679");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31679 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31679(map_LT___$1,f__$1,ch__$1,meta31677__$1,___$2,fn1__$1,meta31680){
return (new cljs.core.async.t_cljs$core$async31679(map_LT___$1,f__$1,ch__$1,meta31677__$1,___$2,fn1__$1,meta31680));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31679(self__.map_LT_,self__.f,self__.ch,self__.meta31677,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31676.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31677","meta31677",-176314256,null)], null);
});

cljs.core.async.t_cljs$core$async31676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31676";

cljs.core.async.t_cljs$core$async31676.cljs$lang$ctorPrWriter = (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.core.async/t_cljs$core$async31676");
});

cljs.core.async.__GT_t_cljs$core$async31676 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31676(map_LT___$1,f__$1,ch__$1,meta31677){
return (new cljs.core.async.t_cljs$core$async31676(map_LT___$1,f__$1,ch__$1,meta31677));
});

}

return (new cljs.core.async.t_cljs$core$async31676(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31685 = (function (map_GT_,f,ch,meta31686){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31686 = meta31686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31687,meta31686__$1){
var self__ = this;
var _31687__$1 = this;
return (new cljs.core.async.t_cljs$core$async31685(self__.map_GT_,self__.f,self__.ch,meta31686__$1));
});

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31687){
var self__ = this;
var _31687__$1 = this;
return self__.meta31686;
});

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31686","meta31686",-1666551992,null)], null);
});

cljs.core.async.t_cljs$core$async31685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31685";

cljs.core.async.t_cljs$core$async31685.cljs$lang$ctorPrWriter = (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.core.async/t_cljs$core$async31685");
});

cljs.core.async.__GT_t_cljs$core$async31685 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31685(map_GT___$1,f__$1,ch__$1,meta31686){
return (new cljs.core.async.t_cljs$core$async31685(map_GT___$1,f__$1,ch__$1,meta31686));
});

}

return (new cljs.core.async.t_cljs$core$async31685(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31691 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31691 = (function (filter_GT_,p,ch,meta31692){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31692 = meta31692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31693,meta31692__$1){
var self__ = this;
var _31693__$1 = this;
return (new cljs.core.async.t_cljs$core$async31691(self__.filter_GT_,self__.p,self__.ch,meta31692__$1));
});

cljs.core.async.t_cljs$core$async31691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31693){
var self__ = this;
var _31693__$1 = this;
return self__.meta31692;
});

cljs.core.async.t_cljs$core$async31691.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31691.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31691.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31691.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31691.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31691.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31691.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31692","meta31692",-512576054,null)], null);
});

cljs.core.async.t_cljs$core$async31691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31691";

cljs.core.async.t_cljs$core$async31691.cljs$lang$ctorPrWriter = (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"cljs.core.async/t_cljs$core$async31691");
});

cljs.core.async.__GT_t_cljs$core$async31691 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31691(filter_GT___$1,p__$1,ch__$1,meta31692){
return (new cljs.core.async.t_cljs$core$async31691(filter_GT___$1,p__$1,ch__$1,meta31692));
});

}

return (new cljs.core.async.t_cljs$core$async31691(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31694 = [];
var len__27991__auto___31738 = arguments.length;
var i__27992__auto___31739 = (0);
while(true){
if((i__27992__auto___31739 < len__27991__auto___31738)){
args31694.push((arguments[i__27992__auto___31739]));

var G__31740 = (i__27992__auto___31739 + (1));
i__27992__auto___31739 = G__31740;
continue;
} else {
}
break;
}

var G__31696 = args31694.length;
switch (G__31696) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31694.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29456__auto___31742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___31742,out){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___31742,out){
return (function (state_31717){
var state_val_31718 = (state_31717[(1)]);
if((state_val_31718 === (7))){
var inst_31713 = (state_31717[(2)]);
var state_31717__$1 = state_31717;
var statearr_31719_31743 = state_31717__$1;
(statearr_31719_31743[(2)] = inst_31713);

(statearr_31719_31743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (1))){
var state_31717__$1 = state_31717;
var statearr_31720_31744 = state_31717__$1;
(statearr_31720_31744[(2)] = null);

(statearr_31720_31744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (4))){
var inst_31699 = (state_31717[(7)]);
var inst_31699__$1 = (state_31717[(2)]);
var inst_31700 = (inst_31699__$1 == null);
var state_31717__$1 = (function (){var statearr_31721 = state_31717;
(statearr_31721[(7)] = inst_31699__$1);

return statearr_31721;
})();
if(cljs.core.truth_(inst_31700)){
var statearr_31722_31745 = state_31717__$1;
(statearr_31722_31745[(1)] = (5));

} else {
var statearr_31723_31746 = state_31717__$1;
(statearr_31723_31746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (6))){
var inst_31699 = (state_31717[(7)]);
var inst_31704 = p.call(null,inst_31699);
var state_31717__$1 = state_31717;
if(cljs.core.truth_(inst_31704)){
var statearr_31724_31747 = state_31717__$1;
(statearr_31724_31747[(1)] = (8));

} else {
var statearr_31725_31748 = state_31717__$1;
(statearr_31725_31748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (3))){
var inst_31715 = (state_31717[(2)]);
var state_31717__$1 = state_31717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31717__$1,inst_31715);
} else {
if((state_val_31718 === (2))){
var state_31717__$1 = state_31717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31717__$1,(4),ch);
} else {
if((state_val_31718 === (11))){
var inst_31707 = (state_31717[(2)]);
var state_31717__$1 = state_31717;
var statearr_31726_31749 = state_31717__$1;
(statearr_31726_31749[(2)] = inst_31707);

(statearr_31726_31749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (9))){
var state_31717__$1 = state_31717;
var statearr_31727_31750 = state_31717__$1;
(statearr_31727_31750[(2)] = null);

(statearr_31727_31750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (5))){
var inst_31702 = cljs.core.async.close_BANG_.call(null,out);
var state_31717__$1 = state_31717;
var statearr_31728_31751 = state_31717__$1;
(statearr_31728_31751[(2)] = inst_31702);

(statearr_31728_31751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (10))){
var inst_31710 = (state_31717[(2)]);
var state_31717__$1 = (function (){var statearr_31729 = state_31717;
(statearr_31729[(8)] = inst_31710);

return statearr_31729;
})();
var statearr_31730_31752 = state_31717__$1;
(statearr_31730_31752[(2)] = null);

(statearr_31730_31752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (8))){
var inst_31699 = (state_31717[(7)]);
var state_31717__$1 = state_31717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31717__$1,(11),out,inst_31699);
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
});})(c__29456__auto___31742,out))
;
return ((function (switch__29342__auto__,c__29456__auto___31742,out){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_31734 = [null,null,null,null,null,null,null,null,null];
(statearr_31734[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_31734[(1)] = (1));

return statearr_31734;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_31717){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_31717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e31735){if((e31735 instanceof Object)){
var ex__29346__auto__ = e31735;
var statearr_31736_31753 = state_31717;
(statearr_31736_31753[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31754 = state_31717;
state_31717 = G__31754;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_31717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_31717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___31742,out))
})();
var state__29458__auto__ = (function (){var statearr_31737 = f__29457__auto__.call(null);
(statearr_31737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___31742);

return statearr_31737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___31742,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31755 = [];
var len__27991__auto___31758 = arguments.length;
var i__27992__auto___31759 = (0);
while(true){
if((i__27992__auto___31759 < len__27991__auto___31758)){
args31755.push((arguments[i__27992__auto___31759]));

var G__31760 = (i__27992__auto___31759 + (1));
i__27992__auto___31759 = G__31760;
continue;
} else {
}
break;
}

var G__31757 = args31755.length;
switch (G__31757) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31755.length)].join('')));

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
var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__){
return (function (state_31927){
var state_val_31928 = (state_31927[(1)]);
if((state_val_31928 === (7))){
var inst_31923 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31929_31970 = state_31927__$1;
(statearr_31929_31970[(2)] = inst_31923);

(statearr_31929_31970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (20))){
var inst_31893 = (state_31927[(7)]);
var inst_31904 = (state_31927[(2)]);
var inst_31905 = cljs.core.next.call(null,inst_31893);
var inst_31879 = inst_31905;
var inst_31880 = null;
var inst_31881 = (0);
var inst_31882 = (0);
var state_31927__$1 = (function (){var statearr_31930 = state_31927;
(statearr_31930[(8)] = inst_31879);

(statearr_31930[(9)] = inst_31880);

(statearr_31930[(10)] = inst_31881);

(statearr_31930[(11)] = inst_31882);

(statearr_31930[(12)] = inst_31904);

return statearr_31930;
})();
var statearr_31931_31971 = state_31927__$1;
(statearr_31931_31971[(2)] = null);

(statearr_31931_31971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (1))){
var state_31927__$1 = state_31927;
var statearr_31932_31972 = state_31927__$1;
(statearr_31932_31972[(2)] = null);

(statearr_31932_31972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (4))){
var inst_31868 = (state_31927[(13)]);
var inst_31868__$1 = (state_31927[(2)]);
var inst_31869 = (inst_31868__$1 == null);
var state_31927__$1 = (function (){var statearr_31933 = state_31927;
(statearr_31933[(13)] = inst_31868__$1);

return statearr_31933;
})();
if(cljs.core.truth_(inst_31869)){
var statearr_31934_31973 = state_31927__$1;
(statearr_31934_31973[(1)] = (5));

} else {
var statearr_31935_31974 = state_31927__$1;
(statearr_31935_31974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (15))){
var state_31927__$1 = state_31927;
var statearr_31939_31975 = state_31927__$1;
(statearr_31939_31975[(2)] = null);

(statearr_31939_31975[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (21))){
var state_31927__$1 = state_31927;
var statearr_31940_31976 = state_31927__$1;
(statearr_31940_31976[(2)] = null);

(statearr_31940_31976[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (13))){
var inst_31879 = (state_31927[(8)]);
var inst_31880 = (state_31927[(9)]);
var inst_31881 = (state_31927[(10)]);
var inst_31882 = (state_31927[(11)]);
var inst_31889 = (state_31927[(2)]);
var inst_31890 = (inst_31882 + (1));
var tmp31936 = inst_31879;
var tmp31937 = inst_31880;
var tmp31938 = inst_31881;
var inst_31879__$1 = tmp31936;
var inst_31880__$1 = tmp31937;
var inst_31881__$1 = tmp31938;
var inst_31882__$1 = inst_31890;
var state_31927__$1 = (function (){var statearr_31941 = state_31927;
(statearr_31941[(14)] = inst_31889);

(statearr_31941[(8)] = inst_31879__$1);

(statearr_31941[(9)] = inst_31880__$1);

(statearr_31941[(10)] = inst_31881__$1);

(statearr_31941[(11)] = inst_31882__$1);

return statearr_31941;
})();
var statearr_31942_31977 = state_31927__$1;
(statearr_31942_31977[(2)] = null);

(statearr_31942_31977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (22))){
var state_31927__$1 = state_31927;
var statearr_31943_31978 = state_31927__$1;
(statearr_31943_31978[(2)] = null);

(statearr_31943_31978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (6))){
var inst_31868 = (state_31927[(13)]);
var inst_31877 = f.call(null,inst_31868);
var inst_31878 = cljs.core.seq.call(null,inst_31877);
var inst_31879 = inst_31878;
var inst_31880 = null;
var inst_31881 = (0);
var inst_31882 = (0);
var state_31927__$1 = (function (){var statearr_31944 = state_31927;
(statearr_31944[(8)] = inst_31879);

(statearr_31944[(9)] = inst_31880);

(statearr_31944[(10)] = inst_31881);

(statearr_31944[(11)] = inst_31882);

return statearr_31944;
})();
var statearr_31945_31979 = state_31927__$1;
(statearr_31945_31979[(2)] = null);

(statearr_31945_31979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (17))){
var inst_31893 = (state_31927[(7)]);
var inst_31897 = cljs.core.chunk_first.call(null,inst_31893);
var inst_31898 = cljs.core.chunk_rest.call(null,inst_31893);
var inst_31899 = cljs.core.count.call(null,inst_31897);
var inst_31879 = inst_31898;
var inst_31880 = inst_31897;
var inst_31881 = inst_31899;
var inst_31882 = (0);
var state_31927__$1 = (function (){var statearr_31946 = state_31927;
(statearr_31946[(8)] = inst_31879);

(statearr_31946[(9)] = inst_31880);

(statearr_31946[(10)] = inst_31881);

(statearr_31946[(11)] = inst_31882);

return statearr_31946;
})();
var statearr_31947_31980 = state_31927__$1;
(statearr_31947_31980[(2)] = null);

(statearr_31947_31980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (3))){
var inst_31925 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31927__$1,inst_31925);
} else {
if((state_val_31928 === (12))){
var inst_31913 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31948_31981 = state_31927__$1;
(statearr_31948_31981[(2)] = inst_31913);

(statearr_31948_31981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (2))){
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31927__$1,(4),in$);
} else {
if((state_val_31928 === (23))){
var inst_31921 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31949_31982 = state_31927__$1;
(statearr_31949_31982[(2)] = inst_31921);

(statearr_31949_31982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (19))){
var inst_31908 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31950_31983 = state_31927__$1;
(statearr_31950_31983[(2)] = inst_31908);

(statearr_31950_31983[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (11))){
var inst_31879 = (state_31927[(8)]);
var inst_31893 = (state_31927[(7)]);
var inst_31893__$1 = cljs.core.seq.call(null,inst_31879);
var state_31927__$1 = (function (){var statearr_31951 = state_31927;
(statearr_31951[(7)] = inst_31893__$1);

return statearr_31951;
})();
if(inst_31893__$1){
var statearr_31952_31984 = state_31927__$1;
(statearr_31952_31984[(1)] = (14));

} else {
var statearr_31953_31985 = state_31927__$1;
(statearr_31953_31985[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (9))){
var inst_31915 = (state_31927[(2)]);
var inst_31916 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31927__$1 = (function (){var statearr_31954 = state_31927;
(statearr_31954[(15)] = inst_31915);

return statearr_31954;
})();
if(cljs.core.truth_(inst_31916)){
var statearr_31955_31986 = state_31927__$1;
(statearr_31955_31986[(1)] = (21));

} else {
var statearr_31956_31987 = state_31927__$1;
(statearr_31956_31987[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (5))){
var inst_31871 = cljs.core.async.close_BANG_.call(null,out);
var state_31927__$1 = state_31927;
var statearr_31957_31988 = state_31927__$1;
(statearr_31957_31988[(2)] = inst_31871);

(statearr_31957_31988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (14))){
var inst_31893 = (state_31927[(7)]);
var inst_31895 = cljs.core.chunked_seq_QMARK_.call(null,inst_31893);
var state_31927__$1 = state_31927;
if(inst_31895){
var statearr_31958_31989 = state_31927__$1;
(statearr_31958_31989[(1)] = (17));

} else {
var statearr_31959_31990 = state_31927__$1;
(statearr_31959_31990[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (16))){
var inst_31911 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31960_31991 = state_31927__$1;
(statearr_31960_31991[(2)] = inst_31911);

(statearr_31960_31991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (10))){
var inst_31880 = (state_31927[(9)]);
var inst_31882 = (state_31927[(11)]);
var inst_31887 = cljs.core._nth.call(null,inst_31880,inst_31882);
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31927__$1,(13),out,inst_31887);
} else {
if((state_val_31928 === (18))){
var inst_31893 = (state_31927[(7)]);
var inst_31902 = cljs.core.first.call(null,inst_31893);
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31927__$1,(20),out,inst_31902);
} else {
if((state_val_31928 === (8))){
var inst_31881 = (state_31927[(10)]);
var inst_31882 = (state_31927[(11)]);
var inst_31884 = (inst_31882 < inst_31881);
var inst_31885 = inst_31884;
var state_31927__$1 = state_31927;
if(cljs.core.truth_(inst_31885)){
var statearr_31961_31992 = state_31927__$1;
(statearr_31961_31992[(1)] = (10));

} else {
var statearr_31962_31993 = state_31927__$1;
(statearr_31962_31993[(1)] = (11));

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
});})(c__29456__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29343__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29343__auto____0 = (function (){
var statearr_31966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31966[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29343__auto__);

(statearr_31966[(1)] = (1));

return statearr_31966;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29343__auto____1 = (function (state_31927){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_31927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e31967){if((e31967 instanceof Object)){
var ex__29346__auto__ = e31967;
var statearr_31968_31994 = state_31927;
(statearr_31968_31994[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31995 = state_31927;
state_31927 = G__31995;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29343__auto__ = function(state_31927){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29343__auto____1.call(this,state_31927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29343__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29343__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__))
})();
var state__29458__auto__ = (function (){var statearr_31969 = f__29457__auto__.call(null);
(statearr_31969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_31969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__))
);

return c__29456__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31996 = [];
var len__27991__auto___31999 = arguments.length;
var i__27992__auto___32000 = (0);
while(true){
if((i__27992__auto___32000 < len__27991__auto___31999)){
args31996.push((arguments[i__27992__auto___32000]));

var G__32001 = (i__27992__auto___32000 + (1));
i__27992__auto___32000 = G__32001;
continue;
} else {
}
break;
}

var G__31998 = args31996.length;
switch (G__31998) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31996.length)].join('')));

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
var args32003 = [];
var len__27991__auto___32006 = arguments.length;
var i__27992__auto___32007 = (0);
while(true){
if((i__27992__auto___32007 < len__27991__auto___32006)){
args32003.push((arguments[i__27992__auto___32007]));

var G__32008 = (i__27992__auto___32007 + (1));
i__27992__auto___32007 = G__32008;
continue;
} else {
}
break;
}

var G__32005 = args32003.length;
switch (G__32005) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32003.length)].join('')));

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
var args32010 = [];
var len__27991__auto___32061 = arguments.length;
var i__27992__auto___32062 = (0);
while(true){
if((i__27992__auto___32062 < len__27991__auto___32061)){
args32010.push((arguments[i__27992__auto___32062]));

var G__32063 = (i__27992__auto___32062 + (1));
i__27992__auto___32062 = G__32063;
continue;
} else {
}
break;
}

var G__32012 = args32010.length;
switch (G__32012) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32010.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29456__auto___32065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___32065,out){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___32065,out){
return (function (state_32036){
var state_val_32037 = (state_32036[(1)]);
if((state_val_32037 === (7))){
var inst_32031 = (state_32036[(2)]);
var state_32036__$1 = state_32036;
var statearr_32038_32066 = state_32036__$1;
(statearr_32038_32066[(2)] = inst_32031);

(statearr_32038_32066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32037 === (1))){
var inst_32013 = null;
var state_32036__$1 = (function (){var statearr_32039 = state_32036;
(statearr_32039[(7)] = inst_32013);

return statearr_32039;
})();
var statearr_32040_32067 = state_32036__$1;
(statearr_32040_32067[(2)] = null);

(statearr_32040_32067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32037 === (4))){
var inst_32016 = (state_32036[(8)]);
var inst_32016__$1 = (state_32036[(2)]);
var inst_32017 = (inst_32016__$1 == null);
var inst_32018 = cljs.core.not.call(null,inst_32017);
var state_32036__$1 = (function (){var statearr_32041 = state_32036;
(statearr_32041[(8)] = inst_32016__$1);

return statearr_32041;
})();
if(inst_32018){
var statearr_32042_32068 = state_32036__$1;
(statearr_32042_32068[(1)] = (5));

} else {
var statearr_32043_32069 = state_32036__$1;
(statearr_32043_32069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32037 === (6))){
var state_32036__$1 = state_32036;
var statearr_32044_32070 = state_32036__$1;
(statearr_32044_32070[(2)] = null);

(statearr_32044_32070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32037 === (3))){
var inst_32033 = (state_32036[(2)]);
var inst_32034 = cljs.core.async.close_BANG_.call(null,out);
var state_32036__$1 = (function (){var statearr_32045 = state_32036;
(statearr_32045[(9)] = inst_32033);

return statearr_32045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32036__$1,inst_32034);
} else {
if((state_val_32037 === (2))){
var state_32036__$1 = state_32036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32036__$1,(4),ch);
} else {
if((state_val_32037 === (11))){
var inst_32016 = (state_32036[(8)]);
var inst_32025 = (state_32036[(2)]);
var inst_32013 = inst_32016;
var state_32036__$1 = (function (){var statearr_32046 = state_32036;
(statearr_32046[(10)] = inst_32025);

(statearr_32046[(7)] = inst_32013);

return statearr_32046;
})();
var statearr_32047_32071 = state_32036__$1;
(statearr_32047_32071[(2)] = null);

(statearr_32047_32071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32037 === (9))){
var inst_32016 = (state_32036[(8)]);
var state_32036__$1 = state_32036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32036__$1,(11),out,inst_32016);
} else {
if((state_val_32037 === (5))){
var inst_32013 = (state_32036[(7)]);
var inst_32016 = (state_32036[(8)]);
var inst_32020 = cljs.core._EQ_.call(null,inst_32016,inst_32013);
var state_32036__$1 = state_32036;
if(inst_32020){
var statearr_32049_32072 = state_32036__$1;
(statearr_32049_32072[(1)] = (8));

} else {
var statearr_32050_32073 = state_32036__$1;
(statearr_32050_32073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32037 === (10))){
var inst_32028 = (state_32036[(2)]);
var state_32036__$1 = state_32036;
var statearr_32051_32074 = state_32036__$1;
(statearr_32051_32074[(2)] = inst_32028);

(statearr_32051_32074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32037 === (8))){
var inst_32013 = (state_32036[(7)]);
var tmp32048 = inst_32013;
var inst_32013__$1 = tmp32048;
var state_32036__$1 = (function (){var statearr_32052 = state_32036;
(statearr_32052[(7)] = inst_32013__$1);

return statearr_32052;
})();
var statearr_32053_32075 = state_32036__$1;
(statearr_32053_32075[(2)] = null);

(statearr_32053_32075[(1)] = (2));


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
});})(c__29456__auto___32065,out))
;
return ((function (switch__29342__auto__,c__29456__auto___32065,out){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_32057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32057[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_32057[(1)] = (1));

return statearr_32057;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_32036){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_32036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e32058){if((e32058 instanceof Object)){
var ex__29346__auto__ = e32058;
var statearr_32059_32076 = state_32036;
(statearr_32059_32076[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32077 = state_32036;
state_32036 = G__32077;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_32036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_32036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___32065,out))
})();
var state__29458__auto__ = (function (){var statearr_32060 = f__29457__auto__.call(null);
(statearr_32060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___32065);

return statearr_32060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___32065,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32078 = [];
var len__27991__auto___32148 = arguments.length;
var i__27992__auto___32149 = (0);
while(true){
if((i__27992__auto___32149 < len__27991__auto___32148)){
args32078.push((arguments[i__27992__auto___32149]));

var G__32150 = (i__27992__auto___32149 + (1));
i__27992__auto___32149 = G__32150;
continue;
} else {
}
break;
}

var G__32080 = args32078.length;
switch (G__32080) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32078.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29456__auto___32152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___32152,out){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___32152,out){
return (function (state_32118){
var state_val_32119 = (state_32118[(1)]);
if((state_val_32119 === (7))){
var inst_32114 = (state_32118[(2)]);
var state_32118__$1 = state_32118;
var statearr_32120_32153 = state_32118__$1;
(statearr_32120_32153[(2)] = inst_32114);

(statearr_32120_32153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (1))){
var inst_32081 = (new Array(n));
var inst_32082 = inst_32081;
var inst_32083 = (0);
var state_32118__$1 = (function (){var statearr_32121 = state_32118;
(statearr_32121[(7)] = inst_32082);

(statearr_32121[(8)] = inst_32083);

return statearr_32121;
})();
var statearr_32122_32154 = state_32118__$1;
(statearr_32122_32154[(2)] = null);

(statearr_32122_32154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (4))){
var inst_32086 = (state_32118[(9)]);
var inst_32086__$1 = (state_32118[(2)]);
var inst_32087 = (inst_32086__$1 == null);
var inst_32088 = cljs.core.not.call(null,inst_32087);
var state_32118__$1 = (function (){var statearr_32123 = state_32118;
(statearr_32123[(9)] = inst_32086__$1);

return statearr_32123;
})();
if(inst_32088){
var statearr_32124_32155 = state_32118__$1;
(statearr_32124_32155[(1)] = (5));

} else {
var statearr_32125_32156 = state_32118__$1;
(statearr_32125_32156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (15))){
var inst_32108 = (state_32118[(2)]);
var state_32118__$1 = state_32118;
var statearr_32126_32157 = state_32118__$1;
(statearr_32126_32157[(2)] = inst_32108);

(statearr_32126_32157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (13))){
var state_32118__$1 = state_32118;
var statearr_32127_32158 = state_32118__$1;
(statearr_32127_32158[(2)] = null);

(statearr_32127_32158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (6))){
var inst_32083 = (state_32118[(8)]);
var inst_32104 = (inst_32083 > (0));
var state_32118__$1 = state_32118;
if(cljs.core.truth_(inst_32104)){
var statearr_32128_32159 = state_32118__$1;
(statearr_32128_32159[(1)] = (12));

} else {
var statearr_32129_32160 = state_32118__$1;
(statearr_32129_32160[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (3))){
var inst_32116 = (state_32118[(2)]);
var state_32118__$1 = state_32118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32118__$1,inst_32116);
} else {
if((state_val_32119 === (12))){
var inst_32082 = (state_32118[(7)]);
var inst_32106 = cljs.core.vec.call(null,inst_32082);
var state_32118__$1 = state_32118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32118__$1,(15),out,inst_32106);
} else {
if((state_val_32119 === (2))){
var state_32118__$1 = state_32118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32118__$1,(4),ch);
} else {
if((state_val_32119 === (11))){
var inst_32098 = (state_32118[(2)]);
var inst_32099 = (new Array(n));
var inst_32082 = inst_32099;
var inst_32083 = (0);
var state_32118__$1 = (function (){var statearr_32130 = state_32118;
(statearr_32130[(10)] = inst_32098);

(statearr_32130[(7)] = inst_32082);

(statearr_32130[(8)] = inst_32083);

return statearr_32130;
})();
var statearr_32131_32161 = state_32118__$1;
(statearr_32131_32161[(2)] = null);

(statearr_32131_32161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (9))){
var inst_32082 = (state_32118[(7)]);
var inst_32096 = cljs.core.vec.call(null,inst_32082);
var state_32118__$1 = state_32118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32118__$1,(11),out,inst_32096);
} else {
if((state_val_32119 === (5))){
var inst_32082 = (state_32118[(7)]);
var inst_32086 = (state_32118[(9)]);
var inst_32091 = (state_32118[(11)]);
var inst_32083 = (state_32118[(8)]);
var inst_32090 = (inst_32082[inst_32083] = inst_32086);
var inst_32091__$1 = (inst_32083 + (1));
var inst_32092 = (inst_32091__$1 < n);
var state_32118__$1 = (function (){var statearr_32132 = state_32118;
(statearr_32132[(11)] = inst_32091__$1);

(statearr_32132[(12)] = inst_32090);

return statearr_32132;
})();
if(cljs.core.truth_(inst_32092)){
var statearr_32133_32162 = state_32118__$1;
(statearr_32133_32162[(1)] = (8));

} else {
var statearr_32134_32163 = state_32118__$1;
(statearr_32134_32163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (14))){
var inst_32111 = (state_32118[(2)]);
var inst_32112 = cljs.core.async.close_BANG_.call(null,out);
var state_32118__$1 = (function (){var statearr_32136 = state_32118;
(statearr_32136[(13)] = inst_32111);

return statearr_32136;
})();
var statearr_32137_32164 = state_32118__$1;
(statearr_32137_32164[(2)] = inst_32112);

(statearr_32137_32164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (10))){
var inst_32102 = (state_32118[(2)]);
var state_32118__$1 = state_32118;
var statearr_32138_32165 = state_32118__$1;
(statearr_32138_32165[(2)] = inst_32102);

(statearr_32138_32165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32119 === (8))){
var inst_32082 = (state_32118[(7)]);
var inst_32091 = (state_32118[(11)]);
var tmp32135 = inst_32082;
var inst_32082__$1 = tmp32135;
var inst_32083 = inst_32091;
var state_32118__$1 = (function (){var statearr_32139 = state_32118;
(statearr_32139[(7)] = inst_32082__$1);

(statearr_32139[(8)] = inst_32083);

return statearr_32139;
})();
var statearr_32140_32166 = state_32118__$1;
(statearr_32140_32166[(2)] = null);

(statearr_32140_32166[(1)] = (2));


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
});})(c__29456__auto___32152,out))
;
return ((function (switch__29342__auto__,c__29456__auto___32152,out){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_32144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32144[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_32144[(1)] = (1));

return statearr_32144;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_32118){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_32118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e32145){if((e32145 instanceof Object)){
var ex__29346__auto__ = e32145;
var statearr_32146_32167 = state_32118;
(statearr_32146_32167[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32168 = state_32118;
state_32118 = G__32168;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_32118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_32118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___32152,out))
})();
var state__29458__auto__ = (function (){var statearr_32147 = f__29457__auto__.call(null);
(statearr_32147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___32152);

return statearr_32147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___32152,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32169 = [];
var len__27991__auto___32243 = arguments.length;
var i__27992__auto___32244 = (0);
while(true){
if((i__27992__auto___32244 < len__27991__auto___32243)){
args32169.push((arguments[i__27992__auto___32244]));

var G__32245 = (i__27992__auto___32244 + (1));
i__27992__auto___32244 = G__32245;
continue;
} else {
}
break;
}

var G__32171 = args32169.length;
switch (G__32171) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32169.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29456__auto___32247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto___32247,out){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto___32247,out){
return (function (state_32213){
var state_val_32214 = (state_32213[(1)]);
if((state_val_32214 === (7))){
var inst_32209 = (state_32213[(2)]);
var state_32213__$1 = state_32213;
var statearr_32215_32248 = state_32213__$1;
(statearr_32215_32248[(2)] = inst_32209);

(statearr_32215_32248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32214 === (1))){
var inst_32172 = [];
var inst_32173 = inst_32172;
var inst_32174 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32213__$1 = (function (){var statearr_32216 = state_32213;
(statearr_32216[(7)] = inst_32173);

(statearr_32216[(8)] = inst_32174);

return statearr_32216;
})();
var statearr_32217_32249 = state_32213__$1;
(statearr_32217_32249[(2)] = null);

(statearr_32217_32249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32214 === (4))){
var inst_32177 = (state_32213[(9)]);
var inst_32177__$1 = (state_32213[(2)]);
var inst_32178 = (inst_32177__$1 == null);
var inst_32179 = cljs.core.not.call(null,inst_32178);
var state_32213__$1 = (function (){var statearr_32218 = state_32213;
(statearr_32218[(9)] = inst_32177__$1);

return statearr_32218;
})();
if(inst_32179){
var statearr_32219_32250 = state_32213__$1;
(statearr_32219_32250[(1)] = (5));

} else {
var statearr_32220_32251 = state_32213__$1;
(statearr_32220_32251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32214 === (15))){
var inst_32203 = (state_32213[(2)]);
var state_32213__$1 = state_32213;
var statearr_32221_32252 = state_32213__$1;
(statearr_32221_32252[(2)] = inst_32203);

(statearr_32221_32252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32214 === (13))){
var state_32213__$1 = state_32213;
var statearr_32222_32253 = state_32213__$1;
(statearr_32222_32253[(2)] = null);

(statearr_32222_32253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32214 === (6))){
var inst_32173 = (state_32213[(7)]);
var inst_32198 = inst_32173.length;
var inst_32199 = (inst_32198 > (0));
var state_32213__$1 = state_32213;
if(cljs.core.truth_(inst_32199)){
var statearr_32223_32254 = state_32213__$1;
(statearr_32223_32254[(1)] = (12));

} else {
var statearr_32224_32255 = state_32213__$1;
(statearr_32224_32255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32214 === (3))){
var inst_32211 = (state_32213[(2)]);
var state_32213__$1 = state_32213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32213__$1,inst_32211);
} else {
if((state_val_32214 === (12))){
var inst_32173 = (state_32213[(7)]);
var inst_32201 = cljs.core.vec.call(null,inst_32173);
var state_32213__$1 = state_32213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32213__$1,(15),out,inst_32201);
} else {
if((state_val_32214 === (2))){
var state_32213__$1 = state_32213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32213__$1,(4),ch);
} else {
if((state_val_32214 === (11))){
var inst_32177 = (state_32213[(9)]);
var inst_32181 = (state_32213[(10)]);
var inst_32191 = (state_32213[(2)]);
var inst_32192 = [];
var inst_32193 = inst_32192.push(inst_32177);
var inst_32173 = inst_32192;
var inst_32174 = inst_32181;
var state_32213__$1 = (function (){var statearr_32225 = state_32213;
(statearr_32225[(11)] = inst_32191);

(statearr_32225[(7)] = inst_32173);

(statearr_32225[(12)] = inst_32193);

(statearr_32225[(8)] = inst_32174);

return statearr_32225;
})();
var statearr_32226_32256 = state_32213__$1;
(statearr_32226_32256[(2)] = null);

(statearr_32226_32256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32214 === (9))){
var inst_32173 = (state_32213[(7)]);
var inst_32189 = cljs.core.vec.call(null,inst_32173);
var state_32213__$1 = state_32213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32213__$1,(11),out,inst_32189);
} else {
if((state_val_32214 === (5))){
var inst_32177 = (state_32213[(9)]);
var inst_32181 = (state_32213[(10)]);
var inst_32174 = (state_32213[(8)]);
var inst_32181__$1 = f.call(null,inst_32177);
var inst_32182 = cljs.core._EQ_.call(null,inst_32181__$1,inst_32174);
var inst_32183 = cljs.core.keyword_identical_QMARK_.call(null,inst_32174,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32184 = (inst_32182) || (inst_32183);
var state_32213__$1 = (function (){var statearr_32227 = state_32213;
(statearr_32227[(10)] = inst_32181__$1);

return statearr_32227;
})();
if(cljs.core.truth_(inst_32184)){
var statearr_32228_32257 = state_32213__$1;
(statearr_32228_32257[(1)] = (8));

} else {
var statearr_32229_32258 = state_32213__$1;
(statearr_32229_32258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32214 === (14))){
var inst_32206 = (state_32213[(2)]);
var inst_32207 = cljs.core.async.close_BANG_.call(null,out);
var state_32213__$1 = (function (){var statearr_32231 = state_32213;
(statearr_32231[(13)] = inst_32206);

return statearr_32231;
})();
var statearr_32232_32259 = state_32213__$1;
(statearr_32232_32259[(2)] = inst_32207);

(statearr_32232_32259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32214 === (10))){
var inst_32196 = (state_32213[(2)]);
var state_32213__$1 = state_32213;
var statearr_32233_32260 = state_32213__$1;
(statearr_32233_32260[(2)] = inst_32196);

(statearr_32233_32260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32214 === (8))){
var inst_32173 = (state_32213[(7)]);
var inst_32177 = (state_32213[(9)]);
var inst_32181 = (state_32213[(10)]);
var inst_32186 = inst_32173.push(inst_32177);
var tmp32230 = inst_32173;
var inst_32173__$1 = tmp32230;
var inst_32174 = inst_32181;
var state_32213__$1 = (function (){var statearr_32234 = state_32213;
(statearr_32234[(7)] = inst_32173__$1);

(statearr_32234[(14)] = inst_32186);

(statearr_32234[(8)] = inst_32174);

return statearr_32234;
})();
var statearr_32235_32261 = state_32213__$1;
(statearr_32235_32261[(2)] = null);

(statearr_32235_32261[(1)] = (2));


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
});})(c__29456__auto___32247,out))
;
return ((function (switch__29342__auto__,c__29456__auto___32247,out){
return (function() {
var cljs$core$async$state_machine__29343__auto__ = null;
var cljs$core$async$state_machine__29343__auto____0 = (function (){
var statearr_32239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32239[(0)] = cljs$core$async$state_machine__29343__auto__);

(statearr_32239[(1)] = (1));

return statearr_32239;
});
var cljs$core$async$state_machine__29343__auto____1 = (function (state_32213){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_32213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e32240){if((e32240 instanceof Object)){
var ex__29346__auto__ = e32240;
var statearr_32241_32262 = state_32213;
(statearr_32241_32262[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32263 = state_32213;
state_32213 = G__32263;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
cljs$core$async$state_machine__29343__auto__ = function(state_32213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29343__auto____1.call(this,state_32213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29343__auto____0;
cljs$core$async$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29343__auto____1;
return cljs$core$async$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto___32247,out))
})();
var state__29458__auto__ = (function (){var statearr_32242 = f__29457__auto__.call(null);
(statearr_32242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto___32247);

return statearr_32242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto___32247,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1538029287487