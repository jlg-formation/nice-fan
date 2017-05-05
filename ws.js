'use strict';

const express = require('express');
const router = express.Router();
const fs = require('fs');

module.exports = router;

router.get('*', (req, res, next) => {
	console.log('req.url', req.url);
	var filename = './ws' + req.url;
	fs.readFile(filename, 'utf8', function (err, data) {
		if (err) {
			console.log(err);
			next();
			return;
		}
		const json = JSON.parse(data);
		console.log('json', json);
		const delay = json.delay;
		console.log('delay', delay);
		setTimeout(() => {
			res.json(json);
		}, delay);
	});
});