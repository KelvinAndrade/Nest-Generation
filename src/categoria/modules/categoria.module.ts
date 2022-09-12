import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categoriaController } from "../controllers/categoria.controller";
import { categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";

@Module({

    imports: [TypeOrmModule.forFeature([categoria])],
    providers: [CategoriaService],
    controllers:[categoriaController],
    exports: [TypeOrmModule]

})
export class categoriaModule {}