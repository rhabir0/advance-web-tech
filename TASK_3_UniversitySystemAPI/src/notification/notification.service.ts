import {
  Injectable,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private readonly enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: `Notification sent to ${studentName}`,
      notification: message,
    };
  }

  checkEnrollment(studentName: string, courseId: string) {
    return this.enrollmentService.enrollStudent(
      studentName,
      courseId,
    );
  }
}