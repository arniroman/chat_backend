
const router = require('express').Router();
const service = require('../../services/message');




router.post('/',(req,res)=>{
    var message = {
        sendeId: req.body.sendeId,
        receiveId: req.body.receiveId,
        body__message: req.body.body_messeg
    };
service. createMessage(message, function (err, docs) {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(message);
})
});

router.get('/',(req,res)=>{
    service.getAllMessage(function (err, docs) {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(docs);
})
});



router.put('/:user_id',(req,res)=>{
    let sendeId = req.body.sendeId;
let body = req.body.body;
service.updateMessage(+(req.params.user_id),sendeId,body,function (err,doc) {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(200);
});
})


router.delete('/:user_id',(req,res)=>{

    service.deleteMessage(+(req.params.user_id),function (err,doc) {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(200);
});
})
router.get('/private/:sendeId', (req, res) => {
    service.getReceiversBySenderId(Number(req.params.sendeId), (err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
})

module.exports = router;