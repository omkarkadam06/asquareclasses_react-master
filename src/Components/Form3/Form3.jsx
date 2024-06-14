// import React from 'react';
// import './Form3.css';
// import '../style.css';
// import { useInView } from 'react-intersection-observer';

// function Form3() {
//   //
//   const [viewRef, inView] = useInView({
//     triggerOnce: true // Trigger only once
//   });

//   return (
//     <>
//       <form className="form3">
//         <div className="form3_container">
//           <p className="subtitle" style={{textAlign:'center', marginBottom:'20px'}}>ENROLMENT FORM</p>
//           <div className="f3_sec">
//             <p className="f3_title">PERSONAL DETAILS OF STUDENTS</p>
//             <div className="f3_s_c">
//               <div className="input-group mb-3" style={{ width: '90vw' }}>
//                 <span className="input-group-text">
//                   Have you previously enrolled in Asquare Classes ?
//                 </span>
//                 <select className="form-select" aria-label="Default select example">
//                   <option selected>Select Option</option>
//                   <option value="1">Yes</option>
//                   <option value="2">No</option>
//                 </select>
//               </div>
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">(if Yes) Enrolment No</label>
//                 </div>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">Name</label>
//               </div>
//             </div>
//             <div className="f3_s_c">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">Gender</span>
//                 <select className="form-select" aria-label="Default select example">
//                   <option selected>Select Option</option>
//                   <option value="1">Male</option>
//                   <option value="2">Female</option>
//                   <option value="3">Other</option>
//                 </select>
//               </div>
//               <div className="input-group mb-3">
//                 <span className="input-group-text">Category</span>
//                 <select className="form-select" aria-label="Default select example">
//                   <option selected>Select Option</option>
//                   <option value="1">GEN</option>
//                   <option value="2">OBC(NCL)</option>
//                   <option value="3">SC/ST</option>
//                   <option value="4">PH</option>
//                 </select>
//               </div>
//             </div>
//             <div className="f3_s_c">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">Phone (STD)</label>
//                 </div>
//               </div>
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">
//                     Mobile Number (DND Free
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">
//                   Alternate Number (DND Free)
//                 </label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">Email ID</label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">Mother’s Name</label>
//               </div>
//             </div>
//             <div className="f3_s_c">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">Occupation</label>
//                 </div>
//               </div>
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">Designation</label>
//                 </div>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">
//                   Father’s/Guardian’s Name
//                 </label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">Occupation</label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">Designation</label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">
//                   Annual Income of Parent (Lac per annum)
//                 </label>
//               </div>
//             </div>
//             <div className="f3_s_c">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">
//                     If Father/Mother/Teacher: School Name
//                   </label>
//                 </div>
//               </div>
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">
//                     If Father/Mother/Teacher: Board
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">
//                   If Father/Mother/Teacher: District
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="f3_sec">
//             <p className="f3_title">CORRESPONDENCE ADDRESS</p>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">Address</label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">City/Town</label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">State</label>
//               </div>
//             </div>
//             <div className="f3_s_c">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">Pin</label>
//                 </div>
//               </div>
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">Country</label>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="f3_sec">
//             <p className="f3_title">Permanent ADDRESS</p>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">Address</label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">City/Town</label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">State</label>
//               </div>
//             </div>
//             <div className="f3_s_c">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">Pin</label>
//                 </div>
//               </div>
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">Country</label>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="f3_sec">
//             <p className="f3_title">Permanent ADDRESS</p>
//             <div className="input-group mb-3">
//               <span className="input-group-text">Class Studying :</span>
//               <select className="form-select" aria-label="Default select example">
//                 <option selected>Select Option</option>
//                 <option value="1">9</option>
//                 <option value="2">10</option>
//                 <option value="3">11</option>
//                 <option value="3">12</option>
//                 <option value="4">12 Pass</option>
//               </select>
//             </div>
//           </div>
//           <div className="f3_sec">
//             <p className="f3_title">
//               DETAILS OF SCHOOL STUDYING IN/LAST ATTENDED
//             </p>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">School Name</label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">School Address</label>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">City/Town</label>
//               </div>
//             </div>
//             <div className="f3_s_c">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">State</label>
//                 </div>
//               </div>
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">Pin</label>
//                 </div>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <span className="input-group-text">@</span>
//               <div className="form-floating">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInputGroup1"
//                   placeholder="Username"
//                 />
//                 <label for="floatingInputGroup1">Phone (STD) </label>
//               </div>
//             </div>
//             <div className="f3_s_c">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">School affiliated to :</span>
//                 <select className="form-select" aria-label="Default select example">
//                   <option selected>Select Option</option>
//                   <option value="1">CBSE</option>
//                   <option value="2">ICSE</option>
//                   <option value="3">MHSB</option>
//                   <option value="4">Other</option>
//                 </select>
//               </div>
//               <div className="input-group mb-3">
//                 <span className="input-group-text">@</span>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="floatingInputGroup1"
//                     placeholder="Username"
//                   />
//                   <label for="floatingInputGroup1">
//                     If others (Please specify)
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/*  */}
//           {/* <select className="form-select" aria-label="Default select example">
//             <option selected>Select Option</option>
//             <option value="1">Yes</option>
//             <option value="2">No</option>
//             <option value="3">Three</option>
//           </select> */}
//           {/*  */}
//           {/* <div className="input-group mb-3">
//             <span className="input-group-text">@</span>
//             <div className="form-floating">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="floatingInputGroup1"
//                 placeholder="Username"
//               />
//               <label for="floatingInputGroup1">Username</label>
//             </div>
//           </div> */}
//           {/*  */}
//         </div>
//       </form>
//     </>
//   );
// }

// export default Form3;
