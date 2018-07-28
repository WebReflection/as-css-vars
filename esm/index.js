var asCSSVars = (function (keys) {
  var re = /([a-z])([A-Z]+)/g;
  return function asCSSVars(prefix, object) {
    return arguments.length < 2 ?
      asString('', prefix) :
      asString(prefix + '-', object);
  };
  function asString(prefix, object) {
    var css = [];
    nmsp = prefix;
    keys(object).forEach(function push(key) {
      css.push('--' + prefix + key.replace(re, place) + ':' + object[key]);
    });
    return css.length ? (css.join(';') + ';') : '';
  }
  function place($0, $1, $2) {
    return $1 + '-' + $2.toLowerCase();
  }
}(Object.keys));
export default asCSSVars;
