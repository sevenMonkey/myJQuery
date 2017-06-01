## myJQuery
通过对JQuery使用的分析，实现一个简版的自己的JQuery


## 先看一个JQuery的使用Demo indexJquery.html
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	    .box{
	        height:50px;
	        background-color:red
	    }
	    .active{
	        background-color: green;
	    }
	</style>
</head>
<body>
	<div id="id" class="box"></div>
	<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
	<script>
		var $box = $('#id');
		$box.on('click',function(){
			$box.addClass('active');
		})
	</script>
</body>
</html>
```

这个代码很简单吧，大家都应该可以理解吧。我们就是用过JQuery实现了当点击id="id"的元素时我们修改了这个元素的样式，有不明白的可以复制这段代码自己运行以下，这里就不做过多的解释了。
## 实现自己的JQuery
### 分析我们刚才的JQuery代码
```
......
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>//这个地方是引入JQuery库，我们应该换成引入我们的库
<script>
 //1. $ 后面跟的是()这个充分说明$是个方法;
 // 2. $()这个方法可以全局直接调用，那说明它肯定是window的一个属性方法
//  3. $()方法返回的 $box.on(). $box.addClass(),说明$()这个方法返回的是一个对象，而且这个对象里面包含了多个方法 
	var $box = $('#id');    
	$box.on('click',function(){
		$box.addClass('active');
	})
</script>
......
```
### 根据上面的分析我们来一步一步实现我们的代码
```
//将$()方法加入到window对象里面，并且更具
window.$ = function(selector){
  var element = document.querySelector(selector)
//通过上面的分析，我们明白了$()返回的是一个对象
  return {
//实现对象里面的方法
    on:function(eventType, fn){
      element.addEventListener(eventType, fn); 
    },  
    addClass:function(className){
      element.classList.add(className);
    } 
//更多方法自己可以添加实现测试哦
  }
}
```
好了，将上面的文件保存为JQuery.js然后替换掉HTML文件里面的引入文件，试试效果是不是一样了 :-D！
> 我们上面的代码只是为了讲解一个原理性和概念性，和实际工程化使用的JQuery相比还是有很多的差距的，比如说多如果选择器选择到多个元素怎么处理等等..., 有机会我们接着完善分析。

![image.png](http://upload-images.jianshu.io/upload_images/4385018-bb65491b58ca8daf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/880)
欢迎大家关注公众号查看更多精彩内容
