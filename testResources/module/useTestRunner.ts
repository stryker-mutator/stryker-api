import {CoverageCollection, CoverageResult, CoverageData, BrancheCoverageData, FunctionMap, FunctionDescription,
  BranchMap, BranchDescription, StatementMap, TestResult, TestRunner, RunnerOptions, RunResult, RunOptions, TestRunnerFactory} from 'stryker-api/test_runner';

class MyTestRunner implements TestRunner {

  run(options: RunOptions) {
    return new Promise<RunResult>(r => r(null));
  };
}

let runnerOptions: RunnerOptions = {
  files: [{ path: 'some', shouldMutate: true, included: false }, { path: 'files', shouldMutate: false, included: true }],
  port: 1,
  strykerOptions: null
}

TestRunnerFactory.instance().register('MyTestRunner', MyTestRunner);
let myTestRunner = TestRunnerFactory.instance().create('MyTestRunner', runnerOptions);
if (!(myTestRunner instanceof MyTestRunner)) {
  throw Error('Something wrong with myTestRunner');
}

console.log(TestRunnerFactory.instance().knownNames());
let brancheCoverageData: BrancheCoverageData = {};
let coverageData: CoverageData = {};
let statementMap: StatementMap = {};
statementMap['23'] = { start: { line: 23, column: 23 }, end: { line: 42, column: 42 } };
brancheCoverageData['s'] = [2, 4];
coverageData['32'] = 24;
let coverageResult: CoverageResult = {
  s: coverageData,
  statementMap
}
