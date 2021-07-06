import react,{Component,MouseEvent} from "react";

interface IChild2PropsParameter{
    DataParentToChild?:string;
    ParentCallback?:(data?:string | undefined)=>void;
}

interface IChild2State{
    ChildData?:string | undefined;
}

export default class Child2 extends Component<IChild2PropsParameter,IChild2State>{

    constructor(props:IChild2PropsParameter){
        super(props);

        this.state={
            ChildData:this.props.DataParentToChild
        }
       
        console.log("Constructor is Calling");
    }

    private StateChanged=(stateUpdate:()=>void)=>{
        this.setState({
            ChildData:"Data from Child 2"
        },()=> stateUpdate()); // I am not Happy here because of CallBack. is that any other way to update the state??
        console.log("State",this.state.ChildData);
    }


    private onChildTrigger=(event:MouseEvent)=>{
        // Change Data inside the Child 2
        console.log(event);
       
        this.StateChanged(()=>{
            console.log("Before Callback",this.state.ChildData);

            // Invoke Callback to Change data inside parent 1
            if(this.props.ParentCallback){
                
                this.props.ParentCallback(this.state.ChildData);
                console.log("After Callback",this.state.ChildData);
            }
    
        });
    
        event.preventDefault();
       
    };

    
    public render(){
        return (
            <div style={{backgroundColor:'orange'}}>
                <h4 style={{color:'whitesmoke'}}>
                    Child 2: {this.state.ChildData}
                </h4>
                <button className="btn btn-dark" onClick={this.onChildTrigger}>Child Trigger</button>
            </div>

        )
    }

}