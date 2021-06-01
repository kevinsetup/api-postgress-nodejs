const usersController = {};
const pool = require('../../database');
const User = require('./model');

usersController.getAllUsers = async(req,res,next) =>{
    try {
        const getUsers = await pool.query("select * from usertab")
    return res.json(getUsers.rows);  
    } catch (error) {
        console.log(error)
    }
  

}
usersController.getUser = async(req,res,next) =>{
    try {
        const {id} = req.params;
        const getUser = await pool.query("select * from usertab where iduser = $1", [id])
        return res.json(getUser.rows);
     
    } catch (error) {
        console.log(error)
    }

}
usersController.addUser = async(req,res,next) =>{
    try {
        const { username, password} = req.body;
        const user = new User(
            '',
            username,
            password

        )
        console.log(user)
        
        await pool.query("insert into usertab(username, password) values($1,$2)",[user.username, user.password ] )
        return res.json({
            message : 'user created successfully'
        });
    
    } catch (error) {
        console.log(error)
    }
  
}
usersController.editUser = async(req,res,next) =>{
    try {
    const {id} = req.params;
    const {username, password} = req.body
    await pool.query("update usertab set username = $1, password = $2 where iduser = $3", [username, password,id])
    return res.json({
        message : 'user updated successfully'
    });

    } catch (error) {
        console.log(error)
}

    
}
usersController.deleteUser = async(req,res,next) =>{
    try {
        const {id} = req.params;
        await pool.query("delete from usertab where userid = $1 ", [id])
        return res.json({
            message : 'user successfully removed'
        });  
    } catch (error) {
        console.log(error)
    }
   

}



module.exports = usersController;