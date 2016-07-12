import RunResult from './RunResult';
import {StrykerOptions} from '../../core';
import RunnerOptions from './RunnerOptions';
import RunOptions from './RunOptions';

/**
 * Represents a TestRunner which can execute tests, resulting in a RunResult.
 */
interface TestRunner {

  /**
   * Optional. When implemented, will be called before runs are done on this test runner.
   * @returns A promise if stuff is initialized asyncronously, runs will not start until the promise is resolved.
   * Otherwise void
   */
  init?(): Promise<any> | void;

  /**
   * Executes a test run.
   * @param options The options for this test run.
   * @returns A promise to eventually complete the test run and deliver a RunResult.
   */
  run(options: RunOptions): Promise<RunResult>;

  /**
   * Optional. When implemented, will be called before the test runner's process is killed.
   * @returns A promise if stuff is destroyed asyncronously, the runners process will not end until the promise is resolved.
   * Otherwise void 
   */
  dispose?(): Promise<any> | void;
}

export default TestRunner;
