const chai = require('chai');
const sinonChai = require('sinon-chai');
require('mocha-sinon');

chai.use(sinonChai);

const expect = chai.expect;

export { it, before, beforeEach, after, afterEach } from 'arrow-mocha/es5';
export { expect };
