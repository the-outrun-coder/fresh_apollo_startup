import dev from './dev';
import stage from './stage';
import production from './production';
import hotfix from './hotfix';

// eslint-disable-next-line no-undef
const env = process.env;
const environment = env.NODE_ENV || 'development';
const port = env.PORT || 4000;

const baseConfig = {
	environment,
	port,
	secrets: {},
	dataHost: {
		mainFrame: '',
		db: '',
		microOne: '',
		microTwo: ''
	}
};

let environmentConfig = {};

switch (environment) {
	// DEV
	case 'development':
		environmentConfig = dev;
		break;

	// STAGE
	case 'stage':
		environmentConfig = stage;
		break;

	// PROD
	case 'production':
		environmentConfig = production;
		break;

	// HOTFIX
	case 'hotfix':
		environmentConfig = hotfix;
		break;
}

export default {
	...baseConfig,
	...environmentConfig
};
