import express, { Application, ErrorRequestHandler } from "express";
import { Server } from "http";
import { ROUTES } from "./utils/constants";

// Importing routes
import indexRouter from "./routes/index";

// Setting app to type of express application
const app: Application = express();

const PORT = process.env.PORT || 4000;

// setting up Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// usingroutes
app.use(ROUTES.INDEX, indexRouter);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: err.status || 500,
    message: err.message,
  });
};

app.use(errorHandler);

const server: Server = app.listen(PORT, () => {
  console.log(`The 👨‍🏭 server 🚗 is 🏃‍♀️ running 👡 on ⚓ port 🐹 ${PORT}, 🛒 let's 💅 go 😝 catch 🙀 it! 🍟`);
});
