import * as estree from 'estree';

export type Node = Identifier | SimpleLiteral | RegExpLiteral | Program | FunctionDeclaration | FunctionExpression | ArrowFunctionExpression | SwitchCase | CatchClause | VariableDeclarator | ExpressionStatement | BlockStatement | EmptyStatement | DebuggerStatement | WithStatement | ReturnStatement | LabeledStatement | BreakStatement | ContinueStatement | IfStatement | SwitchStatement | ThrowStatement | TryStatement | WhileStatement | DoWhileStatement | ForStatement | ForInStatement | ForOfStatement | VariableDeclaration | ClassDeclaration | ThisExpression | ArrayExpression | ObjectExpression | YieldExpression | UnaryExpression | UpdateExpression | BinaryExpression | AssignmentExpression | LogicalExpression | MemberExpression | ConditionalExpression | SimpleCallExpression | NewExpression | SequenceExpression | TemplateLiteral | TaggedTemplateExpression | ClassExpression | MetaProperty | Property | AssignmentProperty | Super | TemplateElement | SpreadElement | ObjectPattern | ArrayPattern | RestElement | AssignmentPattern | ClassBody | MethodDefinition | ImportDeclaration | ExportNamedDeclaration | ExportDefaultDeclaration | ExportAllDeclaration | ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ExportSpecifier;


export interface Identifier extends estree.Identifier {
  nodeID: number;
}
export interface SimpleLiteral extends estree.SimpleLiteral {
  nodeID: number;
}
export interface RegExpLiteral extends estree.RegExpLiteral {
  nodeID: number;
}

export interface Program extends estree.Program {
  nodeID: number;
}

export interface FunctionDeclaration extends estree.FunctionDeclaration {
  nodeID: number;
}

export interface FunctionExpression extends estree.FunctionExpression {
  nodeID: number;
}

export interface ArrowFunctionExpression extends estree.ArrowFunctionExpression {
  nodeID: number;
}

export interface SwitchCase extends estree.SwitchCase {
  nodeID: number;
}

export interface CatchClause extends estree.CatchClause {
  nodeID: number;
}

export interface VariableDeclarator extends estree.VariableDeclarator {
  nodeID: number;
}

export interface ExpressionStatement extends estree.ExpressionStatement {
  nodeID: number;
}

export interface BlockStatement extends estree.BlockStatement {
  nodeID: number;
}

export interface EmptyStatement extends estree.EmptyStatement {
  nodeID: number;
}

export interface DebuggerStatement extends estree.DebuggerStatement {
  nodeID: number;
}

export interface WithStatement extends estree.WithStatement {
  nodeID: number;
}

export interface ReturnStatement extends estree.ReturnStatement {
  nodeID: number;
}

export interface LabeledStatement extends estree.LabeledStatement {
  nodeID: number;
}

export interface BreakStatement extends estree.BreakStatement {
  nodeID: number;
}

export interface ContinueStatement extends estree.ContinueStatement {
  nodeID: number;
}

export interface IfStatement extends estree.IfStatement {
  nodeID: number;
}

export interface SwitchStatement extends estree.SwitchStatement {
  nodeID: number;
}

export interface ThrowStatement extends estree.ThrowStatement {
  nodeID: number;
}

export interface TryStatement extends estree.TryStatement {
  nodeID: number;
}

export interface WhileStatement extends estree.WhileStatement {
  nodeID: number;
}

export interface DoWhileStatement extends estree.DoWhileStatement {
  nodeID: number;
}

export interface ForStatement extends estree.ForStatement {
  nodeID: number;
}

export interface ForInStatement extends estree.ForInStatement {
  nodeID: number;
}

export interface ForOfStatement extends estree.ForOfStatement {
  nodeID: number;
}

export interface VariableDeclaration extends estree.VariableDeclaration {
  nodeID: number;
}

export interface ClassDeclaration extends estree.ClassDeclaration {
  nodeID: number;
}

export interface ThisExpression extends estree.ThisExpression {
  nodeID: number;
}

export interface ArrayExpression extends estree.ArrayExpression {
  nodeID: number;
}

export interface ObjectExpression extends estree.ObjectExpression {
  nodeID: number;
}

export interface YieldExpression extends estree.YieldExpression {
  nodeID: number;
}

export interface UnaryExpression extends estree.UnaryExpression {
  nodeID: number;
}

export interface UpdateExpression extends estree.UpdateExpression {
  nodeID: number;
}

export interface BinaryExpression extends estree.BinaryExpression {
  nodeID: number;
}

export interface AssignmentExpression extends estree.AssignmentExpression {
  nodeID: number;
}

export interface LogicalExpression extends estree.LogicalExpression {
  nodeID: number;
}

export interface MemberExpression extends estree.MemberExpression {
  nodeID: number;
}

export interface ConditionalExpression extends estree.ConditionalExpression {
  nodeID: number;
}

export interface SimpleCallExpression extends estree.SimpleCallExpression {
  nodeID: number;
}

export interface NewExpression extends estree.NewExpression {
  nodeID: number;
}

export interface SequenceExpression extends estree.SequenceExpression {
  nodeID: number;
}

export interface TemplateLiteral extends estree.TemplateLiteral {
  nodeID: number;
}

export interface TaggedTemplateExpression extends estree.TaggedTemplateExpression {
  nodeID: number;
}

export interface ClassExpression extends estree.ClassExpression {
  nodeID: number;
}

export interface MetaProperty extends estree.MetaProperty {
  nodeID: number;
}

export interface Property extends estree.Property {
  nodeID: number;
}

export interface AssignmentProperty extends estree.AssignmentProperty {
  nodeID: number;
}

export interface Super extends estree.Super {
  nodeID: number;
}

export interface TemplateElement extends estree.TemplateElement {
  nodeID: number;
}

export interface SpreadElement extends estree.SpreadElement {
  nodeID: number;
}

export interface ObjectPattern extends estree.ObjectPattern {
  nodeID: number;
}

export interface ArrayPattern extends estree.ArrayPattern {
  nodeID: number;
}

export interface RestElement extends estree.RestElement {
  nodeID: number;
}

export interface AssignmentPattern extends estree.AssignmentPattern {
  nodeID: number;
}

export interface ClassBody extends estree.ClassBody {
  nodeID: number;
}

export interface MethodDefinition extends estree.MethodDefinition {
  nodeID: number;
}

export interface ImportDeclaration extends estree.ImportDeclaration {
  nodeID: number;
}

export interface ExportNamedDeclaration extends estree.ExportNamedDeclaration {
  nodeID: number;
}

export interface ExportDefaultDeclaration extends estree.ExportDefaultDeclaration {
  nodeID: number;
}

export interface ExportAllDeclaration extends estree.ExportAllDeclaration {
  nodeID: number;
}

export interface ImportSpecifier extends estree.ImportSpecifier {
  nodeID: number;
}

export interface ImportDefaultSpecifier extends estree.ImportDefaultSpecifier {
  nodeID: number;
}

export interface ImportNamespaceSpecifier extends estree.ImportNamespaceSpecifier {
  nodeID: number;
}

export interface ExportSpecifier extends estree.ExportSpecifier {
  nodeID: number;
}
