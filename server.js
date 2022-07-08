import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import doctorRoute from "./Routes/DoctorRoutes.js";
import customerRoute from "./Routes/CustomerRoutes.js";
import specializationRoute from "./Routes/SpecializationRoutes.js";
import appointmentRouter from "./Routes/AppointmentRoutes.js";
import companyRoute from "./Routes/CompanyRoutes.js";
import diseasesRoute from "./Routes/DiseasesRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
app.use("/api/import", ImportData);
app.use("/api/doctors", doctorRoute);
app.use("/api/customers", customerRoute);
app.use("/api/company", companyRoute);
app.use("/api/specialization", specializationRoute);
app.use("/api/users", userRouter);
app.use("/api/appointment", appointmentRouter);
app.use("/api/diseases", diseasesRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server run in port ${PORT}`));
