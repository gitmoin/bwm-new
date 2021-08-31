export function MyDecorator(config) {
    // debugger

    // console.log(config);
    

    
    return (target)=>{
        // debugger
        // console.log('config', config);


        target['abc']="abc";
        
        target.prototype.hello = "Hello!"
        // console.log('Decorated class - ' + target);
    }

}