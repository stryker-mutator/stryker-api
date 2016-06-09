import {TestSelector, TestSelectorFactory, TestSelectorSettings} from 'stryker-api/test_selector';

class TestSelector1 implements TestSelector{
  
  constructor(settings: TestSelectorSettings){

  }

  select(ids: number[]){
    return ids.toString();
  }
}

TestSelectorFactory.instance().register('selector-1', TestSelector1);
let testSelector = TestSelectorFactory.instance().create('selector-1', null);
if(! (testSelector instanceof TestSelector1)){
  throw Error('Test selector does not seem to be working');
}
console.log(TestSelectorFactory.instance().knownNames());