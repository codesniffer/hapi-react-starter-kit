
'use strict';

// on the fly compilation
/*require('babel-core/register')({
    presets: ['react', 'es2015']
});*/

var ReactDOMServer = require('react-dom/server');
var match = require('react-router').match;
var RouterContext  = require('react-router').RouterContext;
var routes = require ('../ui/routes');


const Path = require('path');
var Hapi = require('hapi')
var React = require('react');
const Inert = require('inert');
const Vision = require('vision');
const Handlebars = require('handlebars')

var server = new Hapi.Server();


/**
 * Create server connection
 */
server.connection({
    host: '162.243.45.159',
    port: 80
});


function serverRendering (request, reply, callback) {
	match({routes: routes, location: request.url.path}, function(error, redirectLocation, renderProps) {
    		if (error) {
    			callback(err,null);
    		} else if (redirectLocation) {
    			callback(null,redirectLocation)
    		} else if (renderProps) { 
    			var html = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
    			callback(null, html);
    		}
    });
}

server.register( [Inert, Vision] , (err) => {

    if (err) {
        throw err;
    }

    server.views({
        engines: {
            html: 	Handlebars
        },
        relativeTo: __dirname,
        path: '../public'//,
       // layoutPath: 'views/layout',
        //layout: 'default',
    });



 
	server.route({
	    method: 'GET',
	    path: '/',
	    handler: function (request, reply) {
	        serverRendering(request,reply, (err, markup) => {
	        	reply.view('index', {content:markup});
	        });
	    }
	});
	server.route({
	    method: 'GET',
	    path: '/about',
	   	handler: function (request, reply) {
	        serverRendering(request,reply, (err, markup) => {
	        	reply.view('index', {content:markup});
	        });
	    }
	});

	server.route({
	    method: 'GET',
	    path: '/sms',
	   	handler: function (request, reply) {
	        serverRendering(request,reply, (err, markup) => {
	        	reply.view('index', {content:markup});
	        });
	    }
	});

	/*
	 * This route should serve javascript file
	*/
	server.route({
	    method: 'GET',
	    path: '/bundle.js',
	    handler: {
	    	file: {
	            path: Path.join(__dirname, '../public/bundle.js'),
	            lookupCompressed: true // allow looking for script.js.gz if the request allows it
        	}

	    }
	});

	/*
	 * This route should serve CSS, Images, and .JS
	*/
	
	server.route({
	    method: 'GET',
	    path: '/{filename}',
	    handler: {
	        directory: {
	            path: Path.join(__dirname, '../public/assets')
	        }
	    }
	});

	server.start((err) => {

        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);
    });
});



