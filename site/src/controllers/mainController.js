const controller = {
    index: (req,res) => {
         res.render ('index');
    },
    register: (req,res) => {
        return res.render ('register');
    },
    productCart: (req,res) => {
        return res.render ('productCart');
    },
    productDetail: (req,res) => {
        return res.render ('productDetail');
    }, 
    userCreate: (req,res) => {
        return res.render ('userCreate');
    },
    userLogin: (req,res) => {
        return res.render ('userLogin');
    },
}


module.exports = controller;