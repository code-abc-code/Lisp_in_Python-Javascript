inlin=" (cdr '(a b))"
function getSexp(){
	var a=getToken();
	if (a=="'"){
		return ["quote",getSexp()]
	}
	else if(a!="("){

		return a;
	}
	a=[]
	while(1){
		b=getSexp()
		if(b==")"){
			return a;
		}
		a.push(b)
		console.log(a);
		}
	}
i=0
function getToken(){
	while ( nextChar() ==" "){
		getChar();
	}
	a=getChar()
	// if(a==")")
	// {console.log("probel");}
	// console.log("gets=",a)
	if(a=="(")
		return a
		// console.log("ddd",nextChar())
	while(nextChar()!=" " && nextChar()!="(" & nextChar()!=")" && nextChar()!=""){
		a=a+getChar()
	}
	if(isNaN(a)){
		return a
 	}	
	else{
	// console.log("getting=",a);
	// console.log("1=",typeof(a));
		b=parseFloat(a);
	//console.log("2",typeof(b));
	// console.log(b);
		return a
	}
}
function nextChar(){
	return inlin.slice(0,1);
	}	
function getChar(){
	c=nextChar()
	inlin=inlin.slice(1,inlin.length)
	// console.log("c=",c,"inlin=",inlin);
	return c
	}	
var j=0
while(inlin!=""){
var c=getSexp();
console.log(c)
j=j+1;
}

