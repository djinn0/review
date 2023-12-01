/* This file generates and styles a Navigation Bar on page load */
/* Add <script src="navBarSelector.js"></script> and <style> tag to <head>  */
window.addEventListener('load', (event) => { 
    if (window.innerWidth < 1000){generateMobileNavBar();}
    else{generateSelectorNavBar();}
    generateSyling();
    var cs = document.getElementById('select');
    cs.addEventListener('click', generateConverter); 
    window.addEventListener('resize', replaceNavBar);
});



function generateSelectorNavBar() {
    /* - Elements of Navigation bar  (e = Element, edc = dropdown content, dm = dropdown menu)*/
    var b = document.getElementsByTagName("body")[0];
    var h = document.getElementsByTagName('head')[0];
    var e1 = '<li class="navigation-element"><a href="index.html">Home</a></li>';
    var e2 = '<li class="navigation-element"><a href="template.html">New Reviews</a></li>';
    var edc1 = '<a href="list2.html">Index</a>'; 
    var edc2 = '<a href="glossary.html">Glossary</a>'; 
    var edm = '<div class="dropdown-content">' + edc1 + edc2 + '</div>';
    var e3 = '<li class="navigation-element" id="dropdown"><a href="#">Menu&#9662;</a>' + edm + '</li>';
    var c1 = '<br id="b1"><br id="b2"><div class="converter-bar" id="cb"></div>' /* Adds a div for a unit converter below the nav bar. */
    b.insertAdjacentHTML('afterbegin','<div id="nbsContainer"><ul class="navigation-bar" id="nbs">' + e1 + e2 + e3 + '</ul>' + c1 + '</div>');

}

function generateMobileNavBar(){
    /* Elements of Navigation Bar e = element*/
    var b = document.getElementsByTagName("body")[0];
    var e1 = "<li class='navigation-element-mobile'><a href='index.html'>Home</a></li>"
    var e2 = "<li class='navigation-element-mobile'><a href='list2.html'>Review Index</a></li>"
    var e3 = "<li class='navigation-element-mobile'><a href='glossary.html'>Glossary</a></li>"
    var e4 = "<li class='navigation-element-mobile'><a href='#' class='con'>Converter</a><label class='Mswitch'><input type='checkbox' id='select'><span class='slider'></span></label></li>"
    var c1 = "<div class='converter-bar' id='cb'></div>"
    b.insertAdjacentHTML('afterbegin',"<div id='nbmContainer'><ul class='navigation-bar-mobile' id='nbm'>" + e1 + e2 + "</ul>" + c1 + "</div>");
}

function generateSyling()
{    var s = document.getElementsByTagName("style")[0];

    /* Styling of Sliding Switch */
    var ss1 = '.switch {position: relative; vertical-align: -12px; display: inline-block; width: 36px; height: 20px; } ' 
    var ss2 = '.Mswitch {position: relative; vertical-align: -16px; display: inline-block; width: 36px; height: 20px; } ' /* mobile slider */
    var ss3 = '.Mswitch input{opacity: 0; width: 0; height: 0;}'
    var ss4 = '.slider {position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #CCC; transition: .4s; border-radius: 34px;}'
    var ss5 = '.slider:before {position: absolute; content: ""; height: 16px; width: 16px; left: 2px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%;}'
    var ss6 = 'input:checked + .slider { background-color: #2196F3; }'
    var ss7 = 'input:checked + .slider:before { transform: translateX(16px); }'

    /* Styling of mobile Navigation Bar (sm = Styling Mobile) */
    var sm1 = '.navigation-bar-mobile{ list-style-type: none; margin: 0; padding: 0; width: 100%; z-index: 11; }';
    var sm2 = '.navigation-element-mobile{ padding: 8px 8px 8px 20px; background-color: #333; font-size: 36px; text-align: left; }'; 
    var sm3 = '.navigation-element-mobile a{ text-decoration: none; color: white; }';
    /*var sm4 = '.navigation-element-mobile:hover{ background-color: #111; padding: 8px; }';*/
    var sm5 = '.con{ padding-right: 8px; }' 

    /* - Styling of Navigation Bar (sn = Styling Navigation) */
    var sn1 = ' .navigation-bar { list-style-type: none; margin: 0; padding: 0; background-color: #333; position: fixed; top: 0; width: 100%; z-index: 11;} ';	
    var sn2 = ' .navigation-element {float: left;}' ;
    var sn3 = ' .navigation-element a{display: inline-block; padding: 10px 6px; text-decoration: none; color: white;}' ;
    var sn4 = ' .navigation-element a:hover{ background-color: #111}'
    var sn5 = ' .dropdown-content {display: none; position: absolute; background-color: #333; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); }';
    var sn6 = ' #dropdown:hover .dropdown-content {display: block;}'; /*display menu content on hover */
    var sn7 = ' .dropdown-content a{display: block;}';
    /* insert styling */
    s.insertAdjacentHTML('beforeend', sn1 + sn2 + sn3 + sn4 + sn5 + sn6 + sn7 + sm1 + sm2 + sm3 + sm5); 

}

function generateConverter(){
    /* Converter contents */
    var d = document.getElementById('cb');
    var inVal = '<input id="inputValue" type="number" value="1" min="0" max="10"></input>';
    var o1 = '<option>Cup</option>', o2 = '<option>Quart</option>', o3 = '<option>Gallon</option>', o4 ='<option>Ounce</option>', o5 = '<option>Milliliter</option>', o6 = '<option>Table Spoon</option>', o7 ='<option>Tea Spoon</option>';
    var inType = '<select id="inputType">' + o1 + o2 + o3 + o4 + o5 + o6 + o7 + '</select>';
    var outType = '<select id="outputType">' + o1 + o2 + o3 + o4 + o5 + o6 + o7 + '</select>';
    var cs = document.getElementById('select'); 
    var s = document.getElementsByTagName("style")[0];

    if (cs.checked == true){ /* If the switch is on generate converter bar */
        d.insertAdjacentHTML('afterbegin', 'Convert ' + inVal + inType + ' to ' + outType + ' <button id="cbtn">&rarr;</button>' + ': ' +  '<span id="out"></span>');
        document.getElementById('cbtn').addEventListener('click', convert);
        /* Converter styling (scb = styling converter bar) */
        var scb1 = ' .converter-bar{position: fixed; width: 100%; background-color: #333; color: white; padding: 6px 12px; margin: 0; z-index: 10;}'
        s.insertAdjacentHTML('beforeend', scb1)
        d.classList.add('converter-bar')
    }
    else {
        d.innerHTML = '';
        d.classList.remove('converter-bar'); /*this appears to completly remove the class not just the styling*/
    }
}

function convert(){
    var val = document.getElementById('inputValue').value;
    var inVal = Number(val);
    var inType = document.getElementById('inputType').value;
    var outType = document.getElementById('outputType').value;
    var outVal = 0;
    var y = 0;
    var z = 0;
    var dis = document.getElementById('display');
                
    
    /* Convert input value to cups */ 
    if (inType == 'Cup'){y = inVal}
    else if (inType == 'Quart'){y = inVal * 4}
    else if (inType == 'Gallon'){y = inVal * 16}
    else if (inType == 'Ounce'){y = inVal / 8}
    else if (inType == 'Milliliter'){y = inVal / 236.588 }
    else if (inType == 'Table Spoon'){y= inval / 16}
    else if (inType == 'Tea Spoon'){y = inVal / 48}
    
    /* Convert intermediate value in cups into final value */
    if (outType == 'Cup'){z = y}
    else if (outType == 'Quart'){z = y / 4}
    else if (outType == 'Gallon'){z = y / 16}
    else if (outType == 'Ounce'){z = y * 8}
    else if (outType == 'Milliliter'){z = y * 236.588 }
    else if (outType == 'Table Spoon'){z = y * 16}
    else if (outType == 'Tea Spoon'){z = y * 48}
    
    /* display output */
    document.getElementById('out').innerHTML = z + ' ' + outType + '(s)';
}


function replaceNavBar()
{
    var nbs = document.getElementById('nbsContainer');
    var nbm = document.getElementById('nbmContainer');
    
    if (nbs) nbs.remove();
    if (nbm) nbm.remove();

    if (window.innerWidth <= 1000) generateMobileNavBar();
    else generateSelectorNavBar();
    
}


