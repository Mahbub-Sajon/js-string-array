function megaFriends(friends){
    if(Array.isArray(friends)==false){
        return 'What are you doing man';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['hei', "hello", 'bro', 'sam', 'rashid'];
const myBigBuddy = megaFriends(friends);
console.log(myBigBuddy);
if(friends.includes('sam')){
    console.log('vrum')
}


const first = [1,2,3,4];
const second = [5,6,7,8,9];
const combined = first.concat(second);
console.log(combined);