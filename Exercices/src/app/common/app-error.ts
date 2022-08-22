export class AppError {
    constructor(public message?: string) {}
}

export class NotFoundError implements AppError {}
export class BadInput implements AppError {}