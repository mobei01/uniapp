export function throttle(fn,wait){
	var timer = null;
	return function(){
		if(!timer){
			timer = setTimeout(function(){
				fn()
				timer = null
			},wait)
		}
	}()
}

export function debounce(fn,delay){
	let timer;
	
	return function(...args){
		const context = this
		if(timer){
			clearTimeout(timer)
		}
		
		timer = setTimeout(()=>{
			fn.apply(context,args)
		},delay)
		
	}
}