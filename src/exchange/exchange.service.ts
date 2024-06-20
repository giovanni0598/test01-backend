import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeService {
    private exchangeRates: { [currency: string]: number } = {
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.72,
    };

    getExchangeRate(): any {
        return this.exchangeRates;
    }

    updateExchangeRate(currency: string, rate: number): void {
        this.exchangeRates[currency] = rate;
    }
}