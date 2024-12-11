import mongoose, { Schema, Document } from 'mongoose';

interface NoteDocument extends Document {
    content: string;
}

const NoteSchema: Schema = new Schema({
    content: { type: String }, 
});


const NoteModel = mongoose.model<NoteDocument>('Note', NoteSchema);

export default NoteModel;