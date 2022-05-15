function redundant(str) {
    function func(){
        return str;
    }
	return func;
}

// return func => str;