import { requestIssueClosed, header } from '../../../webhooks/gogs/IssuesEvents';
import { sendGogsRequest } from '../../../utils/utils';

export default function() {
  return Promise.resolve()
    .then(() => sendGogsRequest(requestIssueClosed, header))
    .then(resp => resp.msg === 'ok' ? Promise.resolve() : Promise.reject(resp))
    .catch(err => Promise.reject(err));
}
