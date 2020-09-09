import React from 'react'
import './index.less'
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

export default class NavLeft extends React.Component{
    componentWillMount(){
        const menuNode = this.renderMenu(MenuConfig);
        this.setState({//必须set一下在页面中中才能去获取
            menuNode
        })
    }

    //渲染菜单
    renderMenu = (data) => {
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
        

    }
    render(){
        return(
            <div>
                <div className="logo">
                    <img src="/assets/logo2.png"/>
                    <h1>bicycle</h1>
                </div>
                <Menu style={{ width: 180}} mode="vertical" theme="dark">
                    {this.state.menuNode}
                </Menu>
            </div>
        )
    }
}