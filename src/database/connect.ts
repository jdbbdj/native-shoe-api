import mongoose from "mongoose";

const Connect = () => {
  const uri =
    "mongodb+srv://jamesnative:6KEaM2icAY0it5s1@native-shoe-db.wbaghbd.mongodb.net/?retryWrites=true&w=majority";
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DATABASE SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default Connect;
