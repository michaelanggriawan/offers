import { ApiProperty } from '@nestjs/swagger';

export class CreateOfferDto {
  @ApiProperty({ example: '19524555' })
  externalOfferId: string;

  @ApiProperty({ example: 'MyGym - iOS' })
  name: string;

  @ApiProperty({ example: 'Play and reach level 23 within 14 days.' })
  description: string;

  @ApiProperty({ example: 'Play and reach level 23 within 14 days.' })
  requirements: string;

  @ApiProperty({ example: 'https://some.url' })
  offerUrlTemplate: string;

  @ApiProperty({ example: 'https://some.url' })
  thumbnail: string;

  @ApiProperty({ example: 'offer1' })
  providerName: string;

  @ApiProperty({ example: 0 })
  isAndroid: number;

  @ApiProperty({ example: 1 })
  isIos: number;

  @ApiProperty({ example: 'vxrya743' })
  slug: string;

  @ApiProperty({ example: 0 })
  isDesktop: number;

  @ApiProperty({ example: 19 })
  id: number;
}

export class CreateOfferResponseDto {
  @ApiProperty({ example: 'Offer1 created successfully' })
  message: string;

  @ApiProperty({ type: [CreateOfferDto], example: CreateOfferDto })
  data: CreateOfferDto[];
}
