import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { BookingFormComponent } from "./components/booking-form/booking-form.component";
import { ContactsBarComponent } from "./components/contacts-bar/contacts-bar.component";
import { AboutBarComponent } from "./components/about-bar/about-bar.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ViewComponent } from "./components/view/view.component";

export const AppRoutes = [
    {path:'', component:LandingPageComponent},
    {path:'booking', component:BookingFormComponent},
    {path:'home', component:HomePageComponent, children:[
        {path:'view', component:ViewComponent},
        {path:'contacts', component:ContactsBarComponent},
        {path:'about', component:AboutBarComponent},
        {path:'', component:AboutBarComponent}
    ]}
];