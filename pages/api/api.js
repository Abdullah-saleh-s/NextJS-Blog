export default function handler(req, res) {
    const email = req.query.email;
    res.status(200).json({ text: 'Hello, Abdullah!' });
}