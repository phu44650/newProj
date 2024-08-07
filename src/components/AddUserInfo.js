import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: '',
        address: 'bl',
        age: ''
    }
    //c1:viet arrow o day thi o duoi k can arrow cung dc,hoac ca 2 arrow cung dc
    handleClick = (event) => {
        console.log('ckicl me');
        // console.log(event);

        console.log(`my naem is ${this.state.name}`);
        this.setState({
            name: 'tri'
        })

    }

    //c2: nhung bat buoc phia duoi phai la arrow
    // handleClick (event)  {
    //   console.log('ckicl me');
    //   // console.log(event);

    //   console.log(`my naem is ${this.state.name}`);
    //   this.setState({
    //     name: 'tri'
    //   })

    // }
    handleonMoverOver = (event) => {
        console.log('ckicl međá');

        //console.log(this);//sự kjác biệt 2 csai này ở từ this

    }
    handleOnChangeInput = (event) => {
        ///badcode:this.state.age=event.target.value
        this.setState({
            name: event.target.value
        })

    }
    handleOnChangeInputAge = (event) => {
        this.setState({
            age: event.target.value
        })

    }

    handleOnSubmit = (event) => {
        event.preventDefault()  // ngawn chanj vc reload lai trang
      
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name:this.state.name,
            age: this.state.age
        })//can dau ()

    }
    render() {

        return (
            <div>my name
                {/* thiss dai dien cho classs dang tham chieu */}
                {this.state.name} and my age:{this.state.age}
                <button onMouseOver={this.handleonMoverOver}>hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>click me</button>


                {/* casch tren la viet arrow,cach k can arrow :this.handleClick */}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    {/* dung onsubmit vi neu hoan thanh form ta co the nhan enter luon
          con neu gan enet cho button thi ta lai phai gan them nut enter cho button */}

                    <label>your name:</label>
                    <input
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeInput(event)}
                        type="text" />




                    <label>your age:</label>
                    <input
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeInputAge(event)}
                        type="text" />
                    <button>submit</button>
                    
                </form></div>
        )

    }


}


export default AddUserInfo;