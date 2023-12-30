window.addEventListener('load', (event) => { 
    generateMobileNavBar();
});

function generateMobileNavBar(){
  var b = document.getElementsByTagName("body")[0];
  var e1 = '<div><a href='index.html'>Home</a></div>';
  var e2 = '<div><a href='index.html'>Home</a></div>';
  var e3 = '<div><a href='index.html'>Home</a></div>';
  b.insertAdjacentHTML('afterbegin',"<details><summary>Home</summary>" + e1 + e2 + e3 + "</details>");
}

function generateStyling(){
  var s = document.getElementsByTagName("style")[0]
  var sm1 = 'details > summary {margin: auto; width: 100%; text-align: center;  background-color: #333;  padding: 0.5rem 1rem; }';
  var sm2 = 'summary {list-style: none; display: flex; justify-content: space-between;}';
  var sm3 = 'summary:after{content: "\2630";}';
  var sm4 = 'details[open] summary:after{ content: "\00D7";}';
  s.insertAdjacentHTML('beforeend', sm1 + sm2 + sm3 + sm4);;
}



