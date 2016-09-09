import {Mutator, MutatorFactory} from 'stryker-api/mutant';
import * as estree from 'stryker-api/estree';

class MyMutator implements Mutator {
  public name = 'myMutator';

  applyMutations(node: estree.Node, copy: (obj: any, deep?: boolean) => any): estree.Node[] {
    return null;
  }
}

MutatorFactory.instance().register('myMutator', MyMutator);
let myMutator = MutatorFactory.instance().create('myMutator', null);
if (!(myMutator instanceof MyMutator)) {
  throw Error('Something wrong with myMutator');
}

let node: estree.Node = { nodeID: 3, type: 'Literal', value: null, raw: '' };
console.log(node);