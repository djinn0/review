window.addEventListener('load', (event) => { 
    generateFooter();
});

function generateFooter()
{
    var x = document.getElementsByTagName("body")[0];
    
    x.insertAdjacentHTML('beforeend', '<div class="footer">test 3</div>');

  var s = document.getElementsByTagName("style")[0];
  /* content and screen heights */
  const body = document.body;
  const html = document.documentElement;
  var contentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  var screenHeight = screen.height; 
 if (screenHeight > contentHeight ) {
     alert(hello world);
  } else {
    alert(goodbye sky);
  }
  var sf1 = 'div.footer {position: fixed; bottom: 0; z-index: 11; width: 100%; background-color: green; }';
  s.insertAdjacentHTML('beforeend', sf1);
}
