# Active Record

> An object that wraps a row in a database table or view, encapsulates the database access, and adds domain logic on that data.
<https://www.martinfowler.com/eaaCatalog/activeRecord.html>

=> On créé un objet pour représenter nos objets métiers : c'est une `Entity`, un model-objet.
   Notre Entity contient de la logique `Business`, ie. liée à la logique du produit qu'on construit.
   ex: on pourrait rajouter des règles "business"
    - `User.getFullName()`
    - `User.hasLoggedInToday()`
    - interdire à un utilisateur trop jeune de se connecter à notre app.
    - l'idée : en regardant l'état de notre objet en BDD, on doit pouvoir dire s'il peut faire tel ou tel chose, etc...

=> Avec le `Design Pattern` Active Record, le model-objet Entity va AUSSI s'occuper de la persistance (sauvegarde en BDD) de la donnée.

- ex: en gros, on va aller coder une méthode :
  - `User.fetchAll()`
  - `Quiz.fetchById(id)` qui nous renvoie un quizz AVEC ses tag_ids !
  - `user.save()`

### Qu'est-ce qu'on avait avant ?

- Rappelons-nous en S04 : on avait une couche "DataMapper" qui s'occupe de récupérer les données de la base pour nous.
  - Avant, Les données qu'on manipulait étaient brutes, et pas wrapper dans des objets qui comporte des méthodes, des setters, etc...
- Maintenant, nos données embarquent aussi potentiellement de la logique métier, ce qui peut-être pratique ! On veut pouvoir en profiter dans le reste de notre application !
