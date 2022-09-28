interface IOrder {
  id?: number,
  userId: number,
  productsIds?: number[],
  orderId?: number
}

export default IOrder;