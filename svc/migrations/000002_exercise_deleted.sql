-- +migrate Up
alter table exercise.exercise add column is_deleted boolean;

-- +migrate Down
alter table exercise.exercise drop column is_deleted;
