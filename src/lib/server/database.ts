import * as edgedb from 'edgedb';
import type { ConnectConfig } from 'edgedb/dist/conUtils';
import { DATABASE_SERVER_URL, DATABASE_TLS_SECURITY } from '$env/static/private';

export default edgedb.createClient({
    dsn: DATABASE_SERVER_URL,
    tlsSecurity: DATABASE_TLS_SECURITY as ConnectConfig['tlsSecurity']
});