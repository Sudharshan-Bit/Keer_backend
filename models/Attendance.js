import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({

  firstName: String,
  lastName: String,
  time: String,
  date: String,
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);
export default Attendance;