import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ExchangeService } from './exchange.service';
@Controller('exchange')
export class ExchangeController {

    constructor(private readonly exchangeService: ExchangeService) { }

    @UseGuards(JwtAuthGuard)
    @Get('')
    getExchanges(): string {
        const listExchanges =  this.exchangeService.getExchangeRate()
        return listExchanges
    }

    @UseGuards(JwtAuthGuard)
    @Put(':currency')
    updateExchangeRate(@Param('currency') currency: string, @Body() body: { rate: number }) {
        const { rate } = body;
        this.exchangeService.updateExchangeRate(currency, rate);
        return { message: 'La conversion a sido modificado correctamente, consulta la ruta /exchange para confirmarlo' };
    }
}
