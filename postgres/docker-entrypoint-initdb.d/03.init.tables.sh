#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" tickets <<-EOSQL
    CREATE TABLE tickets (
      ticket_id BIGSERIAL PRIMARY KEY,
      title TEXT,
      content TEXT,
      status  VARCHAR(255),
      author  VARCHAR(255),
      created_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      modified_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

EOSQL
