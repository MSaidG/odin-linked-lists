export class LinkedList {

	constructor() {
		this.head = null
	}

	append(value) {
		const node = new Node(value)
		if (!this.head) 
		{
				this.head = node
		} 
		else 
		{
			let tail = this.head
			while (tail.nextNode) {
					tail = tail.nextNode
			}
			tail.nextNode = node
		}
	}

	prepend(value) {
		const node = new Node(value)
		if (!this.head) 
		{
			this.head = node
		} 
		else 
		{
			node.nextNode = this.head
			this.head = node
		}
	}

	size() {
		let count = 0
		let node = this.head
		while (node) 
		{
			count++
			node = node.nextNode
		}
		return count
	}

	head() {
		return this.head
	}

	tail() {
		let node = this.head
		while (node.nextNode) 
		{
			node = node.nextNode
		}
		return node
	}

	at(index) {
		let node = this.head
		for (let i = 0; i < index; i++) 
		{
			node = node.nextNode
		}
		return node
	}

	pop() {
		const node = this.tail()
		if (node === this.head) 
		{
			this.head = null
		} 
		else 
		{
			let tail = this.head
			while (tail.nextNode !== node) 
			{
				tail = tail.nextNode
			}
			tail.nextNode = null
		}
		return node
	}

	contains(value) {
		let node = this.head
		while (node) 
		{
			if (node.value === value) 
			{
				return true
			}
			node = node.nextNode
		}
		return false
	}

	find(value) {
		let node = this.head
		let index = 0
		while (node) 
		{
			if (node.value === value) 
			{
				return index
			}
			node = node.nextNode
			index++
		}
		return null
	}

	toString() {
		let string = ""
		let node = this.head
		while (node) 
		{
			string += `( ${node.value} ) -> `
			node = node.nextNode
		}
		string += "null"
		return string
	}

	insertAt(value, index) {
		const node = new Node(value)
		if (index === 0) 
		{
			this.prepend(value)
		} 
		else 
		{
			const leader = this.at(index - 1)
			const follower = leader.nextNode
			leader.nextNode = node
			node.nextNode = follower
		}
	}

	removeAt(index) {
		if (index === 0) 
		{
			this.head = this.head.nextNode
		} 
		else 
		{
			const leader = this.at(index - 1)
			const unwantedNode = leader.nextNode
			leader.nextNode = unwantedNode.nextNode
		}
	}
}

class Node {
	constructor(value) {
		this.value = value
		this.nextNode = null
	}
}