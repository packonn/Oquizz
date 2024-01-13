# Les notes Requêtes SQL de Fadwa

## Gestion des enregistrements

### Pour récupérer des enregistrements

```sql
SELECT * FROM "promo";

```

### Pour ajouter des enregistrements

```sql
-- pour l'ecrire sur 2 ligne
INSERT INTO "promo" ("id", "name", "github_organization")
VALUES ('2', 'kimchi2', '
https://github.com/orgs/O-clock-Kimchi');


INSERT INTO "promo" ("id", "name", "github_organization") VALUES ('1', 'kimchi', '
https://github.com/orgs/O-clock-Kimchi');



--
si un champs a une valeur null

INSERT INTO "promo" ("id", "name", "github_organization") VALUES('4', 'kimchi4', NULL);

INSERT INTO "promo" ("id", "name") VALUES('4', 'kimchi4');


-- Insérer un étudiant dans la table "student"

-- Pas d'ID -> le SERIAL prend le relais

-- L'ordre des propriété n'as pas d'importance

-- Certaines valeurs peuvent être null (pas de valeur)

INSERT INTO "student" ("first_name", "last_name", "profile_picture_url", "promo_id") VALUES ('Harry2', 'Potter2', 'hpotter7', NULL);

VALUES ('Harry2', 'Potter2', 'hpotter7', NULL);

```

### Supprimer des enregistrements

**Attention, ca supprime de manière définitive**

La clé primaire supprimer ne doit pas etre remplacer par la meme valeur

```sql
DELETE FROM "student" WHERE "id"= 2;

-- supprime toutes les lignes de la table

DELETE FROM "student" ;
TRUNCATE TABLE "promo";
```

### Modification des enregistrements

```sql
UPDATE "promo" SET "name"='Cosmos' WHERE "id"=4;

```

UPDATE "promo" SET "name"='Cosmos'
=> **attention fera la modif sur TOUTES LES LIGNES DE LA COLONNE**
