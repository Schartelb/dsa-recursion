/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return;
  if (nums.length === 1) return nums[0]
  return nums[0] * product(nums.slice(1));
}



/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length;
  return longest(words.slice(1)) ?
    words[0].length > words[1].length ?
      words[0].length : words[1].length : words[0].length
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let string = ""
  function _everyOther(str, i = 0) {
    if (i >= str.length) return;
    string += str[i]
    i++
    i++
    _everyOther(str, i)
  }
  _everyOther(str)
  return string
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] === str[str.length - 1] && str.length > 1) {
    return isPalindrome(str.slice(1, -1))
  } else return false
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  function _findIndex(arr, val, idx = 0) {
    if (arr.length == idx) return -1
    if (arr[idx] !== val) {
      idx++
      return _findIndex(arr, val, idx)
    } else {
      return idx
    }
  }
  return _findIndex(arr, val)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  let reverse = ""
  function _revString(str, i = str.length - 1) {
    if (i < 0) return
    reverse += str[i]
    _revString(str, i - 1)
  }
  _revString(str)
  return reverse
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let out = []
  function _gatherStrings(obj) {
    for (let item in obj) {
      if (typeof (obj[item]) == 'object') {
        _gatherStrings(obj[item], out)
      }
      if (typeof (obj[item]) == "string") {
        out.push(obj[item])
      }
    }
  }
  _gatherStrings(obj)
  return out
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
