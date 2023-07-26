function getUniqueUsers(list1, list2) {
  const userSet1 = new Set(list1);
  const userSet2 = new Set(list2);

  // Unique set of users from userSet1 which are not in userSet2
  const uniqueUsersList1 = new Set([...userSet1].filter(user => !userSet2.has(user)));

  // Unique set of users from userSet2 which are not in userSet1
  const uniqueUsersList2 = new Set([...userSet2].filter(user => !userSet1.has(user)));

  // Set of users who are present in userSet1 and userSet2 both
  const commonUsers = new Set([...userSet1].filter(user => userSet2.has(user)));
  

  // converting setUsers into array format 
  const  uniqueUsers1 = Array.from(uniqueUsersList1);
  const  uniqueUsers2 = Array.from(uniqueUsersList2);
  const   finalCommonUsers= Array.from(commonUsers);

  return {
      uniqueUsers1,
      uniqueUsers2,
      finalCommonUsers
  }
}

const userList1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const userList2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const result = getUniqueUsers(userList1, userList2);

console.log( result.uniqueUsers1);
console.log(result.uniqueUsers2);
console.log(result.finalCommonUsers);
