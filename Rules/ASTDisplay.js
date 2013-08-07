function ASTDisplay(){
	this.showTree = showTree;
	function showTree(AST){
		document.write(AST+"<br>");
		AST.visit(this,"");
	}

	this.show = show;
	function show(text,arg){
		document.write(arg+text+"<br>");
	}
	this.indent = indent;
	function indent(text){
		return "  ."+text;
	}
	this.visitBinary = visitBinary;
	function visitBinary(bin, arg){
		this.show("Binary:"+bin,arg);
		bin.lhs.visit(this,this.indent(arg));
		this.show(bin.op,this.indent(arg));
		bin.rhs.visit(this,this.indent(arg));
	}
	this.visitUnary = visitUnary;
	function visitUnary(unary, arg){
		this.show("Unary:"+unary,arg);
		if(unary.op!=="")
			this.show(unary.op,this.indent(arg));
		unary.expr.visit(this,this.indent(arg));
	}
	this.visitPropn = visitPropn;
	function visitPropn(propn, arg){
		this.show("Propn:"+propn,arg);
		this.show("(",this.indent(arg));
		propn.propn.visit(this,this.indent(arg));
		this.show(")",this.indent(arg));
	}
	this.visitLiteral = visitLiteral;
	function visitLiteral(lit, arg){
		this.show("Literal:"+lit,arg);
		this.show(lit,this.indent(arg));
	}
}
