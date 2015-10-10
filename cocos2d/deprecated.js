var js = cc.js;

var INFO = '"%s" is deprecated, use "%s" instead please.';

/**
 * Inject all of the properties in source objects to target object and return the target object.
 * @param {object} target
 * @param {object} *sources
 * @name cc.inject
 * @memberof cc
 * @deprecated
 * @returns {object}
 */
js.get(cc, "inject", function () {
    cc.warn(INFO, 'cc.inject', 'cc.js.addon');
    return js.addon;
});


/**
 * Copy all of the properties in source objects to target object and return the target object.
 * @param {object} target
 * @param {object} *sources
 * @name cc.extend
 * @memberof cc
 * @deprecated
 * @returns {object}
 */
js.get(cc, "extend", function () {
    cc.warn(INFO, 'cc.extend', 'cc.js.mixin');
    return js.mixin;
};

/**
 * Create new DOM element by tag name
 * @name cc.newElement
 * @memberof cc
 * @deprecated
 * @returns {object}
 */
js.get(cc, "newElement", function () {
    cc.warn(INFO, 'cc.newElement', 'document.createElement');
    return document.createElement;
};

/**
 * Check the obj whether is function or not
 * @name cc.isFunction
 * @memberof cc
 * @deprecated
 * @param {*} obj
 * @returns {boolean}
 */
js.get(cc, "isFunction", function () {
    cc.warn(INFO, 'cc.isFunction', 'cc.js.isFunction');
    return js.isFunction;
};

/**
 * Check the obj whether is number or not
 * @name cc.isNumber
 * @memberof cc
 * @deprecated
 * @param {*} obj
 * @returns {boolean}
 */
js.get(cc, "isNumber", function () {
    cc.warn(INFO, 'cc.isNumber', 'cc.js.isNumber');
    return js.isNumber;
};

/**
 * Check the obj whether is string or not
 * @name cc.isString
 * @memberof cc
 * @deprecated
 * @param {*} obj
 * @returns {boolean}
 */
js.get(cc, "isString", function () {
    cc.warn(INFO, 'cc.isString', 'cc.js.isString');
    return js.isString;
};

/**
 * Check the obj whether is array or not
 * @name cc.isArray
 * @memberof cc
 * @deprecated
 * @param {*} obj
 * @returns {boolean}
 */
js.get(cc, "isArray", function () {
    cc.warn(INFO, 'cc.isArray', 'cc.js.isArray');
    return js.isArray;
};

/**
 * Check the obj whether is undefined or not
 * @name cc.isUndefined
 * @memberof cc
 * @deprecated
 * @param {*} obj
 * @returns {boolean}
 */
js.get(cc, "isUndefined", function () {
    cc.warn(INFO, 'cc.isUndefined', 'cc.js.isUndefined');
    return js.isUndefined;
};

/**
 * Check the obj whether is object or not
 * @name cc.isObject
 * @memberof cc
 * @deprecated
 * @param {*} obj
 * @returns {boolean}
 */
js.get(cc, "isObject", function () {
    cc.warn(INFO, 'cc.isObject', 'cc.js.isObject');
    return js.isObject;
};