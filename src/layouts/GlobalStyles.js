import { createGlobalStyle } from 'styled-components';
import background3 from './../images/wallpaper3.jpg';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html {
  font-size: 10px;
  margin: 0;
  padding: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  line-height: 1.3;
}

 


a {
  color: #5334f5;
  text-decoration: none;
  font-weight: 600;
}

 

 





@keyframes HeroAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

 
 


 

`;

export default GlobalStyle;
