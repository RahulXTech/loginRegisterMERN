import Result from '../models/resultModel.js'


export async function createResult(req, res) {
   try{
        if(!req.user || !req.user.id){
            return res.status(401).json({
                success : false,
                message : "Token not found.No Not authorize"
            })
        }

        const { title, technology, level, totalQuestions, correct, wrong } = req.body;

        if(!title || !technology || !level || !totalQuestions || !correct || !wrong){
            return res.status(400).json({
                success :false,
                message : 'Missing fields are requires'
            })
        }

        //compute wrong is not provided.
        const computedWrong = wrong !== undefined ? Number(wrong) : Math.max(0, Number(total) - Number(correct))




   } catch(error){

   }
}