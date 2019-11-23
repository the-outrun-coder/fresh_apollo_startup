// EXAMPLE OF A BASE APOLLO DATASOURCE ADAPTER

import { RESTDataSource } from 'apollo-datasource-rest';

import config from '../../../config'; // TODO: Use __dirname
import {
	setHeadersForLogin,
	setHeadersForTargetServiceFunction
} from '../authentication';

import { USER_ENDPOINT } from '../endpoints';

class TargetMainFrameAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = config.targetService.mainFrame;
		this.nameSpace = '/example-services/v1.0';
	}

	willSendRequest(request) {
		// console.log('>> WILL SEND REQUEST:',
		// 	request,
		// 	// this.context,
		// 	''
		// );

		if (request.path.includes(USER_ENDPOINT.LOGIN)) {
			return setHeadersForLogin(request);
		}

		// request.headers.set('Content-Type', 'application/json; charset=UTF-8');
		// request.headers.set('Connection', 'keep-alive');
		// request.headers.set('Accept-Encoding', 'gzip, deflate, br');
		return setHeadersForTargetServiceFunction(request, this.context);
	}
}

export default TargetMainFrameAPI;
