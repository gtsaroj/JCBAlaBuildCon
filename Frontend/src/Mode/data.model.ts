export interface CardType {
  img: string;
  title: string;
  desc: string;
}

export interface PortfolioCategoryType {
  category: string;
  Datas?: CategoryDataType[];
}
export interface CategoryDataType {
  img: string;
  data: string;
  url: string;
}
