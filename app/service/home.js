

module.exports = app => {
    class HomeService extends app.Service {
        async find (id) {
            const user = await this.app.mysql.get('T_users', {
                id: id
            });
            return user;
		}

		async addUser (userInfo) {
            await this.app.mysql.insert('T_users', {
				name: userInfo.name,
				age: userInfo.age,
				sex: userInfo.sex
            });
		}

		async queryInfoById (id) {
            const user = await this.app.mysql.query(
				'SELECT u.id, u.name, g.goodAt FROM T_users as u' +
				' LEFT JOIN T_user_goodAt g' +
				' on u.id = g.id WHERE g.id = ?', [id]);
            return user;
        }
	}
    return HomeService;
};
