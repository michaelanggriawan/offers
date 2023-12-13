import { ValidateNested } from 'class-validator';
import { Expose, Type, Exclude, Transform } from 'class-transformer';

class VerticalDto {
  vertical_id: string;

  vertical_name: string;
}

class CategoryDto {
  [key: string]: string;
}

export class Offer1Dto {
  @Expose({ name: 'offer_id' })
  externalOfferId: number;

  @Expose({ name: 'offer_name' })
  name: string;

  @Expose({ name: 'offer_desc' })
  description: string;

  @Expose({ name: 'call_to_action' })
  requirements: string;

  @Expose({ name: 'image_url' })
  thumbnail: string;

  @Expose({ name: 'offer_url' })
  offerUrlTemplate: string;

  @Expose()
  @Transform(({ value }) => (value !== undefined ? value : 'offer1'))
  providerName: string;

  @Expose()
  @Transform(({ obj }) => {
    return obj.platform === 'mobile' && obj.device !== 'iphone_ipad' ? 1 : 0;
  })
  isAndroid: boolean;

  @Expose()
  @Transform(({ obj }) => {
    return obj.platform === 'mobile' && obj.device === 'iphone_ipad' ? 1 : 0;
  })
  isIos: boolean;

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
    return obj.platform === 'desktop' ? 1 : 0;
  })
  isDesktop: boolean;

  @ValidateNested({ each: true })
  @Type(() => VerticalDto)
  @Exclude()
  verticals: VerticalDto[];

  @ValidateNested({ each: true })
  @Type(() => CategoryDto)
  @Exclude()
  category: CategoryDto;

  @Exclude()
  device: string;

  @Exclude()
  platform: string;

  @Exclude()
  offer_url_easy: string;

  @Exclude()
  payout: number;

  @Exclude()
  payout_type: string;

  @Exclude()
  disclaimer: string;

  @Exclude()
  amount: number;

  @Exclude()
  image_url_220x124: string;

  @Exclude()
  @Type(() => Array<string>)
  countries: Array<string>;

  @Exclude()
  last_modified: number;

  @Exclude()
  preview_url: string;

  @Exclude()
  package_id: string;
}
