// Compiled by ClojureScript 1.9.542 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#uuid \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__38674_38678 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__38675_38679 = null;
var count__38676_38680 = (0);
var i__38677_38681 = (0);
while(true){
if((i__38677_38681 < count__38676_38680)){
var k_38682 = cljs.core._nth.call(null,chunk__38675_38679,i__38677_38681);
var v_38683 = (b[k_38682]);
(a[k_38682] = v_38683);

var G__38684 = seq__38674_38678;
var G__38685 = chunk__38675_38679;
var G__38686 = count__38676_38680;
var G__38687 = (i__38677_38681 + (1));
seq__38674_38678 = G__38684;
chunk__38675_38679 = G__38685;
count__38676_38680 = G__38686;
i__38677_38681 = G__38687;
continue;
} else {
var temp__4657__auto___38688 = cljs.core.seq.call(null,seq__38674_38678);
if(temp__4657__auto___38688){
var seq__38674_38689__$1 = temp__4657__auto___38688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38674_38689__$1)){
var c__28123__auto___38690 = cljs.core.chunk_first.call(null,seq__38674_38689__$1);
var G__38691 = cljs.core.chunk_rest.call(null,seq__38674_38689__$1);
var G__38692 = c__28123__auto___38690;
var G__38693 = cljs.core.count.call(null,c__28123__auto___38690);
var G__38694 = (0);
seq__38674_38678 = G__38691;
chunk__38675_38679 = G__38692;
count__38676_38680 = G__38693;
i__38677_38681 = G__38694;
continue;
} else {
var k_38695 = cljs.core.first.call(null,seq__38674_38689__$1);
var v_38696 = (b[k_38695]);
(a[k_38695] = v_38696);

var G__38697 = cljs.core.next.call(null,seq__38674_38689__$1);
var G__38698 = null;
var G__38699 = (0);
var G__38700 = (0);
seq__38674_38678 = G__38697;
chunk__38675_38679 = G__38698;
count__38676_38680 = G__38699;
i__38677_38681 = G__38700;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args38701 = [];
var len__28417__auto___38704 = arguments.length;
var i__28418__auto___38705 = (0);
while(true){
if((i__28418__auto___38705 < len__28417__auto___38704)){
args38701.push((arguments[i__28418__auto___38705]));

var G__38706 = (i__28418__auto___38705 + (1));
i__28418__auto___38705 = G__38706;
continue;
} else {
}
break;
}

var G__38703 = args38701.length;
switch (G__38703) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38701.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__38708 = (i + (2));
var G__38709 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__38708;
ret = G__38709;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__38710_38714 = cljs.core.seq.call(null,v);
var chunk__38711_38715 = null;
var count__38712_38716 = (0);
var i__38713_38717 = (0);
while(true){
if((i__38713_38717 < count__38712_38716)){
var x_38718 = cljs.core._nth.call(null,chunk__38711_38715,i__38713_38717);
ret.push(x_38718);

var G__38719 = seq__38710_38714;
var G__38720 = chunk__38711_38715;
var G__38721 = count__38712_38716;
var G__38722 = (i__38713_38717 + (1));
seq__38710_38714 = G__38719;
chunk__38711_38715 = G__38720;
count__38712_38716 = G__38721;
i__38713_38717 = G__38722;
continue;
} else {
var temp__4657__auto___38723 = cljs.core.seq.call(null,seq__38710_38714);
if(temp__4657__auto___38723){
var seq__38710_38724__$1 = temp__4657__auto___38723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38710_38724__$1)){
var c__28123__auto___38725 = cljs.core.chunk_first.call(null,seq__38710_38724__$1);
var G__38726 = cljs.core.chunk_rest.call(null,seq__38710_38724__$1);
var G__38727 = c__28123__auto___38725;
var G__38728 = cljs.core.count.call(null,c__28123__auto___38725);
var G__38729 = (0);
seq__38710_38714 = G__38726;
chunk__38711_38715 = G__38727;
count__38712_38716 = G__38728;
i__38713_38717 = G__38729;
continue;
} else {
var x_38730 = cljs.core.first.call(null,seq__38710_38724__$1);
ret.push(x_38730);

var G__38731 = cljs.core.next.call(null,seq__38710_38724__$1);
var G__38732 = null;
var G__38733 = (0);
var G__38734 = (0);
seq__38710_38714 = G__38731;
chunk__38711_38715 = G__38732;
count__38712_38716 = G__38733;
i__38713_38717 = G__38734;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__38735_38739 = cljs.core.seq.call(null,v);
var chunk__38736_38740 = null;
var count__38737_38741 = (0);
var i__38738_38742 = (0);
while(true){
if((i__38738_38742 < count__38737_38741)){
var x_38743 = cljs.core._nth.call(null,chunk__38736_38740,i__38738_38742);
ret.push(x_38743);

var G__38744 = seq__38735_38739;
var G__38745 = chunk__38736_38740;
var G__38746 = count__38737_38741;
var G__38747 = (i__38738_38742 + (1));
seq__38735_38739 = G__38744;
chunk__38736_38740 = G__38745;
count__38737_38741 = G__38746;
i__38738_38742 = G__38747;
continue;
} else {
var temp__4657__auto___38748 = cljs.core.seq.call(null,seq__38735_38739);
if(temp__4657__auto___38748){
var seq__38735_38749__$1 = temp__4657__auto___38748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38735_38749__$1)){
var c__28123__auto___38750 = cljs.core.chunk_first.call(null,seq__38735_38749__$1);
var G__38751 = cljs.core.chunk_rest.call(null,seq__38735_38749__$1);
var G__38752 = c__28123__auto___38750;
var G__38753 = cljs.core.count.call(null,c__28123__auto___38750);
var G__38754 = (0);
seq__38735_38739 = G__38751;
chunk__38736_38740 = G__38752;
count__38737_38741 = G__38753;
i__38738_38742 = G__38754;
continue;
} else {
var x_38755 = cljs.core.first.call(null,seq__38735_38749__$1);
ret.push(x_38755);

var G__38756 = cljs.core.next.call(null,seq__38735_38749__$1);
var G__38757 = null;
var G__38758 = (0);
var G__38759 = (0);
seq__38735_38739 = G__38756;
chunk__38736_38740 = G__38757;
count__38737_38741 = G__38758;
i__38738_38742 = G__38759;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__38760_38764 = cljs.core.seq.call(null,v);
var chunk__38761_38765 = null;
var count__38762_38766 = (0);
var i__38763_38767 = (0);
while(true){
if((i__38763_38767 < count__38762_38766)){
var x_38768 = cljs.core._nth.call(null,chunk__38761_38765,i__38763_38767);
ret.push(x_38768);

var G__38769 = seq__38760_38764;
var G__38770 = chunk__38761_38765;
var G__38771 = count__38762_38766;
var G__38772 = (i__38763_38767 + (1));
seq__38760_38764 = G__38769;
chunk__38761_38765 = G__38770;
count__38762_38766 = G__38771;
i__38763_38767 = G__38772;
continue;
} else {
var temp__4657__auto___38773 = cljs.core.seq.call(null,seq__38760_38764);
if(temp__4657__auto___38773){
var seq__38760_38774__$1 = temp__4657__auto___38773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38760_38774__$1)){
var c__28123__auto___38775 = cljs.core.chunk_first.call(null,seq__38760_38774__$1);
var G__38776 = cljs.core.chunk_rest.call(null,seq__38760_38774__$1);
var G__38777 = c__28123__auto___38775;
var G__38778 = cljs.core.count.call(null,c__28123__auto___38775);
var G__38779 = (0);
seq__38760_38764 = G__38776;
chunk__38761_38765 = G__38777;
count__38762_38766 = G__38778;
i__38763_38767 = G__38779;
continue;
} else {
var x_38780 = cljs.core.first.call(null,seq__38760_38774__$1);
ret.push(x_38780);

var G__38781 = cljs.core.next.call(null,seq__38760_38774__$1);
var G__38782 = null;
var G__38783 = (0);
var G__38784 = (0);
seq__38760_38764 = G__38781;
chunk__38761_38765 = G__38782;
count__38762_38766 = G__38783;
i__38763_38767 = G__38784;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args38785 = [];
var len__28417__auto___38800 = arguments.length;
var i__28418__auto___38801 = (0);
while(true){
if((i__28418__auto___38801 < len__28417__auto___38800)){
args38785.push((arguments[i__28418__auto___38801]));

var G__38802 = (i__28418__auto___38801 + (1));
i__28418__auto___38801 = G__38802;
continue;
} else {
}
break;
}

var G__38787 = args38785.length;
switch (G__38787) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38785.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__38788 = obj;
G__38788.push(kfn.call(null,k),vfn.call(null,v));

return G__38788;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x38789 = cljs.core.clone.call(null,handlers);
x38789.forEach = ((function (x38789,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__38790 = cljs.core.seq.call(null,coll);
var chunk__38791 = null;
var count__38792 = (0);
var i__38793 = (0);
while(true){
if((i__38793 < count__38792)){
var vec__38794 = cljs.core._nth.call(null,chunk__38791,i__38793);
var k = cljs.core.nth.call(null,vec__38794,(0),null);
var v = cljs.core.nth.call(null,vec__38794,(1),null);
f.call(null,v,k);

var G__38804 = seq__38790;
var G__38805 = chunk__38791;
var G__38806 = count__38792;
var G__38807 = (i__38793 + (1));
seq__38790 = G__38804;
chunk__38791 = G__38805;
count__38792 = G__38806;
i__38793 = G__38807;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38790);
if(temp__4657__auto__){
var seq__38790__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38790__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__38790__$1);
var G__38808 = cljs.core.chunk_rest.call(null,seq__38790__$1);
var G__38809 = c__28123__auto__;
var G__38810 = cljs.core.count.call(null,c__28123__auto__);
var G__38811 = (0);
seq__38790 = G__38808;
chunk__38791 = G__38809;
count__38792 = G__38810;
i__38793 = G__38811;
continue;
} else {
var vec__38797 = cljs.core.first.call(null,seq__38790__$1);
var k = cljs.core.nth.call(null,vec__38797,(0),null);
var v = cljs.core.nth.call(null,vec__38797,(1),null);
f.call(null,v,k);

var G__38812 = cljs.core.next.call(null,seq__38790__$1);
var G__38813 = null;
var G__38814 = (0);
var G__38815 = (0);
seq__38790 = G__38812;
chunk__38791 = G__38813;
count__38792 = G__38814;
i__38793 = G__38815;
continue;
}
} else {
return null;
}
}
break;
}
});})(x38789,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x38789;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args38816 = [];
var len__28417__auto___38822 = arguments.length;
var i__28418__auto___38823 = (0);
while(true){
if((i__28418__auto___38823 < len__28417__auto___38822)){
args38816.push((arguments[i__28418__auto___38823]));

var G__38824 = (i__28418__auto___38823 + (1));
i__28418__auto___38823 = G__38824;
continue;
} else {
}
break;
}

var G__38818 = args38816.length;
switch (G__38818) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38816.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit38819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit38819 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta38820){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta38820 = meta38820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit38819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38821,meta38820__$1){
var self__ = this;
var _38821__$1 = this;
return (new cognitect.transit.t_cognitect$transit38819(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta38820__$1));
});

cognitect.transit.t_cognitect$transit38819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38821){
var self__ = this;
var _38821__$1 = this;
return self__.meta38820;
});

cognitect.transit.t_cognitect$transit38819.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit38819.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit38819.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit38819.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit38819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta38820","meta38820",1605871872,null)], null);
});

cognitect.transit.t_cognitect$transit38819.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit38819.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit38819";

cognitect.transit.t_cognitect$transit38819.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cognitect.transit/t_cognitect$transit38819");
});

cognitect.transit.__GT_t_cognitect$transit38819 = (function cognitect$transit$__GT_t_cognitect$transit38819(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta38820){
return (new cognitect.transit.t_cognitect$transit38819(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta38820));
});

}

return (new cognitect.transit.t_cognitect$transit38819(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__27304__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1497988477042