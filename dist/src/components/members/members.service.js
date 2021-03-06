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
const members_entity_1 = require("./members.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MembersService = class MembersService {
    constructor(membersRepository) {
        this.membersRepository = membersRepository;
    }
    removeFromGroup(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(body.forEach(element => {
                this.membersRepository.delete({
                    id_group: id,
                    id_user: element,
                });
            }));
        });
    }
    addToGroup(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(body.forEach(element => {
                this.membersRepository.count({
                    id_user: element,
                    id_group: id,
                }).then(ans => {
                    if (ans === 0) {
                        const ent = this.membersRepository.create(new members_entity_1.Members(element, id));
                        this.membersRepository.insert(ent);
                    }
                }).catch(error => console.log(error));
            }));
        });
    }
};
MembersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(members_entity_1.Members)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map