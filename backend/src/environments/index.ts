import development from './development';
import production from './production';

const environment = process.env['NODE_ENV'] === 'production' ? production : development;

export default environment;
