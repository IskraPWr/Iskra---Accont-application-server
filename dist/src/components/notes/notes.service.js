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
const notes_entity_1 = require("./notes.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let NotesService = class NotesService {
    constructor(notesRepository) {
        this.notesRepository = notesRepository;
    }
    findAllFromActiveUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.notesRepository.query('SELECT DISTINCT `notes`.`note`, `notes`.`id_user` FROM `users`, `notes`, `presence` WHERE `users`.`id_user` = `presence`.`id_user` AND `users`.`status` = 1 AND `users`.`id_user`= `notes`.`id_user` ORDER BY `notes`.`id_user` ASC');
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.notesRepository.query('SELECT `notes`.`id_user`, `notes`.`note` FROM `notes`, `users` WHERE `users`.`id_user` = `notes`.`id_user` AND `users`.`status` = 1 ORDER BY `notes`.`id_user` ASC');
        });
    }
    postNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const ent = this.notesRepository.create(new notes_entity_1.Notes(note.id_user, note.note));
            return yield this.notesRepository.insert(ent);
        });
    }
    postNotes(notes) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(notes.id_user.forEach(element => {
                const ent = this.notesRepository.create(new notes_entity_1.Notes(element, notes.note));
                this.notesRepository.insert(ent);
            }));
        });
    }
    deleteNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.notesRepository.delete({
                id_user: note.id_user,
                note: note.note,
            });
        });
    }
};
NotesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(notes_entity_1.Notes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map