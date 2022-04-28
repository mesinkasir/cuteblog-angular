import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { blogs } from '../blogs';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.blog = blogs[+params.get('blogId')];
    });
  };
}
