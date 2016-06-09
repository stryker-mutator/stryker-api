import {Reporter, MutantResult, MutantStatus, ReporterFactory, SourceFile} from 'stryker-api/report';

class EmptyReporter {
}

class AllReporter implements Reporter {
  onSourceFileRead(file: SourceFile) {
  }
  onAllSourceFilesRead(files: SourceFile[]) {
  }
  onMutantTested(result: MutantResult) {
  }
  onAllMutantsTested(results: MutantResult[]) {
  }
  wrapUp() {
    return new Promise<void>(r => r());
  }
}

ReporterFactory.instance().register('empty', EmptyReporter);
ReporterFactory.instance().register('all', AllReporter);
console.log(ReporterFactory.instance().knownNames());
let emptyReporter = ReporterFactory.instance().create('empty', {});
let allReporter = ReporterFactory.instance().create('all', {});
if (!(emptyReporter instanceof EmptyReporter)) {
  throw Error('Something wrong with empty reporter');
}
if (!(allReporter instanceof AllReporter)) {
  throw Error('Something wrong with all reporter');
}

let result: MutantResult = {
  sourceFilePath: 'string',
  mutatorName: 'string',
  status: MutantStatus.TIMEDOUT,
  replacement: 'string',
  originalLines: 'string',
  mutatedLines: 'string',
  specsRan: [''],
  location: null,
  range: [1, 2]
}
allReporter.onMutantTested(result);
console.log(result);