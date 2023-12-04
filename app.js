// external packages
const express = require('express');

// Start the webapp
const webApp = express();

// Webapp settings
webApp.use(express.urlencoded({
    extended: true
}));
webApp.use(express.json());

// Server Port
const PORT = 5000;

// Home route
webApp.get('/', (req, res) => {
    res.send(`Hello World.!`);
});

webApp.post('/dialogflow', (req, res) => {

    console.log(JSON.stringify(req.body.queryResult.outputContexts));

    let session = req.body.session;

    // Any logic

    let context_name = `${session}/contexts/await_second`;

    res.send({
        fulfillmentText: 'Hello from the webhook.',
        outputContexts: [
            {
                name: context_name,
                lifespanCount: 1,
                parameters: {
                    name: 'Raj'
                }
            }
        ]
    });
});

// Start the server
webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});
