import { Body, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

export abstract class BaseController<CreateDto, UpdateDto, FindWhere = any> {
  constructor(
    protected readonly service: {
      create: (dto: CreateDto) => Promise<any>;
      update: (id: string, dto: UpdateDto) => Promise<any>;
      findOne: (id: string) => Promise<any>;
      findAll: (where?: FindWhere) => Promise<any[]>;
      remove: (id: string) => Promise<any>;
    },
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() dto: CreateDto) {
    return this.service.create(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDto) {
    return this.service.update(id, dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(@Query() where: FindWhere) {
    return this.service.findAll(where);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

// import { Body, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

// export abstract class BaseController<CreateDto, UpdateDto, FindWhere> {
//   constructor(private readonly service: any) {}
//   @HttpCode(HttpStatus.CREATED)
//   @Post()
//   public async create(@Body() createdto: CreateDto) {
//     return this.service.create(createdto);
//   }

//   @HttpCode(HttpStatus.OK)
//   @Patch(':id')
//   protected async update(@Param('id') id: string, @Body() updatedto: UpdateDto) {
//     return this.service.update(id, updatedto);
//   }

//   @HttpCode(HttpStatus.OK)
//   @Get(':id')
//   protected async findOne(@Param('id') id: string) {
//     return this.service.findOne(id);
//   }

//   @HttpCode(HttpStatus.OK)
//   @Get()
//   protected async findAll(@Query() data: FindWhere) {
//     return this.service.findAll(data);
//   }

//   @HttpCode(HttpStatus.ACCEPTED)
//   @Delete(':id')
//   protected async delete(@Param('id') id: string) {
//     return this.service.remove(id);
//   }
// }
