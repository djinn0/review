/* This file generates and styles a footer bar on page load */
/* Add <script src="footer.js"></script> and <style> tag to <head>  */
window.addEventListener('load', (event) => { 
    generateFooter();
});

function generateFooter()
{
  /* generate footer bar content */
  var x = document.getElementsByTagName("body")[0];
  let d = new Date();
  let n = d.getFullYear(); /* Adds current year to footer */
  let e1 = '<a href="contact.html">Contact</a>';
  let e2 = '<a href="disclosure.html">Sex Toy Ahoy &copy' + n + '</a>';
  let e3 = '<a href="disclosure.html">Disclosure</a>';
  let element = '<div id="element">' + e1 + e2 + e3 + '</div>';
  let anchor = '<div id="anchor">' + "\u2693" + '</div>';
  x.insertAdjacentHTML('beforeend', '<div class="footer" id="footer">' + element + anchor + '</div>');
  
  /* styling */
  var s = document.getElementsByTagName("style")[0];
  /* 
  const body = document.body;
  const html = document.documentElement;
  var contentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  */
  var contentHeight = Math.max(document.body.scrollHeight, document.documentElement.offsetHeight);
  var screenHeight = screen.height; 
  if (screenHeight > contentHeight ) {
    var sf1 = 'div.footer {position: fixed; bottom: 0; margin-top: 1.5vh; z-index: 11; width: 100%; background-color: #333; }';
  } else {
    var sf1 = 'div.footer {position: static; margin-top: 1.5vh; z-index: 11; width: 100%; background-color: #333; }';
  }
  var sf2 = '#anchor{color: white; font-size: 1.75em; text-align: center;}';
  var sf3 = '#element { padding: 8px 40px; display: flex; justify-content: space-between; }';
  var sf4 = '#element > a { color: white; text-decoration: none; font-size: 1.5em; display: inline-block; }';
  /* styling mobile */
  var sm1 = 'div.footer{margin-top: 0;}';
  var sm2 = '#anchor{color: white; font-size: 6vmin; text-align: center;}';
  var sm3 = '#element > a { color: white; text-decoration: none; font-size: 4vmin; display: inline-block; }';
  s.insertAdjacentHTML('beforeend', sf1 + sf2 + sf3 + sf4 );
  s.insertAdjacentHTML('beforeend', '@media only screen and (max-width: 1000px){' + sm1 + sm2 + sm3 +'}');
}
    
function removeFooter() {
  const element = document.getElementById("footer");
  element.remove();
}
