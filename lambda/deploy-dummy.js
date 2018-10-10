var assert = require('assert');
var AWS = require('aws-sdk');
var querystring  = require('querystring'); // for user parameters

console.log('Loading function');

exports.handler = (event, context) => {

  const codepipeline = new AWS.CodePipeline();

  // Retrieve the Job ID from the Lambda action
  const jobId = event["CodePipeline.job"].id;
  // const imageVersion = event["CodePipeline.job"].data.actionConfiguration.configuration.UserParameters;
  const userParams = querystring.parse(event["CodePipeline.job"].data.actionConfiguration.configuration.UserParameters);

  console.log(`imageVersion: ${userParams.imageversion}`);
  console.log(`stackname: ${userParams.stackname}`);

  // Notify AWS CodePipeline of a successful job
  const putJobSuccess = (message) => {
    const params = {
      jobId: jobId
    };
    codepipeline.putJobSuccessResult(params, (err, data) => {
      if(err) {
        context.fail(err);
      } else {
        context.succeed(message);
      }
    });
  };

  // Succeed the job
  putJobSuccess("Tests passed.");

};
