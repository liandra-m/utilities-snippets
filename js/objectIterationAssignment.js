// iteration assignment
for (let attribute of Object.keys(myObject)) {
    myObj.attribute = otherObject[attribute];
}

// conditional assignment
const myObj = { ...(condition && { key: prop }) };