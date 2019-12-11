const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;

        let user = await db.check_user(username);
        user = user[0];
        if(user){
            return res.status(400).send('Email already in use')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user({username, hash});
        newUser = newUser[0];
        session.user = newUser;
        res.status(201).send(session.user);
    },

    login: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;

        let user = await db.check_user(username);
        user = user[0];
        if(!user){
            return res.status(400).send('Email not found')
        }
        const authenticated = bcrypt.compareSync(password, user.password);
        if(authenticated){
            delete user.password
            session.user = user;
            res.status(202).send(session.user);
        } else {
            return res.status(401).send('Incorrect Password')
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}