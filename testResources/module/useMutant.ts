import {StrykerNode, Mutator, MutatorFactory} from 'stryker-api/mutant';

class MyMutator implements Mutator {
  public name = 'myMutator';

  applyMutations(node: ESTree.Node, copy: (obj: any, deep?: boolean) => any): ESTree.Node[] {
    return null;
  }
}

MutatorFactory.instance().register('myMutator', MyMutator);
let myMutator = MutatorFactory.instance().create('myMutator', null);
if (!(myMutator instanceof MyMutator)) {
  throw Error('Something wrong with myMutator');
}

let node: StrykerNode = { nodeID: 3, type: 'node' };
console.log(node);