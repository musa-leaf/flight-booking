import { DetailsBarComponent } from "./components/details-bar/details-bar.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { BookingFormComponent } from "./components/booking-form/booking-form.component";
import { ContactsBarComponent } from "./components/contacts-bar/contacts-bar.component";
import { AboutBarComponent } from "./components/about-bar/about-bar.component";

export const AppRoutes = [
    {path:'', component:LandingPageComponent},
    {path:'booking', component:BookingFormComponent},
    {path:'details', component:DetailsBarComponent, children:[
        {path:'contacts', component:ContactsBarComponent},
        {path:'about', component:AboutBarComponent}
    ]}
];