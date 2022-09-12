import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoria } from './categoria/entities/categoria.entity';
import { categoriaModule } from './categoria/modules/categoria.module';
import { Tarefa } from './tarefa/entities/tarefa.entity';
import { TarefaModule } from './tarefa/modules/tarefa.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'db_todo',
      entities: [Tarefa, categoria],
      synchronize: true,
      password: 'root',
    }),
    TarefaModule,
    categoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
