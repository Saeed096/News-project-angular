import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { EditAuthorComponent } from './components/edit-author/edit-author.component';
import { NewsComponent } from './components/news/news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { authenticationGuard } from './Gaurds/authentication.guard';
import { UserNews } from './components/user-news/user-news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';




export const routes: Routes = [
    {path : 'home' , component : HomeComponent},
    {path : '' , redirectTo:'/home' , pathMatch:'full'}, // must used with redirect to   // full >> all path empty after domain and port , if use prefix mean part of path should match not all path
    // {path : 'details/:id' , component: DetailsComponent},
    {path : 'login' , component : LoginComponent}, 
    {path : 'dashboard' , component : DashboardComponent, canActivate : [authenticationGuard]}, 
    {path : 'authors' , component : AuthorsComponent}, 
    {path : 'addAuthor' , component : AddAuthorComponent}, 
    {path : 'editAuthor/:id' , component : EditAuthorComponent}, 
    {path : 'news' , component : NewsComponent}, 
    {path : 'addNews' , component : AddNewsComponent}, 
    {path : 'userNews' , component : UserNews}, 
    {path : 'editNews/:id' , component : EditNewsComponent}, 
    {path : 'newsDetails/:id' , component : NewsDetailsComponent}, 
    {path : '**' , component: NotFoundComponent}
];
