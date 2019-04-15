import { NotesService } from './notes.service';
import { Post, Header, Controller, Param, Body, Delete } from '@nestjs/common';

@Controller('notes')
export class NotesController {
  constructor(private notes: NotesService) {
  }

  @Post()
  @Header('access-control-allow-credentials', 'true')
  @Header('access-control-allow-origin', 'http://localhost:4200')

  create(@Body() body) {
      this.notes.postNote(body);
  }

  @Post('delete')
  @Header('access-control-allow-credentials', 'true')
  @Header('access-control-allow-origin', 'http://localhost:4200')

  delete(@Body() body) {
      this.notes.deleteNote(body);
  }

  @Post('add')
  @Header('access-control-allow-credentials', 'true')
  @Header('access-control-allow-origin', 'http://localhost:4200')

  createAll(@Body() body) {
      this.notes.postNotes(body);
  }
}
