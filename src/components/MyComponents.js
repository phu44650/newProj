import React from "react";

class MyComponents extends React.Component {

  state = {
    name: 'phu',
    address: 'bl',
    age: 23
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
    this.setState({
      name: event.target.value
    })

  }


  handleOnSubmit = (event) => {
    event.preventDefault()  // ngawn chanj vc reload lai trang
    console.log(this.state);
    
  }
  //exténds : keé thauwf
  // ./ là ở thư mục hiện tại vd : ./app.css
  //   ../ là quay về thư mục cha chứa nó   ../src/app.css
  render() {
    //trong day dung cu phap jsx:cho phep viet code js trong html
    return (
      <div>my name
        {/* thiss dai dien cho classs dang tham chieu */}
        {this.state.name}
        <button onMouseOver={this.handleonMoverOver}>hover me</button>
        <button onClick={(event) => { this.handleClick(event) }}>click me</button>
        {/* casch tren la viet arrow,cach k can arrow :this.handleClick */}
        <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
          <input
            onChange={(event) => this.handleOnChangeInput(event)}
            type="text" />
          <button>submit</button>

        </form>


      </div>
    )
  }
}




export default MyComponents;
