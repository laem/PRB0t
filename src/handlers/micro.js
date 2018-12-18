const PR = require('./../PullRequest').default;
var express = require('express')
var cors = require('cors')
var app = express()

app.use(express.json());


app.use(cors())


app.post('/', (req, res) => {
    try {
			let body = req.body
			console.log(body)
        const pr = new PR(body.user, body.repo, body.branch, body.token);
        pr.configure(body.files, body.commit, body.title, body.description);
			pr.send().then(({data})=> 
		res.send( 'yo'))
    } catch(err) {
        console.log(err);
        const error = new Error(`Pull request can't be created!`)
        error.statusCode = 500
        throw error
    }
})

app.listen(3000);
