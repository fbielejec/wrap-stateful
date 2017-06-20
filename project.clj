(defproject wrap-stateful "0.0.1-SNAPSHOT"
  :description "Demontrates how to write JS libraries that can be wrapped in cljs/re-frame application. "
  :dependencies [[org.clojure/clojurescript "1.9.542"]
                 [reagent "0.6.2"]
                 [re-frame "0.9.3"]
                 [re-frisk "0.3.2"]]
  :resource-paths ["resources"]
  :profiles {:dev {:source-paths ["dev"]
                   :dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [figwheel-sidecar "0.5.10"]]
                   :plugins [[lein-figwheel "0.5.10" :exclusions [cider/cider-nrepl]]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}
  :plugins [[lein-ancient "0.6.10"]
            [lein-cljsbuild "1.1.5"]]
  :figwheel {:css-dirs ["resources/public/styles"]
             :server-port 8080}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel {:on-jsload "wrap-stateful.core/mount-root"}
                        :compiler {:main wrap-stateful.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :closure-defines {goog.DEBUG true}
                                   :source-map-timestamp true
                                   :externs ["js/app/src/d3-lib.js"]
                                   :foreign-libs [{:file "js/app/src/d3-lib.js"
                                                   :provides ["d3-lib"]}]}}]}
  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"
                                    "test/js"])
