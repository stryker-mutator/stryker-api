import {StrykerOptions, Factory, InputFile, Position, Location, Range} from 'stryker-api/core';
import {Config, ConfigWriter, ConfigWriterFactory} from 'stryker-api/config';
import {StrykerNode, Mutator, MutatorFactory} from 'stryker-api/mutant';
import {Reporter, MutantResult, MutantStatus, ReporterFactory, SourceFile} from 'stryker-api/report';
import {CoverageCollection, CoverageResult, CoverageData, BrancheCoverageData, FunctionMap, FunctionDescription,
  BranchMap, BranchDescription, StatementMap, TestResult, TestRunner, RunnerOptions, RunResult, RunOptions, TestRunnerFactory} from 'stryker-api/test_runner';
import {TestSelector, TestSelectorFactory, TestSelectorSettings} from 'stryker-api/test_selector';

let options: StrykerOptions = { };
let optionsAllArgs: StrykerOptions = {
    files: ['some', 'file'],
    mutate: ['some'],
    configFile: 'string',
    testFramework: 'string',
    testRunner: 'string',
    reporter: 'string',
    logLevel: 'string',
    timeoutMs: 1,
    timeoutFactor: 2,
    plugins: ['string'],
    port: 3,
 };
