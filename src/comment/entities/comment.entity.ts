import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

export class Reply {
  @Prop()
  replyAt: Date;

  @Prop()
  exceprt: string;

  @Prop({ index: true })
  replyText: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User', index: true })
  replyBy: string;
}

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
export class Comment {
  @Prop()
  _id?: mongoose.Types.ObjectId;

  @Prop({ index: true })
  commentAt: Date;

  @Prop({ index: true })
  commenText: string;

  @Prop([{ type: Reply, default: [] }])
  replies: Reply;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User', index: true })
  commentBy: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Post', index: true })
  postId: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
