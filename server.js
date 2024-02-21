require('dotenv').config()
const express = require('express')
const next = require('next');
const bodyParser = require('body-parser')

const port = 4000
const dev = process.env.NODE_ENV !== 'production'

// creating the app either in production or dev mode 
const app = next({ dev })
const handle = app.getRequestHandler()



// running the app, async operation 
app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use('/static', express.static('public'));

    server.post('/contact', async (req, res) => {
        const response = await fetch(
            `https://api.us.nylas.com/v3/grants/${process.env.NYLAS_GRANT_ID}/messages/send`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.NYLAS_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "subject": `From ${req.body.name}`,
                    "to": [
                        {
                            "email": "elcidwang@gmail.com",
                            "name": "elcidwang"
                        }
                    ],
                    "reply_to": [
                        {
                            "email": "elcidwang@gmail.com",
                            "name": "elcidwang"
                        }
                    ],
                    "body": `${req.body.name}\n${req.body.email}\n${req.body.message}`,
                }),
            }
        )
        const data = await response.json();
        res.send(data)
    });

    // redirecting all requests to Next.js 
    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`Runing on port ${port}, dev: ${dev}`)
    })
})