const catalogDAO = `{
  "_format": "hh-sol-artifact-1",
  "contractName": "CatalogDao",
  "sourceName": "contracts/CatalogDao.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pollPeriod",
          "type": "uint256"
        },
        {
          "internalType": "contract DaoStaking",
          "name": "_daoStaking",
          "type": "address"
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
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "CloseRemovalProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "CloseSmartContractProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rankIndex",
          "type": "uint256"
        }
      ],
      "name": "ClosingRankVote",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "participant",
          "type": "address"
        }
      ],
      "name": "NewParticipant",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "repository",
          "type": "string"
        }
      ],
      "name": "NewRankProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "discussionUrl",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "accetedIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "malicious",
          "type": "bool"
        }
      ],
      "name": "NewRemovalProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "arweaveTxId",
          "type": "string"
        }
      ],
      "name": "NewSmartContractProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "url",
          "type": "string"
        }
      ],
      "name": "NewTerms",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rankIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "accepted",
          "type": "bool"
        }
      ],
      "name": "RankVote",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "accepted",
          "type": "bool"
        }
      ],
      "name": "VoteOnNewSmartContract",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "accepted",
          "type": "bool"
        }
      ],
      "name": "VoteOnRemoval",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "name": "accept",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "acceptedTerms",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "ban",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "rankIndex",
          "type": "uint256"
        }
      ],
      "name": "closeRankProposal",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "removalIndex",
          "type": "uint256"
        }
      ],
      "name": "closeRemovalProposal",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "sCIndex",
          "type": "uint256"
        }
      ],
      "name": "closeSmartContractProposal",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "sCIndex",
          "type": "uint256"
        }
      ],
      "name": "closeSuspiciousProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "sCIndex",
          "type": "uint256"
        }
      ],
      "name": "getAcceptedSCProposalsByIndex",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "created",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAcceptedSmartContractIndex",
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
          "internalType": "uint256",
          "name": "first",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "second",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "third",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fourth",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fifth",
          "type": "uint256"
        }
      ],
      "name": "getAcceptedSmartContractProposalsPaginated",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "created",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "created",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "created",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "created",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "created",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllAccepted",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "created",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllRemoved",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "created",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMyProposals",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256[]",
              "name": "rank",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "smartContract",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "acceptedSCProposals",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "removedFromMe",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "removal",
              "type": "uint256[]"
            }
          ],
          "internalType": "struct MyProposals",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "first",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "second",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "third",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fourth",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fifth",
          "type": "uint256"
        }
      ],
      "name": "getMyRankProposalsPaginated",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "repository",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RankProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "repository",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RankProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "repository",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RankProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "repository",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RankProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "repository",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RankProposal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "first",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "second",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "third",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fourth",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fifth",
          "type": "uint256"
        }
      ],
      "name": "getMySmartContractProposalsPaginated",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "suspicious",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "penalized",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct SmartContractProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "suspicious",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "penalized",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct SmartContractProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "suspicious",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "penalized",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct SmartContractProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "suspicious",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "penalized",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct SmartContractProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "suspicious",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "penalized",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct SmartContractProposal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPollPeriod",
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
      "name": "getRank",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRankProposalIndex",
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
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRankProposalsByIndex",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "repository",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RankProposal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRemovalProposalByIndex",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "discussionUrl",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "malicious",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "acceptedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RemovalProposal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRemovalProposalIndex",
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
          "internalType": "uint256",
          "name": "first",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "second",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "third",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fourth",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fifth",
          "type": "uint256"
        }
      ],
      "name": "getRemovalProposalsPaginated",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "discussionUrl",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "malicious",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "acceptedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RemovalProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "discussionUrl",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "malicious",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "acceptedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RemovalProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "discussionUrl",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "malicious",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "acceptedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RemovalProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "discussionUrl",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "malicious",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "acceptedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RemovalProposal",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "discussionUrl",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "malicious",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "acceptedIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            }
          ],
          "internalType": "struct RemovalProposal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getSmartContractProposalIndex",
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
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getSmartContractProposalsByIndex",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "arweaveTxId",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "approvals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rejections",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "suspicious",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "penalized",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFrontend",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "hasFees",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isUpdate",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "updateOf",
              "type": "uint256"
            }
          ],
          "internalType": "struct SmartContractProposal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTerms",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "issuer",
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
          "internalType": "string",
          "name": "_discussionUrl",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_acceptedSCIndex",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "malicious",
          "type": "bool"
        }
      ],
      "name": "proposeContractRemoval",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_repository",
          "type": "string"
        }
      ],
      "name": "proposeNewRank",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_arweaveTxId",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "_hasFrontEnd",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_hasFees",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isUpdate",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "updateOf",
          "type": "uint256"
        }
      ],
      "name": "proposeNewSmartContract",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
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
      "name": "retire",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pollPeriod",
          "type": "uint256"
        }
      ],
      "name": "setPollPeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "url",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "name": "setTerms",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "rankIndex",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "accepted",
          "type": "bool"
        }
      ],
      "name": "voteOnNewRank",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "sCIndex",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "accepted",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "suspicious",
          "type": "bool"
        }
      ],
      "name": "voteOnNewSmartContract",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "removalIndex",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "accepted",
          "type": "bool"
        }
      ],
      "name": "voteOnRemoval",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "rankIndex",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_voter",
          "type": "address"
        }
      ],
      "name": "votedAlreadyOnRank",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "removalIndex",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_voter",
          "type": "address"
        }
      ],
      "name": "votedAlreadyOnRemoval",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "sCIndex",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_voter",
          "type": "address"
        }
      ],
      "name": "votedAlreadyOnSmartContract",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162004dcd38038062004dcd833981016040819052620000349162000092565b600080546001600160a01b031990811633908117835580835260056020526040909220805460ff1916600a179055600493909355601680546001600160a01b03939093169284169290921790915560158054909216179055620000cf565b60008060408385031215620000a5578182fd5b825160208401519092506001600160a01b0381168114620000c4578182fd5b809150509250929050565b614cee80620000df6000396000f3fe608060405234801561001057600080fd5b50600436106102925760003560e01c806371110f3911610160578063a5513a18116100d8578063d79950761161008c578063edbc975911610071578063edbc975914610623578063fdedbe951461062b578063fef7e50b1461063e57600080fd5b8063d7995076146105fb578063ea614f541461061b57600080fd5b8063c42bca85116100bd578063c42bca85146105a4578063c9ddacbc146105b7578063d4865bed146105d757600080fd5b8063a5513a181461057e578063a972d10b1461059157600080fd5b806380e11be91161012f57806394b535ec1161011457806394b535ec1461054557806397c3ccd8146105585780639e6371ba1461056b57600080fd5b806380e11be91461051f578063899e456c1461053257600080fd5b806371110f39146104d857806371414ed3146104e05780637331210c146104f357806374700218146104fb57600080fd5b80634112fdd01161020e57806356cf5358116101c25780635f90dec4116101a75780635f90dec41461048e5780636127d22d146104b257806364894bb6146104c557600080fd5b806356cf5358146104735780635e06f50f1461047b57600080fd5b806344443dea116101f357806344443dea146104025780634d8b10a914610422578063548c0ef41461043557600080fd5b80634112fdd0146103da5780634173b417146103ed57600080fd5b80631d143848116102655780632b60c8bb1161024a5780632b60c8bb146103905780632f370ba3146103b057806336ffa905146103c557600080fd5b80631d143848146103525780631d8c89711461037d57600080fd5b806302a08328146102975780630e0d7f07146102ae5780630fba4ca11461032a5780631aecf6a01461033f575b600080fd5b6004545b6040519081526020015b60405180910390f35b61031a6102bc3660046142f8565b6002546040516bffffffffffffffffffffffff19606084901b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000908152600390925290205460ff169392505050565b60405190151581526020016102a5565b61033d61033836600461432e565b610662565b005b61031a61034d366004614541565b610779565b600054610365906001600160a01b031681565b6040516001600160a01b0390911681526020016102a5565b61031a61038b3660046143f1565b610958565b6103a361039e3660046144b7565b610a8a565b6040516102a59190614af7565b6103b8610bbf565b6040516102a591906148b0565b6103cd610d30565b6040516102a59190614a65565b61033d6103e83660046144b7565b610f31565b6103f5610f76565b6040516102a59190614951565b6104156104103660046144b7565b61100b565b6040516102a59190614964565b61031a6104303660046144e7565b611184565b6104616104433660046142f8565b6001600160a01b031660009081526005602052604090205460ff1690565b60405160ff90911681526020016102a5565b60075461029b565b61031a6104893660046144e7565b611240565b6104a161049c366004614582565b6112a9565b6040516102a5959493929190614b0a565b61031a6104c03660046144b7565b6118b6565b61031a6104d33660046144e7565b6119f2565b600b5461029b565b61029b6104ee36600461445a565b611a5b565b60095461029b565b61050e610509366004614582565b611c3c565b6040516102a5959493929190614b7e565b61031a61052d3660046144b7565b612331565b61029b61054036600461432e565b61242e565b61029b61055336600461436e565b612605565b61033d6105663660046142f8565b6127e8565b61033d6105793660046142f8565b6128c1565b61031a61058c3660046144b7565b61293f565b61031a61059f366004614512565b612a29565b61031a6105b2366004614512565b612bf8565b6105ca6105c53660046144b7565b612d7b565b6040516102a59190614bdf565b6105ea6105e5366004614582565b612f25565b6040516102a5959493929190614977565b61060e6106093660046144b7565b613641565b6040516102a59190614b6b565b6103b86137a6565b600f5461029b565b61033d6106393660046144b7565b61390e565b61065161064c366004614582565b6139a6565b6040516102a5959493929190614bf2565b60025460405161067890849084906020016148a0565b60405160208183030381529060405280519060200120146106e05760405162461bcd60e51b815260206004820152600360248201527f393032000000000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6002546040516bffffffffffffffffffffffff193360601b166020820152603481019190915260009060540160408051808303601f190181528282528051602091820120818401835260018452600081815260039092528282209351845460ff191690151517909355905191925033917f79229b212fa3ea547fb5e5b66090cf250d442b12a51854a030f3b796d528134e9190a2505050565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166108045760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b15801561084957600080fd5b505af115801561085d573d6000803e3d6000fd5b50506040805188815287151560208201523393507f1a53dbc4afb4355dae75da1c738d7f9da8d47895ca9e52298a2f13edef1eeb9a92500160405180910390a26040517f42877fb7000000000000000000000000000000000000000000000000000000008152600480820152602481018690528415156044820152831515606482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906342877fb79060840160206040518083038186803b15801561091757600080fd5b505af415801561092b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094f9190614312565b95945050505050565b600080546001600160a01b031633146109b35760405162461bcd60e51b815260206004820152600360248201527f393031000000000000000000000000000000000000000000000000000000000060448201526064016106d7565b6040805160606020601f88018190040282018101835291810186815290918291908890889081908501838280828437600092019190915250505090825250604051602091820191610a089187918791016148a0565b60408051601f19818403018152919052805160209182012090915281518051600192610a389284929101906141fc565b50602082015181600101559050507f9c1e1a17a78053ad78b3801837ad5e515d429987252f2e1371b7b50fa8ff8bec8585604051610a77929190614911565b60405180910390a1506001949350505050565b610ace6040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b60008281526008602052604090819020815160c08101909252805482908290610af690614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2290614c53565b8015610b6f5780601f10610b4457610100808354040283529160200191610b6f565b820191906000526020600020905b815481529060010190602001808311610b5257829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040820152600382015460608201526004820154608082015260059091015460ff16151560a09091015292915050565b60606004600f01805480602002602001604051908101604052809291908181526020016000905b82821015610d275783829060005260206000209060050201604051806101200160405290816000820154815260200160018201548152602001600282018054610c2e90614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5a90614c53565b8015610ca75780601f10610c7c57610100808354040283529160200191610ca7565b820191906000526020600020905b815481529060010190602001808311610c8a57829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b8304811615156040850152600160a81b8304811615156060850152600160b01b8304811615156080850152600160b81b909204909116151560a083015260049092015460c0909101529082526001929092019101610be6565b50505050905090565b610d626040518060a0016040528060608152602001606081526020016060815260200160608152602001606081525090565b336000908152600d60209081526040918290208251815460c09381028201840190945260a081018481529093919284928491840182828015610dc357602002820191906000526020600020905b815481526020019060010190808311610daf575b5050505050815260200160018201805480602002602001604051908101604052809291908181526020018280548015610e1b57602002820191906000526020600020905b815481526020019060010190808311610e07575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610e7357602002820191906000526020600020905b815481526020019060010190808311610e5f575b5050505050815260200160038201805480602002602001604051908101604052809291908181526020018280548015610ecb57602002820191906000526020600020905b815481526020019060010190808311610eb7575b5050505050815260200160048201805480602002602001604051908101604052809291908181526020018280548015610f2357602002820191906000526020600020905b815481526020019060010190808311610f0f575b505050505081525050905090565b6015546001600160a01b03163314610f715760405162461bcd60e51b815260206004820152600360248201526239333760e81b60448201526064016106d7565b600455565b606060016000018054610f8890614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb490614c53565b80156110015780601f10610fd657610100808354040283529160200191611001565b820191906000526020600020905b815481529060010190602001808311610fe457829003601f168201915b5050505050905090565b604080516101208101825260008082526020820181905260609282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526004600201600083815260200190815260200160002060405180610120016040529081600082015481526020016001820154815260200160028201805461109b90614c53565b80601f01602080910402602001604051908101604052809291908181526020018280546110c790614c53565b80156111145780601f106110e957610100808354040283529160200191611114565b820191906000526020600020905b8154815290600101906020018083116110f757829003601f168201915b505050918352505060038201546001600160a01b038116602083015260ff600160a01b8204811615156040840152600160a81b8204811615156060840152600160b01b8204811615156080840152600160b81b90910416151560a082015260049091015460c09091015292915050565b6040517ffd3e4768000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063fd3e4768906064015b60206040518083038186803b15801561120157600080fd5b505af4158015611215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112399190614312565b9392505050565b6040517f2ca650b2000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__90632ca650b2906064016111e9565b6112ed6040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6113316040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6113756040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6113b96040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6113fd6040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b60008a8152600860205260408082208b83528183208b84528284208b85528385208b865294849020845160c08101909552835493959294919390919086908290829061144890614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461147490614c53565b80156114c15780601f10611496576101008083540402835291602001916114c1565b820191906000526020600020905b8154815290600101906020018083116114a457829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c0810190915285549196509085908290829061152d90614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461155990614c53565b80156115a65780601f1061157b576101008083540402835291602001916115a6565b820191906000526020600020905b81548152906001019060200180831161158957829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c0810190915284549195509084908290829061161290614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461163e90614c53565b801561168b5780601f106116605761010080835404028352916020019161168b565b820191906000526020600020905b81548152906001019060200180831161166e57829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c081019091528354919450908390829082906116f790614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461172390614c53565b80156117705780601f1061174557610100808354040283529160200191611770565b820191906000526020600020905b81548152906001019060200180831161175357829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c081019091528254919350908290829082906117dc90614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461180890614c53565b80156118555780601f1061182a57610100808354040283529160200191611855565b820191906000526020600020905b81548152906001019060200180831161183857829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040820152600382015460608201526004820154608082015260059091015460ff16151560a090910152949f939e50919c509a509198509650505050505050565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b1580156118fc57600080fd5b505af1158015611910573d6000803e3d6000fd5b50506040518481523392507f111d8408ae92d0b78f4d97697012bcdee255bb0e7615f3a011a759d4f80abfed915060200160405180910390a26040517f14e4f3310000000000000000000000000000000000000000000000000000000081526004808201526024810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906314e4f331906044015b60206040518083038186803b1580156119b457600080fd5b505af41580156119c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ec9190614312565b92915050565b6040517fbd1d2c31000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063bd1d2c31906064016111e9565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16611ae65760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015611b2b57600080fd5b505af1158015611b3f573d6000803e3d6000fd5b50505050336001600160a01b03167f67696076dd0093e34ea851b9556ffdb425ef250da860120eab4183b76e7cb2b087878787604051611b829493929190614925565b60405180910390a26040517fdd54839e00000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063dd54839e90611be2906004908a908a908a908a908501614a32565b60206040518083038186803b158015611bfa57600080fd5b505af4158015611c0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3291906144cf565b9695505050505050565b611c916040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611ce66040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611d3b6040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611d906040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611de56040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b60008a8152600e60205260408082208b83528183208b84528284208b85528385208b865294849020845161010081019095528354939592949193909190869082908290611e3190614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054611e5d90614c53565b8015611eaa5780601f10611e7f57610100808354040283529160200191611eaa565b820191906000526020600020905b815481529060010190602001808311611e8d57829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e09091015280516101008101909152855491965090859082908290611f3390614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054611f5f90614c53565b8015611fac5780601f10611f8157610100808354040283529160200191611fac565b820191906000526020600020905b815481529060010190602001808311611f8f57829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e0909101528051610100810190915284549195509084908290829061203590614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461206190614c53565b80156120ae5780601f10612083576101008083540402835291602001916120ae565b820191906000526020600020905b81548152906001019060200180831161209157829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e0909101528051610100810190915283549194509083908290829061213790614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461216390614c53565b80156121b05780601f10612185576101008083540402835291602001916121b0565b820191906000526020600020905b81548152906001019060200180831161219357829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e0909101528051610100810190915282549193509082908290829061223990614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461226590614c53565b80156122b25780601f10612287576101008083540402835291602001916122b2565b820191906000526020600020905b81548152906001019060200180831161229557829003601f168201915b505050918352505060018201546001600160a01b0381166020830152600160a01b900460ff908116151560408301526002830154606083015260038301546080830152600483015460a0830152600583015460c0830152600690920154909116151560e090910152949f939e50919c509a509198509650505050505050565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b15801561237757600080fd5b505af115801561238b573d6000803e3d6000fd5b50506040518481523392507fd1b02b10475a07f1767fa17ac24c11cb86236e52df9fbc8e2cd2662f470be9ac915060200160405180910390a26016546040517fca2f2aa00000000000000000000000000000000000000000000000000000000081526004808201526001600160a01b0390911660248201526044810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063ca2f2aa09060640161199c565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166124b95760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b1580156124fe57600080fd5b505af1158015612512573d6000803e3d6000fd5b50505050336001600160a01b03167fe249461360e6eb5f99fc32e18970ea7e714fe4a6ae1bb2b802109ce1897551a38585604051612551929190614911565b60405180910390a26040517ffe59ad1300000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063fe59ad13906125ad906004908890889083016149d8565b60206040518083038186803b1580156125c557600080fd5b505af41580156125d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125fd91906144cf565b949350505050565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166126905760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b1580156126d557600080fd5b505af11580156126e9573d6000803e3d6000fd5b50505050336001600160a01b03167f282a70c1093742e40fc04b5fcdaf156b8f7dc0f4daccc210e2826ab21ef52e2f8989604051612728929190614911565b60405180910390a26040517f67de66a200000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906367de66a29061278c906004908c908c908c908c908c908c9087016149f2565b60206040518083038186803b1580156127a457600080fd5b505af41580156127b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127dc91906144cf565b98975050505050505050565b6015546001600160a01b031633146128285760405162461bcd60e51b815260206004820152600360248201526239333760e81b60448201526064016106d7565b6016546040517f78d97c940000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152909116906378d97c9490602401600060405180830381600087803b15801561288857600080fd5b505af115801561289c573d6000803e3d6000fd5b505050506001600160a01b03166000908152600560205260409020805460ff19169055565b6016546001600160a01b0316331461291b5760405162461bcd60e51b815260206004820152600360248201527f393534000000000000000000000000000000000000000000000000000000000060448201526064016106d7565b6001600160a01b03166000908152600560205260409020805460ff19166001179055565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b15801561298557600080fd5b505af1158015612999573d6000803e3d6000fd5b50506040518481523392507f537cd2e3949e391193079a5700552e511e26e8feac335a6cdc444049ab35a90f915060200160405180910390a26040517fc824d8910000000000000000000000000000000000000000000000000000000081526004808201526024810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063c824d8919060440161199c565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16612ab45760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015612af957600080fd5b505af1158015612b0d573d6000803e3d6000fd5b50506040805187815286151560208201523393507fe17beb8487c3e79865827ae14ef940fe858d8dd153cc7a4b25b041e2895e82f492500160405180910390a26040517fb943b0c100000000000000000000000000000000000000000000000000000000815260048082015260248101859052831515604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063b943b0c1906064015b60206040518083038186803b158015612bc057600080fd5b505af4158015612bd4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125fd9190614312565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16612c835760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015612cc857600080fd5b505af1158015612cdc573d6000803e3d6000fd5b50506040805187815286151560208201523393507ff98e7718ee4616550f38594da7703cb4a26dd80936283951d7741e86553e308692500160405180910390a26040517fc6ce9bfd00000000000000000000000000000000000000000000000000000000815260048082015260248101859052831515604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063c6ce9bfd90606401612ba8565b6040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526000828152600a60205260409081902081516101808101909252805482908290612e0590614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054612e3190614c53565b8015612e7e5780601f10612e5357610100808354040283529160200191612e7e565b820191906000526020600020905b815481529060010190602001808311612e6157829003601f168201915b505050918352505060018201546001600160a01b03166020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460ff808216151560c08401526101008083048216151560e0850152620100008304821615159084015263010000008204811615156101208401526401000000009091041615156101408201526007909101546101609091015292915050565b604080516101208082018352600080835260208084018290526060848601819052808501839052608080860184905260a080870185905260c080880186905260e0808901879052610100808a018890528a51808a018c52888152808801899052808c018790528087018990528086018990528085018990528084018990528083018990528082018990528b51808b018d528981528089018a9052808d018890528088018a90528087018a90528086018a90528085018a90528084018a90528083018a90528c51808c018e528a8152808a018b9052808e018990528089018b90528088018b90528087018b90528086018b90528085018b90528084018b90528d51808d018f528b8152808b018c9052808f018a90529889018b90529688018a905294870189905292860188905290850187905284018690528d8652600685528886208d87528987208d88528a88208d89528b89208d8a52988c90208c519a8b018d5283548b526001840154988b01989098526002830180549b9c949b959a96999798939792969195929491928892840191906130bf90614c53565b80601f01602080910402602001604051908101604052809291908181526020018280546130eb90614c53565b80156131385780601f1061310d57610100808354040283529160200191613138565b820191906000526020600020905b81548152906001019060200180831161311b57829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b8404821615156080860152600160b81b90930416151560a084015260049093015460c090920191909152805161012081018252875481526001880154928101929092526002870180549398509192879291840191906131e190614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461320d90614c53565b801561325a5780601f1061322f5761010080835404028352916020019161325a565b820191906000526020600020905b81548152906001019060200180831161323d57829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b8404821615156080860152600160b81b90930416151560a084015260049093015460c0909201919091528051610120810182528654815260018701549281019290925260028601805493975091928692918401919061330390614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461332f90614c53565b801561337c5780601f106133515761010080835404028352916020019161337c565b820191906000526020600020905b81548152906001019060200180831161335f57829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b8404821615156080860152600160b81b90930416151560a084015260049093015460c0909201919091528051610120810182528554815260018601549281019290925260028501805493965091928592918401919061342590614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461345190614c53565b801561349e5780601f106134735761010080835404028352916020019161349e565b820191906000526020600020905b81548152906001019060200180831161348157829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b8404821615156080860152600160b81b90930416151560a084015260049093015460c0909201919091528051610120810182528454815260018501549281019290925260028401805493955091928492918401919061354790614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461357390614c53565b80156135c05780601f10613595576101008083540402835291602001916135c0565b820191906000526020600020905b8154815290600101906020018083116135a357829003601f168201915b505050918352505060038201546001600160a01b038116602083015260ff600160a01b8204811615156040840152600160a81b8204811615156060840152600160b01b8204811615156080840152600160b81b90910416151560a082015260049091015460c090910152949f939e50919c509a509198509650505050505050565b6136966040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b6000828152600e602052604090819020815161010081019092528054829082906136bf90614c53565b80601f01602080910402602001604051908101604052809291908181526020018280546136eb90614c53565b80156137385780601f1061370d57610100808354040283529160200191613738565b820191906000526020600020905b81548152906001019060200180831161371b57829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b9091048116151560408301526002830154606083015260038301546080830152600483015460a0830152600583015460c0830152600690920154909116151560e09091015292915050565b60606004601001805480602002602001604051908101604052809291908181526020016000905b82821015610d27578382906000526020600020906005020160405180610120016040529081600082015481526020016001820154815260200160028201805461381590614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461384190614c53565b801561388e5780601f106138635761010080835404028352916020019161388e565b820191906000526020600020905b81548152906001019060200180831161387157829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b8304811615156040850152600160a81b8304811615156060850152600160b01b8304811615156080850152600160b81b909204909116151560a083015260049092015460c09091015290825260019290920191016137cd565b6016546040517f9a8b8c15000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b03909116604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__90639a8b8c159060640160006040518083038186803b15801561398b57600080fd5b505af415801561399f573d6000803e3d6000fd5b5050505050565b6040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915260008a8152600a60205260408082208b83528183208b84528284208b85528385208b865294849020845161018081019095528354939592949193909190869082908290613bd790614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054613c0390614c53565b8015613c505780601f10613c2557610100808354040283529160200191613c50565b820191906000526020600020905b815481529060010190602001808311613c3357829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e0860152620100008304821615159085015263010000008204811615156101208501526401000000009091041615156101408301526007909201546101609091015280516101808101909152855491965090859082908290613d1490614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054613d4090614c53565b8015613d8d5780601f10613d6257610100808354040283529160200191613d8d565b820191906000526020600020905b815481529060010190602001808311613d7057829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e0860152620100008304821615159085015263010000008204811615156101208501526401000000009091041615156101408301526007909201546101609091015280516101808101909152845491955090849082908290613e5190614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054613e7d90614c53565b8015613eca5780601f10613e9f57610100808354040283529160200191613eca565b820191906000526020600020905b815481529060010190602001808311613ead57829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e0860152620100008304821615159085015263010000008204811615156101208501526401000000009091041615156101408301526007909201546101609091015280516101808101909152835491945090839082908290613f8e90614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054613fba90614c53565b80156140075780601f10613fdc57610100808354040283529160200191614007565b820191906000526020600020905b815481529060010190602001808311613fea57829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e08601526201000083048216151590850152630100000082048116151561012085015264010000000090910416151561014083015260079092015461016090910152805161018081019091528254919350908290829082906140cb90614c53565b80601f01602080910402602001604051908101604052809291908181526020018280546140f790614c53565b80156141445780601f1061411957610100808354040283529160200191614144565b820191906000526020600020905b81548152906001019060200180831161412757829003601f168201915b505050918352505060018201546001600160a01b03166020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460ff808216151560c08401526101008083048216151560e08501526201000083048216151590840152630100000082048116151561012084015264010000000090910416151561014082015260079091015461016090910152949f939e50919c509a509198509650505050505050565b82805461420890614c53565b90600052602060002090601f01602090048101928261422a5760008555614270565b82601f1061424357805160ff1916838001178555614270565b82800160010185558215614270579182015b82811115614270578251825591602001919060010190614255565b5061427c929150614280565b5090565b5b8082111561427c5760008155600101614281565b80356001600160a01b03811681146142ac57600080fd5b919050565b60008083601f8401126142c2578182fd5b50813567ffffffffffffffff8111156142d9578182fd5b6020830191508360208285010111156142f157600080fd5b9250929050565b600060208284031215614309578081fd5b61123982614295565b600060208284031215614323578081fd5b815161123981614ca7565b60008060208385031215614340578081fd5b823567ffffffffffffffff811115614356578182fd5b614362858286016142b1565b90969095509350505050565b60008060008060008060a08789031215614386578182fd5b863567ffffffffffffffff81111561439c578283fd5b6143a889828a016142b1565b90975095505060208701356143bc81614ca7565b935060408701356143cc81614ca7565b925060608701356143dc81614ca7565b80925050608087013590509295509295509295565b60008060008060408587031215614406578384fd5b843567ffffffffffffffff8082111561441d578586fd5b614429888389016142b1565b90965094506020870135915080821115614441578384fd5b5061444e878288016142b1565b95989497509550505050565b6000806000806060858703121561446f578384fd5b843567ffffffffffffffff811115614485578485fd5b614491878288016142b1565b9095509350506020850135915060408501356144ac81614ca7565b939692955090935050565b6000602082840312156144c8578081fd5b5035919050565b6000602082840312156144e0578081fd5b5051919050565b600080604083850312156144f9578182fd5b8235915061450960208401614295565b90509250929050565b60008060408385031215614524578182fd5b82359150602083013561453681614ca7565b809150509250929050565b600080600060608486031215614555578283fd5b83359250602084013561456781614ca7565b9150604084013561457781614ca7565b809150509250925092565b600080600080600060a08688031215614599578081fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000815180845260208085019450808401835b838110156145eb578151875295820195908201906001016145cf565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452815b8181101561464457602081850181015186830182015201614628565b818111156146555782602083870101525b50601f01601f19169290920160200192915050565b6000610120825184526020830151602085015260408301518160408601526146948286018261461f565b9150506001600160a01b03606084015116606085015260808301516146bd608086018215159052565b5060a08301516146d160a086018215159052565b5060c08301516146e560c086018215159052565b5060e08301516146f960e086018215159052565b50610100928301519390920192909252919050565b6000815160c0845261472360c085018261461f565b90506001600160a01b03602084015116602085015260408301516040850152606083015160608501526080830151608085015260a0830151151560a08501528091505092915050565b600061010082518185526147828286018261461f565b9150506001600160a01b036020840151166020850152604083015115156040850152606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e0830151151560e08501528091505092915050565b600061018082518185526147f88286018261461f565b915050602083015161481560208601826001600160a01b03169052565b5060408301516040850152606083015160608501526080830151608085015260a083015160a085015260c083015161485160c086018215159052565b5060e083015161486560e086018215159052565b506101008381015115159085015261012080840151151590850152610140808401511515908501526101609283015192909301919091525090565b8183823760009101908152919050565b6000602080830181845280855180835260408601915060408160051b8701019250838701855b8281101561490457603f198886030184526148f285835161466a565b945092850192908501906001016148d6565b5092979650505050505050565b6020815260006125fd6020830184866145f6565b6060815260006149396060830186886145f6565b60208301949094525090151560409091015292915050565b602081526000611239602083018461461f565b602081526000611239602083018461466a565b60a08152600061498a60a083018861466a565b828103602084015261499c818861466a565b905082810360408401526149b0818761466a565b905082810360608401526149c4818661466a565b905082810360808401526127dc818561466a565b83815260406020820152600061094f6040830184866145f6565b87815260c060208201526000614a0c60c08301888a6145f6565b9515156040830152509215156060840152901515608083015260a0909101529392505050565b858152608060208201526000614a4c6080830186886145f6565b6040830194909452509015156060909101529392505050565b602081526000825160a06020840152614a8160c08401826145bc565b90506020840151601f1980858403016040860152614a9f83836145bc565b92506040860151915080858403016060860152614abc83836145bc565b92506060860151915080858403016080860152614ad983836145bc565b925060808601519150808584030160a08601525061094f82826145bc565b602081526000611239602083018461470e565b60a081526000614b1d60a083018861470e565b8281036020840152614b2f818861470e565b90508281036040840152614b43818761470e565b90508281036060840152614b57818661470e565b905082810360808401526127dc818561470e565b602081526000611239602083018461476c565b60a081526000614b9160a083018861476c565b8281036020840152614ba3818861476c565b90508281036040840152614bb7818761476c565b90508281036060840152614bcb818661476c565b905082810360808401526127dc818561476c565b60208152600061123960208301846147e2565b60a081526000614c0560a08301886147e2565b8281036020840152614c1781886147e2565b90508281036040840152614c2b81876147e2565b90508281036060840152614c3f81866147e2565b905082810360808401526127dc81856147e2565b600181811c90821680614c6757607f821691505b60208210811415614ca1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8015158114614cb557600080fd5b5056fea2646970667358221220067cd043c8a8b36d25c3b731dceadb1d929be684f70c4c1fbe513792cfd8885e64736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106102925760003560e01c806371110f3911610160578063a5513a18116100d8578063d79950761161008c578063edbc975911610071578063edbc975914610623578063fdedbe951461062b578063fef7e50b1461063e57600080fd5b8063d7995076146105fb578063ea614f541461061b57600080fd5b8063c42bca85116100bd578063c42bca85146105a4578063c9ddacbc146105b7578063d4865bed146105d757600080fd5b8063a5513a181461057e578063a972d10b1461059157600080fd5b806380e11be91161012f57806394b535ec1161011457806394b535ec1461054557806397c3ccd8146105585780639e6371ba1461056b57600080fd5b806380e11be91461051f578063899e456c1461053257600080fd5b806371110f39146104d857806371414ed3146104e05780637331210c146104f357806374700218146104fb57600080fd5b80634112fdd01161020e57806356cf5358116101c25780635f90dec4116101a75780635f90dec41461048e5780636127d22d146104b257806364894bb6146104c557600080fd5b806356cf5358146104735780635e06f50f1461047b57600080fd5b806344443dea116101f357806344443dea146104025780634d8b10a914610422578063548c0ef41461043557600080fd5b80634112fdd0146103da5780634173b417146103ed57600080fd5b80631d143848116102655780632b60c8bb1161024a5780632b60c8bb146103905780632f370ba3146103b057806336ffa905146103c557600080fd5b80631d143848146103525780631d8c89711461037d57600080fd5b806302a08328146102975780630e0d7f07146102ae5780630fba4ca11461032a5780631aecf6a01461033f575b600080fd5b6004545b6040519081526020015b60405180910390f35b61031a6102bc3660046142f8565b6002546040516bffffffffffffffffffffffff19606084901b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000908152600390925290205460ff169392505050565b60405190151581526020016102a5565b61033d61033836600461432e565b610662565b005b61031a61034d366004614541565b610779565b600054610365906001600160a01b031681565b6040516001600160a01b0390911681526020016102a5565b61031a61038b3660046143f1565b610958565b6103a361039e3660046144b7565b610a8a565b6040516102a59190614af7565b6103b8610bbf565b6040516102a591906148b0565b6103cd610d30565b6040516102a59190614a65565b61033d6103e83660046144b7565b610f31565b6103f5610f76565b6040516102a59190614951565b6104156104103660046144b7565b61100b565b6040516102a59190614964565b61031a6104303660046144e7565b611184565b6104616104433660046142f8565b6001600160a01b031660009081526005602052604090205460ff1690565b60405160ff90911681526020016102a5565b60075461029b565b61031a6104893660046144e7565b611240565b6104a161049c366004614582565b6112a9565b6040516102a5959493929190614b0a565b61031a6104c03660046144b7565b6118b6565b61031a6104d33660046144e7565b6119f2565b600b5461029b565b61029b6104ee36600461445a565b611a5b565b60095461029b565b61050e610509366004614582565b611c3c565b6040516102a5959493929190614b7e565b61031a61052d3660046144b7565b612331565b61029b61054036600461432e565b61242e565b61029b61055336600461436e565b612605565b61033d6105663660046142f8565b6127e8565b61033d6105793660046142f8565b6128c1565b61031a61058c3660046144b7565b61293f565b61031a61059f366004614512565b612a29565b61031a6105b2366004614512565b612bf8565b6105ca6105c53660046144b7565b612d7b565b6040516102a59190614bdf565b6105ea6105e5366004614582565b612f25565b6040516102a5959493929190614977565b61060e6106093660046144b7565b613641565b6040516102a59190614b6b565b6103b86137a6565b600f5461029b565b61033d6106393660046144b7565b61390e565b61065161064c366004614582565b6139a6565b6040516102a5959493929190614bf2565b60025460405161067890849084906020016148a0565b60405160208183030381529060405280519060200120146106e05760405162461bcd60e51b815260206004820152600360248201527f393032000000000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6002546040516bffffffffffffffffffffffff193360601b166020820152603481019190915260009060540160408051808303601f190181528282528051602091820120818401835260018452600081815260039092528282209351845460ff191690151517909355905191925033917f79229b212fa3ea547fb5e5b66090cf250d442b12a51854a030f3b796d528134e9190a2505050565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166108045760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b15801561084957600080fd5b505af115801561085d573d6000803e3d6000fd5b50506040805188815287151560208201523393507f1a53dbc4afb4355dae75da1c738d7f9da8d47895ca9e52298a2f13edef1eeb9a92500160405180910390a26040517f42877fb7000000000000000000000000000000000000000000000000000000008152600480820152602481018690528415156044820152831515606482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906342877fb79060840160206040518083038186803b15801561091757600080fd5b505af415801561092b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094f9190614312565b95945050505050565b600080546001600160a01b031633146109b35760405162461bcd60e51b815260206004820152600360248201527f393031000000000000000000000000000000000000000000000000000000000060448201526064016106d7565b6040805160606020601f88018190040282018101835291810186815290918291908890889081908501838280828437600092019190915250505090825250604051602091820191610a089187918791016148a0565b60408051601f19818403018152919052805160209182012090915281518051600192610a389284929101906141fc565b50602082015181600101559050507f9c1e1a17a78053ad78b3801837ad5e515d429987252f2e1371b7b50fa8ff8bec8585604051610a77929190614911565b60405180910390a1506001949350505050565b610ace6040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b60008281526008602052604090819020815160c08101909252805482908290610af690614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2290614c53565b8015610b6f5780601f10610b4457610100808354040283529160200191610b6f565b820191906000526020600020905b815481529060010190602001808311610b5257829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040820152600382015460608201526004820154608082015260059091015460ff16151560a09091015292915050565b60606004600f01805480602002602001604051908101604052809291908181526020016000905b82821015610d275783829060005260206000209060050201604051806101200160405290816000820154815260200160018201548152602001600282018054610c2e90614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5a90614c53565b8015610ca75780601f10610c7c57610100808354040283529160200191610ca7565b820191906000526020600020905b815481529060010190602001808311610c8a57829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b8304811615156040850152600160a81b8304811615156060850152600160b01b8304811615156080850152600160b81b909204909116151560a083015260049092015460c0909101529082526001929092019101610be6565b50505050905090565b610d626040518060a0016040528060608152602001606081526020016060815260200160608152602001606081525090565b336000908152600d60209081526040918290208251815460c09381028201840190945260a081018481529093919284928491840182828015610dc357602002820191906000526020600020905b815481526020019060010190808311610daf575b5050505050815260200160018201805480602002602001604051908101604052809291908181526020018280548015610e1b57602002820191906000526020600020905b815481526020019060010190808311610e07575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610e7357602002820191906000526020600020905b815481526020019060010190808311610e5f575b5050505050815260200160038201805480602002602001604051908101604052809291908181526020018280548015610ecb57602002820191906000526020600020905b815481526020019060010190808311610eb7575b5050505050815260200160048201805480602002602001604051908101604052809291908181526020018280548015610f2357602002820191906000526020600020905b815481526020019060010190808311610f0f575b505050505081525050905090565b6015546001600160a01b03163314610f715760405162461bcd60e51b815260206004820152600360248201526239333760e81b60448201526064016106d7565b600455565b606060016000018054610f8890614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb490614c53565b80156110015780601f10610fd657610100808354040283529160200191611001565b820191906000526020600020905b815481529060010190602001808311610fe457829003601f168201915b5050505050905090565b604080516101208101825260008082526020820181905260609282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526004600201600083815260200190815260200160002060405180610120016040529081600082015481526020016001820154815260200160028201805461109b90614c53565b80601f01602080910402602001604051908101604052809291908181526020018280546110c790614c53565b80156111145780601f106110e957610100808354040283529160200191611114565b820191906000526020600020905b8154815290600101906020018083116110f757829003601f168201915b505050918352505060038201546001600160a01b038116602083015260ff600160a01b8204811615156040840152600160a81b8204811615156060840152600160b01b8204811615156080840152600160b81b90910416151560a082015260049091015460c09091015292915050565b6040517ffd3e4768000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063fd3e4768906064015b60206040518083038186803b15801561120157600080fd5b505af4158015611215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112399190614312565b9392505050565b6040517f2ca650b2000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__90632ca650b2906064016111e9565b6112ed6040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6113316040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6113756040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6113b96040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6113fd6040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b60008a8152600860205260408082208b83528183208b84528284208b85528385208b865294849020845160c08101909552835493959294919390919086908290829061144890614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461147490614c53565b80156114c15780601f10611496576101008083540402835291602001916114c1565b820191906000526020600020905b8154815290600101906020018083116114a457829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c0810190915285549196509085908290829061152d90614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461155990614c53565b80156115a65780601f1061157b576101008083540402835291602001916115a6565b820191906000526020600020905b81548152906001019060200180831161158957829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c0810190915284549195509084908290829061161290614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461163e90614c53565b801561168b5780601f106116605761010080835404028352916020019161168b565b820191906000526020600020905b81548152906001019060200180831161166e57829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c081019091528354919450908390829082906116f790614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461172390614c53565b80156117705780601f1061174557610100808354040283529160200191611770565b820191906000526020600020905b81548152906001019060200180831161175357829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c081019091528254919350908290829082906117dc90614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461180890614c53565b80156118555780601f1061182a57610100808354040283529160200191611855565b820191906000526020600020905b81548152906001019060200180831161183857829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040820152600382015460608201526004820154608082015260059091015460ff16151560a090910152949f939e50919c509a509198509650505050505050565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b1580156118fc57600080fd5b505af1158015611910573d6000803e3d6000fd5b50506040518481523392507f111d8408ae92d0b78f4d97697012bcdee255bb0e7615f3a011a759d4f80abfed915060200160405180910390a26040517f14e4f3310000000000000000000000000000000000000000000000000000000081526004808201526024810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906314e4f331906044015b60206040518083038186803b1580156119b457600080fd5b505af41580156119c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ec9190614312565b92915050565b6040517fbd1d2c31000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063bd1d2c31906064016111e9565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16611ae65760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015611b2b57600080fd5b505af1158015611b3f573d6000803e3d6000fd5b50505050336001600160a01b03167f67696076dd0093e34ea851b9556ffdb425ef250da860120eab4183b76e7cb2b087878787604051611b829493929190614925565b60405180910390a26040517fdd54839e00000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063dd54839e90611be2906004908a908a908a908a908501614a32565b60206040518083038186803b158015611bfa57600080fd5b505af4158015611c0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3291906144cf565b9695505050505050565b611c916040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611ce66040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611d3b6040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611d906040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611de56040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b60008a8152600e60205260408082208b83528183208b84528284208b85528385208b865294849020845161010081019095528354939592949193909190869082908290611e3190614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054611e5d90614c53565b8015611eaa5780601f10611e7f57610100808354040283529160200191611eaa565b820191906000526020600020905b815481529060010190602001808311611e8d57829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e09091015280516101008101909152855491965090859082908290611f3390614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054611f5f90614c53565b8015611fac5780601f10611f8157610100808354040283529160200191611fac565b820191906000526020600020905b815481529060010190602001808311611f8f57829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e0909101528051610100810190915284549195509084908290829061203590614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461206190614c53565b80156120ae5780601f10612083576101008083540402835291602001916120ae565b820191906000526020600020905b81548152906001019060200180831161209157829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e0909101528051610100810190915283549194509083908290829061213790614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461216390614c53565b80156121b05780601f10612185576101008083540402835291602001916121b0565b820191906000526020600020905b81548152906001019060200180831161219357829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e0909101528051610100810190915282549193509082908290829061223990614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461226590614c53565b80156122b25780601f10612287576101008083540402835291602001916122b2565b820191906000526020600020905b81548152906001019060200180831161229557829003601f168201915b505050918352505060018201546001600160a01b0381166020830152600160a01b900460ff908116151560408301526002830154606083015260038301546080830152600483015460a0830152600583015460c0830152600690920154909116151560e090910152949f939e50919c509a509198509650505050505050565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b15801561237757600080fd5b505af115801561238b573d6000803e3d6000fd5b50506040518481523392507fd1b02b10475a07f1767fa17ac24c11cb86236e52df9fbc8e2cd2662f470be9ac915060200160405180910390a26016546040517fca2f2aa00000000000000000000000000000000000000000000000000000000081526004808201526001600160a01b0390911660248201526044810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063ca2f2aa09060640161199c565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166124b95760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b1580156124fe57600080fd5b505af1158015612512573d6000803e3d6000fd5b50505050336001600160a01b03167fe249461360e6eb5f99fc32e18970ea7e714fe4a6ae1bb2b802109ce1897551a38585604051612551929190614911565b60405180910390a26040517ffe59ad1300000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063fe59ad13906125ad906004908890889083016149d8565b60206040518083038186803b1580156125c557600080fd5b505af41580156125d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125fd91906144cf565b949350505050565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166126905760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b1580156126d557600080fd5b505af11580156126e9573d6000803e3d6000fd5b50505050336001600160a01b03167f282a70c1093742e40fc04b5fcdaf156b8f7dc0f4daccc210e2826ab21ef52e2f8989604051612728929190614911565b60405180910390a26040517f67de66a200000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906367de66a29061278c906004908c908c908c908c908c908c9087016149f2565b60206040518083038186803b1580156127a457600080fd5b505af41580156127b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127dc91906144cf565b98975050505050505050565b6015546001600160a01b031633146128285760405162461bcd60e51b815260206004820152600360248201526239333760e81b60448201526064016106d7565b6016546040517f78d97c940000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152909116906378d97c9490602401600060405180830381600087803b15801561288857600080fd5b505af115801561289c573d6000803e3d6000fd5b505050506001600160a01b03166000908152600560205260409020805460ff19169055565b6016546001600160a01b0316331461291b5760405162461bcd60e51b815260206004820152600360248201527f393534000000000000000000000000000000000000000000000000000000000060448201526064016106d7565b6001600160a01b03166000908152600560205260409020805460ff19166001179055565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b15801561298557600080fd5b505af1158015612999573d6000803e3d6000fd5b50506040518481523392507f537cd2e3949e391193079a5700552e511e26e8feac335a6cdc444049ab35a90f915060200160405180910390a26040517fc824d8910000000000000000000000000000000000000000000000000000000081526004808201526024810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063c824d8919060440161199c565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16612ab45760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015612af957600080fd5b505af1158015612b0d573d6000803e3d6000fd5b50506040805187815286151560208201523393507fe17beb8487c3e79865827ae14ef940fe858d8dd153cc7a4b25b041e2895e82f492500160405180910390a26040517fb943b0c100000000000000000000000000000000000000000000000000000000815260048082015260248101859052831515604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063b943b0c1906064015b60206040518083038186803b158015612bc057600080fd5b505af4158015612bd4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125fd9190614312565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16612c835760405162461bcd60e51b815260206004820152600360248201526239303360e81b60448201526064016106d7565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015612cc857600080fd5b505af1158015612cdc573d6000803e3d6000fd5b50506040805187815286151560208201523393507ff98e7718ee4616550f38594da7703cb4a26dd80936283951d7741e86553e308692500160405180910390a26040517fc6ce9bfd00000000000000000000000000000000000000000000000000000000815260048082015260248101859052831515604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063c6ce9bfd90606401612ba8565b6040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526000828152600a60205260409081902081516101808101909252805482908290612e0590614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054612e3190614c53565b8015612e7e5780601f10612e5357610100808354040283529160200191612e7e565b820191906000526020600020905b815481529060010190602001808311612e6157829003601f168201915b505050918352505060018201546001600160a01b03166020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460ff808216151560c08401526101008083048216151560e0850152620100008304821615159084015263010000008204811615156101208401526401000000009091041615156101408201526007909101546101609091015292915050565b604080516101208082018352600080835260208084018290526060848601819052808501839052608080860184905260a080870185905260c080880186905260e0808901879052610100808a018890528a51808a018c52888152808801899052808c018790528087018990528086018990528085018990528084018990528083018990528082018990528b51808b018d528981528089018a9052808d018890528088018a90528087018a90528086018a90528085018a90528084018a90528083018a90528c51808c018e528a8152808a018b9052808e018990528089018b90528088018b90528087018b90528086018b90528085018b90528084018b90528d51808d018f528b8152808b018c9052808f018a90529889018b90529688018a905294870189905292860188905290850187905284018690528d8652600685528886208d87528987208d88528a88208d89528b89208d8a52988c90208c519a8b018d5283548b526001840154988b01989098526002830180549b9c949b959a96999798939792969195929491928892840191906130bf90614c53565b80601f01602080910402602001604051908101604052809291908181526020018280546130eb90614c53565b80156131385780601f1061310d57610100808354040283529160200191613138565b820191906000526020600020905b81548152906001019060200180831161311b57829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b8404821615156080860152600160b81b90930416151560a084015260049093015460c090920191909152805161012081018252875481526001880154928101929092526002870180549398509192879291840191906131e190614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461320d90614c53565b801561325a5780601f1061322f5761010080835404028352916020019161325a565b820191906000526020600020905b81548152906001019060200180831161323d57829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b8404821615156080860152600160b81b90930416151560a084015260049093015460c0909201919091528051610120810182528654815260018701549281019290925260028601805493975091928692918401919061330390614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461332f90614c53565b801561337c5780601f106133515761010080835404028352916020019161337c565b820191906000526020600020905b81548152906001019060200180831161335f57829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b8404821615156080860152600160b81b90930416151560a084015260049093015460c0909201919091528051610120810182528554815260018601549281019290925260028501805493965091928592918401919061342590614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461345190614c53565b801561349e5780601f106134735761010080835404028352916020019161349e565b820191906000526020600020905b81548152906001019060200180831161348157829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b8404821615156080860152600160b81b90930416151560a084015260049093015460c0909201919091528051610120810182528454815260018501549281019290925260028401805493955091928492918401919061354790614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461357390614c53565b80156135c05780601f10613595576101008083540402835291602001916135c0565b820191906000526020600020905b8154815290600101906020018083116135a357829003601f168201915b505050918352505060038201546001600160a01b038116602083015260ff600160a01b8204811615156040840152600160a81b8204811615156060840152600160b01b8204811615156080840152600160b81b90910416151560a082015260049091015460c090910152949f939e50919c509a509198509650505050505050565b6136966040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b6000828152600e602052604090819020815161010081019092528054829082906136bf90614c53565b80601f01602080910402602001604051908101604052809291908181526020018280546136eb90614c53565b80156137385780601f1061370d57610100808354040283529160200191613738565b820191906000526020600020905b81548152906001019060200180831161371b57829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b9091048116151560408301526002830154606083015260038301546080830152600483015460a0830152600583015460c0830152600690920154909116151560e09091015292915050565b60606004601001805480602002602001604051908101604052809291908181526020016000905b82821015610d27578382906000526020600020906005020160405180610120016040529081600082015481526020016001820154815260200160028201805461381590614c53565b80601f016020809104026020016040519081016040528092919081815260200182805461384190614c53565b801561388e5780601f106138635761010080835404028352916020019161388e565b820191906000526020600020905b81548152906001019060200180831161387157829003601f168201915b505050918352505060038201546001600160a01b03811660208084019190915260ff600160a01b8304811615156040850152600160a81b8304811615156060850152600160b01b8304811615156080850152600160b81b909204909116151560a083015260049092015460c09091015290825260019290920191016137cd565b6016546040517f9a8b8c15000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b03909116604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__90639a8b8c159060640160006040518083038186803b15801561398b57600080fd5b505af415801561399f573d6000803e3d6000fd5b5050505050565b6040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915260008a8152600a60205260408082208b83528183208b84528284208b85528385208b865294849020845161018081019095528354939592949193909190869082908290613bd790614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054613c0390614c53565b8015613c505780601f10613c2557610100808354040283529160200191613c50565b820191906000526020600020905b815481529060010190602001808311613c3357829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e0860152620100008304821615159085015263010000008204811615156101208501526401000000009091041615156101408301526007909201546101609091015280516101808101909152855491965090859082908290613d1490614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054613d4090614c53565b8015613d8d5780601f10613d6257610100808354040283529160200191613d8d565b820191906000526020600020905b815481529060010190602001808311613d7057829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e0860152620100008304821615159085015263010000008204811615156101208501526401000000009091041615156101408301526007909201546101609091015280516101808101909152845491955090849082908290613e5190614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054613e7d90614c53565b8015613eca5780601f10613e9f57610100808354040283529160200191613eca565b820191906000526020600020905b815481529060010190602001808311613ead57829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e0860152620100008304821615159085015263010000008204811615156101208501526401000000009091041615156101408301526007909201546101609091015280516101808101909152835491945090839082908290613f8e90614c53565b80601f0160208091040260200160405190810160405280929190818152602001828054613fba90614c53565b80156140075780601f10613fdc57610100808354040283529160200191614007565b820191906000526020600020905b815481529060010190602001808311613fea57829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e08601526201000083048216151590850152630100000082048116151561012085015264010000000090910416151561014083015260079092015461016090910152805161018081019091528254919350908290829082906140cb90614c53565b80601f01602080910402602001604051908101604052809291908181526020018280546140f790614c53565b80156141445780601f1061411957610100808354040283529160200191614144565b820191906000526020600020905b81548152906001019060200180831161412757829003601f168201915b505050918352505060018201546001600160a01b03166020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460ff808216151560c08401526101008083048216151560e08501526201000083048216151590840152630100000082048116151561012084015264010000000090910416151561014082015260079091015461016090910152949f939e50919c509a509198509650505050505050565b82805461420890614c53565b90600052602060002090601f01602090048101928261422a5760008555614270565b82601f1061424357805160ff1916838001178555614270565b82800160010185558215614270579182015b82811115614270578251825591602001919060010190614255565b5061427c929150614280565b5090565b5b8082111561427c5760008155600101614281565b80356001600160a01b03811681146142ac57600080fd5b919050565b60008083601f8401126142c2578182fd5b50813567ffffffffffffffff8111156142d9578182fd5b6020830191508360208285010111156142f157600080fd5b9250929050565b600060208284031215614309578081fd5b61123982614295565b600060208284031215614323578081fd5b815161123981614ca7565b60008060208385031215614340578081fd5b823567ffffffffffffffff811115614356578182fd5b614362858286016142b1565b90969095509350505050565b60008060008060008060a08789031215614386578182fd5b863567ffffffffffffffff81111561439c578283fd5b6143a889828a016142b1565b90975095505060208701356143bc81614ca7565b935060408701356143cc81614ca7565b925060608701356143dc81614ca7565b80925050608087013590509295509295509295565b60008060008060408587031215614406578384fd5b843567ffffffffffffffff8082111561441d578586fd5b614429888389016142b1565b90965094506020870135915080821115614441578384fd5b5061444e878288016142b1565b95989497509550505050565b6000806000806060858703121561446f578384fd5b843567ffffffffffffffff811115614485578485fd5b614491878288016142b1565b9095509350506020850135915060408501356144ac81614ca7565b939692955090935050565b6000602082840312156144c8578081fd5b5035919050565b6000602082840312156144e0578081fd5b5051919050565b600080604083850312156144f9578182fd5b8235915061450960208401614295565b90509250929050565b60008060408385031215614524578182fd5b82359150602083013561453681614ca7565b809150509250929050565b600080600060608486031215614555578283fd5b83359250602084013561456781614ca7565b9150604084013561457781614ca7565b809150509250925092565b600080600080600060a08688031215614599578081fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000815180845260208085019450808401835b838110156145eb578151875295820195908201906001016145cf565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452815b8181101561464457602081850181015186830182015201614628565b818111156146555782602083870101525b50601f01601f19169290920160200192915050565b6000610120825184526020830151602085015260408301518160408601526146948286018261461f565b9150506001600160a01b03606084015116606085015260808301516146bd608086018215159052565b5060a08301516146d160a086018215159052565b5060c08301516146e560c086018215159052565b5060e08301516146f960e086018215159052565b50610100928301519390920192909252919050565b6000815160c0845261472360c085018261461f565b90506001600160a01b03602084015116602085015260408301516040850152606083015160608501526080830151608085015260a0830151151560a08501528091505092915050565b600061010082518185526147828286018261461f565b9150506001600160a01b036020840151166020850152604083015115156040850152606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e0830151151560e08501528091505092915050565b600061018082518185526147f88286018261461f565b915050602083015161481560208601826001600160a01b03169052565b5060408301516040850152606083015160608501526080830151608085015260a083015160a085015260c083015161485160c086018215159052565b5060e083015161486560e086018215159052565b506101008381015115159085015261012080840151151590850152610140808401511515908501526101609283015192909301919091525090565b8183823760009101908152919050565b6000602080830181845280855180835260408601915060408160051b8701019250838701855b8281101561490457603f198886030184526148f285835161466a565b945092850192908501906001016148d6565b5092979650505050505050565b6020815260006125fd6020830184866145f6565b6060815260006149396060830186886145f6565b60208301949094525090151560409091015292915050565b602081526000611239602083018461461f565b602081526000611239602083018461466a565b60a08152600061498a60a083018861466a565b828103602084015261499c818861466a565b905082810360408401526149b0818761466a565b905082810360608401526149c4818661466a565b905082810360808401526127dc818561466a565b83815260406020820152600061094f6040830184866145f6565b87815260c060208201526000614a0c60c08301888a6145f6565b9515156040830152509215156060840152901515608083015260a0909101529392505050565b858152608060208201526000614a4c6080830186886145f6565b6040830194909452509015156060909101529392505050565b602081526000825160a06020840152614a8160c08401826145bc565b90506020840151601f1980858403016040860152614a9f83836145bc565b92506040860151915080858403016060860152614abc83836145bc565b92506060860151915080858403016080860152614ad983836145bc565b925060808601519150808584030160a08601525061094f82826145bc565b602081526000611239602083018461470e565b60a081526000614b1d60a083018861470e565b8281036020840152614b2f818861470e565b90508281036040840152614b43818761470e565b90508281036060840152614b57818661470e565b905082810360808401526127dc818561470e565b602081526000611239602083018461476c565b60a081526000614b9160a083018861476c565b8281036020840152614ba3818861476c565b90508281036040840152614bb7818761476c565b90508281036060840152614bcb818661476c565b905082810360808401526127dc818561476c565b60208152600061123960208301846147e2565b60a081526000614c0560a08301886147e2565b8281036020840152614c1781886147e2565b90508281036040840152614c2b81876147e2565b90508281036060840152614c3f81866147e2565b905082810360808401526127dc81856147e2565b600181811c90821680614c6757607f821691505b60208210811415614ca1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8015158114614cb557600080fd5b5056fea2646970667358221220067cd043c8a8b36d25c3b731dceadb1d929be684f70c4c1fbe513792cfd8885e64736f6c63430008040033",
  "linkReferences": {
    "contracts/libraries/CatalogDaoLib.sol": {
      "CatalogDaoLib": [
        {
          "length": 20,
          "start": 2497
        },
        {
          "length": 20,
          "start": 4778
        },
        {
          "length": 20,
          "start": 4966
        },
        {
          "length": 20,
          "start": 6749
        },
        {
          "length": 20,
          "start": 6936
        },
        {
          "length": 20,
          "start": 7313
        },
        {
          "length": 20,
          "start": 9451
        },
        {
          "length": 20,
          "start": 9824
        },
        {
          "length": 20,
          "start": 10295
        },
        {
          "length": 20,
          "start": 10982
        },
        {
          "length": 20,
          "start": 11369
        },
        {
          "length": 20,
          "start": 11832
        },
        {
          "length": 20,
          "start": 14901
        }
      ]
    }
  },
  "deployedLinkReferences": {
    "contracts/libraries/CatalogDaoLib.sol": {
      "CatalogDaoLib": [
        {
          "length": 20,
          "start": 2274
        },
        {
          "length": 20,
          "start": 4555
        },
        {
          "length": 20,
          "start": 4743
        },
        {
          "length": 20,
          "start": 6526
        },
        {
          "length": 20,
          "start": 6713
        },
        {
          "length": 20,
          "start": 7090
        },
        {
          "length": 20,
          "start": 9228
        },
        {
          "length": 20,
          "start": 9601
        },
        {
          "length": 20,
          "start": 10072
        },
        {
          "length": 20,
          "start": 10759
        },
        {
          "length": 20,
          "start": 11146
        },
        {
          "length": 20,
          "start": 11609
        },
        {
          "length": 20,
          "start": 14678
        }
      ]
    }
  }
}`;

export const getCatalogDAOAbi = () => {
  return JSON.parse(catalogDAO).abi;
};

export const getCatalogDAOBytecode = () => {
  return JSON.parse(catalogDAO).bytecode;
};
