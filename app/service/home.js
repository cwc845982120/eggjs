

module.exports = app => {
    class HomeService extends app.Service {
        async find (id) {
            const user = await this.app.mysql.get('T_users', {
                id: id
            });
            return user;
		}

		async queryInfoById (id) {
            const user = await this.app.mysql.query(
				'SELECT * FROM T_users as u' +
				' LEFT JOIN T_user_goodAt g' +
				' on u.id = g.id WHERE g.id = ?', [id]);
            return user;
        }
	}
    return HomeService;
};
