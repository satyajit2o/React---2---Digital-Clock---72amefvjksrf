import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
       this.state={hh:0,mm:0,ss:0,frame:"AM"}
       
       var val=setInterval(()=>{
           var date=new Date();
           var hr=date.getHours();
           var min=date.getMinutes();
           var sec=date.getSeconds();
          this.setState({hh:hr,mm:min,ss:sec});
         if(hr>=12 && frame=="AM"){
             this.setState({frame:"PM"});
         }
         else{
            this.setState({frame:"AM"});
         }

    },1000);
    };
     
    render() {

        return(
            <>
            < div className="Clock">
               <h3 id="time">{this.state.hh +":"+this.state.mm +":"+this.state.ss+" "+this.state.frame}</h3>
               </div>
            </>
        )
    }
}


export default App;
