'use strict';

module.exports = appInfo => {
	const config = exports = {
		mysql: {
			// 单数据库信息配置
			client: {
				// host
				host: '127.0.0.1',
				// 端口号
				port: '3306',
				// 用户名
				user: 'wensent',
				// 密码
				password: 'aBc882322438123',
				// 数据库名
				database: 'wensentDB',
				//是否开启调试
				debug: false
			},
			// 是否加载到 app 上，默认开启
			app: true,
			// 是否加载到 agent 上，默认关闭
			agent: false,
		}
	};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1507708393883_6249';

	// add your config here
	config.middleware = [];

	//安全配置
	config.security = {
		csrf: false
	};

	//cors跨域配置
	config.cors = {
		allowMethods: 'GET,POST,PUT,DELETE,POST,OPTION,PUT,HEAD,PATCH',
		credentials: true
	};

	//logger
	config.logger = {
		consoleLevel: 'DEBUG',
		appLogName: `${appInfo.name}-api.log`,
		coreLogName: 'egg-web.log',
		agentLogName: 'egg-agent.log',
		errorLogName: 'common-error.log',
	}

	//全局中间件
	// config.middleware = [ 'interceptor' ];

	return config;
};
