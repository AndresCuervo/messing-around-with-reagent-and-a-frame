// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51933){
var map__51958 = p__51933;
var map__51958__$1 = ((((!((map__51958 == null)))?((((map__51958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51958):map__51958);
var m = map__51958__$1;
var n = cljs.core.get.call(null,map__51958__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51958__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51960_51982 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51961_51983 = null;
var count__51962_51984 = (0);
var i__51963_51985 = (0);
while(true){
if((i__51963_51985 < count__51962_51984)){
var f_51986 = cljs.core._nth.call(null,chunk__51961_51983,i__51963_51985);
cljs.core.println.call(null,"  ",f_51986);

var G__51987 = seq__51960_51982;
var G__51988 = chunk__51961_51983;
var G__51989 = count__51962_51984;
var G__51990 = (i__51963_51985 + (1));
seq__51960_51982 = G__51987;
chunk__51961_51983 = G__51988;
count__51962_51984 = G__51989;
i__51963_51985 = G__51990;
continue;
} else {
var temp__4657__auto___51991 = cljs.core.seq.call(null,seq__51960_51982);
if(temp__4657__auto___51991){
var seq__51960_51992__$1 = temp__4657__auto___51991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51960_51992__$1)){
var c__31134__auto___51993 = cljs.core.chunk_first.call(null,seq__51960_51992__$1);
var G__51994 = cljs.core.chunk_rest.call(null,seq__51960_51992__$1);
var G__51995 = c__31134__auto___51993;
var G__51996 = cljs.core.count.call(null,c__31134__auto___51993);
var G__51997 = (0);
seq__51960_51982 = G__51994;
chunk__51961_51983 = G__51995;
count__51962_51984 = G__51996;
i__51963_51985 = G__51997;
continue;
} else {
var f_51998 = cljs.core.first.call(null,seq__51960_51992__$1);
cljs.core.println.call(null,"  ",f_51998);

var G__51999 = cljs.core.next.call(null,seq__51960_51992__$1);
var G__52000 = null;
var G__52001 = (0);
var G__52002 = (0);
seq__51960_51982 = G__51999;
chunk__51961_51983 = G__52000;
count__51962_51984 = G__52001;
i__51963_51985 = G__52002;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52003 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30315__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30315__auto__)){
return or__30315__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_52003);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_52003)))?cljs.core.second.call(null,arglists_52003):arglists_52003));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51964_52004 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51965_52005 = null;
var count__51966_52006 = (0);
var i__51967_52007 = (0);
while(true){
if((i__51967_52007 < count__51966_52006)){
var vec__51968_52008 = cljs.core._nth.call(null,chunk__51965_52005,i__51967_52007);
var name_52009 = cljs.core.nth.call(null,vec__51968_52008,(0),null);
var map__51971_52010 = cljs.core.nth.call(null,vec__51968_52008,(1),null);
var map__51971_52011__$1 = ((((!((map__51971_52010 == null)))?((((map__51971_52010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51971_52010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51971_52010):map__51971_52010);
var doc_52012 = cljs.core.get.call(null,map__51971_52011__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52013 = cljs.core.get.call(null,map__51971_52011__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52009);

cljs.core.println.call(null," ",arglists_52013);

if(cljs.core.truth_(doc_52012)){
cljs.core.println.call(null," ",doc_52012);
} else {
}

var G__52014 = seq__51964_52004;
var G__52015 = chunk__51965_52005;
var G__52016 = count__51966_52006;
var G__52017 = (i__51967_52007 + (1));
seq__51964_52004 = G__52014;
chunk__51965_52005 = G__52015;
count__51966_52006 = G__52016;
i__51967_52007 = G__52017;
continue;
} else {
var temp__4657__auto___52018 = cljs.core.seq.call(null,seq__51964_52004);
if(temp__4657__auto___52018){
var seq__51964_52019__$1 = temp__4657__auto___52018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51964_52019__$1)){
var c__31134__auto___52020 = cljs.core.chunk_first.call(null,seq__51964_52019__$1);
var G__52021 = cljs.core.chunk_rest.call(null,seq__51964_52019__$1);
var G__52022 = c__31134__auto___52020;
var G__52023 = cljs.core.count.call(null,c__31134__auto___52020);
var G__52024 = (0);
seq__51964_52004 = G__52021;
chunk__51965_52005 = G__52022;
count__51966_52006 = G__52023;
i__51967_52007 = G__52024;
continue;
} else {
var vec__51973_52025 = cljs.core.first.call(null,seq__51964_52019__$1);
var name_52026 = cljs.core.nth.call(null,vec__51973_52025,(0),null);
var map__51976_52027 = cljs.core.nth.call(null,vec__51973_52025,(1),null);
var map__51976_52028__$1 = ((((!((map__51976_52027 == null)))?((((map__51976_52027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51976_52027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51976_52027):map__51976_52027);
var doc_52029 = cljs.core.get.call(null,map__51976_52028__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52030 = cljs.core.get.call(null,map__51976_52028__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52026);

cljs.core.println.call(null," ",arglists_52030);

if(cljs.core.truth_(doc_52029)){
cljs.core.println.call(null," ",doc_52029);
} else {
}

var G__52031 = cljs.core.next.call(null,seq__51964_52019__$1);
var G__52032 = null;
var G__52033 = (0);
var G__52034 = (0);
seq__51964_52004 = G__52031;
chunk__51965_52005 = G__52032;
count__51966_52006 = G__52033;
i__51967_52007 = G__52034;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__51978 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51979 = null;
var count__51980 = (0);
var i__51981 = (0);
while(true){
if((i__51981 < count__51980)){
var role = cljs.core._nth.call(null,chunk__51979,i__51981);
var temp__4657__auto___52035__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52035__$1)){
var spec_52036 = temp__4657__auto___52035__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_52036));
} else {
}

var G__52037 = seq__51978;
var G__52038 = chunk__51979;
var G__52039 = count__51980;
var G__52040 = (i__51981 + (1));
seq__51978 = G__52037;
chunk__51979 = G__52038;
count__51980 = G__52039;
i__51981 = G__52040;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__51978);
if(temp__4657__auto____$1){
var seq__51978__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51978__$1)){
var c__31134__auto__ = cljs.core.chunk_first.call(null,seq__51978__$1);
var G__52041 = cljs.core.chunk_rest.call(null,seq__51978__$1);
var G__52042 = c__31134__auto__;
var G__52043 = cljs.core.count.call(null,c__31134__auto__);
var G__52044 = (0);
seq__51978 = G__52041;
chunk__51979 = G__52042;
count__51980 = G__52043;
i__51981 = G__52044;
continue;
} else {
var role = cljs.core.first.call(null,seq__51978__$1);
var temp__4657__auto___52045__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52045__$2)){
var spec_52046 = temp__4657__auto___52045__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_52046));
} else {
}

var G__52047 = cljs.core.next.call(null,seq__51978__$1);
var G__52048 = null;
var G__52049 = (0);
var G__52050 = (0);
seq__51978 = G__52047;
chunk__51979 = G__52048;
count__51980 = G__52049;
i__51981 = G__52050;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map