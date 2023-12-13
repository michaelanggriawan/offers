import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';
import { CreateOfferResponseDto } from './dtos/create-offer.dto';

@Controller('offers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('offer1')
  @ApiResponse({
    status: 201,
    description: 'Create Offer1 response',
    type: CreateOfferResponseDto,
  })
  async createOffer1() {
    return this.appService.createOffer1();
  }

  @Post('offer2')
  @ApiResponse({
    status: 201,
    description: 'Create Offer2 response',
    type: CreateOfferResponseDto,
  })
  async createOffer2() {
    return this.appService.createOffer2();
  }
}
