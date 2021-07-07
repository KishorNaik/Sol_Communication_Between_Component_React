import react,{Component, MouseEvent} from "react";
import Child1 from "./Child1";

interface IParent1PropsParameter{

}

interface IParent1State{
    Data:string
}


export default class Parent1 extends Component<IParent1PropsParameter,IParent1State>{

    constructor(props:IParent1PropsParameter){
        super(props);

        this.state={
            Data:'Data from Parent 1'
        };
    }

    private OnParentTrigger=(event:MouseEvent)=>{

        this.setState({
            Data:'Trigger by Parent 1'
        });

        event.preventDefault();
    }

    public render(){

        return (
            <react.Fragment>
            <div style={{backgroundColor:'yellow'}}>
                 <h4 style={{color:'red'}}>
                    Parent1 :{this.state.Data}
                </h4>
                <Child1 DataParentToChild={this.state.Data} key={this.state.Data}></Child1>
                <button className="btn btn-secondary" onClick={this.OnParentTrigger}>Parent Trigger</button>
            </div>
            </react.Fragment>
        )
    }

}