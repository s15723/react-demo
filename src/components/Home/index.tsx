import React from 'react'
import style from './index.module.less';

const Child = () => {
  return <div>child</div>
}

class Home extends React.Component {
  render() {
    return (
      <div className={style['st-home']}>
        home
        <Child />
      </div>
    )
  }
}

// const Home = () => {
// 
//   return (
//     <div className='st-home'>
//       home
//       <Child />
//     </div>
//   )
// }

export default Home