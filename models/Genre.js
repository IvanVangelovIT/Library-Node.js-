module.exports = (mongoose) => {
    const { Schema, model: Model } = mongoose;
    const { String, ObjectId, Number } = Schema.Types;

    const GenreSchema = new Schema({
        name: { 
            type: String,
            minLength: 3,
            maxlength: 60,
        }
    });

    return Model('Genre', GenreSchema);
};



