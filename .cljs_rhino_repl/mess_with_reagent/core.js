// Compiled by ClojureScript 1.9.495 {}
goog.provide('mess_with_reagent.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
mess_with_reagent.core.home_page = (function mess_with_reagent$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to mess_with_reagent"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"go to about page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/my-page"], null),"my page"], null)], null)], null)], null);
});
mess_with_reagent.core.about_page = (function mess_with_reagent$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About mess_with_reagent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to the home page"], null)], null)], null);
});
mess_with_reagent.core.my_page = (function mess_with_reagent$core$my_page(my_string){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Really, I'm just making sure that this all works like I expect it to."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Variableeeee:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is some-string : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(my_string)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"root"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"about"], null)], null)], null)], null);
});
mess_with_reagent.core.current_page = (function mess_with_reagent$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
var action__36308__auto___56036 = (function (params__36309__auto__){
if(cljs.core.map_QMARK_.call(null,params__36309__auto__)){
var map__56031 = params__36309__auto__;
var map__56031__$1 = ((((!((map__56031 == null)))?((((map__56031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56031):map__56031);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return mess_with_reagent.core.home_page;},new cljs.core.Symbol("mess-with-reagent.core","home-page","mess-with-reagent.core/home-page",-1208112426,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mess-with-reagent.core","mess-with-reagent.core",1162141570,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/tiny/code/art/mess_with_reagent/src/cljs/mess_with_reagent/core.cljs",16,1,10,10,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mess_with_reagent.core.home_page)?mess_with_reagent.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__36309__auto__)){
var vec__56033 = params__36309__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return mess_with_reagent.core.home_page;},new cljs.core.Symbol("mess-with-reagent.core","home-page","mess-with-reagent.core/home-page",-1208112426,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mess-with-reagent.core","mess-with-reagent.core",1162141570,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/tiny/code/art/mess_with_reagent/src/cljs/mess_with_reagent/core.cljs",16,1,10,10,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mess_with_reagent.core.home_page)?mess_with_reagent.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__36308__auto___56036);

var action__36308__auto___56042 = (function (params__36309__auto__){
if(cljs.core.map_QMARK_.call(null,params__36309__auto__)){
var map__56037 = params__36309__auto__;
var map__56037__$1 = ((((!((map__56037 == null)))?((((map__56037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56037):map__56037);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return mess_with_reagent.core.about_page;},new cljs.core.Symbol("mess-with-reagent.core","about-page","mess-with-reagent.core/about-page",-347576486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mess-with-reagent.core","mess-with-reagent.core",1162141570,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/tiny/code/art/mess_with_reagent/src/cljs/mess_with_reagent/core.cljs",17,1,15,15,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mess_with_reagent.core.about_page)?mess_with_reagent.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__36309__auto__)){
var vec__56039 = params__36309__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return mess_with_reagent.core.about_page;},new cljs.core.Symbol("mess-with-reagent.core","about-page","mess-with-reagent.core/about-page",-347576486,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mess-with-reagent.core","mess-with-reagent.core",1162141570,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/tiny/code/art/mess_with_reagent/src/cljs/mess_with_reagent/core.cljs",17,1,15,15,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mess_with_reagent.core.about_page)?mess_with_reagent.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__36308__auto___56042);

var action__36308__auto___56048 = (function (params__36309__auto__){
if(cljs.core.map_QMARK_.call(null,params__36309__auto__)){
var map__56043 = params__36309__auto__;
var map__56043__$1 = ((((!((map__56043 == null)))?((((map__56043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56043):map__56043);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return mess_with_reagent.core.my_page;},new cljs.core.Symbol("mess-with-reagent.core","my-page","mess-with-reagent.core/my-page",-1604042105,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mess-with-reagent.core","mess-with-reagent.core",1162141570,null),new cljs.core.Symbol(null,"my-page","my-page",769178420,null),"/Users/tiny/code/art/mess_with_reagent/src/cljs/mess_with_reagent/core.cljs",14,1,19,19,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"my-string","my-string",-2072412619,null)], null)),null,(cljs.core.truth_(mess_with_reagent.core.my_page)?mess_with_reagent.core.my_page.cljs$lang$test:null)])),"blah");
} else {
if(cljs.core.vector_QMARK_.call(null,params__36309__auto__)){
var vec__56045 = params__36309__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return mess_with_reagent.core.my_page;},new cljs.core.Symbol("mess-with-reagent.core","my-page","mess-with-reagent.core/my-page",-1604042105,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mess-with-reagent.core","mess-with-reagent.core",1162141570,null),new cljs.core.Symbol(null,"my-page","my-page",769178420,null),"/Users/tiny/code/art/mess_with_reagent/src/cljs/mess_with_reagent/core.cljs",14,1,19,19,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"my-string","my-string",-2072412619,null)], null)),null,(cljs.core.truth_(mess_with_reagent.core.my_page)?mess_with_reagent.core.my_page.cljs$lang$test:null)])),"blah");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/my-page",action__36308__auto___56048);

mess_with_reagent.core.mount_root = (function mess_with_reagent$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mess_with_reagent.core.current_page], null),document.getElementById("app"));
});
mess_with_reagent.core.init_BANG_ = (function mess_with_reagent$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return mess_with_reagent.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map