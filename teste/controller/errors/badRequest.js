export function BadRequest(error,res){
    console.log(error);
    res.status(400).send(error.message);
}