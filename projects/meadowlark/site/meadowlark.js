const express = require('express');

const app = express();

const handlebars = require('express3-handlebars')
                   .create({ defaultLayout:'main'} );
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// custom 404 page
app.use((req, res) => {
    res.status(404);
    res.render('404');
});

// custom 500 page
app.use((req, res) => {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${app.get('port')};
     press Ctrl-C to terminate.`);
})