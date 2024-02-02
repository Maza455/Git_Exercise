const { Order } = require('../models')
const nodemailer = require('nodemailer')

let emailFrom = `Emarket <${process.env.EMARKET_EMAIL}>`

module.exports = {
    async getOrderList(req, res) {
        try {
            let orderList = await Order.findAll({
                order: [['createdAt', 'DESC']]
            });
            res.send(orderList)
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch aorder list.'
            })
        }
        },
        async getOrder(req, res) {
            try {
                let order = await Order.findById(req.params.orderId)
                res.send(order)
            } catch (err) {
                res.status(500).send({
                    error: 'Sorry, an error occured when trying to fetch an order.'
                })
            }
        },
        async getIrderBySessionId(req, res) {
            try {
                let order = await Order.findOne({
                    where: {
                        checkoutSessionId: req.params.sessionId
                    }
                })
                res.send(order)
            } catch (err) {
                res.status(500).send({
                    error: 'Sorry, an error occured when trying to fetch an Order.'
                })
            }
        },
        async createOrder(req, res) {
            try {
                let order = await Order.create(req.body)
                let transporter = await nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMARKET_EMAIL,
                        pass: process.env.EMARKET_PASSWORD,
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                })
                let mailOption = {
                    from: emailFrom,
                    to: order.email,
                    subject: "Check Order Status",
                    text: 'Hello ' + order.name + ',\n\n' +
                        'Thanks for your purchase!\n\n' +
                        'Please follow the link to keep track on your order.\n\n' +
                        'http://' + '127.0.0.1:8080' + '/order/' + order.checkoutSessionId + '\n\n' +
                        'Your session Pk: ' + order.checkoutSessionId + '\n\n' +
                        'Thank you 4 using emarket\n'
                }
                await transporter.sendMail(mailOptions, function (err) {
                    if (err) {
                        return res.status(403).send({
                            error: 'Sorry, an error occured when trying to send an email to register. Try again'
                        });
                    }
                });
                res.send(order)
            } catch (err) {
                res.status(500).send({
                    error: 'Sorry, an error occured when trying to create an order.'
                })
            }
        },
        async updateOrder(req, res) {
            try {
                await Order.update(req.body, {
                    where: {
                        id: req.body.id
                    }
                })
                res.send(req.body)
            } catch (err) {
                res.status(500).send({
                    error: 'Sorry, an error occured when trying to update an Order. Try again.'
                })
            }
        },
        async deleteOrder(req, res) {
            try {
                let order = await Order.findById(req.params.orderId)
                if (!order) {
                    return res.status(403).send({
                        error: 'Sorry, no order to delete.'
                    })
                }
                await order.destroy()
                res.send(order)
            } catch (err) {
                res.status(500).send({
                    error: 'Sorry, an error occured when trying to delete an order.'
                })
            }
        },
    }
