import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';


export class Header extends React.PureComponent {
    state={
        color:'primary'
    }
    render() {
        const { color } = this.state;
        // setTimeout(()=>{
            // this.setState({color:'default'})
        // },3000)
        return (
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <button><Link to='/counter' style={{textDecoration: 'none'}}>Counter</Link></button>
                <button style={{borderRadius:'10px',boxShadow:'unset'}}><Link to='/names' style={{textDecoration: 'none'}}> Name's Array</Link></button>
                <button style={{borderRadius:'10px',boxShadow:'unset'}}><Link to='/game' style={{textDecoration: 'none'}}> Game</Link></button>
                {/*<Button  variant="contained" color={color} children={<h1>IM</h1>}>Hello World</Button>*/}
            </div>
        )
    }
}