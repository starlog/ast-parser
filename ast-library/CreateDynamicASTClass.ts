//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import { getLogger } from './logger';
import Dummy from './Dummy';
import ArrayExpression from './ArrayExpression';
import ArrayPattern from './ArrayPattern';
import ArrowFunctionExpression from './ArrowFunctionExpression';
import AssignmentExpression from './AssignmentExpression';
import AssignmentPattern from './AssignmentPattern';
import AwaitExpression from './AwaitExpression';
import BinaryExpression from './BinaryExpression';
import BlockStatement from './BlockStatement';
import BooleanLiteral from './BooleanLiteral';
import CallExpression from './CallExpression';
import CommentBlock from './CommentBlock';
import CommentLine from './CommentLine';
import ConditionalExpression from './ConditionalExpression';
import ExportDefaultDeclaration from './ExportDefaultDeclaration';
import ExpressionStatement from './ExpressionStatement';
import ForStatement from './ForStatement';
import Identifier from './Identifier';
import IfStatement from './IfStatement';
import ImportDeclaration from './ImportDeclaration';
import ImportDefaultSpecifier from './ImportDefaultSpecifier';
import ImportNamespaceSpecifier from './ImportNamespaceSpecifier';
import ImportSpecifier from './ImportSpecifier';
import JSXAttribute from './JSXAttribute';
import JSXClosingElement from './JSXClosingElement';
import JSXElement from './JSXElement';
import JSXEmptyExpression from './JSXEmptyExpression';
import JSXExpressionContainer from './JSXExpressionContainer';
import JSXFragment from './JSXFragment';
import JSXIdentifier from './JSXIdentifier';
import JSXOpeningElement from './JSXOpeningElement';
import JSXSpreadAttribute from './JSXSpreadAttribute';
import JSXText from './JSXText';
import LogicalExpression from './LogicalExpression';
import MemberExpression from './MemberExpression';
import NewExpression from './NewExpression';
import NullLiteral from './NullLiteral';
import NumericLiteral from './NumericLiteral';
import ObjectExpression from './ObjectExpression';
import ObjectPattern from './ObjectPattern';
import ObjectProperty from './ObjectProperty';
import OptionalCallExpression from './OptionalCallExpression';
import OptionalMemberExpression from './OptionalMemberExpression';
import RegExpLiteral from './RegExpLiteral';
import RestElement from './RestElement';
import ReturnStatement from './ReturnStatement';
import SequenceExpression from './SequenceExpression';
import SpreadElement from './SpreadElement';
import StringLiteral from './StringLiteral';
import SwitchStatement from './SwitchStatement';
import TSAnyKeyword from './TSAnyKeyword';
import TSArrayType from './TSArrayType';
import TSAsExpression from './TSAsExpression';
import TSBooleanKeyword from './TSBooleanKeyword';
import TSFunctionType from './TSFunctionType';
import TSIndexSignature from './TSIndexSignature';
import TSIntersectionType from './TSIntersectionType';
import TSLiteralType from './TSLiteralType';
import TSMethodSignature from './TSMethodSignature';
import TSNullKeyword from './TSNullKeyword';
import TSNumberKeyword from './TSNumberKeyword';
import TSObjectKeyword from './TSObjectKeyword';
import TSParenthesizedType from './TSParenthesizedType';
import TSPropertySignature from './TSPropertySignature';
import TSQualifiedName from './TSQualifiedName';
import TSStringKeyword from './TSStringKeyword';
import TSTupleType from './TSTupleType';
import TSTypeAnnotation from './TSTypeAnnotation';
import TSTypeLiteral from './TSTypeLiteral';
import TSTypeOperator from './TSTypeOperator';
import TSTypeParameterInstantiation from './TSTypeParameterInstantiation';
import TSTypeQuery from './TSTypeQuery';
import TSTypeReference from './TSTypeReference';
import TSUndefinedKeyword from './TSUndefinedKeyword';
import TSUnionType from './TSUnionType';
import TSVoidKeyword from './TSVoidKeyword';
import TaggedTemplateExpression from './TaggedTemplateExpression';
import TemplateElement from './TemplateElement';
import TemplateLiteral from './TemplateLiteral';
import ThrowStatement from './ThrowStatement';
import TryStatement from './TryStatement';
import UnaryExpression from './UnaryExpression';
import VariableDeclaration from './VariableDeclaration';
import VariableDeclarator from './VariableDeclarator';

export const classes = [
  ArrayExpression,
  ArrayPattern,
  ArrowFunctionExpression,
  AssignmentExpression,
  AssignmentPattern,
  AwaitExpression,
  BinaryExpression,
  BlockStatement,
  BooleanLiteral,
  CallExpression,
  CommentBlock,
  CommentLine,
  ConditionalExpression,
  ExportDefaultDeclaration,
  ExpressionStatement,
  ForStatement,
  Identifier,
  IfStatement,
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportNamespaceSpecifier,
  ImportSpecifier,
  JSXAttribute,
  JSXClosingElement,
  JSXElement,
  JSXEmptyExpression,
  JSXExpressionContainer,
  JSXFragment,
  JSXIdentifier,
  JSXOpeningElement,
  JSXSpreadAttribute,
  JSXText,
  LogicalExpression,
  MemberExpression,
  NewExpression,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  ObjectPattern,
  ObjectProperty,
  OptionalCallExpression,
  OptionalMemberExpression,
  RegExpLiteral,
  RestElement,
  ReturnStatement,
  SequenceExpression,
  SpreadElement,
  StringLiteral,
  SwitchStatement,
  TSAnyKeyword,
  TSArrayType,
  TSAsExpression,
  TSBooleanKeyword,
  TSFunctionType,
  TSIndexSignature,
  TSIntersectionType,
  TSLiteralType,
  TSMethodSignature,
  TSNullKeyword,
  TSNumberKeyword,
  TSObjectKeyword,
  TSParenthesizedType,
  TSPropertySignature,
  TSQualifiedName,
  TSStringKeyword,
  TSTupleType,
  TSTypeAnnotation,
  TSTypeLiteral,
  TSTypeOperator,
  TSTypeParameterInstantiation,
  TSTypeQuery,
  TSTypeReference,
  TSUndefinedKeyword,
  TSUnionType,
  TSVoidKeyword,
  TaggedTemplateExpression,
  TemplateElement,
  TemplateLiteral,
  ThrowStatement,
  TryStatement,
  UnaryExpression,
  VariableDeclaration,
  VariableDeclarator,
];

const logger = getLogger();

function findClass(search) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].name === search) {
      return i;
    }
  }
  return -1;
}
//-------------------------------------------------------------------------------------------------
export function CreateDynamicASTClass(obj) {
  try {
    if (!obj.type) {
      logger.error(`Error at createDynamicASTClass. No class type exists. type is ${obj.type} ${JSON.stringify(obj)}`);
      return null;
    }
    return new classes[findClass(obj.type)](obj);
  } catch (ex) {
    // logger.error(`Error at createDynamicASTClass classType: ${obj.type}, ${JSON.stringify(obj)} ${ex}`);
    logger.error(`NEED NEW ${obj.type}`);
    // eslint-disable-next-line no-param-reassign
    obj.type = 'Dummy';
    return new Dummy(obj);
  }
}

//-------------------------------------------------------------------------------------------------
export function utilASTRemoveLocationInfo(objectData) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in objectData) {
    if ((key === 'start') || (key === 'end') || (key === 'loc') || (key === '__clone')) {
      // eslint-disable-next-line no-param-reassign
      delete objectData[key];
    } else if (typeof objectData[key] === 'object') {
      utilASTRemoveLocationInfo(objectData[key]);
    }
  }
  return objectData;
}
