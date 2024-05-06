import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TagDocument = HydratedDocument<Tag>;

@Schema({
  timestamps: true,
  id: false,
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      delete ret.__v;
      return ret;
    },
  },
})
export class Tag {
  @Prop()
  _id?: mongoose.Types.ObjectId;

  @Prop()
  title: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
