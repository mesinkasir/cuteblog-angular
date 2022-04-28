import { Component } from '@angular/core';

import { blogs } from '../blogs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
  title = 'CuteBlog 🥳';
  description = 'Build modern blog using cuteblog for angular ';
  intro = 'Dokumentasi click disini';
  blogs = blogs;
}
