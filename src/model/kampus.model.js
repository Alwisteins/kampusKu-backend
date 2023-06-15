import mongoose, { Schema } from "mongoose";

const kampusSchema = new Schema({
  kampusId: {
    type: mongoose.SchemaTypes.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  name: {
    type: String,
    required: [true, "name required, please input a name"],
  },
  tipe: {},
  deskripsi: {},
  foto: {},
  akreditasi: {},
  fakultas: {},
  rank: {},
  location: {},
  link: {},
});

const Kampus = mongoose.model("Kampus", kampusSchema);
export default Kampus;
