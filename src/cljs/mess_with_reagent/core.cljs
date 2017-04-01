(ns mess-with-reagent.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

;; -------------------------
;; Views

(defn timer-component []
  (let [seconds-elapsed (atom 0)]     ;; setup, and local state
    (fn []        ;; inner, render function is returned
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div "Seconds Elapsed: " @seconds-elapsed])))


(defn home-page []
  [:div [:h2 "Welcome to mess_with_reagent"]
   [:div [:a {:href "/about"} "go to about page"]
    [:span [:span "Hey"]
     [:div [ timer-component ]]]
   [:div [:a {:href "/my-page"} "my page"]]]])

(defn about-page []
  [:div [:h2 "About mess_with_reagent"]
   [:div [:a {:href "/"} "go to the home page"]]])

(defn my-page []
  ;; TODO -ac Ooh, this is dope, hiccup just does arbitrary transformations -- now, see
  ;; if you can convert your current setup, with all its components, into a custom little
  ;; Reagent app? (All of vr.cwervo.com would have to be, but that doesn't sound awful at all
  ;; -- really nice actually, just little namespaces that can borrow from each other!! <3)
  [:div
   [:h2 "Really, I'm just making sure that this all works like I expect it to."]
   [:hr]
   [:h3 "Variableeeee:"]
   [:span (str "This is some-string : " #_my-string)]
   [:ul
    [:li (timer-component)]
    [:li [:a {:href "/"} "root"]]
    [:li [:a {:href "/about"} "about"]]]
   [:hr]
   [:a-scene
     [:a-sphere {:color "#EF2D5E", :radius "1.25", :position "0 1.25 -5"}]
     [:a-box
      {:color "#4CC3D9",
       :depth "1",
       :height "1",
       :width "1",
       :rotation "0 45 0",
       :position "-1 0.5 -3"}]
     [:a-cylinder
      {:color "#FFC65D",
       :height "1.5",
       :radius "0.5",
       :position "1 0.75 -3"}]
     [:a-plane
      {:color "#7BC8A4",
       :height "4",
       :width "4",
       :rotation "-90 0 0",
       :position "0 0 -4"}]
     [:a-sky {:color "#ECECEC"}]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

(secretary/defroute "/my-page" []
  (session/put! :current-page #'my-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
