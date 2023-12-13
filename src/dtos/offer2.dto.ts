import { ValidateNested } from 'class-validator';
import { Type, Expose, Transform, Exclude } from 'class-transformer';

class CountryDto {
  id: number;
  code: string;
  name: string;
}

class ConnectionTypeDto {
  cellular: boolean;
  wifi: boolean;
}

class StateCityDto {
  include: string[];

  exclude: string[];
}

class DeviceDto {
  state: { include: string[]; exclude: string[] };

  city: { include: string[]; exclude: string[] };
}

class OsDto {
  @Expose({ name: 'android' })
  @Transform(({ value }) => value, { toPlainOnly: true })
  isAndroid: boolean;

  @Expose({ name: 'ios' })
  @Transform(({ value }) => value, { toPlainOnly: true })
  isIos: boolean;

  @Expose({ name: 'web' })
  @Transform(({ value }) => value, { toPlainOnly: true })
  isDesktop: boolean;

  min_ios: number;
  max_ios: number;
  min_android: number;
  max_android: number;
}

class OfferDetailsDto {
  @Expose({ name: 'campaign_id' })
  externalOfferId: string;

  tracking_type: string;

  campaign_vertical: string;

  currency_name_singular: string;

  currency_name_plural: string;

  is_multi_reward: boolean;

  tracking_url: string;

  instructions: string;

  short_description: string;

  icon: string;

  description: string;

  disclaimer?: string;

  offer_sticker_text_1: string;

  offer_sticker_text_2: string;

  offer_sticker_text_3: string;

  offer_sticker_color_1: string;

  offer_sticker_color_2: string;

  offer_sticker_color_3: string;

  sort_order_setting: string;

  category_1: string;

  category_2: string;

  amount: number;

  payout_usd: number;

  start_datetime: string;

  end_datetime: string;

  network_epc: string;
}

export class Offer2Dto {
  @Expose()
  @Transform(({ obj }) => {
    return obj.Offer.campaign_id;
  })
  externalOfferId: string;

  @Expose()
  @Transform(({ obj }) => {
    return obj.Offer.name;
  })
  name: string;

  @Transform(({ obj }) => {
    return obj.Offer.icon;
  })
  @Expose()
  thumbnail: string;

  @Transform(({ obj }) => {
    return obj.Offer.tracking_url;
  })
  @Expose()
  offerUrlTemplate: string;

  @Expose()
  @Transform(({ obj }) => {
    return obj.Offer.instructions;
  })
  requirements: string;

  @Transform(({ obj }) => {
    return obj.Offer.description;
  })
  @Expose({ name: 'description' })
  description: string;

  @Expose()
  @Transform(({ value }) => (value !== undefined ? value : 'offer2'))
  providerName: string;

  @Expose()
  @Transform(() => {
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let slug = '';

    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      slug += charset.charAt(randomIndex);
    }

    return slug;
  })
  slug: string;

  @Expose()
  @Transform(({ obj }) => {
    return obj.OS.android;
  })
  isAndroid: boolean;

  @Expose()
  @Transform(({ obj }) => {
    return obj.OS.web;
  })
  isIos: boolean;

  @Expose()
  @Transform(({ obj }) => {
    return obj.OS.ios;
  })
  isDesktop: boolean;

  @Exclude()
  @Type(() => ConnectionTypeDto)
  Country: ConnectionTypeDto;

  @Exclude()
  @ValidateNested()
  @Type(() => CountryDto)
  Connection_Type: CountryDto;

  @Exclude()
  @Type(() => StateCityDto)
  State: StateCityDto;

  @Exclude()
  @Type(() => StateCityDto)
  City: StateCityDto;

  @Exclude()
  @ValidateNested()
  @Type(() => DeviceDto)
  Device: DeviceDto;

  @Exclude()
  @ValidateNested()
  @Type(() => OsDto)
  OS: OsDto;

  @Exclude()
  @ValidateNested()
  @Type(() => OfferDetailsDto)
  Offer: OfferDetailsDto;
}
