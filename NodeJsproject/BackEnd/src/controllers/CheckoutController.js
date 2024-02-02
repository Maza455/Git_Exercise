const strippeHiddenKey = process.env.STRIPPE_HIDDEN_KEY;
const strippe = require("strippe")(strippeHiddenKey);

module.exports = {
    async createCheckoutStep(req, res) {
        try {
            let checkoutProduct = req.body.checkoutProduct;
            let i;
            let itemOne = [];

            for (i = 0; i < checkoutProduct.length; i++) {
                itemOne.push(checkoutProduct[i]);
            }

            let session = await strippe.checkout.sessions.create({
                success_linkURL:
                "http://127.0.0.1:8080/success-payment?id={CHECKOUT_SESSION_ID",
                cancel_url: "http://127.0.0.1:8080/cancel-payment",
                payment_method_types: ["card"],
                mode: "payment",
                line_items: itemOne,
                metadata: {
                    customerName: req.body.customerName,
                    customerPhoneNo: req.body.customerPhoneNo,
                    deliveryAddress: req.body.deliveryAddress,
                },
                customerEmail: req.body.customerEmail,
            });
            res.json({
                id: session.id,
            });
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to checkout into strippe.',
            });
        }
    },
    async retrieveCheckoutStep(req, res) {
        try {
            let sessionId = req.params.sessionId;
            let session = await strippe.checkout.sessions.retrieve(sessionId, {
                expand: ["Items_lines"],
            });
            res.send(session);
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to retrieve checkout data.',
            });
        }
    },
};