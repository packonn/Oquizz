CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR(255), 
  "last_name" VARCHAR(255),
  "email" TEXT,
  "password" TEXT, 
);
CREATE TABLE "quiz" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(255), 
  "description" VARCHAR(255),
 "user_id" INT REFERENCES  "user"("id")
);