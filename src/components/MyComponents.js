import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponents extends React.Component {

  state = {
    listUser: [
      { id: 1, name: 'phu0', age: '12' },
      { id: 2, name: 'phu1', age: '53' },
      { id: 3, name: 'phu2', age: '74' },
    ]

  }

  handleAddNewUser = (userObj) => {
    // console.log('check data', userObj);
    // this.setState({
    //   listUser: [ userObj,...this.state.listUser]
    // })

    //c2
    let listUserClone = [...this.state.listUser]
    this.setState({
      listUser: [userObj, ...listUserClone]
    })
  }
  handleDeleteUser=(userId)=>{
    let listUserClone = [...this.state.listUser]
    listUserClone=listUserClone.filter((item)=>{
      return item.id !== userId
      // ví dụ như tri=uyền id=3 vào,filtẻ sẽ lọc ra các item có id khác 3 và cho vào mảng mới,còn csai trùng sẽ k dc cho vào mảng
    })
    this.setState({
      listUser:listUserClone
    }
    )
  }

  //exténds : keé thauwf
  // ./ là ở thư mục hiện tại vd : ./app.css
  //   ../ là quay về thư mục cha chứa nó   ../src/app.css
  render() {
    //trong day dung cu phap jsx:cho phep viet code js trong html

    {/* bt neeus cuyển props xuống tk con kiểu như age=30 hoạc age= true thì cai jsx sẽ k hiểu dc nên muốn dc thì khai báo như phía dưới  hoạc cho những thứ  đó trong ngoạc nhọn{}d*/ }
    const myAge = 40
    const MyInfo = ['ad', 'ads', 'đâsd']

    // const a = 'dsadsadsadsa'
    // const b ={a:'dsad'}//neu là obj thi k dung cach thong thuong de in ra man hinh dc ma phai dun log thi se in ra dc o tab cốnle
    return (



      <>

        {/* {a} */}
       {/* {console.log(b)}
       {JSON.stringify(b)} */}
       {/* convert doi tuong obj sang Json thi oi in dc ra man hinh*/}
        
        <div className="a">



          <AddUserInfo
            handleAddNewUser={this.handleAddNewUser}
          // truyen di thi k can dau () o func

          />
          <br></br>
          <DisplayInfo
            listUser={this.state.listUser}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>

        <div className="b"></div>
      </>
    )
  }
}




export default MyComponents;
