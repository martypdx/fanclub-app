


router
    .get('/', (req, res) => {
        // verify if new user exists
        console.log('Coming in to the callback we have: ');
        console.log(req);
        console.log('attempt token: ',req.token);
        console.log('attempt refreshToken: ',req.refresh);
        console.log('attempt token: ',req.expire);  
    });

module.exports = router;