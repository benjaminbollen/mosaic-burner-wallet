module.exports =[
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "stakeRequests",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "organization",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "stakerProxies",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "stakeRequestHashes",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "STAKEREQUEST_INTENT_TYPEHASH",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_organization",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "beneficiary",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "gasPrice",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "gasLimit",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "nonce",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "stakerProxy",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "gateway",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "stakeRequestHash",
        "type": "bytes32"
      }
    ],
    "name": "StakeRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "stakeRequestHash",
        "type": "bytes32"
      }
    ],
    "name": "StakeRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "stakeRequestHash",
        "type": "bytes32"
      }
    ],
    "name": "StakeRejected",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256"
      },
      {
        "name": "_beneficiary",
        "type": "address"
      },
      {
        "name": "_gasPrice",
        "type": "uint256"
      },
      {
        "name": "_gasLimit",
        "type": "uint256"
      },
      {
        "name": "_nonce",
        "type": "uint256"
      },
      {
        "name": "_gateway",
        "type": "address"
      }
    ],
    "name": "requestStake",
    "outputs": [
      {
        "name": "stakeRequestHash_",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256"
      },
      {
        "name": "_beneficiary",
        "type": "address"
      },
      {
        "name": "_gasPrice",
        "type": "uint256"
      },
      {
        "name": "_gasLimit",
        "type": "uint256"
      },
      {
        "name": "_nonce",
        "type": "uint256"
      },
      {
        "name": "_staker",
        "type": "address"
      },
      {
        "name": "_gateway",
        "type": "address"
      },
      {
        "name": "_hashLock",
        "type": "bytes32"
      }
    ],
    "name": "acceptStakeRequest",
    "outputs": [
      {
        "name": "messageHash_",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256"
      },
      {
        "name": "_beneficiary",
        "type": "address"
      },
      {
        "name": "_gasPrice",
        "type": "uint256"
      },
      {
        "name": "_gasLimit",
        "type": "uint256"
      },
      {
        "name": "_nonce",
        "type": "uint256"
      },
      {
        "name": "_gateway",
        "type": "address"
      }
    ],
    "name": "revokeStakeRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256"
      },
      {
        "name": "_beneficiary",
        "type": "address"
      },
      {
        "name": "_gasPrice",
        "type": "uint256"
      },
      {
        "name": "_gasLimit",
        "type": "uint256"
      },
      {
        "name": "_nonce",
        "type": "uint256"
      },
      {
        "name": "_staker",
        "type": "address"
      },
      {
        "name": "_gateway",
        "type": "address"
      }
    ],
    "name": "rejectStakeRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "destructStakerProxy",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
