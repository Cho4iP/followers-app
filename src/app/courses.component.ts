import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
    <!--
        <h2 [style.backgroundColor]="isActive ? 'Blue' : 'white'">{{ title }}</h2>
        <br>
        <div (click)="onDivClick()">
        <button (click)="onClick($event)" class="btn btn-primary" [class.active]="isActive">Save</button>
        </div>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <!--<input #email placeholder="Template Variable" (keyup.enter)="onKeyUp(email.value)">-->
        <!--
        <input [(ngModel)]="email" placeholder="Tow way data binding (ngModel)" (keyup.enter)="onKeyUp1()">
        <table>
            <tr>
                <td [attr.colspan]="colspan"></td>
            </tr>
        </table>
        <br>
        <!--<img src="{{ imageUrl }}" alt="a Dog">-->
        <!--<img [src]="imageUrl" alt="My Dog"> -->

        {{ course.title | uppercase}} <br>
        {{ course.rating | number:'1.2-2'}} <br>
        {{ course.students | number}} <br>
        {{ course.price | currency}} <br>
        {{ course.releaseDate }} <br>
        <br><br>
        {{ text | summary:20}}

    `
})
export class CoursesComponent {
    title = "List of Courses";
    email = "me@example.com";
    imageUrl = "https://picsum.photos/id/4/500/300";
    isActive = true;
    colspan = 2;
    courses;
    course = {
        title: 'The Complate Angular Course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };
    text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit dignissimos iste quas perspiciatis possimus sapiente minus aliquam dolorum placeat perferendis! Tempore illo, perspiciatis earum quae porro aut aperiam dicta dolores!";

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    getCourses() {
        return this.title;
    }

    onClick(event: Event) {
        event.stopPropagation();
        console.log('button was clicked' , event);
    }

    onDivClick() {
        console.log('Div was clicked');
    }

    /*
    onKeyUp(email: string) {
       console.log('ENTER was Clicked ' , email.length);
    }*/

    onKeyUp1() {
        console.log('ENTER was Clicked ' , this.email);
    }
}