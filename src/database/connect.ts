import mongoose, { ConnectOptions } from "mongoose";

const Connect = () => {
  mongoose
    .connect(`${process.env.MONGO_DB}`)
    .then(() => {
      console.log("DATABASE SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default Connect;
