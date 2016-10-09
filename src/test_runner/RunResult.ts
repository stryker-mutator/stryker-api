import TestResult from './TestResult';
import RunState from './RunState';
import {CoverageCollection, CoverageCollectionPerTest} from './Coverage';

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

  /**
   * Optional: the code coverage result of the run.
   */
  coverage?: CoverageCollection | CoverageCollectionPerTest;
}

export default RunResult;