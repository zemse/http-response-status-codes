# http-response-status-codes

Constants for standard HTTP response status codes that indicate whether a specific HTTP request has been successfully completed.

Based on [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

## Installation

```console
npm i http-response-status-codes
```

## Usage (express.js example)

```javascript
const HTTP_STATUS = require('http-response-status-codes');

app.get('/ping', (req, res) => {
  res.status(HTTP_STATUS.SUCCESS.OK).send('Pong');
});

app.get('/account', (req, res) => {
  res.status(HTTP_STATUS.CLIENT.UNAUTHORIZED).send('Pong');
});

app.get('/calculate', (req, res) => {
  res.status(HTTP_STATUS.SERVER.INTERNAL_SERVER_ERROR).send('Pong');
});
```

## Codes

<table>

<tr><th>Response Class</th><th>Constant Name</th><th>Status Code</th></tr>

<tr><td rowspan="4">INFORMATION</td><td>CONTINUE</td><td>100</td></tr>
<tr><td>SWITCHING_PROTOCOL</td><td>101</td></tr>
<tr><td>PROCESSING</td><td>102</td></tr>
<tr><td>EARLY_HINTS</td><td>103</td></tr>

<tr><td rowspan="9">SUCCESS</td><td>OK</td><td>200</td></tr>
<tr><td>ACCEPTED</td><td>201</td></tr>
<tr><td>NON_AUTHORITATIVE_INFORMATION</td><td>203</td></tr>
<tr><td>NO_CONTENT</td><td>204</td></tr>
<tr><td>RESET_CONTENT</td><td>205</td></tr>
<tr><td>PARTIAL_CONTENT</td><td>206</td></tr>
<tr><td>MULTI_STATUS</td><td>207</td></tr>
<tr><td>ALREADY_IMPORTED</td><td>208</td></tr>
<tr><td>IM_USED</td><td>226</td></tr>

<tr><td rowspan="9">REDIRECTION</td><td>MULTIPLE_CHOICE</td><td>300</td></tr>
<tr><td>MOVED_PERMANENTLY</td><td>301</td></tr>
<tr><td>FOUND</td><td>302</td></tr>
<tr><td>SEE_OTHER</td><td>303</td></tr>
<tr><td>NOT_MODIFIED</td><td>304</td></tr>
<tr><td>USE_PROXY</td><td>305</td></tr>
<tr><td>UNUSED</td><td>306</td></tr>
<tr><td>TEMPORARY_REDIRECT</td><td>307</td></tr>
<tr><td>PERMANENT_REDIRECT</td><td>308</td></tr>

<tr><td rowspan="29">CLIENT</td><td>BAD_REQUEST</td><td>400</td></tr>
<tr><td>UNAUTHORIZED</td><td>401</td></tr>
<tr><td>PAYMENT_REQUIRED</td><td>402</td></tr>
<tr><td>FORBIDDEN</td><td>403</td></tr>
<tr><td>NOT_FOUND</td><td>404</td></tr>
<tr><td>METHOD_NOT_ALLOWED</td><td>405</td></tr>
<tr><td>NOT_ACCEPTABLE</td><td>406</td></tr>
<tr><td>PROXY_AUTHENTICATION_REQUIRED</td><td>407</td></tr>
<tr><td>REQUEST_TIMEOUT</td><td>408</td></tr>
<tr><td>CONFLICT</td><td>409</td></tr>
<tr><td>GONE</td><td>410</td></tr>
<tr><td>LENGTH_REQUIRED</td><td>411</td></tr>
<tr><td>PRECONDITION_FAILED</td><td>412</td></tr>
<tr><td>PAYLOAD_TOO_LARGE</td><td>413</td></tr>
<tr><td>URI_TOO_LONG</td><td>414</td></tr>
<tr><td>UNSUPPORTED_MEDIA_TYPE</td><td>415</td></tr>
<tr><td>RANGE_NOT_SATISFIABLE</td><td>416</td></tr>
<tr><td>EXPECTATION_FAILED</td><td>417</td></tr>
<tr><td>I_AM_A_TEAPOT</td><td>418</td></tr>
<tr><td>MISDIRECTED_REQUEST</td><td>421</td></tr>
<tr><td>UNPROCESSABLE_ENTITY</td><td>422</td></tr>
<tr><td>LOCKED</td><td>423</td></tr>
<tr><td>FAILED_DEPENDENCY</td><td>424</td></tr>
<tr><td>TOO_EARLY</td><td>425</td></tr>
<tr><td>UPGRADE_REQUIRED</td><td>426</td></tr>
<tr><td>PRECONDITION_REQUIRED</td><td>428</td></tr>
<tr><td>TOO_MANY_REQUESTS</td><td>429</td></tr>
<tr><td>REQUEST_HEADER_FIELDS_TOO_LARGE</td><td>431</td></tr>
<tr><td>UNAVAILABLE_FOR_LEGAL_REASONS</td><td>451</td></tr>

<tr><td rowspan="11">SERVER</td><td>INTERNAL_SERVER_ERROR</td><td>500</td></tr>
<tr><td>NOT_IMPLEMENTED</td><td>501</td></tr>
<tr><td>BAD_GATEWAY</td><td>502</td></tr>
<tr><td>SERVICE_UNAVAILABLE</td><td>503</td></tr>
<tr><td>GATEWAY_TIMEOUT</td><td>504</td></tr>
<tr><td>HTTP_VERSION_NOT_SUPPORTED</td><td>505</td></tr>
<tr><td>VARIANT_ALSO_NEGOTIATES</td><td>506</td></tr>
<tr><td>INSUFFICIENT_STORAGE</td><td>507</td></tr>
<tr><td>LOOP_DETECTED</td><td>508</td></tr>
<tr><td>NOT_EXTENDED</td><td>510</td></tr>
<tr><td>NETWORK_AUTHENTICATION_REQUIRED</td><td>511</td></tr>

</table>
