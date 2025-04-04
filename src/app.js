import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("api/v1/auth", authRoutes);
app.use("api/v1/food", foodRoutes);
app.use("api/v1/order", orderRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;