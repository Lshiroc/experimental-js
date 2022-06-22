let users = [["Batu", "Bozkan"], ["Zeynal", "Mardanli"], ["Moeha", "Fujiwara"]];
let removedUsers = [];
console.log(users);

function addLast(nickName, lastName) {
    users.push([nickName, lastName]);
}

function addFirst(nickName, lastName) {
    users.unshift([nickName, lastName]);
}

function removeLast() {
    removedUsers.push(users.pop());    
}

function removeFirst() {
    removedUsers.push(users.shift());
}

removeFirst();

removeLast();

addLast("Shiro", "Sora");

addFirst("IShow", "Speed");

console.log(users);
console.log(removedUsers);