/*! t9 v0.0.0 - MIT license */
'use strict';

var T9Tree = function (prefix) {
  // your code goes here
  var t9 = Object.create(t9Properties);

  // c is short for characters
  t9.nextChar = {};
  t9.value = prefix || "";
  t9.isWord = false;

  return t9;
}

var t9Properties = {
  insertWord: function(word) {

    // 'Word' ==> firstChar:'W'; remainig:'ord'
    var firstChar = word[0];
    var remaining = word.slice(1);
    

    var nextNode = this.nextChar[firstChar];
    
    if (!nextNode) {
      var prefix = this.value + firstChar;
      this.nextChar[firstChar] = T9Tree(prefix);
      nextNode = this.nextChar[firstChar];
    } 
    
    if (remaining) {
      nextNode.insertWord(remaining);
    } else {
      // No more characters remaining in the word?
      nextNode.isWord = true;
    }


  },
  getAllWords: function() {
    var words = [];

    if (this.isWord) {
      words.push(this.value);
    }

    for (var key in this.nextChar) {
      words = words.concat(this.nextChar[key].getAllWords());
    }

    return words;
  },
  getWords: function(numbers) {
    numbers = numbers.toString().split('');

    var posibilities = [];
    for (var i = 0; i < numbers.length; i++) {
      var number = numbers[i];
      posibilities.push(this.keyMap[number]);
    }

    

    /*
      - Elements in posibilities ARE ordered dependeing on input 'numbers'
      - Each layer is an element of posiblities. LAYER => ['A','B','C','a','b','c']
      - Each layer is composed of characters that we will look up in nextChar of current trie
          ['G',   ***'H'***    ,'I','g','h','i'],
          ['D','E','F','d',   ***'e'***   ,'f'],
          ['W','X','Y','Z','w','x',   ***'y'***   ,'z']
      - if we can't go deeper (No more layers), then we will look for All words in and below that trie
    */
    var results = [];
    var goDeeper = function(layers, trie) {
      var baseLayer = layers[0];
      
      if (!baseLayer) {
        results = results.concat(trie.getAllWords());
    
      } else {
        
        for (var i = 0; i < baseLayer.length; i++) {
          
          var character = baseLayer[i];
          if (trie.nextChar[character]) {
            goDeeper(layers.slice(1), trie.nextChar[character]);

          }
        }
      }
    };

    goDeeper(posibilities, this)
    return results;
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