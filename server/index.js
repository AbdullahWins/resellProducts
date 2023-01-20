const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://gameCheap_user:${process.env.DB_PASSWORD}@gamecheap.c6qi1ej.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send("unauthorized access");
  }

  const token = authHeader;

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: "forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
}

async function run() {
  try {
    const usersCollection = client.db("gameCheap").collection("users");
    const productsCollection = client.db("gameCheap").collection("products");
    const paymentsCollection = client.db("gameCheap").collection("payments");

    //middlewares here (jwt and verifyAdmin)

    //jwt here

    // app.get("/jwt", async (req, res) => {
    //   const email = req.query.email;
    //   const query = { email: email };
    //   const user = await usersCollection.findOne(query);
    //   if (user) {
    //     const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, {
    //       expiresIn: "1h",
    //     });
    //     return res.send({ accessToken: token });
    //   }
    //   res.status(403).send({ accessToken: "" });
    // });

    //admin verification

    // const verifyAdmin = async (req, res, next) => {
    //   const decodedEmail = req.decoded.email;
    //   const query = { email: decodedEmail };
    //   const user = await usersCollection.findOne(query);

    //   if (user?.userType !== "admin") {
    //     return res.status(403).send({ message: "forbidden access" });
    //   }
    //   next();
    // };

    //get all products
    app.get("/products", async (req, res) => {
      const query = {};
      const products = await productsCollection.find(query).toArray();
      res.send(products);
    });

    //get all categories
    app.get("/categories", async (req, res) => {
      const query = {};
      const cursor = productsCollection.find(query);
      const services = await cursor.toArray();
      console.log(services);
      res.send(services);
    });

    //category here
    app.get("/category/:cateName", async (req, res) => {
      const cateName = req.params.cateName;
      const query = { productCategory: cateName };
      const cursor = productsCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
      console.log(products);
    });

    //promoted here
    app.get("/promoted", async (req, res) => {
      const query = { promoted: true };
      const cursor = productsCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
      console.log(products);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const emailId = req.query.email;
      const query = { email: emailId };
      const result = await usersCollection.findOne(query);
      console.log(result);
      res.send(result);
    });

    app.get("/allusers", async (req, res) => {
      const query = {};
      const users = await usersCollection.find(query).toArray();
      res.send(users);
    });

    //payments here

    // app.post("/create-payment-intent", async (req, res) => {
    //   const booking = req.body;
    //   const price = booking.price;
    //   const amount = price * 100;

    //   const paymentIntent = await stripe.paymentIntents.create({
    //     currency: "usd",
    //     amount: amount,
    //     payment_method_types: ["card"],
    //   });
    //   res.send({
    //     clientSecret: paymentIntent.client_secret,
    //   });
    // });

    // app.post("/payments", async (req, res) => {
    //   const payment = req.body;
    //   const result = await paymentsCollection.insertOne(payment);
    //   const id = payment.bookingId;
    //   const filter = { _id: ObjectId(id) };
    //   const updatedDoc = {
    //     $set: {
    //       paid: true,
    //       transactionId: payment.transactionId,
    //     },
    //   };
    //   const updatedResult = await productsCollection.updateOne(
    //     filter,
    //     updatedDoc
    //   );
    //   res.send(result);
    // });

    // app.get("/users", async (req, res) => {
    //   const query = {};
    //   const users = await usersCollection.find(query).toArray();
    //   res.send(users);
    // });

    // app.post("/users", async (req, res) => {
    //   const user = req.body;
    //   console.log(user);
    //   const result = await usersCollection.insertOne(user);
    //   res.send(result);
    // });

    // app.put("/users/admin/:id", verifyJWT, verifyAdmin, async (req, res) => {
    //   const id = req.params.id;
    //   const filter = { _id: ObjectId(id) };
    //   const options = { upsert: true };
    //   const updatedDoc = {
    //     $set: {
    //       userType: "admin",
    //     },
    //   };
    //   const result = await usersCollection.updateOne(
    //     filter,
    //     updatedDoc,
    //     options
    //   );
    //   res.send(result);
    // });

    // // temporary to update price field on appointment options
    // app.get('/addPromoted', async (req, res) => {
    //     const filter = {}
    //     const options = { upsert: true }
    //     const updatedDoc = {
    //         $set: {
    //             promoted: true
    //         }
    //     }
    //     const result = await productsCollection.updateMany(filter, updatedDoc, options);
    //     res.send(result);
    // })

    //     app.get("/users", verifyJWT, verifyAdmin, async (req, res) => {
    //       const query = {};
    //       const users = await usersCollection.find(query).toArray();
    //       res.send(users);
    //     });

    //     app.post("/users", verifyJWT, verifyAdmin, async (req, res) => {
    //       const user = req.body;
    //       const result = await usersCollection.insertOne(user);
    //       res.send(result);
    //     });

    //     app.delete("/users/:id", verifyJWT, verifyAdmin, async (req, res) => {
    //       const id = req.params.id;
    //       const filter = { _id: ObjectId(id) };
    //       const result = await usersCollection.deleteOne(filter);
    //       res.send(result);
    //     });
  } finally {
  }
}
run().catch(console.log);

const blogs = require("./data/blogs.json");

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/", async (req, res) => {
  res.send("Game Cheap Server");
});

app.listen(port, () => console.log(`Game Cheap is running on port: ${port}`));
