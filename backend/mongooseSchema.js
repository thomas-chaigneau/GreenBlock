const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  site: String,
  contentLength: String,
  date: Date
});