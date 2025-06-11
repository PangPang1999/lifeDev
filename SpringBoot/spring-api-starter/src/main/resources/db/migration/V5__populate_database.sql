-- Insert categories
insert into categories (id, name)
values (1, 'Electronics'),
       (2, 'Books');

-- Insert products
insert into products (id, name, price, description, category_id)
values (1, 'iPhone 15 Pro', 1199.00, 'Apple flagship smartphone with advanced camera and A17 chip.', 1),
       (2, 'Sony Alpha 7 IV', 2499.00, 'Sony full-frame mirrorless camera with fast autofocus.', 1),
       (3, 'MacBook Air M3', 1499.00, 'Apple ultra-thin laptop powered by M3 chip.', 1),
       (4, 'Kindle Paperwhite', 139.00, 'Amazon e-reader with high-resolution display.', 1),
       (5, 'Samsung Galaxy S24', 1099.00, 'Samsung flagship smartphone with dynamic AMOLED screen.', 1),
       (6, 'Bose QuietComfort Earbuds', 299.00, 'Noise-cancelling wireless earbuds by Bose.', 1),
       (7, 'Java: The Complete Reference', 69.00, 'Comprehensive book on Java programming language.', 2),
       (8, 'Effective Java', 89.00, 'Best practices for Java programming by Joshua Bloch.', 2),
       (9, 'The Art of Computer Programming', 159.00, 'Classic work on algorithms by Donald Knuth.', 2),
       (10, 'Fu Sheng Liu Ji', 12.00, 'Autobiographical work by Shen Fu, a classic of Chinese literature.', 2),
       (11, 'To Kill a Mockingbird', 18.00, 'Harper Lee’s classic novel about justice and race.', 2),
       (12, 'Clean Code', 79.00, 'A Handbook of Agile Software Craftsmanship by Robert C. Martin.', 2);
