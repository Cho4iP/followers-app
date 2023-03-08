import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() isLiked = false;
  @Input() likeCount = 0;

  onClick() {
    this.likeCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
  }
}
