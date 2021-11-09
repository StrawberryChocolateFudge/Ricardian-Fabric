const HRC20 = `{"_format": "hh-sol-artifact-1",
  "contractName": "HRC20",
  "sourceName": "contracts/examples/HRC20.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "initialSupply",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "_decimals",
          "type": "uint8"
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
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Burn",
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
          "indexed": false,
          "internalType": "string",
          "name": "url",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "value",
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
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
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
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "name": "decimals",
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
      "inputs": [],
      "name": "name",
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
      "inputs": [],
      "name": "symbol",
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
      "name": "totalSupply",
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
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162001fbd38038062001fbd833981810160405281019062000037919062000298565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660006101000a81548160ff021916908360ff160217905550600660009054906101000a900460ff1660ff16600a620000b39190620003f0565b82620000c091906200052d565b600781905550600754600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083600490805190602001906200012492919062000148565b5082600590805190602001906200013d92919062000148565b505050505062000726565b8280546200015690620005db565b90600052602060002090601f0160209004810192826200017a5760008555620001c6565b82601f106200019557805160ff1916838001178555620001c6565b82800160010185558215620001c6579182015b82811115620001c5578251825591602001919060010190620001a8565b5b509050620001d59190620001d9565b5090565b5b80821115620001f4576000816000905550600101620001da565b5090565b60006200020f62000209846200035f565b62000336565b9050828152602081018484840111156200022857600080fd5b62000235848285620005a5565b509392505050565b600082601f8301126200024f57600080fd5b815162000261848260208601620001f8565b91505092915050565b6000815190506200027b81620006f2565b92915050565b60008151905062000292816200070c565b92915050565b60008060008060808587031215620002af57600080fd5b600085015167ffffffffffffffff811115620002ca57600080fd5b620002d8878288016200023d565b945050602085015167ffffffffffffffff811115620002f657600080fd5b62000304878288016200023d565b935050604062000317878288016200026a565b92505060606200032a8782880162000281565b91505092959194509250565b60006200034262000355565b905062000350828262000611565b919050565b6000604051905090565b600067ffffffffffffffff8211156200037d576200037c620006a5565b5b6200038882620006d4565b9050602081019050919050565b6000808291508390505b6001851115620003e757808604811115620003bf57620003be62000647565b5b6001851615620003cf5780820291505b8081029050620003df85620006e5565b94506200039f565b94509492505050565b6000620003fd826200058e565b91506200040a836200058e565b9250620004397fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000441565b905092915050565b60008262000453576001905062000526565b8162000463576000905062000526565b81600181146200047c57600281146200048757620004bd565b600191505062000526565b60ff8411156200049c576200049b62000647565b5b8360020a915084821115620004b657620004b562000647565b5b5062000526565b5060208310610133831016604e8410600b8410161715620004f75782820a905083811115620004f157620004f062000647565b5b62000526565b62000506848484600162000395565b9250905081840481111562000520576200051f62000647565b5b81810290505b9392505050565b60006200053a826200058e565b915062000547836200058e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000583576200058262000647565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b60005b83811015620005c5578082015181840152602081019050620005a8565b83811115620005d5576000848401525b50505050565b60006002820490506001821680620005f457607f821691505b602082108114156200060b576200060a62000676565b5b50919050565b6200061c82620006d4565b810181811067ffffffffffffffff821117156200063e576200063d620006a5565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b620006fd816200058e565b81146200070957600080fd5b50565b620007178162000598565b81146200072357600080fd5b50565b61188780620007366000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806323b872dd1161008c57806370a082311161006657806370a082311461026157806395d89b4114610291578063a9059cbb146102af578063dd62ed3e146102df576100ea565b806323b872dd146101f5578063313ce567146102255780634173b41714610243576100ea565b80630fba4ca1116100c85780630fba4ca11461016d57806318160ddd146101895780631d143848146101a75780631d8c8971146101c5576100ea565b806306fdde03146100ef578063095ea7b31461010d5780630e0d7f071461013d575b600080fd5b6100f761030f565b604051610104919061149c565b60405180910390f35b61012760048036038101906101229190611192565b61039d565b6040516101349190611446565b60405180910390f35b610157600480360381019061015291906110de565b610523565b6040516101649190611446565b60405180910390f35b610187600480360381019061018291906111ce565b610581565b005b6101916106b0565b60405161019e919061151e565b60405180910390f35b6101af6106b6565b6040516101bc919061142b565b60405180910390f35b6101df60048036038101906101da9190611213565b6106da565b6040516101ec9190611446565b60405180910390f35b61020f600480360381019061020a9190611143565b610861565b60405161021c9190611446565b60405180910390f35b61022d610a29565b60405161023a9190611539565b60405180910390f35b61024b610a3c565b604051610258919061149c565b60405180910390f35b61027b600480360381019061027691906110de565b610ad1565b604051610288919061151e565b60405180910390f35b610299610ae9565b6040516102a6919061149c565b60405180910390f35b6102c960048036038101906102c49190611192565b610b77565b6040516102d69190611446565b60405180910390f35b6102f960048036038101906102f49190611107565b610c22565b604051610306919061151e565b60405180910390f35b6004805461031c906116a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610348906116a6565b80156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b505050505081565b6000803360018001546040516020016103b79291906113e6565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16610432576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610429906114be565b60405180910390fd5b82600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92585604051610510919061151e565b60405180910390a3600191505092915050565b60008082600180015460405160200161053d9291906113e6565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16915050919050565b60018001548282604051602001610599929190611412565b60405160208183030381529060405280519060200120146105ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e6906114de565b60405180910390fd5b60003360018001546040516020016106089291906113e6565b6040516020818303038152906040528051906020012090506040518060200160405280600115158152506003600083815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055509050503373ffffffffffffffffffffffffffffffffffffffff167f79229b212fa3ea547fb5e5b66090cf250d442b12a51854a030f3b796d528134e60405160405180910390a2505050565b60075481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461076b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610762906114fe565b60405180910390fd5b604051806040016040528086868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200184846040516020016107d3929190611412565b604051602081830303815290604052805190602001208152506001600082015181600001908051906020019061080a929190610fc7565b50602082015181600101559050507f3def438507a5fd65021c8d9fca0c88e39e657f8f3af16199c7a9f8046fc8e6e58585858560405161084d9493929190611461565b60405180910390a160019050949350505050565b60008033600180015460405160200161087b9291906113e6565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff166108f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ed906114be565b60405180910390fd5b600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483111561097f57600080fd5b82600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a0b91906115d1565b92505081905550610a1d858585610c47565b60019150509392505050565b600660009054906101000a900460ff1681565b606060016000018054610a4e906116a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7a906116a6565b8015610ac75780601f10610a9c57610100808354040283529160200191610ac7565b820191906000526020600020905b815481529060010190602001808311610aaa57829003601f168201915b5050505050905090565b60086020528060005260406000206000915090505481565b60058054610af6906116a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610b22906116a6565b8015610b6f5780601f10610b4457610100808354040283529160200191610b6f565b820191906000526020600020905b815481529060010190602001808311610b5257829003601f168201915b505050505081565b600080336001800154604051602001610b919291906113e6565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16610c0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c03906114be565b60405180910390fd5b610c17338585610c47565b600191505092915050565b6009602052816000526040600020602052806000526040600020600091509150505481565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c8157600080fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610ccd57600080fd5b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d58919061157b565b1015610d6357600080fd5b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610def919061157b565b905081600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e4091906115d1565b9250508190555081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e96919061157b565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610efa919061151e565b60405180910390a380600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8d919061157b565b14610fc1577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b50505050565b828054610fd3906116a6565b90600052602060002090601f016020900481019282610ff5576000855561103c565b82601f1061100e57805160ff191683800117855561103c565b8280016001018555821561103c579182015b8281111561103b578251825591602001919060010190611020565b5b509050611049919061104d565b5090565b5b8082111561106657600081600090555060010161104e565b5090565b60008135905061107981611823565b92915050565b60008083601f84011261109157600080fd5b8235905067ffffffffffffffff8111156110aa57600080fd5b6020830191508360018202830111156110c257600080fd5b9250929050565b6000813590506110d88161183a565b92915050565b6000602082840312156110f057600080fd5b60006110fe8482850161106a565b91505092915050565b6000806040838503121561111a57600080fd5b60006111288582860161106a565b92505060206111398582860161106a565b9150509250929050565b60008060006060848603121561115857600080fd5b60006111668682870161106a565b93505060206111778682870161106a565b9250506040611188868287016110c9565b9150509250925092565b600080604083850312156111a557600080fd5b60006111b38582860161106a565b92505060206111c4858286016110c9565b9150509250929050565b600080602083850312156111e157600080fd5b600083013567ffffffffffffffff8111156111fb57600080fd5b6112078582860161107f565b92509250509250929050565b6000806000806040858703121561122957600080fd5b600085013567ffffffffffffffff81111561124357600080fd5b61124f8782880161107f565b9450945050602085013567ffffffffffffffff81111561126e57600080fd5b61127a8782880161107f565b925092505092959194509250565b61129181611605565b82525050565b6112a86112a382611605565b6116d8565b82525050565b6112b781611617565b82525050565b6112ce6112c982611623565b6116ea565b82525050565b60006112e0838561155f565b93506112ed838584611664565b6112f683611764565b840190509392505050565b600061130d8385611570565b935061131a838584611664565b82840190509392505050565b600061133182611554565b61133b818561155f565b935061134b818560208601611673565b61135481611764565b840191505092915050565b600061136c60218361155f565b915061137782611782565b604082019050919050565b600061138f600d8361155f565b915061139a826117d1565b602082019050919050565b60006113b260208361155f565b91506113bd826117fa565b602082019050919050565b6113d18161164d565b82525050565b6113e081611657565b82525050565b60006113f28285611297565b60148201915061140282846112bd565b6020820191508190509392505050565b600061141f828486611301565b91508190509392505050565b60006020820190506114406000830184611288565b92915050565b600060208201905061145b60008301846112ae565b92915050565b6000604082019050818103600083015261147c8186886112d4565b905081810360208301526114918184866112d4565b905095945050505050565b600060208201905081810360008301526114b68184611326565b905092915050565b600060208201905081810360008301526114d78161135f565b9050919050565b600060208201905081810360008301526114f781611382565b9050919050565b60006020820190508181036000830152611517816113a5565b9050919050565b600060208201905061153360008301846113c8565b92915050565b600060208201905061154e60008301846113d7565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006115868261164d565b91506115918361164d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115c6576115c5611706565b5b828201905092915050565b60006115dc8261164d565b91506115e78361164d565b9250828210156115fa576115f9611706565b5b828203905092915050565b60006116108261162d565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015611691578082015181840152602081019050611676565b838111156116a0576000848401525b50505050565b600060028204905060018216806116be57607f821691505b602082108114156116d2576116d1611735565b5b50919050565b60006116e3826116f4565b9050919050565b6000819050919050565b60006116ff82611775565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f596f75206d7573742061636365707420746865207465726d732066697273742e60008201527f2e00000000000000000000000000000000000000000000000000000000000000602082015250565b7f496e76616c6964207465726d7300000000000000000000000000000000000000600082015250565b7f4f6e6c7920746865206465706c6f7965722063616e2063616c6c20746869732e600082015250565b61182c81611605565b811461183757600080fd5b50565b6118438161164d565b811461184e57600080fd5b5056fea2646970667358221220db3ecace4add94606ae9886f5fd1fafa0c4067881baf125e7f135fc3559ccac864736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c806323b872dd1161008c57806370a082311161006657806370a082311461026157806395d89b4114610291578063a9059cbb146102af578063dd62ed3e146102df576100ea565b806323b872dd146101f5578063313ce567146102255780634173b41714610243576100ea565b80630fba4ca1116100c85780630fba4ca11461016d57806318160ddd146101895780631d143848146101a75780631d8c8971146101c5576100ea565b806306fdde03146100ef578063095ea7b31461010d5780630e0d7f071461013d575b600080fd5b6100f761030f565b604051610104919061149c565b60405180910390f35b61012760048036038101906101229190611192565b61039d565b6040516101349190611446565b60405180910390f35b610157600480360381019061015291906110de565b610523565b6040516101649190611446565b60405180910390f35b610187600480360381019061018291906111ce565b610581565b005b6101916106b0565b60405161019e919061151e565b60405180910390f35b6101af6106b6565b6040516101bc919061142b565b60405180910390f35b6101df60048036038101906101da9190611213565b6106da565b6040516101ec9190611446565b60405180910390f35b61020f600480360381019061020a9190611143565b610861565b60405161021c9190611446565b60405180910390f35b61022d610a29565b60405161023a9190611539565b60405180910390f35b61024b610a3c565b604051610258919061149c565b60405180910390f35b61027b600480360381019061027691906110de565b610ad1565b604051610288919061151e565b60405180910390f35b610299610ae9565b6040516102a6919061149c565b60405180910390f35b6102c960048036038101906102c49190611192565b610b77565b6040516102d69190611446565b60405180910390f35b6102f960048036038101906102f49190611107565b610c22565b604051610306919061151e565b60405180910390f35b6004805461031c906116a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610348906116a6565b80156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b505050505081565b6000803360018001546040516020016103b79291906113e6565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16610432576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610429906114be565b60405180910390fd5b82600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92585604051610510919061151e565b60405180910390a3600191505092915050565b60008082600180015460405160200161053d9291906113e6565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16915050919050565b60018001548282604051602001610599929190611412565b60405160208183030381529060405280519060200120146105ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e6906114de565b60405180910390fd5b60003360018001546040516020016106089291906113e6565b6040516020818303038152906040528051906020012090506040518060200160405280600115158152506003600083815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055509050503373ffffffffffffffffffffffffffffffffffffffff167f79229b212fa3ea547fb5e5b66090cf250d442b12a51854a030f3b796d528134e60405160405180910390a2505050565b60075481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461076b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610762906114fe565b60405180910390fd5b604051806040016040528086868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200184846040516020016107d3929190611412565b604051602081830303815290604052805190602001208152506001600082015181600001908051906020019061080a929190610fc7565b50602082015181600101559050507f3def438507a5fd65021c8d9fca0c88e39e657f8f3af16199c7a9f8046fc8e6e58585858560405161084d9493929190611461565b60405180910390a160019050949350505050565b60008033600180015460405160200161087b9291906113e6565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff166108f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ed906114be565b60405180910390fd5b600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483111561097f57600080fd5b82600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a0b91906115d1565b92505081905550610a1d858585610c47565b60019150509392505050565b600660009054906101000a900460ff1681565b606060016000018054610a4e906116a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7a906116a6565b8015610ac75780601f10610a9c57610100808354040283529160200191610ac7565b820191906000526020600020905b815481529060010190602001808311610aaa57829003601f168201915b5050505050905090565b60086020528060005260406000206000915090505481565b60058054610af6906116a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610b22906116a6565b8015610b6f5780601f10610b4457610100808354040283529160200191610b6f565b820191906000526020600020905b815481529060010190602001808311610b5257829003601f168201915b505050505081565b600080336001800154604051602001610b919291906113e6565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060000160009054906101000a900460ff16610c0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c03906114be565b60405180910390fd5b610c17338585610c47565b600191505092915050565b6009602052816000526040600020602052806000526040600020600091509150505481565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c8157600080fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610ccd57600080fd5b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d58919061157b565b1015610d6357600080fd5b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610def919061157b565b905081600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e4091906115d1565b9250508190555081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e96919061157b565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610efa919061151e565b60405180910390a380600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8d919061157b565b14610fc1577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b50505050565b828054610fd3906116a6565b90600052602060002090601f016020900481019282610ff5576000855561103c565b82601f1061100e57805160ff191683800117855561103c565b8280016001018555821561103c579182015b8281111561103b578251825591602001919060010190611020565b5b509050611049919061104d565b5090565b5b8082111561106657600081600090555060010161104e565b5090565b60008135905061107981611823565b92915050565b60008083601f84011261109157600080fd5b8235905067ffffffffffffffff8111156110aa57600080fd5b6020830191508360018202830111156110c257600080fd5b9250929050565b6000813590506110d88161183a565b92915050565b6000602082840312156110f057600080fd5b60006110fe8482850161106a565b91505092915050565b6000806040838503121561111a57600080fd5b60006111288582860161106a565b92505060206111398582860161106a565b9150509250929050565b60008060006060848603121561115857600080fd5b60006111668682870161106a565b93505060206111778682870161106a565b9250506040611188868287016110c9565b9150509250925092565b600080604083850312156111a557600080fd5b60006111b38582860161106a565b92505060206111c4858286016110c9565b9150509250929050565b600080602083850312156111e157600080fd5b600083013567ffffffffffffffff8111156111fb57600080fd5b6112078582860161107f565b92509250509250929050565b6000806000806040858703121561122957600080fd5b600085013567ffffffffffffffff81111561124357600080fd5b61124f8782880161107f565b9450945050602085013567ffffffffffffffff81111561126e57600080fd5b61127a8782880161107f565b925092505092959194509250565b61129181611605565b82525050565b6112a86112a382611605565b6116d8565b82525050565b6112b781611617565b82525050565b6112ce6112c982611623565b6116ea565b82525050565b60006112e0838561155f565b93506112ed838584611664565b6112f683611764565b840190509392505050565b600061130d8385611570565b935061131a838584611664565b82840190509392505050565b600061133182611554565b61133b818561155f565b935061134b818560208601611673565b61135481611764565b840191505092915050565b600061136c60218361155f565b915061137782611782565b604082019050919050565b600061138f600d8361155f565b915061139a826117d1565b602082019050919050565b60006113b260208361155f565b91506113bd826117fa565b602082019050919050565b6113d18161164d565b82525050565b6113e081611657565b82525050565b60006113f28285611297565b60148201915061140282846112bd565b6020820191508190509392505050565b600061141f828486611301565b91508190509392505050565b60006020820190506114406000830184611288565b92915050565b600060208201905061145b60008301846112ae565b92915050565b6000604082019050818103600083015261147c8186886112d4565b905081810360208301526114918184866112d4565b905095945050505050565b600060208201905081810360008301526114b68184611326565b905092915050565b600060208201905081810360008301526114d78161135f565b9050919050565b600060208201905081810360008301526114f781611382565b9050919050565b60006020820190508181036000830152611517816113a5565b9050919050565b600060208201905061153360008301846113c8565b92915050565b600060208201905061154e60008301846113d7565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006115868261164d565b91506115918361164d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115c6576115c5611706565b5b828201905092915050565b60006115dc8261164d565b91506115e78361164d565b9250828210156115fa576115f9611706565b5b828203905092915050565b60006116108261162d565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015611691578082015181840152602081019050611676565b838111156116a0576000848401525b50505050565b600060028204905060018216806116be57607f821691505b602082108114156116d2576116d1611735565b5b50919050565b60006116e3826116f4565b9050919050565b6000819050919050565b60006116ff82611775565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f596f75206d7573742061636365707420746865207465726d732066697273742e60008201527f2e00000000000000000000000000000000000000000000000000000000000000602082015250565b7f496e76616c6964207465726d7300000000000000000000000000000000000000600082015250565b7f4f6e6c7920746865206465706c6f7965722063616e2063616c6c20746869732e600082015250565b61182c81611605565b811461183757600080fd5b50565b6118438161164d565b811461184e57600080fd5b5056fea2646970667358221220db3ecace4add94606ae9886f5fd1fafa0c4067881baf125e7f135fc3559ccac864736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}`;

export const getHRC20Abi = () => {
  return JSON.parse(HRC20).abi;
};

export const getHRC20Bytecode = () => {
  return JSON.parse(HRC20).bytecode;
};
