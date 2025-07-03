import { Body, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

export abstract class BaseController<CreateDto, UpdateDto, FindWhere = any> {
  constructor(
    protected readonly service: {
      create: (dto: CreateDto,req: Request) => Promise<any>;
      update: (id: string, dto: UpdateDto,req: Request) => Promise<any>;
      findOne: (id: string,req: Request) => Promise<any>;
      findAll: (req: Request,where?: FindWhere) => Promise<any[]>;
      remove: (id: string,req: Request) => Promise<any>;
    },
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() dto: CreateDto, @Req() req: Request) {
     console.log('bug para aqui ??');
    return this.service.create(dto,req);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDto, @Req() req: Request) {
    return this.service.update(id, dto,req);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: Request) {
    return this.service.findOne(id,req);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(@Query() where: FindWhere, @Req() req: Request) {
    return this.service.findAll(req,where);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Delete(':id')
  async delete(@Param('id') id: string, @Req() req: Request) {
    return this.service.remove(id,req);
  }
}
