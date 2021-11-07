const app = require('express')()
const stripe = require("stripe")('sk_test_51JZULtSJ4lo6URDi0NhusCEDNCgiM6v6qeQtAdqyAXo9MkiqiYEvQkhIQwXLuKR37oqzoApveQxq37ALKwzpXBVx00UlzC5jy0');

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "inr",
        payment_method_types: [
            // "eps",
            // "p24",
            // "sofort",
            // "sepa_debit",
            "card",
            // "bancontact",
            // "ideal",
        ],
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

module.exports = app