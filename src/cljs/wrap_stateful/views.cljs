(ns wrap-stateful.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            d3lib))

(defn handle-file-read
  [id evt]
  (let [content (-> evt .-target .-result)]
    (re-frame/dispatch [:set-content {:id id :content content}])))

(defn handle-upload [id evt]
  (let [target (.-currentTarget evt)
        file (-> target .-files (aget 0))
        reader (js/FileReader.)]
    (set! (.-value target) "")
    (set! (.-onload reader) #(handle-file-read id %))
    (.readAsText reader file)))

(defn upload-button [id]
  (fn []
    [:label {:for "file-upload" :class "custom-file-upload"}
     [:i {:class "btn-upload"}] "Custom Upload"]
    [:input {:class "none"
             :id "file-upload"
             :type "file"
             :on-change #(handle-upload id %)}]))

(defn main-panel []
  (let []
    (fn []
      (let [data-id :data
            data @(re-frame/subscribe [:content {:id data-id}])]
        [:div{:class "container"}
         [:h1 "Upload data to render"]
         [upload-button data-id]
         (if data
           (do
             (prn "data loaded")
             (let [chart (js/Module.)]
               [chart]))
           (prn "no data loaded"))]))))
