CREATE USER seanbrwh;

CREATE SERVER pho.fyi FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'Sean_workstatio', dbname 'pho.fyi', port '5432');

GRANT ALL PRIVILEGES ON DATABASE pho.fyi TO seanbrwh;