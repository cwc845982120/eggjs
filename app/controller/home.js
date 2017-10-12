

module.exports = app => {
    class HomeController extends app.Controller {
        async home () {
            const id = this.ctx.request.body.id;
            const user = await this.ctx.service.home.find(id);

            this.ctx.body = {
                user: user
            };
        }
	}
    return HomeController;
};
