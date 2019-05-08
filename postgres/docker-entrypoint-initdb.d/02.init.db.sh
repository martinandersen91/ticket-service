#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    SET TIME ZONE 'Europe/Stockholm';

    CREATE DATABASE tickets;
    GRANT ALL PRIVILEGES ON DATABASE tickets TO postgres;

EOSQL
