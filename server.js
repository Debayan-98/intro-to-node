const cliColor=require("cli-color");
// console.log(cliColor.red('Hello devs.....'));
// console.log(cliColor.green('Hello devs.....'));
// console.log(cliColor.blue('Hello devs.....'));

// console.log(cliColor.red.bgWhite.underline("Underlined red text on white background."));

const danger=cliColor.red.bold
const warning=cliColor.yellow.bold
const success=cliColor.green.bold


let x=10,
y="100";
if(x===y){
    console.log(success('Absolutely Same !!'));
}else if(x==y){
    console.log(warning('Both are samr,But Typesare not same!!!'));
}else{
    console.log(danger('They are not same!!'));
}
