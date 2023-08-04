import { AppBar, IconButton, Toolbar, Container } from "@mui/material";
import { } from "@mui/icons-material";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import './Home.css'
function Home() {
    return (
        <>
            <AppBar style={{ background: "white" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start">
                        <ShoppingCartTwoToneIcon className="shopIcon" />
                    </IconButton>

                    <Container>
                        <div className="OtherPages">
                            <a href='/'>Home</a>
                            <a href='./Product'>Product</a>
                            <a href="./Cart">Cart</a>
                            <a href="./Shop">Shop</a>
                        </div>
                    </Container>


                </Toolbar>

            </AppBar>

        </>
    )
}

export default Home;