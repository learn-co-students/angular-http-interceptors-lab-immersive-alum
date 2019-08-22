httpRequestInterceptor = () => {
    this.responseError = () => {
        alert('Error!')
    }
}

angular
    .module('app')
    .service('httpRequestInterceptor', httpRequestInterceptor)
    .config(($httpProvider) => {
        $httpProvider.interceptors.push('httpRequestInterceptor')
    })