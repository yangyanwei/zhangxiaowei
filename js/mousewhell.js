window.onload=function(){
	var floors=$(".floor");
	var navs=$(".nav")[0];
	var lis=$("li",navs);
	var flen=floors.length;
	var now=0;
	var next=0;
	var flag=true;
	floors[0].style.top=0;
	mouseWheel(window,function(){
		if(!flag){
			return;
		}
		flag=false;
		next--;
		if(next<0){
			next=flen-1;
		}
		lis[now].className="";
		lis[next].className="hot";
		floors[now].style.zIndex=0;
		floors[next].style.cssText="z-index:10;top:-100%";
		animate(floors[next],{top:0},800,function(){
			floors[now].style.top="100%";
			now=next;
			flag=true;
		});
	},function(){
		if(!flag){
			return;
		}
		flag=false;
		next++;
		if(next==flen){
			next=0;
		}
		lis[now].className="";
		lis[next].className="hot";
		floors[now].style.zIndex=0;
		floors[next].style.zIndex=10;
		animate(floors[next],{top:0},800,function(){
			floors[now].style.top="100%";
			now=next;
			flag=true;
		});
	})
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			if(now<this.index){
				if(!flag){
					return;
				}
				next = this.index;
				flag=false;
				if(next==flen){
					next=0;
				}
				lis[now].className="";
				lis[next].className="hot";
				floors[now].style.zIndex=0;
				floors[next].style.zIndex=10;
				animate(floors[next],{top:0},800,function(){
					floors[now].style.top="100%";
					now=next;
					flag=true;
				});
			}
			if(now>this.index){
				if(!flag){
					return;
				}
				flag=false;
				next=this.index;
				if(next<0){
					next=flen-1;
				}
				lis[now].className="";
				lis[next].className="hot";
				floors[now].style.zIndex=0;
				floors[next].style.cssText="z-index:10;top:-100%";
				animate(floors[next],{top:0},800,function(){
					floors[now].style.top="100%";
					now=next;
					flag=true;
				});
			}
		}
	}
}