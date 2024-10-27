import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://abdullahrefaat:mdb1235679@cluster0.swx3h.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("DB connected");
    });
};
