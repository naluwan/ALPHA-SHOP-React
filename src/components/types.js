export type Product = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
};

export type Coupon = {
  id: string,
  discount: number,
};

export type State = {
  lineItems: LineItem,
  totalAmount: number,
  coupon: Coupon | null,
};

export type Shipping = {
  id: string,
  name: string,
  period: string,
  price: number,
};

export type LineItemType = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
};
