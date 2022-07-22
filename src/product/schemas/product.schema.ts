import { from } from "rxjs";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import { Document } from "mongoose";
import { type } from "os";
import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String,
});