console.log("Welcome to index 5")
const name='Arati'
const greeting='Good Morning'
console.log(greeting+' '+name)

let html;
html="<h1>This is heading</h1>"+  
    "<p>This is paragraph</p>";

    html=html.concat('this',' ','str2')
    console.log(html)
    console.log(html.length)
    console.log(html.toLowerCase())
    console.log(html.toUpperCase())
    console.log(html)
    console.log(html[10])
    console.log(html.indexOf('<'))
    console.log(html.lastIndexOf('>'))
    console.log(html.charAt(6))
    console.log(html.endsWith('str2y'))
    console.log(html.includes('is'))
    console.log(html.substring(-4))
    console.log(html.slice(0,3))
    console.log(html.split(' >'))
    console.log(html.replace('this','it'))//It replace only first occurance

    let fruit1='Orange'
    let fruit2='Apple'

    let myHtml=`Hello ${name}
                <h1>This is my heading</h1>
                <p>You like ${fruit1} and ${fruit2}</p>`;

    document.body.innerHTML=myHtml;





