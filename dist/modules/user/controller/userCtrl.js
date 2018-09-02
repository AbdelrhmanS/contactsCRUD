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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const Express = require("express");
const decorators_1 = require("@tsed/common/lib/mvc/decorators");
const userService_1 = require("../services/userService");
let UserCtrl = class UserCtrl {
    constructor(userService) {
        this.userService = userService;
    }
    getUser(userId) {
        return this.userService.getUser(userId);
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.getAllUsers();
        });
    }
    createUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.createUser(request.body.username);
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.deleteUserById(userId);
        });
    }
};
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.PathParams('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserCtrl.prototype, "getUser", null);
__decorate([
    common_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserCtrl.prototype, "getAllUsers", null);
__decorate([
    decorators_1.Post('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCtrl.prototype, "createUser", null);
__decorate([
    decorators_1.Delete('/:id'),
    __param(0, common_1.PathParams('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserCtrl.prototype, "deleteUser", null);
UserCtrl = __decorate([
    common_1.Controller('/users'),
    __metadata("design:paramtypes", [userService_1.UserService])
], UserCtrl);
exports.UserCtrl = UserCtrl;
//# sourceMappingURL=userCtrl.js.map