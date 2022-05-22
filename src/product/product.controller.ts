import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { Product } from './interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'received',
      product: product,
    });
  }

  @Get()
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json(products);
  }

  @Get('/:productId')
  async getProduct(@Res() res, @Param('productId') productId) {
    const product = await this.productService.getProduct(productId);
    if (!product) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json(product);
  }

  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productId') productId) {
    const productDeleted = await this.productService.deleteProduct(productId);
    if (!productDeleted) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'Product Deleted Successfully',
      productDeleted,
    });
  }

  @Put('/update')
  async updateProduct(
    @Res() res,
    @Body() createProductDTO: CreateProductDTO,
    @Query('productId') productId,
  ) {
    const updatedProduct = await this.productService.deleteProduct(productId);
    if (!Product) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'Product Deleted Successfully',
      updatedProduct,
    });
  }
}
