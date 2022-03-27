
import "../styles.css";
import data from "./all-sample";


 function List() {
     return (
         <div className="queue">
             <div className="queue-cover" >
                 {
                     data.map((user,key) => {
                         return (
                             <section>
                                 <img src={user.url} alt="" className="img" />
                                 <p>
                                 {user.name}
                                 </p>
                                 <p>
                                 {user.track_number}
                                 </p>
                                 <p>
                                 {user.type}
                                </p>
                             </section>
                         )
                     })
                 }
            </div>
         </div>
     )
}
 
export default List;
// function ListComponent() {
//     return ( <div>
//         <div className="queue">
//             <div className="queue-cover">
//                 {
//                     data.map(user => {
//                         return (
//                             <div>
//                         )
//                     })
//         }
//             {/* <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="" />
//             <i className="fas fa-pause"></i> */}
//         </div>
//         <p className="name">Somebody To Love /
//             Queen</p>
//         </div>
//         <br />
//     <div className="queue">
//         <div className="queue-cover">
//             <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="" />
//             <i className="fas fa-pause"></i>
//         </div>
//         <p className="name">
//         Doing All Right /
//             Queen
//         </p>
//         <p >Queen</p>
//         </div>
//         <br />
//     <div className="queue">
//         <div className="queue-cover">
//             <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="" />
//             <i className="fas fa-pause"></i>
//         </div>
//         <p className="name">
//         Killer Queen /
//             Queen
//         </p>
//         <p >Queen</p>
//         </div>
//         <br />
//     <div className="queue">
//         <div className="queue-cover">
//             <img src="https://i.scdn.co/image/ab67616d00004851e8b066f70c206551210d902b" alt="" />
//             <i className="fas fa-pause"></i>
//         </div>
//         <p className="name">Bohemian Rhapsody (The Original Soundtrack)/
//             Queen</p>
//         </div>

//         </div>
//                         );
// }

// export default ListComponent;