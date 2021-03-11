import Header from './js/header.js';
import DarkMode from './js/darkMode.js'


// import { default as Header} from '../js/header.js';    ** The Top is More Efficient **
Header();
DarkMode();

/*

    The First  Method Saves using the same function names being more specific with the "dot syntax"

import * as Header from '../js/header.js';
Header.loadHeader();

    The following Methods do the same thing but with a chance of calling the same function and or more lines of code
    
import { loadHeader } from "../js/header.js";
loadHeader();

import { loadHeader as Header } from "../js/header.js";
Header();

import { topBanner, titleSection } from "../js/header.js";
document.addEventListener("DOMContentLoaded", () => {
    topBanner();
    titleSection();
  });

*/


console.log(double(5))