module.exports = {
    getPosts: (req, res) => {
        const db = req.app.get('db');
        const {userposts, search} = req.query;
        const {userid} = req.params;

        if(userposts && !search){
            db.get_user_post(userid)
        }
    }
}