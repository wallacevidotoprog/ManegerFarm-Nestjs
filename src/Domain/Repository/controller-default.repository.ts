import { Body, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

export abstract class BaseController<CreateDto, UpdateDto, FindWhere> {
  constructor(private readonly service: any) {}
  @HttpCode(HttpStatus.CREATED)
  @Post()
  public async create(@Body() createdto: CreateDto) {
    return this.service.create(createdto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  protected async update(@Param('id') id: string, @Body() updatedto: UpdateDto) {
    return this.service.update(id, updatedto);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  protected async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  protected async findAll(@Query() data: FindWhere) {
    return this.service.findAll(data);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Delete(':id')
  protected async delete(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
