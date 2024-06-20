import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ExchangeService } from './exchange.service';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';


@Controller('exchange')
export class ExchangeController {

    constructor(private readonly exchangeService: ExchangeService) { }

    @ApiBearerAuth()
    @ApiTags('Exchange')
    @UseGuards(JwtAuthGuard)
    @Get('')
    getExchanges(): string {
        const listExchanges =  this.exchangeService.getExchangeRate()
        return listExchanges
    }

    @ApiBearerAuth()
    @ApiTags('Exchange')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                rate: {
                    type: 'number',
                    description: 'Tasa de cambio a actualizar.'
                }
            },
            required: ['rate']
        }
    })
    @UseGuards(JwtAuthGuard)
    @Put(':currency')
    updateExchangeRate(@Param('currency') currency: string, @Body('rate') body: { rate: number }) {
        const { rate } = body;
        this.exchangeService.updateExchangeRate(currency, rate);
        return { message: 'La conversion a sido modificado correctamente, consulta la ruta /exchange para confirmarlo' };
    }
}
