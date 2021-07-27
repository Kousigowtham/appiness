import {Container,Base,Logo,Button} from './styles/header'
import {Link as ReactRouterLink} from 'react-router-dom'
const Header=({children,...restProps})=>{
        return <Container {...restProps}>{children}</Container> 
}

Header.Base=function HeaderBase({children,...restProps}){
    return <Base {...restProps}>{children}</Base> 
}

Header.Logo=function HeaderLogo({to,children,...restProps}){
   
    return (<ReactRouterLink to={to}>
                <Logo {...restProps}>{children}</Logo>
            </ReactRouterLink> )
}

Header.Button=function HeaderButton({children,...restProps}){
    return <Button {...restProps}>{children}</Button> 
}

export default Header;

