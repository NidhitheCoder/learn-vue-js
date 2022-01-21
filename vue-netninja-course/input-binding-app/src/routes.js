import showBlogs from './components/ShowBlogs';
import addBlog from './components/Addblog';
import listBlogs from './components/ListBlogs';
import singleBlog from './components/singleBlog';

export default [
  { path: '/', component: showBlogs },
  { path: '/add', component: addBlog },
  { path: '/list', component: listBlogs },
  { path: '/blog/:id', component: singleBlog }
]