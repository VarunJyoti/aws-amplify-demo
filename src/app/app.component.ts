import { Component } from '@angular/core';
import Amplify, { API, Analytics } from 'aws-amplify';
const myInit = { 
  headers: {}, 
  response: true
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aws-amplify-demo';

  callAPI(){
    Amplify.configure({
      API: {
          endpoints: [
              {
                  name: "MyAPIGatewayAPI",
                  endpoint: "https://f98i3js5xk.execute-api.eu-west-1.amazonaws.com/dev"
              }
          ]
      }
    });

    API
    .get("MyAPIGatewayAPI", "/items", myInit)
    .then(response => {
      console.log(response.data);
    })
  }

  record(){
    Analytics.record({
      name: 'albumVisit', 
      // Attribute values must be strings
      attributes: { genre: '', artist: '' }
  });
  }
}


