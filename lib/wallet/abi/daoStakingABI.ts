const daoStaking = `
  {"_format": "hh-sol-artifact-1",
  "contractName": "DaoStaking",
  "sourceName": "contracts/DaoStaking.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IERC20",
          "name": "_token_",
          "type": "address"
        },
        {
          "internalType": "contract ArweavePS",
          "name": "_ps_",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_stakingBlocks_",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "forProposal",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "availableReward",
          "type": "uint256"
        }
      ],
      "name": "ClaimReward",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "stakeDate",
          "type": "uint256"
        }
      ],
      "name": "ExtendStakeTime",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "Penalize",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "availableReward",
          "type": "uint256"
        }
      ],
      "name": "RewardDeposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalStaked",
          "type": "uint256"
        }
      ],
      "name": "Stake",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalStaked",
          "type": "uint256"
        }
      ],
      "name": "Unstake",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "allStakers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "forProposal",
          "type": "uint256"
        }
      ],
      "name": "claimReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "depositRewards",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "forAddress",
          "type": "address"
        }
      ],
      "name": "extendStakeTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "hasFrontend",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "hasFees",
          "type": "bool"
        }
      ],
      "name": "getActualReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAvailableReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDetails",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address_",
          "type": "address"
        }
      ],
      "name": "getStakeDateFor",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address_",
          "type": "address"
        }
      ],
      "name": "getStaker",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isStaking",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "stakeDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stakeAmount",
              "type": "uint256"
            }
          ],
          "internalType": "struct Staker",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getStakingBlocks",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalStaked",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "isStaking",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "address_",
          "type": "address"
        }
      ],
      "name": "penalize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract CatalogDao",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "setCatalogDao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "to",
          "type": "uint256"
        }
      ],
      "name": "setStakingBlocks",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052600a805460ff191690553480156200001b57600080fd5b5060405162001cb438038062001cb48339810160408190526200003e91620000d7565b620000493362000087565b600180546001600160a01b039485166001600160a01b0319918216179091556000600455600380549390941692169190911790915560065562000137565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060608486031215620000ec578283fd5b8351620000f9816200011e565b60208501519093506200010c816200011e565b80925050604084015190509250925092565b6001600160a01b03811681146200013457600080fd5b50565b611b6d80620001476000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c80638da5cb5b116100cd578063c3214d6c11610081578063e0974ea511610066578063e0974ea5146102ed578063f2fde38b146102f5578063fbbf93a01461030857600080fd5b8063c3214d6c146102c7578063c695d249146102da57600080fd5b8063a23c44b1116100b2578063a23c44b11461026a578063aa3ecc46146102a1578063ae169a50146102b457600080fd5b80638da5cb5b146102325780639aa439bd1461025757600080fd5b8063715018a61161012457806378d97c941161010957806378d97c9414610204578063842ee2ad146102175780638bdf67f21461021f57600080fd5b8063715018a6146101f457806373cf575a146101fc57600080fd5b80632bf7093e116101555780632bf7093e1461019d5780633a4b66f1146101b05780636f49712b146101b857600080fd5b80630424e4d7146101715780630917e77614610186575b600080fd5b61018461017f366004611844565b61033a565b005b6004545b6040519081526020015b60405180910390f35b61018a6101ab36600461187c565b6103c8565b610184610435565b6101e46101c6366004611844565b6001600160a01b031660009081526007602052604090205460ff1690565b6040519015158152602001610194565b6101846106e6565b61018461074c565b610184610212366004611844565b6109a9565b60065461018a565b61018461022d3660046119a3565b610b40565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610194565b6101846102653660046119a3565b610c09565b61027d610278366004611844565b610c68565b60408051825115158152602080840151908201529181015190820152606001610194565b61018a6102af366004611844565b610cd5565b6101846102c23660046119a3565b610d22565b61023f6102d53660046119a3565b6111c9565b6101846102e8366004611844565b6111f3565b60055461018a565b610184610303366004611844565b6112ee565b600654604080516801a055690d9db800008152602081019290925269021e19e0c9bab240000090820152606001610194565b6000546001600160a01b031633146103995760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60008280156103d45750815b156103ea575069021e19e0c9bab240000061042f565b811561040a57610403681043561a882930000080611a6d565b905061042f565b821561042357610403681043561a882930000080611a6d565b50681043561a88293000005b92915050565b600a5460ff161561046e5760405162461bcd60e51b815260206004820152600360248201526239333560e81b6044820152606401610390565b600a805460ff191660011790553360009081526007602052604090205460ff16156104db5760405162461bcd60e51b815260206004820152600360248201527f39323200000000000000000000000000000000000000000000000000000000006044820152606401610390565b6001546040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526801a055690d9db80000916001600160a01b0316906370a082319060240160206040518083038186803b15801561054057600080fd5b505afa158015610554573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057891906119bb565b10156105c65760405162461bcd60e51b815260206004820152600360248201527f39323300000000000000000000000000000000000000000000000000000000006044820152606401610390565b6040805160608101825260018082524360208084019182526801a055690d9db8000084860181815233600081815260079094529683209551865460ff1916901515178655925185850155915160029094019390935560088054928301815583527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee3909101805473ffffffffffffffffffffffffffffffffffffffff19169093179092556004805490919061067b908490611a6d565b90915550506001546106a1906001600160a01b031633306801a055690d9db800006113d0565b60045460405190815233907febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a906020015b60405180910390a2600a805460ff19169055565b6000546001600160a01b031633146107405760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610390565b61074a6000611487565b565b600a5460ff16156107855760405162461bcd60e51b815260206004820152600360248201526239333560e81b6044820152606401610390565b600a805460ff191660011790553360009081526007602052604090205460ff166107d75760405162461bcd60e51b815260206004820152600360248201526239313960e81b6044820152606401610390565b6006543360009081526007602052604090206001015443916107f891611a6d565b106108455760405162461bcd60e51b815260206004820152600360248201527f39323400000000000000000000000000000000000000000000000000000000006044820152606401610390565b336000908152600760205260408120805460ff19168155600201546004805491929091610873908490611aa5565b909155505060035460405163746d649360e11b81523360048201526001600160a01b039091169063e8dac92690602401600060405180830381600087803b1580156108bd57600080fd5b505af11580156108d1573d6000803e3d6000fd5b50506002546040517f9e6371ba0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b039091169250639e6371ba9150602401600060405180830381600087803b15801561093357600080fd5b505af1158015610947573d6000803e3d6000fd5b50503360008181526007602052604090206002015460015461097494506001600160a01b031692506114e4565b60045460405190815233907f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd906020016106d2565b6002546001600160a01b031633146109e95760405162461bcd60e51b815260206004820152600360248201526239323560e81b6044820152606401610390565b6001600160a01b0381166000908152600760205260408120805460ff19168155600201546004805491929091610a20908490611aa5565b90915550506001600160a01b0381166000908152600760205260408120600201546005805491929091610a54908490611a6d565b90915550506001600160a01b0381811660008181526007602052604080822060020191909155600354905163746d649360e11b815260048101929092529091169063e8dac92690602401600060405180830381600087803b158015610ab857600080fd5b505af1158015610acc573d6000803e3d6000fd5b50506040516001600160a01b03841692507fcdb6c50fc95430ac4511195bb0a3cb943f34705415ec82960792a7545a6850bb9150600090a260045460405190815233907f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd906020015b60405180910390a250565b600a5460ff1615610b795760405162461bcd60e51b815260206004820152600360248201526239333560e81b6044820152606401610390565b600a805460ff1916600117905560058054829190600090610b9b908490611a6d565b9091555050600154610bb8906001600160a01b03163330846113d0565b60055460405133917fe8c20fb067b0fe61dc795dbcc68efb785770f98684ecff3f7fb72c9eee05b1df91610bf491858252602082015260400190565b60405180910390a250600a805460ff19169055565b6000546001600160a01b03163314610c635760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610390565b600655565b610c8e604051806060016040528060001515815260200160008152602001600081525090565b506001600160a01b03166000908152600760209081526040918290208251606081018452815460ff1615158152600182015492810192909252600201549181019190915290565b6001600160a01b03811660009081526007602052604081205460ff1615610d1557506001600160a01b031660009081526007602052604090206001015490565b506000919050565b919050565b600a5460ff1615610d5b5760405162461bcd60e51b815260206004820152600360248201526239333560e81b6044820152606401610390565b600a805460ff191660011790553360009081526007602052604090205460ff16610dad5760405162461bcd60e51b815260206004820152600360248201526239313960e81b6044820152606401610390565b6002546040517f548c0ef40000000000000000000000000000000000000000000000000000000081523360048201526000916001600160a01b03169063548c0ef49060240160206040518083038186803b158015610e0a57600080fd5b505afa158015610e1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4291906119d3565b905060008160ff1611610e975760405162461bcd60e51b815260206004820152600360248201527f39323900000000000000000000000000000000000000000000000000000000006044820152606401610390565b6002546040517f44443dea000000000000000000000000000000000000000000000000000000008152600481018490526000916001600160a01b0316906344443dea9060240160006040518083038186803b158015610ef557600080fd5b505afa158015610f09573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f3191908101906118b4565b905080610100015115610f865760405162461bcd60e51b815260206004820152600360248201527f39353300000000000000000000000000000000000000000000000000000000006044820152606401610390565b6000610f9a82608001518360a001516103c8565b90508060055411610fed5760405162461bcd60e51b815260206004820152600360248201527f39323700000000000000000000000000000000000000000000000000000000006044820152606401610390565b60408201516001600160a01b031633146110495760405162461bcd60e51b815260206004820152600360248201527f39333000000000000000000000000000000000000000000000000000000000006044820152606401610390565b6009826020015160405161105d91906119f4565b9081526040519081900360200190205460ff16156110bd5760405162461bcd60e51b815260206004820152600360248201527f39333100000000000000000000000000000000000000000000000000000000006044820152606401610390565b6001600983602001516040516110d391906119f4565b908152602001604051809103902060006101000a81548160ff021916908315150217905550806005600082825461110a9190611aa5565b909155506000905061111d600283611a85565b905080600460008282546111319190611a6d565b90915550503360009081526007602052604081206002018054839290611158908490611a6d565b9091555050600154611174906001600160a01b031633836114e4565b60055460405133917fe74e5c9d4ac1fc33412485f18c159a0a391efe287ab3fd271123f30e6bacf4e3916111b091898252602082015260400190565b60405180910390a25050600a805460ff19169055505050565b600881815481106111d957600080fd5b6000918252602090912001546001600160a01b0316905081565b6002546001600160a01b031633146112335760405162461bcd60e51b815260206004820152600360248201526239323560e81b6044820152606401610390565b6001600160a01b03811660009081526007602052604090205460ff1661129b5760405162461bcd60e51b815260206004820152600360248201527f39323600000000000000000000000000000000000000000000000000000000006044820152606401610390565b6001600160a01b0381166000818152600760209081526040918290204360018201556002015491519182527f0453135ccbb00b3feb974a07d2ac5e743320d0c3888792298377c48d69bf1d0c9101610b35565b6000546001600160a01b031633146113485760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610390565b6001600160a01b0381166113c45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610390565b6113cd81611487565b50565b6040516001600160a01b03808516602483015283166044820152606481018290526114819085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611532565b50505050565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b03831660248201526044810182905261152d9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161141d565b505050565b6000611587826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116179092919063ffffffff16565b80519091501561152d57808060200190518101906115a59190611860565b61152d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610390565b60606116268484600085611630565b90505b9392505050565b6060824710156116a85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610390565b843b6116f65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610390565b600080866001600160a01b0316858760405161171291906119f4565b60006040518083038185875af1925050503d806000811461174f576040519150601f19603f3d011682016040523d82523d6000602084013e611754565b606091505b509150915061176482828661176f565b979650505050505050565b6060831561177e575081611629565b82511561178e5782518084602001fd5b8160405162461bcd60e51b81526004016103909190611a10565b8051610d1d81611b14565b8051610d1d81611b29565b600082601f8301126117ce578081fd5b815167ffffffffffffffff808211156117e9576117e9611afe565b604051601f8301601f19908116603f0116810190828211818310171561181157611811611afe565b81604052838152866020858801011115611829578485fd5b61183a846020830160208901611abc565b9695505050505050565b600060208284031215611855578081fd5b813561162981611b14565b600060208284031215611871578081fd5b815161162981611b29565b6000806040838503121561188e578081fd5b823561189981611b29565b915060208301356118a981611b29565b809150509250929050565b6000602082840312156118c5578081fd5b815167ffffffffffffffff808211156118dc578283fd5b9083019061014082860312156118f0578283fd5b6118f8611a43565b8251815260208301518281111561190d578485fd5b611919878286016117be565b60208301525061192b604084016117a8565b604082015261193c606084016117b3565b606082015261194d608084016117b3565b608082015261195e60a084016117b3565b60a082015260c083015160c082015260e083015160e082015261010091506119878284016117b3565b9181019190915261012091820151918101919091529392505050565b6000602082840312156119b4578081fd5b5035919050565b6000602082840312156119cc578081fd5b5051919050565b6000602082840312156119e4578081fd5b815160ff81168114611629578182fd5b60008251611a06818460208701611abc565b9190910192915050565b6020815260008251806020840152611a2f816040850160208701611abc565b601f01601f19169190910160400192915050565b604051610140810167ffffffffffffffff81118282101715611a6757611a67611afe565b60405290565b60008219821115611a8057611a80611ae8565b500190565b600082611aa057634e487b7160e01b81526012600452602481fd5b500490565b600082821015611ab757611ab7611ae8565b500390565b60005b83811015611ad7578181015183820152602001611abf565b838111156114815750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146113cd57600080fd5b80151581146113cd57600080fdfea2646970667358221220bca031e2df8fbb468d3c5298d9550e3dc1476935a8743114fd503421e2059da064736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061016c5760003560e01c80638da5cb5b116100cd578063c3214d6c11610081578063e0974ea511610066578063e0974ea5146102ed578063f2fde38b146102f5578063fbbf93a01461030857600080fd5b8063c3214d6c146102c7578063c695d249146102da57600080fd5b8063a23c44b1116100b2578063a23c44b11461026a578063aa3ecc46146102a1578063ae169a50146102b457600080fd5b80638da5cb5b146102325780639aa439bd1461025757600080fd5b8063715018a61161012457806378d97c941161010957806378d97c9414610204578063842ee2ad146102175780638bdf67f21461021f57600080fd5b8063715018a6146101f457806373cf575a146101fc57600080fd5b80632bf7093e116101555780632bf7093e1461019d5780633a4b66f1146101b05780636f49712b146101b857600080fd5b80630424e4d7146101715780630917e77614610186575b600080fd5b61018461017f366004611844565b61033a565b005b6004545b6040519081526020015b60405180910390f35b61018a6101ab36600461187c565b6103c8565b610184610435565b6101e46101c6366004611844565b6001600160a01b031660009081526007602052604090205460ff1690565b6040519015158152602001610194565b6101846106e6565b61018461074c565b610184610212366004611844565b6109a9565b60065461018a565b61018461022d3660046119a3565b610b40565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610194565b6101846102653660046119a3565b610c09565b61027d610278366004611844565b610c68565b60408051825115158152602080840151908201529181015190820152606001610194565b61018a6102af366004611844565b610cd5565b6101846102c23660046119a3565b610d22565b61023f6102d53660046119a3565b6111c9565b6101846102e8366004611844565b6111f3565b60055461018a565b610184610303366004611844565b6112ee565b600654604080516801a055690d9db800008152602081019290925269021e19e0c9bab240000090820152606001610194565b6000546001600160a01b031633146103995760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60008280156103d45750815b156103ea575069021e19e0c9bab240000061042f565b811561040a57610403681043561a882930000080611a6d565b905061042f565b821561042357610403681043561a882930000080611a6d565b50681043561a88293000005b92915050565b600a5460ff161561046e5760405162461bcd60e51b815260206004820152600360248201526239333560e81b6044820152606401610390565b600a805460ff191660011790553360009081526007602052604090205460ff16156104db5760405162461bcd60e51b815260206004820152600360248201527f39323200000000000000000000000000000000000000000000000000000000006044820152606401610390565b6001546040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526801a055690d9db80000916001600160a01b0316906370a082319060240160206040518083038186803b15801561054057600080fd5b505afa158015610554573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057891906119bb565b10156105c65760405162461bcd60e51b815260206004820152600360248201527f39323300000000000000000000000000000000000000000000000000000000006044820152606401610390565b6040805160608101825260018082524360208084019182526801a055690d9db8000084860181815233600081815260079094529683209551865460ff1916901515178655925185850155915160029094019390935560088054928301815583527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee3909101805473ffffffffffffffffffffffffffffffffffffffff19169093179092556004805490919061067b908490611a6d565b90915550506001546106a1906001600160a01b031633306801a055690d9db800006113d0565b60045460405190815233907febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a906020015b60405180910390a2600a805460ff19169055565b6000546001600160a01b031633146107405760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610390565b61074a6000611487565b565b600a5460ff16156107855760405162461bcd60e51b815260206004820152600360248201526239333560e81b6044820152606401610390565b600a805460ff191660011790553360009081526007602052604090205460ff166107d75760405162461bcd60e51b815260206004820152600360248201526239313960e81b6044820152606401610390565b6006543360009081526007602052604090206001015443916107f891611a6d565b106108455760405162461bcd60e51b815260206004820152600360248201527f39323400000000000000000000000000000000000000000000000000000000006044820152606401610390565b336000908152600760205260408120805460ff19168155600201546004805491929091610873908490611aa5565b909155505060035460405163746d649360e11b81523360048201526001600160a01b039091169063e8dac92690602401600060405180830381600087803b1580156108bd57600080fd5b505af11580156108d1573d6000803e3d6000fd5b50506002546040517f9e6371ba0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b039091169250639e6371ba9150602401600060405180830381600087803b15801561093357600080fd5b505af1158015610947573d6000803e3d6000fd5b50503360008181526007602052604090206002015460015461097494506001600160a01b031692506114e4565b60045460405190815233907f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd906020016106d2565b6002546001600160a01b031633146109e95760405162461bcd60e51b815260206004820152600360248201526239323560e81b6044820152606401610390565b6001600160a01b0381166000908152600760205260408120805460ff19168155600201546004805491929091610a20908490611aa5565b90915550506001600160a01b0381166000908152600760205260408120600201546005805491929091610a54908490611a6d565b90915550506001600160a01b0381811660008181526007602052604080822060020191909155600354905163746d649360e11b815260048101929092529091169063e8dac92690602401600060405180830381600087803b158015610ab857600080fd5b505af1158015610acc573d6000803e3d6000fd5b50506040516001600160a01b03841692507fcdb6c50fc95430ac4511195bb0a3cb943f34705415ec82960792a7545a6850bb9150600090a260045460405190815233907f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd906020015b60405180910390a250565b600a5460ff1615610b795760405162461bcd60e51b815260206004820152600360248201526239333560e81b6044820152606401610390565b600a805460ff1916600117905560058054829190600090610b9b908490611a6d565b9091555050600154610bb8906001600160a01b03163330846113d0565b60055460405133917fe8c20fb067b0fe61dc795dbcc68efb785770f98684ecff3f7fb72c9eee05b1df91610bf491858252602082015260400190565b60405180910390a250600a805460ff19169055565b6000546001600160a01b03163314610c635760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610390565b600655565b610c8e604051806060016040528060001515815260200160008152602001600081525090565b506001600160a01b03166000908152600760209081526040918290208251606081018452815460ff1615158152600182015492810192909252600201549181019190915290565b6001600160a01b03811660009081526007602052604081205460ff1615610d1557506001600160a01b031660009081526007602052604090206001015490565b506000919050565b919050565b600a5460ff1615610d5b5760405162461bcd60e51b815260206004820152600360248201526239333560e81b6044820152606401610390565b600a805460ff191660011790553360009081526007602052604090205460ff16610dad5760405162461bcd60e51b815260206004820152600360248201526239313960e81b6044820152606401610390565b6002546040517f548c0ef40000000000000000000000000000000000000000000000000000000081523360048201526000916001600160a01b03169063548c0ef49060240160206040518083038186803b158015610e0a57600080fd5b505afa158015610e1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4291906119d3565b905060008160ff1611610e975760405162461bcd60e51b815260206004820152600360248201527f39323900000000000000000000000000000000000000000000000000000000006044820152606401610390565b6002546040517f44443dea000000000000000000000000000000000000000000000000000000008152600481018490526000916001600160a01b0316906344443dea9060240160006040518083038186803b158015610ef557600080fd5b505afa158015610f09573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f3191908101906118b4565b905080610100015115610f865760405162461bcd60e51b815260206004820152600360248201527f39353300000000000000000000000000000000000000000000000000000000006044820152606401610390565b6000610f9a82608001518360a001516103c8565b90508060055411610fed5760405162461bcd60e51b815260206004820152600360248201527f39323700000000000000000000000000000000000000000000000000000000006044820152606401610390565b60408201516001600160a01b031633146110495760405162461bcd60e51b815260206004820152600360248201527f39333000000000000000000000000000000000000000000000000000000000006044820152606401610390565b6009826020015160405161105d91906119f4565b9081526040519081900360200190205460ff16156110bd5760405162461bcd60e51b815260206004820152600360248201527f39333100000000000000000000000000000000000000000000000000000000006044820152606401610390565b6001600983602001516040516110d391906119f4565b908152602001604051809103902060006101000a81548160ff021916908315150217905550806005600082825461110a9190611aa5565b909155506000905061111d600283611a85565b905080600460008282546111319190611a6d565b90915550503360009081526007602052604081206002018054839290611158908490611a6d565b9091555050600154611174906001600160a01b031633836114e4565b60055460405133917fe74e5c9d4ac1fc33412485f18c159a0a391efe287ab3fd271123f30e6bacf4e3916111b091898252602082015260400190565b60405180910390a25050600a805460ff19169055505050565b600881815481106111d957600080fd5b6000918252602090912001546001600160a01b0316905081565b6002546001600160a01b031633146112335760405162461bcd60e51b815260206004820152600360248201526239323560e81b6044820152606401610390565b6001600160a01b03811660009081526007602052604090205460ff1661129b5760405162461bcd60e51b815260206004820152600360248201527f39323600000000000000000000000000000000000000000000000000000000006044820152606401610390565b6001600160a01b0381166000818152600760209081526040918290204360018201556002015491519182527f0453135ccbb00b3feb974a07d2ac5e743320d0c3888792298377c48d69bf1d0c9101610b35565b6000546001600160a01b031633146113485760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610390565b6001600160a01b0381166113c45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610390565b6113cd81611487565b50565b6040516001600160a01b03808516602483015283166044820152606481018290526114819085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611532565b50505050565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b03831660248201526044810182905261152d9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161141d565b505050565b6000611587826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116179092919063ffffffff16565b80519091501561152d57808060200190518101906115a59190611860565b61152d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610390565b60606116268484600085611630565b90505b9392505050565b6060824710156116a85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610390565b843b6116f65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610390565b600080866001600160a01b0316858760405161171291906119f4565b60006040518083038185875af1925050503d806000811461174f576040519150601f19603f3d011682016040523d82523d6000602084013e611754565b606091505b509150915061176482828661176f565b979650505050505050565b6060831561177e575081611629565b82511561178e5782518084602001fd5b8160405162461bcd60e51b81526004016103909190611a10565b8051610d1d81611b14565b8051610d1d81611b29565b600082601f8301126117ce578081fd5b815167ffffffffffffffff808211156117e9576117e9611afe565b604051601f8301601f19908116603f0116810190828211818310171561181157611811611afe565b81604052838152866020858801011115611829578485fd5b61183a846020830160208901611abc565b9695505050505050565b600060208284031215611855578081fd5b813561162981611b14565b600060208284031215611871578081fd5b815161162981611b29565b6000806040838503121561188e578081fd5b823561189981611b29565b915060208301356118a981611b29565b809150509250929050565b6000602082840312156118c5578081fd5b815167ffffffffffffffff808211156118dc578283fd5b9083019061014082860312156118f0578283fd5b6118f8611a43565b8251815260208301518281111561190d578485fd5b611919878286016117be565b60208301525061192b604084016117a8565b604082015261193c606084016117b3565b606082015261194d608084016117b3565b608082015261195e60a084016117b3565b60a082015260c083015160c082015260e083015160e082015261010091506119878284016117b3565b9181019190915261012091820151918101919091529392505050565b6000602082840312156119b4578081fd5b5035919050565b6000602082840312156119cc578081fd5b5051919050565b6000602082840312156119e4578081fd5b815160ff81168114611629578182fd5b60008251611a06818460208701611abc565b9190910192915050565b6020815260008251806020840152611a2f816040850160208701611abc565b601f01601f19169190910160400192915050565b604051610140810167ffffffffffffffff81118282101715611a6757611a67611afe565b60405290565b60008219821115611a8057611a80611ae8565b500190565b600082611aa057634e487b7160e01b81526012600452602481fd5b500490565b600082821015611ab757611ab7611ae8565b500390565b60005b83811015611ad7578181015183820152602001611abf565b838111156114815750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146113cd57600080fd5b80151581146113cd57600080fdfea2646970667358221220bca031e2df8fbb468d3c5298d9550e3dc1476935a8743114fd503421e2059da064736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
`;

export const getDaoStakingABI = () => {
  return JSON.parse(daoStaking).abi;
};

export const getDaoStakingByteCode = () => {
  return JSON.parse(daoStaking).bytecode;
};
