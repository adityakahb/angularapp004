import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  sqImgData;
  sqImgLengthyData;
  rectImgData;
  rectImgLengthyData;
  constructor() { }

  ngOnInit() {
    this.sqImgData = {
      avtarImg: {
        xs: 'https://via.placeholder.com/40x40.png',
        xs2: 'https://via.placeholder.com/80x80.png'
      },
      tileImg: {
        xs: 'https://via.placeholder.com/360x360.png',
        xs2: 'https://via.placeholder.com/720x720.png',
        md: 'https://via.placeholder.com/450x450.png',
        md2: 'https://via.placeholder.com/900x900.png'
      },
      title: 'Lorem Ipsum Dolor Sit Amet',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Curabitur varius quis orci nec hendrerit. Etiam eget elementum elit. \
        Curabitur sit amet sem a libero euismod molestie ut quis orci. Ut placerat id est ac condimentum. \
        Aliquam non orci dui. Sed facilisis luctus dolor sed commodo. Nulla viverra, sem id hendrerit suscipit, \
        neque nulla venenatis diam, sed tincidunt est urna a augue. Maecenas vitae aliquam justo. Vestibulum \
        lacinia orci eget velit euismod, vel faucibus mi suscipit. Vestibulum dictum aliquet molestie. \
        Fusce rhoncus, leo vel interdum commodo, odio orci varius diam, id fringilla lectus enim non libero.',
      tags: [
        {
          title: 'Tag 1',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 2',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 3',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 1',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 2',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 3',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 1',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 2',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 3',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }
      ],
      cta: [
        {
          title: 'View Recipe',
          link: '#',
          cssclass: 'btn btn-primary',
          tag: 'a',
          icon: 'keyboard_arrow_right'
        }, {
          title: 'Share',
          link: '#',
          cssclass: 'btn btn-outline-primary',
          tag: 'button',
          icon: 'share'
        }
      ]
    };
    this.sqImgLengthyData = {
      avtarImg: {
        xs: 'https://via.placeholder.com/40x40.png',
        xs2: 'https://via.placeholder.com/80x80.png'
      },
      tileImg: {
        xs: 'https://via.placeholder.com/360x360.png',
        xs2: 'https://via.placeholder.com/720x720.png',
        md: 'https://via.placeholder.com/450x450.png',
        md2: 'https://via.placeholder.com/900x900.png'
      },
      title: 'Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius quis orci nec hendrerit. \
        Etiam eget elementum elit. Curabitur sit amet sem a libero euismod molestie ut quis orci. \
        Ut placerat id est ac condimentum. Aliquam non orci dui. Sed facilisis luctus dolor sed commodo. \
        Nulla viverra, sem id hendrerit suscipit, neque nulla venenatis diam, sed tincidunt est urna a augue. \
        Maecenas vitae aliquam justo. Vestibulum lacinia orci eget velit euismod, vel faucibus mi suscipit. \
        Vestibulum dictum aliquet molestie. Fusce rhoncus, leo vel interdum commodo, odio orci varius diam, \
        id fringilla lectus enim non libero, leo vel interdum commodo, odio orci varius diam, id fringilla lectus enim non libero.',
      tags: [
        {
          title: 'Tag 1',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 2',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 3',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }
      ],
      cta: [
        {
          title: 'View Recipe',
          link: '#',
          cssclass: 'btn btn-primary',
          tag: 'a',
          icon: 'keyboard_arrow_right'
        }, {
          title: 'Share',
          link: '#',
          cssclass: 'btn btn-outline-primary',
          tag: 'button',
          icon: 'share'
        }
      ]
    };
    this.rectImgData = {
      avtarImg: {
        xs: 'https://via.placeholder.com/40x40.png',
        xs2: 'https://via.placeholder.com/80x80.png'
      },
      tileImg: {
        xs: 'https://via.placeholder.com/640x360.png',
        xs2: 'https://via.placeholder.com/1280x720.png',
        md: 'https://via.placeholder.com/800x450.png',
        md2: 'https://via.placeholder.com/1600x900.png'
      },
      title: 'Lorem Ipsum Dolor Sit Amet',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Curabitur varius quis orci nec hendrerit. Etiam eget elementum elit. \
        Curabitur sit amet sem a libero euismod molestie ut quis orci. Ut placerat id est ac condimentum. \
        Aliquam non orci dui. Sed facilisis luctus dolor sed commodo. Nulla viverra, sem id hendrerit suscipit, \
        neque nulla venenatis diam, sed tincidunt est urna a augue. Maecenas vitae aliquam justo. Vestibulum \
        lacinia orci eget velit euismod, vel faucibus mi suscipit. Vestibulum dictum aliquet molestie. \
        Fusce rhoncus, leo vel interdum commodo, odio orci varius diam, id fringilla lectus enim non libero.',
      tags: [
        {
          title: 'Tag 1',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 2',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 3',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }
      ],
      cta: [
        {
          title: 'View Recipe',
          link: '#',
          cssclass: 'btn btn-primary',
          tag: 'a',
          icon: 'keyboard_arrow_right'
        }, {
          title: 'Share',
          link: '#',
          cssclass: 'btn btn-outline-primary',
          tag: 'button',
          icon: 'share'
        }
      ]
    };
    this.rectImgLengthyData = {
      avtarImg: {
        xs: 'https://via.placeholder.com/40x40.png',
        xs2: 'https://via.placeholder.com/80x80.png'
      },
      tileImg: {
        xs: 'https://via.placeholder.com/640x360.png',
        xs2: 'https://via.placeholder.com/1280x720.png',
        md: 'https://via.placeholder.com/800x450.png',
        md2: 'https://via.placeholder.com/1600x900.png'
      },
      title: 'Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius quis orci nec hendrerit. \
        Etiam eget elementum elit. Curabitur sit amet sem a libero euismod molestie ut quis orci. \
        Ut placerat id est ac condimentum. Aliquam non orci dui. Sed facilisis luctus dolor sed commodo. \
        Nulla viverra, sem id hendrerit suscipit, neque nulla venenatis diam, sed tincidunt est urna a augue. \
        Maecenas vitae aliquam justo. Vestibulum lacinia orci eget velit euismod, vel faucibus mi suscipit. \
        Vestibulum dictum aliquet molestie. Fusce rhoncus, leo vel interdum commodo, odio orci varius diam, \
        id fringilla lectus enim non libero, leo vel interdum commodo, odio orci varius diam, id fringilla lectus enim non libero.',
      tags: [
        {
          title: 'Tag 1',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 2',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }, {
          title: 'Tag 3',
          link: '#',
          cssclass: 'btn btn-outline-secondary btn-sm',
          tag: 'a'
        }
      ],
      cta: [
        {
          title: 'View Recipe',
          link: '#',
          cssclass: 'btn btn-primary',
          tag: 'a',
          icon: 'keyboard_arrow_right'
        }, {
          title: 'Share',
          link: '#',
          cssclass: 'btn btn-outline-primary',
          tag: 'button',
          icon: 'share'
        }
      ]
    };
  }

}
