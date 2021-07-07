import react,{Component, MouseEvent} from "react";
import Child2 from "./Child2";

interface IParent2PropsParameter{

}

interface IParent2State{
    ParentData:string | undefined
}


export default class Parent2 extends Component<IParent2PropsParameter,IParent2State>{

    constructor(props:IParent2PropsParameter){
        super(props);

        this.state={
            ParentData:'Data from Parent 2'
        };
    }

    private ParentCallBackFunc=(data?:string| undefined)=>{
      
        this.setState({
            ParentData:data
        });

        console.log("Parent:",data);
    }

    private onParentTrigger=(event:MouseEvent)=>{

        this.setState({
            ParentData:'Trigger by Parent 2'
        });

        event.preventDefault();
    }

    public render(){
        console.log("Render Parent");
        return (
            <react.Fragment>
            <div style={{backgroundColor:'yellow'}}>
               <h4 style={{color:'red'}}>
                    Parent 2: {this.state.ParentData}
                </h4>

                <Child2 DataParentToChild={this.state.ParentData} ParentCallback={this.ParentCallBackFunc} key={this.state.ParentData}></Child2>

                <button className="btn btn-primary" onClick={this.onParentTrigger}>Parent Trigger</button>
            </div>
            </react.Fragment>
        )
    }

}