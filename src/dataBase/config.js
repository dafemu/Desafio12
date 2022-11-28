import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/passport-mongo");
// mongodb+srv://david:YTLQ_!e2@#hzKfc@cluster0.ixthdm7.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://david:Fernando1234.@cluster0.ixthdm7.mongodb.net/?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  

mongoose.connection.on('open', _ => {
    console.log('Te has conectado a la BD');
})
.on('error', (error) => {
    console.log('Error en la conexion a la BD: ', error);
})

export default mongoose;
