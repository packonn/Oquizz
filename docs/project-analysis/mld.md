# MLD

---

```
level (id, name)
question (id, question, description, anecdote, wiki, #level(id), #quiz(id), #answer(id))
answer (id, description, #question(id))
user (id, firstname, lastname, email, password)
quiz (id, title, description, #user(id))
tag (id, name)
quiz_has_tag (id, #quiz(id), #tag(id))
```

---

```
niveau (codeNiveau, nom)
question (codeQuestion, description, anecdote, wiki, #codeQuiz, #codeNiveau, #codeReponse)
réponse (codeRéponse, description, #codeQuestion)
utilisateur (codeUtilisateur, prénom, nom, email, mot de passe)
quizz (codeQuizz, titre, description, #codeUtilisateur)
catégorie (CodeCatégorie, nom)
appartient (codeQuiz, codeCategorie)
```
