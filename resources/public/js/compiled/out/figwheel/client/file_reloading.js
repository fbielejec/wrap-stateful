// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27304__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27304__auto__){
return or__27304__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27304__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34282_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34282_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34287 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34288 = null;
var count__34289 = (0);
var i__34290 = (0);
while(true){
if((i__34290 < count__34289)){
var n = cljs.core._nth.call(null,chunk__34288,i__34290);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34291 = seq__34287;
var G__34292 = chunk__34288;
var G__34293 = count__34289;
var G__34294 = (i__34290 + (1));
seq__34287 = G__34291;
chunk__34288 = G__34292;
count__34289 = G__34293;
i__34290 = G__34294;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34287);
if(temp__4657__auto__){
var seq__34287__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34287__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__34287__$1);
var G__34295 = cljs.core.chunk_rest.call(null,seq__34287__$1);
var G__34296 = c__28123__auto__;
var G__34297 = cljs.core.count.call(null,c__28123__auto__);
var G__34298 = (0);
seq__34287 = G__34295;
chunk__34288 = G__34296;
count__34289 = G__34297;
i__34290 = G__34298;
continue;
} else {
var n = cljs.core.first.call(null,seq__34287__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34299 = cljs.core.next.call(null,seq__34287__$1);
var G__34300 = null;
var G__34301 = (0);
var G__34302 = (0);
seq__34287 = G__34299;
chunk__34288 = G__34300;
count__34289 = G__34301;
i__34290 = G__34302;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34353_34364 = cljs.core.seq.call(null,deps);
var chunk__34354_34365 = null;
var count__34355_34366 = (0);
var i__34356_34367 = (0);
while(true){
if((i__34356_34367 < count__34355_34366)){
var dep_34368 = cljs.core._nth.call(null,chunk__34354_34365,i__34356_34367);
topo_sort_helper_STAR_.call(null,dep_34368,(depth + (1)),state);

var G__34369 = seq__34353_34364;
var G__34370 = chunk__34354_34365;
var G__34371 = count__34355_34366;
var G__34372 = (i__34356_34367 + (1));
seq__34353_34364 = G__34369;
chunk__34354_34365 = G__34370;
count__34355_34366 = G__34371;
i__34356_34367 = G__34372;
continue;
} else {
var temp__4657__auto___34373 = cljs.core.seq.call(null,seq__34353_34364);
if(temp__4657__auto___34373){
var seq__34353_34374__$1 = temp__4657__auto___34373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34353_34374__$1)){
var c__28123__auto___34375 = cljs.core.chunk_first.call(null,seq__34353_34374__$1);
var G__34376 = cljs.core.chunk_rest.call(null,seq__34353_34374__$1);
var G__34377 = c__28123__auto___34375;
var G__34378 = cljs.core.count.call(null,c__28123__auto___34375);
var G__34379 = (0);
seq__34353_34364 = G__34376;
chunk__34354_34365 = G__34377;
count__34355_34366 = G__34378;
i__34356_34367 = G__34379;
continue;
} else {
var dep_34380 = cljs.core.first.call(null,seq__34353_34374__$1);
topo_sort_helper_STAR_.call(null,dep_34380,(depth + (1)),state);

var G__34381 = cljs.core.next.call(null,seq__34353_34374__$1);
var G__34382 = null;
var G__34383 = (0);
var G__34384 = (0);
seq__34353_34364 = G__34381;
chunk__34354_34365 = G__34382;
count__34355_34366 = G__34383;
i__34356_34367 = G__34384;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34357){
var vec__34361 = p__34357;
var seq__34362 = cljs.core.seq.call(null,vec__34361);
var first__34363 = cljs.core.first.call(null,seq__34362);
var seq__34362__$1 = cljs.core.next.call(null,seq__34362);
var x = first__34363;
var xs = seq__34362__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34361,seq__34362,first__34363,seq__34362__$1,x,xs,get_deps__$1){
return (function (p1__34303_SHARP_){
return clojure.set.difference.call(null,p1__34303_SHARP_,x);
});})(vec__34361,seq__34362,first__34363,seq__34362__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34397 = cljs.core.seq.call(null,provides);
var chunk__34398 = null;
var count__34399 = (0);
var i__34400 = (0);
while(true){
if((i__34400 < count__34399)){
var prov = cljs.core._nth.call(null,chunk__34398,i__34400);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34401_34409 = cljs.core.seq.call(null,requires);
var chunk__34402_34410 = null;
var count__34403_34411 = (0);
var i__34404_34412 = (0);
while(true){
if((i__34404_34412 < count__34403_34411)){
var req_34413 = cljs.core._nth.call(null,chunk__34402_34410,i__34404_34412);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34413,prov);

var G__34414 = seq__34401_34409;
var G__34415 = chunk__34402_34410;
var G__34416 = count__34403_34411;
var G__34417 = (i__34404_34412 + (1));
seq__34401_34409 = G__34414;
chunk__34402_34410 = G__34415;
count__34403_34411 = G__34416;
i__34404_34412 = G__34417;
continue;
} else {
var temp__4657__auto___34418 = cljs.core.seq.call(null,seq__34401_34409);
if(temp__4657__auto___34418){
var seq__34401_34419__$1 = temp__4657__auto___34418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34401_34419__$1)){
var c__28123__auto___34420 = cljs.core.chunk_first.call(null,seq__34401_34419__$1);
var G__34421 = cljs.core.chunk_rest.call(null,seq__34401_34419__$1);
var G__34422 = c__28123__auto___34420;
var G__34423 = cljs.core.count.call(null,c__28123__auto___34420);
var G__34424 = (0);
seq__34401_34409 = G__34421;
chunk__34402_34410 = G__34422;
count__34403_34411 = G__34423;
i__34404_34412 = G__34424;
continue;
} else {
var req_34425 = cljs.core.first.call(null,seq__34401_34419__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34425,prov);

var G__34426 = cljs.core.next.call(null,seq__34401_34419__$1);
var G__34427 = null;
var G__34428 = (0);
var G__34429 = (0);
seq__34401_34409 = G__34426;
chunk__34402_34410 = G__34427;
count__34403_34411 = G__34428;
i__34404_34412 = G__34429;
continue;
}
} else {
}
}
break;
}

var G__34430 = seq__34397;
var G__34431 = chunk__34398;
var G__34432 = count__34399;
var G__34433 = (i__34400 + (1));
seq__34397 = G__34430;
chunk__34398 = G__34431;
count__34399 = G__34432;
i__34400 = G__34433;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34397);
if(temp__4657__auto__){
var seq__34397__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34397__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__34397__$1);
var G__34434 = cljs.core.chunk_rest.call(null,seq__34397__$1);
var G__34435 = c__28123__auto__;
var G__34436 = cljs.core.count.call(null,c__28123__auto__);
var G__34437 = (0);
seq__34397 = G__34434;
chunk__34398 = G__34435;
count__34399 = G__34436;
i__34400 = G__34437;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34397__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34405_34438 = cljs.core.seq.call(null,requires);
var chunk__34406_34439 = null;
var count__34407_34440 = (0);
var i__34408_34441 = (0);
while(true){
if((i__34408_34441 < count__34407_34440)){
var req_34442 = cljs.core._nth.call(null,chunk__34406_34439,i__34408_34441);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34442,prov);

var G__34443 = seq__34405_34438;
var G__34444 = chunk__34406_34439;
var G__34445 = count__34407_34440;
var G__34446 = (i__34408_34441 + (1));
seq__34405_34438 = G__34443;
chunk__34406_34439 = G__34444;
count__34407_34440 = G__34445;
i__34408_34441 = G__34446;
continue;
} else {
var temp__4657__auto___34447__$1 = cljs.core.seq.call(null,seq__34405_34438);
if(temp__4657__auto___34447__$1){
var seq__34405_34448__$1 = temp__4657__auto___34447__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34405_34448__$1)){
var c__28123__auto___34449 = cljs.core.chunk_first.call(null,seq__34405_34448__$1);
var G__34450 = cljs.core.chunk_rest.call(null,seq__34405_34448__$1);
var G__34451 = c__28123__auto___34449;
var G__34452 = cljs.core.count.call(null,c__28123__auto___34449);
var G__34453 = (0);
seq__34405_34438 = G__34450;
chunk__34406_34439 = G__34451;
count__34407_34440 = G__34452;
i__34408_34441 = G__34453;
continue;
} else {
var req_34454 = cljs.core.first.call(null,seq__34405_34448__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34454,prov);

var G__34455 = cljs.core.next.call(null,seq__34405_34448__$1);
var G__34456 = null;
var G__34457 = (0);
var G__34458 = (0);
seq__34405_34438 = G__34455;
chunk__34406_34439 = G__34456;
count__34407_34440 = G__34457;
i__34408_34441 = G__34458;
continue;
}
} else {
}
}
break;
}

var G__34459 = cljs.core.next.call(null,seq__34397__$1);
var G__34460 = null;
var G__34461 = (0);
var G__34462 = (0);
seq__34397 = G__34459;
chunk__34398 = G__34460;
count__34399 = G__34461;
i__34400 = G__34462;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34467_34471 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34468_34472 = null;
var count__34469_34473 = (0);
var i__34470_34474 = (0);
while(true){
if((i__34470_34474 < count__34469_34473)){
var ns_34475 = cljs.core._nth.call(null,chunk__34468_34472,i__34470_34474);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34475);

var G__34476 = seq__34467_34471;
var G__34477 = chunk__34468_34472;
var G__34478 = count__34469_34473;
var G__34479 = (i__34470_34474 + (1));
seq__34467_34471 = G__34476;
chunk__34468_34472 = G__34477;
count__34469_34473 = G__34478;
i__34470_34474 = G__34479;
continue;
} else {
var temp__4657__auto___34480 = cljs.core.seq.call(null,seq__34467_34471);
if(temp__4657__auto___34480){
var seq__34467_34481__$1 = temp__4657__auto___34480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34467_34481__$1)){
var c__28123__auto___34482 = cljs.core.chunk_first.call(null,seq__34467_34481__$1);
var G__34483 = cljs.core.chunk_rest.call(null,seq__34467_34481__$1);
var G__34484 = c__28123__auto___34482;
var G__34485 = cljs.core.count.call(null,c__28123__auto___34482);
var G__34486 = (0);
seq__34467_34471 = G__34483;
chunk__34468_34472 = G__34484;
count__34469_34473 = G__34485;
i__34470_34474 = G__34486;
continue;
} else {
var ns_34487 = cljs.core.first.call(null,seq__34467_34481__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34487);

var G__34488 = cljs.core.next.call(null,seq__34467_34481__$1);
var G__34489 = null;
var G__34490 = (0);
var G__34491 = (0);
seq__34467_34471 = G__34488;
chunk__34468_34472 = G__34489;
count__34469_34473 = G__34490;
i__34470_34474 = G__34491;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27304__auto__ = goog.require__;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34492__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34493__i = 0, G__34493__a = new Array(arguments.length -  0);
while (G__34493__i < G__34493__a.length) {G__34493__a[G__34493__i] = arguments[G__34493__i + 0]; ++G__34493__i;}
  args = new cljs.core.IndexedSeq(G__34493__a,0,null);
} 
return G__34492__delegate.call(this,args);};
G__34492.cljs$lang$maxFixedArity = 0;
G__34492.cljs$lang$applyTo = (function (arglist__34494){
var args = cljs.core.seq(arglist__34494);
return G__34492__delegate(args);
});
G__34492.cljs$core$IFn$_invoke$arity$variadic = G__34492__delegate;
return G__34492;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34495 = cljs.core._EQ_;
var expr__34496 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34495.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34496))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34495,expr__34496){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34495,expr__34496))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34495,expr__34496){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34498){if((e34498 instanceof Error)){
var e = e34498;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34498;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34495,expr__34496))
} else {
if(cljs.core.truth_(pred__34495.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34496))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34495.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34496))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34495.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34496))){
return ((function (pred__34495,expr__34496){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34499){if((e34499 instanceof Error)){
var e = e34499;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34499;

}
}})());
});
;})(pred__34495,expr__34496))
} else {
return ((function (pred__34495,expr__34496){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34495,expr__34496))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34500,callback){
var map__34503 = p__34500;
var map__34503__$1 = ((((!((map__34503 == null)))?((((map__34503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34503):map__34503);
var file_msg = map__34503__$1;
var request_url = cljs.core.get.call(null,map__34503__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34503,map__34503__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34503,map__34503__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto__){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto__){
return (function (state_34527){
var state_val_34528 = (state_34527[(1)]);
if((state_val_34528 === (7))){
var inst_34523 = (state_34527[(2)]);
var state_34527__$1 = state_34527;
var statearr_34529_34549 = state_34527__$1;
(statearr_34529_34549[(2)] = inst_34523);

(statearr_34529_34549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (1))){
var state_34527__$1 = state_34527;
var statearr_34530_34550 = state_34527__$1;
(statearr_34530_34550[(2)] = null);

(statearr_34530_34550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (4))){
var inst_34507 = (state_34527[(7)]);
var inst_34507__$1 = (state_34527[(2)]);
var state_34527__$1 = (function (){var statearr_34531 = state_34527;
(statearr_34531[(7)] = inst_34507__$1);

return statearr_34531;
})();
if(cljs.core.truth_(inst_34507__$1)){
var statearr_34532_34551 = state_34527__$1;
(statearr_34532_34551[(1)] = (5));

} else {
var statearr_34533_34552 = state_34527__$1;
(statearr_34533_34552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (6))){
var state_34527__$1 = state_34527;
var statearr_34534_34553 = state_34527__$1;
(statearr_34534_34553[(2)] = null);

(statearr_34534_34553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (3))){
var inst_34525 = (state_34527[(2)]);
var state_34527__$1 = state_34527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34527__$1,inst_34525);
} else {
if((state_val_34528 === (2))){
var state_34527__$1 = state_34527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34527__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34528 === (11))){
var inst_34519 = (state_34527[(2)]);
var state_34527__$1 = (function (){var statearr_34535 = state_34527;
(statearr_34535[(8)] = inst_34519);

return statearr_34535;
})();
var statearr_34536_34554 = state_34527__$1;
(statearr_34536_34554[(2)] = null);

(statearr_34536_34554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (9))){
var inst_34513 = (state_34527[(9)]);
var inst_34511 = (state_34527[(10)]);
var inst_34515 = inst_34513.call(null,inst_34511);
var state_34527__$1 = state_34527;
var statearr_34537_34555 = state_34527__$1;
(statearr_34537_34555[(2)] = inst_34515);

(statearr_34537_34555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (5))){
var inst_34507 = (state_34527[(7)]);
var inst_34509 = figwheel.client.file_reloading.blocking_load.call(null,inst_34507);
var state_34527__$1 = state_34527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34527__$1,(8),inst_34509);
} else {
if((state_val_34528 === (10))){
var inst_34511 = (state_34527[(10)]);
var inst_34517 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34511);
var state_34527__$1 = state_34527;
var statearr_34538_34556 = state_34527__$1;
(statearr_34538_34556[(2)] = inst_34517);

(statearr_34538_34556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34528 === (8))){
var inst_34507 = (state_34527[(7)]);
var inst_34513 = (state_34527[(9)]);
var inst_34511 = (state_34527[(2)]);
var inst_34512 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34513__$1 = cljs.core.get.call(null,inst_34512,inst_34507);
var state_34527__$1 = (function (){var statearr_34539 = state_34527;
(statearr_34539[(9)] = inst_34513__$1);

(statearr_34539[(10)] = inst_34511);

return statearr_34539;
})();
if(cljs.core.truth_(inst_34513__$1)){
var statearr_34540_34557 = state_34527__$1;
(statearr_34540_34557[(1)] = (9));

} else {
var statearr_34541_34558 = state_34527__$1;
(statearr_34541_34558[(1)] = (10));

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
});})(c__29515__auto__))
;
return ((function (switch__29403__auto__,c__29515__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29404__auto__ = null;
var figwheel$client$file_reloading$state_machine__29404__auto____0 = (function (){
var statearr_34545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34545[(0)] = figwheel$client$file_reloading$state_machine__29404__auto__);

(statearr_34545[(1)] = (1));

return statearr_34545;
});
var figwheel$client$file_reloading$state_machine__29404__auto____1 = (function (state_34527){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_34527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e34546){if((e34546 instanceof Object)){
var ex__29407__auto__ = e34546;
var statearr_34547_34559 = state_34527;
(statearr_34547_34559[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34560 = state_34527;
state_34527 = G__34560;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29404__auto__ = function(state_34527){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29404__auto____1.call(this,state_34527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29404__auto____0;
figwheel$client$file_reloading$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29404__auto____1;
return figwheel$client$file_reloading$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto__))
})();
var state__29517__auto__ = (function (){var statearr_34548 = f__29516__auto__.call(null);
(statearr_34548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto__);

return statearr_34548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto__))
);

return c__29515__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34561,callback){
var map__34564 = p__34561;
var map__34564__$1 = ((((!((map__34564 == null)))?((((map__34564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34564):map__34564);
var file_msg = map__34564__$1;
var namespace = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34564,map__34564__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34564,map__34564__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34566){
var map__34569 = p__34566;
var map__34569__$1 = ((((!((map__34569 == null)))?((((map__34569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34569):map__34569);
var file_msg = map__34569__$1;
var namespace = cljs.core.get.call(null,map__34569__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34571){
var map__34574 = p__34571;
var map__34574__$1 = ((((!((map__34574 == null)))?((((map__34574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34574):map__34574);
var file_msg = map__34574__$1;
var namespace = cljs.core.get.call(null,map__34574__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27292__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27292__auto__){
var or__27304__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
var or__27304__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27304__auto____$1)){
return or__27304__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27292__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34576,callback){
var map__34579 = p__34576;
var map__34579__$1 = ((((!((map__34579 == null)))?((((map__34579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34579):map__34579);
var file_msg = map__34579__$1;
var request_url = cljs.core.get.call(null,map__34579__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34579__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29515__auto___34683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___34683,out){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___34683,out){
return (function (state_34665){
var state_val_34666 = (state_34665[(1)]);
if((state_val_34666 === (1))){
var inst_34639 = cljs.core.seq.call(null,files);
var inst_34640 = cljs.core.first.call(null,inst_34639);
var inst_34641 = cljs.core.next.call(null,inst_34639);
var inst_34642 = files;
var state_34665__$1 = (function (){var statearr_34667 = state_34665;
(statearr_34667[(7)] = inst_34642);

(statearr_34667[(8)] = inst_34641);

(statearr_34667[(9)] = inst_34640);

return statearr_34667;
})();
var statearr_34668_34684 = state_34665__$1;
(statearr_34668_34684[(2)] = null);

(statearr_34668_34684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (2))){
var inst_34642 = (state_34665[(7)]);
var inst_34648 = (state_34665[(10)]);
var inst_34647 = cljs.core.seq.call(null,inst_34642);
var inst_34648__$1 = cljs.core.first.call(null,inst_34647);
var inst_34649 = cljs.core.next.call(null,inst_34647);
var inst_34650 = (inst_34648__$1 == null);
var inst_34651 = cljs.core.not.call(null,inst_34650);
var state_34665__$1 = (function (){var statearr_34669 = state_34665;
(statearr_34669[(10)] = inst_34648__$1);

(statearr_34669[(11)] = inst_34649);

return statearr_34669;
})();
if(inst_34651){
var statearr_34670_34685 = state_34665__$1;
(statearr_34670_34685[(1)] = (4));

} else {
var statearr_34671_34686 = state_34665__$1;
(statearr_34671_34686[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (3))){
var inst_34663 = (state_34665[(2)]);
var state_34665__$1 = state_34665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34665__$1,inst_34663);
} else {
if((state_val_34666 === (4))){
var inst_34648 = (state_34665[(10)]);
var inst_34653 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34648);
var state_34665__$1 = state_34665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34665__$1,(7),inst_34653);
} else {
if((state_val_34666 === (5))){
var inst_34659 = cljs.core.async.close_BANG_.call(null,out);
var state_34665__$1 = state_34665;
var statearr_34672_34687 = state_34665__$1;
(statearr_34672_34687[(2)] = inst_34659);

(statearr_34672_34687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (6))){
var inst_34661 = (state_34665[(2)]);
var state_34665__$1 = state_34665;
var statearr_34673_34688 = state_34665__$1;
(statearr_34673_34688[(2)] = inst_34661);

(statearr_34673_34688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (7))){
var inst_34649 = (state_34665[(11)]);
var inst_34655 = (state_34665[(2)]);
var inst_34656 = cljs.core.async.put_BANG_.call(null,out,inst_34655);
var inst_34642 = inst_34649;
var state_34665__$1 = (function (){var statearr_34674 = state_34665;
(statearr_34674[(7)] = inst_34642);

(statearr_34674[(12)] = inst_34656);

return statearr_34674;
})();
var statearr_34675_34689 = state_34665__$1;
(statearr_34675_34689[(2)] = null);

(statearr_34675_34689[(1)] = (2));


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
});})(c__29515__auto___34683,out))
;
return ((function (switch__29403__auto__,c__29515__auto___34683,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____0 = (function (){
var statearr_34679 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34679[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__);

(statearr_34679[(1)] = (1));

return statearr_34679;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____1 = (function (state_34665){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_34665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e34680){if((e34680 instanceof Object)){
var ex__29407__auto__ = e34680;
var statearr_34681_34690 = state_34665;
(statearr_34681_34690[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34691 = state_34665;
state_34665 = G__34691;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__ = function(state_34665){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____1.call(this,state_34665);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___34683,out))
})();
var state__29517__auto__ = (function (){var statearr_34682 = f__29516__auto__.call(null);
(statearr_34682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___34683);

return statearr_34682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___34683,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34692,opts){
var map__34696 = p__34692;
var map__34696__$1 = ((((!((map__34696 == null)))?((((map__34696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34696):map__34696);
var eval_body = cljs.core.get.call(null,map__34696__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34696__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27292__auto__ = eval_body;
if(cljs.core.truth_(and__27292__auto__)){
return typeof eval_body === 'string';
} else {
return and__27292__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34698){var e = e34698;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34699_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34699_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34708){
var vec__34709 = p__34708;
var k = cljs.core.nth.call(null,vec__34709,(0),null);
var v = cljs.core.nth.call(null,vec__34709,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34712){
var vec__34713 = p__34712;
var k = cljs.core.nth.call(null,vec__34713,(0),null);
var v = cljs.core.nth.call(null,vec__34713,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34719,p__34720){
var map__34968 = p__34719;
var map__34968__$1 = ((((!((map__34968 == null)))?((((map__34968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34968):map__34968);
var opts = map__34968__$1;
var before_jsload = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34969 = p__34720;
var map__34969__$1 = ((((!((map__34969 == null)))?((((map__34969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34969):map__34969);
var msg = map__34969__$1;
var files = cljs.core.get.call(null,map__34969__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34969__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34969__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35123){
var state_val_35124 = (state_35123[(1)]);
if((state_val_35124 === (7))){
var inst_34983 = (state_35123[(7)]);
var inst_34985 = (state_35123[(8)]);
var inst_34986 = (state_35123[(9)]);
var inst_34984 = (state_35123[(10)]);
var inst_34991 = cljs.core._nth.call(null,inst_34984,inst_34986);
var inst_34992 = figwheel.client.file_reloading.eval_body.call(null,inst_34991,opts);
var inst_34993 = (inst_34986 + (1));
var tmp35125 = inst_34983;
var tmp35126 = inst_34985;
var tmp35127 = inst_34984;
var inst_34983__$1 = tmp35125;
var inst_34984__$1 = tmp35127;
var inst_34985__$1 = tmp35126;
var inst_34986__$1 = inst_34993;
var state_35123__$1 = (function (){var statearr_35128 = state_35123;
(statearr_35128[(7)] = inst_34983__$1);

(statearr_35128[(8)] = inst_34985__$1);

(statearr_35128[(9)] = inst_34986__$1);

(statearr_35128[(11)] = inst_34992);

(statearr_35128[(10)] = inst_34984__$1);

return statearr_35128;
})();
var statearr_35129_35215 = state_35123__$1;
(statearr_35129_35215[(2)] = null);

(statearr_35129_35215[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (20))){
var inst_35026 = (state_35123[(12)]);
var inst_35034 = figwheel.client.file_reloading.sort_files.call(null,inst_35026);
var state_35123__$1 = state_35123;
var statearr_35130_35216 = state_35123__$1;
(statearr_35130_35216[(2)] = inst_35034);

(statearr_35130_35216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (27))){
var state_35123__$1 = state_35123;
var statearr_35131_35217 = state_35123__$1;
(statearr_35131_35217[(2)] = null);

(statearr_35131_35217[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (1))){
var inst_34975 = (state_35123[(13)]);
var inst_34972 = before_jsload.call(null,files);
var inst_34973 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34974 = (function (){return ((function (inst_34975,inst_34972,inst_34973,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34716_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34716_SHARP_);
});
;})(inst_34975,inst_34972,inst_34973,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34975__$1 = cljs.core.filter.call(null,inst_34974,files);
var inst_34976 = cljs.core.not_empty.call(null,inst_34975__$1);
var state_35123__$1 = (function (){var statearr_35132 = state_35123;
(statearr_35132[(14)] = inst_34972);

(statearr_35132[(13)] = inst_34975__$1);

(statearr_35132[(15)] = inst_34973);

return statearr_35132;
})();
if(cljs.core.truth_(inst_34976)){
var statearr_35133_35218 = state_35123__$1;
(statearr_35133_35218[(1)] = (2));

} else {
var statearr_35134_35219 = state_35123__$1;
(statearr_35134_35219[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (24))){
var state_35123__$1 = state_35123;
var statearr_35135_35220 = state_35123__$1;
(statearr_35135_35220[(2)] = null);

(statearr_35135_35220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (39))){
var inst_35076 = (state_35123[(16)]);
var state_35123__$1 = state_35123;
var statearr_35136_35221 = state_35123__$1;
(statearr_35136_35221[(2)] = inst_35076);

(statearr_35136_35221[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (46))){
var inst_35118 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35137_35222 = state_35123__$1;
(statearr_35137_35222[(2)] = inst_35118);

(statearr_35137_35222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (4))){
var inst_35020 = (state_35123[(2)]);
var inst_35021 = cljs.core.List.EMPTY;
var inst_35022 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35021);
var inst_35023 = (function (){return ((function (inst_35020,inst_35021,inst_35022,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34717_SHARP_){
var and__27292__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34717_SHARP_);
if(cljs.core.truth_(and__27292__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34717_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34717_SHARP_)));
} else {
return and__27292__auto__;
}
});
;})(inst_35020,inst_35021,inst_35022,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35024 = cljs.core.filter.call(null,inst_35023,files);
var inst_35025 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35026 = cljs.core.concat.call(null,inst_35024,inst_35025);
var state_35123__$1 = (function (){var statearr_35138 = state_35123;
(statearr_35138[(12)] = inst_35026);

(statearr_35138[(17)] = inst_35020);

(statearr_35138[(18)] = inst_35022);

return statearr_35138;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35139_35223 = state_35123__$1;
(statearr_35139_35223[(1)] = (16));

} else {
var statearr_35140_35224 = state_35123__$1;
(statearr_35140_35224[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (15))){
var inst_35010 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35141_35225 = state_35123__$1;
(statearr_35141_35225[(2)] = inst_35010);

(statearr_35141_35225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (21))){
var inst_35036 = (state_35123[(19)]);
var inst_35036__$1 = (state_35123[(2)]);
var inst_35037 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35036__$1);
var state_35123__$1 = (function (){var statearr_35142 = state_35123;
(statearr_35142[(19)] = inst_35036__$1);

return statearr_35142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35123__$1,(22),inst_35037);
} else {
if((state_val_35124 === (31))){
var inst_35121 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35123__$1,inst_35121);
} else {
if((state_val_35124 === (32))){
var inst_35076 = (state_35123[(16)]);
var inst_35081 = inst_35076.cljs$lang$protocol_mask$partition0$;
var inst_35082 = (inst_35081 & (64));
var inst_35083 = inst_35076.cljs$core$ISeq$;
var inst_35084 = (cljs.core.PROTOCOL_SENTINEL === inst_35083);
var inst_35085 = (inst_35082) || (inst_35084);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35085)){
var statearr_35143_35226 = state_35123__$1;
(statearr_35143_35226[(1)] = (35));

} else {
var statearr_35144_35227 = state_35123__$1;
(statearr_35144_35227[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (40))){
var inst_35098 = (state_35123[(20)]);
var inst_35097 = (state_35123[(2)]);
var inst_35098__$1 = cljs.core.get.call(null,inst_35097,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35099 = cljs.core.get.call(null,inst_35097,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35100 = cljs.core.not_empty.call(null,inst_35098__$1);
var state_35123__$1 = (function (){var statearr_35145 = state_35123;
(statearr_35145[(20)] = inst_35098__$1);

(statearr_35145[(21)] = inst_35099);

return statearr_35145;
})();
if(cljs.core.truth_(inst_35100)){
var statearr_35146_35228 = state_35123__$1;
(statearr_35146_35228[(1)] = (41));

} else {
var statearr_35147_35229 = state_35123__$1;
(statearr_35147_35229[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (33))){
var state_35123__$1 = state_35123;
var statearr_35148_35230 = state_35123__$1;
(statearr_35148_35230[(2)] = false);

(statearr_35148_35230[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (13))){
var inst_34996 = (state_35123[(22)]);
var inst_35000 = cljs.core.chunk_first.call(null,inst_34996);
var inst_35001 = cljs.core.chunk_rest.call(null,inst_34996);
var inst_35002 = cljs.core.count.call(null,inst_35000);
var inst_34983 = inst_35001;
var inst_34984 = inst_35000;
var inst_34985 = inst_35002;
var inst_34986 = (0);
var state_35123__$1 = (function (){var statearr_35149 = state_35123;
(statearr_35149[(7)] = inst_34983);

(statearr_35149[(8)] = inst_34985);

(statearr_35149[(9)] = inst_34986);

(statearr_35149[(10)] = inst_34984);

return statearr_35149;
})();
var statearr_35150_35231 = state_35123__$1;
(statearr_35150_35231[(2)] = null);

(statearr_35150_35231[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (22))){
var inst_35039 = (state_35123[(23)]);
var inst_35044 = (state_35123[(24)]);
var inst_35040 = (state_35123[(25)]);
var inst_35036 = (state_35123[(19)]);
var inst_35039__$1 = (state_35123[(2)]);
var inst_35040__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35039__$1);
var inst_35041 = (function (){var all_files = inst_35036;
var res_SINGLEQUOTE_ = inst_35039__$1;
var res = inst_35040__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35039,inst_35044,inst_35040,inst_35036,inst_35039__$1,inst_35040__$1,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34718_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34718_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35039,inst_35044,inst_35040,inst_35036,inst_35039__$1,inst_35040__$1,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35042 = cljs.core.filter.call(null,inst_35041,inst_35039__$1);
var inst_35043 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35044__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35043);
var inst_35045 = cljs.core.not_empty.call(null,inst_35044__$1);
var state_35123__$1 = (function (){var statearr_35151 = state_35123;
(statearr_35151[(23)] = inst_35039__$1);

(statearr_35151[(24)] = inst_35044__$1);

(statearr_35151[(25)] = inst_35040__$1);

(statearr_35151[(26)] = inst_35042);

return statearr_35151;
})();
if(cljs.core.truth_(inst_35045)){
var statearr_35152_35232 = state_35123__$1;
(statearr_35152_35232[(1)] = (23));

} else {
var statearr_35153_35233 = state_35123__$1;
(statearr_35153_35233[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (36))){
var state_35123__$1 = state_35123;
var statearr_35154_35234 = state_35123__$1;
(statearr_35154_35234[(2)] = false);

(statearr_35154_35234[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (41))){
var inst_35098 = (state_35123[(20)]);
var inst_35102 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35103 = cljs.core.map.call(null,inst_35102,inst_35098);
var inst_35104 = cljs.core.pr_str.call(null,inst_35103);
var inst_35105 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35104)].join('');
var inst_35106 = figwheel.client.utils.log.call(null,inst_35105);
var state_35123__$1 = state_35123;
var statearr_35155_35235 = state_35123__$1;
(statearr_35155_35235[(2)] = inst_35106);

(statearr_35155_35235[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (43))){
var inst_35099 = (state_35123[(21)]);
var inst_35109 = (state_35123[(2)]);
var inst_35110 = cljs.core.not_empty.call(null,inst_35099);
var state_35123__$1 = (function (){var statearr_35156 = state_35123;
(statearr_35156[(27)] = inst_35109);

return statearr_35156;
})();
if(cljs.core.truth_(inst_35110)){
var statearr_35157_35236 = state_35123__$1;
(statearr_35157_35236[(1)] = (44));

} else {
var statearr_35158_35237 = state_35123__$1;
(statearr_35158_35237[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (29))){
var inst_35039 = (state_35123[(23)]);
var inst_35076 = (state_35123[(16)]);
var inst_35044 = (state_35123[(24)]);
var inst_35040 = (state_35123[(25)]);
var inst_35042 = (state_35123[(26)]);
var inst_35036 = (state_35123[(19)]);
var inst_35072 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35075 = (function (){var all_files = inst_35036;
var res_SINGLEQUOTE_ = inst_35039;
var res = inst_35040;
var files_not_loaded = inst_35042;
var dependencies_that_loaded = inst_35044;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35039,inst_35076,inst_35044,inst_35040,inst_35042,inst_35036,inst_35072,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35074){
var map__35159 = p__35074;
var map__35159__$1 = ((((!((map__35159 == null)))?((((map__35159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35159):map__35159);
var namespace = cljs.core.get.call(null,map__35159__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35039,inst_35076,inst_35044,inst_35040,inst_35042,inst_35036,inst_35072,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35076__$1 = cljs.core.group_by.call(null,inst_35075,inst_35042);
var inst_35078 = (inst_35076__$1 == null);
var inst_35079 = cljs.core.not.call(null,inst_35078);
var state_35123__$1 = (function (){var statearr_35161 = state_35123;
(statearr_35161[(16)] = inst_35076__$1);

(statearr_35161[(28)] = inst_35072);

return statearr_35161;
})();
if(inst_35079){
var statearr_35162_35238 = state_35123__$1;
(statearr_35162_35238[(1)] = (32));

} else {
var statearr_35163_35239 = state_35123__$1;
(statearr_35163_35239[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (44))){
var inst_35099 = (state_35123[(21)]);
var inst_35112 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35099);
var inst_35113 = cljs.core.pr_str.call(null,inst_35112);
var inst_35114 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35113)].join('');
var inst_35115 = figwheel.client.utils.log.call(null,inst_35114);
var state_35123__$1 = state_35123;
var statearr_35164_35240 = state_35123__$1;
(statearr_35164_35240[(2)] = inst_35115);

(statearr_35164_35240[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (6))){
var inst_35017 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35165_35241 = state_35123__$1;
(statearr_35165_35241[(2)] = inst_35017);

(statearr_35165_35241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (28))){
var inst_35042 = (state_35123[(26)]);
var inst_35069 = (state_35123[(2)]);
var inst_35070 = cljs.core.not_empty.call(null,inst_35042);
var state_35123__$1 = (function (){var statearr_35166 = state_35123;
(statearr_35166[(29)] = inst_35069);

return statearr_35166;
})();
if(cljs.core.truth_(inst_35070)){
var statearr_35167_35242 = state_35123__$1;
(statearr_35167_35242[(1)] = (29));

} else {
var statearr_35168_35243 = state_35123__$1;
(statearr_35168_35243[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (25))){
var inst_35040 = (state_35123[(25)]);
var inst_35056 = (state_35123[(2)]);
var inst_35057 = cljs.core.not_empty.call(null,inst_35040);
var state_35123__$1 = (function (){var statearr_35169 = state_35123;
(statearr_35169[(30)] = inst_35056);

return statearr_35169;
})();
if(cljs.core.truth_(inst_35057)){
var statearr_35170_35244 = state_35123__$1;
(statearr_35170_35244[(1)] = (26));

} else {
var statearr_35171_35245 = state_35123__$1;
(statearr_35171_35245[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (34))){
var inst_35092 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35092)){
var statearr_35172_35246 = state_35123__$1;
(statearr_35172_35246[(1)] = (38));

} else {
var statearr_35173_35247 = state_35123__$1;
(statearr_35173_35247[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (17))){
var state_35123__$1 = state_35123;
var statearr_35174_35248 = state_35123__$1;
(statearr_35174_35248[(2)] = recompile_dependents);

(statearr_35174_35248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (3))){
var state_35123__$1 = state_35123;
var statearr_35175_35249 = state_35123__$1;
(statearr_35175_35249[(2)] = null);

(statearr_35175_35249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (12))){
var inst_35013 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35176_35250 = state_35123__$1;
(statearr_35176_35250[(2)] = inst_35013);

(statearr_35176_35250[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (2))){
var inst_34975 = (state_35123[(13)]);
var inst_34982 = cljs.core.seq.call(null,inst_34975);
var inst_34983 = inst_34982;
var inst_34984 = null;
var inst_34985 = (0);
var inst_34986 = (0);
var state_35123__$1 = (function (){var statearr_35177 = state_35123;
(statearr_35177[(7)] = inst_34983);

(statearr_35177[(8)] = inst_34985);

(statearr_35177[(9)] = inst_34986);

(statearr_35177[(10)] = inst_34984);

return statearr_35177;
})();
var statearr_35178_35251 = state_35123__$1;
(statearr_35178_35251[(2)] = null);

(statearr_35178_35251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (23))){
var inst_35039 = (state_35123[(23)]);
var inst_35044 = (state_35123[(24)]);
var inst_35040 = (state_35123[(25)]);
var inst_35042 = (state_35123[(26)]);
var inst_35036 = (state_35123[(19)]);
var inst_35047 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35049 = (function (){var all_files = inst_35036;
var res_SINGLEQUOTE_ = inst_35039;
var res = inst_35040;
var files_not_loaded = inst_35042;
var dependencies_that_loaded = inst_35044;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35039,inst_35044,inst_35040,inst_35042,inst_35036,inst_35047,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35048){
var map__35179 = p__35048;
var map__35179__$1 = ((((!((map__35179 == null)))?((((map__35179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35179):map__35179);
var request_url = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35039,inst_35044,inst_35040,inst_35042,inst_35036,inst_35047,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35050 = cljs.core.reverse.call(null,inst_35044);
var inst_35051 = cljs.core.map.call(null,inst_35049,inst_35050);
var inst_35052 = cljs.core.pr_str.call(null,inst_35051);
var inst_35053 = figwheel.client.utils.log.call(null,inst_35052);
var state_35123__$1 = (function (){var statearr_35181 = state_35123;
(statearr_35181[(31)] = inst_35047);

return statearr_35181;
})();
var statearr_35182_35252 = state_35123__$1;
(statearr_35182_35252[(2)] = inst_35053);

(statearr_35182_35252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (35))){
var state_35123__$1 = state_35123;
var statearr_35183_35253 = state_35123__$1;
(statearr_35183_35253[(2)] = true);

(statearr_35183_35253[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (19))){
var inst_35026 = (state_35123[(12)]);
var inst_35032 = figwheel.client.file_reloading.expand_files.call(null,inst_35026);
var state_35123__$1 = state_35123;
var statearr_35184_35254 = state_35123__$1;
(statearr_35184_35254[(2)] = inst_35032);

(statearr_35184_35254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (11))){
var state_35123__$1 = state_35123;
var statearr_35185_35255 = state_35123__$1;
(statearr_35185_35255[(2)] = null);

(statearr_35185_35255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (9))){
var inst_35015 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35186_35256 = state_35123__$1;
(statearr_35186_35256[(2)] = inst_35015);

(statearr_35186_35256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (5))){
var inst_34985 = (state_35123[(8)]);
var inst_34986 = (state_35123[(9)]);
var inst_34988 = (inst_34986 < inst_34985);
var inst_34989 = inst_34988;
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_34989)){
var statearr_35187_35257 = state_35123__$1;
(statearr_35187_35257[(1)] = (7));

} else {
var statearr_35188_35258 = state_35123__$1;
(statearr_35188_35258[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (14))){
var inst_34996 = (state_35123[(22)]);
var inst_35005 = cljs.core.first.call(null,inst_34996);
var inst_35006 = figwheel.client.file_reloading.eval_body.call(null,inst_35005,opts);
var inst_35007 = cljs.core.next.call(null,inst_34996);
var inst_34983 = inst_35007;
var inst_34984 = null;
var inst_34985 = (0);
var inst_34986 = (0);
var state_35123__$1 = (function (){var statearr_35189 = state_35123;
(statearr_35189[(7)] = inst_34983);

(statearr_35189[(8)] = inst_34985);

(statearr_35189[(9)] = inst_34986);

(statearr_35189[(32)] = inst_35006);

(statearr_35189[(10)] = inst_34984);

return statearr_35189;
})();
var statearr_35190_35259 = state_35123__$1;
(statearr_35190_35259[(2)] = null);

(statearr_35190_35259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (45))){
var state_35123__$1 = state_35123;
var statearr_35191_35260 = state_35123__$1;
(statearr_35191_35260[(2)] = null);

(statearr_35191_35260[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (26))){
var inst_35039 = (state_35123[(23)]);
var inst_35044 = (state_35123[(24)]);
var inst_35040 = (state_35123[(25)]);
var inst_35042 = (state_35123[(26)]);
var inst_35036 = (state_35123[(19)]);
var inst_35059 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35061 = (function (){var all_files = inst_35036;
var res_SINGLEQUOTE_ = inst_35039;
var res = inst_35040;
var files_not_loaded = inst_35042;
var dependencies_that_loaded = inst_35044;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35039,inst_35044,inst_35040,inst_35042,inst_35036,inst_35059,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35060){
var map__35192 = p__35060;
var map__35192__$1 = ((((!((map__35192 == null)))?((((map__35192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35192):map__35192);
var namespace = cljs.core.get.call(null,map__35192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35192__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35039,inst_35044,inst_35040,inst_35042,inst_35036,inst_35059,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35062 = cljs.core.map.call(null,inst_35061,inst_35040);
var inst_35063 = cljs.core.pr_str.call(null,inst_35062);
var inst_35064 = figwheel.client.utils.log.call(null,inst_35063);
var inst_35065 = (function (){var all_files = inst_35036;
var res_SINGLEQUOTE_ = inst_35039;
var res = inst_35040;
var files_not_loaded = inst_35042;
var dependencies_that_loaded = inst_35044;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35039,inst_35044,inst_35040,inst_35042,inst_35036,inst_35059,inst_35061,inst_35062,inst_35063,inst_35064,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35039,inst_35044,inst_35040,inst_35042,inst_35036,inst_35059,inst_35061,inst_35062,inst_35063,inst_35064,state_val_35124,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35066 = setTimeout(inst_35065,(10));
var state_35123__$1 = (function (){var statearr_35194 = state_35123;
(statearr_35194[(33)] = inst_35064);

(statearr_35194[(34)] = inst_35059);

return statearr_35194;
})();
var statearr_35195_35261 = state_35123__$1;
(statearr_35195_35261[(2)] = inst_35066);

(statearr_35195_35261[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (16))){
var state_35123__$1 = state_35123;
var statearr_35196_35262 = state_35123__$1;
(statearr_35196_35262[(2)] = reload_dependents);

(statearr_35196_35262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (38))){
var inst_35076 = (state_35123[(16)]);
var inst_35094 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35076);
var state_35123__$1 = state_35123;
var statearr_35197_35263 = state_35123__$1;
(statearr_35197_35263[(2)] = inst_35094);

(statearr_35197_35263[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (30))){
var state_35123__$1 = state_35123;
var statearr_35198_35264 = state_35123__$1;
(statearr_35198_35264[(2)] = null);

(statearr_35198_35264[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (10))){
var inst_34996 = (state_35123[(22)]);
var inst_34998 = cljs.core.chunked_seq_QMARK_.call(null,inst_34996);
var state_35123__$1 = state_35123;
if(inst_34998){
var statearr_35199_35265 = state_35123__$1;
(statearr_35199_35265[(1)] = (13));

} else {
var statearr_35200_35266 = state_35123__$1;
(statearr_35200_35266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (18))){
var inst_35030 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
if(cljs.core.truth_(inst_35030)){
var statearr_35201_35267 = state_35123__$1;
(statearr_35201_35267[(1)] = (19));

} else {
var statearr_35202_35268 = state_35123__$1;
(statearr_35202_35268[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (42))){
var state_35123__$1 = state_35123;
var statearr_35203_35269 = state_35123__$1;
(statearr_35203_35269[(2)] = null);

(statearr_35203_35269[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (37))){
var inst_35089 = (state_35123[(2)]);
var state_35123__$1 = state_35123;
var statearr_35204_35270 = state_35123__$1;
(statearr_35204_35270[(2)] = inst_35089);

(statearr_35204_35270[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35124 === (8))){
var inst_34983 = (state_35123[(7)]);
var inst_34996 = (state_35123[(22)]);
var inst_34996__$1 = cljs.core.seq.call(null,inst_34983);
var state_35123__$1 = (function (){var statearr_35205 = state_35123;
(statearr_35205[(22)] = inst_34996__$1);

return statearr_35205;
})();
if(inst_34996__$1){
var statearr_35206_35271 = state_35123__$1;
(statearr_35206_35271[(1)] = (10));

} else {
var statearr_35207_35272 = state_35123__$1;
(statearr_35207_35272[(1)] = (11));

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
}
});})(c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29403__auto__,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____0 = (function (){
var statearr_35211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35211[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__);

(statearr_35211[(1)] = (1));

return statearr_35211;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____1 = (function (state_35123){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_35123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e35212){if((e35212 instanceof Object)){
var ex__29407__auto__ = e35212;
var statearr_35213_35273 = state_35123;
(statearr_35213_35273[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35274 = state_35123;
state_35123 = G__35274;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__ = function(state_35123){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____1.call(this,state_35123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29517__auto__ = (function (){var statearr_35214 = f__29516__auto__.call(null);
(statearr_35214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto__);

return statearr_35214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto__,map__34968,map__34968__$1,opts,before_jsload,on_jsload,reload_dependents,map__34969,map__34969__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29515__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35277,link){
var map__35280 = p__35277;
var map__35280__$1 = ((((!((map__35280 == null)))?((((map__35280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35280):map__35280);
var file = cljs.core.get.call(null,map__35280__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35280,map__35280__$1,file){
return (function (p1__35275_SHARP_,p2__35276_SHARP_){
if(cljs.core._EQ_.call(null,p1__35275_SHARP_,p2__35276_SHARP_)){
return p1__35275_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35280,map__35280__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35286){
var map__35287 = p__35286;
var map__35287__$1 = ((((!((map__35287 == null)))?((((map__35287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35287):map__35287);
var match_length = cljs.core.get.call(null,map__35287__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35287__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35282_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35282_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35289_SHARP_,p2__35290_SHARP_){
return cljs.core.assoc.call(null,p1__35289_SHARP_,cljs.core.get.call(null,p2__35290_SHARP_,key),p2__35290_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35291 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35291);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35291);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35292,p__35293){
var map__35298 = p__35292;
var map__35298__$1 = ((((!((map__35298 == null)))?((((map__35298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35298):map__35298);
var on_cssload = cljs.core.get.call(null,map__35298__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35299 = p__35293;
var map__35299__$1 = ((((!((map__35299 == null)))?((((map__35299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35299):map__35299);
var files_msg = map__35299__$1;
var files = cljs.core.get.call(null,map__35299__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1497988470525