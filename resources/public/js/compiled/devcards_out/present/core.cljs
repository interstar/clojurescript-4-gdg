(ns present.core
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [patterning.sshapes :as sshapes]
   [patterning.groups :as groups]
   [patterning.layouts :as layouts]
   [patterning.view :refer [make-svg] ]
   [patterning.library.std :as std]
   [patterning.color :refer [p-color]]

   [reagent.core :as r]

   )

  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)


(defcard
  "# Clojure

## O que que 'e?

* Lisp
* \"Clean Slate\"
* Bom Gosto
* Acima de Java ou Javascript etc.")


(defcard
  "# Lisp

### A mitologia e a realidade

![Lisp](https://imgs.xkcd.com/comics/lisp_cycles.png)


![Lisp](https://imgs.xkcd.com/comics/lisp.jpg)

 ")

(defcard
  "# Lisp

* Eterno
* Elegante
* Poderosa
* Muitos Parênteses
* Impraticável (mas o Clojure solucionar este ultima)")

(defcard
  "# Programacao Funcional

Funções são \"cidadãos de primeira classe\"

* Pode ser argumentos pra outras funções
* Pode ser anonimo (lambdas)
* Pode ser produzidos pela outras funções

```
(defn f [x] (+ x x))

(f 8)

(map (fn [y] (* y y)) (range 10))

(filter even? (range 40))

(defn g [y] (fn [x] (* x y)))

(map (g 3) (range 10))
```

"
  (let [f (fn [x] (+ x x))
        g (fn [y] (fn [x] (* x y)))]
    (sab/html [:div
               [:div (f 8)]
               [:div (str  (map (fn [y] (* y y)) (range 10)))]
               [:div (str (filter even? (range 40)))]
               [:div (str (map (g 3) (range 10)))]
               ])))



(defcard
  "# Mais Funcional

### Partial Evaluation (Currying)

```
(def f (partial + 1))

(f 3)
```

### Compondo Funções

```
(defn g [x] (* x x))

(def h (comp f g))

(map h (range 10))
```

### Transducers
```
(def tx (comp (map f) (map g) (filter even?)))

(eduction tx (range 10))
```
"
  (let [f (partial + 1)
        g (fn [x] (* x x))
        h (comp f g)
        tx (comp (map g) (map f) (filter even?))]
    (sab/html [:div
               [:div (str (f 3))]
               [:div (str (map h (range 10)))]
               [:div (str (map #(-> % str (* 1)) (eduction tx (range 10))))]]))
  )


(defcard
  "# Dados

### Keywords, Vectors, Maps
```
:keyword

[1 2 3]

{:a 1 :b 2}

```

### EDN

Dar pra combinar em estruturas de dados \"literais\" complexos.

A filosofia de Clojure : melhor 100 funcoes operando um estrutura de dados do que 10 estruturas de dados cada um com 10 funcoes operando em lo.

Os bibliotecas de Clojure construir varias DSLs com EDN.

Eg. hiccup
```
[:div
    [:h2 \"Titulo\"]
    [:p [:em \"Lorem ipsum dolor \"]
        \"sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... \"]]
```


### Argumentos desestructurados (\"destructing\")

```
(defn ppt [[x y]] {:x x :y y})
(defn pp [{:keys [nome idade]}]  (str \"Nome : \" nome \", Idade :  \"  idade ))

(ppt [12 23])

(pp {:nome \"Fred\" :idade 24})


```
"
  (let [ppt (fn [[x y]] {:x x :y y} )
        pp (fn [{:keys [nome idade]}] (str "Nome : " nome ", Idade : " idade)   ) ]
    (sab/html [:div
               [:div
                [:h2 "Titulo"]
                [:p [:em "Lorem ipsum dolor "]
                 "sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."]]
               [:div
                [:h3 "Argumentos desestruturados"]
                [:p (str  (ppt [12 23]))]
                [:p (str  (pp {:nome "Fred" :idade "24"}))]
                ]]) )
 )

(defcard
  "# Biblioteca de sequencias e maps

* APIs comuns
* Todas estruturas de dados são imutáveis e preguiças

### Reduce

```
(reduce + [1 2 3 4])
```

### Listas infinitos

```
(def xs (iterate (partial + 1) 0))

(take 50 xs)

(def ss (iterate (partial str \"*\") \"\")

(take 20 ss)
```

 "

  (let [xs (iterate (partial + 1) 0)
        ss (iterate (partial str "*") "")]
    (sab/html
     [:div
      [:div (str (reduce + [1 2 3 4]))]
      [:div (str (take 50 xs))]
      [:div (str (take 20 ss))]])

    )

  )



(defcard
  "# Representação gráfica de uma função

```
(let [f (fn [x] (+ 100 (* 2 (* x (Math/sin x)))))
      coords (fn [f maxy]
                (let [xs (iterate (partial + 1) 0)]
                  (map vector xs (map #(- maxy (f %)) xs ))) )
      make-path (fn [xys]
                   (let [[x1 y1] (first xys)]
                      (apply str \"\"
                         (cons (str \"M\" x1 \" \" y1 \" \")
                            (map (fn [[x y]] (str \"L \" x \" \" y \" \")) xys)))))
        ]

    (sab/html
     [:div
      [:div (str (take 20 (coords f 200)))]
      [:div
       [:h2 \"Graph\"]
       [:svg {:width \"400\" :height \"200\"}
        [:path {:fill \"transparent\" :stroke \"green\" :d
               (-> f
                    (coords 200)
                    ((fn [xs] (take 400 xs)))
                    make-path)
         ]]]]))

```"

  (let [f (fn [x] (+ 100 (/ (* x (Math/sin x)) 5 ) )  )
        coords (fn [f maxy]
                (let [xs (iterate (partial + 1) 0)]
                  (map vector xs (map #(- maxy (f %)) xs ))) )

        make-path (fn [xys]
                    (let [[x1 y1] (first xys)]
                      (apply str ""
                             (cons (str "M" x1 " " y1 " ")
                                   (map (fn [[x y]] (str "L " x " " y " ")) xys)))))
        ]

    (sab/html
     [:div
      [:div (str (take 20 (coords f 200)))]
      [:div
       [:h2 "Graph"]
       [:svg {:width "400" :height "200"}
        [:path {:fill "transparent" :stroke "green" :d
                (-> f
                    (coords 200)
                    ((fn [xs] (take 400 xs)))
                    make-path)}
         ]]]])))



(defcard
  "# Padrões Decorativos

```
(let [triangles
       (layouts/clock-rotate 5 (std/poly 0.5 0.5 0.3 3
                                  {:stroke (p-color 255 100 100)
                                   :stroke-weight 2 }))
      pentagon (std/poly 0 0 0.7 5 {:stroke (p-color 0 0 255)
                                     :stroke-weight 2}) ]
        (layouts/checked-layout 6 (repeat pentagon) (repeat triangles)))

```
"
  (let [p (let [triangles
                (layouts/clock-rotate 5 (std/poly 0.5 0.5 0.3 3
                                                  {:stroke (p-color 255 100 100)
                                                   :stroke-weight 2 }))
                pentagon (std/poly 0 0 0.7 5 {:stroke (p-color 0 0 255)
                             :stroke-weight 2}) ]
            (layouts/checked-layout 9 (repeat pentagon) (repeat triangles)))
        ]
    (sab/html
        [:div
    [:h3 "Visual"]
    [:div
     {:dangerouslySetInnerHTML {:__html (make-svg 400 400
                                                  p)}}]])))

(defcard
  "## \"Clean Slate\"

* EDN
* Dados Imutaveis
* Dados Preguicosas

## Bom Gosto

* Interfaces / APIs gerais
* Ferramentas : (Figwheel, devcards)

")



(defcard
  "# Contas

Exemplo de interatividade em React (com Reagent)
 "
(defn contas-component [orc]
    (r/with-let [som (reduce + @orc)
                 entrada (r/atom 0)]

    (sab/html
      [:div
       [:table [:tbody
                [:tr [:th "Receitas"] [:th "Gastas"]]
                (for [item @orc ]
                  (if (< 0 item)
                    [:tr [:td item] [:td]]
                    [:tr [:td] [:td [:span {:style {:color "#ff000"} } (- 0 item)]] ])) ]]
       [:div "Som : " som]
       [:div
        [:input {:type "text"
                 :value @entrada
                 :on-change #(reset! entrada (-> % .-target .-value (* 1) ))
                 }]

        [:button {:on-click #(reset! orc (cons @entrada @orc))} "Adicionar"]

        ]

       ] )))
 )

(defcard
  "## exemplo"
  (sab/html [:div
             [:h3 "Criado em codigo"]]))



(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
