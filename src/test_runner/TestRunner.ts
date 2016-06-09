import RunResult from './RunResult';
import {StrykerOptions} from '../../core';
import RunnerOptions from './RunnerOptions';
import RunOptions from './RunOptions';

/**
 * Represents a TestRunner which can execute tests, resulting in a RunResult.
 */
interface TestRunner {

  /**
   * Executes a test run.
   * @param options The options for this test run.
   * @returns A promise to eventually complete the test run and deliver a RunResult.
   */
  run(options: RunOptions): Promise<RunResult>;
}

export default TestRunner;
