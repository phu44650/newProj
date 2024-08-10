import React, { useState } from "react";
import './DisplayInfo.scss'
import logo from '../logo.svg'
// dấu .. chỉ ra thư mục gôc (cha to nhất)
// class DisplayInfo extends React.Component {


// ///stateless





//     //stateful
// // constructor(props){//chya dau tien trc ham render,chuan bi dataa cho components
// //     console.log(1111111111111111);

// //     super(props);//ke thua casc peops
// //     this.state = {
// //         isShow: true
// //     }
// // }

//     // hanldeSjowHide = () => {
//     //     this.setState({
//     //         isShow: !this.state.isShow
//     //     })
//     // }

//     // componentDidMount(){
//     //     console.log(22222222222);
//     //     setTimeout(() => {
//     //         document.title = 'chehhhhhhhhhhh'
//     //     }, 3000)

//     // }
//     // componentDidUpdate(prevProps,prevState,snapshot){


//     //     console.log(4444444444, prevProps, this.props.listUser);
//     //     if(this.props.listUser !== prevProps.listUser){
//     //         if(this.props.listUser.length===5){
//     //             alert('du 5ng')
//     //         }
//     //     }
//     // }
//     render() {
//         //destrucuring arr/obj
//         console.log('render');



//         const { listUser } = this.props
//         //props=>propẻties=>props la 1 obj


//         return (
//             <div className="displayInfoContainer">
//                 {/* <img src={logo}/> */}
//                 {/* <div>
//                     <span onClick={() => { this.hanldeSjowHide() }}>{this.state.isShow === true ? 'hide list user :' : 'show list user :'}</span>
//                 </div> */}
//                 {/* {this.state.isShow === true && */}
//                 { true &&
//                     <div>
//                         {listUser.map((item, index) => {
//                             return (

//                                 <div key={item.id} className={+item.age > 18 ? 'green' : 'red'}>
//                                     <div>
//                                         <div style={{ color: 'blue', paddingTop: '50px' }}>ten toi la {item.name}</div>
//                                         <div>tuoi toi la {item.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(item.id)}>delete</button>
//                                     </div>

//                                 </div>



//                             )

//                         })}


//                     </div>
//                 }

//             </div>
//         )
//     }

// }



//stateless-> function components k sd tu khoa this
//func components se tu dong lay dc props tu tk cha truyen xuong
const DisplayInfo = (props) => {
    // props nam o day



    const { listUser } = props
    //cahc khai bao mot bien state vs func components: const [ten bien state muon dat-khoi tao(ten state) roi gan gia tri cho no thong qua setstate,cai thu 2 la ham de cap nhayt bien state nay(cong cu de cap nhat cai state nay-gia tri chi thay doi khi thay doi khi goi cai bien nay)]
    ///ten bien state muon dat === this.state={
    //                         isShowHideListUser:true
    //                           true la gia tri truyen vao
    const [isShowHideListUser, setShowHideListUser] = useState(true)/////isShowHideListUser===true////dung cai thu 2 de y=thya doi gia tri cai thu 1


const handleShowHideListUser =()=>{

    setShowHideListUser(!isShowHideListUser)
}
    return (
        <div className="displayInfoContainer">
            <div>
                < p onClick={() => { handleShowHideListUser ()}}>
                    {isShowHideListUser === true ? ' hide list user' :' show list user'}
                </p>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUser.map((item, index) => {
                        return (

                            <div key={item.id} className={+item.age > 18 ? 'green' : 'red'}>
                                <div>
                                    <div style={{ color: 'blue', paddingTop: '50px' }}>ten toi la {item.name}</div>
                                    <div>tuoi toi la {item.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(item.id)}>delete</button>
                                </div>

                            </div>



                        )

                    })}


                </div>
            }

        </div>
    )
}


export default DisplayInfo