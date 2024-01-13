# S05

Dépôt de la Saison 05

---



# O'quiz


## Challenge E07

Faire le login : créer une session utilisateur, après avoir valider les infos du formulaire dans les règles de l'art.


## Atelier

### :v: Bonus facile : Ajouter tous les liens qui pourraient manquer

Il y a surement des endroits où il serait intéressant de pouvoir cliquer, afin de rendre la navigation plus fluide.

### :skull_and_crossbones::clock4: Bonus de la mort où j'ai une semaine devant moi et je savais pas quoi faire : formulaires

Rajouter les formulaires d'inscription et de connexion.
Avec tout ce qui est nécessaire (Ajout en base de données, login en session plus ou moins longue)

---

## E04 challenge

On rajouterait pas quelques légumes (modèles) dans notre soupe (O'quiz) ?

## Partie 1

Ajouter les `models` manquants, qui n'ont pas encore été traités en Cockpit :

- `Level` // fait
- `User` // fait
- `Tag`
- `Question`
- `Answer` (si vous avez le temps)
- `Quiz` (si vous avez le temps)

Et on oublie pas de tester ! Par exemple, dans un fichier de `test.js` ou dans un contrôleur:

- récupérer toutes les questions.
- trouver la question dont l'ID est 3.
- créer un niveau `très difficile` et l'insérer en BDD.
- ...

## Partie 2

Exploratoire, mais sera corrigé !

- **Récupérer une `Question` en incluant son `Level` associé.**

Indices :

- Oui, c'est l'équivalent d'une *jointure* SQL...
  - mais avec `Sequelize`, c'est vachement moins verbeux !
- Il faut toutefois mettre en place/déclarer l'association
  - <https://sequelize.org/docs/v6/core-concepts/assocs/>

## E03 : challenge

Les méthodes Active Record du modèle Level ont été codées.

On a pu vérifier que ces méthodes fonctionnent en jouant dans test.js.

En s'inspirant (très largement) de ce code existant, on passe à la suite, à savoir coder les méthodes Active Record du modèle User :

- findAll(), qui trouve tous les Users dans la base de données.
- findById(id), qui trouve un User en fonction de son ID.
- create(), qui insert un nouveau user et retourne l'instance créées.
- update(), qui met à jour l'instance courante dans la base de données.
- destroy(), qui supprime l'instance courante de la base de données.

En bonus, commencer à réfléchir pour factoriser tout ce code (c'est-à-dire coder toutes les méthodes Active Record dans CoreModel !)

## E01

[Episode 1](./docs/E01/)

## E02

[Episode 2](./docs/E02/)

### Challenge

Dans ce challenge il faudra coder des classes qui correspondent aux entités de OQuizz, créer des constructeurs avec un objet en paramètre, on rajoute ensuite les getters/setters et pour finir en bonus : rajouter des tests dans les setters.

Créer un sous-dossier `app/models`.

Dans ce dossier, on va coder des classes à partir du MCD du projet :

- une classe par entité: `Answer`, `Level`, `Question`, `Quiz`, `Tag`, et `User`
- une seule classe par fichier ! Le fichier porte le même nom que la classe, en minuscule.

Dans chaque classe :

- déclarer une propriété pour chaque champ de la table correspondante.
- coder un `constructor` qui prend en paramètre un objet. Cet objet contient toutes les valeurs à recopier dans l'instance.
- ne pas oublier d'exporter la classe !

<details>
<summary>Heuuu oui... t'as un exemple ?</summary>

---

Le but, c'est d'arriver à faire ça :

```JS

const monTag = new Tag({
  name: "un super tag",
});
```

On devrait donc avoir un truc dans ce genre :

```JS
class Tag {

  id;
  name;

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
  }

};
```

---

</details>

## Don't Repeat Yourself

La propriété `id` est présente dans toutes les classes.

On va donc... les factoriser ! Et pour ce faire, on va utiliser l'héritage !

On va donc coder une class `CoreModel`, dans le même dossier que les autres, et toutes les classes vont *hériter* de celle-ci :

- Penser à exporter `CoreModel`.
- Penser à importer `CoreModel` dans les autres fichiers.
- Penser à appeler le "constructeur parent" dans les constructeur des classes.
- Penser à supprimer les propriété `id` de toutes les classes "fille"

## Bonus 1 : ne pas autoriser de valeurs absurdes

Dans les mutateurs, rajouter des tests pour vérifier que la donnée passée en argument est au moins du bon type.

<details>
<summary>Un exemple</summary>

```js
class Tag … {

  name;

  constructor(obj) {

    …

    if(typeof obj.name !== 'string') {
      throw Error("Tag name must be a string!");
      // on "lève" une erreur => ça arrête tout !
    }

    this.name = obj.name;

  }

};
```

</details>

## Bonus 2 : Accesseurs

Dans le `CoreModel` passer la propriété `id` en propriété privée, puis ajouté un accesseur permettant de lire cette propriété. Cela aura pour effet de ne pas permettre la modification manuelle de celle-ci.

Puis rechercher des modèles qui auraient potentiellement besoin d'un accesseur (getter) afin de faciliter la récupération d'informations composites.
