import { Primitives } from "src/domain/shared/Primitives";

export class Department {
    constructor(
        public readonly name: string,
        public readonly code: string,
    ) { }

    static fromPrimitives(primitives: Primitives<Department>): Department {
        return new Department(primitives.name, primitives.code);
    }

    toPrimitives(): Primitives<Department> {
        return {
            name: this.name,
            code: this.code,
        };
    }
}