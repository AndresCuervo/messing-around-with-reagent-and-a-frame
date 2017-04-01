// Compiled by ClojureScript 1.9.495 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__31435__auto__ = [];
var len__31428__auto___59676 = arguments.length;
var i__31429__auto___59677 = (0);
while(true){
if((i__31429__auto___59677 < len__31428__auto___59676)){
args__31435__auto__.push((arguments[i__31429__auto___59677]));

var G__59678 = (i__31429__auto___59677 + (1));
i__31429__auto___59677 = G__59678;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((1) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31436__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__59672){
var vec__59673 = p__59672;
var default$ = cljs.core.nth.call(null,vec__59673,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq59670){
var G__59671 = cljs.core.first.call(null,seq59670);
var seq59670__$1 = cljs.core.next.call(null,seq59670);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__59671,seq59670__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__31435__auto__ = [];
var len__31428__auto___59685 = arguments.length;
var i__31429__auto___59686 = (0);
while(true){
if((i__31429__auto___59686 < len__31428__auto___59685)){
args__31435__auto__.push((arguments[i__31429__auto___59686]));

var G__59687 = (i__31429__auto___59686 + (1));
i__31429__auto___59686 = G__59687;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((1) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31436__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__59681){
var vec__59682 = p__59681;
var default$ = cljs.core.nth.call(null,vec__59682,(0),null);
var or__30315__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__30315__auto__)){
return or__30315__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq59679){
var G__59680 = cljs.core.first.call(null,seq59679);
var seq59679__$1 = cljs.core.next.call(null,seq59679);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__59680,seq59679__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__31435__auto__ = [];
var len__31428__auto___59690 = arguments.length;
var i__31429__auto___59691 = (0);
while(true){
if((i__31429__auto___59691 < len__31428__auto___59690)){
args__31435__auto__.push((arguments[i__31429__auto___59691]));

var G__59692 = (i__31429__auto___59691 + (1));
i__31429__auto___59691 = G__59692;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((1) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31436__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq59688){
var G__59689 = cljs.core.first.call(null,seq59688);
var seq59688__$1 = cljs.core.next.call(null,seq59688);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59689,seq59688__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__31435__auto__ = [];
var len__31428__auto___59699 = arguments.length;
var i__31429__auto___59700 = (0);
while(true){
if((i__31429__auto___59700 < len__31428__auto___59699)){
args__31435__auto__.push((arguments[i__31429__auto___59700]));

var G__59701 = (i__31429__auto___59700 + (1));
i__31429__auto___59700 = G__59701;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((1) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31436__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__59695){
var vec__59696 = p__59695;
var default$ = cljs.core.nth.call(null,vec__59696,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq59693){
var G__59694 = cljs.core.first.call(null,seq59693);
var seq59693__$1 = cljs.core.next.call(null,seq59693);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59694,seq59693__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__31435__auto__ = [];
var len__31428__auto___59708 = arguments.length;
var i__31429__auto___59709 = (0);
while(true){
if((i__31429__auto___59709 < len__31428__auto___59708)){
args__31435__auto__.push((arguments[i__31429__auto___59709]));

var G__59710 = (i__31429__auto___59709 + (1));
i__31429__auto___59709 = G__59710;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((1) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31436__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__59704){
var vec__59705 = p__59704;
var default$ = cljs.core.nth.call(null,vec__59705,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq59702){
var G__59703 = cljs.core.first.call(null,seq59702);
var seq59702__$1 = cljs.core.next.call(null,seq59702);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59703,seq59702__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__31435__auto__ = [];
var len__31428__auto___59715 = arguments.length;
var i__31429__auto___59716 = (0);
while(true){
if((i__31429__auto___59716 < len__31428__auto___59715)){
args__31435__auto__.push((arguments[i__31429__auto___59716]));

var G__59717 = (i__31429__auto___59716 + (1));
i__31429__auto___59716 = G__59717;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((2) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31436__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__59711_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__59711_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq59712){
var G__59713 = cljs.core.first.call(null,seq59712);
var seq59712__$1 = cljs.core.next.call(null,seq59712);
var G__59714 = cljs.core.first.call(null,seq59712__$1);
var seq59712__$2 = cljs.core.next.call(null,seq59712__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59713,G__59714,seq59712__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__31435__auto__ = [];
var len__31428__auto___59722 = arguments.length;
var i__31429__auto___59723 = (0);
while(true){
if((i__31429__auto___59723 < len__31428__auto___59722)){
args__31435__auto__.push((arguments[i__31429__auto___59723]));

var G__59724 = (i__31429__auto___59723 + (1));
i__31429__auto___59723 = G__59724;
continue;
} else {
}
break;
}

var argseq__31436__auto__ = ((((2) < args__31435__auto__.length))?(new cljs.core.IndexedSeq(args__31435__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31436__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__59718_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__59718_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq59719){
var G__59720 = cljs.core.first.call(null,seq59719);
var seq59719__$1 = cljs.core.next.call(null,seq59719);
var G__59721 = cljs.core.first.call(null,seq59719__$1);
var seq59719__$2 = cljs.core.next.call(null,seq59719__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59720,G__59721,seq59719__$2);
});


//# sourceMappingURL=session.js.map