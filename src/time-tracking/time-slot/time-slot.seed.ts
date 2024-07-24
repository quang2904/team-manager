import { faker } from '@faker-js/faker';
import { TimeSlot } from './time-slot.entity';
import { generateTimeSlots } from './utils';

export function createTimeSlots(start, end) {
  const timeSlots: TimeSlot[] = generateTimeSlots(start, end).map(({ duration, startedAt, stoppedAt }) => {
    const keyboard = faker.number.int(duration);
    const mouse = faker.number.int(duration);
    const overall = (keyboard + mouse) / 2;

    const slot = new TimeSlot();
    slot.startedAt = startedAt;
    slot.stoppedAt = stoppedAt;
    slot.duration = duration;
    slot.screenshots = [];
    slot.timeSlotMinutes = [];
    slot.keyboard = keyboard;
    slot.mouse = mouse;
    slot.overall = Math.ceil(overall);
    return slot;
  });

  return timeSlots;
}
