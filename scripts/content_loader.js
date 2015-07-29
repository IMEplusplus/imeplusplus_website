function load_path(URL) {
  // Recieves the URL and returns the location of the requested content.
  var data_path = URL;
  if (URL == "/") {
      data_path = "/home.html";
  }
  return "contents" + data_path;
}

function wrapper(selector) {
  // Remove the default behavior of all "a" tags inside the selector object
  // that are part of the class "local" and use jquery to load the website
  // content via AJAX.
  return function newClickBehavior() {
    $(selector + " a.local").click(function(e) {
      e.preventDefault();
      history.pushState({}, "", e.currentTarget.pathname);
      var path = e.currentTarget.pathname;
      path = load_path(path);
      $("main").load(path, wrapper("main"));
    });
  }
}

$(document).ready(function() {
  var path = window.location.pathname;
  path = load_path(path);
  $("nav").load("navbar.html", wrapper("nav"));
  $("footer").load("footer.html", wrapper("footer"));
  $("main").load(path, wrapper("main"));
});

window.onpopstate = function(event) {
  $("main").load("contents" + event.target.location.pathname, wrapper("main"));
};
