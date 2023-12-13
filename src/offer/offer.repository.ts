import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Offer } from '../entities/offer.entity';

@Injectable()
export class OfferRepository {
  constructor(
    @Inject('OFFER_REPOSITORY')
    private offerRepository: Repository<Offer>,
  ) {}

  async createOffer(offer: Array<Offer>): Promise<Array<Offer>> {
    return await this.offerRepository.save(offer);
  }
}
