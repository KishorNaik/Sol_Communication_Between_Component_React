import react,{Component} from "react";

interface IChild1PropsParameter{
    DataParentToChild?:String;
}

interface IChild1State{
    Data?:String;
}

export default class Child1 extends Component<IChild1PropsParameter,IChild1State>{

    constructor(props:IChild1PropsParameter){
        super(props);

        this.state={
            Data:this.props.DataParentToChild
        };
    }

    public render(){
        return (
            <react.Fragment>
            <div style={{backgroundColor:'orange'}}>
                <h4 style={{color:'whitesmoke'}}>
                    Child 1:{this.state.Data}
                </h4>
                
            </div>
            </react.Fragment>
        )
    }

}