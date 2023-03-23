import cashImg from '../../images/cash.svg';
import paytureImg from '../../images/payture.svg';
import yandexImg from '../../images/yandexpay.svg';
import sberImg from '../../images/sberpay.svg';

export type paymentItem = {
    name: string;
    img: string;
    note?: string;
};

class TypePayment {
    readonly Cash: paymentItem = {
        name: 'Наличные / Наложенный платеж',
        img: cashImg
    };

    readonly Payture: paymentItem = {
        name: 'Банковская карта',
        img: paytureImg
    };

    readonly Yandex: paymentItem = {
        name: 'Yandex Pay',
        img: yandexImg
    };

    readonly Sber: paymentItem = {
        name: 'SberPay',
        img: sberImg
    };

    readonly ItemsArray: paymentItem[] = [this.Cash, this.Payture, this.Yandex, this.Sber];
}

export default new TypePayment();
