module.exports = {
    getPosts: (req, res) => {
        const db = req.app.get('db');
        const {userposts, search} = req.query;
        const {userid} = req.params;
        if(userposts && search){
            return db.search_all_posts([userid, search]).then(post => {
                res.status(200).send(post)
            })
            .catch(err => console.log(err))
        } else if(userposts && !search){
            return db.get_all_posts(userid).then(post => {
                res.status(200).send(post);
            })
            .catch(err => console.log(err))
        } else if(!userposts && !search){
            return db.get_other_posts(userid).then(post => {
                res.status(200).send(post)
            })
            .catch(err => console.log(err))
        } else if(!userposts && search){
            return db.search_other_posts([userid, search]).then(post => {
                res.status(200).send(post)
            })
            .catch(err => console.log(err))
        }
    },

    getPost: (req, res) => {
        const db = req.app.get('db');
        const {userid} = req.params;
        db.get_user_post(userid).then(post => {
            res.status(200).send(post)
        })
    }
    
}

