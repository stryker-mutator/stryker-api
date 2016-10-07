import TestResult from './TestResult';
import RunState from './RunState';

/**
 * Represents the result of a testrun.
 */
interface RunResult {
  /**
   * The individual test results.
   */
  tests: TestResult[];

  /**
   * If `state` is `error`, this collection should contain the error messages
   */
  errorMessages?: string[];

  /**
   * The state of the run
   */
  state: RunState;
}

export default RunResult;