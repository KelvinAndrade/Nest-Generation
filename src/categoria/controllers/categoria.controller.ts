import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";

@Controller('/categoria')
export class categoriaController {
    constructor(private readonly service: CategoriaService) {}


    @Get()
    @HttpCode(HttpStatus.OK)
    findaAll(): Promise<categoria[]> {
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<categoria>{
        return this.service.findById(id)
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descrição') descricao: string): Promise<categoria[]>{
        return this.service.findByDescricao(descricao)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: categoria): Promise<categoria> {
        return this.service.create(categoria)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: categoria): Promise<categoria>{
        return this.service.update(categoria)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }

}
