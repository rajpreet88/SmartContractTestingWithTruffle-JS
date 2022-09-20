const storageTest = artifacts.require('Storage');

contract('Storage',()=>{
    //***Se see that we have been repeated creating instance of the smart contract in every it block. 
    // in order to avoid repeating, Mocha Framework gives before(), beforeEach(), after(), afteEach() */
    // it('Should return the item', async()=>{
    //     const storage = await storageTest.deployed();
    //     await storage.setter("Top Gun Maverick");

    //     const storageResult = await storage.getter();
    //     assert(storageResult === 'Top Gun Maverick');
    // })
    // it('Should return Tesla', async()=>{
    //     const storage = await storageTest.deployed();
    //     await storage.setter("Tesla");

    //     const storageResult = await storage.getter();
    //     assert(storageResult === 'Tesla');
    // })
    let storage = null;
    before(async ()=>{
        storage = await storageTest.deployed();
    })
    it('Should return the item', async()=>{
        //     const storage = await storageTest.deployed();
        await storage.setter("Top Gun Maverick");
        
        const storageResult = await storage.getter();
        assert(storageResult === 'Top Gun Maverick');
    })
    it('Should return Tesla', async()=>{
        // const storage = await storageTest.deployed();
        await storage.setter("Tesla");

        const storageResult = await storage.getter();
        assert(storageResult === 'Tesla');
    })

})