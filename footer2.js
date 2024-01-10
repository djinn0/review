/* This file generates and styles a footer bar on page load */
/* Add <script src="footer.js"></script> and <style> tag to <head>  */
window.addEventListener('load', (event) => { 
    generateFooter();
});

function generateFooter()
{
  /* generate footer bar content */
  var x = document.getElementsByTagName("body")[0];
  let anchor = '<div id="anchor">' + "\u2693" + '</div>';
  let d = new Date();
  let n = d.getFullYear(); /* Adds current year to footer */
  let e1 = '<a href="contact.html">Contact</a>';
  let e2 = '<a href="disclosure.html">SexToyAhoy &copy' + n + '</a>';
  let e3 = '<a href="disclosure.html">Disclosure 1</a>';
  let element = '<div id="element">' + e1 + e2 + e3 + '</div>';
  x.insertAdjacentHTML('beforeend', '<div class="footer">' + anchor + element + '</div>');

  /* add styling */
  var s = document.getElementsByTagName("style")[0];
  
}
