import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolePermission } from './entities/role-permission.entity';
import { CreateRolePermissionDto } from './dto/create-role-permission.dto';
import { UpdateRolePermissionDto } from './dto/update-role-permission.dto';
import { Role } from '../role/entities/role.entity';
import { Permission } from '../permission/entities/permission.entity';


@Injectable()
export class RolePermissionService {
  constructor(
    @InjectRepository(RolePermission)
    private rolePermissionRepository: Repository<RolePermission>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async create(createRolePermissionDto: CreateRolePermissionDto): Promise<RolePermission> {
    const { roleId, permissionId } = createRolePermissionDto;

    const role = await this.roleRepository.findOne({ where: { id: roleId } });
    if (!role) throw new NotFoundException(`Role with ID ${roleId} not found`);

    const permission = await this.permissionRepository.findOne({ where: { id: permissionId } });
    if (!permission) throw new NotFoundException(`Permission with ID ${permissionId} not found`);

    const rolePermission = this.rolePermissionRepository.create({ role, permission });
    return this.rolePermissionRepository.save(rolePermission);
  }

  findAll(): Promise<RolePermission[]> {
    return this.rolePermissionRepository.find({ relations: ['role', 'permission'] });
  }

  findOne(id: number): Promise<RolePermission> {
    return this.rolePermissionRepository.findOne({ where: { id }, relations: ['role', 'permission'] });
  }

  async update(id: number, updateRolePermissionDto: UpdateRolePermissionDto): Promise<RolePermission> {
    const rolePermission = await this.rolePermissionRepository.findOne({ where: { id } });

    if (!rolePermission) {
      throw new NotFoundException(`RolePermission with ID ${id} not found`);
    }

    if (updateRolePermissionDto.roleId) {
      const role = await this.roleRepository.findOne({ where: { id: updateRolePermissionDto.roleId } });
      if (!role) throw new NotFoundException(`Role with ID ${updateRolePermissionDto.roleId} not found`);
      rolePermission.role = role;
    }

    if (updateRolePermissionDto.permissionId) {
      const permission = await this.permissionRepository.findOne({ where: { id: updateRolePermissionDto.permissionId } });
      if (!permission) throw new NotFoundException(`Permission with ID ${updateRolePermissionDto.permissionId} not found`);
      rolePermission.permission = permission;
    }

    await this.rolePermissionRepository.save(rolePermission);
    return this.findOne(id);
  }


  async remove(id: number): Promise<void> {
    await this.rolePermissionRepository.delete(id);
  }
}
