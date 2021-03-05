module.exports = (mongoose) => {
    const { Schema, model: Model } = mongoose;
    const { String, ObjectId, Number } = Schema.Types;

    const BookSchema = new Schema({
        title: {
            type: String, 
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'Author',
            required: true
        },
        summary: {
            type: String,
        },
        isbn: {
            type: String,
        },
        genre: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Genre'
            }
       ]
    }, {timestamps: true});

   // Virtual for book's URL
    BookSchema
    .virtual('url')
    .get(function () {
        return '/catalog/book/' + this._id;
    });

    return Model('Book', BookSchema);
};



