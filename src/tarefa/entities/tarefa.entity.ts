import { IsNotEmpty, MaxLength } from "class-validator";
import { categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_tarefa'})
export class Tarefa{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    nome: string

    @IsNotEmpty()
    @MaxLength(500)
    @Column({nullable: false, length: 500})
    descricao: string

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    responsavel: string

    @Column()
    data: Date

    @Column()
    status: boolean

    @ManyToOne(() => categoria, (categoria) => categoria.tarefas, {
        onDelete: "CASCADE"
    })
    categoria: categoria
}