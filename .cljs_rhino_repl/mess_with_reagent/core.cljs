(ns mess-with-reagent.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome to mess_with_reagent"]
   [:div [:a {:href "/about"} "go to about page"]
   [:div [:a {:href "/my-page"} "my page"]]]])

(defn about-page []
  [:div [:h2 "About mess_with_reagent"]
   [:div [:a {:href "/"} "go to the home page"]]])

(defn my-page [my-string]
  [:div
   [:h2 "Really, I'm just making sure that this all works like I expect it to."]
   [:hr]
   [:h3 "Variableeeee:"]
   [:span (str "This is some-string : " my-string)]
   [:ul
    [:li [:a {:href "/"} "root"]]
    [:li [:a {:href "/about"} "about"]]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

(secretary/defroute "/my-page" []
  (session/put! :current-page #'my-page "blah"))

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
