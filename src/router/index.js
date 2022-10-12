import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

// import BookIndex from '@/components/Books/Index'
// import BookCreate from '@/components/Books/CreateBook'
// import BookEdit from '@/components/Books/EditBook'
// import BookShow from '@/components/Books/ShowBook' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/books',
      name: 'books',
      component: BookIndex
    },
    {
      path: '/book/create',
      name: 'book-create',
      component: BookCreate
    },{
      path: '/book/edit/:bookId',
      name: 'book-edit',
      component: BookEdit
    },
    {
      path: '/book/:bookId',
      name: 'book',
      component: BookShow
    },
    
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }

  ]
})
