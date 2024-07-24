import { ITaskLinkedIssueUpdateInput } from 'contracts';
import { TaskLinkedIssueDTO } from './task-linked-issue.dto';

export class UpdateTaskLinkedIssueDTO extends TaskLinkedIssueDTO implements ITaskLinkedIssueUpdateInput {}
