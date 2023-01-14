import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get()
  listMessages() {
    return this.messagesService.getMessages();
  }

  @Post()
  createMessage(@Body() body: any) {
    return this.messagesService.createMessage(body);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.getMessage(id);
  }
}
