function solve(initialFormation, commands) {
    let formation = [...initialFormation];
  
    for (const command of commands) {
      const [action, ...args] = command.split(' ');
  
      switch (action) {
        case 'destroy':
          const destroyIndex = parseInt(args[0], 10);
          if (destroyIndex >= 0 && destroyIndex < formation.length) {
            formation.splice(destroyIndex, 1);
            console.log(formation?.join(' '));
          }
          break;
        case 'swap':
          const swapIndex1 = parseInt(args[0], 10);
          const swapIndex2 = parseInt(args[1], 10);
          if (
            swapIndex1 >= 0 &&
            swapIndex1 < formation.length &&
            swapIndex2 >= 0 &&
            swapIndex2 < formation.length
          ) {
            [formation[swapIndex1], formation[swapIndex2]] = [
              formation[swapIndex2],
              formation[swapIndex1],
            ];
            console.log(formation?.join(' '));
          }
          
          break;
        case 'add':
          const addID = parseInt(args[0], 10);
          formation.push(addID);
          console.log(formation?.join(' '));
          break;
        case 'insert':
          const insertID = parseInt(args[0], 10);
          const insertIndex = parseInt(args[1], 10);
          if (insertIndex >= 0 && insertIndex <= formation.length) {
           formation.splice(insertIndex, 0, insertID);
           console.log(formation?.join(' '));
          }
          break;
        case 'center':
          const centerIndex = Math.floor(formation.length / 2);
          if (formation.length % 2 === 0) {
            console.log(formation.slice(centerIndex - 1, centerIndex + 1).join(' '));
          } else {
            console.log(formation[centerIndex]);
          }
          break;
        default:
          break;
      }
    }
  }