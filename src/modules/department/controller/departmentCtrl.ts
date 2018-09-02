import {Controller, Get, PathParams} from '@tsed/common';
import * as Express from 'express';
import {Delete, Post} from '@tsed/common/lib/mvc/decorators';
import {Department} from '../interfaces/department';
import {DepartmentService} from '../services/departmentService';

@Controller('/departments')
export class DepartmentCtrl {
  constructor(private departmentService: DepartmentService) {}

  @Get('/:id')
  async getDepartment(@PathParams('id') departmentId: number): Promise<Department> {
    return this.departmentService.getDepartment(departmentId);
  }

  @Get('/')
  async getAllDepartments(): Promise<Department[]> {
    return this.departmentService.getAllDepartments();
  }

  @Post('/')
  async createDepartment(request: Express.Request): Promise<Department[]> {
    return this.departmentService.createDepartment(request.body.departmentName, request.body.userId);
  }

  @Delete('/:id')
  async deleteDepartment(@PathParams('id') departmentId: number): Promise<Department[]> {
    return this.departmentService.deleteDepartmentById(departmentId);
  }
}