"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const dbConnection_1 = require("../../../common/services/dbConnection");
let UserService = class UserService {
    constructor() {
        this.dbConnection = dbConnection_1.default;
    }
    createUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.dbConnection.query(`INSERT INTO task.user(username) VALUES ("${username}")`, err => {
                    if (err) {
                        reject(err);
                    }
                    this.getAllUsers()
                        .then(results => resolve(results));
                });
            });
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.dbConnection.query('SELECT * from task.user', (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                });
            });
        });
    }
    getUser(userId) {
        return new Promise((resolve, reject) => {
            this.dbConnection.query(`SELECT * from task.user WHERE id = ${userId}`, (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    }
    deleteUserById(userId) {
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
};
UserService = __decorate([
    common_1.Service(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map