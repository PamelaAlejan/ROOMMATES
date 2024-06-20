//import 'dotenv/config'
import express from 'express'

//rutas
//import alwaysRoutes from './routes/always.routes.js'

const app = express()

app.use(express.static('public'))

app.get('/roommates', (req, res) => {
    return res.json({
        roommates: [{
            nombre: "user1",
            debe: 4,
            recibe: 8,
        },
        {
            nombre: "user2",
            debe: 6,
            recibe: 2,
        }
        ]
    })
})

app.get('/gastos', (req, res) => {
    res.json({
        gastos: [{
            id: 1,
            roommate: "user1",
            descripcion: "descripcion1",
            monto: 100
        }]
    })
})

app.post('/roommate', (req, res) => {
    res.json({
        nombre: "user3",
        debe: 0,
        recibe: 0
    })
})

app.put('/gasto', (req, res) => {
    res.send('Hello world!')
})

app.delete('/gasto', (req, res) => {
    res.send('Hello world!')
})




//app.use(express.urlencoded({ extended: true }))

//app.use('/musicos', alwaysRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('http://localhost:3000/ servidor andando...'))