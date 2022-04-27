const nameTeam = ['Olivia', 1111, 'Lily', 'Oscar', true, null]

createDreamTeam(nameTeam);
function createDreamTeam(array) {
   return array.filter((member) => typeof member === "string")
   .map((member) => member.trim()[0].toUpperCase())
   .sort()
   .join("");
};