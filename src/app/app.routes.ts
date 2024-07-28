import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AccountComponent } from './account/account.component';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { ChemicalsComponent } from './chemicals/chemicals.component';
import { MangoPlantStockComponent } from './mango-plant-stock/mango-plant-stock.component';
import { GraftingDetailsComponent } from './grafting-details/grafting-details.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {path:'',component :HomeComponent},
    {path:'SignUp',component:SignUpComponent},
    {path:'AdminLogin',component:AdminLoginComponent},
    {path:'account',component:AccountComponent},
    {path:'DailyReports',component:DailyReportsComponent},
    {path:'Chemicals',component:ChemicalsComponent},
    {path:'MangoPlantStock',component:MangoPlantStockComponent},
    {path:'GraftingDetails',component:GraftingDetailsComponent},
    {path:'Products',component:ProductsComponent},
    {path:'AboutUs',component:AboutUsComponent},
    {path:'ContactUs',component:ContactUsComponent}

];
