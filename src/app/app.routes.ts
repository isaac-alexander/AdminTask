// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { SignIn } from './pages/sign-in/sign-in';
import { AdminCreateAccount } from './pages/admin-create-account/admin-create-account';
import { PostGif } from './pages/post-gif/post-gif';
import { PostArticle } from './pages/post-article/post-article';
import { Homepage } from './pages/homepage/homepage';
import { Feed } from './pages/feed/feed';

export const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin', component: SignIn },
    { path: 'admin/create-account', component: AdminCreateAccount },
    { path: 'post-gif', component: PostGif },
    { path: 'post-article', component: PostArticle },
    { path: 'homepage', component: Homepage },
    { path: 'feed', component: Feed }

];
