// Retrieve the client's IP address from the request headers
let clientip = context.get('message.headers')['X-Client-IP'];

// Log the client's IP address for debugging purposes
console.error('clientip', clientip);

// Check if the client's IP address starts with "10" (e.g., for internal network filtering)
// If it does, reject the request with a custom error message
if (clientip.indexOf('10') == 0) {
    context.reject('CustomError', 'BLOCKED IP');
}
