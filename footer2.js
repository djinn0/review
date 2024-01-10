/* This file generates and styles a footer bar on page load */
/* Add <script src="footer.js"></script> and <style> tag to <head>  */
window.addEventListener('load', (event) => { 
    generateFooter();
});

function generateFooter()
{
  var x = document.getElementsByTagName("body")[0];
  let d = new Date();
  let n = d.getFullYear(); /* Adds current year to footer */
  let e1 = '<a href="contact.html">Contact</a>';
  let e2 = '<a href="disclosure.html">SexToyAhoy &copy ${n}</a>';
  let e3 = '<a href="disclosure.html">Disclosure</a>';
  let element = '<div id="element">' + e1 + e2 + e3 + '</div>';
}
