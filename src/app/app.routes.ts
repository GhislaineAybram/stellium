import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LegalComponent } from './legal/legal.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent},
    { path: '', component: HomepageComponent},
    { path: 'legal', component: LegalComponent},
    { path: 'privacy', component: PrivacyComponent},
    { path: 'contact', component: ContactComponent},
];
