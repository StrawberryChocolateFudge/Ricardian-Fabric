const catalogDAO = `{"_format": "hh-sol-artifact-1",
  "contractName": "CatalogDao",
  "sourceName": "contracts/CatalogDao.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pollPeriod",
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
      "name": "getAcceptedSCProposalsByIndex",
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
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
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
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal",
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
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal",
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
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal",
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
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
            }
          ],
          "internalType": "struct AcceptedSmartContractProposal",
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
              "internalType": "bool",
              "name": "removed",
              "type": "bool"
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
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
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
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
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
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
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
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
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
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
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
              "internalType": "bool",
              "name": "closed",
              "type": "bool"
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
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162004efc38038062004efc8339818101604052810190620000379190620000fb565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600a600460010160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff16021790555080600460000181905550506200014b565b600081519050620000f58162000131565b92915050565b6000602082840312156200010e57600080fd5b60006200011e84828501620000e4565b91505092915050565b6000819050919050565b6200013c8162000127565b81146200014857600080fd5b50565b614da1806200015b6000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806367f789e51161010f578063a5513a18116100a2578063d4865bed11610071578063d4865bed14610682578063d7995076146106b6578063edbc9759146106e6578063fef7e50b14610704576101e5565b8063a5513a18146105c2578063a972d10b146105f2578063c42bca8514610622578063c9ddacbc14610652576101e5565b806374700218116100de57806374700218146104fe57806380e11be914610532578063899e456c14610562578063a053383814610592576101e5565b806367f789e51461046257806371110f391461049257806371414ed3146104b05780637331210c146104e0576101e5565b806344443dea116101875780635e06f50f116101565780635e06f50f1461039e5780635f90dec4146103ce5780636127d22d1461040257806364894bb614610432576101e5565b806344443dea146102f05780634d8b10a914610320578063548c0ef41461035057806356cf535814610380576101e5565b80631d8c8971116101c35780631d8c8971146102545780632b60c8bb1461028457806336ffa905146102b45780634173b417146102d2576101e5565b80630e0d7f07146101ea5780630fba4ca11461021a5780631d14384814610236575b600080fd5b61020460048036038101906101ff9190613d8a565b610738565b60405161021191906145e2565b60405180910390f35b610234600480360381019061022f9190613ddc565b610796565b005b61023e6108c5565b60405161024b91906145c7565b60405180910390f35b61026e60048036038101906102699190613e21565b6108e9565b60405161027b91906145e2565b60405180910390f35b61029e60048036038101906102999190613f02565b610a6c565b6040516102ab91906148b4565b60405180910390f35b6102bc610bbc565b6040516102c99190614892565b60405180910390f35b6102da610dce565b6040516102e79190614661565b60405180910390f35b61030a60048036038101906103059190613f02565b610e63565b60405161031791906146e3565b60405180910390f35b61033a60048036038101906103359190613f54565b610f96565b60405161034791906145e2565b60405180910390f35b61036a60048036038101906103659190613d8a565b61102e565b6040516103779190614ac0565b60405180910390f35b610388611087565b6040516103959190614a7c565b60405180910390f35b6103b860048036038101906103b39190613f54565b611094565b6040516103c591906145e2565b60405180910390f35b6103e860048036038101906103e39190613fcc565b61112c565b6040516103f99594939291906148d6565b60405180910390f35b61041c60048036038101906104179190613f02565b6117bf565b60405161042991906145e2565b60405180910390f35b61044c60048036038101906104479190613f54565b6118a2565b60405161045991906145e2565b60405180910390f35b61047c60048036038101906104779190613ddc565b61193a565b6040516104899190614a7c565b60405180910390f35b61049a611ab6565b6040516104a79190614a7c565b60405180910390f35b6104ca60048036038101906104c59190613e96565b611ac3565b6040516104d79190614a7c565b60405180910390f35b6104e8611c49565b6040516104f59190614a7c565b60405180910390f35b61051860048036038101906105139190613fcc565b611c56565b60405161052995949392919061496e565b60405180910390f35b61054c60048036038101906105479190613f02565b6123ac565b60405161055991906145e2565b60405180910390f35b61057c60048036038101906105779190613ddc565b61248f565b6040516105899190614a7c565b60405180910390f35b6105ac60048036038101906105a79190613f90565b61260b565b6040516105b991906145e2565b60405180910390f35b6105dc60048036038101906105d79190613f02565b612787565b6040516105e991906145e2565b60405180910390f35b61060c60048036038101906106079190613f90565b61286a565b60405161061991906145e2565b60405180910390f35b61063c60048036038101906106379190613f90565b6129e6565b60405161064991906145e2565b60405180910390f35b61066c60048036038101906106679190613f02565b612b62565b60405161067991906149e4565b60405180910390f35b61069c60048036038101906106979190613fcc565b612cb3565b6040516106ad959493929190614705565b60405180910390f35b6106d060048036038101906106cb9190613f02565b6132b5565b6040516106dd919061494c565b60405180910390f35b6106ee61342c565b6040516106fb9190614a7c565b60405180910390f35b61071e60048036038101906107199190613fcc565b613439565b60405161072f959493929190614a06565b60405180910390f35b600080826001800154604051602001610752929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16915050919050565b600180015482826040516020016107ae9291906145ae565b6040516020818303038152906040528051906020012014610804576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fb906146c3565b60405180910390fd5b600033600180015460405160200161081d929190614582565b6040516020818303038152906040528051906020012090506040518060200160405280600115158152506003600083815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055509050503373ffffffffffffffffffffffffffffffffffffffff167f79229b212fa3ea547fb5e5b66090cf250d442b12a51854a030f3b796d528134e60405160405180910390a2505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461097a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610971906146a3565b60405180910390fd5b604051806040016040528086868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200184846040516020016109e29291906145ae565b6040516020818303038152906040528051906020012081525060016000820151816000019080519060200190610a19929190613ad1565b50602082015181600101559050507f9c1e1a17a78053ad78b3801837ad5e515d429987252f2e1371b7b50fa8ff8bec8585604051610a589291906145fd565b60405180910390a160019050949350505050565b610a74613b57565b6004800160008381526020019081526020016000206040518060c0016040529081600082018054610aa490614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad090614bfe565b8015610b1d5780601f10610af257610100808354040283529160200191610b1d565b820191906000526020600020905b815481529060010190602001808311610b0057829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509050919050565b610bc4613ba5565b600460090160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201805480602002602001604051908101604052809291908181526020018280548015610c6057602002820191906000526020600020905b815481526020019060010190808311610c4c575b5050505050815260200160018201805480602002602001604051908101604052809291908181526020018280548015610cb857602002820191906000526020600020905b815481526020019060010190808311610ca4575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610d1057602002820191906000526020600020905b815481526020019060010190808311610cfc575b5050505050815260200160038201805480602002602001604051908101604052809291908181526020018280548015610d6857602002820191906000526020600020905b815481526020019060010190808311610d54575b5050505050815260200160048201805480602002602001604051908101604052809291908181526020018280548015610dc057602002820191906000526020600020905b815481526020019060010190808311610dac575b505050505081525050905090565b606060016000018054610de090614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054610e0c90614bfe565b8015610e595780601f10610e2e57610100808354040283529160200191610e59565b820191906000526020600020905b815481529060010190602001808311610e3c57829003601f168201915b5050505050905090565b610e6b613bd4565b60046002016000838152602001908152602001600020604051806060016040529081600082018054610e9c90614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec890614bfe565b8015610f155780601f10610eea57610100808354040283529160200191610f15565b820191906000526020600020905b815481529060010190602001808311610ef857829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff1615151515815250509050919050565b6000600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63fd3e4768909185856040518463ffffffff1660e01b8152600401610fd693929190614824565b60206040518083038186803b158015610fee57600080fd5b505af4158015611002573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110269190613db3565b905092915050565b6000600460010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000600460030154905090565b6000600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__632ca650b2909185856040518463ffffffff1660e01b81526004016110d493929190614824565b60206040518083038186803b1580156110ec57600080fd5b505af4158015611100573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111249190613db3565b905092915050565b611134613b57565b61113c613b57565b611144613b57565b61114c613b57565b611154613b57565b6004800160008b81526020019081526020016000206004800160008b81526020019081526020016000206004800160008b81526020019081526020016000206004800160008b81526020019081526020016000206004800160008b8152602001908152602001600020846040518060c00160405290816000820180546111d990614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461120590614bfe565b80156112525780601f1061122757610100808354040283529160200191611252565b820191906000526020600020905b81548152906001019060200180831161123557829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509450836040518060c001604052908160008201805461130890614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461133490614bfe565b80156113815780601f1061135657610100808354040283529160200191611381565b820191906000526020600020905b81548152906001019060200180831161136457829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509350826040518060c001604052908160008201805461143790614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461146390614bfe565b80156114b05780601f10611485576101008083540402835291602001916114b0565b820191906000526020600020905b81548152906001019060200180831161149357829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509250816040518060c001604052908160008201805461156690614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461159290614bfe565b80156115df5780601f106115b4576101008083540402835291602001916115df565b820191906000526020600020905b8154815290600101906020018083116115c257829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509150806040518060c001604052908160008201805461169590614bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546116c190614bfe565b801561170e5780601f106116e35761010080835404028352916020019161170e565b820191906000526020600020905b8154815290600101906020018083116116f157829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509050945094509450945094509550955095509550959050565b60003373ffffffffffffffffffffffffffffffffffffffff167f111d8408ae92d0b78f4d97697012bcdee255bb0e7615f3a011a759d4f80abfed836040516118079190614a7c565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__6314e4f3319091846040518363ffffffff1660e01b815260040161184b9291906147fb565b60206040518083038186803b15801561186357600080fd5b505af4158015611877573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189b9190613db3565b9050919050565b6000600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63bd1d2c31909185856040518463ffffffff1660e01b81526004016118e293929190614824565b60206040518083038186803b1580156118fa57600080fd5b505af415801561190e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119329190613db3565b905092915050565b600080336001800154604051602001611954929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff166119cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c690614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f282a70c1093742e40fc04b5fcdaf156b8f7dc0f4daccc210e2826ab21ef52e2f8585604051611a179291906145fd565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63f3a25014909186866040518463ffffffff1660e01b8152600401611a5d9392919061477b565b60206040518083038186803b158015611a7557600080fd5b505af4158015611a89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aad9190613f2b565b91505092915050565b6000600460070154905090565b600080336001800154604051602001611add929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16611b58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b4f90614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f67696076dd0093e34ea851b9556ffdb425ef250da860120eab4183b76e7cb2b087878787604051611ba49493929190614621565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63dd54839e9091888888886040518663ffffffff1660e01b8152600401611bee9594939291906147ad565b60206040518083038186803b158015611c0657600080fd5b505af4158015611c1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3e9190613f2b565b915050949350505050565b6000600460050154905090565b611c5e613c0d565b611c66613c0d565b611c6e613c0d565b611c76613c0d565b611c7e613c0d565b6004600a0160008b81526020019081526020016000206004600a0160008b81526020019081526020016000206004600a0160008b81526020019081526020016000206004600a0160008b81526020019081526020016000206004600a0160008b81526020019081526020016000208460405180610100016040529081600082018054611d0990614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054611d3590614bfe565b8015611d825780601f10611d5757610100808354040283529160200191611d82565b820191906000526020600020905b815481529060010190602001808311611d6557829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16151515158152505094508360405180610100016040529081600082018054611e5e90614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054611e8a90614bfe565b8015611ed75780601f10611eac57610100808354040283529160200191611ed7565b820191906000526020600020905b815481529060010190602001808311611eba57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16151515158152505093508260405180610100016040529081600082018054611fb390614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054611fdf90614bfe565b801561202c5780601f106120015761010080835404028352916020019161202c565b820191906000526020600020905b81548152906001019060200180831161200f57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1615151515815250509250816040518061010001604052908160008201805461210890614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461213490614bfe565b80156121815780601f1061215657610100808354040283529160200191612181565b820191906000526020600020905b81548152906001019060200180831161216457829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1615151515815250509150806040518061010001604052908160008201805461225d90614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461228990614bfe565b80156122d65780601f106122ab576101008083540402835291602001916122d6565b820191906000526020600020905b8154815290600101906020018083116122b957829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1615151515815250509050945094509450945094509550955095509550959050565b60003373ffffffffffffffffffffffffffffffffffffffff167fd1b02b10475a07f1767fa17ac24c11cb86236e52df9fbc8e2cd2662f470be9ac836040516123f49190614a7c565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__637ab37f2a9091846040518363ffffffff1660e01b81526004016124389291906147fb565b60206040518083038186803b15801561245057600080fd5b505af4158015612464573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124889190613db3565b9050919050565b6000803360018001546040516020016124a9929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16612524576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161251b90614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe249461360e6eb5f99fc32e18970ea7e714fe4a6ae1bb2b802109ce1897551a3858560405161256c9291906145fd565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63fe59ad13909186866040518463ffffffff1660e01b81526004016125b29392919061477b565b60206040518083038186803b1580156125ca57600080fd5b505af41580156125de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126029190613f2b565b91505092915050565b600080336001800154604051602001612625929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff166126a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161269790614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f1a53dbc4afb4355dae75da1c738d7f9da8d47895ca9e52298a2f13edef1eeb9a85856040516126e8929190614a97565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63f80e5ae4909186866040518463ffffffff1660e01b815260040161272e9392919061485b565b60206040518083038186803b15801561274657600080fd5b505af415801561275a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277e9190613db3565b91505092915050565b60003373ffffffffffffffffffffffffffffffffffffffff167f537cd2e3949e391193079a5700552e511e26e8feac335a6cdc444049ab35a90f836040516127cf9190614a7c565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63c824d8919091846040518363ffffffff1660e01b81526004016128139291906147fb565b60206040518083038186803b15801561282b57600080fd5b505af415801561283f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128639190613db3565b9050919050565b600080336001800154604051602001612884929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff166128ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128f690614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe17beb8487c3e79865827ae14ef940fe858d8dd153cc7a4b25b041e2895e82f48585604051612947929190614a97565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63b943b0c1909186866040518463ffffffff1660e01b815260040161298d9392919061485b565b60206040518083038186803b1580156129a557600080fd5b505af41580156129b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129dd9190613db3565b91505092915050565b600080336001800154604051602001612a00929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16612a7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a7290614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167ff98e7718ee4616550f38594da7703cb4a26dd80936283951d7741e86553e30868585604051612ac3929190614a97565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63c6ce9bfd909186866040518463ffffffff1660e01b8152600401612b099392919061485b565b60206040518083038186803b158015612b2157600080fd5b505af4158015612b35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b599190613db3565b91505092915050565b612b6a613c6c565b600460060160008381526020019081526020016000206040518060c0016040529081600082018054612b9b90614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054612bc790614bfe565b8015612c145780601f10612be957610100808354040283529160200191612c14565b820191906000526020600020905b815481529060010190602001808311612bf757829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509050919050565b612cbb613bd4565b612cc3613bd4565b612ccb613bd4565b612cd3613bd4565b612cdb613bd4565b600460020160008b8152602001908152602001600020600460020160008b8152602001908152602001600020600460020160008b8152602001908152602001600020600460020160008b8152602001908152602001600020600460020160008b815260200190815260200160002084604051806060016040529081600082018054612d6590614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054612d9190614bfe565b8015612dde5780601f10612db357610100808354040283529160200191612dde565b820191906000526020600020905b815481529060010190602001808311612dc157829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff161515151581525050945083604051806060016040529081600082018054612e7690614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054612ea290614bfe565b8015612eef5780601f10612ec457610100808354040283529160200191612eef565b820191906000526020600020905b815481529060010190602001808311612ed257829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff161515151581525050935082604051806060016040529081600082018054612f8790614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054612fb390614bfe565b80156130005780601f10612fd557610100808354040283529160200191613000565b820191906000526020600020905b815481529060010190602001808311612fe357829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152505092508160405180606001604052908160008201805461309890614bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546130c490614bfe565b80156131115780601f106130e657610100808354040283529160200191613111565b820191906000526020600020905b8154815290600101906020018083116130f457829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff1615151515815250509150806040518060600160405290816000820180546131a990614bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546131d590614bfe565b80156132225780601f106131f757610100808354040283529160200191613222565b820191906000526020600020905b81548152906001019060200180831161320557829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff1615151515815250509050945094509450945094509550955095509550959050565b6132bd613c0d565b6004600a016000838152602001908152602001600020604051806101000160405290816000820180546132ef90614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461331b90614bfe565b80156133685780601f1061333d57610100808354040283529160200191613368565b820191906000526020600020905b81548152906001019060200180831161334b57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1615151515815250509050919050565b60006004600b0154905090565b613441613c6c565b613449613c6c565b613451613c6c565b613459613c6c565b613461613c6c565b600460060160008b8152602001908152602001600020600460060160008b8152602001908152602001600020600460060160008b8152602001908152602001600020600460060160008b8152602001908152602001600020600460060160008b8152602001908152602001600020846040518060c00160405290816000820180546134eb90614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461351790614bfe565b80156135645780601f1061353957610100808354040283529160200191613564565b820191906000526020600020905b81548152906001019060200180831161354757829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509450836040518060c001604052908160008201805461361a90614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461364690614bfe565b80156136935780601f1061366857610100808354040283529160200191613693565b820191906000526020600020905b81548152906001019060200180831161367657829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509350826040518060c001604052908160008201805461374990614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461377590614bfe565b80156137c25780601f10613797576101008083540402835291602001916137c2565b820191906000526020600020905b8154815290600101906020018083116137a557829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509250816040518060c001604052908160008201805461387890614bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546138a490614bfe565b80156138f15780601f106138c6576101008083540402835291602001916138f1565b820191906000526020600020905b8154815290600101906020018083116138d457829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509150806040518060c00160405290816000820180546139a790614bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546139d390614bfe565b8015613a205780601f106139f557610100808354040283529160200191613a20565b820191906000526020600020905b815481529060010190602001808311613a0357829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509050945094509450945094509550955095509550959050565b828054613add90614bfe565b90600052602060002090601f016020900481019282613aff5760008555613b46565b82601f10613b1857805160ff1916838001178555613b46565b82800160010185558215613b46579182015b82811115613b45578251825591602001919060010190613b2a565b5b509050613b539190613cba565b5090565b6040518060c0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000151581525090565b6040518060a0016040528060608152602001606081526020016060815260200160608152602001606081525090565b604051806060016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525090565b60405180610100016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b6040518060c0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000151581525090565b5b80821115613cd3576000816000905550600101613cbb565b5090565b600081359050613ce681614d26565b92915050565b600081359050613cfb81614d3d565b92915050565b600081519050613d1081614d3d565b92915050565b60008083601f840112613d2857600080fd5b8235905067ffffffffffffffff811115613d4157600080fd5b602083019150836001820283011115613d5957600080fd5b9250929050565b600081359050613d6f81614d54565b92915050565b600081519050613d8481614d54565b92915050565b600060208284031215613d9c57600080fd5b6000613daa84828501613cd7565b91505092915050565b600060208284031215613dc557600080fd5b6000613dd384828501613d01565b91505092915050565b60008060208385031215613def57600080fd5b600083013567ffffffffffffffff811115613e0957600080fd5b613e1585828601613d16565b92509250509250929050565b60008060008060408587031215613e3757600080fd5b600085013567ffffffffffffffff811115613e5157600080fd5b613e5d87828801613d16565b9450945050602085013567ffffffffffffffff811115613e7c57600080fd5b613e8887828801613d16565b925092505092959194509250565b60008060008060608587031215613eac57600080fd5b600085013567ffffffffffffffff811115613ec657600080fd5b613ed287828801613d16565b94509450506020613ee587828801613d60565b9250506040613ef687828801613cec565b91505092959194509250565b600060208284031215613f1457600080fd5b6000613f2284828501613d60565b91505092915050565b600060208284031215613f3d57600080fd5b6000613f4b84828501613d75565b91505092915050565b60008060408385031215613f6757600080fd5b6000613f7585828601613d60565b9250506020613f8685828601613cd7565b9150509250929050565b60008060408385031215613fa357600080fd5b6000613fb185828601613d60565b9250506020613fc285828601613cec565b9150509250929050565b600080600080600060a08688031215613fe457600080fd5b6000613ff288828901613d60565b955050602061400388828901613d60565b945050604061401488828901613d60565b935050606061402588828901613d60565b925050608061403688828901613d60565b9150509295509295909350565b600061404f8383614546565b60208301905092915050565b61406481614b5d565b82525050565b61407381614b5d565b82525050565b61408281614b5d565b82525050565b61409961409482614b5d565b614c30565b82525050565b60006140aa82614aeb565b6140b48185614b0e565b93506140bf83614adb565b8060005b838110156140f05781516140d78882614043565b97506140e283614b01565b9250506001810190506140c3565b5085935050505092915050565b61410681614b6f565b82525050565b61411581614b6f565b82525050565b61412481614b6f565b82525050565b61413b61413682614b7b565b614c42565b82525050565b600061414d8385614b30565b935061415a838584614bbc565b61416383614c8d565b840190509392505050565b600061417a8385614b41565b9350614187838584614bbc565b61419083614c8d565b840190509392505050565b60006141a78385614b52565b93506141b4838584614bbc565b82840190509392505050565b60006141cb82614af6565b6141d58185614b1f565b93506141e5818560208601614bcb565b6141ee81614c8d565b840191505092915050565b600061420482614af6565b61420e8185614b30565b935061421e818560208601614bcb565b61422781614c8d565b840191505092915050565b600061423f600383614b30565b915061424a82614cab565b602082019050919050565b6000614262600383614b30565b915061426d82614cd4565b602082019050919050565b6000614285600383614b30565b915061429082614cfd565b602082019050919050565b600060608301600083015184820360008601526142b882826141c0565b91505060208301516142cd602086018261405b565b5060408301516142e060408601826140fd565b508091505092915050565b8082525050565b600060a083016000830151848203600086015261430f828261409f565b91505060208301518482036020860152614329828261409f565b91505060408301518482036040860152614343828261409f565b9150506060830151848203606086015261435d828261409f565b91505060808301518482036080860152614377828261409f565b9150508091505092915050565b600060c08301600083015184820360008601526143a182826141c0565b91505060208301516143b6602086018261405b565b5060408301516143c96040860182614546565b5060608301516143dc6060860182614546565b5060808301516143ef6080860182614546565b5060a083015161440260a08601826140fd565b508091505092915050565b600061010083016000830151848203600086015261442b82826141c0565b9150506020830151614440602086018261405b565b50604083015161445360408601826140fd565b5060608301516144666060860182614546565b5060808301516144796080860182614546565b5060a083015161448c60a0860182614546565b5060c083015161449f60c0860182614546565b5060e08301516144b260e08601826140fd565b508091505092915050565b600060c08301600083015184820360008601526144da82826141c0565b91505060208301516144ef602086018261405b565b5060408301516145026040860182614546565b5060608301516145156060860182614546565b5060808301516145286080860182614546565b5060a083015161453b60a08601826140fd565b508091505092915050565b61454f81614ba5565b82525050565b61455e81614ba5565b82525050565b61456d81614ba5565b82525050565b61457c81614baf565b82525050565b600061458e8285614088565b60148201915061459e828461412a565b6020820191508190509392505050565b60006145bb82848661419b565b91508190509392505050565b60006020820190506145dc600083018461406a565b92915050565b60006020820190506145f7600083018461410c565b92915050565b60006020820190508181036000830152614618818486614141565b90509392505050565b6000606082019050818103600083015261463c818688614141565b905061464b6020830185614555565b614658604083018461410c565b95945050505050565b6000602082019050818103600083015261467b81846141f9565b905092915050565b6000602082019050818103600083015261469c81614232565b9050919050565b600060208201905081810360008301526146bc81614255565b9050919050565b600060208201905081810360008301526146dc81614278565b9050919050565b600060208201905081810360008301526146fd818461429b565b905092915050565b600060a082019050818103600083015261471f818861429b565b90508181036020830152614733818761429b565b90508181036040830152614747818661429b565b9050818103606083015261475b818561429b565b9050818103608083015261476f818461429b565b90509695505050505050565b600060408201905061479060008301866142eb565b81810360208301526147a381848661416e565b9050949350505050565b60006080820190506147c260008301886142eb565b81810360208301526147d581868861416e565b90506147e46040830185614564565b6147f1606083018461411b565b9695505050505050565b600060408201905061481060008301856142eb565b61481d6020830184614564565b9392505050565b600060608201905061483960008301866142eb565b6148466020830185614564565b6148536040830184614079565b949350505050565b600060608201905061487060008301866142eb565b61487d6020830185614564565b61488a604083018461411b565b949350505050565b600060208201905081810360008301526148ac81846142f2565b905092915050565b600060208201905081810360008301526148ce8184614384565b905092915050565b600060a08201905081810360008301526148f08188614384565b905081810360208301526149048187614384565b905081810360408301526149188186614384565b9050818103606083015261492c8185614384565b905081810360808301526149408184614384565b90509695505050505050565b60006020820190508181036000830152614966818461440d565b905092915050565b600060a0820190508181036000830152614988818861440d565b9050818103602083015261499c818761440d565b905081810360408301526149b0818661440d565b905081810360608301526149c4818561440d565b905081810360808301526149d8818461440d565b90509695505050505050565b600060208201905081810360008301526149fe81846144bd565b905092915050565b600060a0820190508181036000830152614a2081886144bd565b90508181036020830152614a3481876144bd565b90508181036040830152614a4881866144bd565b90508181036060830152614a5c81856144bd565b90508181036080830152614a7081846144bd565b90509695505050505050565b6000602082019050614a916000830184614555565b92915050565b6000604082019050614aac6000830185614555565b614ab9602083018461410c565b9392505050565b6000602082019050614ad56000830184614573565b92915050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000614b6882614b85565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015614be9578082015181840152602081019050614bce565b83811115614bf8576000848401525b50505050565b60006002820490506001821680614c1657607f821691505b60208210811415614c2a57614c29614c5e565b5b50919050565b6000614c3b82614c4c565b9050919050565b6000819050919050565b6000614c5782614c9e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f3930330000000000000000000000000000000000000000000000000000000000600082015250565b7f3930310000000000000000000000000000000000000000000000000000000000600082015250565b7f3930320000000000000000000000000000000000000000000000000000000000600082015250565b614d2f81614b5d565b8114614d3a57600080fd5b50565b614d4681614b6f565b8114614d5157600080fd5b50565b614d5d81614ba5565b8114614d6857600080fd5b5056fea26469706673582212202f1b9400a5fe72a5c73e25cbf9db7a03659e985b1369e66782e4113020bbb85964736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101e55760003560e01c806367f789e51161010f578063a5513a18116100a2578063d4865bed11610071578063d4865bed14610682578063d7995076146106b6578063edbc9759146106e6578063fef7e50b14610704576101e5565b8063a5513a18146105c2578063a972d10b146105f2578063c42bca8514610622578063c9ddacbc14610652576101e5565b806374700218116100de57806374700218146104fe57806380e11be914610532578063899e456c14610562578063a053383814610592576101e5565b806367f789e51461046257806371110f391461049257806371414ed3146104b05780637331210c146104e0576101e5565b806344443dea116101875780635e06f50f116101565780635e06f50f1461039e5780635f90dec4146103ce5780636127d22d1461040257806364894bb614610432576101e5565b806344443dea146102f05780634d8b10a914610320578063548c0ef41461035057806356cf535814610380576101e5565b80631d8c8971116101c35780631d8c8971146102545780632b60c8bb1461028457806336ffa905146102b45780634173b417146102d2576101e5565b80630e0d7f07146101ea5780630fba4ca11461021a5780631d14384814610236575b600080fd5b61020460048036038101906101ff9190613d8a565b610738565b60405161021191906145e2565b60405180910390f35b610234600480360381019061022f9190613ddc565b610796565b005b61023e6108c5565b60405161024b91906145c7565b60405180910390f35b61026e60048036038101906102699190613e21565b6108e9565b60405161027b91906145e2565b60405180910390f35b61029e60048036038101906102999190613f02565b610a6c565b6040516102ab91906148b4565b60405180910390f35b6102bc610bbc565b6040516102c99190614892565b60405180910390f35b6102da610dce565b6040516102e79190614661565b60405180910390f35b61030a60048036038101906103059190613f02565b610e63565b60405161031791906146e3565b60405180910390f35b61033a60048036038101906103359190613f54565b610f96565b60405161034791906145e2565b60405180910390f35b61036a60048036038101906103659190613d8a565b61102e565b6040516103779190614ac0565b60405180910390f35b610388611087565b6040516103959190614a7c565b60405180910390f35b6103b860048036038101906103b39190613f54565b611094565b6040516103c591906145e2565b60405180910390f35b6103e860048036038101906103e39190613fcc565b61112c565b6040516103f99594939291906148d6565b60405180910390f35b61041c60048036038101906104179190613f02565b6117bf565b60405161042991906145e2565b60405180910390f35b61044c60048036038101906104479190613f54565b6118a2565b60405161045991906145e2565b60405180910390f35b61047c60048036038101906104779190613ddc565b61193a565b6040516104899190614a7c565b60405180910390f35b61049a611ab6565b6040516104a79190614a7c565b60405180910390f35b6104ca60048036038101906104c59190613e96565b611ac3565b6040516104d79190614a7c565b60405180910390f35b6104e8611c49565b6040516104f59190614a7c565b60405180910390f35b61051860048036038101906105139190613fcc565b611c56565b60405161052995949392919061496e565b60405180910390f35b61054c60048036038101906105479190613f02565b6123ac565b60405161055991906145e2565b60405180910390f35b61057c60048036038101906105779190613ddc565b61248f565b6040516105899190614a7c565b60405180910390f35b6105ac60048036038101906105a79190613f90565b61260b565b6040516105b991906145e2565b60405180910390f35b6105dc60048036038101906105d79190613f02565b612787565b6040516105e991906145e2565b60405180910390f35b61060c60048036038101906106079190613f90565b61286a565b60405161061991906145e2565b60405180910390f35b61063c60048036038101906106379190613f90565b6129e6565b60405161064991906145e2565b60405180910390f35b61066c60048036038101906106679190613f02565b612b62565b60405161067991906149e4565b60405180910390f35b61069c60048036038101906106979190613fcc565b612cb3565b6040516106ad959493929190614705565b60405180910390f35b6106d060048036038101906106cb9190613f02565b6132b5565b6040516106dd919061494c565b60405180910390f35b6106ee61342c565b6040516106fb9190614a7c565b60405180910390f35b61071e60048036038101906107199190613fcc565b613439565b60405161072f959493929190614a06565b60405180910390f35b600080826001800154604051602001610752929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16915050919050565b600180015482826040516020016107ae9291906145ae565b6040516020818303038152906040528051906020012014610804576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fb906146c3565b60405180910390fd5b600033600180015460405160200161081d929190614582565b6040516020818303038152906040528051906020012090506040518060200160405280600115158152506003600083815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055509050503373ffffffffffffffffffffffffffffffffffffffff167f79229b212fa3ea547fb5e5b66090cf250d442b12a51854a030f3b796d528134e60405160405180910390a2505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461097a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610971906146a3565b60405180910390fd5b604051806040016040528086868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200184846040516020016109e29291906145ae565b6040516020818303038152906040528051906020012081525060016000820151816000019080519060200190610a19929190613ad1565b50602082015181600101559050507f9c1e1a17a78053ad78b3801837ad5e515d429987252f2e1371b7b50fa8ff8bec8585604051610a589291906145fd565b60405180910390a160019050949350505050565b610a74613b57565b6004800160008381526020019081526020016000206040518060c0016040529081600082018054610aa490614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad090614bfe565b8015610b1d5780601f10610af257610100808354040283529160200191610b1d565b820191906000526020600020905b815481529060010190602001808311610b0057829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509050919050565b610bc4613ba5565b600460090160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201805480602002602001604051908101604052809291908181526020018280548015610c6057602002820191906000526020600020905b815481526020019060010190808311610c4c575b5050505050815260200160018201805480602002602001604051908101604052809291908181526020018280548015610cb857602002820191906000526020600020905b815481526020019060010190808311610ca4575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610d1057602002820191906000526020600020905b815481526020019060010190808311610cfc575b5050505050815260200160038201805480602002602001604051908101604052809291908181526020018280548015610d6857602002820191906000526020600020905b815481526020019060010190808311610d54575b5050505050815260200160048201805480602002602001604051908101604052809291908181526020018280548015610dc057602002820191906000526020600020905b815481526020019060010190808311610dac575b505050505081525050905090565b606060016000018054610de090614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054610e0c90614bfe565b8015610e595780601f10610e2e57610100808354040283529160200191610e59565b820191906000526020600020905b815481529060010190602001808311610e3c57829003601f168201915b5050505050905090565b610e6b613bd4565b60046002016000838152602001908152602001600020604051806060016040529081600082018054610e9c90614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec890614bfe565b8015610f155780601f10610eea57610100808354040283529160200191610f15565b820191906000526020600020905b815481529060010190602001808311610ef857829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff1615151515815250509050919050565b6000600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63fd3e4768909185856040518463ffffffff1660e01b8152600401610fd693929190614824565b60206040518083038186803b158015610fee57600080fd5b505af4158015611002573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110269190613db3565b905092915050565b6000600460010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000600460030154905090565b6000600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__632ca650b2909185856040518463ffffffff1660e01b81526004016110d493929190614824565b60206040518083038186803b1580156110ec57600080fd5b505af4158015611100573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111249190613db3565b905092915050565b611134613b57565b61113c613b57565b611144613b57565b61114c613b57565b611154613b57565b6004800160008b81526020019081526020016000206004800160008b81526020019081526020016000206004800160008b81526020019081526020016000206004800160008b81526020019081526020016000206004800160008b8152602001908152602001600020846040518060c00160405290816000820180546111d990614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461120590614bfe565b80156112525780601f1061122757610100808354040283529160200191611252565b820191906000526020600020905b81548152906001019060200180831161123557829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509450836040518060c001604052908160008201805461130890614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461133490614bfe565b80156113815780601f1061135657610100808354040283529160200191611381565b820191906000526020600020905b81548152906001019060200180831161136457829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509350826040518060c001604052908160008201805461143790614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461146390614bfe565b80156114b05780601f10611485576101008083540402835291602001916114b0565b820191906000526020600020905b81548152906001019060200180831161149357829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509250816040518060c001604052908160008201805461156690614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461159290614bfe565b80156115df5780601f106115b4576101008083540402835291602001916115df565b820191906000526020600020905b8154815290600101906020018083116115c257829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509150806040518060c001604052908160008201805461169590614bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546116c190614bfe565b801561170e5780601f106116e35761010080835404028352916020019161170e565b820191906000526020600020905b8154815290600101906020018083116116f157829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509050945094509450945094509550955095509550959050565b60003373ffffffffffffffffffffffffffffffffffffffff167f111d8408ae92d0b78f4d97697012bcdee255bb0e7615f3a011a759d4f80abfed836040516118079190614a7c565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__6314e4f3319091846040518363ffffffff1660e01b815260040161184b9291906147fb565b60206040518083038186803b15801561186357600080fd5b505af4158015611877573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189b9190613db3565b9050919050565b6000600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63bd1d2c31909185856040518463ffffffff1660e01b81526004016118e293929190614824565b60206040518083038186803b1580156118fa57600080fd5b505af415801561190e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119329190613db3565b905092915050565b600080336001800154604051602001611954929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff166119cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c690614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f282a70c1093742e40fc04b5fcdaf156b8f7dc0f4daccc210e2826ab21ef52e2f8585604051611a179291906145fd565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63f3a25014909186866040518463ffffffff1660e01b8152600401611a5d9392919061477b565b60206040518083038186803b158015611a7557600080fd5b505af4158015611a89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aad9190613f2b565b91505092915050565b6000600460070154905090565b600080336001800154604051602001611add929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16611b58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b4f90614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f67696076dd0093e34ea851b9556ffdb425ef250da860120eab4183b76e7cb2b087878787604051611ba49493929190614621565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63dd54839e9091888888886040518663ffffffff1660e01b8152600401611bee9594939291906147ad565b60206040518083038186803b158015611c0657600080fd5b505af4158015611c1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3e9190613f2b565b915050949350505050565b6000600460050154905090565b611c5e613c0d565b611c66613c0d565b611c6e613c0d565b611c76613c0d565b611c7e613c0d565b6004600a0160008b81526020019081526020016000206004600a0160008b81526020019081526020016000206004600a0160008b81526020019081526020016000206004600a0160008b81526020019081526020016000206004600a0160008b81526020019081526020016000208460405180610100016040529081600082018054611d0990614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054611d3590614bfe565b8015611d825780601f10611d5757610100808354040283529160200191611d82565b820191906000526020600020905b815481529060010190602001808311611d6557829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16151515158152505094508360405180610100016040529081600082018054611e5e90614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054611e8a90614bfe565b8015611ed75780601f10611eac57610100808354040283529160200191611ed7565b820191906000526020600020905b815481529060010190602001808311611eba57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16151515158152505093508260405180610100016040529081600082018054611fb390614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054611fdf90614bfe565b801561202c5780601f106120015761010080835404028352916020019161202c565b820191906000526020600020905b81548152906001019060200180831161200f57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1615151515815250509250816040518061010001604052908160008201805461210890614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461213490614bfe565b80156121815780601f1061215657610100808354040283529160200191612181565b820191906000526020600020905b81548152906001019060200180831161216457829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1615151515815250509150806040518061010001604052908160008201805461225d90614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461228990614bfe565b80156122d65780601f106122ab576101008083540402835291602001916122d6565b820191906000526020600020905b8154815290600101906020018083116122b957829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1615151515815250509050945094509450945094509550955095509550959050565b60003373ffffffffffffffffffffffffffffffffffffffff167fd1b02b10475a07f1767fa17ac24c11cb86236e52df9fbc8e2cd2662f470be9ac836040516123f49190614a7c565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__637ab37f2a9091846040518363ffffffff1660e01b81526004016124389291906147fb565b60206040518083038186803b15801561245057600080fd5b505af4158015612464573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124889190613db3565b9050919050565b6000803360018001546040516020016124a9929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16612524576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161251b90614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe249461360e6eb5f99fc32e18970ea7e714fe4a6ae1bb2b802109ce1897551a3858560405161256c9291906145fd565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63fe59ad13909186866040518463ffffffff1660e01b81526004016125b29392919061477b565b60206040518083038186803b1580156125ca57600080fd5b505af41580156125de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126029190613f2b565b91505092915050565b600080336001800154604051602001612625929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff166126a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161269790614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f1a53dbc4afb4355dae75da1c738d7f9da8d47895ca9e52298a2f13edef1eeb9a85856040516126e8929190614a97565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63f80e5ae4909186866040518463ffffffff1660e01b815260040161272e9392919061485b565b60206040518083038186803b15801561274657600080fd5b505af415801561275a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277e9190613db3565b91505092915050565b60003373ffffffffffffffffffffffffffffffffffffffff167f537cd2e3949e391193079a5700552e511e26e8feac335a6cdc444049ab35a90f836040516127cf9190614a7c565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63c824d8919091846040518363ffffffff1660e01b81526004016128139291906147fb565b60206040518083038186803b15801561282b57600080fd5b505af415801561283f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128639190613db3565b9050919050565b600080336001800154604051602001612884929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff166128ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128f690614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe17beb8487c3e79865827ae14ef940fe858d8dd153cc7a4b25b041e2895e82f48585604051612947929190614a97565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63b943b0c1909186866040518463ffffffff1660e01b815260040161298d9392919061485b565b60206040518083038186803b1580156129a557600080fd5b505af41580156129b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129dd9190613db3565b91505092915050565b600080336001800154604051602001612a00929190614582565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16612a7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a7290614683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167ff98e7718ee4616550f38594da7703cb4a26dd80936283951d7741e86553e30868585604051612ac3929190614a97565b60405180910390a2600473__$284e1ffe9f2937f5412f1e8a04db4dc613$__63c6ce9bfd909186866040518463ffffffff1660e01b8152600401612b099392919061485b565b60206040518083038186803b158015612b2157600080fd5b505af4158015612b35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b599190613db3565b91505092915050565b612b6a613c6c565b600460060160008381526020019081526020016000206040518060c0016040529081600082018054612b9b90614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054612bc790614bfe565b8015612c145780601f10612be957610100808354040283529160200191612c14565b820191906000526020600020905b815481529060010190602001808311612bf757829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509050919050565b612cbb613bd4565b612cc3613bd4565b612ccb613bd4565b612cd3613bd4565b612cdb613bd4565b600460020160008b8152602001908152602001600020600460020160008b8152602001908152602001600020600460020160008b8152602001908152602001600020600460020160008b8152602001908152602001600020600460020160008b815260200190815260200160002084604051806060016040529081600082018054612d6590614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054612d9190614bfe565b8015612dde5780601f10612db357610100808354040283529160200191612dde565b820191906000526020600020905b815481529060010190602001808311612dc157829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff161515151581525050945083604051806060016040529081600082018054612e7690614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054612ea290614bfe565b8015612eef5780601f10612ec457610100808354040283529160200191612eef565b820191906000526020600020905b815481529060010190602001808311612ed257829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff161515151581525050935082604051806060016040529081600082018054612f8790614bfe565b80601f0160208091040260200160405190810160405280929190818152602001828054612fb390614bfe565b80156130005780601f10612fd557610100808354040283529160200191613000565b820191906000526020600020905b815481529060010190602001808311612fe357829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152505092508160405180606001604052908160008201805461309890614bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546130c490614bfe565b80156131115780601f106130e657610100808354040283529160200191613111565b820191906000526020600020905b8154815290600101906020018083116130f457829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff1615151515815250509150806040518060600160405290816000820180546131a990614bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546131d590614bfe565b80156132225780601f106131f757610100808354040283529160200191613222565b820191906000526020600020905b81548152906001019060200180831161320557829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff1615151515815250509050945094509450945094509550955095509550959050565b6132bd613c0d565b6004600a016000838152602001908152602001600020604051806101000160405290816000820180546132ef90614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461331b90614bfe565b80156133685780601f1061333d57610100808354040283529160200191613368565b820191906000526020600020905b81548152906001019060200180831161334b57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff16151515158152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1615151515815250509050919050565b60006004600b0154905090565b613441613c6c565b613449613c6c565b613451613c6c565b613459613c6c565b613461613c6c565b600460060160008b8152602001908152602001600020600460060160008b8152602001908152602001600020600460060160008b8152602001908152602001600020600460060160008b8152602001908152602001600020600460060160008b8152602001908152602001600020846040518060c00160405290816000820180546134eb90614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461351790614bfe565b80156135645780601f1061353957610100808354040283529160200191613564565b820191906000526020600020905b81548152906001019060200180831161354757829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509450836040518060c001604052908160008201805461361a90614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461364690614bfe565b80156136935780601f1061366857610100808354040283529160200191613693565b820191906000526020600020905b81548152906001019060200180831161367657829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509350826040518060c001604052908160008201805461374990614bfe565b80601f016020809104026020016040519081016040528092919081815260200182805461377590614bfe565b80156137c25780601f10613797576101008083540402835291602001916137c2565b820191906000526020600020905b8154815290600101906020018083116137a557829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509250816040518060c001604052908160008201805461387890614bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546138a490614bfe565b80156138f15780601f106138c6576101008083540402835291602001916138f1565b820191906000526020600020905b8154815290600101906020018083116138d457829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509150806040518060c00160405290816000820180546139a790614bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546139d390614bfe565b8015613a205780601f106139f557610100808354040283529160200191613a20565b820191906000526020600020905b815481529060010190602001808311613a0357829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff1615151515815250509050945094509450945094509550955095509550959050565b828054613add90614bfe565b90600052602060002090601f016020900481019282613aff5760008555613b46565b82601f10613b1857805160ff1916838001178555613b46565b82800160010185558215613b46579182015b82811115613b45578251825591602001919060010190613b2a565b5b509050613b539190613cba565b5090565b6040518060c0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000151581525090565b6040518060a0016040528060608152602001606081526020016060815260200160608152602001606081525090565b604051806060016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525090565b60405180610100016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b6040518060c0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000151581525090565b5b80821115613cd3576000816000905550600101613cbb565b5090565b600081359050613ce681614d26565b92915050565b600081359050613cfb81614d3d565b92915050565b600081519050613d1081614d3d565b92915050565b60008083601f840112613d2857600080fd5b8235905067ffffffffffffffff811115613d4157600080fd5b602083019150836001820283011115613d5957600080fd5b9250929050565b600081359050613d6f81614d54565b92915050565b600081519050613d8481614d54565b92915050565b600060208284031215613d9c57600080fd5b6000613daa84828501613cd7565b91505092915050565b600060208284031215613dc557600080fd5b6000613dd384828501613d01565b91505092915050565b60008060208385031215613def57600080fd5b600083013567ffffffffffffffff811115613e0957600080fd5b613e1585828601613d16565b92509250509250929050565b60008060008060408587031215613e3757600080fd5b600085013567ffffffffffffffff811115613e5157600080fd5b613e5d87828801613d16565b9450945050602085013567ffffffffffffffff811115613e7c57600080fd5b613e8887828801613d16565b925092505092959194509250565b60008060008060608587031215613eac57600080fd5b600085013567ffffffffffffffff811115613ec657600080fd5b613ed287828801613d16565b94509450506020613ee587828801613d60565b9250506040613ef687828801613cec565b91505092959194509250565b600060208284031215613f1457600080fd5b6000613f2284828501613d60565b91505092915050565b600060208284031215613f3d57600080fd5b6000613f4b84828501613d75565b91505092915050565b60008060408385031215613f6757600080fd5b6000613f7585828601613d60565b9250506020613f8685828601613cd7565b9150509250929050565b60008060408385031215613fa357600080fd5b6000613fb185828601613d60565b9250506020613fc285828601613cec565b9150509250929050565b600080600080600060a08688031215613fe457600080fd5b6000613ff288828901613d60565b955050602061400388828901613d60565b945050604061401488828901613d60565b935050606061402588828901613d60565b925050608061403688828901613d60565b9150509295509295909350565b600061404f8383614546565b60208301905092915050565b61406481614b5d565b82525050565b61407381614b5d565b82525050565b61408281614b5d565b82525050565b61409961409482614b5d565b614c30565b82525050565b60006140aa82614aeb565b6140b48185614b0e565b93506140bf83614adb565b8060005b838110156140f05781516140d78882614043565b97506140e283614b01565b9250506001810190506140c3565b5085935050505092915050565b61410681614b6f565b82525050565b61411581614b6f565b82525050565b61412481614b6f565b82525050565b61413b61413682614b7b565b614c42565b82525050565b600061414d8385614b30565b935061415a838584614bbc565b61416383614c8d565b840190509392505050565b600061417a8385614b41565b9350614187838584614bbc565b61419083614c8d565b840190509392505050565b60006141a78385614b52565b93506141b4838584614bbc565b82840190509392505050565b60006141cb82614af6565b6141d58185614b1f565b93506141e5818560208601614bcb565b6141ee81614c8d565b840191505092915050565b600061420482614af6565b61420e8185614b30565b935061421e818560208601614bcb565b61422781614c8d565b840191505092915050565b600061423f600383614b30565b915061424a82614cab565b602082019050919050565b6000614262600383614b30565b915061426d82614cd4565b602082019050919050565b6000614285600383614b30565b915061429082614cfd565b602082019050919050565b600060608301600083015184820360008601526142b882826141c0565b91505060208301516142cd602086018261405b565b5060408301516142e060408601826140fd565b508091505092915050565b8082525050565b600060a083016000830151848203600086015261430f828261409f565b91505060208301518482036020860152614329828261409f565b91505060408301518482036040860152614343828261409f565b9150506060830151848203606086015261435d828261409f565b91505060808301518482036080860152614377828261409f565b9150508091505092915050565b600060c08301600083015184820360008601526143a182826141c0565b91505060208301516143b6602086018261405b565b5060408301516143c96040860182614546565b5060608301516143dc6060860182614546565b5060808301516143ef6080860182614546565b5060a083015161440260a08601826140fd565b508091505092915050565b600061010083016000830151848203600086015261442b82826141c0565b9150506020830151614440602086018261405b565b50604083015161445360408601826140fd565b5060608301516144666060860182614546565b5060808301516144796080860182614546565b5060a083015161448c60a0860182614546565b5060c083015161449f60c0860182614546565b5060e08301516144b260e08601826140fd565b508091505092915050565b600060c08301600083015184820360008601526144da82826141c0565b91505060208301516144ef602086018261405b565b5060408301516145026040860182614546565b5060608301516145156060860182614546565b5060808301516145286080860182614546565b5060a083015161453b60a08601826140fd565b508091505092915050565b61454f81614ba5565b82525050565b61455e81614ba5565b82525050565b61456d81614ba5565b82525050565b61457c81614baf565b82525050565b600061458e8285614088565b60148201915061459e828461412a565b6020820191508190509392505050565b60006145bb82848661419b565b91508190509392505050565b60006020820190506145dc600083018461406a565b92915050565b60006020820190506145f7600083018461410c565b92915050565b60006020820190508181036000830152614618818486614141565b90509392505050565b6000606082019050818103600083015261463c818688614141565b905061464b6020830185614555565b614658604083018461410c565b95945050505050565b6000602082019050818103600083015261467b81846141f9565b905092915050565b6000602082019050818103600083015261469c81614232565b9050919050565b600060208201905081810360008301526146bc81614255565b9050919050565b600060208201905081810360008301526146dc81614278565b9050919050565b600060208201905081810360008301526146fd818461429b565b905092915050565b600060a082019050818103600083015261471f818861429b565b90508181036020830152614733818761429b565b90508181036040830152614747818661429b565b9050818103606083015261475b818561429b565b9050818103608083015261476f818461429b565b90509695505050505050565b600060408201905061479060008301866142eb565b81810360208301526147a381848661416e565b9050949350505050565b60006080820190506147c260008301886142eb565b81810360208301526147d581868861416e565b90506147e46040830185614564565b6147f1606083018461411b565b9695505050505050565b600060408201905061481060008301856142eb565b61481d6020830184614564565b9392505050565b600060608201905061483960008301866142eb565b6148466020830185614564565b6148536040830184614079565b949350505050565b600060608201905061487060008301866142eb565b61487d6020830185614564565b61488a604083018461411b565b949350505050565b600060208201905081810360008301526148ac81846142f2565b905092915050565b600060208201905081810360008301526148ce8184614384565b905092915050565b600060a08201905081810360008301526148f08188614384565b905081810360208301526149048187614384565b905081810360408301526149188186614384565b9050818103606083015261492c8185614384565b905081810360808301526149408184614384565b90509695505050505050565b60006020820190508181036000830152614966818461440d565b905092915050565b600060a0820190508181036000830152614988818861440d565b9050818103602083015261499c818761440d565b905081810360408301526149b0818661440d565b905081810360608301526149c4818561440d565b905081810360808301526149d8818461440d565b90509695505050505050565b600060208201905081810360008301526149fe81846144bd565b905092915050565b600060a0820190508181036000830152614a2081886144bd565b90508181036020830152614a3481876144bd565b90508181036040830152614a4881866144bd565b90508181036060830152614a5c81856144bd565b90508181036080830152614a7081846144bd565b90509695505050505050565b6000602082019050614a916000830184614555565b92915050565b6000604082019050614aac6000830185614555565b614ab9602083018461410c565b9392505050565b6000602082019050614ad56000830184614573565b92915050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000614b6882614b85565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015614be9578082015181840152602081019050614bce565b83811115614bf8576000848401525b50505050565b60006002820490506001821680614c1657607f821691505b60208210811415614c2a57614c29614c5e565b5b50919050565b6000614c3b82614c4c565b9050919050565b6000819050919050565b6000614c5782614c9e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f3930330000000000000000000000000000000000000000000000000000000000600082015250565b7f3930310000000000000000000000000000000000000000000000000000000000600082015250565b7f3930320000000000000000000000000000000000000000000000000000000000600082015250565b614d2f81614b5d565b8114614d3a57600080fd5b50565b614d4681614b6f565b8114614d5157600080fd5b50565b614d5d81614ba5565b8114614d6857600080fd5b5056fea26469706673582212202f1b9400a5fe72a5c73e25cbf9db7a03659e985b1369e66782e4113020bbb85964736f6c63430008040033",
  "linkReferences": {
    "contracts/libraries/CatalogDaoLib.sol": {
      "CatalogDaoLib": [
        {
          "length": 20,
          "start": 4343
        },
        {
          "length": 20,
          "start": 4597
        },
        {
          "length": 20,
          "start": 6510
        },
        {
          "length": 20,
          "start": 6659
        },
        {
          "length": 20,
          "start": 7038
        },
        {
          "length": 20,
          "start": 7435
        },
        {
          "length": 20,
          "start": 9563
        },
        {
          "length": 20,
          "start": 9939
        },
        {
          "length": 20,
          "start": 10319
        },
        {
          "length": 20,
          "start": 10550
        },
        {
          "length": 20,
          "start": 10926
        },
        {
          "length": 20,
          "start": 11306
        }
      ]
    }
  },
  "deployedLinkReferences": {
    "contracts/libraries/CatalogDaoLib.sol": {
      "CatalogDaoLib": [
        {
          "length": 20,
          "start": 3996
        },
        {
          "length": 20,
          "start": 4250
        },
        {
          "length": 20,
          "start": 6163
        },
        {
          "length": 20,
          "start": 6312
        },
        {
          "length": 20,
          "start": 6691
        },
        {
          "length": 20,
          "start": 7088
        },
        {
          "length": 20,
          "start": 9216
        },
        {
          "length": 20,
          "start": 9592
        },
        {
          "length": 20,
          "start": 9972
        },
        {
          "length": 20,
          "start": 10203
        },
        {
          "length": 20,
          "start": 10579
        },
        {
          "length": 20,
          "start": 10959
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
