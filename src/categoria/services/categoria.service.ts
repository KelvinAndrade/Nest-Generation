import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { categoria } from "../entities/categoria.entity";

export class CategoriaService {
    constructor (
        @InjectRepository(categoria)
        private categoriaRepository: Repository<categoria>
     ) {}

     async findAll(): Promise<categoria[]>{
        return this.categoriaRepository.find({
            relations: {
                tarefas: true
            }
        })
    }

    async findById (id: number): Promise<categoria>{
        let categoria= await this.categoriaRepository.findOne({
            where: { 
                id
            },

            relations: {
                tarefas: true
            }
        })

        if(categoria)
            throw new HttpException ('categoria não foi encontrada!', HttpStatus.NOT_FOUND)
        return categoria
    }

    async findByDescricao(descricao: string): Promise<categoria[]> {
        return this.categoriaRepository.find({
            where: {
                descricao: ILike('%${descricao}%')
            },

            relations: {
                tarefas: true
            }

            }
        )
    }

    async create (categoria: categoria): Promise<categoria> {
        return this.categoriaRepository.save(categoria)
    }

    async update(categoria: categoria): Promise<categoria>{

        let categoriaUptade = await this.findById(categoria.id)

        if (!categoriaUptade || !categoria.id)
        throw new HttpException('categoria não encontrada', HttpStatus.NOT_FOUND)

        return this.categoriaRepository.save(categoria)
    }

    async delete(id: number): Promise<DeleteResult>{

        let categoriaDelete = await this.findById(id)

        if(!categoriaDelete)
            throw new HttpException ('A categoria não foi encontrada', HttpStatus.NOT_FOUND)
        return this.categoriaRepository.delete(id)
    }
}