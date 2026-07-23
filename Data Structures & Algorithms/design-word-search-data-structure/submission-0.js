class TrieNode {
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root
        for(let char of word) {
            char = char.toLowerCase()
            if(!current.children.has(char)) {
                current.children.set(char, new TrieNode())
            }
            current = current.children.get(char)
        }
        current.endOfWord = true
    }

    dfs(word, charIndex, root) {
        let current = root
        for(let index = charIndex; index < word.length; index++) {
            let char = word[index]
            if(char === ".") {
                for(let child of current.children.values()) {
                    let nextChild = this.dfs(word, index+1, child)
                    if(child && nextChild) {
                        return true
                    }
                }
                return false
            } else {
                if(!current.children.has(char)) {
                    return false
                }
                current = current.children.get(char)
            }
        }
        return current.endOfWord
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let charIndex = 0
        return this.dfs(word, charIndex, this.root)
    }
}
