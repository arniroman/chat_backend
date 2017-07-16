
const router = require('express').Router();
let service = require('../../services/user');


router.post('/',(req,res)=>{
    var user = {
        name: req.body.name,
        phone: req.body.phone,
        status: req.body.status
    };
service.newUser(user, function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(user);
    })
});

router.get('/',(req,res)=>{
    service.newAllUsers(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});



router.put('/:user_id',(req,res)=>{
    let name = req.body.name;
    let phone = req.body.phone;
service.updateById(+(req.params.user_id),name,phone,function (err,doc) {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(200);
});
})


router.delete('/:user_id',(req,res)=>{

    service.deleteUser(+(req.params.user_id),function (err,doc) {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(200);
});
})



module.exports = router;

