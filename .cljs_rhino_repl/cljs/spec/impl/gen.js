// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__30926__auto__,writer__30927__auto__,opt__30928__auto__){
return cljs.core._write.call(null,writer__30927__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__31435__auto__ = [];
var len__31428__auto___52986 = arguments.length;
var i__31429__auto___52987 = (0);
while(true){
if((i__31429__auto___52987 < len__31428__auto___52986)){
args__31435__auto__.push((arguments[i__31429__auto___52987]));

var G__52988 = (i__31429__auto___52987 + (1));
i__31429__auto___52987 = G__52988;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq52985){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52985));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__31435__auto__ = [];
var len__31428__auto___52990 = arguments.length;
var i__31429__auto___52991 = (0);
while(true){
if((i__31429__auto___52991 < len__31428__auto___52990)){
args__31435__auto__.push((arguments[i__31429__auto___52991]));

var G__52992 = (i__31429__auto___52991 + (1));
i__31429__auto___52991 = G__52992;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq52989){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52989));
});

var g_QMARK__52993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_52994 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52993){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__52993))
,null));
var mkg_52995 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__52993,g_52994){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__52993,g_52994))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__52993,g_52994,mkg_52995){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__52993).call(null,x);
});})(g_QMARK__52993,g_52994,mkg_52995))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__52993,g_52994,mkg_52995){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_52995).call(null,gfn);
});})(g_QMARK__52993,g_52994,mkg_52995))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__52993,g_52994,mkg_52995){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_52994).call(null,generator);
});})(g_QMARK__52993,g_52994,mkg_52995))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__39207__auto___53015 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__39207__auto___53015){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53016 = arguments.length;
var i__31429__auto___53017 = (0);
while(true){
if((i__31429__auto___53017 < len__31428__auto___53016)){
args__31435__auto__.push((arguments[i__31429__auto___53017]));

var G__53018 = (i__31429__auto___53017 + (1));
i__31429__auto___53017 = G__53018;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53015))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53015){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53015),args);
});})(g__39207__auto___53015))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__39207__auto___53015){
return (function (seq52996){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52996));
});})(g__39207__auto___53015))
;


var g__39207__auto___53019 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__39207__auto___53019){
return (function cljs$spec$impl$gen$list(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53020 = arguments.length;
var i__31429__auto___53021 = (0);
while(true){
if((i__31429__auto___53021 < len__31428__auto___53020)){
args__31435__auto__.push((arguments[i__31429__auto___53021]));

var G__53022 = (i__31429__auto___53021 + (1));
i__31429__auto___53021 = G__53022;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53019))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53019){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53019),args);
});})(g__39207__auto___53019))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__39207__auto___53019){
return (function (seq52997){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52997));
});})(g__39207__auto___53019))
;


var g__39207__auto___53023 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__39207__auto___53023){
return (function cljs$spec$impl$gen$map(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53024 = arguments.length;
var i__31429__auto___53025 = (0);
while(true){
if((i__31429__auto___53025 < len__31428__auto___53024)){
args__31435__auto__.push((arguments[i__31429__auto___53025]));

var G__53026 = (i__31429__auto___53025 + (1));
i__31429__auto___53025 = G__53026;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53023))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53023){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53023),args);
});})(g__39207__auto___53023))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__39207__auto___53023){
return (function (seq52998){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52998));
});})(g__39207__auto___53023))
;


var g__39207__auto___53027 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__39207__auto___53027){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53028 = arguments.length;
var i__31429__auto___53029 = (0);
while(true){
if((i__31429__auto___53029 < len__31428__auto___53028)){
args__31435__auto__.push((arguments[i__31429__auto___53029]));

var G__53030 = (i__31429__auto___53029 + (1));
i__31429__auto___53029 = G__53030;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53027))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53027){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53027),args);
});})(g__39207__auto___53027))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__39207__auto___53027){
return (function (seq52999){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52999));
});})(g__39207__auto___53027))
;


var g__39207__auto___53031 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__39207__auto___53031){
return (function cljs$spec$impl$gen$set(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53032 = arguments.length;
var i__31429__auto___53033 = (0);
while(true){
if((i__31429__auto___53033 < len__31428__auto___53032)){
args__31435__auto__.push((arguments[i__31429__auto___53033]));

var G__53034 = (i__31429__auto___53033 + (1));
i__31429__auto___53033 = G__53034;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53031))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53031){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53031),args);
});})(g__39207__auto___53031))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__39207__auto___53031){
return (function (seq53000){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53000));
});})(g__39207__auto___53031))
;


var g__39207__auto___53035 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__39207__auto___53035){
return (function cljs$spec$impl$gen$vector(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53036 = arguments.length;
var i__31429__auto___53037 = (0);
while(true){
if((i__31429__auto___53037 < len__31428__auto___53036)){
args__31435__auto__.push((arguments[i__31429__auto___53037]));

var G__53038 = (i__31429__auto___53037 + (1));
i__31429__auto___53037 = G__53038;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53035))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53035){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53035),args);
});})(g__39207__auto___53035))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__39207__auto___53035){
return (function (seq53001){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53001));
});})(g__39207__auto___53035))
;


var g__39207__auto___53039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__39207__auto___53039){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53040 = arguments.length;
var i__31429__auto___53041 = (0);
while(true){
if((i__31429__auto___53041 < len__31428__auto___53040)){
args__31435__auto__.push((arguments[i__31429__auto___53041]));

var G__53042 = (i__31429__auto___53041 + (1));
i__31429__auto___53041 = G__53042;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53039))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53039){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53039),args);
});})(g__39207__auto___53039))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__39207__auto___53039){
return (function (seq53002){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53002));
});})(g__39207__auto___53039))
;


var g__39207__auto___53043 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__39207__auto___53043){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53044 = arguments.length;
var i__31429__auto___53045 = (0);
while(true){
if((i__31429__auto___53045 < len__31428__auto___53044)){
args__31435__auto__.push((arguments[i__31429__auto___53045]));

var G__53046 = (i__31429__auto___53045 + (1));
i__31429__auto___53045 = G__53046;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53043))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53043){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53043),args);
});})(g__39207__auto___53043))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__39207__auto___53043){
return (function (seq53003){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53003));
});})(g__39207__auto___53043))
;


var g__39207__auto___53047 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__39207__auto___53047){
return (function cljs$spec$impl$gen$elements(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53048 = arguments.length;
var i__31429__auto___53049 = (0);
while(true){
if((i__31429__auto___53049 < len__31428__auto___53048)){
args__31435__auto__.push((arguments[i__31429__auto___53049]));

var G__53050 = (i__31429__auto___53049 + (1));
i__31429__auto___53049 = G__53050;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53047))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53047){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53047),args);
});})(g__39207__auto___53047))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__39207__auto___53047){
return (function (seq53004){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53004));
});})(g__39207__auto___53047))
;


var g__39207__auto___53051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__39207__auto___53051){
return (function cljs$spec$impl$gen$bind(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53052 = arguments.length;
var i__31429__auto___53053 = (0);
while(true){
if((i__31429__auto___53053 < len__31428__auto___53052)){
args__31435__auto__.push((arguments[i__31429__auto___53053]));

var G__53054 = (i__31429__auto___53053 + (1));
i__31429__auto___53053 = G__53054;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53051))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53051){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53051),args);
});})(g__39207__auto___53051))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__39207__auto___53051){
return (function (seq53005){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53005));
});})(g__39207__auto___53051))
;


var g__39207__auto___53055 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__39207__auto___53055){
return (function cljs$spec$impl$gen$choose(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53056 = arguments.length;
var i__31429__auto___53057 = (0);
while(true){
if((i__31429__auto___53057 < len__31428__auto___53056)){
args__31435__auto__.push((arguments[i__31429__auto___53057]));

var G__53058 = (i__31429__auto___53057 + (1));
i__31429__auto___53057 = G__53058;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53055))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53055){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53055),args);
});})(g__39207__auto___53055))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__39207__auto___53055){
return (function (seq53006){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53006));
});})(g__39207__auto___53055))
;


var g__39207__auto___53059 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__39207__auto___53059){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53060 = arguments.length;
var i__31429__auto___53061 = (0);
while(true){
if((i__31429__auto___53061 < len__31428__auto___53060)){
args__31435__auto__.push((arguments[i__31429__auto___53061]));

var G__53062 = (i__31429__auto___53061 + (1));
i__31429__auto___53061 = G__53062;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53059))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53059){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53059),args);
});})(g__39207__auto___53059))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__39207__auto___53059){
return (function (seq53007){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53007));
});})(g__39207__auto___53059))
;


var g__39207__auto___53063 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__39207__auto___53063){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53064 = arguments.length;
var i__31429__auto___53065 = (0);
while(true){
if((i__31429__auto___53065 < len__31428__auto___53064)){
args__31435__auto__.push((arguments[i__31429__auto___53065]));

var G__53066 = (i__31429__auto___53065 + (1));
i__31429__auto___53065 = G__53066;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53063))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53063){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53063),args);
});})(g__39207__auto___53063))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__39207__auto___53063){
return (function (seq53008){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53008));
});})(g__39207__auto___53063))
;


var g__39207__auto___53067 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__39207__auto___53067){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53068 = arguments.length;
var i__31429__auto___53069 = (0);
while(true){
if((i__31429__auto___53069 < len__31428__auto___53068)){
args__31435__auto__.push((arguments[i__31429__auto___53069]));

var G__53070 = (i__31429__auto___53069 + (1));
i__31429__auto___53069 = G__53070;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53067))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53067){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53067),args);
});})(g__39207__auto___53067))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__39207__auto___53067){
return (function (seq53009){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53009));
});})(g__39207__auto___53067))
;


var g__39207__auto___53071 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__39207__auto___53071){
return (function cljs$spec$impl$gen$sample(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53072 = arguments.length;
var i__31429__auto___53073 = (0);
while(true){
if((i__31429__auto___53073 < len__31428__auto___53072)){
args__31435__auto__.push((arguments[i__31429__auto___53073]));

var G__53074 = (i__31429__auto___53073 + (1));
i__31429__auto___53073 = G__53074;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53071))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53071){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53071),args);
});})(g__39207__auto___53071))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__39207__auto___53071){
return (function (seq53010){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53010));
});})(g__39207__auto___53071))
;


var g__39207__auto___53075 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__39207__auto___53075){
return (function cljs$spec$impl$gen$return(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53076 = arguments.length;
var i__31429__auto___53077 = (0);
while(true){
if((i__31429__auto___53077 < len__31428__auto___53076)){
args__31435__auto__.push((arguments[i__31429__auto___53077]));

var G__53078 = (i__31429__auto___53077 + (1));
i__31429__auto___53077 = G__53078;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53075))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53075){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53075),args);
});})(g__39207__auto___53075))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__39207__auto___53075){
return (function (seq53011){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53011));
});})(g__39207__auto___53075))
;


var g__39207__auto___53079 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__39207__auto___53079){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53080 = arguments.length;
var i__31429__auto___53081 = (0);
while(true){
if((i__31429__auto___53081 < len__31428__auto___53080)){
args__31435__auto__.push((arguments[i__31429__auto___53081]));

var G__53082 = (i__31429__auto___53081 + (1));
i__31429__auto___53081 = G__53082;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53079))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53079){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53079),args);
});})(g__39207__auto___53079))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__39207__auto___53079){
return (function (seq53012){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53012));
});})(g__39207__auto___53079))
;


var g__39207__auto___53083 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__39207__auto___53083){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53084 = arguments.length;
var i__31429__auto___53085 = (0);
while(true){
if((i__31429__auto___53085 < len__31428__auto___53084)){
args__31435__auto__.push((arguments[i__31429__auto___53085]));

var G__53086 = (i__31429__auto___53085 + (1));
i__31429__auto___53085 = G__53086;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53083))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53083){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53083),args);
});})(g__39207__auto___53083))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__39207__auto___53083){
return (function (seq53013){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53013));
});})(g__39207__auto___53083))
;


var g__39207__auto___53087 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__39207__auto___53087){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53088 = arguments.length;
var i__31429__auto___53089 = (0);
while(true){
if((i__31429__auto___53089 < len__31428__auto___53088)){
args__31435__auto__.push((arguments[i__31429__auto___53089]));

var G__53090 = (i__31429__auto___53089 + (1));
i__31429__auto___53089 = G__53090;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39207__auto___53087))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39207__auto___53087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39207__auto___53087),args);
});})(g__39207__auto___53087))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__39207__auto___53087){
return (function (seq53014){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53014));
});})(g__39207__auto___53087))
;

var g__39220__auto___53112 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__39220__auto___53112){
return (function cljs$spec$impl$gen$any(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53113 = arguments.length;
var i__31429__auto___53114 = (0);
while(true){
if((i__31429__auto___53114 < len__31428__auto___53113)){
args__31435__auto__.push((arguments[i__31429__auto___53114]));

var G__53115 = (i__31429__auto___53114 + (1));
i__31429__auto___53114 = G__53115;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53112))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53112){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53112);
});})(g__39220__auto___53112))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__39220__auto___53112){
return (function (seq53091){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53091));
});})(g__39220__auto___53112))
;


var g__39220__auto___53116 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__39220__auto___53116){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53117 = arguments.length;
var i__31429__auto___53118 = (0);
while(true){
if((i__31429__auto___53118 < len__31428__auto___53117)){
args__31435__auto__.push((arguments[i__31429__auto___53118]));

var G__53119 = (i__31429__auto___53118 + (1));
i__31429__auto___53118 = G__53119;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53116))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53116){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53116);
});})(g__39220__auto___53116))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__39220__auto___53116){
return (function (seq53092){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53092));
});})(g__39220__auto___53116))
;


var g__39220__auto___53120 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__39220__auto___53120){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53121 = arguments.length;
var i__31429__auto___53122 = (0);
while(true){
if((i__31429__auto___53122 < len__31428__auto___53121)){
args__31435__auto__.push((arguments[i__31429__auto___53122]));

var G__53123 = (i__31429__auto___53122 + (1));
i__31429__auto___53122 = G__53123;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53120))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53120){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53120);
});})(g__39220__auto___53120))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__39220__auto___53120){
return (function (seq53093){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53093));
});})(g__39220__auto___53120))
;


var g__39220__auto___53124 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__39220__auto___53124){
return (function cljs$spec$impl$gen$char(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53125 = arguments.length;
var i__31429__auto___53126 = (0);
while(true){
if((i__31429__auto___53126 < len__31428__auto___53125)){
args__31435__auto__.push((arguments[i__31429__auto___53126]));

var G__53127 = (i__31429__auto___53126 + (1));
i__31429__auto___53126 = G__53127;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53124))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53124){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53124);
});})(g__39220__auto___53124))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__39220__auto___53124){
return (function (seq53094){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53094));
});})(g__39220__auto___53124))
;


var g__39220__auto___53128 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__39220__auto___53128){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53129 = arguments.length;
var i__31429__auto___53130 = (0);
while(true){
if((i__31429__auto___53130 < len__31428__auto___53129)){
args__31435__auto__.push((arguments[i__31429__auto___53130]));

var G__53131 = (i__31429__auto___53130 + (1));
i__31429__auto___53130 = G__53131;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53128))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53128){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53128);
});})(g__39220__auto___53128))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__39220__auto___53128){
return (function (seq53095){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53095));
});})(g__39220__auto___53128))
;


var g__39220__auto___53132 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__39220__auto___53132){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53133 = arguments.length;
var i__31429__auto___53134 = (0);
while(true){
if((i__31429__auto___53134 < len__31428__auto___53133)){
args__31435__auto__.push((arguments[i__31429__auto___53134]));

var G__53135 = (i__31429__auto___53134 + (1));
i__31429__auto___53134 = G__53135;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53132))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53132){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53132);
});})(g__39220__auto___53132))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__39220__auto___53132){
return (function (seq53096){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53096));
});})(g__39220__auto___53132))
;


var g__39220__auto___53136 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__39220__auto___53136){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53137 = arguments.length;
var i__31429__auto___53138 = (0);
while(true){
if((i__31429__auto___53138 < len__31428__auto___53137)){
args__31435__auto__.push((arguments[i__31429__auto___53138]));

var G__53139 = (i__31429__auto___53138 + (1));
i__31429__auto___53138 = G__53139;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53136))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53136){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53136);
});})(g__39220__auto___53136))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__39220__auto___53136){
return (function (seq53097){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53097));
});})(g__39220__auto___53136))
;


var g__39220__auto___53140 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__39220__auto___53140){
return (function cljs$spec$impl$gen$double(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53141 = arguments.length;
var i__31429__auto___53142 = (0);
while(true){
if((i__31429__auto___53142 < len__31428__auto___53141)){
args__31435__auto__.push((arguments[i__31429__auto___53142]));

var G__53143 = (i__31429__auto___53142 + (1));
i__31429__auto___53142 = G__53143;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53140))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53140){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53140);
});})(g__39220__auto___53140))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__39220__auto___53140){
return (function (seq53098){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53098));
});})(g__39220__auto___53140))
;


var g__39220__auto___53144 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__39220__auto___53144){
return (function cljs$spec$impl$gen$int(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53145 = arguments.length;
var i__31429__auto___53146 = (0);
while(true){
if((i__31429__auto___53146 < len__31428__auto___53145)){
args__31435__auto__.push((arguments[i__31429__auto___53146]));

var G__53147 = (i__31429__auto___53146 + (1));
i__31429__auto___53146 = G__53147;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53144))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53144){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53144);
});})(g__39220__auto___53144))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__39220__auto___53144){
return (function (seq53099){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53099));
});})(g__39220__auto___53144))
;


var g__39220__auto___53148 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__39220__auto___53148){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53149 = arguments.length;
var i__31429__auto___53150 = (0);
while(true){
if((i__31429__auto___53150 < len__31428__auto___53149)){
args__31435__auto__.push((arguments[i__31429__auto___53150]));

var G__53151 = (i__31429__auto___53150 + (1));
i__31429__auto___53150 = G__53151;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53148))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53148){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53148);
});})(g__39220__auto___53148))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__39220__auto___53148){
return (function (seq53100){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53100));
});})(g__39220__auto___53148))
;


var g__39220__auto___53152 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__39220__auto___53152){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53153 = arguments.length;
var i__31429__auto___53154 = (0);
while(true){
if((i__31429__auto___53154 < len__31428__auto___53153)){
args__31435__auto__.push((arguments[i__31429__auto___53154]));

var G__53155 = (i__31429__auto___53154 + (1));
i__31429__auto___53154 = G__53155;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53152))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53152){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53152);
});})(g__39220__auto___53152))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__39220__auto___53152){
return (function (seq53101){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53101));
});})(g__39220__auto___53152))
;


var g__39220__auto___53156 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__39220__auto___53156){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53157 = arguments.length;
var i__31429__auto___53158 = (0);
while(true){
if((i__31429__auto___53158 < len__31428__auto___53157)){
args__31435__auto__.push((arguments[i__31429__auto___53158]));

var G__53159 = (i__31429__auto___53158 + (1));
i__31429__auto___53158 = G__53159;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53156))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53156){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53156);
});})(g__39220__auto___53156))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__39220__auto___53156){
return (function (seq53102){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53102));
});})(g__39220__auto___53156))
;


var g__39220__auto___53160 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__39220__auto___53160){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53161 = arguments.length;
var i__31429__auto___53162 = (0);
while(true){
if((i__31429__auto___53162 < len__31428__auto___53161)){
args__31435__auto__.push((arguments[i__31429__auto___53162]));

var G__53163 = (i__31429__auto___53162 + (1));
i__31429__auto___53162 = G__53163;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53160))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53160){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53160);
});})(g__39220__auto___53160))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__39220__auto___53160){
return (function (seq53103){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53103));
});})(g__39220__auto___53160))
;


var g__39220__auto___53164 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__39220__auto___53164){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53165 = arguments.length;
var i__31429__auto___53166 = (0);
while(true){
if((i__31429__auto___53166 < len__31428__auto___53165)){
args__31435__auto__.push((arguments[i__31429__auto___53166]));

var G__53167 = (i__31429__auto___53166 + (1));
i__31429__auto___53166 = G__53167;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53164))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53164){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53164);
});})(g__39220__auto___53164))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__39220__auto___53164){
return (function (seq53104){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53104));
});})(g__39220__auto___53164))
;


var g__39220__auto___53168 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__39220__auto___53168){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53169 = arguments.length;
var i__31429__auto___53170 = (0);
while(true){
if((i__31429__auto___53170 < len__31428__auto___53169)){
args__31435__auto__.push((arguments[i__31429__auto___53170]));

var G__53171 = (i__31429__auto___53170 + (1));
i__31429__auto___53170 = G__53171;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53168))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53168){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53168);
});})(g__39220__auto___53168))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__39220__auto___53168){
return (function (seq53105){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53105));
});})(g__39220__auto___53168))
;


var g__39220__auto___53172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__39220__auto___53172){
return (function cljs$spec$impl$gen$string(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53173 = arguments.length;
var i__31429__auto___53174 = (0);
while(true){
if((i__31429__auto___53174 < len__31428__auto___53173)){
args__31435__auto__.push((arguments[i__31429__auto___53174]));

var G__53175 = (i__31429__auto___53174 + (1));
i__31429__auto___53174 = G__53175;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53172))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53172){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53172);
});})(g__39220__auto___53172))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__39220__auto___53172){
return (function (seq53106){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53106));
});})(g__39220__auto___53172))
;


var g__39220__auto___53176 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__39220__auto___53176){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53177 = arguments.length;
var i__31429__auto___53178 = (0);
while(true){
if((i__31429__auto___53178 < len__31428__auto___53177)){
args__31435__auto__.push((arguments[i__31429__auto___53178]));

var G__53179 = (i__31429__auto___53178 + (1));
i__31429__auto___53178 = G__53179;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53176))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53176){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53176);
});})(g__39220__auto___53176))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__39220__auto___53176){
return (function (seq53107){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53107));
});})(g__39220__auto___53176))
;


var g__39220__auto___53180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__39220__auto___53180){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53181 = arguments.length;
var i__31429__auto___53182 = (0);
while(true){
if((i__31429__auto___53182 < len__31428__auto___53181)){
args__31435__auto__.push((arguments[i__31429__auto___53182]));

var G__53183 = (i__31429__auto___53182 + (1));
i__31429__auto___53182 = G__53183;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53180))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53180){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53180);
});})(g__39220__auto___53180))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__39220__auto___53180){
return (function (seq53108){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53108));
});})(g__39220__auto___53180))
;


var g__39220__auto___53184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__39220__auto___53184){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53185 = arguments.length;
var i__31429__auto___53186 = (0);
while(true){
if((i__31429__auto___53186 < len__31428__auto___53185)){
args__31435__auto__.push((arguments[i__31429__auto___53186]));

var G__53187 = (i__31429__auto___53186 + (1));
i__31429__auto___53186 = G__53187;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53184))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53184){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53184);
});})(g__39220__auto___53184))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__39220__auto___53184){
return (function (seq53109){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53109));
});})(g__39220__auto___53184))
;


var g__39220__auto___53188 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__39220__auto___53188){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53189 = arguments.length;
var i__31429__auto___53190 = (0);
while(true){
if((i__31429__auto___53190 < len__31428__auto___53189)){
args__31435__auto__.push((arguments[i__31429__auto___53190]));

var G__53191 = (i__31429__auto___53190 + (1));
i__31429__auto___53190 = G__53191;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53188))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53188){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53188);
});})(g__39220__auto___53188))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__39220__auto___53188){
return (function (seq53110){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53110));
});})(g__39220__auto___53188))
;


var g__39220__auto___53192 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__39220__auto___53192){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53193 = arguments.length;
var i__31429__auto___53194 = (0);
while(true){
if((i__31429__auto___53194 < len__31428__auto___53193)){
args__31435__auto__.push((arguments[i__31429__auto___53194]));

var G__53195 = (i__31429__auto___53194 + (1));
i__31429__auto___53194 = G__53195;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});})(g__39220__auto___53192))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39220__auto___53192){
return (function (args){
return cljs.core.deref.call(null,g__39220__auto___53192);
});})(g__39220__auto___53192))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__39220__auto___53192){
return (function (seq53111){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53111));
});})(g__39220__auto___53192))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__31435__auto__ = [];
var len__31428__auto___53198 = arguments.length;
var i__31429__auto___53199 = (0);
while(true){
if((i__31429__auto___53199 < len__31428__auto___53198)){
args__31435__auto__.push((arguments[i__31429__auto___53199]));

var G__53200 = (i__31429__auto___53199 + (1));
i__31429__auto___53199 = G__53200;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((0) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31436__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__53196_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__53196_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq53197){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53197));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__53201_SHARP_){
return (new Date(p1__53201_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map