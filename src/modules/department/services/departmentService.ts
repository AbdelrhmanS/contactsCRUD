import {Service} from "@tsed/common";

import DBConnection from '../../../common/services/dbConnection';
import {Department} from '../interfaces/department';
import {UserService} from '../../user/services/userService';
import {User} from '../../user/interfaces/user';

@Service()
export class DepartmentService {
  dbConnection: any;
  constructor(private userService: UserService) {
    this.dbConnection = DBConnection;
  }

  async createDepartment(departmentName: string, userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO task.department(department_name, user_id) VALUES ("${departmentName}", ${userId})`;
      this.dbConnection.query(query, err => {
        if (err) {
          reject(err);
        }

        this.userService.getUser(userId)
					.then((results: User) => resolve(results));
      });
    });
  }

  async getAllDepartments(): Promise<Department[]> {
    return new Promise((resolve, reject) => {
      this.dbConnection.query('SELECT * from task.department', (err, results: Department[]) => {
        if (err) {
          reject(err);
        }

        resolve(results);
      })
    });
  }

  getDepartment(departmentId: number): Promise<Department> {
    return new Promise((resolve, reject) => {
      this.dbConnection.query(`SELECT * from task.department WHERE id = ${departmentId}`,
        (err, results: Department) => {
          if (err) {
            reject(err);
          }

          resolve(results[0]);
        })
    });

  }

  deleteDepartmentById(departmentId: number): Promise<Department[]> {
    return new Promise((resolve, reject) => {
      this.dbConnection.query(`DELETE FROM task.department WHERE id = ${departmentId}`, err => {
        if (err) {
          reject(err);
        }

        this.getAllDepartments()
					.then(results => resolve(results));
      });
    });
  }
}