# Ng6Material

1. ng new ng6-material
2. cd ng6-material
3. npm i --save @angular/material @angular/cdk
4. npm install --save @angular/animations
5. npm i --save hammerjs

6. import your necessary modules

example:</br>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  
})

7. import it on your app's entry point (e.g. src/main.ts).
import 'hammerjs';

References

https://material.angular.io/guide/getting-started

https://material.io

REST API
https://jsonplaceholder.typicode.com
