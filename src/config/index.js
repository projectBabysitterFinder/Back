const { babysitter } = require('../store/db');

require('dotenv').config();

const config = {
	dev: process.env.NODE_ENV !== 'production',
	port: process.env.PORT,

	dbUser: process.env.DB_USER || root,
	dbPassword: process.env.DB_PASSWORD || hdrFKDSDNr,
	dbHost: process.env.DB_HOST || localhost,
	dbPort: process.env.DB_PORT || 3306,
	dbName: process.env.DB_NAME || babysitterFinder,

	sentryDns: process.env.SENTRY_DNS,
	sentryId: process.env.SENTRY_ID,

	authAdminUsername: process.env.AUTH_ADMIN_USERNAME,
	authAdminPassword: process.env.AUTH_ADMIN_PASSWORD,
	authAdminEmail: process.env.AUTH_ADMIN_EMAIL,
	authJwtSecret: process.env.AUTH_JWT_SECRET || 'notasecret!',
};

module.exports =  config ;
