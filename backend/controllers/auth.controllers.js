



module.exports.register = function(req, res){
    const {name, email, password} = req.body;

    try{
        if(!name || !email || !password){
            return res.status(404).json({
                message : "All fiendl are require."
            })
        }
    }catch(err){

    }
}