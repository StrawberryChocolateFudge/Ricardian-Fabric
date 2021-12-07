import { dispatch } from "../dispatch/dispatch";
import {
  dispatch_attachDateClickListener,
  dispatch_catalogPage,
  dispatch_hidePopup,
  dispatch_permapinPopup,
  dispatch_permawebselectActions,
  dispatch_renderAcceptButton,
  dispatch_renderAddress,
  dispatch_renderAreYouSure,
  dispatch_renderBalance,
  dispatch_renderCreate,
  dispatch_renderCreateProposalPage,
  dispatch_renderDocXDropper,
  dispatch_renderMenu,
  dispatch_renderReviewAndVotePage,
  dispatch_renderTerms,
  dispatch_renderTransferPage,
  dispatch_renderUploadFilePopup,
  dispatch_renderVerifyContract,
  dispatch_showAccountPopup,
  dispatch_sideBar,
  dispatch_switch_Accounts,
  dispatch_uploadProposal,
  dispatch_walletPopup,
} from "../dispatch/render";
import {
  ContractTypes,
  PageState,
  PopupState,
  ProposalType,
  SetHookArgs,
  State,
  StateProperties,
} from "../types";

export const setStateHook = {
  [StateProperties.init]: (args: SetHookArgs) => {
    const currentPage = args.obj.contracttype;
    const clone = cloneState(args.obj);
    if (currentPage === ContractTypes.create) {
      dispatch_sideBar(clone);
      dispatch_renderMenu(clone);
      // showBanner();
      
    } else if (currentPage === ContractTypes.acceptable) {
      dispatch_renderAcceptButton(clone);
    }
  },
  [StateProperties.ipfs]: (args: SetHookArgs) => {},
  [StateProperties.editor]: (args: SetHookArgs) => {},
  [StateProperties.balance]: (args: SetHookArgs) => {
    dispatch_renderBalance(cloneState(args.obj));
  },
  [StateProperties.address]: (args: SetHookArgs) => {
    dispatch_renderAddress(cloneState(args.obj));
  },
  [StateProperties.selectedDate]: (args: SetHookArgs) => {
    dispatch_attachDateClickListener(cloneState(args.obj));
  },
  [StateProperties.stashedPage]: (args: SetHookArgs) => {
    //Show popup
    dispatch_renderAreYouSure(cloneState(args.obj));
  },
  [StateProperties.stashedDetails]: (args: SetHookArgs) => {
    // I'm dispatching stashDetails before stashedPage so the details are passed in the above .stashedPage hook.
  },
  [StateProperties.position]: (args: SetHookArgs) => {
    // This happens only on acceptable pages
    dispatch_renderAcceptButton(cloneState(args.obj));
  },
  [StateProperties.selectedWallet]: (args: SetHookArgs) => {
    if (args.obj.contracttype === ContractTypes.create) {
      const clone = cloneState(args.obj);
      //TODO: This is not working right now,
      // there could be a bug if used because createPage has the editor locally and this will reinitialize it/
      // dispatch_renderCreateButton(clone);
    }
  },
  [StateProperties.Account]: (args: SetHookArgs) => {
    const clone: State = cloneState(args.obj);
    dispatch_permawebselectActions(clone);
  },
  [StateProperties.ipfsCID]: (args: SetHookArgs) => {},
  [StateProperties.popupState]: (args: SetHookArgs) => {
    const clone = cloneState(args.obj);
    switch (args.value) {
      case PopupState.NONE:
        dispatch_hidePopup();
        break;
      case PopupState.ImportTemplate:
        dispatch_renderDocXDropper(clone);
        break;
      case PopupState.Terms:
        dispatch_renderTerms();
        break;
      case PopupState.ShowAccount:
        dispatch_showAccountPopup(
          clone,
          clone.Account.balance,
          clone.Account.address
        );
        break;
      case PopupState.NewAccount:
        dispatch_walletPopup(clone);
        break;
      case PopupState.SwitchAccount:
        dispatch_switch_Accounts(clone);
        break;
      case PopupState.TransferAr:
        dispatch_renderTransferPage({
          ...clone,
        });
        break;
      case PopupState.UploadFile:
        dispatch_renderUploadFilePopup(clone);
        break;
      case PopupState.Permapin:
        dispatch_permapinPopup(clone, clone.ipfsCID);
        break;
      case PopupState.UploadProposal:
        dispatch_uploadProposal(clone);
        break;
      default:
        break;
    }
  },
  [StateProperties.pageState]: (args: SetHookArgs) => {
    const clone = cloneState(args.obj);
    switch (args.value) {
      case PageState.Menu:
        dispatch_renderMenu(clone);
        break;
      case PageState.CreateRicardian:
        dispatch_renderCreate(clone);
        break;
      case PageState.Catalog:
        dispatch_catalogPage(clone);
        break;
      case PageState.VerifyContract:
        dispatch_renderVerifyContract(clone);
        break;
      case PageState.Proposals:
        dispatch_renderCreateProposalPage(clone);
        dispatch_permawebselectActions(clone);
        break;
      case PageState.ReviewAndVote:
        dispatch_renderReviewAndVotePage(clone);
        break;
      case PageState.Staking:
        break;
      default:
        break;
    }
  },
  [StateProperties.proposalType]: (args: SetHookArgs) => {
    const clone = cloneState(args.obj);
    dispatch_renderCreateProposalPage(clone);
    if (args.value === ProposalType.NewSmartContract) {
      dispatch_permawebselectActions(clone);
    }
  },
};

function cloneState(state: State) {
  return Object.assign({}, state);
}
