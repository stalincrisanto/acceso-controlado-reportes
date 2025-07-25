import { Department } from "./Department";

export interface DepartmentRepository {
    // TODO: add pagination and filters
    save(department: Department): Promise<void>;
    findById(id: string): Promise<Department | null>;
    findAll(): Promise<Department[]>;
}