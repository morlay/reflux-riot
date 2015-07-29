exports.ActionMethods = require('reflux/src/ActionMethods');
exports.ListenerMethods = require('reflux/src/ListenerMethods');
exports.PublisherMethods = require('reflux/src/PublisherMethods');
exports.StoreMethods = require('reflux/src/StoreMethods');
exports.createAction = require('reflux/src/createAction');
exports.createStore = require('reflux/src/createStore');

exports.listenTo = require('./mixins/listenTo')

var maker = require('reflux/src/joins').staticJoinCreator;

exports.joinTrailing = exports.all = maker("last"); // Reflux.all alias for backward compatibility
exports.joinLeading = maker("first");
exports.joinStrict = maker("strict");
exports.joinConcat = maker("all");

var _ = exports.utils = require('reflux/src/utils');

exports.EventEmitter = _.EventEmitter;
exports.Promise = _.Promise;

/**
 * Convenience function for creating a set of actions
 *
 * @param definitions the definitions for the actions to be created
 * @returns an object with actions of corresponding action names
 */
exports.createActions = function (definitions) {
  var actions = {};
  for (var k in definitions) {
    if (definitions.hasOwnProperty(k)) {
      var val = definitions[k],
        actionName = _.isObject(val) ? k : val;

      actions[actionName] = exports.createAction(val);
    }
  }
  return actions;
};

/**
 * Sets the eventmitter that Reflux uses
 */
exports.setEventEmitter = function (ctx) {
  exports.EventEmitter = _.EventEmitter = ctx;
};


/**
 * Sets the Promise library that Reflux uses
 */
exports.setPromise = function (ctx) {
  exports.Promise = _.Promise = ctx;
};


/**
 * Sets the Promise factory that creates new promises
 * @param {Function} factory has the signature `function(resolver) { return [new Promise]; }`
 */
exports.setPromiseFactory = function (factory) {
  _.createPromise = factory;
};


/**
 * Sets the method used for deferring actions and stores
 */
exports.nextTick = function (nextTick) {
  _.nextTick = nextTick;
};

/**
 * Provides the set of created actions and stores for introspection
 */
exports.__keep = require('reflux/src/Keep');

/**
 * Warn if Function.prototype.bind not available
 */
if (!Function.prototype.bind) {
  console.error(
    'Function.prototype.bind not available. ' +
    'ES5 shim required. ' +
    'https://github.com/spoike/refluxjs#es5'
  );
}
