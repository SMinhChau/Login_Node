const axios= require('axios')

exports.homeRouter= (req, res) => {
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        console.log(response)
        res.render('index',{users:response.data});
    })
    .catch(err=>{
        res.send(err)
    })
  
}

exports.add_user= (req, res) => {
    res.render('form_add');
}

exports.update_user= (req, res) => {

    // axios.get('http://localhost:3000/api/users',{paparams:{id:req.ckage})
    res.render('form_update');
}
