//-------------------------------------------------------------------------------------------------
// ast manipulation library
//-------------------------------------------------------------------------------------------------
import { getLogger } from './logger';
import Dummy from './Dummy';
import ImportDeclaration from './ImportDeclaration';
import ImportDefaultSpecifier from './ImportDefaultSpecifier';
import StringLiteral from './StringLiteral';
import ImportSpecifier from './ImportSpecifier';
import ImportNamespaceSpecifier from './ImportNamespaceSpecifier';
import Identifier from './Identifier';
import CommentLine from './CommentLine';
import TSPropertySignature from './TSPropertySignature';
import TSMethodSignature from './TSMethodSignature';
import TSIndexSignature from './TSIndexSignature';
import CommentBlock from './CommentBlock';
import TSAnyKeyword from './TSAnyKeyword';
import TSArrayType from './TSArrayType';
import TSBooleanKeyword from './TSBooleanKeyword';
import TSFunctionType from './TSFunctionType';
import TSLiteralType from './TSLiteralType';
import TSNumberKeyword from './TSNumberKeyword';
import TSObjectKeyword from './TSObjectKeyword';
import TSStringKeyword from './TSStringKeyword';
import TSTupleType from './TSTupleType';
import TSTypeAnnotation from './TSTypeAnnotation';
import TSTypeLiteral from './TSTypeLiteral';
import TSTypeOperator from './TSTypeOperator';
import TSTypeReference from './TSTypeReference';
import TSUnionType from './TSUnionType';
import NumericLiteral from './NumericLiteral';
import TSIntersectionType from './TSIntersectionType';
import TSNullKeyword from './TSNullKeyword';
import TSParenthesizedType from './TSParenthesizedType';
import TSQualifiedName from './TSQualifiedName';
import TSTypeQuery from './TSTypeQuery';
import TSUndefinedKeyword from './TSUndefinedKeyword';
import TSVoidKeyword from './TSVoidKeyword';
import ExportDefaultDeclaration from './ExportDefaultDeclaration';
import CallExpression from './CallExpression';
import VariableDeclaration from './VariableDeclaration';
import VariableDeclarator from './VariableDeclarator';
import ArrowFunctionExpression from './ArrowFunctionExpression';
import ObjectExpression from './ObjectExpression';
import ObjectPattern from './ObjectPattern';
import TaggedTemplateExpression from './TaggedTemplateExpression';
import TSAsExpression from './TSAsExpression';
import BinaryExpression from './BinaryExpression';
import BlockStatement from './BlockStatement';
import MemberExpression from './MemberExpression';
import ObjectProperty from './ObjectProperty';
import RestElement from './RestElement';
import TemplateLiteral from './TemplateLiteral';
import ArrayExpression from './ArrayExpression';
import ArrayPattern from './ArrayPattern';
import AssignmentPattern from './AssignmentPattern';
import AwaitExpression from './AwaitExpression';
import BooleanLiteral from './BooleanLiteral';
import ConditionalExpression from './ConditionalExpression';
import ExpressionStatement from './ExpressionStatement';
import ForStatement from './ForStatement';
import IfStatement from './IfStatement';
import JSXElement from './JSXElement';
import JSXFragment from './JSXFragment';
import LogicalExpression from './LogicalExpression';
import NewExpression from './NewExpression';
import NullLiteral from './NullLiteral';
import OptionalCallExpression from './OptionalCallExpression';
import OptionalMemberExpression from './OptionalMemberExpression';
import RegExpLiteral from './RegExpLiteral';
import ReturnStatement from './ReturnStatement';
import SpreadElement from './SpreadElement';
import SwitchStatement from './SwitchStatement';
import TemplateElement from './TemplateElement';
import TryStatement from './TryStatement';
import UnaryExpression from './UnaryExpression';
import AssignmentExpression from './AssignmentExpression';
import SequenceExpression from './SequenceExpression';
import TSTypeParameterInstantiation from './TSTypeParameterInstantiation';
import JSXOpeningElement from './JSXOpeningElement';
import JSXAttribute from './JSXAttribute';
import JSXExpressionContainer from './JSXExpressionContainer';
import JSXIdentifier from './JSXIdentifier';
import JSXClosingElement from './JSXClosingElement';
import JSXText from './JSXText';

const classes = [
  ImportDeclaration,
  ImportDefaultSpecifier,
  StringLiteral,
  ImportSpecifier,
  ImportNamespaceSpecifier,
  Identifier,
  CommentLine,
  TSPropertySignature,
  TSMethodSignature,
  TSIndexSignature,
  CommentBlock,
  TSAnyKeyword,
  TSArrayType,
  TSBooleanKeyword,
  TSFunctionType,
  TSLiteralType,
  TSNumberKeyword,
  TSObjectKeyword,
  TSStringKeyword,
  TSTupleType,
  TSTypeAnnotation,
  TSTypeLiteral,
  TSTypeOperator,
  TSTypeReference,
  TSUnionType,
  NumericLiteral,
  TSIntersectionType,
  TSNullKeyword,
  TSParenthesizedType,
  TSQualifiedName,
  TSTypeQuery,
  TSUndefinedKeyword,
  TSVoidKeyword,
  ExportDefaultDeclaration,
  CallExpression,
  VariableDeclaration,
  VariableDeclarator,
  ArrowFunctionExpression,
  ObjectExpression,
  ObjectPattern,
  TaggedTemplateExpression,
  TSAsExpression,
  BinaryExpression,
  BlockStatement,
  MemberExpression,
  ObjectProperty,
  RestElement,
  TemplateLiteral,
  ArrayExpression,
  ArrayPattern,
  AssignmentPattern,
  AwaitExpression,
  BooleanLiteral,
  ConditionalExpression,
  ExpressionStatement,
  ForStatement,
  IfStatement,
  JSXElement,
  JSXFragment,
  LogicalExpression,
  NewExpression,
  NullLiteral,
  OptionalCallExpression,
  OptionalMemberExpression,
  RegExpLiteral,
  ReturnStatement,
  SpreadElement,
  SwitchStatement,
  TemplateElement,
  TryStatement,
  UnaryExpression,
  AssignmentExpression,
  SequenceExpression,
  TSTypeParameterInstantiation,
  JSXOpeningElement,
  JSXAttribute,
  JSXExpressionContainer,
  JSXIdentifier,
  JSXClosingElement,
  JSXText,
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
