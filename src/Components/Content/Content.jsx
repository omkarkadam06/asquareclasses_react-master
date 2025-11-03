// import React from 'react';
// import './Content.css';
// import '../style.css';
// import img from '../Assets/logo-whatsapp-color.png';
// import { Link } from 'react-router-dom';

// function Content() {
//   return (
//     <>
//       <div id="wrap">
//         <div id="topbar">
//           <h1 id="sitename">
//             <a href={img}>
//               Spotlight <span>Blog</span>
//             </a>
//           </h1>
//           <div id="topmenu">
//             <ul>
//               <li>
//                 <a href={img}>Home</a>
//               </li>
//               <li>
//                 <a href="tables.html">Tables</a>
//               </li>
//               <li>
//                 <a href="forms.html">Forms</a>
//               </li>
//               <li>
//                 <a href={img}>Nogo</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div id="header">
//           <h2 id="description">Spotlight Is A Free CSS Template</h2>
//         </div>
//         <div id="main">
//           <div id="content">
//             <div className="post">
//               <div className="posthead">
//                 <p className="datebox">
//                   <span className="day">28</span>
//                   <span className="month"> September</span>
//                 </p>
//                 <h2>
//                   <span>Hello</span> Welcome
//                 </h2>
//                 <p className="postinfotop">Posted by Admin</p>
//               </div>
//               <blockquote className="extract">
//                 <p>
//                   Spotlight Blog is a Free CSS Template released under Creative
//                   Commons 2.5 License by Rambling Soul
//                 </p>
//               </blockquote>
//               <p>
//                 {' '}
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
//                 commodo ornare massa. Vivamus eu nisi. Pellentesque non quam a
//                 mauris lacinia condimentum. Nulla facilisi. Fusce malesuada,
//                 ligula ac vehicula lobortis, sapien augue ultrices eros, at
//                 imperdiet mi lorem nec ipsum. Cras hendrerit blandit enim.
//                 Curabitur felis enim, bibendum vitae, tincidunt ut, ornare at,
//                 enim. Cras accumsan facilisis nisi. Proin consectetuer est sit
//                 amet leo gravida ullamcorper. Cras a lectus et augue pulvinar
//                 euismod. Proin hendrerit placerat arcu. In hac habitasse platea
//                 dictumst. Etiam quis est ut lectus eleifend dignissim.{' '}
//                 <span className="readmore">
//                   {' '}
//                   <a href={img}>Read More</a>
//                 </span>
//               </p>
//               <p className="postinfo">
//                 Category | <a href={img}>No Comments</a> |{' '}
//                 <a href={img}>Permalink</a>
//               </p>
//             </div>
//             <div className="post">
//               <div className="posthead">
//                 <p className="datebox">
//                   <span className="day">28</span>
//                   <span className="month"> September</span>
//                 </p>
//                 <h2>
//                   <span>Lists </span>Example
//                 </h2>
//               </div>
//               <p>
//                 {' '}
//                 Proin turpis. Aenean vitae neque. Cras ornare dolor id nibh.
//                 Etiam quam. Aenean aliquam purus a tellus. Donec mattis metus
//                 eget dui. Sed egestas suscipit risus. Nulla odio nunc,
//                 consectetuer ut, placerat eleifend, vestibulum eget, justo.
//                 Morbi non elit. Suspendisse iaculis nisi. Curabitur nulla.
//                 Maecenas scelerisque convallis arcu.
//               </p>
//               <ul>
//                 <li>Sed blandit, mauris eu convallis dapibus</li>
//                 <li>orci augue luctus nisl, ac sodales dolor enim a metus</li>
//                 <li>Mauris rhoncus, arcu vel viverra aliquet</li>
//                 <li>sapien diam porttitor orci</li>
//                 <li>id luctus sem augue sit amet dui</li>
//               </ul>
//               <ol>
//                 <li>In vulputate magna in orci. </li>
//                 <li>Mauris ac neque ut velit auctor euismod.</li>
//                 <li>
//                   Duis nisi eros, condimentum quis, bibendum nec, pretium a,
//                   dui.{' '}
//                 </li>
//                 <li>
//                   Proin felis purus, elementum at, sagittis non, euismod at,
//                   tortor.{' '}
//                 </li>
//                 <li>Duis ut pede vitae odio facilisis semper. </li>
//               </ol>
//               <p className="postinfo">
//                 Category | <a href={img}>No Comments</a> |{' '}
//                 <a href={img}>Permalink</a>
//               </p>
//             </div>
//             <div className="post">
//               <div className="posthead">
//                 <p className="datebox">
//                   <span className="day">28</span>
//                   <span className="month"> September</span>
//                 </p>
//                 <h2>
//                   <span>Other</span> Style
//                 </h2>
//               </div>
//               <p>
//                 {' '}
//                 Sed blandit, mauris eu convallis dapibus, orci augue luctus
//                 nisl, ac sodales dolor enim a metus. Mauris rhoncus, arcu vel
//                 viverra aliquet, sapien diam porttitor orci, id luctus sem augue
//                 sit amet dui. In vulputate magna in orci. Mauris ac neque ut
//                 velit auctor euismod.
//               </p>
//               <code>
//                 {' '}
//                 #wrap #main #content .post ul
//                 {/* {
//         padding: 10px;
//         list-style-type: none;
//         margin-left: 15px;
//         } */}
//               </code>
//               <p>
//                 {' '}
//                 Duis nisi eros, condimentum quis, bibendum nec, pretium a, dui.
//                 Proin felis purus, elementum at, sagittis non, euismod at,
//                 tortor. Duis ut pede vitae odio facilisis semper. Proin pede.
//                 Vestibulum libero. Aliquam erat volutpat. Class aptent taciti
//                 sociosqu ad litora torquent per conubia nostra, per inceptos
//                 hymenaeos. Fusce auctor, odio ut vulputate fermentum, ante diam
//                 tempor augue, in accumsan lectus velit in felis. Phasellus at
//                 nulla sit amet magna condimentum elementum.{' '}
//               </p>
//               <p className="postinfo">
//                 Category | <a href={img}>No Comments</a> |{' '}
//                 <a href={img}>Permalink</a>
//               </p>
//               <div id="pagination">
//                 <a href={img}>&laquo; Previous</a>
//                 <span>
//                   <a href={img}>Next &raquo;</a>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div id="sidebar">
//             <div className="sidebartop">
//               {' '}
//               <a href={img}>
//                 <img src="images/feed.jpg" alt="" />
//               </a>
//             </div>
//             <div className="sidebarcontent">
//               <div className="sidebarbox">
//                 <h2>About</h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
//                   Etiam commodo ornare massa. Vivamus eu nisi. Pellentesque non
//                   quam a mauris lacinia condimentum. Nulla facilisi. Fusce
//                   malesuada, ligula ac vehicula lobortis, sapien augue ultrices
//                   eros, at imperdiet mi lorem nec ipsum. Cras hendrerit blandit
//                   enim. <a href={img}>Read More</a>
//                 </p>
//               </div>
//               <div className="sidebarcol">
//                 <h2>Pages</h2>
//                 <ul className="normalmenu">
//                   <li>
//                     <a href={img}>Welcome Page</a>
//                   </li>
//                   <li>
//                     <a href="tables.html">Tables Example</a>
//                   </li>
//                   <li>
//                     <a href="forms.html">Forms Example</a>
//                   </li>
//                   <li>
//                     <a href={img}>No Go Link</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="sidebarcol">
//                 <h2>Categories</h2>
//                 <ul className="normalmenu">
//                   <li>
//                     <a href={img}>Web Design</a>
//                   </li>
//                   <li>
//                     <a href={img}>Graphic Design</a>
//                   </li>
//                   <li>
//                     <a href={img}>CSS &amp; XHTML</a>
//                   </li>
//                   <li>
//                     <a href={img}>Wordpress</a>
//                   </li>
//                 </ul>
//               </div>
//               <p className="clear2"></p>
//               <h2>Recent Posts</h2>
//               <ul className="posts">
//                 <li>
//                   <a href={img}> Donec mattis metus eget dui. </a>
//                 </li>
//                 <li>
//                   <a href={img}>Sed egestas suscipit risus. </a>
//                 </li>
//                 <li>
//                   <a href={img}>Nulla odio nunc, consectetuer ut</a>
//                 </li>
//                 <li>
//                   <a href={img}> placerat eleifend, vestibulum eget, justo. </a>
//                 </li>
//                 <li>
//                   <a href={img}>Morbi non elit. Suspendisse iaculis nisi.</a>
//                 </li>
//                 <li>
//                   <a href={img}> Curabitur nulla. </a>
//                 </li>
//                 <li>
//                   <a href={img}>Maecenas scelerisque convallis arcu. </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="sidebarbtm"></div>
//           </div>
//           <div className="clear"></div>
//         </div>
//         <div id="footer">
//           {' '}
//           Copy right &copy; Information | <a href={img}>And</a> |{' '}
//           <a href={img}>Some</a> | <a href={img}>Links</a> |{' '}
//           <a href={img}>Goes</a> | <a href={img}>Here</a>
//           <div id="credit">
//             {' '}
//             <a href="http://ramblingsoul.com">CSS Template</a> Rambling Soul
//           </div>
//         </div>
//       </div>
//       <div
//       // align=center
//       >
//         This template downloaded form <a href={img}>free website templates</a>
//       </div>
//     </>
//   );
// }

// export default Content;
