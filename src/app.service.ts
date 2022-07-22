import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product/product.repository';

@Injectable()
export class AppService {

  constructor(private readonly productResponsitory : ProductRepository) {}

  getHello(){
    return this.productResponsitory.findOne({});
  }
}
