const mongoose=require('mongoose');

const Db_Url=process.env.MONGO_URI

class ConnectionMg{
  static conncctDB=()=>{
    console.log(Db_Url)
    
mongoose.connect(Db_Url,
  {
    dbName: "preShop"
  }
)
const db =mongoose.connection;
db.on('error',console.error.bind(console, 'MongoDB connection error:'))
db.once('open',()=>(
  console.log('db_connection')
))

}
}

module.exports= ConnectionMg;