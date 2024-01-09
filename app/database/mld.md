# Oquizz

## mld

level (id, name)
question (id, description, anecdote, wiki, #level(id), #quiz(id), #answer(id))
answer (id, description, #question(id))
user (id, firstname, lastname, email, password)
quiz (id, title, description, #user(id))
tag (id, name)
quiz_has_tag (id, #quiz(id), #tag(id))

quiz_has_tag {
id => INT => Primary Key
Foreign Key(question_id)
Foreign Key(tag_id)
}
