ALTER TABLE products
    ADD `description` TEXT NULL;

ALTER TABLE products
    MODIFY `description` TEXT NOT NULL;