import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidators {
    
    static invalidOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value != '123') 
                    resolve({invalidOldPassword: true});
                else
                    resolve(null);
            }, 2000);
        })
    }

    static matchPassword(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(confirmPassword?.value !== newPassword?.value)
            return {matchPassword: true};
        
        return null;
    }

    /*
    static matchPassword(matchTo: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if(control.value != matchTo) 
                return {'matchPassword': true}
            return null;
        }
    } 
    */

}
