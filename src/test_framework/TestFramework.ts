/**
 * Represents a TestFramework which can select one or more tests to be executed.
 */
interface TestFramework {

  /**
   * Creates a code fragment which, if included in a test run,
   * is run before a particular test is run.
   */
  beforeEach(codeFragment: string): string;

  /**
   * Creates a code fragment which, if included in a test run,
   * is run before a particular test is run.
   */
  afterEach(codeFragment: string): string;

  /**
   * Creates a code fragment which, in included in a test run,
   * will be responsible for filtering out tests with given ids.
   * The first test gets id 0, the second id 1, etc.
   * 
   * @param indices A list of testId's to select.
   * @returns A script which, if included in the test run, will filter out the correct tests.
   */
  filter(ids: number[]): string;
}

export default TestFramework;