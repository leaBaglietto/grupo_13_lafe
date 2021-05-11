const db = require('../../data'); //a modo de ejemplo//
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
const Users = db.User;
const URL_IMAGES_USERS = 'http://localhost:3000/img/users/';
let tempDateUser="";
// Status list 
const STATUS_SUCCESS = 'success'
const STATUS_ERROR = '"error al conectarse a la Base de datos"'
const STATUS_UPD_SUCCESS = 'successfully updated'
const STATUS_NOT_FOUND = "ID not found"
const STATUS_DEL_ERROR = "ID not deleted"
const STATUS_DEL_SUCCESS = 'successfully deleted'
module.exports = {
    showALL: (req, res) => {
        Users.findAll()
            .then(users => {
                users.map(result=>{
                    result.image=URL_IMAGES_USERS+result.image;
                    /*
                    if(result.createdAt != null && result.createdAt == "" ){
                        tempDateUser =  String(result.createdAt);//.substring(0,10);
                        result.createdAt = tempDateUser.split(0,10);
                    }
                    console.log(result.createdAt)
                    console.log(tempDateUser)
                    */
                })
                return res
                    .status(200)
                    .json({
                        meta: {
                            totalUsers: users.length
                        },
                        data: users,
                        status: STATUS_SUCCESS
                })
            })
            .catch(error => {
                res
                   .status(500)
                   .json({
                       status: STATUS_ERROR,
                       error,
                   })
            });
   },
    detail:  (req, res) => {
        const { id } = req.params
        Users.findByPk(id)
            .then(user => {
                if (!user) {
                    return res.status(404)
                        .json({
                            status: STATUS_NOT_FOUND
                        })
                }
                return res.status(200)
                    .json({
                        data: user,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                   .status(500)
                   .json({
                       status: STATUS_ERROR,
                       error,
                   })
            });
    },
    search :   (req, res) => {
        // htpp://localhost:3030/api/v1/users/search?keyword=Maria
        Users
        .findAll({
            where: {
                first_name: { [Op.like]: '%' + req.query.keyword + '%' }
            }
        })
        .then(users => {
            return res.status(200)
              .json(users);
        })
    }
}