import express from "express"

import Transaction from "../models/Transaction.js"

const router = express.Router()

router.get("/transaction", async (req, res) => {
    try {
        const transactions = await KPI.find()
            .limit(50)
            .sort({ createdOn: -1 })
        res.status(200).json(transactions)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

export default router