/*function getShortMessages(messages){
	return messages.filter(function(element){
		return (element.message.length < 50);
	}).map(function(x){
		return x.message;
	});
}
module.exports = getShortMessages*
function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(function(x){
			return goodUsers.some(function (cc){
				return cc.id === x.id;
			});
		});
	};
}
module.exports = checkUsersValid
function countWords(inputWords){
	return inputWords.reduce(function(useMap, word){
		useMap[word] = ++useMap[word] || 1;
		return useMap;
	},{});
}
module.exports = countWords*
function reduce(arr, fn, initial) {
	return (function reduceOne(index, value){
		if(index >= arr.length)
			return value;
		return reduceOne(index+1, fn(value, arr[index],index, arr));
	})(0,initial);
}
module.exports = reduce*
function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function (obj){
		return Object.prototype.hasOwnProperty.call(obj, 'quack');
	}).length;
}
module.exports = duckCount;*
var slice = Array.prototype.slice;

function logger(namespace) {
	return function(){
		console.log.apply(console, [namespace].concat(slice.call(arguments)));	
	}
}
module.exports = logger*

module.exports = function(namespace){
	return console.log.bind(console, namespace);
}*/

function arrayMap(arr,fn, thisArg) {
	return arr.reduce(function(acc, item, index, arr){
		acc.push(fn.call(thisArg, item, index, arr))		
		return acc;	
	},[]);
}
module.exports = arrayMap;
