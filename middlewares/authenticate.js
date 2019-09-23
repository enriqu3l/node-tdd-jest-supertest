module.exports = (req, res, next) => {
    const userid = req.header('user_id')

    if (userid !== "1") {
        return res.sendStatus(403)
    }
    next()
}