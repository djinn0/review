/* This file generates and styles a Navigation Bar on page load */
/* Add <script src="navBarSelector.js"></script> and <style> tag to <head>  */
window.addEventListener('load', (event) => { 
    if (window.innerWidth < 1000){generateMobileNavBar();}
    else{generateSelectorNavBar();}
    generateSyling();
});



function generateSelectorNavBar() {
    /* - Elements of Navigation bar  (e = Element, edc = dropdown content, dm = dropdown menu)*/
    var b = document.getElementsByTagName("body")[0];
    var h = document.getElementsByTagName('head')[0];
    var e1 = '<li class="navigation-element"><a href="index.html">Sex Toy Ahoy</a></li>';
    var e2 = '<li class="navigation-element"><a href="recent.html">New Reviews</a></li>';
    var edc1 = '<a href="menu.html">Reviews</a>'; 
    var edc2 = '<a href="ArticleList3.html">Articles</a>'; 
    var edc3 = '<a href="gridPractice2.html">About</a>';
    var edm = '<div class="dropdown-content">' + edc1 + edc2 + edc3 + '</div>';
    var e3 = '<li class="navigation-element" id="dropdown"><a href="#">Menu&#9662;</a>' + edm + '</li>';
    var c1 = '<br id="b1"><br id="b2"><div class="converter-bar" id="cb"></div>' /* Adds a div for a unit converter below the nav bar. */
    b.insertAdjacentHTML('afterbegin','<div id="nbsContainer"><ul class="navigation-bar" id="nbs">' + e1 + e2 + e3 + '</ul>' + '</div>');

}

function generateMobileNavBar(){
    /* Elements of Navigation Bar e = element*/
    var b = document.getElementsByTagName("body")[0];
    var e1 = "<a class='test' href='menu.html'>Reviews</a>";
    var e2 = "<a class='test' href='ArticleList3.html'>Articles</a>";
    var e3 = "<a class='test' href='gridPractice2.html'>About</a>";
    b.insertAdjacentHTML('afterbegin', "<details class='navigation'><summary class='navigation'><a href='index.html'>Ahoy &#9096</a></summary><div>" + e1 + e2 + e3 + "</div></details>");
    }

function generateSyling()
{    var s = document.getElementsByTagName("style")[0];
    
    /* Styling of mobile Navigation Bar (sm = Styling Mobile) */
    var sm0 = "details.navigation { position: -webkit-sticky; position: sticky; top: 0; }";
    var sm1 = "details.navigation > summary { margin: auto; width: 100%; text-align: center; color: white; font-size: 4vmin; background-color: #333; padding: 0.5rem 1rem; text-decoration: none; }";
    var sm2 = "details.navigation > div { margin: auto; width: 100%; background-color: #333; margin-top: 0; padding: 1rem; color: white;}";
    var sm3 = "summary.navigation {list-style: none; display: flex; justify-content: space-between; }";
    var sm4 = "summary.navigation > a { text-decoration: none; color: white; }";
    var sm5 = ".test{ font-size: 4vmin; text-decoration: none; color: white; margin-left: 2rem; display: block;}";
    var sm6 = 'summary.navigation:after{ content: "\u2630";}';
    var sm7 = 'details.navigation[open] summary.navigation:after{ content: "\u00D7";}';

    /* - Styling of Navigation Bar (sn = Styling Navigation) */
    var sn1 = ' .navigation-bar { list-style-type: none; margin: 0; padding: 0; background-color: #333; position: fixed; top: 0; width: 100%; z-index: 11;} ';	
    var sn2 = ' .navigation-element {float: left;}' ;
    var sn3 = ' .navigation-element a{display: inline-block; padding: 10px 6px; text-decoration: none; color: white;}' ;
    var sn4 = ' .navigation-element a:hover{ background-color: #111}'
    var sn5 = ' .dropdown-content {display: none; position: absolute; background-color: #333; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); }';
    var sn6 = ' #dropdown:hover .dropdown-content {display: block;}'; /*display menu content on hover */
    var sn7 = ' .dropdown-content a{display: block;}';
    /* insert styling */
    s.insertAdjacentHTML('beforeend', sn1 + sn2 + sn3 + sn4 + sn5 + sn6 + sn7 + sm0 + sm1 + sm2 + sm3 + sm4 + sm5 + sm6 + sm7); 

}


