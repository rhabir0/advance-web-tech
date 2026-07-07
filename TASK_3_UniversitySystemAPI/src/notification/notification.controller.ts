import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Post('send')
  sendNotification(@Body() body: any) {
    return this.notificationService.sendNotification(
      body.studentName,
      body.message,
    );
  }

  @Post('check')
  checkEnrollment(@Body() body: any) {
    return this.notificationService.checkEnrollment(
      body.studentName,
      body.courseId,
    );
  }
}