
import Tabel from 'tabel';
import config from './config';
import loadTables from './tables';

const orm = new Tabel(config);

loadTables(orm);

export default orm.exports;

