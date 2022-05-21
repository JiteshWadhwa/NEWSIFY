
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';
import imgs from './newsify_icon.png';

const StyledApp = styled(AppBar)`
        background: #0000ff;
        height: 75px;
`;
    
const MenuIcon = styled(Menu)`
        color: #ffffff;
`;
    
const Image = styled('img')({
    height: 75,
    width: 280,
    margin: 'auto',
    paddingRight: 70
})

const Header = () => {
    const url = imgs;

    return (
        <StyledApp>
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt="logo" />
            </Toolbar>
        </StyledApp>
    )
}

export default Header;