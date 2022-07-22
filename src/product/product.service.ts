import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {

  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

    async findOne(id) : Promise<Product> {
        return await this.productModel.findById(id).exec();;
    }

    async findAll(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }

    async create(createProductDto: CreateProductDto) {
        const newProduct = await  new this.productModel(createProductDto);
        return await newProduct.save();
    }

    async findOneAndUpdate(id, createProductDto: UpdateProductDto): Promise<Product> {
        return await this.productModel.findOneAndUpdate(id, createProductDto, { new: true });
    }

    async delete(id): Promise<any> {
        return await this.productModel.findByIdAndRemove(id);
    }
}
