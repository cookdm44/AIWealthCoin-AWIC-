document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        document.getElementById('walletAddress').innerText = "Connected: " + accounts[0];
    } else {
        alert("Please install MetaMask to connect your wallet.");
    }
});
