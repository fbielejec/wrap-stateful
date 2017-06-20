// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36715){
var map__36740 = p__36715;
var map__36740__$1 = ((((!((map__36740 == null)))?((((map__36740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36740):map__36740);
var m = map__36740__$1;
var n = cljs.core.get.call(null,map__36740__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36742_36764 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36743_36765 = null;
var count__36744_36766 = (0);
var i__36745_36767 = (0);
while(true){
if((i__36745_36767 < count__36744_36766)){
var f_36768 = cljs.core._nth.call(null,chunk__36743_36765,i__36745_36767);
cljs.core.println.call(null,"  ",f_36768);

var G__36769 = seq__36742_36764;
var G__36770 = chunk__36743_36765;
var G__36771 = count__36744_36766;
var G__36772 = (i__36745_36767 + (1));
seq__36742_36764 = G__36769;
chunk__36743_36765 = G__36770;
count__36744_36766 = G__36771;
i__36745_36767 = G__36772;
continue;
} else {
var temp__4657__auto___36773 = cljs.core.seq.call(null,seq__36742_36764);
if(temp__4657__auto___36773){
var seq__36742_36774__$1 = temp__4657__auto___36773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36742_36774__$1)){
var c__28123__auto___36775 = cljs.core.chunk_first.call(null,seq__36742_36774__$1);
var G__36776 = cljs.core.chunk_rest.call(null,seq__36742_36774__$1);
var G__36777 = c__28123__auto___36775;
var G__36778 = cljs.core.count.call(null,c__28123__auto___36775);
var G__36779 = (0);
seq__36742_36764 = G__36776;
chunk__36743_36765 = G__36777;
count__36744_36766 = G__36778;
i__36745_36767 = G__36779;
continue;
} else {
var f_36780 = cljs.core.first.call(null,seq__36742_36774__$1);
cljs.core.println.call(null,"  ",f_36780);

var G__36781 = cljs.core.next.call(null,seq__36742_36774__$1);
var G__36782 = null;
var G__36783 = (0);
var G__36784 = (0);
seq__36742_36764 = G__36781;
chunk__36743_36765 = G__36782;
count__36744_36766 = G__36783;
i__36745_36767 = G__36784;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36785 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27304__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36785);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36785)))?cljs.core.second.call(null,arglists_36785):arglists_36785));
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
var seq__36746_36786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36747_36787 = null;
var count__36748_36788 = (0);
var i__36749_36789 = (0);
while(true){
if((i__36749_36789 < count__36748_36788)){
var vec__36750_36790 = cljs.core._nth.call(null,chunk__36747_36787,i__36749_36789);
var name_36791 = cljs.core.nth.call(null,vec__36750_36790,(0),null);
var map__36753_36792 = cljs.core.nth.call(null,vec__36750_36790,(1),null);
var map__36753_36793__$1 = ((((!((map__36753_36792 == null)))?((((map__36753_36792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36753_36792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36753_36792):map__36753_36792);
var doc_36794 = cljs.core.get.call(null,map__36753_36793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36795 = cljs.core.get.call(null,map__36753_36793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36791);

cljs.core.println.call(null," ",arglists_36795);

if(cljs.core.truth_(doc_36794)){
cljs.core.println.call(null," ",doc_36794);
} else {
}

var G__36796 = seq__36746_36786;
var G__36797 = chunk__36747_36787;
var G__36798 = count__36748_36788;
var G__36799 = (i__36749_36789 + (1));
seq__36746_36786 = G__36796;
chunk__36747_36787 = G__36797;
count__36748_36788 = G__36798;
i__36749_36789 = G__36799;
continue;
} else {
var temp__4657__auto___36800 = cljs.core.seq.call(null,seq__36746_36786);
if(temp__4657__auto___36800){
var seq__36746_36801__$1 = temp__4657__auto___36800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36746_36801__$1)){
var c__28123__auto___36802 = cljs.core.chunk_first.call(null,seq__36746_36801__$1);
var G__36803 = cljs.core.chunk_rest.call(null,seq__36746_36801__$1);
var G__36804 = c__28123__auto___36802;
var G__36805 = cljs.core.count.call(null,c__28123__auto___36802);
var G__36806 = (0);
seq__36746_36786 = G__36803;
chunk__36747_36787 = G__36804;
count__36748_36788 = G__36805;
i__36749_36789 = G__36806;
continue;
} else {
var vec__36755_36807 = cljs.core.first.call(null,seq__36746_36801__$1);
var name_36808 = cljs.core.nth.call(null,vec__36755_36807,(0),null);
var map__36758_36809 = cljs.core.nth.call(null,vec__36755_36807,(1),null);
var map__36758_36810__$1 = ((((!((map__36758_36809 == null)))?((((map__36758_36809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36758_36809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36758_36809):map__36758_36809);
var doc_36811 = cljs.core.get.call(null,map__36758_36810__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36812 = cljs.core.get.call(null,map__36758_36810__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36808);

cljs.core.println.call(null," ",arglists_36812);

if(cljs.core.truth_(doc_36811)){
cljs.core.println.call(null," ",doc_36811);
} else {
}

var G__36813 = cljs.core.next.call(null,seq__36746_36801__$1);
var G__36814 = null;
var G__36815 = (0);
var G__36816 = (0);
seq__36746_36786 = G__36813;
chunk__36747_36787 = G__36814;
count__36748_36788 = G__36815;
i__36749_36789 = G__36816;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36760 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36761 = null;
var count__36762 = (0);
var i__36763 = (0);
while(true){
if((i__36763 < count__36762)){
var role = cljs.core._nth.call(null,chunk__36761,i__36763);
var temp__4657__auto___36817__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36817__$1)){
var spec_36818 = temp__4657__auto___36817__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_36818));
} else {
}

var G__36819 = seq__36760;
var G__36820 = chunk__36761;
var G__36821 = count__36762;
var G__36822 = (i__36763 + (1));
seq__36760 = G__36819;
chunk__36761 = G__36820;
count__36762 = G__36821;
i__36763 = G__36822;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36760);
if(temp__4657__auto____$1){
var seq__36760__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36760__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__36760__$1);
var G__36823 = cljs.core.chunk_rest.call(null,seq__36760__$1);
var G__36824 = c__28123__auto__;
var G__36825 = cljs.core.count.call(null,c__28123__auto__);
var G__36826 = (0);
seq__36760 = G__36823;
chunk__36761 = G__36824;
count__36762 = G__36825;
i__36763 = G__36826;
continue;
} else {
var role = cljs.core.first.call(null,seq__36760__$1);
var temp__4657__auto___36827__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36827__$2)){
var spec_36828 = temp__4657__auto___36827__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_36828));
} else {
}

var G__36829 = cljs.core.next.call(null,seq__36760__$1);
var G__36830 = null;
var G__36831 = (0);
var G__36832 = (0);
seq__36760 = G__36829;
chunk__36761 = G__36830;
count__36762 = G__36831;
i__36763 = G__36832;
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

//# sourceMappingURL=repl.js.map?rel=1497988473442