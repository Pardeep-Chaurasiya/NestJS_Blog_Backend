import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { UserRoles } from 'src/utilies/user-role';

export type UserDocument = HydratedDocument<User>;

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
export class User {
  @Prop()
  _id?: mongoose.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  avatar: string;

  @Prop({ type: [String], enum: [UserRoles], default: [UserRoles.READER] })
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
