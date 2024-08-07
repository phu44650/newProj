import React from "react";
import './DisplayInfo.scss'

class DisplayInfo extends React.Component {

    state = {
        isShow: true
    }
    hanldeSjowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        //destrucuring arr/obj

        const { listUser } = this.props
        //props=>propẻties=>props la 1 obj


        return (
            <div className="displayInfoContainer">
                <div>
                    <span onClick={() => { this.hanldeSjowHide() }}>{this.state.isShow === true ? 'hide list user :' : 'show list user :'}</span>
                </div>
                {this.state.isShow === true &&
                    <div>
                        {listUser.map((item, index) => {
                            return (
                              
                                <div key={item.id} className={+item.age > 18 ? 'green' : 'red'}>
                                        <div style={{color:'blue',paddingTop:'50px'}}>ten toi la {item.name}</div>
                                        <div>tuoi toi la {item.age}</div>

                                    </div>
                                    
                              
                               
                            )

                        })}

                       
                    </div>
                }

            </div>
        )
    }

}

export default DisplayInfo