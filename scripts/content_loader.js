function newClickBehavior() {
  $("a").click(function(e) {
    e.preventDefault();
    // More on history object on:
    // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history
    history.pushState({}, "", e.currentTarget.href);
    $("main").load("contents" + e.currentTarget.href, newClickBehavior);
  });
}

$(document).ready(function() {
  var path = window.location.pathname;
  path = path.replace(/^(\/website\/)/,"");
  if (path == "") {
      path = "index.html";
  }
  $("nav").load("navbar.html");
  $("footer").load("footer.html");
  $("main").load("contents/" + path, newClickBehavior);
});
