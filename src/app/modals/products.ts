export interface IProduct {
    id?: string,
    title: string,
    price: number,
    year: string,
    image?:  string,
    configure: IProductConfig,
    quantity?: number;
}

export interface IProductConfig {
    batteryCapacity: string,
    maxSpeed?: string,
    volume?: string
}