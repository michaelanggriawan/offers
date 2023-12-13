import { Injectable } from '@nestjs/common';
import { OfferRepository } from './offer/offer.repository';
import { OfferService } from './offer/offer.service';

@Injectable()
export class AppService {
  constructor(
    private readonly offerRepository: OfferRepository,
    private readonly transformationService: OfferService,
  ) {}

  async createOffer1() {
    const offer1Dto = await this.transformationService.transformOffer1Payload();
    const savedOffer = await this.offerRepository.createOffer(offer1Dto);
    return {
      message: savedOffer.length
        ? 'Offer1 created successfully'
        : 'No Offer1 was created',
      data: savedOffer,
    };
  }

  async createOffer2() {
    const offer2Dto = await this.transformationService.transformOffer2Payload();
    const savedOffer = await this.offerRepository.createOffer(offer2Dto);
    return {
      message: 'Offer1 created successfully',
      data: savedOffer,
    };
  }
}
