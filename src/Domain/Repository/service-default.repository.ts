import { BadRequestException, NotFoundException } from '@nestjs/common';
import { DeepPartial, FindOptionsWhere, ILike, ObjectLiteral, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseService<
  TModel extends ObjectLiteral,
  CreateDto = DeepPartial<TModel>,
  UpdateDto = DeepPartial<TModel>,
  FindWhere = Partial<TModel>,
> {
  constructor(protected readonly repo: Repository<TModel>) {}

  async create(dto: CreateDto): Promise<TModel|null> {
    try {
      const created = this.repo.create(dto as any);
      const entity = Array.isArray(created) ? created[0] : created;
      const result = await this.repo.save(entity);
      return null
    } catch (error) {
      console.error('Erro ao criar entidade:', error);
      throw new BadRequestException(error?.message || 'Erro ao criar entidade');
    }
  }

  async update(id: string, dto: UpdateDto): Promise<void> {
    const existing = await this.findOne(id);
    if (!existing) {
      throw new NotFoundException(`Registro com id ${id} não encontrado`);
    }

    await this.repo.update({ id } as unknown as FindOptionsWhere<TModel>, dto as QueryDeepPartialEntity<TModel>);
  }

  async findOne(id: string): Promise<TModel | null> {
    return this.repo.findOne({
      where: { id } as unknown as FindOptionsWhere<TModel>,
    });
  }

  async findAll(where?: FindWhere): Promise<TModel[]> {
    if (where) {
      const typeOrmWhere = this.buildTypeOrmWhere(where);
      return this.repo.find({ where: typeOrmWhere });
    }
    return this.repo.find();
  }

  async remove(id: string): Promise<void> {
    const existing = await this.findOne(id);
    if (!existing) {
      throw new NotFoundException(`Registro com id ${id} não encontrado`);
    }

    await this.repo.delete({ id } as unknown as FindOptionsWhere<TModel>);
  }

  protected buildTypeOrmWhere<T extends Record<string, any>>(dto: T): FindOptionsWhere<TModel> {
    const where: any = {};

    for (const key in dto) {
      const value = dto[key];
      if (value === undefined || value === null) continue;
      where[key] = typeof value === 'string' ? ILike(`%${value}%`) : value;
    }

    return where;
  }
}

// import { NotFoundException } from '@nestjs/common';

// export abstract class BaseService<TModel, TDelegate> {
//   constructor(protected readonly model: TDelegate) {}

//   protected async create(data: any) {
//     return await (this.model as any).create({ data });
//   }

//   protected async update(id: string, data: any) {
//     if (!(await this.findOne(id))) {
//       throw new NotFoundException('Registration from id not found');
//     }

//     await (this.model as any).update({ where: { id }, data });

//     return;
//   }

//   protected async findOne(id: string): Promise<TModel> {
//     return await (this.model as any).findFirst({ where: { id: id } });
//   }

//   protected async findAll(data: any): Promise<TModel[]> {
//     if (data || data != null) {
//       const where = this.buildPrismaWhere(data);
//       return await (this.model as any).findMany({ where });
//     }
//     return await (this.model as any).findMany();
//   }

//   protected async remove(id: string) {
//     if (!(await this.findOne(id))) {
//       throw new NotFoundException('Registration from id not found');
//     }
//     await (this.model as any).delete({ where: { id } });
//     return;
//   }

//   protected buildPrismaWhere<T extends Record<string, any>>(dto: T) {
//     const where = {} as PrismaFilter<T>;

//     for (const key in dto) {
//       const value = dto[key];

//       if (value === undefined || value === null) continue;

//       if (typeof value === 'string') {
//         where[key] = {
//           contains: value,
//         } as any;
//       } else {
//         where[key] = value;
//       }
//     }

//     return where;
//   }
// }
// type PrismaFilter<T> = {
//   [K in keyof T]?: T[K] extends string ? { contains: string; mode?: 'insensitive' } : T[K];
// };
