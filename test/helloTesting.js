const helloTesting = artifacts.require('HelloTesting');

//We will be using Mocha (JS testing framework) for testing which provides inbuilt testing functions i.e. describe() and contract().
//We will be using contract function this time.
contract("HelloTesting",()=>{

    it("Should return Hello Testing",async()=>{

        //creating instance of the smart contract with the help of which we can access the Smart contract easily since the instance points to the deployed Smart contract
        const _helloTesting = await helloTesting.deployed();
        const result = await _helloTesting.print(); //calling the print function from smart contract using the instance created above
        // console.log("This is our result:", result);

        //use assert to test for true or false
        assert(result === 'Hello Testing');
    });

    it("Should return 1", async()=>{

        const _helloTestingNum = await helloTesting.deployed();
        const resultNum = await _helloTestingNum.printNum();
        console.log(typeof(resultNum));
        // assert(resultNum === 1); //resultNum is a BigNumber object i.e {BigNumber : 1}. So it needs to be converted to number in the assert
        assert(resultNum.toNumber() === 1); //resultNum is a BigNumber object i.e {BigNumber : 1}. So it needs to be converted to number in the assert

    })

})
