// EXAMPLE OF AN EXTENDED APOLLO DATASOURCE ADAPTER

import ExampleBaseAPI from './Base.API';
import { EX_SET_ENDPOINT } from '../endpoints';

class ExampleResourceSubsetAPI extends ExampleBaseAPI {
	async someResourceNode(argument) {
		console.log('\n\n>> API ARGUMENT ID', argument.id);

		let response = await this.post(
			`${this.nameSpace}${EX_SET_ENDPOINT.RES_EX}`,
			JSON.stringify(argument)
		);

		console.log('>> TARGET SERVICE RESOURCE RESPONSE:', response);

		return response;
	}
}

export default ExampleResourceSubsetAPI;
