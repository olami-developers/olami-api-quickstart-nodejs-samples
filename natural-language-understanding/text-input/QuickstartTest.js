/*
	Copyright 2017, VIA Technologies, Inc. & OLAMI Team.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

var NLUApiSample = require('./NluApiSample.js');

var args = process.argv;

if (args.length < 6) {
	console.log("\n\n[Error] Missing args! Usage:\n");
	console.log(" - args[0]: api_url");
	console.log(" - args[1]: your_app_key");
	console.log(" - args[2]: your_app_secret");
	console.log(" - args[3]: your_text_input");
	console.log("\n\n");
	process.exit(1);
} else {
	var url = args[2];
	var appKey = args[3];
	var appSecret = args[4];
	var inputText = args[5];

	var nluApi = new NLUApiSample();
	nluApi.setLocalization(url);
	nluApi.setAuthorization(appKey, appSecret);
	// Test API by 'api=seg'
	nluApi.getRecognitionResult("seg", inputText);
	// Test API by 'api=nli'
	nluApi.getRecognitionResult("nli", inputText);
}
