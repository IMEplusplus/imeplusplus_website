var routes = {};
function route(path, templateId) {
  routes[path] = templateId;
};

var el = null, last = null;
function router() {
  el = el || $('#view');
  var url = location.hash || '#/';

  var route = routes[url];
  if (el && route) {
    el.load(route, function() {
        $("html, body").animate({ scrollTop: 0 }, 'fast');
    });
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
