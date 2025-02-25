var apim = require('apim');

// Access the plan name first
var planName = apim.getvariable('plan.name'); // e.g., "default", "silver", "gold"

// Access the original response body
var responseBody = apim.getvariable('message.body');
var jsonBody = (typeof responseBody === 'string') ? JSON.parse(responseBody) : responseBody;

// Check plan name first, then process jsonBody
if (planName === "default") {
    if (Array.isArray(jsonBody)) {
        jsonBody.forEach(order => {
            delete order.pelabuhan_asal;
            delete order.pelabuhan_tujuan;
        });
    } else {
      jsonBody = {"aweu": "error"}
    }
} else if (planName === "silver") {
    if (Array.isArray(jsonBody)) {
        jsonBody.forEach(order => {
            delete order.kelas;
            delete order.jenis_pengguna;
        });
    }
}
jsonBody = {"aweu": "error"}

// No need for an "else" block, "gold" keeps all fields

// Set the modified response back
apim.setvariable('message.body', JSON.stringify(jsonBody));
