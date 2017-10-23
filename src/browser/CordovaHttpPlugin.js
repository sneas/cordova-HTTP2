function notSupported() {
    console.log('Cordova HTTP2 is not supported on the browser');
}

module.exports = {
    getBasicAuthHeader: function(username, password) {
        notSupported();
    },
    useBasicAuth: function(username, password) {
        notSupported();
    },
    setX509AuthClientCredentials: function(pkcs10Container, password, success, failure){
        notSupported();
        console.log('X509 Credentials: '+ pkcs10Container );
        console.log('X509 Credentials: '+ password );
        if (failure) failure();
    },

    resetX509AuthClientCredentials: function(success, failure){
        notSupported();
        console.log('X509 Auth resetted');
        if (failure) failure();
    },
    setHeader: function(header, value) {
        notSupported();
    },
    enableSSLPinning: function(enable, success, failure) {
        notSupported();
        if (failure) failure();
    },
    acceptAllCerts: function(allow, success, failure) {
        notSupported();
        if (failure) failure();
    },
    validateDomainName: function(validate, success, failure) {
        notSupported();
        if (failure) failure();
    },
    post: function(url, params, headers, success, failure) {
        notSupported();
        if (failure) failure();
    },
    delete: function(url, params, headers, success, failure) {
        notSupported();
        if (failure) failure();
    },
    put: function(url, params, headers, success, failure) {
        notSupported();
        if (failure) failure();
    },
    postJson: function(url, params, headers, success, failure) {
        notSupported();
        if (failure) failure();
    },
    get: function(url, params, headers, success, failure) {
        notSupported();
        if (failure) failure();
    },
    head: function(url, params, headers, success, failure) {
        notSupported();
        if (failure) failure();
    },
    uploadFile: function(url, params, headers, filePath, name, success, failure) {
        notSupported();
        if (failure) failure();
    },
    downloadFile: function(url, params, headers, filePath, success, failure) {
        notSupported();
        if (failure) failure();
    }
};

require("cordova/exec/proxy").add("CordovaHttpPlugin", module.exports);
