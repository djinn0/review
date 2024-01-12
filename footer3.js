window.addEventListener('load', (event) => { 
    generateFooter();
});

function generateFooter()
{
    var x = document.getElementsByTagName("body")[0];
    
  /* content and screen heights */
  const body = document.body;
  const html = document.documentElement;
  let contentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  let screenHeight = screen.height; 
  let a1 = body.scrollHeight;
  let a2 = body.offsetHeight;
  let a3 = html.clientHeight; <!-- doesn't change -->
  let a4 = html.scrollHeight;
  let a5 = html.offsetHeight;
 /*
    if (screenHeight > contentHeight ) {
     var c1 = 'screen';
  } else {
     var c1 = 'content';
  }
  */
  x.insertAdjacentHTML('beforeend', '<h1>Goodbye sky 3</h1>');
    x.insertAdjacentHTML('beforeend', '<h1>' + screenHeight +'</h1>');
    x.insertAdjacentHTML('beforeend', '<h1>' + contentHeight +'</h1>');
    x.insertAdjacentHTML('beforeend', '<h1>' + a1 + ' ' + a2 + ' ' + a3 + ' ' + a4 + ' ' + a5 + '</h1>');
}
