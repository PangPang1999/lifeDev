alter table users
drop column state;

alter table addresses
    add state VARCHAR(255) not null;