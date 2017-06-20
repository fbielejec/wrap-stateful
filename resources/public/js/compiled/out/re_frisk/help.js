// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frisk.help');
goog.require('cljs.core');
re_frisk.help.fx = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db","db",993250759),"reset! app-db with a new value. Expects a map. / re-frame's internal",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),"`dispatch` one event. Expects a single vector. / re-frame's internal",new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),"`dispatch` more than one event. Expects a list or vector of events. Something for which sequential? returns true. / re-frame's internal",new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),"Removes a previously registered event handler. Expects either a single id (typically a keyword), or a seq of ids. / re-frame's internal",new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),"`dispatch` one or more events after given delays. Expects a collection of maps with two keys:  :`ms` and `:dispatch`. / re-frame's internal"], null);
re_frisk.help.cofx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),"Adds to coeffects the value in `app-db`, under the key `:db`. / re-frame's internal"], null);
re_frisk.help.intrcp = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),"An interceptor which injects re-frame :db coeffect. / re-frame's internal",new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),"An interceptor which actions a `context's` (side) `:effects`. For each key in the `:effects` map, call the `effects handler` previously registered using `reg-fx`. / re-frame's internal",new cljs.core.Keyword(null,"db-handler","db-handler",579530098),"An interceptor which wraps the kind of event handler given to `reg-event-db`. These handlers take two arguments;  `db` and `event`, and they return `db`. / re-frame's internal",new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),"An interceptor which wraps the kind of event handler given to `reg-event-fx`. These handlers take two arguments;  `coeffects` and `event`, and they return `effects`. / re-frame's internal"], null);
re_frisk.help.intrcp_fn = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),"Function which adds to coeffects the value in `app-db`, under the key `:db`. / re-frame's internal",new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),"Function which calls the `effects handler` previously registered using `reg-fx` for each key in the `:effects` map. / re-frame's internal",new cljs.core.Keyword(null,"db-handler","db-handler",579530098),"Function which calls the handler given to `reg-event-db`. This handler take two arguments;  `db` and `event`, and returns `db`. / re-frame's internal",new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),"Function which calls the handler given to `reg-event-fx`. This handler take two arguments;  `coeffects` and `event`, and returns `effects`. / re-frame's internal"], null);

//# sourceMappingURL=help.js.map?rel=1497988478811