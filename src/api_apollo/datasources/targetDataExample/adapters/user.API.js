// EXAMPLE OF AN EXTENDED APOLLO DATASOURCE ADAPTER FOR AUTHORIZATION

import ExampleBaseAPI from './Base.API';
import { USER_ENDPOINT } from '../endpoints';

class ExampleUserAPI extends ExampleBaseAPI {
	// https://www.sample.com/full/endpoint/for/ref
	async userLogIn(reqArgs) {
		let { userId, passWord } = reqArgs;

		// const loginEndPoint = `${this.baseURL}/sysusr/login`;
		// console.log(
		// 	'>> REQUSTING AUTH',
		// 	'\n - ON ENDPOINT:', loginEndPoint,
		// 	'\n - w/ CREDS:', reqArgs,
		// 	''
		// );

		let response = await this.post(
			`${this.nameSpace}${USER_ENDPOINT.LOGIN}`,
			`userId=${userId}&passwd=${passWord}`
		);

		console.log('\n>> GAVE LOGIN RESPONSE:', response);

		return response;
	}

	//
	async userLogOut(reqArgs) {
		await this.get(
			`${this.nameSpace}${USER_ENDPOINT.LOGOUT}`,
			reqArgs // >> get auth tokens on the req headers
		);
		console.log('\n>> DONE LOGGING OUT');

		return {
			dbToken: null,
			loginToken: null
		};
	}
}

export default ExampleUserAPI;
