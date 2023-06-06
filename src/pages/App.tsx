import React from 'react';
import '../App.css';
import {Route, Routes} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Home/Home";
import Product from "./Product/Product";

// Use the API : https://fakestoreapi.com , if not accessible use the data json file in the public folder

//Within one hour, build a React application that displays a list of products from the API. Use components logic and functional components use
//Create a dynamic route to display the details of a product. The route should be /product/:id
//Once the list is displayed, add a button to each product to add it to a shopping cart. The shopping cart should be displayed on the same page as the list of products.

//Bonus :
//The shopping cart should be displayed on every pages of the application. (Using Global state management / store)
//Add a button to remove a product from the shopping cart
//Add a button to increment the quantity of a product in the shopping cart
//Add a button to decrement the quantity of a product in the shopping cart
//Add a button to clear the shopping cart
//Add a button to display the total amount of the shopping cart

//Library available :
//React Router
//Redux or RecoilState
//Axios
//Material UI
//Tailwind CSS is also available if you want to use it


function App() {
    return (
        <ThemeProvider theme={
            createTheme({
                palette: {
                    mode: 'dark',
                },
            })
        }
        >
            <CssBaseline/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/:id" element={<Product/>}/>
            </Routes>
        </ThemeProvider>

    );
}

export default App;
