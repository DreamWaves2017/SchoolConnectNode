
import http from 'app/http';
import config from 'app/http/config';
import {printIp, handleAsyncExceptions} from 'app/util';

async function run() {
  http.listen(config.port, config.host, () => {
    console.log('server is running ......')
    printIp();
  });
}

export default run;

if (require.main === module) {
  handleAsyncExceptions();
  run(...process.argv.slice(2));
}

