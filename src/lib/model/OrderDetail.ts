import type { ShippingAddress } from '$lib/model/ShippingAddress';
import type { OrderItemDetail } from '$lib/model/OrderItemDetail';

export type OrderDetail = {
	orderId: string;
	orderStatus: string;
	deliveryStatus: string;
	orderDate: string;
	totalPrice: string;
	orderItemDetail: OrderItemDetail[];
	shippingAddress: ShippingAddress;
};
