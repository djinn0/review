
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
    let f1 = `<li class="footer-element"><a href="https://www.linkedin.com/in/david-redd">&copy SexToyAhoy ${n}</a></li>`
    let f2 = '<li class="footer-element"><a href="about.html">test 4</a></li>'
    let f3 = '<li class="footer-element"><a href="aboutme.html">Contact</a></li>'
    x.insertAdjacentHTML('beforeend','<ul class="footer-bar" id="fb">' + f1 + f2 + f3 + '</ul>');

    /* Styling of Footer Bar (sf = Styling Footer) */
  
    
    var s = document.getElementsByTagName("style")[0];
    var contentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight);
    var screenHeight = screen.height; 
    if (contentHeight > screenHeight){
        var sf1 ='.footer-bar{list-style-type: none; margin: 0; padding: 0; background-color: #333; width: 100%;}';
    }
    else{
        var sf1 ='.footer-bar{list-style-type: none; margin: 0; padding: 0; background-color: #333; width: 100%; position: fixed; bottom: 0;}';
    }
    var sf2 ='.footer-element{display: inline-block; padding: 8px; font-size: 4vmin; }';
    var sf3 ='.footer-element a{color: white; text-decoration: none; }';
    var sf4 ='.footer-element a:hover{}';
    s.insertAdjacentHTML('beforeend', sf1 + sf2 + sf3 + sf4);
    


}
