import React from 'react';
import Layout from "../../components/Layouts/Layout";
import "../../styles/Homestyle.css";
import Section1 from "./Section1";
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';



function Home() {
  return (
    <>
      <Layout>
        {/* Home section1 Hero Banner */}
        <Section1 />

        {/* About section2  */}
        <Section2 />

        {/* Menu Section 3 */}
        <Section3 />

        {/* Promotion section 4 */}
        <Section4 />

        {/* Shop Section 5 */}
        <Section5 />

        {/* Blog Section 6 */}
        <Section6 />

        {/* Contact section 7 */}
        <Section7 />
       
        
      </Layout>
    </>
  )
}

export default Home;