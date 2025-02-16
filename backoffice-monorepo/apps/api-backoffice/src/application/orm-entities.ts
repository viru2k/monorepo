import { Client } from "./client/entities/client.entity";
import { Permission } from "./permission/entities/permission.entity";
import { RolePermission } from "./role-permissions/entities/role-permission.entity";
import { Role } from "./role/entities/role.entity";
import { Setting } from "./settings/entities/setting.entity";
import { User } from "./user/entities/user.entity";

export const ORM_ENTITIES = [Client,Permission,Role,RolePermission,Setting,User];
