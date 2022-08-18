import { AbstractControl, ValidationErrors } from "@angular/forms";
import { map, Observable, of, delay } from "rxjs";

export class OldPasswordValidators {

    static isPasswordCorrect(control: AbstractControl): Observable<ValidationErrors | null> {
       return of(control.value === "1234")
        .pipe(map((result: boolean) => {
                return result ? null : {passwordIncorrect: true}
            })
        )
        .pipe(delay(2000))
    }
}