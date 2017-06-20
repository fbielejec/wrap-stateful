// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29560 = [];
var len__28417__auto___29566 = arguments.length;
var i__28418__auto___29567 = (0);
while(true){
if((i__28418__auto___29567 < len__28417__auto___29566)){
args29560.push((arguments[i__28418__auto___29567]));

var G__29568 = (i__28418__auto___29567 + (1));
i__28418__auto___29567 = G__29568;
continue;
} else {
}
break;
}

var G__29562 = args29560.length;
switch (G__29562) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29560.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29563 = (function (f,blockable,meta29564){
this.f = f;
this.blockable = blockable;
this.meta29564 = meta29564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29565,meta29564__$1){
var self__ = this;
var _29565__$1 = this;
return (new cljs.core.async.t_cljs$core$async29563(self__.f,self__.blockable,meta29564__$1));
});

cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29565){
var self__ = this;
var _29565__$1 = this;
return self__.meta29564;
});

cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29564","meta29564",-1299795025,null)], null);
});

cljs.core.async.t_cljs$core$async29563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29563";

cljs.core.async.t_cljs$core$async29563.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async/t_cljs$core$async29563");
});

cljs.core.async.__GT_t_cljs$core$async29563 = (function cljs$core$async$__GT_t_cljs$core$async29563(f__$1,blockable__$1,meta29564){
return (new cljs.core.async.t_cljs$core$async29563(f__$1,blockable__$1,meta29564));
});

}

return (new cljs.core.async.t_cljs$core$async29563(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args29572 = [];
var len__28417__auto___29575 = arguments.length;
var i__28418__auto___29576 = (0);
while(true){
if((i__28418__auto___29576 < len__28417__auto___29575)){
args29572.push((arguments[i__28418__auto___29576]));

var G__29577 = (i__28418__auto___29576 + (1));
i__28418__auto___29576 = G__29577;
continue;
} else {
}
break;
}

var G__29574 = args29572.length;
switch (G__29574) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29572.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var args29579 = [];
var len__28417__auto___29582 = arguments.length;
var i__28418__auto___29583 = (0);
while(true){
if((i__28418__auto___29583 < len__28417__auto___29582)){
args29579.push((arguments[i__28418__auto___29583]));

var G__29584 = (i__28418__auto___29583 + (1));
i__28418__auto___29583 = G__29584;
continue;
} else {
}
break;
}

var G__29581 = args29579.length;
switch (G__29581) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29579.length)].join('')));

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
var args29586 = [];
var len__28417__auto___29589 = arguments.length;
var i__28418__auto___29590 = (0);
while(true){
if((i__28418__auto___29590 < len__28417__auto___29589)){
args29586.push((arguments[i__28418__auto___29590]));

var G__29591 = (i__28418__auto___29590 + (1));
i__28418__auto___29590 = G__29591;
continue;
} else {
}
break;
}

var G__29588 = args29586.length;
switch (G__29588) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29586.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29593 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29593);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29593,ret){
return (function (){
return fn1.call(null,val_29593);
});})(val_29593,ret))
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
var args29594 = [];
var len__28417__auto___29597 = arguments.length;
var i__28418__auto___29598 = (0);
while(true){
if((i__28418__auto___29598 < len__28417__auto___29597)){
args29594.push((arguments[i__28418__auto___29598]));

var G__29599 = (i__28418__auto___29598 + (1));
i__28418__auto___29598 = G__29599;
continue;
} else {
}
break;
}

var G__29596 = args29594.length;
switch (G__29596) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29594.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__28227__auto___29601 = n;
var x_29602 = (0);
while(true){
if((x_29602 < n__28227__auto___29601)){
(a[x_29602] = (0));

var G__29603 = (x_29602 + (1));
x_29602 = G__29603;
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

var G__29604 = (i + (1));
i = G__29604;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29608 = (function (flag,meta29609){
this.flag = flag;
this.meta29609 = meta29609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29610,meta29609__$1){
var self__ = this;
var _29610__$1 = this;
return (new cljs.core.async.t_cljs$core$async29608(self__.flag,meta29609__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29610){
var self__ = this;
var _29610__$1 = this;
return self__.meta29609;
});})(flag))
;

cljs.core.async.t_cljs$core$async29608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29608.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29609","meta29609",607291032,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29608";

cljs.core.async.t_cljs$core$async29608.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async/t_cljs$core$async29608");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29608 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29608(flag__$1,meta29609){
return (new cljs.core.async.t_cljs$core$async29608(flag__$1,meta29609));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29608(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29614 = (function (flag,cb,meta29615){
this.flag = flag;
this.cb = cb;
this.meta29615 = meta29615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29616,meta29615__$1){
var self__ = this;
var _29616__$1 = this;
return (new cljs.core.async.t_cljs$core$async29614(self__.flag,self__.cb,meta29615__$1));
});

cljs.core.async.t_cljs$core$async29614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29616){
var self__ = this;
var _29616__$1 = this;
return self__.meta29615;
});

cljs.core.async.t_cljs$core$async29614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29615","meta29615",904276632,null)], null);
});

cljs.core.async.t_cljs$core$async29614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29614";

cljs.core.async.t_cljs$core$async29614.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async/t_cljs$core$async29614");
});

cljs.core.async.__GT_t_cljs$core$async29614 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29614(flag__$1,cb__$1,meta29615){
return (new cljs.core.async.t_cljs$core$async29614(flag__$1,cb__$1,meta29615));
});

}

return (new cljs.core.async.t_cljs$core$async29614(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29617_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29617_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29618_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29618_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27304__auto__ = wport;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29619 = (i + (1));
i = G__29619;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27304__auto__ = ret;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27292__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27292__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27292__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__28424__auto__ = [];
var len__28417__auto___29625 = arguments.length;
var i__28418__auto___29626 = (0);
while(true){
if((i__28418__auto___29626 < len__28417__auto___29625)){
args__28424__auto__.push((arguments[i__28418__auto___29626]));

var G__29627 = (i__28418__auto___29626 + (1));
i__28418__auto___29626 = G__29627;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((1) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28425__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29622){
var map__29623 = p__29622;
var map__29623__$1 = ((((!((map__29623 == null)))?((((map__29623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29623):map__29623);
var opts = map__29623__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29620){
var G__29621 = cljs.core.first.call(null,seq29620);
var seq29620__$1 = cljs.core.next.call(null,seq29620);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29621,seq29620__$1);
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
var args29628 = [];
var len__28417__auto___29678 = arguments.length;
var i__28418__auto___29679 = (0);
while(true){
if((i__28418__auto___29679 < len__28417__auto___29678)){
args29628.push((arguments[i__28418__auto___29679]));

var G__29680 = (i__28418__auto___29679 + (1));
i__28418__auto___29679 = G__29680;
continue;
} else {
}
break;
}

var G__29630 = args29628.length;
switch (G__29630) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29628.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29515__auto___29682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___29682){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___29682){
return (function (state_29654){
var state_val_29655 = (state_29654[(1)]);
if((state_val_29655 === (7))){
var inst_29650 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
var statearr_29656_29683 = state_29654__$1;
(statearr_29656_29683[(2)] = inst_29650);

(statearr_29656_29683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (1))){
var state_29654__$1 = state_29654;
var statearr_29657_29684 = state_29654__$1;
(statearr_29657_29684[(2)] = null);

(statearr_29657_29684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (4))){
var inst_29633 = (state_29654[(7)]);
var inst_29633__$1 = (state_29654[(2)]);
var inst_29634 = (inst_29633__$1 == null);
var state_29654__$1 = (function (){var statearr_29658 = state_29654;
(statearr_29658[(7)] = inst_29633__$1);

return statearr_29658;
})();
if(cljs.core.truth_(inst_29634)){
var statearr_29659_29685 = state_29654__$1;
(statearr_29659_29685[(1)] = (5));

} else {
var statearr_29660_29686 = state_29654__$1;
(statearr_29660_29686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (13))){
var state_29654__$1 = state_29654;
var statearr_29661_29687 = state_29654__$1;
(statearr_29661_29687[(2)] = null);

(statearr_29661_29687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (6))){
var inst_29633 = (state_29654[(7)]);
var state_29654__$1 = state_29654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29654__$1,(11),to,inst_29633);
} else {
if((state_val_29655 === (3))){
var inst_29652 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29654__$1,inst_29652);
} else {
if((state_val_29655 === (12))){
var state_29654__$1 = state_29654;
var statearr_29662_29688 = state_29654__$1;
(statearr_29662_29688[(2)] = null);

(statearr_29662_29688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (2))){
var state_29654__$1 = state_29654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29654__$1,(4),from);
} else {
if((state_val_29655 === (11))){
var inst_29643 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
if(cljs.core.truth_(inst_29643)){
var statearr_29663_29689 = state_29654__$1;
(statearr_29663_29689[(1)] = (12));

} else {
var statearr_29664_29690 = state_29654__$1;
(statearr_29664_29690[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (9))){
var state_29654__$1 = state_29654;
var statearr_29665_29691 = state_29654__$1;
(statearr_29665_29691[(2)] = null);

(statearr_29665_29691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (5))){
var state_29654__$1 = state_29654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29666_29692 = state_29654__$1;
(statearr_29666_29692[(1)] = (8));

} else {
var statearr_29667_29693 = state_29654__$1;
(statearr_29667_29693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (14))){
var inst_29648 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
var statearr_29668_29694 = state_29654__$1;
(statearr_29668_29694[(2)] = inst_29648);

(statearr_29668_29694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (10))){
var inst_29640 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
var statearr_29669_29695 = state_29654__$1;
(statearr_29669_29695[(2)] = inst_29640);

(statearr_29669_29695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (8))){
var inst_29637 = cljs.core.async.close_BANG_.call(null,to);
var state_29654__$1 = state_29654;
var statearr_29670_29696 = state_29654__$1;
(statearr_29670_29696[(2)] = inst_29637);

(statearr_29670_29696[(1)] = (10));


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
});})(c__29515__auto___29682))
;
return ((function (switch__29403__auto__,c__29515__auto___29682){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_29674 = [null,null,null,null,null,null,null,null];
(statearr_29674[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_29674[(1)] = (1));

return statearr_29674;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_29654){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_29654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e29675){if((e29675 instanceof Object)){
var ex__29407__auto__ = e29675;
var statearr_29676_29697 = state_29654;
(statearr_29676_29697[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29698 = state_29654;
state_29654 = G__29698;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_29654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_29654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___29682))
})();
var state__29517__auto__ = (function (){var statearr_29677 = f__29516__auto__.call(null);
(statearr_29677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___29682);

return statearr_29677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___29682))
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
return (function (p__29886){
var vec__29887 = p__29886;
var v = cljs.core.nth.call(null,vec__29887,(0),null);
var p = cljs.core.nth.call(null,vec__29887,(1),null);
var job = vec__29887;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29515__auto___30073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___30073,res,vec__29887,v,p,job,jobs,results){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___30073,res,vec__29887,v,p,job,jobs,results){
return (function (state_29894){
var state_val_29895 = (state_29894[(1)]);
if((state_val_29895 === (1))){
var state_29894__$1 = state_29894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29894__$1,(2),res,v);
} else {
if((state_val_29895 === (2))){
var inst_29891 = (state_29894[(2)]);
var inst_29892 = cljs.core.async.close_BANG_.call(null,res);
var state_29894__$1 = (function (){var statearr_29896 = state_29894;
(statearr_29896[(7)] = inst_29891);

return statearr_29896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29894__$1,inst_29892);
} else {
return null;
}
}
});})(c__29515__auto___30073,res,vec__29887,v,p,job,jobs,results))
;
return ((function (switch__29403__auto__,c__29515__auto___30073,res,vec__29887,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_29900 = [null,null,null,null,null,null,null,null];
(statearr_29900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__);

(statearr_29900[(1)] = (1));

return statearr_29900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1 = (function (state_29894){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_29894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e29901){if((e29901 instanceof Object)){
var ex__29407__auto__ = e29901;
var statearr_29902_30074 = state_29894;
(statearr_29902_30074[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30075 = state_29894;
state_29894 = G__30075;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = function(state_29894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1.call(this,state_29894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___30073,res,vec__29887,v,p,job,jobs,results))
})();
var state__29517__auto__ = (function (){var statearr_29903 = f__29516__auto__.call(null);
(statearr_29903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___30073);

return statearr_29903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___30073,res,vec__29887,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29904){
var vec__29905 = p__29904;
var v = cljs.core.nth.call(null,vec__29905,(0),null);
var p = cljs.core.nth.call(null,vec__29905,(1),null);
var job = vec__29905;
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
var n__28227__auto___30076 = n;
var __30077 = (0);
while(true){
if((__30077 < n__28227__auto___30076)){
var G__29908_30078 = type;
var G__29908_30079__$1 = (((G__29908_30078 instanceof cljs.core.Keyword))?G__29908_30078.fqn:null);
switch (G__29908_30079__$1) {
case "compute":
var c__29515__auto___30081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30077,c__29515__auto___30081,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (__30077,c__29515__auto___30081,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async){
return (function (state_29921){
var state_val_29922 = (state_29921[(1)]);
if((state_val_29922 === (1))){
var state_29921__$1 = state_29921;
var statearr_29923_30082 = state_29921__$1;
(statearr_29923_30082[(2)] = null);

(statearr_29923_30082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (2))){
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29921__$1,(4),jobs);
} else {
if((state_val_29922 === (3))){
var inst_29919 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29921__$1,inst_29919);
} else {
if((state_val_29922 === (4))){
var inst_29911 = (state_29921[(2)]);
var inst_29912 = process.call(null,inst_29911);
var state_29921__$1 = state_29921;
if(cljs.core.truth_(inst_29912)){
var statearr_29924_30083 = state_29921__$1;
(statearr_29924_30083[(1)] = (5));

} else {
var statearr_29925_30084 = state_29921__$1;
(statearr_29925_30084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (5))){
var state_29921__$1 = state_29921;
var statearr_29926_30085 = state_29921__$1;
(statearr_29926_30085[(2)] = null);

(statearr_29926_30085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (6))){
var state_29921__$1 = state_29921;
var statearr_29927_30086 = state_29921__$1;
(statearr_29927_30086[(2)] = null);

(statearr_29927_30086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (7))){
var inst_29917 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29928_30087 = state_29921__$1;
(statearr_29928_30087[(2)] = inst_29917);

(statearr_29928_30087[(1)] = (3));


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
});})(__30077,c__29515__auto___30081,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async))
;
return ((function (__30077,switch__29403__auto__,c__29515__auto___30081,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_29932 = [null,null,null,null,null,null,null];
(statearr_29932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__);

(statearr_29932[(1)] = (1));

return statearr_29932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1 = (function (state_29921){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_29921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e29933){if((e29933 instanceof Object)){
var ex__29407__auto__ = e29933;
var statearr_29934_30088 = state_29921;
(statearr_29934_30088[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30089 = state_29921;
state_29921 = G__30089;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = function(state_29921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1.call(this,state_29921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__;
})()
;})(__30077,switch__29403__auto__,c__29515__auto___30081,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async))
})();
var state__29517__auto__ = (function (){var statearr_29935 = f__29516__auto__.call(null);
(statearr_29935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___30081);

return statearr_29935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(__30077,c__29515__auto___30081,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async))
);


break;
case "async":
var c__29515__auto___30090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30077,c__29515__auto___30090,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (__30077,c__29515__auto___30090,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async){
return (function (state_29948){
var state_val_29949 = (state_29948[(1)]);
if((state_val_29949 === (1))){
var state_29948__$1 = state_29948;
var statearr_29950_30091 = state_29948__$1;
(statearr_29950_30091[(2)] = null);

(statearr_29950_30091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (2))){
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29948__$1,(4),jobs);
} else {
if((state_val_29949 === (3))){
var inst_29946 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29948__$1,inst_29946);
} else {
if((state_val_29949 === (4))){
var inst_29938 = (state_29948[(2)]);
var inst_29939 = async.call(null,inst_29938);
var state_29948__$1 = state_29948;
if(cljs.core.truth_(inst_29939)){
var statearr_29951_30092 = state_29948__$1;
(statearr_29951_30092[(1)] = (5));

} else {
var statearr_29952_30093 = state_29948__$1;
(statearr_29952_30093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (5))){
var state_29948__$1 = state_29948;
var statearr_29953_30094 = state_29948__$1;
(statearr_29953_30094[(2)] = null);

(statearr_29953_30094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (6))){
var state_29948__$1 = state_29948;
var statearr_29954_30095 = state_29948__$1;
(statearr_29954_30095[(2)] = null);

(statearr_29954_30095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (7))){
var inst_29944 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29955_30096 = state_29948__$1;
(statearr_29955_30096[(2)] = inst_29944);

(statearr_29955_30096[(1)] = (3));


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
});})(__30077,c__29515__auto___30090,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async))
;
return ((function (__30077,switch__29403__auto__,c__29515__auto___30090,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_29959 = [null,null,null,null,null,null,null];
(statearr_29959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__);

(statearr_29959[(1)] = (1));

return statearr_29959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1 = (function (state_29948){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_29948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e29960){if((e29960 instanceof Object)){
var ex__29407__auto__ = e29960;
var statearr_29961_30097 = state_29948;
(statearr_29961_30097[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30098 = state_29948;
state_29948 = G__30098;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = function(state_29948){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1.call(this,state_29948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__;
})()
;})(__30077,switch__29403__auto__,c__29515__auto___30090,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async))
})();
var state__29517__auto__ = (function (){var statearr_29962 = f__29516__auto__.call(null);
(statearr_29962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___30090);

return statearr_29962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(__30077,c__29515__auto___30090,G__29908_30078,G__29908_30079__$1,n__28227__auto___30076,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__30099 = (__30077 + (1));
__30077 = G__30099;
continue;
} else {
}
break;
}

var c__29515__auto___30100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___30100,jobs,results,process,async){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___30100,jobs,results,process,async){
return (function (state_29984){
var state_val_29985 = (state_29984[(1)]);
if((state_val_29985 === (1))){
var state_29984__$1 = state_29984;
var statearr_29986_30101 = state_29984__$1;
(statearr_29986_30101[(2)] = null);

(statearr_29986_30101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (2))){
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29984__$1,(4),from);
} else {
if((state_val_29985 === (3))){
var inst_29982 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29984__$1,inst_29982);
} else {
if((state_val_29985 === (4))){
var inst_29965 = (state_29984[(7)]);
var inst_29965__$1 = (state_29984[(2)]);
var inst_29966 = (inst_29965__$1 == null);
var state_29984__$1 = (function (){var statearr_29987 = state_29984;
(statearr_29987[(7)] = inst_29965__$1);

return statearr_29987;
})();
if(cljs.core.truth_(inst_29966)){
var statearr_29988_30102 = state_29984__$1;
(statearr_29988_30102[(1)] = (5));

} else {
var statearr_29989_30103 = state_29984__$1;
(statearr_29989_30103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (5))){
var inst_29968 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29984__$1 = state_29984;
var statearr_29990_30104 = state_29984__$1;
(statearr_29990_30104[(2)] = inst_29968);

(statearr_29990_30104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (6))){
var inst_29970 = (state_29984[(8)]);
var inst_29965 = (state_29984[(7)]);
var inst_29970__$1 = cljs.core.async.chan.call(null,(1));
var inst_29971 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29972 = [inst_29965,inst_29970__$1];
var inst_29973 = (new cljs.core.PersistentVector(null,2,(5),inst_29971,inst_29972,null));
var state_29984__$1 = (function (){var statearr_29991 = state_29984;
(statearr_29991[(8)] = inst_29970__$1);

return statearr_29991;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29984__$1,(8),jobs,inst_29973);
} else {
if((state_val_29985 === (7))){
var inst_29980 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_29992_30105 = state_29984__$1;
(statearr_29992_30105[(2)] = inst_29980);

(statearr_29992_30105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (8))){
var inst_29970 = (state_29984[(8)]);
var inst_29975 = (state_29984[(2)]);
var state_29984__$1 = (function (){var statearr_29993 = state_29984;
(statearr_29993[(9)] = inst_29975);

return statearr_29993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29984__$1,(9),results,inst_29970);
} else {
if((state_val_29985 === (9))){
var inst_29977 = (state_29984[(2)]);
var state_29984__$1 = (function (){var statearr_29994 = state_29984;
(statearr_29994[(10)] = inst_29977);

return statearr_29994;
})();
var statearr_29995_30106 = state_29984__$1;
(statearr_29995_30106[(2)] = null);

(statearr_29995_30106[(1)] = (2));


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
});})(c__29515__auto___30100,jobs,results,process,async))
;
return ((function (switch__29403__auto__,c__29515__auto___30100,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_29999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__);

(statearr_29999[(1)] = (1));

return statearr_29999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1 = (function (state_29984){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_29984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e30000){if((e30000 instanceof Object)){
var ex__29407__auto__ = e30000;
var statearr_30001_30107 = state_29984;
(statearr_30001_30107[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30108 = state_29984;
state_29984 = G__30108;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = function(state_29984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1.call(this,state_29984);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___30100,jobs,results,process,async))
})();
var state__29517__auto__ = (function (){var statearr_30002 = f__29516__auto__.call(null);
(statearr_30002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___30100);

return statearr_30002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___30100,jobs,results,process,async))
);


var c__29515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto__,jobs,results,process,async){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto__,jobs,results,process,async){
return (function (state_30040){
var state_val_30041 = (state_30040[(1)]);
if((state_val_30041 === (7))){
var inst_30036 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30042_30109 = state_30040__$1;
(statearr_30042_30109[(2)] = inst_30036);

(statearr_30042_30109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (20))){
var state_30040__$1 = state_30040;
var statearr_30043_30110 = state_30040__$1;
(statearr_30043_30110[(2)] = null);

(statearr_30043_30110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (1))){
var state_30040__$1 = state_30040;
var statearr_30044_30111 = state_30040__$1;
(statearr_30044_30111[(2)] = null);

(statearr_30044_30111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (4))){
var inst_30005 = (state_30040[(7)]);
var inst_30005__$1 = (state_30040[(2)]);
var inst_30006 = (inst_30005__$1 == null);
var state_30040__$1 = (function (){var statearr_30045 = state_30040;
(statearr_30045[(7)] = inst_30005__$1);

return statearr_30045;
})();
if(cljs.core.truth_(inst_30006)){
var statearr_30046_30112 = state_30040__$1;
(statearr_30046_30112[(1)] = (5));

} else {
var statearr_30047_30113 = state_30040__$1;
(statearr_30047_30113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (15))){
var inst_30018 = (state_30040[(8)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30040__$1,(18),to,inst_30018);
} else {
if((state_val_30041 === (21))){
var inst_30031 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30048_30114 = state_30040__$1;
(statearr_30048_30114[(2)] = inst_30031);

(statearr_30048_30114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (13))){
var inst_30033 = (state_30040[(2)]);
var state_30040__$1 = (function (){var statearr_30049 = state_30040;
(statearr_30049[(9)] = inst_30033);

return statearr_30049;
})();
var statearr_30050_30115 = state_30040__$1;
(statearr_30050_30115[(2)] = null);

(statearr_30050_30115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (6))){
var inst_30005 = (state_30040[(7)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30040__$1,(11),inst_30005);
} else {
if((state_val_30041 === (17))){
var inst_30026 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
if(cljs.core.truth_(inst_30026)){
var statearr_30051_30116 = state_30040__$1;
(statearr_30051_30116[(1)] = (19));

} else {
var statearr_30052_30117 = state_30040__$1;
(statearr_30052_30117[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (3))){
var inst_30038 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30040__$1,inst_30038);
} else {
if((state_val_30041 === (12))){
var inst_30015 = (state_30040[(10)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30040__$1,(14),inst_30015);
} else {
if((state_val_30041 === (2))){
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30040__$1,(4),results);
} else {
if((state_val_30041 === (19))){
var state_30040__$1 = state_30040;
var statearr_30053_30118 = state_30040__$1;
(statearr_30053_30118[(2)] = null);

(statearr_30053_30118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (11))){
var inst_30015 = (state_30040[(2)]);
var state_30040__$1 = (function (){var statearr_30054 = state_30040;
(statearr_30054[(10)] = inst_30015);

return statearr_30054;
})();
var statearr_30055_30119 = state_30040__$1;
(statearr_30055_30119[(2)] = null);

(statearr_30055_30119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (9))){
var state_30040__$1 = state_30040;
var statearr_30056_30120 = state_30040__$1;
(statearr_30056_30120[(2)] = null);

(statearr_30056_30120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (5))){
var state_30040__$1 = state_30040;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30057_30121 = state_30040__$1;
(statearr_30057_30121[(1)] = (8));

} else {
var statearr_30058_30122 = state_30040__$1;
(statearr_30058_30122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (14))){
var inst_30018 = (state_30040[(8)]);
var inst_30020 = (state_30040[(11)]);
var inst_30018__$1 = (state_30040[(2)]);
var inst_30019 = (inst_30018__$1 == null);
var inst_30020__$1 = cljs.core.not.call(null,inst_30019);
var state_30040__$1 = (function (){var statearr_30059 = state_30040;
(statearr_30059[(8)] = inst_30018__$1);

(statearr_30059[(11)] = inst_30020__$1);

return statearr_30059;
})();
if(inst_30020__$1){
var statearr_30060_30123 = state_30040__$1;
(statearr_30060_30123[(1)] = (15));

} else {
var statearr_30061_30124 = state_30040__$1;
(statearr_30061_30124[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (16))){
var inst_30020 = (state_30040[(11)]);
var state_30040__$1 = state_30040;
var statearr_30062_30125 = state_30040__$1;
(statearr_30062_30125[(2)] = inst_30020);

(statearr_30062_30125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (10))){
var inst_30012 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30063_30126 = state_30040__$1;
(statearr_30063_30126[(2)] = inst_30012);

(statearr_30063_30126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (18))){
var inst_30023 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30064_30127 = state_30040__$1;
(statearr_30064_30127[(2)] = inst_30023);

(statearr_30064_30127[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (8))){
var inst_30009 = cljs.core.async.close_BANG_.call(null,to);
var state_30040__$1 = state_30040;
var statearr_30065_30128 = state_30040__$1;
(statearr_30065_30128[(2)] = inst_30009);

(statearr_30065_30128[(1)] = (10));


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
});})(c__29515__auto__,jobs,results,process,async))
;
return ((function (switch__29403__auto__,c__29515__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_30069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__);

(statearr_30069[(1)] = (1));

return statearr_30069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1 = (function (state_30040){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_30040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e30070){if((e30070 instanceof Object)){
var ex__29407__auto__ = e30070;
var statearr_30071_30129 = state_30040;
(statearr_30071_30129[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30130 = state_30040;
state_30040 = G__30130;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = function(state_30040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1.call(this,state_30040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto__,jobs,results,process,async))
})();
var state__29517__auto__ = (function (){var statearr_30072 = f__29516__auto__.call(null);
(statearr_30072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto__);

return statearr_30072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto__,jobs,results,process,async))
);

return c__29515__auto__;
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
var args30131 = [];
var len__28417__auto___30134 = arguments.length;
var i__28418__auto___30135 = (0);
while(true){
if((i__28418__auto___30135 < len__28417__auto___30134)){
args30131.push((arguments[i__28418__auto___30135]));

var G__30136 = (i__28418__auto___30135 + (1));
i__28418__auto___30135 = G__30136;
continue;
} else {
}
break;
}

var G__30133 = args30131.length;
switch (G__30133) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30131.length)].join('')));

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
var args30138 = [];
var len__28417__auto___30141 = arguments.length;
var i__28418__auto___30142 = (0);
while(true){
if((i__28418__auto___30142 < len__28417__auto___30141)){
args30138.push((arguments[i__28418__auto___30142]));

var G__30143 = (i__28418__auto___30142 + (1));
i__28418__auto___30142 = G__30143;
continue;
} else {
}
break;
}

var G__30140 = args30138.length;
switch (G__30140) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30138.length)].join('')));

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
var args30145 = [];
var len__28417__auto___30198 = arguments.length;
var i__28418__auto___30199 = (0);
while(true){
if((i__28418__auto___30199 < len__28417__auto___30198)){
args30145.push((arguments[i__28418__auto___30199]));

var G__30200 = (i__28418__auto___30199 + (1));
i__28418__auto___30199 = G__30200;
continue;
} else {
}
break;
}

var G__30147 = args30145.length;
switch (G__30147) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30145.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29515__auto___30202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___30202,tc,fc){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___30202,tc,fc){
return (function (state_30173){
var state_val_30174 = (state_30173[(1)]);
if((state_val_30174 === (7))){
var inst_30169 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30175_30203 = state_30173__$1;
(statearr_30175_30203[(2)] = inst_30169);

(statearr_30175_30203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (1))){
var state_30173__$1 = state_30173;
var statearr_30176_30204 = state_30173__$1;
(statearr_30176_30204[(2)] = null);

(statearr_30176_30204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (4))){
var inst_30150 = (state_30173[(7)]);
var inst_30150__$1 = (state_30173[(2)]);
var inst_30151 = (inst_30150__$1 == null);
var state_30173__$1 = (function (){var statearr_30177 = state_30173;
(statearr_30177[(7)] = inst_30150__$1);

return statearr_30177;
})();
if(cljs.core.truth_(inst_30151)){
var statearr_30178_30205 = state_30173__$1;
(statearr_30178_30205[(1)] = (5));

} else {
var statearr_30179_30206 = state_30173__$1;
(statearr_30179_30206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (13))){
var state_30173__$1 = state_30173;
var statearr_30180_30207 = state_30173__$1;
(statearr_30180_30207[(2)] = null);

(statearr_30180_30207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (6))){
var inst_30150 = (state_30173[(7)]);
var inst_30156 = p.call(null,inst_30150);
var state_30173__$1 = state_30173;
if(cljs.core.truth_(inst_30156)){
var statearr_30181_30208 = state_30173__$1;
(statearr_30181_30208[(1)] = (9));

} else {
var statearr_30182_30209 = state_30173__$1;
(statearr_30182_30209[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (3))){
var inst_30171 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30173__$1,inst_30171);
} else {
if((state_val_30174 === (12))){
var state_30173__$1 = state_30173;
var statearr_30183_30210 = state_30173__$1;
(statearr_30183_30210[(2)] = null);

(statearr_30183_30210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (2))){
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30173__$1,(4),ch);
} else {
if((state_val_30174 === (11))){
var inst_30150 = (state_30173[(7)]);
var inst_30160 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30173__$1,(8),inst_30160,inst_30150);
} else {
if((state_val_30174 === (9))){
var state_30173__$1 = state_30173;
var statearr_30184_30211 = state_30173__$1;
(statearr_30184_30211[(2)] = tc);

(statearr_30184_30211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (5))){
var inst_30153 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30154 = cljs.core.async.close_BANG_.call(null,fc);
var state_30173__$1 = (function (){var statearr_30185 = state_30173;
(statearr_30185[(8)] = inst_30153);

return statearr_30185;
})();
var statearr_30186_30212 = state_30173__$1;
(statearr_30186_30212[(2)] = inst_30154);

(statearr_30186_30212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (14))){
var inst_30167 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30187_30213 = state_30173__$1;
(statearr_30187_30213[(2)] = inst_30167);

(statearr_30187_30213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (10))){
var state_30173__$1 = state_30173;
var statearr_30188_30214 = state_30173__$1;
(statearr_30188_30214[(2)] = fc);

(statearr_30188_30214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (8))){
var inst_30162 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
if(cljs.core.truth_(inst_30162)){
var statearr_30189_30215 = state_30173__$1;
(statearr_30189_30215[(1)] = (12));

} else {
var statearr_30190_30216 = state_30173__$1;
(statearr_30190_30216[(1)] = (13));

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
});})(c__29515__auto___30202,tc,fc))
;
return ((function (switch__29403__auto__,c__29515__auto___30202,tc,fc){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_30194 = [null,null,null,null,null,null,null,null,null];
(statearr_30194[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_30194[(1)] = (1));

return statearr_30194;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_30173){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_30173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e30195){if((e30195 instanceof Object)){
var ex__29407__auto__ = e30195;
var statearr_30196_30217 = state_30173;
(statearr_30196_30217[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30218 = state_30173;
state_30173 = G__30218;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_30173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_30173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___30202,tc,fc))
})();
var state__29517__auto__ = (function (){var statearr_30197 = f__29516__auto__.call(null);
(statearr_30197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___30202);

return statearr_30197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___30202,tc,fc))
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
var c__29515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto__){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto__){
return (function (state_30282){
var state_val_30283 = (state_30282[(1)]);
if((state_val_30283 === (7))){
var inst_30278 = (state_30282[(2)]);
var state_30282__$1 = state_30282;
var statearr_30284_30305 = state_30282__$1;
(statearr_30284_30305[(2)] = inst_30278);

(statearr_30284_30305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (1))){
var inst_30262 = init;
var state_30282__$1 = (function (){var statearr_30285 = state_30282;
(statearr_30285[(7)] = inst_30262);

return statearr_30285;
})();
var statearr_30286_30306 = state_30282__$1;
(statearr_30286_30306[(2)] = null);

(statearr_30286_30306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (4))){
var inst_30265 = (state_30282[(8)]);
var inst_30265__$1 = (state_30282[(2)]);
var inst_30266 = (inst_30265__$1 == null);
var state_30282__$1 = (function (){var statearr_30287 = state_30282;
(statearr_30287[(8)] = inst_30265__$1);

return statearr_30287;
})();
if(cljs.core.truth_(inst_30266)){
var statearr_30288_30307 = state_30282__$1;
(statearr_30288_30307[(1)] = (5));

} else {
var statearr_30289_30308 = state_30282__$1;
(statearr_30289_30308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (6))){
var inst_30262 = (state_30282[(7)]);
var inst_30269 = (state_30282[(9)]);
var inst_30265 = (state_30282[(8)]);
var inst_30269__$1 = f.call(null,inst_30262,inst_30265);
var inst_30270 = cljs.core.reduced_QMARK_.call(null,inst_30269__$1);
var state_30282__$1 = (function (){var statearr_30290 = state_30282;
(statearr_30290[(9)] = inst_30269__$1);

return statearr_30290;
})();
if(inst_30270){
var statearr_30291_30309 = state_30282__$1;
(statearr_30291_30309[(1)] = (8));

} else {
var statearr_30292_30310 = state_30282__$1;
(statearr_30292_30310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (3))){
var inst_30280 = (state_30282[(2)]);
var state_30282__$1 = state_30282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30282__$1,inst_30280);
} else {
if((state_val_30283 === (2))){
var state_30282__$1 = state_30282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30282__$1,(4),ch);
} else {
if((state_val_30283 === (9))){
var inst_30269 = (state_30282[(9)]);
var inst_30262 = inst_30269;
var state_30282__$1 = (function (){var statearr_30293 = state_30282;
(statearr_30293[(7)] = inst_30262);

return statearr_30293;
})();
var statearr_30294_30311 = state_30282__$1;
(statearr_30294_30311[(2)] = null);

(statearr_30294_30311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (5))){
var inst_30262 = (state_30282[(7)]);
var state_30282__$1 = state_30282;
var statearr_30295_30312 = state_30282__$1;
(statearr_30295_30312[(2)] = inst_30262);

(statearr_30295_30312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (10))){
var inst_30276 = (state_30282[(2)]);
var state_30282__$1 = state_30282;
var statearr_30296_30313 = state_30282__$1;
(statearr_30296_30313[(2)] = inst_30276);

(statearr_30296_30313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (8))){
var inst_30269 = (state_30282[(9)]);
var inst_30272 = cljs.core.deref.call(null,inst_30269);
var state_30282__$1 = state_30282;
var statearr_30297_30314 = state_30282__$1;
(statearr_30297_30314[(2)] = inst_30272);

(statearr_30297_30314[(1)] = (10));


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
});})(c__29515__auto__))
;
return ((function (switch__29403__auto__,c__29515__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29404__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29404__auto____0 = (function (){
var statearr_30301 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30301[(0)] = cljs$core$async$reduce_$_state_machine__29404__auto__);

(statearr_30301[(1)] = (1));

return statearr_30301;
});
var cljs$core$async$reduce_$_state_machine__29404__auto____1 = (function (state_30282){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_30282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e30302){if((e30302 instanceof Object)){
var ex__29407__auto__ = e30302;
var statearr_30303_30315 = state_30282;
(statearr_30303_30315[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30316 = state_30282;
state_30282 = G__30316;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29404__auto__ = function(state_30282){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29404__auto____1.call(this,state_30282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29404__auto____0;
cljs$core$async$reduce_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29404__auto____1;
return cljs$core$async$reduce_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto__))
})();
var state__29517__auto__ = (function (){var statearr_30304 = f__29516__auto__.call(null);
(statearr_30304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto__);

return statearr_30304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto__))
);

return c__29515__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto__,f__$1){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto__,f__$1){
return (function (state_30336){
var state_val_30337 = (state_30336[(1)]);
if((state_val_30337 === (1))){
var inst_30331 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30336__$1,(2),inst_30331);
} else {
if((state_val_30337 === (2))){
var inst_30333 = (state_30336[(2)]);
var inst_30334 = f__$1.call(null,inst_30333);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30336__$1,inst_30334);
} else {
return null;
}
}
});})(c__29515__auto__,f__$1))
;
return ((function (switch__29403__auto__,c__29515__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29404__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29404__auto____0 = (function (){
var statearr_30341 = [null,null,null,null,null,null,null];
(statearr_30341[(0)] = cljs$core$async$transduce_$_state_machine__29404__auto__);

(statearr_30341[(1)] = (1));

return statearr_30341;
});
var cljs$core$async$transduce_$_state_machine__29404__auto____1 = (function (state_30336){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_30336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e30342){if((e30342 instanceof Object)){
var ex__29407__auto__ = e30342;
var statearr_30343_30345 = state_30336;
(statearr_30343_30345[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30346 = state_30336;
state_30336 = G__30346;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29404__auto__ = function(state_30336){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29404__auto____1.call(this,state_30336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29404__auto____0;
cljs$core$async$transduce_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29404__auto____1;
return cljs$core$async$transduce_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto__,f__$1))
})();
var state__29517__auto__ = (function (){var statearr_30344 = f__29516__auto__.call(null);
(statearr_30344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto__);

return statearr_30344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto__,f__$1))
);

return c__29515__auto__;
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
var args30347 = [];
var len__28417__auto___30399 = arguments.length;
var i__28418__auto___30400 = (0);
while(true){
if((i__28418__auto___30400 < len__28417__auto___30399)){
args30347.push((arguments[i__28418__auto___30400]));

var G__30401 = (i__28418__auto___30400 + (1));
i__28418__auto___30400 = G__30401;
continue;
} else {
}
break;
}

var G__30349 = args30347.length;
switch (G__30349) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30347.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto__){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto__){
return (function (state_30374){
var state_val_30375 = (state_30374[(1)]);
if((state_val_30375 === (7))){
var inst_30356 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30376_30403 = state_30374__$1;
(statearr_30376_30403[(2)] = inst_30356);

(statearr_30376_30403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (1))){
var inst_30350 = cljs.core.seq.call(null,coll);
var inst_30351 = inst_30350;
var state_30374__$1 = (function (){var statearr_30377 = state_30374;
(statearr_30377[(7)] = inst_30351);

return statearr_30377;
})();
var statearr_30378_30404 = state_30374__$1;
(statearr_30378_30404[(2)] = null);

(statearr_30378_30404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (4))){
var inst_30351 = (state_30374[(7)]);
var inst_30354 = cljs.core.first.call(null,inst_30351);
var state_30374__$1 = state_30374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30374__$1,(7),ch,inst_30354);
} else {
if((state_val_30375 === (13))){
var inst_30368 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30379_30405 = state_30374__$1;
(statearr_30379_30405[(2)] = inst_30368);

(statearr_30379_30405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (6))){
var inst_30359 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30359)){
var statearr_30380_30406 = state_30374__$1;
(statearr_30380_30406[(1)] = (8));

} else {
var statearr_30381_30407 = state_30374__$1;
(statearr_30381_30407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (3))){
var inst_30372 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30374__$1,inst_30372);
} else {
if((state_val_30375 === (12))){
var state_30374__$1 = state_30374;
var statearr_30382_30408 = state_30374__$1;
(statearr_30382_30408[(2)] = null);

(statearr_30382_30408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (2))){
var inst_30351 = (state_30374[(7)]);
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30351)){
var statearr_30383_30409 = state_30374__$1;
(statearr_30383_30409[(1)] = (4));

} else {
var statearr_30384_30410 = state_30374__$1;
(statearr_30384_30410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (11))){
var inst_30365 = cljs.core.async.close_BANG_.call(null,ch);
var state_30374__$1 = state_30374;
var statearr_30385_30411 = state_30374__$1;
(statearr_30385_30411[(2)] = inst_30365);

(statearr_30385_30411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (9))){
var state_30374__$1 = state_30374;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30386_30412 = state_30374__$1;
(statearr_30386_30412[(1)] = (11));

} else {
var statearr_30387_30413 = state_30374__$1;
(statearr_30387_30413[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (5))){
var inst_30351 = (state_30374[(7)]);
var state_30374__$1 = state_30374;
var statearr_30388_30414 = state_30374__$1;
(statearr_30388_30414[(2)] = inst_30351);

(statearr_30388_30414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (10))){
var inst_30370 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30389_30415 = state_30374__$1;
(statearr_30389_30415[(2)] = inst_30370);

(statearr_30389_30415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (8))){
var inst_30351 = (state_30374[(7)]);
var inst_30361 = cljs.core.next.call(null,inst_30351);
var inst_30351__$1 = inst_30361;
var state_30374__$1 = (function (){var statearr_30390 = state_30374;
(statearr_30390[(7)] = inst_30351__$1);

return statearr_30390;
})();
var statearr_30391_30416 = state_30374__$1;
(statearr_30391_30416[(2)] = null);

(statearr_30391_30416[(1)] = (2));


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
});})(c__29515__auto__))
;
return ((function (switch__29403__auto__,c__29515__auto__){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_30395 = [null,null,null,null,null,null,null,null];
(statearr_30395[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_30395[(1)] = (1));

return statearr_30395;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_30374){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_30374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e30396){if((e30396 instanceof Object)){
var ex__29407__auto__ = e30396;
var statearr_30397_30417 = state_30374;
(statearr_30397_30417[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30418 = state_30374;
state_30374 = G__30418;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_30374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_30374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto__))
})();
var state__29517__auto__ = (function (){var statearr_30398 = f__29516__auto__.call(null);
(statearr_30398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto__);

return statearr_30398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto__))
);

return c__29515__auto__;
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
var x__27972__auto__ = (((_ == null))?null:_);
var m__27973__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,_);
} else {
var m__27973__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,_);
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
var x__27972__auto__ = (((m == null))?null:m);
var m__27973__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27973__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__27972__auto__ = (((m == null))?null:m);
var m__27973__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,m,ch);
} else {
var m__27973__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,m,ch);
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
var x__27972__auto__ = (((m == null))?null:m);
var m__27973__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,m);
} else {
var m__27973__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async30644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30644 = (function (ch,cs,meta30645){
this.ch = ch;
this.cs = cs;
this.meta30645 = meta30645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30646,meta30645__$1){
var self__ = this;
var _30646__$1 = this;
return (new cljs.core.async.t_cljs$core$async30644(self__.ch,self__.cs,meta30645__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30646){
var self__ = this;
var _30646__$1 = this;
return self__.meta30645;
});})(cs))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30644.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30645","meta30645",490756499,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30644";

cljs.core.async.t_cljs$core$async30644.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async/t_cljs$core$async30644");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30644 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30644(ch__$1,cs__$1,meta30645){
return (new cljs.core.async.t_cljs$core$async30644(ch__$1,cs__$1,meta30645));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30644(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29515__auto___30869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___30869,cs,m,dchan,dctr,done){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___30869,cs,m,dchan,dctr,done){
return (function (state_30781){
var state_val_30782 = (state_30781[(1)]);
if((state_val_30782 === (7))){
var inst_30777 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30783_30870 = state_30781__$1;
(statearr_30783_30870[(2)] = inst_30777);

(statearr_30783_30870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (20))){
var inst_30680 = (state_30781[(7)]);
var inst_30692 = cljs.core.first.call(null,inst_30680);
var inst_30693 = cljs.core.nth.call(null,inst_30692,(0),null);
var inst_30694 = cljs.core.nth.call(null,inst_30692,(1),null);
var state_30781__$1 = (function (){var statearr_30784 = state_30781;
(statearr_30784[(8)] = inst_30693);

return statearr_30784;
})();
if(cljs.core.truth_(inst_30694)){
var statearr_30785_30871 = state_30781__$1;
(statearr_30785_30871[(1)] = (22));

} else {
var statearr_30786_30872 = state_30781__$1;
(statearr_30786_30872[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (27))){
var inst_30722 = (state_30781[(9)]);
var inst_30724 = (state_30781[(10)]);
var inst_30649 = (state_30781[(11)]);
var inst_30729 = (state_30781[(12)]);
var inst_30729__$1 = cljs.core._nth.call(null,inst_30722,inst_30724);
var inst_30730 = cljs.core.async.put_BANG_.call(null,inst_30729__$1,inst_30649,done);
var state_30781__$1 = (function (){var statearr_30787 = state_30781;
(statearr_30787[(12)] = inst_30729__$1);

return statearr_30787;
})();
if(cljs.core.truth_(inst_30730)){
var statearr_30788_30873 = state_30781__$1;
(statearr_30788_30873[(1)] = (30));

} else {
var statearr_30789_30874 = state_30781__$1;
(statearr_30789_30874[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (1))){
var state_30781__$1 = state_30781;
var statearr_30790_30875 = state_30781__$1;
(statearr_30790_30875[(2)] = null);

(statearr_30790_30875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (24))){
var inst_30680 = (state_30781[(7)]);
var inst_30699 = (state_30781[(2)]);
var inst_30700 = cljs.core.next.call(null,inst_30680);
var inst_30658 = inst_30700;
var inst_30659 = null;
var inst_30660 = (0);
var inst_30661 = (0);
var state_30781__$1 = (function (){var statearr_30791 = state_30781;
(statearr_30791[(13)] = inst_30661);

(statearr_30791[(14)] = inst_30699);

(statearr_30791[(15)] = inst_30659);

(statearr_30791[(16)] = inst_30658);

(statearr_30791[(17)] = inst_30660);

return statearr_30791;
})();
var statearr_30792_30876 = state_30781__$1;
(statearr_30792_30876[(2)] = null);

(statearr_30792_30876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (39))){
var state_30781__$1 = state_30781;
var statearr_30796_30877 = state_30781__$1;
(statearr_30796_30877[(2)] = null);

(statearr_30796_30877[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (4))){
var inst_30649 = (state_30781[(11)]);
var inst_30649__$1 = (state_30781[(2)]);
var inst_30650 = (inst_30649__$1 == null);
var state_30781__$1 = (function (){var statearr_30797 = state_30781;
(statearr_30797[(11)] = inst_30649__$1);

return statearr_30797;
})();
if(cljs.core.truth_(inst_30650)){
var statearr_30798_30878 = state_30781__$1;
(statearr_30798_30878[(1)] = (5));

} else {
var statearr_30799_30879 = state_30781__$1;
(statearr_30799_30879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (15))){
var inst_30661 = (state_30781[(13)]);
var inst_30659 = (state_30781[(15)]);
var inst_30658 = (state_30781[(16)]);
var inst_30660 = (state_30781[(17)]);
var inst_30676 = (state_30781[(2)]);
var inst_30677 = (inst_30661 + (1));
var tmp30793 = inst_30659;
var tmp30794 = inst_30658;
var tmp30795 = inst_30660;
var inst_30658__$1 = tmp30794;
var inst_30659__$1 = tmp30793;
var inst_30660__$1 = tmp30795;
var inst_30661__$1 = inst_30677;
var state_30781__$1 = (function (){var statearr_30800 = state_30781;
(statearr_30800[(13)] = inst_30661__$1);

(statearr_30800[(15)] = inst_30659__$1);

(statearr_30800[(18)] = inst_30676);

(statearr_30800[(16)] = inst_30658__$1);

(statearr_30800[(17)] = inst_30660__$1);

return statearr_30800;
})();
var statearr_30801_30880 = state_30781__$1;
(statearr_30801_30880[(2)] = null);

(statearr_30801_30880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (21))){
var inst_30703 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30805_30881 = state_30781__$1;
(statearr_30805_30881[(2)] = inst_30703);

(statearr_30805_30881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (31))){
var inst_30729 = (state_30781[(12)]);
var inst_30733 = done.call(null,null);
var inst_30734 = cljs.core.async.untap_STAR_.call(null,m,inst_30729);
var state_30781__$1 = (function (){var statearr_30806 = state_30781;
(statearr_30806[(19)] = inst_30733);

return statearr_30806;
})();
var statearr_30807_30882 = state_30781__$1;
(statearr_30807_30882[(2)] = inst_30734);

(statearr_30807_30882[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (32))){
var inst_30722 = (state_30781[(9)]);
var inst_30721 = (state_30781[(20)]);
var inst_30724 = (state_30781[(10)]);
var inst_30723 = (state_30781[(21)]);
var inst_30736 = (state_30781[(2)]);
var inst_30737 = (inst_30724 + (1));
var tmp30802 = inst_30722;
var tmp30803 = inst_30721;
var tmp30804 = inst_30723;
var inst_30721__$1 = tmp30803;
var inst_30722__$1 = tmp30802;
var inst_30723__$1 = tmp30804;
var inst_30724__$1 = inst_30737;
var state_30781__$1 = (function (){var statearr_30808 = state_30781;
(statearr_30808[(9)] = inst_30722__$1);

(statearr_30808[(20)] = inst_30721__$1);

(statearr_30808[(22)] = inst_30736);

(statearr_30808[(10)] = inst_30724__$1);

(statearr_30808[(21)] = inst_30723__$1);

return statearr_30808;
})();
var statearr_30809_30883 = state_30781__$1;
(statearr_30809_30883[(2)] = null);

(statearr_30809_30883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (40))){
var inst_30749 = (state_30781[(23)]);
var inst_30753 = done.call(null,null);
var inst_30754 = cljs.core.async.untap_STAR_.call(null,m,inst_30749);
var state_30781__$1 = (function (){var statearr_30810 = state_30781;
(statearr_30810[(24)] = inst_30753);

return statearr_30810;
})();
var statearr_30811_30884 = state_30781__$1;
(statearr_30811_30884[(2)] = inst_30754);

(statearr_30811_30884[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (33))){
var inst_30740 = (state_30781[(25)]);
var inst_30742 = cljs.core.chunked_seq_QMARK_.call(null,inst_30740);
var state_30781__$1 = state_30781;
if(inst_30742){
var statearr_30812_30885 = state_30781__$1;
(statearr_30812_30885[(1)] = (36));

} else {
var statearr_30813_30886 = state_30781__$1;
(statearr_30813_30886[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (13))){
var inst_30670 = (state_30781[(26)]);
var inst_30673 = cljs.core.async.close_BANG_.call(null,inst_30670);
var state_30781__$1 = state_30781;
var statearr_30814_30887 = state_30781__$1;
(statearr_30814_30887[(2)] = inst_30673);

(statearr_30814_30887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (22))){
var inst_30693 = (state_30781[(8)]);
var inst_30696 = cljs.core.async.close_BANG_.call(null,inst_30693);
var state_30781__$1 = state_30781;
var statearr_30815_30888 = state_30781__$1;
(statearr_30815_30888[(2)] = inst_30696);

(statearr_30815_30888[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (36))){
var inst_30740 = (state_30781[(25)]);
var inst_30744 = cljs.core.chunk_first.call(null,inst_30740);
var inst_30745 = cljs.core.chunk_rest.call(null,inst_30740);
var inst_30746 = cljs.core.count.call(null,inst_30744);
var inst_30721 = inst_30745;
var inst_30722 = inst_30744;
var inst_30723 = inst_30746;
var inst_30724 = (0);
var state_30781__$1 = (function (){var statearr_30816 = state_30781;
(statearr_30816[(9)] = inst_30722);

(statearr_30816[(20)] = inst_30721);

(statearr_30816[(10)] = inst_30724);

(statearr_30816[(21)] = inst_30723);

return statearr_30816;
})();
var statearr_30817_30889 = state_30781__$1;
(statearr_30817_30889[(2)] = null);

(statearr_30817_30889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (41))){
var inst_30740 = (state_30781[(25)]);
var inst_30756 = (state_30781[(2)]);
var inst_30757 = cljs.core.next.call(null,inst_30740);
var inst_30721 = inst_30757;
var inst_30722 = null;
var inst_30723 = (0);
var inst_30724 = (0);
var state_30781__$1 = (function (){var statearr_30818 = state_30781;
(statearr_30818[(9)] = inst_30722);

(statearr_30818[(20)] = inst_30721);

(statearr_30818[(10)] = inst_30724);

(statearr_30818[(21)] = inst_30723);

(statearr_30818[(27)] = inst_30756);

return statearr_30818;
})();
var statearr_30819_30890 = state_30781__$1;
(statearr_30819_30890[(2)] = null);

(statearr_30819_30890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (43))){
var state_30781__$1 = state_30781;
var statearr_30820_30891 = state_30781__$1;
(statearr_30820_30891[(2)] = null);

(statearr_30820_30891[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (29))){
var inst_30765 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30821_30892 = state_30781__$1;
(statearr_30821_30892[(2)] = inst_30765);

(statearr_30821_30892[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (44))){
var inst_30774 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30822 = state_30781;
(statearr_30822[(28)] = inst_30774);

return statearr_30822;
})();
var statearr_30823_30893 = state_30781__$1;
(statearr_30823_30893[(2)] = null);

(statearr_30823_30893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (6))){
var inst_30713 = (state_30781[(29)]);
var inst_30712 = cljs.core.deref.call(null,cs);
var inst_30713__$1 = cljs.core.keys.call(null,inst_30712);
var inst_30714 = cljs.core.count.call(null,inst_30713__$1);
var inst_30715 = cljs.core.reset_BANG_.call(null,dctr,inst_30714);
var inst_30720 = cljs.core.seq.call(null,inst_30713__$1);
var inst_30721 = inst_30720;
var inst_30722 = null;
var inst_30723 = (0);
var inst_30724 = (0);
var state_30781__$1 = (function (){var statearr_30824 = state_30781;
(statearr_30824[(30)] = inst_30715);

(statearr_30824[(9)] = inst_30722);

(statearr_30824[(20)] = inst_30721);

(statearr_30824[(10)] = inst_30724);

(statearr_30824[(21)] = inst_30723);

(statearr_30824[(29)] = inst_30713__$1);

return statearr_30824;
})();
var statearr_30825_30894 = state_30781__$1;
(statearr_30825_30894[(2)] = null);

(statearr_30825_30894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (28))){
var inst_30740 = (state_30781[(25)]);
var inst_30721 = (state_30781[(20)]);
var inst_30740__$1 = cljs.core.seq.call(null,inst_30721);
var state_30781__$1 = (function (){var statearr_30826 = state_30781;
(statearr_30826[(25)] = inst_30740__$1);

return statearr_30826;
})();
if(inst_30740__$1){
var statearr_30827_30895 = state_30781__$1;
(statearr_30827_30895[(1)] = (33));

} else {
var statearr_30828_30896 = state_30781__$1;
(statearr_30828_30896[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (25))){
var inst_30724 = (state_30781[(10)]);
var inst_30723 = (state_30781[(21)]);
var inst_30726 = (inst_30724 < inst_30723);
var inst_30727 = inst_30726;
var state_30781__$1 = state_30781;
if(cljs.core.truth_(inst_30727)){
var statearr_30829_30897 = state_30781__$1;
(statearr_30829_30897[(1)] = (27));

} else {
var statearr_30830_30898 = state_30781__$1;
(statearr_30830_30898[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (34))){
var state_30781__$1 = state_30781;
var statearr_30831_30899 = state_30781__$1;
(statearr_30831_30899[(2)] = null);

(statearr_30831_30899[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (17))){
var state_30781__$1 = state_30781;
var statearr_30832_30900 = state_30781__$1;
(statearr_30832_30900[(2)] = null);

(statearr_30832_30900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (3))){
var inst_30779 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30781__$1,inst_30779);
} else {
if((state_val_30782 === (12))){
var inst_30708 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30833_30901 = state_30781__$1;
(statearr_30833_30901[(2)] = inst_30708);

(statearr_30833_30901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (2))){
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(4),ch);
} else {
if((state_val_30782 === (23))){
var state_30781__$1 = state_30781;
var statearr_30834_30902 = state_30781__$1;
(statearr_30834_30902[(2)] = null);

(statearr_30834_30902[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (35))){
var inst_30763 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30835_30903 = state_30781__$1;
(statearr_30835_30903[(2)] = inst_30763);

(statearr_30835_30903[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (19))){
var inst_30680 = (state_30781[(7)]);
var inst_30684 = cljs.core.chunk_first.call(null,inst_30680);
var inst_30685 = cljs.core.chunk_rest.call(null,inst_30680);
var inst_30686 = cljs.core.count.call(null,inst_30684);
var inst_30658 = inst_30685;
var inst_30659 = inst_30684;
var inst_30660 = inst_30686;
var inst_30661 = (0);
var state_30781__$1 = (function (){var statearr_30836 = state_30781;
(statearr_30836[(13)] = inst_30661);

(statearr_30836[(15)] = inst_30659);

(statearr_30836[(16)] = inst_30658);

(statearr_30836[(17)] = inst_30660);

return statearr_30836;
})();
var statearr_30837_30904 = state_30781__$1;
(statearr_30837_30904[(2)] = null);

(statearr_30837_30904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (11))){
var inst_30658 = (state_30781[(16)]);
var inst_30680 = (state_30781[(7)]);
var inst_30680__$1 = cljs.core.seq.call(null,inst_30658);
var state_30781__$1 = (function (){var statearr_30838 = state_30781;
(statearr_30838[(7)] = inst_30680__$1);

return statearr_30838;
})();
if(inst_30680__$1){
var statearr_30839_30905 = state_30781__$1;
(statearr_30839_30905[(1)] = (16));

} else {
var statearr_30840_30906 = state_30781__$1;
(statearr_30840_30906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (9))){
var inst_30710 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30841_30907 = state_30781__$1;
(statearr_30841_30907[(2)] = inst_30710);

(statearr_30841_30907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (5))){
var inst_30656 = cljs.core.deref.call(null,cs);
var inst_30657 = cljs.core.seq.call(null,inst_30656);
var inst_30658 = inst_30657;
var inst_30659 = null;
var inst_30660 = (0);
var inst_30661 = (0);
var state_30781__$1 = (function (){var statearr_30842 = state_30781;
(statearr_30842[(13)] = inst_30661);

(statearr_30842[(15)] = inst_30659);

(statearr_30842[(16)] = inst_30658);

(statearr_30842[(17)] = inst_30660);

return statearr_30842;
})();
var statearr_30843_30908 = state_30781__$1;
(statearr_30843_30908[(2)] = null);

(statearr_30843_30908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (14))){
var state_30781__$1 = state_30781;
var statearr_30844_30909 = state_30781__$1;
(statearr_30844_30909[(2)] = null);

(statearr_30844_30909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (45))){
var inst_30771 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30845_30910 = state_30781__$1;
(statearr_30845_30910[(2)] = inst_30771);

(statearr_30845_30910[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (26))){
var inst_30713 = (state_30781[(29)]);
var inst_30767 = (state_30781[(2)]);
var inst_30768 = cljs.core.seq.call(null,inst_30713);
var state_30781__$1 = (function (){var statearr_30846 = state_30781;
(statearr_30846[(31)] = inst_30767);

return statearr_30846;
})();
if(inst_30768){
var statearr_30847_30911 = state_30781__$1;
(statearr_30847_30911[(1)] = (42));

} else {
var statearr_30848_30912 = state_30781__$1;
(statearr_30848_30912[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (16))){
var inst_30680 = (state_30781[(7)]);
var inst_30682 = cljs.core.chunked_seq_QMARK_.call(null,inst_30680);
var state_30781__$1 = state_30781;
if(inst_30682){
var statearr_30849_30913 = state_30781__$1;
(statearr_30849_30913[(1)] = (19));

} else {
var statearr_30850_30914 = state_30781__$1;
(statearr_30850_30914[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (38))){
var inst_30760 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30851_30915 = state_30781__$1;
(statearr_30851_30915[(2)] = inst_30760);

(statearr_30851_30915[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (30))){
var state_30781__$1 = state_30781;
var statearr_30852_30916 = state_30781__$1;
(statearr_30852_30916[(2)] = null);

(statearr_30852_30916[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (10))){
var inst_30661 = (state_30781[(13)]);
var inst_30659 = (state_30781[(15)]);
var inst_30669 = cljs.core._nth.call(null,inst_30659,inst_30661);
var inst_30670 = cljs.core.nth.call(null,inst_30669,(0),null);
var inst_30671 = cljs.core.nth.call(null,inst_30669,(1),null);
var state_30781__$1 = (function (){var statearr_30853 = state_30781;
(statearr_30853[(26)] = inst_30670);

return statearr_30853;
})();
if(cljs.core.truth_(inst_30671)){
var statearr_30854_30917 = state_30781__$1;
(statearr_30854_30917[(1)] = (13));

} else {
var statearr_30855_30918 = state_30781__$1;
(statearr_30855_30918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (18))){
var inst_30706 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30856_30919 = state_30781__$1;
(statearr_30856_30919[(2)] = inst_30706);

(statearr_30856_30919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (42))){
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(45),dchan);
} else {
if((state_val_30782 === (37))){
var inst_30740 = (state_30781[(25)]);
var inst_30649 = (state_30781[(11)]);
var inst_30749 = (state_30781[(23)]);
var inst_30749__$1 = cljs.core.first.call(null,inst_30740);
var inst_30750 = cljs.core.async.put_BANG_.call(null,inst_30749__$1,inst_30649,done);
var state_30781__$1 = (function (){var statearr_30857 = state_30781;
(statearr_30857[(23)] = inst_30749__$1);

return statearr_30857;
})();
if(cljs.core.truth_(inst_30750)){
var statearr_30858_30920 = state_30781__$1;
(statearr_30858_30920[(1)] = (39));

} else {
var statearr_30859_30921 = state_30781__$1;
(statearr_30859_30921[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (8))){
var inst_30661 = (state_30781[(13)]);
var inst_30660 = (state_30781[(17)]);
var inst_30663 = (inst_30661 < inst_30660);
var inst_30664 = inst_30663;
var state_30781__$1 = state_30781;
if(cljs.core.truth_(inst_30664)){
var statearr_30860_30922 = state_30781__$1;
(statearr_30860_30922[(1)] = (10));

} else {
var statearr_30861_30923 = state_30781__$1;
(statearr_30861_30923[(1)] = (11));

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
});})(c__29515__auto___30869,cs,m,dchan,dctr,done))
;
return ((function (switch__29403__auto__,c__29515__auto___30869,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29404__auto__ = null;
var cljs$core$async$mult_$_state_machine__29404__auto____0 = (function (){
var statearr_30865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30865[(0)] = cljs$core$async$mult_$_state_machine__29404__auto__);

(statearr_30865[(1)] = (1));

return statearr_30865;
});
var cljs$core$async$mult_$_state_machine__29404__auto____1 = (function (state_30781){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_30781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e30866){if((e30866 instanceof Object)){
var ex__29407__auto__ = e30866;
var statearr_30867_30924 = state_30781;
(statearr_30867_30924[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30925 = state_30781;
state_30781 = G__30925;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29404__auto__ = function(state_30781){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29404__auto____1.call(this,state_30781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29404__auto____0;
cljs$core$async$mult_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29404__auto____1;
return cljs$core$async$mult_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___30869,cs,m,dchan,dctr,done))
})();
var state__29517__auto__ = (function (){var statearr_30868 = f__29516__auto__.call(null);
(statearr_30868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___30869);

return statearr_30868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___30869,cs,m,dchan,dctr,done))
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
var args30926 = [];
var len__28417__auto___30929 = arguments.length;
var i__28418__auto___30930 = (0);
while(true){
if((i__28418__auto___30930 < len__28417__auto___30929)){
args30926.push((arguments[i__28418__auto___30930]));

var G__30931 = (i__28418__auto___30930 + (1));
i__28418__auto___30930 = G__30931;
continue;
} else {
}
break;
}

var G__30928 = args30926.length;
switch (G__30928) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30926.length)].join('')));

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
var x__27972__auto__ = (((m == null))?null:m);
var m__27973__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,m,ch);
} else {
var m__27973__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,m,ch);
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
var x__27972__auto__ = (((m == null))?null:m);
var m__27973__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,m,ch);
} else {
var m__27973__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,m,ch);
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
var x__27972__auto__ = (((m == null))?null:m);
var m__27973__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,m);
} else {
var m__27973__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,m);
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
var x__27972__auto__ = (((m == null))?null:m);
var m__27973__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,m,state_map);
} else {
var m__27973__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,m,state_map);
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
var x__27972__auto__ = (((m == null))?null:m);
var m__27973__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,m,mode);
} else {
var m__27973__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28424__auto__ = [];
var len__28417__auto___30943 = arguments.length;
var i__28418__auto___30944 = (0);
while(true){
if((i__28418__auto___30944 < len__28417__auto___30943)){
args__28424__auto__.push((arguments[i__28418__auto___30944]));

var G__30945 = (i__28418__auto___30944 + (1));
i__28418__auto___30944 = G__30945;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((3) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28425__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30937){
var map__30938 = p__30937;
var map__30938__$1 = ((((!((map__30938 == null)))?((((map__30938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30938):map__30938);
var opts = map__30938__$1;
var statearr_30940_30946 = state;
(statearr_30940_30946[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30938,map__30938__$1,opts){
return (function (val){
var statearr_30941_30947 = state;
(statearr_30941_30947[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30938,map__30938__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30942_30948 = state;
(statearr_30942_30948[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30933){
var G__30934 = cljs.core.first.call(null,seq30933);
var seq30933__$1 = cljs.core.next.call(null,seq30933);
var G__30935 = cljs.core.first.call(null,seq30933__$1);
var seq30933__$2 = cljs.core.next.call(null,seq30933__$1);
var G__30936 = cljs.core.first.call(null,seq30933__$2);
var seq30933__$3 = cljs.core.next.call(null,seq30933__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30934,G__30935,G__30936,seq30933__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31116 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31117){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31117 = meta31117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31118,meta31117__$1){
var self__ = this;
var _31118__$1 = this;
return (new cljs.core.async.t_cljs$core$async31116(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31117__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31118){
var self__ = this;
var _31118__$1 = this;
return self__.meta31117;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31116.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31117","meta31117",-1612838953,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31116";

cljs.core.async.t_cljs$core$async31116.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async/t_cljs$core$async31116");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31116 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31116(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31117){
return (new cljs.core.async.t_cljs$core$async31116(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31117));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31116(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29515__auto___31283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___31283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___31283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31220){
var state_val_31221 = (state_31220[(1)]);
if((state_val_31221 === (7))){
var inst_31135 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31222_31284 = state_31220__$1;
(statearr_31222_31284[(2)] = inst_31135);

(statearr_31222_31284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (20))){
var inst_31147 = (state_31220[(7)]);
var state_31220__$1 = state_31220;
var statearr_31223_31285 = state_31220__$1;
(statearr_31223_31285[(2)] = inst_31147);

(statearr_31223_31285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (27))){
var state_31220__$1 = state_31220;
var statearr_31224_31286 = state_31220__$1;
(statearr_31224_31286[(2)] = null);

(statearr_31224_31286[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (1))){
var inst_31122 = (state_31220[(8)]);
var inst_31122__$1 = calc_state.call(null);
var inst_31124 = (inst_31122__$1 == null);
var inst_31125 = cljs.core.not.call(null,inst_31124);
var state_31220__$1 = (function (){var statearr_31225 = state_31220;
(statearr_31225[(8)] = inst_31122__$1);

return statearr_31225;
})();
if(inst_31125){
var statearr_31226_31287 = state_31220__$1;
(statearr_31226_31287[(1)] = (2));

} else {
var statearr_31227_31288 = state_31220__$1;
(statearr_31227_31288[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (24))){
var inst_31194 = (state_31220[(9)]);
var inst_31171 = (state_31220[(10)]);
var inst_31180 = (state_31220[(11)]);
var inst_31194__$1 = inst_31171.call(null,inst_31180);
var state_31220__$1 = (function (){var statearr_31228 = state_31220;
(statearr_31228[(9)] = inst_31194__$1);

return statearr_31228;
})();
if(cljs.core.truth_(inst_31194__$1)){
var statearr_31229_31289 = state_31220__$1;
(statearr_31229_31289[(1)] = (29));

} else {
var statearr_31230_31290 = state_31220__$1;
(statearr_31230_31290[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (4))){
var inst_31138 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31138)){
var statearr_31231_31291 = state_31220__$1;
(statearr_31231_31291[(1)] = (8));

} else {
var statearr_31232_31292 = state_31220__$1;
(statearr_31232_31292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (15))){
var inst_31165 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31165)){
var statearr_31233_31293 = state_31220__$1;
(statearr_31233_31293[(1)] = (19));

} else {
var statearr_31234_31294 = state_31220__$1;
(statearr_31234_31294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (21))){
var inst_31170 = (state_31220[(12)]);
var inst_31170__$1 = (state_31220[(2)]);
var inst_31171 = cljs.core.get.call(null,inst_31170__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31172 = cljs.core.get.call(null,inst_31170__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31173 = cljs.core.get.call(null,inst_31170__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31220__$1 = (function (){var statearr_31235 = state_31220;
(statearr_31235[(10)] = inst_31171);

(statearr_31235[(13)] = inst_31172);

(statearr_31235[(12)] = inst_31170__$1);

return statearr_31235;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31220__$1,(22),inst_31173);
} else {
if((state_val_31221 === (31))){
var inst_31202 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31202)){
var statearr_31236_31295 = state_31220__$1;
(statearr_31236_31295[(1)] = (32));

} else {
var statearr_31237_31296 = state_31220__$1;
(statearr_31237_31296[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (32))){
var inst_31179 = (state_31220[(14)]);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31220__$1,(35),out,inst_31179);
} else {
if((state_val_31221 === (33))){
var inst_31170 = (state_31220[(12)]);
var inst_31147 = inst_31170;
var state_31220__$1 = (function (){var statearr_31238 = state_31220;
(statearr_31238[(7)] = inst_31147);

return statearr_31238;
})();
var statearr_31239_31297 = state_31220__$1;
(statearr_31239_31297[(2)] = null);

(statearr_31239_31297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (13))){
var inst_31147 = (state_31220[(7)]);
var inst_31154 = inst_31147.cljs$lang$protocol_mask$partition0$;
var inst_31155 = (inst_31154 & (64));
var inst_31156 = inst_31147.cljs$core$ISeq$;
var inst_31157 = (cljs.core.PROTOCOL_SENTINEL === inst_31156);
var inst_31158 = (inst_31155) || (inst_31157);
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31158)){
var statearr_31240_31298 = state_31220__$1;
(statearr_31240_31298[(1)] = (16));

} else {
var statearr_31241_31299 = state_31220__$1;
(statearr_31241_31299[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (22))){
var inst_31179 = (state_31220[(14)]);
var inst_31180 = (state_31220[(11)]);
var inst_31178 = (state_31220[(2)]);
var inst_31179__$1 = cljs.core.nth.call(null,inst_31178,(0),null);
var inst_31180__$1 = cljs.core.nth.call(null,inst_31178,(1),null);
var inst_31181 = (inst_31179__$1 == null);
var inst_31182 = cljs.core._EQ_.call(null,inst_31180__$1,change);
var inst_31183 = (inst_31181) || (inst_31182);
var state_31220__$1 = (function (){var statearr_31242 = state_31220;
(statearr_31242[(14)] = inst_31179__$1);

(statearr_31242[(11)] = inst_31180__$1);

return statearr_31242;
})();
if(cljs.core.truth_(inst_31183)){
var statearr_31243_31300 = state_31220__$1;
(statearr_31243_31300[(1)] = (23));

} else {
var statearr_31244_31301 = state_31220__$1;
(statearr_31244_31301[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (36))){
var inst_31170 = (state_31220[(12)]);
var inst_31147 = inst_31170;
var state_31220__$1 = (function (){var statearr_31245 = state_31220;
(statearr_31245[(7)] = inst_31147);

return statearr_31245;
})();
var statearr_31246_31302 = state_31220__$1;
(statearr_31246_31302[(2)] = null);

(statearr_31246_31302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (29))){
var inst_31194 = (state_31220[(9)]);
var state_31220__$1 = state_31220;
var statearr_31247_31303 = state_31220__$1;
(statearr_31247_31303[(2)] = inst_31194);

(statearr_31247_31303[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (6))){
var state_31220__$1 = state_31220;
var statearr_31248_31304 = state_31220__$1;
(statearr_31248_31304[(2)] = false);

(statearr_31248_31304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (28))){
var inst_31190 = (state_31220[(2)]);
var inst_31191 = calc_state.call(null);
var inst_31147 = inst_31191;
var state_31220__$1 = (function (){var statearr_31249 = state_31220;
(statearr_31249[(7)] = inst_31147);

(statearr_31249[(15)] = inst_31190);

return statearr_31249;
})();
var statearr_31250_31305 = state_31220__$1;
(statearr_31250_31305[(2)] = null);

(statearr_31250_31305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (25))){
var inst_31216 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31251_31306 = state_31220__$1;
(statearr_31251_31306[(2)] = inst_31216);

(statearr_31251_31306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (34))){
var inst_31214 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31252_31307 = state_31220__$1;
(statearr_31252_31307[(2)] = inst_31214);

(statearr_31252_31307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (17))){
var state_31220__$1 = state_31220;
var statearr_31253_31308 = state_31220__$1;
(statearr_31253_31308[(2)] = false);

(statearr_31253_31308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (3))){
var state_31220__$1 = state_31220;
var statearr_31254_31309 = state_31220__$1;
(statearr_31254_31309[(2)] = false);

(statearr_31254_31309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (12))){
var inst_31218 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31220__$1,inst_31218);
} else {
if((state_val_31221 === (2))){
var inst_31122 = (state_31220[(8)]);
var inst_31127 = inst_31122.cljs$lang$protocol_mask$partition0$;
var inst_31128 = (inst_31127 & (64));
var inst_31129 = inst_31122.cljs$core$ISeq$;
var inst_31130 = (cljs.core.PROTOCOL_SENTINEL === inst_31129);
var inst_31131 = (inst_31128) || (inst_31130);
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31131)){
var statearr_31255_31310 = state_31220__$1;
(statearr_31255_31310[(1)] = (5));

} else {
var statearr_31256_31311 = state_31220__$1;
(statearr_31256_31311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (23))){
var inst_31179 = (state_31220[(14)]);
var inst_31185 = (inst_31179 == null);
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31185)){
var statearr_31257_31312 = state_31220__$1;
(statearr_31257_31312[(1)] = (26));

} else {
var statearr_31258_31313 = state_31220__$1;
(statearr_31258_31313[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (35))){
var inst_31205 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31205)){
var statearr_31259_31314 = state_31220__$1;
(statearr_31259_31314[(1)] = (36));

} else {
var statearr_31260_31315 = state_31220__$1;
(statearr_31260_31315[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (19))){
var inst_31147 = (state_31220[(7)]);
var inst_31167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31147);
var state_31220__$1 = state_31220;
var statearr_31261_31316 = state_31220__$1;
(statearr_31261_31316[(2)] = inst_31167);

(statearr_31261_31316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (11))){
var inst_31147 = (state_31220[(7)]);
var inst_31151 = (inst_31147 == null);
var inst_31152 = cljs.core.not.call(null,inst_31151);
var state_31220__$1 = state_31220;
if(inst_31152){
var statearr_31262_31317 = state_31220__$1;
(statearr_31262_31317[(1)] = (13));

} else {
var statearr_31263_31318 = state_31220__$1;
(statearr_31263_31318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (9))){
var inst_31122 = (state_31220[(8)]);
var state_31220__$1 = state_31220;
var statearr_31264_31319 = state_31220__$1;
(statearr_31264_31319[(2)] = inst_31122);

(statearr_31264_31319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (5))){
var state_31220__$1 = state_31220;
var statearr_31265_31320 = state_31220__$1;
(statearr_31265_31320[(2)] = true);

(statearr_31265_31320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (14))){
var state_31220__$1 = state_31220;
var statearr_31266_31321 = state_31220__$1;
(statearr_31266_31321[(2)] = false);

(statearr_31266_31321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (26))){
var inst_31180 = (state_31220[(11)]);
var inst_31187 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31180);
var state_31220__$1 = state_31220;
var statearr_31267_31322 = state_31220__$1;
(statearr_31267_31322[(2)] = inst_31187);

(statearr_31267_31322[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (16))){
var state_31220__$1 = state_31220;
var statearr_31268_31323 = state_31220__$1;
(statearr_31268_31323[(2)] = true);

(statearr_31268_31323[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (38))){
var inst_31210 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31269_31324 = state_31220__$1;
(statearr_31269_31324[(2)] = inst_31210);

(statearr_31269_31324[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (30))){
var inst_31171 = (state_31220[(10)]);
var inst_31172 = (state_31220[(13)]);
var inst_31180 = (state_31220[(11)]);
var inst_31197 = cljs.core.empty_QMARK_.call(null,inst_31171);
var inst_31198 = inst_31172.call(null,inst_31180);
var inst_31199 = cljs.core.not.call(null,inst_31198);
var inst_31200 = (inst_31197) && (inst_31199);
var state_31220__$1 = state_31220;
var statearr_31270_31325 = state_31220__$1;
(statearr_31270_31325[(2)] = inst_31200);

(statearr_31270_31325[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (10))){
var inst_31122 = (state_31220[(8)]);
var inst_31143 = (state_31220[(2)]);
var inst_31144 = cljs.core.get.call(null,inst_31143,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31145 = cljs.core.get.call(null,inst_31143,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31146 = cljs.core.get.call(null,inst_31143,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31147 = inst_31122;
var state_31220__$1 = (function (){var statearr_31271 = state_31220;
(statearr_31271[(7)] = inst_31147);

(statearr_31271[(16)] = inst_31146);

(statearr_31271[(17)] = inst_31145);

(statearr_31271[(18)] = inst_31144);

return statearr_31271;
})();
var statearr_31272_31326 = state_31220__$1;
(statearr_31272_31326[(2)] = null);

(statearr_31272_31326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (18))){
var inst_31162 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31273_31327 = state_31220__$1;
(statearr_31273_31327[(2)] = inst_31162);

(statearr_31273_31327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (37))){
var state_31220__$1 = state_31220;
var statearr_31274_31328 = state_31220__$1;
(statearr_31274_31328[(2)] = null);

(statearr_31274_31328[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (8))){
var inst_31122 = (state_31220[(8)]);
var inst_31140 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31122);
var state_31220__$1 = state_31220;
var statearr_31275_31329 = state_31220__$1;
(statearr_31275_31329[(2)] = inst_31140);

(statearr_31275_31329[(1)] = (10));


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
});})(c__29515__auto___31283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29403__auto__,c__29515__auto___31283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29404__auto__ = null;
var cljs$core$async$mix_$_state_machine__29404__auto____0 = (function (){
var statearr_31279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31279[(0)] = cljs$core$async$mix_$_state_machine__29404__auto__);

(statearr_31279[(1)] = (1));

return statearr_31279;
});
var cljs$core$async$mix_$_state_machine__29404__auto____1 = (function (state_31220){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31280){if((e31280 instanceof Object)){
var ex__29407__auto__ = e31280;
var statearr_31281_31330 = state_31220;
(statearr_31281_31330[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31331 = state_31220;
state_31220 = G__31331;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29404__auto__ = function(state_31220){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29404__auto____1.call(this,state_31220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29404__auto____0;
cljs$core$async$mix_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29404__auto____1;
return cljs$core$async$mix_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___31283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29517__auto__ = (function (){var statearr_31282 = f__29516__auto__.call(null);
(statearr_31282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___31283);

return statearr_31282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___31283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__27972__auto__ = (((p == null))?null:p);
var m__27973__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27973__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__27972__auto__ = (((p == null))?null:p);
var m__27973__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,p,v,ch);
} else {
var m__27973__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31332 = [];
var len__28417__auto___31335 = arguments.length;
var i__28418__auto___31336 = (0);
while(true){
if((i__28418__auto___31336 < len__28417__auto___31335)){
args31332.push((arguments[i__28418__auto___31336]));

var G__31337 = (i__28418__auto___31336 + (1));
i__28418__auto___31336 = G__31337;
continue;
} else {
}
break;
}

var G__31334 = args31332.length;
switch (G__31334) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31332.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27972__auto__ = (((p == null))?null:p);
var m__27973__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,p);
} else {
var m__27973__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,p);
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
var x__27972__auto__ = (((p == null))?null:p);
var m__27973__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,p,v);
} else {
var m__27973__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,p,v);
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
var args31340 = [];
var len__28417__auto___31465 = arguments.length;
var i__28418__auto___31466 = (0);
while(true){
if((i__28418__auto___31466 < len__28417__auto___31465)){
args31340.push((arguments[i__28418__auto___31466]));

var G__31467 = (i__28418__auto___31466 + (1));
i__28418__auto___31466 = G__31467;
continue;
} else {
}
break;
}

var G__31342 = args31340.length;
switch (G__31342) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31340.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27304__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27304__auto__,mults){
return (function (p1__31339_SHARP_){
if(cljs.core.truth_(p1__31339_SHARP_.call(null,topic))){
return p1__31339_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31339_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27304__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31343 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31344){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31344 = meta31344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31345,meta31344__$1){
var self__ = this;
var _31345__$1 = this;
return (new cljs.core.async.t_cljs$core$async31343(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31344__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31345){
var self__ = this;
var _31345__$1 = this;
return self__.meta31344;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31343.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31343.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31343.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31343.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31343.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31343.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31343.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31343.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31344","meta31344",-1268038245,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31343";

cljs.core.async.t_cljs$core$async31343.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async/t_cljs$core$async31343");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31343 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31343(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31344){
return (new cljs.core.async.t_cljs$core$async31343(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31344));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31343(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29515__auto___31469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___31469,mults,ensure_mult,p){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___31469,mults,ensure_mult,p){
return (function (state_31417){
var state_val_31418 = (state_31417[(1)]);
if((state_val_31418 === (7))){
var inst_31413 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31419_31470 = state_31417__$1;
(statearr_31419_31470[(2)] = inst_31413);

(statearr_31419_31470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (20))){
var state_31417__$1 = state_31417;
var statearr_31420_31471 = state_31417__$1;
(statearr_31420_31471[(2)] = null);

(statearr_31420_31471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (1))){
var state_31417__$1 = state_31417;
var statearr_31421_31472 = state_31417__$1;
(statearr_31421_31472[(2)] = null);

(statearr_31421_31472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (24))){
var inst_31396 = (state_31417[(7)]);
var inst_31405 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31396);
var state_31417__$1 = state_31417;
var statearr_31422_31473 = state_31417__$1;
(statearr_31422_31473[(2)] = inst_31405);

(statearr_31422_31473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (4))){
var inst_31348 = (state_31417[(8)]);
var inst_31348__$1 = (state_31417[(2)]);
var inst_31349 = (inst_31348__$1 == null);
var state_31417__$1 = (function (){var statearr_31423 = state_31417;
(statearr_31423[(8)] = inst_31348__$1);

return statearr_31423;
})();
if(cljs.core.truth_(inst_31349)){
var statearr_31424_31474 = state_31417__$1;
(statearr_31424_31474[(1)] = (5));

} else {
var statearr_31425_31475 = state_31417__$1;
(statearr_31425_31475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (15))){
var inst_31390 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31426_31476 = state_31417__$1;
(statearr_31426_31476[(2)] = inst_31390);

(statearr_31426_31476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (21))){
var inst_31410 = (state_31417[(2)]);
var state_31417__$1 = (function (){var statearr_31427 = state_31417;
(statearr_31427[(9)] = inst_31410);

return statearr_31427;
})();
var statearr_31428_31477 = state_31417__$1;
(statearr_31428_31477[(2)] = null);

(statearr_31428_31477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (13))){
var inst_31372 = (state_31417[(10)]);
var inst_31374 = cljs.core.chunked_seq_QMARK_.call(null,inst_31372);
var state_31417__$1 = state_31417;
if(inst_31374){
var statearr_31429_31478 = state_31417__$1;
(statearr_31429_31478[(1)] = (16));

} else {
var statearr_31430_31479 = state_31417__$1;
(statearr_31430_31479[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (22))){
var inst_31402 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
if(cljs.core.truth_(inst_31402)){
var statearr_31431_31480 = state_31417__$1;
(statearr_31431_31480[(1)] = (23));

} else {
var statearr_31432_31481 = state_31417__$1;
(statearr_31432_31481[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (6))){
var inst_31348 = (state_31417[(8)]);
var inst_31396 = (state_31417[(7)]);
var inst_31398 = (state_31417[(11)]);
var inst_31396__$1 = topic_fn.call(null,inst_31348);
var inst_31397 = cljs.core.deref.call(null,mults);
var inst_31398__$1 = cljs.core.get.call(null,inst_31397,inst_31396__$1);
var state_31417__$1 = (function (){var statearr_31433 = state_31417;
(statearr_31433[(7)] = inst_31396__$1);

(statearr_31433[(11)] = inst_31398__$1);

return statearr_31433;
})();
if(cljs.core.truth_(inst_31398__$1)){
var statearr_31434_31482 = state_31417__$1;
(statearr_31434_31482[(1)] = (19));

} else {
var statearr_31435_31483 = state_31417__$1;
(statearr_31435_31483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (25))){
var inst_31407 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31436_31484 = state_31417__$1;
(statearr_31436_31484[(2)] = inst_31407);

(statearr_31436_31484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (17))){
var inst_31372 = (state_31417[(10)]);
var inst_31381 = cljs.core.first.call(null,inst_31372);
var inst_31382 = cljs.core.async.muxch_STAR_.call(null,inst_31381);
var inst_31383 = cljs.core.async.close_BANG_.call(null,inst_31382);
var inst_31384 = cljs.core.next.call(null,inst_31372);
var inst_31358 = inst_31384;
var inst_31359 = null;
var inst_31360 = (0);
var inst_31361 = (0);
var state_31417__$1 = (function (){var statearr_31437 = state_31417;
(statearr_31437[(12)] = inst_31360);

(statearr_31437[(13)] = inst_31383);

(statearr_31437[(14)] = inst_31361);

(statearr_31437[(15)] = inst_31359);

(statearr_31437[(16)] = inst_31358);

return statearr_31437;
})();
var statearr_31438_31485 = state_31417__$1;
(statearr_31438_31485[(2)] = null);

(statearr_31438_31485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (3))){
var inst_31415 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31417__$1,inst_31415);
} else {
if((state_val_31418 === (12))){
var inst_31392 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31439_31486 = state_31417__$1;
(statearr_31439_31486[(2)] = inst_31392);

(statearr_31439_31486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (2))){
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31417__$1,(4),ch);
} else {
if((state_val_31418 === (23))){
var state_31417__$1 = state_31417;
var statearr_31440_31487 = state_31417__$1;
(statearr_31440_31487[(2)] = null);

(statearr_31440_31487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (19))){
var inst_31348 = (state_31417[(8)]);
var inst_31398 = (state_31417[(11)]);
var inst_31400 = cljs.core.async.muxch_STAR_.call(null,inst_31398);
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31417__$1,(22),inst_31400,inst_31348);
} else {
if((state_val_31418 === (11))){
var inst_31372 = (state_31417[(10)]);
var inst_31358 = (state_31417[(16)]);
var inst_31372__$1 = cljs.core.seq.call(null,inst_31358);
var state_31417__$1 = (function (){var statearr_31441 = state_31417;
(statearr_31441[(10)] = inst_31372__$1);

return statearr_31441;
})();
if(inst_31372__$1){
var statearr_31442_31488 = state_31417__$1;
(statearr_31442_31488[(1)] = (13));

} else {
var statearr_31443_31489 = state_31417__$1;
(statearr_31443_31489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (9))){
var inst_31394 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31444_31490 = state_31417__$1;
(statearr_31444_31490[(2)] = inst_31394);

(statearr_31444_31490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (5))){
var inst_31355 = cljs.core.deref.call(null,mults);
var inst_31356 = cljs.core.vals.call(null,inst_31355);
var inst_31357 = cljs.core.seq.call(null,inst_31356);
var inst_31358 = inst_31357;
var inst_31359 = null;
var inst_31360 = (0);
var inst_31361 = (0);
var state_31417__$1 = (function (){var statearr_31445 = state_31417;
(statearr_31445[(12)] = inst_31360);

(statearr_31445[(14)] = inst_31361);

(statearr_31445[(15)] = inst_31359);

(statearr_31445[(16)] = inst_31358);

return statearr_31445;
})();
var statearr_31446_31491 = state_31417__$1;
(statearr_31446_31491[(2)] = null);

(statearr_31446_31491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (14))){
var state_31417__$1 = state_31417;
var statearr_31450_31492 = state_31417__$1;
(statearr_31450_31492[(2)] = null);

(statearr_31450_31492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (16))){
var inst_31372 = (state_31417[(10)]);
var inst_31376 = cljs.core.chunk_first.call(null,inst_31372);
var inst_31377 = cljs.core.chunk_rest.call(null,inst_31372);
var inst_31378 = cljs.core.count.call(null,inst_31376);
var inst_31358 = inst_31377;
var inst_31359 = inst_31376;
var inst_31360 = inst_31378;
var inst_31361 = (0);
var state_31417__$1 = (function (){var statearr_31451 = state_31417;
(statearr_31451[(12)] = inst_31360);

(statearr_31451[(14)] = inst_31361);

(statearr_31451[(15)] = inst_31359);

(statearr_31451[(16)] = inst_31358);

return statearr_31451;
})();
var statearr_31452_31493 = state_31417__$1;
(statearr_31452_31493[(2)] = null);

(statearr_31452_31493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (10))){
var inst_31360 = (state_31417[(12)]);
var inst_31361 = (state_31417[(14)]);
var inst_31359 = (state_31417[(15)]);
var inst_31358 = (state_31417[(16)]);
var inst_31366 = cljs.core._nth.call(null,inst_31359,inst_31361);
var inst_31367 = cljs.core.async.muxch_STAR_.call(null,inst_31366);
var inst_31368 = cljs.core.async.close_BANG_.call(null,inst_31367);
var inst_31369 = (inst_31361 + (1));
var tmp31447 = inst_31360;
var tmp31448 = inst_31359;
var tmp31449 = inst_31358;
var inst_31358__$1 = tmp31449;
var inst_31359__$1 = tmp31448;
var inst_31360__$1 = tmp31447;
var inst_31361__$1 = inst_31369;
var state_31417__$1 = (function (){var statearr_31453 = state_31417;
(statearr_31453[(12)] = inst_31360__$1);

(statearr_31453[(14)] = inst_31361__$1);

(statearr_31453[(15)] = inst_31359__$1);

(statearr_31453[(17)] = inst_31368);

(statearr_31453[(16)] = inst_31358__$1);

return statearr_31453;
})();
var statearr_31454_31494 = state_31417__$1;
(statearr_31454_31494[(2)] = null);

(statearr_31454_31494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (18))){
var inst_31387 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31455_31495 = state_31417__$1;
(statearr_31455_31495[(2)] = inst_31387);

(statearr_31455_31495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (8))){
var inst_31360 = (state_31417[(12)]);
var inst_31361 = (state_31417[(14)]);
var inst_31363 = (inst_31361 < inst_31360);
var inst_31364 = inst_31363;
var state_31417__$1 = state_31417;
if(cljs.core.truth_(inst_31364)){
var statearr_31456_31496 = state_31417__$1;
(statearr_31456_31496[(1)] = (10));

} else {
var statearr_31457_31497 = state_31417__$1;
(statearr_31457_31497[(1)] = (11));

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
});})(c__29515__auto___31469,mults,ensure_mult,p))
;
return ((function (switch__29403__auto__,c__29515__auto___31469,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_31461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31461[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_31461[(1)] = (1));

return statearr_31461;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_31417){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31462){if((e31462 instanceof Object)){
var ex__29407__auto__ = e31462;
var statearr_31463_31498 = state_31417;
(statearr_31463_31498[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31499 = state_31417;
state_31417 = G__31499;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_31417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_31417);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___31469,mults,ensure_mult,p))
})();
var state__29517__auto__ = (function (){var statearr_31464 = f__29516__auto__.call(null);
(statearr_31464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___31469);

return statearr_31464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___31469,mults,ensure_mult,p))
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
var args31500 = [];
var len__28417__auto___31503 = arguments.length;
var i__28418__auto___31504 = (0);
while(true){
if((i__28418__auto___31504 < len__28417__auto___31503)){
args31500.push((arguments[i__28418__auto___31504]));

var G__31505 = (i__28418__auto___31504 + (1));
i__28418__auto___31504 = G__31505;
continue;
} else {
}
break;
}

var G__31502 = args31500.length;
switch (G__31502) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31500.length)].join('')));

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
var args31507 = [];
var len__28417__auto___31510 = arguments.length;
var i__28418__auto___31511 = (0);
while(true){
if((i__28418__auto___31511 < len__28417__auto___31510)){
args31507.push((arguments[i__28418__auto___31511]));

var G__31512 = (i__28418__auto___31511 + (1));
i__28418__auto___31511 = G__31512;
continue;
} else {
}
break;
}

var G__31509 = args31507.length;
switch (G__31509) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31507.length)].join('')));

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
var args31514 = [];
var len__28417__auto___31585 = arguments.length;
var i__28418__auto___31586 = (0);
while(true){
if((i__28418__auto___31586 < len__28417__auto___31585)){
args31514.push((arguments[i__28418__auto___31586]));

var G__31587 = (i__28418__auto___31586 + (1));
i__28418__auto___31586 = G__31587;
continue;
} else {
}
break;
}

var G__31516 = args31514.length;
switch (G__31516) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31514.length)].join('')));

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
var c__29515__auto___31589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___31589,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___31589,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31555){
var state_val_31556 = (state_31555[(1)]);
if((state_val_31556 === (7))){
var state_31555__$1 = state_31555;
var statearr_31557_31590 = state_31555__$1;
(statearr_31557_31590[(2)] = null);

(statearr_31557_31590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (1))){
var state_31555__$1 = state_31555;
var statearr_31558_31591 = state_31555__$1;
(statearr_31558_31591[(2)] = null);

(statearr_31558_31591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (4))){
var inst_31519 = (state_31555[(7)]);
var inst_31521 = (inst_31519 < cnt);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31521)){
var statearr_31559_31592 = state_31555__$1;
(statearr_31559_31592[(1)] = (6));

} else {
var statearr_31560_31593 = state_31555__$1;
(statearr_31560_31593[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (15))){
var inst_31551 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31561_31594 = state_31555__$1;
(statearr_31561_31594[(2)] = inst_31551);

(statearr_31561_31594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (13))){
var inst_31544 = cljs.core.async.close_BANG_.call(null,out);
var state_31555__$1 = state_31555;
var statearr_31562_31595 = state_31555__$1;
(statearr_31562_31595[(2)] = inst_31544);

(statearr_31562_31595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (6))){
var state_31555__$1 = state_31555;
var statearr_31563_31596 = state_31555__$1;
(statearr_31563_31596[(2)] = null);

(statearr_31563_31596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (3))){
var inst_31553 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31555__$1,inst_31553);
} else {
if((state_val_31556 === (12))){
var inst_31541 = (state_31555[(8)]);
var inst_31541__$1 = (state_31555[(2)]);
var inst_31542 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31541__$1);
var state_31555__$1 = (function (){var statearr_31564 = state_31555;
(statearr_31564[(8)] = inst_31541__$1);

return statearr_31564;
})();
if(cljs.core.truth_(inst_31542)){
var statearr_31565_31597 = state_31555__$1;
(statearr_31565_31597[(1)] = (13));

} else {
var statearr_31566_31598 = state_31555__$1;
(statearr_31566_31598[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (2))){
var inst_31518 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31519 = (0);
var state_31555__$1 = (function (){var statearr_31567 = state_31555;
(statearr_31567[(7)] = inst_31519);

(statearr_31567[(9)] = inst_31518);

return statearr_31567;
})();
var statearr_31568_31599 = state_31555__$1;
(statearr_31568_31599[(2)] = null);

(statearr_31568_31599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (11))){
var inst_31519 = (state_31555[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31555,(10),Object,null,(9));
var inst_31528 = chs__$1.call(null,inst_31519);
var inst_31529 = done.call(null,inst_31519);
var inst_31530 = cljs.core.async.take_BANG_.call(null,inst_31528,inst_31529);
var state_31555__$1 = state_31555;
var statearr_31569_31600 = state_31555__$1;
(statearr_31569_31600[(2)] = inst_31530);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31555__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (9))){
var inst_31519 = (state_31555[(7)]);
var inst_31532 = (state_31555[(2)]);
var inst_31533 = (inst_31519 + (1));
var inst_31519__$1 = inst_31533;
var state_31555__$1 = (function (){var statearr_31570 = state_31555;
(statearr_31570[(10)] = inst_31532);

(statearr_31570[(7)] = inst_31519__$1);

return statearr_31570;
})();
var statearr_31571_31601 = state_31555__$1;
(statearr_31571_31601[(2)] = null);

(statearr_31571_31601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (5))){
var inst_31539 = (state_31555[(2)]);
var state_31555__$1 = (function (){var statearr_31572 = state_31555;
(statearr_31572[(11)] = inst_31539);

return statearr_31572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(12),dchan);
} else {
if((state_val_31556 === (14))){
var inst_31541 = (state_31555[(8)]);
var inst_31546 = cljs.core.apply.call(null,f,inst_31541);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31555__$1,(16),out,inst_31546);
} else {
if((state_val_31556 === (16))){
var inst_31548 = (state_31555[(2)]);
var state_31555__$1 = (function (){var statearr_31573 = state_31555;
(statearr_31573[(12)] = inst_31548);

return statearr_31573;
})();
var statearr_31574_31602 = state_31555__$1;
(statearr_31574_31602[(2)] = null);

(statearr_31574_31602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (10))){
var inst_31523 = (state_31555[(2)]);
var inst_31524 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31555__$1 = (function (){var statearr_31575 = state_31555;
(statearr_31575[(13)] = inst_31523);

return statearr_31575;
})();
var statearr_31576_31603 = state_31555__$1;
(statearr_31576_31603[(2)] = inst_31524);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31555__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (8))){
var inst_31537 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31577_31604 = state_31555__$1;
(statearr_31577_31604[(2)] = inst_31537);

(statearr_31577_31604[(1)] = (5));


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
});})(c__29515__auto___31589,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29403__auto__,c__29515__auto___31589,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_31581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31581[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_31581[(1)] = (1));

return statearr_31581;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_31555){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31582){if((e31582 instanceof Object)){
var ex__29407__auto__ = e31582;
var statearr_31583_31605 = state_31555;
(statearr_31583_31605[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31606 = state_31555;
state_31555 = G__31606;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_31555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_31555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___31589,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29517__auto__ = (function (){var statearr_31584 = f__29516__auto__.call(null);
(statearr_31584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___31589);

return statearr_31584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___31589,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31608 = [];
var len__28417__auto___31666 = arguments.length;
var i__28418__auto___31667 = (0);
while(true){
if((i__28418__auto___31667 < len__28417__auto___31666)){
args31608.push((arguments[i__28418__auto___31667]));

var G__31668 = (i__28418__auto___31667 + (1));
i__28418__auto___31667 = G__31668;
continue;
} else {
}
break;
}

var G__31610 = args31608.length;
switch (G__31610) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31608.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29515__auto___31670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___31670,out){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___31670,out){
return (function (state_31642){
var state_val_31643 = (state_31642[(1)]);
if((state_val_31643 === (7))){
var inst_31621 = (state_31642[(7)]);
var inst_31622 = (state_31642[(8)]);
var inst_31621__$1 = (state_31642[(2)]);
var inst_31622__$1 = cljs.core.nth.call(null,inst_31621__$1,(0),null);
var inst_31623 = cljs.core.nth.call(null,inst_31621__$1,(1),null);
var inst_31624 = (inst_31622__$1 == null);
var state_31642__$1 = (function (){var statearr_31644 = state_31642;
(statearr_31644[(7)] = inst_31621__$1);

(statearr_31644[(9)] = inst_31623);

(statearr_31644[(8)] = inst_31622__$1);

return statearr_31644;
})();
if(cljs.core.truth_(inst_31624)){
var statearr_31645_31671 = state_31642__$1;
(statearr_31645_31671[(1)] = (8));

} else {
var statearr_31646_31672 = state_31642__$1;
(statearr_31646_31672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (1))){
var inst_31611 = cljs.core.vec.call(null,chs);
var inst_31612 = inst_31611;
var state_31642__$1 = (function (){var statearr_31647 = state_31642;
(statearr_31647[(10)] = inst_31612);

return statearr_31647;
})();
var statearr_31648_31673 = state_31642__$1;
(statearr_31648_31673[(2)] = null);

(statearr_31648_31673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (4))){
var inst_31612 = (state_31642[(10)]);
var state_31642__$1 = state_31642;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31642__$1,(7),inst_31612);
} else {
if((state_val_31643 === (6))){
var inst_31638 = (state_31642[(2)]);
var state_31642__$1 = state_31642;
var statearr_31649_31674 = state_31642__$1;
(statearr_31649_31674[(2)] = inst_31638);

(statearr_31649_31674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (3))){
var inst_31640 = (state_31642[(2)]);
var state_31642__$1 = state_31642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31642__$1,inst_31640);
} else {
if((state_val_31643 === (2))){
var inst_31612 = (state_31642[(10)]);
var inst_31614 = cljs.core.count.call(null,inst_31612);
var inst_31615 = (inst_31614 > (0));
var state_31642__$1 = state_31642;
if(cljs.core.truth_(inst_31615)){
var statearr_31651_31675 = state_31642__$1;
(statearr_31651_31675[(1)] = (4));

} else {
var statearr_31652_31676 = state_31642__$1;
(statearr_31652_31676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (11))){
var inst_31612 = (state_31642[(10)]);
var inst_31631 = (state_31642[(2)]);
var tmp31650 = inst_31612;
var inst_31612__$1 = tmp31650;
var state_31642__$1 = (function (){var statearr_31653 = state_31642;
(statearr_31653[(11)] = inst_31631);

(statearr_31653[(10)] = inst_31612__$1);

return statearr_31653;
})();
var statearr_31654_31677 = state_31642__$1;
(statearr_31654_31677[(2)] = null);

(statearr_31654_31677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (9))){
var inst_31622 = (state_31642[(8)]);
var state_31642__$1 = state_31642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31642__$1,(11),out,inst_31622);
} else {
if((state_val_31643 === (5))){
var inst_31636 = cljs.core.async.close_BANG_.call(null,out);
var state_31642__$1 = state_31642;
var statearr_31655_31678 = state_31642__$1;
(statearr_31655_31678[(2)] = inst_31636);

(statearr_31655_31678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (10))){
var inst_31634 = (state_31642[(2)]);
var state_31642__$1 = state_31642;
var statearr_31656_31679 = state_31642__$1;
(statearr_31656_31679[(2)] = inst_31634);

(statearr_31656_31679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31643 === (8))){
var inst_31621 = (state_31642[(7)]);
var inst_31623 = (state_31642[(9)]);
var inst_31622 = (state_31642[(8)]);
var inst_31612 = (state_31642[(10)]);
var inst_31626 = (function (){var cs = inst_31612;
var vec__31617 = inst_31621;
var v = inst_31622;
var c = inst_31623;
return ((function (cs,vec__31617,v,c,inst_31621,inst_31623,inst_31622,inst_31612,state_val_31643,c__29515__auto___31670,out){
return (function (p1__31607_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31607_SHARP_);
});
;})(cs,vec__31617,v,c,inst_31621,inst_31623,inst_31622,inst_31612,state_val_31643,c__29515__auto___31670,out))
})();
var inst_31627 = cljs.core.filterv.call(null,inst_31626,inst_31612);
var inst_31612__$1 = inst_31627;
var state_31642__$1 = (function (){var statearr_31657 = state_31642;
(statearr_31657[(10)] = inst_31612__$1);

return statearr_31657;
})();
var statearr_31658_31680 = state_31642__$1;
(statearr_31658_31680[(2)] = null);

(statearr_31658_31680[(1)] = (2));


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
});})(c__29515__auto___31670,out))
;
return ((function (switch__29403__auto__,c__29515__auto___31670,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_31662 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31662[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_31662[(1)] = (1));

return statearr_31662;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_31642){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31663){if((e31663 instanceof Object)){
var ex__29407__auto__ = e31663;
var statearr_31664_31681 = state_31642;
(statearr_31664_31681[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31682 = state_31642;
state_31642 = G__31682;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_31642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_31642);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___31670,out))
})();
var state__29517__auto__ = (function (){var statearr_31665 = f__29516__auto__.call(null);
(statearr_31665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___31670);

return statearr_31665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___31670,out))
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
var args31683 = [];
var len__28417__auto___31732 = arguments.length;
var i__28418__auto___31733 = (0);
while(true){
if((i__28418__auto___31733 < len__28417__auto___31732)){
args31683.push((arguments[i__28418__auto___31733]));

var G__31734 = (i__28418__auto___31733 + (1));
i__28418__auto___31733 = G__31734;
continue;
} else {
}
break;
}

var G__31685 = args31683.length;
switch (G__31685) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31683.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29515__auto___31736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___31736,out){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___31736,out){
return (function (state_31709){
var state_val_31710 = (state_31709[(1)]);
if((state_val_31710 === (7))){
var inst_31691 = (state_31709[(7)]);
var inst_31691__$1 = (state_31709[(2)]);
var inst_31692 = (inst_31691__$1 == null);
var inst_31693 = cljs.core.not.call(null,inst_31692);
var state_31709__$1 = (function (){var statearr_31711 = state_31709;
(statearr_31711[(7)] = inst_31691__$1);

return statearr_31711;
})();
if(inst_31693){
var statearr_31712_31737 = state_31709__$1;
(statearr_31712_31737[(1)] = (8));

} else {
var statearr_31713_31738 = state_31709__$1;
(statearr_31713_31738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (1))){
var inst_31686 = (0);
var state_31709__$1 = (function (){var statearr_31714 = state_31709;
(statearr_31714[(8)] = inst_31686);

return statearr_31714;
})();
var statearr_31715_31739 = state_31709__$1;
(statearr_31715_31739[(2)] = null);

(statearr_31715_31739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (4))){
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(7),ch);
} else {
if((state_val_31710 === (6))){
var inst_31704 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31716_31740 = state_31709__$1;
(statearr_31716_31740[(2)] = inst_31704);

(statearr_31716_31740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (3))){
var inst_31706 = (state_31709[(2)]);
var inst_31707 = cljs.core.async.close_BANG_.call(null,out);
var state_31709__$1 = (function (){var statearr_31717 = state_31709;
(statearr_31717[(9)] = inst_31706);

return statearr_31717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31709__$1,inst_31707);
} else {
if((state_val_31710 === (2))){
var inst_31686 = (state_31709[(8)]);
var inst_31688 = (inst_31686 < n);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31688)){
var statearr_31718_31741 = state_31709__$1;
(statearr_31718_31741[(1)] = (4));

} else {
var statearr_31719_31742 = state_31709__$1;
(statearr_31719_31742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (11))){
var inst_31686 = (state_31709[(8)]);
var inst_31696 = (state_31709[(2)]);
var inst_31697 = (inst_31686 + (1));
var inst_31686__$1 = inst_31697;
var state_31709__$1 = (function (){var statearr_31720 = state_31709;
(statearr_31720[(10)] = inst_31696);

(statearr_31720[(8)] = inst_31686__$1);

return statearr_31720;
})();
var statearr_31721_31743 = state_31709__$1;
(statearr_31721_31743[(2)] = null);

(statearr_31721_31743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (9))){
var state_31709__$1 = state_31709;
var statearr_31722_31744 = state_31709__$1;
(statearr_31722_31744[(2)] = null);

(statearr_31722_31744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (5))){
var state_31709__$1 = state_31709;
var statearr_31723_31745 = state_31709__$1;
(statearr_31723_31745[(2)] = null);

(statearr_31723_31745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (10))){
var inst_31701 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31724_31746 = state_31709__$1;
(statearr_31724_31746[(2)] = inst_31701);

(statearr_31724_31746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (8))){
var inst_31691 = (state_31709[(7)]);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31709__$1,(11),out,inst_31691);
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
});})(c__29515__auto___31736,out))
;
return ((function (switch__29403__auto__,c__29515__auto___31736,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_31728 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31728[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_31728[(1)] = (1));

return statearr_31728;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_31709){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31729){if((e31729 instanceof Object)){
var ex__29407__auto__ = e31729;
var statearr_31730_31747 = state_31709;
(statearr_31730_31747[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31748 = state_31709;
state_31709 = G__31748;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_31709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_31709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___31736,out))
})();
var state__29517__auto__ = (function (){var statearr_31731 = f__29516__auto__.call(null);
(statearr_31731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___31736);

return statearr_31731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___31736,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31756 = (function (f,ch,meta31757){
this.f = f;
this.ch = ch;
this.meta31757 = meta31757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31758,meta31757__$1){
var self__ = this;
var _31758__$1 = this;
return (new cljs.core.async.t_cljs$core$async31756(self__.f,self__.ch,meta31757__$1));
});

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31758){
var self__ = this;
var _31758__$1 = this;
return self__.meta31757;
});

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31759 = (function (f,ch,meta31757,_,fn1,meta31760){
this.f = f;
this.ch = ch;
this.meta31757 = meta31757;
this._ = _;
this.fn1 = fn1;
this.meta31760 = meta31760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31761,meta31760__$1){
var self__ = this;
var _31761__$1 = this;
return (new cljs.core.async.t_cljs$core$async31759(self__.f,self__.ch,self__.meta31757,self__._,self__.fn1,meta31760__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31761){
var self__ = this;
var _31761__$1 = this;
return self__.meta31760;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31759.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31759.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31749_SHARP_){
return f1.call(null,(((p1__31749_SHARP_ == null))?null:self__.f.call(null,p1__31749_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31759.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31757","meta31757",-2048637959,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31756","cljs.core.async/t_cljs$core$async31756",1906285801,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31760","meta31760",-1682742376,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31759";

cljs.core.async.t_cljs$core$async31759.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async/t_cljs$core$async31759");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31759 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31759(f__$1,ch__$1,meta31757__$1,___$2,fn1__$1,meta31760){
return (new cljs.core.async.t_cljs$core$async31759(f__$1,ch__$1,meta31757__$1,___$2,fn1__$1,meta31760));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31759(self__.f,self__.ch,self__.meta31757,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27292__auto__ = ret;
if(cljs.core.truth_(and__27292__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27292__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31757","meta31757",-2048637959,null)], null);
});

cljs.core.async.t_cljs$core$async31756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31756";

cljs.core.async.t_cljs$core$async31756.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async/t_cljs$core$async31756");
});

cljs.core.async.__GT_t_cljs$core$async31756 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31756(f__$1,ch__$1,meta31757){
return (new cljs.core.async.t_cljs$core$async31756(f__$1,ch__$1,meta31757));
});

}

return (new cljs.core.async.t_cljs$core$async31756(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31765 = (function (f,ch,meta31766){
this.f = f;
this.ch = ch;
this.meta31766 = meta31766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31767,meta31766__$1){
var self__ = this;
var _31767__$1 = this;
return (new cljs.core.async.t_cljs$core$async31765(self__.f,self__.ch,meta31766__$1));
});

cljs.core.async.t_cljs$core$async31765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31767){
var self__ = this;
var _31767__$1 = this;
return self__.meta31766;
});

cljs.core.async.t_cljs$core$async31765.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31765.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31765.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31766","meta31766",895723290,null)], null);
});

cljs.core.async.t_cljs$core$async31765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31765";

cljs.core.async.t_cljs$core$async31765.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async/t_cljs$core$async31765");
});

cljs.core.async.__GT_t_cljs$core$async31765 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31765(f__$1,ch__$1,meta31766){
return (new cljs.core.async.t_cljs$core$async31765(f__$1,ch__$1,meta31766));
});

}

return (new cljs.core.async.t_cljs$core$async31765(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31771 = (function (p,ch,meta31772){
this.p = p;
this.ch = ch;
this.meta31772 = meta31772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31773,meta31772__$1){
var self__ = this;
var _31773__$1 = this;
return (new cljs.core.async.t_cljs$core$async31771(self__.p,self__.ch,meta31772__$1));
});

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31773){
var self__ = this;
var _31773__$1 = this;
return self__.meta31772;
});

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31772","meta31772",-297788572,null)], null);
});

cljs.core.async.t_cljs$core$async31771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31771";

cljs.core.async.t_cljs$core$async31771.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async/t_cljs$core$async31771");
});

cljs.core.async.__GT_t_cljs$core$async31771 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31771(p__$1,ch__$1,meta31772){
return (new cljs.core.async.t_cljs$core$async31771(p__$1,ch__$1,meta31772));
});

}

return (new cljs.core.async.t_cljs$core$async31771(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31774 = [];
var len__28417__auto___31818 = arguments.length;
var i__28418__auto___31819 = (0);
while(true){
if((i__28418__auto___31819 < len__28417__auto___31818)){
args31774.push((arguments[i__28418__auto___31819]));

var G__31820 = (i__28418__auto___31819 + (1));
i__28418__auto___31819 = G__31820;
continue;
} else {
}
break;
}

var G__31776 = args31774.length;
switch (G__31776) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31774.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29515__auto___31822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___31822,out){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___31822,out){
return (function (state_31797){
var state_val_31798 = (state_31797[(1)]);
if((state_val_31798 === (7))){
var inst_31793 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31799_31823 = state_31797__$1;
(statearr_31799_31823[(2)] = inst_31793);

(statearr_31799_31823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (1))){
var state_31797__$1 = state_31797;
var statearr_31800_31824 = state_31797__$1;
(statearr_31800_31824[(2)] = null);

(statearr_31800_31824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (4))){
var inst_31779 = (state_31797[(7)]);
var inst_31779__$1 = (state_31797[(2)]);
var inst_31780 = (inst_31779__$1 == null);
var state_31797__$1 = (function (){var statearr_31801 = state_31797;
(statearr_31801[(7)] = inst_31779__$1);

return statearr_31801;
})();
if(cljs.core.truth_(inst_31780)){
var statearr_31802_31825 = state_31797__$1;
(statearr_31802_31825[(1)] = (5));

} else {
var statearr_31803_31826 = state_31797__$1;
(statearr_31803_31826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (6))){
var inst_31779 = (state_31797[(7)]);
var inst_31784 = p.call(null,inst_31779);
var state_31797__$1 = state_31797;
if(cljs.core.truth_(inst_31784)){
var statearr_31804_31827 = state_31797__$1;
(statearr_31804_31827[(1)] = (8));

} else {
var statearr_31805_31828 = state_31797__$1;
(statearr_31805_31828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (3))){
var inst_31795 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31797__$1,inst_31795);
} else {
if((state_val_31798 === (2))){
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31797__$1,(4),ch);
} else {
if((state_val_31798 === (11))){
var inst_31787 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31806_31829 = state_31797__$1;
(statearr_31806_31829[(2)] = inst_31787);

(statearr_31806_31829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (9))){
var state_31797__$1 = state_31797;
var statearr_31807_31830 = state_31797__$1;
(statearr_31807_31830[(2)] = null);

(statearr_31807_31830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (5))){
var inst_31782 = cljs.core.async.close_BANG_.call(null,out);
var state_31797__$1 = state_31797;
var statearr_31808_31831 = state_31797__$1;
(statearr_31808_31831[(2)] = inst_31782);

(statearr_31808_31831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (10))){
var inst_31790 = (state_31797[(2)]);
var state_31797__$1 = (function (){var statearr_31809 = state_31797;
(statearr_31809[(8)] = inst_31790);

return statearr_31809;
})();
var statearr_31810_31832 = state_31797__$1;
(statearr_31810_31832[(2)] = null);

(statearr_31810_31832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (8))){
var inst_31779 = (state_31797[(7)]);
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31797__$1,(11),out,inst_31779);
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
});})(c__29515__auto___31822,out))
;
return ((function (switch__29403__auto__,c__29515__auto___31822,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_31814 = [null,null,null,null,null,null,null,null,null];
(statearr_31814[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_31814[(1)] = (1));

return statearr_31814;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_31797){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31815){if((e31815 instanceof Object)){
var ex__29407__auto__ = e31815;
var statearr_31816_31833 = state_31797;
(statearr_31816_31833[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31834 = state_31797;
state_31797 = G__31834;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_31797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_31797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___31822,out))
})();
var state__29517__auto__ = (function (){var statearr_31817 = f__29516__auto__.call(null);
(statearr_31817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___31822);

return statearr_31817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___31822,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31835 = [];
var len__28417__auto___31838 = arguments.length;
var i__28418__auto___31839 = (0);
while(true){
if((i__28418__auto___31839 < len__28417__auto___31838)){
args31835.push((arguments[i__28418__auto___31839]));

var G__31840 = (i__28418__auto___31839 + (1));
i__28418__auto___31839 = G__31840;
continue;
} else {
}
break;
}

var G__31837 = args31835.length;
switch (G__31837) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31835.length)].join('')));

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
var c__29515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto__){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto__){
return (function (state_32007){
var state_val_32008 = (state_32007[(1)]);
if((state_val_32008 === (7))){
var inst_32003 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32009_32050 = state_32007__$1;
(statearr_32009_32050[(2)] = inst_32003);

(statearr_32009_32050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (20))){
var inst_31973 = (state_32007[(7)]);
var inst_31984 = (state_32007[(2)]);
var inst_31985 = cljs.core.next.call(null,inst_31973);
var inst_31959 = inst_31985;
var inst_31960 = null;
var inst_31961 = (0);
var inst_31962 = (0);
var state_32007__$1 = (function (){var statearr_32010 = state_32007;
(statearr_32010[(8)] = inst_31960);

(statearr_32010[(9)] = inst_31962);

(statearr_32010[(10)] = inst_31984);

(statearr_32010[(11)] = inst_31959);

(statearr_32010[(12)] = inst_31961);

return statearr_32010;
})();
var statearr_32011_32051 = state_32007__$1;
(statearr_32011_32051[(2)] = null);

(statearr_32011_32051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (1))){
var state_32007__$1 = state_32007;
var statearr_32012_32052 = state_32007__$1;
(statearr_32012_32052[(2)] = null);

(statearr_32012_32052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (4))){
var inst_31948 = (state_32007[(13)]);
var inst_31948__$1 = (state_32007[(2)]);
var inst_31949 = (inst_31948__$1 == null);
var state_32007__$1 = (function (){var statearr_32013 = state_32007;
(statearr_32013[(13)] = inst_31948__$1);

return statearr_32013;
})();
if(cljs.core.truth_(inst_31949)){
var statearr_32014_32053 = state_32007__$1;
(statearr_32014_32053[(1)] = (5));

} else {
var statearr_32015_32054 = state_32007__$1;
(statearr_32015_32054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (15))){
var state_32007__$1 = state_32007;
var statearr_32019_32055 = state_32007__$1;
(statearr_32019_32055[(2)] = null);

(statearr_32019_32055[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (21))){
var state_32007__$1 = state_32007;
var statearr_32020_32056 = state_32007__$1;
(statearr_32020_32056[(2)] = null);

(statearr_32020_32056[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (13))){
var inst_31960 = (state_32007[(8)]);
var inst_31962 = (state_32007[(9)]);
var inst_31959 = (state_32007[(11)]);
var inst_31961 = (state_32007[(12)]);
var inst_31969 = (state_32007[(2)]);
var inst_31970 = (inst_31962 + (1));
var tmp32016 = inst_31960;
var tmp32017 = inst_31959;
var tmp32018 = inst_31961;
var inst_31959__$1 = tmp32017;
var inst_31960__$1 = tmp32016;
var inst_31961__$1 = tmp32018;
var inst_31962__$1 = inst_31970;
var state_32007__$1 = (function (){var statearr_32021 = state_32007;
(statearr_32021[(8)] = inst_31960__$1);

(statearr_32021[(9)] = inst_31962__$1);

(statearr_32021[(14)] = inst_31969);

(statearr_32021[(11)] = inst_31959__$1);

(statearr_32021[(12)] = inst_31961__$1);

return statearr_32021;
})();
var statearr_32022_32057 = state_32007__$1;
(statearr_32022_32057[(2)] = null);

(statearr_32022_32057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (22))){
var state_32007__$1 = state_32007;
var statearr_32023_32058 = state_32007__$1;
(statearr_32023_32058[(2)] = null);

(statearr_32023_32058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (6))){
var inst_31948 = (state_32007[(13)]);
var inst_31957 = f.call(null,inst_31948);
var inst_31958 = cljs.core.seq.call(null,inst_31957);
var inst_31959 = inst_31958;
var inst_31960 = null;
var inst_31961 = (0);
var inst_31962 = (0);
var state_32007__$1 = (function (){var statearr_32024 = state_32007;
(statearr_32024[(8)] = inst_31960);

(statearr_32024[(9)] = inst_31962);

(statearr_32024[(11)] = inst_31959);

(statearr_32024[(12)] = inst_31961);

return statearr_32024;
})();
var statearr_32025_32059 = state_32007__$1;
(statearr_32025_32059[(2)] = null);

(statearr_32025_32059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (17))){
var inst_31973 = (state_32007[(7)]);
var inst_31977 = cljs.core.chunk_first.call(null,inst_31973);
var inst_31978 = cljs.core.chunk_rest.call(null,inst_31973);
var inst_31979 = cljs.core.count.call(null,inst_31977);
var inst_31959 = inst_31978;
var inst_31960 = inst_31977;
var inst_31961 = inst_31979;
var inst_31962 = (0);
var state_32007__$1 = (function (){var statearr_32026 = state_32007;
(statearr_32026[(8)] = inst_31960);

(statearr_32026[(9)] = inst_31962);

(statearr_32026[(11)] = inst_31959);

(statearr_32026[(12)] = inst_31961);

return statearr_32026;
})();
var statearr_32027_32060 = state_32007__$1;
(statearr_32027_32060[(2)] = null);

(statearr_32027_32060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (3))){
var inst_32005 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32007__$1,inst_32005);
} else {
if((state_val_32008 === (12))){
var inst_31993 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32028_32061 = state_32007__$1;
(statearr_32028_32061[(2)] = inst_31993);

(statearr_32028_32061[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (2))){
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32007__$1,(4),in$);
} else {
if((state_val_32008 === (23))){
var inst_32001 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32029_32062 = state_32007__$1;
(statearr_32029_32062[(2)] = inst_32001);

(statearr_32029_32062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (19))){
var inst_31988 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32030_32063 = state_32007__$1;
(statearr_32030_32063[(2)] = inst_31988);

(statearr_32030_32063[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (11))){
var inst_31959 = (state_32007[(11)]);
var inst_31973 = (state_32007[(7)]);
var inst_31973__$1 = cljs.core.seq.call(null,inst_31959);
var state_32007__$1 = (function (){var statearr_32031 = state_32007;
(statearr_32031[(7)] = inst_31973__$1);

return statearr_32031;
})();
if(inst_31973__$1){
var statearr_32032_32064 = state_32007__$1;
(statearr_32032_32064[(1)] = (14));

} else {
var statearr_32033_32065 = state_32007__$1;
(statearr_32033_32065[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (9))){
var inst_31995 = (state_32007[(2)]);
var inst_31996 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32007__$1 = (function (){var statearr_32034 = state_32007;
(statearr_32034[(15)] = inst_31995);

return statearr_32034;
})();
if(cljs.core.truth_(inst_31996)){
var statearr_32035_32066 = state_32007__$1;
(statearr_32035_32066[(1)] = (21));

} else {
var statearr_32036_32067 = state_32007__$1;
(statearr_32036_32067[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (5))){
var inst_31951 = cljs.core.async.close_BANG_.call(null,out);
var state_32007__$1 = state_32007;
var statearr_32037_32068 = state_32007__$1;
(statearr_32037_32068[(2)] = inst_31951);

(statearr_32037_32068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (14))){
var inst_31973 = (state_32007[(7)]);
var inst_31975 = cljs.core.chunked_seq_QMARK_.call(null,inst_31973);
var state_32007__$1 = state_32007;
if(inst_31975){
var statearr_32038_32069 = state_32007__$1;
(statearr_32038_32069[(1)] = (17));

} else {
var statearr_32039_32070 = state_32007__$1;
(statearr_32039_32070[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (16))){
var inst_31991 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32040_32071 = state_32007__$1;
(statearr_32040_32071[(2)] = inst_31991);

(statearr_32040_32071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (10))){
var inst_31960 = (state_32007[(8)]);
var inst_31962 = (state_32007[(9)]);
var inst_31967 = cljs.core._nth.call(null,inst_31960,inst_31962);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32007__$1,(13),out,inst_31967);
} else {
if((state_val_32008 === (18))){
var inst_31973 = (state_32007[(7)]);
var inst_31982 = cljs.core.first.call(null,inst_31973);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32007__$1,(20),out,inst_31982);
} else {
if((state_val_32008 === (8))){
var inst_31962 = (state_32007[(9)]);
var inst_31961 = (state_32007[(12)]);
var inst_31964 = (inst_31962 < inst_31961);
var inst_31965 = inst_31964;
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31965)){
var statearr_32041_32072 = state_32007__$1;
(statearr_32041_32072[(1)] = (10));

} else {
var statearr_32042_32073 = state_32007__$1;
(statearr_32042_32073[(1)] = (11));

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
});})(c__29515__auto__))
;
return ((function (switch__29403__auto__,c__29515__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_32046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32046[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__);

(statearr_32046[(1)] = (1));

return statearr_32046;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____1 = (function (state_32007){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32047){if((e32047 instanceof Object)){
var ex__29407__auto__ = e32047;
var statearr_32048_32074 = state_32007;
(statearr_32048_32074[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32075 = state_32007;
state_32007 = G__32075;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__ = function(state_32007){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____1.call(this,state_32007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto__))
})();
var state__29517__auto__ = (function (){var statearr_32049 = f__29516__auto__.call(null);
(statearr_32049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto__);

return statearr_32049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto__))
);

return c__29515__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32076 = [];
var len__28417__auto___32079 = arguments.length;
var i__28418__auto___32080 = (0);
while(true){
if((i__28418__auto___32080 < len__28417__auto___32079)){
args32076.push((arguments[i__28418__auto___32080]));

var G__32081 = (i__28418__auto___32080 + (1));
i__28418__auto___32080 = G__32081;
continue;
} else {
}
break;
}

var G__32078 = args32076.length;
switch (G__32078) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32076.length)].join('')));

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
var args32083 = [];
var len__28417__auto___32086 = arguments.length;
var i__28418__auto___32087 = (0);
while(true){
if((i__28418__auto___32087 < len__28417__auto___32086)){
args32083.push((arguments[i__28418__auto___32087]));

var G__32088 = (i__28418__auto___32087 + (1));
i__28418__auto___32087 = G__32088;
continue;
} else {
}
break;
}

var G__32085 = args32083.length;
switch (G__32085) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32083.length)].join('')));

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
var args32090 = [];
var len__28417__auto___32141 = arguments.length;
var i__28418__auto___32142 = (0);
while(true){
if((i__28418__auto___32142 < len__28417__auto___32141)){
args32090.push((arguments[i__28418__auto___32142]));

var G__32143 = (i__28418__auto___32142 + (1));
i__28418__auto___32142 = G__32143;
continue;
} else {
}
break;
}

var G__32092 = args32090.length;
switch (G__32092) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32090.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29515__auto___32145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___32145,out){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___32145,out){
return (function (state_32116){
var state_val_32117 = (state_32116[(1)]);
if((state_val_32117 === (7))){
var inst_32111 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32118_32146 = state_32116__$1;
(statearr_32118_32146[(2)] = inst_32111);

(statearr_32118_32146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (1))){
var inst_32093 = null;
var state_32116__$1 = (function (){var statearr_32119 = state_32116;
(statearr_32119[(7)] = inst_32093);

return statearr_32119;
})();
var statearr_32120_32147 = state_32116__$1;
(statearr_32120_32147[(2)] = null);

(statearr_32120_32147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (4))){
var inst_32096 = (state_32116[(8)]);
var inst_32096__$1 = (state_32116[(2)]);
var inst_32097 = (inst_32096__$1 == null);
var inst_32098 = cljs.core.not.call(null,inst_32097);
var state_32116__$1 = (function (){var statearr_32121 = state_32116;
(statearr_32121[(8)] = inst_32096__$1);

return statearr_32121;
})();
if(inst_32098){
var statearr_32122_32148 = state_32116__$1;
(statearr_32122_32148[(1)] = (5));

} else {
var statearr_32123_32149 = state_32116__$1;
(statearr_32123_32149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (6))){
var state_32116__$1 = state_32116;
var statearr_32124_32150 = state_32116__$1;
(statearr_32124_32150[(2)] = null);

(statearr_32124_32150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (3))){
var inst_32113 = (state_32116[(2)]);
var inst_32114 = cljs.core.async.close_BANG_.call(null,out);
var state_32116__$1 = (function (){var statearr_32125 = state_32116;
(statearr_32125[(9)] = inst_32113);

return statearr_32125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32116__$1,inst_32114);
} else {
if((state_val_32117 === (2))){
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32116__$1,(4),ch);
} else {
if((state_val_32117 === (11))){
var inst_32096 = (state_32116[(8)]);
var inst_32105 = (state_32116[(2)]);
var inst_32093 = inst_32096;
var state_32116__$1 = (function (){var statearr_32126 = state_32116;
(statearr_32126[(10)] = inst_32105);

(statearr_32126[(7)] = inst_32093);

return statearr_32126;
})();
var statearr_32127_32151 = state_32116__$1;
(statearr_32127_32151[(2)] = null);

(statearr_32127_32151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (9))){
var inst_32096 = (state_32116[(8)]);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32116__$1,(11),out,inst_32096);
} else {
if((state_val_32117 === (5))){
var inst_32096 = (state_32116[(8)]);
var inst_32093 = (state_32116[(7)]);
var inst_32100 = cljs.core._EQ_.call(null,inst_32096,inst_32093);
var state_32116__$1 = state_32116;
if(inst_32100){
var statearr_32129_32152 = state_32116__$1;
(statearr_32129_32152[(1)] = (8));

} else {
var statearr_32130_32153 = state_32116__$1;
(statearr_32130_32153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (10))){
var inst_32108 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32131_32154 = state_32116__$1;
(statearr_32131_32154[(2)] = inst_32108);

(statearr_32131_32154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (8))){
var inst_32093 = (state_32116[(7)]);
var tmp32128 = inst_32093;
var inst_32093__$1 = tmp32128;
var state_32116__$1 = (function (){var statearr_32132 = state_32116;
(statearr_32132[(7)] = inst_32093__$1);

return statearr_32132;
})();
var statearr_32133_32155 = state_32116__$1;
(statearr_32133_32155[(2)] = null);

(statearr_32133_32155[(1)] = (2));


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
});})(c__29515__auto___32145,out))
;
return ((function (switch__29403__auto__,c__29515__auto___32145,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_32137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32137[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_32137[(1)] = (1));

return statearr_32137;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_32116){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32138){if((e32138 instanceof Object)){
var ex__29407__auto__ = e32138;
var statearr_32139_32156 = state_32116;
(statearr_32139_32156[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32157 = state_32116;
state_32116 = G__32157;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_32116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_32116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___32145,out))
})();
var state__29517__auto__ = (function (){var statearr_32140 = f__29516__auto__.call(null);
(statearr_32140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___32145);

return statearr_32140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___32145,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32158 = [];
var len__28417__auto___32228 = arguments.length;
var i__28418__auto___32229 = (0);
while(true){
if((i__28418__auto___32229 < len__28417__auto___32228)){
args32158.push((arguments[i__28418__auto___32229]));

var G__32230 = (i__28418__auto___32229 + (1));
i__28418__auto___32229 = G__32230;
continue;
} else {
}
break;
}

var G__32160 = args32158.length;
switch (G__32160) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32158.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29515__auto___32232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___32232,out){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___32232,out){
return (function (state_32198){
var state_val_32199 = (state_32198[(1)]);
if((state_val_32199 === (7))){
var inst_32194 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
var statearr_32200_32233 = state_32198__$1;
(statearr_32200_32233[(2)] = inst_32194);

(statearr_32200_32233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (1))){
var inst_32161 = (new Array(n));
var inst_32162 = inst_32161;
var inst_32163 = (0);
var state_32198__$1 = (function (){var statearr_32201 = state_32198;
(statearr_32201[(7)] = inst_32162);

(statearr_32201[(8)] = inst_32163);

return statearr_32201;
})();
var statearr_32202_32234 = state_32198__$1;
(statearr_32202_32234[(2)] = null);

(statearr_32202_32234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (4))){
var inst_32166 = (state_32198[(9)]);
var inst_32166__$1 = (state_32198[(2)]);
var inst_32167 = (inst_32166__$1 == null);
var inst_32168 = cljs.core.not.call(null,inst_32167);
var state_32198__$1 = (function (){var statearr_32203 = state_32198;
(statearr_32203[(9)] = inst_32166__$1);

return statearr_32203;
})();
if(inst_32168){
var statearr_32204_32235 = state_32198__$1;
(statearr_32204_32235[(1)] = (5));

} else {
var statearr_32205_32236 = state_32198__$1;
(statearr_32205_32236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (15))){
var inst_32188 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
var statearr_32206_32237 = state_32198__$1;
(statearr_32206_32237[(2)] = inst_32188);

(statearr_32206_32237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (13))){
var state_32198__$1 = state_32198;
var statearr_32207_32238 = state_32198__$1;
(statearr_32207_32238[(2)] = null);

(statearr_32207_32238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (6))){
var inst_32163 = (state_32198[(8)]);
var inst_32184 = (inst_32163 > (0));
var state_32198__$1 = state_32198;
if(cljs.core.truth_(inst_32184)){
var statearr_32208_32239 = state_32198__$1;
(statearr_32208_32239[(1)] = (12));

} else {
var statearr_32209_32240 = state_32198__$1;
(statearr_32209_32240[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (3))){
var inst_32196 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32198__$1,inst_32196);
} else {
if((state_val_32199 === (12))){
var inst_32162 = (state_32198[(7)]);
var inst_32186 = cljs.core.vec.call(null,inst_32162);
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32198__$1,(15),out,inst_32186);
} else {
if((state_val_32199 === (2))){
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32198__$1,(4),ch);
} else {
if((state_val_32199 === (11))){
var inst_32178 = (state_32198[(2)]);
var inst_32179 = (new Array(n));
var inst_32162 = inst_32179;
var inst_32163 = (0);
var state_32198__$1 = (function (){var statearr_32210 = state_32198;
(statearr_32210[(7)] = inst_32162);

(statearr_32210[(10)] = inst_32178);

(statearr_32210[(8)] = inst_32163);

return statearr_32210;
})();
var statearr_32211_32241 = state_32198__$1;
(statearr_32211_32241[(2)] = null);

(statearr_32211_32241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (9))){
var inst_32162 = (state_32198[(7)]);
var inst_32176 = cljs.core.vec.call(null,inst_32162);
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32198__$1,(11),out,inst_32176);
} else {
if((state_val_32199 === (5))){
var inst_32162 = (state_32198[(7)]);
var inst_32163 = (state_32198[(8)]);
var inst_32166 = (state_32198[(9)]);
var inst_32171 = (state_32198[(11)]);
var inst_32170 = (inst_32162[inst_32163] = inst_32166);
var inst_32171__$1 = (inst_32163 + (1));
var inst_32172 = (inst_32171__$1 < n);
var state_32198__$1 = (function (){var statearr_32212 = state_32198;
(statearr_32212[(12)] = inst_32170);

(statearr_32212[(11)] = inst_32171__$1);

return statearr_32212;
})();
if(cljs.core.truth_(inst_32172)){
var statearr_32213_32242 = state_32198__$1;
(statearr_32213_32242[(1)] = (8));

} else {
var statearr_32214_32243 = state_32198__$1;
(statearr_32214_32243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (14))){
var inst_32191 = (state_32198[(2)]);
var inst_32192 = cljs.core.async.close_BANG_.call(null,out);
var state_32198__$1 = (function (){var statearr_32216 = state_32198;
(statearr_32216[(13)] = inst_32191);

return statearr_32216;
})();
var statearr_32217_32244 = state_32198__$1;
(statearr_32217_32244[(2)] = inst_32192);

(statearr_32217_32244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (10))){
var inst_32182 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
var statearr_32218_32245 = state_32198__$1;
(statearr_32218_32245[(2)] = inst_32182);

(statearr_32218_32245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (8))){
var inst_32162 = (state_32198[(7)]);
var inst_32171 = (state_32198[(11)]);
var tmp32215 = inst_32162;
var inst_32162__$1 = tmp32215;
var inst_32163 = inst_32171;
var state_32198__$1 = (function (){var statearr_32219 = state_32198;
(statearr_32219[(7)] = inst_32162__$1);

(statearr_32219[(8)] = inst_32163);

return statearr_32219;
})();
var statearr_32220_32246 = state_32198__$1;
(statearr_32220_32246[(2)] = null);

(statearr_32220_32246[(1)] = (2));


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
});})(c__29515__auto___32232,out))
;
return ((function (switch__29403__auto__,c__29515__auto___32232,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_32224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32224[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_32224[(1)] = (1));

return statearr_32224;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_32198){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32225){if((e32225 instanceof Object)){
var ex__29407__auto__ = e32225;
var statearr_32226_32247 = state_32198;
(statearr_32226_32247[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32248 = state_32198;
state_32198 = G__32248;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_32198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_32198);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___32232,out))
})();
var state__29517__auto__ = (function (){var statearr_32227 = f__29516__auto__.call(null);
(statearr_32227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___32232);

return statearr_32227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___32232,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32249 = [];
var len__28417__auto___32323 = arguments.length;
var i__28418__auto___32324 = (0);
while(true){
if((i__28418__auto___32324 < len__28417__auto___32323)){
args32249.push((arguments[i__28418__auto___32324]));

var G__32325 = (i__28418__auto___32324 + (1));
i__28418__auto___32324 = G__32325;
continue;
} else {
}
break;
}

var G__32251 = args32249.length;
switch (G__32251) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32249.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29515__auto___32327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___32327,out){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___32327,out){
return (function (state_32293){
var state_val_32294 = (state_32293[(1)]);
if((state_val_32294 === (7))){
var inst_32289 = (state_32293[(2)]);
var state_32293__$1 = state_32293;
var statearr_32295_32328 = state_32293__$1;
(statearr_32295_32328[(2)] = inst_32289);

(statearr_32295_32328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (1))){
var inst_32252 = [];
var inst_32253 = inst_32252;
var inst_32254 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32293__$1 = (function (){var statearr_32296 = state_32293;
(statearr_32296[(7)] = inst_32253);

(statearr_32296[(8)] = inst_32254);

return statearr_32296;
})();
var statearr_32297_32329 = state_32293__$1;
(statearr_32297_32329[(2)] = null);

(statearr_32297_32329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (4))){
var inst_32257 = (state_32293[(9)]);
var inst_32257__$1 = (state_32293[(2)]);
var inst_32258 = (inst_32257__$1 == null);
var inst_32259 = cljs.core.not.call(null,inst_32258);
var state_32293__$1 = (function (){var statearr_32298 = state_32293;
(statearr_32298[(9)] = inst_32257__$1);

return statearr_32298;
})();
if(inst_32259){
var statearr_32299_32330 = state_32293__$1;
(statearr_32299_32330[(1)] = (5));

} else {
var statearr_32300_32331 = state_32293__$1;
(statearr_32300_32331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (15))){
var inst_32283 = (state_32293[(2)]);
var state_32293__$1 = state_32293;
var statearr_32301_32332 = state_32293__$1;
(statearr_32301_32332[(2)] = inst_32283);

(statearr_32301_32332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (13))){
var state_32293__$1 = state_32293;
var statearr_32302_32333 = state_32293__$1;
(statearr_32302_32333[(2)] = null);

(statearr_32302_32333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (6))){
var inst_32253 = (state_32293[(7)]);
var inst_32278 = inst_32253.length;
var inst_32279 = (inst_32278 > (0));
var state_32293__$1 = state_32293;
if(cljs.core.truth_(inst_32279)){
var statearr_32303_32334 = state_32293__$1;
(statearr_32303_32334[(1)] = (12));

} else {
var statearr_32304_32335 = state_32293__$1;
(statearr_32304_32335[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (3))){
var inst_32291 = (state_32293[(2)]);
var state_32293__$1 = state_32293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32293__$1,inst_32291);
} else {
if((state_val_32294 === (12))){
var inst_32253 = (state_32293[(7)]);
var inst_32281 = cljs.core.vec.call(null,inst_32253);
var state_32293__$1 = state_32293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32293__$1,(15),out,inst_32281);
} else {
if((state_val_32294 === (2))){
var state_32293__$1 = state_32293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32293__$1,(4),ch);
} else {
if((state_val_32294 === (11))){
var inst_32261 = (state_32293[(10)]);
var inst_32257 = (state_32293[(9)]);
var inst_32271 = (state_32293[(2)]);
var inst_32272 = [];
var inst_32273 = inst_32272.push(inst_32257);
var inst_32253 = inst_32272;
var inst_32254 = inst_32261;
var state_32293__$1 = (function (){var statearr_32305 = state_32293;
(statearr_32305[(7)] = inst_32253);

(statearr_32305[(11)] = inst_32271);

(statearr_32305[(12)] = inst_32273);

(statearr_32305[(8)] = inst_32254);

return statearr_32305;
})();
var statearr_32306_32336 = state_32293__$1;
(statearr_32306_32336[(2)] = null);

(statearr_32306_32336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (9))){
var inst_32253 = (state_32293[(7)]);
var inst_32269 = cljs.core.vec.call(null,inst_32253);
var state_32293__$1 = state_32293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32293__$1,(11),out,inst_32269);
} else {
if((state_val_32294 === (5))){
var inst_32254 = (state_32293[(8)]);
var inst_32261 = (state_32293[(10)]);
var inst_32257 = (state_32293[(9)]);
var inst_32261__$1 = f.call(null,inst_32257);
var inst_32262 = cljs.core._EQ_.call(null,inst_32261__$1,inst_32254);
var inst_32263 = cljs.core.keyword_identical_QMARK_.call(null,inst_32254,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32264 = (inst_32262) || (inst_32263);
var state_32293__$1 = (function (){var statearr_32307 = state_32293;
(statearr_32307[(10)] = inst_32261__$1);

return statearr_32307;
})();
if(cljs.core.truth_(inst_32264)){
var statearr_32308_32337 = state_32293__$1;
(statearr_32308_32337[(1)] = (8));

} else {
var statearr_32309_32338 = state_32293__$1;
(statearr_32309_32338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (14))){
var inst_32286 = (state_32293[(2)]);
var inst_32287 = cljs.core.async.close_BANG_.call(null,out);
var state_32293__$1 = (function (){var statearr_32311 = state_32293;
(statearr_32311[(13)] = inst_32286);

return statearr_32311;
})();
var statearr_32312_32339 = state_32293__$1;
(statearr_32312_32339[(2)] = inst_32287);

(statearr_32312_32339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (10))){
var inst_32276 = (state_32293[(2)]);
var state_32293__$1 = state_32293;
var statearr_32313_32340 = state_32293__$1;
(statearr_32313_32340[(2)] = inst_32276);

(statearr_32313_32340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (8))){
var inst_32253 = (state_32293[(7)]);
var inst_32261 = (state_32293[(10)]);
var inst_32257 = (state_32293[(9)]);
var inst_32266 = inst_32253.push(inst_32257);
var tmp32310 = inst_32253;
var inst_32253__$1 = tmp32310;
var inst_32254 = inst_32261;
var state_32293__$1 = (function (){var statearr_32314 = state_32293;
(statearr_32314[(7)] = inst_32253__$1);

(statearr_32314[(14)] = inst_32266);

(statearr_32314[(8)] = inst_32254);

return statearr_32314;
})();
var statearr_32315_32341 = state_32293__$1;
(statearr_32315_32341[(2)] = null);

(statearr_32315_32341[(1)] = (2));


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
});})(c__29515__auto___32327,out))
;
return ((function (switch__29403__auto__,c__29515__auto___32327,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_32319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32319[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_32319[(1)] = (1));

return statearr_32319;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_32293){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32320){if((e32320 instanceof Object)){
var ex__29407__auto__ = e32320;
var statearr_32321_32342 = state_32293;
(statearr_32321_32342[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32343 = state_32293;
state_32293 = G__32343;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_32293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_32293);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___32327,out))
})();
var state__29517__auto__ = (function (){var statearr_32322 = f__29516__auto__.call(null);
(statearr_32322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___32327);

return statearr_32322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___32327,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1497988465450