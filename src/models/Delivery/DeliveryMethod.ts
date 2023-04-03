import pickupImg from '../../images/pickup.svg';
import emsImg from '../../images/ems.svg';
import deliveryRussiaImg from '../../images/pochta-rossii.svg';
import cdekImg from '../../images/cdek.svg';

export type deliveryMethodTypeItem = {
    name: string;
    img: string;
    decription?: string;
    note?: string;
    price: number;
};

class DeliveryMethod {
    readonly Pickup: deliveryMethodTypeItem = {
        name: 'Cамовывоз',
        img: pickupImg,
        price: 0,
        decription:
            'Самовывоз осуществляется из магазина по адресу Каретный ряд, 8. По готовности заказа вы получите SMS-уведомление. Срок хранения: 2 календарных дня.'
    };

    readonly EMS: deliveryMethodTypeItem = {
        name: 'EMS Почта России',
        img: emsImg,
        price: 1250
    };

    readonly DeliveryRussia: deliveryMethodTypeItem = {
        name: 'Почта России',
        img: deliveryRussiaImg,
        note: 'Бесплатно',
        price: 0
    };

    readonly Cdek: deliveryMethodTypeItem = {
        name: 'Курьером СДЭК (за МКАД и в Подмосковье)',
        img: cdekImg,
        price: 600,
        decription:
            'Вы можете выбрать пункт самовывоза СДЭК. Если пункт самовывоза не выбран или недоступен, доставка будет производиться по вашему выбранному адресу. Срок хранения посылки в ПВЗ составляет 7 календарных дней.'
    };

    readonly DelvieryArray: deliveryMethodTypeItem[] = [this.Pickup, this.EMS, this.DeliveryRussia, this.Cdek];
}

export default new DeliveryMethod();
