import mongoose from 'mongoose';

async function connect(url) {
  console.log(url);
  mongoose.set('strictQuery', false);
  await mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .then(async () => {})
    .catch((e) => console.error(e));
}

export default connect;
