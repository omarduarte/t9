/*! t9 v0.0.0 - MIT license */
'use strict';

var T9Tree = function (prefix) {
  // your code goes here
  var t9 = Object.create(t9Properties);

  // c is short for characters
  t9.c   = {};
  t9.value = prefix || "";
  t9.isWord = false;

  return t9;
}

var t9Properties = {
  insertWord: function(word) {
    var firstChar = word[0];
    var remaining = word.slice(1);
    var prefix = this.value + firstChar;

    if (!this.c[firstChar]) {
      this.c[firstChar] = T9Tree(prefix);
    } 
    if (remaining) {
      this.c[firstChar].insertWord(remaining);
    }
  },
  getWord: function(number) {
    
  },
  keyMap: {
    2: ['A','B','C','a','b','c'],
    3: ['D','E','F','d','e','f'],
    4: ['G','H','I','g','h','i'],
    5: ['J','K','L','j','k','l'],
    6: ['M','N','O','m','n','o'],
    7: ['P','Q','R','S','p','q','r','s'],
    8: ['T','U','V','t','u','v'],
    9: ['W','X','Y','Z','w','x','y','z']
  }

};