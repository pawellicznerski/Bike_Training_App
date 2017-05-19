import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link,NavLink, Switch} from 'react-router-dom';
import {EntryForm} from './components/entryForm.js';
import {FillInForm} from './components/fillInForm.js';

const linkToNewAccount = ({to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <NavLink activeClassName="selected" to={to}>{match ? 'Nowe konto 232' : 'Nowe konto 2'}oiuhjoihjoi</Link>
  </li>
  )}/>
)

const Home =({ match  })=> (
  <Router>
    <div>
      <p>witamy w trainig planie</p>
      <linkToNewAccount activeOnlyWhenExact={true} to="/nowekonto"/>
      <li><NavLink to="/nowekonto">nowe konto</NavLink></li>
      <li><NavLink to="/nowekonto">nowe konto</NavLink></li>
      <Route path="/nowekonto" component={FillInForm}/>
    </div>
  </Router>
)




//
// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
//
// const CustomLinkExample = () => (
//   <Router>
//     <div>
//       <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
//       <OldSchoolMenuLink to="/about" label="About"/>
//       <hr/>
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//     </div>
//   </Router>
// )
//
// const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
//   <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
//     <div className={match ? 'active' : ''}>
//       {match ? '> ' : ''}<Link to={to}>{label}</Link>
//     </div>
//   )}/>
// )
//
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )
//
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )
//
// export default CustomLinkExample














class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
              <nav>
                <ul>
                  <li><NavLink to="/" >menu</NavLink></li>
                  <li><NavLink to="/logowanie">logowanie</NavLink></li>
                </ul>
              </nav>
              <Route exact path="/" component={Home}/>
              <Route path="/logowanie" component={EntryForm}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

//example from reacttraining

// This example shows how to render two different screens
// (or the same screen in a different context) at the same url,
// depending on you got there.
//
// Click the colors and see them full screen, then "visit the
// gallery" and click on the colors. Note the URL and the component
// are the same as before but now we see them inside a modal
// on top of the old screen.
//
// import React, {Component} from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom'
//
//
// const IMAGES = [
//   { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
//   { id: 1, title: 'Lime Green', color: 'LimeGreen' },
//   { id: 2, title: 'Tomato', color: 'Tomato' },
//   { id: 3, title: 'Seven Ate Nine', color: '#789' },
//   { id: 4, title: 'Crimson', color: 'Crimson' }
// ]
//
// const Thumbnail = ({ color }) =>
//   <div style={{
//     width: 50,
//     height: 50,
//     background: color
//   }}/>
//
// const Image = ({ color }) =>
//   <div style={{
//     width: '100%',
//     height: 400,
//     background: color
//   }}></div>
//
// const Home = () => (
//   <div>
//     <Link to='/gallery'>Visit the Gallery</Link>
//     <h2>Featured Images</h2>
//     <ul>
//       <li><Link to='/img/2'>Tomato</Link></li>
//       <li><Link to='/img/4'>Crimson</Link></li>
//     </ul>
//   </div>
// )
//
// const Gallery = () => (
//   <div>
//     {IMAGES.map(i => (
//       <Link
//         key={i.id}
//         to={{
//           pathname: `/img/${i.id}`,
//           // this is the trick!
//           state: { modal: true }
//         }}
//       >
//         <Thumbnail color={i.color} />
//         <p>{i.title}</p>
//       </Link>
//     ))}
//   </div>
// )
//
// const ImageView = ({ match }) => {
//   const image = IMAGES[parseInt(match.params.id, 10)]
//   if (!image) {
//     return <div>Image not found</div>
//   }
//
//   return (
//     <div>
//       <h1>{image.title}</h1>
//       <Image color={image.color} />
//     </div>
//   )
// }
//
// const Modal = ({ match, history }) => {
//   const image = IMAGES[parseInt(match.params.id, 10)]
//   if (!image) {
//     return null
//   }
//   const back = (e) => {
//     e.stopPropagation()
//     history.goBack()
//   }
//   return (
//     <div
//       onClick={back}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//         background: 'rgba(0, 0, 0, 0.15)'
//       }}
//     >
//       <div className='modal' style={{
//       position: 'absolute',
//         background: '#fff',
//         top: 25,
//         left: '10%',
//         right: '10%',
//         padding: 15,
//         border: '2px solid #444'
//       }}>
//         <h1>{image.title}</h1>
//         <Image color={image.color} />
//         <button type='button' onClick={back}>
//           Close
//         </button>
//       </div>
//     </div>
//   )
// }
//
// class ModalSwitch extends Component {
//
//   // We can pass a location to <Switch/> that will tell it to
//   // ignore the router's current location and use the location
//   // prop instead.
//   //
//   // We can also use "location state" to tell the app the user
//   // wants to go to `/images/2` in a modal, rather than as the
//   // main page, keeping the gallery visible behind it.
//   //
//   // Normally, `/images/2` wouldn't match the gallery at `/`.
//   // So, to get both screens to render, we can save the old
//   // location and pass it to Switch, so it will think the location
//   // is still `/` even though its `/images/2`.
//   previousLocation = this.props.location
//
//   componentWillUpdate(nextProps) {
//     const { location } = this.props
//     // set previousLocation if props.location is not modal
//     if (
//       nextProps.history.action !== 'POP' &&
//       (!location.state || !location.state.modal)
//     ) {
//       this.previousLocation = this.props.location
//     }
//   }
//
//   render() {
//     const { location } = this.props
//     const isModal = !!(
//       location.state &&
//       location.state.modal &&
//       this.previousLocation !== location // not initial render
//     )
//     return (
//       <div>
//         <Switch location={isModal ? this.previousLocation : location}>
//           <Route exact path='/' component={Home}/>
//           <Route path='/gallery' component={Gallery}/>
//           <Route path='/img/:id' component={ImageView}/>
//         </Switch>
//         {isModal ? <Route path='/img/:id' component={Modal} /> : null}
//       </div>
//     )
//   }
// }
//
//  const App = () => (
//   <Router>
//     <Route component={ModalSwitch} />
//   </Router>
// )
// export default App;
