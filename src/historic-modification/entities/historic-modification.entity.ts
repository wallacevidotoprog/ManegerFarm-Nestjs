import { ActionModification } from "@prisma/client";
import { UserEntity } from "src/user/entities/user.entity";

export class HistoricModificationEntity {
  userId: string;
  user: UserEntity;
  action: ActionModification = ActionModification.NONE;
  tableName: string;
  jsonData: any;
}
