import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/index.tsx'
import About from './components/About/index.tsx'
import './App.less'
import { ConfigProvider } from 'antd'

class App extends React.Component {
  render() {
    return (
      <ConfigProvider getPopupContainer={triggerNode => triggerNode.parentNode} prefixCls="st">
        <BrowserRouter>
          <Link to='home'>home</Link>
          <Link to='about'>about</Link>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    )
  }
}
// const App = () => {
// 
//   return (
//     <div className='app'>
//       <BrowserRouter>
//         <Link to='home'>home</Link>
//         <Link to='about'>about</Link>
//         <Routes>
//           <Route path='/home' element={<Home />}></Route>
//           <Route path='/about' element={<About />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

export default App