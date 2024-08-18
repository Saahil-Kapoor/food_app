const mongoose = require('mongoose');

const mongoUri = "mongodb+srv://mitlmsapp:GQBQBE5aaM4OUuuF@cluster0.kjdtdnu.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0"

/*
const mongoDB =async()=>{
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
        console.log("connected successfully")
    });
}
*/
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log("successfully connected");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray().then((result)=>{
            //global.food_items = result;
            const foodCategory =  mongoose.mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray().then((catData,err)=>{
                if(err) console.log(err);
                else{
                    global.food_items = result;
                    global.foodCategory = catData;
                }
            })


        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports=connectToMongoDB;
