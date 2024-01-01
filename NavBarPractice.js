window.addEventListener('load', (event) => { 
    /*generateMobileNavBar();*/
    /*generateSyling();*/
    test();
});

/*
function generateMobileNavBar(){
  var b = document.getElementsByTagName("body")[0];
  var e1 = "<a class='test' href='list2.html'>Reviews</a>”;
  var e2 = "<a class='test' href='ArticleList2.html'>Articles</a>";
  var e3 = "<a class='test' href='gridPractice2.html'>About</a>";
  b.insertAdjacentHTML('afterbegin', "<details><summary>Home</summary><div>" + e1 + e2 + e3 + "</div></details>");
}

function generateStyling(){
  var s = document.getElementsByTagName("style")[0]
  var sm1 = "details > summary { margin: auto; width: 100%; text-align: center; color: white; font-size: 4vmin; background-color: #333; padding: 0.5rem 1rem;}";
  var sm2 = "details > div { margin: auto; width: 100%; background-color: #333; margin-top: 0; padding: 1rem; color: white;}";
  var sm3 = "summary {list-style: none; display: flex; justify-content: space-between; }";
  var sm4 = "summary:after{ content: "\2630";}";
  var sm5 = "details[open] summary:after{ content: "\00D7";}";
  var sm6 = ".test{ font-size: 4vmin; text-decoration: none; color: white; margin-left: 2rem; display: block;}";
  s.insertAdjacentHTML('beforeend', sm1 + sm2 + sm3 + sm4 + sm5 + sm6 );
}*/

function test() {
 var b = document.getElementsByTagName("body")[0];
 var e1 = "<div>hello goodbye</div>";
 var e2 = "<a href='index.html'>link 1</a>";
 var e3 = "<a href='index.html'>link 2</a>"
b.insertAdjacentHTML('afterbegin', "<details><summary>test 7</summary>" + e1 + e2 + e3 + "</details>");
}

