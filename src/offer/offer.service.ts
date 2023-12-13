import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Offer1Dto } from '../dtos/offer1.dto';
import { Offer2Dto } from '../dtos/offer2.dto';
import { payload as payloadOffer1 } from '../payload/offer1.payload';
import { payload as payloadOffer2 } from '../payload/offer2.payload';
import { Offer } from '../entities/offer.entity';
import { Offer1, Offer2 } from './offer.types';

@Injectable()
export class OfferService {
  async transformOffer1Payload(): Promise<Array<Offer>> {
    const result = [];
    const payloads = payloadOffer1.response.offers;

    for (let i = 0; i < payloads.length; i++) {
      const payload = payloads[i];
      try {
        this.isValidResponsePayloadForPayload1(payload);
      } catch (error) {
        // print the warning error, if the type object doesn't pass the validation type
        // skip and continue to the next payload
        console.warn(`Error in payload at index ${i}: ${error.message}`);
        break;
      }

      // serialize the payload to acceptable entity
      const payloadDtoInstance = plainToInstance(Offer1Dto, payload);
      result.push(payloadDtoInstance);
    }

    return result;
  }

  async transformOffer2Payload() {
    const result = [];
    const payloads = payloadOffer2.data;

    for (const [key, value] of Object.entries(payloads)) {
      try {
        this.isValidResponsePayloadForPayload2(value);
      } catch (error) {
        // print the warning error, if the type object doesn't pass the validation type
        // skip and continue to the next payload
        console.warn(`Error in payload at ${key}: ${error.message}`);
        break;
      }

      // serialize the payload to acceptable entity
      const payloadDtoInstance = plainToInstance(Offer2Dto, value);
      result.push(payloadDtoInstance);
    }

    return result;
  }

  private isValidResponsePayloadForPayload1(payload: Offer1) {
    if (typeof payload !== 'object' || payload === null) {
      throw new Error('Invalid payload: Not an object');
    }

    if (typeof payload.offer_id !== 'string') {
      throw new Error('Invalid payload: offer_id should be a string');
    }

    if (typeof payload.offer_name !== 'string') {
      throw new Error('Invalid payload: offer_name should be a string');
    }

    if (typeof payload.offer_desc !== 'string') {
      throw new Error('Invalid payload: offer_desc should be a string');
    }

    if (typeof payload.call_to_action !== 'string') {
      throw new Error('Invalid payload: call_to_action should be a string');
    }

    if (typeof payload.disclaimer !== 'string') {
      throw new Error('Invalid payload: disclaimer should be a string');
    }

    if (
      typeof payload.offer_url !== 'string' ||
      !this.isValidUrl(payload.offer_url)
    ) {
      throw new Error('Invalid payload: payload_url should be a valid URL');
    }

    if (
      typeof payload.offer_url_easy !== 'string' ||
      !this.isValidUrl(payload.offer_url_easy)
    ) {
      throw new Error('Invalid payload: offer_url_easy should be a valid URL');
    }

    if (typeof payload.payout !== 'number') {
      throw new Error('Invalid payload: payout should be a number');
    }

    if (typeof payload.payout_type !== 'string') {
      throw new Error('Invalid payload: payout_type should be a string');
    }

    if (typeof payload.amount !== 'number') {
      throw new Error('Invalid payload: amount should be a number');
    }

    if (
      typeof payload.image_url !== 'string' ||
      !this.isValidUrl(payload.image_url)
    ) {
      throw new Error('Invalid payload: image_url should be a valid URL');
    }

    if (
      typeof payload.image_url_220x124 !== 'string' ||
      !this.isValidUrl(payload.image_url_220x124)
    ) {
      throw new Error(
        'Invalid payload: image_url_220x124 should be a valid URL',
      );
    }

    if (
      !Array.isArray(payload.countries) ||
      !payload.countries.every((country) => typeof country === 'string')
    ) {
      throw new Error(
        'Invalid payload: countries should be an array of strings',
      );
    }

    if (typeof payload.platform !== 'string') {
      throw new Error('Invalid payload: platform should be a string');
    }

    if (typeof payload.device !== 'string') {
      throw new Error('Invalid payload: device should be a string');
    }

    if (
      !Array.isArray(payload.verticals) ||
      !payload.verticals.every(
        (vertical) =>
          typeof vertical === 'object' &&
          typeof vertical.vertical_id === 'string' &&
          typeof vertical.vertical_name === 'string',
      )
    ) {
      throw new Error(
        'Invalid payload: verticals should be an array of objects with vertical_id and vertical_name',
      );
    }

    if (typeof payload.last_modified !== 'number') {
      throw new Error('Invalid payload: last_modified should be number');
    }

    if (
      typeof payload.preview_url !== 'string' ||
      !this.isValidUrl(payload.preview_url)
    ) {
      throw new Error('Invalid payload: preview_url should be a valid URL');
    }

    if (typeof payload.package_id !== 'string') {
      throw new Error('Invalid payload: package_id should be a string');
    }

    return true;
  }

  private isValidResponsePayloadForPayload2(payload: Offer2) {
    const offer = payload.Offer;
    if (!offer || typeof offer !== 'object') {
      throw new Error('Invalid payload: payload should be an object');
    }

    if (typeof offer.campaign_id !== 'number') {
      throw new Error('Invalid payload: campaign_id should be a number');
    }

    if (offer.store_id !== null && typeof offer.store_id !== 'number') {
      throw new Error('Invalid payload: store_id should be null or a number');
    }

    if (typeof offer.tracking_type !== 'string') {
      throw new Error('Invalid payload: tracking_type should be a string');
    }

    if (typeof offer.campaign_vertical !== 'string') {
      throw new Error('Invalid payload: campaign_vertical should be a string');
    }

    if (typeof offer.currency_name_singular !== 'string') {
      throw new Error(
        'Invalid payload: currency_name_singular should be a string',
      );
    }

    if (typeof offer.currency_name_plural !== 'string') {
      throw new Error(
        'Invalid payload: currency_name_plural should be a string',
      );
    }

    if (typeof offer.network_epc !== 'string') {
      throw new Error('Invalid payload: network_epc should be a string');
    }

    if (typeof offer.name !== 'string') {
      throw new Error('Invalid payload: name should be a string');
    }

    if (typeof offer.tracking_url !== 'string') {
      throw new Error('Invalid payload: tracking_url should be a string');
    }

    if (typeof offer.instructions !== 'string') {
      throw new Error('Invalid payload: instructions should be a string');
    }

    if (typeof offer.description !== 'string') {
      throw new Error('Invalid payload: description should be a string');
    }

    if (typeof offer.short_description !== 'string') {
      throw new Error('Invalid payload: short_description should be a string');
    }

    if (typeof offer.category_1 !== 'string') {
      throw new Error('Invalid payload: category_1 should be a string');
    }

    if (typeof offer.amount !== 'number') {
      throw new Error('Invalid payload: amount should be a number');
    }

    if (typeof offer.payout_usd !== 'number') {
      throw new Error('Invalid payload: payout_usd should be a number');
    }

    if (typeof offer.start_datetime !== 'string') {
      throw new Error('Invalid payload: start_datetime should be a string');
    }

    if (typeof offer.end_datetime !== 'string') {
      throw new Error('Invalid payload: end_datetime should be a string');
    }

    if (typeof offer.is_multi_reward !== 'boolean') {
      throw new Error('Invalid payload: is_multi_reward should be a boolean');
    }

    const country = payload.Country;

    if (!country || typeof country !== 'object') {
      throw new Error('Invalid payload: Country should be an object');
    }

    if (!country.include || typeof country.include !== 'object') {
      throw new Error('Invalid payload: Country.include should be an object');
    }

    const state = payload.State;

    if (!state || typeof state !== 'object') {
      throw new Error('Invalid payload: State should be an object');
    }

    const city = payload.City;

    if (!city || typeof city !== 'object') {
      throw new Error('Invalid payload: City should be an object');
    }

    const connectionType = payload.Connection_Type;

    if (!connectionType || typeof connectionType !== 'object') {
      throw new Error('Invalid payload: Connection_Type should be an object');
    }

    const device = payload.Device;

    if (!device || typeof device !== 'object') {
      throw new Error('Invalid payload: Device should be an object');
    }

    const os = payload.OS;

    if (!os || typeof os !== 'object') {
      throw new Error('Invalid payload: OS should be an object');
    }

    if (typeof os.android !== 'boolean') {
      throw new Error('Invalid payload: OS.android should be a boolean');
    }
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
}
