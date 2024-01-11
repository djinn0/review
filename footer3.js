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
  /*
    if (screenHeight > contentHeight ) {
     var c1 = 'screen';
  } else {
     var c1 = 'content';
  }
  */
  x.insertAdjacentHTML('beforeend', '<h1>' + contentHeight + ' ' + screenHeight '</h1>');
}
