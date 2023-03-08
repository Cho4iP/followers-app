import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  viewMode = '';
  courses: any;

  post = {
    title: 'The Rise of the Planet of the Apes',
    isFavorite: true
  };

  tweet = {
    body: 'The Rise of the Planet of the Apes',
    isLiked: false,
    likeCount: 50
  };

  onFavoriteChange() {
    console.log('Favorite Change');
  }

  addCourse() {
    let courseNumber = this.courses.length + 1;
    this.courses.push({id: courseNumber, name: 'course' + courseNumber});
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ];
  }

  courseTrackBy(index: number, course: {id:number , name: string}) {
    return course.id;
  }

}
