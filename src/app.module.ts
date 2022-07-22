import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PostModule } from './post/post.module';
// import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { ProductRepository } from './product/product.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pet_store', { useNewUrlParser: true }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 

