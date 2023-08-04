import { AppBar,  IconButton, Toolbar } from "@mui/material";
import { } from "@mui/icons-material";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import './Home.css';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Header() {
    return (
        <>
            <AppBar style={{ background: "white" }} className="header">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start">
                        <ShoppingCartTwoToneIcon className="shopIcon" />
                    </IconButton>

                    <div className="main-container">
                        <div className="OtherPages">
                            <a href='/'>Home</a>
                            <a href='./Product'>Product</a>
                            <a href="./Cart">Cart</a>
                            <a href="./Shop">Shop</a>
                        </div>
                    </div>

                    <div className="thirdDiv">
                        <div>
                            <IconButton size="small"  >
                                <HowToRegIcon className="regIcon" />
                                <p style={{ color: "pink" }}>Login/register</p>
                            </IconButton >

                            <IconButton>
                                <SearchIcon className="searchIcon"/>
                            </IconButton>

                            <IconButton>
                                <AddShoppingCartIcon className="shopCartIcon"/>
                            </IconButton>

                            <IconButton>
                                <FavoriteBorderIcon className="heartIcon"/>
                            </IconButton>
                        </div>


                    </div>

                </Toolbar>
            </AppBar>

        </>
    )
}

export default Header;