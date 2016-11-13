import TestStatus from './TestStatus';

/**
 * Indicates the result of a single test
 */
interface TestResult {
  /**
   * The full human readable name of the test
   */
  name: string;
  /**
   * The status of the test
   */
  status: TestStatus;
  /**
   * Optional: any error messages
   */
  errorMessages?: string[];
  /**
   * Optional: the time it took
   */
  timeSpentMs?: number;
}

export default TestResult;
