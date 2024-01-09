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
  let f1 = `<a href="disclosure.html">&copy ToyAhoy ${n}</a>`
}
