export interface Offer2 {
  Offer: Offer;
  Country: Country;
  State: State;
  City: State;
  Connection_Type: ConnectionType;
  Device: State;
  OS: OS;
}

interface OS {
  android: boolean;
  ios: boolean;
  web: boolean;
  min_ios?: any;
  max_ios?: any;
  min_android?: any;
  max_android?: any;
}
interface ConnectionType {
  cellular: boolean;
  wifi: boolean;
}

interface State {
  include: any[];
  exclude: any[];
}

interface Country {
  include: Include;
  exclude: any[];
}

interface Include {
  US: US;
}

interface US {
  id: number;
  code: string;
  name: string;
}

interface Offer {
  campaign_id: number;
  store_id?: any;
  tracking_type: string;
  campaign_vertical: string;
  currency_name_singular: string;
  currency_name_plural: string;
  network_epc: string;
  name: string;
  tracking_url: string;
  instructions: string;
  disclaimer?: any;
  description: string;
  short_description: string;
  offer_sticker_text_1: string;
  offer_sticker_text_2?: any;
  offer_sticker_text_3?: any;
  offer_sticker_color_1: string;
  offer_sticker_color_2: string;
  offer_sticker_color_3: string;
  sort_order_setting?: any;
  category_1: string;
  category_2?: any;
  amount: number;
  payout_usd: number;
  start_datetime: string;
  end_datetime: string;
  is_multi_reward: boolean;
}

export interface Offer1 {
  offer_id: string;
  offer_name: string;
  offer_desc: string;
  call_to_action: string;
  disclaimer: string;
  offer_url: string;
  offer_url_easy: string;
  payout: number;
  payout_type: string;
  amount: number;
  image_url: string;
  image_url_220x124: string;
  countries: string[];
  platform: string;
  device: string;
  category: Category;
  last_modified: number;
  preview_url: string;
  package_id: string;
  verticals: Vertical[];
}
interface Vertical {
  vertical_id: string;
  vertical_name: string;
}
interface Category {
  '9': string;
}
