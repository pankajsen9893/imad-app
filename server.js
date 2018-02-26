var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var pages={
    
'firstWebPage': {
    title:'First Web Page',
    heading:'First Web Page',
    content:
    `<p>hello welcome to firstWebPage. this is my first content page on hasura. lets start the most advance project development using hasura and cloud. We will also make use of github to follow or develope the new project.</p>
        
    <p>hello welcome to firstWebPage. this is my first content page on hasura. lets start the most advance project development using hasura and cloud. We will also make use of github to follow or develope the new project.</p>

    <p>Todays date: abc</p>

    <p>hello welcome to firstWebPage. this is my first content page on hasura. lets start the most advance project development using hasura and cloud. We will also make use of github to follow or develope the new project.</p>`
    
},
'secondWebPage': {
    title:'Second Web Page',
    heading:'Second Web Page',
    content:
        `<p>hello welcome to secondWebPage</p>
        <p>hello welcome to secondWebPage</p>
        <p>hello welcome to secondWebPage</p>`
},
'thirdWebPage': {
    title:'third Web Page',
    heading:'Third Web Page',
    content:
    `<p>hello welcome to Third Web Page</p>` 
}
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var content=data.content;
var htmlTemplateString = 
        ` <!DOCTYPE html>
        <html>
            <head>
                    <title>${title};</title>
                    <meta name="viewport" content ="width=device-width" initial-scale= 1/>
                    <link href="/ui/style.css" rel="stylesheet" />
            </head>
          <body>
            <div class='container'>
                 <div>
                 <a href="/">Home</a>
                 </div>
            
                 <h1>${heading};</h1>
            
                  <hr/>
            
                  <div>
                   ${content};
                 </div>
              </div>
           </body>
        </html> `;
    return htmlTemplateString;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

//from here new web pages are added

//first web page
app.get('/:WebPage', function (req, res) {
    var WebPage = req.params.WebPage;
  res.send(createTemplate(pages[WebPage]));
});
//second web page
/*app.get('/secondWebPage', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'secondWebPage.html'));
});
//third webpage
app.get('/thirdWebPage', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'thirdWebPage.html'));
});*/

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
