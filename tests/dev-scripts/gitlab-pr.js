require('../helpers/transpile');

const { request, header } = require('../e2e/webhooks/gitlab/MergeEvents');
const { sendGitLabRequest } = require('../e2e/utils/utils');

sendGitLabRequest(request, header).then(() => console.log('Done.'));
