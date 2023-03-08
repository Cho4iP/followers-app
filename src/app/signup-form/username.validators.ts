import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainsSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') != -1) {
            return {'cannotContainsSpace': true};
        }

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        
        return new Promise((reslove, reject) => {
            setTimeout(() => {
                if(control.value == 'mosh') {
                    reslove({'shouldBeUnique': true});
                }else {
                    reslove(null);
                }
            }, 2000);
        });
    } 
}