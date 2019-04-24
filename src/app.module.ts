import { Members } from './members/members.entity';
import { NotesController } from './notes/notes.controller';
import { InstallmentService } from './installment/installment.service';
import { Installments } from './installment/installment.entity';
import { AuthorizationService } from './authorization/authorization.service';
import { AdminsService } from './admins/admins.service';
import { GroupController, AssignmentspController } from './group/group.controler';
import { GroupService } from './group/group.service';
import { Group } from './group/group.entity';
import { InstallmentDateController } from './instrallmentDate/instrallmentDate.controller';
import { InstallmentDateService } from './instrallmentDate/instrallmentDate.service';
import { Installment } from './instrallmentDate/instrallmentDate.entity';
import { NotesService } from './notes/notes.service';
import { PresenceService } from './presence/presence.service';
import { ListService } from './list/list.service';
import { List } from './list/list.entity';
import { Authorization } from './authorization/authorization.entity';
import { Admins } from './admins/admins.entity';
import { Notes } from './notes/notes.entity';
import { Presence } from './presence/presence.entity';
import { Users } from './users/users.entity';
import { UsersService } from './users/users.service';
import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LogoutController } from './logout/logout.controller';
import { UsersController } from './users/users.controller';
import { PresenceController } from './presence/presence.controller';
import { ChargesController } from './charges/charges.controller';
import { ListController } from './list/list.controller';
import { ArchivesController } from './archives/archives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  StatisticsUniversityController,
} from './stat/stat.controller';
import { AdminsController } from './admins/admins.controller';
import { AuthorizationController } from './authorization/authorization.controller';
import { InstallmentController } from './installment/installment.controller';
import { MembersController } from './members/members.controller';
import { MembersService } from './members/members.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([
      Users,
      Presence,
      Notes,
      Admins,
      Authorization,
      List,
      Installment,
      Group,
      Admins,
      Installments,
      Members,
    ]),
  ],
  controllers: [
    AppController,
    LoginController,
    LogoutController,
    UsersController,
    PresenceController,
    ChargesController,
    ListController,
    ArchivesController,
    StatisticsUniversityController,
    InstallmentDateController,
    GroupController,
    AdminsController,
    AuthorizationController,
    InstallmentController,
    NotesController,
    MembersController,
    AssignmentspController,
  ],
  providers: [
    AppService,
    UsersService,
    ListService,
    PresenceService,
    NotesService,
    InstallmentDateService,
    GroupService,
    AdminsService,
    AuthorizationService,
    InstallmentService,
    MembersService,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
