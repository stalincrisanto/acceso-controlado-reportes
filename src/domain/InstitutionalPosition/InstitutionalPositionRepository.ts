import { InstitutionalPosition } from './InstitutionalPosition';

export interface InstitutionalPositionRepository {
  save(department: InstitutionalPosition): Promise<void>;
}
