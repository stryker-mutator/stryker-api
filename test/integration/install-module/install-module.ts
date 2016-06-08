import Executor from './Executor';
import {expect} from 'chai';

describe('we have a module using stryker', function () {

  this.timeout(100000);

  describe('after installing Stryker', () => {
    let executor: Executor

    before((done) => {
      executor = new Executor('../../../testResources/module');
      executor.exec('npm install', {}, (errors) => done(errors));
    });

    describe('when compiling typescript', () => {
      it('should not result in errors', (done) => {
        executor.exec('npm run tsc', {}, (errors) => done(errors));
      });
    });
  });
});