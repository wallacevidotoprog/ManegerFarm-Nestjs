import { Injectable } from '@nestjs/common';
import { CreateActivityDto, UpdateActivityDto } from './dto/activity.dto';

@Injectable()
export class ActivitiesService {
  create(createActivityDto: CreateActivityDto) {
    return 'This action adds a new activity';
  }

  findAll() {
    return `This action returns all activities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
