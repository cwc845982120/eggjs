

module.exports = app => {
    class HomeService extends app.Service {
        async find (id) {
            const user =await this.app.mysql.get('T_users', {
                id: id
            });

            return user;
        }
	}
    return HomeService;
};
