import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfferService } from './offer/offer.service';
import { DatabaseModule } from './database/database.module';
import { OfferRepository } from './offer/offer.repository';
import { offerProviders } from './offer/offer.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, OfferRepository, OfferService, ...offerProviders],
})
export class AppModule {}
