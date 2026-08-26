# Database

The Camagru database uses PostgreSQL.

## Schema

`001_initial_schema.sql` is the initial domain schema. It is intentionally kept as a numbered SQL migration so future schema changes can be added without rewriting the initial definition.

The schema covers the mandatory domain entities planned for the project:

- users and credentials
- account confirmation tokens
- password reset tokens
- user notification preferences
- images and thumbnails
- likes
- comments

## Applying the schema

From a running PostgreSQL container, apply the migration with `psql` using the credentials configured in `.env`:

```bash
docker compose exec -T db psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" < database/001_initial_schema.sql
```

The migration is transactional and uses `IF NOT EXISTS` so it can safely be re-run during local development.

## Design rules

- Passwords are represented by `password_hash`; plaintext passwords must never be persisted.
- Tokens are represented by hashes, not raw token values.
- Foreign keys enforce ownership relationships and cascade dependent records when a user or image is removed.
- The `(user_id, image_id)` primary key on `likes` prevents duplicate likes by the same user.
- Notification preferences default to enabled, matching the mandatory project requirement.
