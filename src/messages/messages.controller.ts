import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get()
  listMessages() {
    return this.messagesService.getMessages();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.createMessage(body);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.getMessage(id);
  }
}
