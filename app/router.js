

module.exports = app => {
    app.post('/home', app.controller.home.home);
};
