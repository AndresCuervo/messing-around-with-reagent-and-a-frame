// Compiled by ClojureScript 1.9.495 {}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
var navigation = accountant.core.listen.call(null,history,goog.history.EventType.NAVIGATE);
var c__33417__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33417__auto__,navigation){
return (function (){
var f__33418__auto__ = (function (){var switch__33305__auto__ = ((function (c__33417__auto__,navigation){
return (function (state_56265){
var state_val_56266 = (state_56265[(1)]);
if((state_val_56266 === (1))){
var state_56265__$1 = state_56265;
var statearr_56267_56281 = state_56265__$1;
(statearr_56267_56281[(2)] = null);

(statearr_56267_56281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56266 === (2))){
var state_56265__$1 = state_56265;
var statearr_56268_56282 = state_56265__$1;
(statearr_56268_56282[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56266 === (3))){
var inst_56263 = (state_56265[(2)]);
var state_56265__$1 = state_56265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56265__$1,inst_56263);
} else {
if((state_val_56266 === (4))){
var state_56265__$1 = state_56265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56265__$1,(7),navigation);
} else {
if((state_val_56266 === (5))){
var state_56265__$1 = state_56265;
var statearr_56270_56283 = state_56265__$1;
(statearr_56270_56283[(2)] = null);

(statearr_56270_56283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56266 === (6))){
var inst_56261 = (state_56265[(2)]);
var state_56265__$1 = state_56265;
var statearr_56271_56284 = state_56265__$1;
(statearr_56271_56284[(2)] = inst_56261);

(statearr_56271_56284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56266 === (7))){
var inst_56255 = (state_56265[(2)]);
var inst_56256 = inst_56255.token;
var inst_56257 = nav_handler.call(null,inst_56256);
var state_56265__$1 = (function (){var statearr_56272 = state_56265;
(statearr_56272[(7)] = inst_56257);

return statearr_56272;
})();
var statearr_56273_56285 = state_56265__$1;
(statearr_56273_56285[(2)] = null);

(statearr_56273_56285[(1)] = (2));


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
});})(c__33417__auto__,navigation))
;
return ((function (switch__33305__auto__,c__33417__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__33306__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__33306__auto____0 = (function (){
var statearr_56277 = [null,null,null,null,null,null,null,null];
(statearr_56277[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__33306__auto__);

(statearr_56277[(1)] = (1));

return statearr_56277;
});
var accountant$core$dispatch_on_navigate_$_state_machine__33306__auto____1 = (function (state_56265){
while(true){
var ret_value__33307__auto__ = (function (){try{while(true){
var result__33308__auto__ = switch__33305__auto__.call(null,state_56265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33308__auto__;
}
break;
}
}catch (e56278){if((e56278 instanceof Object)){
var ex__33309__auto__ = e56278;
var statearr_56279_56286 = state_56265;
(statearr_56279_56286[(5)] = ex__33309__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56287 = state_56265;
state_56265 = G__56287;
continue;
} else {
return ret_value__33307__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__33306__auto__ = function(state_56265){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__33306__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__33306__auto____1.call(this,state_56265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__33306__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__33306__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__33306__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__33306__auto__;
})()
;})(switch__33305__auto__,c__33417__auto__,navigation))
})();
var state__33419__auto__ = (function (){var statearr_56280 = f__33418__auto__.call(null);
(statearr_56280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33417__auto__);

return statearr_56280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33419__auto__);
});})(c__33417__auto__,navigation))
);

return c__33417__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the node.
 */
accountant.core.find_href_node = (function accountant$core$find_href_node(e){
while(true){
if(cljs.core.truth_(e.href)){
return e;
} else {
var temp__4657__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__56288 = parent;
e = G__56288;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(history.pathPrefix_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url.call(null,history,token);
js_history.pushState(null,(function (){var or__30315__auto__ = title;
if(cljs.core.truth_(or__30315__auto__)){
return or__30315__auto__;
} else {
var or__30315__auto____$1 = document.title;
if(cljs.core.truth_(or__30315__auto____$1)){
return or__30315__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_.call(null,fragment)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_){
return goog.events.listen(document,"click",(function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__30315__auto__ = meta_key;
if(cljs.core.truth_(or__30315__auto__)){
return or__30315__auto__;
} else {
var or__30315__auto____$1 = alt_key;
if(cljs.core.truth_(or__30315__auto____$1)){
return or__30315__auto____$1;
} else {
var or__30315__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__30315__auto____$2)){
return or__30315__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href_node = accountant.core.find_href_node.call(null,target);
var href = (cljs.core.truth_(href_node)?href_node.href:null);
var link_target = (cljs.core.truth_(href_node)?href_node.target:null);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query.call(null,uri);
var fragment = accountant.core.uri__GT_fragment.call(null,uri);
var relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
var title = target.title;
var host = uri.getDomain();
var port = uri.getPort();
var current_host = window.location.hostname;
var current_port = window.location.port;
var loc = window.location;
var current_relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join('');
if(cljs.core.truth_((function (){var and__30303__auto__ = cljs.core.not.call(null,any_key);
if(and__30303__auto__){
var and__30303__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null).call(null,link_target);
if(cljs.core.truth_(and__30303__auto____$1)){
var and__30303__auto____$2 = cljs.core._EQ_.call(null,button,(0));
if(and__30303__auto____$2){
var and__30303__auto____$3 = cljs.core._EQ_.call(null,host,current_host);
if(and__30303__auto____$3){
var and__30303__auto____$4 = (cljs.core.not.call(null,port)) || (cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_port)].join('')));
if(and__30303__auto____$4){
var and__30303__auto____$5 = cljs.core.not_EQ_.call(null,current_relative_href,relative_href);
if(and__30303__auto____$5){
return path_exists_QMARK_.call(null,path);
} else {
return and__30303__auto____$5;
}
} else {
return and__30303__auto____$4;
}
} else {
return and__30303__auto____$3;
}
} else {
return and__30303__auto____$2;
}
} else {
return and__30303__auto____$1;
}
} else {
return and__30303__auto__;
}
})())){
accountant.core.set_token_BANG_.call(null,history,relative_href,title);

return e.preventDefault();
} else {
return null;
}
}));
});
if(typeof accountant.core.nav_handler !== 'undefined'){
} else {
accountant.core.nav_handler = null;
}
if(typeof accountant.core.path_exists_QMARK_ !== 'undefined'){
} else {
accountant.core.path_exists_QMARK_ = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__56289){
var map__56292 = p__56289;
var map__56292__$1 = ((((!((map__56292 == null)))?((((map__56292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56292):map__56292);
var nav_handler = cljs.core.get.call(null,map__56292__$1,new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484));
var path_exists_QMARK_ = cljs.core.get.call(null,map__56292__$1,new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514));
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.nav_handler = nav_handler;

accountant.core.path_exists_QMARK_ = path_exists_QMARK_;

accountant.core.dispatch_on_navigate.call(null,accountant.core.history,nav_handler);

return accountant.core.prevent_reload_on_known_path.call(null,accountant.core.history,path_exists_QMARK_);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.call(null,(function (p1__56294_SHARP_){
return cljs.core.name.call(null,p1__56294_SHARP_);
}),cljs.core.keys.call(null,query));
var values = cljs.core.vals.call(null,query);
var pairs = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,params,values));
return clojure.string.join.call(null,"&",cljs.core.map.call(null,((function (params,values,pairs){
return (function (p1__56295_SHARP_){
return clojure.string.join.call(null,"=",p1__56295_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args56296 = [];
var len__31428__auto___56299 = arguments.length;
var i__31429__auto___56300 = (0);
while(true){
if((i__31429__auto___56300 < len__31428__auto___56299)){
args56296.push((arguments[i__31429__auto___56300]));

var G__56301 = (i__31429__auto___56300 + (1));
i__31429__auto___56300 = G__56301;
continue;
} else {
}
break;
}

var G__56298 = args56296.length;
switch (G__56298) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56296.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first.call(null,clojure.string.split.call(null,token,"?"));
var query_string = accountant.core.map__GT_params.call(null,cljs.core.reduce_kv.call(null,((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_.call(null,query_string))?route:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join(''));
if(cljs.core._EQ_.call(null,old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;

accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
return accountant.core.nav_handler.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});

//# sourceMappingURL=core.js.map