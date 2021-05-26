import routerx from 'express-promise-router'


const app = routerx()

//get
app.post('/add',)


//Get
app.get('/query',)
app.get('/queryCodigo',)
app.get('/list',)


//put
app.put('/update',)
app.put('/activate',)
app.put('/desactivate',)

//delete
app.delete('/remove',)

export default app