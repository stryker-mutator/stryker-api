import * as estree from 'estree';

declare module 'estree' {

  export interface Identifier {
    nodeID: number;
  }
  export interface SimpleLiteral {
    nodeID: number;
  }
  export interface RegExpLiteral  {
    nodeID: number;
  }

  export interface Program {
    nodeID: number;
  }

  export interface FunctionDeclaration {
    nodeID: number;
  }

  export interface FunctionExpression  {
    nodeID: number;
  }

  export interface ArrowFunctionExpression {
    nodeID: number;
  }

  export interface SwitchCase  {
    nodeID: number;
  }

  export interface CatchClause {
    nodeID: number;
  }

  export interface VariableDeclarator {
    nodeID: number;
  }

  export interface ExpressionStatement {
    nodeID: number;
  }

  export interface BlockStatement  {
    nodeID: number;
  }

  export interface EmptyStatement  {
    nodeID: number;
  }

  export interface DebuggerStatement {
    nodeID: number;
  }

  export interface WithStatement  {
    nodeID: number;
  }

  export interface ReturnStatement  {
    nodeID: number;
  }

  export interface LabeledStatement {
    nodeID: number;
  }

  export interface BreakStatement  {
    nodeID: number;
  }

  export interface ContinueStatement {
    nodeID: number;
  }

  export interface IfStatement  {
    nodeID: number;
  }

  export interface SwitchStatement {
    nodeID: number;
  }

  export interface ThrowStatement  {
    nodeID: number;
  }

  export interface TryStatement {
    nodeID: number;
  }

  export interface WhileStatement  {
    nodeID: number;
  }

  export interface DoWhileStatement  {
    nodeID: number;
  }

  export interface ForStatement  {
    nodeID: number;
  }

  export interface ForInStatement  {
    nodeID: number;
  }

  export interface ForOfStatement  {
    nodeID: number;
  }

  export interface VariableDeclaration {
    nodeID: number;
  }

  export interface ClassDeclaration  {
    nodeID: number;
  }

  export interface ThisExpression  {
    nodeID: number;
  }

  export interface ArrayExpression  {
    nodeID: number;
  }

  export interface ObjectExpression {
    nodeID: number;
  }

  export interface YieldExpression  {
    nodeID: number;
  }

  export interface UnaryExpression {
    nodeID: number;
  }

  export interface UpdateExpression  {
    nodeID: number;
  }

  export interface BinaryExpression  {
    nodeID: number;
  }

  export interface AssignmentExpression {
    nodeID: number;
  }

  export interface LogicalExpression  {
    nodeID: number;
  }

  export interface MemberExpression  {
    nodeID: number;
  }

  export interface ConditionalExpression {
    nodeID: number;
  }

  export interface SimpleCallExpression  {
    nodeID: number;
  }

  export interface NewExpression  {
    nodeID: number;
  }

  export interface SequenceExpression {
    nodeID: number;
  }

  export interface TemplateLiteral  {
    nodeID: number;
  }

  export interface TaggedTemplateExpression  {
    nodeID: number;
  }

  export interface ClassExpression {
    nodeID: number;
  }

  export interface MetaProperty  {
    nodeID: number;
  }

  export interface Property  {
    nodeID: number;
  }

  export interface AssignmentProperty {
    nodeID: number;
  }

  export interface Super  {
    nodeID: number;
  }

  export interface TemplateElement  {
    nodeID: number;
  }

  export interface SpreadElement  {
    nodeID: number;
  }

  export interface ObjectPattern {
    nodeID: number;
  }

  export interface ArrayPattern  {
    nodeID: number;
  }

  export interface RestElement  {
    nodeID: number;
  }

  export interface AssignmentPattern {
    nodeID: number;
  }

  export interface ClassBody  {
    nodeID: number;
  }

  export interface MethodDefinition {
    nodeID: number;
  }

  export interface ImportDeclaration {
    nodeID: number;
  }

  export interface ExportNamedDeclaration {
    nodeID: number;
  }

  export interface ExportDefaultDeclaration {
    nodeID: number;
  }

  export interface ExportAllDeclaration  {
    nodeID: number;
  }

  export interface ImportSpecifier  {
    nodeID: number;
  }

  export interface ImportDefaultSpecifier  {
    nodeID: number;
  }

  export interface ImportNamespaceSpecifier {
    nodeID: number;
  }

  export interface ExportSpecifier  {
    nodeID: number;
  }
}