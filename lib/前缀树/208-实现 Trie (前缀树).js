/**
 * TrieNode
 * pass 用来记录经过的数量
 * end 用来记录以该节点结尾的数量
 * next 保存下一个节点
 */
var TrieNode = function () {
    this.pass = 0;
    this.end = 0;
    this.next = new Map();
}

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
// 1: 把 word 转 字符数组
// 2: 遍历是否存在，不存在则添加 node 
Trie.prototype.insert = function (word) {
    if (!word) return
    let node = this.root;
    const charArr = word.split('');
    for (let i = 0; i < charArr.length; i++) {
        if (!node.next.get(charArr[i])) {
            let charNode = new TrieNode();
            charNode.pass++;
            node.next.set(charArr[i], charNode);
        }
        node = node.next.get(charArr[i]);
    }
    node.end++;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.root;
    const charArr = word.split('');
    for (let i = 0; i < charArr.length; i++) {
        if (!node.next.get(charArr[i])) {
            return false
        }
        node = node.next.get(charArr[i]);
    }
    if (node.end !== 0) {
        return true
    }
    return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    const charArr = prefix.split('');
    for (let i = 0; i < charArr.length; i++) {
        if (!node.next.get(charArr[i])) {
            return false
        }
        node = node.next.get(charArr[i]);
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */