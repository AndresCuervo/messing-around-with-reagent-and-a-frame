// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args56305 = [];
var len__31428__auto___56311 = arguments.length;
var i__31429__auto___56312 = (0);
while(true){
if((i__31429__auto___56312 < len__31428__auto___56311)){
args56305.push((arguments[i__31429__auto___56312]));

var G__56313 = (i__31429__auto___56312 + (1));
i__31429__auto___56312 = G__56313;
continue;
} else {
}
break;
}

var G__56307 = args56305.length;
switch (G__56307) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56305.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async56308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56308 = (function (f,blockable,meta56309){
this.f = f;
this.blockable = blockable;
this.meta56309 = meta56309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56310,meta56309__$1){
var self__ = this;
var _56310__$1 = this;
return (new cljs.core.async.t_cljs$core$async56308(self__.f,self__.blockable,meta56309__$1));
});

cljs.core.async.t_cljs$core$async56308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56310){
var self__ = this;
var _56310__$1 = this;
return self__.meta56309;
});

cljs.core.async.t_cljs$core$async56308.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56308.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async56308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async56308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56309","meta56309",-680369278,null)], null);
});

cljs.core.async.t_cljs$core$async56308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56308";

cljs.core.async.t_cljs$core$async56308.cljs$lang$ctorPrWriter = (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.core.async/t_cljs$core$async56308");
});

cljs.core.async.__GT_t_cljs$core$async56308 = (function cljs$core$async$__GT_t_cljs$core$async56308(f__$1,blockable__$1,meta56309){
return (new cljs.core.async.t_cljs$core$async56308(f__$1,blockable__$1,meta56309));
});

}

return (new cljs.core.async.t_cljs$core$async56308(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args56317 = [];
var len__31428__auto___56320 = arguments.length;
var i__31429__auto___56321 = (0);
while(true){
if((i__31429__auto___56321 < len__31428__auto___56320)){
args56317.push((arguments[i__31429__auto___56321]));

var G__56322 = (i__31429__auto___56321 + (1));
i__31429__auto___56321 = G__56322;
continue;
} else {
}
break;
}

var G__56319 = args56317.length;
switch (G__56319) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56317.length)].join('')));

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
var args56324 = [];
var len__31428__auto___56327 = arguments.length;
var i__31429__auto___56328 = (0);
while(true){
if((i__31429__auto___56328 < len__31428__auto___56327)){
args56324.push((arguments[i__31429__auto___56328]));

var G__56329 = (i__31429__auto___56328 + (1));
i__31429__auto___56328 = G__56329;
continue;
} else {
}
break;
}

var G__56326 = args56324.length;
switch (G__56326) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56324.length)].join('')));

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
var args56331 = [];
var len__31428__auto___56334 = arguments.length;
var i__31429__auto___56335 = (0);
while(true){
if((i__31429__auto___56335 < len__31428__auto___56334)){
args56331.push((arguments[i__31429__auto___56335]));

var G__56336 = (i__31429__auto___56335 + (1));
i__31429__auto___56335 = G__56336;
continue;
} else {
}
break;
}

var G__56333 = args56331.length;
switch (G__56333) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56331.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_56338 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_56338);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_56338,ret){
return (function (){
return fn1.call(null,val_56338);
});})(val_56338,ret))
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
var args56339 = [];
var len__31428__auto___56342 = arguments.length;
var i__31429__auto___56343 = (0);
while(true){
if((i__31429__auto___56343 < len__31428__auto___56342)){
args56339.push((arguments[i__31429__auto___56343]));

var G__56344 = (i__31429__auto___56343 + (1));
i__31429__auto___56343 = G__56344;
continue;
} else {
}
break;
}

var G__56341 = args56339.length;
switch (G__56341) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56339.length)].join('')));

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
var n__31238__auto___56346 = n;
var x_56347 = (0);
while(true){
if((x_56347 < n__31238__auto___56346)){
(a[x_56347] = (0));

var G__56348 = (x_56347 + (1));
x_56347 = G__56348;
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

var G__56349 = (i + (1));
i = G__56349;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async56353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56353 = (function (flag,meta56354){
this.flag = flag;
this.meta56354 = meta56354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_56355,meta56354__$1){
var self__ = this;
var _56355__$1 = this;
return (new cljs.core.async.t_cljs$core$async56353(self__.flag,meta56354__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async56353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_56355){
var self__ = this;
var _56355__$1 = this;
return self__.meta56354;
});})(flag))
;

cljs.core.async.t_cljs$core$async56353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async56353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56353.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56354","meta56354",1488753904,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async56353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56353";

cljs.core.async.t_cljs$core$async56353.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.core.async/t_cljs$core$async56353");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async56353 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56353(flag__$1,meta56354){
return (new cljs.core.async.t_cljs$core$async56353(flag__$1,meta56354));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async56353(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async56359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56359 = (function (flag,cb,meta56360){
this.flag = flag;
this.cb = cb;
this.meta56360 = meta56360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56361,meta56360__$1){
var self__ = this;
var _56361__$1 = this;
return (new cljs.core.async.t_cljs$core$async56359(self__.flag,self__.cb,meta56360__$1));
});

cljs.core.async.t_cljs$core$async56359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56361){
var self__ = this;
var _56361__$1 = this;
return self__.meta56360;
});

cljs.core.async.t_cljs$core$async56359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async56359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async56359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56360","meta56360",978466050,null)], null);
});

cljs.core.async.t_cljs$core$async56359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56359";

cljs.core.async.t_cljs$core$async56359.cljs$lang$ctorPrWriter = (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.core.async/t_cljs$core$async56359");
});

cljs.core.async.__GT_t_cljs$core$async56359 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56359(flag__$1,cb__$1,meta56360){
return (new cljs.core.async.t_cljs$core$async56359(flag__$1,cb__$1,meta56360));
});

}

return (new cljs.core.async.t_cljs$core$async56359(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__56362_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56362_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56363_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56363_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30315__auto__ = wport;
if(cljs.core.truth_(or__30315__auto__)){
return or__30315__auto__;
} else {
return port;
}
})()], null));
} else {
var G__56364 = (i + (1));
i = G__56364;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30315__auto__ = ret;
if(cljs.core.truth_(or__30315__auto__)){
return or__30315__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__30303__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30303__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30303__auto__;
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
var args__31435__auto__ = [];
var len__31428__auto___56370 = arguments.length;
var i__31429__auto___56371 = (0);
while(true){
if((i__31429__auto___56371 < len__31428__auto___56370)){
args__31435__auto__.push((arguments[i__31429__auto___56371]));

var G__56372 = (i__31429__auto___56371 + (1));
i__31429__auto___56371 = G__56372;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((1) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31436__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56367){
var map__56368 = p__56367;
var map__56368__$1 = ((((!((map__56368 == null)))?((((map__56368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56368):map__56368);
var opts = map__56368__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56365){
var G__56366 = cljs.core.first.call(null,seq56365);
var seq56365__$1 = cljs.core.next.call(null,seq56365);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56366,seq56365__$1);
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
var args56373 = [];
var len__31428__auto___56423 = arguments.length;
var i__31429__auto___56424 = (0);
while(true){
if((i__31429__auto___56424 < len__31428__auto___56423)){
args56373.push((arguments[i__31429__auto___56424]));

var G__56425 = (i__31429__auto___56424 + (1));
i__31429__auto___56424 = G__56425;
continue;
} else {
}
break;
}

var G__56375 = args56373.length;
switch (G__56375) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56373.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33417__auto___56427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___56427){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___56427){
return (function (state_56399){
var state_val_56400 = (state_56399[(1)]);
if((state_val_56400 === (7))){
var inst_56395 = (state_56399[(2)]);
var state_56399__$1 = state_56399;
var statearr_56401_56428 = state_56399__$1;
(statearr_56401_56428[(2)] = inst_56395);

(statearr_56401_56428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56400 === (1))){
var state_56399__$1 = state_56399;
var statearr_56402_56429 = state_56399__$1;
(statearr_56402_56429[(2)] = null);

(statearr_56402_56429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56400 === (4))){
var inst_56378 = (state_56399[(7)]);
var inst_56378__$1 = (state_56399[(2)]);
var inst_56379 = (inst_56378__$1 == null);
var state_56399__$1 = (function (){var statearr_56403 = state_56399;
(statearr_56403[(7)] = inst_56378__$1);

return statearr_56403;
})();
if(cljs.core.truth_(inst_56379)){
var statearr_56404_56430 = state_56399__$1;
(statearr_56404_56430[(1)] = (5));

} else {
var statearr_56405_56431 = state_56399__$1;
(statearr_56405_56431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56400 === (13))){
var state_56399__$1 = state_56399;
var statearr_56406_56432 = state_56399__$1;
(statearr_56406_56432[(2)] = null);

(statearr_56406_56432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56400 === (6))){
var inst_56378 = (state_56399[(7)]);
var state_56399__$1 = state_56399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56399__$1,(11),to,inst_56378);
} else {
if((state_val_56400 === (3))){
var inst_56397 = (state_56399[(2)]);
var state_56399__$1 = state_56399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56399__$1,inst_56397);
} else {
if((state_val_56400 === (12))){
var state_56399__$1 = state_56399;
var statearr_56407_56433 = state_56399__$1;
(statearr_56407_56433[(2)] = null);

(statearr_56407_56433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56400 === (2))){
var state_56399__$1 = state_56399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56399__$1,(4),from);
} else {
if((state_val_56400 === (11))){
var inst_56388 = (state_56399[(2)]);
var state_56399__$1 = state_56399;
if(cljs.core.truth_(inst_56388)){
var statearr_56408_56434 = state_56399__$1;
(statearr_56408_56434[(1)] = (12));

} else {
var statearr_56409_56435 = state_56399__$1;
(statearr_56409_56435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56400 === (9))){
var state_56399__$1 = state_56399;
var statearr_56410_56436 = state_56399__$1;
(statearr_56410_56436[(2)] = null);

(statearr_56410_56436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56400 === (5))){
var state_56399__$1 = state_56399;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56411_56437 = state_56399__$1;
(statearr_56411_56437[(1)] = (8));

} else {
var statearr_56412_56438 = state_56399__$1;
(statearr_56412_56438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56400 === (14))){
var inst_56393 = (state_56399[(2)]);
var state_56399__$1 = state_56399;
var statearr_56413_56439 = state_56399__$1;
(statearr_56413_56439[(2)] = inst_56393);

(statearr_56413_56439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56400 === (10))){
var inst_56385 = (state_56399[(2)]);
var state_56399__$1 = state_56399;
var statearr_56414_56440 = state_56399__$1;
(statearr_56414_56440[(2)] = inst_56385);

(statearr_56414_56440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56400 === (8))){
var inst_56382 = cljs.core.async.close_BANG_.call(null,to);
var state_56399__$1 = state_56399;
var statearr_56415_56441 = state_56399__$1;
(statearr_56415_56441[(2)] = inst_56382);

(statearr_56415_56441[(1)] = (10));


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
});})(c__33417__auto___56427))
;
return ((function (switch__33305__auto__,c__33417__auto___56427){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_56419 = [null,null,null,null,null,null,null,null];
(statearr_56419[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_56419[(1)] = (1));

return statearr_56419;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_56399){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_56399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e56420){if((e56420 instanceof Object)){
var ex__33309__auto__ = e56420;
var statearr_56421_56442 = state_56399;
(statearr_56421_56442[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56443 = state_56399;
state_56399 = G__56443;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_56399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_56399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___56427))
})();
var state__33419__auto__ = (function (){var statearr_56422 = f__33418__auto__.call(null);
(statearr_56422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___56427);

return statearr_56422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___56427))
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
return (function (p__56631){
var vec__56632 = p__56631;
var v = cljs.core.nth.call(null,vec__56632,(0),null);
var p = cljs.core.nth.call(null,vec__56632,(1),null);
var job = vec__56632;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33417__auto___56818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___56818,res,vec__56632,v,p,job,jobs,results){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___56818,res,vec__56632,v,p,job,jobs,results){
return (function (state_56639){
var state_val_56640 = (state_56639[(1)]);
if((state_val_56640 === (1))){
var state_56639__$1 = state_56639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56639__$1,(2),res,v);
} else {
if((state_val_56640 === (2))){
var inst_56636 = (state_56639[(2)]);
var inst_56637 = cljs.core.async.close_BANG_.call(null,res);
var state_56639__$1 = (function (){var statearr_56641 = state_56639;
(statearr_56641[(7)] = inst_56636);

return statearr_56641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56639__$1,inst_56637);
} else {
return null;
}
}
});})(c__33417__auto___56818,res,vec__56632,v,p,job,jobs,results))
;
return ((function (switch__33305__auto__,c__33417__auto___56818,res,vec__56632,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0 = (function (){
var statearr_56645 = [null,null,null,null,null,null,null,null];
(statearr_56645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__);

(statearr_56645[(1)] = (1));

return statearr_56645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1 = (function (state_56639){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_56639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e56646){if((e56646 instanceof Object)){
var ex__33309__auto__ = e56646;
var statearr_56647_56819 = state_56639;
(statearr_56647_56819[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56820 = state_56639;
state_56639 = G__56820;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__ = function(state_56639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1.call(this,state_56639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___56818,res,vec__56632,v,p,job,jobs,results))
})();
var state__33419__auto__ = (function (){var statearr_56648 = f__33418__auto__.call(null);
(statearr_56648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___56818);

return statearr_56648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___56818,res,vec__56632,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__56649){
var vec__56650 = p__56649;
var v = cljs.core.nth.call(null,vec__56650,(0),null);
var p = cljs.core.nth.call(null,vec__56650,(1),null);
var job = vec__56650;
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
var n__31238__auto___56821 = n;
var __56822 = (0);
while(true){
if((__56822 < n__31238__auto___56821)){
var G__56653_56823 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__56653_56823) {
case "compute":
var c__33417__auto___56825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__56822,c__33417__auto___56825,G__56653_56823,n__31238__auto___56821,jobs,results,process,async){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (__56822,c__33417__auto___56825,G__56653_56823,n__31238__auto___56821,jobs,results,process,async){
return (function (state_56666){
var state_val_56667 = (state_56666[(1)]);
if((state_val_56667 === (1))){
var state_56666__$1 = state_56666;
var statearr_56668_56826 = state_56666__$1;
(statearr_56668_56826[(2)] = null);

(statearr_56668_56826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (2))){
var state_56666__$1 = state_56666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56666__$1,(4),jobs);
} else {
if((state_val_56667 === (3))){
var inst_56664 = (state_56666[(2)]);
var state_56666__$1 = state_56666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56666__$1,inst_56664);
} else {
if((state_val_56667 === (4))){
var inst_56656 = (state_56666[(2)]);
var inst_56657 = process.call(null,inst_56656);
var state_56666__$1 = state_56666;
if(cljs.core.truth_(inst_56657)){
var statearr_56669_56827 = state_56666__$1;
(statearr_56669_56827[(1)] = (5));

} else {
var statearr_56670_56828 = state_56666__$1;
(statearr_56670_56828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (5))){
var state_56666__$1 = state_56666;
var statearr_56671_56829 = state_56666__$1;
(statearr_56671_56829[(2)] = null);

(statearr_56671_56829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (6))){
var state_56666__$1 = state_56666;
var statearr_56672_56830 = state_56666__$1;
(statearr_56672_56830[(2)] = null);

(statearr_56672_56830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (7))){
var inst_56662 = (state_56666[(2)]);
var state_56666__$1 = state_56666;
var statearr_56673_56831 = state_56666__$1;
(statearr_56673_56831[(2)] = inst_56662);

(statearr_56673_56831[(1)] = (3));


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
});})(__56822,c__33417__auto___56825,G__56653_56823,n__31238__auto___56821,jobs,results,process,async))
;
return ((function (__56822,switch__33305__auto__,c__33417__auto___56825,G__56653_56823,n__31238__auto___56821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0 = (function (){
var statearr_56677 = [null,null,null,null,null,null,null];
(statearr_56677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__);

(statearr_56677[(1)] = (1));

return statearr_56677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1 = (function (state_56666){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_56666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e56678){if((e56678 instanceof Object)){
var ex__33309__auto__ = e56678;
var statearr_56679_56832 = state_56666;
(statearr_56679_56832[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56833 = state_56666;
state_56666 = G__56833;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__ = function(state_56666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1.call(this,state_56666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__;
})()
;})(__56822,switch__33305__auto__,c__33417__auto___56825,G__56653_56823,n__31238__auto___56821,jobs,results,process,async))
})();
var state__33419__auto__ = (function (){var statearr_56680 = f__33418__auto__.call(null);
(statearr_56680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___56825);

return statearr_56680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(__56822,c__33417__auto___56825,G__56653_56823,n__31238__auto___56821,jobs,results,process,async))
);


break;
case "async":
var c__33417__auto___56834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__56822,c__33417__auto___56834,G__56653_56823,n__31238__auto___56821,jobs,results,process,async){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (__56822,c__33417__auto___56834,G__56653_56823,n__31238__auto___56821,jobs,results,process,async){
return (function (state_56693){
var state_val_56694 = (state_56693[(1)]);
if((state_val_56694 === (1))){
var state_56693__$1 = state_56693;
var statearr_56695_56835 = state_56693__$1;
(statearr_56695_56835[(2)] = null);

(statearr_56695_56835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56694 === (2))){
var state_56693__$1 = state_56693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56693__$1,(4),jobs);
} else {
if((state_val_56694 === (3))){
var inst_56691 = (state_56693[(2)]);
var state_56693__$1 = state_56693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56693__$1,inst_56691);
} else {
if((state_val_56694 === (4))){
var inst_56683 = (state_56693[(2)]);
var inst_56684 = async.call(null,inst_56683);
var state_56693__$1 = state_56693;
if(cljs.core.truth_(inst_56684)){
var statearr_56696_56836 = state_56693__$1;
(statearr_56696_56836[(1)] = (5));

} else {
var statearr_56697_56837 = state_56693__$1;
(statearr_56697_56837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56694 === (5))){
var state_56693__$1 = state_56693;
var statearr_56698_56838 = state_56693__$1;
(statearr_56698_56838[(2)] = null);

(statearr_56698_56838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56694 === (6))){
var state_56693__$1 = state_56693;
var statearr_56699_56839 = state_56693__$1;
(statearr_56699_56839[(2)] = null);

(statearr_56699_56839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56694 === (7))){
var inst_56689 = (state_56693[(2)]);
var state_56693__$1 = state_56693;
var statearr_56700_56840 = state_56693__$1;
(statearr_56700_56840[(2)] = inst_56689);

(statearr_56700_56840[(1)] = (3));


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
});})(__56822,c__33417__auto___56834,G__56653_56823,n__31238__auto___56821,jobs,results,process,async))
;
return ((function (__56822,switch__33305__auto__,c__33417__auto___56834,G__56653_56823,n__31238__auto___56821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0 = (function (){
var statearr_56704 = [null,null,null,null,null,null,null];
(statearr_56704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__);

(statearr_56704[(1)] = (1));

return statearr_56704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1 = (function (state_56693){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_56693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e56705){if((e56705 instanceof Object)){
var ex__33309__auto__ = e56705;
var statearr_56706_56841 = state_56693;
(statearr_56706_56841[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56842 = state_56693;
state_56693 = G__56842;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__ = function(state_56693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1.call(this,state_56693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__;
})()
;})(__56822,switch__33305__auto__,c__33417__auto___56834,G__56653_56823,n__31238__auto___56821,jobs,results,process,async))
})();
var state__33419__auto__ = (function (){var statearr_56707 = f__33418__auto__.call(null);
(statearr_56707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___56834);

return statearr_56707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(__56822,c__33417__auto___56834,G__56653_56823,n__31238__auto___56821,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__56843 = (__56822 + (1));
__56822 = G__56843;
continue;
} else {
}
break;
}

var c__33417__auto___56844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___56844,jobs,results,process,async){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___56844,jobs,results,process,async){
return (function (state_56729){
var state_val_56730 = (state_56729[(1)]);
if((state_val_56730 === (1))){
var state_56729__$1 = state_56729;
var statearr_56731_56845 = state_56729__$1;
(statearr_56731_56845[(2)] = null);

(statearr_56731_56845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56730 === (2))){
var state_56729__$1 = state_56729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56729__$1,(4),from);
} else {
if((state_val_56730 === (3))){
var inst_56727 = (state_56729[(2)]);
var state_56729__$1 = state_56729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56729__$1,inst_56727);
} else {
if((state_val_56730 === (4))){
var inst_56710 = (state_56729[(7)]);
var inst_56710__$1 = (state_56729[(2)]);
var inst_56711 = (inst_56710__$1 == null);
var state_56729__$1 = (function (){var statearr_56732 = state_56729;
(statearr_56732[(7)] = inst_56710__$1);

return statearr_56732;
})();
if(cljs.core.truth_(inst_56711)){
var statearr_56733_56846 = state_56729__$1;
(statearr_56733_56846[(1)] = (5));

} else {
var statearr_56734_56847 = state_56729__$1;
(statearr_56734_56847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56730 === (5))){
var inst_56713 = cljs.core.async.close_BANG_.call(null,jobs);
var state_56729__$1 = state_56729;
var statearr_56735_56848 = state_56729__$1;
(statearr_56735_56848[(2)] = inst_56713);

(statearr_56735_56848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56730 === (6))){
var inst_56715 = (state_56729[(8)]);
var inst_56710 = (state_56729[(7)]);
var inst_56715__$1 = cljs.core.async.chan.call(null,(1));
var inst_56716 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56717 = [inst_56710,inst_56715__$1];
var inst_56718 = (new cljs.core.PersistentVector(null,2,(5),inst_56716,inst_56717,null));
var state_56729__$1 = (function (){var statearr_56736 = state_56729;
(statearr_56736[(8)] = inst_56715__$1);

return statearr_56736;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56729__$1,(8),jobs,inst_56718);
} else {
if((state_val_56730 === (7))){
var inst_56725 = (state_56729[(2)]);
var state_56729__$1 = state_56729;
var statearr_56737_56849 = state_56729__$1;
(statearr_56737_56849[(2)] = inst_56725);

(statearr_56737_56849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56730 === (8))){
var inst_56715 = (state_56729[(8)]);
var inst_56720 = (state_56729[(2)]);
var state_56729__$1 = (function (){var statearr_56738 = state_56729;
(statearr_56738[(9)] = inst_56720);

return statearr_56738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56729__$1,(9),results,inst_56715);
} else {
if((state_val_56730 === (9))){
var inst_56722 = (state_56729[(2)]);
var state_56729__$1 = (function (){var statearr_56739 = state_56729;
(statearr_56739[(10)] = inst_56722);

return statearr_56739;
})();
var statearr_56740_56850 = state_56729__$1;
(statearr_56740_56850[(2)] = null);

(statearr_56740_56850[(1)] = (2));


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
});})(c__33417__auto___56844,jobs,results,process,async))
;
return ((function (switch__33305__auto__,c__33417__auto___56844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0 = (function (){
var statearr_56744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__);

(statearr_56744[(1)] = (1));

return statearr_56744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1 = (function (state_56729){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_56729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e56745){if((e56745 instanceof Object)){
var ex__33309__auto__ = e56745;
var statearr_56746_56851 = state_56729;
(statearr_56746_56851[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56852 = state_56729;
state_56729 = G__56852;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__ = function(state_56729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1.call(this,state_56729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___56844,jobs,results,process,async))
})();
var state__33419__auto__ = (function (){var statearr_56747 = f__33418__auto__.call(null);
(statearr_56747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___56844);

return statearr_56747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___56844,jobs,results,process,async))
);


var c__33417__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto__,jobs,results,process,async){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto__,jobs,results,process,async){
return (function (state_56785){
var state_val_56786 = (state_56785[(1)]);
if((state_val_56786 === (7))){
var inst_56781 = (state_56785[(2)]);
var state_56785__$1 = state_56785;
var statearr_56787_56853 = state_56785__$1;
(statearr_56787_56853[(2)] = inst_56781);

(statearr_56787_56853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (20))){
var state_56785__$1 = state_56785;
var statearr_56788_56854 = state_56785__$1;
(statearr_56788_56854[(2)] = null);

(statearr_56788_56854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (1))){
var state_56785__$1 = state_56785;
var statearr_56789_56855 = state_56785__$1;
(statearr_56789_56855[(2)] = null);

(statearr_56789_56855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (4))){
var inst_56750 = (state_56785[(7)]);
var inst_56750__$1 = (state_56785[(2)]);
var inst_56751 = (inst_56750__$1 == null);
var state_56785__$1 = (function (){var statearr_56790 = state_56785;
(statearr_56790[(7)] = inst_56750__$1);

return statearr_56790;
})();
if(cljs.core.truth_(inst_56751)){
var statearr_56791_56856 = state_56785__$1;
(statearr_56791_56856[(1)] = (5));

} else {
var statearr_56792_56857 = state_56785__$1;
(statearr_56792_56857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (15))){
var inst_56763 = (state_56785[(8)]);
var state_56785__$1 = state_56785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56785__$1,(18),to,inst_56763);
} else {
if((state_val_56786 === (21))){
var inst_56776 = (state_56785[(2)]);
var state_56785__$1 = state_56785;
var statearr_56793_56858 = state_56785__$1;
(statearr_56793_56858[(2)] = inst_56776);

(statearr_56793_56858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (13))){
var inst_56778 = (state_56785[(2)]);
var state_56785__$1 = (function (){var statearr_56794 = state_56785;
(statearr_56794[(9)] = inst_56778);

return statearr_56794;
})();
var statearr_56795_56859 = state_56785__$1;
(statearr_56795_56859[(2)] = null);

(statearr_56795_56859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (6))){
var inst_56750 = (state_56785[(7)]);
var state_56785__$1 = state_56785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56785__$1,(11),inst_56750);
} else {
if((state_val_56786 === (17))){
var inst_56771 = (state_56785[(2)]);
var state_56785__$1 = state_56785;
if(cljs.core.truth_(inst_56771)){
var statearr_56796_56860 = state_56785__$1;
(statearr_56796_56860[(1)] = (19));

} else {
var statearr_56797_56861 = state_56785__$1;
(statearr_56797_56861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (3))){
var inst_56783 = (state_56785[(2)]);
var state_56785__$1 = state_56785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56785__$1,inst_56783);
} else {
if((state_val_56786 === (12))){
var inst_56760 = (state_56785[(10)]);
var state_56785__$1 = state_56785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56785__$1,(14),inst_56760);
} else {
if((state_val_56786 === (2))){
var state_56785__$1 = state_56785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56785__$1,(4),results);
} else {
if((state_val_56786 === (19))){
var state_56785__$1 = state_56785;
var statearr_56798_56862 = state_56785__$1;
(statearr_56798_56862[(2)] = null);

(statearr_56798_56862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (11))){
var inst_56760 = (state_56785[(2)]);
var state_56785__$1 = (function (){var statearr_56799 = state_56785;
(statearr_56799[(10)] = inst_56760);

return statearr_56799;
})();
var statearr_56800_56863 = state_56785__$1;
(statearr_56800_56863[(2)] = null);

(statearr_56800_56863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (9))){
var state_56785__$1 = state_56785;
var statearr_56801_56864 = state_56785__$1;
(statearr_56801_56864[(2)] = null);

(statearr_56801_56864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (5))){
var state_56785__$1 = state_56785;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56802_56865 = state_56785__$1;
(statearr_56802_56865[(1)] = (8));

} else {
var statearr_56803_56866 = state_56785__$1;
(statearr_56803_56866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (14))){
var inst_56765 = (state_56785[(11)]);
var inst_56763 = (state_56785[(8)]);
var inst_56763__$1 = (state_56785[(2)]);
var inst_56764 = (inst_56763__$1 == null);
var inst_56765__$1 = cljs.core.not.call(null,inst_56764);
var state_56785__$1 = (function (){var statearr_56804 = state_56785;
(statearr_56804[(11)] = inst_56765__$1);

(statearr_56804[(8)] = inst_56763__$1);

return statearr_56804;
})();
if(inst_56765__$1){
var statearr_56805_56867 = state_56785__$1;
(statearr_56805_56867[(1)] = (15));

} else {
var statearr_56806_56868 = state_56785__$1;
(statearr_56806_56868[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (16))){
var inst_56765 = (state_56785[(11)]);
var state_56785__$1 = state_56785;
var statearr_56807_56869 = state_56785__$1;
(statearr_56807_56869[(2)] = inst_56765);

(statearr_56807_56869[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (10))){
var inst_56757 = (state_56785[(2)]);
var state_56785__$1 = state_56785;
var statearr_56808_56870 = state_56785__$1;
(statearr_56808_56870[(2)] = inst_56757);

(statearr_56808_56870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (18))){
var inst_56768 = (state_56785[(2)]);
var state_56785__$1 = state_56785;
var statearr_56809_56871 = state_56785__$1;
(statearr_56809_56871[(2)] = inst_56768);

(statearr_56809_56871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56786 === (8))){
var inst_56754 = cljs.core.async.close_BANG_.call(null,to);
var state_56785__$1 = state_56785;
var statearr_56810_56872 = state_56785__$1;
(statearr_56810_56872[(2)] = inst_56754);

(statearr_56810_56872[(1)] = (10));


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
});})(c__33417__auto__,jobs,results,process,async))
;
return ((function (switch__33305__auto__,c__33417__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0 = (function (){
var statearr_56814 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__);

(statearr_56814[(1)] = (1));

return statearr_56814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1 = (function (state_56785){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_56785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e56815){if((e56815 instanceof Object)){
var ex__33309__auto__ = e56815;
var statearr_56816_56873 = state_56785;
(statearr_56816_56873[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56874 = state_56785;
state_56785 = G__56874;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__ = function(state_56785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1.call(this,state_56785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto__,jobs,results,process,async))
})();
var state__33419__auto__ = (function (){var statearr_56817 = f__33418__auto__.call(null);
(statearr_56817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto__);

return statearr_56817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto__,jobs,results,process,async))
);

return c__33417__auto__;
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
var args56875 = [];
var len__31428__auto___56878 = arguments.length;
var i__31429__auto___56879 = (0);
while(true){
if((i__31429__auto___56879 < len__31428__auto___56878)){
args56875.push((arguments[i__31429__auto___56879]));

var G__56880 = (i__31429__auto___56879 + (1));
i__31429__auto___56879 = G__56880;
continue;
} else {
}
break;
}

var G__56877 = args56875.length;
switch (G__56877) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56875.length)].join('')));

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
var args56882 = [];
var len__31428__auto___56885 = arguments.length;
var i__31429__auto___56886 = (0);
while(true){
if((i__31429__auto___56886 < len__31428__auto___56885)){
args56882.push((arguments[i__31429__auto___56886]));

var G__56887 = (i__31429__auto___56886 + (1));
i__31429__auto___56886 = G__56887;
continue;
} else {
}
break;
}

var G__56884 = args56882.length;
switch (G__56884) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56882.length)].join('')));

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
var args56889 = [];
var len__31428__auto___56942 = arguments.length;
var i__31429__auto___56943 = (0);
while(true){
if((i__31429__auto___56943 < len__31428__auto___56942)){
args56889.push((arguments[i__31429__auto___56943]));

var G__56944 = (i__31429__auto___56943 + (1));
i__31429__auto___56943 = G__56944;
continue;
} else {
}
break;
}

var G__56891 = args56889.length;
switch (G__56891) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56889.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33417__auto___56946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___56946,tc,fc){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___56946,tc,fc){
return (function (state_56917){
var state_val_56918 = (state_56917[(1)]);
if((state_val_56918 === (7))){
var inst_56913 = (state_56917[(2)]);
var state_56917__$1 = state_56917;
var statearr_56919_56947 = state_56917__$1;
(statearr_56919_56947[(2)] = inst_56913);

(statearr_56919_56947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (1))){
var state_56917__$1 = state_56917;
var statearr_56920_56948 = state_56917__$1;
(statearr_56920_56948[(2)] = null);

(statearr_56920_56948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (4))){
var inst_56894 = (state_56917[(7)]);
var inst_56894__$1 = (state_56917[(2)]);
var inst_56895 = (inst_56894__$1 == null);
var state_56917__$1 = (function (){var statearr_56921 = state_56917;
(statearr_56921[(7)] = inst_56894__$1);

return statearr_56921;
})();
if(cljs.core.truth_(inst_56895)){
var statearr_56922_56949 = state_56917__$1;
(statearr_56922_56949[(1)] = (5));

} else {
var statearr_56923_56950 = state_56917__$1;
(statearr_56923_56950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (13))){
var state_56917__$1 = state_56917;
var statearr_56924_56951 = state_56917__$1;
(statearr_56924_56951[(2)] = null);

(statearr_56924_56951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (6))){
var inst_56894 = (state_56917[(7)]);
var inst_56900 = p.call(null,inst_56894);
var state_56917__$1 = state_56917;
if(cljs.core.truth_(inst_56900)){
var statearr_56925_56952 = state_56917__$1;
(statearr_56925_56952[(1)] = (9));

} else {
var statearr_56926_56953 = state_56917__$1;
(statearr_56926_56953[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (3))){
var inst_56915 = (state_56917[(2)]);
var state_56917__$1 = state_56917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56917__$1,inst_56915);
} else {
if((state_val_56918 === (12))){
var state_56917__$1 = state_56917;
var statearr_56927_56954 = state_56917__$1;
(statearr_56927_56954[(2)] = null);

(statearr_56927_56954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (2))){
var state_56917__$1 = state_56917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56917__$1,(4),ch);
} else {
if((state_val_56918 === (11))){
var inst_56894 = (state_56917[(7)]);
var inst_56904 = (state_56917[(2)]);
var state_56917__$1 = state_56917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56917__$1,(8),inst_56904,inst_56894);
} else {
if((state_val_56918 === (9))){
var state_56917__$1 = state_56917;
var statearr_56928_56955 = state_56917__$1;
(statearr_56928_56955[(2)] = tc);

(statearr_56928_56955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (5))){
var inst_56897 = cljs.core.async.close_BANG_.call(null,tc);
var inst_56898 = cljs.core.async.close_BANG_.call(null,fc);
var state_56917__$1 = (function (){var statearr_56929 = state_56917;
(statearr_56929[(8)] = inst_56897);

return statearr_56929;
})();
var statearr_56930_56956 = state_56917__$1;
(statearr_56930_56956[(2)] = inst_56898);

(statearr_56930_56956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (14))){
var inst_56911 = (state_56917[(2)]);
var state_56917__$1 = state_56917;
var statearr_56931_56957 = state_56917__$1;
(statearr_56931_56957[(2)] = inst_56911);

(statearr_56931_56957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (10))){
var state_56917__$1 = state_56917;
var statearr_56932_56958 = state_56917__$1;
(statearr_56932_56958[(2)] = fc);

(statearr_56932_56958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56918 === (8))){
var inst_56906 = (state_56917[(2)]);
var state_56917__$1 = state_56917;
if(cljs.core.truth_(inst_56906)){
var statearr_56933_56959 = state_56917__$1;
(statearr_56933_56959[(1)] = (12));

} else {
var statearr_56934_56960 = state_56917__$1;
(statearr_56934_56960[(1)] = (13));

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
});})(c__33417__auto___56946,tc,fc))
;
return ((function (switch__33305__auto__,c__33417__auto___56946,tc,fc){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_56938 = [null,null,null,null,null,null,null,null,null];
(statearr_56938[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_56938[(1)] = (1));

return statearr_56938;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_56917){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_56917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e56939){if((e56939 instanceof Object)){
var ex__33309__auto__ = e56939;
var statearr_56940_56961 = state_56917;
(statearr_56940_56961[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56962 = state_56917;
state_56917 = G__56962;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_56917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_56917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___56946,tc,fc))
})();
var state__33419__auto__ = (function (){var statearr_56941 = f__33418__auto__.call(null);
(statearr_56941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___56946);

return statearr_56941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___56946,tc,fc))
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
var c__33417__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto__){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto__){
return (function (state_57026){
var state_val_57027 = (state_57026[(1)]);
if((state_val_57027 === (7))){
var inst_57022 = (state_57026[(2)]);
var state_57026__$1 = state_57026;
var statearr_57028_57049 = state_57026__$1;
(statearr_57028_57049[(2)] = inst_57022);

(statearr_57028_57049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57027 === (1))){
var inst_57006 = init;
var state_57026__$1 = (function (){var statearr_57029 = state_57026;
(statearr_57029[(7)] = inst_57006);

return statearr_57029;
})();
var statearr_57030_57050 = state_57026__$1;
(statearr_57030_57050[(2)] = null);

(statearr_57030_57050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57027 === (4))){
var inst_57009 = (state_57026[(8)]);
var inst_57009__$1 = (state_57026[(2)]);
var inst_57010 = (inst_57009__$1 == null);
var state_57026__$1 = (function (){var statearr_57031 = state_57026;
(statearr_57031[(8)] = inst_57009__$1);

return statearr_57031;
})();
if(cljs.core.truth_(inst_57010)){
var statearr_57032_57051 = state_57026__$1;
(statearr_57032_57051[(1)] = (5));

} else {
var statearr_57033_57052 = state_57026__$1;
(statearr_57033_57052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57027 === (6))){
var inst_57009 = (state_57026[(8)]);
var inst_57006 = (state_57026[(7)]);
var inst_57013 = (state_57026[(9)]);
var inst_57013__$1 = f.call(null,inst_57006,inst_57009);
var inst_57014 = cljs.core.reduced_QMARK_.call(null,inst_57013__$1);
var state_57026__$1 = (function (){var statearr_57034 = state_57026;
(statearr_57034[(9)] = inst_57013__$1);

return statearr_57034;
})();
if(inst_57014){
var statearr_57035_57053 = state_57026__$1;
(statearr_57035_57053[(1)] = (8));

} else {
var statearr_57036_57054 = state_57026__$1;
(statearr_57036_57054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57027 === (3))){
var inst_57024 = (state_57026[(2)]);
var state_57026__$1 = state_57026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57026__$1,inst_57024);
} else {
if((state_val_57027 === (2))){
var state_57026__$1 = state_57026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57026__$1,(4),ch);
} else {
if((state_val_57027 === (9))){
var inst_57013 = (state_57026[(9)]);
var inst_57006 = inst_57013;
var state_57026__$1 = (function (){var statearr_57037 = state_57026;
(statearr_57037[(7)] = inst_57006);

return statearr_57037;
})();
var statearr_57038_57055 = state_57026__$1;
(statearr_57038_57055[(2)] = null);

(statearr_57038_57055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57027 === (5))){
var inst_57006 = (state_57026[(7)]);
var state_57026__$1 = state_57026;
var statearr_57039_57056 = state_57026__$1;
(statearr_57039_57056[(2)] = inst_57006);

(statearr_57039_57056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57027 === (10))){
var inst_57020 = (state_57026[(2)]);
var state_57026__$1 = state_57026;
var statearr_57040_57057 = state_57026__$1;
(statearr_57040_57057[(2)] = inst_57020);

(statearr_57040_57057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57027 === (8))){
var inst_57013 = (state_57026[(9)]);
var inst_57016 = cljs.core.deref.call(null,inst_57013);
var state_57026__$1 = state_57026;
var statearr_57041_57058 = state_57026__$1;
(statearr_57041_57058[(2)] = inst_57016);

(statearr_57041_57058[(1)] = (10));


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
});})(c__33417__auto__))
;
return ((function (switch__33305__auto__,c__33417__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33306__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33306__auto____0 = (function (){
var statearr_57045 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57045[(0)] = cljs$core$async$reduce_$_state_machine__33306__auto__);

(statearr_57045[(1)] = (1));

return statearr_57045;
});
var cljs$core$async$reduce_$_state_machine__33306__auto____1 = (function (state_57026){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_57026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e57046){if((e57046 instanceof Object)){
var ex__33309__auto__ = e57046;
var statearr_57047_57059 = state_57026;
(statearr_57047_57059[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57060 = state_57026;
state_57026 = G__57060;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33306__auto__ = function(state_57026){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33306__auto____1.call(this,state_57026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33306__auto____0;
cljs$core$async$reduce_$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33306__auto____1;
return cljs$core$async$reduce_$_state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto__))
})();
var state__33419__auto__ = (function (){var statearr_57048 = f__33418__auto__.call(null);
(statearr_57048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto__);

return statearr_57048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto__))
);

return c__33417__auto__;
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
var args57061 = [];
var len__31428__auto___57113 = arguments.length;
var i__31429__auto___57114 = (0);
while(true){
if((i__31429__auto___57114 < len__31428__auto___57113)){
args57061.push((arguments[i__31429__auto___57114]));

var G__57115 = (i__31429__auto___57114 + (1));
i__31429__auto___57114 = G__57115;
continue;
} else {
}
break;
}

var G__57063 = args57061.length;
switch (G__57063) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57061.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33417__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto__){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto__){
return (function (state_57088){
var state_val_57089 = (state_57088[(1)]);
if((state_val_57089 === (7))){
var inst_57070 = (state_57088[(2)]);
var state_57088__$1 = state_57088;
var statearr_57090_57117 = state_57088__$1;
(statearr_57090_57117[(2)] = inst_57070);

(statearr_57090_57117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57089 === (1))){
var inst_57064 = cljs.core.seq.call(null,coll);
var inst_57065 = inst_57064;
var state_57088__$1 = (function (){var statearr_57091 = state_57088;
(statearr_57091[(7)] = inst_57065);

return statearr_57091;
})();
var statearr_57092_57118 = state_57088__$1;
(statearr_57092_57118[(2)] = null);

(statearr_57092_57118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57089 === (4))){
var inst_57065 = (state_57088[(7)]);
var inst_57068 = cljs.core.first.call(null,inst_57065);
var state_57088__$1 = state_57088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57088__$1,(7),ch,inst_57068);
} else {
if((state_val_57089 === (13))){
var inst_57082 = (state_57088[(2)]);
var state_57088__$1 = state_57088;
var statearr_57093_57119 = state_57088__$1;
(statearr_57093_57119[(2)] = inst_57082);

(statearr_57093_57119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57089 === (6))){
var inst_57073 = (state_57088[(2)]);
var state_57088__$1 = state_57088;
if(cljs.core.truth_(inst_57073)){
var statearr_57094_57120 = state_57088__$1;
(statearr_57094_57120[(1)] = (8));

} else {
var statearr_57095_57121 = state_57088__$1;
(statearr_57095_57121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57089 === (3))){
var inst_57086 = (state_57088[(2)]);
var state_57088__$1 = state_57088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57088__$1,inst_57086);
} else {
if((state_val_57089 === (12))){
var state_57088__$1 = state_57088;
var statearr_57096_57122 = state_57088__$1;
(statearr_57096_57122[(2)] = null);

(statearr_57096_57122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57089 === (2))){
var inst_57065 = (state_57088[(7)]);
var state_57088__$1 = state_57088;
if(cljs.core.truth_(inst_57065)){
var statearr_57097_57123 = state_57088__$1;
(statearr_57097_57123[(1)] = (4));

} else {
var statearr_57098_57124 = state_57088__$1;
(statearr_57098_57124[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57089 === (11))){
var inst_57079 = cljs.core.async.close_BANG_.call(null,ch);
var state_57088__$1 = state_57088;
var statearr_57099_57125 = state_57088__$1;
(statearr_57099_57125[(2)] = inst_57079);

(statearr_57099_57125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57089 === (9))){
var state_57088__$1 = state_57088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57100_57126 = state_57088__$1;
(statearr_57100_57126[(1)] = (11));

} else {
var statearr_57101_57127 = state_57088__$1;
(statearr_57101_57127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57089 === (5))){
var inst_57065 = (state_57088[(7)]);
var state_57088__$1 = state_57088;
var statearr_57102_57128 = state_57088__$1;
(statearr_57102_57128[(2)] = inst_57065);

(statearr_57102_57128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57089 === (10))){
var inst_57084 = (state_57088[(2)]);
var state_57088__$1 = state_57088;
var statearr_57103_57129 = state_57088__$1;
(statearr_57103_57129[(2)] = inst_57084);

(statearr_57103_57129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57089 === (8))){
var inst_57065 = (state_57088[(7)]);
var inst_57075 = cljs.core.next.call(null,inst_57065);
var inst_57065__$1 = inst_57075;
var state_57088__$1 = (function (){var statearr_57104 = state_57088;
(statearr_57104[(7)] = inst_57065__$1);

return statearr_57104;
})();
var statearr_57105_57130 = state_57088__$1;
(statearr_57105_57130[(2)] = null);

(statearr_57105_57130[(1)] = (2));


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
});})(c__33417__auto__))
;
return ((function (switch__33305__auto__,c__33417__auto__){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_57109 = [null,null,null,null,null,null,null,null];
(statearr_57109[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_57109[(1)] = (1));

return statearr_57109;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_57088){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_57088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e57110){if((e57110 instanceof Object)){
var ex__33309__auto__ = e57110;
var statearr_57111_57131 = state_57088;
(statearr_57111_57131[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57132 = state_57088;
state_57088 = G__57132;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_57088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_57088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto__))
})();
var state__33419__auto__ = (function (){var statearr_57112 = f__33418__auto__.call(null);
(statearr_57112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto__);

return statearr_57112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto__))
);

return c__33417__auto__;
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
var x__30983__auto__ = (((_ == null))?null:_);
var m__30984__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,_);
} else {
var m__30984__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,_);
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
var x__30983__auto__ = (((m == null))?null:m);
var m__30984__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30984__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30983__auto__ = (((m == null))?null:m);
var m__30984__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,m,ch);
} else {
var m__30984__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,m,ch);
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
var x__30983__auto__ = (((m == null))?null:m);
var m__30984__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,m);
} else {
var m__30984__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async57358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57358 = (function (ch,cs,meta57359){
this.ch = ch;
this.cs = cs;
this.meta57359 = meta57359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async57358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_57360,meta57359__$1){
var self__ = this;
var _57360__$1 = this;
return (new cljs.core.async.t_cljs$core$async57358(self__.ch,self__.cs,meta57359__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async57358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_57360){
var self__ = this;
var _57360__$1 = this;
return self__.meta57359;
});})(cs))
;

cljs.core.async.t_cljs$core$async57358.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async57358.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57358.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57358.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57358.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57358.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57359","meta57359",749534680,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async57358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57358";

cljs.core.async.t_cljs$core$async57358.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.core.async/t_cljs$core$async57358");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async57358 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async57358(ch__$1,cs__$1,meta57359){
return (new cljs.core.async.t_cljs$core$async57358(ch__$1,cs__$1,meta57359));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async57358(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33417__auto___57583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___57583,cs,m,dchan,dctr,done){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___57583,cs,m,dchan,dctr,done){
return (function (state_57495){
var state_val_57496 = (state_57495[(1)]);
if((state_val_57496 === (7))){
var inst_57491 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57497_57584 = state_57495__$1;
(statearr_57497_57584[(2)] = inst_57491);

(statearr_57497_57584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (20))){
var inst_57394 = (state_57495[(7)]);
var inst_57406 = cljs.core.first.call(null,inst_57394);
var inst_57407 = cljs.core.nth.call(null,inst_57406,(0),null);
var inst_57408 = cljs.core.nth.call(null,inst_57406,(1),null);
var state_57495__$1 = (function (){var statearr_57498 = state_57495;
(statearr_57498[(8)] = inst_57407);

return statearr_57498;
})();
if(cljs.core.truth_(inst_57408)){
var statearr_57499_57585 = state_57495__$1;
(statearr_57499_57585[(1)] = (22));

} else {
var statearr_57500_57586 = state_57495__$1;
(statearr_57500_57586[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (27))){
var inst_57436 = (state_57495[(9)]);
var inst_57443 = (state_57495[(10)]);
var inst_57438 = (state_57495[(11)]);
var inst_57363 = (state_57495[(12)]);
var inst_57443__$1 = cljs.core._nth.call(null,inst_57436,inst_57438);
var inst_57444 = cljs.core.async.put_BANG_.call(null,inst_57443__$1,inst_57363,done);
var state_57495__$1 = (function (){var statearr_57501 = state_57495;
(statearr_57501[(10)] = inst_57443__$1);

return statearr_57501;
})();
if(cljs.core.truth_(inst_57444)){
var statearr_57502_57587 = state_57495__$1;
(statearr_57502_57587[(1)] = (30));

} else {
var statearr_57503_57588 = state_57495__$1;
(statearr_57503_57588[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (1))){
var state_57495__$1 = state_57495;
var statearr_57504_57589 = state_57495__$1;
(statearr_57504_57589[(2)] = null);

(statearr_57504_57589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (24))){
var inst_57394 = (state_57495[(7)]);
var inst_57413 = (state_57495[(2)]);
var inst_57414 = cljs.core.next.call(null,inst_57394);
var inst_57372 = inst_57414;
var inst_57373 = null;
var inst_57374 = (0);
var inst_57375 = (0);
var state_57495__$1 = (function (){var statearr_57505 = state_57495;
(statearr_57505[(13)] = inst_57375);

(statearr_57505[(14)] = inst_57372);

(statearr_57505[(15)] = inst_57373);

(statearr_57505[(16)] = inst_57374);

(statearr_57505[(17)] = inst_57413);

return statearr_57505;
})();
var statearr_57506_57590 = state_57495__$1;
(statearr_57506_57590[(2)] = null);

(statearr_57506_57590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (39))){
var state_57495__$1 = state_57495;
var statearr_57510_57591 = state_57495__$1;
(statearr_57510_57591[(2)] = null);

(statearr_57510_57591[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (4))){
var inst_57363 = (state_57495[(12)]);
var inst_57363__$1 = (state_57495[(2)]);
var inst_57364 = (inst_57363__$1 == null);
var state_57495__$1 = (function (){var statearr_57511 = state_57495;
(statearr_57511[(12)] = inst_57363__$1);

return statearr_57511;
})();
if(cljs.core.truth_(inst_57364)){
var statearr_57512_57592 = state_57495__$1;
(statearr_57512_57592[(1)] = (5));

} else {
var statearr_57513_57593 = state_57495__$1;
(statearr_57513_57593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (15))){
var inst_57375 = (state_57495[(13)]);
var inst_57372 = (state_57495[(14)]);
var inst_57373 = (state_57495[(15)]);
var inst_57374 = (state_57495[(16)]);
var inst_57390 = (state_57495[(2)]);
var inst_57391 = (inst_57375 + (1));
var tmp57507 = inst_57372;
var tmp57508 = inst_57373;
var tmp57509 = inst_57374;
var inst_57372__$1 = tmp57507;
var inst_57373__$1 = tmp57508;
var inst_57374__$1 = tmp57509;
var inst_57375__$1 = inst_57391;
var state_57495__$1 = (function (){var statearr_57514 = state_57495;
(statearr_57514[(13)] = inst_57375__$1);

(statearr_57514[(18)] = inst_57390);

(statearr_57514[(14)] = inst_57372__$1);

(statearr_57514[(15)] = inst_57373__$1);

(statearr_57514[(16)] = inst_57374__$1);

return statearr_57514;
})();
var statearr_57515_57594 = state_57495__$1;
(statearr_57515_57594[(2)] = null);

(statearr_57515_57594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (21))){
var inst_57417 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57519_57595 = state_57495__$1;
(statearr_57519_57595[(2)] = inst_57417);

(statearr_57519_57595[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (31))){
var inst_57443 = (state_57495[(10)]);
var inst_57447 = done.call(null,null);
var inst_57448 = cljs.core.async.untap_STAR_.call(null,m,inst_57443);
var state_57495__$1 = (function (){var statearr_57520 = state_57495;
(statearr_57520[(19)] = inst_57447);

return statearr_57520;
})();
var statearr_57521_57596 = state_57495__$1;
(statearr_57521_57596[(2)] = inst_57448);

(statearr_57521_57596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (32))){
var inst_57437 = (state_57495[(20)]);
var inst_57436 = (state_57495[(9)]);
var inst_57435 = (state_57495[(21)]);
var inst_57438 = (state_57495[(11)]);
var inst_57450 = (state_57495[(2)]);
var inst_57451 = (inst_57438 + (1));
var tmp57516 = inst_57437;
var tmp57517 = inst_57436;
var tmp57518 = inst_57435;
var inst_57435__$1 = tmp57518;
var inst_57436__$1 = tmp57517;
var inst_57437__$1 = tmp57516;
var inst_57438__$1 = inst_57451;
var state_57495__$1 = (function (){var statearr_57522 = state_57495;
(statearr_57522[(20)] = inst_57437__$1);

(statearr_57522[(9)] = inst_57436__$1);

(statearr_57522[(21)] = inst_57435__$1);

(statearr_57522[(11)] = inst_57438__$1);

(statearr_57522[(22)] = inst_57450);

return statearr_57522;
})();
var statearr_57523_57597 = state_57495__$1;
(statearr_57523_57597[(2)] = null);

(statearr_57523_57597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (40))){
var inst_57463 = (state_57495[(23)]);
var inst_57467 = done.call(null,null);
var inst_57468 = cljs.core.async.untap_STAR_.call(null,m,inst_57463);
var state_57495__$1 = (function (){var statearr_57524 = state_57495;
(statearr_57524[(24)] = inst_57467);

return statearr_57524;
})();
var statearr_57525_57598 = state_57495__$1;
(statearr_57525_57598[(2)] = inst_57468);

(statearr_57525_57598[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (33))){
var inst_57454 = (state_57495[(25)]);
var inst_57456 = cljs.core.chunked_seq_QMARK_.call(null,inst_57454);
var state_57495__$1 = state_57495;
if(inst_57456){
var statearr_57526_57599 = state_57495__$1;
(statearr_57526_57599[(1)] = (36));

} else {
var statearr_57527_57600 = state_57495__$1;
(statearr_57527_57600[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (13))){
var inst_57384 = (state_57495[(26)]);
var inst_57387 = cljs.core.async.close_BANG_.call(null,inst_57384);
var state_57495__$1 = state_57495;
var statearr_57528_57601 = state_57495__$1;
(statearr_57528_57601[(2)] = inst_57387);

(statearr_57528_57601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (22))){
var inst_57407 = (state_57495[(8)]);
var inst_57410 = cljs.core.async.close_BANG_.call(null,inst_57407);
var state_57495__$1 = state_57495;
var statearr_57529_57602 = state_57495__$1;
(statearr_57529_57602[(2)] = inst_57410);

(statearr_57529_57602[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (36))){
var inst_57454 = (state_57495[(25)]);
var inst_57458 = cljs.core.chunk_first.call(null,inst_57454);
var inst_57459 = cljs.core.chunk_rest.call(null,inst_57454);
var inst_57460 = cljs.core.count.call(null,inst_57458);
var inst_57435 = inst_57459;
var inst_57436 = inst_57458;
var inst_57437 = inst_57460;
var inst_57438 = (0);
var state_57495__$1 = (function (){var statearr_57530 = state_57495;
(statearr_57530[(20)] = inst_57437);

(statearr_57530[(9)] = inst_57436);

(statearr_57530[(21)] = inst_57435);

(statearr_57530[(11)] = inst_57438);

return statearr_57530;
})();
var statearr_57531_57603 = state_57495__$1;
(statearr_57531_57603[(2)] = null);

(statearr_57531_57603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (41))){
var inst_57454 = (state_57495[(25)]);
var inst_57470 = (state_57495[(2)]);
var inst_57471 = cljs.core.next.call(null,inst_57454);
var inst_57435 = inst_57471;
var inst_57436 = null;
var inst_57437 = (0);
var inst_57438 = (0);
var state_57495__$1 = (function (){var statearr_57532 = state_57495;
(statearr_57532[(20)] = inst_57437);

(statearr_57532[(9)] = inst_57436);

(statearr_57532[(21)] = inst_57435);

(statearr_57532[(11)] = inst_57438);

(statearr_57532[(27)] = inst_57470);

return statearr_57532;
})();
var statearr_57533_57604 = state_57495__$1;
(statearr_57533_57604[(2)] = null);

(statearr_57533_57604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (43))){
var state_57495__$1 = state_57495;
var statearr_57534_57605 = state_57495__$1;
(statearr_57534_57605[(2)] = null);

(statearr_57534_57605[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (29))){
var inst_57479 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57535_57606 = state_57495__$1;
(statearr_57535_57606[(2)] = inst_57479);

(statearr_57535_57606[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (44))){
var inst_57488 = (state_57495[(2)]);
var state_57495__$1 = (function (){var statearr_57536 = state_57495;
(statearr_57536[(28)] = inst_57488);

return statearr_57536;
})();
var statearr_57537_57607 = state_57495__$1;
(statearr_57537_57607[(2)] = null);

(statearr_57537_57607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (6))){
var inst_57427 = (state_57495[(29)]);
var inst_57426 = cljs.core.deref.call(null,cs);
var inst_57427__$1 = cljs.core.keys.call(null,inst_57426);
var inst_57428 = cljs.core.count.call(null,inst_57427__$1);
var inst_57429 = cljs.core.reset_BANG_.call(null,dctr,inst_57428);
var inst_57434 = cljs.core.seq.call(null,inst_57427__$1);
var inst_57435 = inst_57434;
var inst_57436 = null;
var inst_57437 = (0);
var inst_57438 = (0);
var state_57495__$1 = (function (){var statearr_57538 = state_57495;
(statearr_57538[(20)] = inst_57437);

(statearr_57538[(9)] = inst_57436);

(statearr_57538[(21)] = inst_57435);

(statearr_57538[(29)] = inst_57427__$1);

(statearr_57538[(11)] = inst_57438);

(statearr_57538[(30)] = inst_57429);

return statearr_57538;
})();
var statearr_57539_57608 = state_57495__$1;
(statearr_57539_57608[(2)] = null);

(statearr_57539_57608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (28))){
var inst_57435 = (state_57495[(21)]);
var inst_57454 = (state_57495[(25)]);
var inst_57454__$1 = cljs.core.seq.call(null,inst_57435);
var state_57495__$1 = (function (){var statearr_57540 = state_57495;
(statearr_57540[(25)] = inst_57454__$1);

return statearr_57540;
})();
if(inst_57454__$1){
var statearr_57541_57609 = state_57495__$1;
(statearr_57541_57609[(1)] = (33));

} else {
var statearr_57542_57610 = state_57495__$1;
(statearr_57542_57610[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (25))){
var inst_57437 = (state_57495[(20)]);
var inst_57438 = (state_57495[(11)]);
var inst_57440 = (inst_57438 < inst_57437);
var inst_57441 = inst_57440;
var state_57495__$1 = state_57495;
if(cljs.core.truth_(inst_57441)){
var statearr_57543_57611 = state_57495__$1;
(statearr_57543_57611[(1)] = (27));

} else {
var statearr_57544_57612 = state_57495__$1;
(statearr_57544_57612[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (34))){
var state_57495__$1 = state_57495;
var statearr_57545_57613 = state_57495__$1;
(statearr_57545_57613[(2)] = null);

(statearr_57545_57613[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (17))){
var state_57495__$1 = state_57495;
var statearr_57546_57614 = state_57495__$1;
(statearr_57546_57614[(2)] = null);

(statearr_57546_57614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (3))){
var inst_57493 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57495__$1,inst_57493);
} else {
if((state_val_57496 === (12))){
var inst_57422 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57547_57615 = state_57495__$1;
(statearr_57547_57615[(2)] = inst_57422);

(statearr_57547_57615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (2))){
var state_57495__$1 = state_57495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57495__$1,(4),ch);
} else {
if((state_val_57496 === (23))){
var state_57495__$1 = state_57495;
var statearr_57548_57616 = state_57495__$1;
(statearr_57548_57616[(2)] = null);

(statearr_57548_57616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (35))){
var inst_57477 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57549_57617 = state_57495__$1;
(statearr_57549_57617[(2)] = inst_57477);

(statearr_57549_57617[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (19))){
var inst_57394 = (state_57495[(7)]);
var inst_57398 = cljs.core.chunk_first.call(null,inst_57394);
var inst_57399 = cljs.core.chunk_rest.call(null,inst_57394);
var inst_57400 = cljs.core.count.call(null,inst_57398);
var inst_57372 = inst_57399;
var inst_57373 = inst_57398;
var inst_57374 = inst_57400;
var inst_57375 = (0);
var state_57495__$1 = (function (){var statearr_57550 = state_57495;
(statearr_57550[(13)] = inst_57375);

(statearr_57550[(14)] = inst_57372);

(statearr_57550[(15)] = inst_57373);

(statearr_57550[(16)] = inst_57374);

return statearr_57550;
})();
var statearr_57551_57618 = state_57495__$1;
(statearr_57551_57618[(2)] = null);

(statearr_57551_57618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (11))){
var inst_57394 = (state_57495[(7)]);
var inst_57372 = (state_57495[(14)]);
var inst_57394__$1 = cljs.core.seq.call(null,inst_57372);
var state_57495__$1 = (function (){var statearr_57552 = state_57495;
(statearr_57552[(7)] = inst_57394__$1);

return statearr_57552;
})();
if(inst_57394__$1){
var statearr_57553_57619 = state_57495__$1;
(statearr_57553_57619[(1)] = (16));

} else {
var statearr_57554_57620 = state_57495__$1;
(statearr_57554_57620[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (9))){
var inst_57424 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57555_57621 = state_57495__$1;
(statearr_57555_57621[(2)] = inst_57424);

(statearr_57555_57621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (5))){
var inst_57370 = cljs.core.deref.call(null,cs);
var inst_57371 = cljs.core.seq.call(null,inst_57370);
var inst_57372 = inst_57371;
var inst_57373 = null;
var inst_57374 = (0);
var inst_57375 = (0);
var state_57495__$1 = (function (){var statearr_57556 = state_57495;
(statearr_57556[(13)] = inst_57375);

(statearr_57556[(14)] = inst_57372);

(statearr_57556[(15)] = inst_57373);

(statearr_57556[(16)] = inst_57374);

return statearr_57556;
})();
var statearr_57557_57622 = state_57495__$1;
(statearr_57557_57622[(2)] = null);

(statearr_57557_57622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (14))){
var state_57495__$1 = state_57495;
var statearr_57558_57623 = state_57495__$1;
(statearr_57558_57623[(2)] = null);

(statearr_57558_57623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (45))){
var inst_57485 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57559_57624 = state_57495__$1;
(statearr_57559_57624[(2)] = inst_57485);

(statearr_57559_57624[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (26))){
var inst_57427 = (state_57495[(29)]);
var inst_57481 = (state_57495[(2)]);
var inst_57482 = cljs.core.seq.call(null,inst_57427);
var state_57495__$1 = (function (){var statearr_57560 = state_57495;
(statearr_57560[(31)] = inst_57481);

return statearr_57560;
})();
if(inst_57482){
var statearr_57561_57625 = state_57495__$1;
(statearr_57561_57625[(1)] = (42));

} else {
var statearr_57562_57626 = state_57495__$1;
(statearr_57562_57626[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (16))){
var inst_57394 = (state_57495[(7)]);
var inst_57396 = cljs.core.chunked_seq_QMARK_.call(null,inst_57394);
var state_57495__$1 = state_57495;
if(inst_57396){
var statearr_57563_57627 = state_57495__$1;
(statearr_57563_57627[(1)] = (19));

} else {
var statearr_57564_57628 = state_57495__$1;
(statearr_57564_57628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (38))){
var inst_57474 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57565_57629 = state_57495__$1;
(statearr_57565_57629[(2)] = inst_57474);

(statearr_57565_57629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (30))){
var state_57495__$1 = state_57495;
var statearr_57566_57630 = state_57495__$1;
(statearr_57566_57630[(2)] = null);

(statearr_57566_57630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (10))){
var inst_57375 = (state_57495[(13)]);
var inst_57373 = (state_57495[(15)]);
var inst_57383 = cljs.core._nth.call(null,inst_57373,inst_57375);
var inst_57384 = cljs.core.nth.call(null,inst_57383,(0),null);
var inst_57385 = cljs.core.nth.call(null,inst_57383,(1),null);
var state_57495__$1 = (function (){var statearr_57567 = state_57495;
(statearr_57567[(26)] = inst_57384);

return statearr_57567;
})();
if(cljs.core.truth_(inst_57385)){
var statearr_57568_57631 = state_57495__$1;
(statearr_57568_57631[(1)] = (13));

} else {
var statearr_57569_57632 = state_57495__$1;
(statearr_57569_57632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (18))){
var inst_57420 = (state_57495[(2)]);
var state_57495__$1 = state_57495;
var statearr_57570_57633 = state_57495__$1;
(statearr_57570_57633[(2)] = inst_57420);

(statearr_57570_57633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (42))){
var state_57495__$1 = state_57495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57495__$1,(45),dchan);
} else {
if((state_val_57496 === (37))){
var inst_57463 = (state_57495[(23)]);
var inst_57454 = (state_57495[(25)]);
var inst_57363 = (state_57495[(12)]);
var inst_57463__$1 = cljs.core.first.call(null,inst_57454);
var inst_57464 = cljs.core.async.put_BANG_.call(null,inst_57463__$1,inst_57363,done);
var state_57495__$1 = (function (){var statearr_57571 = state_57495;
(statearr_57571[(23)] = inst_57463__$1);

return statearr_57571;
})();
if(cljs.core.truth_(inst_57464)){
var statearr_57572_57634 = state_57495__$1;
(statearr_57572_57634[(1)] = (39));

} else {
var statearr_57573_57635 = state_57495__$1;
(statearr_57573_57635[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57496 === (8))){
var inst_57375 = (state_57495[(13)]);
var inst_57374 = (state_57495[(16)]);
var inst_57377 = (inst_57375 < inst_57374);
var inst_57378 = inst_57377;
var state_57495__$1 = state_57495;
if(cljs.core.truth_(inst_57378)){
var statearr_57574_57636 = state_57495__$1;
(statearr_57574_57636[(1)] = (10));

} else {
var statearr_57575_57637 = state_57495__$1;
(statearr_57575_57637[(1)] = (11));

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
});})(c__33417__auto___57583,cs,m,dchan,dctr,done))
;
return ((function (switch__33305__auto__,c__33417__auto___57583,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33306__auto__ = null;
var cljs$core$async$mult_$_state_machine__33306__auto____0 = (function (){
var statearr_57579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57579[(0)] = cljs$core$async$mult_$_state_machine__33306__auto__);

(statearr_57579[(1)] = (1));

return statearr_57579;
});
var cljs$core$async$mult_$_state_machine__33306__auto____1 = (function (state_57495){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_57495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e57580){if((e57580 instanceof Object)){
var ex__33309__auto__ = e57580;
var statearr_57581_57638 = state_57495;
(statearr_57581_57638[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57639 = state_57495;
state_57495 = G__57639;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33306__auto__ = function(state_57495){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33306__auto____1.call(this,state_57495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33306__auto____0;
cljs$core$async$mult_$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33306__auto____1;
return cljs$core$async$mult_$_state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___57583,cs,m,dchan,dctr,done))
})();
var state__33419__auto__ = (function (){var statearr_57582 = f__33418__auto__.call(null);
(statearr_57582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___57583);

return statearr_57582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___57583,cs,m,dchan,dctr,done))
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
var args57640 = [];
var len__31428__auto___57643 = arguments.length;
var i__31429__auto___57644 = (0);
while(true){
if((i__31429__auto___57644 < len__31428__auto___57643)){
args57640.push((arguments[i__31429__auto___57644]));

var G__57645 = (i__31429__auto___57644 + (1));
i__31429__auto___57644 = G__57645;
continue;
} else {
}
break;
}

var G__57642 = args57640.length;
switch (G__57642) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57640.length)].join('')));

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
var x__30983__auto__ = (((m == null))?null:m);
var m__30984__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,m,ch);
} else {
var m__30984__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,m,ch);
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
var x__30983__auto__ = (((m == null))?null:m);
var m__30984__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,m,ch);
} else {
var m__30984__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,m,ch);
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
var x__30983__auto__ = (((m == null))?null:m);
var m__30984__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,m);
} else {
var m__30984__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,m);
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
var x__30983__auto__ = (((m == null))?null:m);
var m__30984__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,m,state_map);
} else {
var m__30984__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,m,state_map);
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
var x__30983__auto__ = (((m == null))?null:m);
var m__30984__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,m,mode);
} else {
var m__30984__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31435__auto__ = [];
var len__31428__auto___57657 = arguments.length;
var i__31429__auto___57658 = (0);
while(true){
if((i__31429__auto___57658 < len__31428__auto___57657)){
args__31435__auto__.push((arguments[i__31429__auto___57658]));

var G__57659 = (i__31429__auto___57658 + (1));
i__31429__auto___57658 = G__57659;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((3) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31436__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57651){
var map__57652 = p__57651;
var map__57652__$1 = ((((!((map__57652 == null)))?((((map__57652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57652):map__57652);
var opts = map__57652__$1;
var statearr_57654_57660 = state;
(statearr_57654_57660[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__57652,map__57652__$1,opts){
return (function (val){
var statearr_57655_57661 = state;
(statearr_57655_57661[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__57652,map__57652__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_57656_57662 = state;
(statearr_57656_57662[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57647){
var G__57648 = cljs.core.first.call(null,seq57647);
var seq57647__$1 = cljs.core.next.call(null,seq57647);
var G__57649 = cljs.core.first.call(null,seq57647__$1);
var seq57647__$2 = cljs.core.next.call(null,seq57647__$1);
var G__57650 = cljs.core.first.call(null,seq57647__$2);
var seq57647__$3 = cljs.core.next.call(null,seq57647__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57648,G__57649,G__57650,seq57647__$3);
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
if(typeof cljs.core.async.t_cljs$core$async57830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57830 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta57831){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta57831 = meta57831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async57830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57832,meta57831__$1){
var self__ = this;
var _57832__$1 = this;
return (new cljs.core.async.t_cljs$core$async57830(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta57831__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57832){
var self__ = this;
var _57832__$1 = this;
return self__.meta57831;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57830.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57830.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57830.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57830.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57830.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57830.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57830.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async57830.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta57831","meta57831",1867962729,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57830";

cljs.core.async.t_cljs$core$async57830.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.core.async/t_cljs$core$async57830");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async57830 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async57830(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta57831){
return (new cljs.core.async.t_cljs$core$async57830(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta57831));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async57830(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33417__auto___57997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___57997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___57997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_57934){
var state_val_57935 = (state_57934[(1)]);
if((state_val_57935 === (7))){
var inst_57849 = (state_57934[(2)]);
var state_57934__$1 = state_57934;
var statearr_57936_57998 = state_57934__$1;
(statearr_57936_57998[(2)] = inst_57849);

(statearr_57936_57998[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (20))){
var inst_57861 = (state_57934[(7)]);
var state_57934__$1 = state_57934;
var statearr_57937_57999 = state_57934__$1;
(statearr_57937_57999[(2)] = inst_57861);

(statearr_57937_57999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (27))){
var state_57934__$1 = state_57934;
var statearr_57938_58000 = state_57934__$1;
(statearr_57938_58000[(2)] = null);

(statearr_57938_58000[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (1))){
var inst_57836 = (state_57934[(8)]);
var inst_57836__$1 = calc_state.call(null);
var inst_57838 = (inst_57836__$1 == null);
var inst_57839 = cljs.core.not.call(null,inst_57838);
var state_57934__$1 = (function (){var statearr_57939 = state_57934;
(statearr_57939[(8)] = inst_57836__$1);

return statearr_57939;
})();
if(inst_57839){
var statearr_57940_58001 = state_57934__$1;
(statearr_57940_58001[(1)] = (2));

} else {
var statearr_57941_58002 = state_57934__$1;
(statearr_57941_58002[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (24))){
var inst_57885 = (state_57934[(9)]);
var inst_57894 = (state_57934[(10)]);
var inst_57908 = (state_57934[(11)]);
var inst_57908__$1 = inst_57885.call(null,inst_57894);
var state_57934__$1 = (function (){var statearr_57942 = state_57934;
(statearr_57942[(11)] = inst_57908__$1);

return statearr_57942;
})();
if(cljs.core.truth_(inst_57908__$1)){
var statearr_57943_58003 = state_57934__$1;
(statearr_57943_58003[(1)] = (29));

} else {
var statearr_57944_58004 = state_57934__$1;
(statearr_57944_58004[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (4))){
var inst_57852 = (state_57934[(2)]);
var state_57934__$1 = state_57934;
if(cljs.core.truth_(inst_57852)){
var statearr_57945_58005 = state_57934__$1;
(statearr_57945_58005[(1)] = (8));

} else {
var statearr_57946_58006 = state_57934__$1;
(statearr_57946_58006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (15))){
var inst_57879 = (state_57934[(2)]);
var state_57934__$1 = state_57934;
if(cljs.core.truth_(inst_57879)){
var statearr_57947_58007 = state_57934__$1;
(statearr_57947_58007[(1)] = (19));

} else {
var statearr_57948_58008 = state_57934__$1;
(statearr_57948_58008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (21))){
var inst_57884 = (state_57934[(12)]);
var inst_57884__$1 = (state_57934[(2)]);
var inst_57885 = cljs.core.get.call(null,inst_57884__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57886 = cljs.core.get.call(null,inst_57884__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57887 = cljs.core.get.call(null,inst_57884__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57934__$1 = (function (){var statearr_57949 = state_57934;
(statearr_57949[(12)] = inst_57884__$1);

(statearr_57949[(9)] = inst_57885);

(statearr_57949[(13)] = inst_57886);

return statearr_57949;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_57934__$1,(22),inst_57887);
} else {
if((state_val_57935 === (31))){
var inst_57916 = (state_57934[(2)]);
var state_57934__$1 = state_57934;
if(cljs.core.truth_(inst_57916)){
var statearr_57950_58009 = state_57934__$1;
(statearr_57950_58009[(1)] = (32));

} else {
var statearr_57951_58010 = state_57934__$1;
(statearr_57951_58010[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (32))){
var inst_57893 = (state_57934[(14)]);
var state_57934__$1 = state_57934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57934__$1,(35),out,inst_57893);
} else {
if((state_val_57935 === (33))){
var inst_57884 = (state_57934[(12)]);
var inst_57861 = inst_57884;
var state_57934__$1 = (function (){var statearr_57952 = state_57934;
(statearr_57952[(7)] = inst_57861);

return statearr_57952;
})();
var statearr_57953_58011 = state_57934__$1;
(statearr_57953_58011[(2)] = null);

(statearr_57953_58011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (13))){
var inst_57861 = (state_57934[(7)]);
var inst_57868 = inst_57861.cljs$lang$protocol_mask$partition0$;
var inst_57869 = (inst_57868 & (64));
var inst_57870 = inst_57861.cljs$core$ISeq$;
var inst_57871 = (cljs.core.PROTOCOL_SENTINEL === inst_57870);
var inst_57872 = (inst_57869) || (inst_57871);
var state_57934__$1 = state_57934;
if(cljs.core.truth_(inst_57872)){
var statearr_57954_58012 = state_57934__$1;
(statearr_57954_58012[(1)] = (16));

} else {
var statearr_57955_58013 = state_57934__$1;
(statearr_57955_58013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (22))){
var inst_57894 = (state_57934[(10)]);
var inst_57893 = (state_57934[(14)]);
var inst_57892 = (state_57934[(2)]);
var inst_57893__$1 = cljs.core.nth.call(null,inst_57892,(0),null);
var inst_57894__$1 = cljs.core.nth.call(null,inst_57892,(1),null);
var inst_57895 = (inst_57893__$1 == null);
var inst_57896 = cljs.core._EQ_.call(null,inst_57894__$1,change);
var inst_57897 = (inst_57895) || (inst_57896);
var state_57934__$1 = (function (){var statearr_57956 = state_57934;
(statearr_57956[(10)] = inst_57894__$1);

(statearr_57956[(14)] = inst_57893__$1);

return statearr_57956;
})();
if(cljs.core.truth_(inst_57897)){
var statearr_57957_58014 = state_57934__$1;
(statearr_57957_58014[(1)] = (23));

} else {
var statearr_57958_58015 = state_57934__$1;
(statearr_57958_58015[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (36))){
var inst_57884 = (state_57934[(12)]);
var inst_57861 = inst_57884;
var state_57934__$1 = (function (){var statearr_57959 = state_57934;
(statearr_57959[(7)] = inst_57861);

return statearr_57959;
})();
var statearr_57960_58016 = state_57934__$1;
(statearr_57960_58016[(2)] = null);

(statearr_57960_58016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (29))){
var inst_57908 = (state_57934[(11)]);
var state_57934__$1 = state_57934;
var statearr_57961_58017 = state_57934__$1;
(statearr_57961_58017[(2)] = inst_57908);

(statearr_57961_58017[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (6))){
var state_57934__$1 = state_57934;
var statearr_57962_58018 = state_57934__$1;
(statearr_57962_58018[(2)] = false);

(statearr_57962_58018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (28))){
var inst_57904 = (state_57934[(2)]);
var inst_57905 = calc_state.call(null);
var inst_57861 = inst_57905;
var state_57934__$1 = (function (){var statearr_57963 = state_57934;
(statearr_57963[(15)] = inst_57904);

(statearr_57963[(7)] = inst_57861);

return statearr_57963;
})();
var statearr_57964_58019 = state_57934__$1;
(statearr_57964_58019[(2)] = null);

(statearr_57964_58019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (25))){
var inst_57930 = (state_57934[(2)]);
var state_57934__$1 = state_57934;
var statearr_57965_58020 = state_57934__$1;
(statearr_57965_58020[(2)] = inst_57930);

(statearr_57965_58020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (34))){
var inst_57928 = (state_57934[(2)]);
var state_57934__$1 = state_57934;
var statearr_57966_58021 = state_57934__$1;
(statearr_57966_58021[(2)] = inst_57928);

(statearr_57966_58021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (17))){
var state_57934__$1 = state_57934;
var statearr_57967_58022 = state_57934__$1;
(statearr_57967_58022[(2)] = false);

(statearr_57967_58022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (3))){
var state_57934__$1 = state_57934;
var statearr_57968_58023 = state_57934__$1;
(statearr_57968_58023[(2)] = false);

(statearr_57968_58023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (12))){
var inst_57932 = (state_57934[(2)]);
var state_57934__$1 = state_57934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57934__$1,inst_57932);
} else {
if((state_val_57935 === (2))){
var inst_57836 = (state_57934[(8)]);
var inst_57841 = inst_57836.cljs$lang$protocol_mask$partition0$;
var inst_57842 = (inst_57841 & (64));
var inst_57843 = inst_57836.cljs$core$ISeq$;
var inst_57844 = (cljs.core.PROTOCOL_SENTINEL === inst_57843);
var inst_57845 = (inst_57842) || (inst_57844);
var state_57934__$1 = state_57934;
if(cljs.core.truth_(inst_57845)){
var statearr_57969_58024 = state_57934__$1;
(statearr_57969_58024[(1)] = (5));

} else {
var statearr_57970_58025 = state_57934__$1;
(statearr_57970_58025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (23))){
var inst_57893 = (state_57934[(14)]);
var inst_57899 = (inst_57893 == null);
var state_57934__$1 = state_57934;
if(cljs.core.truth_(inst_57899)){
var statearr_57971_58026 = state_57934__$1;
(statearr_57971_58026[(1)] = (26));

} else {
var statearr_57972_58027 = state_57934__$1;
(statearr_57972_58027[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (35))){
var inst_57919 = (state_57934[(2)]);
var state_57934__$1 = state_57934;
if(cljs.core.truth_(inst_57919)){
var statearr_57973_58028 = state_57934__$1;
(statearr_57973_58028[(1)] = (36));

} else {
var statearr_57974_58029 = state_57934__$1;
(statearr_57974_58029[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (19))){
var inst_57861 = (state_57934[(7)]);
var inst_57881 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57861);
var state_57934__$1 = state_57934;
var statearr_57975_58030 = state_57934__$1;
(statearr_57975_58030[(2)] = inst_57881);

(statearr_57975_58030[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (11))){
var inst_57861 = (state_57934[(7)]);
var inst_57865 = (inst_57861 == null);
var inst_57866 = cljs.core.not.call(null,inst_57865);
var state_57934__$1 = state_57934;
if(inst_57866){
var statearr_57976_58031 = state_57934__$1;
(statearr_57976_58031[(1)] = (13));

} else {
var statearr_57977_58032 = state_57934__$1;
(statearr_57977_58032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (9))){
var inst_57836 = (state_57934[(8)]);
var state_57934__$1 = state_57934;
var statearr_57978_58033 = state_57934__$1;
(statearr_57978_58033[(2)] = inst_57836);

(statearr_57978_58033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (5))){
var state_57934__$1 = state_57934;
var statearr_57979_58034 = state_57934__$1;
(statearr_57979_58034[(2)] = true);

(statearr_57979_58034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (14))){
var state_57934__$1 = state_57934;
var statearr_57980_58035 = state_57934__$1;
(statearr_57980_58035[(2)] = false);

(statearr_57980_58035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (26))){
var inst_57894 = (state_57934[(10)]);
var inst_57901 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_57894);
var state_57934__$1 = state_57934;
var statearr_57981_58036 = state_57934__$1;
(statearr_57981_58036[(2)] = inst_57901);

(statearr_57981_58036[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (16))){
var state_57934__$1 = state_57934;
var statearr_57982_58037 = state_57934__$1;
(statearr_57982_58037[(2)] = true);

(statearr_57982_58037[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (38))){
var inst_57924 = (state_57934[(2)]);
var state_57934__$1 = state_57934;
var statearr_57983_58038 = state_57934__$1;
(statearr_57983_58038[(2)] = inst_57924);

(statearr_57983_58038[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (30))){
var inst_57885 = (state_57934[(9)]);
var inst_57894 = (state_57934[(10)]);
var inst_57886 = (state_57934[(13)]);
var inst_57911 = cljs.core.empty_QMARK_.call(null,inst_57885);
var inst_57912 = inst_57886.call(null,inst_57894);
var inst_57913 = cljs.core.not.call(null,inst_57912);
var inst_57914 = (inst_57911) && (inst_57913);
var state_57934__$1 = state_57934;
var statearr_57984_58039 = state_57934__$1;
(statearr_57984_58039[(2)] = inst_57914);

(statearr_57984_58039[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (10))){
var inst_57836 = (state_57934[(8)]);
var inst_57857 = (state_57934[(2)]);
var inst_57858 = cljs.core.get.call(null,inst_57857,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57859 = cljs.core.get.call(null,inst_57857,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57860 = cljs.core.get.call(null,inst_57857,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57861 = inst_57836;
var state_57934__$1 = (function (){var statearr_57985 = state_57934;
(statearr_57985[(16)] = inst_57859);

(statearr_57985[(17)] = inst_57858);

(statearr_57985[(7)] = inst_57861);

(statearr_57985[(18)] = inst_57860);

return statearr_57985;
})();
var statearr_57986_58040 = state_57934__$1;
(statearr_57986_58040[(2)] = null);

(statearr_57986_58040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (18))){
var inst_57876 = (state_57934[(2)]);
var state_57934__$1 = state_57934;
var statearr_57987_58041 = state_57934__$1;
(statearr_57987_58041[(2)] = inst_57876);

(statearr_57987_58041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (37))){
var state_57934__$1 = state_57934;
var statearr_57988_58042 = state_57934__$1;
(statearr_57988_58042[(2)] = null);

(statearr_57988_58042[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57935 === (8))){
var inst_57836 = (state_57934[(8)]);
var inst_57854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57836);
var state_57934__$1 = state_57934;
var statearr_57989_58043 = state_57934__$1;
(statearr_57989_58043[(2)] = inst_57854);

(statearr_57989_58043[(1)] = (10));


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
});})(c__33417__auto___57997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33305__auto__,c__33417__auto___57997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33306__auto__ = null;
var cljs$core$async$mix_$_state_machine__33306__auto____0 = (function (){
var statearr_57993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57993[(0)] = cljs$core$async$mix_$_state_machine__33306__auto__);

(statearr_57993[(1)] = (1));

return statearr_57993;
});
var cljs$core$async$mix_$_state_machine__33306__auto____1 = (function (state_57934){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_57934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e57994){if((e57994 instanceof Object)){
var ex__33309__auto__ = e57994;
var statearr_57995_58044 = state_57934;
(statearr_57995_58044[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58045 = state_57934;
state_57934 = G__58045;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33306__auto__ = function(state_57934){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33306__auto____1.call(this,state_57934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33306__auto____0;
cljs$core$async$mix_$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33306__auto____1;
return cljs$core$async$mix_$_state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___57997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33419__auto__ = (function (){var statearr_57996 = f__33418__auto__.call(null);
(statearr_57996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___57997);

return statearr_57996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___57997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30983__auto__ = (((p == null))?null:p);
var m__30984__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30984__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30983__auto__ = (((p == null))?null:p);
var m__30984__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,p,v,ch);
} else {
var m__30984__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args58046 = [];
var len__31428__auto___58049 = arguments.length;
var i__31429__auto___58050 = (0);
while(true){
if((i__31429__auto___58050 < len__31428__auto___58049)){
args58046.push((arguments[i__31429__auto___58050]));

var G__58051 = (i__31429__auto___58050 + (1));
i__31429__auto___58050 = G__58051;
continue;
} else {
}
break;
}

var G__58048 = args58046.length;
switch (G__58048) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58046.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30983__auto__ = (((p == null))?null:p);
var m__30984__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,p);
} else {
var m__30984__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,p);
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
var x__30983__auto__ = (((p == null))?null:p);
var m__30984__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30983__auto__)]);
if(!((m__30984__auto__ == null))){
return m__30984__auto__.call(null,p,v);
} else {
var m__30984__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30984__auto____$1 == null))){
return m__30984__auto____$1.call(null,p,v);
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
var args58054 = [];
var len__31428__auto___58179 = arguments.length;
var i__31429__auto___58180 = (0);
while(true){
if((i__31429__auto___58180 < len__31428__auto___58179)){
args58054.push((arguments[i__31429__auto___58180]));

var G__58181 = (i__31429__auto___58180 + (1));
i__31429__auto___58180 = G__58181;
continue;
} else {
}
break;
}

var G__58056 = args58054.length;
switch (G__58056) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58054.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30315__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30315__auto__)){
return or__30315__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30315__auto__,mults){
return (function (p1__58053_SHARP_){
if(cljs.core.truth_(p1__58053_SHARP_.call(null,topic))){
return p1__58053_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__58053_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30315__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async58057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58057 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58058){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58058 = meta58058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_58059,meta58058__$1){
var self__ = this;
var _58059__$1 = this;
return (new cljs.core.async.t_cljs$core$async58057(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58058__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_58059){
var self__ = this;
var _58059__$1 = this;
return self__.meta58058;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58057.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58057.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58057.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58057.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58057.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async58057.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58057.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58057.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58058","meta58058",1528273531,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58057";

cljs.core.async.t_cljs$core$async58057.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.core.async/t_cljs$core$async58057");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async58057 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async58057(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58058){
return (new cljs.core.async.t_cljs$core$async58057(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58058));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async58057(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33417__auto___58183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___58183,mults,ensure_mult,p){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___58183,mults,ensure_mult,p){
return (function (state_58131){
var state_val_58132 = (state_58131[(1)]);
if((state_val_58132 === (7))){
var inst_58127 = (state_58131[(2)]);
var state_58131__$1 = state_58131;
var statearr_58133_58184 = state_58131__$1;
(statearr_58133_58184[(2)] = inst_58127);

(statearr_58133_58184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (20))){
var state_58131__$1 = state_58131;
var statearr_58134_58185 = state_58131__$1;
(statearr_58134_58185[(2)] = null);

(statearr_58134_58185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (1))){
var state_58131__$1 = state_58131;
var statearr_58135_58186 = state_58131__$1;
(statearr_58135_58186[(2)] = null);

(statearr_58135_58186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (24))){
var inst_58110 = (state_58131[(7)]);
var inst_58119 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_58110);
var state_58131__$1 = state_58131;
var statearr_58136_58187 = state_58131__$1;
(statearr_58136_58187[(2)] = inst_58119);

(statearr_58136_58187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (4))){
var inst_58062 = (state_58131[(8)]);
var inst_58062__$1 = (state_58131[(2)]);
var inst_58063 = (inst_58062__$1 == null);
var state_58131__$1 = (function (){var statearr_58137 = state_58131;
(statearr_58137[(8)] = inst_58062__$1);

return statearr_58137;
})();
if(cljs.core.truth_(inst_58063)){
var statearr_58138_58188 = state_58131__$1;
(statearr_58138_58188[(1)] = (5));

} else {
var statearr_58139_58189 = state_58131__$1;
(statearr_58139_58189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (15))){
var inst_58104 = (state_58131[(2)]);
var state_58131__$1 = state_58131;
var statearr_58140_58190 = state_58131__$1;
(statearr_58140_58190[(2)] = inst_58104);

(statearr_58140_58190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (21))){
var inst_58124 = (state_58131[(2)]);
var state_58131__$1 = (function (){var statearr_58141 = state_58131;
(statearr_58141[(9)] = inst_58124);

return statearr_58141;
})();
var statearr_58142_58191 = state_58131__$1;
(statearr_58142_58191[(2)] = null);

(statearr_58142_58191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (13))){
var inst_58086 = (state_58131[(10)]);
var inst_58088 = cljs.core.chunked_seq_QMARK_.call(null,inst_58086);
var state_58131__$1 = state_58131;
if(inst_58088){
var statearr_58143_58192 = state_58131__$1;
(statearr_58143_58192[(1)] = (16));

} else {
var statearr_58144_58193 = state_58131__$1;
(statearr_58144_58193[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (22))){
var inst_58116 = (state_58131[(2)]);
var state_58131__$1 = state_58131;
if(cljs.core.truth_(inst_58116)){
var statearr_58145_58194 = state_58131__$1;
(statearr_58145_58194[(1)] = (23));

} else {
var statearr_58146_58195 = state_58131__$1;
(statearr_58146_58195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (6))){
var inst_58112 = (state_58131[(11)]);
var inst_58062 = (state_58131[(8)]);
var inst_58110 = (state_58131[(7)]);
var inst_58110__$1 = topic_fn.call(null,inst_58062);
var inst_58111 = cljs.core.deref.call(null,mults);
var inst_58112__$1 = cljs.core.get.call(null,inst_58111,inst_58110__$1);
var state_58131__$1 = (function (){var statearr_58147 = state_58131;
(statearr_58147[(11)] = inst_58112__$1);

(statearr_58147[(7)] = inst_58110__$1);

return statearr_58147;
})();
if(cljs.core.truth_(inst_58112__$1)){
var statearr_58148_58196 = state_58131__$1;
(statearr_58148_58196[(1)] = (19));

} else {
var statearr_58149_58197 = state_58131__$1;
(statearr_58149_58197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (25))){
var inst_58121 = (state_58131[(2)]);
var state_58131__$1 = state_58131;
var statearr_58150_58198 = state_58131__$1;
(statearr_58150_58198[(2)] = inst_58121);

(statearr_58150_58198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (17))){
var inst_58086 = (state_58131[(10)]);
var inst_58095 = cljs.core.first.call(null,inst_58086);
var inst_58096 = cljs.core.async.muxch_STAR_.call(null,inst_58095);
var inst_58097 = cljs.core.async.close_BANG_.call(null,inst_58096);
var inst_58098 = cljs.core.next.call(null,inst_58086);
var inst_58072 = inst_58098;
var inst_58073 = null;
var inst_58074 = (0);
var inst_58075 = (0);
var state_58131__$1 = (function (){var statearr_58151 = state_58131;
(statearr_58151[(12)] = inst_58072);

(statearr_58151[(13)] = inst_58074);

(statearr_58151[(14)] = inst_58097);

(statearr_58151[(15)] = inst_58075);

(statearr_58151[(16)] = inst_58073);

return statearr_58151;
})();
var statearr_58152_58199 = state_58131__$1;
(statearr_58152_58199[(2)] = null);

(statearr_58152_58199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (3))){
var inst_58129 = (state_58131[(2)]);
var state_58131__$1 = state_58131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58131__$1,inst_58129);
} else {
if((state_val_58132 === (12))){
var inst_58106 = (state_58131[(2)]);
var state_58131__$1 = state_58131;
var statearr_58153_58200 = state_58131__$1;
(statearr_58153_58200[(2)] = inst_58106);

(statearr_58153_58200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (2))){
var state_58131__$1 = state_58131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58131__$1,(4),ch);
} else {
if((state_val_58132 === (23))){
var state_58131__$1 = state_58131;
var statearr_58154_58201 = state_58131__$1;
(statearr_58154_58201[(2)] = null);

(statearr_58154_58201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (19))){
var inst_58112 = (state_58131[(11)]);
var inst_58062 = (state_58131[(8)]);
var inst_58114 = cljs.core.async.muxch_STAR_.call(null,inst_58112);
var state_58131__$1 = state_58131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58131__$1,(22),inst_58114,inst_58062);
} else {
if((state_val_58132 === (11))){
var inst_58072 = (state_58131[(12)]);
var inst_58086 = (state_58131[(10)]);
var inst_58086__$1 = cljs.core.seq.call(null,inst_58072);
var state_58131__$1 = (function (){var statearr_58155 = state_58131;
(statearr_58155[(10)] = inst_58086__$1);

return statearr_58155;
})();
if(inst_58086__$1){
var statearr_58156_58202 = state_58131__$1;
(statearr_58156_58202[(1)] = (13));

} else {
var statearr_58157_58203 = state_58131__$1;
(statearr_58157_58203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (9))){
var inst_58108 = (state_58131[(2)]);
var state_58131__$1 = state_58131;
var statearr_58158_58204 = state_58131__$1;
(statearr_58158_58204[(2)] = inst_58108);

(statearr_58158_58204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (5))){
var inst_58069 = cljs.core.deref.call(null,mults);
var inst_58070 = cljs.core.vals.call(null,inst_58069);
var inst_58071 = cljs.core.seq.call(null,inst_58070);
var inst_58072 = inst_58071;
var inst_58073 = null;
var inst_58074 = (0);
var inst_58075 = (0);
var state_58131__$1 = (function (){var statearr_58159 = state_58131;
(statearr_58159[(12)] = inst_58072);

(statearr_58159[(13)] = inst_58074);

(statearr_58159[(15)] = inst_58075);

(statearr_58159[(16)] = inst_58073);

return statearr_58159;
})();
var statearr_58160_58205 = state_58131__$1;
(statearr_58160_58205[(2)] = null);

(statearr_58160_58205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (14))){
var state_58131__$1 = state_58131;
var statearr_58164_58206 = state_58131__$1;
(statearr_58164_58206[(2)] = null);

(statearr_58164_58206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (16))){
var inst_58086 = (state_58131[(10)]);
var inst_58090 = cljs.core.chunk_first.call(null,inst_58086);
var inst_58091 = cljs.core.chunk_rest.call(null,inst_58086);
var inst_58092 = cljs.core.count.call(null,inst_58090);
var inst_58072 = inst_58091;
var inst_58073 = inst_58090;
var inst_58074 = inst_58092;
var inst_58075 = (0);
var state_58131__$1 = (function (){var statearr_58165 = state_58131;
(statearr_58165[(12)] = inst_58072);

(statearr_58165[(13)] = inst_58074);

(statearr_58165[(15)] = inst_58075);

(statearr_58165[(16)] = inst_58073);

return statearr_58165;
})();
var statearr_58166_58207 = state_58131__$1;
(statearr_58166_58207[(2)] = null);

(statearr_58166_58207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (10))){
var inst_58072 = (state_58131[(12)]);
var inst_58074 = (state_58131[(13)]);
var inst_58075 = (state_58131[(15)]);
var inst_58073 = (state_58131[(16)]);
var inst_58080 = cljs.core._nth.call(null,inst_58073,inst_58075);
var inst_58081 = cljs.core.async.muxch_STAR_.call(null,inst_58080);
var inst_58082 = cljs.core.async.close_BANG_.call(null,inst_58081);
var inst_58083 = (inst_58075 + (1));
var tmp58161 = inst_58072;
var tmp58162 = inst_58074;
var tmp58163 = inst_58073;
var inst_58072__$1 = tmp58161;
var inst_58073__$1 = tmp58163;
var inst_58074__$1 = tmp58162;
var inst_58075__$1 = inst_58083;
var state_58131__$1 = (function (){var statearr_58167 = state_58131;
(statearr_58167[(12)] = inst_58072__$1);

(statearr_58167[(13)] = inst_58074__$1);

(statearr_58167[(15)] = inst_58075__$1);

(statearr_58167[(17)] = inst_58082);

(statearr_58167[(16)] = inst_58073__$1);

return statearr_58167;
})();
var statearr_58168_58208 = state_58131__$1;
(statearr_58168_58208[(2)] = null);

(statearr_58168_58208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (18))){
var inst_58101 = (state_58131[(2)]);
var state_58131__$1 = state_58131;
var statearr_58169_58209 = state_58131__$1;
(statearr_58169_58209[(2)] = inst_58101);

(statearr_58169_58209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (8))){
var inst_58074 = (state_58131[(13)]);
var inst_58075 = (state_58131[(15)]);
var inst_58077 = (inst_58075 < inst_58074);
var inst_58078 = inst_58077;
var state_58131__$1 = state_58131;
if(cljs.core.truth_(inst_58078)){
var statearr_58170_58210 = state_58131__$1;
(statearr_58170_58210[(1)] = (10));

} else {
var statearr_58171_58211 = state_58131__$1;
(statearr_58171_58211[(1)] = (11));

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
});})(c__33417__auto___58183,mults,ensure_mult,p))
;
return ((function (switch__33305__auto__,c__33417__auto___58183,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_58175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58175[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_58175[(1)] = (1));

return statearr_58175;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_58131){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_58131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e58176){if((e58176 instanceof Object)){
var ex__33309__auto__ = e58176;
var statearr_58177_58212 = state_58131;
(statearr_58177_58212[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58213 = state_58131;
state_58131 = G__58213;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_58131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_58131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___58183,mults,ensure_mult,p))
})();
var state__33419__auto__ = (function (){var statearr_58178 = f__33418__auto__.call(null);
(statearr_58178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___58183);

return statearr_58178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___58183,mults,ensure_mult,p))
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
var args58214 = [];
var len__31428__auto___58217 = arguments.length;
var i__31429__auto___58218 = (0);
while(true){
if((i__31429__auto___58218 < len__31428__auto___58217)){
args58214.push((arguments[i__31429__auto___58218]));

var G__58219 = (i__31429__auto___58218 + (1));
i__31429__auto___58218 = G__58219;
continue;
} else {
}
break;
}

var G__58216 = args58214.length;
switch (G__58216) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58214.length)].join('')));

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
var args58221 = [];
var len__31428__auto___58224 = arguments.length;
var i__31429__auto___58225 = (0);
while(true){
if((i__31429__auto___58225 < len__31428__auto___58224)){
args58221.push((arguments[i__31429__auto___58225]));

var G__58226 = (i__31429__auto___58225 + (1));
i__31429__auto___58225 = G__58226;
continue;
} else {
}
break;
}

var G__58223 = args58221.length;
switch (G__58223) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58221.length)].join('')));

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
var args58228 = [];
var len__31428__auto___58299 = arguments.length;
var i__31429__auto___58300 = (0);
while(true){
if((i__31429__auto___58300 < len__31428__auto___58299)){
args58228.push((arguments[i__31429__auto___58300]));

var G__58301 = (i__31429__auto___58300 + (1));
i__31429__auto___58300 = G__58301;
continue;
} else {
}
break;
}

var G__58230 = args58228.length;
switch (G__58230) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58228.length)].join('')));

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
var c__33417__auto___58303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___58303,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___58303,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_58269){
var state_val_58270 = (state_58269[(1)]);
if((state_val_58270 === (7))){
var state_58269__$1 = state_58269;
var statearr_58271_58304 = state_58269__$1;
(statearr_58271_58304[(2)] = null);

(statearr_58271_58304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (1))){
var state_58269__$1 = state_58269;
var statearr_58272_58305 = state_58269__$1;
(statearr_58272_58305[(2)] = null);

(statearr_58272_58305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (4))){
var inst_58233 = (state_58269[(7)]);
var inst_58235 = (inst_58233 < cnt);
var state_58269__$1 = state_58269;
if(cljs.core.truth_(inst_58235)){
var statearr_58273_58306 = state_58269__$1;
(statearr_58273_58306[(1)] = (6));

} else {
var statearr_58274_58307 = state_58269__$1;
(statearr_58274_58307[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (15))){
var inst_58265 = (state_58269[(2)]);
var state_58269__$1 = state_58269;
var statearr_58275_58308 = state_58269__$1;
(statearr_58275_58308[(2)] = inst_58265);

(statearr_58275_58308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (13))){
var inst_58258 = cljs.core.async.close_BANG_.call(null,out);
var state_58269__$1 = state_58269;
var statearr_58276_58309 = state_58269__$1;
(statearr_58276_58309[(2)] = inst_58258);

(statearr_58276_58309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (6))){
var state_58269__$1 = state_58269;
var statearr_58277_58310 = state_58269__$1;
(statearr_58277_58310[(2)] = null);

(statearr_58277_58310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (3))){
var inst_58267 = (state_58269[(2)]);
var state_58269__$1 = state_58269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58269__$1,inst_58267);
} else {
if((state_val_58270 === (12))){
var inst_58255 = (state_58269[(8)]);
var inst_58255__$1 = (state_58269[(2)]);
var inst_58256 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_58255__$1);
var state_58269__$1 = (function (){var statearr_58278 = state_58269;
(statearr_58278[(8)] = inst_58255__$1);

return statearr_58278;
})();
if(cljs.core.truth_(inst_58256)){
var statearr_58279_58311 = state_58269__$1;
(statearr_58279_58311[(1)] = (13));

} else {
var statearr_58280_58312 = state_58269__$1;
(statearr_58280_58312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (2))){
var inst_58232 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_58233 = (0);
var state_58269__$1 = (function (){var statearr_58281 = state_58269;
(statearr_58281[(7)] = inst_58233);

(statearr_58281[(9)] = inst_58232);

return statearr_58281;
})();
var statearr_58282_58313 = state_58269__$1;
(statearr_58282_58313[(2)] = null);

(statearr_58282_58313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (11))){
var inst_58233 = (state_58269[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_58269,(10),Object,null,(9));
var inst_58242 = chs__$1.call(null,inst_58233);
var inst_58243 = done.call(null,inst_58233);
var inst_58244 = cljs.core.async.take_BANG_.call(null,inst_58242,inst_58243);
var state_58269__$1 = state_58269;
var statearr_58283_58314 = state_58269__$1;
(statearr_58283_58314[(2)] = inst_58244);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58269__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (9))){
var inst_58233 = (state_58269[(7)]);
var inst_58246 = (state_58269[(2)]);
var inst_58247 = (inst_58233 + (1));
var inst_58233__$1 = inst_58247;
var state_58269__$1 = (function (){var statearr_58284 = state_58269;
(statearr_58284[(7)] = inst_58233__$1);

(statearr_58284[(10)] = inst_58246);

return statearr_58284;
})();
var statearr_58285_58315 = state_58269__$1;
(statearr_58285_58315[(2)] = null);

(statearr_58285_58315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (5))){
var inst_58253 = (state_58269[(2)]);
var state_58269__$1 = (function (){var statearr_58286 = state_58269;
(statearr_58286[(11)] = inst_58253);

return statearr_58286;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58269__$1,(12),dchan);
} else {
if((state_val_58270 === (14))){
var inst_58255 = (state_58269[(8)]);
var inst_58260 = cljs.core.apply.call(null,f,inst_58255);
var state_58269__$1 = state_58269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58269__$1,(16),out,inst_58260);
} else {
if((state_val_58270 === (16))){
var inst_58262 = (state_58269[(2)]);
var state_58269__$1 = (function (){var statearr_58287 = state_58269;
(statearr_58287[(12)] = inst_58262);

return statearr_58287;
})();
var statearr_58288_58316 = state_58269__$1;
(statearr_58288_58316[(2)] = null);

(statearr_58288_58316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (10))){
var inst_58237 = (state_58269[(2)]);
var inst_58238 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_58269__$1 = (function (){var statearr_58289 = state_58269;
(statearr_58289[(13)] = inst_58237);

return statearr_58289;
})();
var statearr_58290_58317 = state_58269__$1;
(statearr_58290_58317[(2)] = inst_58238);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58269__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58270 === (8))){
var inst_58251 = (state_58269[(2)]);
var state_58269__$1 = state_58269;
var statearr_58291_58318 = state_58269__$1;
(statearr_58291_58318[(2)] = inst_58251);

(statearr_58291_58318[(1)] = (5));


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
});})(c__33417__auto___58303,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33305__auto__,c__33417__auto___58303,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_58295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58295[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_58295[(1)] = (1));

return statearr_58295;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_58269){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_58269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e58296){if((e58296 instanceof Object)){
var ex__33309__auto__ = e58296;
var statearr_58297_58319 = state_58269;
(statearr_58297_58319[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58320 = state_58269;
state_58269 = G__58320;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_58269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_58269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___58303,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33419__auto__ = (function (){var statearr_58298 = f__33418__auto__.call(null);
(statearr_58298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___58303);

return statearr_58298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___58303,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args58322 = [];
var len__31428__auto___58380 = arguments.length;
var i__31429__auto___58381 = (0);
while(true){
if((i__31429__auto___58381 < len__31428__auto___58380)){
args58322.push((arguments[i__31429__auto___58381]));

var G__58382 = (i__31429__auto___58381 + (1));
i__31429__auto___58381 = G__58382;
continue;
} else {
}
break;
}

var G__58324 = args58322.length;
switch (G__58324) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58322.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33417__auto___58384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___58384,out){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___58384,out){
return (function (state_58356){
var state_val_58357 = (state_58356[(1)]);
if((state_val_58357 === (7))){
var inst_58336 = (state_58356[(7)]);
var inst_58335 = (state_58356[(8)]);
var inst_58335__$1 = (state_58356[(2)]);
var inst_58336__$1 = cljs.core.nth.call(null,inst_58335__$1,(0),null);
var inst_58337 = cljs.core.nth.call(null,inst_58335__$1,(1),null);
var inst_58338 = (inst_58336__$1 == null);
var state_58356__$1 = (function (){var statearr_58358 = state_58356;
(statearr_58358[(9)] = inst_58337);

(statearr_58358[(7)] = inst_58336__$1);

(statearr_58358[(8)] = inst_58335__$1);

return statearr_58358;
})();
if(cljs.core.truth_(inst_58338)){
var statearr_58359_58385 = state_58356__$1;
(statearr_58359_58385[(1)] = (8));

} else {
var statearr_58360_58386 = state_58356__$1;
(statearr_58360_58386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58357 === (1))){
var inst_58325 = cljs.core.vec.call(null,chs);
var inst_58326 = inst_58325;
var state_58356__$1 = (function (){var statearr_58361 = state_58356;
(statearr_58361[(10)] = inst_58326);

return statearr_58361;
})();
var statearr_58362_58387 = state_58356__$1;
(statearr_58362_58387[(2)] = null);

(statearr_58362_58387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58357 === (4))){
var inst_58326 = (state_58356[(10)]);
var state_58356__$1 = state_58356;
return cljs.core.async.ioc_alts_BANG_.call(null,state_58356__$1,(7),inst_58326);
} else {
if((state_val_58357 === (6))){
var inst_58352 = (state_58356[(2)]);
var state_58356__$1 = state_58356;
var statearr_58363_58388 = state_58356__$1;
(statearr_58363_58388[(2)] = inst_58352);

(statearr_58363_58388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58357 === (3))){
var inst_58354 = (state_58356[(2)]);
var state_58356__$1 = state_58356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58356__$1,inst_58354);
} else {
if((state_val_58357 === (2))){
var inst_58326 = (state_58356[(10)]);
var inst_58328 = cljs.core.count.call(null,inst_58326);
var inst_58329 = (inst_58328 > (0));
var state_58356__$1 = state_58356;
if(cljs.core.truth_(inst_58329)){
var statearr_58365_58389 = state_58356__$1;
(statearr_58365_58389[(1)] = (4));

} else {
var statearr_58366_58390 = state_58356__$1;
(statearr_58366_58390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58357 === (11))){
var inst_58326 = (state_58356[(10)]);
var inst_58345 = (state_58356[(2)]);
var tmp58364 = inst_58326;
var inst_58326__$1 = tmp58364;
var state_58356__$1 = (function (){var statearr_58367 = state_58356;
(statearr_58367[(11)] = inst_58345);

(statearr_58367[(10)] = inst_58326__$1);

return statearr_58367;
})();
var statearr_58368_58391 = state_58356__$1;
(statearr_58368_58391[(2)] = null);

(statearr_58368_58391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58357 === (9))){
var inst_58336 = (state_58356[(7)]);
var state_58356__$1 = state_58356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58356__$1,(11),out,inst_58336);
} else {
if((state_val_58357 === (5))){
var inst_58350 = cljs.core.async.close_BANG_.call(null,out);
var state_58356__$1 = state_58356;
var statearr_58369_58392 = state_58356__$1;
(statearr_58369_58392[(2)] = inst_58350);

(statearr_58369_58392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58357 === (10))){
var inst_58348 = (state_58356[(2)]);
var state_58356__$1 = state_58356;
var statearr_58370_58393 = state_58356__$1;
(statearr_58370_58393[(2)] = inst_58348);

(statearr_58370_58393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58357 === (8))){
var inst_58337 = (state_58356[(9)]);
var inst_58326 = (state_58356[(10)]);
var inst_58336 = (state_58356[(7)]);
var inst_58335 = (state_58356[(8)]);
var inst_58340 = (function (){var cs = inst_58326;
var vec__58331 = inst_58335;
var v = inst_58336;
var c = inst_58337;
return ((function (cs,vec__58331,v,c,inst_58337,inst_58326,inst_58336,inst_58335,state_val_58357,c__33417__auto___58384,out){
return (function (p1__58321_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__58321_SHARP_);
});
;})(cs,vec__58331,v,c,inst_58337,inst_58326,inst_58336,inst_58335,state_val_58357,c__33417__auto___58384,out))
})();
var inst_58341 = cljs.core.filterv.call(null,inst_58340,inst_58326);
var inst_58326__$1 = inst_58341;
var state_58356__$1 = (function (){var statearr_58371 = state_58356;
(statearr_58371[(10)] = inst_58326__$1);

return statearr_58371;
})();
var statearr_58372_58394 = state_58356__$1;
(statearr_58372_58394[(2)] = null);

(statearr_58372_58394[(1)] = (2));


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
});})(c__33417__auto___58384,out))
;
return ((function (switch__33305__auto__,c__33417__auto___58384,out){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_58376 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58376[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_58376[(1)] = (1));

return statearr_58376;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_58356){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_58356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e58377){if((e58377 instanceof Object)){
var ex__33309__auto__ = e58377;
var statearr_58378_58395 = state_58356;
(statearr_58378_58395[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58396 = state_58356;
state_58356 = G__58396;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_58356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_58356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___58384,out))
})();
var state__33419__auto__ = (function (){var statearr_58379 = f__33418__auto__.call(null);
(statearr_58379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___58384);

return statearr_58379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___58384,out))
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
var args58397 = [];
var len__31428__auto___58446 = arguments.length;
var i__31429__auto___58447 = (0);
while(true){
if((i__31429__auto___58447 < len__31428__auto___58446)){
args58397.push((arguments[i__31429__auto___58447]));

var G__58448 = (i__31429__auto___58447 + (1));
i__31429__auto___58447 = G__58448;
continue;
} else {
}
break;
}

var G__58399 = args58397.length;
switch (G__58399) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58397.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33417__auto___58450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___58450,out){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___58450,out){
return (function (state_58423){
var state_val_58424 = (state_58423[(1)]);
if((state_val_58424 === (7))){
var inst_58405 = (state_58423[(7)]);
var inst_58405__$1 = (state_58423[(2)]);
var inst_58406 = (inst_58405__$1 == null);
var inst_58407 = cljs.core.not.call(null,inst_58406);
var state_58423__$1 = (function (){var statearr_58425 = state_58423;
(statearr_58425[(7)] = inst_58405__$1);

return statearr_58425;
})();
if(inst_58407){
var statearr_58426_58451 = state_58423__$1;
(statearr_58426_58451[(1)] = (8));

} else {
var statearr_58427_58452 = state_58423__$1;
(statearr_58427_58452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (1))){
var inst_58400 = (0);
var state_58423__$1 = (function (){var statearr_58428 = state_58423;
(statearr_58428[(8)] = inst_58400);

return statearr_58428;
})();
var statearr_58429_58453 = state_58423__$1;
(statearr_58429_58453[(2)] = null);

(statearr_58429_58453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (4))){
var state_58423__$1 = state_58423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58423__$1,(7),ch);
} else {
if((state_val_58424 === (6))){
var inst_58418 = (state_58423[(2)]);
var state_58423__$1 = state_58423;
var statearr_58430_58454 = state_58423__$1;
(statearr_58430_58454[(2)] = inst_58418);

(statearr_58430_58454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (3))){
var inst_58420 = (state_58423[(2)]);
var inst_58421 = cljs.core.async.close_BANG_.call(null,out);
var state_58423__$1 = (function (){var statearr_58431 = state_58423;
(statearr_58431[(9)] = inst_58420);

return statearr_58431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58423__$1,inst_58421);
} else {
if((state_val_58424 === (2))){
var inst_58400 = (state_58423[(8)]);
var inst_58402 = (inst_58400 < n);
var state_58423__$1 = state_58423;
if(cljs.core.truth_(inst_58402)){
var statearr_58432_58455 = state_58423__$1;
(statearr_58432_58455[(1)] = (4));

} else {
var statearr_58433_58456 = state_58423__$1;
(statearr_58433_58456[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (11))){
var inst_58400 = (state_58423[(8)]);
var inst_58410 = (state_58423[(2)]);
var inst_58411 = (inst_58400 + (1));
var inst_58400__$1 = inst_58411;
var state_58423__$1 = (function (){var statearr_58434 = state_58423;
(statearr_58434[(10)] = inst_58410);

(statearr_58434[(8)] = inst_58400__$1);

return statearr_58434;
})();
var statearr_58435_58457 = state_58423__$1;
(statearr_58435_58457[(2)] = null);

(statearr_58435_58457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (9))){
var state_58423__$1 = state_58423;
var statearr_58436_58458 = state_58423__$1;
(statearr_58436_58458[(2)] = null);

(statearr_58436_58458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (5))){
var state_58423__$1 = state_58423;
var statearr_58437_58459 = state_58423__$1;
(statearr_58437_58459[(2)] = null);

(statearr_58437_58459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (10))){
var inst_58415 = (state_58423[(2)]);
var state_58423__$1 = state_58423;
var statearr_58438_58460 = state_58423__$1;
(statearr_58438_58460[(2)] = inst_58415);

(statearr_58438_58460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (8))){
var inst_58405 = (state_58423[(7)]);
var state_58423__$1 = state_58423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58423__$1,(11),out,inst_58405);
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
});})(c__33417__auto___58450,out))
;
return ((function (switch__33305__auto__,c__33417__auto___58450,out){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_58442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58442[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_58442[(1)] = (1));

return statearr_58442;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_58423){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_58423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e58443){if((e58443 instanceof Object)){
var ex__33309__auto__ = e58443;
var statearr_58444_58461 = state_58423;
(statearr_58444_58461[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58462 = state_58423;
state_58423 = G__58462;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_58423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_58423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___58450,out))
})();
var state__33419__auto__ = (function (){var statearr_58445 = f__33418__auto__.call(null);
(statearr_58445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___58450);

return statearr_58445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___58450,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58470 = (function (f,ch,meta58471){
this.f = f;
this.ch = ch;
this.meta58471 = meta58471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58472,meta58471__$1){
var self__ = this;
var _58472__$1 = this;
return (new cljs.core.async.t_cljs$core$async58470(self__.f,self__.ch,meta58471__$1));
});

cljs.core.async.t_cljs$core$async58470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58472){
var self__ = this;
var _58472__$1 = this;
return self__.meta58471;
});

cljs.core.async.t_cljs$core$async58470.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58470.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58470.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async58473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58473 = (function (f,ch,meta58471,_,fn1,meta58474){
this.f = f;
this.ch = ch;
this.meta58471 = meta58471;
this._ = _;
this.fn1 = fn1;
this.meta58474 = meta58474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_58475,meta58474__$1){
var self__ = this;
var _58475__$1 = this;
return (new cljs.core.async.t_cljs$core$async58473(self__.f,self__.ch,self__.meta58471,self__._,self__.fn1,meta58474__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async58473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_58475){
var self__ = this;
var _58475__$1 = this;
return self__.meta58474;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58473.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58473.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__58463_SHARP_){
return f1.call(null,(((p1__58463_SHARP_ == null))?null:self__.f.call(null,p1__58463_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async58473.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58471","meta58471",-576796330,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58470","cljs.core.async/t_cljs$core$async58470",-1281347117,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58474","meta58474",1307634521,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58473";

cljs.core.async.t_cljs$core$async58473.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.core.async/t_cljs$core$async58473");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async58473 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58473(f__$1,ch__$1,meta58471__$1,___$2,fn1__$1,meta58474){
return (new cljs.core.async.t_cljs$core$async58473(f__$1,ch__$1,meta58471__$1,___$2,fn1__$1,meta58474));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async58473(self__.f,self__.ch,self__.meta58471,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30303__auto__ = ret;
if(cljs.core.truth_(and__30303__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30303__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async58470.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async58470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58471","meta58471",-576796330,null)], null);
});

cljs.core.async.t_cljs$core$async58470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58470";

cljs.core.async.t_cljs$core$async58470.cljs$lang$ctorPrWriter = (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.core.async/t_cljs$core$async58470");
});

cljs.core.async.__GT_t_cljs$core$async58470 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58470(f__$1,ch__$1,meta58471){
return (new cljs.core.async.t_cljs$core$async58470(f__$1,ch__$1,meta58471));
});

}

return (new cljs.core.async.t_cljs$core$async58470(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58479 = (function (f,ch,meta58480){
this.f = f;
this.ch = ch;
this.meta58480 = meta58480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58481,meta58480__$1){
var self__ = this;
var _58481__$1 = this;
return (new cljs.core.async.t_cljs$core$async58479(self__.f,self__.ch,meta58480__$1));
});

cljs.core.async.t_cljs$core$async58479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58481){
var self__ = this;
var _58481__$1 = this;
return self__.meta58480;
});

cljs.core.async.t_cljs$core$async58479.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58479.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58479.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async58479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58480","meta58480",-1167927861,null)], null);
});

cljs.core.async.t_cljs$core$async58479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58479";

cljs.core.async.t_cljs$core$async58479.cljs$lang$ctorPrWriter = (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.core.async/t_cljs$core$async58479");
});

cljs.core.async.__GT_t_cljs$core$async58479 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58479(f__$1,ch__$1,meta58480){
return (new cljs.core.async.t_cljs$core$async58479(f__$1,ch__$1,meta58480));
});

}

return (new cljs.core.async.t_cljs$core$async58479(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async58485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58485 = (function (p,ch,meta58486){
this.p = p;
this.ch = ch;
this.meta58486 = meta58486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58487,meta58486__$1){
var self__ = this;
var _58487__$1 = this;
return (new cljs.core.async.t_cljs$core$async58485(self__.p,self__.ch,meta58486__$1));
});

cljs.core.async.t_cljs$core$async58485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58487){
var self__ = this;
var _58487__$1 = this;
return self__.meta58486;
});

cljs.core.async.t_cljs$core$async58485.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58485.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58485.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58485.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async58485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58486","meta58486",1699871490,null)], null);
});

cljs.core.async.t_cljs$core$async58485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58485";

cljs.core.async.t_cljs$core$async58485.cljs$lang$ctorPrWriter = (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.core.async/t_cljs$core$async58485");
});

cljs.core.async.__GT_t_cljs$core$async58485 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58485(p__$1,ch__$1,meta58486){
return (new cljs.core.async.t_cljs$core$async58485(p__$1,ch__$1,meta58486));
});

}

return (new cljs.core.async.t_cljs$core$async58485(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args58488 = [];
var len__31428__auto___58532 = arguments.length;
var i__31429__auto___58533 = (0);
while(true){
if((i__31429__auto___58533 < len__31428__auto___58532)){
args58488.push((arguments[i__31429__auto___58533]));

var G__58534 = (i__31429__auto___58533 + (1));
i__31429__auto___58533 = G__58534;
continue;
} else {
}
break;
}

var G__58490 = args58488.length;
switch (G__58490) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58488.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33417__auto___58536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___58536,out){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___58536,out){
return (function (state_58511){
var state_val_58512 = (state_58511[(1)]);
if((state_val_58512 === (7))){
var inst_58507 = (state_58511[(2)]);
var state_58511__$1 = state_58511;
var statearr_58513_58537 = state_58511__$1;
(statearr_58513_58537[(2)] = inst_58507);

(statearr_58513_58537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58512 === (1))){
var state_58511__$1 = state_58511;
var statearr_58514_58538 = state_58511__$1;
(statearr_58514_58538[(2)] = null);

(statearr_58514_58538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58512 === (4))){
var inst_58493 = (state_58511[(7)]);
var inst_58493__$1 = (state_58511[(2)]);
var inst_58494 = (inst_58493__$1 == null);
var state_58511__$1 = (function (){var statearr_58515 = state_58511;
(statearr_58515[(7)] = inst_58493__$1);

return statearr_58515;
})();
if(cljs.core.truth_(inst_58494)){
var statearr_58516_58539 = state_58511__$1;
(statearr_58516_58539[(1)] = (5));

} else {
var statearr_58517_58540 = state_58511__$1;
(statearr_58517_58540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58512 === (6))){
var inst_58493 = (state_58511[(7)]);
var inst_58498 = p.call(null,inst_58493);
var state_58511__$1 = state_58511;
if(cljs.core.truth_(inst_58498)){
var statearr_58518_58541 = state_58511__$1;
(statearr_58518_58541[(1)] = (8));

} else {
var statearr_58519_58542 = state_58511__$1;
(statearr_58519_58542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58512 === (3))){
var inst_58509 = (state_58511[(2)]);
var state_58511__$1 = state_58511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58511__$1,inst_58509);
} else {
if((state_val_58512 === (2))){
var state_58511__$1 = state_58511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58511__$1,(4),ch);
} else {
if((state_val_58512 === (11))){
var inst_58501 = (state_58511[(2)]);
var state_58511__$1 = state_58511;
var statearr_58520_58543 = state_58511__$1;
(statearr_58520_58543[(2)] = inst_58501);

(statearr_58520_58543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58512 === (9))){
var state_58511__$1 = state_58511;
var statearr_58521_58544 = state_58511__$1;
(statearr_58521_58544[(2)] = null);

(statearr_58521_58544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58512 === (5))){
var inst_58496 = cljs.core.async.close_BANG_.call(null,out);
var state_58511__$1 = state_58511;
var statearr_58522_58545 = state_58511__$1;
(statearr_58522_58545[(2)] = inst_58496);

(statearr_58522_58545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58512 === (10))){
var inst_58504 = (state_58511[(2)]);
var state_58511__$1 = (function (){var statearr_58523 = state_58511;
(statearr_58523[(8)] = inst_58504);

return statearr_58523;
})();
var statearr_58524_58546 = state_58511__$1;
(statearr_58524_58546[(2)] = null);

(statearr_58524_58546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58512 === (8))){
var inst_58493 = (state_58511[(7)]);
var state_58511__$1 = state_58511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58511__$1,(11),out,inst_58493);
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
});})(c__33417__auto___58536,out))
;
return ((function (switch__33305__auto__,c__33417__auto___58536,out){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_58528 = [null,null,null,null,null,null,null,null,null];
(statearr_58528[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_58528[(1)] = (1));

return statearr_58528;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_58511){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_58511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e58529){if((e58529 instanceof Object)){
var ex__33309__auto__ = e58529;
var statearr_58530_58547 = state_58511;
(statearr_58530_58547[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58548 = state_58511;
state_58511 = G__58548;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_58511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_58511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___58536,out))
})();
var state__33419__auto__ = (function (){var statearr_58531 = f__33418__auto__.call(null);
(statearr_58531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___58536);

return statearr_58531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___58536,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args58549 = [];
var len__31428__auto___58552 = arguments.length;
var i__31429__auto___58553 = (0);
while(true){
if((i__31429__auto___58553 < len__31428__auto___58552)){
args58549.push((arguments[i__31429__auto___58553]));

var G__58554 = (i__31429__auto___58553 + (1));
i__31429__auto___58553 = G__58554;
continue;
} else {
}
break;
}

var G__58551 = args58549.length;
switch (G__58551) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58549.length)].join('')));

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
var c__33417__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto__){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto__){
return (function (state_58721){
var state_val_58722 = (state_58721[(1)]);
if((state_val_58722 === (7))){
var inst_58717 = (state_58721[(2)]);
var state_58721__$1 = state_58721;
var statearr_58723_58764 = state_58721__$1;
(statearr_58723_58764[(2)] = inst_58717);

(statearr_58723_58764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (20))){
var inst_58687 = (state_58721[(7)]);
var inst_58698 = (state_58721[(2)]);
var inst_58699 = cljs.core.next.call(null,inst_58687);
var inst_58673 = inst_58699;
var inst_58674 = null;
var inst_58675 = (0);
var inst_58676 = (0);
var state_58721__$1 = (function (){var statearr_58724 = state_58721;
(statearr_58724[(8)] = inst_58698);

(statearr_58724[(9)] = inst_58676);

(statearr_58724[(10)] = inst_58673);

(statearr_58724[(11)] = inst_58675);

(statearr_58724[(12)] = inst_58674);

return statearr_58724;
})();
var statearr_58725_58765 = state_58721__$1;
(statearr_58725_58765[(2)] = null);

(statearr_58725_58765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (1))){
var state_58721__$1 = state_58721;
var statearr_58726_58766 = state_58721__$1;
(statearr_58726_58766[(2)] = null);

(statearr_58726_58766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (4))){
var inst_58662 = (state_58721[(13)]);
var inst_58662__$1 = (state_58721[(2)]);
var inst_58663 = (inst_58662__$1 == null);
var state_58721__$1 = (function (){var statearr_58727 = state_58721;
(statearr_58727[(13)] = inst_58662__$1);

return statearr_58727;
})();
if(cljs.core.truth_(inst_58663)){
var statearr_58728_58767 = state_58721__$1;
(statearr_58728_58767[(1)] = (5));

} else {
var statearr_58729_58768 = state_58721__$1;
(statearr_58729_58768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (15))){
var state_58721__$1 = state_58721;
var statearr_58733_58769 = state_58721__$1;
(statearr_58733_58769[(2)] = null);

(statearr_58733_58769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (21))){
var state_58721__$1 = state_58721;
var statearr_58734_58770 = state_58721__$1;
(statearr_58734_58770[(2)] = null);

(statearr_58734_58770[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (13))){
var inst_58676 = (state_58721[(9)]);
var inst_58673 = (state_58721[(10)]);
var inst_58675 = (state_58721[(11)]);
var inst_58674 = (state_58721[(12)]);
var inst_58683 = (state_58721[(2)]);
var inst_58684 = (inst_58676 + (1));
var tmp58730 = inst_58673;
var tmp58731 = inst_58675;
var tmp58732 = inst_58674;
var inst_58673__$1 = tmp58730;
var inst_58674__$1 = tmp58732;
var inst_58675__$1 = tmp58731;
var inst_58676__$1 = inst_58684;
var state_58721__$1 = (function (){var statearr_58735 = state_58721;
(statearr_58735[(9)] = inst_58676__$1);

(statearr_58735[(10)] = inst_58673__$1);

(statearr_58735[(11)] = inst_58675__$1);

(statearr_58735[(12)] = inst_58674__$1);

(statearr_58735[(14)] = inst_58683);

return statearr_58735;
})();
var statearr_58736_58771 = state_58721__$1;
(statearr_58736_58771[(2)] = null);

(statearr_58736_58771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (22))){
var state_58721__$1 = state_58721;
var statearr_58737_58772 = state_58721__$1;
(statearr_58737_58772[(2)] = null);

(statearr_58737_58772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (6))){
var inst_58662 = (state_58721[(13)]);
var inst_58671 = f.call(null,inst_58662);
var inst_58672 = cljs.core.seq.call(null,inst_58671);
var inst_58673 = inst_58672;
var inst_58674 = null;
var inst_58675 = (0);
var inst_58676 = (0);
var state_58721__$1 = (function (){var statearr_58738 = state_58721;
(statearr_58738[(9)] = inst_58676);

(statearr_58738[(10)] = inst_58673);

(statearr_58738[(11)] = inst_58675);

(statearr_58738[(12)] = inst_58674);

return statearr_58738;
})();
var statearr_58739_58773 = state_58721__$1;
(statearr_58739_58773[(2)] = null);

(statearr_58739_58773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (17))){
var inst_58687 = (state_58721[(7)]);
var inst_58691 = cljs.core.chunk_first.call(null,inst_58687);
var inst_58692 = cljs.core.chunk_rest.call(null,inst_58687);
var inst_58693 = cljs.core.count.call(null,inst_58691);
var inst_58673 = inst_58692;
var inst_58674 = inst_58691;
var inst_58675 = inst_58693;
var inst_58676 = (0);
var state_58721__$1 = (function (){var statearr_58740 = state_58721;
(statearr_58740[(9)] = inst_58676);

(statearr_58740[(10)] = inst_58673);

(statearr_58740[(11)] = inst_58675);

(statearr_58740[(12)] = inst_58674);

return statearr_58740;
})();
var statearr_58741_58774 = state_58721__$1;
(statearr_58741_58774[(2)] = null);

(statearr_58741_58774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (3))){
var inst_58719 = (state_58721[(2)]);
var state_58721__$1 = state_58721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58721__$1,inst_58719);
} else {
if((state_val_58722 === (12))){
var inst_58707 = (state_58721[(2)]);
var state_58721__$1 = state_58721;
var statearr_58742_58775 = state_58721__$1;
(statearr_58742_58775[(2)] = inst_58707);

(statearr_58742_58775[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (2))){
var state_58721__$1 = state_58721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58721__$1,(4),in$);
} else {
if((state_val_58722 === (23))){
var inst_58715 = (state_58721[(2)]);
var state_58721__$1 = state_58721;
var statearr_58743_58776 = state_58721__$1;
(statearr_58743_58776[(2)] = inst_58715);

(statearr_58743_58776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (19))){
var inst_58702 = (state_58721[(2)]);
var state_58721__$1 = state_58721;
var statearr_58744_58777 = state_58721__$1;
(statearr_58744_58777[(2)] = inst_58702);

(statearr_58744_58777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (11))){
var inst_58687 = (state_58721[(7)]);
var inst_58673 = (state_58721[(10)]);
var inst_58687__$1 = cljs.core.seq.call(null,inst_58673);
var state_58721__$1 = (function (){var statearr_58745 = state_58721;
(statearr_58745[(7)] = inst_58687__$1);

return statearr_58745;
})();
if(inst_58687__$1){
var statearr_58746_58778 = state_58721__$1;
(statearr_58746_58778[(1)] = (14));

} else {
var statearr_58747_58779 = state_58721__$1;
(statearr_58747_58779[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (9))){
var inst_58709 = (state_58721[(2)]);
var inst_58710 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_58721__$1 = (function (){var statearr_58748 = state_58721;
(statearr_58748[(15)] = inst_58709);

return statearr_58748;
})();
if(cljs.core.truth_(inst_58710)){
var statearr_58749_58780 = state_58721__$1;
(statearr_58749_58780[(1)] = (21));

} else {
var statearr_58750_58781 = state_58721__$1;
(statearr_58750_58781[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (5))){
var inst_58665 = cljs.core.async.close_BANG_.call(null,out);
var state_58721__$1 = state_58721;
var statearr_58751_58782 = state_58721__$1;
(statearr_58751_58782[(2)] = inst_58665);

(statearr_58751_58782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (14))){
var inst_58687 = (state_58721[(7)]);
var inst_58689 = cljs.core.chunked_seq_QMARK_.call(null,inst_58687);
var state_58721__$1 = state_58721;
if(inst_58689){
var statearr_58752_58783 = state_58721__$1;
(statearr_58752_58783[(1)] = (17));

} else {
var statearr_58753_58784 = state_58721__$1;
(statearr_58753_58784[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (16))){
var inst_58705 = (state_58721[(2)]);
var state_58721__$1 = state_58721;
var statearr_58754_58785 = state_58721__$1;
(statearr_58754_58785[(2)] = inst_58705);

(statearr_58754_58785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58722 === (10))){
var inst_58676 = (state_58721[(9)]);
var inst_58674 = (state_58721[(12)]);
var inst_58681 = cljs.core._nth.call(null,inst_58674,inst_58676);
var state_58721__$1 = state_58721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58721__$1,(13),out,inst_58681);
} else {
if((state_val_58722 === (18))){
var inst_58687 = (state_58721[(7)]);
var inst_58696 = cljs.core.first.call(null,inst_58687);
var state_58721__$1 = state_58721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58721__$1,(20),out,inst_58696);
} else {
if((state_val_58722 === (8))){
var inst_58676 = (state_58721[(9)]);
var inst_58675 = (state_58721[(11)]);
var inst_58678 = (inst_58676 < inst_58675);
var inst_58679 = inst_58678;
var state_58721__$1 = state_58721;
if(cljs.core.truth_(inst_58679)){
var statearr_58755_58786 = state_58721__$1;
(statearr_58755_58786[(1)] = (10));

} else {
var statearr_58756_58787 = state_58721__$1;
(statearr_58756_58787[(1)] = (11));

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
});})(c__33417__auto__))
;
return ((function (switch__33305__auto__,c__33417__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33306__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33306__auto____0 = (function (){
var statearr_58760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58760[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33306__auto__);

(statearr_58760[(1)] = (1));

return statearr_58760;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33306__auto____1 = (function (state_58721){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_58721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e58761){if((e58761 instanceof Object)){
var ex__33309__auto__ = e58761;
var statearr_58762_58788 = state_58721;
(statearr_58762_58788[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58789 = state_58721;
state_58721 = G__58789;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33306__auto__ = function(state_58721){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33306__auto____1.call(this,state_58721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33306__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33306__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto__))
})();
var state__33419__auto__ = (function (){var statearr_58763 = f__33418__auto__.call(null);
(statearr_58763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto__);

return statearr_58763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto__))
);

return c__33417__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args58790 = [];
var len__31428__auto___58793 = arguments.length;
var i__31429__auto___58794 = (0);
while(true){
if((i__31429__auto___58794 < len__31428__auto___58793)){
args58790.push((arguments[i__31429__auto___58794]));

var G__58795 = (i__31429__auto___58794 + (1));
i__31429__auto___58794 = G__58795;
continue;
} else {
}
break;
}

var G__58792 = args58790.length;
switch (G__58792) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58790.length)].join('')));

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
var args58797 = [];
var len__31428__auto___58800 = arguments.length;
var i__31429__auto___58801 = (0);
while(true){
if((i__31429__auto___58801 < len__31428__auto___58800)){
args58797.push((arguments[i__31429__auto___58801]));

var G__58802 = (i__31429__auto___58801 + (1));
i__31429__auto___58801 = G__58802;
continue;
} else {
}
break;
}

var G__58799 = args58797.length;
switch (G__58799) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58797.length)].join('')));

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
var args58804 = [];
var len__31428__auto___58855 = arguments.length;
var i__31429__auto___58856 = (0);
while(true){
if((i__31429__auto___58856 < len__31428__auto___58855)){
args58804.push((arguments[i__31429__auto___58856]));

var G__58857 = (i__31429__auto___58856 + (1));
i__31429__auto___58856 = G__58857;
continue;
} else {
}
break;
}

var G__58806 = args58804.length;
switch (G__58806) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58804.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33417__auto___58859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___58859,out){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___58859,out){
return (function (state_58830){
var state_val_58831 = (state_58830[(1)]);
if((state_val_58831 === (7))){
var inst_58825 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58832_58860 = state_58830__$1;
(statearr_58832_58860[(2)] = inst_58825);

(statearr_58832_58860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (1))){
var inst_58807 = null;
var state_58830__$1 = (function (){var statearr_58833 = state_58830;
(statearr_58833[(7)] = inst_58807);

return statearr_58833;
})();
var statearr_58834_58861 = state_58830__$1;
(statearr_58834_58861[(2)] = null);

(statearr_58834_58861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (4))){
var inst_58810 = (state_58830[(8)]);
var inst_58810__$1 = (state_58830[(2)]);
var inst_58811 = (inst_58810__$1 == null);
var inst_58812 = cljs.core.not.call(null,inst_58811);
var state_58830__$1 = (function (){var statearr_58835 = state_58830;
(statearr_58835[(8)] = inst_58810__$1);

return statearr_58835;
})();
if(inst_58812){
var statearr_58836_58862 = state_58830__$1;
(statearr_58836_58862[(1)] = (5));

} else {
var statearr_58837_58863 = state_58830__$1;
(statearr_58837_58863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (6))){
var state_58830__$1 = state_58830;
var statearr_58838_58864 = state_58830__$1;
(statearr_58838_58864[(2)] = null);

(statearr_58838_58864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (3))){
var inst_58827 = (state_58830[(2)]);
var inst_58828 = cljs.core.async.close_BANG_.call(null,out);
var state_58830__$1 = (function (){var statearr_58839 = state_58830;
(statearr_58839[(9)] = inst_58827);

return statearr_58839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58830__$1,inst_58828);
} else {
if((state_val_58831 === (2))){
var state_58830__$1 = state_58830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58830__$1,(4),ch);
} else {
if((state_val_58831 === (11))){
var inst_58810 = (state_58830[(8)]);
var inst_58819 = (state_58830[(2)]);
var inst_58807 = inst_58810;
var state_58830__$1 = (function (){var statearr_58840 = state_58830;
(statearr_58840[(10)] = inst_58819);

(statearr_58840[(7)] = inst_58807);

return statearr_58840;
})();
var statearr_58841_58865 = state_58830__$1;
(statearr_58841_58865[(2)] = null);

(statearr_58841_58865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (9))){
var inst_58810 = (state_58830[(8)]);
var state_58830__$1 = state_58830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58830__$1,(11),out,inst_58810);
} else {
if((state_val_58831 === (5))){
var inst_58810 = (state_58830[(8)]);
var inst_58807 = (state_58830[(7)]);
var inst_58814 = cljs.core._EQ_.call(null,inst_58810,inst_58807);
var state_58830__$1 = state_58830;
if(inst_58814){
var statearr_58843_58866 = state_58830__$1;
(statearr_58843_58866[(1)] = (8));

} else {
var statearr_58844_58867 = state_58830__$1;
(statearr_58844_58867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (10))){
var inst_58822 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58845_58868 = state_58830__$1;
(statearr_58845_58868[(2)] = inst_58822);

(statearr_58845_58868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (8))){
var inst_58807 = (state_58830[(7)]);
var tmp58842 = inst_58807;
var inst_58807__$1 = tmp58842;
var state_58830__$1 = (function (){var statearr_58846 = state_58830;
(statearr_58846[(7)] = inst_58807__$1);

return statearr_58846;
})();
var statearr_58847_58869 = state_58830__$1;
(statearr_58847_58869[(2)] = null);

(statearr_58847_58869[(1)] = (2));


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
});})(c__33417__auto___58859,out))
;
return ((function (switch__33305__auto__,c__33417__auto___58859,out){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_58851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58851[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_58851[(1)] = (1));

return statearr_58851;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_58830){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_58830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e58852){if((e58852 instanceof Object)){
var ex__33309__auto__ = e58852;
var statearr_58853_58870 = state_58830;
(statearr_58853_58870[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58871 = state_58830;
state_58830 = G__58871;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_58830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_58830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___58859,out))
})();
var state__33419__auto__ = (function (){var statearr_58854 = f__33418__auto__.call(null);
(statearr_58854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___58859);

return statearr_58854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___58859,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args58872 = [];
var len__31428__auto___58942 = arguments.length;
var i__31429__auto___58943 = (0);
while(true){
if((i__31429__auto___58943 < len__31428__auto___58942)){
args58872.push((arguments[i__31429__auto___58943]));

var G__58944 = (i__31429__auto___58943 + (1));
i__31429__auto___58943 = G__58944;
continue;
} else {
}
break;
}

var G__58874 = args58872.length;
switch (G__58874) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58872.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33417__auto___58946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___58946,out){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___58946,out){
return (function (state_58912){
var state_val_58913 = (state_58912[(1)]);
if((state_val_58913 === (7))){
var inst_58908 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
var statearr_58914_58947 = state_58912__$1;
(statearr_58914_58947[(2)] = inst_58908);

(statearr_58914_58947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (1))){
var inst_58875 = (new Array(n));
var inst_58876 = inst_58875;
var inst_58877 = (0);
var state_58912__$1 = (function (){var statearr_58915 = state_58912;
(statearr_58915[(7)] = inst_58876);

(statearr_58915[(8)] = inst_58877);

return statearr_58915;
})();
var statearr_58916_58948 = state_58912__$1;
(statearr_58916_58948[(2)] = null);

(statearr_58916_58948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (4))){
var inst_58880 = (state_58912[(9)]);
var inst_58880__$1 = (state_58912[(2)]);
var inst_58881 = (inst_58880__$1 == null);
var inst_58882 = cljs.core.not.call(null,inst_58881);
var state_58912__$1 = (function (){var statearr_58917 = state_58912;
(statearr_58917[(9)] = inst_58880__$1);

return statearr_58917;
})();
if(inst_58882){
var statearr_58918_58949 = state_58912__$1;
(statearr_58918_58949[(1)] = (5));

} else {
var statearr_58919_58950 = state_58912__$1;
(statearr_58919_58950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (15))){
var inst_58902 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
var statearr_58920_58951 = state_58912__$1;
(statearr_58920_58951[(2)] = inst_58902);

(statearr_58920_58951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (13))){
var state_58912__$1 = state_58912;
var statearr_58921_58952 = state_58912__$1;
(statearr_58921_58952[(2)] = null);

(statearr_58921_58952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (6))){
var inst_58877 = (state_58912[(8)]);
var inst_58898 = (inst_58877 > (0));
var state_58912__$1 = state_58912;
if(cljs.core.truth_(inst_58898)){
var statearr_58922_58953 = state_58912__$1;
(statearr_58922_58953[(1)] = (12));

} else {
var statearr_58923_58954 = state_58912__$1;
(statearr_58923_58954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (3))){
var inst_58910 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58912__$1,inst_58910);
} else {
if((state_val_58913 === (12))){
var inst_58876 = (state_58912[(7)]);
var inst_58900 = cljs.core.vec.call(null,inst_58876);
var state_58912__$1 = state_58912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58912__$1,(15),out,inst_58900);
} else {
if((state_val_58913 === (2))){
var state_58912__$1 = state_58912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58912__$1,(4),ch);
} else {
if((state_val_58913 === (11))){
var inst_58892 = (state_58912[(2)]);
var inst_58893 = (new Array(n));
var inst_58876 = inst_58893;
var inst_58877 = (0);
var state_58912__$1 = (function (){var statearr_58924 = state_58912;
(statearr_58924[(7)] = inst_58876);

(statearr_58924[(10)] = inst_58892);

(statearr_58924[(8)] = inst_58877);

return statearr_58924;
})();
var statearr_58925_58955 = state_58912__$1;
(statearr_58925_58955[(2)] = null);

(statearr_58925_58955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (9))){
var inst_58876 = (state_58912[(7)]);
var inst_58890 = cljs.core.vec.call(null,inst_58876);
var state_58912__$1 = state_58912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58912__$1,(11),out,inst_58890);
} else {
if((state_val_58913 === (5))){
var inst_58880 = (state_58912[(9)]);
var inst_58876 = (state_58912[(7)]);
var inst_58885 = (state_58912[(11)]);
var inst_58877 = (state_58912[(8)]);
var inst_58884 = (inst_58876[inst_58877] = inst_58880);
var inst_58885__$1 = (inst_58877 + (1));
var inst_58886 = (inst_58885__$1 < n);
var state_58912__$1 = (function (){var statearr_58926 = state_58912;
(statearr_58926[(11)] = inst_58885__$1);

(statearr_58926[(12)] = inst_58884);

return statearr_58926;
})();
if(cljs.core.truth_(inst_58886)){
var statearr_58927_58956 = state_58912__$1;
(statearr_58927_58956[(1)] = (8));

} else {
var statearr_58928_58957 = state_58912__$1;
(statearr_58928_58957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (14))){
var inst_58905 = (state_58912[(2)]);
var inst_58906 = cljs.core.async.close_BANG_.call(null,out);
var state_58912__$1 = (function (){var statearr_58930 = state_58912;
(statearr_58930[(13)] = inst_58905);

return statearr_58930;
})();
var statearr_58931_58958 = state_58912__$1;
(statearr_58931_58958[(2)] = inst_58906);

(statearr_58931_58958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (10))){
var inst_58896 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
var statearr_58932_58959 = state_58912__$1;
(statearr_58932_58959[(2)] = inst_58896);

(statearr_58932_58959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (8))){
var inst_58876 = (state_58912[(7)]);
var inst_58885 = (state_58912[(11)]);
var tmp58929 = inst_58876;
var inst_58876__$1 = tmp58929;
var inst_58877 = inst_58885;
var state_58912__$1 = (function (){var statearr_58933 = state_58912;
(statearr_58933[(7)] = inst_58876__$1);

(statearr_58933[(8)] = inst_58877);

return statearr_58933;
})();
var statearr_58934_58960 = state_58912__$1;
(statearr_58934_58960[(2)] = null);

(statearr_58934_58960[(1)] = (2));


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
});})(c__33417__auto___58946,out))
;
return ((function (switch__33305__auto__,c__33417__auto___58946,out){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_58938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58938[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_58938[(1)] = (1));

return statearr_58938;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_58912){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_58912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e58939){if((e58939 instanceof Object)){
var ex__33309__auto__ = e58939;
var statearr_58940_58961 = state_58912;
(statearr_58940_58961[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58962 = state_58912;
state_58912 = G__58962;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_58912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_58912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___58946,out))
})();
var state__33419__auto__ = (function (){var statearr_58941 = f__33418__auto__.call(null);
(statearr_58941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___58946);

return statearr_58941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___58946,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args58963 = [];
var len__31428__auto___59037 = arguments.length;
var i__31429__auto___59038 = (0);
while(true){
if((i__31429__auto___59038 < len__31428__auto___59037)){
args58963.push((arguments[i__31429__auto___59038]));

var G__59039 = (i__31429__auto___59038 + (1));
i__31429__auto___59038 = G__59039;
continue;
} else {
}
break;
}

var G__58965 = args58963.length;
switch (G__58965) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58963.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33417__auto___59041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto___59041,out){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto___59041,out){
return (function (state_59007){
var state_val_59008 = (state_59007[(1)]);
if((state_val_59008 === (7))){
var inst_59003 = (state_59007[(2)]);
var state_59007__$1 = state_59007;
var statearr_59009_59042 = state_59007__$1;
(statearr_59009_59042[(2)] = inst_59003);

(statearr_59009_59042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59008 === (1))){
var inst_58966 = [];
var inst_58967 = inst_58966;
var inst_58968 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59007__$1 = (function (){var statearr_59010 = state_59007;
(statearr_59010[(7)] = inst_58968);

(statearr_59010[(8)] = inst_58967);

return statearr_59010;
})();
var statearr_59011_59043 = state_59007__$1;
(statearr_59011_59043[(2)] = null);

(statearr_59011_59043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59008 === (4))){
var inst_58971 = (state_59007[(9)]);
var inst_58971__$1 = (state_59007[(2)]);
var inst_58972 = (inst_58971__$1 == null);
var inst_58973 = cljs.core.not.call(null,inst_58972);
var state_59007__$1 = (function (){var statearr_59012 = state_59007;
(statearr_59012[(9)] = inst_58971__$1);

return statearr_59012;
})();
if(inst_58973){
var statearr_59013_59044 = state_59007__$1;
(statearr_59013_59044[(1)] = (5));

} else {
var statearr_59014_59045 = state_59007__$1;
(statearr_59014_59045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59008 === (15))){
var inst_58997 = (state_59007[(2)]);
var state_59007__$1 = state_59007;
var statearr_59015_59046 = state_59007__$1;
(statearr_59015_59046[(2)] = inst_58997);

(statearr_59015_59046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59008 === (13))){
var state_59007__$1 = state_59007;
var statearr_59016_59047 = state_59007__$1;
(statearr_59016_59047[(2)] = null);

(statearr_59016_59047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59008 === (6))){
var inst_58967 = (state_59007[(8)]);
var inst_58992 = inst_58967.length;
var inst_58993 = (inst_58992 > (0));
var state_59007__$1 = state_59007;
if(cljs.core.truth_(inst_58993)){
var statearr_59017_59048 = state_59007__$1;
(statearr_59017_59048[(1)] = (12));

} else {
var statearr_59018_59049 = state_59007__$1;
(statearr_59018_59049[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59008 === (3))){
var inst_59005 = (state_59007[(2)]);
var state_59007__$1 = state_59007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59007__$1,inst_59005);
} else {
if((state_val_59008 === (12))){
var inst_58967 = (state_59007[(8)]);
var inst_58995 = cljs.core.vec.call(null,inst_58967);
var state_59007__$1 = state_59007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59007__$1,(15),out,inst_58995);
} else {
if((state_val_59008 === (2))){
var state_59007__$1 = state_59007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59007__$1,(4),ch);
} else {
if((state_val_59008 === (11))){
var inst_58971 = (state_59007[(9)]);
var inst_58975 = (state_59007[(10)]);
var inst_58985 = (state_59007[(2)]);
var inst_58986 = [];
var inst_58987 = inst_58986.push(inst_58971);
var inst_58967 = inst_58986;
var inst_58968 = inst_58975;
var state_59007__$1 = (function (){var statearr_59019 = state_59007;
(statearr_59019[(11)] = inst_58985);

(statearr_59019[(7)] = inst_58968);

(statearr_59019[(8)] = inst_58967);

(statearr_59019[(12)] = inst_58987);

return statearr_59019;
})();
var statearr_59020_59050 = state_59007__$1;
(statearr_59020_59050[(2)] = null);

(statearr_59020_59050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59008 === (9))){
var inst_58967 = (state_59007[(8)]);
var inst_58983 = cljs.core.vec.call(null,inst_58967);
var state_59007__$1 = state_59007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59007__$1,(11),out,inst_58983);
} else {
if((state_val_59008 === (5))){
var inst_58971 = (state_59007[(9)]);
var inst_58968 = (state_59007[(7)]);
var inst_58975 = (state_59007[(10)]);
var inst_58975__$1 = f.call(null,inst_58971);
var inst_58976 = cljs.core._EQ_.call(null,inst_58975__$1,inst_58968);
var inst_58977 = cljs.core.keyword_identical_QMARK_.call(null,inst_58968,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_58978 = (inst_58976) || (inst_58977);
var state_59007__$1 = (function (){var statearr_59021 = state_59007;
(statearr_59021[(10)] = inst_58975__$1);

return statearr_59021;
})();
if(cljs.core.truth_(inst_58978)){
var statearr_59022_59051 = state_59007__$1;
(statearr_59022_59051[(1)] = (8));

} else {
var statearr_59023_59052 = state_59007__$1;
(statearr_59023_59052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59008 === (14))){
var inst_59000 = (state_59007[(2)]);
var inst_59001 = cljs.core.async.close_BANG_.call(null,out);
var state_59007__$1 = (function (){var statearr_59025 = state_59007;
(statearr_59025[(13)] = inst_59000);

return statearr_59025;
})();
var statearr_59026_59053 = state_59007__$1;
(statearr_59026_59053[(2)] = inst_59001);

(statearr_59026_59053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59008 === (10))){
var inst_58990 = (state_59007[(2)]);
var state_59007__$1 = state_59007;
var statearr_59027_59054 = state_59007__$1;
(statearr_59027_59054[(2)] = inst_58990);

(statearr_59027_59054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59008 === (8))){
var inst_58971 = (state_59007[(9)]);
var inst_58975 = (state_59007[(10)]);
var inst_58967 = (state_59007[(8)]);
var inst_58980 = inst_58967.push(inst_58971);
var tmp59024 = inst_58967;
var inst_58967__$1 = tmp59024;
var inst_58968 = inst_58975;
var state_59007__$1 = (function (){var statearr_59028 = state_59007;
(statearr_59028[(7)] = inst_58968);

(statearr_59028[(14)] = inst_58980);

(statearr_59028[(8)] = inst_58967__$1);

return statearr_59028;
})();
var statearr_59029_59055 = state_59007__$1;
(statearr_59029_59055[(2)] = null);

(statearr_59029_59055[(1)] = (2));


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
});})(c__33417__auto___59041,out))
;
return ((function (switch__33305__auto__,c__33417__auto___59041,out){
return (function() {
var cljs$core$async$state_machine__33306__auto__ = null;
var cljs$core$async$state_machine__33306__auto____0 = (function (){
var statearr_59033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59033[(0)] = cljs$core$async$state_machine__33306__auto__);

(statearr_59033[(1)] = (1));

return statearr_59033;
});
var cljs$core$async$state_machine__33306__auto____1 = (function (state_59007){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_59007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e59034){if((e59034 instanceof Object)){
var ex__33309__auto__ = e59034;
var statearr_59035_59056 = state_59007;
(statearr_59035_59056[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59057 = state_59007;
state_59007 = G__59057;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
cljs$core$async$state_machine__33306__auto__ = function(state_59007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33306__auto____1.call(this,state_59007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33306__auto____0;
cljs$core$async$state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33306__auto____1;
return cljs$core$async$state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto___59041,out))
})();
var state__33419__auto__ = (function (){var statearr_59036 = f__33418__auto__.call(null);
(statearr_59036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto___59041);

return statearr_59036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto___59041,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map