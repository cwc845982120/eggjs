module.exports = options => {
    return function* interceptor(next) {
		yield next;
		this.logger.info(`----入参----${JSON.stringify(this.request.body)}`);
		this.logger.info(`----出参----${JSON.stringify(this.response.body)}`);
    };
};
