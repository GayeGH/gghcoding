import React from "react";

// const styles = {
//   headerStyle: {
//     background: 'light pink',
//   },
//   headingStyle: {
//     fontSize: '60px',

//   },
// };

// // We use JSX curly braces to evaluate the style object

// function Home() {
//   return (
//     <>
//     <header style={styles.headerStyle} className="header">
//       <h1 style={styles.headingStyle}>GGH Coding</h1>
//       <h2 style={styles.headingStyle}>Gaye G Haslam</h2>
//     </header>
import meImage from '../../assets/Me.png'
import waterliliesImage from '../../assets/lilies1.png';
function Home() {
  return (
    <header>
      
      <h1>"GGH Coding"</h1>
      <h2>Gaye Gaines Haslam</h2>
      <img src={waterliliesImage} alt="waterlilies"></img>
      <img src={meImage} alt="me"></img>
      <div class="container-fluid"></div>
    </header>
  );
}
export default Home;
