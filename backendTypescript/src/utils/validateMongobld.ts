import mongoose from "mongoose";

// Function to validate MongoDB ID
const validateMongoDbId = (id: string): void => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("This id is not valid or not Found");
};

export default validateMongoDbId;
