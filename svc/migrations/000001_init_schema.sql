-- +migrate Up
create schema if not exists exercise;
create table exercise.exercise
(
    name text primary key
);
create table exercise.property
(
    name text primary key,
    type int not null
);
create table exercise.exercise_property_value
(
    exercise text references exercise.exercise(name) not null,
    property text references exercise.property(name) not null,
    value_union jsonb not null default '{}'
);

-- +migrate Down
