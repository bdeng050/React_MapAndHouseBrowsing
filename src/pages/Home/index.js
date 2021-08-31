import React,{lazy} from 'react'
import { TabBar } from 'antd-mobile'
import {Route} from 'react-router-dom'
import News from '../News'
import './index.css'
import index from '../index'
import {withRouter} from 'react-router-dom'
import CityList from '../CityList'
import Profile from '../Profile'
import HouseList from '../HouseList'



export default class Home extends React.Component{
    state = {
        selectedTab: this.props.location.pathname,
        hidden: false,
        fullScreen: true,
      };
    render(){
        return <div>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/index" component={index}></Route>
            <Route path="/home/list" component={HouseList}></Route>
            
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        //   noRenderContent={true}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
            // <div style={{
            //   width: '22px',
            //   height: '22px',
            //   background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            // />
            <i className="iconfont icon-ind"></i>
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'home/index'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'home/index',
              });
              //redirect
              this.props.history.push('home/index')
            }}
            data-seed="logId"
          >
            {/* {this.renderContent('Life')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="找房"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              this.props.history.push('home/list')
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent('Koubei')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="资讯"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
              this.props.history.push('home/news')
            }}
          >
            {/* {this.renderContent('Friend')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            
          </TabBar.Item>
        </TabBar>
      </div>
        </div>
    }
}



// import React, { lazy } from 'react'
// // 导入路由
// import { Route } from 'react-router-dom'
// // 导入 TabBar
// import { TabBar } from 'antd-mobile'

// // 导入组件自己的样式文件
// import './index.css'

// // 导入TabBar菜单的组件
// import index from '../index'
// // import News from '../News'
// // import HouseList from '../HouseList'
// // import Profile from '../Profile'

// const News = lazy(() => import('../News'))
// const HouseList = lazy(() => import('../HouseList'))
// const Profile = lazy(() => import('../Profile'))

// // TabBar 数据
// const tabItems = [
//   {
//     title: '首页',
//     icon: 'icon-ind',
//     path: '/home'
//   },
//   {
//     title: '找房',
//     icon: 'icon-findHouse',
//     path: '/home/list'
//   },
//   {
//     title: '资讯',
//     icon: 'icon-infom',
//     path: '/home/news'
//   },
//   {
//     title: '我的',
//     icon: 'icon-my',
//     path: '/home/profile'
//   }
// ]

// /* 
//   问题：点击首页导航菜单，导航到 找房列表 页面时，找房菜单没有高亮

//   原因：原来我们实现该功能的时候，只考虑了 点击 以及 第一次加载 Home 组件的情况。但是，我们没有考虑不重新加载 Home 组件时的路由切换，因为，这种情况下，我们的代码没有覆盖到

//   解决：
//     思路：在 路由切换 时，也执行 菜单高亮 的逻辑代码
//     1 添加 componentDidUpdate 钩子函数
//     2 在钩子函数中判断路由地址是否切换（因为路由的信息是通过 props 传递给组件的，所以，通过比较更新前后的两个props）
//     3 在路由地址切换时，让 菜单高亮
// */

// export default class Home extends React.Component {
//   state = {
//     // 默认选中的TabBar菜单项
//     selectedTab: this.props.location.pathname
//   }

//   // 组件接收到新的props（此处，实际上是路由信息）就会触发该钩子函数
//   componentDidUpdate(prevProps) {
//     // prevProps 上一次的props，此处也就是上一次的路由信息
//     // this.props 当前最新的props，此处也就是最新的路由信息
//     // 注意：在该钩子函数中更新状态时，一定要在 条件判断 中进行，否则会造成递归更新的问题
//     if (prevProps.location.pathname !== this.props.location.pathname) {
//       // 此时，就说明路由发生切换了
//       this.setState({
//         selectedTab: this.props.location.pathname
//       })
//     }
//   }

//   // 渲染 TabBar.Item
//   renderTabBarItem() {
//     return tabItems.map(item => (
//       <TabBar.Item
//         title={item.title}
//         key={item.title}
//         icon={<i className={`iconfont ${item.icon}`} />}
//         selectedIcon={<i className={`iconfont ${item.icon}`} />}
//         selected={this.state.selectedTab === item.path}
//         onPress={() => {
//           this.setState({
//             selectedTab: item.path
//           })

//           // 路由切换
//           this.props.history.push(item.path)
//         }}
//       />
//     ))
//   }

//   render() {
//     // console.log(this.props.location.pathname)
//     return (
//       <div className="home">
//         {/* 2.3 渲染子路由 */}
//         <Route path="/home/news" component={News} />
//         <Route exact path="/home" component={index} />
//         <Route path="/home/list" component={HouseList} />
//         <Route path="/home/profile" component={Profile} />
//         {/* TabBar */}

//         <TabBar tintColor="#21b97a" noRenderContent={true} barTintColor="white">
//           {this.renderTabBarItem()}
//         </TabBar>
//       </div>
//     )
//   }
// }