import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/services/test.service';

export interface GetPostData {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit, OnDestroy {
  public postData!: GetPostData[];
  public sub!: Subscription;

  constructor(
    private testService: TestService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPostDetails();
  }

  private getPostDetails() {
    this.sub = this.testService.postDetails().subscribe({
      next: (res: any) => {
        this.postData = res;
        this.changeDetectorRef.detectChanges();
      },
      error: (err: any) => {
        console.log('err', err);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }
}
