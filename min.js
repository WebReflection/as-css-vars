/*! (c) 2018, Andrea Giammarchi, (ISC) */
var asCSSVars=function(n){var u=/([a-z])([A-Z]+)/g;return function(n,r){return arguments.length<2?t("",n):t(n+"-",r)};function t(r,t){var e=[];return nmsp=r,n(t).forEach(function(n){e.push("--"+r+n.replace(u,a)+":"+t[n])}),e.length?e.join(";")+";":""}function a(n,r,t){return r+"-"+t.toLowerCase()}}(Object.keys);
