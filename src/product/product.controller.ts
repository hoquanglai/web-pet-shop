import { Controller, Get, Post, Body, Patch, Param, Delete, Res, NotFoundException, HttpStatus, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Res() res, @Body() createProductDto: CreateProductDto) {
    const product = this.productService.create(createProductDto);
    return res.status(HttpStatus.OK).json({
      message: 'Product has been submitted successfully!',
      post: product,
    });
  }

  @Get('products')
  findAll(@Res() res) {
    const products = this.productService.findAll();
    return res.status(HttpStatus.OK).json(products);
  }

  @Get(':id')
  findOne(@Res() res,  @Query('id', new ValidateObjectId()) id) {
    const product =  this.productService.findOne(+id);
    if (!product) {
      throw new NotFoundException('Product does not exist!');
    }
    return res.status(HttpStatus.OK).json(product);
  }

  @Patch(':id')
  update(@Query('id', new ValidateObjectId()) id, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.findOneAndUpdate(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Res() res,  @Query('id', new ValidateObjectId()) id) {
    const deleteProduct = this.productService.delete(+id);

    if(!deleteProduct) {
      throw new NotFoundException('Product does not exist!');
    }

    return res.status(HttpStatus.OK).json({
      message: 'Product has been deleted!',
      post: deleteProduct,
    });
  }
}
