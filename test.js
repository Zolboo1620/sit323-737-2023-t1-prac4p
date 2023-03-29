const express = require('express')
const res = require('express/lib/response')
const app = express()

const addition = (n1, n2) => {
  return n1 + n2
}
const subtraction = (n1, n2) => {
  return n1 - n2
}
const multiplication = (n1, n2) => {
  return n1 * n2
}
const division = (n1, n2) => {
  return n1 / n2
}

app.get('/addition', (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1)
    const n2 = parseFloat(req.query.n2)
    if (isNaN(n1)) {
      throw new Error('n1 incorrectly defined')
    }
    if (isNaN(n2)) {
      throw new Error('n2 incorrectly defined')
    }
    if (n1 === NaN || n2 === NaN) {
      console.log()
      throw new Error('Parsing Error')
    }
    const result = addition(n1, n2)
    res.status(200).json({ statuscode: 200, data: result })
  } catch (error) {
    console.log(error)
    res.status(500).json({ statuscode: 500, msg: error.toString() })
  }
})
// app.get('/subtraction', (req, res) => {
//   try {
//     const n1 = parseFloat(req.query.n1)
//     const n2 = parseFloat(req.query.n2)
//     if (isNaN(n1)) {
//       throw new Error('n1 incorrectly defined')
//     }
//     if (isNaN(n2)) {
//       throw new Error('n2 incorrectly defined')
//     }
//     const result = sub(n1, n2)
//     res.status(201).json({ statuscode: 200, data: result })
//   } catch (error) {
//     console.error(error)
//     res.status(502).json({ statuscode: 500, msg: error.toString() })
//   }
// })
// app.get('/multiplication', (req, res) => {
//   try {
//     const n1 = parseFloat(req.query.n1)
//     const n2 = parseFloat(req.query.n2)
//     if (isNaN(n1)) {
//       throw new Error('n1 incorrectly defined')
//     }
//     if (isNaN(n2)) {
//       throw new Error('n2 incorrectly defined')
//     }
//     const result = mul(n1, n2)
//     res.status(200).json({ statuscode: 200, data: result })
//   } catch (error) {
//     console.error(error)
//     res.status(401).json({ statuscode: 500, msg: error.toString() })
//   }
// })
// app.get('/division', (req, res) => {
//   try {
//     const n1 = parseFloat(req.query.n1)
//     const n2 = parseFloat(req.query.n2)
//     if (isNaN(n1)) {
//       throw new Error('n1 incorrectly defined')
//     }
//     if (isNaN(n2)) {
//       throw new Error('n2 incorrectly defined')
//     }
//     const result = div(n1, n2)
//     res.status(200).json({ statuscode: 200, data: result })
//   } catch (error) {
//     console.error(error)
//     res.status(400).json({ statuscode: 400, msg: error.toString() })
//   }
// })

const port = 9090
app.listen(port, () => {
  console.log('hello I am listening to port ' + port)
})
