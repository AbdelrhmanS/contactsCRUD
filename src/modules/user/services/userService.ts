import {Service} from "@tsed/common";

import DBConnection from '../../../common/services/dbConnection';
import {User} from '../interfaces/user';

@Service()
export class UserService {
    dbConnection: any;
    constructor() {
      this.dbConnection = DBConnection;
    }

    async createUser(username: string): Promise<User[]> {
      return new Promise((resolve, reject) => {
        this.dbConnection.query(`INSERT INTO task.user(username) VALUES ("${username}")`, err => {
          if (err) {
            reject(err);
          }

          this.getAllUsers()
            .then(results => resolve(results));
        });
      });
    }

    async getAllUsers(): Promise<User[]> {
      return new Promise((resolve, reject) => {
        this.dbConnection.query('SELECT * from task.user', (err, results: User[]) => {
          if (err) {
            reject(err);
          }

          resolve(results);
        })
      });
    }

    getUser(userId: number): Promise<User> {
      return new Promise((resolve, reject) => {
        const query = `SELECT user.id, user.username, department.department_name from user` +
          ` LEFT JOIN department ON user.id = department.user_id WHERE user.id = ${userId}`;
        this.dbConnection.query(query, (err, results: User) => {
          if (err) {
            reject(err);
          }

          resolve(results[0]);
        })
      });

    }

    deleteUserById(userId: number): Promise<User[]> {
      return new Promise((resolve, reject) => {
        this.dbConnection.query(`DELETE FROM task.user WHERE id = ${userId}`, err => {
          if (err) {
            reject(err);
          }

          this.getAllUsers()
						.then(results => resolve(results));
        });
      });
    }
}