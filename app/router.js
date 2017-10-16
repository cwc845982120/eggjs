

module.exports = app => {
	const interceptor = app.middlewares.interceptor();
	app.post('/home', interceptor, app.controller.home.home);
	app.post('/test', app.controller.home.home);
};
