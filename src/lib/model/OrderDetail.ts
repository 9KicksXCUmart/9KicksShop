import type { Product } from '$lib/model/Product';
import type { ShippingAddress } from '$lib/model/ShippingAddress';

export type OrderDetail = {
	orderId: string;
	orderStatus: string;
	deliveryStatus: string;
	orderDate: string;
	totalPrice: string;
	orderItemDetail: Product[];
	shippingAddress: ShippingAddress;
};
