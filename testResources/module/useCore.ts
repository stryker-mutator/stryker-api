import {StrykerOptions, Factory, InputFile, FilePatternDescriptor, Position, Location, Range} from 'stryker-api/core';

let options: StrykerOptions = {};
let optionsAllArgs: StrykerOptions = {
  files: ['some', 'file', { included: false, pattern: 'some pattern' }],
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

let inputFile: InputFile = {
  path: 'string',
  shouldMutate: true,
  included: true
}

let range: Range = [1, 2];
let filePatternDescriptor: FilePatternDescriptor = { included: true, pattern: '/files/**/*.js' };
let position: Position = { column: 2, line: 2 };
let location: Location = { start: position, end: position };

console.log(range, position, location, inputFile, optionsAllArgs, options);