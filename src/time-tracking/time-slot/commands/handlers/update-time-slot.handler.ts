import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import moment from 'moment';
import { PermissionsEnum } from 'contracts';
import { RequestContext } from '../../../../core/context';
import { Activity } from '../../../activity/activity.entity';
import { UpdateTimeSlotCommand } from '../update-time-slot.command';
import { TimeSlot } from './../../time-slot.entity';

@CommandHandler(UpdateTimeSlotCommand)
export class UpdateTimeSlotHandler implements ICommandHandler<UpdateTimeSlotCommand> {
  constructor(
    @InjectRepository(TimeSlot)
    private readonly timeSlotRepository: Repository<TimeSlot>,

    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  public async execute(command: UpdateTimeSlotCommand): Promise<TimeSlot> {
    const { input, id } = command;

    let employeeId = input.employeeId;
    if (!RequestContext.hasPermission(PermissionsEnum.CHANGE_SELECTED_EMPLOYEE)) {
      const user = RequestContext.currentUser();
      employeeId = user.employeeId;
    }

    let timeSlot = await this.timeSlotRepository.findOne({
      where: {
        ...(employeeId ? { employeeId: employeeId } : {}),
        id: id,
      },
    });

    if (timeSlot) {
      if (input.startedAt) {
        input.startedAt = moment(input.startedAt)
          //.set('minute', 0)
          .set('millisecond', 0)
          .toDate();
      }

      let newActivities = [];
      if (input.activities) {
        newActivities = input.activities.map((activity) => {
          activity = new Activity(activity);
          activity.employeeId = timeSlot.employeeId;
          activity.tenantId = RequestContext.currentTenantId();
          return activity;
        });
        await this.activityRepository.save(newActivities);
        input.activities = (timeSlot.activities || []).concat(newActivities);
      }
      await this.timeSlotRepository.update(id, input);

      timeSlot = await this.timeSlotRepository.findOne({
        where: {
          ...(employeeId ? { employeeId } : {}),
          id,
        },
        relations: {
          timeLogs: true,
          screenshots: true,
          activities: true,
        },
      });
      return timeSlot;
    } else {
      return null;
    }
  }
}
