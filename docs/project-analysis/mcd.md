# MCD

---

Utilisateur: code utilisateur, nom, prénom, courriel, mot de passe
Quiz: code quiz, titre, description
Question: code question, question, description, wiki, anecdote
Reponse: code reponse, description
Catégorie: code catégorie, nom
Niveau: code niveau, nom


## Associations : définition des cardinalités

- one-to-one 1:1
- one-to-many 1:N
    - many-to-one M:1
- many-to-many N:N


Un utilisateur peut créer un ou plusieurs quiz : one-to-many 1:N
Une question est associée a un quiz : un quiz est composé de 0 ou plusieurs questions 1:N

Une Question possède une bonne réponse

Une Question possède plusieurs propositions réponses one-to-many 1:N

Plusieurs Quiz pourront avoir plusieurs Categorie many-to-many N:N

Une question n'a qu'un niveau, un niveau a plusieurs questions ? one-to-many 1:N


```
:
:
valide, 11 Question, 01 Reponse

Utilisateur: code utilisateur, nom, prénom, courriel, mot de passe
avoir, 0N Quiz, 11 Question
Question: code question, question, description, wiki, anecdote
possède, 0N Question, 11 Reponse
Reponse: code reponse, description

créé, 0N Utilisateur, 11 Quiz
Quiz: code quiz, titre, description
défini, 0N Niveau, 11 Question
Niveau: code niveau, nom
:

:
appartient, 0N Quiz, 0N Catégorie
Catégorie: code catégorie, nom
:
:
```

2ème version :

```
:
:
valide, 11 question, 01 réponse

niveau: code niveau, nom
défini, 0N niveau, 11 question
question: code question, description, anecdote, wiki
possède, 0N question, 11 réponse
réponse: code réponse, description

compose, 11 question, 0N quizz

utilisateur: code utilisateur, prénom, nom, email, mot de passe
créé, 0N utilisateur, 11 quizz
quizz: code quizz, titre, description
appartient, 0N quizz, 0N catégorie
catégorie : code catégorie, nom
```
