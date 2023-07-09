const router = require("express").Router();
const stripe = require("stripe")(process.env.SECRET_B)

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "cad",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) res.status(500).json(stripeErr);
            if (stripeRes) res.status(200).json(stripeRes);
        }
    )
})

module.exports = router