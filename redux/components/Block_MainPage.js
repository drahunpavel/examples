import React from 'react';
import {connect} from "react-redux";
import {load,save} from "../redux/actions";


class Block_MainPage extends React.PureComponent {
	
	state = {
		text:''
	};
	load=()=>{
		this.props.load();
	}
	save=()=>{
		
		let obj={"1":"param1", "2":"param2", "3":this.state.text}
		this.props.save(obj);
	}
  	render() {
		// console.log(this.state.text);
		// console.log("reducer",this.props.items)
		console.log(this.props.myreduc.val)
		return (
			<div>
				<div>
					<input type="button" value="getItems" onClick={this.load}/>
				</div>
				<div>
					<input type="text" onChange={(e)=>this.setState({text:e.target.value})} value={this.state.text} />
					<input type="button" value="saveInRedux" onClick={this.save}/>
				</div>
				<hr/>
				<div>{this.props.myreduc.val[1]}</div>
			</div>
		);

  	}

}


export default connect((state) => ({//state - объект редакса
	items: state.items,//чтение 
	myreduc:state.myreduc
}),
{load,save})(Block_MainPage);//запись