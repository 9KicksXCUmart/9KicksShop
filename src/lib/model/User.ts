import type { ShippingAddress } from '$lib/model/ShippingAddress';

export type User = {
    email: string;
    firstName: string;
    isVerified: boolean;
    lastName: string;
    password: string;
    shippingAddress: ShippingAddress
};