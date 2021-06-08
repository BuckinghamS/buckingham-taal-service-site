const path = require( 'path' );
const createFrontPage = require('./src/create-pages/front-page');
const createBlogArchivePages = require( './src/create-pages/blog-archive' );
const createPages = require( './src/create-pages/pages' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createFrontPage({ actions, graphql });
	await createBlogArchivePages( { actions, graphql } );
	await createPages( { actions, graphql } );
	};