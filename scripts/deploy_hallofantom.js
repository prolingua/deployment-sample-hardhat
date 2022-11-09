async function main() {
    const HelloFantom = await ethers.getContractFactory("HelloFantom");
    const helloFantom = await HelloFantom.deploy()
    await helloFantom.deployed();
    console.log("HelloFantom deployed to: ", helloFantom.address);
}
main();