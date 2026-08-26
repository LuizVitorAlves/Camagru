# Database

The initial PostgreSQL domain schema is defined in `schema.sql`.

It establishes the persistence model for:

- users and account confirmation state;
- account-confirmation and password-reset tokens;
- user notification preferences;
- user-owned images and thumbnails;
- image likes;
- image comments.

The schema uses foreign keys with cascading deletion for user-owned data and a composite primary key on likes to prevent duplicate likes by the same user for the same image.

Later issues may split this foundation into versioned migrations as the application persistence layer is implemented.