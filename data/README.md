# SQL

---

## Création d'un BDD

```bash
# On se connecte à la BDD en tant que postgres : c'est l'utilisateur superadmin de la BDD
sudo -i -u postgres psql
```

```sql
-- Création d'un utilisateur dédié à une base de données
CREATE ROLE oquiz WITH LOGIN PASSWORD 'oquiz';
CREATE USER oquiz WITH PASSWORD 'oquiz';
-- Création d'une BDD et assignation de l'utilisateur comme gestionnaire de cette BDD
CREATE DATABASE oquiz OWNER oquiz;

```

```bash
psql -U oquiz -d oquiz < data/create_tables.sql
# ou
psql -U oquiz -f data/create_tables.sql
# ou
psql -U oquiz < data/create_tables.sql
```
