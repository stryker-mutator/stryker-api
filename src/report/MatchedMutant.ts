interface MatchedMutant {
  readonly mutatorName: string;
  readonly scopeTestIds: number[];
  readonly timeSpentScopeTests: number;
  readonly fileName: string;
  readonly replacement: string;
}

export default MatchedMutant;