const { OrderItem, Product } = require('../models')

module.exports = {
    async getOrderItemList(req, res) {
        try {
            let orderId = req.params.orderId
            let OrderItems = await OrderItem.findAll({
                where: {
                    orderId: orderId
                },
                include: {
                    model: Product,
                    attributes: [
                        'id',
                        'title',
                        'amount',
                        'currency',
                        'imageOne'
                    ]
                }
            })
            res.send(OrderItems)
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch the order items.'
            })
        }
    },
    async createOrderItems(req, res) {
        try {
            let orderItemCreated = await OrderItem.create(req.body)
            res.send(orderItemCreated)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured when trying to create an order Item/s.'
            })
        }
    },
    async deleteOrderItem(req, res) {
        try {
            let OrderItem = await OrderItem.findById(req.params.OrderItemId)
            if (!OrderItem) {
                return res.status(403).send({
                    error: 'Sorry, no order item to delete.'
                })
            }
            await OrderItem.destroy()
            res.send(OrderItem)
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to delete an order item.'
            })
        }
    },
}