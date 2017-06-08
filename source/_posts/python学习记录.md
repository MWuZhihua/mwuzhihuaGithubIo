---
title: python学习记录
date: 2017-06-08 20:46:33
tags: python 学习
categories: python
---
### 重新导入模块
 from imp import *
 reload(模块名)

### 深拷贝与浅拷贝
```
#浅拷贝： 
a = [2 ,3 ,4] 
b =a

#深拷贝:  
import copy 
a = [2 , 3 , 4]
b = copy.deepcopy(a)
#可深可浅
import copy 
a = [2 , 3 , 4]
b = [3 , 4 , 5]
c = [a, b]
#拷贝了一层 即 拷贝c的值  没有 a和b
e = copy.copy(c)
#浅拷贝
f = (a, b)
g=copy.copy(f)
```

### 私有化
```
xx:共有变量
_x:私有化属性或方法，from module import *禁止导入,类对象和子类可以访问
__xx:避免与子类属性命名冲突，无法在外部直接访问
__xx__:系统提供的方法和属性
```

### property
```
class testClass(object):
	def __init__(self):
		slef.__num = 100
	def getNum(self)
		return self.__num
	def setNum(self , newNum)
		self.__num = newNum
	num = property(getNum  , setNum)

class testClass(object):
	def __init__(self):
		slef.__num = 100
	@property
	def num(self)
		return self.__num
	@num.setter
	def num(self , newNum)
		self.__num = newNum
```
