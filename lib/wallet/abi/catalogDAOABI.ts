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
          "name": "_index_",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "likedIt",
          "type": "bool"
        }
      ],
      "name": "expressOpinion",
      "outputs": [
        {
          "components": [
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
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dislikes",
              "type": "uint256"
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
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dislikes",
              "type": "uint256"
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
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dislikes",
              "type": "uint256"
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
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dislikes",
              "type": "uint256"
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
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dislikes",
              "type": "uint256"
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
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dislikes",
              "type": "uint256"
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
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dislikes",
              "type": "uint256"
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
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dislikes",
              "type": "uint256"
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
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dislikes",
              "type": "uint256"
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
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620051f7380380620051f7833981016040819052620000349162000092565b600080546001600160a01b031990811633908117835580835260056020526040909220805460ff1916600a179055600493909355601680546001600160a01b03939093169284169290921790915560158054909216179055620000cf565b60008060408385031215620000a5578182fd5b825160208401519092506001600160a01b0381168114620000c4578182fd5b809150509250929050565b61511880620000df6000396000f3fe608060405234801561001057600080fd5b50600436106102ad5760003560e01c806364894bb61161017b578063a5513a18116100d8578063d79950761161008c578063edbc975911610071578063edbc975914610651578063fdedbe9514610659578063fef7e50b1461066c57600080fd5b8063d799507614610629578063ea614f541461064957600080fd5b8063c42bca85116100bd578063c42bca85146105d2578063c9ddacbc146105e5578063d4865bed1461060557600080fd5b8063a5513a18146105ac578063a972d10b146105bf57600080fd5b806380e11be91161012f57806394b535ec1161011457806394b535ec1461057357806397c3ccd8146105865780639e6371ba1461059957600080fd5b806380e11be91461054d578063899e456c1461056057600080fd5b806371414ed31161016057806371414ed31461050e5780637331210c14610521578063747002181461052957600080fd5b806364894bb6146104f357806371110f391461050657600080fd5b806336ffa90511610229578063548c0ef4116101dd5780635e06f50f116101c25780635e06f50f146104a95780635f90dec4146104bc5780636127d22d146104e057600080fd5b8063548c0ef41461046357806356cf5358146104a157600080fd5b80634173b4171161020e5780634173b4171461042857806344443dea1461043d5780634d8b10a91461045057600080fd5b806336ffa905146104005780634112fdd01461041557600080fd5b80631d143848116102805780632165d997116102655780632165d997146103ab5780632b60c8bb146103cb5780632f370ba3146103eb57600080fd5b80631d1438481461036d5780631d8c89711461039857600080fd5b806302a08328146102b25780630e0d7f07146102c95780630fba4ca1146103455780631aecf6a01461035a575b600080fd5b6004545b6040519081526020015b60405180910390f35b6103356102d73660046145d7565b6002546040516bffffffffffffffffffffffff19606084901b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000908152600390925290205460ff169392505050565b60405190151581526020016102c0565b61035861035336600461460f565b610690565b005b61033561036836600461490a565b6107a7565b600054610380906001600160a01b031681565b6040516001600160a01b0390911681526020016102c0565b6103356103a63660046146d2565b610986565b6103be6103b93660046148e6565b610ab8565b6040516102c09190614d22565b6103de6103d9366004614887565b610bd4565b6040516102c09190614eb5565b6103f3610d09565b6040516102c09190614c6e565b610408610e83565b6040516102c09190614e23565b610358610423366004614887565b611084565b6104306110c9565b6040516102c09190614d0f565b6103be61044b366004614887565b61115e565b61033561045e3660046148b7565b6112f5565b61048f6104713660046145d7565b6001600160a01b031660009081526005602052604090205460ff1690565b60405160ff90911681526020016102c0565b6007546102b6565b6103356104b73660046148b7565b6113aa565b6104cf6104ca36600461494b565b611413565b6040516102c0959493929190614ec8565b6103356104ee366004614887565b611a20565b6103356105013660046148b7565b611b5c565b600b546102b6565b6102b661051c36600461473b565b611bc5565b6009546102b6565b61053c61053736600461494b565b611da6565b6040516102c0959493929190614f3c565b61033561055b366004614887565b61249b565b6102b661056e36600461460f565b612598565b6102b661058136600461464f565b61276f565b6103586105943660046145d7565b612952565b6103586105a73660046145d7565b612a2b565b6103356105ba366004614887565b612aa9565b6103356105cd3660046148e6565b612b93565b6103356105e03660046148e6565b612d62565b6105f86105f3366004614887565b612ee5565b6040516102c09190614f9d565b61061861061336600461494b565b61308f565b6040516102c0959493929190614d35565b61063c610637366004614887565b61389c565b6040516102c09190614f29565b6103f3613a01565b600f546102b6565b610358610667366004614887565b613b72565b61067f61067a36600461494b565b613c0a565b6040516102c0959493929190614fb0565b6002546040516106a69084908490602001614c5e565b604051602081830303815290604052805190602001201461070e5760405162461bcd60e51b815260206004820152600360248201527f393032000000000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6002546040516bffffffffffffffffffffffff193360601b166020820152603481019190915260009060540160408051808303601f190181528282528051602091820120818401835260018452600081815260039092528282209351845460ff191690151517909355905191925033917f79229b212fa3ea547fb5e5b66090cf250d442b12a51854a030f3b796d528134e9190a2505050565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166108325760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b15801561087757600080fd5b505af115801561088b573d6000803e3d6000fd5b50506040805188815287151560208201523393507f1a53dbc4afb4355dae75da1c738d7f9da8d47895ca9e52298a2f13edef1eeb9a92500160405180910390a26040517f42877fb7000000000000000000000000000000000000000000000000000000008152600480820152602481018690528415156044820152831515606482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906342877fb79060840160206040518083038186803b15801561094557600080fd5b505af4158015610959573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097d91906145f3565b95945050505050565b600080546001600160a01b031633146109e15760405162461bcd60e51b815260206004820152600360248201527f39303100000000000000000000000000000000000000000000000000000000006044820152606401610705565b6040805160606020601f88018190040282018101835291810186815290918291908890889081908501838280828437600092019190915250505090825250604051602091820191610a36918791879101614c5e565b60408051601f19818403018152919052805160209182012090915281518051600192610a66928492910190614460565b50602082015181600101559050507f9c1e1a17a78053ad78b3801837ad5e515d429987252f2e1371b7b50fa8ff8bec8585604051610aa5929190614ccf565b60405180910390a1506001949350505050565b610b1f604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b6040517faffad6f200000000000000000000000000000000000000000000000000000000815260048082015260248101849052821515604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063affad6f29060640160006040518083038186803b158015610b9157600080fd5b505af4158015610ba5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bcd9190810190614798565b9392505050565b610c186040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b60008281526008602052604090819020815160c08101909252805482908290610c409061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6c9061506b565b8015610cb95780601f10610c8e57610100808354040283529160200191610cb9565b820191906000526020600020905b815481529060010190602001808311610c9c57829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040820152600382015460608201526004820154608082015260059091015460ff16151560a09091015292915050565b60606004600f01805480602002602001604051908101604052809291908181526020016000905b82821015610e7a57838290600052602060002090600702016040518061014001604052908160008201548152602001600182018054610d6e9061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9a9061506b565b8015610de75780601f10610dbc57610100808354040283529160200191610de7565b820191906000526020600020905b815481529060010190602001808311610dca57829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b8304811615156040850152600160a81b8304811615156060850152600160b01b909204821615156080840152600384015460a0840152600484015460c08401526005840154909116151560e0830152600690920154610100909101529082526001929092019101610d30565b50505050905090565b610eb56040518060a0016040528060608152602001606081526020016060815260200160608152602001606081525090565b336000908152600d60209081526040918290208251815460c09381028201840190945260a081018481529093919284928491840182828015610f1657602002820191906000526020600020905b815481526020019060010190808311610f02575b5050505050815260200160018201805480602002602001604051908101604052809291908181526020018280548015610f6e57602002820191906000526020600020905b815481526020019060010190808311610f5a575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610fc657602002820191906000526020600020905b815481526020019060010190808311610fb2575b505050505081526020016003820180548060200260200160405190810160405280929190818152602001828054801561101e57602002820191906000526020600020905b81548152602001906001019080831161100a575b505050505081526020016004820180548060200260200160405190810160405280929190818152602001828054801561107657602002820191906000526020600020905b815481526020019060010190808311611062575b505050505081525050905090565b6015546001600160a01b031633146110c45760405162461bcd60e51b815260206004820152600360248201526239333760e81b6044820152606401610705565b600455565b6060600160000180546110db9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546111079061506b565b80156111545780601f1061112957610100808354040283529160200191611154565b820191906000526020600020905b81548152906001019060200180831161113757829003601f168201915b5050505050905090565b6111c5604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b600082815260066020908152604091829020825161014081019093528054835260018101805491928401916111f99061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546112259061506b565b80156112725780601f1061124757610100808354040283529160200191611272565b820191906000526020600020905b81548152906001019060200180831161125557829003601f168201915b505050918352505060028201546001600160a01b038116602083015260ff600160a01b8204811615156040840152600160a81b8204811615156060840152600160b01b909104811615156080830152600383015460a0830152600483015460c0830152600583015416151560e08201526006909101546101009091015292915050565b6040517ffd3e4768000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063fd3e4768906064015b60206040518083038186803b15801561137257600080fd5b505af4158015611386573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcd91906145f3565b6040517f2ca650b2000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__90632ca650b29060640161135a565b6114576040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b61149b6040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6114df6040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6115236040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6115676040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b60008a8152600860205260408082208b83528183208b84528284208b85528385208b865294849020845160c0810190955283549395929491939091908690829082906115b29061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546115de9061506b565b801561162b5780601f106116005761010080835404028352916020019161162b565b820191906000526020600020905b81548152906001019060200180831161160e57829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c081019091528554919650908590829082906116979061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546116c39061506b565b80156117105780601f106116e557610100808354040283529160200191611710565b820191906000526020600020905b8154815290600101906020018083116116f357829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c0810190915284549195509084908290829061177c9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546117a89061506b565b80156117f55780601f106117ca576101008083540402835291602001916117f5565b820191906000526020600020905b8154815290600101906020018083116117d857829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c081019091528354919450908390829082906118619061506b565b80601f016020809104026020016040519081016040528092919081815260200182805461188d9061506b565b80156118da5780601f106118af576101008083540402835291602001916118da565b820191906000526020600020905b8154815290600101906020018083116118bd57829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c081019091528254919350908290829082906119469061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546119729061506b565b80156119bf5780601f10611994576101008083540402835291602001916119bf565b820191906000526020600020905b8154815290600101906020018083116119a257829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040820152600382015460608201526004820154608082015260059091015460ff16151560a090910152949f939e50919c509a509198509650505050505050565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b158015611a6657600080fd5b505af1158015611a7a573d6000803e3d6000fd5b50506040518481523392507f111d8408ae92d0b78f4d97697012bcdee255bb0e7615f3a011a759d4f80abfed915060200160405180910390a26040517f14e4f3310000000000000000000000000000000000000000000000000000000081526004808201526024810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906314e4f331906044015b60206040518083038186803b158015611b1e57600080fd5b505af4158015611b32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b5691906145f3565b92915050565b6040517fbd1d2c31000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063bd1d2c319060640161135a565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16611c505760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015611c9557600080fd5b505af1158015611ca9573d6000803e3d6000fd5b50505050336001600160a01b03167f67696076dd0093e34ea851b9556ffdb425ef250da860120eab4183b76e7cb2b087878787604051611cec9493929190614ce3565b60405180910390a26040517fdd54839e00000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063dd54839e90611d4c906004908a908a908a908a908501614df0565b60206040518083038186803b158015611d6457600080fd5b505af4158015611d78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d9c919061489f565b9695505050505050565b611dfb6040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611e506040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611ea56040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611efa6040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611f4f6040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b60008a8152600e60205260408082208b83528183208b84528284208b85528385208b865294849020845161010081019095528354939592949193909190869082908290611f9b9061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054611fc79061506b565b80156120145780601f10611fe957610100808354040283529160200191612014565b820191906000526020600020905b815481529060010190602001808311611ff757829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e0909101528051610100810190915285549196509085908290829061209d9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546120c99061506b565b80156121165780601f106120eb57610100808354040283529160200191612116565b820191906000526020600020905b8154815290600101906020018083116120f957829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e0909101528051610100810190915284549195509084908290829061219f9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546121cb9061506b565b80156122185780601f106121ed57610100808354040283529160200191612218565b820191906000526020600020905b8154815290600101906020018083116121fb57829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e090910152805161010081019091528354919450908390829082906122a19061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546122cd9061506b565b801561231a5780601f106122ef5761010080835404028352916020019161231a565b820191906000526020600020905b8154815290600101906020018083116122fd57829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e090910152805161010081019091528254919350908290829082906123a39061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546123cf9061506b565b801561241c5780601f106123f15761010080835404028352916020019161241c565b820191906000526020600020905b8154815290600101906020018083116123ff57829003601f168201915b505050918352505060018201546001600160a01b0381166020830152600160a01b900460ff908116151560408301526002830154606083015260038301546080830152600483015460a0830152600583015460c0830152600690920154909116151560e090910152949f939e50919c509a509198509650505050505050565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b1580156124e157600080fd5b505af11580156124f5573d6000803e3d6000fd5b50506040518481523392507fd1b02b10475a07f1767fa17ac24c11cb86236e52df9fbc8e2cd2662f470be9ac915060200160405180910390a26016546040517fca2f2aa00000000000000000000000000000000000000000000000000000000081526004808201526001600160a01b0390911660248201526044810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063ca2f2aa090606401611b06565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166126235760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b15801561266857600080fd5b505af115801561267c573d6000803e3d6000fd5b50505050336001600160a01b03167fe249461360e6eb5f99fc32e18970ea7e714fe4a6ae1bb2b802109ce1897551a385856040516126bb929190614ccf565b60405180910390a26040517ffe59ad1300000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063fe59ad139061271790600490889088908301614d96565b60206040518083038186803b15801561272f57600080fd5b505af4158015612743573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612767919061489f565b949350505050565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166127fa5760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b15801561283f57600080fd5b505af1158015612853573d6000803e3d6000fd5b50505050336001600160a01b03167f282a70c1093742e40fc04b5fcdaf156b8f7dc0f4daccc210e2826ab21ef52e2f8989604051612892929190614ccf565b60405180910390a26040517f67de66a200000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906367de66a2906128f6906004908c908c908c908c908c908c908701614db0565b60206040518083038186803b15801561290e57600080fd5b505af4158015612922573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612946919061489f565b98975050505050505050565b6015546001600160a01b031633146129925760405162461bcd60e51b815260206004820152600360248201526239333760e81b6044820152606401610705565b6016546040517f78d97c940000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152909116906378d97c9490602401600060405180830381600087803b1580156129f257600080fd5b505af1158015612a06573d6000803e3d6000fd5b505050506001600160a01b03166000908152600560205260409020805460ff19169055565b6016546001600160a01b03163314612a855760405162461bcd60e51b815260206004820152600360248201527f39353400000000000000000000000000000000000000000000000000000000006044820152606401610705565b6001600160a01b03166000908152600560205260409020805460ff19166001179055565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b158015612aef57600080fd5b505af1158015612b03573d6000803e3d6000fd5b50506040518481523392507f537cd2e3949e391193079a5700552e511e26e8feac335a6cdc444049ab35a90f915060200160405180910390a26040517fc824d8910000000000000000000000000000000000000000000000000000000081526004808201526024810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063c824d89190604401611b06565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16612c1e5760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015612c6357600080fd5b505af1158015612c77573d6000803e3d6000fd5b50506040805187815286151560208201523393507fe17beb8487c3e79865827ae14ef940fe858d8dd153cc7a4b25b041e2895e82f492500160405180910390a26040517fb943b0c100000000000000000000000000000000000000000000000000000000815260048082015260248101859052831515604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063b943b0c1906064015b60206040518083038186803b158015612d2a57600080fd5b505af4158015612d3e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276791906145f3565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16612ded5760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015612e3257600080fd5b505af1158015612e46573d6000803e3d6000fd5b50506040805187815286151560208201523393507ff98e7718ee4616550f38594da7703cb4a26dd80936283951d7741e86553e308692500160405180910390a26040517fc6ce9bfd00000000000000000000000000000000000000000000000000000000815260048082015260248101859052831515604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063c6ce9bfd90606401612d12565b6040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526000828152600a60205260409081902081516101808101909252805482908290612f6f9061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054612f9b9061506b565b8015612fe85780601f10612fbd57610100808354040283529160200191612fe8565b820191906000526020600020905b815481529060010190602001808311612fcb57829003601f168201915b505050918352505060018201546001600160a01b03166020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460ff808216151560c08401526101008083048216151560e0850152620100008304821615159084015263010000008204811615156101208401526401000000009091041615156101408201526007909101546101609091015292915050565b6130f6604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b61315d604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b6131c4604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b61322b604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b613292604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b60008a81526006602090815260408083208c84528184208c85528285208c86528386208c87529584902084516101408101909552835485526001840180549497939692959394919392889290840191906132eb9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546133179061506b565b80156133645780601f1061333957610100808354040283529160200191613364565b820191906000526020600020905b81548152906001019060200180831161334757829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b909304811615156080850152600385015460a0850152600485015460c0850152600585015416151560e084015260069093015461010090920191909152805161014081019091528654815260018701805493985090928792840191906134149061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546134409061506b565b801561348d5780601f106134625761010080835404028352916020019161348d565b820191906000526020600020905b81548152906001019060200180831161347057829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b909304811615156080850152600385015460a0850152600485015460c0850152600585015416151560e0840152600690930154610100909201919091528051610140810190915285548152600186018054939750909286928401919061353d9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546135699061506b565b80156135b65780601f1061358b576101008083540402835291602001916135b6565b820191906000526020600020905b81548152906001019060200180831161359957829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b909304811615156080850152600385015460a0850152600485015460c0850152600585015416151560e084015260069093015461010090920191909152805161014081019091528454815260018501805493965090928592840191906136669061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546136929061506b565b80156136df5780601f106136b4576101008083540402835291602001916136df565b820191906000526020600020905b8154815290600101906020018083116136c257829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b909304811615156080850152600385015460a0850152600485015460c0850152600585015416151560e0840152600690930154610100909201919091528051610140810190915283548152600184018054939550909284928401919061378f9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546137bb9061506b565b80156138085780601f106137dd57610100808354040283529160200191613808565b820191906000526020600020905b8154815290600101906020018083116137eb57829003601f168201915b505050918352505060028201546001600160a01b038116602083015260ff600160a01b8204811615156040840152600160a81b8204811615156060840152600160b01b909104811615156080830152600383015460a0830152600483015460c0830152600583015416151560e082015260069091015461010090910152949f939e50919c509a509198509650505050505050565b6138f16040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b6000828152600e6020526040908190208151610100810190925280548290829061391a9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546139469061506b565b80156139935780601f1061396857610100808354040283529160200191613993565b820191906000526020600020905b81548152906001019060200180831161397657829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b9091048116151560408301526002830154606083015260038301546080830152600483015460a0830152600583015460c0830152600690920154909116151560e09091015292915050565b60606004601001805480602002602001604051908101604052809291908181526020016000905b82821015610e7a57838290600052602060002090600702016040518061014001604052908160008201548152602001600182018054613a669061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054613a929061506b565b8015613adf5780601f10613ab457610100808354040283529160200191613adf565b820191906000526020600020905b815481529060010190602001808311613ac257829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b8304811615156040850152600160a81b8304811615156060850152600160b01b909204821615156080840152600384015460a0840152600484015460c08401526005840154909116151560e0830152600690920154610100909101529082526001929092019101613a28565b6016546040517f9a8b8c15000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b03909116604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__90639a8b8c159060640160006040518083038186803b158015613bef57600080fd5b505af4158015613c03573d6000803e3d6000fd5b5050505050565b6040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915260008a8152600a60205260408082208b83528183208b84528284208b85528385208b865294849020845161018081019095528354939592949193909190869082908290613e3b9061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054613e679061506b565b8015613eb45780601f10613e8957610100808354040283529160200191613eb4565b820191906000526020600020905b815481529060010190602001808311613e9757829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e0860152620100008304821615159085015263010000008204811615156101208501526401000000009091041615156101408301526007909201546101609091015280516101808101909152855491965090859082908290613f789061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054613fa49061506b565b8015613ff15780601f10613fc657610100808354040283529160200191613ff1565b820191906000526020600020905b815481529060010190602001808311613fd457829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e08601526201000083048216151590850152630100000082048116151561012085015264010000000090910416151561014083015260079092015461016090910152805161018081019091528454919550908490829082906140b59061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546140e19061506b565b801561412e5780601f106141035761010080835404028352916020019161412e565b820191906000526020600020905b81548152906001019060200180831161411157829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e08601526201000083048216151590850152630100000082048116151561012085015264010000000090910416151561014083015260079092015461016090910152805161018081019091528354919450908390829082906141f29061506b565b80601f016020809104026020016040519081016040528092919081815260200182805461421e9061506b565b801561426b5780601f106142405761010080835404028352916020019161426b565b820191906000526020600020905b81548152906001019060200180831161424e57829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e086015262010000830482161515908501526301000000820481161515610120850152640100000000909104161515610140830152600790920154610160909101528051610180810190915282549193509082908290829061432f9061506b565b80601f016020809104026020016040519081016040528092919081815260200182805461435b9061506b565b80156143a85780601f1061437d576101008083540402835291602001916143a8565b820191906000526020600020905b81548152906001019060200180831161438b57829003601f168201915b505050918352505060018201546001600160a01b03166020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460ff808216151560c08401526101008083048216151560e08501526201000083048216151590840152630100000082048116151561012084015264010000000090910416151561014082015260079091015461016090910152949f939e50919c509a509198509650505050505050565b82805461446c9061506b565b90600052602060002090601f01602090048101928261448e57600085556144d4565b82601f106144a757805160ff19168380011785556144d4565b828001600101855582156144d4579182015b828111156144d45782518255916020019190600101906144b9565b506144e09291506144e4565b5090565b5b808211156144e057600081556001016144e5565b8051614504816150bc565b919050565b8051614504816150d4565b60008083601f840112614525578182fd5b50813567ffffffffffffffff81111561453c578182fd5b60208301915083602082850101111561455457600080fd5b9250929050565b600082601f83011261456b578081fd5b815167ffffffffffffffff80821115614586576145866150a6565b604051601f8301601f19908116603f011681019082821181831017156145ae576145ae6150a6565b816040528381528660208588010111156145c6578485fd5b611d9c84602083016020890161503b565b6000602082840312156145e8578081fd5b8135610bcd816150bc565b600060208284031215614604578081fd5b8151610bcd816150d4565b60008060208385031215614621578081fd5b823567ffffffffffffffff811115614637578182fd5b61464385828601614514565b90969095509350505050565b60008060008060008060a08789031215614667578182fd5b863567ffffffffffffffff81111561467d578283fd5b61468989828a01614514565b909750955050602087013561469d816150d4565b935060408701356146ad816150d4565b925060608701356146bd816150d4565b80925050608087013590509295509295509295565b600080600080604085870312156146e7578384fd5b843567ffffffffffffffff808211156146fe578586fd5b61470a88838901614514565b90965094506020870135915080821115614722578384fd5b5061472f87828801614514565b95989497509550505050565b60008060008060608587031215614750578384fd5b843567ffffffffffffffff811115614766578485fd5b61477287828801614514565b90955093505060208501359150604085013561478d816150d4565b939692955090935050565b6000602082840312156147a9578081fd5b815167ffffffffffffffff808211156147c0578283fd5b9083019061014082860312156147d4578283fd5b6147dc615011565b825181526020830151828111156147f1578485fd5b6147fd8782860161455b565b60208301525061480f604084016144f9565b604082015261482060608401614509565b606082015261483160808401614509565b608082015261484260a08401614509565b60a082015260c083015160c082015260e083015160e0820152610100915061486b828401614509565b9181019190915261012091820151918101919091529392505050565b600060208284031215614898578081fd5b5035919050565b6000602082840312156148b0578081fd5b5051919050565b600080604083850312156148c9578182fd5b8235915060208301356148db816150bc565b809150509250929050565b600080604083850312156148f8578182fd5b8235915060208301356148db816150d4565b60008060006060848603121561491e578081fd5b833592506020840135614930816150d4565b91506040840135614940816150d4565b809150509250925092565b600080600080600060a08688031215614962578283fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000815180845260208085019450808401835b838110156149b457815187529582019590820190600101614998565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452614a0081602086016020860161503b565b601f01601f19169290920160200192915050565b6000610140825184526020830151816020860152614a34828601826149e8565b9150506040830151614a5160408601826001600160a01b03169052565b506060830151614a65606086018215159052565b506080830151614a79608086018215159052565b5060a0830151614a8d60a086018215159052565b5060c083015160c085015260e083015160e085015261010080840151614ab68287018215159052565b5050610120928301519390920192909252919050565b6000815160c08452614ae160c08501826149e8565b90506001600160a01b03602084015116602085015260408301516040850152606083015160608501526080830151608085015260a0830151151560a08501528091505092915050565b60006101008251818552614b40828601826149e8565b9150506001600160a01b036020840151166020850152604083015115156040850152606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e0830151151560e08501528091505092915050565b60006101808251818552614bb6828601826149e8565b9150506020830151614bd360208601826001600160a01b03169052565b5060408301516040850152606083015160608501526080830151608085015260a083015160a085015260c0830151614c0f60c086018215159052565b5060e0830151614c2360e086018215159052565b506101008381015115159085015261012080840151151590850152610140808401511515908501526101609283015192909301919091525090565b8183823760009101908152919050565b6000602080830181845280855180835260408601915060408160051b8701019250838701855b82811015614cc257603f19888603018452614cb0858351614a14565b94509285019290850190600101614c94565b5092979650505050505050565b6020815260006127676020830184866149bf565b606081526000614cf76060830186886149bf565b60208301949094525090151560409091015292915050565b602081526000610bcd60208301846149e8565b602081526000610bcd6020830184614a14565b60a081526000614d4860a0830188614a14565b8281036020840152614d5a8188614a14565b90508281036040840152614d6e8187614a14565b90508281036060840152614d828186614a14565b905082810360808401526129468185614a14565b83815260406020820152600061097d6040830184866149bf565b87815260c060208201526000614dca60c08301888a6149bf565b9515156040830152509215156060840152901515608083015260a0909101529392505050565b858152608060208201526000614e0a6080830186886149bf565b6040830194909452509015156060909101529392505050565b602081526000825160a06020840152614e3f60c0840182614985565b90506020840151601f1980858403016040860152614e5d8383614985565b92506040860151915080858403016060860152614e7a8383614985565b92506060860151915080858403016080860152614e978383614985565b925060808601519150808584030160a08601525061097d8282614985565b602081526000610bcd6020830184614acc565b60a081526000614edb60a0830188614acc565b8281036020840152614eed8188614acc565b90508281036040840152614f018187614acc565b90508281036060840152614f158186614acc565b905082810360808401526129468185614acc565b602081526000610bcd6020830184614b2a565b60a081526000614f4f60a0830188614b2a565b8281036020840152614f618188614b2a565b90508281036040840152614f758187614b2a565b90508281036060840152614f898186614b2a565b905082810360808401526129468185614b2a565b602081526000610bcd6020830184614ba0565b60a081526000614fc360a0830188614ba0565b8281036020840152614fd58188614ba0565b90508281036040840152614fe98187614ba0565b90508281036060840152614ffd8186614ba0565b905082810360808401526129468185614ba0565b604051610140810167ffffffffffffffff81118282101715615035576150356150a6565b60405290565b60005b8381101561505657818101518382015260200161503e565b83811115615065576000848401525b50505050565b600181811c9082168061507f57607f821691505b602082108114156150a057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146150d157600080fd5b50565b80151581146150d157600080fdfea264697066735822122024d7d5fb04b2f44600e6f6c64a6fccb749f6c8d7cac4a7caa645f345bd3209e664736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106102ad5760003560e01c806364894bb61161017b578063a5513a18116100d8578063d79950761161008c578063edbc975911610071578063edbc975914610651578063fdedbe9514610659578063fef7e50b1461066c57600080fd5b8063d799507614610629578063ea614f541461064957600080fd5b8063c42bca85116100bd578063c42bca85146105d2578063c9ddacbc146105e5578063d4865bed1461060557600080fd5b8063a5513a18146105ac578063a972d10b146105bf57600080fd5b806380e11be91161012f57806394b535ec1161011457806394b535ec1461057357806397c3ccd8146105865780639e6371ba1461059957600080fd5b806380e11be91461054d578063899e456c1461056057600080fd5b806371414ed31161016057806371414ed31461050e5780637331210c14610521578063747002181461052957600080fd5b806364894bb6146104f357806371110f391461050657600080fd5b806336ffa90511610229578063548c0ef4116101dd5780635e06f50f116101c25780635e06f50f146104a95780635f90dec4146104bc5780636127d22d146104e057600080fd5b8063548c0ef41461046357806356cf5358146104a157600080fd5b80634173b4171161020e5780634173b4171461042857806344443dea1461043d5780634d8b10a91461045057600080fd5b806336ffa905146104005780634112fdd01461041557600080fd5b80631d143848116102805780632165d997116102655780632165d997146103ab5780632b60c8bb146103cb5780632f370ba3146103eb57600080fd5b80631d1438481461036d5780631d8c89711461039857600080fd5b806302a08328146102b25780630e0d7f07146102c95780630fba4ca1146103455780631aecf6a01461035a575b600080fd5b6004545b6040519081526020015b60405180910390f35b6103356102d73660046145d7565b6002546040516bffffffffffffffffffffffff19606084901b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000908152600390925290205460ff169392505050565b60405190151581526020016102c0565b61035861035336600461460f565b610690565b005b61033561036836600461490a565b6107a7565b600054610380906001600160a01b031681565b6040516001600160a01b0390911681526020016102c0565b6103356103a63660046146d2565b610986565b6103be6103b93660046148e6565b610ab8565b6040516102c09190614d22565b6103de6103d9366004614887565b610bd4565b6040516102c09190614eb5565b6103f3610d09565b6040516102c09190614c6e565b610408610e83565b6040516102c09190614e23565b610358610423366004614887565b611084565b6104306110c9565b6040516102c09190614d0f565b6103be61044b366004614887565b61115e565b61033561045e3660046148b7565b6112f5565b61048f6104713660046145d7565b6001600160a01b031660009081526005602052604090205460ff1690565b60405160ff90911681526020016102c0565b6007546102b6565b6103356104b73660046148b7565b6113aa565b6104cf6104ca36600461494b565b611413565b6040516102c0959493929190614ec8565b6103356104ee366004614887565b611a20565b6103356105013660046148b7565b611b5c565b600b546102b6565b6102b661051c36600461473b565b611bc5565b6009546102b6565b61053c61053736600461494b565b611da6565b6040516102c0959493929190614f3c565b61033561055b366004614887565b61249b565b6102b661056e36600461460f565b612598565b6102b661058136600461464f565b61276f565b6103586105943660046145d7565b612952565b6103586105a73660046145d7565b612a2b565b6103356105ba366004614887565b612aa9565b6103356105cd3660046148e6565b612b93565b6103356105e03660046148e6565b612d62565b6105f86105f3366004614887565b612ee5565b6040516102c09190614f9d565b61061861061336600461494b565b61308f565b6040516102c0959493929190614d35565b61063c610637366004614887565b61389c565b6040516102c09190614f29565b6103f3613a01565b600f546102b6565b610358610667366004614887565b613b72565b61067f61067a36600461494b565b613c0a565b6040516102c0959493929190614fb0565b6002546040516106a69084908490602001614c5e565b604051602081830303815290604052805190602001201461070e5760405162461bcd60e51b815260206004820152600360248201527f393032000000000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6002546040516bffffffffffffffffffffffff193360601b166020820152603481019190915260009060540160408051808303601f190181528282528051602091820120818401835260018452600081815260039092528282209351845460ff191690151517909355905191925033917f79229b212fa3ea547fb5e5b66090cf250d442b12a51854a030f3b796d528134e9190a2505050565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166108325760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b15801561087757600080fd5b505af115801561088b573d6000803e3d6000fd5b50506040805188815287151560208201523393507f1a53dbc4afb4355dae75da1c738d7f9da8d47895ca9e52298a2f13edef1eeb9a92500160405180910390a26040517f42877fb7000000000000000000000000000000000000000000000000000000008152600480820152602481018690528415156044820152831515606482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906342877fb79060840160206040518083038186803b15801561094557600080fd5b505af4158015610959573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097d91906145f3565b95945050505050565b600080546001600160a01b031633146109e15760405162461bcd60e51b815260206004820152600360248201527f39303100000000000000000000000000000000000000000000000000000000006044820152606401610705565b6040805160606020601f88018190040282018101835291810186815290918291908890889081908501838280828437600092019190915250505090825250604051602091820191610a36918791879101614c5e565b60408051601f19818403018152919052805160209182012090915281518051600192610a66928492910190614460565b50602082015181600101559050507f9c1e1a17a78053ad78b3801837ad5e515d429987252f2e1371b7b50fa8ff8bec8585604051610aa5929190614ccf565b60405180910390a1506001949350505050565b610b1f604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b6040517faffad6f200000000000000000000000000000000000000000000000000000000815260048082015260248101849052821515604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063affad6f29060640160006040518083038186803b158015610b9157600080fd5b505af4158015610ba5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bcd9190810190614798565b9392505050565b610c186040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b60008281526008602052604090819020815160c08101909252805482908290610c409061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6c9061506b565b8015610cb95780601f10610c8e57610100808354040283529160200191610cb9565b820191906000526020600020905b815481529060010190602001808311610c9c57829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040820152600382015460608201526004820154608082015260059091015460ff16151560a09091015292915050565b60606004600f01805480602002602001604051908101604052809291908181526020016000905b82821015610e7a57838290600052602060002090600702016040518061014001604052908160008201548152602001600182018054610d6e9061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9a9061506b565b8015610de75780601f10610dbc57610100808354040283529160200191610de7565b820191906000526020600020905b815481529060010190602001808311610dca57829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b8304811615156040850152600160a81b8304811615156060850152600160b01b909204821615156080840152600384015460a0840152600484015460c08401526005840154909116151560e0830152600690920154610100909101529082526001929092019101610d30565b50505050905090565b610eb56040518060a0016040528060608152602001606081526020016060815260200160608152602001606081525090565b336000908152600d60209081526040918290208251815460c09381028201840190945260a081018481529093919284928491840182828015610f1657602002820191906000526020600020905b815481526020019060010190808311610f02575b5050505050815260200160018201805480602002602001604051908101604052809291908181526020018280548015610f6e57602002820191906000526020600020905b815481526020019060010190808311610f5a575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610fc657602002820191906000526020600020905b815481526020019060010190808311610fb2575b505050505081526020016003820180548060200260200160405190810160405280929190818152602001828054801561101e57602002820191906000526020600020905b81548152602001906001019080831161100a575b505050505081526020016004820180548060200260200160405190810160405280929190818152602001828054801561107657602002820191906000526020600020905b815481526020019060010190808311611062575b505050505081525050905090565b6015546001600160a01b031633146110c45760405162461bcd60e51b815260206004820152600360248201526239333760e81b6044820152606401610705565b600455565b6060600160000180546110db9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546111079061506b565b80156111545780601f1061112957610100808354040283529160200191611154565b820191906000526020600020905b81548152906001019060200180831161113757829003601f168201915b5050505050905090565b6111c5604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b600082815260066020908152604091829020825161014081019093528054835260018101805491928401916111f99061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546112259061506b565b80156112725780601f1061124757610100808354040283529160200191611272565b820191906000526020600020905b81548152906001019060200180831161125557829003601f168201915b505050918352505060028201546001600160a01b038116602083015260ff600160a01b8204811615156040840152600160a81b8204811615156060840152600160b01b909104811615156080830152600383015460a0830152600483015460c0830152600583015416151560e08201526006909101546101009091015292915050565b6040517ffd3e4768000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063fd3e4768906064015b60206040518083038186803b15801561137257600080fd5b505af4158015611386573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcd91906145f3565b6040517f2ca650b2000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__90632ca650b29060640161135a565b6114576040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b61149b6040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6114df6040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6115236040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6115676040518060c001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b60008a8152600860205260408082208b83528183208b84528284208b85528385208b865294849020845160c0810190955283549395929491939091908690829082906115b29061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546115de9061506b565b801561162b5780601f106116005761010080835404028352916020019161162b565b820191906000526020600020905b81548152906001019060200180831161160e57829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c081019091528554919650908590829082906116979061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546116c39061506b565b80156117105780601f106116e557610100808354040283529160200191611710565b820191906000526020600020905b8154815290600101906020018083116116f357829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c0810190915284549195509084908290829061177c9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546117a89061506b565b80156117f55780601f106117ca576101008083540402835291602001916117f5565b820191906000526020600020905b8154815290600101906020018083116117d857829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c081019091528354919450908390829082906118619061506b565b80601f016020809104026020016040519081016040528092919081815260200182805461188d9061506b565b80156118da5780601f106118af576101008083540402835291602001916118da565b820191906000526020600020905b8154815290600101906020018083116118bd57829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820154604080830191909152600383015460608301526004830154608083015260059092015460ff16151560a090910152805160c081019091528254919350908290829082906119469061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546119729061506b565b80156119bf5780601f10611994576101008083540402835291602001916119bf565b820191906000526020600020905b8154815290600101906020018083116119a257829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040820152600382015460608201526004820154608082015260059091015460ff16151560a090910152949f939e50919c509a509198509650505050505050565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b158015611a6657600080fd5b505af1158015611a7a573d6000803e3d6000fd5b50506040518481523392507f111d8408ae92d0b78f4d97697012bcdee255bb0e7615f3a011a759d4f80abfed915060200160405180910390a26040517f14e4f3310000000000000000000000000000000000000000000000000000000081526004808201526024810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906314e4f331906044015b60206040518083038186803b158015611b1e57600080fd5b505af4158015611b32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b5691906145f3565b92915050565b6040517fbd1d2c31000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b038216604482015260009073__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063bd1d2c319060640161135a565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16611c505760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015611c9557600080fd5b505af1158015611ca9573d6000803e3d6000fd5b50505050336001600160a01b03167f67696076dd0093e34ea851b9556ffdb425ef250da860120eab4183b76e7cb2b087878787604051611cec9493929190614ce3565b60405180910390a26040517fdd54839e00000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063dd54839e90611d4c906004908a908a908a908a908501614df0565b60206040518083038186803b158015611d6457600080fd5b505af4158015611d78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d9c919061489f565b9695505050505050565b611dfb6040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611e506040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611ea56040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611efa6040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b611f4f6040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b60008a8152600e60205260408082208b83528183208b84528284208b85528385208b865294849020845161010081019095528354939592949193909190869082908290611f9b9061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054611fc79061506b565b80156120145780601f10611fe957610100808354040283529160200191612014565b820191906000526020600020905b815481529060010190602001808311611ff757829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e0909101528051610100810190915285549196509085908290829061209d9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546120c99061506b565b80156121165780601f106120eb57610100808354040283529160200191612116565b820191906000526020600020905b8154815290600101906020018083116120f957829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e0909101528051610100810190915284549195509084908290829061219f9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546121cb9061506b565b80156122185780601f106121ed57610100808354040283529160200191612218565b820191906000526020600020905b8154815290600101906020018083116121fb57829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e090910152805161010081019091528354919450908390829082906122a19061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546122cd9061506b565b801561231a5780601f106122ef5761010080835404028352916020019161231a565b820191906000526020600020905b8154815290600101906020018083116122fd57829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b909104811615156040808401919091526002840154606084015260038401546080840152600484015460a0840152600584015460c084015260069093015416151560e090910152805161010081019091528254919350908290829082906123a39061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546123cf9061506b565b801561241c5780601f106123f15761010080835404028352916020019161241c565b820191906000526020600020905b8154815290600101906020018083116123ff57829003601f168201915b505050918352505060018201546001600160a01b0381166020830152600160a01b900460ff908116151560408301526002830154606083015260038301546080830152600483015460a0830152600583015460c0830152600690920154909116151560e090910152949f939e50919c509a509198509650505050505050565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b1580156124e157600080fd5b505af11580156124f5573d6000803e3d6000fd5b50506040518481523392507fd1b02b10475a07f1767fa17ac24c11cb86236e52df9fbc8e2cd2662f470be9ac915060200160405180910390a26016546040517fca2f2aa00000000000000000000000000000000000000000000000000000000081526004808201526001600160a01b0390911660248201526044810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063ca2f2aa090606401611b06565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166126235760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b15801561266857600080fd5b505af115801561267c573d6000803e3d6000fd5b50505050336001600160a01b03167fe249461360e6eb5f99fc32e18970ea7e714fe4a6ae1bb2b802109ce1897551a385856040516126bb929190614ccf565b60405180910390a26040517ffe59ad1300000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063fe59ad139061271790600490889088908301614d96565b60206040518083038186803b15801561272f57600080fd5b505af4158015612743573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612767919061489f565b949350505050565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166127fa5760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b15801561283f57600080fd5b505af1158015612853573d6000803e3d6000fd5b50505050336001600160a01b03167f282a70c1093742e40fc04b5fcdaf156b8f7dc0f4daccc210e2826ab21ef52e2f8989604051612892929190614ccf565b60405180910390a26040517f67de66a200000000000000000000000000000000000000000000000000000000815273__$284e1ffe9f2937f5412f1e8a04db4dc613$__906367de66a2906128f6906004908c908c908c908c908c908c908701614db0565b60206040518083038186803b15801561290e57600080fd5b505af4158015612922573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612946919061489f565b98975050505050505050565b6015546001600160a01b031633146129925760405162461bcd60e51b815260206004820152600360248201526239333760e81b6044820152606401610705565b6016546040517f78d97c940000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152909116906378d97c9490602401600060405180830381600087803b1580156129f257600080fd5b505af1158015612a06573d6000803e3d6000fd5b505050506001600160a01b03166000908152600560205260409020805460ff19169055565b6016546001600160a01b03163314612a855760405162461bcd60e51b815260206004820152600360248201527f39353400000000000000000000000000000000000000000000000000000000006044820152606401610705565b6001600160a01b03166000908152600560205260409020805460ff19166001179055565b60165460405163c695d24960e01b81523360048201526000916001600160a01b03169063c695d24990602401600060405180830381600087803b158015612aef57600080fd5b505af1158015612b03573d6000803e3d6000fd5b50506040518481523392507f537cd2e3949e391193079a5700552e511e26e8feac335a6cdc444049ab35a90f915060200160405180910390a26040517fc824d8910000000000000000000000000000000000000000000000000000000081526004808201526024810183905273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063c824d89190604401611b06565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16612c1e5760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015612c6357600080fd5b505af1158015612c77573d6000803e3d6000fd5b50506040805187815286151560208201523393507fe17beb8487c3e79865827ae14ef940fe858d8dd153cc7a4b25b041e2895e82f492500160405180910390a26040517fb943b0c100000000000000000000000000000000000000000000000000000000815260048082015260248101859052831515604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063b943b0c1906064015b60206040518083038186803b158015612d2a57600080fd5b505af4158015612d3e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276791906145f3565b6002546040516bffffffffffffffffffffffff193360601b1660208201526034810191909152600090819060540160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16612ded5760405162461bcd60e51b815260206004820152600360248201526239303360e81b6044820152606401610705565b60165460405163c695d24960e01b81523360048201526001600160a01b039091169063c695d24990602401600060405180830381600087803b158015612e3257600080fd5b505af1158015612e46573d6000803e3d6000fd5b50506040805187815286151560208201523393507ff98e7718ee4616550f38594da7703cb4a26dd80936283951d7741e86553e308692500160405180910390a26040517fc6ce9bfd00000000000000000000000000000000000000000000000000000000815260048082015260248101859052831515604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__9063c6ce9bfd90606401612d12565b6040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526000828152600a60205260409081902081516101808101909252805482908290612f6f9061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054612f9b9061506b565b8015612fe85780601f10612fbd57610100808354040283529160200191612fe8565b820191906000526020600020905b815481529060010190602001808311612fcb57829003601f168201915b505050918352505060018201546001600160a01b03166020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460ff808216151560c08401526101008083048216151560e0850152620100008304821615159084015263010000008204811615156101208401526401000000009091041615156101408201526007909101546101609091015292915050565b6130f6604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b61315d604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b6131c4604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b61322b604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b613292604051806101400160405280600081526020016060815260200160006001600160a01b031681526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b60008a81526006602090815260408083208c84528184208c85528285208c86528386208c87529584902084516101408101909552835485526001840180549497939692959394919392889290840191906132eb9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546133179061506b565b80156133645780601f1061333957610100808354040283529160200191613364565b820191906000526020600020905b81548152906001019060200180831161334757829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b909304811615156080850152600385015460a0850152600485015460c0850152600585015416151560e084015260069093015461010090920191909152805161014081019091528654815260018701805493985090928792840191906134149061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546134409061506b565b801561348d5780601f106134625761010080835404028352916020019161348d565b820191906000526020600020905b81548152906001019060200180831161347057829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b909304811615156080850152600385015460a0850152600485015460c0850152600585015416151560e0840152600690930154610100909201919091528051610140810190915285548152600186018054939750909286928401919061353d9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546135699061506b565b80156135b65780601f1061358b576101008083540402835291602001916135b6565b820191906000526020600020905b81548152906001019060200180831161359957829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b909304811615156080850152600385015460a0850152600485015460c0850152600585015416151560e084015260069093015461010090920191909152805161014081019091528454815260018501805493965090928592840191906136669061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546136929061506b565b80156136df5780601f106136b4576101008083540402835291602001916136df565b820191906000526020600020905b8154815290600101906020018083116136c257829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b830481161515604080860191909152600160a81b8404821615156060860152600160b01b909304811615156080850152600385015460a0850152600485015460c0850152600585015416151560e0840152600690930154610100909201919091528051610140810190915283548152600184018054939550909284928401919061378f9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546137bb9061506b565b80156138085780601f106137dd57610100808354040283529160200191613808565b820191906000526020600020905b8154815290600101906020018083116137eb57829003601f168201915b505050918352505060028201546001600160a01b038116602083015260ff600160a01b8204811615156040840152600160a81b8204811615156060840152600160b01b909104811615156080830152600383015460a0830152600483015460c0830152600583015416151560e082015260069091015461010090910152949f939e50919c509a509198509650505050505050565b6138f16040518061010001604052806060815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160008152602001600081526020016000151581525090565b6000828152600e6020526040908190208151610100810190925280548290829061391a9061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546139469061506b565b80156139935780601f1061396857610100808354040283529160200191613993565b820191906000526020600020905b81548152906001019060200180831161397657829003601f168201915b505050918352505060018201546001600160a01b038116602083015260ff600160a01b9091048116151560408301526002830154606083015260038301546080830152600483015460a0830152600583015460c0830152600690920154909116151560e09091015292915050565b60606004601001805480602002602001604051908101604052809291908181526020016000905b82821015610e7a57838290600052602060002090600702016040518061014001604052908160008201548152602001600182018054613a669061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054613a929061506b565b8015613adf5780601f10613ab457610100808354040283529160200191613adf565b820191906000526020600020905b815481529060010190602001808311613ac257829003601f168201915b505050918352505060028201546001600160a01b03811660208084019190915260ff600160a01b8304811615156040850152600160a81b8304811615156060850152600160b01b909204821615156080840152600384015460a0840152600484015460c08401526005840154909116151560e0830152600690920154610100909101529082526001929092019101613a28565b6016546040517f9a8b8c15000000000000000000000000000000000000000000000000000000008152600480820152602481018390526001600160a01b03909116604482015273__$284e1ffe9f2937f5412f1e8a04db4dc613$__90639a8b8c159060640160006040518083038186803b158015613bef57600080fd5b505af4158015613c03573d6000803e3d6000fd5b5050505050565b6040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526040805161018081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915260008a8152600a60205260408082208b83528183208b84528284208b85528385208b865294849020845161018081019095528354939592949193909190869082908290613e3b9061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054613e679061506b565b8015613eb45780601f10613e8957610100808354040283529160200191613eb4565b820191906000526020600020905b815481529060010190602001808311613e9757829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e0860152620100008304821615159085015263010000008204811615156101208501526401000000009091041615156101408301526007909201546101609091015280516101808101909152855491965090859082908290613f789061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054613fa49061506b565b8015613ff15780601f10613fc657610100808354040283529160200191613ff1565b820191906000526020600020905b815481529060010190602001808311613fd457829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e08601526201000083048216151590850152630100000082048116151561012085015264010000000090910416151561014083015260079092015461016090910152805161018081019091528454919550908490829082906140b59061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546140e19061506b565b801561412e5780601f106141035761010080835404028352916020019161412e565b820191906000526020600020905b81548152906001019060200180831161411157829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e08601526201000083048216151590850152630100000082048116151561012085015264010000000090910416151561014083015260079092015461016090910152805161018081019091528354919450908390829082906141f29061506b565b80601f016020809104026020016040519081016040528092919081815260200182805461421e9061506b565b801561426b5780601f106142405761010080835404028352916020019161426b565b820191906000526020600020905b81548152906001019060200180831161424e57829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040808301919091526003830154606083015260048301546080830152600583015460a0830152600683015460ff808216151560c08501526101008083048216151560e086015262010000830482161515908501526301000000820481161515610120850152640100000000909104161515610140830152600790920154610160909101528051610180810190915282549193509082908290829061432f9061506b565b80601f016020809104026020016040519081016040528092919081815260200182805461435b9061506b565b80156143a85780601f1061437d576101008083540402835291602001916143a8565b820191906000526020600020905b81548152906001019060200180831161438b57829003601f168201915b505050918352505060018201546001600160a01b03166020820152600282015460408201526003820154606082015260048201546080820152600582015460a0820152600682015460ff808216151560c08401526101008083048216151560e08501526201000083048216151590840152630100000082048116151561012084015264010000000090910416151561014082015260079091015461016090910152949f939e50919c509a509198509650505050505050565b82805461446c9061506b565b90600052602060002090601f01602090048101928261448e57600085556144d4565b82601f106144a757805160ff19168380011785556144d4565b828001600101855582156144d4579182015b828111156144d45782518255916020019190600101906144b9565b506144e09291506144e4565b5090565b5b808211156144e057600081556001016144e5565b8051614504816150bc565b919050565b8051614504816150d4565b60008083601f840112614525578182fd5b50813567ffffffffffffffff81111561453c578182fd5b60208301915083602082850101111561455457600080fd5b9250929050565b600082601f83011261456b578081fd5b815167ffffffffffffffff80821115614586576145866150a6565b604051601f8301601f19908116603f011681019082821181831017156145ae576145ae6150a6565b816040528381528660208588010111156145c6578485fd5b611d9c84602083016020890161503b565b6000602082840312156145e8578081fd5b8135610bcd816150bc565b600060208284031215614604578081fd5b8151610bcd816150d4565b60008060208385031215614621578081fd5b823567ffffffffffffffff811115614637578182fd5b61464385828601614514565b90969095509350505050565b60008060008060008060a08789031215614667578182fd5b863567ffffffffffffffff81111561467d578283fd5b61468989828a01614514565b909750955050602087013561469d816150d4565b935060408701356146ad816150d4565b925060608701356146bd816150d4565b80925050608087013590509295509295509295565b600080600080604085870312156146e7578384fd5b843567ffffffffffffffff808211156146fe578586fd5b61470a88838901614514565b90965094506020870135915080821115614722578384fd5b5061472f87828801614514565b95989497509550505050565b60008060008060608587031215614750578384fd5b843567ffffffffffffffff811115614766578485fd5b61477287828801614514565b90955093505060208501359150604085013561478d816150d4565b939692955090935050565b6000602082840312156147a9578081fd5b815167ffffffffffffffff808211156147c0578283fd5b9083019061014082860312156147d4578283fd5b6147dc615011565b825181526020830151828111156147f1578485fd5b6147fd8782860161455b565b60208301525061480f604084016144f9565b604082015261482060608401614509565b606082015261483160808401614509565b608082015261484260a08401614509565b60a082015260c083015160c082015260e083015160e0820152610100915061486b828401614509565b9181019190915261012091820151918101919091529392505050565b600060208284031215614898578081fd5b5035919050565b6000602082840312156148b0578081fd5b5051919050565b600080604083850312156148c9578182fd5b8235915060208301356148db816150bc565b809150509250929050565b600080604083850312156148f8578182fd5b8235915060208301356148db816150d4565b60008060006060848603121561491e578081fd5b833592506020840135614930816150d4565b91506040840135614940816150d4565b809150509250925092565b600080600080600060a08688031215614962578283fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000815180845260208085019450808401835b838110156149b457815187529582019590820190600101614998565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452614a0081602086016020860161503b565b601f01601f19169290920160200192915050565b6000610140825184526020830151816020860152614a34828601826149e8565b9150506040830151614a5160408601826001600160a01b03169052565b506060830151614a65606086018215159052565b506080830151614a79608086018215159052565b5060a0830151614a8d60a086018215159052565b5060c083015160c085015260e083015160e085015261010080840151614ab68287018215159052565b5050610120928301519390920192909252919050565b6000815160c08452614ae160c08501826149e8565b90506001600160a01b03602084015116602085015260408301516040850152606083015160608501526080830151608085015260a0830151151560a08501528091505092915050565b60006101008251818552614b40828601826149e8565b9150506001600160a01b036020840151166020850152604083015115156040850152606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e0830151151560e08501528091505092915050565b60006101808251818552614bb6828601826149e8565b9150506020830151614bd360208601826001600160a01b03169052565b5060408301516040850152606083015160608501526080830151608085015260a083015160a085015260c0830151614c0f60c086018215159052565b5060e0830151614c2360e086018215159052565b506101008381015115159085015261012080840151151590850152610140808401511515908501526101609283015192909301919091525090565b8183823760009101908152919050565b6000602080830181845280855180835260408601915060408160051b8701019250838701855b82811015614cc257603f19888603018452614cb0858351614a14565b94509285019290850190600101614c94565b5092979650505050505050565b6020815260006127676020830184866149bf565b606081526000614cf76060830186886149bf565b60208301949094525090151560409091015292915050565b602081526000610bcd60208301846149e8565b602081526000610bcd6020830184614a14565b60a081526000614d4860a0830188614a14565b8281036020840152614d5a8188614a14565b90508281036040840152614d6e8187614a14565b90508281036060840152614d828186614a14565b905082810360808401526129468185614a14565b83815260406020820152600061097d6040830184866149bf565b87815260c060208201526000614dca60c08301888a6149bf565b9515156040830152509215156060840152901515608083015260a0909101529392505050565b858152608060208201526000614e0a6080830186886149bf565b6040830194909452509015156060909101529392505050565b602081526000825160a06020840152614e3f60c0840182614985565b90506020840151601f1980858403016040860152614e5d8383614985565b92506040860151915080858403016060860152614e7a8383614985565b92506060860151915080858403016080860152614e978383614985565b925060808601519150808584030160a08601525061097d8282614985565b602081526000610bcd6020830184614acc565b60a081526000614edb60a0830188614acc565b8281036020840152614eed8188614acc565b90508281036040840152614f018187614acc565b90508281036060840152614f158186614acc565b905082810360808401526129468185614acc565b602081526000610bcd6020830184614b2a565b60a081526000614f4f60a0830188614b2a565b8281036020840152614f618188614b2a565b90508281036040840152614f758187614b2a565b90508281036060840152614f898186614b2a565b905082810360808401526129468185614b2a565b602081526000610bcd6020830184614ba0565b60a081526000614fc360a0830188614ba0565b8281036020840152614fd58188614ba0565b90508281036040840152614fe98187614ba0565b90508281036060840152614ffd8186614ba0565b905082810360808401526129468185614ba0565b604051610140810167ffffffffffffffff81118282101715615035576150356150a6565b60405290565b60005b8381101561505657818101518382015260200161503e565b83811115615065576000848401525b50505050565b600181811c9082168061507f57607f821691505b602082108114156150a057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146150d157600080fd5b50565b80151581146150d157600080fdfea264697066735822122024d7d5fb04b2f44600e6f6c64a6fccb749f6c8d7cac4a7caa645f345bd3209e664736f6c63430008040033",
  "linkReferences": {
    "contracts/libraries/CatalogDaoLib.sol": {
      "CatalogDaoLib": [
        {
          "length": 20,
          "start": 2543
        },
        {
          "length": 20,
          "start": 3131
        },
        {
          "length": 20,
          "start": 5147
        },
        {
          "length": 20,
          "start": 5328
        },
        {
          "length": 20,
          "start": 7111
        },
        {
          "length": 20,
          "start": 7298
        },
        {
          "length": 20,
          "start": 7675
        },
        {
          "length": 20,
          "start": 9813
        },
        {
          "length": 20,
          "start": 10186
        },
        {
          "length": 20,
          "start": 10657
        },
        {
          "length": 20,
          "start": 11344
        },
        {
          "length": 20,
          "start": 11731
        },
        {
          "length": 20,
          "start": 12194
        },
        {
          "length": 20,
          "start": 15513
        }
      ]
    }
  },
  "deployedLinkReferences": {
    "contracts/libraries/CatalogDaoLib.sol": {
      "CatalogDaoLib": [
        {
          "length": 20,
          "start": 2320
        },
        {
          "length": 20,
          "start": 2908
        },
        {
          "length": 20,
          "start": 4924
        },
        {
          "length": 20,
          "start": 5105
        },
        {
          "length": 20,
          "start": 6888
        },
        {
          "length": 20,
          "start": 7075
        },
        {
          "length": 20,
          "start": 7452
        },
        {
          "length": 20,
          "start": 9590
        },
        {
          "length": 20,
          "start": 9963
        },
        {
          "length": 20,
          "start": 10434
        },
        {
          "length": 20,
          "start": 11121
        },
        {
          "length": 20,
          "start": 11508
        },
        {
          "length": 20,
          "start": 11971
        },
        {
          "length": 20,
          "start": 15290
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
