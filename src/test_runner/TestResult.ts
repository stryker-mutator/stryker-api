import TestState from './TestState';
import {CoverageCollection} from './Coverage';

/**
 * Indicates the result of single test
 */
interface TestResult {
  /**
   * The full human readable name of the test
   */
  name: string;
  /**
   * The state of the test
   */
  state: TestState;
  /**
   * Optional: any error messages
   */
  errorMessages?: string[];
  /**
   * Optional: the time it took
   */
  timeSpentMs?: number;
  /**
   * Optional: the coverage result.
   */
  coverage?: CoverageCollection;
}

export default TestResult;