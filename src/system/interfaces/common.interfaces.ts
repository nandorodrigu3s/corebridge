export interface NFTData {
  id: number,
  num_sales: number,
  category: string,
  image_url: string,
  name: string,
  description: string,
  external_link: string,
  permalink: string,
  collection: {
    created_date: string,
    name: string,
  },
  token_id: string
} 