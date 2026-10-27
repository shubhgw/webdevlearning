


obj = {
    harry:98,
    rohan:70,
    aakash:90,
}

for (const student in obj) {
    if (!Object.hasOwn(obj, student)) continue;
    
    const marks = obj[student];
    
    console.log(student,"Got",marks,"marks in test !")
}
