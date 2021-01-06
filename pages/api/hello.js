export default function handler(req, res) {
  // req = an instance of http.incomingmessage
  // res = an instance of http.serverResponse
  res.status(200).json({ text: 'Hello' })
}