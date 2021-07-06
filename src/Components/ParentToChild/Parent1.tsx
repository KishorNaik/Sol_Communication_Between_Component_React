import react,{Component} from "react";
import Child1 from "./Child1";

interface IParent1PropsParameter{

}

interface IParent1State{
    Data:String
}


export default class Parent1 extends Component<IParent1PropsParameter,IParent1State>{

    constructor(props:IParent1PropsParameter){
        super(props);

        this.state={
            Data:'Data from Parent 1'
        };
    }

    public render(){

        return (
            <div>
                <Child1 DataParentToChild={this.state.Data}></Child1>
            </div>
        )
    }

}