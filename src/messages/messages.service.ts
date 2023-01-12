import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  messages = [
    { id: 1, message: 'Hello World' },
    { id: 2, message: 'Hello Nest' },
  ];

  getMessages() {
    return this.messages;
  }

  getMessage(id: string) {
    const idNum = parseInt(id, 10);
    return this.messages.find((message) => message.id === idNum);
  }

  createMessage(body: any) {
    this.messages.push(body);
    console.log(this.messages);
    return body;
  }
}
