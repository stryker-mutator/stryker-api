/**
 * Indicates what the result of a single test was.
 */
enum TestState {
  /**
   * The test succeeded
   */
  Success,
  /**
   * The test failed
   */
  Failed,
  /**
   * The test was skipped (not executed)
   */
  Skipped
}

export default TestState;