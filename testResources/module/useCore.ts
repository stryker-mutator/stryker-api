import {StrykerOptions, Factory, InputFile, Position, Location, Range} from 'stryker-api/core';

let options: StrykerOptions = {};
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

let inputFile: InputFile = {
  path: 'string',
  shouldMutate: true
}

let range: Range = [1, 2];
let position: Position = { column: 2, line: 2 };
let location: Location = { start: position, end: position };

console.log(range, position, location, inputFile, optionsAllArgs, options);