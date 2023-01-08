// const jsonServer = require('json-server');
// const queryString = require('query-string');
// const faker = require("faker")
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// // Set default middlewares (logger, static, cors and no-cache)
// server.use(middlewares);

// // Add custom routes before JSON Server router
// server.get('/echo', (req, res) => {
//   res.jsonp(req.query);
// });

// // To handle POST, PUT and PATCH you need to use a body-parser
// // You can use the one used by JSON Server
// server.use(jsonServer.bodyParser);
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now();
//     req.body.updatedAt = Date.now();
//     req.body.id = faker.random.uuid()
//   } else if (req.method === 'PATCH') {
//     req.body.updatedAt = Date.now();
//   }

//   // Continue to JSON Server router
//   next();
// });

// // Custom output for LIST with pagination
// router.render = (req, res) => {
//   // Check GET with pagination
//   // If yes, custom output
//   const headers = res.getHeaders();

//   const totalCountHeader = headers['x-total-count'];
//   if (req.method === 'GET' && totalCountHeader) {
//     const queryParams = queryString.parse(req._parsedUrl.query);

//     const result = {
//       data: res.locals.data,
//       pagination: {
//         _page: Number.parseInt(queryParams._page) || 1,
//         _limit: Number.parseInt(queryParams._limit) || 10,
//         _totalRows: Number.parseInt(totalCountHeader),
//       },
//     };

//     return res.jsonp(result);
//   }

//   // Otherwise, keep default behavior
//   res.jsonp(res.locals.data);
// };

// // Use default router
// server.use('/api', router);

// // Start server
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log('JSON Server is running');
// });


// Import packages
// const express = require("express");
// const home = require("./routes/home");

// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()


// // Middlewares
// const app = express();
// app.use(express.json());

// server.use(middlewares)

// server.get('/echo', (req, res) => {
//     res.jsonp(req.query)
// })

// // To handle POST, PUT and PATCH you need to use a body-parser
// // You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//     if (req.method === 'POST') {
//         req.body.createdAt = Date.now()
//     }
//     // Continue to JSON Server router
//     next()
// })

// // Use default router
// server.use('/api', router)

// // Routes
// // app.use("/home", home);

// // connection
// const port = process.env.PORT || 9001;
// app.listen(port, () => console.log(`Listening to port ${port}`));

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))

server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running')
})

module.exports = server